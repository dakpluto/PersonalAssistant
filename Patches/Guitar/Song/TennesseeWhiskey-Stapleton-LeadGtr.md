# Tennessee Whiskey - Chris Stapleton (Lead Guitar)

## Target and setup
Type: Song. Instrument: Michael's HSS Stratocaster. Full Board: True.
Board Option: Neither. MIDI: False.
GP-5 display: TNWhiskey. Patch VOL 50. Tempo 68 BPM, estimated working value.
Chris Stapleton's Traveller arrangement. Warm, rounded soul-blues lead with a little hair on hard attacks.
The lead role includes the opening melody, vocal responses and featured solo.
This is not a bright country chicken-picking patch.
Stapleton describes Jazzmasters and early-'60s Princetons as his core rig in the Relix interview.
Fender documents the brown 6G2 Princeton behind his signature amp.
Those sources establish his broader sound, not the exact Tennessee Whiskey studio chain.
The loaded Deluxe capture is a practical Fender-family substitute, not a Princeton model.

## Board choice
Neither American Sound nor White Tape adds a necessary independent role.
The selected capture and GP-5 effects cover this lead arrangement.
Keep the Full Board connected with the external pedals bypassed.

## GP-5 module order and settings
Fixed module order: NR > PRE > DST > AMP > CAB > EQ > MOD > DLY > RVB.
The N->S block is encoded between DST and the bypassed AMP/CAB stages.
All settings below are fixed. CTL changes bypass only.

**NR - Gate - always on**
THRE 8. No CTL assignment.
Use a low threshold to preserve quiet fills and sustained bends.
The encoder catalog exposes only THRE for Gate; no NR volume is encoded.

**PRE - off**
No compressor or boost. Preserve touch and avoid another gain stage.

**DST - CTL**
Green OD: Gain 10, Tone 38, VOL 53. CTL off bypasses it; CTL on engages it.
Very low drive adds a little hold and a darker mid focus for the solo.
This is a utility adaptation for the Strat, not a claim that Stapleton used a Tube Screamer on the recording.
It is the only added drive stage. Do not stack a board overdrive on top.

**N->S / AMP / CAB**
N->S slot 63, G3 EdgyTwang, always on.
NAM: EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy].
Cab inside the capture: Brown Deluxe 1x12 Medium Mix.
Gain 50. VOL 70. Bass 52. Middle 54. Treble 43.
Gain 50 keeps the recorded breakup behavior. VOL 70 follows Michael's audited minimum.
Slightly fuller low mids and reduced treble round off the Strat's sharper edge.
The IR name does not turn the blackface Deluxe NAM into a brown Princeton.
AMP and CAB stay off. No separate IR needs loading.

**EQ - CTL**
Guitar EQ 1: 125Hz -1, 400Hz +1, 800Hz +2, 1.6kHz +1, 4kHz -2, VOL 53.
CTL off bypasses it; CTL on engages it.
The modest mid lift and post-capture level change let the solo step forward without a big gain jump.
EQ numbers are GP-5 control values, not verified acoustic dB.

**MOD / DLY / RVB**
MOD off. DLY off.
No chorus, automatic tremolo or repeated echo is needed for this lead interpretation.
RVB Spring always on: Mix 13, Decay 24, Trail true.
Short spring supplies a little amp-like space without washing out the pauses.
The spring is a tone-design choice, not a claim about the brown Princeton's onboard features.

## CTL and section map
CTL assignments: DST + EQ (2 of 3 blocks).
All assigned blocks load off. A CTL press flips them on together; the next press flips them off.
No MIDI controls. No knob changes between CTL states.
CTL off: opening melody, gentle fills and backing figures. Green OD off. EQ off.
Use neck pickup, guitar volume 7-8 and tone about 7.
CTL on: featured solo and stronger closing responses. Green OD on. EQ on.
Use neck pickup and guitar volume 10. Keep the same tone position.
Return CTL off behind the vocal. No board stomps are needed.
Both states keep the same capture and spring settings.

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
Use the neck single coil first. Let the low strings stay round without striking them too hard.
Play behind the beat and leave room around the vocal.
Use slow bends and finger vibrato; do not chase sustain by adding more compression.
The bridge humbucker is usually too sharp and dense for the intended voice.
The CTL-off sound also supports the song's restrained rhythm figures.
Check CTL at the same monitoring volume as the backing track.
If the solo lift is excessive, reduce EQ VOL first; avoid lowering the audited capture VOL to solve that jump.
If the gate trims a quiet held note, lower THRE.
The preset has been encoded and documented, but has not been auditioned on Michael's physical rig.

## Sources and design limits
Chris Stapleton's first-person rig description, Relix, Songs of Myself:
https://relix.com/features/detail/chris_stapleton_songs_of_myself
Fender, '62 Princeton Amp Chris Stapleton Edition:
https://www.fender.com/articles/parts-and-accessories/62-princeton-amp-chris-stapleton-edition
Loaded capture and parameter references: NAMs/snaptone_combos.md, Modules/, Pedals/Fixed-Board/ and Tools/fxid_ring_gp5.json.
The documented controls are real. Tonal matching and effect values are design choices for Michael's rig.
Created October 16, 2026.
