# The Attack of the Dead Men - Sabaton (Rhythm and Lead Guitar)

## Target and setup
Song patch. HSS Stratocaster. Full Board: True. Board Option: Neither. MIDI: False.
Display: DeadMen. Patch VOL 50. Working tempo 120 BPM (estimate, not measured).
Target: the original studio song on The Great War, not the later Radio Tapok collaboration.
The guitar role is the tight rhythmic drive, large chorus chords and featured melodic lead.
Keep riff accents percussive and leave the backing synth/orchestral layer to the track or other players.

## Amp and cabinet foundation

Eagle 120 is based on an ENGL Savage 120, paired with the confirmed V30112 IR in User IR 10.
This is a designed ENGL-family power-metal tone, not a claim about these songs' exact recording amplifiers.
Kemper lists Chris Rorland among its users; that alone does not identify the profiles or studio chain for either recording.
Gain 55 leaves enough definition for rhythm and enough sustain for lead. AMP VOL 50. CAB VOL 50.
Bass 43 prevents loose low-end buildup. Middle 57, Treble 55 and PRES 50 keep the riff articulate.
The IR reference is encoded and already loaded. No NAM or new IR installation is required.
PRE and DST are off. Do not add a front-end boost to the already saturated amp.

## GP-5 settings
Order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
**NR: Gate - always on.**
THRE 26.
Moderate gating supports the rests. It should not shut off sustained lead notes; lower THRE if it does.

**PRE: off.**

**DST: off.**

**AMP: Eagle 120 - always on.**
Gain 55. PRES 50. VOL 50. Bass 43. Middle 57. Treble 55.
See the amp/cab foundation above for the selection and parameter reasoning.

**CAB: User IR 10 - always on.**
VOL 50.
See the amp/cab foundation above for the selection and parameter reasoning.

**EQ: Guitar EQ 1 - CTL: off at load, on after press.**
125Hz -2. 400Hz 0. 800Hz 2. 1.6kHz 2. 4kHz -1. VOL 54.
The post-amp mid/level lift makes the solo stand above the rhythm without changing the amp gain.

**MOD: off.**

**DLY: Analog - CTL: off at load, on after press.**
Mix 15. Time 375. Feedback 21. Trail true.
375 ms is a free-time lead echo, not a verified studio subdivision. It is bypassed for rhythm and engaged for the featured solo.

**RVB: Room - always on.**
Mix 6. Decay 20. Trail true.
A very small room adds continuity without smearing the rhythmic pulse.

## CTL and section map
Assigned blocks: EQ + DLY.
Each press flips these blocks together. Their settings stay fixed; CTL changes bypass only.
No MIDI or CTL-conditional parameter values are used.
CTL off: main riff, verse rhythm and chorus backing. EQ off; delay off. Room stays on.
CTL on: featured solo and prominent lead melody. EQ on; Analog delay on.
Return CTL off immediately when going back to the tight riff.
The delay tail may continue briefly; avoid playing over the next stop if it masks the rest.
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
Official original-song reference:
https://www.sabaton.net/discography/the-great-war/the-attack-of-the-dead-men/
Kemper artist listing (general rig context only):
https://www.kemper-amps.com/hall-of-fame
Parameter and slot references: Modules/, Pedals/Fixed-Board/, NAMs/snaptone_combos.md, IRs/ir.md and Tools/fxid_ring_gp5.json.
Effect values and tonal substitutes are design choices unless specifically sourced above.
Created October 16, 2026.
