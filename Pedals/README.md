# Pedal index

Every pedal file in this directory, by folder. Update this whenever a pedal file is added, renamed, or removed.

```
Pedals/
  Fixed-Board/         Michael's actual pedalboard (see below)
  Boss/                Full current Boss catalog
  EarthQuaker-Devices/ Full current EarthQuaker Devices catalog
  Chase-Bliss/         Full current Chase Bliss Audio catalog
  Summer-School/       Full current Summer School Electronics catalog
  Strymon/             Full current Strymon catalog
  JHS/                 Full current JHS Pedals catalog (incl. the budget 3 Series line)
  Other/               Everything else — one-off boutique pedals by various brands
```

Within `Boss/`, `EarthQuaker-Devices/`, `Chase-Bliss/`, `Summer-School/`, `Strymon/`, and `JHS/`, filenames drop the redundant brand prefix (the folder already says it) — e.g. `Boss/DS1-Distortion.md`, not `Boss/Boss-DS1-Distortion.md`. `Fixed-Board/` and `Other/` keep full brand-model names since they aren't single-brand folders.

## Fixed-Board/

The only pedals `Prompts/gp5_prompt.md` includes automatically when a patch is built with Full Board = True — see its "Guitar Full Board" / "Bass Full Board" chain definitions.

| File | What it is |
|---|---|
| `Flamma-FS08-Octave.md` | Polyphonic octave — first in the chain, before drive |
| `Donner-Ultimate-Comp.md` | Optical compressor |
| `Donner-Stylish-Fuzz.md` | Classic-voiced fuzz |
| `Joyo-King-of-Kings.md` | Dual-channel overdrive (Analogman King of Tone clone) |
| `Joyo-Narcissus.md` | Chorus (guitar board) |
| `Joyo-Tidal-Wave.md` | Bass preamp/overdrive with 3-band EQ + DI (bass board, replaces Stylish Fuzz + King of Kings) |

## General library

Not on Michael's board — reference material for optional gear and the project's longer-term direction of letting any user pick their own pedals. Seeded from `Data/pedal_list.md` and its follow-up brand-catalog requests.

### Boss/

| File | What it is |
|---|---|
| `VE22-Vocal-Performer.md` | Vocal harmony/doubling processor + looper, runs mic → PA in parallel to the guitar signal |
| `DS1-Distortion.md` | Original 1978 compact distortion, mid-forward voicing |
| `DS2-Turbo-Distortion.md` | DS-1 successor with Turbo Mode I/II switch |
| `JB2-Angry-Driver.md` | Boss/JHS collab: Blues Driver + Angry Charlie circuits, 6-mode selector |
| `MT2-Metal-Zone.md` | High-gain metal distortion, active 3-band EQ w/ semi-parametric mid |
| `MT2W-Metal-Zone-Waza-Craft.md` | Waza Craft Metal Zone, adds Standard/Custom mode switch |
| `SD1-Super-Overdrive.md` | Classic asymmetrical-clipping overdrive, smooth mid-forward push |
| `SD1W-Super-Overdrive-Waza-Craft.md` | Waza Craft SD-1, adds Standard/Custom mode switch |
| `OD3-Overdrive.md` | Dual-Stage Overdrive Circuit, warmer/thicker than SD-1 |
| `BD2-Blues-Driver.md` | Dynamic, amp-like overdrive; cleans up with guitar volume |
| `BD2W-Blues-Driver-Waza-Craft.md` | Waza Craft Blues Driver, adds Standard/Custom mode switch |
| `DD8-Digital-Delay.md` | 11-mode digital delay incl. analog/tape/shimmer/glitch + looper |
| `DD3T-Digital-Delay.md` | DD-3 reissue with added Tap Tempo, clean digital repeats |
| `RE2-Space-Echo.md` | Roland RE-201 tape-echo recreation + built-in spring reverb |
| `GE7-Equalizer.md` | 7-band graphic EQ, guitar-voiced |
| `GEB7-Bass-Equalizer.md` | 7-band graphic EQ, bass-voiced (lower bands/wider Q) |
| `IR2-Amp-Cabinet.md` | 11 amp models + Celestion Digital IR cabs, custom IR loading, USB audio interface |
| `BF3-Flanger.md` | Flanger from classic swoosh to Ultra/gated modes, tap tempo |
| `CE2W-Chorus-Waza-Craft.md` | Waza Craft CE-2 chorus, adds CE-1 chorus/vibrato mode |
| `CE5-Chorus-Ensemble.md` | Stereo chorus, independent high/low filter controls |
| `CH1-Super-Chorus.md` | Simpler stereo chorus, single EQ knob |
| `DC2W-Dimension-C.md` | Waza Craft Roland SDD-320 Dimension D recreation, preset-mode spatial chorus |
| `OC5-Octave.md` | Polyphonic octave-down, guitar/bass tracking + Vintage/Poly modes |
| `PS6-Harmonist.md` | 4-mode pitch shifter/harmonizer (Harmony/Pitch/Detune/S-Bend) |
| `XS1-Poly-Shifter.md` | Compact polyphonic pitch-shift, Adaptive Focus chord tracking |
| `XS100-Poly-Shifter.md` | Flagship XS-1 sibling: exp pedal, 8-octave range, MIDI/USB, presets |

