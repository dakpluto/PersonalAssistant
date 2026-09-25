# Proud Mary — Ike & Tina Turner

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Workin' Together* (1971). ~117 BPM for the main groove — but this arrangement is famous for something more dramatic than most patches in this set: it isn't just a dynamic swing, it's a genuine tempo and feel change. "We never do anything nice and easy" — a slow, sultry, spoken-intro section gives way to the full-speed "nice and rough" groove that carries the rest of the song.

CTL off = the slow, sultry "nice and easy" intro. CTL on = the fast, driving "nice and rough" groove (most of the song).

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Low-moderate threshold — clean, classic soul/funk tone, minimal grit.

**PRE — Micro Boost — On CTL**
- Gain: 50
- CTL off: bypassed (slow intro). CTL on: engaged (fast groove).
- The intro stays sultry and understated. Once the song kicks into full speed, the boost helps this part carry the same energy as the horns and the Ikettes.

**DST — Off**
- No drive. Classic soul/funk bass tone — clean, warm, present, not distorted.

**AMP/CAB — NAM SnapTone, slot 60: SoulB18** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 7.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 7.5, where the tubes start to growl, into the Apg115 B-15 cab IR.
- Soul-funk with bite. The cranked B-15 is era-correct and growls in the fast section.
- Gain: 50, VOL: 50, Bass: 58, Middle: 58, Treble: 54
- Gain 50: the capture as built.
- Bass 58: more low end.
- Middle 58: more midrange.
- Treble 54: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 60 directly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: 0, 600Hz: +2, 2kHz: +4, 8kHz: +2, VOL: 55
- Always on, same for both CTL states.
- +4 at 2kHz is the key band here — this keeps the syncopated funk picking articulate and readable once the song hits full speed. +2 at 600Hz adds some classic soul snap.

**MOD — Off**
- No modulation. Clean, classic soul/funk tone throughout.

**DLY — Off**
- Not used.

**RVB — Room — On CTL (inverted)**
- Mix: 20, Decay: 30, Trail: On
- CTL off: engaged (slow intro). CTL on: bypassed (fast groove).
- Inverted on purpose — the slow, sultry intro gets a touch of natural room to match its more spacious, held-back feel. The fast groove needs to lock in tight and dry with the drums and horns, so the reverb drops out the instant the song hits full speed.

## CTL summary

- **CTL Off — Slow intro.** Sultry, spacious, held back — "nice and easy."
- **CTL On — Fast groove.** Boost engages, room drops out — tight, driving, present — "nice and rough," and where the song stays for the rest of its runtime.
- Engage CTL right as the song explodes into full speed, and leave it on through to the end — there's no going back to the slow feel once this song commits to the groove.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. No octave layering needed for this classic soul/funk part.

**2. Donner Ultimate Comp — Engaged**
- COMP: 52
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Firm compression keeps the funky, syncopated groove locked and consistent. TREBLE mode keeps the funk pop/attack alive and audible.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch — classic soul/funk stays clean.

**4. Joyo Tidal Wave — Engaged**
- Drive: 15
- Blend: 30
- Presence: 58
- Level: 58
- Treble: 55
- Middle: 56
- Bass: 56
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds presence and body feeding the amp. Bass-Shift at 80Hz favors the tight articulation the fast funk groove needs, at some cost to the slow intro's fullness — a worthwhile tradeoff since the fast section is where this song lives for the majority of its runtime.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Clean, classic soul/funk tone throughout.

**6. Valeton GP-5** — see settings above.
