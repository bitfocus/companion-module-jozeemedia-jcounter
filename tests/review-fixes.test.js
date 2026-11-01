'use strict'

const test = require('node:test')
const assert = require('node:assert/strict')
const Module = require('node:module')
const path = require('node:path')
const { EventEmitter } = require('node:events')

const moduleRoot = path.resolve(__dirname, '..')
const oldLoad = Module._load
let moduleClass

class InstanceBase {
  constructor() {
    this.statusChanges = []
    this.sent = []
    this.warnings = []
  }
  updateStatus(status, message) { this.statusChanges.push({ status, message }) }
  log(level, message) { this.warnings.push({ level, message }) }
  setActionDefinitions(a) { this.actions = a }
  setFeedbackDefinitions(a) { this.feedbacks = a }
  setVariableDefinitions(a) { this.variableDefinitions = a }
  setVariableValues(a) { this.variables = a }
  setPresetDefinitions(a) { this.presets = a }
  checkFeedbacks() {}
  async parseVariablesInString(value) { return value.replace('$(test:current)', 'Operator') }
}

class UDPPort extends EventEmitter {
  constructor(options) { super(); this.options = options; this.sent = [] }
  open() { this.emit('ready') }
  close() {}
  send(message, host, port) { this.sent.push({ message, host, port }) }
}

const baseStub = {
  InstanceBase,
  Regex: { IP: 'ip', PORT: 'port' },
  InstanceStatus: { Connecting: 'connecting', Ok: 'ok', ConnectionFailure: 'failure', BadConfig: 'bad_config' },
  combineRgb: (r, g, b) => (r << 16) | (g << 8) | b,
  runEntrypoint: (klass) => { moduleClass = klass },
}
Module._load = function patched(request, parent, isMain) {
  if (request === '@companion-module/base') return baseStub
  if (request === 'osc') return { UDPPort }
  return oldLoad.call(this, request, parent, isMain)
}
require(path.join(moduleRoot, 'src/main.js'))
Module._load = oldLoad

function newModule() {
  const m = new moduleClass()
  m.config = { host: '127.0.0.1', port: '7802', feedbackPort: '7803' }
  m.updateDefinitions()
  return m
}

test('OSC error returns to green on the next valid hello', () => {
  const m = newModule()
  m.onMessage({ address: '/jcounter/hello', args: [{ value: '3.0' }] })
  assert.equal(m.isConnected, true)
  m.isConnected = true
  // Tests the same error handler used by UDPPort in production.
  const oldSetInterval = global.setInterval
  const oldClearInterval = global.clearInterval
  global.setInterval = () => 123
  global.clearInterval = () => {}
  try {
    m.startUdp()
    m.osc.emit('error', new Error('transient'))
    assert.equal(m.isConnected, false)
    assert.equal(m.statusChanges.at(-1).status, 'failure')
    m.onMessage({ address: '/jcounter/hello', args: [{ value: '3.0' }] })
    assert.equal(m.isConnected, true)
    assert.equal(m.statusChanges.at(-1).status, 'ok')
  } finally {
    m.closeUdp()
    global.setInterval = oldSetInterval
    global.clearInterval = oldClearInterval
  }
})

test('initial lack of hello produces a timeout status', () => {
  const m = newModule()
  const oldSetInterval = global.setInterval
  const oldClearInterval = global.clearInterval
  let poll
  global.setInterval = (fn) => { poll = fn; return 123 }
  global.clearInterval = () => {}
  try {
    m.startUdp()
    m.connectStarted = Date.now() - 9000
    poll()
    assert.equal(m.statusChanges.at(-1).status, 'failure')
    assert.match(m.statusChanges.at(-1).message, /No reply/)
    const count = m.statusChanges.length
    poll()
    assert.equal(m.statusChanges.length, count, 'no repeated timeout updates')
  } finally {
    m.closeUdp()
    global.setInterval = oldSetInterval
    global.clearInterval = oldClearInterval
  }
})

test('integer inputs clamp and round; empty and NaN values are rejected', () => {
  const m = newModule()
  m.sendTimer = (...params) => m.sent.push(params)
  m.actions.set_time.callback({ options: { timer: '1', hours: '1.6', minutes: '100', seconds: '-2' } })
  assert.deepEqual(m.sent.at(-1), ['1', 'set_time', [2, 59, 0]])
  const count = m.sent.length
  m.actions.set_time.callback({ options: { timer: '1', hours: 'NaN', minutes: '2', seconds: 10 } })
  assert.equal(m.sent.length, count)
  m.actions.warnings.callback({ options: { timer: '1', yellow: '', red: 10 } })
  assert.equal(m.sent.length, count)
})

test('timer title expands Companion variables before sending OSC', async () => {
  const m = newModule()
  m.sendTimer = (...params) => m.sent.push(params)
  assert.equal(m.actions.timer_title.options[1].useVariables, true)
  await m.actions.timer_title.callback({ options: { timer: '3', title: ' $(test:current) ' } })
  assert.deepEqual(m.sent.at(-1), ['3', 'title', ['Operator']])
})

test('BLACKOUT, MESSAGE, NDI presets include explicit feedback styles', () => {
  const m = newModule()
  for (const key of ['global_blackout','message1_show','ndi_toggle']) {
    assert.equal(m.presets[key].feedbacks.length, 1)
    assert.equal(typeof m.presets[key].feedbacks[0].style.bgcolor, 'number')
  }
  assert.equal('affectedProperties' in m.feedbacks.timer_display, false)
})

test('v2 action migration is intentionally disabled and v2 is unchanged', () => {
  const upgrades = require(path.join(moduleRoot,'src/upgrades.js'))
  assert.deepEqual(upgrades, [])
})
