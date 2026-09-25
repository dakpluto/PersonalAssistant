# Honky Tonk Truth — Brooks & Dunn

Released in 1997 as a single from *The Greatest Hits Collection*. About 160 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
A fast dancehall two-beat. The bass is clean, bright, and articulate so the root-fifth reads at speed.
Built from the song's overall sound. I haven't verified the session bassist's exact rig.
Pick or fingers near the bridge. J forward for definition. Tone knob around 65%.

## Module chain

**NR — Gate**, always on.
THRE: 14.
Tight stops.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 45, Attack: 50, Clip: 40, VOL: 58.
Even, punchy notes at speed.

**DST — Bass OD**, on CTL.
Gain: 18, Blend: 22, VOL: 55, Bass: 50, Treble: 52.
Just a hint of hair under the solos and the last chorus. Blend 22 keeps it essentially clean.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Honky-tonk two-beat bass wants a clean, round thump. Classic B-15 territory.
- Gain: 49, VOL: 50, Bass: 55, Middle: 52, Treble: 55
- Gain 49: a little under default. This part wants less push than the other CleanB15 patches.
- Bass 55: a touch more low end.
- Middle 52: a touch more midrange.
- Treble 55: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2**, always on.
50Hz: 0, 120Hz: +2, 400Hz: -2, 800Hz: +1, 4.5kHz: 0, VOL: 52.
Punch at 120Hz and a mud cut at 400Hz, so fast notes don't smear.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry. Dancehall tight.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Main groove. Clean, bright, articulate. This is the resting state the patch loads into.
- **CTL on** — Solos and the last chorus. A hint of grit for extra push.

Engage under the solos and the final chorus.
