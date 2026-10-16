# One Last Breath (Rhythm Guitar) — Creed

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: OneLast-Gt. Patch VOL: 50.
Preset tempo: 62 BPM.

One Last Breath on HSS Strat. Clean Match CL supports the verse and La Charger supplies the heavy voice. The constraint is one fixed GP-5 amp voice within this preset, not an inability of real Rectifiers to produce clean tones. Delay loads off and can be added by MIDI.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 174.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 25.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - La Charger

Gain: 45.
Tone: 52.
VOL: 62.
CTL assigned. Loads off; first CTL press switches it on.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Match CL

Gain: 30.
PRES: 50.
VOL: 62.
Bass: 50.
Middle: 52.
Treble: 52.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -2.
500Hz: 0.
1kHz: 1.
3kHz: 1.
6kHz: -1.
VOL: 53.
CTL assigned. Loads off; first CTL press switches it on.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Analog

Mix: 14.
Time: 726.
Feedback: 22.
Trail: on.
MIDI-only. Loads off.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Hall

Mix: 15.
Decay: 40.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST, EQ.
- CTL off / loaded state: Clean verse arpeggios. GP-5 active: NR, AMP, CAB, RVB.
- First CTL press: Heavy chorus/lead. GP-5 active: NR, DST, AMP, CAB, EQ, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- DLY Analog: loads off; toggle to add this block independently.
- DLY-only alternative from loaded state: CTL off, MIDI DLY on; other MIDI blocks at their load states. GP-5 active: NR, AMP, CAB, DLY, RVB. Board switches unchanged.

## Revision record

Approved audit entry 174.
- PRE: Boost -> off.
- PRE: removed from CTL.
- DST Gain: 58 -> 45.
- EQ VOL: 50 -> 53.
- EQ: assigned to CTL.
- DLY MIDI load state: off.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