### EarthQuaker-Devices/

| File | What it is |
|---|---|
| `Blumes.md` | Tube Screamer-derived OD, bass-friendly (Low Signal Shredder) |
| `Dirt-Transmitter-Legacy-Reissue.md` | Silicon fuzz driver, gated-to-natural range |
| `Death-By-Audio-Time-Shadows-II.md` | Subharmonic multi-delay resonator, 3 very different modes (DBA collab) |
| `Acapulco-Gold.md` | Sunn Model T-style power amp distortion, minimal controls |
| `Afterneath.md` | Cascading-delay-line ambient reverb, self-oscillating |
| `Astral-Destiny.md` | 8-mode octave reverb with pitch-bending |
| `Aurelius.md` | Vibrato/chorus/rotary-speaker tri-voice modulator |
| `Avalanche-Run.md` | Stereo delay + reverb, reverse/swell modes, tap tempo |
| `Barrows.md` | Two-knob germanium fuzz (3 matched transistors) |
| `Bellows-Legacy-Reissue.md` | Two-knob fuzz driver, breakup to full fuzz |
| `Bit-Commander.md` | Analog octave/synth, fixed-interval square-wave tones |
| `Buffer-Preamp.md` | Utility buffer, restores tone lost to cable runs/true-bypass chains |
| `Chelsea.md` | LCD Soundsystem collab fuzz, low-end stays articulate |
| `Data-Corrupter.md` | PLL-based harmonizing pitch fuzz, guitar-synth textures |
| `Disaster-Transport-Legacy-Reissue.md` | Analog-voiced digital delay w/ built-in modulation |
| `Dispatch-Master.md` | Independent digital delay + digital reverb, hi-fi voiced |
| `Easy-Listening.md` | All-analog amp/cab sim (Fender Deluxe Reverb-voiced), silent practice/DI |
| `Fuzz-Master-General-Legacy-Reissue.md` | Ace Tone Fuzz Master-based octave fuzz, 3-way voicing |
| `Gary.md` | IDLES collab: independent op-amp OD + PWM square-wave fuzz |
| `Ghost-Echo.md` | Analog/digital spring reverb emulation, self-oscillating drone |
| `Grand-Orbiter.md` | 4-stage OTA phaser, doubles as vibrato/vibe + resonant filter |
| `Hizumitas.md` | Wata of Boris collab fuzz (Elk BM Sustainar-based) |
| `Hoof.md` | Flagship hybrid Germanium/Silicon fuzz |
| `Hummingbird.md` | Repeat-percussion vintage-style tremolo |
| `Ledges.md` | 3-algorithm (Room/Hall/Plate) digital reverb, 6 presets |
| `Plumes.md` | Tube Screamer-tradition transparent OD, 3 clipping voices |
| `Pyramids.md` | DSP stereo flanger, 8 modes incl. through-zero/barber-pole |
| `Rainbow-Machine.md` | Polyphonic pitch-shift modulator, shimmer to self-oscillation |
| `Scrolls.md` | Bass preamp/OD + active EQ + XLR DI (not modulation, despite the name) |
| `Sea-Machine.md` | 6-knob chorus/vibrato, subtle shimmer to near-vibrato |
| `Silos.md` | 3-type delay (Digital/Analog/Tape) in one unit, presets |
| `Spatial-Delivery.md` | Envelope filter, Up/Down sweep + Sample & Hold modes |
| `Special-Cranker.md` | Discrete analog OD, switchable diode clipping |
| `Sunn-O-HalfLife.md` | Compact Sunn O))) collab: octave fuzz into distortion + boost |
| `Sunn-O-Life-Pedal.md` | Full-size Sunn O))) collab: octave, distortion, and boost |
| `Swiss-Things.md` | Pedalboard utility hub: 2 FX loops, clean boost, tuner tap |
| `The-Wave-Transformer.md` | **Not a guitar pedal** — Eurorack-only CV oscillator module |
| `Tone-Job.md` | Clean 3-band EQ + up to 5x boost, no drive circuit |
| `Towers.md` | Stereo reverb/resonant-filter hybrid, 3 control modes |
| `ZEQD-Pre.md` | Dr. Z collab all-analog EF86 tube preamp + cab sim + DI |
| `Zoar.md` | Discrete-transistor med/high-gain OD/distortion, 3-band EQ |

