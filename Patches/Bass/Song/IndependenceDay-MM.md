# Independence Day - Martina McBride

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Independen. Patch VOL: 50.
Preset tempo: 120 BPM.

Martina McBride, *The Way That I Am*, 1994. Uptempo 90s country, ~120 BPM.
This isn't a flag-waving anthem despite the title — it's a heavy, serious story song that hits hard on the choruses. The bass needs to carry real weight and drive, not just sit under the fiddle.
GP-5 only, P/J bass, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 62.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 50, VOL: 80, Bass: 56, Middle: 55, Treble: 58.
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

## EQ - Module off

Not used.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 6.
Decay: 25.
Trail: off.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: verse sound. GP-5 active: NR, N->S.
- First CTL press: chorus sound. GP-5 active: NR, PRE, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 62.
- SnapTone Gain: 60 -> 50.
- SnapTone Bass: 62 -> 56.
- NR THRE: 35 -> 12.
- PRE Gain: 55 -> 25.
- RVB Mix: 22 -> 6.
- RVB Decay: 40 -> 25.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
