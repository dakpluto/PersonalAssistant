# Metropolis1-DT — Metropolis Pt. 1, The Miracle and the Sleeper by Dream Theater

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Metropolis. Patch VOL: 55.
Preset tempo: 130 BPM.

Metropolis Pt. 1 on passive P/J bass. Technical, precise lines need body and attack beneath guitar, keys and drums. Mess Bass with the loaded Mesa215 IR replaces the SVT stand-in. EQ VOL is explicitly set to 50, fixing the previously omitted output control. CTL exchanges the small intro Room for an input push in the driving sections.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 79.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: Mesa215. Encoded as User IR 7.

## NR - Gate

THRE: 30.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 45.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Mess Bass

Gain: 40.
VOL: 62.
Bass: 54.
Middle: 58.
Treble: 52.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 7

VOL: 58.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Bass EQ 2

50Hz: 0.
120Hz: -3.
400Hz: -2.
800Hz: 3.
4.5kHz: 3.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 6.
Decay: 45.
Trail: on.
CTL assigned. Loads on; first CTL press switches it off.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: Intro/interludes. GP-5 active: NR, AMP, CAB, EQ, RVB.
- First CTL press: Driving riff and instrumental unisons. GP-5 active: NR, PRE, AMP, CAB, EQ.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 79.
- Amp/cab foundation: SnapTone 56 -> Mess Bass / User IR 7.
- DST: Bass OD -> off.
- AMP: off -> Mess Bass.
- AMP Gain: unset -> 40.
- AMP VOL: unset -> 62.
- AMP Bass: unset -> 54.
- AMP Middle: unset -> 58.
- AMP Treble: unset -> 52.
- CAB: off -> User IR 7.
- CAB VOL: unset -> 58.
- EQ 400Hz: -6 -> -2.
- EQ 800Hz: 8 -> 3.
- EQ 4.5kHz: 10 -> 3.
- EQ VOL: unset -> 50.
- RVB Mix: 35 -> 6.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
