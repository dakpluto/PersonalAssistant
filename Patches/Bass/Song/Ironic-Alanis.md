# Ironic — Alanis Morissette

From *Jagged Little Pill* (1995). About 116 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Light and supportive in the verses, then big, gritty, and driving in the choruses. That's classic mid-90s alt-rock dynamics.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
Fingers for the verses. Dig in harder, or switch to a pick, for the choruses. Both pickups up. Tone knob around 55%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Tight stops.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 58.
Even notes.

**DST — Bass OD**, on CTL.
Gain: 40, Blend: 38, VOL: 55, Bass: 52, Treble: 52.
Real grit for the chorus, matching the guitars' Rat wall. Blend 38 keeps the low end.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Mid-90s clean radio-rock bass. The clean SVT is the default.
- Gain: 48, VOL: 50, Bass: 56, Middle: 55, Treble: 48
- Gain 48: a little under default. This part wants less push than the other CleanSVT patches.
- Bass 56: more low end.
- Middle 55: a touch more midrange.
- Treble 48: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: -2, VOL: 52.
Punch, a mud cut, and 800Hz attack.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Verses. Clean, light, supportive. This is the resting state the patch loads into.
- **CTL on** — Choruses. A gritty, driving 90s bass wall.

Stomp with the guitarist at each chorus.
