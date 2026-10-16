# RammGrind — Industrial Metal Bass (Rammstein Style)

Revised 2026-10-16 following the approved library audit.
Type: Style. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: RammGrind. Patch VOL: 55.
Preset tempo: 122 BPM.

Rammstein-inspired industrial P/J bass. Dry, driven and precise. Tidal Wave is the principal added drive; Stylish Fuzz and GP-5 Bass OD are bypassed. BrightSVT supplies the amp voice. Lower midrange is restored so the low notes still read beneath the grind.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 135.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone BrightSVT (slot 55): SVT SANS BRIGHT DRIVE (SVT-CL) + Hartke410.
Slot: 55. Always on.
Gain: 58, VOL: 60, Bass: 50, Middle: 56, Treble: 62.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 22.
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

## EQ - Bass EQ 1

33Hz: -8.
150Hz: 0.
600Hz: 4.
2kHz: 3.
8kHz: 2.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: PRE.
- CTL off / loaded state: Main Tidal Wave grind. GP-5 active: NR, EQ, N->S.
- First CTL press: Input push for choruses and unison hits. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Off for main tone; optional on for ending hits only.
-2OCT: 0.
-OCT: 20.
+OCT: 0.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout.
COMP: 65.
TONE: 55.
LEVEL: 55.
Mode: TREBLE.

## Donner Stylish Fuzz

Bypassed throughout; Tidal Wave is the principal added drive.
Sustain: 55.
Treble: 60.
Bass: 35.
Volume: 55.

## Joyo Tidal Wave

On throughout.
Drive: 70.
Blend: 65.
Presence: 60.
Level: 60.
Treble: 60.
Middle: 65.
Bass: 50.
Mid-Frequency: 1000Hz.
Bass-Shift: 80Hz.
Cab-Sim (DI out): On.
Ground Lift: Off.
The footswitch toggles drive only. Preamp EQ and Level stay active in both states. Cab-Sim/Ground Lift affect the DI path; main instrument output is unchanged.

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

- Flamma FS-08 Octave: Off for main tone; optional on for ending hits only.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout; Tidal Wave is the principal added drive.
- Joyo Tidal Wave: On throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 135.
- SnapTone Middle: 65 -> 56.
- NR THRE: 42 -> 22.
- PRE Gain: 70 -> 25.
- DST: Bass OD -> off.
- EQ 150Hz: -6 -> 0.
- EQ 600Hz: 12 -> 4.
- EQ 2kHz: 10 -> 3.
- EQ 8kHz: 6 -> 2.
- Board Stylish Fuzz: ; Bypassed throughout; Tidal Wave is the principal added drive.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
