# Heads Carolina, Tails California — Jo Dee Messina

I'm Alright, 1996. ~118 BPM, est.
Bright, bouncy 90s country-pop — road-trip energy, no edge to the tone anywhere. The bass just needs to sit clean and punchy under the groove, not compete for attention.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light touch — just keeping the noise floor down between notes, nothing aggressive needed on a clean amp.

**PRE — Micro Boost**, on CTL.
Gain: 45 when engaged.
Off for the verse, on for the chorus — same clean tone throughout, just pushed a little harder and brighter for the hook.

**DST — off.** No drive anywhere in this one — the whole point is a clean, bright country-pop bass.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Mid-90s country radio bass: clean, round, locked to the kick. Clean B-15 is the right voice.
- Gain: 60, VOL: 50, Bass: 55, Middle: 55, Treble: 65
- Gain 60: noticeably over default. This part wants more push than the other CleanB15 patches.
- Bass 55: a touch more low end.
- Middle 55: a touch more midrange.
- Treble 65: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: +3, 400Hz: -3, 800Hz: 0, 4.5kHz: +6, VOL: 55.
Small low-end support, a light cut around 400Hz to avoid boxiness, and a real push at 4.5kHz for that bright, present pick attack the genre wants.

**MOD — off.** No modulation — straightforward part, no need to color it.

**DLY — off.** Dry and direct.

**RVB — Room**, on CTL.
Mix: 20, Decay: 35, Trail: true.
Off for the verse — tight and dry. On for the chorus alongside the boost, giving the hook a touch more air without washing out the groove.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse groove. Dry, tight, clean. Resting state the patch loads into.
- **CTL on** — chorus lift. Brighter push plus a touch of room reverb, same amp tone, bigger for the hook.

Engage CTL going into each chorus, back off for the verses — same two-state approach as the rest of this batch.
