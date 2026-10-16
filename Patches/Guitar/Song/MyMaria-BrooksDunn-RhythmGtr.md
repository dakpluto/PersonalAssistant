# My Maria (Rhythm Guitar) — Brooks & Dunn

From *Borderline* (1996). About 96 BPM, est.
A cover of B.W. Stevenson's 1973 hit. Ronnie Dunn's falsetto hook drives it, over a loping mid-tempo groove.
The rhythm guitar is a warm clean-to-edge strum with some push. Tele-style fills and a solo sit on top.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 2 (bridge+middle) for the rhythm. Bridge humbucker for the solo.
Full board, Stratocaster (HSS). Board Option: White Tape (rebuilt 2026-10-16).

## Module chain

**NR — Gate**, always on.
THRE: 18.
Catches single-coil hum when you stop. Set low so strums ring out.

**PRE — COMP (Ross)**, always on.
Sustain: 35, VOL: 55.
Light Ross squash evens out the strum. Nashville rhythm is always a little compressed.

**DST — Green OD (TS-808)**, on CTL.
Gain: 32, Tone: 58, VOL: 68.
The lead push. Gain 32 pushes the clean Deluxe into a singing solo tone. VOL 68 adds about +3dB.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean country-rock rhythm. Cleanest Deluxe. The OD on CTL adds the hair.
- Gain: 54, VOL: 75, Bass: 48, Middle: 52, Treble: 58
- Gain 54: a little over default. This part wants more push than the other NashClean patches.
- Bass 48: low end pulled back a little.
- Middle 52: a touch more midrange.
- Treble 58: more top end.
- VOL 75: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -2, VOL: 50.
Low cut clears room for the bass. A small 1kHz and 3kHz lift for presence. -2 at 6kHz removes string zing.

**MOD — off.** No modulation. The groove stays dry and punchy.

**DLY — Analog**, on CTL.
Mix: 15, Time: 340ms, F.Back: 18, Trail: on.
About an eighth note at 96 BPM. A short, dark tail behind the solo.

**RVB — Spring**, always on.
Mix: 16, Decay: 35, Trail: on.
A little Fender spring for air.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Compressed, clean Deluxe for the verse and chorus strum. This is the resting state the patch loads into.
- **CTL on** — Lead. Green OD plus analog repeats for the fills and the solo.

Engage CTL for the solo. Drop back when Ronnie comes in.

## Sounds
- **Rhythm** (default). CTL off, White Tape off. Verse and chorus strum.
- **Clean fills.** CTL off, White Tape on. The Tele-style fills and turnaround licks: clean, snappy, one slap behind each note. That's the Nashville chicken-pickin' sound.
- **Solo.** CTL on, White Tape off. Green OD plus the GP-5's eighth-note Analog delay.
- Section map: rhythm under the vocal, White Tape on for the fills between lines and the turnarounds, CTL on for the solo. Step off both before the vocal comes back.

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

**7. Donner White Tape — tape slap, for the fills and turnarounds.**
- Top row (left channel) only. Mono rig, bottom row unused.
- Level: ~10:30. A clearly audible single echo, still behind the dry note.
- Time: ~120ms target, just past 8 o'clock. Slapback range.
- Feedback: fully counterclockwise. One repeat.
- This is the shared slap setting (same as Syndicate, Click Click Boom, Everyday Blues, My Maria, Somebody Like You, Neon Moon). Any of these can share a set without touching the knobs.
- Footswitch: on for the clean fills and turnaround licks (CTL off). Off for the strum and the solo.
- Why: the fills used to need CTL, which brought in the OD and the eighth-note delay. A clean slap is the more country fill sound, and it leaves CTL for the solo.
- It sits after the GP-5's Spring, so the slap repeats a little spring with it.
- The clock positions assume the Time knob sweeps 25-1000ms evenly. Set the slap by ear: it should thicken the note, not answer it.

## Note on the full board vs. the `.prst`
The `.prst` file only encodes the GP-5's own 9 modules. The board settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
