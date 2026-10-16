# Your Body is a Wonderland — John Mayer (Room for Squares)

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Wonderland. Patch VOL: 55.
Preset tempo: 82 BPM.

GP-5 only build, no pedalboard. HSS Stratocaster.
Mid-tempo, around 82 BPM.
The whole song lives on one tone: warm, clean, compressed, lightly chorused.
No hard lead break — the chorus/outro sections just get a little bigger, not dirtier.
This patch uses a NAM capture for the amp/cab instead of the GP-5's built-in AMP/CAB modules — see below.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 194.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone MayerDumble (slot 66): SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102) + Bogner 2x12 EVM12L - SM57 1 - Cap Edge.
Slot: 66. Always on.
Gain: 50, VOL: 70, Bass: 50, Middle: 50, Treble: 50.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 35.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: 2.
1kHz: 1.
3kHz: 1.
6kHz: 2.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 18.
Rate: 0.5.
Tone: 55.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Room

Mix: 10.
Decay: 40.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, RVB.
- CTL off / loaded state: Clean main groove. GP-5 active: NR, PRE, MOD, N->S.
- First CTL press: Clean chorus/outro lift. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 194.
- DST: Green OD -> off.
- DST: removed from CTL.
- EQ 3kHz: 3 -> 1.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- MOD Depth: 30 -> 18.
- MOD Rate: 1 -> 0.5.
- RVB Mix: 30 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
