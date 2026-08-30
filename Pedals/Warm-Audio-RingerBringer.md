# Warm Audio RingerBringer

Analog ring modulator with an onboard drive stage, an external carrier input, and CV/expression control over its core parameters. Known for classic ring-mod dissonance and metallic tones as well as tremolo/vibrato-like textures at lower carrier frequencies.

## Controls
- **Mix**: Crossfades dry and wet (modulated) signal. Fully counterclockwise = 100% dry (no modulation), fully clockwise = 100% wet.
- **Frequency**: Sets the carrier oscillator's pitch, which determines the harmonic content of the modulated tone. Lower settings sit closer to tremolo territory; higher settings produce classic clangorous ring-mod dissonance and pitch-shifted overtones.
- **Amount**: Sets how much the LFO modulates the carrier oscillator's frequency — i.e., how far the carrier sweeps. Spans up to three octaves of sweep at full clockwise.
- **Rate**: LFO speed, 0.1 Hz to 25 Hz.
- **Drive**: Input gain stage ahead of the ring-mod circuit; adds harmonic overdrive/distortion into the modulator. Still active even when the pedal is bypassed.

## Switches
- **LO/HI (carrier range)**: Selects the carrier oscillator's frequency range — LO covers 0.6–80 Hz (deep, throbbing/tremolo-adjacent tones), HI covers 30 Hz–4 kHz (metallic, bell-like ring-mod tones).
- **Sine/Square (LFO waveform)**: Chooses the LFO shape modulating the carrier. Square produces choppier, fluttering/trembling modulation; sine gives smoother vibrato-like, gradual pitch movement.

## Jacks
- **Carrier Input**: Accepts an external audio signal (-4 dBm / 0.5V RMS) to replace the internal carrier oscillator, letting another instrument or sound source act as the modulating carrier.
- **LFO Out**: Outputs the ±1.5V LFO signal to drive other CV-capable gear.
- **CV/Expression ins (RATE, AMOUNT, MIX, FREQ)**: Stereo 1/4" jacks accepting CV or expression-pedal control over each of those four parameters individually.

## Footswitches / Switches
- Single footswitch: standard bypass on/off. Bypass LED shows red (bypassed) / green (active). A separate Level LED shows input strength through the Drive stage, and an LFO LED pulses in sync with the sine LFO rate.

## Notes for patch-building
- This is a modulation-family effect but with a much wider, weirder range than the GP-5's own MOD module — think of it as a specialty slot for dissonant/metallic textures (Frequency+Amount cranked, HI range) rather than a chorus/phaser substitute; at low Rate/Amount and LO range it can approximate tremolo/vibrato.
- The onboard Drive stage means it can double as a light front-end grit source feeding into a DST/AMP stage, independent of the ring-mod effect itself (Mix can be pulled back toward dry while still using Drive).
- CV/expression jacks make it well suited to real-time sweeps (e.g. an expression pedal on FREQ or AMOUNT) if the target board has a spare expression pedal — otherwise treat Frequency/Amount/Rate as fixed per-patch settings.
- True bypass status wasn't confirmed in research; the Drive control's audible effect in bypass suggests at least a partially always-on analog path, so budget for a small footprint/tone impact when off if chained with other true-bypass pedals.
