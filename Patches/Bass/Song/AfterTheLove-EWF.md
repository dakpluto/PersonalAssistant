# After the Love Has Gone — Earth, Wind & Fire

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: AfterLove-. Patch VOL: 52.
Preset tempo: 66 BPM.

I Am, 1979. ~66 BPM, est.
GP-5 only, P/J bass, no pedalboard.
This is a slow, lush R&B ballad with dense jazz-leaning chords, many key shifts, strings, and big stacked vocals.
The bass is the opposite of the funk patch. It's warm, round, and sustained, and it supports the harmony more than the groove.
Long notes and smooth passing tones through the changes. No snap, no pop.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 9.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 46, VOL: 75, Bass: 55, Middle: 50, Treble: 42.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 60.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 2.
120Hz: 2.
400Hz: 0.
800Hz: 1.
4.5kHz: -3.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Plate

Mix: 8.
Decay: 30.
Damp: 55.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: RVB.
- CTL off / loaded state: verses. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: choruses and the final key-change swells. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 9.
- SnapTone Bass: 60 -> 55.
- RVB Mix: 20 -> 8.
- RVB Decay: 45 -> 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
