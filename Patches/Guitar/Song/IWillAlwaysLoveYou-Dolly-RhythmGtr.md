# I Will Always Love You (Rhythm Guitar) — Dolly Parton

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-IWALYDol. Patch VOL: 50.
Preset tempo: 66 BPM.

Dolly Parton, 1974. Written and recorded by Dolly. About 66 BPM, est.
This is Dolly's original country ballad, not the Whitney Houston power-ballad version.
Sparse Nashville arrangement. The guitar supports the vocal and never competes with it.
I haven't verified exactly which guitar parts are on the record. This is built from the song's overall Nashville-ballad sound.
Instrument: Stratocaster (HSS). Neck or position 4 (neck+middle) for rhythm. Neck pickup for the fills.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 162.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone TwinClean (slot 61): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ CLEAN (vulturized Twin).
Slot: 61. Always on.
Gain: 49, VOL: 75, Bass: 45, Middle: 45, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 35.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 18.
Tone: 55.
VOL: 68.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 0.
1kHz: 0.
3kHz: 1.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 12.
Time: 450.
Feedback: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Spring

Mix: 12.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, EQ, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 162.
- Pedal display name: IWALY-Dolly-Gtr -> G-IWALYDol. Filenames stay unchanged.
- DLY Mix: 18 -> 12.
- RVB Mix: 22 -> 12.
- RVB Decay: 40 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