### Chase-Bliss/

| File | What it is |
|---|---|
| `Bad-Mood.md` | Two-channel ambient FX: always-listening micro-looper + spatial FX |
| `Big-Time.md` | EAE collab hybrid analog/digital echo, motorized sliders |
| `Blooper.md` | Bottomless stereo looper, live-manipulable overdub layers |
| `Brothers-AM.md` | Analog Man collab OD/boost (King of Tone-based), 3 gain stages |
| `Clean.md` | All-analog VCA "creative compressor," hidden Dusty OD mode |
| `CXM-1978.md` | Meris collab studio reverb (Lexicon 224-modeled), motorized faders |
| `Generation-Loss-MKII.md` | Cooper FX lineage lo-fi tape-degradation processor |
| `Lossy.md` | Goodhertz collab digital degradation (bitcrush/dropped-packet/spectral freeze) |
| `Lost-and-Found.md` | First true stereo multi-FX: 2 channels, 12 algorithms, 144 combos |
| `Mood-MKII.md` | 2-channel granular micro-looper (Drolo) + spatial FX (OBNE) |
| `Onward.md` | Dynamic sampler: parallel Freeze (pad/drone) + Glitch (stutter) channels |

### Summer-School/

| File | What it is |
|---|---|
| `Class-Reunion.md` | 90's Russian Muff + Trash Panda circuits blended in parallel |
| `Double-Major.md` | Two identical K-style transparent OD circuits, independently usable |
| `Extra-Credit-Boost.md` | 2-mode clean/dirty boost (op-amp vs. transistor + brightness) |
| `Fuzz-101.md` | 2-transistor silicon fuzz with Rat-inspired tone stage |
| `Gladys-V2-Overdrive.md` | Low/mid-gain OD, 2-band active EQ, silent switching |
| `Gus-Drive.md` | High-gain hard-clipping OD, Summer School's first pedal |
| `Gus-Plus.md` | Bass-friendly blendable version of Gus-Drive |
| `Half-Day-Compressor.md` | Ross-style comp, guitar/bass input toggle |
| `Middle-School-Chorus.md` | BBD chorus/vibrato dual-mode, first modulation pedal |
| `Pep-Rally-Fuzz.md` | 2-transistor silicon fuzz, cleans up with guitar volume |
| `School-Lunch.md` | Multi-effect: scaled-down fuzz + distortion + delay + boost |
| `Science-Fair.md` | Parallel-blend OD/distortion, two distinct clipping circuits |
| `Smoking-In-The-Boys-Room.md` | Grunge-voiced distortion + BBD chorus (Supercool collab) |
| `Snow-Day-Delay.md` | Dual PT2399 digital delay, two rotatable/simultaneous settings |
| `Spring-Break-Reverb.md` | Spring reverb + tail-only delay, self-oscillates |
| `Trash-Panda.md` | High-gain soft-clipping OD/distortion, country to hard-rock |

### Strymon/

