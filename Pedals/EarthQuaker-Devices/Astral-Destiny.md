# EarthQuaker Devices Astral Destiny (An Octal Octave Reverberation Odyssey)

Modulated octave reverb with 8 selectable reverb modes, each combining the core reverb with different octave-shifting and pitch-bending behaviors — a deep ambient/sound-design reverb rather than a natural-space reverb, with onboard preset storage.

## Controls
- **Length**: Reverb decay duration.
- **Depth**: Intensity of the built-in chorus/modulation applied to the reverb.
- **Rate**: Speed of that chorus modulation.
- **Tone**: Treble boost (clockwise) or cut (counterclockwise) of the reverb signal; center is neutral.
- **Mix**: Wet reverb output level blended with dry.
- **Mode (8-position rotary)**: Selects the reverb algorithm/character:
  - Abyss — large reverb, no octave effect
  - Shimmer — adds an upper octave to the tail
  - Sub — adds a lower octave to the tail
  - Sub Shimmer — adds both upper and lower octaves to the tail
  - Astral — upper + lower octaves combined with a regenerating tail
  - Ascend — upward pitch-bending tail (best on sustained notes/chords)
  - Descend — downward pitch-bending tail (best on sustained notes/chords)
  - Cosmos — adds a regenerating fifth to the tail (best on sustained notes/chords)
- **Preset (8-position rotary)**: Recalls one of 8 user-editable preset slots (each stores its own Length/Depth/Rate/Tone/Mix/Mode settings).
- **Expression jack**: TRS expression pedal (or CV) can take over Length, Depth, Rate, Tone, or Mix.

## Footswitches / Switches
- **Activate**: Engages/bypasses the reverb effect.
- **Stretch**: Doubles the reverb's decay length while adding a temporary pitch change; available as both a tap (toggle) and hold (momentary) function.

## Notes for patch-building
- Sits in the reverb slot at the end of the chain, same functional role as the GP-5's RVB module, but built for dramatic octave/pitch-based textures rather than a subtle room/hall/plate — think ambient swells, synth-like pads, and pitch-shifted drones rather than a "default" reverb.
- The Preset switch means a single pedal can carry multiple reverb voicings (e.g. a subtle Abyss tail and a dramatic Shimmer wash) recalled instantly, which is useful when a song needs more than one reverb character but only has one pedal slot for it — plan which preset slot corresponds to which song section.
- "Tails or Full Bypass" — configurable whether engaging the pedal cuts the reverb tail immediately or lets it ring out; check current config before assuming behavior.
- Buffered bypass (requires power to pass signal even when bypassed). 9V DC 2.1mm center-negative, 85 mA current draw.
