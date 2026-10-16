# (I've Had) The Time of My Life — Bill Medley & Jennifer Warnes

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: B-TimeOfLi. Patch VOL: 52.
Preset tempo: 108 BPM.

From the *Dirty Dancing* soundtrack (1987). About 108 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The low end on the record is punchy late-80s pop. I'm not sure how much of it is synth bass and how much is electric. Either way the target is bright, tight, and punchy, with a polished chorus lift.
Fingers or pick. Both pickups up, J forward. Tone knob around 70%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 118.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 46, VOL: 75, Bass: 55, Middle: 50, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 14.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 45.
Clip: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 1.
150Hz: 1.
600Hz: -2.
2kHz: 2.
8kHz: 1.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - B-Chorus

Depth: 20.
Rate: 0.8.
VOL: 55.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Plate

Mix: 6.
Decay: 35.
Damp: 55.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: MOD, RVB.
- CTL off / loaded state: Verses. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Choruses and the finale. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 118.
- Pedal display name: TimeOfLife -> B-TimeOfLi. Filenames stay unchanged.
- PRE Sustain: 50 -> 40.
- RVB Mix: 12 -> 6.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
