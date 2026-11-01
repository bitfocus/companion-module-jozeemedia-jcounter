# JoZee Media Solutions — J-COUNTER Companion module

**Module ID:** `jozeemedia-jcounter`  
**Source version:** `3.0.1` — supports J-COUNTER 3.0.  
**Repository:** https://github.com/bitfocus/companion-module-jozeemedia-jcounter

This is module version 3.0.1 of the **existing** Bitfocus Companion connection module, not a separate module ID. Historical versions such as `v2.0.1` remain accessible in Companion 4+ for J-COUNTER 2.x users.

The module uses UDP OSC to send commands and receive live feedback. It supports up to eight timer cards, display visibility, sequences, messages, global BLACKOUT, vMix/Resolume state, SMPTE/LTC, NDI and OSC variables/presets.

See [User Help](./companion/HELP.md) for configuration and operation.

## Local build / verification

Use Node.js 22.20+ and Yarn 4.12.0. Regenerate and commit `yarn.lock` using `corepack yarn install` before the first build; then run the checks and packaging step.

```sh
corepack enable
corepack yarn install
corepack yarn companion-module-check
corepack yarn package
```

After testing and merging the corrections, tag the tested commit as `v3.0.1` and submit it in the Bitfocus Developer Portal. Keep the historical `v2.0.1` tag unchanged. The published J-COUNTER application version remains 3.0.

### Upgrading from J-COUNTER 2

Do not update existing v2 connections to the v3 protocol without rebuilding their buttons and feedbacks. To continue using J-COUNTER 2.x, select module version v2.0.1. No automatic v2 action-ID translation is provided because it could trigger the wrong commands.
