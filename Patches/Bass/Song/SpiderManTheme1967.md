# Spider-Man Theme (1967 Cartoon) — Bob Harris & Paul Francis Webster

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: B-Spidey67. Patch VOL: 52.
Preset tempo: 150 BPM.

Theme from the 1967 *Spider-Man* animated series. Music by Bob Harris, lyrics by Paul Francis Webster. Fast swing, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The original is a 60s big-band arrangement. I haven't verified whether the bass on it is upright or electric, but the part plays like a jazz line: swung, walking-leaning, locked with the brass hits.
The tone target is a dark, short, thumpy 60s low end that sounds close to an upright. CTL gives you a second, driven sound for the rock-cover treatment.
Play with your fingers over the neck. Solo the P pickup. Tone knob around 30% for the vintage thump. Palm-muting near the bridge gets you closer to upright-style decay.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 102.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 48, VOL: 80, Bass: 60, Middle: 50, Treble: 30.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 12.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 30.
VOL: 58.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Bass OD

Gain: 25.
Blend: 25.
VOL: 55.
Bass: 50.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 0.
120Hz: 3.
400Hz: 1.
800Hz: -1.
4.5kHz: -5.
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
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: The 1967 original. GP-5 active: NR, PRE, EQ, RVB, N->S.
- First CTL press: Rock-cover push. GP-5 active: NR, PRE, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 102.
- Pedal display name: SpiderMan67 -> B-Spidey67. Filenames stay unchanged.
- DST Gain: 35 -> 25.
- DST Blend: 35 -> 25.
- RVB Mix: 10 -> 5.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
