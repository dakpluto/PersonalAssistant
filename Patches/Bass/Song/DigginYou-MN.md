# I'm Diggin' You (Like an Old Soul Record) — Meshell Ndegeocello

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Plantation Lullabies* (1993), Meshell Ndegeocello's debut. She's the bassist on the album, and the bass is the lead voice of this track.
The sound is a deep, round, fingerstyle soul pocket: warm low end, a vocal low-mid growl, and smooth, melodic lines. Exactly what the title is talking about.
I haven't verified which bass or rig she used on this recording.
Tempo: about 92 BPM, my estimate. Not measured.
Fingerstyle. Both pickups up, with the bridge (J) at about 80% for some J-bass growl. Tone at about 65%. Play over the end of the neck for the round notes, and closer to the bridge when a line needs to speak.

One sound for the whole song, so no CTL. That's allowed on bass per the patch rules. The groove doesn't change character, and the dynamics are in your fingers.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 12
- Always on. Light. Ghost notes and slides are part of the feel, so the gate only catches hum.

**PRE — Off**
- The Donner Ultimate Comp handles compression on the board.

**DST — Off**
- Clean all song.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` (B-18N) into the Apg115 IR (User IR 1).
- Its role is the classic clean B-15: Motown and 60s-70s studio. The song is literally about old soul records, so it's the right voice. Clean, round and warm, with a 1x15's girth.
- Gain: 50, VOL: 80, Bass: 56, Middle: 54, Treble: 50
- Gain 50: as captured. Clean.
- Bass 56: the deep bottom of the pocket.
- Middle 54: body, so the melodic lines carry like a lead voice.
- Treble 50: flat. Finger tone, no click.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit.
- AMP and CAB are off in the `.prst`. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**
- 50Hz: 0, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: 0, VOL: 50
- Always on.
- +2 at 120Hz: the warm thump.
- -1 at 400Hz: clears the boxiness that muddies a fingerstyle P/J.
- +2 at 800Hz: the vocal, J-bass growl that lets the lines sing over the band.

**MOD — Off**
- Not used.

**DLY — Off**
- Not used.

**RVB — Room**
- Mix: 6, Decay: 20, Trail: On
- Always on. Barely there. Soul bass is close and dry.

## CTL summary

- No CTL assignment. One fixed sound for the whole song.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off. The bass is already the deepest thing in the mix.

**2. Donner Ultimate Comp — Engaged all song**
- COMP: 40
- TONE: 50
- LEVEL: 55
- Mode: NORMAL
- Evens out the fingerstyle dynamics, so the ghost notes and the big notes sit at closer levels. That's a big part of the classic soul bass sound.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz.

**4. Joyo Tidal Wave — Engaged (preamp/EQ), Drive off**
- Drive: 15
- Blend: 20
- Presence: 45
- Level: 55
- Treble: 50
- Middle: 55
- Bass: 56
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- Drive footswitch: off all song. Clean.
- Bass-Shift 40Hz: a deep, full low end for the pocket.
- Mid-Frequency 500Hz: body and warmth, not pick-style click.
- The preamp and EQ stay active whether the drive is on or off.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus on the bass.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo Tidal Wave and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt.
