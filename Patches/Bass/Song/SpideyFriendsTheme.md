# Spidey and His Amazing Friends Theme — Patrick Stump

Bass: Harley Benton P/J, 5-string, passive. Full board.
The opening theme to Disney Junior's *Spidey and His Amazing Friends* (2021). Written, produced and sung by Patrick Stump of Fall Out Boy.
I haven't verified who played bass on the track, or how it was recorded.
The sound is pop-punk / power-pop: picked, driving eighths with a bright, gritty edge, like Fall Out Boy scaled for a kids' show.
Tempo: about 150 BPM, my estimate. Not measured.
Use a pick. Both pickups full, tone at about 70%. Picked attack is what makes pop-punk bass read in a busy mix.

One GP-5 sound for the whole song, so no CTL. That's allowed on bass per the patch rules.
The lift for the big hooks comes from the Tidal Wave drive footswitch on the board.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 18
- Always on. Cleans up the stops without clipping the picked notes.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board.

**DST — Off**
- Dirt comes from the Tidal Wave's drive section. Bass OD is too harsh.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- `SVT SANS BRIGHT DRIVE` (SVT-CL) into the Hartke410 IR (User IR 6).
- The snaptone's role is literally "bright, aggressive drive: pop-punk." It's the same combo as the 1994 Spider-Man theme bass.
- Gain: 45, VOL: 60, Bass: 56, Middle: 52, Treble: 55
- Gain 45: a touch under as-captured. This is a kids' theme, so keep the grit controlled.
- Bass 56: weight under the picked eighths.
- Middle 52: near flat.
- Treble 55: pick definition. The Hartke's aluminum cones are already bright.
- VOL 60: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 55 directly.

**EQ — Bass EQ 2**
- 50Hz: 0, 120Hz: +2, 400Hz: -2, 800Hz: +1, 4.5kHz: +2, VOL: 50
- Always on.
- +2 at 120Hz: the punch of the eighths.
- -2 at 400Hz: clears mud so the guitars' power chords have room.
- +1 at 800Hz, +2 at 4.5kHz: growl and pick click.

**MOD — Off**
- Not used.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 5, Decay: 18, Trail: On
- Always on. Barely there. It just keeps the tone from sounding sterile.

## CTL summary

- No CTL assignment. One fixed GP-5 sound.
- Dynamic lift comes from stomping the Tidal Wave drive for the hooks (see the board below).

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off. No octave layer.

**2. Donner Ultimate Comp — Engaged all song**
- COMP: 45
- TONE: 55
- LEVEL: 55
- Mode: NORMAL
- Evens out the picked eighths, like a polished pop-punk mix. COMP 45: firm, but you still hear the pick.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ); Drive stomped for the hooks**
- Drive: 35
- Blend: 30
- Presence: 55
- Level: 55
- Treble: 52
- Middle: 55
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off for verse lines, on for the big "Spidey!" hook sections and the final tag. If in doubt, leave it on. It's a short, high-energy theme.
- Blend 30 keeps the fundamental clean under the grit.
- Bass-Shift 80Hz keeps the low end tight with the drive in.
- Mid-Frequency 1000Hz: attack and cut-through.
- The preamp and EQ stay active whether the drive is on or off.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
