# Papa Was a Rollin' Stone — The Temptations (Guitar)

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: G-PapaRoll. Patch VOL: 52.
Preset tempo: 120 BPM.

**Instrument:** Stratocaster (HSS)
"Papa Was a Rollin' Stone" (1972). Norman Whitfield production, Funk Brothers session band.
The single edit runs about 7 minutes. The album version on *All Directions* runs close to 12.
The whole record hangs on the bass ostinato and the hi-hat. The guitars are support, not the feature.
Two guitar jobs matter here.
First: dry, clipped, muted single-note stabs that answer the bass line. Thin, snappy, almost percussive.
Second: wah-wah comping, the "wacka-wacka" that thickens as the arrangement builds with strings and horns.
There's no guitar solo. The "lead" sound on this record is the wah part, so that's what CTL On is.
Pickups: position 4 (middle + neck) for CTL Off, for the hollow quack on muted notes. Position 3 (middle alone) for the wah part, which leaves the filter room to sweep without the neck pickup's low end blurring it.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 176.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone TwinClean (slot 61): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + TWIN REVERB __ CLEAN (vulturized Twin).
Slot: 61. Always on.
Gain: 48, VOL: 75, Bass: 42, Middle: 58, Treble: 62.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Toucher

Sense: 62.
Range: 55.
Q: 50.
Mix: 60.
Mode: 0.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 1

125Hz: -4.
400Hz: -2.
800Hz: 3.
1.6kHz: 4.
4kHz: 1.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 8.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE.
- CTL off / loaded state: muted single-note stabs (intro and main groove). GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: wah comping (build sections and when the track fills in). GP-5 active: NR, PRE, EQ, RVB, N->S.
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

On throughout.
COMP: 35.
TONE: 58.
LEVEL: 55.
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
Gain: 15.
Tone: 55.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed throughout.
Volume: 50.
Gain: 30.
Tone: 55.
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
Rate: 25.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Bypassed throughout.
- King of Kings Right: Bypassed throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 176.
- Pedal display name: PapaRollin-Gtr -> G-PapaRoll. Filenames stay unchanged.
- PRE Q: 68 -> 50.
- PRE Mix: 85 -> 60.
- EQ 125Hz: -8 -> -4.
- RVB Mix: 14 -> 8.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
