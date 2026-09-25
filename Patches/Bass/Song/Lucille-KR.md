# Lucille-KR — Lucille by Kenny Rogers

Kenny Rogers, 1977. Mid-tempo, ~100 BPM est.
A story-song, not a rocker — Lucille walking out on her husband in a bar, told over a warm, unhurried country groove.
The bass job here is to sit under the story, not draw attention to itself.
GP-5 only, Sire fretless (Passive), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 30. Light gate, just enough to clean up noise on a passive fretless without choking the sustain of a held note.

**PRE — Micro Boost**, on CTL.
Gain: 30 when engaged.
Off for the verses — the story parts stay conversational and restrained.
On for the chorus/hook lines — a small nudge forward, not a different tone.

**DST — off.**
No drive anywhere. This is a clean, warm 70s country ballad.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- 1977 Nashville countrypolitan. Clean B-15 is exactly what those sessions used.
- Gain: 56, VOL: 50, Bass: 60, Middle: 55, Treble: 45
- Gain 56: noticeably over default. This part wants more push than the other CleanB15 patches.
- Bass 60: more low end.
- Middle 55: a touch more midrange.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — off.** The snaptone's own tone controls handle shaping; no need to stack another EQ stage.

**MOD — off.** No chorus/vibe — the fretless glide speaks for itself here, don't wash it out.

**DLY — off.** Straight through, no delay.

**RVB — Room**, on CTL.
Mix: 25, Decay: 30, Trail: false.
Off for the verses — dry and close, right in the room with the story.
On for the chorus, alongside the boost — a touch more air without turning it into a wash.

## CTL footswitch

Two modules on CTL: PRE (Micro Boost) and RVB (Room).

- **CTL off** — verse/narrative sound. Dry, warm, restrained. This is the resting state the patch loads into.
- **CTL on** — chorus/hook sound. Small boost plus a touch of room reverb, same core tone, just a little more presence.

Engage CTL going into the "Lucille" hook lines, back off for the story verses. Light-handed split — this song doesn't need a dramatic CTL contrast, just a gentle lift.
