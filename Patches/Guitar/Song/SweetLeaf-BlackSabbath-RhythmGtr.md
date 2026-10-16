# Sweet Leaf (Rhythm Guitar) — Black Sabbath

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: SweetLeaf-. Patch VOL: 50.
Preset tempo: 94 BPM.

From *Master of Reality* (1971). About 94 BPM for the main riff, est. The middle jam speeds up.
The prototype stoner-doom riff: a huge, thick, woolly power-chord grind after the famous looped cough, and a long solo jam in the middle.
Tuning: as far as I know, *Master of Reality* was tuned down a step and a half, to C#. Tune down to match the record.
Iommi's early-70s rig is widely described as a Laney stack with a Dallas Rangemaster treble booster in front. This patch is built around that idea. I haven't verified the exact gear on this track.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. Heavier strings help with the down-tuning.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 187.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanPlexi (slot 74): Marshall JTM45 with a clean boost in front + Matchless ES212 2x12 (Celestion G12M-25 Greenbacks).
Slot: 74. Always on.
Gain: 50, VOL: 70, Bass: 55, Middle: 60, Treble: 48.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 35.
+3dB: off.
Bright: on.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 1.
500Hz: 2.
1kHz: 1.
3kHz: -1.
6kHz: -3.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 16.
Time: 380.
F.Back: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, DLY.
- CTL off / loaded state: Boosted-amp riff. GP-5 active: NR, PRE, RVB, N->S.
- First CTL press: EQ-lifted solo with Tape. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 187.
- NR THRE: 35 -> 20.
- DST: Sora Fuzz -> off.
- DST: removed from CTL.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
