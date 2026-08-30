# Pedal index

Every pedal file in this directory, by folder. Update this whenever a pedal file is added, renamed, or removed.

```
Pedals/
  Fixed-Board/         Michael's actual pedalboard (see below)
  Boss/                Full current Boss catalog
  EarthQuaker-Devices/ Full current EarthQuaker Devices catalog
  Chase-Bliss/         Full current Chase Bliss Audio catalog
  Summer-School/       Full current Summer School Electronics catalog
  Other/               Everything else — one-off boutique pedals by various brands
```

Within `Boss/`, `EarthQuaker-Devices/`, `Chase-Bliss/`, and `Summer-School/`, filenames drop the redundant brand prefix (the folder already says it) — e.g. `Boss/DS1-Distortion.md`, not `Boss/Boss-DS1-Distortion.md`. `Fixed-Board/` and `Other/` keep full brand-model names since they aren't single-brand folders.

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

### Other/ — one-off boutique pedals, by category

#### Compression
| File | What it is |
|---|---|
| `Benson-Amps-Germanium-Preamp.md` | Low/medium-gain preamp-boost-overdrive, germanium first gain stage |
| `J-Rockett-Airchild-660.md` | Fairchild 660-style studio compressor |
| `Origin-Effects-Cali76-FET-Compressor.md` | 1176-style FET compressor with gain-reduction meter |
| `Wampler-Ego-76-Compressor.md` | 1176-style FET compressor, console-style Attack/Release/Blend |

#### Drive / overdrive / distortion / fuzz
| File | What it is |
|---|---|
| `Fender-Hello-Kitty-Fuzz.md` | Op-amp fuzz, mild grit to full fuzz |
| `Ibanez-Tube-Screamer-TS9.md` | Classic mid-boosting overdrive (TS9, representative of the TS9/TS808 line) |
| `JHS-Hard-Drive.md` | Original high-gain '90s-style distortion |
| `Keeley-Blues-Disorder.md` | Bluesbreaker + OCD circuits combined, 4 voicings |
| `Keeley-Muse-Drive.md` | Andy Timmons signature OD (renamed "Mk3 Driver") |
| `Klon-Centaur.md` | Legendary transparent OD, original/discontinued — reference only |
| `Klon-KTR.md` | Current-production Klon reissue, transparent OD |
| `MXR-RR104-Distortion-Plus.md` | Randy Rhoads signature MXR Distortion+ |
| `Wampler-Germanium-Tumnus-Deluxe.md` | Klon-style transparent OD, germanium diodes + 3-band EQ |
| `Warm-Audio-Warm-Bender.md` | 3-circuit Tone Bender-style fuzz with SAG control |

#### Octave / pitch
| File | What it is |
|---|---|
| `Electro-Harmonix-Lizard-King.md` | Bass octave fuzz, blendable sub-octave |
| `Keeley-Octa-Psi-Transfigurating-Fuzz.md` | Fuzz + polyphonic pitch-shifter/octave, independently footswitchable |

#### Modulation
| File | What it is |
|---|---|
| `Diamond-Vibrato-V2.md` | MN3007 analog pitch vibrato, footswitch doubler |
| `MXR-Phase-90.md` | Single-knob analog phaser (M101), the classic orange stompbox |

#### Delay / echo
| File | What it is |
|---|---|
| `MXR-M309-Joshua-Ambient-Echo.md` | Edge-style dotted-eighth/multi-voice ambient delay |

#### Reverb / ambient
| File | What it is |
|---|---|
| `Electronic-Audio-Experiments-Prismatic-Wall.md` | Karplus-Strong string-resonance reverb/synth hybrid |
| `MXR-M307-Layers.md` | Stereo harmonic-sustain layer builder |
| `Strymon-BigSky-MX.md` | Flagship 12-algorithm reverb, dual simultaneous engines |
| `Walrus-Audio-Fundamental-Ambient-Reverb.md` | Budget-tier 3-algorithm ambient reverb |

#### Experimental / multi-mode
| File | What it is |
|---|---|
| `Warm-Audio-RingerBringer.md` | Analog ring modulator with drive stage + CV/expression |

#### Preamp / amp-in-a-box / DI
| File | What it is |
|---|---|
| `Friedman-IR-D.md` | Dual real-tube preamp + onboard IR/cab sim, stand-alone amp replacement |

#### Modeling / multi-effects workstations
| File | What it is |
|---|---|
| `Hologram-Chroma-Console.md` | Stereo 20-algorithm workstation, 4 reorderable effect modules |
| `IK-Multimedia-ToneX-One.md` | AI amp/cab/effects capture player |
| `Source-Audio-Artifakt-Lo-Fi-Elements.md` | 7-engine lo-fi/degradation multi-effects |
