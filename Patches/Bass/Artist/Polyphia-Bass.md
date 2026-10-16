# Polyphia — Clay Gober Signature Bass Sound

Revised 2026-10-16 following the approved library audit.
Type: Artist. Instrument: Harley Benton passive 5-string P/J.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: Polyphia-B. Patch VOL: 55.
Preset tempo: 120 BPM.

Artist patch. Bass: Harley Benton P/J, 5-string, passive. Full board.
Polyphia's bassist is Clay Gober. The bass in the band works like the low end of a modern pop/trap record, not a rock band.
- **The base tone.** Hi-fi, tight, bright. Lots of slap and fingerstyle, with every pop and ghost note clear. It sounds DI'd and produced, not like a miked cab in a room.
- **The heavy sections.** A grindy, upper-mid drive blended under a clean low end, in the modern parallel-drive style. The fundamental stays solid while the grit cuts through the guitars.
- **The production layer.** The trap-influenced tracks lean on 808-style sub bass. I haven't verified which parts on which records are bass vs. programmed sub, so treat the octave below as optional color.
How this patch models it:
- B2 AvalonAD2022, a studio-DI snaptone, is the hi-fi base for the whole patch.
- The heavy-section grind comes from the Joyo Tidal Wave's drive, stomped on and off. Blend at 40 keeps it parallel, so the clean low end stays under the dirt.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 2.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022 studio DI).
Slot: 52. Always on.
Gain: 50, VOL: 75, Bass: 55, Middle: 48, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 35.
Attack: 35.
Clip: 40.
VOL: 55.
MIDI-only. Loads off.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 1

33Hz: 1.
150Hz: 1.
600Hz: -2.
2kHz: 2.
8kHz: 2.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 6.
Decay: 20.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: None.
- CTL off / loaded state: Main rhythm / intro / supporting part. GP-5 active: NR, EQ, RVB, N->S.
- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.

MIDI toggles: PRE.
MIDI mapping lives on the controller/device, not in the .prst.
- PRE COMP4: loads off; toggle to add this block independently.
- PRE-only alternative from loaded state: CTL off, MIDI PRE on; other MIDI blocks at their load states. GP-5 active: NR, PRE, EQ, RVB, N->S. Board switches unchanged.

## Full pedalboard

Flamma FS-08 Octave -> Donner Ultimate Comp -> Donner Stylish Fuzz -> Joyo Tidal Wave -> Joyo American Sound -> Joyo Narcissus -> Valeton GP-5.
Board settings are set by hand and are not encoded in the .prst.
All numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.

## Flamma FS-08 Octave

Off for base/slap; on for optional 808-style sections.
-2OCT: 0.
-OCT: 35.
+OCT: 0.
+2OCT: 0.
Dry: 100.

## Donner Ultimate Comp

On throughout.
COMP: 55.
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

Drive off for clean/slap; on for heavy riffs and breakdowns; preamp active.
Drive: 50.
Blend: 40.
Presence: 62.
Level: 55.
Treble: 58.
Middle: 55.
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

- Flamma FS-08 Octave: Off for base/slap; on for optional 808-style sections.
- Donner Ultimate Comp: On throughout.
- Donner Stylish Fuzz: Bypassed throughout.
- Joyo Tidal Wave: Drive off for clean/slap; on for heavy riffs and breakdowns; preamp active.
- Joyo American Sound: Bypassed throughout.
- Joyo Narcissus: Bypassed throughout.
Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.

## Revision record

Approved audit entry 2.
- PRE Sustain: 55 -> 35.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
