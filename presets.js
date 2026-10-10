'use strict'

const { combineRgb } = require('@companion-module/base')
const white = combineRgb(255, 255, 255)

module.exports = function (self) {
  const presets = {}
  const operations = [
    { id: 'start', label: 'START', bgcolor: combineRgb(23, 111, 86) },
    { id: 'pause', label: 'PAUSE', bgcolor: combineRgb(69, 74, 83) },
    { id: 'reset', label: 'RESET', bgcolor: combineRgb(74, 56, 62) },
  ]
  for (let n = 1; n <= 8; n++) {
    for (const op of operations) {
      presets[`t${n}_${op.id}`] = {
        type: 'button', category: `Timer ${n}`, name: `Timer ${n}: ${op.label}`,
        style: { text: `TIMER ${n}\n${op.label}`, size: '14', color: white, bgcolor: op.bgcolor },
        steps: [{ down: [{ actionId: 'transport', options: { timer: String(n), operation: op.id } }], up: [] }],
        feedbacks: [],
      }
    }
    presets[`t${n}_time`] = {
      type: 'button', category: `Timer ${n}`, name: `Timer ${n}: live title / time / colors`,
      style: { text: `$(jozeemedia-jcounter:timer${n}_name)\n$(jozeemedia-jcounter:timer${n})`,
        size: '14', color: white, bgcolor: combineRgb(48, 52, 59) },
      steps: [],
      feedbacks: [{ feedbackId: 'timer_display', options: { timer: String(n), showName: true } }],
    }
    presets[`t${n}_time_only`] = {
      type: 'button', category: `Timer ${n}`, name: `Timer ${n}: TIME ONLY / live colors`,
      style: { text: `$(jozeemedia-jcounter:timer${n})`,
        size: '24', color: white, bgcolor: combineRgb(48, 52, 59) },
      steps: [],
      feedbacks: [{ feedbackId: 'timer_display', options: { timer: String(n), showName: false } }],
    }
    presets[`t${n}_next_round`] = {
      type: 'button', category: `Timer ${n}`, name: `Timer ${n}: NEXT ROUND`,
      style: { text: `TIMER ${n}\nNEXT ROUND`, size: '14', color: white, bgcolor: combineRgb(52, 74, 103) },
      steps: [{ down: [{ actionId: 'next_round', options: { timer: String(n) } }], up: [] }],
      feedbacks: [],
    }
    presets[`t${n}_bell`] = {
      type: 'button', category: `Timer ${n}`, name: `Timer ${n}: BELL`,
      style: { text: `TIMER ${n}\nBELL`, size: '14', color: white, bgcolor: combineRgb(52, 74, 103) },
      steps: [{ down: [{ actionId: 'play_sound', options: { timer: String(n) } }], up: [] }],
      feedbacks: [],
    }
    presets[`t${n}_template1`] = {
      type: 'button', category: `Timer ${n}`, name: `Timer ${n}: TEMPLATE 1 + SET`,
      style: { text: `TIMER ${n}\nTEMPLATE 1`, size: '14', color: white, bgcolor: combineRgb(52, 74, 103) },
      steps: [{ down: [{ actionId: 'template', options: { timer: String(n), number: '1' } }], up: [] }],
      feedbacks: [],
    }
  }

  presets.global_blackout = {
    type: 'button', category: 'Global', name: 'BLACKOUT / RESTORE',
    style: { text: 'BLACKOUT\nRESTORE', size: '14', color: white, bgcolor: combineRgb(57, 68, 81) },
    steps: [{ down: [{ actionId: 'blackout', options: { operation: 'toggle' } }], up: [] }],
    feedbacks: [{ feedbackId: 'blackout', options: {} }],
  }
  presets.message1_show = {
    type: 'button', category: 'Messages', name: 'SHOW MESSAGE 1',
    style: { text: 'MESSAGE 1\nSHOW', size: '14', color: white, bgcolor: combineRgb(57, 68, 81) },
    steps: [{ down: [{ actionId: 'message', options: { operation: 'show', template: '1' } }], up: [] }],
    feedbacks: [{ feedbackId: 'message_active', options: {} }],
  }
  presets.message_hide = {
    type: 'button', category: 'Messages', name: 'HIDE MESSAGE',
    style: { text: 'MESSAGE\nHIDE', size: '14', color: white, bgcolor: combineRgb(57, 68, 81) },
    steps: [{ down: [{ actionId: 'message', options: { operation: 'hide', template: '1' } }], up: [] }],
    feedbacks: [],
  }
  presets.ndi_toggle = {
    type: 'button', category: 'NDI', name: 'NDI START / STOP',
    style: { text: 'NDI\nSTART / STOP', size: '14', color: white, bgcolor: combineRgb(57, 68, 81) },
    steps: [{ down: [{ actionId: 'ndi', options: { operation: 'toggle' } }], up: [] }],
    feedbacks: [{ feedbackId: 'ndi_running', options: {} }],
  }

  self.setPresetDefinitions(presets)
}
