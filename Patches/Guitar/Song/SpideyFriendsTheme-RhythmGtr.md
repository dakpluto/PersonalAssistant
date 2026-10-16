# Spidey and His Amazing Friends Theme (Guitar) — Patrick Stump

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: G-SpideyFr. Patch VOL: 50.
Preset tempo: 150 BPM.

The opening theme to Disney Junior's *Spidey and His Amazing Friends* (2021).
Written, produced and sung by Patrick Stump of Fall Out Boy.
I haven't verified who played guitar on the track, or what rig was used.
The sound is Stump's pop-punk / power-pop lane: bright, punchy power chords, big hooks, nothing sloppy.
Tempo: about 150 BPM, my estimate. Not measured. No published tempo or key turned up. Tap the delay in by ear if it's off.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 185.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone JCM800Clean (slot 80): JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700 + BlendOfAll_dc (Marshall 1960AV).
Slot: 80. Always on.
Gain: 55, VOL: 60, Bass: 52, Middle: 58, Treble: 56.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 35.
Tone: 58.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: -1.
1kHz: 2.
3kHz: 2.
6kHz: -1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 12.
Time: 200.
Feedback: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: the main rhythm: power-chord crunch for the verses and the "Spidey!" hooks. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: lead: the melody lines and any lead fills, plus the big final tag. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

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

On throughout.
Volume: 55.
Gain: 35.
Tone: 55.
Clipping toggle: Harder position.
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
- Donner Ultimate Comp: Bypassed throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: On throughout.
- King of Kings Right: Bypassed throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 185.
- Pedal display name: SpideyFrnd -> G-SpideyFr. Filenames stay unchanged.
- NR THRE: 35 -> 20.
- PRE: Boost -> off.
- PRE: removed from CTL.
- DLY Mix: 18 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
