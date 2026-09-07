# Meris Polymoon

Meris's "super-modulated" delay, explicitly modeled on the sound of cascaded 1980s rack-mount delay rigs (the kind used by players like Allan Holdsworth and Frank Zappa) rather than a single vintage delay unit. It runs a series network of six multi-tap delays with a fully analog JFET-based dry path, giving up to 1200ms of digitally precise delay time wrapped in deep, often disorienting modulation — reviewers (Premier Guitar, Sound on Sound) consistently frame it as a serious ambient/textural tool rather than a straightforward slapback-or-echo pedal.

## Controls
Each knob has a primary function and a secondary "Alt" function accessed via the Alt hold button:
- **Time**: Sets delay time (up to 1200ms) and the synced phaser's timing. Alt: **Early Modulation** — triangle-wave modulation depth applied to the early delay taps, from gentle chorus-like movement up to FM/pitch-bend effects.
- **Feedback**: Sets the number of repeats — low for a handful of standard repeats, full clockwise for an infinite feedback loop/self-oscillation. Alt: **Feedback Filter** — tilts the tone of the feedback path, darker at minimum, brighter at maximum.
- **Mix**: Dry/wet balance, noon = no filtering applied. Alt: **Delay Level** — sets the wet signal's output gain, roughly 0dB to -12dB.
- **Multiply**: Selects among six settings for how many delay taps are sent to the output; small movements reshape the whole rhythmic pattern of repeats. Alt: **Late Modulation** — triangle-wave modulation depth applied to later delay taps.
- **Dimension**: Smears/sustains the delay taps into a smoother, more diffuse texture. Alt: **Dynamic Flanger Mode** — selects envelope-down, envelope-up, or free-running LFO behavior for the dynamic flanger (min/noon/max respectively).
- **Dynamics**: Sets the intensity/depth of a flanger effect dynamically layered onto the delay signal. Alt: **Dynamic Flanger Speed** — sets envelope attack time or LFO speed depending on the Dynamic Flanger Mode selected.

## Switches
- **Phaser Select**: Chooses the synced phaser's rate — Slow (fixed ~0.1 Hz), Sync (locked to quarter notes of the delay time), or Slow+Sync (locked to whole notes).
- **Tap Tempo footswitch**: Taps in delay/phaser time; press and hold for Half Speed delay.
- **Bypass footswitch**: Standard bypass; its Alt function adds negative feedback into the dynamic flanger path.

## Jacks
- **Stereo in/out**.
- **Multi-function EXP jack**: Expression pedal control over all parameters, tap-tempo switch input, preset switching (4 presets), or MIDI in/out via TRS (needs a separate MIDI-to-TRS conversion box); supports MIDI beat-clock sync.

## Notes for patch-building
- Typical placement: DLY slot, late in the chain — this is a specialty ambient/modulated-delay effect well past the GP-5's stock DLY algorithms, best reserved for a patch that specifically wants dense, cascading, semi-unpredictable repeats rather than a clean slapback or straight analog echo.
- Bypass is switchable between true bypass (relay) and analog buffered bypass; current draw is under 150mA at 9V.
- The Alt-layer parameters (filter, modulation depth on early vs. late taps, dynamic flanger behavior) meaningfully change the character of a "simple" delay/feedback setting — a patch write-up needs to capture both the primary knob positions and any Alt-layer tweaks used, not just the six visible knob positions.
- Input/output headroom is selectable for guitar, synth, or line level — confirm the correct setting is documented since it affects gain staging into/out of the pedal.
- With Feedback near max this pedal self-oscillates readily; treat that as a deliberate patch choice (e.g. for a swell/drone moment) rather than an accidental setting.

Sources: [Polymoon — Meris](https://meris.us/product/polymoon-pedal/), [Meris Polymoon Review — Premier Guitar](https://www.premierguitar.com/gear/meris-polymoon-review), [Meris Polymoon — Sound on Sound](https://www.soundonsound.com/reviews/meris-polymoon), [Meris Polymoon manual v.2 (Analogue Haven)](https://www.analoguehaven.com/meris/polymoon/manual.pdf)
