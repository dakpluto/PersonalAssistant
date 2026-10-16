# Sister Christian - Night Ranger

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Sister Chr. Patch VOL: 55.
Preset tempo: 101 BPM.

Stratocaster (HSS), Full Board. Brad Gillis played this on a Strat-style guitar with a Floyd Rose, so the HSS Strat is the right instrument for it. Rhythm sound is a clean-to-crunch Marshall push kept glossy with light chorus. Lead sound kicks in a boost and delay for the solo breaks. Tempo: 101 BPM.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 181.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone JCM800Clean (slot 80): JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700 + BlendOfAll_dc (Marshall 1960AV).
Slot: 80. Always on.
Gain: 45, VOL: 60, Bass: 55, Middle: 60, Treble: 62.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 30.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - La Charger

Gain: 40.
Tone: 55.
VOL: 60.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: 1.
1kHz: 2.
3kHz: 3.
6kHz: 0.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 18.
Time: 380.
Feedback: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Room

Mix: 10.
Decay: 35.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, EQ, DLY.
- CTL off / loaded state: Cleaner verse/rhythm. GP-5 active: NR, RVB, N->S.
- First CTL press: Lead solo. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DST.
MIDI mapping lives on the controller/device, not in the .prst.
- DST La Charger: loads off; toggle to add this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- DST-only alternative from loaded state: CTL off, MIDI DST on; other MIDI blocks at their load states. GP-5 active: NR, DST, RVB, N->S. Board switches unchanged.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Verse: CTL off; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, RVB, N->S.
- Motoring chorus: CTL off; MIDI DST on; Both King of Kings channels off; Narcissus on. Active GP-5: NR, DST, RVB, N->S.
- Solo: CTL on; MIDI at the corresponding baseline pattern; Both King of Kings channels off; Narcissus on. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.

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
LEVEL: unity.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## King of Kings Left

Bypassed throughout.
Volume: 50.
Gain: 20.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed throughout.
Volume: 70.
Gain: 50.
Tone: 60.
Clipping toggle: Harder position.
Feedback toggle: Higher-gain position.

## Joyo American Sound

Bypassed throughout.
Level: 50.
Drive: 10.
Voice: 50.
Low: 50.
Mid: 50.
High: 50.

## Joyo Narcissus

On throughout.
Width: 40.
Depth: 20.
Rate: 30.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Bypassed throughout.
- King of Kings Right: Bypassed throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: On throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 181.
- Amp/cab foundation: SnapTone 71 -> SnapTone 80.
- SnapTone Gain: 43 -> 45.
- SnapTone VOL: 40 -> 60.
- PRE: COMP4 -> off.
- DST Gain: 60 -> 40.
- DST Tone: 65 -> 55.
- DST VOL: 80 -> 60.
- EQ 500Hz: 5 -> 1.
- EQ 1kHz: 10 -> 2.
- EQ 3kHz: 12 -> 3.
- EQ 6kHz: 5 -> 0.
- EQ VOL: 65 -> 53.
- DLY Mix: 25 -> 18.
- RVB Mix: 22 -> 10.
- Board King of Kings Right: ; Bypassed throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
