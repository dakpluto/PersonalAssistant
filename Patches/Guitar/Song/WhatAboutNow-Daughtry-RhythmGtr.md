# What About Now (Rhythm Guitar) — Daughtry

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: WhatAbt-Gt. Patch VOL: 50.
Preset tempo: 74 BPM.

From *Daughtry* (2006). About 74 BPM, est.
A modern-rock power ballad. Clean, open arpeggios under the verses, then a big driven chorus and a melodic solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 2 for the clean verses. Bridge humbucker for the chorus and solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 192.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone MayerDumble (slot 66): SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102) + Bogner 2x12 EVM12L - SM57 1 - Cap Edge.
Slot: 66. Always on.
Gain: 45, VOL: 70, Bass: 48, Middle: 52, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 50.
Clip: 35.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - La Charger

Gain: 40.
Tone: 55.
VOL: 64.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: -1.
1kHz: 1.
3kHz: 2.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 15.
Rate: 0.6.
Tone: 55.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Pure

Mix: 14.
Time: 608.
F.Back: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 12.
Decay: 40.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 192.
- DST Gain: 50 -> 40.
- DLY Mix: 18 -> 14.
- RVB Mix: 18 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
