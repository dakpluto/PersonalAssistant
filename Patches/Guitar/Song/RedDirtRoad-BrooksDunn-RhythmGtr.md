# Red Dirt Road (Rhythm Guitar) — Brooks & Dunn

Title track of *Red Dirt Road* (2003). About 96 BPM, est.
A reflective, mid-tempo heartland-country song. Warm, gritty open-chord strumming that swells in the choruses, with melodic lead lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 or the bridge humbucker for the rhythm. Bridge humbucker for the leads.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Catches hiss from the boosted edge-of-breakup amp.

**PRE — off.** No compressor. Open chords should breathe and swell with your pick.

**DST — Green OD (TS-808)**, on CTL.
Gain: 20, Tone: 55, VOL: 64.
The lead push. A mid-forward singing tone for the melodic lines.
Gain 20: the Klon in the capture already adds drive, so the TS mostly adds level and sustain on top. Raise it if the lead needs more hair.

**AMP/CAB — NAM SnapTone, slot 78: Fen65DlxKl** (always on)
- A full amp + cab capture, not a NAM paired with an IR: a Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) with a Klon Centaur (Gain 10) in front.
- Edge-of-breakup Deluxe with the Klon's mid push already in the tone. Michael checked it 2026-10-04: "very nice".
- The Klon is part of the capture. It can't be switched off, so it's there in both CTL states.
- Gain: 45, VOL: 70, Bass: 48, Middle: 52, Treble: 55
- Gain 45: a little under the capture, so open chords stay warm and gritty instead of saturated.
- Bass 48: low end pulled back a little.
- Middle 52: only a small lift. The Klon already pushes the mids.
- Treble 55: a touch more top end.
- VOL 70: the level Michael set for this snaptone on 2026-10-04. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 78 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut, a slight mid lift, top trimmed.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 16, Time: 470ms, F.Back: 24, Trail: on.
About a dotted eighth at 96 BPM. A reflective tail behind the lead lines.

**RVB — Room**, always on.
Mix: 16, Decay: 35, Trail: on.
A small room for warmth.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Warm, gritty Klon-pushed Deluxe strum for the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD plus dotted-eighth analog delay for the melodic fills and the solo.

Engage CTL for the lead lines and the solo. Drop back for strumming.

## Previous version (RythymDeluxe, before 2026-10-04)

Moved to Fen65DlxKl on 2026-10-04 so Michael could try it. To go back, restore these values:
- N->S: slot 65, RythymDeluxe (`RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` + Origin Effects Brown Deluxe 1x12 Medium Mix). Gain 50, VOL 65, Bass 48, Middle 56, Treble 55.
- DST Green OD: Gain 32, Tone 56, VOL 66.
- Everything else is unchanged.
