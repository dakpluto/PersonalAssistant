# The Bread Has Been Broken — Jeff Deyo

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: BreadBrkn. Patch VOL: 48.
Preset tempo: 72 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
Part of a 5-song worship set. The board ahead of the GP-5 is fixed across all 5 songs — see "Full Pedalboard" below. Only this GP-5 patch changes song to song.
A communion song — slow and reverent, in E, roughly 72 BPM (no published tempo found; built to feel like a quiet, unhurried ballad). This is the stillest moment in the set. The bass needs to all but disappear into the background: dark, warm, minimal presence, nothing that draws attention to itself. No CTL — a footswitch change during a communion moment would be a distraction, not a feature. One tone, held the whole song.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 20.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone WorshipSVT (slot 59): SVT CLEAN PUSHED (SVT-CL) + Ampeg SVT Bright Beta52.
Slot: 59. Always on.
Gain: 50, VOL: 55, Bass: 58, Middle: 45, Treble: 42.
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

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 2.
400Hz: -3.
800Hz: 0.
4.5kHz: -5.
VOL: 48.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Church

Mix: 6.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Quiet communion support. GP-5 active: NR, EQ, RVB, N->S.
- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Five-song worship set: Bread / Giving It All / Thrive / Unstoppable God / Your Love. Knob settings stay fixed for this entire set; footswitches may change.
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

On throughout the set.
COMP: 42.
TONE: 50.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

Drive on throughout the set; preamp active throughout.
Drive: 25.
Blend: 35.
Presence: 55.
Level: 55.
Treble: 55.
Middle: 58.
Bass: 55.
Mid-Frequency: 500Hz.
Bass-Shift: 80Hz.
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

Bypassed throughout the set.
Width: 30.
Depth: 25.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout the set.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive on throughout the set; preamp active throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout the set.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 20.
- PRE: COMP -> off.
- EQ 50Hz: 5 -> 1.
- EQ 800Hz: -3 -> 0.
- RVB Mix: 20 -> 6.
- RVB Decay: 60 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
