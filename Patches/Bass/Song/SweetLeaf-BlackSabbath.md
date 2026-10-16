# Sweet Leaf — Black Sabbath

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: SweetLeaf. Patch VOL: 52.
Preset tempo: 94 BPM.

From *Master of Reality* (1971). About 94 BPM for the main riff, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Tuning: as far as I know the record is down a step and a half, in C#. On the 5-string you can stay in standard and play the riff off the low B, reading everything down a step and a half. Or detune to match the guitarist.
Geezer Butler's part doubles and thickens the riff. It's fat, fuzzy, and loud, part of the wall rather than underneath it.
I haven't verified the exact bass rig on the record.
Fingers, dug in hard. Both pickups up, P forward. Tone knob around 60%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 113.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone HairySVT (slot 58): SVT SANS HAIRY DRIVE (SVT-CL) + Sunn215.
Slot: 58. Always on.
Gain: 50, VOL: 55, Bass: 55, Middle: 58, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 25.
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
400Hz: 2.
800Hz: 1.
4.5kHz: -3.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: PRE.
- CTL off / loaded state: Main riff and verses. GP-5 active: NR, EQ, N->S.
- First CTL press: Middle jam. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 113.
- SnapTone Bass: 60 -> 55.
- PRE Gain: 40 -> 25.
- DST: Bass OD -> off.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
