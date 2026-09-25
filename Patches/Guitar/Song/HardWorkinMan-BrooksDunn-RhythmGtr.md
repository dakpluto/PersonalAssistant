# Hard Workin' Man (Rhythm Guitar) — Brooks & Dunn

Title track of *Hard Workin' Man* (1993). About 150 BPM, est.
A fast, raucous honky-tonk rocker: chunky, twangy rhythm, chicken-pickin' fills, and a hot Tele-style solo.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for twang. Bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Keeps the stops tight. Fast honky-tonk has a lot of hard stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 50, Attack: 45, Clip: 40, VOL: 58.
Chicken-pickin' needs compression: every plucked note snaps out at the same level. Attack 45 lets the pick click through.

**DST — Super OD (SD-1)**, on CTL.
Gain: 38, Tone: 58, VOL: 68.
The SD-1 for the solo. It has a tight, bright bite that suits fast Tele-style runs. VOL 68 adds about +3dB.

**AMP/CAB — NAM SnapTone, slot 65: RythymDeluxe** (always on)
- Built from the `RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the rhythm setting, gritty but not saturated, into the Brown Deluxe 1x12.
- Gritty country-rock rhythm. The Deluxe rhythm setting.
- Gain: 50, VOL: 50, Bass: 50, Middle: 50, Treble: 50
- Gain 50: the capture as built.
- Bass 50: flat.
- Middle 50: flat.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 65 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: -1, VOL: 50.
Tight lows for fast chucking. The 3kHz lift adds snap.

**MOD — off.**

**DLY — Slapback**, always on.
Mix: 18, Time: 95ms, F.Back: 6, Trail: on.
A single 95ms slap. The classic country thickener. It doesn't depend on tempo.

**RVB — Spring**, always on.
Mix: 12, Decay: 30, Trail: on.
A dash of spring. Most of the space comes from the slap.

## CTL footswitch

On CTL: DST (Super OD).

- **CTL off** — Rhythm. Compressed, gritty tweed twang with slapback for the chucking rhythm and fills. This is the resting state the patch loads into.
- **CTL on** — Lead. The SD-1 pushes the tweed into a hot, biting solo tone.

Engage CTL for the solos. Stay off for the rhythm and the chicken-pickin' fills.
