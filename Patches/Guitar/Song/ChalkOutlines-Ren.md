# Chalk Outlines (Guitar) — Ren & Chinchilla

Ren featuring Chinchilla. Ren is credited with guitar, bass, keys and production. The track also has live cello, live drums, and Chinchilla on the chorus.
Electric guitar (confirmed by Michael).
Tempo: about 123 BPM, measured from the recording (2026-10-10 analysis). The groove often feels half-time, around 61.
Key: C#m. The analysis lands on C#m or its relative, E. Chord charts show Am–F–C–G shapes with a capo on 4, which is C#m–A–E–B.
A dark, story-driven song. Sparse verses under Ren's rap. Big choruses where Chinchilla, the cello and the full drums come in. The bridge is the most intense part of the song.
Instrument: Stratocaster (HSS). Capo 4.
- Verses: position 4 (neck+middle), guitar volume about 7, so the amp sits just on the clean side of breakup.
- Choruses and bridge: bridge humbucker, volume full up.
Full board.

CTL off = verse. CTL on = chorus and bridge.

## What the recording analysis showed

I can't hear the track, so these are measurements, not by-ear calls. Michael's ears win if they disagree.
- Song map, from loudness and brightness:
  - Intro: 0:00–0:24
  - Verse 1: 0:24–0:54
  - Chorus 1: 0:54–1:25
  - Verse 2: 1:25–2:12
  - Chorus 2 and post-chorus: 2:12–3:13
  - Bridge: 3:13–3:32
  - Final chorus and outro: 3:32–3:53
- In the choruses, the mix's tonal (non-drum) energy at 2–6kHz is 2–3x higher relative to its 200Hz–1kHz body than in the verses. That's what driven guitar, or extra layers, does. The guitar gets dirtier and bigger at the chorus, so the drive goes on CTL.
- The bridge has the densest upper harmonics in the song. Its section below adds an extra push.
- Caveat: Chinchilla's vocals share that frequency range, so the analysis can't prove all of it is guitar.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 18
- Quiets the hum from an edge-of-breakup amp between verse phrases.
- Low enough that it doesn't chop soft picked notes or the delay tails.

**PRE — off.**
- The Donner Ultimate Comp on the board handles the light compression.

**DST — Green OD (TS-808)**, on CTL.
- Gain: 40, Tone: 55, VOL: 62
- The chorus drive. A Tube Screamer into an already Klon-pushed Deluxe gets a thick, singing drive without fizz.
- Gain 40 gives real grit but keeps the chords clear under the vocal.
- Tone 55 so it cuts through the cello and drums.
- CTL off: bypassed. CTL on: engaged.

**AMP/CAB — NAM SnapTone, slot 78: Fen65DlxKl** (always on)
- A Fender '65 Deluxe Reverb (Volume 5, Tone 6, Bass 4) boosted by a Klon Centaur (Gain 10). Full rig capture, cab included.
- This combo's role is "edge-of-breakup Fender Deluxe, Klon-pushed". It suits a verse that sits just under breakup and a chorus that needs to take a drive pedal. Michael checked it 2026-10-04: "very nice".
- A lower-gain, edge-of-breakup tone, so the snaptone gets strong preference.
- Gain: 45, VOL: 70, Bass: 50, Middle: 52, Treble: 55
- Gain 45: a little under as-captured, so the verse cleans up off the guitar's volume knob.
- Middle 52: a touch more mids so the chorus drive sits forward.
- Treble 55: a little extra edge for the cello-heavy mix.
- VOL 70: the level Michael set for this snaptone on 2026-10-04. Trim here if the patch jumps in level.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 78 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: -1, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -1, VOL: 50
- -1 at 100Hz leaves the low end to the bass and cello.
- +1 at 1kHz and 3kHz for presence against the vocals.
- -1 at 6kHz takes the edge off the stacked drive.

**MOD — off.**

**DLY — Analog**, on CTL.
- Mix: 16, Time: 366ms, F.Back: 22, Trail: on
- A dotted eighth at 123 BPM. Fills the space around the chorus chords and adds width to the big sections.
- Analog repeats are darker, so they sit behind the vocal.
- Trail on so the repeats ring out into the verse.
- Note: the encoder catalog calls this param `Feedback`. Same knob.

**RVB — Plate**, always on.
- Mix: 14, Decay: 30, Damp: 50, Trail: on
- A modern produced sheen. Short enough that the verses stay tight under the rap.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off — Verse.** Edge-of-breakup Deluxe, guitar volume about 7, dry except for the plate. This is the resting state the patch loads into.
- **CTL on — Chorus.** Tube Screamer drive plus dotted-eighth delay, bridge humbucker, volume full up.
- Song map with CTL:
  - Intro (0:00–0:24): CTL off.
  - Verse 1 (0:24–0:54): CTL off.
  - Chorus 1 (0:54–1:25): CTL on.
  - Verse 2 (1:25–2:12): CTL off.
  - Chorus 2 and post-chorus (2:12–3:13): CTL on.
  - Bridge (3:13–3:32): CTL on, plus King of Kings Left (see below).
  - Final chorus and outro (3:32–3:53): CTL on, King of Kings off.

## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song.

**2. Donner Ultimate Comp — engaged all song**
- COMP: 30
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Light. It evens out the verse picking at reduced guitar volume.
- Low COMP so the chorus drive keeps its dynamics.
- NORMAL mode: the Klon-pushed Deluxe already has plenty of top.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song. The drive here is overdrive, not fuzz.

**4. Joyo King of Kings — Left channel engaged for the bridge only. Right channel bypassed.**

*Left channel (bridge push):*
- Volume: 50
- Gain: 30
- Tone: 50
- Clipping toggle: softer setting (smoother, lower-gain breakup)
- Feedback toggle: standard setting (no added compression)
- Stomp it on at the bridge (about 3:13), with CTL already on. It stacks into the Green OD for the song's most intense section.
- Stomp it off for the final chorus.

*Right channel:*
- Bypassed all song, footswitch off.

**5. Joyo Narcissus — bypassed**
- Footswitch off all song. No audible chorus effect on this song.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
