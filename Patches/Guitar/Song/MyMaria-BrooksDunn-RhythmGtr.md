# My Maria (Rhythm Guitar) — Brooks & Dunn

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: White Tape.
Patch screen name: MyMaria-Gt. Patch VOL: 50.
Preset tempo: 96 BPM.

From *Borderline* (1996). About 96 BPM, est.
A cover of B.W. Stevenson's 1973 hit. Ronnie Dunn's falsetto hook drives it, over a loping mid-tempo groove.
The rhythm guitar is a warm clean-to-edge strum with some push. Tele-style fills and a solo sit on top.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the rhythm. Bridge humbucker for the solo.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 171.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone NashClean (slot 62): CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy] + Origin Effects Brown Deluxe 1x12 Medium Mix.
Slot: 62. Always on.
Gain: 54, VOL: 75, Bass: 48, Middle: 52, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP

Sustain: 35.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Green OD

Gain: 25.
Tone: 58.
VOL: 68.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 15.
Time: 340.
Feedback: 18.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Spring

Mix: 12.
Decay: 35.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Rhythm. GP-5 active: NR, PRE, EQ, RVB, N->S.
- First CTL press: Lead. GP-5 active: NR, PRE, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo King of Kings -> Joyo Narcissus -> Valeton GP-5 -> Donner White Tape.
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

Bypassed throughout.
COMP: 30.
TONE: 50.
LEVEL: 50.
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
Gain: 20.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed throughout.
Volume: 50.
Gain: 20.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Donner White Tape

Off for strum and solo; on for clean fills/turnarounds at CTL off.
Level: ~10:30.
Time: 120ms (free-time slap; no beat subdivision).
Feedback: Fully counterclockwise (one repeat).
Mono rig: use the top row/left channel; bottom row unused. Set Time against the track by ear. No tap tempo. Its repeats include the GP-5 reverb. Keep this fixed across the shared slap set.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: Bypassed throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Bypassed throughout.
- King of Kings Right: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
- Donner White Tape: Off for strum and solo; on for clean fills/turnarounds at CTL off.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 171.
- DST Gain: 32 -> 25.
- RVB Mix: 16 -> 12.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