| File | What it is |
|---|---|
| `BigSky-MX.md` | Flagship 12-algorithm reverb workstation, dual simultaneous engines |
| `BigSky.md` | Original multi-algorithm reverb workstation, 12 reverb machines, dedicated Infinite/freeze footswitch |
| `TimeLine-MX.md` | Dual-engine multi-delay workstation, 12 delay machines runnable two at once, 5-min looper |
| `TimeLine.md` | Original multi-delay workstation, 12 delay machines, 30-sec looper, 200 presets |
| `Mobius.md` | Multi-modulation workstation, 12 machines (chorus/flanger/rotary/phaser/formant/etc.), Pre/Post routing |
| `Canoga.md` | Minimalist two-knob vintage silicon fuzz, unbuffered in/high-Z out for authentic pickup interaction |
| `Cloudburst.md` | Ambient reverb with built-in orchestral ensemble (chorus/vibrato) layer, compact format |
| `Fairfax.md` | Class A power-amp-style drive with a Sag control for tube-sag/gating character |
| `Olivera.md` | Vintage oil-can echo emulation, dark modulated repeats, selectable playback-head config |
| `EC-1.md` | Single-head dTape echo with a saturating Rec Level switch for driven tape-style repeats |
| `Iridium.md` | 3-amp modeler (Deluxe/AC30/Plexi) with 9 swappable cab IRs and adjustable room ambience |
| `UltraViolet.md` | Vintage pitch-vibrato/uni-vibe with switchable chorus/blend/vibrato voicing |
| `Brig.md` | dBucket analog-voiced delay, 3 selectable voicings from gritty short to dreamy/dual-line |
| `Compadre.md` | Dual-voice compressor + independently footswitchable boost, parallel-comp dry blend |
| `NightSky.md` | Experimental/generative reverb with a regenerating core, Infinite freeze, and 8-step pitch/reverb Sequence mode |
| `Volante.md` | Magnetic tape delay modeling Drum/Tape/Studio echo machines across 4 independently leveled/fed-back/panned playback heads plus built-in spring reverb |
| `Zelzah.md` | Dual-engine phaser — independent 4-stage (phaser/vibrato) and 6-stage (phaser-to-flanger-to-chorus) circuits, each with its own footswitch |
| `Sunset.md` | Dual-channel overdrive with two independently voiced, 3-way-selectable drive circuits, stackable in series or parallel |
| `Riverside.md` | Single-channel drive-to-distortion pedal with a continuously variable, self-retuning gain circuit and active 3-band EQ |
| `BlueSky-V2.md` | Compact stereo reverb — Plate/Room/Spring types with an optional Off/Light/Deep shimmer-modulation layer |
| `Deco-V2.md` | Tape saturation stage plus an independent doubletracker delay effect, each footswitchable on its own |
| `DIG-V2.md` | Dual digital delay with three era voicings (ADM/12-bit/24-96) and two mix-independent, tempo-related delay lines |
| `El-Capistan-V2.md` | Tape echo with three selectable head configurations (Fixed/Multi/Single), each with its own Mode options, plus spring reverb |
| `Flint-V2.md` | Tremolo (3 vintage circuits) and spring/plate/hall reverb (3 eras) in one pedal, independently footswitchable |
| `Lex-V2.md` | Rotary speaker (Leslie-style) sim with horn/woofer mic-position and bi-amp controls, footswitchable Slow/Fast ramp |

Note: `Iridium HD` does not exist as a separate current Strymon product — only the base `Iridium.md` is sold.

### JHS/

#### Flagship / original catalog

