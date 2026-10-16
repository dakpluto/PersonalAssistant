# The Blessing — Kari Jobe, Cody Carnes

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Blessing-K. Patch VOL: 55.
Preset tempo: 70 BPM.

Kari Jobe and Cody Carnes, with Elevation Worship. From *The Blessing* (Kari Jobe) and *Graves into Gardens* (Elevation), 2020. Written by Chris Brown, Cody Carnes, Kari Jobe and Steven Furtick.
Slow, long-form build. 70 BPM, B.
The bass sits out or plays very sparse in the opening. It holds long, deep notes under the pads in the verses. Then it drives the long "May His favor be upon you" bridge into the "Amen" climax.
I haven't verified the exact bass parts or gear. The low end on modern Elevation/Kari Jobe live records may be layered with synth bass. This patch covers the electric part and leans sub-heavy so it sits like one.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 55%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 19.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
Keep the shared board controls; Flamma is optional at the climax and stays off on the lowest-register notes.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone WorshipSVT (slot 59): SVT CLEAN PUSHED (SVT-CL) + Ampeg SVT Bright Beta52.
Slot: 59. Always on.
Gain: 48, VOL: 55, Bass: 56, Middle: 46, Treble: 44.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 8.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

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
800Hz: 0.
4.5kHz: -3.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Sparse opening/verses. GP-5 active: NR, EQ, N->S.
- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Four-song worship set: The River / 10,000 Reasons / Forever Reign / The Blessing. Knob settings stay fixed for this entire set; footswitches may change.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Off by default; optional on for bridge/Amen climax above the lowest register.
-2OCT: 0.
-OCT: 35.
+OCT: 0.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout the set.
COMP: 40.
TONE: 50.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 20.
Treble: 40.
Bass: 60.
Volume: 40.

## Joyo Tidal Wave

Drive off for verses; on for bridge/Amen climax.
Drive: 42.
Blend: 40.
Presence: 55.
Level: 55.
Treble: 52.
Middle: 55.
Bass: 55.
Mid-Frequency: 500Hz.
Bass-Shift: 80Hz.
Cab-Sim (DI out): Off (DI unused).
Ground Lift: Off (DI unused).
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

Bypassed throughout the set.
Width: 30.
Depth: 25.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Off by default; optional on for bridge/Amen climax above the lowest register.
- Donner Ultimate Comp: On throughout the set.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive off for verses; on for bridge/Amen climax.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout the set.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 19.
- SnapTone Bass: 62 -> 56.
- EQ 50Hz: 4 -> 1.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
