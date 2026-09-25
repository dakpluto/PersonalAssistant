# If You See Her (Rhythm Guitar) — Brooks & Dunn

"If You See Him/If You See Her" (1998). It's a duet with Reba McEntire, and the title track of Brooks & Dunn's *If You See Her*. About 70 BPM, est.
A late-90s Nashville power ballad. Polished, with clean electric arpeggios and a big lift in the choruses.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Position 4 (neck+middle) for the arpeggios. Neck or bridge for the lead.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Arpeggios need to ring.

**PRE — COMP (Ross)**, always on.
Sustain: 32, VOL: 55.
Light leveling so the arpeggios stay even.

**DST — Green OD (TS-808)**, on CTL.
Gain: 30, Tone: 55, VOL: 70.
The lead push. Gain 30 into a solid-state clean gives a smooth, polished lead. VOL 70 lifts it over the vocal.

**AMP/CAB — NAM SnapTone, slot 62: NashClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the Origin Effects Brown Deluxe 1x12 Medium Mix IR, combined into one snaptone.
- Real 1965 Fender Deluxe Reverb at its cleanest setting, into the Origin Effects Brown Deluxe 1x12.
- Clean, sparkly country ballad. Cleanest Deluxe Reverb.
- Gain: 50, VOL: 50, Bass: 46, Middle: 50, Treble: 55
- Gain 50: the capture as built.
- Bass 46: low end pulled back a little.
- Middle 50: flat.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 62 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -3, 500Hz: 0, 1kHz: 0, 3kHz: +1, 6kHz: -1, VOL: 50.
Low cut for clarity. A small presence lift.

**MOD — A-Chorus**, always on.
Depth: 18, Rate: 0.6, Tone: 50.
Light-hand chorus, per the house rule: Depth 18, 0.6Hz. Just a polished sheen under the arpeggios.

**DLY — Analog**, on CTL.
Mix: 18, Time: 430ms, F.Back: 22, Trail: on.
About an eighth note at 70 BPM. Soft repeats behind the fills.

**RVB — Hall**, always on.
Mix: 20, Decay: 45, Trail: on.
A polished hall. Mix 20.

## CTL footswitch

On CTL: DST (Green OD), DLY (Analog).

- **CTL off** — Rhythm. Pristine, lightly chorused clean arpeggios with hall. This is the resting state the patch loads into.
- **CTL on** — Lead. A smooth Green OD push plus analog repeats for the fills and the solo.

Engage CTL for the fills between Ronnie's and Reba's lines, and for the solo.
