# Bring Me to Life (Rhythm Guitar) — Evanescence

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: BMTL-Gtr. Patch VOL: 50.
Preset tempo: 95 BPM.

From *Fallen* (2003). About 95 BPM, est.
Nu-metal meets gothic rock. The verses are piano and vocal. The guitars slam in with low, heavy chugs for the choruses, and the bridge builds to a big riffing climax.
Built from the song's overall sound. I haven't verified the exact guitars, amps or tuning on the record. It's tuned low. Check yours against the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 145.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 42.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 8.
Tone: 55.
VOL: 72.
Fixed on. Not on CTL.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Mess DualM

Gain: 60.
PRES: 55.
VOL: 60.
Bass: 50.
Middle: 46.
Treble: 56.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: -3.
1kHz: 1.
3kHz: 2.
6kHz: -2.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 12.
Time: 474.
Feedback: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 12.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, DST, AMP, CAB, RVB.
- First CTL press: Lead. GP-5 active: NR, DST, AMP, CAB, EQ, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 145.
- PRE: Boost -> off.
- PRE: removed from CTL.
- AMP Bass: 56 -> 50.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- DLY Mix: 18 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
