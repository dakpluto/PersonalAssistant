# Waiting on the World to Change — John Mayer

From *Continuum* (2006). About 88 BPM, est.
Instrument: Sire V7 2nd Gen 5-string fretless, flatwound. Run Passive. GP-5 only.
A deep, muted soul pocket. As far as I know, Pino Palladino played on much of *Continuum*, and his signature is a short, thumpy, flatwound note that sits behind the beat.
The Sire's flatwounds give that thump for real. No EQ trickery needed to fake it.
Passive, not Active. Pino's sound is a vintage passive thump. The passive tone knob rolled back gets there naturally. Active's extra headroom and hi-fi top pull away from it.
Neck pickup soloed or strongly favored. Passive tone knob around 35%. Fingers over the neck, with light palm-muting for short notes.
Fretless mwah should stay subtle. Plucking over the neck keeps it down. An occasional slide into a note is a nice, vocal soul touch. Watch intonation on the sustained roots.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Low. Fretless notes and slides need to decay naturally.

**PRE — COMP (Ross)**, always on.
Sustain: 38, VOL: 58.
Even, thumpy notes. It also evens out level jumps from fretless slides.

**DST — off.** No grit.

**AMP/CAB — NAM SnapTone, slot 54: FullB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 5 (B-18N)` NAM and the Apg115410 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 5, warmer and fuller than the clean capture, into the Apg115410 (1x15 + 4x10) IR.
- Pino Palladino-style warmth. The fuller B-15 is the closest thing to his vintage-P sound here.
- Gain: 47, VOL: 50, Bass: 58, Middle: 52, Treble: 35
- Gain 47: a little under default. This part wants less push than the other FullB15 patches.
- Bass 58: more low end.
- Middle 52: a touch more midrange.
- Treble 35: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 54 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: +1, 800Hz: 0, 4.5kHz: -3, VOL: 52.
120Hz thump and 400Hz wood. 800Hz stays flat so the fretless mwah isn't accented. -3 at 4.5kHz is a gentle trim. The flats do the rest.

**MOD — off.** No chorus. Fretless plus chorus is a different, more Egan-like sound. This one stays dry soul.

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 10, Decay: 25, Trail: on.
A tiny room for the choruses.

## CTL footswitch

On CTL: RVB (Room).

- **CTL off** — Verses. A dead, deep, muted soul pocket. This is the resting state the patch loads into.
- **CTL on** — Choruses. A small room so the thump blooms slightly.

Engage at the choruses. Mostly this patch lives in CTL off.
