# This is a list of IR (Impulse Response) files available to use in the CAB slot on the GP-5, in place of one of the built-in CAB models.

# Unlike a NAM (which replaces AMP + CAB together as one full capture), an IR replaces only the CAB/speaker stage — pair it with one of the GP-5's own AMP models as normal.

# Source: Origin Effects IR Cab Library v3.0 "+Expansion Pack 1" (free, origineffects.com). 9 cabinets, each captured in 3 top-level mic-mix blends — Bright / Medium / Dark — plus the individual mic captures each blend was built from. All files supplied at 200ms length, 44.1k/48k/96k sample rates. V3 corrected an error in the original manual: "British Straight" (Marshall 1960B) was mislabeled as G12M Greenback in V1/V2 — it's actually loaded with G12H 55Hz speakers. That correction is reflected below.

# Mic legend for the individual (non-"Mix") files: 57 = Shure SM57, 87 = Neumann U87, 160 = Beyerdynamic M160 (ribbon), 421 = Sennheiser MD421. Default to the "Mix" file for each blend unless building a custom blend from the individual mics.

# "Suggested GP-5 AMP pairing" below is our own mapping (not from Origin Effects) — the GP-5 AMP model whose real-amp counterpart most closely matches the amp this cab was captured with, for patches that use one of these IRs for CAB instead of a GP-5 CAB model.

## Bass/Guitar Cab IR Library (loaded on device — User IR slots 1-20)

Unlike the Origin Effects pack below (reference material, not confirmed loaded), these are actually loaded onto the GP-5's 20 `User IR` slots right now. The catalog has a distinct entry per slot (`"User IR 1"` .. `"User IR 20"`, each with its own real name — unlike the NAM/SnapTone slots, which all collide on `name: "Empty"`), so a confirmed slot here encodes directly: set `CAB` to `"model": "User IR <N>"` with `always_on: true` and a real `VOL` setting — no `model: null` placeholder needed, no encoder change needed either. `AMP` still picks a real GP-5 model as normal, same as any IR use.

