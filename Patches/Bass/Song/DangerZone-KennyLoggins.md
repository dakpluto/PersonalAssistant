# Danger Zone — Kenny Loggins

From the *Top Gun* soundtrack (1986). About 158 BPM, est.
Bass: Harley Benton P/J, 5-string, passive. GP-5 only.
The low-end pulse on the record sounds sequenced-synth, typical of a Moroder production. On bass that becomes relentless, even picked eighths with a synthetic edge.
The CTL trick: Octa adds a sub-octave for a fat, synth-wall chorus.
Use a pick with a consistent down-pick. Both pickups up. Tone knob around 70%. Mute hard with the fretting hand so the eighths are staccato like a sequencer.

## Module chain

**NR — Gate**, always on.
THRE: 20.
THRE 20 chops the tails so the eighths stay staccato, like a sequencer.

**PRE — OCTA (polyphonic octave)**, on CTL.
Low: 45, High: 0, Dry: 80.
A sub-octave under the pulse, Low 45 and Dry 80. Single-note eighths track cleanly. Avoid chords with it on.

**DST — Bass OD**, on CTL.
Gain: 30, Blend: 30, VOL: 55, Bass: 50, Treble: 55.
Grit on top of the sub for the synth-wall chorus.

**AMP/CAB — NAM SnapTone, slot 52: AvalonAD2022** (always on)
- Built from the `Avalon - 38 dB - Chan 1 (Avalon AD2022)` NAM and no cab IR (straight DI), combined into one snaptone.
- Avalon AD2022 Class A preamp at 38 dB. A studio DI, not an amp: no speaker coloration.
- Mid-80s soundtrack bass sits like a DI: clean and tight under the synths.
- Gain: 50, VOL: 50, Bass: 55, Middle: 52, Treble: 60
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 52: a touch more midrange.
- Treble 60: more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 52 directly.

**EQ — Bass EQ 1**, always on.
33Hz: +2, 150Hz: 0, 600Hz: -3, 2kHz: +3, 8kHz: +1, VOL: 52.
Sub up, a 600Hz scoop, and a 2kHz lift give the synthetic curve.

**MOD — off.**

**DLY — off.**

**RVB — off.** Dry. Sequencers don't have room reverb.

## CTL footswitch

On CTL: PRE (Octa), DST (Bass OD).

- **CTL off** — Verses. Tight, bright, picked eighth-note pulse. This is the resting state the patch loads into.
- **CTL on** — Choruses ("Highway to the Danger Zone"). Sub-octave plus grit for a fat, synth-like wall.

Engage at each chorus. Off for the verses.
