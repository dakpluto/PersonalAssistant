# Spider-Man Theme (1967 Cartoon) (Rhythm Guitar) — Bob Harris & Paul Francis Webster

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-Spidey67. Patch VOL: 50.
Preset tempo: 150 BPM.

Theme from the 1967 *Spider-Man* animated series. Music by Bob Harris, lyrics by Paul Francis Webster. Fast swing, est.
"Spider-Man, Spider-Man, does whatever a spider can."
As far as I know, the original is a brassy big-band vocal arrangement, not a guitar record. So this patch translates the song into the 60s TV-theme guitar vocabulary: surf and spy twang for the comping and the minor-key riff, and a driven tone for the melody that nods to the well-known rock covers.
Instrument: Stratocaster (HSS). Middle or position 2 for twangy comping and the riff. Bridge humbucker for the driven melody.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 183.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone TwinClean (slot 61): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ CLEAN (vulturized Twin).
Slot: 61. Always on.
Gain: 51, VOL: 75, Bass: 48, Middle: 50, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Super OD

Gain: 30.
Tone: 55.
VOL: 66.
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
3kHz: 2.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Slapback

Mix: 12.
Time: 110.
F.Back: 8.
Trail: on.
Fixed on. Not on CTL.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Spring

Mix: 16.
Decay: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Rhythm. GP-5 active: NR, EQ, DLY, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 183.
- Pedal display name: SpiderMan67-Gtr -> G-Spidey67. Filenames stay unchanged.
- DST Gain: 45 -> 30.
- DLY Mix: 16 -> 12.
- RVB Mix: 22 -> 16.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
