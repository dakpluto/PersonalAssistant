# LoveShack-B52 — Love Shack (The B-52's, 1989, ~134 BPM)

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: LoveShack-. Patch VOL: 55.
Preset tempo: 134 BPM.

This is a party-rock dance bassline — bouncy, syncopated, staccato hits that drive the whole groove.
No wash, no smear, no low-end mud — every note has to pop cleanly through a busy arrangement (surf guitar, organ stabs, group vocals, cowbell).
Tone is bright, punchy, and a little funky — the "boing" character comes from staccato playing and compression, not from any modulation or octave trick.
This song is clean throughout — no need to fake grit into it.
Two states:
- **CTL off** — the verse groove. Bouncy, syncopated, contained.
- **CTL on** — the "Love Shack, baby" chorus hook. Same core tone, pushed louder and a little grittier to match the call-and-response energy and the full-band chorus hit.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 72.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 50, VOL: 75, Bass: 55, Middle: 60, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 20.
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

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 2.
400Hz: -2.
800Hz: 2.
4.5kHz: 2.
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
- CTL off / loaded state: the verse groove. GP-5 active: NR, EQ, N->S.
- First CTL press: the "Love Shack, baby" chorus hook. GP-5 active: NR, PRE, EQ, N->S.
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
COMP: 60.
TONE: 65.
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
Drive: 30.
Blend: 35.
Presence: 60.
Level: 55.
Treble: 60.
Middle: 55.
Bass: 50.
Mid-Frequency: 1000Hz.
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

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: On throughout.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 72.
- SnapTone Gain: 58 -> 50.
- SnapTone Bass: 62 -> 55.
- PRE Gain: 60 -> 20.
- PRE +3dB: true -> off.
- DST: Bass OD -> off.
- DST: removed from CTL.
- EQ 50Hz: 4 -> 1.
- EQ 400Hz: -5 -> -2.
- EQ 800Hz: 6 -> 2.
- EQ 4.5kHz: 6 -> 2.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
