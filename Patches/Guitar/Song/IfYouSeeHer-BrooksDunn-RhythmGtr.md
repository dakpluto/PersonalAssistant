# If You See Her (Rhythm Guitar) — Brooks & Dunn

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: IfUSeeHer-. Patch VOL: 50.
Preset tempo: 70 BPM.

"If You See Him/If You See Her" (1998). It's a duet with Reba McEntire, and the title track of Brooks & Dunn's *If You See Her*. About 70 BPM, est.
A late-90s Nashville power ballad. Polished, with clean electric arpeggios and a big lift in the choruses.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the arpeggios. Neck or bridge for the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 163.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone NashClean (slot 62): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Origin Effects Brown Deluxe 1x12 Medium Mix.
Slot: 62. Always on.
Gain: 50, VOL: 75, Bass: 46, Middle: 50, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 32.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 20.
Tone: 55.
VOL: 70.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: 0.
1kHz: 0.
3kHz: 1.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 18.
Rate: 0.6.
Tone: 50.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Analog

Mix: 12.
Time: 430.
Feedback: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 12.
Decay: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 163.
- DST Gain: 30 -> 20.
- DLY Mix: 18 -> 12.
- RVB Mix: 20 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
