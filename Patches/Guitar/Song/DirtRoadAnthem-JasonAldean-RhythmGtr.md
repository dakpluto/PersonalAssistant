# Dirt Road Anthem (Rhythm Guitar) — Jason Aldean

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: DirtRd-Gtr. Patch VOL: 50.
Preset tempo: 86 BPM.

From *My Kinda Party* (2010). About 86 BPM, est.
Laid-back, groove-driven country-rock. Gritty, muted picking under the rapped verses, then big, crunchy chords in the chorus.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 for the verses. Bridge humbucker for the chorus and the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 154.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone RythymDeluxe (slot 65): RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Origin Effects Brown Deluxe 1x12 Medium Mix.
Slot: 65. Always on.
Gain: 42, VOL: 65, Bass: 50, Middle: 52, Treble: 52.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 22.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Super OD

Gain: 30.
Tone: 52.
VOL: 64.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Slapback

Mix: 12.
Time: 110.
F.Back: 5.
Trail: on.
Fixed on. Not on CTL.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Rhythm. GP-5 active: NR, EQ, DLY, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 154.
- PRE: Boost -> off.
- PRE: removed from CTL.
- DST Gain: 45 -> 30.
- RVB Mix: 14 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
