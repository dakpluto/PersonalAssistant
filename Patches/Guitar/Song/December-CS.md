# December - Collective Soul

Stratocaster (HSS), GP-5 only. "December" opens with a swirling, underwater-clean phased intro before the main riff crashes in heavy and driven. Two distinct GP-5 states model that contrast directly. Tempo: 120 BPM.

## GP-5 Settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB

- **NR — Gate.** THRE 35. Keeps the driven riff tight without the mid-gain amp hissing between hits. Always on.
- **PRE — COMP4.** Sustain 40, Attack 60, Clip 50, VOL 100. Evens out pick attack on both the clean vibe intro and the driven riff. Always on.
- **DST — La Charger.** Gain 55, Tone 60, VOL 75. Off for the clean/vibe intro — the amp alone carries it. On for the main riff — pushes the JTM45 into real crunch. On CTL.
**AMP/CAB — NAM SnapTone, slot 68: ClassicMarshall** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV5 G4 - AZG - 700` NAM and the V7X_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 4, Master 5: classic edge-of-crunch Marshall. Into a 1960AV 4x12.
- Mid-90s Marshall crunch. JCM800 at Gain 4 gives the light crunch. The CTL drive stacks on top for the heavier parts.
- Gain: 52, VOL: 50, Bass: 55, Middle: 60, Treble: 65
- Gain 52: a little over default. This part wants more push than the other ClassicMarshall patches.
- Bass 55: a touch more low end.
- Middle 60: more midrange.
- Treble 65: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 68 directly.

- **EQ — Guitar EQ 2.** 100Hz +5, 500Hz -5, 1kHz +8, 3kHz +10, 6kHz +5, VOL 60. Scoops low-mid mud, pushes upper mids/presence so the riff cuts. Always on.
- **MOD — M-Vibe.** Depth 25, Rate 0.6Hz. On for the clean intro — that's the swirling, underwater texture the song opens with. Off once the riff hits — a vibe under a driven riff just muddies it. On CTL (inverted: off state = engaged).
- **DLY — Analog.** Mix 30, Time 320ms, Feedback 25, Trail on. Off for the clean intro — no delay needed under the vibe texture. On for the riff — adds a touch of width and sustain behind the crunch. On CTL.
- **RVB — Room.** Mix 25, Decay 35, Trail on. Light room, both states — keeps everything from sounding too dry and direct. Always on.

## CTL Switch

- **CTL Off** = clean/vibe intro sound. DST off, M-Vibe on, DLY off.
- **CTL On** = main driven riff sound. DST on, M-Vibe off, DLY on.
- Modules on CTL: DST, MOD, DLY. All three flip together on the same footswitch press.
- Use CTL Off for the song's swirling clean intro. Switch to CTL On the instant the main riff comes in, and stay there for any verse/chorus section carrying the riff.
