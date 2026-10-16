# Heads Carolina, Tails California (Rhythm Guitar) — Jo Dee Messina

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: HeadsCarol. Patch VOL: 50.
Preset tempo: 118 BPM.

Jo Dee Messina, 90s country-pop. About 118 BPM, est. Bright, bouncy country-rock rhythm guitar: a crisp, slightly crunchy strum with a little twang, sitting on the groove. Built from the genre's general sound; the exact guitar and amp on the record are not verified.
Instrument: Stratocaster (HSS). Use the bridge or bridge-and-middle position for the twang.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 159.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone EdgyTwang (slot 63): EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Origin Effects Brown Deluxe 1x12 Medium Mix.
Slot: 63. Always on.
Gain: 51, VOL: 70, Bass: 45, Middle: 55, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 20.
Tone: 55.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 1

125Hz: -1.
400Hz: -1.
800Hz: 0.
1.6kHz: 2.
4kHz: 2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Slapback

Mix: 12.
Time: 110.
F.Back: 8.
Trail: off.
Fixed on. Not on CTL.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Spring

Mix: 15.
Decay: 25.
Trail: off.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Verse rhythm. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- First CTL press: Chorus rhythm. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 159.
- DST Gain: 30 -> 20.
- DST Tone: 60 -> 55.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
