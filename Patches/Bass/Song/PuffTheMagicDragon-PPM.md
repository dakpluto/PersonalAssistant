# Puff the Magic Dragon — Peter, Paul and Mary

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Puff. Patch VOL: 52.
Preset tempo: 110 BPM.

From *Moving* (1963). About 110 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The record has an upright-style acoustic bass under the guitars, as far as I can tell. This patch is an upright stand-in: dark, woody, short notes with a quick decay.
Technique does half of it. Pluck with the side of your thumb over the neck. Palm-mute lightly at the bridge. Tone knob around 20%.
No CTL. An upright plays one tone all song. Adding a second sound would be decoration, not a better part.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 93.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 47, VOL: 80, Bass: 58, Middle: 55, Treble: 22.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 8.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 28.
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

50Hz: -2.
120Hz: 2.
400Hz: 3.
800Hz: -1.
4.5kHz: -8.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 22.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Always. GP-5 active: NR, PRE, EQ, RVB, N->S.
- No GP-5 CTL change. One consistent GP-5 voice serves this bass part.

## Revision record

Approved audit entry 93.
- NR THRE: 18 -> 8.
- RVB Mix: 12 -> 5.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
