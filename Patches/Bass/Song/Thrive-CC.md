# Thrive — Casting Crowns

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Thrive. Patch VOL: 55.
Preset tempo: 115 BPM.

Bass: Harley Benton P/J, 5-string, passive. Full board.
Part of a 5-song worship set. The board ahead of the GP-5 is fixed across all 5 songs — see "Full Pedalboard" below. Only this GP-5 patch changes song to song.
CCM pop-rock, not straight congregational worship — Casting Crowns' Thrive sits at 115 BPM in F#, driving and radio-ready with a big lift into the chorus. The bass needs a punchy, present pop-rock pocket in the verse and a bigger, more driven push in the chorus, same split as Unstoppable God but with a tighter, more pop-rock voicing instead of an arena-worship one.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 117.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone WorshipSVT (slot 59): SVT CLEAN PUSHED (SVT-CL) + Ampeg SVT Bright Beta52.
Slot: 59. Always on.
Gain: 50, VOL: 55, Bass: 55, Middle: 58, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Bass OD

Gain: 25.
Blend: 30.
VOL: 60.
Bass: 55.
Treble: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 0.
400Hz: -3.
800Hz: 2.
4.5kHz: 2.
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

CTL blocks: DST.
- CTL off / loaded state: Punchy verse. GP-5 active: NR, EQ, N->S.
- First CTL press: Chorus grit. GP-5 active: NR, DST, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Five-song worship set: Bread / Giving It All / Thrive / Unstoppable God / Your Love. Knob settings stay fixed for this entire set; footswitches may change.
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

On throughout the set.
COMP: 42.
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

Drive on throughout the set; preamp active throughout.
Drive: 25.
Blend: 35.
Presence: 55.
Level: 55.
Treble: 55.
Middle: 58.
Bass: 55.
Mid-Frequency: 500Hz.
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

Bypassed throughout the set.
Width: 30.
Depth: 25.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout the set.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive on throughout the set; preamp active throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout the set.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 117.
- SnapTone Gain: 60 -> 50.
- PRE: COMP4 -> off.
- DST Gain: 55 -> 25.
- DST Blend: 50 -> 30.
- EQ 50Hz: 4 -> 1.
- EQ 800Hz: 5 -> 2.
- EQ 4.5kHz: 5 -> 2.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
