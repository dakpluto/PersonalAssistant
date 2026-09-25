# Independence Day - Martina McBride

Martina McBride, *The Way That I Am*, 1994. Uptempo 90s country, ~120 BPM.
This isn't a flag-waving anthem despite the title — it's a heavy, serious story song that hits hard on the choruses. The bass needs to carry real weight and drive, not just sit under the fiddle.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 35. Keeps the low end tight between phrases at this drive level.

**PRE — Micro Boost**, on CTL.
Gain: 55 when engaged.
Off for the verse, on for the chorus — same amp tone throughout, just pushed harder and louder for the hook, matching the song's serious, driving lift into each chorus.

**DST — off.**
No drive/distortion anywhere on this one — the weight comes from gain staging and low end, not grit. Distortion would fight the song's clean, driving country-rock character.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Big 90s country anthem, but the bass is still clean and round. B-15 carries it.
- Gain: 60, VOL: 50, Bass: 62, Middle: 55, Treble: 58
- Gain 60: noticeably over default. This part wants more push than the other CleanB15 patches.
- Bass 62: more low end.
- Middle 55: a touch more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — off.** The snaptone's own tone controls cover what's needed — no extra EQ stage.

**MOD — off.** No modulation — straight, driving part.

**DLY — off.** No delay — this is a direct, in-your-face bass part, not an ambient one.

**RVB — Room**, on CTL.
Mix: 22, Decay: 40, Trail: false.
Off for the verse — dry and direct. On for the chorus, alongside the boost — adds a touch of size to match the bigger chorus arrangement without washing out the low end.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse sound. Driving but restrained, dry and tight.
- **CTL on** — chorus sound. Boosted and slightly roomier, more weight and push behind the hook.

Engage CTL going into each chorus, back off for the verses. Two-state song patch, matches the song's clear verse/chorus dynamic.
