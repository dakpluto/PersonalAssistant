# When Wind Meets Fire (Rhythm Guitar) — Elevation Worship

Elevation Worship. Modern worship anthem. About 72 BPM, est. I haven't verified the tempo, so check the dotted-eighth delay time against the recording (see DLY below).
The title comes from the Pentecost imagery in Acts 2, and the arrangement builds the way modern worship songs usually do: quiet, ambient verses that grow into a big driven chorus and bridge.
Built from Elevation's general guitar sound. I haven't verified the exact parts or gear on this recording.
The standard worship guitar recipe: an edge-of-breakup boutique amp, a Tube Screamer-family drive, dotted-eighth delay, and a big modulated reverb.
Instrument: Stratocaster (HSS). Neck or position 2 for swells and verse parts. Bridge humbucker for the driven chorus and lead lines.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Handles noise from the stacked boost and drive. Set low enough that volume-knob swells still fade in and out smoothly.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 45, +3dB: on, Bright: off.
Hits the Green OD harder and adds level for the chorus and lead lines. Bright off keeps the stack thick.

**DST — Green OD**, on CTL.
Gain: 38, Tone: 58, VOL: 64.
The main worship drive. Mid-forward, with the chords still clear. Tone 58 helps it cut through pads and keys.

**AMP/CAB — NAM SnapTone, slot 67: WorshipAC30** (always on)
- Built from the `SLAMMIN_VOX_AC30_TB_V3_TC0_B4_T7_BRIGHT_S` NAM and the Origin Effects British Alnico 2x12 Medium Mix IR, combined into one snaptone.
- Real Vox AC30 Top Boost, Bright, into the Origin Effects British Alnico 2x12.
- Chimey AC30 Top Boost for modern worship.
- Gain: 50, VOL: 50, Bass: 48, Middle: 55, Treble: 55
- Gain 50: the capture as built.
- Bass 48: low end pulled back a little.
- Middle 55: a touch more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 67 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: 0, 3kHz: +2, 6kHz: +1, VOL: 50.
The low cut is essential with this much ambience: it keeps the delay and reverb tails from getting muddy. A slight 500Hz cut and a 3kHz and 6kHz lift give the modern, glassy top.

**MOD — off.** The Sweet Space reverb already carries modulation. A chorus on top of it would smear.

**DLY — Tape**, always on.
Mix: 22, Time: 625ms, F.Back: 30, Trail: on.
Dotted eighth at 72 BPM (833ms x 0.75). If the real tempo differs, set Time = 45000 / BPM. Tape gives warmer repeats than Pure, so the rhythm doesn't turn into a ping-fest. Always on because it's part of the core sound in both states.

**RVB — Sweet Space**, always on.
Mix: 30, Decay: 60, Damp: 45, Mod: 25, Trail: on.
A big modulated wash for the ambient pad sound. Damp 45 keeps the tail from turning into hiss. Mod 25 adds movement without seasickness.

## CTL footswitch

On CTL: PRE (Boost), DST (Green OD).

- **CTL off** — Rhythm and ambient. Edge-of-breakup clean into the dotted-eighth delay and the Sweet Space wash. Use it for intro swells, verse arpeggios, and quiet strumming. This is the resting state the patch loads into.
- **CTL on** — Lead and driven. Boost into Green OD into the same amp and ambience. Use it for the big chorus, the bridge build, and melodic lead lines. The delay and reverb carry over, so the lead lines sing.

Engage CTL when the song opens into the chorus and bridge. Step off for the verses and any breakdown.
