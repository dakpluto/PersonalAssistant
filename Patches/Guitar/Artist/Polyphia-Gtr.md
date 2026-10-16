# Tim Henson / Polyphia (Guitar) — Signature Sound

Revised 2026-10-16 following the approved library audit.
Type: Artist. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: Polyphia-G. Patch VOL: 50.
Preset tempo: 120 BPM.

Polyphia-inspired HSS Strat palette: compressed, articulate clean rhythm and a controlled high-gain lead. Playing God’s nylon/acoustic attack is an adaptation target, not something the electric guitar’s amp EQ reproduces exactly.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 138.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112 (User IR 10). Encoded as User IR 10.

## NR - Gate

THRE: 15.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - COMP4

Sustain: 58.
Attack: 40.
Clip: 45.
VOL: 55.
Fixed on. Not on CTL.
Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.

## DST - La Charger

Gain: 55.
Tone: 58.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - L-Star CL

Gain: 38.
PRES: 60.
VOL: 60.
Bass: 45.
Middle: 50.
Treble: 62.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -4.
500Hz: -2.
1kHz: 3.
3kHz: 1.
6kHz: -4.
VOL: 52.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - A-Chorus

Depth: 22.
Rate: 0.8.
Tone: 60.
CTL assigned. Loads on; first CTL press switches it off.
Also on an individual MIDI toggle.
Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.

## DLY - Pure

Mix: 12.
Time: 375.
F.Back: 25.
Trail: on.
MIDI-only. Loads on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Plate

Mix: 10.
Decay: 40.
Damp: 45.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, EQ, MOD.
- CTL off / loaded state: The clean. GP-5 active: NR, PRE, AMP, CAB, MOD, DLY, RVB.
- First CTL press: The drive. GP-5 active: NR, PRE, DST, AMP, CAB, EQ, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: MOD, DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- MOD A-Chorus: loads on; toggle to remove this block independently.
- DLY Pure: loads on; toggle to remove this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- MOD-only alternative from loaded state: CTL off, MIDI MOD off; other MIDI blocks at their load states. GP-5 active: NR, PRE, AMP, CAB, DLY, RVB. Board switches unchanged.
- DLY-only alternative from loaded state: CTL off, MIDI DLY off; other MIDI blocks at their load states. GP-5 active: NR, PRE, AMP, CAB, MOD, RVB. Board switches unchanged.

## Revision record

Approved audit entry 138.
- NR THRE: 32 -> 15.
- DST Gain: 72 -> 55.
- DLY Mix: 18 -> 12.
- RVB Mix: 20 -> 10.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
