# Danger Zone — Kenny Loggins

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: DangerZone. Patch VOL: 52.
Preset tempo: 158 BPM.

From the *Top Gun* soundtrack (1986). About 158 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The low-end pulse on the record sounds sequenced-synth, typical of a Moroder production. On bass that becomes relentless, even picked eighths with a synthetic edge.
The CTL trick: Octa adds a sub-octave for a fat, synth-wall chorus.
Use a pick with a consistent down-pick. Both pickups up. Tone knob around 70%. Mute hard with the fretting hand so the eighths are staccato like a sequencer.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 31.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 50, VOL: 75, Bass: 55, Middle: 52, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - OCTA

Low: 20.
High: 0.
Dry: 100.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 15.
Blend: 20.
VOL: 55.
Bass: 50.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 2.
150Hz: 0.
600Hz: -3.
2kHz: 3.
8kHz: 1.
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

CTL blocks: PRE, DST.
- CTL off / loaded state: Verses. GP-5 active: NR, EQ, N->S.
- First CTL press: Choruses ("Highway to the Danger Zone"). GP-5 active: NR, PRE, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 31.
- PRE Low: 45 -> 20.
- PRE Dry: 80 -> 100.
- DST Gain: 30 -> 15.
- DST Blend: 30 -> 20.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
