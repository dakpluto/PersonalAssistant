# EarthQuaker Devices Zoar (Dynamic Audio Grinder)

A medium-to-high-gain overdrive/distortion built around discrete transistor gain stages (no op-amps or clipping diodes), with a full 3-band active-feeling EQ and an input-voicing control that shapes how the gain stage saturates.

## Controls
- **Gain**: Adjusts the transistor bias to increase distortion, from edge-of-breakup to heavy saturation.
- **Weight**: Input frequency control that changes the voice and saturation character — clockwise lets more bass into the gain stage, increasing perceived gain and loosening the feel (tight to loose).
- **Level**: Output volume; also interacts with the EQ to shift the pedal's overall voice.
- **Bass**: Passive low-frequency control, 0–800Hz, ±15dB.
- **Middle**: Passive midrange control, 500Hz–3kHz, ±10dB.
- **Treble**: Passive high-frequency control, 1kHz–10kHz, ±15dB.

## Notes for patch-building
- Discrete-transistor clipping (no diodes/op-amps) gives it a different feel than typical diode-clipping overdrives — often described as more amp-like/dynamic under pick attack, which suits it well as a drive stage feeding a clean or lightly-driven amp rather than stacking onto an already-saturated one.
- The Weight control is the key differentiator from a standard 3-knob overdrive — use it to dial in how loose/bassy the low end gets as gain increases, effectively a second gain-voicing control beyond the Gain knob itself.
- Sits naturally in the drive/distortion position of a chain, ahead of the amp (real or modeled); its full 3-band EQ means it can also do double duty shaping tone rather than relying entirely on a downstream AMP or EQ block.
- Wide gain range (edge-of-breakup to high gain) means it can cover both a rhythm-crunch and lead-boost role depending on Gain/Weight settings, though the fixed 3-knob voicing (no CTL-style mode switch) means only one setting is available at a time from a single instance.
- Relay-based true bypass (Flexi-Switch: supports both latching and momentary footswitch operation).
