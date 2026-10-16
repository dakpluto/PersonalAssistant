# The Anthem — Good Charlotte

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: The Anthem. Patch VOL: 52.
Preset tempo: 176 BPM.

*The Young and the Hopeless*, 2002. ~176 BPM, est.
Pop-punk bass — tight low end, upfront pick attack, driving eighth notes under the verse riff, bigger and more open for the "I don't wanna be" hook.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 14.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightSVT (slot 55): SVT SANS BRIGHT DRIVE (SVT-CL) + Hartke410.
Slot: 55. Always on.
Gain: 50, VOL: 60, Bass: 56, Middle: 55, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 25.
Blend: 35.
VOL: 60.
Bass: 55.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 3.
120Hz: 2.
400Hz: -3.
800Hz: 0.
4.5kHz: 3.
VOL: 55.
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
- CTL off / loaded state: verse/pre-chorus sound. GP-5 active: NR, EQ, N->S.
- First CTL press: chorus/hook sound. GP-5 active: NR, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 14.
- SnapTone Bass: 62 -> 56.
- DST Gain: 45 -> 25.
- DST Blend: 60 -> 35.
- EQ 4.5kHz: 6 -> 3.
- RVB: Room -> off.
- RVB: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
