# 10,000 Reasons — Matt Redman

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: 10KReasons. Patch VOL: 55.
Preset tempo: 73 BPM.

Matt Redman, from *10,000 Reasons* (2011, live). Written by Matt Redman and Jonas Myrin.
Congregational worship ballad. About 73 BPM, G (per Worship Together/MultiTracks; sources range 72-74).
It opens on acoustic and piano. The band fills in through the verses, and it peaks on the final "Bless the Lord" chorus.
The bass role is simple and supportive: long roots, a few passing notes, no busy lines. Lay out or play very sparse in the intro.
I haven't verified the exact bass parts or gear on this recording. Built from the organic live-band sound of the record: warm, clean and round, with no grit.
Instrument: Harley Benton P/J (passive 5-string). Both pickup volumes full, tone about 55%.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 5.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 52, VOL: 80, Bass: 58, Middle: 52, Treble: 46.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 20.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 1.
150Hz: 2.
600Hz: -2.
2kHz: 0.
8kHz: -3.
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

CTL blocks: PRE.
- CTL off / loaded state: Intro, verses, early choruses (load state): warm, round, clean B-15 under the acoustic and piano. GP-5 active: NR, EQ, N->S.
- First CTL press: Final choruses: same tone with more level and body, to anchor the big congregational ending. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Four-song worship set: The River / 10,000 Reasons / Forever Reign / The Blessing. Knob settings stay fixed for this entire set; footswitches may change.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Bypassed throughout.
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

Drive off throughout.
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

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout the set.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive off throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout the set.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 5.
- PRE Gain: 32 -> 20.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
