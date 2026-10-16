# Waiting on the World to Change — John Mayer

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run passive.
GP-5 only.
Patch screen name: WaitWorld. Patch VOL: 52.
Preset tempo: 88 BPM.

Waiting on the World to Change: passive Sire V7 fretless with flatwounds. Neck pickup favored, soft fingers and short muted notes for the soul pocket. FullB15 supplies the warm foundation. Passive mode is the selected feel/voicing; active mode does not inherently guarantee more downstream headroom.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 123.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone FullB15 (slot 54): Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N) + Apg115410.
Slot: 54. Always on.
Gain: 47, VOL: 80, Bass: 58, Middle: 52, Treble: 35.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 38.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 0.
120Hz: 2.
400Hz: 1.
800Hz: 0.
4.5kHz: -3.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: RVB.
- CTL off / loaded state: Verses. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Choruses. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 123.
- RVB Mix: 10 -> 5.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
