# Earth, Wind & Fire Style Funk Bass

Revised 2026-10-16 following the approved library audit.
Type: Style. Instrument: Harley Benton passive 5-string P/J.
GP-5 only.
Patch screen name: EWF-Funk. Patch VOL: 52.
Preset tempo: 126 BPM.

Style patch. ~126 BPM (September / Let's Groove territory).
GP-5 only, P/J bass, no pedalboard.
Verdine White is the reference: a busy, syncopated fingerstyle funk part that stays locked with the drums and a big horn section.
The tone is bright, punchy, and tightly compressed, with clear note definition. It has to cut through horns and a stacked rhythm section without getting boomy.
Other players in the same lane: Louis Johnson (Brothers Johnson), Rocco Prestia (Tower of Power), and Larry Graham (Graham Central Station) on the slap side.
This patch gives you two sounds: Verdine's fingerstyle pocket in the base state, and a scooped Louis Johnson-style thumb-and-pop tone on CTL.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 134.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

AMP/CAB replacement: SnapTone AvalonAD2022 (slot 52): Avalon - 38 dB - Chan 1 (Avalon AD2022) + none (studio DI).
Slot: 52. Always on.
Gain: 48, VOL: 75, Bass: 55, Middle: 55, Treble: 60.
AMP and CAB are both off; the capture already includes its cab/DI character.
The capture voice is fixed across CTL states. Audited VOL is preserved for this slot.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 40.
Attack: 45.
Clip: 30.
VOL: 60.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - Module off

Not used.

## AMP - Module off

Not used.

## CAB - Module off

Not used.

## EQ - Bass EQ 2

50Hz: 1.
120Hz: 1.
400Hz: -2.
800Hz: -1.
4.5kHz: 2.
VOL: 52.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - B-Chorus

Depth: 30.
Rate: 0.7.
VOL: 50.
MIDI-only. Loads off.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Module off

Not used.

## RVB - Module off

Not used.

## Switching and section map

CTL blocks: EQ.
- CTL off / loaded state: fingerstyle pocket, the Verdine White sound. GP-5 active: NR, PRE, N->S.
- First CTL press: slap/pop feature. GP-5 active: NR, PRE, EQ, N->S.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: MOD.
MIDI mapping lives on the controller/device, not in the .prst.
- MOD B-Chorus: loads off; toggle to add this block independently.
- MOD-only alternative from loaded state: CTL off, MIDI MOD on; other MIDI blocks at their load states. GP-5 active: NR, PRE, MOD, N->S. Board switches unchanged.

## Revision record

Approved audit entry 134.
- PRE Sustain: 55 -> 40.
- EQ 50Hz: 4 -> 1.
- EQ 400Hz: -5 -> -2.
- EQ 4.5kHz: 5 -> 2.
- EQ VOL: 58 -> 52.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