| File | What it is |
|---|---|
| `AT-Mini.md` | Compact fixed-voicing version of the AT+ (Andy Timmons) British-style overdrive/distortion |
| `AT-Plus.md` | Andy Timmons signature drive with a footswitchable boost stage and a 25/50/100W amp-feel toggle |
| `Notadumble-V2.md` | Dual-channel Dumble-style overdrive plus a separate clean-boost channel with its own effects loop and order switch |
| `Fumble.md` | JFET clean-boost/buffer pedal from a 1970s Barcus-Berry acoustic preamp circuit |
| `Coyote.md` | Octave fuzz with a single sweep control spanning gated swell, Tone Bender-style fuzz, and octave-up fuzz |
| `Double-Dragon.md` | Fully analog monophonic octave-down/octave-up pedal with a footswitch-gated OCT+ (upper octave + grit) circuit |
| `424-Gain-Stage.md` | TASCAM 424-inspired two-stage preamp/overdrive/distortion with active EQ and a balanced XLR direct-out |
| `Morning-Glory-Clean.md` | Low-gain Morning Glory variant with a parallel clean-blend circuit, doubling as a clean volume boost |
| `Morning-Glory.md` | Flagship transparent overdrive (V4), with a toggle/remote-switchable higher-gain boost mode |
| `Colour-Box-10.md` | Studio-grade multi-instrument preamp/shifting-EQ/distortion utility with combo XLR/1/4" input and phantom power |
| `Colour-Box-V2.md` | Studio-grade tube preamp/EQ/DI utility with balanced XLR out and Hi/Lo headroom switch; predecessor to Colour Box 10 |
| `Troika.md` | JHS x Third Man Hardware studio delay (mic-preamp-equipped) — Repeats/Volume/Distance/Mic Gain |
| `Big-Muff-2.md` | EHX x JHS dual-op-amp Big Muff variant, more cutting/aggressive than the standard Big Muff Pi |
| `Kilt-10.md` | Two-in-one dirt box/boost with dual clipping toggles spanning overdrive to gated fuzz, plus Red Remote jack |
| `Notaklon.md` | Klon Centaur-style transparent overdrive with a Shamrock mod switch for extra gain/clipping; also sold in Splatter/Pink colorways |
| `Hard-Drive.md` | High-gain '90s-style distortion with a sweepable-midrange 3-band EQ and hard-limiting clipping stage |
| `Flight-Delay.md` | Analog-voiced delay with switchable Analog/Reverse/Digital modes, tap tempo, and built-in chorus/vibrato modulation |
| `The-Violet.md` | Lari Basilio signature distortion/overdrive with pre-distortion midrange shaping ahead of a post-gain Bass/Treble EQ |
| `Kodiak.md` | Tap-tempo tremolo with four waveforms, subdivisions, and tap/expression jack |
| `PackRat.md` | Nine-in-one ProCo RAT-style distortion, rotary-selecting between historical RAT circuit variants; also sold in a White colorway |
| `Bonsai.md` | Nine-in-one Tube Screamer-family overdrive selecting between historical Screamer circuits from OD-1 through Keeley Mod Plus |
| `Muffuletta.md` | Six-in-one Big Muff Pi-style fuzz selecting between Triangle, Rams Head, Pi, Civil War, Russian, and JHS-original circuit eras |
| `Artificial-Blonde.md` | Madison Cunningham signature true pitch-vibrato pedal with dual switchable presets and stereo output |
| `Pulp-N-Peel-V4.md` | Compressor/preamp/DI box with parallel blend, active EQ, and a Dirt toggle for mild grit; balanced XLR DI out |
| `Clover.md` | FET preamp/boost based on the 1984 Boss FA-1, with 3-band active EQ and a Full-EQ/No-Mid/No-EQ mode switch |
| `Haunting-Mids.md` | Dedicated sweepable-mids EQ preamp (400Hz–7.5kHz, ±15dB) with a Lo/Hi "Q" toggle |
| `PG-14.md` | Paul Gilbert signature FET distortion with an active mid-freq preamp stage and a Push/Drive gain-staging pair |
| `Charlie-Brown-V4.md` | Mid-gain overdrive modeled on a Marshall Bluesbreaker/JTM45-style circuit, with 3-band active EQ |
| `Angry-Charlie-V3.md` | High-gain distortion modeled on a Marshall JCM800-style circuit, with 3-band active EQ |
| `Crayon.md` | Simplified Colour Box-style preamp/drive/fuzz with a Pre-Vol gain stage, Tilt EQ, and switchable Hi-Pass filter |
| `Cheese-Ball.md` | Faithful recreation of the Lovetone Big Cheese fuzz, with a 4-position mode selector |
| `Moonshine-V2.md` | Heavily modified Tube Screamer-derived overdrive with an internal 18V charge pump and a Proof gain-voicing toggle |
| `Milkman.md` | Slap-delay + clean boost combo (JHS x Milkman Sound) with independent footswitches for each side |

#### 3 Series — budget single-circuit line ($99 each)

| File | What it is |
|---|---|
| `3-Series-Bit-Crusher.md` | Compact bit/sample-rate crusher with switchable low-pass/high-pass filter voicing |
| `3-Series-Chorus.md` | Simple Rate/Depth/Volume chorus with a toggle for dry-free true vibrato |
| `3-Series-Compressor.md` | Attack/Sustain/Volume compressor with a Bright-EQ toggle |
| `3-Series-Delay.md` | 80–800ms digital delay switchable between clean digital and dark analog/bucket-brigade voicing |
| `3-Series-Distortion.md` | Volume/Filter/Distort distortion with saturated-vs-crunchy gain toggle |
| `3-Series-Flanger.md` | Blend/Rate/Intensity analog-style flanger with a hardware-tape-flange toggle |
| `3-Series-Fuzz.md` | Bias/Fuzz/Volume fuzz with a Fat (bass boost) toggle |
| `3-Series-Glitch-Delay.md` | DL4-inspired stuttering/glitching delay with randomized repeat artifacts |
| `3-Series-Hall-Reverb.md` | Cathedral/hall-style reverb with a Dampen tone control and modulated-decay toggle |
| `3-Series-Harmonic-Trem.md` | Dual-mode tremolo switching between standard amp trem and Fender-style harmonic trem |
| `3-Series-Octave-Reverb.md` | Eno-style shimmer reverb blending an octave layer (up or down) into the reverb tail |
| `3-Series-Oil-Can-Delay.md` | Warbly electrostatic-delay emulation based on vintage 1959 oil-can delay tech |
| `3-Series-Overdrive.md` | Volume/Body/Drive overdrive with saturated-vs-crunchy gain toggle |
| `3-Series-Phaser.md` | Six-stage 1970s-style phaser with a Blend control and resonance-adding Feedback toggle |
| `3-Series-Reverb.md` | General-purpose Verb/EQ/Decay reverb with a Pre-Delay toggle |
| `3-Series-Ring-Modulator.md` | Dual-mode ring mod: Way Huge Ringworm-style vs. Green Ringer octave-up-style |
| `3-Series-Rotary-Chorus.md` | Leslie/rotary-speaker emulation with a toggle that adds room reverb |
| `3-Series-Screamer.md` | Tube Screamer-style overdrive based on JHS's own Strong Mod, switchable symmetrical/asymmetrical clipping |
| `3-Series-Tape-Delay.md` | 15–950ms tape-echo emulation (RE-201-inspired) with a Flutter/warble toggle |

