# Tennessee Whiskey — Chris Stapleton

Bass: Sire V7 2nd Gen, 5-string fretless, flatwound, run **Passive**.
Full board.
Chris Stapleton's 2015 version (*Traveller*), ~68 BPM slow soul-blues shuffle.
This is the opposite job from the last few Muse patches — no drive, no grit, no aggression. The whole point of pulling out the fretless here is the warmth: flatwounds plus no frets means a rounder, mwah-y, almost upright-bass character that sits perfectly under this song's smoky, soulful groove. Verses stay laid-back and intimate; the chorus and guitar solo open up just a touch more.

CTL off = the laid-back verse groove. CTL on = the chorus and guitar solo, where it opens up slightly.

**Passive, not active** — this is the one call that flips from the Egan fretless build. Egan's fusion tone wanted headroom and hi-fi clarity to punch through a dense mix and feed two compression stages. This song wants the opposite: the warmer, slightly softer passive voicing that leans into the fretless's natural roundness instead of fighting it with active clarity.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 15
- Always on. Low threshold — this is a clean, warm tone with minimal grit, nothing much to gate out.

**PRE — Micro Boost — On CTL**
- Gain: 45
- CTL off: bypassed (verse). CTL on: engaged (chorus/solo).
- Verse sits back in the pocket, no push needed. Chorus and guitar solo get a gentle clean lift to open the tone up slightly without ever getting aggressive — this song never wants to feel pushed hard.

**DST — Off**
- No drive anywhere in this patch. This tone is built entirely around warmth and touch, not gain.

**AMP/CAB — NAM SnapTone, slot 51: CleanB15** (always on)
- Built from the `Ampeg B18 - Head DI - Bass Chan - Vol 2.5 (B-18N)` NAM and the Apg115 IR, combined into one snaptone.
- Real Ampeg B-18N fliptop (the B-15 preamp circuit), captured clean at volume 2.5, into the Apg115 B-15 cab IR.
- Slow soul-country. The warm, clean B-15 is the right bed for the vocal.
- Gain: 53, VOL: 50, Bass: 62, Middle: 52, Treble: 45
- Gain 53: a little over default. This part wants more push than the other CleanB15 patches.
- Bass 62: more low end.
- Middle 52: a touch more midrange.
- Treble 45: top end pulled back a little.
- VOL 50: the default. Trim here if the patch jumps in level against your others.
- Same in both CTL states. AMP and CAB are off in the `.prst`, so nothing stacks on the capture. The N->S block calls slot 51 directly.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: +1, 600Hz: -3, 2kHz: +2, 8kHz: +4, VOL: 55
- Always on, same for both CTL states.
- Modest +4 at 8kHz brings out the fretless's natural mwah and finger noise without brightening the tone up past what this warm ballad wants (compare Egan's +10 at 8kHz for a hi-fi fusion voice — this is the same band pulled way back). -3 at 600Hz clears the boxiness flatwounds tend to build up. +4 at 33Hz keeps real low-end weight under it all.

**MOD — Off**
- No modulation. This tone stays dry and honest — the warmth comes from the instrument and the amp, not a chorus effect.

**DLY — Off**
- Not used. A laid-back soul ballad like this doesn't need rhythmic or ambient delay cluttering the pocket.

**RVB — Room — On CTL**
- Mix: 18, Decay: 30, Trail: On
- CTL off: bypassed (verse — tight and intimate). CTL on: engaged (chorus/solo).
- A subtle touch of room opens the space up for the chorus and guitar solo, matching the slight lift in the song's energy without turning this into a wash.

## CTL summary

- **CTL Off — Verse.** Laid-back, warm, intimate. Dry, sitting right in the pocket.
- **CTL On — Chorus/solo.** A gentle boost and a touch of room open the tone up slightly for the chorus hook and the guitar solo.
- Engage CTL going into the first chorus, and again through the guitar solo section.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed**
- Footswitch off. This song wants a single, warm, clean fundamental — no reason to layer octaves on a fretless part built around touch and warmth.

**2. Donner Ultimate Comp — Engaged**
- COMP: 45
- TONE: 45
- LEVEL: 55
- Mode: NORMAL
- Gentle compression evens out the fingerstyle dynamics without squashing the natural touch this part relies on. NORMAL mode (not TREBLE) on purpose — this patch wants warmth, not extra brightness, and the fretless/flatwound combo already gives plenty of top-end control.

**3. Donner Stylish Fuzz — Bypassed**
- Footswitch off. No fuzz anywhere near this patch — it has no place in a warm soul-blues ballad.

**4. Joyo Tidal Wave — Engaged**
- Drive: 10
- Blend: 20
- Presence: 50
- Level: 55
- Treble: 50
- Middle: 55
- Bass: 60
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): On
- Ground Lift: On
- Used purely as a clean-leaning tone shaper and DI stage here, not an overdrive — Drive stays low and Blend stays mostly clean. Bass-Shift at 40Hz keeps the low end full and round rather than tight, matching the warm, unhurried feel of the song. Mid-Frequency at 500Hz reinforces body over attack.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — matches the MOD-off call on the GP-5. Dry, warm tone throughout, letting the fretless's own natural mwah do the talking.

**6. Valeton GP-5** — see settings above.
