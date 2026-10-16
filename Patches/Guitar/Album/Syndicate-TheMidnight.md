# *Syndicate* (Guitar) — The Midnight

Revised 2026-10-16 following the approved library audit.
Type: Album. Instrument: HSS Stratocaster.
Full board. Board Option: White Tape.
Patch screen name: Syndicate. Patch VOL: 50.
Preset tempo: 104 BPM.

The Midnight Syndicate album-inspired HSS Strat palette. Compressed chorused cleans and RAT-style leads over a clean Dumble capture. Exact recording gear is unverified. White Tape supplies the shared 120ms slap; Pure 433ms is a dotted eighth at about 104 BPM. Fixed Hall means reduced-effect sounds are not fully dry.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 137.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone MayerDumble (slot 66): SLAMMIN_DUMBLE_FORD_CLN_BALANCED_S (Dumble ODS) + Bogner 2x12 EVM12L - SM57 1 - Cap Edge.
Slot: 66. Always on.
Gain: 45, VOL: 70, Bass: 48, Middle: 50, Treble: 58.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Boost

Gain: 25.
+3dB: off.
Bright: off.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Darktale

Gain: 62.
Filter: 40.
VOL: 58.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: -1.
1kHz: 1.
3kHz: 2.
6kHz: 1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 30.
Rate: 0.8.
Tone: 60.
MIDI-only. Loads on.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Pure

Mix: 26.
Time: 433.
F.Back: 32.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 12.
Decay: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, DST, DLY.
- CTL off / loaded state: Clean synthwave rhythm. GP-5 active: NR, EQ, MOD, RVB, N->S.
- First CTL press: RAT lead and digital echo. GP-5 active: NR, PRE, DST, EQ, MOD, DLY, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: PRE, DST, MOD, DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- PRE Boost: loads off; toggle to add this block independently.
- DST Darktale: loads off; toggle to add this block independently.
- MOD A-Chorus: loads on; toggle to remove this block independently.
- DLY Pure: loads off; toggle to add this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- PRE-only alternative from loaded state: CTL off, MIDI PRE on; other MIDI blocks at their load states. GP-5 active: NR, PRE, EQ, MOD, RVB, N->S. Board switches unchanged.
- DST-only alternative from loaded state: CTL off, MIDI DST on; other MIDI blocks at their load states. GP-5 active: NR, DST, EQ, MOD, RVB, N->S. Board switches unchanged.
- MOD-only alternative from loaded state: CTL off, MIDI MOD off; other MIDI blocks at their load states. GP-5 active: NR, EQ, RVB, N->S. Board switches unchanged.
- DLY-only alternative from loaded state: CTL off, MIDI DLY on; other MIDI blocks at their load states. GP-5 active: NR, EQ, MOD, DLY, RVB, N->S. Board switches unchanged.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Clean rhythm: CTL off; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, EQ, MOD, RVB, N->S.
- Clean echo: CTL off; MIDI DLY on; Base board states as listed below. Active GP-5: NR, EQ, MOD, DLY, RVB, N->S.
- Crunch rhythm: CTL off; MIDI DST on; Base board states as listed below. Active GP-5: NR, DST, EQ, MOD, RVB, N->S.
- Reduced-modulation chops: CTL off; MIDI MOD off; White Tape off, both King of Kings channels off; fixed Hall remains on. Active GP-5: NR, EQ, RVB, N->S.
- Lead: CTL on; MIDI at the corresponding baseline pattern; Base board states as listed below. Active GP-5: NR, PRE, DST, EQ, MOD, DLY, RVB, N->S.
- Reduced-delay fast lead: CTL on; MIDI DLY off; Base board states as listed below. Active GP-5: NR, PRE, DST, EQ, MOD, RVB, N->S.
- Slap fast lead: CTL on; MIDI DLY off; White Tape on, both King of Kings channels off. Active GP-5: NR, PRE, DST, EQ, MOD, RVB, N->S.
- Slap chops: CTL off; MIDI at the corresponding baseline pattern; White Tape on, both King of Kings channels off. Active GP-5: NR, EQ, MOD, RVB, N->S.

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
COMP: 50.
TONE: 58.
LEVEL: 55.
Mode: TREBLE.

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
Gain: 40.
Tone: 55.
Clipping toggle: Harder position.
Feedback toggle: Higher-gain position.

## Joyo Narcissus

Bypassed throughout.
Width: 30.
Depth: 20.
Rate: 20.
Mode: Vintage.

## Donner White Tape

Off by default; on for slap chops at CTL off, or fast lead at CTL on with MIDI DLY off.
Level: ~10:30.
Time: 120ms (free-time slap; no beat subdivision).
Feedback: Fully counterclockwise (one repeat).
Mono rig: use the top row/left channel; bottom row unused. Set Time against the track by ear. No tap tempo. Its repeats include the GP-5 reverb. Keep this fixed across the shared slap set.

## Board choreography

- Flamma FS-08 Octave: Bypassed throughout.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- King of Kings Left: Bypassed throughout.
- King of Kings Right: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
- Donner White Tape: Off by default; on for slap chops at CTL off, or fast lead at CTL on with MIDI DLY off.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 137.
- PRE Gain: 50 -> 25.
- PRE +3dB: true -> off.
- MOD Depth: 45 -> 30.
- RVB Mix: 20 -> 12.
- Board King of Kings Right: ; Bypassed throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