### Other/ — one-off boutique pedals, by category

#### Compression
| File | What it is |
|---|---|
| `Benson-Amps-Germanium-Preamp.md` | Low/medium-gain preamp-boost-overdrive, germanium first gain stage |
| `J-Rockett-Airchild-660.md` | Fairchild 660-style studio compressor |
| `Origin-Effects-Cali76-FET-Compressor.md` | 1176-style FET compressor with gain-reduction meter |
| `Wampler-Ego-76-Compressor.md` | 1176-style FET compressor, console-style Attack/Release/Blend |
| `Keeley-Compressor-Plus.md` | Studio-style compressor, Sustain/Attack/Level/Blend/Tone + coil-type switch |
| `MXR-Dyna-Comp.md` | Classic 2-knob (Output/Sensitivity) optical-style compressor |

#### Drive / overdrive / distortion / fuzz
| File | What it is |
|---|---|
| `Analogman-King-of-Tone.md` | Hand-built dual overdrive with a long waitlist, real circuit behind the Joyo King of Kings clone |
| `Electro-Harmonix-Big-Muff-Pi.md` | Classic wooly fuzz/sustainer, current standard-production 3-knob unit |
| `Fender-Hello-Kitty-Fuzz.md` | Op-amp fuzz, mild grit to full fuzz |
| `Ibanez-Tube-Screamer-TS9.md` | Classic mid-boosting overdrive (TS9, representative of the TS9/TS808 line) |
| `JHS-Hard-Drive.md` | Original high-gain '90s-style distortion |
| `Keeley-Blues-Disorder.md` | Bluesbreaker + OCD circuits combined, 4 voicings |
| `Keeley-Muse-Drive.md` | Andy Timmons signature OD (renamed "Mk3 Driver") |
| `Klon-Centaur.md` | Legendary transparent OD, original/discontinued — reference only |
| `Klon-KTR.md` | Current-production Klon reissue, transparent OD |
| `MXR-RR104-Distortion-Plus.md` | Randy Rhoads signature MXR Distortion+ |
| `ProCo-Rat.md` | Raw op-amp distortion (RAT2), inverted Filter control |
| `Sola-Sound-Tone-Bender-MKII.md` | Vintage 1966 3-transistor germanium fuzz, made famous by Jimmy Page/Jeff Beck — reference only |
| `Timmy-Overdrive.md` | Hand-built (Paul Cochrane) transparent low/medium-gain overdrive with reversed cut-style EQ |
| `Wampler-Germanium-Tumnus-Deluxe.md` | Klon-style transparent OD, germanium diodes + 3-band EQ |
| `Warm-Audio-Warm-Bender.md` | 3-circuit Tone Bender-style fuzz with SAG control |
| `Zvex-Fuzz-Factory.md` | Deep 5-knob silicon fuzz, tunable from vintage fuzz to self-oscillating noise |
| `Zvex-Woolly-Mammoth.md` | Bass-friendly fuzz with a signature smooth-gating "Pinch" control |
| `Electro-Harmonix-Soul-Food.md` | Klon-derived transparent overdrive, Drive/Treble/Volume |
| `Ibanez-Tube-Screamer-TS808.md` | Original 1979 Tube Screamer, asymmetric-clipping "brown mod" vs. the TS9 |
| `Way-Huge-Green-Rhino-MkIV.md` | Tube Screamer-derived OD w/ added EQ shelves + Classic (vintage 3-knob) mode |
| `Way-Huge-Swollen-Pickle-MkIIS.md` | Big Muff-derived high-gain fuzz, Filter/Scoop/Crunch + internal Voice/Clip trims |
| `Fulltone-OCD.md` | Amp-like drive, HP/LP voicing switch — manufacturing status uncertain post-2020/2024 relaunch |
| `Fulltone-Full-Drive2-v2.md` | Dual-channel drive, two 3-position clipping toggles + boost footswitch — same Fulltone status caveat |
| `Dunlop-Jimi-Hendrix-Fuzz-Face.md` | Silicon (BC108) 2-knob (Fuzz/Volume) signature Fuzz Face |
| `Death-By-Audio-Fuzz-War.md` | High-gain gated Big Muff-derived fuzz, Volume/Fuzz/Tone |
| `Vemuram-Jan-Ray.md` | Blackface Fender-voiced transparent low/medium-gain OD |
| `Suhr-Riot.md` | Amp-like high-gain distortion, DIST/LEVEL/TONE + 3-way voicing (current production is the original 2009 circuit) |
| `Friedman-BE-OD-Deluxe.md` | Dual-channel high-gain OD/distortion modeled on the BE-100 "Brown Eye" amp |
| `Horizon-Devices-Precision-Drive.md` | Misha Mansoor (Periphery) tightening/saturation drive w/ built-in gate |
| `Maestro-Fuzz-Tone-FZ-M.md` | Gibson/Maestro reissue of the 1962 FZ-1, Attack/Tone/Level + Classic/Modern switch |
| `Foxx-Tone-Machine.md` | 1970s octave fuzz — discontinued, reference only (see file for current-alternative pointers) |
| `Beetronics-Royal-Jelly.md` | Dual OD/fuzz blender, Queen/King footswitch-selectable voicings |
| `Nobels-ODR-1.md` | Transparent overdrive, Drive/Spectrum/Level, buffered bypass |
| `Walrus-Audio-Voyager.md` | Klon-style preamp/OD (MKII), Gain/Volume/Tone/Mid/Freq + 5-way clipping switch |
| `Wampler-Pinnacle-Deluxe-V2.md` | Classic-rock OD/distortion, 3-band EQ + footswitchable mid-boost |
| `Wampler-Plexi-Drive-Deluxe-V2.md` | British/Marshall-voiced OD, 3-band EQ + footswitchable pre-gain boost |
| `Catalinbread-Karma-Suture.md` | Harmonic Percolator-derived OD (Ge) / fuzz (Si) — discontinued/legacy |

