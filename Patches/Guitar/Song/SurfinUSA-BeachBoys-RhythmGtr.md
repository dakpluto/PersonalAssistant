# Surfin' U.S.A. — The Beach Boys (Guitar)

**Type:** Song
**Instrument:** Stratocaster (HSS)
**Full Board:** Yes
**BPM:** ~158 (estimate)

## The song

"Surfin' U.S.A." (1963), title track of the second album.
The melody is lifted from Chuck Berry's "Sweet Little Sixteen", and the guitar follows Berry's playbook too.
Rhythm: a straight-8th boogie chug. Root-fifth to root-sixth shapes on the low strings, clean and bright.
Lead: Carl Wilson's Chuck Berry-style lines, double-stop bends and fast pull-offs.
Early-60s Fender clean everywhere. Spring reverb is part of the sound, but this is vocal surf, not a drenched Dick Dale instrumental. The reverb supports the parts, it doesn't wash them out.

CTL Off = rhythm chug (verses, choruses).
CTL On = lead lines (intro fills and the instrumental break).

Pickups: position 2 (bridge + middle) for the rhythm, bright and a little quacky, like a single-coil Fender. Position 1 (bridge humbucker) for the lead. It's thicker, and it hits the Green OD harder, so double-stops thicken up.

## GP-5 settings

Module order: NR, PRE, DST, AMP, CAB, EQ, MOD, DLY, RVB.

**NR — Gate** (always on)
- THRE: 18
Light gate. Only hum cleanup between phrases.
Kept low so the spring tail isn't chopped.

**PRE — off**
Donner Ultimate Comp on the board handles evening out the chug.

**DST — Green OD** (CTL)
- Gain: 18, Tone: 60, VOL: 68
- CTL Off = off, CTL On = on
Not a distortion. A level and grit push, like an early-60s Fender turned up for the solo.
Gain 18 puts just a little hair on the double-stops.
VOL 68 is the main job: the lead jumps about 3–4dB over the rhythm.
Tone 60 keeps the TS mid hump from making it sound like a 70s blues tone.

**AMP/CAB — NAM SnapTone, slot 61: TwinClean** (always on)
- Built from the `Tim R Fender TwinVerb Norm Bright (Twin Reverb)` NAM and the TWIN REVERB __ CLEAN (vulturized Twin) IR, combined into one snaptone.
- Real Fender Twin Reverb, Normal channel with Bright on, into the matching Twin cab IR (clean blend).
- Surf guitar is a bright, clean Fender. Twin Normal Bright is the right voice.
- Gain: 51, VOL: 50, Bass: 45, Middle: 50, Treble: 66
- Gain 51: a little over default. This part wants more push than the other TwinClean patches.
- Bass 45: low end pulled back a little.
- Middle 50: flat.
- Treble 66: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 61 directly.

**EQ — Guitar EQ 1** (always on)
- 125Hz: -3, 400Hz: -2, 800Hz: +1, 1.6kHz: +3, 4kHz: +3, VOL: 50
-3 at 125Hz and -2 at 400Hz clean out mud from the low-string chug.
+3 at 1.6kHz and 4kHz is the jangle and pick attack that makes the record sound "bright".
Same in both CTL states.

**MOD — off**
No modulation on the record.

**DLY — Slapback** (CTL)
- Mix: 20, Time: 110ms, F.Back: 8, Trail: On
- CTL Off = off, CTL On = on
Single, short repeat. Early-60s tape slap flavor on the lead.
Adds size to the double-stops without smearing fast lines.
Off for the rhythm. A slap on a fast 8th chug just clutters the groove.

**RVB — Spring** (always on)
- Mix: 26, Decay: 40, Trail: On
The surf ingredient. Fender tank splash on every stab.
Mix 26: audible, but backed off from surf-instrumental levels. The vocals are the focus on this record.

### CTL summary
- **CTL Off (rhythm):** NR + TwinClean snaptone + EQ + Spring. Bright, clean, splashy straight-8th chug.
- **CTL On (lead):** adds Green OD (level/grit push) + Slapback. The lead lines come forward with a little hair and a single slap repeat.
- Hit CTL for the intro lick, and before the instrumental break. Drop it as the next vocal line comes in.

## Full Pedalboard

Signal chain order: Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo King of Kings → Joyo Narcissus → Valeton GP-5.

**Flamma FS-08 Octave — bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch: off for the whole song
No octave voice. Straight Fender guitar.

**Donner Ultimate Comp — engaged always**
- COMP: 28, TONE: 60, LEVEL: 55, Mode: NORMAL
A light squeeze keeps the fast chug level from bar to bar.
COMP 28 keeps it transparent. You don't want to hear an obvious squash on a 1963 record.
TONE 60 and NORMAL mode. The amp's Bright switch is already supplying the top end.

**Donner Stylish Fuzz — bypassed**
- Footswitch: off
No fuzz on this record.

**Joyo King of Kings — both channels bypassed**
- Left: bypassed. Footswitch off. Parked at Volume 50, Gain 15, Tone 60, Clipping toggle: softer/asymmetric position, Feedback toggle: standard position.
- Right: bypassed. Footswitch off. Parked at Volume 50, Gain 25, Tone 60, Clipping toggle: softer/asymmetric position, Feedback toggle: standard position.
Neither channel is used. The GP-5's Green OD on CTL already does the lead push.
A board OD can't follow the GP-5 CTL switch. Running it always on would add grit to a rhythm that has to stay clean.

**Joyo Narcissus — bypassed**
- Mode: Vintage, Width: 30, Depth: 20, Rate: 25 (parked)
- Footswitch: off
No chorus. Chorus pedals didn't exist in 1963, and it would blur the spring.

**Valeton GP-5**
See GP-5 settings above.

The `.prst` only carries the GP-5's 9 modules. The pedalboard settings above are not stored in the file. Set them by hand.
