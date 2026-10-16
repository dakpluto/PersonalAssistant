# In Two Minds (Lead Guitar) — Riverside

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-InTwoMin. Patch VOL: 50.
Preset tempo: 100 BPM.

Riverside, prog rock/metal. BPM est. The lead guitar here is a fat, singing, sustained modern-prog lead: overdriven but articulate, with long delay tails behind it, in the Gilmour-influenced tradition. Built from the band's general sound; the exact guitar and amp on the recording are not verified.
Instrument: Stratocaster (HSS). Use the bridge humbucker for leads.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 165.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone ProgDumble (slot 73): SLAMMIN_DUMBLE_FORD_OD_SMOOTH_S (Dumble ODS #102) + V30 UR 4FB 4x12 SM57 1.00in 0.0in 7603 (Mesa V30).
Slot: 73. Always on.
Gain: 53, VOL: 65, Bass: 45, Middle: 60, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 25.
+3dB: off.
Bright: off.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: 1.
1kHz: 2.
3kHz: 2.
6kHz: -1.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 18.
Time: 420.
Feedback: 30.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 12.
Decay: 35.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, EQ, DLY.
- CTL off / loaded state: Base lead. GP-5 active: NR, RVB, N->S.
- First CTL press: Solo lift. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 165.
- Pedal display name: InTwoMinds-Riverside-LeadGtr -> G-InTwoMin. Filenames stay unchanged.
- NR THRE: 25 -> 12.
- PRE Gain: 60 -> 25.
- PRE +3dB: true -> off.
- DST: Green OD -> off.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- DLY Mix: 25 -> 18.
- RVB Trail: false -> on.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
