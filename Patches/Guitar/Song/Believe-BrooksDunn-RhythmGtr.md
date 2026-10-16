# Believe (Rhythm Guitar) — Brooks & Dunn

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Believe-Gt. Patch VOL: 70.
Preset tempo: 66 BPM.

From *Hillbilly Deluxe* (2005). About 66 BPM, est. It won CMA Single and Song of the Year in 2006.
A slow gospel-tinged ballad. It starts intimate, with piano and vocal carrying it, and builds to a huge choir-backed climax.
The guitar starts sparse with clean arpeggios and ends big with a sustained, singing lead.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck pickup for the arpeggios. Bridge humbucker for the climax lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 142.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone NashClean (slot 62): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Origin Effects Brown Deluxe 1x12 Medium Mix.
Slot: 62. Always on.
Gain: 50, VOL: 75, Bass: 48, Middle: 52, Treble: 54.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 14.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 25.
+3dB: off.
Bright: off.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 36.
Tone: 55.
VOL: 64.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -1.
1kHz: 0.
3kHz: 1.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 16.
Time: 450.
F.Back: 25.
Trail: on.
Fixed on. Not on CTL.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 14.
Decay: 50.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, DST.
- CTL off / loaded state: Rhythm. GP-5 active: NR, EQ, DLY, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DST.
MIDI mapping lives on the controller/device, not in the .prst.
- DST Green OD: loads off; toggle to add this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- DST-only alternative from loaded state: CTL off, MIDI DST on; other MIDI blocks at their load states. GP-5 active: NR, DST, EQ, DLY, RVB, N->S. Board switches unchanged.

## Revision record

Approved audit entry 142.
- PRE Gain: 42 -> 25.
- PRE +3dB: true -> off.
- RVB Mix: 24 -> 14.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
