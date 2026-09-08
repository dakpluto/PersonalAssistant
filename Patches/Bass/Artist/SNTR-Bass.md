# SNTR-Bass — Sixpence None the Richer Signature Bass Tone

## Artist context

Sixpence None the Richer isn't a band you build a bass patch around by chasing an iconic bass tone — Leigh Nash's vocal and Matt Slocum's jangly, chiming guitars are the whole picture, and the bass job is to sit clean, round, and out of the way while still giving the songs their bounce.

Two identifiable modes cover the catalog:
- **Bouncy pop-rock mode** — "Kiss Me," most of the up-tempo *Sixpence None the Richer* (1997) material. Tight, dry, present. The bass drives the bounce, doesn't wash into anything.
- **Dream-pop mode** — "There She Goes" (their *I Am Sam* cover), "Breathe Your Name," the more atmospheric side of the catalog. Same clean fundamental, but the whole mix opens up — chorus shimmer, reverb wash.

This patch builds both into one GP-5 preset, split on CTL. Model: a real Ampeg SVT (Classic Bass) into a 4x10 — the era-appropriate clean bass rig underneath whichever mode is active. No dirt anywhere in this build — the real bassist never touched an overdrive on these records, and pushing gain here just muddies the fundamental Nash's vocal needs to sit on top of.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB

- **NR — Gate**: THRE 20. Always on.
  Low threshold — just cleaning up hiss and fret noise, not gating note decay. Nothing in this patch needs an aggressive gate.

- **PRE**: Off.
  The Donner Ultimate Comp on the full board already handles compression — stacking a second comp stage here just over-squashes the dynamics this genre actually wants (some pick/finger attack has to survive).

- **DST**: Off.
  No drive anywhere in this build. Sixpence's bass tone is clean, full stop.

- **AMP — Classic Bass** (Ampeg SVT): Gain 35, Bass 60, Middle 50, MidFreq 800Hz, Treble 55, VOL 70. Always on.
  SVT is the right clean-bass foundation for late-90s pop-rock — warm and full without being scooped. Gain kept low since this amp only needs to be clean, not driven. MidFreq at 800Hz keeps some presence so the bass doesn't disappear under the jangly guitars.

- **CAB — AMPG 4x10** (Ampeg SVT-410HE): VOL 70. Always on.
  Real bass cab pairing for the SVT model — no IR substitute here since the IR library on hand is all guitar-cab captures (Marshall/Fender/Vox voicings). The GP-5's own Ampeg 4x10 is a better and more accurate fit than forcing a guitar cab onto a bass amp.

- **EQ — Bass EQ 2**: 50Hz +2, 120Hz +4, 400Hz -3, 800Hz +2, 4.5kHz +3, VOL 55. Always on.
  120Hz boost adds body without getting boomy. 400Hz cut clears out the mud zone that fights with rhythm guitar. Small lifts at 800Hz and 4.5kHz keep finger attack and note definition audible — this band's mixes are bright and clear, the bass needs to match that clarity, not just be "low end."

- **MOD — B-Chorus** (Boss CEB-3, bass chorus): Depth 40, Rate 2.5Hz, VOL 55. **On CTL.**
  - CTL off: chorus bypassed. Dry, tight, present — the "Kiss Me" bounce mode.
  - CTL on: chorus engaged. Adds the shimmer/movement that opens the tone up into dream-pop territory.
  Depth held at 40, not heavier — even in "on" mode this should read as a wash under the note, not an obvious pitch-wobble effect.

- **DLY**: Off.
  Skipping delay entirely — between the chorus and reverb, adding a third space-based effect on CTL-on would clutter rather than help. Two modules is enough to make a clean split.

- **RVB — Air**: Mix 35, Decay 45, Damp 40, Trail on. **On CTL.**
  - CTL off: reverb bypassed. Bone dry, matches the tight pop-punch mode.
  - CTL on: reverb engaged alongside the chorus. Together they're what turns the tone from "Kiss Me" bounce into "There She Goes" atmosphere.
  Trail is on so the reverb tail doesn't get chopped off if CTL switches back to off mid-decay.

### CTL summary

Two modules on CTL: MOD (B-Chorus) and RVB (Air) — both flip together, both fully on/off (no setting changes across states, per the GP-5's CTL limitation).

- **CTL off** — dry, tight, punchy pop bass. Use for verses, up-tempo bounce, anything in the "Kiss Me" family.
- **CTL on** — chorus + reverb engaged, opens into a warmer, washier dream-pop tone. Use for "There She Goes," "Breathe Your Name," choruses/bridges that want to bloom.

## Full pedalboard (bass chain order)

Flamma FS-08 Octave → Donner Ultimate Comp → Donner Stylish Fuzz → Joyo Tidal Wave → Joyo Narcissus → Valeton GP-5

- **Flamma FS-08 Octave**: Bypassed the whole set. This band doesn't use octave layering on bass — dry fundamental only. Leave the footswitch off; there's no moment in this catalog that calls for an octave stack.

- **Donner Ultimate Comp**: COMP 55, TONE 55, LEVEL 50, mode **TREBLE**. Engaged the whole set.
  This is the real compression stage for the patch (GP-5 PRE is off, see above). TREBLE mode keeps pick/finger attack cutting through since the SVT/4x10 pairing downstream leans warm — without it the comp would round off too much attack and the bass would go soft in the mix.

- **Donner Stylish Fuzz**: Bypassed the whole set. No fuzz texture anywhere in this artist's sound — this pedal stays off unless you're deliberately covering something outside the Sixpence catalog.

- **Joyo Tidal Wave**: Drive not engaged (bypassed). Knobs parked at Drive 20, Blend 20, Presence 50, Level 50, Treble 50, Middle 50, Bass 50. Mid-Frequency 500Hz, Bass-Shift 80Hz. Cab-Sim/Ground Lift only relevant if running the DI — leave both off for amp/GP-5 use.
  Never engage for a faithful Sixpence tone — everything here is clean. If you ever want a slightly bigger, driven bass for a live full-band arrangement of "Kiss Me," Drive around 25-30 with Blend under 30 would add grit without losing the fundamental, but that's a deliberate departure from the studio sound, not the patch default.

- **Joyo Narcissus**: Bypassed the whole set. The chorus job is handled by the GP-5's own B-Chorus tied to CTL — running Narcissus at the same time would just stack two chorus voices and mud up the CTL-on tone. Keep this one off for this patch; it's the right pedal to reach for on a build that doesn't already have chorus on the CTL switch.

- **Valeton GP-5**: settings above.
