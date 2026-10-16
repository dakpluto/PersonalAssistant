# Uprising — Muse

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Uprising-M. Patch VOL: 55.
Preset tempo: 128 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *The Resistance* (2009), ~128 BPM.
The record's iconic intro riff is a real synthesizer, not a bass — but Chris Wolstenholme's whole live rig is built around making a bass guitar sound like a synth (heavy fuzz, octave layering, envelope filtering). This patch leans into that same trick: verse = the pulsing "synth bass" texture, chorus = the tone opens up into a bigger, more straightforward rock push for "they will not force us..."

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 122.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone HairySVT (slot 58): SVT SANS HAIRY DRIVE (SVT-CL) + Sunn215.
Slot: 58. Always on.
Gain: 54, VOL: 55, Bass: 55, Middle: 55, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Toucher

Sense: 60.
Range: 55.
Q: 50.
Mix: 45.
Mode: 1.
CTL assigned. Loads on; first CTL press switches it off.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 1.
400Hz: -3.
800Hz: 3.
4.5kHz: 3.
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
- CTL off / loaded state: Filtered synth-style pulse. GP-5 active: NR, PRE, EQ, N->S.
- First CTL press: Open heavy chorus voice. GP-5 active: NR, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

On throughout.
-2OCT: 0.
-OCT: 40.
+OCT: 35.
+2OCT: 0.
Dry: 70.

## Donner Ultimate Comp

On throughout.
COMP: 55.
TONE: 55.
LEVEL: 60.
Mode: TREBLE.

## Donner Stylish Fuzz

On throughout.
Sustain: 65.
Treble: 55.
Bass: 60.
Volume: 60.

## Joyo Tidal Wave

On throughout.
Drive: 25.
Blend: 50.
Presence: 60.
Level: 60.
Treble: 55.
Middle: 55.
Bass: 55.
Mid-Frequency: 1000Hz.
Bass-Shift: 80Hz.
Cab-Sim (DI out): Off.
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

- Flamma FS-08 Octave: On throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: On throughout.
- Joyo Tidal Wave: On throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 122.
- PRE Mix: 70 -> 45.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ 50Hz: 4 -> 1.
- MOD: O-Phase -> off.
- RVB: Room -> off.
- RVB: removed from CTL.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
