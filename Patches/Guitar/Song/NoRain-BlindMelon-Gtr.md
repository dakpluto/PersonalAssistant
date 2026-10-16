# No Rain - Blind Melon (Rhythm and Lead Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: NoRain. Patch VOL 50. Working tempo 148 BPM (estimate, not measured).
Original Blind Melon studio version. Focus on Stevens' electric hook and lead while supporting a practical electric rhythm sound.
Rogers Stevens identifies a Strat and '65 Fender Champ for No Rain in his May 2026 Guitar World interview.
He also recalls an MXR delay, without giving its timing or placement on individual parts.
The loaded Deluxe capture is a small-Fender substitute, not a Champ model.
The acoustic guitar and second player remain separate parts; one Strat cannot reproduce the full layered arrangement.

## Amp and cabinet foundation
SnapTone 63: EdgyTwang: EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Brown Deluxe 1x12 Medium Mix.
Gain 50. VOL 70. Bass 48. Middle 51. Treble 54.
The encoded N->S block is always on, between DST and the bypassed AMP/CAB.
EdgyTwang supplies just enough hair to respond to a harder pick attack.
Gain 50 retains the captured breakup. VOL 70 follows the audited minimum.
Bass 48 leaves space below the riff; Middle 51 and Treble 54 retain its open, wiry attack.
The Brown Deluxe IR is already inside slot 63. No manual cab load is required.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 8.
A very low threshold preserves the soft end of the hook and bends.

**PRE: off.**

**DST: off.**

**AMP: off.**

**CAB: off.**

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -1. 400Hz 0. 800Hz 1. 1.6kHz 1. 4kHz 0. VOL 53.
A restrained post-capture lift makes the solo audible without turning the song into a high-gain lead.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 8. Time 130. Feedback 8. Trail true.
130 ms is free-time short thickening, not a beat-synced echo or a verified studio delay setting. Very low mix and feedback keep the riff exposed.

**RVB: Room - always on.**
Mix 8. Decay 20. Trail true.
A small room suggests recorded space without adding an obvious spring or a long tail.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: opening electric hook, vocal responses and rhythm backing. EQ off; delay off.
Use neck or neck/middle pickup, volume 8-9, tone 9-10. Do not assume position 2 automatically splits the HSS bridge pickup.
CTL on: featured solo and stronger closing lead phrases. EQ on; short Analog echo on. Use guitar volume 10.
Return CTL off for the main hook. The capture and room remain unchanged.

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
Keep the pick attack light and let notes separate. Use fingers or a lighter pick grip if the Strat sounds too spiky. Avoid the bridge humbucker as the default; it pushes this capture harder.
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
Rogers Stevens, first-person interview, Guitar World, May 14, 2026:
https://www.guitarworld.com/artists/guitarists/blind-melon-no-rain-rogers-stevens
Parameter and slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md, IRs/ir.md and Tools/fxid_ring_gp5.json.
Effect values and tonal substitutes are design choices unless specifically sourced above.
Created October 16, 2026.
