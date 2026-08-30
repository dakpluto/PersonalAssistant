# EarthQuaker Devices Pyramids (Stereo Flanging Device)

DSP-based stereo flanger (same architecture family as EQD's Avalanche Run) with eight flanger modes, five presets, tap tempo, and true stereo I/O — covers everything from classic jet-engine sweep and through-zero tape-style warble to barber-pole (infinite-rise) sweeps.

## Controls
- **Manual**: Sets the delay time of the modulated signal (the core flange delay); also expression-pedal controllable.
- **Rate**: LFO speed, with range selectable via the Rate/Tap toggle (Slow, Normal, Fast).
- **Width**: Depth/frequency range of the LFO sweep.
- **Mix**: Wet (modulated signal) volume relative to dry.
- **Feedback**: Regeneration amount on the modulated signal — supports both positive and negative feedback depending on mode.
- **Modify**: Multi-function control whose behavior changes depending on the active flanger mode.
- **Rate & Tap toggle (3-position)**: Selects the tempo range (Slow/Normal/Fast) for both the Rate knob and tap tempo.
- **Mode rotary switch**: Selects among the eight flanger modes.
- **Presets rotary switch**: Selects Live mode or one of five saved presets.

## Footswitches / Switches
- Activate footswitch: engages/bypasses the effect, true bypass, Flexi-Switch technology (latching or momentary).
- Tap/Trigger footswitch: sets tap tempo in most modes; in Trigger Up/Down modes, triggers the sweep instead.

## Notes for patch-building
- Sits in the modulation slot of the chain, same role as the GP-5's own MOD flanger algorithms — the differentiator here is true stereo operation and DSP-mode variety (through-zero, barber-pole, trigger modes) beyond what a single-algorithm onboard flanger offers.
- Flexible I/O: usable as mono-in/stereo-out, stereo-in/stereo-out, or as two independent mono flangers via the L/R inputs feeding separate chains — worth specifying which mode a patch assumes, since GP-5 signal chains are typically mono.
- True bypass, all-analog dry path with all-digital wet path (24-bit/96kHz converters) — dry signal is unaffected when mixed in, only the flanged/modulated portion is digital.
- Five onboard presets plus Live mode give it its own internal preset recall independent of GP-5 CTL/patch switching, useful for songs needing multiple flanger modes without a second GP-5 patch.
