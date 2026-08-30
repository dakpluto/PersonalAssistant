# EarthQuaker Devices The Wave Transformer

**Not a guitar pedal.** This is an all-analog Eurorack synthesizer oscillator module (20HP), listed on EarthQuaker's own site as an "Eurorack Transfiguration Oscillator." It has no 1/4" instrument input or output, no footswitch, no standard 9V pedal jack, and does not track a guitar signal — it runs on Eurorack ±12V/+5V rail power and is played/controlled via CV (control voltage), not a guitar cable. Included here for completeness since it appears in EarthQuaker's current device catalog, but it cannot be inserted into a normal guitar signal chain or a GP-5 board without a Eurorack case and a guitar-to-CV/audio interface (e.g., an audio-to-CV pitch tracker) between guitar and module — and even then it functions as a synth voice alongside the guitar, not as an effect processing the guitar's own tone.

## Controls
- **Sub Source**: Selects the internal oscillator or an external signal (via the Shape Insert jack) as the source for generating sub-octaves.
- **Sub Octave**: Selects 1 octave down, 2 octaves down, or mutes the sub-octave outputs.
- **Complex Source**: Mutes/unmutes the source waveform feeding the Complex output.
- **Tune**: Coarse pitch, roughly 7 octaves of range.
- **Fine Tune**: Fine pitch adjustment, a little over 1 octave of range.
- **µTune (Micro Tune)**: Ultra-fine pitch trim, approximately 25 cents of range.
- **Pulse Width**: Varies the rectangle-wave output's duty cycle from 0%–100%.
- **Transform**: Morphs the Complex output from a plain triangle wave through progressively stranger, more harmonically complex waveforms.

## Jacks (CV/Eurorack only — no guitar-level I/O)
- **Hard Sync / Soft Sync**: ±5V inputs to reset or directionally modulate oscillator phase.
- **V/Octave**: Standard 1V/octave pitch CV input.
- **Shape Insert**: ±5V external waveform input (also feeds Sub Source).
- **Lin FM / Expo FM**: Audio-rate and exponential frequency-modulation CV inputs.
- **Pulse Width CV / Transform CV / µTune CV**: Modulation inputs for their respective controls.
- **Outputs**: Sine, Triangle, Saw, Rectangle, Complex, Sub Pulse, Sub Square (seven simultaneous outputs; all ±5V except Complex at ±10V max).

## Notes for patch-building
- Excluded from normal GP-5/pedalboard signal-chain placement entirely — there is no module-order slot for a bare Eurorack oscillator, and it does not process an incoming guitar signal the way every other pedal in this library does.
- Only relevant to a build that already includes a Eurorack case plus a pitch-to-CV converter fed from the guitar (turning the guitar into an oscillator-control source) — a niche, modular-synth-adjacent use case, not a typical drive/mod/delay/reverb role.
- If a patch calls for "synth-guitar" or waveshaping textures on a normal board, prefer a guitar-pedal-format alternative (e.g., an actual guitar synth/octave-fuzz-style pedal) rather than this module.
