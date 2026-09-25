# Red Dirt Road (Rhythm Guitar) — Brooks & Dunn

Title track of *Red Dirt Road* (2003). About 96 BPM, est.
A reflective, mid-tempo heartland-country song. Warm, gritty open-chord strumming that swells in the choruses, with melodic lead lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 or the bridge humbucker for the rhythm. Bridge humbucker for the leads.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Catches hiss from the edge-of-breakup amp.

**PRE — off.** No compressor. Open chords should breathe and swell with your pick.

**DST — Green OD (TS-808)**, on CTL.
Gain: 32, Tone: 56, VOL: 66.
The lead push. A mid-forward singing tone for the melodic lines.

**AMP/CAB — NAM SnapTone, slot 65: RythymDeluxe** (always on)
- Built from the `RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the rhythm setting, gritty but not saturated, into the Brown Deluxe 1x12.
- Gritty mid-tempo country-rock. Deluxe rhythm setting.
- Gain: 50, VOL: 50, Bass: 48, Middle: 56, Treble: 55
- Gain 50: the capture as built.
- Bass 48: low end pulled back a little.
- Middle 56: more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 65 directly.

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

- **CTL off** — Rhythm. Warm, gritty Deluxe strum for the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD plus dotted-eighth analog delay for the melodic fills and the solo.

Engage CTL for the lead lines and the solo. Drop back for strumming.
