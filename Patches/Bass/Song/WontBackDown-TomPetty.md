# I Won't Back Down — Tom Petty

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Full Moon Fever* (1989), ~93 BPM.
Warm, direct heartland rock/pop, Jeff Lynne's polished production over Petty's plain-spoken conviction — George Harrison's slide sits right alongside the chiming rhythm guitars. The bass job here is simple and supportive: warm, present, driving without ever pushing hard. The song stays at a steady, uplifting energy throughout, with just a small lift into the "well I know what's right, I got just one life" hook.

CTL off = the main verse/chorus feel. CTL on = a gentle lift for the hook.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 12
- Always on. Very low threshold — clean, warm tone throughout, nothing to clean up.

**PRE — Micro Boost — On CTL**
- Gain: 42
- CTL off: bypassed (verse/chorus). CTL on: engaged (hook).
- A gentle push, not a dramatic one — this song doesn't swing hard between quiet and loud, so the lift for the hook stays subtle.

**DST — Off**
- No drive. This tone is clean and warm from top to bottom.

**AMP — L-Star CL (Mesa/Boogie Lone Star, Clean)**
- Gain: 30, PRES: 55, VOL: 65, Bass: 56, Middle: 52, Treble: 54
- Always on, same for both CTL states.
- A hi-fi, headroom-first clean amp voicing — gives this part real warmth with enough clarity to sit alongside the chiming acoustic/electric guitar interplay without getting lost or muddy.

**CAB — User IR 9 (TC410)**
- VOL: 60
- Always on, same for both CTL states.
- Flat, neutral response with just a mild 100Hz boost — a safe, uncolored pairing that lets the L-Star CL's own warmth come through without adding its own character on top.

**EQ — Bass EQ 2**
- 50Hz: +3, 120Hz: +1, 400Hz: 0, 800Hz: +2, 4.5kHz: +2, VOL: 55
- Always on, same for both CTL states.
- A gentle, mostly-flat curve — warmth and presence in equal measure, nothing carved out or pushed hard. This part just needs to sit comfortably under the guitars, not fight for space.

**MOD — Off**
- No modulation. Direct and plain-spoken, matching Petty's own delivery.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 15, Decay: 25, Trail: On
- CTL off: bypassed (verse/chorus — dry and direct). CTL on: engaged (hook).
- A subtle touch of room for the hook, kept understated — this song's production stays fairly close and direct throughout, so even the "bigger" moment shouldn't open up too much.

## CAB IR — TC410 (Slot 9)

- TC Electronic BC 410, confirmed loaded on User IR slot 9. Flat, neutral response with a mild 100Hz boost — a safe general-purpose pairing for any GP-5 bass AMP, chosen here specifically so it doesn't compete with the L-Star CL's own warm character.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 9`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse/chorus.** Warm, direct, steady. The song's main energy level throughout.
- **CTL On — Hook.** A gentle boost and a touch of room lift the "well I know what's right" hook just slightly above the rest.
- Engage CTL for the hook line, back off returning to the main feel.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This is a simple, supportive part — no reason to layer octaves on it.

**2. Donner Ultimate Comp — Engaged**
- COMP: 42
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Light compression keeps this steady and consistent. NORMAL mode over TREBLE — this tone wants warmth, not extra brightness.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere in this patch.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 52
- Level: 55
- Treble: 52
- Middle: 55
- Bass: 56
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used as a clean tone shaper and DI stage, not an overdrive — Drive stays low, Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and warm, matching the song's relaxed, open feel.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Clean, warm, direct tone throughout.

**6. Valeton GP-5** — see settings above.
