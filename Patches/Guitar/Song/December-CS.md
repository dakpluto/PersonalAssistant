# December - Collective Soul

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: December -. Patch VOL: 50.
Preset tempo: 120 BPM.

December on HSS Strat. Retain the original vibe-to-driven contrast, with much smaller compression output and EQ boosts. ClassicMarshall is a JCM800 capture, not a JTM45. The section map is the existing cover interpretation; verify it against the chosen recording rather than treating the old intro description as established fact.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 152.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone ClassicMarshall (slot 68): JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700 + V7X_dc (Marshall 1960AV).
Slot: 68. Always on.
Gain: 52, VOL: 50, Bass: 55, Middle: 60, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 60.
VOL: 55.
Clip: 50.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - La Charger

Gain: 35.
Tone: 60.
VOL: 60.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: -1.
1kHz: 2.
3kHz: 2.
6kHz: 0.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - M-Vibe

Depth: 25.
Rate: 0.6.
CTL assigned. Loads on; first CTL press switches it off.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Analog

Mix: 12.
Time: 320.
Feedback: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 35.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, MOD, DLY.
- CTL off / loaded state: Vibe intro/rhythm. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S.
- First CTL press: Driven riff/lead. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 152.
- SnapTone Treble: 65 -> 55.
- NR THRE: 35 -> 15.
- PRE VOL: 100 -> 55.
- DST Gain: 55 -> 35.
- DST VOL: 75 -> 60.
- EQ 100Hz: 5 -> 0.
- EQ 500Hz: -5 -> -1.
- EQ 1kHz: 8 -> 2.
- EQ 3kHz: 10 -> 2.
- EQ 6kHz: 5 -> 0.
- EQ VOL: 60 -> 50.
- DLY Mix: 30 -> 12.
- RVB Mix: 25 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
