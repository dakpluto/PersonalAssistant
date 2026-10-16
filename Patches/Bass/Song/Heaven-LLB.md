# Heaven-LLB — Heaven by Los Lonely Boys

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run passive.
GP-5 only.
Patch screen name: Heaven - L. Patch VOL: 50.
Preset tempo: 76 BPM.

Los Lonely Boys, self-titled debut, 2003. ~76 BPM, est.
JoJo Garza's bass sits warm and round under the Tejano-soul groove — supportive, never flashy, with a soulful lift when the chorus opens up.
GP-5 only, Sire fretless (Passive), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 48.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone FullB15 (slot 54): Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N) + Apg115410.
Slot: 54. Always on.
Gain: 50, VOL: 80, Bass: 56, Middle: 55, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 35.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 2.
400Hz: -2.
800Hz: 0.
4.5kHz: 2.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 8.
Decay: 30.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: verse groove. GP-5 active: NR, EQ, N->S.
- First CTL press: chorus lift. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 48.
- SnapTone Bass: 65 -> 56.
- NR THRE: 20 -> 10.
- EQ 50Hz: 3 -> 1.
- RVB Mix: 30 -> 8.
- RVB Decay: 45 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
