'use strict'

const { InstanceBase, Regex, runEntrypoint, InstanceStatus } = require('@companion-module/base')
const OSC = require('osc')
const UpdateActions = require('./actions')
const UpdateFeedbacks = require('./feedbacks')
const UpdateVariables = require('./variables')
const UpdatePresets = require('./presets')
const UpgradeScripts = require('./upgrades')

class JCounterModule extends InstanceBase {
  constructor(internal) {
    super(internal)
    this.timers = []
    this.pendingSnapshot = null
    this.osc = null
    this.socketReady = false
    this.pollTimer = null
    this.lastSeen = 0
    this.isConnected = false
    this.choicesSignature = ''
    this.messageActive = false
    this.messageState = { active: false, template: 0, text: '', remaining: 0, displays: '', web: false }
    this.blackoutActive = false
    this.ndiState = { running: false, connections: 0, display: 1, alpha: true, audio: true, name: '' }
    this.pendingExtended = null
  }

  async init(config) {
    this.config = config
    this.updateStatus(InstanceStatus.Connecting)
    this.updateDefinitions()
    this.startUdp()
  }

  updateDefinitions() {
    UpdateVariables(this)
    UpdateActions(this)
    UpdateFeedbacks(this)
    UpdatePresets(this)
    UpdateVariables.update(this)
  }

  getTimerChoices() {
    const numbers = Array.from({ length: 8 }, (_, i) => ({
      id: String(i + 1), label: `Position ${i + 1}`,
    }))
    const discovered = this.timers.map((t) => ({
      id: t.id, label: `${t.position}: ${t.name} (${t.mode})`,
    }))
    return [...numbers, ...discovered]
  }

  resolveTimer(selection) {
    const value = String(selection ?? '')
    if (/^[1-8]$/.test(value)) return this.timers[Number(value) - 1] || null
    return this.timers.find((t) => t.id === value) || null
  }

  sendOsc(address, args = []) {
    const host = this.config?.host
    const port = Number(this.config?.port) || 7802
    if (!host || !this.osc || !this.socketReady) return
    try {
      const typedArgs = args.map((value) => Number.isInteger(value)
        ? { type: 'i', value }
        : { type: 's', value: String(value) })
      this.osc.send({ address, args: typedArgs }, host, port)
    } catch (error) {
      this.log('warn', `OSC send failed: ${error.message}`)
    }
  }

  sendTimer(selection, operation, args = []) {
    const value = String(selection ?? '')
    // Stable ID: survives title and position changes. Position addresses are
    // also supported for direct OSC integrations / stock Companion presets.
    if (!/^[a-f0-9]{32}$/i.test(value) && !/^[1-8]$/.test(value)) return
    this.sendOsc(`/jcounter/timer/${value}/${operation}`, args)
  }

  startUdp() {
    this.closeUdp()
    const host = this.config?.host
    const localPort = Number(this.config?.feedbackPort) || 7803
    if (!host || !Number.isInteger(localPort) || localPort < 1024 || localPort > 65535) {
      this.updateStatus(InstanceStatus.BadConfig, 'Enter J-Counter IP and valid feedback port')
      return
    }
    this.osc = new OSC.UDPPort({
      localAddress: '0.0.0.0',
      localPort,
      metadata: true,
      unpackSingleArgs: false,
    })
    this.osc.on('ready', () => {
      this.socketReady = true
      this.sendOsc('/jcounter/subscribe', [localPort])
      this.pollTimer = setInterval(() => {
        this.sendOsc('/jcounter/subscribe', [localPort])
        if (this.isConnected && Date.now() - this.lastSeen > 8000) {
          this.isConnected = false
          this.timers = []
          this.updateStatus(InstanceStatus.ConnectionFailure, 'J-Counter OSC not responding')
          UpdateVariables.update(this)
          this.checkFeedbacks()
        }
      }, 3000)
    })
    this.osc.on('message', (message) => this.onMessage(message))
    this.osc.on('error', (error) => {
      this.log('error', `OSC socket error: ${error.message}`)
      this.updateStatus(InstanceStatus.ConnectionFailure, `OSC: ${error.message}`)
    })
    this.osc.open()
  }

