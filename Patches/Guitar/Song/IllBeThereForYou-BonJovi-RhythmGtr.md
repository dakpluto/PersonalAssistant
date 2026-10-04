# I'll Be There for You (Rhythm Guitar) — Bon Jovi

From *New Jersey* (1988). About 68 BPM, est.
A late-80s power ballad. Chorused, lightly crunchy chords and arpeggios under the verses, then Richie Sambora's big, singing solo.
Sambora is widely associated with Marshalls in this era. I haven't verified the exact amp on this track.
Instrument: Stratocaster (HSS). Position 2 or 4 for the verses. Bridge humbucker for the solo.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Catches the Marshall's hiss between phrases. The solo's sustain gets well above it.

**PRE — off.** The amp's own compression is enough for a ballad.

**DST — Super OD (SD-1)**, on CTL.
Gain: 40, Tone: 55, VOL: 68.
The solo push. An SD-1 into a light-crunch JCM800 gives the hot, singing 80s lead. VOL 68 lifts the solo over the band.

**AMP/CAB — NAM SnapTone, slot 80: JCM800Clean** (always on)
- Built from the `JCM800 2203 - P5 B5 M5 T5 MV5 G3 - AZG - 700` NAM and the BlendOfAll_dc (Marshall 1960AV) IR, combined into one snaptone.
- Real JCM800 2203 at Gain 3, light crunch, into a Marshall 4x12.
- Classic 80s Marshall rhythm. Light crunch for the verses. The SD-1 takes it to lead.
- Gain: 42, VOL: 60, Bass: 50, Middle: 55, Treble: 55
- Gain 42: under the capture. It keeps the verses at the edge of clean. Roll the guitar volume back a little for the cleanest arpeggios.
- Bass 50: flat.
- Middle 55: more midrange, for that 80s Marshall voice.
- Treble 55: a touch more top end for the chorus shimmer.
- VOL 60: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 80 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +2, 3kHz: +1, 6kHz: -1, VOL: 50.
+2 at 1kHz puts the solo's singing midrange forward. Low cut keeps the ballad from getting woolly.

**MOD — A-Chorus**, always on.
Depth: 20, Rate: 0.7, Tone: 55.
The late-80s ballad sheen. Still a light hand: Depth 20 sits under the tone, not on top of it.

**DLY — Analog**, on CTL.
Mix: 22, Time: 662ms, Feedback: 28, Trail: on.
A dotted eighth at 68 BPM. The long, smeared repeats behind the solo.

**RVB — Plate**, always on.
Mix: 18, Decay: 45, Damp: 40, Trail: on.
A big 80s plate. Damp 40 keeps the top from getting splashy.

## CTL footswitch

On CTL: DST (Super OD), DLY (Analog).

- **CTL off** — Rhythm. Chorused, lightly crunchy Marshall for the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. SD-1-boosted Marshall plus dotted-eighth analog delay for the solo.

Engage CTL for the solo. Drop back after it.
