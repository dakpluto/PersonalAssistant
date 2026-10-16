# Chalk Outlines (Guitar) — Ren & Chinchilla

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: ChalkOut-R. Patch VOL: 50.
Preset tempo: 123 BPM.

Ren featuring Chinchilla. Ren is credited with guitar, bass, keys and production. The track also has live cello, live drums, and Chinchilla on the chorus.
Electric guitar (confirmed by Michael).
Tempo: about 123 BPM, measured from the recording (2026-10-10 analysis). The groove often feels half-time, around 61.
Key: C#m. The analysis lands on C#m or its relative, E. Chord charts show Am–F–C–G shapes with a capo on 4, which is C#m–A–E–B.
A dark, story-driven song. Sparse verses under Ren's rap. Big choruses where Chinchilla, the cello and the full drums come in. The bridge is the most intense part of the song.
Instrument: Stratocaster (HSS). Capo 4.
- Verses: position 4 (neck+middle), guitar volume about 7, so the amp sits just on the clean side of breakup.
- Choruses and bridge: bridge humbucker, volume full up.
I can't hear the track, so these are measurements, not by-ear calls. Michael's ears win if they disagree.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 147.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone Fen65DlxKl (slot 78): Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) boosted by a Klon Centaur (Gain 10), full rig capture.
Slot: 78. Always on.
Gain: 45, VOL: 70, Bass: 50, Middle: 52, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 25.
Tone: 55.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -1.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 16.
Time: 366.
Feedback: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 14.
Decay: 30.
Damp: 50.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: verse. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: Chorus. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Verse: CTL off; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, EQ, RVB, N->S.
- Chorus: CTL on; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.
- Bridge: CTL on; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo King of Kings -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Bypassed throughout.
-2OCT: 0.
-OCT: 0.
+OCT: 0.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout.
COMP: 30.
TONE: 50.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## King of Kings Left

Off for verses/choruses; on for bridge only.
Volume: 50.
Gain: 30.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed throughout.
Volume: 50.
Gain: 20.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## Joyo American Sound

Bypassed throughout.
Level: 50.
Drive: 10.
Voice: 50.
Low: 50.
Mid: 50.
High: 50.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Off for verses/choruses; on for bridge only.
- King of Kings Right: Bypassed throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 147.
- DST Gain: 40 -> 25.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
