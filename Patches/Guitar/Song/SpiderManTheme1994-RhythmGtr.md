# Spider-Man: The Animated Series Theme (1994) (Rhythm Guitar) — Joe Perry

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-Spidey94. Patch VOL: 50.
Preset tempo: 140 BPM.

Main title theme from *Spider-Man: The Animated Series* (Fox Kids, 1994-1998). Driving hard-rock tempo, est.
Performed by Joe Perry of Aerosmith. Songwriting credits vary by source: the Saban and Shuki Levy music team is credited, and Perry is credited on some lists. Treat the credit line as approximate.
This is an instrumental hard-rock theme with a heavy riff and a screaming lead melody over it. The patch targets 90s Aerosmith-era Perry: a Marshall pushed to crunch, mid-forward, not modern-scooped.
I haven't verified the exact gear Perry used on this recording. The tone is built from his general 90s rig sound.
Instrument: Stratocaster (HSS). Bridge humbucker for both sounds.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 184.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BritishCrunch (slot 69): Marshall JTM45 I Crunch BAL DI + Origin Effects British Straight 4x12 Medium Mix.
Slot: 69. Always on.
Gain: 50, VOL: 67, Bass: 50, Middle: 60, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
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

100Hz: -2.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -2.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 16.
Time: 380.
Feedback: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 12.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, EQ, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 184.
- Pedal display name: SpiderMan94-Gtr -> G-Spidey94. Filenames stay unchanged.
- NR THRE: 35 -> 20.
- PRE Gain: 50 -> 25.
- PRE +3dB: true -> off.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
