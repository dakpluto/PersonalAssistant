# I'll Be There for You — Bon Jovi

From *New Jersey* (1988). About 68 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A polished late-80s ballad bass. Smooth, even roots under the verses that lift with the band in the chorus.
Built from the song's overall sound. I haven't verified the exact rig on this track.
Fingers. Both pickups up. Tone knob around 70% for the bright, polished 80s top.

## Module chain

**NR — Gate**, always on.
THRE: 12.
Low. Long notes need to decay naturally.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 50, Attack: 45, Clip: 35, VOL: 56.
The glued, even level of an 80s studio bass. Attack 45 keeps the front of each note.

**DST — Bass OD**, on CTL.
Gain: 20, Blend: 25, VOL: 55, Bass: 52, Treble: 52.
Just a little hair for the big choruses. Blend 25 keeps it mostly clean.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1` NAM (Avalon AD2022), combined into one snaptone with no cab IR.
- A real Avalon AD2022 studio preamp. The hi-fi DI sound of 80s and 90s studio bass.
- Polished 80s ballad. The DI is the right call for a record this produced.
- Gain: 50, VOL: 75, Bass: 52, Middle: 48, Treble: 55
- Gain 50: the capture as built.
- Bass 52: a touch more low end.
- Middle 48: a slight mid scoop, for the polished 80s shape.
- Treble 55: more top end.
- VOL 75: the level Michael set for this snaptone in the 2026-10-02 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +1, 120Hz: +1, 400Hz: -2, 800Hz: +1, 4.5kHz: +2, VOL: 52.
The 80s smile in small doses. A mud cut at 400Hz, a little air at 4.5kHz.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 32, Trail: on.
A small room for the chorus lift.

## CTL footswitch

On CTL: DST (Bass OD), RVB (Room).

- **CTL off** — Verses. Clean, smooth, polished. This is the resting state the patch loads into.
- **CTL on** — Choruses. A little hair and a small room.

Engage at the chorus. Off for the verses.
