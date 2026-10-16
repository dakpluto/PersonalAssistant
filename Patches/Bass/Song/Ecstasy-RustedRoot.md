# Ecstasy — Rusted Root

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: Ecstasy-RR. Patch VOL: 55.
Preset tempo: 102 BPM.

Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
From *When I Woke* (1994). ~102 BPM, est. — the song's percussion-heavy, tribal-rock groove has a lot of syncopated energy that can feel faster than the underlying tempo suggests.
Rusted Root's whole sound is built on layered hand percussion and a driving, world-fusion groove, with vocals and energy that build toward something genuinely cathartic — the title says it plainly. The bass needs to lock into that syncopated groove and stay tight through the verses, then help carry the song into its bigger, more intense climactic sections.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 37.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone FullB15 (slot 54): Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N) + Apg115410.
Slot: 54. Always on.
Gain: 52, VOL: 80, Bass: 56, Middle: 55, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 20.
Blend: 25.
VOL: 55.
Bass: 50.
Treble: 50.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 3.
150Hz: -1.
600Hz: 2.
2kHz: 4.
8kHz: 2.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 6.
Decay: 38.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Grounded syncopated groove. GP-5 active: NR, EQ, N->S.
- First CTL press: Climax with blended grit. GP-5 active: NR, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 37.
- PRE: Micro Boost -> off.
- PRE: removed from CTL.
- DST: Green OD -> Bass OD.
- DST Gain: 60 -> 20.
- DST Blend: unset -> 25.
- DST VOL: 62 -> 55.
- DST Bass: unset -> 50.
- DST Treble: unset -> 50.
- RVB Mix: 25 -> 6.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
