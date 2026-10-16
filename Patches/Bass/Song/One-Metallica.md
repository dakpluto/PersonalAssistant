# One — Metallica

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: One-Metall. Patch VOL: 55.
Preset tempo: 85 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *...And Justice for All* (1988). Base tempo ~85 BPM for the intro/verses; the outro "machine gun" section roughly doubles that feel.
This is one of the most dynamically extreme songs in the catalog to patch for — a quiet, clean-toned intro and verses (that famous ambient/clean-arpeggio build) giving way to the all-out thrash assault of the tremolo-picked "machine gun" riff and solo section. One widely-documented bit of trivia worth knowing going in: Jason Newsted's bass on this album was mixed extremely low, a point of long-running dispute in the band. Doesn't change how to build the patch, but it's why "One" isn't a song people typically think of as a bass showcase the way "Hysteria" or "Cliffs of Dover" are.
Three sounds (updated 2026-10-12 to use a board stomp):
- Clean intro and verses: CTL off, Tidal Wave drive off.
- Distorted choruses: CTL off, Tidal Wave drive on.
- Heavy back half ("Darkness imprisoning me", machine-gun riff, solos, outro): CTL on, Tidal Wave drive off.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 86.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone GrittySVT (slot 57): SVT PUSHED (SVT-CL) + Apg810.
Slot: 57. Always on.
Gain: 42, VOL: 55, Bass: 55, Middle: 55, Treble: 50.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
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

## EQ - Bass EQ 1

33Hz: 3.
150Hz: 0.
600Hz: 2.
2kHz: 3.
8kHz: 1.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 35.
Trail: on.
CTL assigned. Loads on; first CTL press switches it off.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: RVB.
- CTL off / loaded state: Intro/verses. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: Heavy machine-gun section (board drive). GP-5 active: NR, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
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
COMP: 45.
TONE: 55.
LEVEL: 58.
Mode: TREBLE.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

Drive off for intro/verses; on for the heavy machine-gun sections; preamp active throughout.
Drive: 30.
Blend: 35.
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

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive off for intro/verses; on for the heavy machine-gun sections; preamp active throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 86.
- PRE: Micro Boost -> off.
- PRE: removed from CTL.
- DST: SM Dist -> off.
- DST: removed from CTL.
- RVB Mix: 20 -> 5.
- Board Tidal Wave: Blend 35; Drive off for intro/verses; on for the heavy machine-gun sections; preamp active throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
