# Low Rider — War

Why Can't We Be Friends?, 1975. 106 BPM, est.
B.B. Dickerson's bass line is the entire song — that descending riff has to sit warm, round, and laid-back, not punchy or aggressive. This is a muted, almost palm-muted P-bass sound, not a bright modern tone.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 15. Very light — clean, low-gain tone doesn't pick up much noise, just enough to tidy up the rests between phrases of the riff.

**PRE — COMP (Ross Compressor)**, always on.
Sustain: 45, VOL: 60.
Lighter squash than a percussive funk patch — Low Rider's feel is loose and behind-the-beat, not tightly gated. Just enough compression to even out the riff's repeats without killing the laid-back dynamics.

**DST — Bass OD**, on CTL.
Gain: 22, Blend: 45, VOL: 62, Bass: 50, Treble: 45.
Off for the main groove — clean B-15 tone through the whole verse riff.
On for the instrumental hook/outro breakdown section, where the band opens up — a light push adds a bit more weight and presence without turning the tone aggressive.

**AMP/CAB — NAM SnapTone, slot 60: SoulB18** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 7.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N at volume 7.5, where the tubes start to growl, into the Apg115 B-15 cab IR.
- Warm, girthy 70s soul-funk. A cranked B-15 is rounder and boxier than an 8x10, which is what the riff wants.
- Gain: 48, VOL: 50, Bass: 65, Middle: 45, Treble: 35
- Gain 48: a little under default. This part wants less push than the other SoulB18 patches.
- Bass 65: Deep, full low end, the foundation of the riff.
- Middle 45: Pulled back from a typical funk-snap 800Hz setting. Low Rider isn't a percussive pop tone, it's smooth and rounded.
- Treble 35: Dark on purpose, close to a muted/flatwound feel even on the roundwound P/J.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 60 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +4, 120Hz: +3, 400Hz: +2, 800Hz: -3, 4.5kHz: -4, VOL: 50.
Low end reinforced and warmed through 50Hz-400Hz, then rolled off through 800Hz and 4.5kHz — that's the muted, rounded top end this riff needs. No funk snap, no string zing.

**MOD — off.** No modulation — this tone is about weight and roundness, not movement.

**DLY — off.** Straight through, no delay — the riff repeats on its own, doesn't need help.

**RVB — Room**, on CTL.
Mix: 15, Decay: 22, Trail: off.
Off for the main groove — dry, right on top of the beat, same as the record's tight low end.
On alongside the OD push for the instrumental hook — a touch of room air to open the tone up when the band stretches out.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Room).

- **CTL off** — main verse/riff groove. Warm, dark B-15 tone, dry and laid-back. This is the resting state the patch loads into.
- **CTL on** — instrumental hook/outro breakdown. Light OD push plus a touch of room, same amp tone underneath, a bit more weight and size for the open section.

Engage CTL for the instrumental/outro stretch, back off for the main verse riff.
