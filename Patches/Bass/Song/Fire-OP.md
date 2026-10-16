# Fire — Ohio Players

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Fire-OP. Patch VOL: 52.
Preset tempo: 116 BPM.

Fire, 1974. 116 BPM, est.
Marshall "Rock" Jones' bass on this one is the whole engine of the groove — round, punchy, fingerstyle P-bass tone sitting right in the pocket with the horns and clav, not a modern scooped slap tone.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 39.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanSVT (slot 53): SVT CLEAN (SVT-CL) + Apg810.
Slot: 53. Always on.
Gain: 55, VOL: 65, Bass: 60, Middle: 62, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 65.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 0.
150Hz: -3.
600Hz: 4.
2kHz: 2.
8kHz: 3.
VOL: 53.
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
- CTL off / loaded state: main verse groove. GP-5 active: NR, PRE, N->S.
- First CTL press: chorus / "Fire" hook sound. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 39.
- PRE Sustain: 55 -> 40.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ 33Hz: 5 -> 0.
- EQ 2kHz: 5 -> 2.
- EQ VOL: 52 -> 53.
- EQ: assigned to CTL.
- RVB: Room -> off.
- RVB: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
