# Mary Jane's Last Dance — Tom Petty

Tom Petty and the Heartbreakers, 1993, from *Greatest Hits*. About 84 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The bass locks to the kick under the A minor riff. Steady eighths and quarters, with a lot of weight on the root. It's a heartland rock tone: punchy and mid-forward, with no hi-fi sparkle.
Pick or fingers both work. A pick gets closer to the driving attack. Blend both pickups with the P slightly louder. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 15. Catches hum when you stop. Gain is low, so it doesn't need to work hard.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 58.
Keeps the eighth-note drive even across the bar so the groove doesn't lurch.

**DST — Bass OD**, on CTL.
Gain: 25, Blend: 30, VOL: 55, Bass: 50, Treble: 50.
A light hair on top for the choruses and outro. Blend 30 keeps the clean low end intact and adds grit only in the mids.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- Heartbreakers bass is warm and round, a little pushed. The fuller B-15 does that.
- Gain: 52, VOL: 50, Bass: 55, Middle: 55, Treble: 48
- Gain 52: a little over default. This part wants more push than the other FullB15 patches.
- Bass 55: a touch more low end.
- Middle 55: a touch more midrange.
- Treble 48: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: -2, VOL: 52.
Punch at 120Hz, a small scoop at 400Hz to clear mud, and +2 at 800Hz for attack definition. The top is trimmed.

**MOD — off.** **DLY — off.** **RVB — off.** Dry and tight like the record's rhythm section.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Verses and the main riff. Warm, punchy B-15. This is the resting state.
- **CTL on** — Choruses ("Last dance with Mary Jane") and the outro. A light Bass OD grit pushes the bass forward with the fuller band.

Engage it at the choruses and for the outro jam. Step off for the verses.
