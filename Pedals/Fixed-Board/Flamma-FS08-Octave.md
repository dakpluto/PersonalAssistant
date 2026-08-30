# Flamma FS-08 Octave

Polyphonic octave pedal. Sits first in the pedalboard chain, before compression/fuzz/drive.

## Knobs
- **-2OCT**: Level of the -2 octave (two octaves down) voice
- **-OCT**: Level of the -1 octave (one octave down) voice
- **+OCT**: Level of the +1 octave (one octave up) voice
- **+2OCT**: Level of the +2 octave (two octaves up) voice
- **Dry**: Level of the unprocessed dry signal

Each octave knob is its own volume for that voice — set to 0 (fully counterclockwise) to exclude that voice entirely. Any combination of the four can run simultaneously (e.g. +OCT & +2OCT together for a 12-string-like stack, or all four for a synth-organ wall).

## Controls
- **SAVE/SELECT button**: Tap to cycle through the 7 preset slots. Hold ~2 seconds to save the current knob positions to the active slot.
- **Footswitch**: Engages/bypasses the octave effect (true bypass when off).
- **LED slots 1–7**: Show the active preset; blink to confirm a save.

## Notes for patch-building
- No dry-through-only "off" via knobs — bypass fully with the footswitch when a song calls for the pedal to be silent.
- Because it's polyphonic, chords track reasonably well, but heavy +2OCT/-2OCT mixes get glitchy on fast playing — best used on sustained notes/chords, not fast lead runs.
