# All for You — Sister Hazel

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: AllForYou. Patch VOL: 54.
Preset tempo: 100 BPM.

Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
From *...Somewhere More Familiar* (1997), ~100 BPM.
Warm, sunny, feel-good 90s alt-rock — jangly acoustic-driven guitars, an easy, welcoming groove. Jett Beres's bass job here is to stay warm and supportive, holding the song's relaxed energy together. It's a pretty consistent, upbeat tune throughout, with a small lift into the "all for you" chorus hook.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 12.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanSVT (slot 53): SVT CLEAN (SVT-CL) + Apg810.
Slot: 53. Always on.
Gain: 50, VOL: 65, Bass: 56, Middle: 54, Treble: 54.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 25.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 3.
120Hz: 1.
400Hz: 0.
800Hz: 2.
4.5kHz: 2.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 8.
Decay: 28.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: the main verse groove. GP-5 active: NR, EQ, N->S.
- First CTL press: Chorus hook. GP-5 active: NR, PRE, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 12.
- PRE Gain: 45 -> 25.
- RVB Mix: 18 -> 8.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
