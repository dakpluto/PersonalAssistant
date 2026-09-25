# Heads Carolina, Tails California (Rhythm Guitar) — Jo Dee Messina

Jo Dee Messina, 90s country-pop. About 118 BPM, est. Bright, bouncy country-rock rhythm guitar: a crisp, slightly crunchy strum with a little twang, sitting on the groove. Built from the genre's general sound; the exact guitar and amp on the record are not verified.
Instrument: Stratocaster (HSS). Use the bridge or bridge-and-middle position for the twang.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 15.
Bright, edge-of-breakup tone. 15 quiets single-coil noise between strums.

**PRE — COMP**, always on.
Sustain: 40, VOL: 55.
Country-style compression. 40 evens out the strums and adds snap.

**DST — Green OD**, on CTL.
Gain: 30, Tone: 60, VOL: 62.
On CTL. Pushes the amp for a bigger chorus strum. Tone 60 keeps the twang.

**AMP/CAB — NAM SnapTone, slot 63: EdgyTwang** (always on)
- Built from the `EDGY - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Deluxe Reverb at the "edgy" setting, just starting to break up, into the Brown Deluxe 1x12.
- Country-pop twang with a bit of grit. Edgy Deluxe.
- Gain: 51, VOL: 50, Bass: 45, Middle: 55, Treble: 58
- Gain 51: a little over default. This part wants more push than the other EdgyTwang patches.
- Bass 45: low end pulled back a little.
- Middle 55: a touch more midrange.
- Treble 58: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 63 directly.

**EQ — Guitar EQ 1**, always on.
125Hz: -1, 400Hz: -1, 800Hz: 0, 1.6kHz: +2, 4kHz: +2, VOL: +50.
Slight low cut for a tight strum. +2 at 1.6kHz and 4kHz adds the twang and pick snap.

**MOD — off.** No modulation. The strum stays direct.

**DLY — Slapback**, always on.
Mix: 12, Time: 110, F.Back: 8, Trail: off.
Always on. A short slap gives that country strum some depth. Mix 12 and F.Back 8 keep it to a single quiet echo.

**RVB — Spring**, always on.
Mix: 15, Decay: 25, Trail: off.
Always on. Spring reverb is the classic country pairing. Short decay keeps the strum tight.

## CTL footswitch

On CTL: DST (Green OD).

- **CTL off** — Verse rhythm. Crisp, clean-crunch strum with a light slapback and spring reverb. This is the resting state the patch loads into.
- **CTL on** — Chorus rhythm. Green OD pushes the amp for a bigger, fatter strum.

Engage CTL for the chorus. Back off for the verse.
