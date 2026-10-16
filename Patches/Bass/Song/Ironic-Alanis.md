# Ironic — Alanis Morissette

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Ironic. Patch VOL: 52.
Preset tempo: 116 BPM.

From *Jagged Little Pill* (1995). About 116 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Light and supportive in the verses, then big, gritty, and driving in the choruses. That's classic mid-90s alt-rock dynamics.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
Fingers for the verses. Dig in harder, or switch to a pick, for the choruses. Both pickups up. Tone knob around 55%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 63.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanSVT (slot 53): SVT CLEAN (SVT-CL) + Apg810.
Slot: 53. Always on.
Gain: 48, VOL: 65, Bass: 56, Middle: 55, Treble: 48.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 14.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 25.
Blend: 30.
VOL: 55.
Bass: 52.
Treble: 52.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 2.
400Hz: -1.
800Hz: 2.
4.5kHz: -2.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Verses. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Choruses. GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 63.
- DST Gain: 40 -> 25.
- DST Blend: 38 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
