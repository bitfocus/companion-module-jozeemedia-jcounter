'use strict'

function mmss(time) {
  const raw = String(time || '')
  const parts = raw.replace(/^-/, '').split(':')
  if (parts.length >= 3) return `${raw.startsWith('-') ? '-' : ''}${parts[parts.length - 2]}:${parts[parts.length - 1]}`
  return raw.length > 5 ? raw.slice(-5) : raw
}

module.exports = function (self) {
  const definitions = []
  for (let number = 1; number <= 8; number++) {
    const prefix = `timer${number}`
    definitions.push({ variableId: prefix, name: `Timer ${number}: displayed time` })
    definitions.push({ variableId: `${prefix}s`, name: `Timer ${number}: MM:SS` })
    definitions.push({ variableId: `${prefix}_name`, name: `Timer ${number}: timer name` })
    definitions.push({ variableId: `${prefix}_source_title`, name: `Timer ${number}: vMix Input / Resolume Clip title` })
    definitions.push({ variableId: `${prefix}_id`, name: `Timer ${number}: stable ID` })
    definitions.push({ variableId: `${prefix}_mode`, name: `Timer ${number}: mode` })
    definitions.push({ variableId: `${prefix}_status`, name: `Timer ${number}: status` })
    definitions.push({ variableId: `${prefix}_round`, name: `Timer ${number}: round title` })
    definitions.push({ variableId: `${prefix}_round_num`, name: `Timer ${number}: round number` })
    definitions.push({ variableId: `${prefix}_round_count`, name: `Timer ${number}: total rounds` })
    definitions.push({ variableId: `${prefix}_loop`, name: `Timer ${number}: loop on/off` })
    definitions.push({ variableId: `${prefix}_progress`, name: `Timer ${number}: progress percent` })
    definitions.push({ variableId: `${prefix}_progress_visible`, name: `Timer ${number}: progress bar visible` })
    definitions.push({ variableId: `${prefix}_end_at`, name: `Timer ${number}: ENDS AT label` })
    definitions.push({ variableId: `${prefix}_smpte_active`, name: `Timer ${number}: SMPTE active` })
    definitions.push({ variableId: `${prefix}_smpte_rate`, name: `Timer ${number}: SMPTE frame rate` })
    definitions.push({ variableId: `${prefix}_external_time_mode`, name: `Timer ${number}: vMix/Resolume REMAIN or ELAPSED` })
    definitions.push({ variableId: `${prefix}_external_connection`, name: `Timer ${number}: vMix/Resolume connection` })
  }
  definitions.push({ variableId: 'connection', name: 'J-Counter OSC connection' })
  definitions.push({ variableId: 'timer_count', name: 'Number of timers' })
  definitions.push({ variableId: 'blackout', name: 'BLACKOUT state' })
  definitions.push({ variableId: 'message_active', name: 'MESSAGE currently shown' })
  definitions.push({ variableId: 'message_template', name: 'Active MESSAGE template number' })
  definitions.push({ variableId: 'message_text', name: 'Active MESSAGE text' })
  definitions.push({ variableId: 'message_remaining', name: 'MESSAGE remaining seconds (-1 = manual)' })
  definitions.push({ variableId: 'message_displays', name: 'MESSAGE DISPLAY targets' })
  definitions.push({ variableId: 'message_web', name: 'MESSAGE WEB target' })
  definitions.push({ variableId: 'ndi_running', name: 'NDI output running' })
  definitions.push({ variableId: 'ndi_connections', name: 'NDI receiver count' })
  definitions.push({ variableId: 'ndi_display', name: 'NDI source DISPLAY' })
  definitions.push({ variableId: 'ndi_alpha', name: 'NDI alpha enabled' })
  definitions.push({ variableId: 'ndi_audio', name: 'NDI cue audio enabled' })
  definitions.push({ variableId: 'ndi_name', name: 'NDI source name' })
  self.setVariableDefinitions(definitions)
}

module.exports.update = function (self) {
  const message = self.messageState || {}
  const ndi = self.ndiState || {}
  const values = {
    connection: self.isConnected ? 'ONLINE' : 'OFFLINE',
    timer_count: self.timers.length,
    blackout: self.blackoutActive ? 'ON' : 'OFF',
    message_active: self.messageActive ? 'YES' : 'NO',
    message_template: Number(message.template || 0),
    message_text: String(message.text || ''),
    message_remaining: Number(message.remaining ?? 0),
    message_displays: String(message.displays || ''),
    message_web: message.web ? 'YES' : 'NO',
    ndi_running: ndi.running ? 'YES' : 'NO',
    ndi_connections: Number(ndi.connections || 0),
    ndi_display: Number(ndi.display || 1),
    ndi_alpha: ndi.alpha ? 'ON' : 'OFF',
    ndi_audio: ndi.audio ? 'ON' : 'OFF',
    ndi_name: String(ndi.name || ''),
  }
  for (let number = 1; number <= 8; number++) {
    const timer = self.timers[number - 1]
    const prefix = `timer${number}`
    const time = timer?.time ?? ''
    values[prefix] = time
    values[`${prefix}s`] = mmss(time)
    values[`${prefix}_name`] = timer?.name ?? ''
    values[`${prefix}_source_title`] = timer?.externalTitle ?? ''
    values[`${prefix}_id`] = timer?.id ?? ''
    values[`${prefix}_mode`] = timer?.mode ?? ''
    values[`${prefix}_status`] = timer?.status ?? ''
    values[`${prefix}_round`] = timer?.round ?? ''
    values[`${prefix}_round_num`] = timer?.roundNumber ?? 0
    values[`${prefix}_round_count`] = timer?.roundCount ?? 0
    values[`${prefix}_loop`] = timer?.loop ? 'ON' : 'OFF'
    values[`${prefix}_progress`] = timer?.progressPercent ?? 0
    values[`${prefix}_progress_visible`] = timer?.progressVisible ? 'YES' : 'NO'
    values[`${prefix}_end_at`] = timer?.endAt ?? ''
    values[`${prefix}_smpte_active`] = timer?.smpteActive ? 'YES' : 'NO'
    values[`${prefix}_smpte_rate`] = timer?.smpteRate ?? ''
    values[`${prefix}_external_time_mode`] = timer?.externalTimeMode ?? ''
    values[`${prefix}_external_connection`] = timer?.externalConnection ?? ''
  }
  self.setVariableValues(values)
}
