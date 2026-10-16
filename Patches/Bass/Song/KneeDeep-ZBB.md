# Knee Deep — Zac Brown Band

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run passive.
GP-5 only.
Patch screen name: Knee Deep . Patch VOL: 50.
Preset tempo: 82 BPM.

You Get What You Give, 2010, feat. Jimmy Buffett. ~82 BPM, est.
This is the beach-chair, toes-in-the-sand song — laid-back island groove, not a driving country tune.
Sire V7 fretless (Passive) — the round, mellow fretless tone fits the chill vibe better than picked P/J attack.
GP-5 only, no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 66.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
Retain the light chorus, with its output level brought back to the library baseline.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 50, VOL: 80, Bass: 60, Middle: 50, Treble: 40.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 35.
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

## MOD - B-Chorus

Depth: 20.
Rate: 0.8.
VOL: 50.
Fixed on. Not on CTL.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Room

Mix: 8.
Decay: 25.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: main laid-back verse groove. GP-5 active: NR, MOD, N->S.
- First CTL press: fuller chorus sound. GP-5 active: NR, PRE, MOD, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Revision record

Approved audit entry 66.
- NR THRE: 25 -> 10.
- MOD VOL: 100 -> 50.
- RVB Mix: 30 -> 8.
- RVB Decay: 45 -> 25.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
