# Beat It (Guitar) — Michael Jackson

From *Thriller* (1982). About 139 BPM, est. In Eb minor. Most players tune down a half step to play the riff in E shapes.
Two guitar voices on one record:
- Steve Lukather's main riff and rhythm. Reported as a Rivera-modded Fender Deluxe Reverb. Quincy Jones said the first take was too metal for pop radio, so Lukather turned the dirt down. The riff is crunchy, not saturated.
- Eddie Van Halen's solo. Frankenstrat, a borrowed amp, and an Echoplex preamp in front for the push. Exact amp details vary by source.
Instrument: Stratocaster (HSS). Bridge humbucker throughout. It's the same pickup type as the Frankenstrat's.
Full board.

CTL off = Lukather's riff and rhythm. CTL on = Eddie's solo.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 32
- The riff lives on hard stops and muted chops. 32 keeps the gaps dead.
- Not higher: the solo's tapped notes and harmonics need their tails.

**PRE — Boost (EP Booster)**, on CTL.
- Gain: 55, +3dB: on, Bright: on
- The EP Booster is a clone of the Echoplex EP-3 preamp. Eddie ran an Echoplex preamp for his boost, so this is the real move.
- CTL off: bypassed. CTL on: engaged for the solo.

**DST — Super OD (SD-1)**, on CTL.
- Gain: 45, Tone: 58, VOL: 62
- Stacks with the boost to get the cranked Deluxe to Eddie's saturation. A small Fender won't get to brown-sound gain on its own.
- SD-1 asymmetric clipping keeps it tight and mid-forward, not fizzy. Tone 58 for bite on the tapping runs.
- CTL off: bypassed. CTL on: engaged for the solo.

**AMP/CAB — NAM SnapTone, slot 79: CrankedDeluxe** (always on)
- `HOT - Fender Deluxe Reverb 1965 [Hyper Accuracy]` into the Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- A cranked blackface Deluxe Reverb: a real capture of the same amp family as Lukather's. It isn't a stand-in. A lower-gain guitar tone, so the snaptone gets strong preference.
- On its own it's the "toned-down" riff crunch Quincy asked for.
- Gain: 55, VOL: 60, Bass: 52, Middle: 58, Treble: 52
- Gain 55: a touch over as-captured, for a little more crunch under the riff.
- Bass 52: near flat. A 1x12 Deluxe isn't a big-bottomed amp, and the riff shouldn't be either.
- Middle 58: mids so the riff cuts through the synths and drums.
- Treble 52: near flat. The EQ trims the top.
- VOL 60: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 79 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: +1, 500Hz: +1, 1kHz: +2, 3kHz: 0, 6kHz: -2, VOL: 50
- +2 at 1kHz: midrange cut for the riff, and the vocal-like mids of Eddie's lead.
- +1 at 100Hz: a little weight on the palm-muted chugs.
- -2 at 6kHz: tames the fizz once the boost and OD stack.

**MOD — off.**

**DLY — Sweet Echo (Echoplex)**, on CTL.
- Mix: 15, Time: 216ms, F.Back: 18, Trail: on
- An Echoplex-voiced delay to go with the Echoplex-preamp boost. 216ms is an eighth note at 139 BPM.
- Short, low-mix slap. It thickens the solo without smearing the fast runs.
- Trail on so the last tap rings out when you drop back to the riff.

**RVB — Plate**, always on.
- Mix: 12, Decay: 25, Damp: 50, Trail: on
- The early-80s polished studio sheen. Short decay, so the riff's stops stay tight.

## CTL footswitch

On CTL: PRE (Boost), DST (Super OD), DLY (Sweet Echo). That uses all 3 CTL slots.

- **CTL off — Rhythm.** Cranked Deluxe crunch for the intro riff, verses, chorus stabs and the muted chops. This is the resting state the patch loads into.
- **CTL on — Lead.** Echoplex boost, SD-1 stack and Echoplex slap for Eddie's solo.
- Engage CTL right after the second chorus, at the solo. Drop back for the riff that follows.

## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song. No octave on either guitar part. It would also glitch on Eddie's tapping.

**2. Donner Ultimate Comp — bypassed**
- Footswitch off all song. The riff is all pick dynamics, and the cranked Deluxe compresses enough on its own.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song. Fuzz would push the riff right back to the "too metal" take Quincy rejected.

**4. Joyo King of Kings — both channels bypassed**
- Left: off, footswitch not engaged.
- Right: off, footswitch not engaged.
- All 3 CTL slots already handle the solo's gain from one stomp. A board OD in front would leak extra dirt into the riff, which the song specifically doesn't want.
- Optional, live only: if the solo needs more sustain in a loud room, stomp on the Right channel with CTL. Volume 50, Gain 30, Tone 55, Clipping toggle: harder setting, Feedback toggle: higher-gain setting. It's not part of the baseline patch.

**5. Joyo Narcissus — bypassed**
- Footswitch off all song. No chorus on either part. Matches the MOD-off call on the GP-5.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
