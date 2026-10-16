# It's Not My Time (Rhythm Guitar) — 3 Doors Down

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-NotMyTim. Patch VOL: 50.
Preset tempo: 100 BPM.

From *3 Doors Down* (2008). About 100 BPM, est.
Driving post-grunge. Chunky, palm-muted high-gain rhythm through the verses, big open chords in the chorus, and a short melodic lead.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 167.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone RectifierCrunch (slot 72): 1. MESA DUAL RECTIFIER 2025 | CRUNCH | RHYTHM #1 + V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603 (Mesa V30).
Slot: 72. Always on.
Gain: 55, VOL: 70, Bass: 52, Middle: 55, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 38.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 10.
Tone: 55.
VOL: 70.
Fixed on. Not on CTL.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -1.
500Hz: -2.
1kHz: 1.
3kHz: 2.
6kHz: -2.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 14.
Time: 450.
Feedback: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 12.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, DST, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 167.
- Pedal display name: NotMyTime -> G-NotMyTim. Filenames stay unchanged.
- PRE: Boost -> off.
- PRE: removed from CTL.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- DLY Mix: 20 -> 14.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
