# Ironic (Rhythm Guitar) — Alanis Morissette

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Ironic-Gtr. Patch VOL: 50.
Preset tempo: 116 BPM.

From *Jagged Little Pill* (1995). About 116 BPM, est.
Quiet, acoustic-led verses that slam into a big, distorted mid-90s alt-rock chorus.
On a Strat, CTL off plays the verse role as a clean, compressed acoustic stand-in. CTL on is the featured electric sound: the distorted chorus wall and any lead lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 4 for the verses. Bridge humbucker for the chorus.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 166.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone TwinClean (slot 61): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ CLEAN (vulturized Twin).
Slot: 61. Always on.
Gain: 45, VOL: 75, Bass: 48, Middle: 50, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 38.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Darktale

Gain: 40.
Filter: 45.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -1.
1kHz: 0.
3kHz: 2.
6kHz: 0.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 14.
Decay: 30.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Acoustic-adjacent verse. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Electric chorus. GP-5 active: NR, PRE, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 166.
- Amp/cab foundation: SnapTone 68 -> SnapTone 61.
- SnapTone Gain: 49 -> 45.
- SnapTone VOL: 50 -> 75.
- SnapTone Treble: 58 -> 55.
- NR THRE: 25 -> 12.
- DST Gain: 55 -> 40.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
