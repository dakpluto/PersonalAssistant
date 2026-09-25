# Only in America — Brooks & Dunn

From *Steers & Stripes* (2001). About 120 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
An anthem groove: driving eighths on the root, big on the chorus. The tone needs rock weight but should stay clean-ish.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
Pick or fingers. A pick suits the driving eighths. Both pickups up. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Catches hum on the stops.

**PRE — COMP (Ross)**, always on.
Sustain: 42, VOL: 58.
Holds the driving eighths even.

**DST — Bass OD**, on CTL.
Gain: 28, Blend: 30, VOL: 55, Bass: 50, Treble: 50.
Grit for the big choruses. Blend 30 keeps the low end clean.

**AMP/CAB — NAM SnapTone, slot 53: CleanSVT** (always on)
- Built from the `SVT CLEAN (SVT-CL)` NAM and the Apg810 IR, combined into one snaptone.
- Real Ampeg SVT-CL preamp on its clean setting, into the Apg810 8x10 IR.
- Big arena-country. Clean SVT gives more weight than a B-15.
- Gain: 50, VOL: 50, Bass: 55, Middle: 56, Treble: 50
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 56: more midrange.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 53 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: -1, VOL: 52.
Weight at 50Hz and 120Hz, mud cut at 400Hz, attack at 800Hz.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 28, Trail: on.
A small room so the bass joins the big chorus. Mix 12 stays tight.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, driving SVT. This is the resting state the patch loads into.
- **CTL on** — Choruses. Light grit plus a small room for the anthem lift.

Engage at each "Only in America" chorus. Step off for the verses.
