# Ain't Nothing 'Bout You (Rhythm Guitar) — Brooks & Dunn

From *Steers & Stripes* (2001). About 128 BPM, est.
A driving, danceable neo-traditional hit. Twangy Tele-style guitar and steel up front, with two-step energy start to finish.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the rhythm. Bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Catches hum between phrases.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 50, Attack: 45, Clip: 40, VOL: 58.
Compression for chicken-pickin' snap and sustain.

**DST — Super OD (SD-1)**, on CTL.
Gain: 35, Tone: 55, VOL: 68.
The SD-1 for the solo. Tight and bright. VOL 68 adds about +3dB.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the "edgy" setting, just starting to break up, into the Brown Deluxe 1x12.
- Chicken-pickin' twang with a little hair. Deluxe just starting to break up.
- Gain: 50, VOL: 50, Bass: 45, Middle: 50, Treble: 58
- Gain 50: the capture as built.
- Bass 45: low end pulled back a little.
- Middle 50: flat.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: 0, 3kHz: +2, 6kHz: -1, VOL: 50.
A low cut and a slight 500Hz scoop keep it out of the steel's range. +2 at 3kHz for snap.

**MOD — off.**

**DLY — Slapback**, always on.
Mix: 16, Time: 100ms, F.Back: 6, Trail: on.
A 100ms slap.

**RVB — Spring**, always on.
Mix: 14, Decay: 32, Trail: on.
A touch of spring.

## CTL footswitch

On CTL: DST (Super OD).

- **CTL off** — Rhythm. Snappy, compressed Deluxe twang with slap. This is the resting state the patch loads into.
- **CTL on** — Lead. SD-1 into the Deluxe for the solo and the hot fills.

Engage CTL for the solo. Stay off for the rhythm.
