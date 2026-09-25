# Papa Was a Rollin' Stone — The Temptations (Bass)

Bass: Harley Benton P/J, 5-string, passive. Full board.
1972. Norman Whitfield production, Funk Brothers session band. ~120 BPM (estimate).
The bass line *is* the song. One ostinato, repeated for 7 minutes on the single and close to 12 on the album version.
The bass part is generally credited to Bob Babbitt.
The target is the classic Detroit P-bass sound: flatwounds, a muted, round attack, deep fundamental, almost no top end.
The P/J has roundwounds, so the flatwound thump has to come from the pickup choice, the tone knob, and the treble cuts below.

Instrument setup:
- P pickup volume: full. J pickup volume: 0. P alone is the Motown sound.
- Tone knob: about 40% (rolled back). This does most of the flatwound imitation.
- Play with the side of your palm resting lightly on the strings at the bridge. That stands in for the foam mute on a vintage P-bass.
- Pluck over the neck end of the P pickup. Round, not snappy.

CTL off = the main groove. CTL on = the same groove with a small level lift for when the strings and horns pile in.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate** (always on)
- THRE: 15
Low threshold. Passive P pickup hum is mild.
The muted notes are short already. A higher threshold would chop the tail of the sustained ostinato notes.

**PRE — Micro Boost** (CTL)
- Gain: 32
- CTL off: bypassed. CTL on: engaged.
A clean level lift, roughly +3dB, no tone change.
The arrangement grows a lot: strings, horns, wah guitar, orchestral hits. The bass line doesn't change, so it needs a little more level to hold its ground as the mix gets denser.
Gain 32 is a nudge, not a volume jump.

**DST — off**
Clean. Any audible grit is wrong for this record.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Motown-era bass. A B-15 is the period-correct amp, clean and round.
- Gain: 53, VOL: 50, Bass: 62, Middle: 46, Treble: 34
- Gain 53: a little over default. This part wants more push than the other CleanB15 patches.
- Bass 62: more low end.
- Middle 46: midrange pulled back a little.
- Treble 34: top end pulled back noticeably.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 2** (always on)
- 50Hz: +1, 120Hz: +3, 400Hz: -2, 800Hz: +2, 4.5kHz: -7, VOL: 52
-7 at 4.5kHz is the biggest move. It cuts roundwound zing and finger noise. Flatwounds don't have that top end.
+3 at 120Hz reinforces the B-15 thump.
Only +1 at 50Hz. The 5-string's low B and the line's low notes can boom on a small room system, so the low end stays controlled.
+2 at 800Hz keeps enough note definition that the ostinato reads clearly on small speakers.
-2 at 400Hz matches the amp's mid scoop: round, not boxy.
Same in both CTL states.

**MOD — off**
No modulation.

**DLY — off**
Not used.

**RVB — off**
Motown bass is dry and up front. Any reverb blurs the pocket.

## CTL summary

- **CTL Off — Main groove.** Round, deep, muted, dry. This is 90% of the song.
- **CTL On — Dense sections.** Same tone plus Micro Boost, about +3dB.
- Engage CTL when the strings and horns stack up in the extended vamps and the orchestral swells.
- Drop back to CTL Off for the sparse intro (bass, hi-hat, handclaps) and under the vocal verses.
- Honestly optional. The line never changes. If the mix is balanced, you can leave CTL off all night.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- -2OCT: 0, -OCT: 0, +OCT: 0, +2OCT: 0, Dry: 100
- Footswitch off.
The line is already low and fat. An octave voice would turn a clean Motown thump into synth bass.

**2. Donner Ultimate Comp — Engaged**
- COMP: 40
- TONE: 40
- LEVEL: 55
- Mode: NORMAL
Keeps every repetition of the ostinato at the same level. That evenness over 7+ minutes is half the feel.
TONE 40 keeps the comp from putting back the top end we're cutting everywhere else.
NORMAL mode. TREBLE mode is the opposite of what a flatwound imitation needs.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off.
No fuzz on this record.

**4. Joyo Tidal Wave — Engaged (as a clean preamp; Drive effectively out)**
- Drive: 15
- Blend: 10
- Presence: 25
- Level: 55
- Treble: 38
- Middle: 52
- Bass: 60
- Mid-Frequency: 500Hz
- Bass-Shift: 80Hz
- Cab-Sim (DI out): Off. Ground Lift: Off. Only matters if you're using the DI out.
It's there for EQ and a touch of preamp weight, not drive.
Blend 10 with Drive 15 means the driven path is barely in the mix. That's a hint of warmth, like a pushed B-15, with no audible grit. Don't bring Drive in at any point in this song.
Bass-Shift 80Hz tightens the low end on the 5-string, so it thumps instead of booming.
Mid-Frequency 500Hz, Middle 52: essentially flat body. The GP-5's EQ handles the mid shaping.
Treble 38 and Presence 25 start the treble roll-off early in the chain.

**5. Joyo Narcissus — Bypassed**
- Footswitch off.
No chorus. Matches the MOD-off call on the GP-5.

**6. Valeton GP-5** — see settings above.

The `.prst` only carries the GP-5's 9 modules. The pedalboard settings above are not stored in the file. Set them by hand.