  onMessage(msg) {
    // OSC.js metadata is enabled to ensure commands use real OSC int32 types.
    // Leave incoming arguments in a consistent array, even for one value.
    const items = Array.isArray(msg.args) ? msg.args : msg.args == null ? [] : [msg.args]
    const args = items.map((item) => item && typeof item === 'object' && 'value' in item ? item.value : item)
    if (msg.address === '/jcounter/error') {
      this.log('warn', `J-Counter rejected OSC command: ${args.join(' — ')}`)
      return
    }
    if (msg.address === '/jcounter/blackout/state') {
      if (args.length >= 1) {
        this.blackoutActive = Number(args[0]) === 1
        UpdateVariables.update(this)
        this.checkFeedbacks()
      }
      return
    }
    if (msg.address === '/jcounter/message/state') {
      if (args.length >= 1) {
        const active = Number(args[0]) === 1
        this.messageActive = active
        this.messageState = {
          active,
          template: Number(args[1] || 0),
          text: String(args[2] || ''),
          remaining: Number(args[3] ?? 0),
          displays: String(args[4] || ''),
          web: Number(args[5] || 0) === 1,
        }
        UpdateVariables.update(this)
        this.checkFeedbacks()
      }
      return
    }
    if (msg.address === '/jcounter/ndi/state') {
      if (args.length >= 1) {
        this.ndiState = {
          running: Number(args[0]) === 1,
          connections: Number(args[1] || 0),
          display: Number(args[2] || 1),
          alpha: Number(args[3] || 0) === 1,
          audio: Number(args[4] || 0) === 1,
          name: String(args[5] || ''),
        }
        UpdateVariables.update(this)
        this.checkFeedbacks()
      }
      return
    }
    if (msg.address === '/jcounter/hello') {
      if (args[0] !== '3.0') {
        this.updateStatus(InstanceStatus.ConnectionFailure, 'Unsupported J-Counter OSC protocol')
        return
      }
      this.lastSeen = Date.now()
      if (!this.isConnected) {
        this.isConnected = true
        this.updateStatus(InstanceStatus.Ok)
        UpdateVariables.update(this)
      }
      this.pendingSnapshot = new Map()
      this.pendingExtended = new Map()
      return
    }
    if (msg.address === '/jcounter/timer/extended') {
      if (!this.pendingSnapshot || args.length < 9 ||
          typeof args[0] !== 'string' || !/^[a-f0-9]{32}$/i.test(args[0])) return
      const ext = {
        progressVisible: Number(args[1]) === 1,
        progressPercent: Math.max(0, Math.min(100, Number(args[2]) || 0)),
        endAt: String(args[3] || ''),
        smpteActive: Number(args[4]) === 1,
        smpteRate: String(args[5] || ''),
        externalTitle: String(args[6] || ''),
        externalTimeMode: String(args[7] || ''),
        externalConnection: String(args[8] || ''),
      }
      const timer = this.pendingSnapshot.get(args[0])
      if (timer) Object.assign(timer, ext)
      else this.pendingExtended?.set(args[0], ext)
      return
    }
    if (msg.address === '/jcounter/timer/state') {
      if (!this.pendingSnapshot || args.length < 13 ||
          typeof args[0] !== 'string' || !/^[a-f0-9]{32}$/i.test(args[0])) return
      const timer = {
        id: args[0], name: String(args[1]), mode: String(args[2]),
        time: String(args[3]), status: String(args[4]), round: String(args[5]),
        roundNumber: Number(args[6]), roundCount: Number(args[7]), loop: Number(args[8]) === 1,
        background: String(args[9]), timeColor: String(args[10]), visible: Number(args[11]) === 1,
        position: Number(args[12]),
      }
      if (timer.position < 1 || timer.position > 8) return
      const ext = this.pendingExtended?.get(timer.id)
      if (ext) Object.assign(timer, ext)
      else {
        const previous = this.timers.find((old) => old.id === timer.id)
        if (previous) {
          for (const key of ['progressVisible', 'progressPercent', 'endAt', 'smpteActive',
            'smpteRate', 'externalTitle', 'externalTimeMode', 'externalConnection']) {
            if (key in previous) timer[key] = previous[key]
          }
        }
      }
      this.pendingSnapshot.set(timer.id, timer)
      return
    }
    if (msg.address === '/jcounter/timers/end') {
      const count = Number(args[0])
      if (!this.pendingSnapshot || count !== this.pendingSnapshot.size || count < 0 || count > 8) return
      this.timers = [...this.pendingSnapshot.values()].sort((a, b) => a.position - b.position)
      this.pendingSnapshot = null
      this.pendingExtended = null
      UpdateVariables.update(this)
      this.checkFeedbacks()
      const signature = this.timers.map((t) => `${t.id}:${t.name}:${t.mode}:${t.position}`).join('|')
      if (signature !== this.choicesSignature) {
        this.choicesSignature = signature
        UpdateActions(this)
        UpdateFeedbacks(this)
      }
    }
  }

  closeUdp() {
    this.socketReady = false
    if (this.pollTimer) clearInterval(this.pollTimer)
    this.pollTimer = null
    if (this.osc) {
      try { this.osc.close() } catch (_error) { /* already closed */ }
      this.osc = null
    }
    this.isConnected = false
    this.messageActive = false
    this.messageState = { active: false, template: 0, text: '', remaining: 0, displays: '', web: false }
    this.blackoutActive = false
    this.ndiState = { running: false, connections: 0, display: 1, alpha: true, audio: true, name: '' }
    this.pendingSnapshot = null
    this.pendingExtended = null
    this.choicesSignature = ''
  }

  async configUpdated(config) {
    this.config = config
    this.timers = []
    this.updateDefinitions()
    this.updateStatus(InstanceStatus.Connecting)
    this.startUdp()
  }

  async destroy() {
    this.closeUdp()
  }

  getConfigFields() {
    return [
      { type: 'textinput', id: 'host', label: 'J-Counter computer IP address', default: '', width: 6, regex: Regex.IP },
      { type: 'textinput', id: 'port', label: 'Target OSC UDP port', default: '7802', width: 6, regex: Regex.PORT },
      { type: 'textinput', id: 'feedbackPort', label: 'Local feedback UDP port', default: '7803', width: 6, regex: Regex.PORT },
    ]
  }
}

runEntrypoint(JCounterModule, UpgradeScripts)
