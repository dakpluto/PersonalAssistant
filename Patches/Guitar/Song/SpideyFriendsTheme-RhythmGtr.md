# Spidey and His Amazing Friends Theme (Guitar) — Patrick Stump

The opening theme to Disney Junior's *Spidey and His Amazing Friends* (2021).
Written, produced and sung by Patrick Stump of Fall Out Boy.
I haven't verified who played guitar on the track, or what rig was used.
The sound is Stump's pop-punk / power-pop lane: bright, punchy power chords, big hooks, nothing sloppy.
Tempo: about 150 BPM, my estimate. Not measured. No published tempo or key turned up. Tap the delay in by ear if it's off.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
Full board.

CTL off = the main rhythm: power-chord crunch for the verses and the "Spidey!" hooks.
CTL on = lead: the melody lines and any lead fills, plus the big final tag.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 35
- Pop-punk rhythm is all hard stops and palm-mute chugs. 35 keeps the gaps silent.

**PRE — Boost (EP Booster)**, on CTL.
- Gain: 40, +3dB: on, Bright: off
- A clean volume lift so the lead lines sit on top of the band.
- Bright off: the EQ already adds the bite. Bright on top of that gets thin.
- CTL off: bypassed. CTL on: engaged.

**DST — Green OD (TS-808)**, on CTL.
- Gain: 35, Tone: 58, VOL: 62
- The TS mid hump makes the melody lines sing over the rhythm crunch.
- Gain 35: low. The King of Kings and the snaptone already supply most of the dirt. This is focus and sustain, not more fuzz.
- CTL off: bypassed. CTL on: engaged.

**AMP/CAB — NAM SnapTone, slot 80: JCM800Clean** (always on)
- `JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700` into the `BlendOfAll_dc` (Marshall 1960AV) IR.
- A light-crunch JCM800 into a V30 4x12. Pushed by an OD, it's the classic pop-punk recipe.
- G20 is exempt from the high-gain rule, so it gets used whenever it fits. It fits.
- Gain: 55, VOL: 60, Bass: 52, Middle: 58, Treble: 56
- Gain 55: a touch over as-captured. The King of Kings does the rest.
- Bass 52: near flat. Tight low end so the chugs don't get flubby.
- Middle 58: mids for cut. Kids' TV mixes are dense: vocals, synths, sound effects.
- Treble 56: bright, but not harsh.
- VOL 60: the level Michael set for this snaptone in the 2026-10-01 VOL audit.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 80 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: 0, 500Hz: -1, 1kHz: +2, 3kHz: +2, 6kHz: -1, VOL: 50
- -1 at 500Hz: clears boxiness from stacked drive.
- +2 at 1kHz and 3kHz: the bright, polished pop-punk attack.
- -1 at 6kHz: trims fizz.

**MOD — off.**
- Pop-punk rhythm is dry and in your face.

**DLY — Analog**, on CTL.
- Mix: 18, Time: 200ms, Feedback: 20, Trail: on
- 200ms is an eighth note at 150 BPM (est.). Re-time it if the tempo is off.
- Low mix. Thickens the lead without smearing it.
- Trail on so the last note rings into the rhythm.

**RVB — Room**, always on.
- Mix: 10, Decay: 25, Trail: on
- Just some air. Tight, modern pop production.

## CTL footswitch

On CTL: PRE (Boost), DST (Green OD), DLY (Analog). That uses all 3 CTL slots.

- **CTL off — Rhythm.** Boosted JCM800 crunch. Power chords for the verses and the hooks. This is the resting state the patch loads into.
- **CTL on — Lead.** Volume lift, TS focus, eighth-note slap. For the melody lines, lead fills and the final "Spidey!" tag.
- It's a short TV theme. I haven't mapped a section-by-section structure from the recording. Stomp CTL on for anything melodic, and off for chords.

## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song. No octave texture needed.

**2. Donner Ultimate Comp — bypassed**
- Footswitch off all song. The stacked drive compresses enough. Power chords want the pick attack.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song. Fuzz is too woolly for this. The sound is tight and bright.

**4. Joyo King of Kings — Left channel engaged all song. Right channel bypassed.**

*Left channel (rhythm push):*
- Volume: 55
- Gain: 35
- Tone: 55
- Clipping toggle: harder setting (more crunch, tighter breakup)
- Feedback toggle: standard setting (no added compression)
- On all song. A Bluesbreaker-style push into the JCM800 turns light crunch into pop-punk rhythm.
- Gain 35 keeps it tight. Volume 55 hits the amp a little harder.

*Right channel:*
- Bypassed all song, footswitch off. The GP-5's Green OD and Boost on CTL handle the lead lift from one stomp.

**5. Joyo Narcissus — bypassed**
- Footswitch off all song. No chorus. Matches the MOD-off call.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt. The King of Kings Left channel is part of the core rhythm sound, so don't skip it.
