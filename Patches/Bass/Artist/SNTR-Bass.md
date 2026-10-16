# SNTR-Bass — Sixpence None the Richer Signature Bass Tone

Revised 2026-10-16 following the approved library audit.
Type: Artist. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: SNTR-Bass. Patch VOL: 55.
Preset tempo: 172 BPM.

Sixpence None the Richer artist palette. Dry, bouncy pop support at rest; slower, lighter chorus and Air for the atmospheric voice. CleanSVT is the loaded SVT/8x10 combination. Exact record-by-record bass rigs and release attributions are not assumed.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 3.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanSVT (slot 53): SVT CLEAN (SVT-CL) + Apg810.
Slot: 53. Always on.
Gain: 52, VOL: 65, Bass: 60, Middle: 50, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 2.
120Hz: 4.
400Hz: -3.
800Hz: 2.
4.5kHz: 3.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - B-Chorus

Depth: 25.
Rate: 0.6.
VOL: 55.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Air

Mix: 12.
Decay: 30.
Damp: 40.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: MOD, RVB.
- CTL off / loaded state: Dry pop support. GP-5 active: NR, EQ, N->S.
- First CTL press: Chorus and Air atmosphere. GP-5 active: NR, EQ, MOD, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: MOD.
MIDI mapping lives on the controller/device, not in the .prst.
- MOD B-Chorus: loads off; toggle to add this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- MOD-only alternative from loaded state: CTL off, MIDI MOD on; other MIDI blocks at their load states. GP-5 active: NR, EQ, MOD, N->S. Board switches unchanged.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Bypassed throughout.
-2OCT: 0.
-OCT: 0.
+OCT: 0.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout.
COMP: 55.
TONE: 55.
LEVEL: 50.
Mode: TREBLE.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

Drive off throughout; preamp/EQ/Level remain active.
Drive: 20.
Blend: 20.
Presence: 50.
Level: 50.
Treble: 50.
Middle: 50.
Bass: 50.
Mid-Frequency: 500Hz.
Bass-Shift: 80Hz.
Cab-Sim (DI out): Off.
Ground Lift: Off.
The footswitch toggles drive only. Preamp EQ and Level stay active in both states. Cab-Sim/Ground Lift affect the DI path; main instrument output is unchanged.

## Joyo American Sound

Bypassed throughout.
Level: 50.
Drive: 10.
Voice: 50.
Low: 50.
Mid: 50.
High: 50.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive off throughout; preamp/EQ/Level remain active.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 3.
- MOD Depth: 40 -> 25.
- MOD Rate: 2.5 -> 0.6.
- RVB Mix: 35 -> 12.
- RVB Decay: 45 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
