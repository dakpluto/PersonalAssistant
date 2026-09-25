# Hard Workin' Man — Brooks & Dunn

Title track of *Hard Workin' Man* (1993). About 150 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A fast two-beat and eighth-note drive. Clean, punchy, with a lot of attack so every note is defined at speed.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
A pick suits this one. Both pickups up, J slightly forward. Tone knob around 65%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Tight stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 45, Attack: 50, Clip: 40, VOL: 58.
Evens out fast picked notes. Attack 50 keeps the pick transient.

**DST — off.** No drive. Country bass stays clean.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Nashville studio bass through a clean B-15. The shuffle stays tight and round.
- Gain: 50, VOL: 50, Bass: 56, Middle: 50, Treble: 55
- Gain 50: the capture as built.
- Bass 56: more low end.
- Middle 50: flat.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**, always on.
33Hz: 0, 150Hz: +1, 600Hz: +1, 2kHz: +2, 8kHz: 0, VOL: 52.
A bit of 600Hz and 2kHz so the notes read at 150 BPM. The sub stays flat so it doesn't get boomy.

**MOD — off.**

**DLY — off.**

**RVB — Room**, on CTL.
Mix: 12, Decay: 25, Trail: on.
A small room lift for the choruses.

## CTL footswitch

On CTL: RVB (Room).

- **CTL off** — Verses. Dry, tight, punchy. This is the resting state the patch loads into.
- **CTL on** — Choruses. A small room so the bass opens up with the band.

Engage at the choruses. Off for the verses and solos.
