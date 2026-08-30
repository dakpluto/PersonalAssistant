# Chase Bliss blooper

"Bottomless" stereo-capable looper pedal built around live-manipulable overdub layers rather than a simple record/play/overdub loop. Two banks of onboard "modifiers" (real-time loop-mangling effects) can be applied to layers as they're recorded or played back, and up to 16 overdubs can be stacked and individually navigated.

## Controls
- **Volume/Ramp**: Loop output volume; can also be re-purposed (per dip-switch setting) to ramp/ease changes to Layers, Repeats, Mod A, Stability, or Mod B
- **Layers**: Navigates through recorded overdub layers; doubles as an undo/redo control
- **Repeats**: Sets how quickly older layers fade away, for slow fade-outs or quick loop transitions
- **Stability**: Introduces vintage-tape-style wear (wow, flutter, noise, and filtering) that gradually degrades the loop over time
- **Mod A**: Controls Blooper's modifier channel A, selecting among modifiers 1–3 (exact effect depends on selected modifier)
- **Mod B**: Controls Blooper's modifier channel B, selecting among modifiers 4–6

Available modifiers (assigned across the Mod A/B banks) include Smooth Speed, Stepped Speed, Speed Trimmer, Dropper, Scrambler, Swapper, Stutter, Stretcher, Stopper, Pitcher, Trimmer, and Filter — each a distinct real-time loop-manipulation effect that can be applied momentarily (hold) or latched (press).

## Footswitches / Switches
- Record/Play footswitch: starts recording, then punches into overdub/playback
- Stop footswitch: stops loop playback
- Two modifier push-buttons (bottom of pedal): trigger Mod A / Mod B, each usable as a momentary (hold) or latching (press) effect
- Bank A / Bank B dip switches: select which modifiers are loaded into the Mod A / Mod B knobs
- Additional DIP switches: further customization of loop/record behavior (per the BLIP configuration interface)

## Notes for patch-building
- As a looper it's typically placed at or near the end of the chain (after drive/amp/cab, often after modulation) so the loop captures the fully-formed tone, though placing it earlier is valid if the goal is to loop a dry/clean signal and process overdubs differently than the live signal.
- The modifier system gives it a role beyond a plain looper — it can substitute for glitch/stutter or pitch-mangling effects live, so consider it against a dedicated glitch or pitch pedal when a patch calls for real-time loop mangling rather than just playback.
- Mono I/O with buffered bypass and analog dry-thru — unlike some Chase Bliss stereo pedals, this one does not offer a stereo signal path.
- Full knob/mode automation via MIDI (PC/CC/Clock), CV, and expression pedal control goes beyond the front panel — any knob can be assigned to external control, and the modifier movements themselves can be recorded into an overdub (Additive Recording mode) rather than just static settings.
