# Neon (Rhythm Guitar) — John Mayer

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Neon-Gtr. Patch VOL: 50.
Preset tempo: 104 BPM.

From *Room for Squares* (2001). About 104 BPM, est.
The studio track is built on Mayer's percussive, syncopated acoustic part: thumb-slapped bass notes, snappy chord stabs, and melody fragments.
On a Strat, the patch keeps that percussive energy. It's a tight, compressed, glassy clean that makes the thumb slaps and chord pops snap. CTL gives a lead voice.
Instrument: Stratocaster (HSS). Position 4 (neck+middle). Thumb for the bass notes, fingers popping the chords.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 172.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightTwin (slot 64): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ BALANCED (vulturized Twin).
Slot: 64. Always on.
Gain: 52, VOL: 75, Bass: 52, Middle: 50, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 14.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 35.
Attack: 55.
Clip: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 26.
Tone: 52.
VOL: 66.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 1.
500Hz: 0.
1kHz: 0.
3kHz: 2.
6kHz: 0.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 12.
Time: 290.
Feedback: 15.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 8.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, EQ, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 172.
- SnapTone Middle: 45 -> 50.
- PRE Sustain: 48 -> 35.
- EQ 500Hz: -2 -> 0.
- RVB Mix: 12 -> 8.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
