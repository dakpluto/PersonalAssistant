# Everyday I Have the Blues — John Mayer (Where the Light Is)

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: White Tape.
Patch screen name: Everyday I. Patch VOL: 65.
Preset tempo: 104 BPM.

Full-band live cut, horns and rhythm section, mid-tempo shuffle around 104 BPM.
Mayer's rig for this set is boutique-clean-amp-into-a-Tube-Screamer-style-boost — never a channel switch, just the same amp pushed harder for the solo.
This board copies that exact trick: one amp voicing, one boost that kicks it into gain for the lead break.
No modulation anywhere in this build. This song doesn't call for chorus/vibe — it's a straight blues shuffle, and adding wobble would just muddy the horn-band mix.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 155.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone MayerDumble (slot 66): SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS #102) + Bogner 2x12 EVM12L - SM57 1 - Cap Edge.
Slot: 66. Always on.
Gain: 55, VOL: 75, Bass: 55, Middle: 65, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 45.
Tone: 55.
VOL: 65.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 3.
1kHz: 2.
3kHz: 0.
6kHz: -3.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Slapback

Mix: 15.
Time: 288.
F.Back: 20.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Spring

Mix: 12.
Decay: 30.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, DLY.
- CTL off / loaded state: Shuffle rhythm. GP-5 active: NR, EQ, RVB, N->S.
- First CTL press: Green OD solo. GP-5 active: NR, DST, EQ, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Shuffle comping: CTL off; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off, White Tape off. Active GP-5: NR, EQ, RVB, N->S.
- Clean fills: CTL off; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off, White Tape on. Active GP-5: NR, EQ, RVB, N->S.
- Solo: CTL on; MIDI at the corresponding baseline pattern; King of Kings Left on/Right off, White Tape off. Active GP-5: NR, DST, EQ, DLY, RVB, N->S.

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

On throughout.
COMP: 40.
TONE: 55.
LEVEL: 55.
Mode: NORMAL.

## Donner Stylish Fuzz

Bypassed throughout.
Sustain: 25.
Treble: 50.
Bass: 50.
Volume: 50.

## King of Kings Left

On throughout.
Volume: 55.
Gain: 25.
Tone: 50.
Clipping toggle: Softer position.
Feedback toggle: Standard position.

## King of Kings Right

Bypassed throughout.
Volume: 65.
Gain: 60.
Tone: 60.
Clipping toggle: Harder position.
Feedback toggle: Higher-gain position.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Donner White Tape

Off for shuffle rhythm and CTL-on solo; on for fills between horn lines at CTL off.
Level: ~10:30.
Time: 120ms (free-time slap; no beat subdivision).
Feedback: Fully counterclockwise (one repeat).
Mono rig: use the top row/left channel; bottom row unused. Set Time against the track by ear. No tap tempo. Its repeats include the GP-5 reverb. Keep this fixed across the shared slap set.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: On throughout.
- King of Kings Right: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
- Donner White Tape: Off for shuffle rhythm and CTL-on solo; on for fills between horn lines at CTL off.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 155.
- NR THRE: 28 -> 15.
- PRE: COMP4 -> off.
- DLY Mix: 30 -> 15.
- DLY Time: 320 -> 288.
- RVB Mix: 20 -> 12.
- Board King of Kings Right: ; Bypassed throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
