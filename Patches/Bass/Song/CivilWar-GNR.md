# Civil War — Guns N' Roses

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: B-CivilWar. Patch VOL: 55.
Preset tempo: 70 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Use Your Illusion II* (1991). About 70 BPM half-time feel, est. Online tempo sources disagree.
Tuning: Eb standard. GNR tuned down a half step on the *Illusion* records. Tune down, or play it in E and transpose by ear.
Duff McKagan plays with a pick: punky, mid-forward, with real grit when the band is loud. His bass is a Fender Jazz Special, which is a P/J. Your Harley Benton is the right instrument for this.
The song moves between a sparse, moody verse and a heavy, driving chorus and double-time outro.
Pickups: both volumes full. Tone at about 70%. Pick, not fingers.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 23.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone GrittySVT (slot 57): SVT PUSHED (SVT-CL) + Apg810.
Slot: 57. Always on.
Gain: 48, VOL: 55, Bass: 56, Middle: 58, Treble: 56.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
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

33Hz: 1.
150Hz: 1.
600Hz: 2.
2kHz: 3.
8kHz: 1.
VOL: 54.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 5.
Decay: 25.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Intro and verses. GP-5 active: NR, EQ, RVB, N->S.
- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.

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

Drive off for intro/verses; on for heavy choruses and outro; preamp active throughout.
Drive: 30.
Blend: 35.
Presence: 58.
Level: 58.
Treble: 55.
Middle: 58.
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
- Joyo Tidal Wave: Drive off for intro/verses; on for heavy choruses and outro; preamp active throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 23.
- Pedal display name: CivilWar-GNR -> B-CivilWar. Filenames stay unchanged.
- DST: Bass OD -> off.
- DST: removed from CTL.
- RVB Mix: 10 -> 5.
- Board Tidal Wave: Drive 30, Blend 35; Drive off for intro/verses; on for heavy choruses and outro; preamp active throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
