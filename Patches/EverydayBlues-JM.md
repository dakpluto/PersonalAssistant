# Everyday I Have the Blues — John Mayer (Where the Light Is)

Full-band live cut, horns and rhythm section, mid-tempo shuffle around 104 BPM.
Mayer's rig for this set is boutique-clean-amp-into-a-Tube-Screamer-style-boost — never a channel switch, just the same amp pushed harder for the solo.
This board copies that exact trick: one amp voicing, one boost that kicks it into gain for the lead break.

No modulation anywhere in this build. This song doesn't call for chorus/vibe — it's a straight blues shuffle, and adding wobble would just muddy the horn-band mix.

## GP-5 Settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

**NR — Gate**
- THRE: 28
- Always on. HSS Strat single coils plus a boost stage downstream need a floor; 28 is light enough to not chop note decay.

**PRE — COMP4** (Keeley C4)
- Sustain: 30, Attack: 60, VOL: 55, Clip: 50
- Always on, both CTL states. Light touch — evens out pick attack on the shuffle comping without squashing dynamics. Fast Attack (60) keeps transient snap so the rhythm still breathes.

**DST — Green OD** (Tube Screamer / TS-808)
- Gain: 45, Tone: 55, VOL: 65
- **CTL switch.** Off = bypassed, On = engaged.
- This is the whole trick of the patch. Off, the amp runs clean-to-edge-of-breakup on its own for rhythm. On, the TS's mid hump shoves the same amp into a warmer, more compressed, singing lead voice — the way Mayer actually does it live instead of switching amp channels.

**AMP — L-Star CL** (Mesa/Boogie Lonestar Clean)
- Gain: 55, PRES: 60, VOL: 70, Bass: 55, Middle: 65, Treble: 60
- Always on. The GP-5 catalog has no Two-Rock/Dumble model, and L-Star CL is the standard stand-in modelers reach for — warm, sweet, boutique-clean voicing with real headroom. Middle pushed to 65 keeps it vocal instead of scooped.

**CAB — SUP Star 2x12** (Mesa Lonestar 2x12)
- VOL: 60
- Always on. Matches the amp model, fuller low end than a 1x12 to hold up in a live band mix with horns.

**EQ — Guitar EQ 2**
- 100Hz: -2, 500Hz: +3, 1kHz: +2, 3kHz: 0, 6kHz: -3
- VOL: 50
- Always on. Small mid push (500Hz/1kHz) keeps the guitar cutting through the horn section without getting harsh; slight top-end trim (6kHz -3) tames fizz from the boost stage so the TS kick doesn't get brittle.

**MOD — Off**
- Not used. No modulation for this song, on the GP-5 or the Narcissus.

**DLY — Slapback**
- Mix: 30, Time: 320ms, F.Back: 20, Trail: On
- **CTL switch.** Off = bypassed, On = engaged.
- Rhythm stays dry and tight for the shuffle groove. Lead gets a single slap of echo (low feedback, one real repeat) for width and sustain in a big room — not a wash, just dimension.

**RVB — Spring**
- Mix: 20, Decay: 30, Trail: On
- Always on, both states. A touch of spring keeps the amp from sounding dead-dry in a live mix without smearing the shuffle's rhythmic snap.

### CTL Summary (GP-5)
- **CTL Off — Rhythm/Intro:** Clean-to-edge-of-breakup L-Star CL, dry (no slap delay), compressed shuffle comping. This is the main groove sound.
- **CTL On — Lead/Solo:** Green OD kicks the same amp into a warmer, more sustained, vocal lead tone, with slapback delay added for width.

## Full Pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Bypassed, whole song.**
No octave layering here — this is a straight blues shuffle, not a texture piece. Footswitch stays off for the entire song. Knobs are irrelevant while bypassed; leave Dry at 100 and the four octave knobs at 0 so there's no surprise if it's accidentally engaged.

**2. Donner Ultimate Comp — Engaged, whole song.**
- COMP: 40
- TONE: 55
- LEVEL: 55
- Mode: NORMAL
Sits ahead of everything else and evens out pick dynamics before the boost/amp gain stages. NORMAL mode (not TREBLE) because the EQ module and boost stage already add top end downstream — don't stack brightness. This runs continuously through both rhythm and lead sections; it's gluing the touch dynamics, not shaping the lead/rhythm split.

**3. Donner Stylish Fuzz — Bypassed, whole song.**
Not a fuzz song. True bypass, footswitch off throughout.

**4. Joyo King of Kings — Left channel engaged whole song, Right channel engaged only for solo sections.**

*Left channel (always on — rhythm push):*
- Volume: 55
- Gain: 25
- Tone: 50
- Clipping toggle: softer setting (smoother, lower-gain breakup character)
- Feedback toggle: standard setting (no added compression)

Low-gain, always-on push that adds a little extra edge-of-breakup grit ahead of the GP-5's amp sim — this is doing some of the work a real boutique amp's natural front-end drive would do, since the L-Star CL sim alone doesn't drive as hard as a real Two-Rock would.

*Right channel (solo/lead only):*
- Volume: 65
- Gain: 60
- Tone: 60
- Clipping toggle: harder setting (more aggressive breakup)
- Feedback toggle: higher setting (more compression/sustain for leads)

Stacks in series after the left channel (both engaged together) for the guitar solo — this is the extra push that, combined with the GP-5's Green OD + amp, gets the lead tone hot enough to cut over horns and a full rhythm section in a live room. Step on the right footswitch at the same moment you hit the GP-5's CTL switch for the solo; step off when you're back to rhythm.

**5. Joyo Narcissus — Bypassed, whole song.**
No chorus anywhere in this patch, on the GP-5 or here. Keep it off to stay consistent with the dry, straight-blues character of the tune.

**6. Valeton GP-5 — as detailed above.**

## Footswitch Choreography

- **Rhythm / intro / horn-section trade-offs:** King of Kings left channel only, GP-5 CTL off. Comp always running underneath.
- **Guitar solo:** Step on King of Kings right channel (stacks with left) at the same time you hit GP-5 CTL on. Both come off together when the solo ends and you drop back to rhythm.
- Everything else (Octave, Fuzz, Narcissus) stays bypassed for the entire song — this patch is deliberately lean: comp, two gain stages, one amp, one delay-for-lead trick. No clutter.
