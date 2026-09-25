# The Anthem — Good Charlotte

*The Young and the Hopeless*, 2002. ~176 BPM, est.
Pop-punk bass — tight low end, upfront pick attack, driving eighth notes under the verse riff, bigger and more open for the "I don't wanna be" hook.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 25. Light gate, just enough to clean up string noise between fast eighth-note runs.

**PRE — off.** Not needed — the NAM's own front end and the CTL'd Bass OD below cover the dynamic range this patch needs.

**DST — Bass OD**, on CTL.
Gain: 45, Blend: 60, VOL: 60, Bass: 55, Treble: 55.
Off for the verse — clean punchy V4B tone, all pick and low end.
On for the chorus — Bass OD stacked on top adds grit and push without burying the note, blended at 60% so it thickens rather than fuzzes out.

**AMP/CAB — NAM SnapTone, slot 55: BrightSVT** (always on)
- Built from the `SVT SANS BRIGHT DRIVE (SVT-CL)` NAM and the Hartke410 IR, combined into one snaptone.
- Real Ampeg SVT-CL with the bright drive setting, into the aluminum-cone Hartke410 IR.
- Pop-punk bass: bright, driven, picked. The bright SVT drive plus Hartke clank.
- Gain: 50, VOL: 50, Bass: 62, Middle: 55, Treble: 55
- Gain 50: the capture as built.
- Bass 62: Full low end to anchor the palm-muted verse riff.
- Middle 55: Present, not scooped, so the bass cuts through two guitars.
- Treble 55: Brighter than a grunge dial-in. Pick attack needs to read clearly at this tempo.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 55 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +3, 120Hz: +2, 400Hz: -3, 800Hz: 0, 4.5kHz: +6, VOL: 55.
Small low-end reinforcement, a scoop around 400Hz to stay out of the guitars' rhythm-chug range, and a solid push at 4.5kHz for that pick-attack snap pop-punk bass needs to sit up front in the mix.

**MOD — off.** No modulation — straight, driving pop-punk part.

**DLY — off.** No delay. This is a tight, dry rhythm-section tone.

**RVB — Room**, on CTL.
Mix: 20, Decay: 30, Trail: true.
Off for the verse — dry and right on the beat.
On for the chorus, alongside the Bass OD — a touch of room size to match the bigger, more open chorus arrangement without smearing the part.

## CTL footswitch

Two modules on CTL: DST (Bass OD) and RVB (Room).

- **CTL off** — verse/pre-chorus sound. Clean V4B punch, dry, tight, all pick attack. This is the resting state the patch loads into.
- **CTL on** — chorus/hook sound. Bass OD grit plus a little room size, same core amp tone, bigger and pushier for the "I don't wanna be" hook.

Engage CTL going into each chorus, back off for the verses. Simple two-state song patch.
