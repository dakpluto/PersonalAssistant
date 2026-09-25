# Knee Deep — Zac Brown Band

You Get What You Give, 2010, feat. Jimmy Buffett. ~82 BPM, est.
This is the beach-chair, toes-in-the-sand song — laid-back island groove, not a driving country tune.
Sire V7 fretless (Passive) — the round, mellow fretless tone fits the chill vibe better than picked P/J attack.
GP-5 only, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light touch — just enough to clean up noise floor, fretless sustain shouldn't get clipped short.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the laid-back verse groove, on for a slightly fuller push through the choruses — subtle, this song never gets aggressive.

**DST — off.** No drive anywhere. This is a warm, clean island tune from start to finish.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Laid-back island groove. The clean B-15 gives it a soft, round bottom.
- Gain: 50, VOL: 50, Bass: 60, Middle: 50, Treble: 40
- Gain 50: the capture as built.
- Bass 60: Round low end, not boomy
- Middle 50: flat.
- Treble 40: Kept soft, this amp only has VOL/Bass/Treble, no mids to worry about
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — off.** The snaptone's own Bass/Middle/Treble is enough — no need to sculpt further.

**MOD — B-Chorus**, always on, light hand.
Depth: 20, Rate: 0.8Hz, VOL: 100.
Just enough shimmer to give the fretless a little tropical movement without turning it into a chorus-drenched effect. Sits underneath the tone, not on top of it.

**DLY — off.** Keep it simple — no need for delay on a groove this relaxed.

**RVB — Room**, on CTL.
Mix: 30, Decay: 45, Trail: true.
Off for the verse — close and dry. On for the choruses, alongside the boost — opens the tone up a touch for the bigger, more full-band sections without drowning the groove.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — main laid-back verse groove. Dry, close, relaxed. This is the resting state the patch loads into.
- **CTL on** — fuller chorus sound. Slight boost plus room reverb, same amp/cab tone underneath, just a little bigger and more open.

Engage CTL going into the choruses, back off for the verses. No need for a third CTL'd module — this song doesn't ask for more than a subtle lift.
