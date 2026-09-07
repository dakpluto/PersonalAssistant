# TC Electronic Flashback 2 Delay

Compact digital delay pedal from TC Electronic, the successor to the original Flashback (one of the best-selling delay pedals of the 2010s). Packs eight delay types — including the studio-legendary 2290 rack delay emulation and TC's Crystal shimmer-octave delay — into a small stompbox, along with a built-in looper mode and the same pressure-sensitive MASH footswitch technology used across TC's second-generation TonePrint line.

## Controls

- **Delay**: Sets delay time.
- **Feedback**: Sets the number of repeats/regenerations of the delayed signal.
- **Level**: Sets the output level/mix of the delay repeats relative to the dry signal.
- **Type selector**: Rotary control choosing one of the eight delay types, or one of three TonePrint slots.
- **Subdivision selector**: Selects rhythmic subdivision of the tapped/set delay time — quarter note, dotted eighth note, or quarter-plus-dotted-eighth (a layered dual-tap rhythm).

## Modes

- **2290**: Emulates TC's classic 2290 rackmount digital delay.
- **Analog (Ana)**: Emulates a warmer, darker analog bucket-brigade-style delay.
- **Tape**: Emulates tape-echo character (wow/flutter, degrading repeats).
- **Dynamic (Dyn)**: A ducking delay — repeats are gated/attenuated under the dry signal and swell in during pauses, keeping the delay from clashing with playing.
- **Modulation (Mod)**: Adds chorus-like modulation (TriChorus) to the repeats.
- **Crystal**: Shifts pitch up an octave through each feedback loop (shares its algorithm with TC's Sub 'N' Up Octaver) for a shimmering, ambient delay.
- **Reverse (Rvs)**: Plays repeats back reversed.
- **Loop**: Engages the pedal's built-in looper function in place of a delay type.
- **TonePrint slots (x3)**: Store custom or artist-designed delay effects loaded via the free TonePrint app/editor.

## Switches

- **True Bypass / Buffered Bypass**: Selectable bypass behavior.
- **Kill-Dry on/off**: Mutes the dry signal so only the wet delay passes (parallel/send use); off leaves dry signal passing via Analog-Dry-Through alongside the wet delay.

## Notes for patch-building

- **MASH footswitch** behavior is mode-dependent: in 2290 it raises feedback and input level for a hold-like effect; in Analog it boosts feedback and shortens delay time toward self-oscillation; in Tape it manipulates delay time while maxing feedback; in Dynamic it controls the ducking gate threshold; in Modulation it deepens the TriChorus over the repeats; in Crystal it raises octave-shifted send, feedback, and filter spacing intensity; in Reverse it engages Kill-Dry to mute the dry signal on the fly; MASH is disabled while the Loop mode/looper is engaged.
- Typical placement: DLY slot position, late in the chain after drive/modulation and ahead of reverb — this is the GP-5's own delay-module role, so treat this pedal as a stand-in when a patch wants a texture (2290 hold, Crystal shimmer, ducking Dynamic delay) the GP-5's onboard DLY models can't reproduce.
- The built-in Loop mode gives this pedal secondary use as a simple looper without needing a separate looper pedal, though it replaces delay functionality while active (Type selector must be turned to Loop).
- As with the Hall of Fame 2, MASH is pressure/footswitch-driven rather than knob-driven — a patch relying on it needs the static Delay/Feedback/Level/Type/Subdivision settings documented alongside the intended MASH gesture and which parameter it's mapped to for that mode.
- Exact I/O jack configuration (mono vs. stereo in/out) for the standard 3-footswitch Flashback 2 wasn't fully confirmed in research beyond "stereo-capable" claims common to TC's Flashback line; verify before assuming stereo operation for a specific patch.

Sources: [FLASHBACK 2 DELAY — TC Electronic](https://www.tcelectronic.com/en/products/0709-AGB), [TC Electronic Flashback 2 Delay and Looper Owner's Manual — Manuals.plus](https://manuals.plus/tc%20electronic/flashback-2-delay-and-looper-manual)
