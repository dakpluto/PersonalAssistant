# When Wind Meets Fire (Rhythm Guitar) — Elevation Worship

Revised 2026-10-16 following the approved library audit.
Type: Song. Instrument: HSS Stratocaster.
GP-5 only.
Patch screen name: WWMF-EW-Gt. Patch VOL: 50.
Preset tempo: 72 BPM.

Elevation Worship. Modern worship anthem. About 72 BPM, est. I haven't verified the tempo, so check the dotted-eighth delay time against the recording (see DLY below).
The title comes from the Pentecost imagery in Acts 2, and the arrangement builds the way modern worship songs usually do: quiet, ambient verses that grow into a big driven chorus and bridge.
Built from Elevation's general guitar sound. I haven't verified the exact parts or gear on this recording.
The standard worship guitar recipe: an edge-of-breakup boutique amp, a Tube Screamer-family drive, dotted-eighth delay, and a big modulated reverb.
Instrument: Stratocaster (HSS). Neck or position 2 for swells and verse parts. Bridge humbucker for the driven chorus and lead lines.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Revision intent

Keep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry 193.
The module settings and section map below are the active revision.
Audited capture volumes and Michael’s explicit patch-level adjustments are preserved.
No hardware audition or measured level match has been performed.

## GP-5 settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.
The encoded N->S block sits between DST and AMP when a SnapTone is used.

Cab IR: V30112. Encoded as User IR 10.

## NR - Gate

THRE: 18.
Fixed on. Not on CTL.
Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.

## PRE - Module off

Not used.

## DST - Green OD

Gain: 38.
Tone: 58.
VOL: 64.
CTL assigned. Loads off; first CTL press switches it on.
Also on an individual MIDI toggle.
Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.

## AMP - Foxy 30TB

Gain: 35.
Tone Cut: 40.
VOL: 62.
Bass: 48.
Treble: 58.
Char: 0.
Fixed on. Not on CTL.
Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.

## CAB - User IR 10

VOL: 60.
Fixed on. Not on CTL.
Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.

## EQ - Guitar EQ 2

100Hz: -3.
500Hz: -1.
1kHz: 0.
3kHz: 2.
6kHz: 1.
VOL: 50.
Fixed on. Not on CTL.
Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.

## MOD - Module off

Not used.

## DLY - Tape

Mix: 22.
Time: 625.
F.Back: 30.
Trail: on.
MIDI-only. Loads on.
Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.

## RVB - Sweet Space

Mix: 22.
Decay: 60.
Damp: 45.
Mod: 15.
Trail: on.
Fixed on. Not on CTL.
Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.

## Switching and section map

CTL blocks: DST.
- CTL off / loaded state: Rhythm and ambient. GP-5 active: NR, AMP, CAB, EQ, DLY, RVB.
- First CTL press: Lead and driven. GP-5 active: NR, DST, AMP, CAB, EQ, DLY, RVB.
- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.

MIDI toggles: DST, DLY.
MIDI mapping lives on the controller/device, not in the .prst.
- DST Green OD: loads off; toggle to add this block independently.
- DLY Tape: loads on; toggle to remove this block independently.
Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.
- DST-only alternative from loaded state: CTL off, MIDI DST on; other MIDI blocks at their load states. GP-5 active: NR, DST, AMP, CAB, EQ, DLY, RVB. Board switches unchanged.
- DLY-only alternative from loaded state: CTL off, MIDI DLY off; other MIDI blocks at their load states. GP-5 active: NR, AMP, CAB, EQ, RVB. Board switches unchanged.

## Revision record

Approved audit entry 193.
- PRE: Boost -> off.
- PRE: removed from CTL.
- RVB Mix: 30 -> 22.
- RVB Mod: 25 -> 15.
Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.
The site piece title and on-disk filenames stay stable; only the short pedal display name may change.
