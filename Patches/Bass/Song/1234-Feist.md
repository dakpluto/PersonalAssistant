# 1234 — Feist

Bass: Sire V7 2nd Gen, 5-string fretless, flatwound, run **Passive**.
Full board.
From *The Reminder* (2007), ~127 BPM.
This is a bouncy, retro, doo-wop/60s-girl-group-flavored pop tune — horn stabs, handclap energy, a jaunty walking-adjacent bass feel. The fretless choice here isn't about legato fusion glide, it's about tone: a warm, rounded, slightly mwah-y fretless line reads a lot like the upright bass sound that era of pop actually drew from. Verses and choruses stay bouncy and consistent; the song broadens a bit as the horns and layers build toward the later choruses.

CTL off = the main bouncy groove. CTL on = a gentle lift as the horns build.

**Passive** — same call as the Tennessee Whiskey build. This song wants warmth and roundness over headroom and hi-fi clarity, leaning into the fretless's natural character rather than fighting it.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Low-moderate threshold — clean, warm tone, minimal grit.

**PRE — Micro Boost — On CTL**
- Gain: 45
- CTL off: bypassed (verse). CTL on: engaged (build).
- Verse stays bouncy and grounded on its own. The build gets a gentle push to grow alongside the horns.

**DST — Off**
- No drive. This tone is clean and warm from top to bottom, built entirely around touch and roundness.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- Indie-pop with a warm, vintage feel. The fuller B-15 is round without sounding hi-fi.
- Gain: 51, VOL: 50, Bass: 50, Middle: 50, Treble: 50
- Gain 51: a little over default. This part wants more push than the other FullB15 patches.
- Bass 50: flat.
- Middle 50: flat.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 1**
- 33Hz: +3, 150Hz: +1, 600Hz: -2, 2kHz: +2, 8kHz: +3, VOL: 55
- Always on, same for both CTL states.
- +3 at 8kHz brings out the fretless mwah and pluck a bit more than a pure ballad build would (compare Tennessee Whiskey's more restrained +4 at the same band, pulled back further) — this song needs some bounce and pop presence, not just warmth. -2 at 600Hz clears boxiness.

**MOD — Off**
- No modulation. Feist's bass part here is clean and direct — the retro character comes from the amp/cab pairing and the instrument itself, not an effect.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 30, Trail: On
- CTL off: bypassed (verse — dry and bouncy). CTL on: engaged (build).
- A touch of room opens things up as the horns and layers build, matching the song's gradual broadening.

## CTL summary

- **CTL Off — Main groove.** Bouncy, warm, dry. The song's default bounce throughout the verses and early choruses.
- **CTL On — Build.** A gentle boost and a touch of room lift the tone as the horns and layers stack up later in the song.
- Engage CTL as the arrangement broadens, back off returning to the main groove for sparser sections.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This bouncy line needs a single clean fundamental — no reason to layer octaves on it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 48
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Moderate compression keeps the bouncy pluck consistent note to note. TREBLE mode is the key call here — flatwounds are naturally dark, and this song needs the pluck/attack to stay lively rather than getting softened into mush.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 55
- Level: 55
- Treble: 55
- Middle: 55
- Bass: 55
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used as a clean tone shaper and DI stage, not an overdrive — Drive stays low, Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and warm, matching the retro character of the tone.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Warm, direct, retro tone throughout.

**6. Valeton GP-5** — see settings above.
