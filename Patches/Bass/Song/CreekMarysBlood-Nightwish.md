# Creek Mary's Blood — Nightwish

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: CreekMarys. Patch VOL: 50.
Preset tempo: 90 BPM.

Nightwish, symphonic metal. BPM est. Slow, tribal, heavy build with an epic arc. Bass is fat, growly, and driven — Marko Hietala is known for a thick pick-driven tone, though the exact rig on this recording is not verified.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 29.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightSVT (slot 55): SVT SANS BRIGHT DRIVE (SVT-CL) + Hartke410.
Slot: 55. Always on.
Gain: 46, VOL: 60, Bass: 58, Middle: 55, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 50.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 30.
Blend: 40.
VOL: 60.
Bass: 55.
Treble: 50.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 2.
120Hz: 2.
400Hz: 0.
800Hz: 2.
4.5kHz: 1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 6.
Decay: 35.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Verses and the tribal sections. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Heavy sections. GP-5 active: NR, PRE, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 29.
- DST Gain: 42 -> 30.
- DST Blend: 55 -> 40.
- RVB Mix: 15 -> 6.
- RVB Trail: false -> on.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
