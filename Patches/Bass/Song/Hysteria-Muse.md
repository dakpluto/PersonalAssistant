# Hysteria — Muse

Bass: Harley Benton P/J, 5-string, passive. Full board.
From *Absolution* (2003), ~129 BPM.
This is Chris Wolstenholme's signature fuzz-bass riff — arguably THE bass riff that made his name. Where "Uprising" chased a synth-bass illusion and "Knights of Cydonia" wanted one big controlled drive source, "Hysteria" wants everything: stacked fuzz, sub-octave weight, and a hi-gain amp behind it, gated tight so the riff stays articulate instead of turning to noise. The riff is the whole song — verse and chorus run at similar intensity, with the chorus pushing a bit harder.

CTL off = the main riff (verse). CTL on = the chorus push.

## GP-5 settings

Module order: NR → PRE → DST → AMP → CAB → EQ → MOD → DLY → RVB.

**NR — Gate**
- THRE: 30
- Always on. High threshold, deliberately — Wolstenholme's actual rig runs a noise gate for exactly this reason. Stacking fuzz, OD, and a hi-gain amp generates a lot of noise floor; a tight gate is what keeps this riff punchy and articulate instead of washing into mush between notes.

**PRE — Micro Boost — On CTL**
- Gain: 55
- CTL off: bypassed (verse). CTL on: engaged (chorus).
- The riff already hits hard on its own. Chorus gets a clean push to match the song's escalating intensity.

**DST — Bass OD**
- Gain: 70, Blend: 75, VOL: 62, Bass: 62, Treble: 55
- Always on, same for both CTL states.
- A second drive stage stacked in front of the AMP's own gain — this is a deliberately maximalist build, unlike the "one drive source" logic used on cleaner patches. Blend at 75 still keeps enough low end intact that the riff doesn't collapse into fizz.

**AMP — Mess DualV (Mesa/Boogie Dual Rectifier, Vintage mode)**
- Gain: 65, PRES: 55, VOL: 65, Bass: 58, Middle: 58, Treble: 55
- Always on, same for both CTL states.
- A genuine hi-gain guitar amp model, not a bass amp — this riff needs the same wall-of-gain character a modern rock guitarist would reach for. Stacked behind the Bass OD and the Stylish Fuzz pedal, this is where the tone goes from "driven" to genuinely huge.

**CAB — User IR 7 (Mesa215)**
- VOL: 62
- Always on, same for both CTL states.
- Mesa/Boogie Road Ready 2x15 — same amp family as the AMP model above, and `IRs/ir.md` specifically calls this one "modern, crushing." Exactly the cab this riff needs under it.

**EQ — Bass EQ 1**
- 33Hz: +4, 150Hz: -1, 600Hz: +4, 2kHz: +4, 8kHz: +1, VOL: 55
- Always on, same for both CTL states.
- +4 at 600Hz gives this real midrange snarl and bite — that's where a lot of this riff's identity lives. 8kHz kept low (+1 only) on purpose — a triple-stacked gain chain like this already generates plenty of harsh high-frequency harmonics on its own; piling on more top end would just add fizz, not clarity.

**MOD — Off**
- No modulation. This is a raw, brute-force riff — texture would just get in the way of the weight.

**DLY — Off**
- Not used.

**RVB — Room — On CTL**
- Mix: 20, Decay: 32, Trail: On
- CTL off: bypassed (verse — tight and dry, letting the riff hit hard and direct). CTL on: engaged (chorus).
- A touch of room opens things up for the chorus without turning this into a wash — this song stays heavy and direct even at its biggest moments.

## CAB IR — Mesa215 (Slot 7)

- Mesa Boogie Road Ready 2x15 with a bright tweeter, confirmed loaded on User IR slot 7. Same brand family as the Mess DualV AMP model above — a direct, crushing pairing.
- Encoded directly into the `.prst` as a real, active CAB reference (`User IR 7`) — no manual loading needed for this one.

## CTL summary

- **CTL Off — Verse/main riff.** The signature fuzz riff at full weight, dry and direct.
- **CTL On — Chorus.** Boost and Room reverb engage together for the push through the chorus.
- Engage CTL right as the chorus hits, back off returning to the main riff.

## Full pedalboard (signal chain order)

**1. Flamma FS-08 Octave — Engaged**
- -OCT: 50
- +OCT: 0
- -2OCT: 0
- +2OCT: 0
- Dry: 75
- Sub-octave only, no upper octave — this patch wants weight and nastiness, not shimmer. That extra octave-down layer is what turns a merely-distorted bass into the huge, gnarly low end this riff is known for.

**2. Donner Ultimate Comp — Engaged**
- COMP: 60
- TONE: 55
- LEVEL: 60
- Mode: TREBLE
- Fairly compressed to keep the aggressive picking pattern tight and consistent going into all that downstream gain. TREBLE mode keeps some attack alive under everything stacked after it.

**3. Donner Stylish Fuzz — Engaged**
- Sustain: 75
- Treble: 55
- Bass: 60
- Volume: 62
- The pedal that defines this song. Sustain pushed hard for a thick, compressed wall-of-fuzz character — this is the first of three stacked gain stages (fuzz → Bass OD → Mess DualV) that build the full "Hysteria" tone.

**4. Joyo Tidal Wave — Engaged**
- Drive: 50
- Blend: 70
- Presence: 60
- Level: 60
- Treble: 55
- Middle: 58
- Bass: 58
- Mid-Frequency: 500Hz
- Bass-Shift: 40Hz
- Cab-Sim (DI out): Off
- Ground Lift: Off
- The second stacked gain stage. Mid-Frequency at 500Hz and Bass-Shift at 40Hz both push toward body and weight rather than tight articulation — unlike a punchy garage-rock or boogie tone, this riff wants to feel massive and low, not tight and clicky.

**5. Joyo Narcissus — Bypassed**
- Footswitch off. No chorus — this is a raw, direct, maximally-gained tone with no room for modulation texture.

**6. Valeton GP-5** — see settings above.
