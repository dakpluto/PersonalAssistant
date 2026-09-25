# Dawn of Victory — Rhapsody

Rhapsody, symphonic power metal. BPM est., fast. Bass locks with double kick — tight, clear attack, upper-mid definition so the notes stay audible under a wall of guitars and orchestration. Built from the genre's general sound; exact rig on the recording not verified.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25.
Tight gate. Fast notes need clean gaps.

**PRE — COMP4**, always on.
Sustain: 55, Attack: 45, Clip: 50, VOL: 58.
COMP4 for attack control. Attack 45 lets the pick transient through, Sustain 55 evens out fast runs.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 40, VOL: 60, Bass: 45, Treble: 55.
Chorus edge. Blend 40 keeps the low end tight.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Power-metal bass has to cut through wall-of-guitar. Bright drive and Hartke clank do that.
- Gain: 45, VOL: 50, Bass: 50, Middle: 55, Treble: 55
- Gain 45: noticeably under default. This part wants less push than the other BrightSVT patches.
- Bass 50: flat.
- Middle 55: a touch more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +1, 400Hz: -3, 800Hz: +3, 4.5kHz: +3, VOL: 50.
400Hz cut clears mud. 800Hz and 4.5kHz up for cut against double kick and guitars.

**MOD — off.** No modulation.

**DLY — off.** No delay. Fast tempo, delay smears.

**RVB — off.** No reverb. Keeps it tight.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Verses and fast riffing. Bright, tight, compressed, no extra drive. This is the resting state the patch loads into.
- **CTL on** — Choruses. Bass OD adds thickness and edge.

Engage CTL for choruses. Back off for verses and fast passages needing clarity.
