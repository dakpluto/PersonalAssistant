# Basket Case — Green Day

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Dookie* (1994), ~171 BPM.
Mike Dirnt's tone here is bright, punchy pop-punk bass — famously built on blending a clean signal with a grittier, driven layer rather than going full fuzz. The song runs at high energy throughout; the chorus ("I went to a shrink...") pushes a bit harder with the vocal harmonies.

CTL off = the driving verse. CTL on = the chorus push.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 22
- Always on. Moderate threshold — there's real grit in this chain from the Bass OD, needs some cleanup between the fast eighth-note picking.

**PRE — Micro Boost — On CTL**
- Gain: 50
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- Verse already drives hard on its own. Chorus gets a clean push to sit level with the vocal harmonies.

**DST — Bass OD**
- Gain: 55, Blend: 65, VOL: 60, Bass: 55, Treble: 60
- Always on, same for both CTL states.
- This is the "blended dirty" layer Dirnt's tone is known for — Blend at 65 keeps enough clean fundamental mixed in that the tone stays punchy and defined rather than turning into a wash, while Treble pushed to 60 keeps real edge and bite on top.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Mike Dirnt's tone is bright, picked, and driven. Bright SVT drive into aluminum cones nails the clank.
- Gain: 50, VOL: 50, Bass: 55, Middle: 58, Treble: 62
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 58: more midrange.
- Treble 62: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

**EQ — Bass EQ 1**
- 33Hz: +2, 150Hz: -2, 600Hz: +2, 2kHz: +5, 8kHz: +4, VOL: 55
- Always on, same for both CTL states.
- Big +5 at 2kHz and +4 at 8kHz — this needs to be bright and present to cut through a fast, driving punk mix. -2 at 150Hz keeps it from getting boxy under all that upper-mid push.

**MOD — Off**
- No modulation. Straightforward, driving pop-punk tone.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 18, Decay: 28, Trail: On
- CTL off: bypassed (verse — tight and dry). CTL on: engaged (chorus).
- A light touch of room for the chorus, matching the slightly bigger, more anthemic feel of the vocal harmonies — kept subtle since 90s pop-punk production stays fairly dry overall.

## CTL summary

- **CTL Off — Verse.** Driving, bright, punchy pop-punk tone.
- **CTL On — Chorus.** Boost and room reverb engage together, matching the bigger feel of the vocal harmonies on "I went to a shrink..."
- Engage CTL right as the chorus hits, back off returning to the verse.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This driving punk line doesn't need octave layering.

**2. Donner Ultimate Comp — Engaged**
- COMP: 50
- TONE: 60
- LEVEL: 60
- Mode: TREBLE
- Keeps the fast eighth-note picking even and consistent. TREBLE mode keeps pick attack bright and present ahead of the Tidal Wave and the GP-5's own Bass OD.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. Dirnt's dirty layer is a blended overdrive, not a fuzz — the GP-5's own Bass OD already covers that job with more clarity than a fuzz would give at this tempo.

**4. Joyo Tidal Wave — Engaged**
- Drive: 30
- Blend: 55
- Presence: 65
- Level: 60
- Treble: 60
- Middle: 55
- Bass: 52
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Adds baseline drive and presence. Mid-Frequency at 1000Hz and Bass-Shift at 80Hz both push toward attack and articulation over body, matching this song's fast, punchy energy.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Bright, direct pop-punk tone throughout.

**6. Valeton GP-5** — see settings above.
