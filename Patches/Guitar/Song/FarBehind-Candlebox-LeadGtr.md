# Far Behind - Candlebox (Lead Guitar)

## Target and setup
Type: Song. Instrument: Michael's HSS Stratocaster. Full Board: True.
Board Option: Neither. MIDI: False.
GP-5 display: FarBehind. Patch VOL 50. Tempo 90 BPM, estimated working value.
Original Candlebox studio recording, Peter Klett's blues-rock lead role.
Aim for a firm attack, forward mids and enough sustain for the solo without flattening the phrasing.
Klett recalls a Peavey VTM120, Marshall Mosfet, Ibanez Tube Screamer and Les Paul for the original You/Far Behind demos.
He says the demos were remixed for the album; his later touring rig used Mesa/Boogie amps.
The interview does not assign each original amp to a specific overdub.
ClassicMarshall is a practical VTM/Marshall-family stand-in from the loaded library, not an exact VTM120 model.
The HSS Strat's bridge humbucker is the starting point for the Les Paul-like lead weight.

## Board choice
Neither American Sound nor White Tape adds a necessary independent role.
The selected capture and GP-5 effects cover this lead arrangement.
Keep the Full Board connected with the external pedals bypassed.

## GP-5 module order and settings
Fixed module order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
The N->S block is encoded between DST and the bypassed AMP/CAB stages.
All settings below are fixed. CTL changes bypass only.

**NR - Gate - always on**
THRE 14. No CTL assignment.
Use a low threshold to preserve quiet fills and sustained bends.
The encoder catalog exposes only THRE for Gate; no NR volume is encoded.

**PRE - off**
No compressor or boost. Preserve touch and avoid another gain stage.

**DST - CTL**
Green OD: Gain 28, Tone 47, VOL 57. CTL off bypasses it; CTL on engages it.
The Tube Screamer-style stage tightens the bottom and adds controlled lead sustain.
Moderate gain keeps the attack readable. The output pushes the capture without an extreme front-end boost.
The selection follows Klett's reported use of a Tube Screamer; the numbers are designed for this rig.
Leave King of Kings and the other external drives bypassed.

**N->S / AMP / CAB**
N->S slot 68, G8 ClassicMarshall, always on.
NAM: JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700.
Cab inside the capture: V7X_dc, Marshall 1960AV.
Gain 50. VOL 50. Bass 47. Middle 55. Treble 49.
Gain 50 retains the captured crunch. VOL 50 follows Michael's audit.
Reduced bass keeps the low strings clear. A small mid lift supports the singing lead.
The lower-drive capture leaves room for Green OD to add sustain on CTL.
AMP and CAB stay off. No separate IR needs loading.

**EQ - CTL**
Guitar EQ 1: 125Hz -2, 400Hz 0, 800Hz +2, 1.6kHz +2, 4kHz -1, VOL 54.
CTL off bypasses it; CTL on engages it.
This post-capture stage supplies the actual solo level lift and a small mid emphasis.
EQ numbers are GP-5 control values, not verified acoustic dB.

**MOD / DLY / RVB**
MOD off. No chorus is imposed on the lead.
DLY Analog: Mix 14, Time 340 ms, Feedback 19, Trail true.
CTL off bypasses it; CTL on engages it.
340 ms is approximately an eighth note at the estimated 90 BPM.
This is a practical solo-space choice, not a measured recording delay time.
Low feedback leaves short tails behind sustained phrases.
RVB Room always on: Mix 9, Decay 23, Trail true.
The small room provides continuity without blurring the faster lead runs.

## CTL and section map
CTL assignments: DST + EQ + DLY (3 of 3 blocks).
All assigned blocks load off. A CTL press flips them on together; the next press flips them off.
No MIDI controls. No knob changes between CTL states.
CTL off: lighter lead fills and crunchy backing. Green OD off. EQ off. Analog delay off.
Start on the bridge humbucker, guitar volume 7-8, tone about 8.
CTL on: featured solo and prominent lead lines. Green OD on. EQ on. Analog delay on.
Use guitar volume 10. All external pedals remain bypassed.
Return CTL off for the vocal. Delay trails may continue briefly.
For the cleaner opening figure, CTL off with neck single coil and volume around 5-6 is an approximation.
This lead-focused preset does not promise the studio intro's full clean-to-heavy range.
For crunchy chorus backing, CTL off at guitar volume 10 avoids leaving the solo echo running.

## Full Board - manual settings
Chain: FS-08 > Ultimate Comp > Stylish Fuzz > King of Kings > Narcissus > GP-5.
All external pedals stay bypassed in both CTL states. No extra section stomps are needed.
These are parking positions for unused pedals, not active signal processing.
The PRST stores GP-5 settings and the SnapTone reference; external pedal settings must be set by hand.

**Flamma FS-08 - bypassed**
-2OCT 0. -OCT 0. +OCT 0. +2OCT 0. Dry 100.
SAVE/SELECT: leave the current slot unchanged. No save operation is required.

**Donner Ultimate Comp - bypassed**
COMP 9 o'clock. TONE noon. LEVEL noon. Mode NORMAL.
Preserve the guitar's dynamics; the driven stages provide enough compression.

**Donner Stylish Fuzz - bypassed**
Sustain minimum. Treble noon. Bass noon. Volume noon.
No fuzz layer is required.

**Joyo King of Kings - both channels bypassed**
Left: Volume noon. Gain minimum. Tone noon.
Left Clipping: softer clipping. Left Feedback: standard gain.
Right: Volume noon. Gain minimum. Tone noon.
Right Clipping: softer clipping. Right Feedback: standard gain.
The GP-5 handles the deliberate gain and level changes.

**Joyo American Sound - not selected**
Omit or bypass if already connected. No active knob setting is required.
Another Fender-style gain stage is unnecessary for this design.

**Joyo Narcissus - bypassed**
Width minimum. Depth minimum. Rate minimum. Mode Vintage.
No chorus is needed for the lead voice.

**Valeton GP-5**
Load this preset. Keep the specified SnapTone slot available.
It already contains the cabinet response.

**Donner White Tape - not selected**
Omit or bypass if already connected after GP-5.
The design does not need a second independent echo. No active knob setting is required.

## Playing and first level check
Start with the bridge humbucker. Keep enough pick attack to separate the faster phrases.
Use neck pickup for rounder sustained notes when desired.
Let bends arrive on pitch before widening the vibrato.
If the solo gets congested, lower Green OD Gain before lowering the guitar's tone further.
Do not add fuzz or heavy chorus to compensate for the Strat/Les Paul difference.
Check CTL at the same monitoring volume as the backing track.
If the solo lift is excessive, reduce EQ VOL first; avoid lowering the audited capture VOL to solve that jump.
If the gate trims a quiet held note, lower THRE.
The preset has been encoded and documented, but has not been auditioned on Michael's physical rig.

## Sources and design limits
Peter Klett's first-person recording and touring recollections, Guitar World, April 15, 2026:
https://www.guitarworld.com/artists/guitarists/peter-klett-candlebox-2026
Loaded capture and parameter references: NAMs/snaptone_combos.md, Modules/, Pedals/Fixed-Board/ and Tools/fxid_ring_gp5.json.
The documented controls are real. Tonal matching and effect values are design choices for Michael's rig.
Created October 16, 2026.
