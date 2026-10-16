# Stream of Consciousness — Dream Theater

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Stream of . Patch VOL: 50.
Preset tempo: 160 BPM.

Train of Thought, 2003. Instrumental. ~160 BPM, est. (double-time and meter shifts throughout).
John Myung's part here is dense, fast, and technical — this is the instrumental centerpiece of the album, built around a long dynamic arc from a moody, restrained intro/mid-section into full-band unison blast sections.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 109.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: Mesa215. Encoded as User IR 7.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 25.
Blend: 35.
VOL: 60.
Bass: 55.
Treble: 50.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

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

50Hz: 3.
120Hz: 2.
400Hz: -3.
800Hz: 0.
4.5kHz: 5.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 35.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: intro/moody-section sound. GP-5 active: NR, AMP, CAB, EQ.
- First CTL press: full-band blast-section sound. GP-5 active: NR, DST, AMP, CAB, EQ, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 109.
- Amp/cab foundation: SnapTone 56 -> Mess Bass / User IR 7.
- NR THRE: 30 -> 18.
- PRE: Micro Boost -> off.
- PRE: removed from CTL.
- DST Gain: 45 -> 25.
- DST Blend: 60 -> 35.
- AMP: off -> Mess Bass.
- AMP Gain: unset -> 40.
- AMP VOL: unset -> 62.
- AMP Bass: unset -> 54.
- AMP Middle: unset -> 58.
- AMP Treble: unset -> 52.
- CAB: off -> User IR 7.
- CAB VOL: unset -> 58.
- RVB Mix: 22 -> 5.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
