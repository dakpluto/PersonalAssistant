# We Got Used to Us (Lead Guitar) — Riverside

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-WeGotUse. Patch VOL: 50.
Preset tempo: 90 BPM.

Riverside. BPM est. Moody, melodic, slow. The lead guitar is smooth and vocal: light-to-medium overdrive, lots of sustain, and space from delay and reverb, Gilmour-influenced. Built from the band's general sound; the exact rig on the recording is not verified.
Instrument: Stratocaster (HSS). Use the neck or middle pickup for the softer lead lines, bridge humbucker for the peaks.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 190.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone ProgDumble (slot 73): SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S (Dumble ODS #102) + V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603 (Mesa V30).
Slot: 73. Always on.
Gain: 47, VOL: 65, Bass: 50, Middle: 55, Treble: 50.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 35.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 20.
Tone: 50.
VOL: 65.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 1

125Hz: -1.
400Hz: 0.
800Hz: 2.
1.6kHz: 1.
4kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 18.
Time: 480.
F.Back: 24.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 15.
Decay: 40.
Damp: 50.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Base lead. GP-5 active: NR, PRE, EQ, RVB, N->S.
- First CTL press: Expressive solo. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 190.
- Pedal display name: WeGotUsedToUs-Riverside-LeadGtr -> G-WeGotUse. Filenames stay unchanged.
- DST Gain: 35 -> 20.
- DLY Mix: 25 -> 18.
- DLY F.Back: 30 -> 24.
- RVB Trail: false -> on.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
