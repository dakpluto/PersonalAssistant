# Spider-Man Theme (1967 Cartoon) — Bob Harris & Paul Francis Webster

Theme from the 1967 *Spider-Man* animated series. Music by Bob Harris, lyrics by Paul Francis Webster. Fast swing, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The original is a 60s big-band arrangement. I haven't verified whether the bass on it is upright or electric, but the part plays like a jazz line: swung, walking-leaning, locked with the brass hits.
The tone target is a dark, short, thumpy 60s low end that sounds close to an upright. CTL gives you a second, driven sound for the rock-cover treatment.
Play with your fingers over the neck. Solo the P pickup. Tone knob around 30% for the vintage thump. Palm-muting near the bridge gets you closer to upright-style decay.

## Module chain

**NR — Gate**, always on.
THRE: 12. Low. Just catches hum between notes.

**PRE — COMP (Ross)**, always on.
Sustain: 30, VOL: 58.
Evens out the walking line lightly. Staccato notes keep their bounce.

**DST — Bass OD**, on CTL.
Gain: 35, Blend: 35, VOL: 55, Bass: 50, Treble: 55.
Growl for the rock-cover version. Blend 35 keeps the clean fundamental. Treble 55 lets the grit cut through even with the dark amp settings.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Mid-60s TV-orchestra bass. A B-15 is the studio amp of that era.
- Gain: 48, VOL: 50, Bass: 60, Middle: 50, Treble: 30
- Gain 48: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 60: more low end.
- Middle 50: flat.
- Treble 30: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +3, 400Hz: +1, 800Hz: -1, 4.5kHz: -5, VOL: 52.
Weight at 120Hz, a touch of 400Hz wood, and the top cut hard for the vintage roll-off.

**MOD — off.** **DLY — off.**

**RVB — Room**, always on.
Mix: 10, Decay: 25, Trail: on.
A tiny room so it sounds like a band in a studio, not DI. Small enough that it doesn't blur fast lines.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — The 1967 original. Dark, thumpy, swung. This is the resting state.
- **CTL on** — Rock-cover push. Bass OD growl for a punk or garage take on the theme, or just to hit the final "Here comes the Spider-Man!" harder.

Stay on CTL off for the straight swing version. Stomp it for a rock arrangement or the big ending. For the rock take, open the tone knob to about 60%.
