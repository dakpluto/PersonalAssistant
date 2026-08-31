# Strymon BigSky MX

Flagship multi-algorithm reverb unit — not a single-effect stompbox but a full reverb workstation offering 12 distinct reverb "machines" (Room, Hall, Plate, Spring, Shimmer, Bloom, Cloud, Chorale, Magneto, Nonlinear, and more), with the MX revision adding the ability to run two reverb engines simultaneously.

## Controls
- **Type**: Rotary encoder that selects the reverb algorithm/voice. Push to enable dual-engine mode (Series, Parallel, or Split routing of two simultaneous reverbs); hold to save presets.
- **Value**: Rotary encoder used for preset navigation; push to enter the parameter menu; hold for global settings.
- **Decay**: Length of the reverb tail. On Nonlinear and Magneto types, this instead controls delay time (algorithm-dependent).
- **Pre-Delay**: Time gap between the dry signal and the onset of reverb (0–1.5s). On Nonlinear/Magneto types, controls feedback instead.
- **Tone**: Adjusts the high-frequency content of the reverb signal.
- **Mod**: Adds modulation/movement to the reverb tail — more like natural air movement than an obvious chorus effect.
- **Param 1 / Param 2**: Algorithm-specific parameters that change meaning depending on the selected reverb Type (e.g. shimmer pitch/interval on Shimmer, wow/flutter depth on Magneto).
- **Mix**: Balance between dry input and wet reverb signal.
- **Display**: High-contrast OLED for navigating types, parameters, and presets.

## Footswitches / Switches
- **A & B footswitches**: Recall/engage stored presets; pressed together, they switch preset banks.
- **Infinite footswitch**: Dedicated switch that freezes/holds the current reverb tail for infinite sustain, available regardless of what preset is loaded.

## Notes for patch-building
- Plays the same structural role as the GP-5's RVB module (the ambient tail at the end of the chain) but as a dramatically deeper substitute — 12 reverb algorithms, dual simultaneous engines, and per-algorithm parameter depth (shimmer, modulation, infinite hold) well beyond a single onboard reverb block.
- Full stereo I/O with Class A JFET preamps on the inputs, plus MIDI (DIN and USB-C) and an assignable expression/MIDI jack — a strong choice for a dedicated ambient/ending-of-chain unit on a board that already runs stereo.
- Because it can run two reverb types at once (series/parallel/split), it can effectively cover both a subtle "always-on" room reverb and a swell-able ambient reverb in a single unit/preset, which a single GP-5 RVB slot cannot do.
