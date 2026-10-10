# This Is Halloween — The Nightmare Before Christmas

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *The Nightmare Before Christmas* (1993). Music and lyrics by Danny Elfman.
The recording is an orchestral ensemble number. The low end I hear described is low brass and orchestral bass playing a stalking, oom-pah minor-key march. I can't confirm an electric bass on it, so this patch translates that low end to bass guitar.
Tempo and key: not verified. Moderate march feel. No delay in the patch, so nothing needs to lock to tempo.
Play with fingers, short and detached, like a tuba. Mute each note with the fretting hand. Neck (P) full, bridge (J) at about 50%, tone at about 50%.

One GP-5 sound, so no CTL. That's allowed on bass per the patch rules.
The lift for the full-ensemble shouts ("This is Halloween!") comes from the Tidal Wave drive footswitch.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Keeps the gaps between the staccato notes silent, so the oom-pah reads.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board.

**DST — Off**
- Dirt comes from the Tidal Wave's drive section. Bass OD is too harsh.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- `Ampeg B18 - Head DI - Bass Chan - Vol 5` (B-18N) into the Apg115410 IR (User IR 2).
- A warm, fat B-15 with a 4x10 edge. A round, wide note is the closest a bass guitar gets to a tuba.
- Gain: 52, VOL: 80, Bass: 58, Middle: 55, Treble: 42
- Gain 52: about as captured. A touch of bloom.
- Bass 58: the brass weight.
- Middle 55: body. Tuba lives in the low mids.
- Treble 42: dark. No string zing. Brass doesn't have it.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**
- 50Hz: +1, 120Hz: +2, 400Hz: +1, 800Hz: -1, 4.5kHz: -2, VOL: 50
- Always on.
- +2 at 120Hz, +1 at 400Hz: the round, blowing body of a tuba.
- -1 at 800Hz, -2 at 4.5kHz: takes away the finger and string noise that gives away a bass guitar.

**MOD — Off**
- Not used.

**DLY — Off**
- Not used.

**RVB — Hall**
- Mix: 10, Decay: 30, Trail: On
- Always on. An orchestral scoring-stage space. Low mix, so the staccato stays tight.

## CTL summary

- No CTL assignment. One fixed GP-5 sound.
- The dynamics come from the Tidal Wave drive stomp (see the board below).

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Engaged all song**
- -2OCT: 0
- -OCT: 25
- +OCT: 0
- +2OCT: 0
- Dry: 100
- A quiet sub-octave under the bass adds the size of low brass and contrabass doubling.
- -OCT 25 keeps it a layer. Single notes, so tracking holds.

**2. Donner Ultimate Comp — Engaged all song**
- COMP: 40
- TONE: 45
- LEVEL: 55
- Mode: NORMAL
- Evens out the staccato notes so every "oom" lands at the same level. TONE 45 keeps it dark.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ); Drive stomped for the shouts**
- Drive: 40
- Blend: 35
- Presence: 45
- Level: 55
- Treble: 45
- Middle: 55
- Bass: 58
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off for the creeping verses. On for the full-ensemble "This is Halloween!" sections and the big ending. That's a growl, like brass blatting.
- Blend 35 keeps the fundamental clean under the grit.
- Mid-Frequency 500Hz: body, not click.
- Bass-Shift 80Hz keeps the octave layer tight once the drive comes in.
- The preamp and EQ stay active whether the drive is on or off.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt. The Flamma octave is part of the tuba sound, so don't skip it.
