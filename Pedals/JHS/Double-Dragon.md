# JHS Double Dragon

Fully analog, monophonic octave-down/octave-up pedal built around vintage-1970s-style octave-divider circuitry rather than modern DSP pitch shifting — JHS's first octaver. Tracks best on single notes (thickened, synth-like tones); chords make the analog divider "fight to track," producing stuttering/splattering textures deliberately embraced as part of the pedal's character.

## Controls
- **Volume**: Master output level, with extra boost available beyond unity
- **Dry**: Blends clean input signal against the octave voices — full counterclockwise is fully wet (octaves only), turned up blends in more dry signal
- **OCT−**: Level of the lower sub-octave voice
- **OCT+**: Level of the upper-octave voice, which also carries its own distortion character (Octavia/Superfuzz-like grit) when engaged

## Footswitches / Switches
- **Left footswitch**: Main effect on/off
- **Right footswitch**: Engages the OCT+ (upper octave + distortion) circuit specifically — the main effect must already be on for OCT+ to function, by design

## Notes for patch-building
- With octaves rolled off (Dry maxed, OCT± down) the pedal functions as a clean always-on preamp/boost; with OCT− up it's a thick analog sub-octave (bass-doubling) effect; with OCT+ engaged via the right footswitch it adds a gritty upper-octave fuzz layer.
- The two-footswitch design (on/off + OCT+ toggle) maps naturally onto a GP-5 CTL toggle if the patch wants "octave off" vs. "octave + upper grit on" as its two states, since OCT+ is a true on/off within the pedal itself.
- Best used monophonically (single-note runs, bass lines, riffs) — chordal playing produces intentionally glitchy artifacts rather than clean tracking.
- Typical placement: early in the chain, before drive/distortion, so the octave divider tracks a clean guitar signal.
- Silent buffered bypass. Mono in/out, 9V DC center negative, 75mA — do not exceed 9V.

Sources: [JHS Double Dragon product page](https://jhspedals.info/products/double-dragon), [Guitar World: JHS Pedals launches first octaver pedal, the Double Dragon](https://www.guitarworld.com/gear/effects-pedals/jhs-double-dragon)
