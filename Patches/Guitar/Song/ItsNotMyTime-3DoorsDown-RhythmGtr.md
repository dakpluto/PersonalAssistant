# It's Not My Time (Rhythm Guitar) — 3 Doors Down

From *3 Doors Down* (2008). About 100 BPM, est.
Driving post-grunge. Chunky, palm-muted high-gain rhythm through the verses, big open chords in the chorus, and a short melodic lead.
Built from the song's overall sound. I haven't verified the exact guitars and amps on the record.
Instrument: Stratocaster (HSS). Bridge humbucker throughout.
GP-5 only, Stratocaster (HSS), no pedalboard.

## AMP/CAB: RectifierCrunch snaptone (slot 72)

A real Rectifier crunch/rhythm capture into a Mesa V30 4x12. That's the go-to 2000s post-grunge voice, captured from the real amp instead of modeled.
Moved here 2026-10-04, when Michael cleared G12 for high-gain patches ("sounded fantastic").

## Module chain

**NR — Gate**, always on.
THRE: 38.
High-gain palm mutes need hard stops. 38 kills the hiss without cutting off sustained chorus chords.

**PRE — Boost (EP Booster)**, on CTL.
Gain: 50, +3dB: on, Bright: off.
The lead push. More level and sustain for the solo. Bright off keeps it smooth.

**DST — Green OD (TS-808)**, always on.
Gain: 10, Tone: 55, VOL: 70.
The classic tightening trick. Low gain, high level. It trims the Rectifier's low end so the palm mutes stay tight. It also adds the push a crunch-channel capture needs to reach full rhythm gain.

**AMP/CAB — NAM SnapTone, slot 72: RectifierCrunch** (always on)
- Built from the `1. MESA DUAL RECTIFIER 2025 | CRUNCH | RHYTHM #1` NAM and the `V30 UR 4FB 4x12 SM57 0.50in 0.0in 7603` (Mesa V30) IR, combined into one snaptone.
- Real Mesa Dual Rectifier, crunch/rhythm setting, into a Mesa 4x12 with V30s.
- Gain: 55, VOL: 70, Bass: 52, Middle: 55, Treble: 55
- Gain 55: a little over the capture. With the TS in front it reaches full post-grunge rhythm gain.
- Bass 52: a touch more low end. The TS already trims the flub.
- Middle 55: keeps it out of scooped-metal territory. This is radio rock.
- Treble 55: a touch more bite.
- VOL 70: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 72 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -1, 500Hz: -2, 1kHz: +1, 3kHz: +2, 6kHz: -2, VOL: 50.
-2 at 500Hz clears the boxiness. +2 at 3kHz for bite. -2 at 6kHz takes off the fizz.

**MOD — off.**

**DLY — Analog**, on CTL.
Mix: 20, Time: 450ms, Feedback: 25, Trail: on.
A dotted eighth at 100 BPM, behind the lead.

**RVB — Room**, always on.
Mix: 12, Decay: 30, Trail: on.
A small room. High gain doesn't want much space.

## CTL footswitch

On CTL: PRE (Boost), DLY (Analog).

- **CTL off** — Rhythm. Tight, mid-forward Rectifier crunch for the verses and choruses. This is the resting state the patch loads into.
- **CTL on** — Lead. Boost plus dotted-eighth delay for the solo.

Engage CTL for the lead. Drop back for the rhythm.

## Previous version (Mess DualV + V30112, before 2026-10-04)

Moved to RectifierCrunch on 2026-10-04. To go back, restore these values:
- AMP Mess DualV: Gain 55, PRES 52, VOL 60, Bass 52, Middle 55, Treble 55.
- CAB User IR 10 (V30112): VOL 60. JSON `"ir": {"name": "V30112"}`, no `nam` field.
- Everything else is unchanged.
