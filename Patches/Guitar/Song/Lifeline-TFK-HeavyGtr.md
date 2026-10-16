# Lifeline - Thousand Foot Krutch (Heavy Rhythm and Lead Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: LifeHeavy. Patch VOL 50. Working tempo 90 BPM (estimate, not measured).
Original TFK recording. Companion to Lifeline-TFK-CleanGtr.
This preset covers the heavy rhythm entries, chorus weight and any prominent single-note lead line in your arrangement.
It does not force a solo onto a section that is primarily a vocal hook.
The official source identifies the target version, not the exact amp, pedals or settings.
The following amp choice is a tonal design for Michael's HSS Strat, not a documented recording rig.

## Amp and cabinet foundation

Mess DualM is the GP-5's Rectifier modern-channel model, chosen for firm low end and dense hard-rock drive.
Gain 53 supplies saturation without maxing it. Bass 42 limits boom under down-tuned riffs.
Middle 56 retains note definition; Treble 54 and PRES 48 keep a sharp but controlled attack.
AMP VOL 50 and CAB VOL 50 are conservative starting levels, not a verified loudness match to the clean preset.
V30112 is confirmed in User IR 10 and is encoded as the active CAB. No new IR installation is required.
No NAM is used. PRE and DST are off; the amplifier is the only gain source.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 27.
A moderate threshold tightens pauses without using the gate to hide weak muting. Lower it if a sustained lead closes early.

**PRE: off.**

**DST: off.**

**AMP: Mess DualM - always on.**
Gain 53. PRES 48. VOL 50. Bass 42. Middle 56. Treble 54.
See the amp/cab foundation above for the selection and parameter reasoning.

**CAB: User IR 10 - always on.**
VOL 50.
See the amp/cab foundation above for the selection and parameter reasoning.

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -2. 400Hz 0. 800Hz 2. 1.6kHz 2. 4kHz -1. VOL 54.
Post-amp level and mid lift lets a lead line step forward while keeping the rhythm gain fixed.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 14. Time 360. Feedback 22. Trail true.
Solo/fill echo only. Low mix and feedback preserve the attack; rhythm stays dry apart from the small room.

**RVB: Room - always on.**
Mix 6. Decay 22. Trail true.
A short, low-level room keeps the heavy rhythm defined.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: heavy riff, full-band chorus backing and any tight stop/start figures. EQ off; delay off.
CTL on: a featured melodic line or sustained fill when you take the lead role. EQ on; delay on.
Return CTL off for dense rhythm under the vocal. Do not engage the lead echo automatically for every chorus.
Use Lifeline-TFK-CleanGtr for the exposed lighter passages. Select this heavy preset with CTL off for the next distorted entry.
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
Original TFK lyric video, the target version:
https://www.youtube.com/watch?v=-HXUyEWP1DE
Trevor McNevan interview on the Exhale project:
https://musicmattersmagazine.com/2016/08/15/inhale-exhale-interview-with-trevor-mcnevan-of-thousand-foot-krutch-with-song-river/
Parameter and slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md, IRs/ir.md and Tools/fxid_ring_gp5.json.
Effect values and tonal substitutes are design choices unless specifically sourced above.
Created October 16, 2026.
