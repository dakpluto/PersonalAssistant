# Still...You Turn Me On — Emerson, Lake & Palmer

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: StillYTMO-. Patch VOL: 52.
Preset tempo: 72 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Brain Salad Surgery* (1973), ~72 BPM.
Greg Lake plays both the 12-string acoustic and bass on this track, alongside Emerson's keys — this isn't a bass-free recording.
No note-for-note transcription of Lake's actual bass part here, though — this patch is a written supportive part built to match the song's own dynamic arc (minimal under the acoustic verses, driven under the loud mid-section), not a claim that it reproduces what he played.
Verses stay minimal and warm — long sustained root notes under the acoustic guitar, out of the way of the vocal.
The mid-section is the payoff: that's where the record gets loud and dramatic (heavily effected electric guitar, Emerson's keys swelling underneath). A bass would push forward and get some grit there to match the intensity.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 107.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
Use the GP-5 Bass OD alone for the adapted heavy section; Tidal Wave drive stays off.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanSVT (slot 53): SVT CLEAN (SVT-CL) + Apg810.
Slot: 53. Always on.
Gain: 49, VOL: 65, Bass: 55, Middle: 55, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 25.
Blend: 30.
VOL: 60.
Bass: 45.
Treble: 55.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 2.
150Hz: 2.
600Hz: 0.
2kHz: 1.
8kHz: -1.
VOL: 52.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Hall

Mix: 8.
Decay: 45.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, RVB.
- CTL off / loaded state: Acoustic verse support. GP-5 active: NR, EQ, N->S.
- First CTL press: Adapted heavy section. GP-5 active: NR, DST, EQ, RVB, N->S.
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
COMP: 35.
TONE: 50.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

Drive off throughout; preamp/EQ/Level remain active.
Drive: 15.
Blend: 20.
Presence: 50.
Level: 50.
Treble: 50.
Middle: 50.
Bass: 50.
Mid-Frequency: 500Hz.
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
- Joyo Tidal Wave: Drive off throughout; preamp/EQ/Level remain active.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 107.
- PRE: Micro Boost -> off.
- PRE: removed from CTL.
- DST Gain: 60 -> 25.
- DST Blend: 65 -> 30.
- RVB Mix: 25 -> 8.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
