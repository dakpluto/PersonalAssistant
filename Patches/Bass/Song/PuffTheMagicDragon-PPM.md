# Puff the Magic Dragon — Peter, Paul and Mary

From *Moving* (1963). About 110 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The record has an upright-style acoustic bass under the guitars, as far as I can tell. This patch is an upright stand-in: dark, woody, short notes with a quick decay.
Technique does half of it. Pluck with the side of your thumb over the neck. Palm-mute lightly at the bridge. Tone knob around 20%.
No CTL. An upright plays one tone all song. Adding a second sound would be decoration, not a better part.

## Module chain

**NR — Gate**, always on.
THRE: 18.
Set higher than usual on purpose. THRE 18 shortens each note's tail, which gives an upright-style decay.

**PRE — COMP (Ross)**, always on.
Sustain: 28, VOL: 58.
Light. The thump should stay dynamic.

**DST — off.** No grit.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- 1963 folk-pop. A clean B-15 is period-correct and never gets in the vocals' way.
- Gain: 47, VOL: 50, Bass: 58, Middle: 55, Treble: 22
- Gain 47: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 58: more low end.
- Middle 55: a touch more midrange.
- Treble 22: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: -2, 120Hz: +2, 400Hz: +3, 800Hz: -1, 4.5kHz: -8, VOL: 52.
+3 at 400Hz for wood. -8 at 4.5kHz kills all electric zing. -2 at 50Hz, since an upright has less deep sub than a 5-string.

**MOD — off.**

**DLY — off.**

**RVB — Room**, always on.
Mix: 12, Decay: 22, Trail: on.
A small room, like a 60s folk session.

## CTL footswitch

Nothing is assigned to CTL.

- **CTL off** — Always. Woody upright-style thump. This is the resting state the patch loads into.
- **CTL on** — Not used. No module is assigned to CTL on this patch.

Leave CTL alone. This one's a one-sound patch by design.
