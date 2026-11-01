# Changelog

## 3.0.1 — Companion Review Fixes (J-COUNTER 3.0)

- Updated module structure for Bitfocus template compatibility (Yarn 4, src/, build configuration).
- Fixed OSC reconnect status after errors and initial connection timeout.
- Fixed active visual feedback for BLACKOUT, MESSAGE and NDI presets.
- Sanitized integer OSC inputs and enabled Companion variables in timer titles.
- Removed unsupported API 1 feedback property.
- Preserved v2.0.1 as a separate published module version; v2 actions are intentionally not silently mapped.


## 3.0.0 — J-COUNTER 3.0

- Added OSC controls for up to eight timers, sequence round and loop control, warnings, templates and timer modes.
- Added global BLACKOUT, messages, NDI and DISPLAY-selection controls.
- Added live variables, colors, feedbacks and presets for production workflows.
- Added support for SMPTE, vMix and Resolume state from J-COUNTER 3.0.
- Improved timer selection with stable TimerId choices.
- Fixed MM:SS derived variable formatting for timer displays.

Existing tag `v2.0.1` remains available for J-COUNTER 2.x users; this version requires J-COUNTER 3.0 OSC protocol.
