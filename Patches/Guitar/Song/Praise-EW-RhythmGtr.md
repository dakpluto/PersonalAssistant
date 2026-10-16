# Praise (Rhythm Guitar) — Elevation Worship

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Praise-EW-. Patch VOL: 50.
Preset tempo: 127 BPM.

Elevation Worship, featuring Brandon Lake, Chris Brown, and Chandler Moore. From *Can You Imagine?* (2023).
Upbeat gospel-pop worship anthem. About 127 BPM, est. I haven't verified the tempo, so check the dotted-eighth delay time against the recording (see DLY below).
This is not an ambient slow-burner. It's a driving, celebratory song: handclap-and-drum groove, big shout choruses, a long "I'll praise" bridge.
Built from Elevation's general guitar sound. I haven't verified the exact parts or gear on this recording.
The guitar job here is mostly rhythm: pushing eighth notes and tight chord stabs that lock with the kick. Lead lines are short melodic hooks over the chorus and bridge.
Instrument: Stratocaster (HSS). Position 2 or 4 for the verse chops. Bridge humbucker for the chorus drive and lead hooks.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 177.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 22.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 25.
+3dB: off.
Bright: off.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 30.
Tone: 60.
VOL: 62.
MIDI-only. Loads on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Foxy 30TB

Gain: 32.
Tone Cut: 40.
VOL: 60.
Bass: 45.
Treble: 58.
Char: 0.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -1.
1kHz: 1.
3kHz: 2.
6kHz: 0.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 18.
Time: 354.
F.Back: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 18.
Decay: 35.
Damp: 50.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, DST, AMP, CAB, EQ, RVB.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, AMP, CAB, EQ, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DST.
MIDI mapping lives on the controller/device, not in the .prst.
- DST Green OD: loads on; toggle to remove this block independently.
- DST-only alternative from loaded state: CTL off, MIDI DST off; other MIDI blocks at their load states. GP-5 active: NR, AMP, CAB, EQ, RVB. Board switches unchanged.

## Revision record

Approved audit entry 177.
- PRE Gain: 40 -> 25.
- PRE +3dB: true -> off.
- DLY Mix: 25 -> 18.
- DLY F.Back: 28 -> 22.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
