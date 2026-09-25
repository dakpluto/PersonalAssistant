# Creep - Radiohead

Stratocaster (HSS), Full Board. Two sounds in this song: the clean, chorused verse arpeggios, and the famous distorted "chunk" hits that slam in right before each chorus line. Tempo: 92 BPM.

## GP-5 Settings

Module order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB

- **NR — Gate.** THRE 25. Light gate, just enough to keep the clean verse quiet. Always on.
- **PRE — Boost.** Gain 55, +3dB on, Bright on. Off for the clean verse. On for the loud hits — the treble kick that pushes into the DST and the AC30 snaptone for that sudden slam. On CTL.
- **DST — SM Dist (Boss DS-1).** Gain 65, Tone 55, VOL 80. Off for the verse — stays clean. On for the loud hits — hard clipping gives that blown-out "chunk" character. On CTL.
**AMP/CAB — NAM SnapTone, slot 70: GlassyAC30** (always on)
- Built from the `SLAMMIN_VOX_AC30_N_V3_TC0_S` NAM and the Origin Effects British Alnico 2x12 Medium Mix IR, combined into one snaptone.
- Real AC30 Normal channel at volume 3, glassy and clean, into the British Alnico 2x12.
- The verse tone is a glassy AC30 clean. The CTL distortion slams it for the chorus.
- Gain: 51, VOL: 50, Bass: 50, Middle: 50, Treble: 50
- Gain 51: a little over default. This part wants more push than the other GlassyAC30 patches.
- Bass 50: flat.
- Middle 50: flat.
- Treble 50: flat.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 70 directly.

- **EQ — Guitar EQ 1.** 125Hz 0, 400Hz -3, 800Hz 0, 1.6kHz +6, 4kHz +10. Slight mid scoop, treble lift — the glassy, slightly icy clean tone Creep's verse is known for. Always on.
- **MOD — Off.** Chorus duty is handled upstream by the Joyo Narcissus on the full board.
- **DLY — Off.** Creep is a dry-ish song; no repeating delay in either section.
- **RVB — Room.** Mix 18, Decay 30, Trail on. Small amount of room air, nothing washy. Always on.

## CTL Switch

- **CTL Off** = clean verse sound.
- **CTL On** = loud "chunk" hits.
- Modules on CTL: PRE, DST. Both flip together on the same footswitch press.
- Use CTL Off through the verses. Switch to CTL On right at each loud chord blast, then back to CTL Off for the next verse.

## Full Pedalboard

1. **Flamma FS-08 Octave** — Off. No octave content in this song.
2. **Donner Ultimate Comp** — On, all song. COMP ~3/10, TONE: Normal, LEVEL unity. Keeps the clean arpeggios even without squashing pick dynamics.
3. **Donner Stylish Fuzz** — Bypassed for the verse, footswitch engaged only for the loud hits. Sustain ~7/10, Treble ~6/10, Bass ~5/10, Volume matched to unity. Treble kept hotter than Bass so the fuzz stays cutting rather than adding low-end mud on top of what the GP-5's DST and the AC30 snaptone are already providing. Stacks with the GP-5's PRE Boost and DST for the blown-out chord slam.
4. **Joyo King of Kings** — Both channels bypassed all song. The Stylish Fuzz plus the GP-5's own PRE/DST already cover the loud section; stacking a third gain stage would mush the chord definition.
5. **Joyo Narcissus** — On, all song, Vintage mode. Depth ~4/10, Rate ~4/10, Width ~6/10 (moderately wide — helps give the clean tone its spacious, glassy quality). Stays on under the loud hits too, just buried under the crunch.
6. **Valeton GP-5** — as programmed above.
