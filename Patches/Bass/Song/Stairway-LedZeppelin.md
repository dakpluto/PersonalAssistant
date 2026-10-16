# Stairway to Heaven — Led Zeppelin

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Stairway-L. Patch VOL: 54.
Preset tempo: 72 BPM.

Led Zeppelin IV, 1971. Starts ~72 BPM and speeds up toward the end.
GP-5 only, P/J bass, no pedalboard.
John Paul Jones is on keys and recorders early on. The bass doesn't come in until the full band enters in the middle section.
Two sounds matter: a warm, round, supportive tone for the build, and a pushed, growly hard-rock tone for the solo and "And as we wind on down the road" ending.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 106.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 51, VOL: 75, Bass: 55, Middle: 55, Treble: 50.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 20.
Blend: 25.
VOL: 60.
Bass: 52.
Treble: 52.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 2.
150Hz: 2.
600Hz: 1.
2kHz: 2.
8kHz: -1.
VOL: 54.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: the middle-section build, from when the band enters up to the solo. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: guitar solo and the hard-rock ending. GP-5 active: NR, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 106.
- SnapTone Bass: 60 -> 55.
- PRE: Micro Boost -> off.
- PRE: removed from CTL.
- DST Gain: 35 -> 20.
- DST Blend: 40 -> 25.
- RVB Mix: 12 -> 5.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
