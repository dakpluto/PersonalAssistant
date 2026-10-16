# SpiritCarriesOn-DT — The Spirit Carries On by Dream Theater

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run active.
GP-5 only.
Patch screen name: Spirit Car. Patch VOL: 50.
Preset tempo: 76 BPM.

Metropolis Pt. 2: Scenes from a Memory, 1999. ~76 BPM, est.
This is DT's ballad, not the prog-metal aggression — restrained verses that build into a huge, gospel-choir-backed climax at the end. The bass part sits warm and supportive, not technical.
GP-5 only, Sire fretless (Active), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 105.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: EBS410. Encoded as User IR 4.

## NR - Gate

THRE: 8.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 35.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Mess Bass

Gain: 30.
VOL: 62.
Bass: 55.
Middle: 50.
Treble: 48.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 4

VOL: 58.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Bass EQ 2

50Hz: 3.
120Hz: 2.
400Hz: 0.
800Hz: 1.
4.5kHz: 3.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 10.
Decay: 35.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: verse/build sound. GP-5 active: NR, AMP, CAB, EQ.
- First CTL press: climax sound. GP-5 active: NR, PRE, AMP, CAB, EQ, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 105.
- NR THRE: 25 -> 8.
- EQ 400Hz: -3 -> 0.
- EQ 800Hz: -1 -> 1.
- MOD: B-Chorus -> off.
- RVB Mix: 45 -> 10.
- RVB Decay: 65 -> 35.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
