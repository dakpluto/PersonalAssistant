# Sweet Child O' Mine — Guns N' Roses

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: SCOM-GNR. Patch VOL: 55.
Preset tempo: 125 BPM.

Appetite for Destruction, 1987. ~125 BPM.
GP-5 only, P/J bass, no pedalboard.
Duff McKagan plays with a pick and comes from punk. The tone is bright, mid-forward, and a little gritty, with pick attack that cuts through two Les Pauls.
The "Where do we go now?" outro gets heavier and darker, and the band digs in hard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 112.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone GrittySVT (slot 57): SVT PUSHED (SVT-CL) + Apg810.
Slot: 57. Always on.
Gain: 48, VOL: 55, Bass: 55, Middle: 60, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 40.
Clip: 30.
VOL: 60.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 25.
Blend: 30.
VOL: 62.
Bass: 50.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 0.
150Hz: 1.
600Hz: 2.
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
- CTL off / loaded state: intro, verses, and choruses. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: the "Where do we go now?" outro breakdown and Slash's solo. GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 112.
- PRE Sustain: 50 -> 40.
- DST Gain: 38 -> 25.
- DST Blend: 42 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
