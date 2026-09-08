# This is a list of NAM files available to use in the N/S slot on the GP-5.  If the N/S slot is used then you cannot use the AMP & CAB slots

# All NAM files have VOL (1-100), Gain (1-100), Treble (1-100), Middle (1-100), Bass (1-100) options. These are all full captures of Amp + Cab since we cannot use an IR with them. 

# Weighting (updated 2026-09-08): bass NAMs and lower-gain/edge-of-breakup guitar NAMs now get strong preference — the GP-5's NAM (N->S) model conversion has proven out well for both. High-gain guitar amps keep the older, more conservative weighting: lean towards the GP-5's own Amp/Cab modules unless a specific NAM is a genuinely more accurate pick than the GP-5 modules for that patch.

# Slot (added 2026-09-08): the GP-5 has 80 numbered on-device SnapTone slots ("Tone Catch 1".."Tone Catch 80" internally), the N->S equivalent of the 20 User IR slots. When a capture below is actually loaded onto one of my 80 slots, it gets a "Slot: N" tag — put that same number in the patch JSON's `"nam": {"slot": N, ...}` field (see Prompts/gp5_prompt.md) and the encoder writes a real, active N->S reference into the .prst instead of leaving it inactive/documentation-only. No "Slot:" tag = not loaded onto the device yet (or I haven't confirmed which slot) — treat as informational only, same as before. This is personal device state, private to me — the website's NAM/IR handling is untouched by this.

## NAM list
- Marshall Zakk Wylde JCM800 2203ZW: The Marshall JCM800 2203ZW is a highly collectible, limited-edition 100-watt signature amplifier head released in 2002. Only 600 units were ever manufactured globally, making it an incredibly rare piece of rock history. It captures the exact raw, aggressive tone Zakk Wylde used with Ozzy Osbourne and Black Label Society. High Sensitivity - Gain 5. MESA V30 Oversized Cab
- 5150 Stealth 100w Mesa OS Full Rig (Blue Channel): EVH 5150 III Stealth 100w, Blue channel unboosted.  Mesa Boogie Oversized (Mesa V30), blend of SM57 and VR2 through a Behringer Eurorack UB80. 
- 5150 Stealth 100w Mesa OS Full Rig (Red Channel): EVH 5150 III Stealth 100w, Red channel unboosted.  Mesa Boogie Oversized (Mesa V30), blend of SM57 and VR2 through a Behringer Eurorack UB80.
- 5150 Stealth 100w Mesa OS Full Rig (Green Channel): EVH 5150 III Stealth 100w, Green channel boosted with Boss SD-1.  Mesa Boogie Oversized (Mesa V30), blend of SM57 and VR2 through a Behringer Eurorack UB80.
- Two-Rock John Mayer Signature Prototype Signature #83 + CAB Dumble Steel String Singer + BOOST
- Two-Rock John Mayer Signature Prototype Signature #83 + CAB Dumble Steel String Singer + Tubescreamer
- Two-Rock John Mayer Signature Prototype Signature #83 + CAB Dumble Steel String Singer
- Two-Rock John Mayer Signature Prototype Signature #83
- 1964 VOX AC30 Top Boost Super Twin: AMP SETTINGS: V2 T7.5 B8.7 C8 CAB: VOX 2X12 with vintage Alnico Silver speakers and original cones. MICS: R121, R160, U87 DESCRIPTION: This is a capture of the goldylocks version of the iconic JMI era AC30 Top Boost amp - an in-panel Top Boost Copper panel Super Twin (separate head and  2X12 CAB, which gives it moore oomph than the open back combo version) with Albion transformers taht are legendary for their chime and clarity. 
- Darkglass Harmonic Booster: Darkglass Harmonic Booster -> Aguilar DB 751 amplifier -> Darkglass DG412ES cabinet -> Shure SM7B microphone. **Slot: 60** (on-device name "DrkGlsHarm" — unverified against the actual file: a decoded test export named "DrkGlsCln" also pointed at slot 60, so double-check this one before trusting it for a real patch)
- Darkglass Vintage Deluxe: Darkglass Vintage Deluxe  -> Aguilar DB 751 amplifier -> Darkglass DG412ES cabinet -> Shure SM7B microphone. **Slot: 61** (on-device name "DrkGlsVDlx")
- Darkglass Alpha Omega (Distortion): Darkglass Alpha Omega (Alpha Side) -> Aguilar DB 751 amplifier -> Darkglass DG412ES cabinet -> Shure SM7B microphone. **Slot: 62** (on-device name "DrkGlsDist")
- Darkglass Alpha Omega (Fuzz): Darkglass Alpha Omega (Omega Side) -> Aguilar DB 751 amplifier -> Darkglass DG412ES cabinet -> Shure SM7B microphone. **Slot: 63** (on-device name "DrkGlsFuzz")
- Darkglass B7K Ultra: Microtubes B7K Ultra -> Aguilar DB 751 amplifier -> Darkglass DG412ES cabinet -> Shure SM7B microphone. **Slot: 64** (on-device name "DrkGlsB7K")

