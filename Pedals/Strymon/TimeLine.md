# Strymon TimeLine

Original flagship multi-delay workstation offering 12 distinct delay "machines" (dTape, dBucket, Digital, Reverse, ICE, Duck, Trem, Filter, Swell, Ring, Looper-style, and more), 200 nameable presets, and a built-in stereo looper — still current in Strymon's line alongside the newer dual-engine TimeLine MX.

## Controls
- **Type**: Rotary encoder that selects the delay machine. Press toggles the display between bank number and delay-time readout; press and hold saves the current preset.
- **Value**: Rotary encoder for preset navigation and fine-tuning delay time; also used to edit global settings.
- **Time**: Sets delay time (range depends on the selected machine).
- **Repeats**: Sets number of echoes, from a single repeat up to infinite/regenerating oscillation.
- **Mix**: Balances dry and wet signal (analog blend, never digitized on the dry side); 50/50 at the 3 o'clock position.
- **Filter**: Shapes the tone of the repeats — controls tape age on dTape, bucket loss on dBucket, or LFO center frequency on the Filter machine (function is algorithm-dependent).
- **Grit**: Adds progressive distortion/lo-fi artifacts to the repeats — controls tape bias on dTape or bucket loss character on dBucket.
- **Mod Speed**: LFO speed for delay modulation; controls tape "crinkle" rate in dTape mode.
- **Mod Depth**: Modulation intensity; controls wow & flutter depth in dTape mode.
- **Display**: Shows delay time (ms or BPM), preset bank/number, or parameter values during editing.

## Footswitches / Switches
- **Footswitch A**: Engages/bypasses the loaded preset; press and hold engages infinite repeats (freeze); A+B together banks down through presets. In looper mode, controls record/overdub.
- **Footswitch B**: Engages/bypasses the loaded preset; press and hold engages infinite repeats; B+TAP together banks up through presets. In looper mode, controls play.
- **TAP footswitch**: Taps in tempo for delay time; press and hold enters/exits Looper mode. In looper mode, controls stop.
- **Feedback Loop switch** (rear panel): Enables inserting an external effect into the delay's feedback path.
- **I/O**: Left/Right In and Out — mono when only the left jacks are used, stereo (or feedback-loop send/return) when both are used.

## Notes for patch-building
- Plays the same structural role as the GP-5's DLY module but with far more depth: 12 distinct delay machine types, a dedicated Filter/Grit tone-shaping pair per repeat, and a 30-second stereo looper (routable pre- or post-delay) that the GP-5 doesn't have at all.
- 200 user-saveable presets, full MIDI I/O (clock sync, CC control of any parameter, preset recall via Program Change), and an expression pedal jack that can modulate any knob or combination, saveable per preset — strong candidate as a dedicated end-of-chain delay/looper unit on a MIDI-controlled board.
- Selectable true bypass (electromechanical relay) or a per-preset trails-capable analog buffered bypass; optional kill-dry mode for parallel effects-loop use; ±3dB global boost/cut.
- 24-bit/96kHz conversion with an analog dry path (zero added latency on the dry signal) and 32-bit floating-point SHARC DSP for the delay processing.

Sources: [Strymon TimeLine product page](https://www.strymon.net/product/timeline/), [Strymon TimeLine support/manual](https://www.strymon.net/support/timeline/)