#### Boost / clean preamp
| File | What it is |
|---|---|
| `Xotic-EP-Booster.md` | Discrete-FET clean boost (+20dB), Echoplex EP-3 preamp-inspired |
| `Xotic-BB-Preamp.md` | Tube Screamer-derived preamp/OD, active Bass/Treble EQ |
| `Keeley-Katana-Clean-Boost.md` | Dual-FET Class A boost, push/pull Volume (clean boost / ~+30dB overdriven) |
| `MXR-Micro-Amp.md` | Single-knob clean boost, up to +26dB |
| `Greer-Amps-Lightspeed.md` | Low-gain clean-boost/organic overdrive, Drive/Loudness/Freq, true bypass |

#### Envelope filter / auto-wah
| File | What it is |
|---|---|
| `Electro-Harmonix-Nano-Q-Tron.md` | Envelope filter, Vol/Drive/Q + LP/BP/HP and Up/Down sweep switches |
| `MXR-Bass-Envelope-Filter.md` | 5-knob analog envelope filter/auto-wah (bass-friendly, not a foot-wah) |

#### Octave / pitch
| File | What it is |
|---|---|
| `Electro-Harmonix-Lizard-King.md` | Bass octave fuzz, blendable sub-octave |
| `Keeley-Octa-Psi-Transfigurating-Fuzz.md` | Fuzz + polyphonic pitch-shifter/octave, independently footswitchable |
| `Electro-Harmonix-POG2.md` | Polyphonic octave generator, full slider/preset control set |

