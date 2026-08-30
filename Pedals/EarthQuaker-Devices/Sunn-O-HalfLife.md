# EarthQuaker Devices Sunn O))) HalfLife (Octave Distortion + Booster)

Compact successor to the Sunn O))) Life Pedal, combining a Shin-Ei FY2/FY6-inspired analog octave-up fuzz feeding into a heavy distortion stage with switchable clipping, plus an independent clean boost — built in collaboration with Sunn O))).

## Controls
- **Octave (O)**: Blends in the analog octave-up effect as it's turned clockwise.
- **Distortion (D)**: Gain control for the distortion stage, offering roughly +60dB of gain; clockwise increases distortion.
- **Filter (F)**: Low-pass filter, roughly 500 Hz–30 kHz; counterclockwise adds treble/brightness, clockwise darkens/reduces it.
- **Amplitude (AMP)**: Output volume for the octave/distortion section.
- **Magnitude (MAG)**: Output volume for the separate clean booster section; unity gain around noon.
- **Clipping switch (CLIP)**: Three-position toggle — OpAmp (no diodes, more open/grinding), Asymm (asymmetrical clipping with LED, smoother crunch), or Symm (classic symmetrical double-diode clipping).

## Footswitches / Switches
- **Right footswitch**: Engages/bypasses the octave + distortion section (the octave is baked into this same section rather than switched separately).
- **Left footswitch**: Engages/bypasses the clean booster section, independently of the octave/distortion side.
- **Octave EXP jack**: Accepts a TRS expression pedal to control the analog octave blend hands-free.
- Relay-based true bypass (Flexi-Switch-style momentary/latching behavior consistent with EQD's other current pedals).

## Notes for patch-building
- Two independently footswitchable sections in one box: an octave-fuzz+distortion voice (right) and a transparent clean boost (left) — can be used together for a huge, boosted-into-distortion wall of sound, or the booster alone as a clean volume/gain push elsewhere in a set.
- The octave circuit only exists inside the distortion section (one shared footswitch) — there's no way to get the clean octave-up sound without the distortion also being active, unlike the Life Pedal which has a separate expression-controllable octave footswitch.
- Fits naturally in a DST-style slot for stoner/doom/drone tones; the clean booster half can double as an always-on preamp push into an amp, or a solo-boost placed elsewhere in the chain.
- The three-way clipping switch is a genuine circuit change (op-amp clipping vs. asymmetric vs. symmetric diodes), not just a gain-level tweak — worth documenting which position a patch uses.
