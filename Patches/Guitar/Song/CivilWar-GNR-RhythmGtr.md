# Civil War (Guitar) — Guns N' Roses

From *Use Your Illusion II* (1991). About 70 BPM half-time feel, est. Online tempo sources disagree.
Tuning: Eb standard. GNR tuned down a half step on the *Illusion* records. Tune down to match.
Three moods: the clean intro over the whistling and spoken word, the slow crunching main riff, and Slash's wah-heavy solo before the double-time outro.
Slash's *Illusion* rig is reported as a Les Paul into Marshalls: a JCM800 or his Silver Jubilee 2555s, depending on the source. Either way it's a Marshall with a little extra push. That's what this patch builds.
Instrument: Stratocaster (HSS). Bridge humbucker for the riff and solo. Neck pickup, guitar volume rolled back, for the intro.
Full board.

CTL off = main rhythm (crunch riff, verses; intro via the guitar's volume knob). CTL on = lead (Slash's solo).

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 30
- A boosted JCM800 hisses between phrases. 30 keeps the gaps quiet.
- Not higher: the rolled-back intro is quiet, and a hard gate would chop its note tails.

**PRE — Boost (EP Booster)**, always on.
- Gain: 45, +3dB: off, Bright: off
- Turns the light-crunch JCM800 capture into Slash's crunch. The "boosted Marshall" move, same as the Jubilee's extra gain stage.
- Bright off: vintage voicing. A Strat humbucker is already brighter than a Les Paul.
- Always on because it's part of the core rhythm tone. Rolling the guitar volume to about 4 still cleans it up for the intro.

**DST — Green OD (TS-808)**, on CTL.
- Gain: 28, Tone: 55, VOL: 66
- The lead push for the solo. Low Gain, high VOL: mostly a mid-hump level boost into an already-crunching amp.
- Adds sustain and pulls the solo forward over Izzy and Duff.

**AMP/CAB — NAM SnapTone, slot 80: JCM800Clean** (always on)
- `JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700` into the `BlendOfAll_dc` 1960AV 4x12 IR, combined into one snaptone.
- A real JCM800 capture into a Marshall 4x12. Not a stand-in for Slash's amp, it's the same family. G20 is exempt from the high-gain rule.
- Light-crunch capture on purpose: it cleans up off the guitar volume for the intro, and the Boost supplies the riff's gain.
- Gain: 55, VOL: 60, Bass: 55, Middle: 60, Treble: 52
- Gain 55: a touch over as-captured, for more crunch under the riff.
- Bass 55: a little more weight. Fills in what the Strat lacks against a Les Paul.
- Middle 60: Slash lives in the mids.
- Treble 52: near flat. The EQ trims the fizz.
- VOL 60: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 80 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: 0, 500Hz: +2, 1kHz: +2, 3kHz: 0, 6kHz: -2, VOL: 50
- +2 at 500Hz and 1kHz: Les Paul-style midrange from the Strat's bridge humbucker.
- -2 at 6kHz: takes the fizz off the boosted Marshall.

**MOD — off.**
- The intro's light chorus comes from the Narcissus on the board.

**DLY — Analog**, on CTL.
- Mix: 18, Time: 430ms, F.Back: 22, Trail: on
- Warm repeats behind the solo's long bends. About one beat at 70 BPM, est. Low Mix so it stays behind the notes.
- Trail on so the last repeats ring out when you drop back to rhythm.
- Note: the encoder catalog calls this param `Feedback`. Same knob.

**RVB — Plate**, always on.
- Mix: 12, Decay: 30, Damp: 50, Trail: on
- The *Illusion* records are big and polished, not dry. A short plate adds that sheen without washing out the riff.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off — Rhythm.** Boosted JCM800 crunch for the main riff, verses and choruses. Rolled back on the neck pickup, it's the intro's clean-ish tone. This is the resting state the patch loads into.
- **CTL on — Lead.** Tube Screamer push plus analog delay for Slash's solo.
- Engage CTL at the solo. Drop back for the "What's so civil about war anyway" sections and the outro riff.

Slash's solo is all Cry Baby. There's no wah on this board, and the GP-5's Crier is an auto-wah, not a rocked pedal, so it's left out. Lean on the Green OD's mid hump and the neck-to-bridge pickup choice instead.

## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song. No octave texture in "Civil War".

**2. Donner Ultimate Comp — bypassed**
- Footswitch off all song.
- Slash plays straight into a cranked Marshall. A compressor flattens the pick dynamics the intro's volume-knob clean-up depends on.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song. No fuzz here. The Marshall crunch is the whole sound.

**4. Joyo King of Kings — Left channel engaged only for the double-time outro. Right channel bypassed.**

*Left channel (outro push):*
- Volume: 55
- Gain: 30
- Tone: 50
- Clipping toggle: softer setting (smoother, lower-gain breakup)
- Feedback toggle: standard setting (no added compression)
- Stomp it on when the song kicks into the fast outro. A low-gain push into the already-boosted JCM800 gives the extra aggression the end section has.
- Stomp it off for the rest of the song. Left on, it would stop the intro from cleaning up off the guitar volume.

*Right channel:*
- Bypassed all song, footswitch off. The GP-5's Green OD on CTL already handles the solo boost, from the same footswitch as the delay.

**5. Joyo Narcissus — engaged for the intro only**
- Mode: Vintage, Width: 30, Depth: 20, Rate: 25
- Light chorus sheen under the clean intro. Vintage mode, low Depth and Rate, per the light-touch modulation rule.
- Stomp it off when the band comes in and you roll the guitar volume up.

**6. Valeton GP-5** — see settings above.

## Song walk-through

- **Intro** (whistling, spoken word, clean line): CTL off. Neck pickup, guitar volume about 4. Narcissus on. King of Kings off.
- **Band entry, verses, choruses, main riff**: CTL off. Bridge humbucker, volume up full. Narcissus off.
- **Solo**: CTL on.
- **Back to the riff**: CTL off.
- **Double-time outro**: CTL off, King of Kings Left on. For the outro leads, add CTL on top.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
