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
Gain: 24, Tone: 60, VOL: 66.
The SD-1 for the solo. It has a tight, bright bite that suits fast Tele-style runs.
Gain 24: the Klon in the capture already adds drive, so the SD-1 mostly adds level and bite. VOL 66 lifts the solo over the rhythm.

**AMP/CAB — NAM SnapTone, slot 78: Fen65DlxKl** (always on)
- A full amp + cab capture, not a NAM paired with an IR: a Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) with a Klon Centaur (Gain 10) in front.
- Edge-of-breakup Deluxe with the Klon's mid push already in the tone. Michael checked it 2026-10-04: "very nice".
- The Klon is part of the capture. It can't be switched off, so it's there in both CTL states.
- Gain: 40, VOL: 70, Bass: 48, Middle: 50, Treble: 56
- Gain 40: under the capture. Chicken pickin' needs note separation, so this pulls the Klon grit back toward twang.
- Bass 48: a little tighter for fast chucking.
- Middle 50: flat. The Klon already pushes the mids.
- Treble 56: more snap and twang.
- VOL 70: the level Michael set for this snaptone on 2026-10-04. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 78 directly.

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

- **CTL off** — Rhythm. Compressed, gritty Klon-pushed Deluxe twang with slapback for the chucking rhythm and fills. This is the resting state the patch loads into.
- **CTL on** — Lead. The SD-1 pushes the Deluxe into a hot, biting solo tone.

Engage CTL for the solos. Stay off for the rhythm and the chicken-pickin' fills.

## Previous version (RythymDeluxe, before 2026-10-04)

Moved to Fen65DlxKl on 2026-10-04 so Michael could try it. To go back, restore these values:
- N->S: slot 65, RythymDeluxe (`RYTHM - Fender Deluxe Reverb 1965 [Hyper Accuracy]` + Origin Effects Brown Deluxe 1x12 Medium Mix). Gain 50, VOL 65, Bass 50, Middle 50, Treble 50.
- DST Super OD: Gain 38, Tone 58, VOL 68.
- Everything else is unchanged.
