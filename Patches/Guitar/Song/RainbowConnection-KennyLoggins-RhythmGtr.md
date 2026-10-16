# Rainbow Connection (Rhythm Guitar) — Kenny Loggins

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Rainbow-Gt. Patch VOL: 50.
Preset tempo: 72 BPM.

Kenny Loggins' version, from *Return to Pooh Corner* (1994). The song is by Paul Williams and Kenneth Ascher, and Kermit sang it first in 1979. About 72 BPM, est.
A gentle, acoustic-leaning lullaby. There's no real electric guitar part to copy, so this patch gives the Strat an acoustic-adjacent role: soft, fingerpicked, warm, and lightly shimmering.
Instrument: Stratocaster (HSS). Neck pickup, fingers, guitar tone knob around 6. Fingerpick the arpeggios. The patch is built to feel like a nylon or steel-string stand-in.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 179.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightTwin (slot 64): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ BALANCED (vulturized Twin).
Slot: 64. Always on.
Gain: 50, VOL: 75, Bass: 50, Middle: 45, Treble: 52.
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

100Hz: -1.
500Hz: -2.
1kHz: 0.
3kHz: 2.
6kHz: 1.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 16.
Time: 420.
F.Back: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 12.
Decay: 35.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, DLY.
- CTL off / loaded state: Gentle fingerpicking. GP-5 active: NR, PRE, RVB, N->S.
- First CTL press: Clean melody and Tape. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 179.
- PRE Sustain: 42 -> 30.
- DST: Green OD -> off.
- DST: removed from CTL.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- MOD: A-Chorus -> off.
- RVB Mix: 24 -> 12.
- RVB Decay: 50 -> 35.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
