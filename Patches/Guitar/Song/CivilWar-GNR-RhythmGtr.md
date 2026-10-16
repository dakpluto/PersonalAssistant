# Civil War (Guitar) — Guns N' Roses

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: G-CivilWar. Patch VOL: 50.
Preset tempo: 70 BPM.

From *Use Your Illusion II* (1991). About 70 BPM half-time feel, est. Online tempo sources disagree.
Tuning: Eb standard. GNR tuned down a half step on the *Illusion* records. Tune down to match.
Three moods: the clean intro over the whistling and spoken word, the slow crunching main riff, and Slash's wah-heavy solo before the double-time outro.
Slash's *Illusion* rig is reported as a Les Paul into Marshalls: a JCM800 or his Silver Jubilee 2555s, depending on the source. Either way it's a Marshall with a little extra push. That's what this patch builds.
Instrument: Stratocaster (HSS). Bridge humbucker for the riff and solo. Neck pickup, guitar volume rolled back, for the intro.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 148.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone JCM800Clean (slot 80): JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700 + BlendOfAll_dc (Marshall 1960AV).
Slot: 80. Always on.
Gain: 50, VOL: 60, Bass: 55, Middle: 60, Treble: 52.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 28.
Tone: 55.
VOL: 66.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: 2.
1kHz: 2.
3kHz: 0.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 18.
Time: 430.
Feedback: 22.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 12.
Decay: 30.
Damp: 50.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Intro/verse or crunch riff (guitar volume). GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Intro: CTL off; MIDI at the corresponding baseline pattern; Narcissus on, both King of Kings channels off; lower guitar volume for cleanup. Active GP-5: NR, EQ, RVB, N->S.
- Main crunch: CTL off; MIDI at the corresponding baseline pattern; Narcissus off, both King of Kings channels off; guitar volume up. Active GP-5: NR, EQ, RVB, N->S.
- Solo: CTL on; MIDI at the corresponding baseline pattern; Narcissus off, both King of Kings channels off. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.
- Double-time outro: CTL on; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off, Narcissus off. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.

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

Bypassed throughout.
COMP: 30.
TONE: 50.
LEVEL: 50.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## King of Kings Left

Off for intro/main riff/solo; on for double-time outro only.
Volume: 55.
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

On for intro only; off when the band enters.
Width: 30.
Depth: 20.
Rate: 25.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: Bypassed throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Off for intro/main riff/solo; on for double-time outro only.
- King of Kings Right: Bypassed throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: On for intro only; off when the band enters.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 148.
- Pedal display name: CivilWar-GNR -> G-CivilWar. Filenames stay unchanged.
- SnapTone Gain: 55 -> 50.
- NR THRE: 30 -> 18.
- PRE: Boost -> off.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
