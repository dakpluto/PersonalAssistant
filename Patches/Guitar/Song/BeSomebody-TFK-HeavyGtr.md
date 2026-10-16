# Be Somebody - Thousand Foot Krutch (Heavy Rhythm and Lead Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: BeSmHeavy. Patch VOL 50. Working tempo 94 BPM (estimate, not measured).
Original TFK recording. Companion to BeSomebody-TFK-CleanGtr.
This preset covers the heavy rhythm entries, chorus weight and any prominent single-note lead line in your arrangement.
It does not force a solo onto a section that is primarily a vocal hook.
The official source identifies the target version, not the exact amp, pedals or settings.
The following amp choice is a tonal design for Michael's HSS Strat, not a documented recording rig.

## Amp and cabinet foundation
SnapTone 72: RectifierCrunch: MESA DUAL RECTIFIER 2025 CRUNCH RHYTHM #1 + V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603.
Gain 50. VOL 70. Bass 47. Middle 54. Treble 49.
The encoded N->S block is always on, between DST and the bypassed AMP/CAB.
RectifierCrunch in slot 72 gives the fuller chorus a firm attack without excessive saturation.
NAM: 1. MESA DUAL RECTIFIER 2025 | CRUNCH | RHYTHM #1.
IR inside the capture: V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603, Mesa V30.
Gain 50 retains the capture. VOL 70 follows Michael's audit.
Bass 47 keeps the low rhythm clear; Middle 54 holds it forward in the mix; Treble 49 avoids extra fizz.
This is the approved preamp-only NAM plus IR combo. Its response is not a full amp/power-stage recreation.
AMP and CAB are off. No separate cab load is required. PRE and DST are off.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 23.
A moderate threshold tightens pauses without using the gate to hide weak muting. Lower it if a sustained lead closes early.

**PRE: off.**

**DST: off.**

**AMP: off.**

**CAB: off.**

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -2. 400Hz 0. 800Hz 2. 1.6kHz 2. 4kHz -1. VOL 54.
Post-amp level and mid lift lets a lead line step forward while keeping the rhythm gain fixed.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 16. Time 430. Feedback 22. Trail true.
Solo/fill echo only. Low mix and feedback preserve the attack; rhythm stays dry apart from the small room.

**RVB: Room - always on.**
Mix 8. Decay 22. Trail true.
A short, low-level room keeps the heavy rhythm defined.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: heavy riff, full-band chorus backing and any tight stop/start figures. EQ off; delay off.
CTL on: a featured melodic line or sustained fill when you take the lead role. EQ on; delay on.
Return CTL off for dense rhythm under the vocal. Do not engage the lead echo automatically for every chorus.
Use BeSomebody-TFK-CleanGtr for the exposed lighter passages. Select this heavy preset with CTL off for the next distorted entry.
Preset changes can have a short gap and need not preserve delay tails. Change on a rest where possible.
All external pedals remain bypassed; no drive stacking or extra board stomp is required.

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
Use the bridge humbucker, guitar volume 10 and tone about 8-10. Keep palm muting close to the bridge. Reduce amp/capture gain before adding a tighter gate if fast notes smear. The record layers guitars; one mono patch will not create the width of separately played double tracks.
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
