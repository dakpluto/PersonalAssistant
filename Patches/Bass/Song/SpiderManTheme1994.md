# Spider-Man: The Animated Series Theme (1994) — Joe Perry

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: B-Spidey94. Patch VOL: 52.
Preset tempo: 140 BPM.

Main title theme from *Spider-Man: The Animated Series* (Fox Kids, 1994-1998). Driving hard-rock tempo, est.
Performed by Joe Perry of Aerosmith. Songwriting credits vary by source, so treat the credit line as approximate.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The bass locks to the riff and the kick: driving eighths with the guitar hits stabbed in unison. The target is a 90s hard-rock tone: picked, bright, and a little growly, so it reads through a loud Marshall guitar.
Use a pick. Blend both pickups with the J slightly forward for bite. Tone knob fully open.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 103.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightSVT (slot 55): SVT SANS BRIGHT DRIVE (SVT-CL) + Hartke410.
Slot: 55. Always on.
Gain: 48, VOL: 60, Bass: 55, Middle: 58, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 45.
Attack: 50.
Clip: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 25.
Blend: 30.
VOL: 55.
Bass: 50.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 0.
120Hz: 2.
400Hz: -2.
800Hz: 2.
4.5kHz: 1.
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
- CTL off / loaded state: The main riff. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Lead-melody sections and the big ending hits. GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 103.
- Pedal display name: SpiderMan94 -> B-Spidey94. Filenames stay unchanged.
- DST Gain: 40 -> 25.
- DST Blend: 40 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
