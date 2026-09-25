# Papa Was a Rollin' Stone — The Temptations (Guitar)

**Type:** Song
**Instrument:** Stratocaster (HSS)
**Full Board:** Yes
**BPM:** ~120 (estimate)

## The song

"Papa Was a Rollin' Stone" (1972). Norman Whitfield production, Funk Brothers session band.
The single edit runs about 7 minutes. The album version on *All Directions* runs close to 12.
The whole record hangs on the bass ostinato and the hi-hat. The guitars are support, not the feature.
Two guitar jobs matter here.
First: dry, clipped, muted single-note stabs that answer the bass line. Thin, snappy, almost percussive.
Second: wah-wah comping, the "wacka-wacka" that thickens as the arrangement builds with strings and horns.
There's no guitar solo. The "lead" sound on this record is the wah part, so that's what CTL On is.

CTL Off = muted single-note stabs (intro and main groove).
CTL On = wah comping (build sections and when the track fills in).

Pickups: position 4 (middle + neck) for CTL Off, for the hollow quack on muted notes. Position 3 (middle alone) for the wah part, which leaves the filter room to sweep without the neck pickup's low end blurring it.

## GP-5 settings

Module order: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

**NR — Gate** (always on)
- THRE: 20
Clean Strat single coils only need light cleanup.
20 kills hum between stabs without clipping the short decay of the muted notes.

**PRE — Toucher** (CTL)
- Sense: 62, Range: 55, Q: 68, Mix: 85, Mode: Guitar
- CTL Off = off, CTL On = on
This is the wah.
No expression pedal on the board, so an envelope filter stands in for the rocking wah. Your pick attack drives the sweep.
Sense 62 opens it fully on a firm 16th-note scratch. Lighter ghost strokes stay closed.
Q 68 gives the vocal "wacka" peak without whistling.
Mix 85 keeps a little dry signal underneath so chord definition survives.
Range 55 centers the sweep in the upper mids, where a real wah quacks.

**DST — off**
Clean record. No drive in either state.

**AMP — Dark Twin** (Fender 65 Twin Reverb) (always on)
- Gain: 26, VOL: 70, Bass: 42, Middle: 58, Treble: 62, Bright: Off
Big-headroom Fender clean. Motown-era guitar is clean and tight, never pushed.
Gain 26 keeps it glassy even when the Toucher peak jumps in level.
Bass 42 on purpose. This song belongs to the bass player. The guitar stays out of the low end.
Middle 58 gives the stabs body in the 800Hz–1.6kHz range, where they sit in the mix.
Bright off. The EVM IR is already detailed up top, and Bright plus a resonant filter gets shrill.

**CAB — User IR 5 (EVM112)** (always on)
- VOL: 62
Electro-Voice EVM12L. 70s Twin Reverbs were sold with EV speakers as a factory option, so this is a period-correct pairing.
Tight, hi-fi, doesn't fold up under transients. It keeps the muted stabs punchy.
The slot is confirmed, so it's encoded directly in the `.prst`.

**EQ — Guitar EQ 1** (always on)
- 125Hz: -8, 400Hz: -2, 800Hz: +3, 1.6kHz: +4, 4kHz: +1, VOL: 52
-8 at 125Hz is the key move: it clears room for that bass line.
-2 at 400Hz takes out boxiness.
+3/+4 at 800Hz/1.6kHz is the snap and quack. It helps both the stabs and the Toucher peak.
Same in both CTL states.

**MOD — off**
No modulation on the record's guitar parts.

**DLY — off**
The guitar parts sit dry and tight in the pocket. Repeats would smear the 16th-note stabs.

**RVB — Room** (always on)
- Mix: 14, Decay: 30, Trail: On
A light nod to the Hitsville echo-chamber sound.
Mix 14 is just enough air to sit in a room, not enough to push the guitar back.

### CTL summary
- **CTL Off (intro/main groove):** NR + Dark Twin + EVM112 + EQ + Room. Dry, clipped, muted single notes locked to the bass.
- **CTL On (build/wah sections):** adds PRE Toucher. Same amp, now quacking with your pick attack.
- Stay on CTL Off through the long intro. Only the bass, hi-hat and handclaps are there, and the guitar should stay sparse.
- Hit CTL once the strings and horns start stacking up, and for the extended vamp in the back half.
- Drop back to CTL Off whenever the arrangement thins out again, e.g. under the vocal verses.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch: off for the whole song
No octave voice on this record. An octave-down would also collide with the bass line.

**Donner Ultimate Comp — engaged always**
- COMP: 35, TONE: 58, LEVEL: 55, Mode: NORMAL
Motown guitar is tight and even. Light squeeze keeps muted stabs at a steady level.
COMP 35 and no higher. Heavier compression flattens the pick dynamics the Toucher needs to sweep.
NORMAL mode. The Twin + EVM chain is bright enough already.

**Donner Stylish Fuzz — bypassed**
- Footswitch: off
No fuzz anywhere in the song.

**Joyo King of Kings — both channels bypassed**
- Left: bypassed. Footswitch off. Parked at Volume 50, Gain 15, Tone 55, Clipping toggle: softer/asymmetric position, Feedback toggle: standard position.
- Right: bypassed. Footswitch off. Parked at Volume 50, Gain 30, Tone 55, Clipping toggle: softer/asymmetric position, Feedback toggle: standard position.
Neither channel engages for this song. The record is clean.
Any OD in front of an envelope filter compresses the pick dynamics and dulls the sweep.
The parked settings are only there so a stray stomp doesn't blow the mix apart.

**Joyo Narcissus — bypassed**
- Mode: Vintage, Width: 30, Depth: 20, Rate: 25 (parked)
- Footswitch: off
No chorus on the record. Dry and centered.

**Valeton GP-5**
See GP-5 settings above.

The `.prst` only carries the GP-5's 9 modules. The pedalboard settings above are not stored in the file. Set them by hand.
