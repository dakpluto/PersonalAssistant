# Found (The Unexpected Flaw of Searching) (Rhythm Guitar) — Riverside

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-FoundRiv. Patch VOL: 50.
Preset tempo: 100 BPM.

Riverside, from Love, Fear and the Time Machine. BPM est. Open, art-rock rhythm guitar: clean, chorused arpeggios and chords for the verses, thicker crunch for the choruses. Built from the band's general sound; the exact rig on the recording is not verified.
Instrument: Stratocaster (HSS). Use the neck or middle pickup for verses, bridge pickup for choruses.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 156.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone JCM800Clean (slot 80): JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700 + BlendOfAll_dc (Marshall 1960AV).
Slot: 80. Always on.
Gain: 40, VOL: 60, Bass: 50, Middle: 50, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 30.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 25.
Tone: 50.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: -1.
1kHz: 0.
3kHz: 1.
6kHz: 1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 20.
Rate: 0.6.
Tone: 50.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 10.
Decay: 40.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Clean arpeggios. GP-5 active: NR, PRE, EQ, MOD, N->S.
- First CTL press: Crunch chorus. GP-5 active: NR, PRE, DST, EQ, MOD, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 156.
- Pedal display name: Found-Riverside-RhythmGtr -> G-FoundRiv. Filenames stay unchanged.
- Amp/cab foundation: SnapTone 68 -> SnapTone 80.
- SnapTone Gain: 50 -> 40.
- SnapTone VOL: 50 -> 60.
- RVB Mix: 15 -> 10.
- RVB Trail: false -> on.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