- Apg115 (Ampeg Heritage B-15, 1x15", ceramic Eminence driver designed specifically for it): prominent peak at 100Hz, adds girth. **Slot: 1**. Suggested AMP pairing: Classic Bass (Ampeg SVT) — same brand family.
- Apg115410 (summed Ampeg Heritage B-15 + HLF 410): flat response, thunderous. **Slot: 2**. Suggested AMP pairing: Classic Bass.
- Apg810 (Ampeg SVT-810E, custom-designed Eminence speakers): the classic SVT stack. **Slot: 3**. Suggested AMP pairing: Classic Bass — the most direct real-world pairing of this set.
- EBS410 (EBS ProLine 410, 2" tweeter): accentuated high-mids with a characterful boost at 2-3kHz — sits well in a mix, particularly on clean tones. **Slot: 4**. No EBS-family AMP model in the GP-5 catalog; pick by ear, favors clean/lower-gain bass patches given the hi-mid clarity.
- EVM112 (Electro-Voice EVM12L speaker): works equally well for guitar or bass. **Slot: 5**. Pick the AMP model per the patch's actual instrument — no bass/guitar-specific pairing implied by the cab itself.
- Hartke410 (Hartke XL410, aluminum cones): bright, aggressive. **Slot: 6**. No direct AMP match in the catalog; pairs well with a grittier/driven bass tone (e.g. alongside Bass OD or a fuzz pedal).
- Mesa215 (Mesa Boogie Road Ready 2x15, bright tweeter): modern, crushing tone. **Slot: 7**. Suggested AMP pairing: Mess Bass (Mesa/Boogie Bass 400) — same brand family.
- Sunn215 (Sunn 200S 2x15): one-of-a-kind fat sound, works great with distortion/fuzz. **Slot: 8**. No Sunn-family AMP model in the catalog; reach for this one specifically on driven/fuzz bass patches.
- TC410 (TC Electronic BC 410, custom-designed Eminence speakers): simple, rather flat response with a mild 100Hz boost. **Slot: 9**. No TC-family AMP model; the flat/neutral response makes it a safe general-purpose pairing with any GP-5 bass AMP.
- V30112 (Celestion V30 guitar cab speaker in an isolation cabinet, sub mic blended in for low-end): the only guitar cab in this set, not bass. **Slot: 10**. Suggested AMP pairing: a modern high-gain guitar model (e.g. Bog RedV, Eagle 120, Mess DualV) — same V30 character as the "Modern Boutique" cab in the Origin Effects pack below.

## Origin Effects IR list

### British Straight — Marshall 1960B, 4x12" Celestion G12H 55Hz (1970)
Beefier low end from the 1960B straight cab, articulate-yet-warm voice from the G12H 55Hz speakers, complementing the bright and aggressive tone of vintage Marshall amps — thundering riffs and singing leads alike. Notable users: Jimi Hendrix, Jimmy Page, Tony Iommi, Richie Blackmore.
Suggested GP-5 AMP pairing: UK 45 (JTM45), UK 50JP (JMP50), or UK 800 (JCM800) — pick by era/gain.
Files:
- Bright: British Straight 4x12 Bright Mix, Bright 57, Bright 160
- Medium: British Straight 4x12 Medium Mix, Medium 160, Medium 421
- Dark: British Straight 4x12 Dark Mix, Dark 87, Dark 160, Dark 421

### American Twin — Fender Twin Reverb, 2x12" JBL D120F (1965)
Aluminum dust cap gives a hi-fi frequency response — excels at detailed Fender cleans and light overdrive; extended top end means heavier overdrive may want the darker blend. Notable users: Stevie Ray Vaughan, Albert Lee, Keith Richards, Eric Johnson, James Burton, Eric Clapton.
Suggested GP-5 AMP pairing: Dark Twin (Fender 65 Twin Reverb) — direct match.
Files:
- Bright: American Twin 2x12 Bright Mix, Bright 87, Bright 160
- Medium: American Twin 2x12 Medium Mix, Medium 87, Medium 160
- Dark: American Twin 2x12 Dark Mix, Dark 87, Dark 160

### British Alnico — Vox AC30, 2x12" Silver Alnico (1964)
Chiming cleans, cutting driven tones — the "British Invasion" icon, at home in rock, indie, and just about everything between. Notable users: The Beatles, Oasis, Brian May, Radiohead, Tame Impala, Elliott Smith, Elvis Costello, Arctic Monkeys, The Cure.
Suggested GP-5 AMP pairing: Foxy 30N (AC30HW Normal) for clean, Foxy 30TB (AC30HW Top Boost) for driven.
Files:
- Bright: British Alnico 2x12 Bright Mix, Bright 87, Bright 160, Bright 421
- Medium: British Alnico 2x12 Medium Mix, Medium 87, Medium 160, Medium 421
- Dark: British Alnico 2x12 Dark Mix, Dark 87, Dark 160, Dark 421

### Magma Vintage — Magnatone 213 Troubadour, 1x12" Oxford 12K5 Alnico (1961)
Tighter and more refined cousin of the Fender Tweed Deluxe family; versatile clean-to-driven range, best known (on the real amp) for pitch-shifting vibrato. Notable users: Lonnie Mack, Bo Diddley, Buddy Holly.
Suggested GP-5 AMP pairing: no direct Magnatone model in the GP-5 catalog — nearest by character is Tweedy (Fender Tweed Deluxe) or L-Star CL for the clean/refined end; pick by ear.
Files:
- Bright: Magma Vintage 1x12 Bright Mix, Bright 87, Bright 160, Bright 421
- Medium: Magma Vintage 1x12 Medium Mix, Medium 87, Medium 160, Medium 421
- Dark: Magma Vintage 1x12 Dark Mix, Dark 87, Dark 160, Dark 421

### Brown Deluxe — Fender Brown Deluxe, 1x12" Oxford 12K5 Ceramic (1961)
Thick overdrive and bias tremolo in a small pine cab; silky cleans through swampy southern rock to unruly cranked-combo overdrive, mid-focused. Notable users: Billy Gibbons, Neil Young, John Fogerty.
Suggested GP-5 AMP pairing: no brownface model in the GP-5 catalog — closest relative is Tweedy (Fender Tweed Deluxe), though the brownface circuit is more mid-focused/less woody than the tweed; pick by ear.
Files:
- Bright: Brown Deluxe 1x12 Bright Mix, Bright 57, Bright 87, Bright 160
- Medium: Brown Deluxe 1x12 Medium Mix, Medium 57, Medium 87, Medium 160
- Dark: Brown Deluxe 1x12 Dark Mix, Dark 57, Dark 160, Dark 421

### Modern Boutique — Bogner 412ST, 4x12" Celestion Vintage 30 (2007)
Modern high-gain cab with punch and depth; V30s are the go-to metal speaker — defined and cutting in the upper mids while keeping some vintage Celestion character. Bridges vintage and modern high-gain tones.
Suggested GP-5 AMP pairing: Bog RedV (Bogner XTC Red Channel) — same amp family.
Files:
- Bright: Modern Boutique 4x12 Bright Mix, Bright 57, Bright 160, Bright 421
- Medium: Modern Boutique 4x12 Medium Mix, Medium 57, Medium 160, Medium 421
- Dark: Modern Boutique 4x12 Dark Mix, Dark 57, Dark 160, Dark 421

### Tweed Combo — Fender 5E3 Tweed Deluxe, 1x12" Jensen P12Q (1955)
Low output power, uniquely ragged and raucous overdrive; more nuanced than its "fuzzy student amp" reputation suggests. Notable users: The Eagles, Neil Young, Larry Carlton, The Edge, Billy Gibbons, Mike Campbell.
Suggested GP-5 AMP pairing: Tweedy (Fender Tweed Deluxe) — direct match.
Files:
- Bright: Tweed Combo 1x12 Bright Mix, Bright 57, Bright 87, Bright 160
- Medium: Tweed Combo 1x12 Medium Mix, Medium 57, Medium 87, Medium 160
- Dark: Tweed Combo 1x12 Dark Mix, Dark 57, Dark 87, Dark 160

### British Checkerboard — Marshall 1960A, 4x12" Celestion G12M Greenback (1972)
Probably the most famous amp/speaker pairing in rock history. Balanced midrange, articulate top end — punch, crunch and jangle in equal measure. The angled 1960A cab keeps things tight and warm while still delivering hefty rhythm tones and cutting leads. Notable users: Jimi Hendrix, Angus Young, Eddie Van Halen, Eric Clapton.
Suggested GP-5 AMP pairing: UK 45 (JTM45), UK 50JP (JMP50), or UK 800 (JCM800) — same Marshall family as British Straight; this is the brighter/crunchier Greenback voicing vs. British Straight's G12H.
Files:
- Bright: British Checkerboard 4x12 Bright Mix, Bright 160, Bright 421
- Medium: British Checkerboard 4x12 Medium Mix, Medium 160, Medium 421
- Dark: British Checkerboard 4x12 Dark Mix, Dark 160, Dark 421

### Lux-O-Vibe — Fender Vibrolux, 2x10" Oxford 10L5 (1964)
Fender's most collectible black-panel amp — a compact cab with a pair of 10" speakers gives more midrange punch than the usual 12"-loaded Fender combos, with a rich, detailed voice that particularly excels at lead tones. Notable users: Roy Buchanan, Jeff Buckley, John Fogerty.
Suggested GP-5 AMP pairing: no direct Vibrolux model in the GP-5 AMP catalog (the GP-5's own "Dark VIT 1x12" is a CAB-only Vibrolux model, not paired with an AMP sim) — nearest blackface-family AMP model is Dark Twin (Fender 65 Twin Reverb); pick by ear, expect tighter mids than the real Vibrolux.
Files: (note the pack uses "LuxOVibe" with no hyphens in the actual file names)
- Bright: LuxOVibe 2x10 Bright Mix, Bright 160, Bright 421
- Medium: LuxOVibe 2x10 Medium Mix, Medium 160, Medium 421
- Dark: LuxOVibe 2x10 Dark Mix, Dark 160, Dark 421
