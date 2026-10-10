# JoZee Media Solutions — J-COUNTER Companion module

**Module ID:** `jozeemedia-jcounter`  
**Source version:** `3.0.0` — supports J-COUNTER 3.0.  
**Repository:** https://github.com/bitfocus/companion-module-jozeemedia-jcounter

This is version 3.0 of the **existing** Bitfocus Companion connection module, not a separate module ID. Historical versions such as `v2.0.1` remain accessible in Companion 4+ for J-COUNTER 2.x users.

The module uses UDP OSC to send commands and receive live feedback. It supports up to eight timer cards, display visibility, sequences, messages, global BLACKOUT, vMix/Resolume state, SMPTE/LTC, NDI and OSC variables/presets.

See [User Help](./companion/HELP.md) for configuration and operation.

## Local build / verification

Use a supported Node.js 22 runtime. Install dependencies using the project's lockfile, then run the checks and packaging step before tagging a release.

```sh
corepack enable
# The repo must maintain its existing yarn.lock; regenerate and commit it when dependencies change.
yarn install
yarn companion-module-check
yarn package
```

Before submitting to Bitfocus, test this module against J-COUNTER 3.0 running on a real production LAN, then merge the reviewed `jcounter3` development branch into `main`, create tag `v3.0.0` on the tested commit and submit that tag in the Bitfocus Developer Portal.
