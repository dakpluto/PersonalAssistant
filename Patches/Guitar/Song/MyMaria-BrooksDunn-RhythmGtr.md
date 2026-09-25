# My Maria (Rhythm Guitar) — Brooks & Dunn

From *Borderline* (1996). About 96 BPM, est.
A cover of B.W. Stevenson's 1973 hit. Ronnie Dunn's falsetto hook drives it, over a loping mid-tempo groove.
The rhythm guitar is a warm clean-to-edge strum with some push. Tele-style fills and a solo sit on top.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the rhythm. Bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Catches single-coil hum when you stop. Set low so strums ring out.

**PRE — COMP (Ross)**, always on.
Sustain: 35, VOL: 55.
Light Ross squash evens out the strum. Nashville rhythm is always a little compressed.

**DST — Green OD (TS-808)**, on CTL.
Gain: 32, Tone: 58, VOL: 68.
The lead push. Gain 32 pushes the clean Deluxe into a singing solo tone. VOL 68 adds about +3dB.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean country-rock rhythm. Cleanest Deluxe. The OD on CTL adds the hair.
- Gain: 54, VOL: 50, Bass: 48, Middle: 52, Treble: 58
- Gain 54: a little over default. This part wants more push than the other NashClean patches.
- Bass 48: low end pulled back a little.
- Middle 52: a touch more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut clears room for the bass. A small 1kHz and 3kHz lift for presence. -2 at 6kHz removes string zing.

**MOD — off.** No modulation. The groove stays dry and punchy.

**DLY — Analog**, on CTL.
Mix: 15, Time: 340ms, F.Back: 18, Trail: on.
About an eighth note at 96 BPM. A short, dark tail behind the solo.

**RVB — Spring**, always on.
Mix: 16, Decay: 35, Trail: on.
A little Fender spring for air.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Compressed, clean Deluxe for the verse and chorus strum. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD plus analog repeats for the fills and the solo.

Engage CTL for the solo and the turnaround licks. Drop back when Ronnie comes in.