#### Modulation
| File | What it is |
|---|---|
| `Diamond-Vibrato-V2.md` | MN3007 analog pitch vibrato, footswitch doubler |
| `MXR-Phase-90.md` | Single-knob analog phaser (M101), the classic orange stompbox |
| `Electro-Harmonix-Small-Stone-Nano.md` | Compact 4-stage OTA phaser reissue, Rate + Color feedback switch |
| `Electro-Harmonix-Deluxe-Electric-Mistress-XO.md` | Analog BBD flanger w/ Filter Matrix mode — current-production status ambiguous, see file |
| `MXR-Phase-95.md` | Mini phaser, 45/90 mode switch + vintage-voicing Script switch |
| `Old-Blood-Noise-Endeavors-Dweller-Phase-Repeater.md` | Phaser/delay hybrid — allpass filtering through inter-stage delay lines |
| `Walrus-Audio-Julia.md` | Analog BBD chorus/vibrato (V2), Rate/Depth/Lag/D-C-V blend |

#### Delay / echo
| File | What it is |
|---|---|
| `MXR-M309-Joshua-Ambient-Echo.md` | Edge-style dotted-eighth/multi-voice ambient delay |
| `Electro-Harmonix-Deluxe-Memory-Man.md` | Full-size analog BBD delay/chorus/vibrato (MEMXO) |
| `Ibanez-AD9-Analog-Delay.md` | MN3205 BBD-based analog delay, 10-300ms, dual dry/effect outs |
| `MXR-Carbon-Copy.md` | Analog bucket-brigade delay, standard 3-knob version |
| `TC-Electronic-Flashback-2.md` | Digital delay w/ built-in looper, 8 delay types + MASH footswitch |
| `Line6-DL4-MkII.md` | Delay + looper, 30 delay models, current-production successor to the original DL4 |
| `Catalinbread-Belle-Epoch-Deluxe.md` | EP-3 tape-echo emulation, 6-mode Echo Program engine |
| `Meris-Polymoon.md` | Cascaded modulated delay w/ synced phaser and dynamic flanger |
| `Red-Panda-Particle-2.md` | Granular delay/pitch-shift, current V2 |
| `Walrus-Audio-Mako-Series-D1.md` | MKII High-Fidelity Delay, 6 algorithms, stereo I/O + MIDI + expression |

#### Reverb / ambient
| File | What it is |
|---|---|
| `Electronic-Audio-Experiments-Prismatic-Wall.md` | Karplus-Strong string-resonance reverb/synth hybrid |
| `MXR-M307-Layers.md` | Stereo harmonic-sustain layer builder |
| `Walrus-Audio-Fundamental-Ambient-Reverb.md` | Budget-tier 3-algorithm ambient reverb |
| `Electro-Harmonix-Holy-Grail-Nano.md` | Single-knob Spring/Hall/Flerb digital reverb |
| `TC-Electronic-Hall-of-Fame-2.md` | 8-algorithm digital reverb + Shimmer, MASH footswitch dynamics |
| `Meris-Mercury7.md` | Algorithmic ambient reverb (Ultraplate/Cathedra), Lexicon 224-inspired |
| `Walrus-Audio-Slo-Multi-Texture-Reverb.md` | Mono ambient/texture reverb, 3 algorithms + sustain-hold footswitch |

Note: Strymon's reverb pedals (including BigSky/BigSky MX) now live in `Pedals/Strymon/`, Strymon's full current catalog.

#### Experimental / multi-mode
| File | What it is |
|---|---|
| `Warm-Audio-RingerBringer.md` | Analog ring modulator with drive stage + CV/expression |
| `Electro-Harmonix-Freeze.md` | Sound-retainer/freeze pedal, Fast/Slow/Latch modes, dual dry/freeze outs |

#### Preamp / amp-in-a-box / DI
| File | What it is |
|---|---|
| `Friedman-IR-D.md` | Dual real-tube preamp + onboard IR/cab sim, stand-alone amp replacement |

#### Bass preamp / DI
| File | What it is |
|---|---|
| `Darkglass-B7K-Ultra.md` | Bass preamp/OD/DI, 4-band EQ + Grunt/Attack switches (bass-specific, unlike most of this library) |

#### Modeling / multi-effects workstations
| File | What it is |
|---|---|
| `Eventide-H9.md` | Compact multi-effect algorithm workstation (Gen 2), 74+ algorithms, H90's little sibling |
| `Hologram-Chroma-Console.md` | Stereo 20-algorithm workstation, 4 reorderable effect modules |
| `IK-Multimedia-ToneX-One.md` | AI amp/cab/effects capture player |
| `Source-Audio-Artifakt-Lo-Fi-Elements.md` | 7-engine lo-fi/degradation multi-effects |

#### Synth
| File | What it is |
|---|---|
| `Panda-Audio-Future-Impact.md` | Multi-engine bass/guitar synth pedal (V3) with 5 instrument modes and 99 presets |
