# Man in the Box — Alice In Chains

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: ManInBox. Patch VOL: 52.
Preset tempo: 108 BPM.

From *Facelift* (1990). About 108 BPM, est. Eb tuning, matching the guitar. On the 5-string, stay in standard and read the riff down a half step.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Thick, gritty, and heavy. The bass doubles the grinding riff and fills out the sludge underneath the guitar.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
A pick for the grind. Both pickups up. Tone knob around 60%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 77.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone HairySVT (slot 58): SVT SANS HAIRY DRIVE (SVT-CL) + Sunn215.
Slot: 58. Always on.
Gain: 48, VOL: 55, Bass: 58, Middle: 58, Treble: 48.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 1.
400Hz: 2.
800Hz: 3.
4.5kHz: 0.
VOL: 52.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: EQ.
- CTL off / loaded state: Riff and verses. GP-5 active: NR, PRE, N->S.
- First CTL press: Choruses and the solo. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 77.
- DST: Bass OD -> off.
- EQ VOL: 56 -> 52.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
