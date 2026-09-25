# TheGambler-KR — The Gambler by Kenny Rogers

*The Gambler*, 1978. ~104 BPM, est.
This is a story-song, not a groove showcase — the bass job is to sit under Rogers' vocal and keep the train-track rhythm moving without drawing attention to itself. Warm, round, steady. No drive anywhere.
GP-5 only, Sire fretless (Passive), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20. Light touch — just enough to clean up noise floor on a passive fretless, nothing aggressive since there's no gain stage generating hiss.

**PRE — Micro Boost**, on CTL.
Gain: 35 when engaged.
Off for the verse-groove storytelling sections, on for the "know when to hold 'em" chorus hook — same amp tone throughout, just a touch louder and more present for the hook line.

**DST — off.**
No drive on this patch. The song is warm and clean start to finish.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- 1978 Nashville storytelling song. Clean B-15, round and simple.
- Gain: 50, VOL: 50, Bass: 60, Middle: 50, Treble: 45
- Gain 50: the capture as built.
- Bass 60: more low end.
- Middle 50: flat.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +3, 150Hz: +4, 600Hz: -2, 2kHz: -3, 8kHz: +2, VOL: 50.
Small low-end reinforcement at 33/150Hz for warmth and weight, a gentle scoop through 600Hz-2kHz to keep things from getting boxy/honky, and a small lift at 8kHz so fretless finger attack still reads clearly against the vocal.

**MOD — off.** No modulation — this tone stays simple and direct, not textural.

**DLY — off.** Straight, steady part. No delay.

**RVB — Room**, on CTL.
Mix: 20, Decay: 35, Trail: true.
Off for the verses — dry, close, intimate storytelling tone.
On for the chorus hook, alongside the boost — a little more air and size without turning into a wash.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse/storytelling sound. Dry, warm, understated. This is the resting state the patch loads into.
- **CTL on** — chorus hook sound ("know when to hold 'em"). Boosted front end plus a touch of room reverb, same amp tone, slightly bigger for the hook line.

This song doesn't ask for a dramatic split — the whole point is restraint — so the CTL move here is small on purpose. Engage going into the chorus hook, back off for verses.
