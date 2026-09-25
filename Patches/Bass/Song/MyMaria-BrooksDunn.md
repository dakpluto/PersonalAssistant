# My Maria — Brooks & Dunn

From *Borderline* (1996). About 96 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A loping mid-tempo groove under the falsetto hook. The bass is round and locked to the kick, with some movement into the chorus.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
Fingers. P forward, a little J blended in for definition. Tone knob around 55%.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Just catches hum.

**PRE — COMP (Ross)**, always on.
Sustain: 40, VOL: 58.
Evens out the groove so every note of the pattern sits at the same level.

**DST — Bass OD**, on CTL.
Gain: 20, Blend: 25, VOL: 55, Bass: 50, Treble: 50.
Barely-there hair for the choruses. Blend 25 keeps it mostly clean.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Mid-90s country-rock. Clean, round bass under a busy band. B-15 keeps it defined without bite.
- Gain: 50, VOL: 50, Bass: 56, Middle: 54, Treble: 48
- Gain 50: the capture as built.
- Bass 56: more low end.
- Middle 54: a touch more midrange.
- Treble 48: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: -2, VOL: 52.
Punch at 120Hz, a small mud cut at 400Hz, and 800Hz for finger attack.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry and tight.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Verses. Clean, round, locked groove. This is the resting state the patch loads into.
- **CTL on** — Choruses. A light Bass OD adds grit so the bass pushes with the fuller band.

Engage at the choruses. Step off for the verses.
