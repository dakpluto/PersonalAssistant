# Kiss Me - Sixpence None the Richer

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: KissMeSNTR. Patch VOL: 50.
Preset tempo: 145 BPM.

Stratocaster (HSS), GP-5 only. "Kiss Me" is built on a bright, clean, twee strum — Fender Twin-clean rhythm guitar with light chorus running throughout — and a lifted, shimmering tone with slapback delay for the instrumental hook and bridge. Tempo: 145 BPM.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 168.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone TwinClean (slot 61): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ CLEAN (vulturized Twin).
Slot: 61. Always on.
Gain: 50, VOL: 75, Bass: 45, Middle: 45, Treble: 56.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 30.
Attack: 70.
VOL: 55.
Clip: 20.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 1

125Hz: -5.
400Hz: -2.
800Hz: -3.
1.6kHz: 2.
4kHz: 3.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 18.
Rate: 1.
Tone: 55.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Slapback

Mix: 14.
Time: 110.
F.Back: 15.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 40.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, DLY, RVB.
- CTL off / loaded state: Clean jangly rhythm. GP-5 active: NR, PRE, MOD, N->S.
- First CTL press: Clean hook lift. GP-5 active: NR, PRE, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 168.
- SnapTone Treble: 65 -> 56.
- DST: Yellow OD -> off.
- DST: removed from CTL.
- EQ 400Hz: -8 -> -2.
- EQ 1.6kHz: 8 -> 2.
- EQ 4kHz: 10 -> 3.
- EQ VOL: 55 -> 53.
- EQ: assigned to CTL.
- DLY Mix: 22 -> 14.
- RVB Mix: 28 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
