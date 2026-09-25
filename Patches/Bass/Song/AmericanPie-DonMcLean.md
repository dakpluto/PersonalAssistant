# American Pie — Don McLean

From *American Pie* (1971). About 138 BPM for the band sections, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A warm early-70s folk-rock bass that follows the changes with melodic walk-ups. It gets more active and driving as the song builds.
Built from the song's overall sound. I haven't verified the exact bass rig on the record.
Fingers over the neck. P pickup dominant. Tone knob around 45%.

## Module chain

**NR — Gate**, always on.
THRE: 10.
Low.

**PRE — COMP (Ross)**, always on.
Sustain: 36, VOL: 58.
Even walk-ups.

**DST — Bass OD**, on CTL.
Gain: 18, Blend: 20, VOL: 55, Bass: 52, Treble: 48.
A hint of hair for the bigger, driving later verses. Blend 20.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Early-70s studio bass: a B-15 miked in the room. Round and clean under the acoustic strum.
- Gain: 49, VOL: 50, Bass: 58, Middle: 52, Treble: 40
- Gain 49: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 58: more low end.
- Middle 52: a touch more midrange.
- Treble 40: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +2, 400Hz: 0, 800Hz: +1, 4.5kHz: -3, VOL: 52.
Warm with a touch of 800Hz so walk-ups read.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry 70s rhythm section.

## CTL footswitch

On CTL: DST (Bass OD, hint).

- **CTL off** — Early verses. Warm, round, melodic. This is the resting state the patch loads into.
- **CTL on** — The driving later verses and final choruses. A hint of push.

Engage once the band really digs in, around the "Jack be nimble" section, and hold it through the big choruses.
