# Spider-Man Theme (1967 Cartoon) (Rhythm Guitar) — Bob Harris & Paul Francis Webster

Theme from the 1967 *Spider-Man* animated series. Music by Bob Harris, lyrics by Paul Francis Webster. Fast swing, est.
"Spider-Man, Spider-Man, does whatever a spider can."
As far as I know, the original is a brassy big-band vocal arrangement, not a guitar record. So this patch translates the song into the 60s TV-theme guitar vocabulary: surf and spy twang for the comping and the minor-key riff, and a driven tone for the melody that nods to the well-known rock covers.
Instrument: Stratocaster (HSS). Middle or position 2 for twangy comping and the riff. Bridge humbucker for the driven melody.
GP-5 only, Stratocaster (HSS), no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 20.
Keeps the Super OD quiet between stabs. It doesn't clip the staccato comping.

**PRE — off.**

**DST — Super OD (SD-1)**, on CTL.
Gain: 45, Tone: 55, VOL: 66.
Garage-rock grit for the melody. The SD-1's asymmetric clipping into a bright clean amp is punchy and a little raw, which is good for the rock-cover energy.

**AMP/CAB — NAM SnapTone, slot 61: TwinClean** (always on)
- Built from the `CLEANEST - Fender Deluxe Reverb 1965 [Hyper Accuracy]` NAM and the TWIN REVERB __ CLEAN (vulturized Twin) IR, combined into one snaptone.
- 1965 blackface Deluxe Reverb at its cleanest setting. It shares the Twin's blackface preamp circuit, so here it's the amp half of a Twin clean, into a real Twin 2x12 (JBL D120F) IR. Rebuilt 2026-09-26: the original TwinClean used the Tim R Twin Normal-channel capture, which was dropped for being too quiet.
- 60s TV-surf guitar. Bright, clean Fender.
- Gain: 51, VOL: 75, Bass: 48, Middle: 50, Treble: 60
- Gain 51: a little over default. This part wants more push than the other TwinClean patches.
- Bass 48: low end pulled back a little.
- Middle 50: flat.
- Treble 60: more top end.
- VOL 75: the level Michael set for this snaptone in the 2026-10-01 VOL audit. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 61 directly.

**EQ — Guitar EQ 2**, always on.
100Hz: -2, 500Hz: 0, 1kHz: +1, 3kHz: +2, 6kHz: -1, VOL: 50.
Tight low end so fast comping doesn't boom. The 3kHz lift gives snap. -1 at 6kHz takes the edge off the Bright switch.

**MOD — off.**

**DLY — Slapback**, always on.
Mix: 16, Time: 110ms, F.Back: 8, Trail: on.
A single 110ms slap. Classic 60s TV and spy-guitar thickening. It doesn't depend on tempo, so it works at any count-off.

**RVB — Spring**, always on.
Mix: 22, Decay: 45, Trail: on.
Surf-adjacent spring drip. It stays wet on the driven melody too. That's intentional: that splash is the 60s-theme vibe.

## CTL footswitch

On CTL: DST (Super OD).

- **CTL off** — Rhythm. Twangy clean with slapback and spring. Use it for the swing comping, the riff, and the band hits. This is the resting state the patch loads into.
- **CTL on** — Lead. Super OD into the same Twin. Use it for the vocal melody played on guitar ("Here comes the Spider-Man!") and any breaks.

Engage CTL for the melody. Step off to comp under a vocal or another soloist.
