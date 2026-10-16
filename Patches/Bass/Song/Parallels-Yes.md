# Parallels — Yes

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Parallels . Patch VOL: 58.
Preset tempo: 132 BPM.

Parallels is on Going for the One (1977). Yes’s official credits distinguish Squire’s bass guitar from Wakeman’s church organ. The bass design therefore uses driven bass and focused mids without pretending the keyboard part is a vibrato bass effect.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 90.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightSVT (slot 55): SVT SANS BRIGHT DRIVE (SVT-CL) + Hartke410.
Slot: 55. Always on.
Gain: 50, VOL: 60, Bass: 55, Middle: 58, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
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

## EQ - Bass EQ 1

33Hz: 4.
150Hz: 2.
600Hz: -2.
2kHz: 3.
8kHz: 4.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 6.
Decay: 40.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Main Parallels rock voice. GP-5 active: NR, EQ, RVB, N->S.
- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.

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
LEVEL: 55.
Mode: TREBLE.

## Donner Stylish Fuzz

On throughout.
Sustain: 45.
Treble: 55.
Bass: 35.
Volume: 55.

## Joyo Tidal Wave

Drive on for the main rock voice; preamp active throughout.
Drive: 30.
Blend: 35.
Presence: 55.
Level: 60.
Treble: 55.
Middle: 62.
Bass: 50.
Mid-Frequency: 500Hz.
Bass-Shift: 40Hz.
Cab-Sim (DI out): On.
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
- Donner Stylish Fuzz: On throughout.
- Joyo Tidal Wave: Drive on for the main rock voice; preamp active throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 90.
- SnapTone Gain: 60 -> 50.
- SnapTone Middle: 70 -> 58.
- NR THRE: 35 -> 18.
- DST: Bass OD -> off.
- EQ 2kHz: 8 -> 3.
- MOD: V-Roto -> off.
- RVB Mix: 20 -> 6.
- Board Tidal Wave: Drive 30, Blend 35; Drive on for the main rock voice; preamp active throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
Source check: https://www.yesworld.com/discography/going-for-the-one/
