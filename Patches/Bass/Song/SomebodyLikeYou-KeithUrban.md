# Somebody Like You — Keith Urban

From *Golden Road* (2002). About 120 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
Driving eighth notes that push the whole song forward. Clean, punchy, and locked to the kick.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
A pick suits the driving eighths. Fingers work too, played near the bridge. P forward. Tone knob around 60%.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low.

**PRE — COMP (Ross)**, always on.
Sustain: 45, VOL: 58.
Keeps the eighth notes at one level.

**DST — Bass OD**, on CTL.
Gain: 18, Blend: 22, VOL: 56, Bass: 52, Treble: 50.
Barely-there grit for the choruses. Mostly a feel change, not a distorted sound.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5` NAM (B-18N) and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Clean B-15 thump. The Nashville default.
- Gain: 50, VOL: 80, Bass: 55, Middle: 52, Treble: 50
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 52: a small lift so the eighths read.
- Treble 50: flat.
- VOL 80: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: -1, 800Hz: +2, 4.5kHz: 0, VOL: 52.
Punch at 120Hz and definition at 800Hz. That's where driving eighths live.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 10, Decay: 28, Trail: on.
A small room for the chorus lift.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, punchy, driving. This is the resting state the patch loads into.
- **CTL on** — Choruses. A touch of grit and room.

Engage at the chorus. Off for the verses.
