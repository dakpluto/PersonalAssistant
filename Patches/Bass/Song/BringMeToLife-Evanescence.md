# Bring Me to Life — Evanescence

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: BringMe. Patch VOL: 50.
Preset tempo: 95 BPM.

From *Fallen* (2003). About 95 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Sparse, deep notes under the piano verses. Then heavy, locked-in low end doubling the guitars' chugs in the choruses.
Built from the song's overall sound. I haven't verified who played bass on the record or their rig. It's tuned low. The low B covers it. Check your tuning against the record.
A pick suits the heavy parts. Both pickups up. Tone knob around 70%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 22.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone GrittySVT (slot 57): SVT PUSHED (SVT-CL) + Apg810.
Slot: 57. Always on.
Gain: 50, VOL: 55, Bass: 56, Middle: 55, Treble: 56.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 30.
Blend: 35.
VOL: 56.
Bass: 56.
Treble: 58.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 3.
150Hz: 0.
600Hz: -3.
2kHz: 3.
8kHz: 1.
VOL: 54.
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
- First CTL press: Choruses and bridge. GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 22.
- PRE Sustain: 50 -> 40.
- DST Gain: 50 -> 30.
- DST Blend: 55 -> 35.
- RVB: Room -> off.
- RVB: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
