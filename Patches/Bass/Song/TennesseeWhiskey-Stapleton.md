# Tennessee Whiskey — Chris Stapleton

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: Sire V7 2nd Generation 5-string fretless, flatwounds; run passive.
Full board. Board Option: American Sound (bypassed; retained for legacy full-board builds).
Patch screen name: TN Whiskey. Patch VOL: 52.
Preset tempo: 68 BPM.

Bass: Sire V7 2nd Gen, 5-string fretless, flatwound, run **Passive**.
Chris Stapleton's 2015 version (*Traveller*), ~68 BPM slow soul-blues shuffle.
This is the opposite job from the last few Muse patches — no drive, no grit, no aggression. The whole point of pulling out the fretless here is the warmth: flatwounds plus no frets means a rounder, mwah-y, almost upright-bass character that sits perfectly under this song's smoky, soulful groove. Verses stay laid-back and intimate; the chorus and guitar solo open up just a touch more.
**Passive, not active** — this is the one call that flips from the Egan fretless build. Egan's fusion tone wanted headroom and hi-fi clarity to punch through a dense mix and feed two compression stages. This song wants the opposite: the warmer, slightly softer passive voicing that leans into the fretless's natural roundness instead of fighting it with active clarity.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 114.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone CleanB15 (slot 51): Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N) + Apg115.
Slot: 51. Always on.
Gain: 53, VOL: 80, Bass: 56, Middle: 52, Treble: 45.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Micro Boost

Gain: 25.
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
150Hz: 1.
600Hz: -3.
2kHz: 2.
8kHz: 0.
VOL: 55.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Module off

Not used.

## RVB - Room

Mix: 6.
Decay: 30.
Trail: on.
CTL assigned. Loads off; first CTL press switches it on.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: PRE, RVB.
- CTL off / loaded state: the laid-back verse groove. GP-5 active: NR, EQ, N->S.
- First CTL press: Chorus/solo. GP-5 active: NR, PRE, EQ, RVB, N->S.
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
COMP: 45.
TONE: 45.
LEVEL: 55.
Mode: NORMAL.

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
Presence: 50.
Level: 55.
Treble: 50.
Middle: 55.
Bass: 60.
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

Approved audit entry 114.
- SnapTone Bass: 62 -> 56.
- PRE Gain: 45 -> 25.
- EQ 33Hz: 4 -> 0.
- EQ 8kHz: 4 -> 0.
- RVB Mix: 18 -> 6.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
