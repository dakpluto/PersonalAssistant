# Somebody Like You (Rhythm Guitar) — Keith Urban

From *Golden Road* (2002). About 120 BPM, est.
Upbeat country-pop. A bright, driving, percussive rhythm, then Urban's hot, twangy lead breaks.
The famous intro riff is Urban's ganjo, a six-string banjo. The GP-5 can't make a banjo. This patch gets the brightest, most percussive Strat version of it.
Built from the song's overall sound. I haven't verified the exact amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge + middle) for the rhythm and the intro riff. Bridge humbucker for the leads.
Full board, Stratocaster (HSS). Board Option: White Tape (rebuilt 2026-10-16).

## Module chain

**NR — Gate**, always on.
THRE: 18.
Light. Tight stops on the driving rhythm.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 55, Attack: 40, Clip: 40, VOL: 56.
Country-pop needs squash. It makes the fast picked figures snap and evens out the banjo-style intro on a Strat.

**DST — Green OD (TS-808)**, on CTL.
Gain: 35, Tone: 60, VOL: 66.
The lead push. A TS into an edge-of-breakup Deluxe gives the hot, mid-forward twang of a modern country solo. Tone 60 keeps it bright.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the edge of breakup, into the Brown Deluxe 1x12.
- Twang with a little hair. Exactly the country-pop rhythm voice.
- Gain: 48, VOL: 70, Bass: 46, Middle: 52, Treble: 58
- Gain 48: just under the capture, so the rhythm stays crisp.
- Bass 46: tighter lows for a fast song.
- Middle 52: a small lift.
- Treble 58: more snap and sparkle.
- VOL 70: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: -1, 1kHz: +1, 3kHz: +2, 6kHz: 0, VOL: 50.
Tight lows and a 3kHz lift for pick attack.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 18, Time: 375ms, Feedback: 20, Trail: on.
A dotted eighth at 120 BPM. Fills the space around the lead breaks.

**RVB — Spring**, always on.
Mix: 12, Decay: 30, Trail: on.
A dash of Fender spring.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Bright, compressed, edge-of-breakup Deluxe for the driving rhythm and the intro riff. This is the resting state the patch loads into.
- **CTL on** — Lead. TS-pushed Deluxe plus dotted-eighth delay for the solos.

Engage CTL for the lead breaks. Drop back for the rhythm.

## Sounds
- **Rhythm** (default). CTL off, White Tape off. The driving strum.
- **Ganjo riff and picked fills.** CTL off, White Tape on. The slap doubles each picked note, filling in the rolling density of the banjo figure that a single Strat line lacks. Same for the picked fills between vocal lines.
- **Lead break.** CTL on, White Tape off. Green OD plus the GP-5's dotted-eighth delay.
- **Hot break.** CTL on, White Tape on. Slap plus dotted eighth for the fastest, most percussive breaks. Busy, so use it for one break, not all of them.
- Section map: White Tape on for the intro riff, off when the strum starts. Back on for the riff's returns and picked fills. CTL on for each lead break.

## Full pedalboard (signal chain order)
Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5 → Donner White Tape.
Board Option = White Tape, so the Joyo American Sound is off the board for this build.
Rebuilt from GP-5-only on 2026-10-16. The GP-5 settings didn't change, and every pedal except the White Tape stays bypassed. Played without the board, the patch sounds exactly as before.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song.

**2. Donner Ultimate Comp — bypassed**
- Footswitch off all song. The GP-5's PRE compressor already does this job.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song.

**4. Joyo King of Kings — both channels bypassed**
- Left: off. Right: off.
- The GP-5's Green OD on CTL is all the push this song wants.

**5. Joyo Narcissus — bypassed**
- Footswitch off all song. Matches the MOD-off call.

**6. Valeton GP-5** — see settings above.

**7. Donner White Tape — tape slap, for the intro riff and picked fills.**
- Top row (left channel) only. Mono rig, bottom row unused.
- Level: ~10:30. A clearly audible single echo, still behind the dry note.
- Time: ~120ms target, just past 8 o'clock. Slapback range.
- Feedback: fully counterclockwise. One repeat.
- This is the shared slap setting (same as Syndicate, Click Click Boom, Everyday Blues, My Maria, Somebody Like You, Neon Moon). Any of these can share a set without touching the knobs.
- Footswitch: on for the ganjo-style intro riff and the picked fills (CTL off). Off for the strum. Optional on top of CTL for a hot break.
- Why: the riff and fills are fast, percussive picking. The GP-5's dotted eighth would smear them. A single short slap thickens them and keeps every note clear.
- It sits after the GP-5's Spring, so the slap repeats a little spring with it.
- The clock positions assume the Time knob sweeps 25-1000ms evenly. Set the slap by ear: it should thicken the note, not answer it.

## Note on the full board vs. the `.prst`
The `.prst` file only encodes the GP-5's own 9 modules. The board settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
