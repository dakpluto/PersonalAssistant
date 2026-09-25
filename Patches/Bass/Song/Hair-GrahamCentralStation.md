# Hair — Graham Central Station

Bass: Harley Benton P/J, 5-string, passive. Full board.
From Graham Central Station's mid-70s catalog. ~104 BPM, est.
Larry Graham didn't just play bass in this band — he invented slap bass, and everything about this patch is built around that vocabulary: a deep, thumping thumb attack and a bright, snapping pop, both needing real headroom and control. This is a driving, groove-consistent funk jam start to finish — no huge dynamic swing to chase, just a thick, percussive pocket that stays locked in the whole way through.

No CTL — one tone, doing the slap thing all the way through.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 20
- Always on. Moderate threshold — slap bass generates a lot of transient noise and string buzz between hits, needs real cleanup to stay tight.

**PRE — COMP4 (Keeley C4)**
- Sustain: 70, Attack: 40, Clip: 15, VOL: 60
- Always on. This is the most important block in the patch — slap technique creates huge dynamic swings between thumb thumps and finger pops, and heavy compression is what keeps that consistent and controlled rather than spiky and unpredictable. Attack at 40 lets enough of the initial thump/pop transient through to stay percussive before the compressor clamps down.

**DST — Off**
- No drive. Classic 70s funk slap tone is clean and punchy, not distorted.

**AMP/CAB — NAM SnapTone, slot 60: SoulB18** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 7.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 7.5, where the tubes start to growl, into the Apg115 B-15 cab IR.
- Larry Graham's tone is gritty tube funk. The cranked B-15 gives the growl.
- Gain: 52, VOL: 50, Bass: 62, Middle: 48, Treble: 58
- Gain 52: a little over default. This part wants more push than the other SoulB18 patches.
- Bass 62: more low end.
- Middle 48: midrange pulled back a little.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 60 directly.

**EQ — Bass EQ 1**
- 33Hz: +5, 150Hz: -2, 600Hz: -4, 2kHz: +3, 8kHz: +5, VOL: 56
- Always on. A classic slap "smiley face" curve — big boosts at the extremes (33Hz for thumb thump, 8kHz for pop snap) with a real scoop at 600Hz to clear out the boxy midrange that would otherwise mask both ends. This is the EQ shape that makes slap technique actually cut through a mix.

**MOD — Off**
- No modulation. Direct, punchy funk tone.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 12, Decay: 22, Trail: On
- Always on. Just a touch of natural space — enough to feel like a real room/band, not enough to soften the percussive attack this tone depends on.

## Why no CTL

This isn't a quiet-verse/big-chorus song — it's a groove-consistent funk jam that stays locked into the same thick, percussive pocket from start to finish. Forcing a CTL split here would just be adding complexity the song doesn't call for; the one tone above is built to carry the whole track.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. Slap technique already generates plenty of low-end thump on its own — an octave stack would clutter fast thumb/pop patterns.

**2. Donner Ultimate Comp — Engaged**
- COMP: 45
- TONE: 62
- LEVEL: 58
- Mode: TREBLE
- A second compression stage, ahead of the GP-5's own COMP4 — stacking two compressors this way is a common trick for taming slap dynamics further. TREBLE mode is essential here — it keeps the pop/snap articulate and audible even under all that squash.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch — classic funk slap stays clean.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 60
- Level: 58
- Treble: 58
- Middle: 50
- Bass: 58
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used as a clean tone shaper and DI stage, not an overdrive — Drive stays low. Bass-Shift at 80Hz keeps things tight and articulate, critical for fast slap patterns to stay defined instead of turning to mud.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Clean, direct funk tone throughout.

**6. Valeton GP-5** — see settings above.
