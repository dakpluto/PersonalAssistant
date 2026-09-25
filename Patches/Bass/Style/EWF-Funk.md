# Earth, Wind & Fire Style Funk Bass

Style patch. ~126 BPM (September / Let's Groove territory).
GP-5 only, P/J bass, no pedalboard.

## The style

Verdine White is the reference: a busy, syncopated fingerstyle funk part that stays locked with the drums and a big horn section.
The tone is bright, punchy, and tightly compressed, with clear note definition. It has to cut through horns and a stacked rhythm section without getting boomy.
Other players in the same lane: Louis Johnson (Brothers Johnson), Rocco Prestia (Tower of Power), and Larry Graham (Graham Central Station) on the slap side.
This patch gives you two sounds: Verdine's fingerstyle pocket in the base state, and a scooped Louis Johnson-style thumb-and-pop tone on CTL.

## Module chain

**NR — Gate**, always on.
THRE: 15. Tidies up the rests. Funk depends on silence between notes.

**PRE — COMP4 (Keeley C4)**, always on.
Sustain: 55, Attack: 45, Clip: 30, VOL: 60.
Fairly firm squash for the even, locked-in level funk needs.
Attack at 45 lets the initial transient through first, so notes still pop.

**DST — off.** Funk bass stays clean. No grit.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Verdine White's tone is snappy and hi-fi. A DI keeps it that way, with no cab coloration.
- Gain: 48, VOL: 50, Bass: 55, Middle: 55, Treble: 60
- Gain 48: a little under default. This part wants less push than the other AvalonAD2022 patches.
- Bass 55: a touch more low end.
- Middle 55: a touch more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 2**, on CTL.
50Hz: +4, 120Hz: +1, 400Hz: -5, 800Hz: -1, 4.5kHz: +5, VOL: 58.
This is the slap scoop. Deep lows for the thumb, a 400Hz cut to remove the boxiness, and 4.5kHz up for the pop and string zing.
VOL 58 makes up for the level lost to the scoop, so the slap sound doesn't drop in the mix.

**MOD — off.** Verdine's tone is dry and direct.

**DLY — off.**

**RVB — off.** Funk bass wants to be dry and on top of the beat.

## CTL footswitch

One module on CTL: EQ (Bass EQ 2).

- **CTL off**: fingerstyle pocket, the Verdine White sound. Mid-forward, bright, compressed. This is the resting state.
- **CTL on**: slap/pop feature. The scooped EQ gives a Louis Johnson thumb-and-pop tone for breakdowns and bass features.

Stomp it when you switch from fingers to thumb. Stomp it off when you go back to the pocket.
