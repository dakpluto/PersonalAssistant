# (I've Had) The Time of My Life (Rhythm Guitar) — Bill Medley & Jennifer Warnes

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-TimeOfLi. Patch VOL: 50.
Preset tempo: 108 BPM.

From the *Dirty Dancing* soundtrack (1987). About 108 BPM once the groove kicks in, est.
A slow, free-time intro, then a bright late-80s pop-soul groove that builds to the famous key-change finale.
The record is keys, sax, and vocals first. The guitar job is clean, chorused, funky 80s rhythm, plus a driven lead voice for the fills and the big ending.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 or 4 for the funky rhythm. Bridge humbucker for the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 188.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: EVM112. Encoded as User IR 5.

## NR - Gate

THRE: 16.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 40.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Super OD

Gain: 30.
Tone: 58.
VOL: 70.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - J-120 CL

VOL: 60.
Bass: 45.
Middle: 50.
Treble: 58.
Bright: off.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 5

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -1.
1kHz: 0.
3kHz: 2.
6kHz: 0.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 20.
Rate: 0.8.
Tone: 55.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Analog

Mix: 12.
Time: 420.
Feedback: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 12.
Decay: 40.
Damp: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, AMP, CAB, EQ, MOD, RVB.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 188.
- Pedal display name: TimeOfLife-Gtr -> G-TimeOfLi. Filenames stay unchanged.
- DST Gain: 45 -> 30.
- MOD Depth: 30 -> 20.
- DLY Mix: 18 -> 12.
- RVB Mix: 18 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
