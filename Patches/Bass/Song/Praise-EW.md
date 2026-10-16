# Praise — Elevation Worship

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Praise-EW. Patch VOL: 52.
Preset tempo: 127 BPM.

Elevation Worship, featuring Brandon Lake, Chris Brown, and Chandler Moore. From *Can You Imagine?* (2023).
Upbeat gospel-pop worship anthem. About 127 BPM, est. I haven't verified the tempo.
The bass role is driving and punchy. It locks with the kick through the verses, then digs in for the big shout choruses and the long "I'll praise" bridge.
Built from Elevation's general bass sound. I haven't verified the exact parts or gear on this recording. The low end on modern Elevation records may also be layered with synth bass. This patch covers the electric part.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 70%. The J adds definition to the P's thump so eighth notes stay articulate at this tempo.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 91.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone WorshipSVT (slot 59): SVT CLEAN PUSHED (SVT-CL) + Ampeg SVT Bright Beta52.
Slot: 59. Always on.
Gain: 50, VOL: 55, Bass: 58, Middle: 52, Treble: 48.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 35.
Clip: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 20.
Blend: 25.
VOL: 55.
Bass: 55.
Treble: 50.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 0.
150Hz: 2.
600Hz: -2.
2kHz: 2.
8kHz: -2.
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
- CTL off / loaded state: Compressed worship pulse. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Restrained chorus grit. GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 91.
- PRE Sustain: 50 -> 40.
- DST Gain: 32 -> 20.
- DST Blend: 35 -> 25.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
