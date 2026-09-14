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

**AMP — Classic Bass (Ampeg SVT)**
- Gain: 40, Bass: 62, Middle: 48, MidFreq: 220Hz, Treble: 58, VOL: 68
- Always on. SVT is genuinely the amp of this era and this genre — deep funk and soul records from the 70s were built on it. MidFreq at 220Hz (the deepest option) keeps the low end round and full rather than boxy, since the EQ module below handles the midrange scoop separately. Treble pushed for the pop snap.

**CAB — User IR 3 (Apg810)**
- VOL: 62
- Always on. Ampeg SVT-810E — the classic "wall of Ampeg" bass stack, the direct real-world pairing for the Classic Bass AMP model and genuinely period-correct for this band.

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

## CAB IR — Apg810 (Slot 3)

- Ampeg SVT-810E, confirmed loaded on User IR slot 3 — the classic "wall of Ampeg" bass stack, genuinely period-correct for this band and era.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 3`) — no manual loading needed for this one.

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
