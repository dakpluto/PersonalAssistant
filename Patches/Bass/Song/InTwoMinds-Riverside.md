# In Two Minds — Riverside

Riverside, prog rock/metal. BPM est. Riff-driven, dark, mid-forward bass with grit — the bass carries weight and bite under the guitars, not a polished hi-fi tone. Built from the band's general sound; exact rig on the recording not verified.
GP-5 only, P/J bass, no pedalboard.

## Module chain

**NR — Gate**, always on.
THRE: 22.
Gated and driven tone picks up noise between riffs. 22 closes the gaps without choking note tails.

**PRE — COMP**, always on.
Sustain: 50, VOL: 58.
Evens out pick attack under the grit. 50 is firm, not squashed.

**DST — Bass OD**, on CTL.
Gain: 40, Blend: 50, VOL: 60, Bass: 50, Treble: 55.
Heavy-section push. Blend 50 keeps the dry low end intact under the drive.

**AMP/CAB — NAM SnapTone, slot 56: ProgSVT** (always on)
- Built from the `SVT CLEAN PUSHED (SVT-CL)` NAM and the Mesa215 IR, combined into one snaptone.
- Real Ampeg SVT-CL on the clean-pushed setting, into the Mesa215 2x15 IR.
- Tight, mid-forward prog riffing. Pushed SVT into the Mesa 2x15.
- Gain: 50, VOL: 50, Bass: 55, Middle: 62, Treble: 52
- Gain 50: the capture as built.
- Bass 55: a touch more low end.
- Middle 62: more midrange.
- Treble 52: a touch more top end.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 56 directly.

**EQ — Bass EQ 2**, always on.
50Hz: +2, 120Hz: +2, 400Hz: -2, 800Hz: +3, 4.5kHz: +2, VOL: 50.
Small low-end lift, 400Hz mud cut, 800Hz and 4.5kHz up for bite and definition in a dense mix.

**MOD — off.** No modulation. This tone is about weight and grit.

**DLY — off.** No delay. Riffs need to stay tight.

**RVB — off.** No reverb. Dry and close.

## CTL footswitch

On CTL: DST (Bass OD).

- **CTL off** — Main riffs and verses. ProgSVT with its own grit, no extra drive. Tight, mid-forward, articulate. This is the resting state the patch loads into.
- **CTL on** — Heavy sections. Bass OD blends in for thicker, more distorted low mids. Same amp underneath.

Engage CTL for the heavy riff sections. Back off for verses and ambient passages.
