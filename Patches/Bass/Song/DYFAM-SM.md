# DYFAM-SM — Don't You Forget About Me (Simple Minds, 1985, ~114 BPM)

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: DYFAM-SM. Patch VOL: 55.
Preset tempo: 114 BPM.

This bass part is a pulse, not a feature.
The track is built on a synth wall — Korg/Oberheim pads, a huge gated snare, that DX7 hook.
Bass has one job: lock the low end down and drive the eighth-note pulse without getting buried or muddying the mix.
Tone is clean, present, and slightly bright — pick/finger attack has to cut, not thicken.
No grit, no fuzz, no distortion — this song was not made with a dirty bass.
Two states:
- **CTL off** — the verse/chorus pulse. Clean, tight, contained. This is 90% of the song.
- **CTL on** — the "hey hey hey" outro hook. Same core tone, but pushed — brighter and louder to sit on top of the vocal ad-libs and the synth swell instead of getting swallowed by them.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 30.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 55, VOL: 75, Bass: 60, Middle: 55, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 20.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 25.
+3dB: off.
Bright: on.
CTL assigned. Loads off; first CTL press switches it on.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 0.
150Hz: 2.
600Hz: -2.
2kHz: 3.
8kHz: 5.
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
- CTL off / loaded state: the verse/chorus pulse. GP-5 active: NR, EQ, N->S.
- First CTL press: the "hey hey hey" outro hook. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Off by default; on for outro vamp with CTL on.
-2OCT: 0.
-OCT: 0.
+OCT: 40.
+2OCT: 0.
Dry: 80.

## Donner Ultimate Comp

On throughout.
COMP: 55.
TONE: 60.
LEVEL: 60.
Mode: TREBLE.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## Joyo Tidal Wave

On throughout.
Drive: 25.
Blend: 30.
Presence: 50.
Level: 50.
Treble: 55.
Middle: 60.
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

On throughout.
Width: 30.
Depth: 15.
Rate: 9 o’clock.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Off by default; on for outro vamp with CTL on.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: On throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: On throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 30.
- SnapTone Middle: 65 -> 55.
- PRE Gain: 65 -> 25.
- PRE +3dB: true -> off.
- EQ 33Hz: 6 -> 0.
- EQ 600Hz: -6 -> -2.
- EQ 2kHz: 8 -> 3.
- Board Narcissus: Rate 9 o’clock.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
