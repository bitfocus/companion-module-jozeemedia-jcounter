'use strict'

const { combineRgb } = require('@companion-module/base')
const stoppedBackground = combineRgb(48, 52, 59)
const white = combineRgb(255, 255, 255)

function colorFromHex(hex, fallback) {
  if (!/^#[0-9a-fA-F]{6}$/.test(hex || '')) return fallback
  return combineRgb(parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16))
}

function timerActive(timer) {
  if (!timer) return false
  if (timer.status === 'RUNNING' || timer.status === 'OVERTIME' || timer.status === 'LOCAL TIME') return true
  if (timer.mode === 'SMPTE') return timer.smpteActive === true
  if (timer.mode === 'VMIX' || timer.mode === 'RESOLUME') {
    return String(timer.externalConnection || '').toUpperCase().startsWith('CONNECTED')
  }
  return false
}

module.exports = function (self) {
  const timerOption = () => ({ type: 'dropdown', id: 'timer', label: 'Timer',
    default: '1', choices: self.getTimerChoices() })

  self.setFeedbackDefinitions({
    timer_display: {
      type: 'advanced',
      name: 'Timer display: live title / time / colors',
      affectedProperties: ['bgcolor', 'color', 'text'],
      options: [timerOption(),
        { type: 'checkbox', id: 'showName', label: 'Show title', default: true }],
      callback: (feedback) => {
        const timer = self.resolveTimer(feedback.options.timer)
        if (!timer) return { text: 'TIMER OFFLINE', bgcolor: stoppedBackground, color: white }
        const active = timerActive(timer)
        const title = timer.externalTitle || timer.name
        return {
          text: feedback.options.showName === false ? timer.time : `${title}\n${timer.time}`,
          bgcolor: active ? colorFromHex(timer.background, stoppedBackground) : stoppedBackground,
          color: active ? colorFromHex(timer.timeColor, white) : white,
        }
      },
    },
    running: {
      type: 'boolean', name: 'Timer is RUNNING',
      defaultStyle: { bgcolor: combineRgb(23, 111, 86), color: white },
      options: [timerOption()],
      callback: (feedback) => {
        const status = self.resolveTimer(feedback.options.timer)?.status
        return status === 'RUNNING' || status === 'OVERTIME'
      },
    },
    finished: {
      type: 'boolean', name: 'Timer FINISHED or OVERTIME',
      defaultStyle: { bgcolor: combineRgb(142, 42, 48), color: white },
      options: [timerOption()],
      callback: (feedback) => {
        const status = self.resolveTimer(feedback.options.timer)?.status
        return status === 'FINISHED' || status === 'OVERTIME'
      },
    },
    smpte_active: {
      type: 'boolean', name: 'SMPTE signal is ACTIVE',
      defaultStyle: { bgcolor: combineRgb(23, 111, 86), color: white },
      options: [timerOption()],
      callback: (feedback) => self.resolveTimer(feedback.options.timer)?.smpteActive === true,
    },
    external_connected: {
      type: 'boolean', name: 'vMix / Resolume source is CONNECTED',
      defaultStyle: { bgcolor: combineRgb(23, 111, 86), color: white },
      options: [timerOption()],
      callback: (feedback) => String(self.resolveTimer(feedback.options.timer)?.externalConnection || '')
        .toUpperCase().startsWith('CONNECTED'),
    },
    progress_visible: {
      type: 'boolean', name: 'Progress bar is enabled / visible',
      defaultStyle: { bgcolor: combineRgb(52, 74, 103), color: white },
      options: [timerOption()],
      callback: (feedback) => self.resolveTimer(feedback.options.timer)?.progressVisible === true,
    },
    blackout: {
      type: 'boolean', name: 'Global BLACKOUT is active',
      defaultStyle: { bgcolor: combineRgb(172, 52, 67), color: white },
      options: [],
      callback: () => self.blackoutActive === true,
    },
    message_active: {
      type: 'boolean', name: 'MESSAGE is currently shown',
      defaultStyle: { bgcolor: combineRgb(195, 162, 53), color: combineRgb(45, 36, 16) },
      options: [],
      callback: () => self.messageActive === true,
    },
    ndi_running: {
      type: 'boolean', name: 'NDI output is running',
      defaultStyle: { bgcolor: combineRgb(23, 111, 86), color: white },
      options: [],
      callback: () => self.ndiState?.running === true,
    },
  })
}
