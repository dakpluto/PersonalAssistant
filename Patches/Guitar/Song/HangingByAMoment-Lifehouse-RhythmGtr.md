# Hanging by a Moment (Rhythm Guitar) — Lifehouse

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Hanging-Gt. Patch VOL: 50.
Preset tempo: 124 BPM.

From *No Name Face* (2000). About 124 BPM, est.
Driving 2000-era radio rock. A mid-gain riff and chugging verse rhythm, then bigger, wider chords in the chorus.
Mid-gain, not high-gain. The guitars crunch but never get Rectifier-heavy.
Built from the song's overall sound. I haven't verified Jason Wade's exact guitars, amps or tuning on this track. Check your tuning against the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. Roll the guitar volume to about 8 for the verses if they get too thick.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 157.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone ClassicMarshall (slot 68): JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700 + V7X_dc (Marshall 1960AV).
Slot: 68. Always on.
Gain: 48, VOL: 50, Bass: 50, Middle: 58, Treble: 56.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 28.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Super OD

Gain: 25.
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
500Hz: -1.
1kHz: 1.
3kHz: 2.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 10.
Time: 363.
Feedback: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 14.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 157.
- DST Gain: 35 -> 25.
- DLY Mix: 16 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
