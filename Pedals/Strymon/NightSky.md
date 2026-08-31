# Strymon NightSky

Experimental/generative reverb workstation built around a regenerating reverb core with deep modulation routing — less a traditional "ambience" reverb and more a sound-design tool for evolving pads, drones, and pitch-shifted textures, with an Infinite hold function and an 8-step Sequence mode for programmed pitch/reverb patterns.

## Controls
- **Speed**: Modulation rate, from 0.06Hz (a 16-second sweep) up to 12Hz (a 0.08-second sweep)
- **Depth**: Amount of modulation applied to the Target destination; off at minimum
- **Length**: Reverb decay time, from under a second to near-infinite
- **Size/Pitch**: Sets the size of the reverb core, which also transposes/pitches the reverberated signal
- **Reverb**: Output level of the wet reverb signal
- **Low Cut**: Removes low frequencies from the reverb signal (clockwise = more cut)
- **High Cut**: Removes high frequencies from the reverb signal; its behavior depends on the Filter switch (regen filter vs. low-pass)
- **Shimmer (knob)**: Amount of shimmer (pitch-shifted) content blended in; off at minimum
- **Dry**: Level of the unprocessed input signal; unity at 12 o'clock, up to +3dB boost at max

## Footswitches / Switches
- **Target** (mini-toggle): Selects what Depth/Speed modulation is applied to — Verb (modulates the delay lines inside the reverb core), Pitch (modulates the core's size/pitch), or Filter (modulates the High Cut position)
- **Shape** (mini-toggle/menu): Modulation waveform — triangle, square, ramp, saw, random, or envelope
- **Texture** (mini-toggle): Reverb character — sparse, dense, or diffuse
- **Quantize** (mini-toggle): How Size/Pitch responds — smooth (continuous), half-step, or musical scale
- **Interval** (mini-toggle): Shimmer pitch-shift interval options
- **Shimmer (button)**: Where the shimmer is applied — at the input or in the regenerating tail
- **Glimmer**: Harmonic exciter on the reverb tail — high, low, or off
- **Drive**: Adds saturation, switchable pre- or post-reverb, or off
- **ON footswitch**: Engages/bypasses the effect; hold to enter Morph mode (smoothly interpolates between two saved knob states)
- **FAVORITE footswitch**: Toggles between a saved preset and the pedal's live front-panel knob state (green LED = preset active)
- **Preset footswitches 1–8**: Recall presets; press the lit button to switch between banks 1–8 (green) and 9–16 (amber); in Sequence mode these instead enable/disable steps and set per-step pitch
- **INFINITE footswitch**: Freezes/holds the reverb's current input for infinite sustain while still passing new audio into the frozen texture; hold to enter/exit 8-step Sequence mode

## Notes for patch-building
- Structurally a deep substitute for the GP-5's RVB slot, but built for ambient sound design rather than a "add some room" tail — Infinite freeze, pitch-shifted Size/Pitch, and Sequence mode go well beyond what a single onboard reverb block can do.
- Stereo in/out with a switchable INST/LINE input stage (INST for guitar-level, LINE for an amp effects loop or a hot synth/mixer feed); use the left input/output jacks for mono operation.
- Has MIDI (5-pin DIN in/out) and USB-C, plus an EXP/MIDI jack for an expression pedal, MultiSwitch Plus, or MIDI over 1/4".
- Power: 9VDC center-negative, 300mA minimum (supply not included).

Sources: [NightSky product page](https://www.strymon.net/product/nightsky/), [NightSky user manual](https://www.strymon.net/manuals/Nightsky_UserManual_RevF.pdf), [What is the Morph feature on NightSky? — Strymon FAQ](https://www.strymon.net/faq/how-do-i-use-the-morph-feature-on-nightsky/)
