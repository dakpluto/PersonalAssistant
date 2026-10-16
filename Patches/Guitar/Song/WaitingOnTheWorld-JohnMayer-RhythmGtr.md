# Waiting on the World to Change (Rhythm Guitar) — John Mayer

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: WaitWorld-. Patch VOL: 50.
Preset tempo: 88 BPM.

From *Continuum* (2006). About 88 BPM, est.
A Curtis Mayfield-style soul groove: clean, warm Strat double-stops and chord fragments with a relaxed feel, and a vocal-like lead.
Mayer's Continuum-era clean is usually described as Dumble or Two-Rock territory. The MayerDumble snaptone is a real Dumble ODS clean capture, so this patch goes straight at it.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the double-stops. Neck pickup for the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 189.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone MayerDumble (slot 66): SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102) + Bogner 2x12 EVM12L - SM57 1 - Cap Edge.
Slot: 66. Always on.
Gain: 45, VOL: 70, Bass: 50, Middle: 58, Treble: 52.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 14.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 30.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 28.
Tone: 50.
VOL: 66.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 1.
1kHz: 1.
3kHz: 0.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 10.
Time: 340.
Feedback: 18.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
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

Approved audit entry 189.
- DLY Mix: 14 -> 10.
- RVB Mix: 14 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
