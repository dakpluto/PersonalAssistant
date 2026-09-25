# Lady — Kenny Rogers

Kenny Rogers Greatest Hits, 1980. Written and produced by Lionel Richie. ~68 BPM.
Silky, soft, R&B-tinged ballad — this is Lionel Richie soul-pop production, not a country song. The bass job is pure support: warm, smooth, out of the way of the strings and vocal.
GP-5 only, Sire fretless (Active — the extra clarity keeps a low, silky part from disappearing under strings and keys), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20. Light — this is a quiet part, just enough to clean up between-note noise without choking sustain.

**PRE — off.** No boost anywhere. This tone doesn't need a push, it needs to stay smooth and even.

**DST — off.** No drive, ever, on this one.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Lionel Richie-produced 1980 ballad. Smooth, clean studio DI bass.
- Gain: 48, VOL: 50, Bass: 58, Middle: 50, Treble: 48
- Gain 48: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 58: Full but not boomy.
- Middle 50: Neutral, doesn't fight the strings/keys sitting in the same range.
- Treble 48: Soft on top, no fretless string-noise brightness.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: 0, 400Hz: -3, 800Hz: 0, 4.5kHz: +2, VOL: 55.
A light low-end lift, a small scoop around 400Hz to keep things silky rather than boxy, and a gentle lift at 4.5kHz so the fretless still reads clearly under the strings.

**MOD — B-Chorus**, always on, very light hand.
Depth: 12, Rate: 0.5Hz, VOL: 55.
Just enough shimmer to match the polished, slightly chorused feel of the production era — barely perceptible as a discrete effect.

**DLY — off.** No delay — straightforward supportive part.

**RVB — Hall**, on CTL.
Mix: 25, Decay: 45, Trail: true.
Off for the verses — dry, close, intimate. On for the bridge/final chorus swell, giving the part a touch more air and size without turning it into a wash.

## CTL footswitch

One module on CTL: RVB (Hall).

- **CTL off** — verse/main sound. Dry, close, warm. Resting state the patch loads into.
- **CTL on** — bridge/final-chorus lift. Same clean NAM tone, just a touch of hall reverb added for size.

This song barely builds — no need for a boost or gain-driven second state, just a subtle reverb lift for the one moment it opens up.
