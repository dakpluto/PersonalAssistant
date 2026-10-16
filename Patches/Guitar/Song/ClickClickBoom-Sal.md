# Click Click Boom — Saliva

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
Full board. Board Option: White Tape.
Patch screen name: Click Clic. Patch VOL: 55.
Preset tempo: 100 BPM.

**Instrument:** Stratocaster (HSS)
"Click Click Boom" (*Every Six Seconds*, 2001).
Post-grunge/nu-metal crossover, not full-on scoop-mid metal.
Verse riff is tight, syncopated, palm-muted, low-string driven.
Chorus and solo open up — more gain, more sustain, bigger and wetter.
Two distinct jobs for this patch: choke the riff down tight, then let the lead breathe.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 149.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone ModernRect (slot 76): 4. MESA DUAL RECTIFIER 2025 | RHYTHM #4 + V30 LR 4FB 4x12 SM57 0.75in 0.0in 7603 (Mesa V30).
Slot: 76. Always on.
Gain: 50, VOL: 40, Bass: 55, Middle: 56, Treble: 55.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 38.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Super OD

Gain: 15.
Tone: 55.
VOL: 68.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Guitar EQ 2

100Hz: 0.
500Hz: 1.
1kHz: 2.
3kHz: 3.
6kHz: -6.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 10.
Decay: 35.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, EQ, RVB.
- CTL off / loaded state: Tight verse riff. GP-5 active: NR, N->S.
- First CTL press: Chorus lift; solo adds White Tape. GP-5 active: NR, DST, EQ, RVB, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

Named sounds (from an unmodified baseline CTL/MIDI pattern):
- Verse: CTL off; MIDI at the corresponding baseline pattern; White Tape off, Narcissus off, both King of Kings channels off. Active GP-5: NR, N->S.
- Chorus: CTL on; MIDI at the corresponding baseline pattern; White Tape off, Narcissus off, both King of Kings channels off. Active GP-5: NR, DST, EQ, RVB, N->S.
- Solo: CTL on; MIDI at the corresponding baseline pattern; White Tape on, Narcissus off, both King of Kings channels off. Active GP-5: NR, DST, EQ, RVB, N->S.

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
COMP: 45.
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

Bypassed throughout.
Volume: 55.
Gain: 35.
Tone: 55.
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
Rate: 25.
Mode: Vintage.

## Donner White Tape

Off for verse/chorus; on for solo only.
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
- Donner White Tape: Off for verse/chorus; on for solo only.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 149.
- SnapTone Middle: 68 -> 56.
- SnapTone Treble: 62 -> 55.
- DST Gain: 50 -> 15.
- DST Tone: 62 -> 55.
- EQ 500Hz: 5 -> 1.
- EQ 1kHz: 8 -> 2.
- EQ VOL: 52 -> 53.
- EQ: assigned to CTL.
- RVB Mix: 25 -> 10.
- Board King of Kings Left: ; Bypassed throughout.
- Board Narcissus: ; Bypassed throughout.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
