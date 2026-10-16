# Neon Moon (Rhythm Guitar) — Brooks & Dunn

From *Brand New Man* (1991), released as a single in 1992. About 100 BPM, est.
A lonesome honky-tonk ballad. Steel guitar carries much of the melancholy. The electric sits back with clean strums and arpeggios, and plays melodic fills between lines.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Neck or position 4 for the rhythm. Neck pickup for the fills.
Full board, Stratocaster (HSS). Board Option: White Tape (rebuilt 2026-10-16).

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Ballad notes decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 32, VOL: 55.
Light leveling on soft strums.

**DST — Green OD (TS-808)**, on CTL.
Gain: 20, Tone: 55, VOL: 68.
Barely drive. A level and mid push so the fills sit above the steel and the vocal.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean, sad two-step electric. Cleanest Deluxe Reverb.
- Gain: 49, VOL: 75, Bass: 46, Middle: 46, Treble: 55
- Gain 49: a little under default. This part wants less push than the other NashClean patches.
- Bass 46: low end pulled back a little.
- Middle 46: midrange pulled back a little.
- Treble 55: a touch more top end.
- VOL 75: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: 0, 3kHz: +1, 6kHz: -2, VOL: 50.
A light low cut and a trimmed top.

**MOD — off.** No modulation. The steel supplies the shimmer.

**DLY — Analog**, on CTL.
Mix: 18, Time: 450ms, F.Back: 22, Trail: on.
About a dotted eighth at 100 BPM. Soft repeats for a lonesome trail behind the fills.

**RVB — Spring**, always on.
Mix: 22, Decay: 42, Trail: on.
Spring at 22 for the empty-barroom space.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Warm, glassy clean with spring for the verse and chorus strums. This is the resting state the patch loads into.
- **CTL on** — Lead. A slight push plus analog repeats for the melodic fills and the solo.

Engage CTL for the long melodic fills and the solo. Step off before the vocal returns.

## Sounds
- **Rhythm** (default). CTL off, White Tape off. Clean strums and arpeggios.
- **Answer licks.** CTL off, White Tape on. Short, clean neck-pickup licks that answer the vocal. A slap on a clean Deluxe is the early-90s honky-tonk fill sound.
- **Lonesome fills and solo.** CTL on, White Tape off. A slight push plus the GP-5's dotted-eighth trail.
- Section map: rhythm under the verses, White Tape on for short answer licks, CTL on for longer fills and the solo. Don't run both together: in a ballad the slap and the trail blur into each other.

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

**7. Donner White Tape — tape slap, for short answer licks.**
- Top row (left channel) only. Mono rig, bottom row unused.
- Level: ~10:30. A clearly audible single echo, still behind the dry note.
- Time: ~120ms target, just past 8 o'clock. Slapback range.
- Feedback: fully counterclockwise. One repeat.
- This is the shared slap setting (same as Syndicate, Click Click Boom, Everyday Blues, My Maria, Somebody Like You, Neon Moon). Any of these can share a set without touching the knobs.
- Footswitch: on for short clean licks between vocal lines (CTL off). Off for the strum and when CTL is on.
- Why: before this, any fill meant CTL and the dotted-eighth trail. That's right for long, lonesome lines, but too much for a two-beat answer. The slap gives short licks their own sound.
- It sits after the GP-5's Spring (Mix 22), so the slap repeats the barroom space with it. Keep Level at 10:30 or below here.
- The clock positions assume the Time knob sweeps 25-1000ms evenly. Set the slap by ear: it should thicken the note, not answer it.

## Note on the full board vs. the `.prst`
The `.prst` file only encodes the GP-5's own 9 modules. The board settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
