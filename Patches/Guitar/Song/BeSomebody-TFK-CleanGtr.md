# Be Somebody - Thousand Foot Krutch (Clean Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: BeSmClean. Patch VOL 50. Working tempo 94 BPM (estimate, not measured).
Original TFK recording, not an acoustic remake or a later collaboration.
Dedicated clean companion to BeSomebody-TFK-HeavyGtr.
Use it for the exposed lighter guitar passages and any clean part you choose to retain in a one-guitar arrangement.
The clean and heavy foundations are separate presets because CTL cannot change one amp's gain settings.
No exact recording amplifier or tuning was established from the cited official material.
NashClean is a designed clean substitute, not an asserted TFK studio rig.

## Amp and cabinet foundation
SnapTone 62: NashClean: CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Brown Deluxe 1x12 Medium Mix.
Gain 50. VOL 75. Bass 48. Middle 50. Treble 51.
The encoded N->S block is always on, between DST and the bypassed AMP/CAB.
The loaded blackface Deluxe clean capture with Brown Deluxe 1x12 Medium Mix keeps the lighter part clear and rounded.
Gain 50 preserves the capture. VOL 75 follows Michael's audited minimum.
Bass 48 avoids excessive low end under the bass guitar. The small treble adjustment preserves picked detail.
The cab is already inside slot 62. No manual IR load is required.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 8.
Low threshold avoids chopping the quiet picked notes.

**PRE: COMP4 - always on.**
Sustain 18. Attack 65. VOL 50. Clip 10.
Light compression evens the clean picking. Sustain 18 keeps the envelope responsive; Clip 10 uses the catalog sensitivity baseline. The external compressor stays bypassed.

**DST: off.**

**AMP: off.**

**CAB: off.**

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -2. 400Hz 0. 800Hz 2. 1.6kHz 2. 4kHz -1. VOL 52.
A small level/mid lift supports an exposed clean melody or accent when the arrangement calls for it. It does not add distortion.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 15. Time 430. Feedback 20. Trail true.
430 ms is a free-time space setting, not a claimed tempo subdivision. CTL adds repeats for sustained clean accents; keep it off for tighter accompaniment.

**RVB: Room - always on.**
Mix 12. Decay 28. Trail true.
Low reverb mix gives the clean passage some depth while keeping the pick attack clear.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: clean intro/verse accompaniment or stripped-back sections. EQ off; delay off. All board pedals bypassed.
CTL on: optional exposed clean melody/fill. EQ on; delay on. This is an arrangement option, not an assertion that the record has a separate clean solo.
At a full-band heavy entry, select BeSomebody-TFK-HeavyGtr with CTL off and bridge humbucker.
Return to this clean preset for lighter passages. Do not expect rolling down the heavy capture to recreate this clean sound.
Preset changes may interrupt tails or have a short gap. Make the change on a rest where possible.
In a two-guitar arrangement, let the second player hold the transition.

## Full Board settings
Chain: FS-08 > Ultimate Comp > Stylish Fuzz > King of Kings > Narcissus > GP-5.
All external pedals remain bypassed in every sound described here.
These parking positions are manual settings. They are not encoded in the PRST.
- Flamma FS-08: -2OCT 0, -OCT 0, +OCT 0, +2OCT 0, Dry 100. Leave SAVE/SELECT unchanged; no save is required.
- Donner Ultimate Comp: COMP 9 o'clock, TONE noon, LEVEL noon, mode NORMAL. Bypassed to avoid extra compression.
- Donner Stylish Fuzz: Sustain minimum, Treble noon, Bass noon, Volume noon. No fuzz texture is called for.
- King of Kings left: Volume noon, Gain minimum, Tone noon. Clipping softer; Feedback standard gain. Bypassed.
- King of Kings right: Volume noon, Gain minimum, Tone noon. Clipping softer; Feedback standard gain. Bypassed.
- American Sound: not selected. Omit or bypass if connected. No active settings are required.
- Narcissus: Width minimum, Depth minimum, Rate minimum, mode Vintage. Bypassed; no external chorus is needed.
- GP-5: load the named preset and use its documented CTL map.
- White Tape: not selected. Omit or bypass if connected after GP-5. No active settings are required.
The knobs can remain at these same positions across this batch; only GP-5 preset and CTL selection change.

## Playing, tuning and level checks
Use neck/middle pickup, volume 9-10. Keep the lighter pattern even and let the sustained notes breathe. The clean Strat stands in for the lighter/acoustic layer; it does not reproduce an acoustic body or the synth/vocal layers.
Tune the guitar for the transcription/arrangement you are playing before using the patch.
No pitch transposition is encoded, and the supplied sources do not establish a verified song-by-song tuning map.
Match clean/heavy preset changes at playing volume. Use patch VOL for a whole-preset mismatch; keep the capture's audited VOL as the reference.
If only the lead jump is too large, lower EQ VOL first.
EQ band values are GP-5 controls, not calibrated acoustic dB.
Gate exposes only THRE in the encoder catalog; no NR VOL is encoded.
These are designed starting settings, not presets auditioned on Michael's physical rig.

## Why neither optional pedal
The GP-5 covers the required gain and ambience.
American Sound would add an unnecessary amp-like stage; White Tape has no necessary second-delay or independent-stomp job here.
No board stomps or knob changes are invented merely to use more pedals.

## Sources
Original TFK official audio, The End Is Where We Begin version:
https://www.youtube.com/watch?v=PGSvITdmrXM
Parameter and slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md, IRs/ir.md and Tools/fxid_ring_gp5.json.
Effect values and tonal substitutes are design choices unless specifically sourced above.
Created October 16, 2026.
