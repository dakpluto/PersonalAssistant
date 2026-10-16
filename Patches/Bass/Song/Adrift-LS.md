# Adrift-LS — Adrift by Lunatic Soul

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run active.
GP-5 only.
Patch screen name: Adrift - L. Patch VOL: 50.
Preset tempo: 100 BPM.

Atmospheric fretless bass for Adrift. Sire V7 in active mode, flatwounds. Set its onboard EQ near flat and check the actual input peaks. Active mode is a voicing option, not a guarantee of more downstream headroom. Avalon supports the clean line; CTL adds restrained delay and Hall for the spacious passages.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 8.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 50, VOL: 75, Bass: 55, Middle: 45, Treble: 50.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 8.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 2.
400Hz: -3.
800Hz: -2.
4.5kHz: 2.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - B-Chorus

Depth: 22.
Rate: 0.35.
VOL: 52.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Analog

Mix: 18.
Time: 450.
Feedback: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 18.
Decay: 55.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DLY, RVB.
- CTL off / loaded state: Clean fretless support. GP-5 active: NR, EQ, MOD, N->S.
- First CTL press: Ambient delay/Hall voice. GP-5 active: NR, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 8.
- SnapTone Bass: 60 -> 55.
- NR THRE: 20 -> 8.
- EQ 50Hz: 3 -> 1.
- DLY Mix: 30 -> 18.
- RVB Mix: 35 -> 18.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
