# Bright Size Life — Pat Metheny

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run active.
GP-5 only.
Patch screen name: B-BrightSi. Patch VOL: 50.
Preset tempo: 170 BPM.

Pat Metheny, 1976, with Jaco Pastorius on fretless bass. BPM est., brisk swing. Jaco's tone here is clean, bridge-pickup-forward, singing, with the fretless mwah in the upper mids and a natural, dry ECM room around it. Built from that well-known sound; the exact amp and studio chain on the record are not verified. The Sire has flatwound strings, which are darker than Jaco's roundwounds, so the patch pushes upper mids and top end to make up the difference.
Instrument: Sire V7 2nd Gen 5-string fretless, flatwound. Run Active. Favor the bridge pickup for the mwah, roll the neck pickup in for the walking and rhythm sections.
GP-5 only, Sire V7 fretless (Active), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 21.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 44, VOL: 75, Bass: 50, Middle: 58, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 8.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 35.
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
120Hz: 0.
400Hz: 0.
800Hz: 3.
4.5kHz: 2.
VOL: 52.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 8.
Decay: 20.
Trail: off.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: EQ.
- CTL off / loaded state: Head melody, walking lines and rhythm. GP-5 active: NR, PRE, RVB, N->S.
- First CTL press: Melodic lines and solos. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 21.
- Pedal display name: BrightSizeLife-Metheny -> B-BrightSi. Filenames stay unchanged.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ 800Hz: 5 -> 3.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
