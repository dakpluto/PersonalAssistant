# Mary Jane's Last Dance (Rhythm Guitar) — Tom Petty

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-MaryJane. Patch VOL: 50.
Preset tempo: 84 BPM.

Tom Petty and the Heartbreakers, 1993. It was the new track on *Greatest Hits*. About 84 BPM, est.
The main riff is a minor-key groove in A minor. Harmonica rides over the top.
The Heartbreakers' guitar sound is built on small combos pushed just into breakup. It's crunchy but never saturated.
Built from the band's general sound. I haven't verified the exact guitars and amps used on this track.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the riff, bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 170.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: EVM112. Encoded as User IR 5.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 25.
Tone: 55.
VOL: 68.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Foxy 30TB

Gain: 38.
Tone Cut: 45.
VOL: 60.
Bass: 50.
Treble: 58.
Char: 0.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 5

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 14.
Time: 360.
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
- CTL off / loaded state: Rhythm. GP-5 active: NR, AMP, CAB, EQ, RVB.
- First CTL press: Lead. GP-5 active: NR, DST, AMP, CAB, EQ, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 170.
- Pedal display name: MaryJane-TP-Gtr -> G-MaryJane. Filenames stay unchanged.
- DST Gain: 35 -> 25.
- RVB Mix: 14 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
