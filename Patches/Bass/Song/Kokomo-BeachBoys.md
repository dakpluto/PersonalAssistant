# Kokomo — The Beach Boys

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Cocktail* (1988), ~104 BPM.
Pure breezy, tropical yacht-pop — steel drums, marimba, gentle harmonies, and a glossy late-80s sheen over the whole production. The bass job is simple and warm: hold the groove down, stay smooth, never draw attention to itself. The song sits at a pretty uniform, easy-going energy throughout, with just a small lift for the "Aruba, Jamaica, ooh I wanna take ya" hook.

CTL off = the main verse/groove. CTL on = a gentle lift for the hook.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 12
- Always on. Very low threshold — clean, smooth tone throughout, nothing to clean up.

**PRE — Micro Boost — On CTL**
- Gain: 42
- CTL off: bypassed (verse). CTL on: engaged (hook).
- A gentle push, not a dramatic one — this song stays breezy and easy-going throughout, so the lift for the hook stays subtle.

**DST — Off**
- No drive. This tone is clean and smooth from top to bottom.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Late-80s polished pop. Clean DI bass sits with the steel drums and synths.
- Gain: 50, VOL: 50, Bass: 55, Middle: 50, Treble: 52
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 50: flat.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**
- 50Hz: +3, 120Hz: +1, 400Hz: -1, 800Hz: +1, 4.5kHz: +2, VOL: 54
- Always on, same for both CTL states.
- Gentle and mostly flat — warmth and a touch of smooth top-end sparkle, nothing carved out hard. This part just needs to sit comfortably in a breezy, uncluttered mix.

**MOD — B-Chorus (Boss CEB-3)**
- Depth: 25, Rate: 0.4Hz, VOL: 55
- Always on, same for both CTL states.
- A bit more present than the light touch used on some other patches — this is genuinely glossy late-80s yacht-pop, where a smooth chorus shimmer is baked into the whole production's character, not just an occasional accent.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 30, Trail: On
- CTL off: bypassed (verse — clean and direct). CTL on: engaged (hook).
- A light touch of room opens things up for the sing-along hook, matching the song's easy, warm lift there.

## CTL summary

- **CTL Off — Verse/groove.** Warm, smooth, breezy. The song's main energy level throughout.
- **CTL On — Hook.** A gentle boost and a touch of room lift the "Aruba, Jamaica" hook just slightly above the rest.
- Engage CTL for the hook line, back off returning to the main groove.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This is a simple, supportive groove — no reason to layer octaves on it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 42
- TONE: 52
- LEVEL: 55
- Mode: NORMAL
- Light compression keeps this smooth and consistent. NORMAL mode keeps it warm rather than aggressively bright — this song's brightness comes from the chorus and the J-120's own character, not extra pick attack.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch.

**4. Joyo Tidal Wave — Engaged**
- Drive: 8
- Blend: 15
- Presence: 52
- Level: 55
- Treble: 52
- Middle: 55
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used purely as a clean tone shaper and DI stage, not an overdrive — Drive stays very low, Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and warm, matching the song's relaxed, tropical feel.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. The GP-5's own B-Chorus already covers the shimmer this patch wants — running a second chorus source would push it past "smooth" into "washy."

**6. Valeton GP-5** — see settings above.
