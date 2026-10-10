# J-COUNTER 3.0 — Companion Connection

This version controls **J-COUNTER 3.0** using OSC 1.0 over UDP on a trusted local network. If you use J-COUNTER 2.x, select the existing **2.0.1** module version instead.

## Connect

1. Run J-COUNTER 3.0 on the same LAN as Companion.
2. In J-COUNTER, open **OSC** and configure the **IN PORT** (default **7802**) and **OUT PORT** (default **7803**). Start OSC.
3. In Companion, add the **JoZee Media Solutions — J-COUNTER 3.0** connection and configure:
   - **Host / IP**: IPv4 address of the J-COUNTER computer (not the Companion computer).
   - **Target OSC UDP port**: J-COUNTER **IN PORT** (7802 by default).
   - **Local feedback UDP port**: UDP port used by Companion to listen for J-COUNTER state (7803 by default).
4. The connection changes to **OK** once it receives state from J-COUNTER.

**Firewall:** allow UDP traffic on the relevant ports. If the two programs run on different machines, ensure they can communicate on the LAN. OSC is not authenticated; do **not** expose these ports to the public internet.

## Features

- Control up to 8 timers: start, pause, reset, toggle, mode, title, countdown time, templates, warnings and sounds.
- Sequence: next round and loop on/off.
- End Time and Clock settings, progress-bar toggles and SMPTE frame rate.
- vMix / Resolume: remaining/elapsed time and source refresh.
- Global BLACKOUT/RESTORE, message templates, NDI output and display visibility selection.
- Live variables and feedbacks for names, time, colors, timer status, sequence rounds, SMPTE, external sources, messages, BLACKOUT and NDI.
- Ready-to-use Companion button presets.

Choose either the **Position 1–8** timer targets or a discovered stable TimerId. Stable TimerId targets remain bound to the same logical timer when cards are reordered.

## Troubleshooting

- **Connection OFFLINE:** start OSC in J-COUNTER; verify its LAN IP, incoming command port, and Windows firewall.
- **Buttons work, but feedback does not:** verify the feedback UDP port matches J-COUNTER OUT PORT and is not used by another process.
- **Version not supported:** this module expects J-COUNTER OSC protocol **3.0**.
- **DISPLAY selection fails:** open the requested DISPLAY window in J-COUNTER first; OSC does not create DISPLAY windows.
- **The wrong timer responds after reordering:** select a stable TimerId instead of a numbered position.

**Licensing:** J-COUNTER features are available according to the installed J-COUNTER software license. This module does not bypass license restrictions.

Project website: https://jozee-media-solutions.pages.dev/j-counter.html
