# Mary Jane's Last Dance — Tom Petty

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: B-MaryJane. Patch VOL: 52.
Preset tempo: 84 BPM.

Tom Petty and the Heartbreakers, 1993, from *Greatest Hits*. About 84 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The bass locks to the kick under the A minor riff. Steady eighths and quarters, with a lot of weight on the root. It's a heartland rock tone: punchy and mid-forward, with no hi-fi sparkle.
Pick or fingers both work. A pick gets closer to the driving attack. Blend both pickups with the P slightly louder. Tone knob around 60%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 78.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone FullB15 (slot 54): Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N) + Apg115410.
Slot: 54. Always on.
Gain: 52, VOL: 80, Bass: 55, Middle: 55, Treble: 48.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
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

50Hz: 0.
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

CTL blocks: None.
- CTL off / loaded state: Verses and the main riff. GP-5 active: NR, PRE, EQ, N->S.
- No GP-5 CTL change. One consistent GP-5 voice serves this bass part.

## Revision record

Approved audit entry 78.
- Pedal display name: MaryJane-TP -> B-MaryJane. Filenames stay unchanged.
- DST: Bass OD -> off.
- DST: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
