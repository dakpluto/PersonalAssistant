# American Pie — Don McLean

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: AmerPie. Patch VOL: 52.
Preset tempo: 138 BPM.

From *American Pie* (1971). About 138 BPM for the band sections, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A warm early-70s folk-rock bass that follows the changes with melodic walk-ups. It gets more active and driving as the song builds.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
Fingers over the neck. P pickup dominant. Tone knob around 45%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 13.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 49, VOL: 80, Bass: 58, Middle: 52, Treble: 40.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 36.
VOL: 58.
Fixed on. Not on CTL.
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
400Hz: 0.
800Hz: 1.
4.5kHz: -3.
VOL: 54.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: EQ.
- CTL off / loaded state: Early verses. GP-5 active: NR, PRE, N->S.
- First CTL press: The driving later verses and final choruses. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 13.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ VOL: 52 -> 54.
- EQ: assigned to CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
