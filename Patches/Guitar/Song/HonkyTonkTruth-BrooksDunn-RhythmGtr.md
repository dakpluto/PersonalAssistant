# Honky Tonk Truth (Rhythm Guitar) — Brooks & Dunn

Released in 1997 as a single from *The Greatest Hits Collection*. About 160 BPM, est.
A fast, rowdy dancehall number. Snappy twang rhythm, chicken-pickin', and a hot solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the rhythm. Bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Tight stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 52, Attack: 45, Clip: 40, VOL: 58.
Heavy-ish compression for the chicken-pickin' snap. Attack 45 keeps the pick click.

**DST — Green OD (TS-808)**, on CTL.
Gain: 35, Tone: 60, VOL: 68.
A Green OD for the solo. It's mid-forward so the lead cuts over fiddle and steel. VOL 68 adds about +3dB.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the "edgy" setting, just starting to break up, into the Brown Deluxe 1x12.
- Honky-tonk twang with hair on it. Edgy Deluxe.
- Gain: 50, VOL: 50, Bass: 44, Middle: 55, Treble: 60
- Gain 50: the capture as built.
- Bass 44: low end pulled back noticeably.
- Middle 55: a touch more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: -1, VOL: 50.
Tight lows and a 3kHz snap.

**MOD — off.**

**DLY — Slapback**, always on.
Mix: 18, Time: 90ms, F.Back: 6, Trail: on.
A 90ms slap for the classic country double.

**RVB — Spring**, always on.
Mix: 12, Decay: 30, Trail: on.
A dash of spring.

## CTL footswitch

On CTL: DST (Green OD).

- **CTL off** — Rhythm. Snappy, compressed Deluxe twang with slap for the chucking and fills. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD into the Deluxe for the solos.

Engage CTL for the solos. Stay off for the rhythm.
