# Christmas Truce - Sabaton (Rhythm and Lead Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: XmasTruce. Patch VOL 50. Working tempo 80 BPM (estimate, not measured).
Target: the studio song on The War To End All Wars.
The guitar role is the broad distorted backing and lyrical solo, not an imitation of the exposed piano introduction.
Keep silent where the arrangement is piano/voice only; enter when the guitar part enters.
Use a lower gain and warmer mid balance than the Dead Men patch so wide chords remain intelligible.

## Amp and cabinet foundation

Eagle 120 is based on an ENGL Savage 120, paired with the confirmed V30112 IR in User IR 10.
This is a designed ENGL-family power-metal tone, not a claim about these songs' exact recording amplifiers.
Kemper lists Chris Rorland among its users; that alone does not identify the profiles or studio chain for either recording.
Gain 48 leaves enough definition for rhythm and enough sustain for lead. AMP VOL 50. CAB VOL 50.
Bass 46 and Middle 60 support the broad chords. Treble 52 and PRES 47 keep the solo smooth.
The IR reference is encoded and already loaded. No NAM or new IR installation is required.
PRE and DST are off. Do not add a front-end boost to the already saturated amp.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 21.
Moderate gating supports the rests. It should not shut off sustained lead notes; lower THRE if it does.

**PRE: off.**

**DST: off.**

**AMP: Eagle 120 - always on.**
Gain 48. PRES 47. VOL 50. Bass 46. Middle 60. Treble 52.
See the amp/cab foundation above for the selection and parameter reasoning.

**CAB: User IR 10 - always on.**
VOL 50.
See the amp/cab foundation above for the selection and parameter reasoning.

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -2. 400Hz 0. 800Hz 2. 1.6kHz 2. 4kHz -1. VOL 54.
The post-amp mid/level lift makes the solo stand above the rhythm without changing the amp gain.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 18. Time 470. Feedback 25. Trail true.
470 ms is a free-time lead echo, not a verified studio subdivision. It is bypassed for rhythm and engaged for the featured solo.

**RVB: Plate - always on.**
Mix 10. Decay 33. Damp 58. Trail true.
A restrained plate supports the lyrical leads and broad chord decay. Keep it below the choir and piano.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: distorted full-band backing and wide chorus chords. EQ off; delay off. Plate stays on.
CTL on: featured guitar solo or prominent single-note melody. EQ on; Analog delay on.
Return CTL off when supporting the vocal/choir again.
Piano-only opening or sparse vocal passages: do not strum a distorted substitute unless deliberately rearranging the song.
All external pedals remain bypassed. No extra stomp is required.

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
Use bridge humbucker, volume 10, tone 9-10 for rhythm. Try the neck single coil for a rounder solo if needed; the noise gate may need a lower threshold. Play harmony parts as separate lines with a second player or overdub. Do not substitute an octave pedal for the recorded guitar harmonies.
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
Official album and song context:
https://www.sabaton.net/discography/the-war-to-end-all-wars/
Kemper artist listing (general rig context only):
https://www.kemper-amps.com/hall-of-fame
Parameter and slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md, IRs/ir.md and Tools/fxid_ring_gp5.json.
Effect values and tonal substitutes are design choices unless specifically sourced above.
Created October 16, 2026.
