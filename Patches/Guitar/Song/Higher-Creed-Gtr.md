# Higher (Rhythm Guitar) — Creed

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: G-HigherCr. Patch VOL: 50.
Preset tempo: 85 BPM.

Creed, from Human Clay (1999). About 85 BPM, est. Rhythm guitar with two jobs: a clean, open, shimmery tone for the quiet verse parts and a big, thick, driven tone for the chorus. Late-90s post-grunge, built around Mark Tremonti's big-amp crunch. Built from the band's general sound; the exact guitars and amps on the record are not verified, and the light chorus on the clean tone is my assumption.
Instrument: Stratocaster (HSS). Neck or middle pickup for the clean tone. Bridge humbucker for the driven tone.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 160.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - La Charger

Gain: 55.
Tone: 55.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Match CL

Gain: 30.
PRES: 50.
VOL: 62.
Bass: 50.
Middle: 52.
Treble: 50.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -1.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 15.
Rate: 0.5.
Tone: 50.
CTL assigned. Loads on; first CTL press switches it off.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 10.
Decay: 35.
Trail: off.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, EQ, MOD.
- CTL off / loaded state: Clean verse. GP-5 active: NR, AMP, CAB, MOD, RVB.
- First CTL press: Driven chorus/lead. GP-5 active: NR, DST, AMP, CAB, EQ, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 160.
- Pedal display name: Higher-Creed-Gtr -> G-HigherCr. Filenames stay unchanged.
- PRE: Boost -> off.
- PRE: removed from CTL.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- MOD: assigned to CTL.
- RVB Mix: 14 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
