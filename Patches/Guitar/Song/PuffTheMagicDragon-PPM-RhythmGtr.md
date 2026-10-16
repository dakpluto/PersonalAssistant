# Puff the Magic Dragon (Rhythm Guitar) — Peter, Paul and Mary

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Puff-Gtr. Patch VOL: 50.
Preset tempo: 110 BPM.

From *Moving* (1963). About 110 BPM, est.
An acoustic folk record: interlocking fingerpicked and strummed acoustic guitars under three-part harmony.
There's no electric part, so the Strat plays the acoustic role: bright, compressed, and dry-ish, with a Travis-picked or light-strum feel. CTL is for playing the melody.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for a hollow, acoustic-ish quack. Neck for the melody.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 178.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightTwin (slot 64): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ BALANCED (vulturized Twin).
Slot: 64. Always on.
Gain: 50, VOL: 75, Bass: 50, Middle: 48, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 30.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: -3.
1kHz: -1.
3kHz: 2.
6kHz: 2.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 10.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ.
- CTL off / loaded state: Acoustic-adjacent rhythm. GP-5 active: NR, PRE, RVB, N->S.
- First CTL press: Clean melody lift. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 178.
- SnapTone Middle: 42 -> 48.
- PRE Sustain: 45 -> 30.
- DST: Green OD -> off.
- DST: removed from CTL.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- RVB Mix: 16 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
