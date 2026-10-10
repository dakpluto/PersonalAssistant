# I'm Diggin' You (Like an Old Soul Record) (Guitar) — Meshell Ndegeocello

From *Plantation Lullabies* (1993), Meshell Ndegeocello's debut. Co-produced by David Gamson, André Betts and Bob Power.
Wah Wah Watson is credited among the album's guitarists. I haven't confirmed he plays on this track.
The track is a laid-back early-90s neo-soul groove, built around Meshell's bass. Guitar's job is support: clean, warm, funky comping, with soul fills on top.
Tempo: about 92 BPM, my estimate. Not measured. Retime the delay by ear if it's off.
Instrument: Stratocaster (HSS).
- Rhythm: position 4 (neck+middle). Light, muted scratch chords and double-stops.
- Fills: neck pickup, or the bridge humbucker if you want more quack out of the envelope filter.
Full board.

CTL off = clean soul comping. CTL on = fills and lead lines.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**, always on.
- THRE: 20
- Funk comping has muted scratches between chords. 20 keeps the hiss down without eating ghost notes.

**PRE — Toucher (envelope filter)**, on CTL.
- Sense: 55, Range: 50, Q: 55, Mix: 60, Mode: Guitar
- A nod to the Wah Wah Watson credit. The filter follows your pick attack, so it acts like a played wah, not a pulsing auto-wah.
- Mix 60 keeps some dry signal, so it stays soulful rather than synthy.
- CTL off: bypassed. CTL on: engaged.

**DST — Green OD (TS-808)**, on CTL.
- Gain: 20, Tone: 55, VOL: 60
- Just a little hair and a mid push, so the fills sing over the bass. Not a rock lead.
- CTL off: bypassed. CTL on: engaged.

**AMP/CAB — NAM SnapTone, slot 61: TwinClean** (always on)
- The `CLEANEST` blackface Deluxe capture into the vulturized `TWIN REVERB __ CLEAN` IR.
- Its role is the glassy Fender clean: Motown, soul, pop. "Like an old soul record" is the brief.
- Gain: 50, VOL: 75, Bass: 50, Middle: 54, Treble: 52
- Gain 50: as captured. Clean with headroom.
- Middle 54: a little body, so the comping doesn't go thin under the bass.
- Treble 52: near flat. The EQ handles the top.
- VOL 75: the level Michael set for this snaptone in the 2026-10-01 VOL audit.
- Same in both CTL states. AMP and CAB are off in the `.prst`. The N->S block calls slot 61 directly.

**EQ — Guitar EQ 2**, always on.
- 100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: +1, 6kHz: -1, VOL: 50
- -2 at 100Hz: hands the low end to Meshell's bass. In this song, the bass is the lead voice.
- +1 at 1kHz and 3kHz: snap for the scratch chords.
- -1 at 6kHz: keeps it warm, not glassy-sharp.

**MOD — off.**
- The Narcissus on the board supplies the chorus.

**DLY — Analog**, on CTL.
- Mix: 15, Time: 326ms, Feedback: 18, Trail: on
- 326ms is an eighth note at 92 BPM (est.). Low mix, so it just thickens the fills.
- Trail on, so a fill's last note rings into the comping.

**RVB — Spring**, always on.
- Mix: 15, Decay: 30, Trail: on
- The amp-spring sound of an old soul record. Moderate, so the comping stays tight.

## CTL footswitch

On CTL: PRE (Toucher), DST (Green OD), DLY (Analog). That uses all 3 CTL slots.

- **CTL off — Rhythm.** Clean, chorused Fender comping. This is the resting state the patch loads into.
- **CTL on — Fills and lead.** Envelope quack, a touch of TS hair, and an eighth-note echo.
- I haven't mapped where the guitar fills land on the recording. Stomp CTL on for melodic fills between vocal lines, and off to go back to comping.

## Full pedalboard (signal chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**1. Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off all song.

**2. Donner Ultimate Comp — engaged all song**
- COMP: 35
- TONE: 55
- LEVEL: 55
- Mode: NORMAL
- Soul and funk comping has been compressed on record since the 60s. COMP 35 evens out the scratches and adds a little sustain, without an obvious squash.

**3. Donner Stylish Fuzz — bypassed**
- Footswitch off all song.

**4. Joyo King of Kings — both channels bypassed**
- Left: off, footswitch not engaged.
- Right: off, footswitch not engaged.
- The Green OD on CTL is all the dirt this song wants. Board drive would cloud the clean comping.

**5. Joyo Narcissus — engaged all song**
- Width: 40
- Depth: 30
- Rate: 25
- Mode: Vintage
- A light, slow chorus under the clean tone. That's the early-90s neo-soul guitar sheen. Low Depth keeps it underneath.

**6. Valeton GP-5** — see settings above.

## Note on the full board vs. the `.prst`

The `.prst` file only encodes the GP-5's own 9 modules. The Flamma, Donner Ultimate Comp, Donner Stylish Fuzz, Joyo King of Kings and Joyo Narcissus settings above are not and cannot be part of that file. They're set by hand on the board, and documented here so the full patch can be rebuilt. The Comp and Narcissus are part of the core clean sound, so don't skip them.
