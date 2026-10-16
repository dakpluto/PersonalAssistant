# When Wind Meets Fire — Elevation Worship

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: WWMF-EW. Patch VOL: 52.
Preset tempo: 72 BPM.

Elevation Worship. Modern worship anthem. About 72 BPM, est. I haven't verified the tempo.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Modern worship bass is the floor under pads, keys, and ambient guitars: sustained roots, deep sub, and clear octave movement when the band opens up.
It builds from sparse and warm in the verses to driven and huge in the chorus and bridge.
Play with your fingers. Solo the P pickup or blend with the P forward. Tone knob around 50%. The 5-string low B gives the sub-weight on the big sections.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 128.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone WorshipSVT (slot 59): SVT CLEAN PUSHED (SVT-CL) + Ampeg SVT Bright Beta52.
Slot: 59. Always on.
Gain: 48, VOL: 55, Bass: 56, Middle: 50, Treble: 40.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 45.
Attack: 40.
Clip: 40.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 20.
Blend: 25.
VOL: 55.
Bass: 55.
Treble: 45.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 2.
150Hz: 1.
600Hz: -2.
2kHz: 1.
8kHz: -3.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 6.
Decay: 40.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Verses and quiet sections. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Choruses and the bridge build. GP-5 active: NR, PRE, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 128.
- SnapTone Bass: 62 -> 56.
- SnapTone Middle: 45 -> 50.
- DST Gain: 30 -> 20.
- DST Blend: 30 -> 25.
- RVB Mix: 12 -> 6.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
