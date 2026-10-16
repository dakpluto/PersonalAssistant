# Man in the Box (Rhythm Guitar) — Alice In Chains

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: ManInBox-G. Patch VOL: 50.
Preset tempo: 108 BPM.

From *Facelift* (1990). About 108 BPM, est.
A sludgy, grinding riff with Jerry Cantrell's famous talk-box line, a wah-drenched solo, and a heavy, droning chorus.
As far as I know, the band tuned down a half step on this era of material. Tune to Eb standard to match the record.
The GP-5 has no talk box. CTL uses the Toucher envelope filter, which gives a touch-driven vowel sweep. It's the closest stand-in, and it doubles as the wah for the solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 169.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone HotMarshall (slot 71): JCM800 2203 - P5 B5 M5 T5 MV6 G7 - AZG - 700 + BlendOfAll_dc (Marshall 1960AV).
Slot: 71. Always on.
Gain: 57, VOL: 40, Bass: 55, Middle: 62, Treble: 52.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Toucher

Sense: 60.
Range: 55.
Q: 50.
Mix: 50.
Mode: 0.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 8.
Tone: 45.
VOL: 60.
Fixed on. Not on CTL.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: 1.
1kHz: 1.
3kHz: 0.
6kHz: -3.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 14.
Time: 330.
Feedback: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, DLY.
- CTL off / loaded state: Main riff. GP-5 active: NR, DST, EQ, RVB, N->S.
- First CTL press: Envelope-filter talk-box approximation / solo. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 169.
- NR THRE: 45 -> 25.
- PRE Q: 65 -> 50.
- PRE Mix: 70 -> 50.
- DST Gain: 20 -> 8.
- DST VOL: 70 -> 60.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
