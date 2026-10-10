'use strict'

// OSC v3 changes the wire protocol and greatly expands the available actions.
// Existing J-Counter 2.x actions are intentionally NOT silently mapped to new
// functions: for example, the old "countdown" command could mean mode selection,
// not START. Reassign old actions once, choosing one of the new v3 definitions.
module.exports = []
