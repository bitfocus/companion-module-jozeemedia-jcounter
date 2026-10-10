'use strict'

function timerOption(self) {
  return {
    type: 'dropdown', id: 'timer', label: 'Timer', default: '1',
    choices: self.getTimerChoices(),
  }
}

function intOption(id, label, defaultValue, min, max) {
  return { type: 'number', id, label, default: defaultValue, min, max, step: 1 }
}

function validTimer(value) {
  return /^[a-f0-9]{32}$/i.test(String(value)) || /^[1-8]$/.test(String(value))
}

module.exports = function (self) {
  self.setActionDefinitions({
    transport: {
      name: 'Timer: START / PAUSE / RESET / TOGGLE',
      options: [
        timerOption(self),
        { type: 'dropdown', id: 'operation', label: 'Action', default: 'start', choices: [
          { id: 'start', label: 'START' },
          { id: 'pause', label: 'PAUSE' },
          { id: 'reset', label: 'RESET' },
          { id: 'toggle', label: 'START / PAUSE TOGGLE' },
        ] },
      ],
      callback: (action) => self.sendTimer(action.options.timer, action.options.operation),
    },
    mode: {
      name: 'Timer: SET MODE',
      options: [timerOption(self),
        { type: 'dropdown', id: 'mode', label: 'Mode', default: 'COUNTDOWN', choices: [
          'COUNTDOWN', 'COUNT UP', 'CLOCK', 'SEQUENCE', 'SMPTE', 'END TIME', 'VMIX', 'RESOLUME',
        ].map((id) => ({ id, label: id })) }],
      callback: (action) => self.sendTimer(action.options.timer, 'mode', [String(action.options.mode)]),
    },
    timer_title: {
      name: 'Timer: SET TITLE',
      options: [timerOption(self),
        { type: 'textinput', id: 'title', label: 'Title', default: 'TIMER' }],
      callback: (action) => {
        const title = String(action.options.title || '').trim()
        if (title.length >= 1 && title.length <= 128) self.sendTimer(action.options.timer, 'title', [title])
      },
    },
    set_time: {
      name: 'Countdown: SET TIME',
      options: [timerOption(self), intOption('hours', 'Hours', 0, 0, 23),
        intOption('minutes', 'Minutes', 5, 0, 59), intOption('seconds', 'Seconds', 0, 0, 59)],
      callback: (action) => self.sendTimer(action.options.timer, 'set_time', [
        Number(action.options.hours), Number(action.options.minutes), Number(action.options.seconds),
      ]),
    },
    adjust: {
      name: 'Countdown: ADD / SUBTRACT SECONDS',
      options: [timerOption(self), intOption('seconds', 'Signed seconds', 30, -86399, 86399)],
      callback: (action) => {
        const seconds = Number(action.options.seconds)
        if (Number.isInteger(seconds) && seconds !== 0) self.sendTimer(action.options.timer, 'adjust', [seconds])
      },
    },
    template: {
      name: 'Countdown: LOAD TEMPLATE + SET',
      options: [timerOption(self),
        { type: 'dropdown', id: 'number', label: 'Shared template', default: '1',
          choices: Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1), label: `Template ${i + 1}` })) }],
      callback: (action) => self.sendTimer(action.options.timer, 'template', [Number(action.options.number)]),
    },
    overtime: {
      name: 'Countdown: COUNT UP AFTER ZERO',
      options: [timerOption(self),
        { type: 'dropdown', id: 'enabled', label: 'State', default: '1', choices: [
          { id: '1', label: 'ON' }, { id: '0', label: 'OFF' },
        ] }],
      callback: (action) => self.sendTimer(action.options.timer, 'overtime', [Number(action.options.enabled)]),
    },
    warnings: {
      name: 'Timer: SET YELLOW / RED WARNINGS',
      description: 'COUNTDOWN, SEQUENCE or END TIME. 0 disables a warning.',
      options: [timerOption(self), intOption('yellow', 'Yellow warning (seconds)', 120, 0, 59999),
        intOption('red', 'Red warning (seconds)', 30, 0, 59999)],
      callback: (action) => self.sendTimer(action.options.timer, 'warnings', [
        Number(action.options.yellow), Number(action.options.red),
      ]),
    },
    next_round: {
      name: 'Sequence: NEXT ROUND',
      options: [timerOption(self)],
      callback: (action) => self.sendTimer(action.options.timer, 'next_round'),
    },
    sequence_loop: {
      name: 'Sequence: LOOP ON / OFF',
      options: [timerOption(self),
        { type: 'dropdown', id: 'enabled', label: 'Loop', default: '1', choices: [
          { id: '1', label: 'ON' }, { id: '0', label: 'OFF' },
        ] }],
      callback: (action) => self.sendTimer(action.options.timer, 'loop', [Number(action.options.enabled)]),
    },
    play_sound: {
      name: 'Timer: PLAY SOUND (J-Counter computer)',
      options: [timerOption(self)],
      callback: (action) => self.sendTimer(action.options.timer, 'play_sound'),
    },
    clock_offset: {
      name: 'Clock: SET OFFSET',
      options: [timerOption(self), intOption('hours', 'Offset hours', 0, -26, 26)],
      callback: (action) => self.sendTimer(action.options.timer, 'clock_offset', [Number(action.options.hours)]),
    },
    end_time: {
      name: 'End Time: SET TARGET',
      options: [timerOption(self), intOption('hours', 'Hours', 21, 0, 23),
        intOption('minutes', 'Minutes', 0, 0, 59), intOption('seconds', 'Seconds', 0, 0, 59)],
      callback: (action) => self.sendTimer(action.options.timer, 'end_time', [
        Number(action.options.hours), Number(action.options.minutes), Number(action.options.seconds),
      ]),
    },
    progress: {
      name: 'Timer: PROGRESS BAR ON / OFF',
      options: [timerOption(self),
        { type: 'dropdown', id: 'enabled', label: 'Progress bar', default: '1', choices: [
          { id: '1', label: 'ON' }, { id: '0', label: 'OFF' },
        ] }],
      callback: (action) => self.sendTimer(action.options.timer, 'progress', [Number(action.options.enabled)]),
    },
    external_time_mode: {
      name: 'vMix / Resolume: REMAIN / ELAPSED',
      options: [timerOption(self),
        { type: 'dropdown', id: 'timeMode', label: 'Time', default: 'REMAIN', choices: [
          { id: 'REMAIN', label: 'REMAIN' }, { id: 'ELAPSED', label: 'ELAPSED' },
        ] }],
      callback: (action) => self.sendTimer(action.options.timer, 'time_mode', [String(action.options.timeMode)]),
    },
    external_refresh: {
      name: 'vMix / Resolume: REFRESH SOURCE NOW',
      options: [timerOption(self)],
      callback: (action) => self.sendTimer(action.options.timer, 'external_refresh'),
    },
    smpte_rate: {
      name: 'SMPTE: SET FRAME RATE',
      options: [timerOption(self),
        { type: 'dropdown', id: 'rate', label: 'Frame rate', default: '25', choices:
          ['23.976', '24', '25', '29.97', '30'].map((id) => ({ id, label: id })) }],
      callback: (action) => self.sendTimer(action.options.timer, 'smpte_rate', [String(action.options.rate)]),
    },
    display_visible: {
      name: 'Timer: SHOW / HIDE ON DISPLAY 1',
      options: [timerOption(self),
        { type: 'dropdown', id: 'visible', label: 'Display', default: '1', choices: [
          { id: '1', label: 'SHOW' }, { id: '0', label: 'HIDE' },
        ] }],
      callback: (action) => self.sendTimer(action.options.timer, 'display', [Number(action.options.visible)]),
    },
    blackout: {
      name: 'Global: BLACKOUT / RESTORE / TOGGLE',
      options: [{ type: 'dropdown', id: 'operation', label: 'Action', default: 'toggle', choices: [
        { id: 'toggle', label: 'TOGGLE' }, { id: '1', label: 'BLACKOUT' }, { id: '0', label: 'RESTORE' },
      ] }],
      callback: (action) => {
        const operation = String(action.options.operation)
        if (operation === 'toggle') self.sendOsc('/jcounter/blackout/toggle')
        else self.sendOsc('/jcounter/blackout/set', [Number(operation)])
      },
    },
    message: {
      name: 'Messages: SHOW TEMPLATE / HIDE',
      options: [{ type: 'dropdown', id: 'operation', label: 'Action', default: 'show', choices: [
        { id: 'show', label: 'SHOW TEMPLATE' }, { id: 'hide', label: 'HIDE' },
      ] },
      { type: 'dropdown', id: 'template', label: 'Template', default: '1',
        choices: Array.from({ length: 10 }, (_, i) => ({ id: String(i + 1), label: `MESSAGE ${i + 1}` })) }],
      callback: (action) => {
        if (action.options.operation === 'hide') self.sendOsc('/jcounter/message/hide')
        else self.sendOsc('/jcounter/message/show', [Number(action.options.template)])
      },
    },
    ndi: {
      name: 'NDI: START / STOP / TOGGLE',
      options: [{ type: 'dropdown', id: 'operation', label: 'Action', default: 'toggle', choices: [
        { id: 'toggle', label: 'TOGGLE' }, { id: 'start', label: 'START' }, { id: 'stop', label: 'STOP' },
      ] }],
      callback: (action) => self.sendOsc(`/jcounter/ndi/${action.options.operation}`),
    },
    display_select: {
      name: 'DISPLAY: SET VISIBLE TIMERS',
      description: 'Replace the full selection of an already-open DISPLAY window. Select 1–8 timers.',
      options: [
        { type: 'dropdown', id: 'display', label: 'Choose DISPLAY', default: '1', choices: [
          { id: '1', label: 'DISPLAY 1' }, { id: '2', label: 'DISPLAY 2' }, { id: '3', label: 'DISPLAY 3' },
        ] },
        { type: 'multidropdown', id: 'timers', label: 'Timers to show', default: ['1'],
          minSelection: 1, maxSelection: 8, choices: self.getTimerChoices() },
      ],
      callback: (action) => {
        const display = Number(action.options.display)
        const selectors = action.options.timers
        if (!Number.isInteger(display) || display < 1 || display > 3 ||
            !Array.isArray(selectors) || selectors.length < 1 || selectors.length > 8 ||
            !selectors.every(validTimer)) {
          self.log('warn', 'Invalid DISPLAY selection')
          return
        }
        self.sendOsc('/jcounter/display/select', [display, ...selectors.map(String)])
      },
    },
    bring_to_front: {
      name: 'Window: BRING TO FRONT',
      options: [{ type: 'dropdown', id: 'window', label: 'Window', default: 'main', choices: [
        { id: 'main', label: 'MAIN WINDOW' }, { id: '1', label: 'DISPLAY 1' },
        { id: '2', label: 'DISPLAY 2' }, { id: '3', label: 'DISPLAY 3' },
      ] }],
      callback: (action) => self.sendOsc('/jcounter/window/focus', [String(action.options.window)]),
    },
  })
}
