# Civil War — Guns N' Roses

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Use Your Illusion II* (1991). About 70 BPM half-time feel, est. Online tempo sources disagree.
Tuning: Eb standard. GNR tuned down a half step on the *Illusion* records. Tune down, or play it in E and transpose by ear.
Duff McKagan plays with a pick: punky, mid-forward, with real grit when the band is loud. His bass is a Fender Jazz Special, which is a P/J. Your Harley Benton is the right instrument for this.
The song moves between a sparse, moody verse and a heavy, driving chorus and double-time outro.

CTL off = intro and verses. CTL on = heavy choruses and the outro.

Pickups: both volumes full. Tone at about 70%. Pick, not fingers.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 20
- Always on. Low enough to keep the quiet verse notes intact, high enough to catch hum once the DST is on.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board. A second compressor here would squash the pick attack.

**DST — Bass OD — On CTL**
- Gain: 42, Blend: 45, VOL: 60, Bass: 52, Treble: 56
- CTL off: bypassed (verse). CTL on: engaged (heavy sections).
- Blend 45 keeps the clean fundamental under the grit. The low end stays solid under two crunching Marshalls.
- Treble 56: a little extra pick bite on top of the drive.

**AMP/CAB — NAM SnapTone, slot 57: GrittySVT** (always on)
- Built from the `SVT PUSHED` NAM (SVT-CL) and the Apg810 IR, combined into one snaptone.
- A pushed SVT preamp into an 8x10. Already a little gritty on its own. That's Duff's picked hard-rock tone, and the same combo the Sweet Child O' Mine patch uses. Keeps the GNR patches consistent.
- Gain: 48, VOL: 55, Bass: 56, Middle: 58, Treble: 56
- Gain 48: just under as-captured, so the verse isn't too hairy.
- Bass 56: a little more low end for the half-time groove.
- Middle 58: mids to cut through the guitars.
- Treble 56: keeps the pick clack.
- VOL 55: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 57 directly.

**EQ — Bass EQ 1**
- 33Hz: +1, 150Hz: +1, 600Hz: +2, 2kHz: +3, 8kHz: +1, VOL: 54
- Always on, same in both CTL states.
- +3 at 2kHz: pick definition through the wall of guitars.
- +2 at 600Hz: midrange body for the driven sections.
- +1 at 33Hz and 150Hz: a bit of weight on the low B and E for the slow groove.

**MOD — Off**
- No modulation. Straight rock bass.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 10, Decay: 25, Trail: On
- Always on. Just enough room to match the big *Illusion* production. Not enough to blur the low end.

## CTL summary

On CTL: DST (Bass OD).

- **CTL Off — Verse.** Pushed SVT, clean-ish with a little hair. Sits under the clean guitar and Axl's vocal.
- **CTL On — Heavy.** Bass OD adds grit and growl for the choruses ("What's so civil about war anyway") and the double-time outro.
- Engage CTL when the band hits the heavy sections. Drop back for the quiet verses.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song. No octave layer on this part.

**2. Donner Ultimate Comp — Engaged**
- COMP: 45
- TONE: 55
- LEVEL: 58
- Mode: TREBLE
- Evens out the picked notes across the quiet verse and the loud chorus. TREBLE mode keeps the pick attack audible into the gritty SVT.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. Duff's grit here is amp-and-overdrive, not fuzz. The GP-5's Bass OD is the drive.

**4. Joyo Tidal Wave — Engaged (preamp/EQ), Drive off**
- Drive: 20
- Blend: 35
- Presence: 58
- Level: 58
- Treble: 55
- Middle: 58
- Bass: 55
- Mid-Frequency: 1000Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off all song. The GP-5's Bass OD handles the heavy sections from the CTL switch, so one stomp does it. Running both would get too dirty and lose the fundamental.
- The preamp and EQ stay active regardless of the footswitch. Mid-Frequency 1000Hz pushes pick attack and cut-through. Bass-Shift 80Hz keeps the low end tight under the guitars.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus. Matches the MOD-off call on the GP-5.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
