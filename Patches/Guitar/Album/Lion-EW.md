# Lion — Elevation Worship (CCM / Modern Worship)

Revised 2026-10-16 following the approved library audit.
Type: Album. Instrument: HSS Stratocaster.
Full board. Board Option: White Tape.
Patch screen name: Lion - Ele. Patch VOL: 55.
Preset tempo: 72 BPM.

Elevation Worship Lion album palette on HSS Strat. Chimey rhythm, driven anthem lead, and a separately stomped pad layer. Ambient effects remain intentional, with less stacked modulation and gain. The White Tape keeps its 700ms loose ambient setting; reset it before sharing a set with the 120ms slap builds.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 136.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 40.
Tone: 60.
VOL: 65.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Foxy 30TB

Gain: 32.
Tone Cut: 40.
VOL: 60.
Bass: 45.
Treble: 62.
Char: 0.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -2.
1kHz: 0.
3kHz: 4.
6kHz: 1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 30.
Rate: 0.6.
Tone: 60.
MIDI-only. Loads on.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Tape

Mix: 25.
Time: 450.
F.Back: 35.
Trail: on.
MIDI-only. Loads on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Sweet Space

Mix: 25.
Decay: 70.
Damp: 40.
Mod: 15.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Clean ambient rhythm. GP-5 active: NR, AMP, CAB, EQ, MOD, DLY, RVB.
- First CTL press: Driven anthem lead. GP-5 active: NR, DST, AMP, CAB, EQ, MOD, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DST, MOD, DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- DST Green OD: loads off; toggle to add this block independently.
- MOD A-Chorus: loads on; toggle to remove this block independently.
- DLY Tape: loads on; toggle to remove this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- DST-only alternative from loaded state: CTL off, MIDI DST on; other MIDI blocks at their load states. GP-5 active: NR, DST, AMP, CAB, EQ, MOD, DLY, RVB. Board switches unchanged.
- MOD-only alternative from loaded state: CTL off, MIDI MOD off; other MIDI blocks at their load states. GP-5 active: NR, AMP, CAB, EQ, DLY, RVB. Board switches unchanged.
- DLY-only alternative from loaded state: CTL off, MIDI DLY off; other MIDI blocks at their load states. GP-5 active: NR, AMP, CAB, EQ, MOD, RVB. Board switches unchanged.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Clean wash: CTL off; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, AMP, CAB, EQ, MOD, DLY, RVB.
- Driven rhythm: CTL off; MIDI DST on; Base board states as listed below. Active GP-5: NR, DST, AMP, CAB, EQ, MOD, DLY, RVB.
- Reduced-effects strum: CTL off; MIDI MOD off, DLY off; Flamma off, White Tape off, King of Kings Left on/Right off; fixed Sweet Space remains on. Active GP-5: NR, AMP, CAB, EQ, RVB.
- Anthem lead: CTL on; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off, Flamma off, White Tape off. Active GP-5: NR, DST, AMP, CAB, EQ, MOD, DLY, RVB.
- Swell pad: CTL off; MIDI MOD on, DLY on; Flamma on, White Tape on, King of Kings Left on/Right off. Active GP-5: NR, AMP, CAB, EQ, MOD, DLY, RVB.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo King of Kings -> Joyo Narcissus -> Valeton GP-5 -> Donner White Tape.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Off for rhythm/lead; on for sustained pad sections only.
-2OCT: 0.
-OCT: 0.
+OCT: 25.
+2OCT: 0.
Dry: 80.

## Donner Ultimate Comp

On throughout.
COMP: 50.
TONE: 55.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## King of Kings Left

On throughout.
Volume: 55.
Gain: 20.
Tone: 55.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed; reserve for exceptional peaks after level matching.
Volume: 65.
Gain: 55.
Tone: 60.
Clipping toggle: Harder position.
Feedback toggle: Higher-gain position.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Donner White Tape

Off for strummed rhythm and anthem lead; on for sustained pads, ambient intros/bridges/outros.
Level: ~10 o’clock.
Time: 700ms (loose ambient; quarter at 85.7 BPM).
Feedback: ~11 o’clock.
Mono rig: use the top row/left channel; bottom row unused. Set Time against the track by ear. No tap tempo. Its repeats include the GP-5 reverb. Keep this fixed across the shared slap set.

## Board choreography

- Flamma FS-08 Octave: Off for rhythm/lead; on for sustained pad sections only.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: On throughout.
- King of Kings Right: Bypassed; reserve for exceptional peaks after level matching.
- Joyo Narcissus: Bypassed throughout.
- Donner White Tape: Off for strummed rhythm and anthem lead; on for sustained pads, ambient intros/bridges/outros.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 136.
- PRE: Boost -> off.
- PRE: removed from CTL.
- EQ 6kHz: 5 -> 1.
- MOD Depth: 55 -> 30.
- DLY Mix: 35 -> 25.
- RVB Mix: 40 -> 25.
- RVB Mod: 35 -> 15.
- Board Flamma: ; Off for rhythm/lead; on for sustained pad sections only.
- Board King of Kings Right: ; Bypassed; reserve for exceptional peaks after level matching.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
