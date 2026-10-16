# Low Rider — War

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: LowRider-W. Patch VOL: 50.
Preset tempo: 106 BPM.

Why Can't We Be Friends?, 1975. 106 BPM, est.
B.B. Dickerson's bass line is the entire song — that descending riff has to sit warm, round, and laid-back, not punchy or aggressive. This is a muted, almost palm-muted P-bass sound, not a bright modern tone.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 74.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone FullB15 (slot 54): Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N) + Apg115410.
Slot: 54. Always on.
Gain: 48, VOL: 80, Bass: 55, Middle: 50, Treble: 35.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 45.
VOL: 60.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 0.
120Hz: 1.
400Hz: 2.
800Hz: 0.
4.5kHz: -4.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Dry main riff. GP-5 active: NR, PRE, EQ, N->S.
- No GP-5 CTL change. One consistent GP-5 voice serves this bass part.

## Revision record

Approved audit entry 74.
- SnapTone Bass: 65 -> 55.
- SnapTone Middle: 45 -> 50.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ 50Hz: 4 -> 0.
- EQ 120Hz: 3 -> 1.
- EQ 800Hz: -3 -> 0.
- RVB: Room -> off.
- RVB: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
