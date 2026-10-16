# Egan-Fretless

Revised 2026-10-16 following the approved library audit.
Type: Artist. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run active.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: EganFretls. Patch VOL: 55.
Preset tempo: 92 BPM.

Mark Egan-inspired melodic fretless voice. Active Sire V7 with flatwounds. Keep the preamp close to flat and avoid clipping the GP-5 input. Lush chorus is intentional; the revised compression and low-frequency EQ keep the fundamental present. Offramp features Steve Rodby, so it is not an Egan personnel reference.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 1.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 58, VOL: 75, Bass: 55, Middle: 55, Treble: 68.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 10.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 45.
Attack: 45.
Clip: 50.
VOL: 60.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 0.
150Hz: 0.
600Hz: -2.
2kHz: 5.
8kHz: 3.
VOL: 58.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - B-Chorus

Depth: 70.
Rate: 0.6.
VOL: 50.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Analog

Mix: 18.
Time: 450.
Feedback: 12.
Trail: on.
MIDI-only. Loads on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 15.
Decay: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: MOD.
- CTL off / loaded state: Narcissus only. GP-5 active: NR, PRE, EQ, DLY, RVB, N->S.
- First CTL press: Narcissus + B-Chorus stacked. GP-5 active: NR, PRE, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- DLY Analog: loads on; toggle to remove this block independently.
- DLY-only alternative from loaded state: CTL off, MIDI DLY off; other MIDI blocks at their load states. GP-5 active: NR, PRE, EQ, RVB, N->S. Board switches unchanged.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Bypassed throughout.
-2OCT: 0.
-OCT: 0.
+OCT: 15.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout.
COMP: 40.
TONE: 60.
LEVEL: 55.
Mode: TREBLE.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

On throughout.
Drive: 10.
Blend: 20.
Presence: 55.
Level: 55.
Treble: 60.
Middle: 50.
Bass: 55.
Mid-Frequency: 500Hz.
Bass-Shift: 40Hz.
Cab-Sim (DI out): On.
Ground Lift: On.
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

On throughout.
Width: 65.
Depth: 30.
Rate: 35.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: On throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: On throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 1.
- NR THRE: 28 -> 10.
- PRE Sustain: 65 -> 45.
- EQ 33Hz: 6 -> 0.
- EQ 600Hz: -8 -> -2.
- EQ 8kHz: 10 -> 3.
- MOD VOL: 100 -> 50.
- RVB Mix: 25 -> 15.
- Board Narcissus: Depth 30.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
Source check: https://www.patmetheny.com/music/detail.cfm?id=39
