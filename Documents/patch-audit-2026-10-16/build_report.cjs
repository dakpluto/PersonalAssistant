// Build the human-readable audit from the read-only inventory and authored notes.
const fs=require('fs'),path=require('path');
const here=__dirname,root=path.resolve(here,'../..');
const a=JSON.parse(fs.readFileSync(path.join(here,'inventory.json'),'utf8'));
const notes=new Map(fs.readFileSync(path.join(here,'recommendations.tsv'),'utf8').trim().split(/\r?\n/).map(l=>{const [n,priority,...t]=l.split('\t');return[Number(n),{priority,text:t.join('\t')}];}));
if(notes.size!==a.length)throw Error('Coverage mismatch');
const extra={
 3:'Rewrite Tidal Wave “bypassed” as “drive off, preamp active.”',
 24:'Give explicit Tidal Wave Level/EQ/toggle settings even with drive off; use the agreed set-wide board settings, or a documented neutral starting point if this is standalone.',
 33:'Document Tidal Wave drive off with preamp still active and specify its Level/EQ/toggles; the current bypass instruction does not remove it from the chain.',
 38:'The Tidal Wave footswitch leaves its preamp active: specify its Level/EQ/toggles rather than calling the entire pedal bypassed.',
 49:'Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.',
 50:'Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.',
 67:'Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.',
 107:'Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.',
 119:'Specify Tidal Wave preamp controls even with drive off; footswitch-off is not whole-pedal bypass.',
 137:'Leave King of Kings Right off in the first lead comparison: the RAT plus capture already supplies substantial saturation. Rename “Dry funk chops” as reduced-modulation chops unless Hall can also be bypassed.',
 142:'The write-up explicitly identifies patch VOL 70 as Michael’s 2026-10-01 adjustment. Preserve it.',
 146:'Correct the assertion that a board OD cannot be stomped independently of CTL. It can; keeping it bypassed is a tonal choice, not a hardware restriction.',
 155:'The catalog limits Slapback Time to 20–300ms, while this patch stores 320ms. For a 320ms free echo, change the algorithm to Analog (parameter key Feedback); for an eighth at 104 BPM, Slapback 288ms is within range. This range mismatch is definite; the pedal’s response to 320ms has not been observed.',
 171:'The complete write-up has the Donner compressor bypassed, so PRE COMP is the sole compressor. Keep that clear in the board instructions.',
 185:'Keep the board King of Kings Left as the rhythm push for the initial comparison; removing PRE Boost avoids piling two new pushes onto that baseline.'
};
const cites={
 1:'[Pat Metheny’s Offramp personnel](https://www.patmetheny.com/music/detail.cfm?id=39) names Steve Rodby, not Egan.',
 90:'[Yes’s official Going for the One credits](https://www.yesworld.com/discography/going-for-the-one/) establish the album/year and separate bass guitar from church organ.',
 95:'[Prince’s official Purple Rain album credits](https://discography.prince.com/albums/purple-rain) list BrownMark on bass. Album-level credits alone do not settle track-level mix details.'
};
const count={};for(const n of notes.values())count[n.priority]=(count[n.priority]||0)+1;
const link=r=>'../../'+r.file.replace(/\.json$/,'.md');
const state=v=>v.ctl?'CTL '+v.ctl_off_state+' → '+v.ctl_on_state+(v.midi?' + MIDI':''):v.midi?'MIDI, loads '+(v.start_state||'on'):'fixed';
const val=s=>Object.entries(s||{}).map(([k,v])=>k+' '+v).join(', ');
const chain=r=>Object.entries(r.j.modules).filter(([k,v])=>v.model).map(([k,v])=>`**${k} ${v.model}** (${state(v)}): ${val(v.settings)}`).join(' · ');
const name=r=>r.md.split(/\r?\n/)[0].replace(/^#\s*/,'');
const top=[79,155,146,181,152,90,55,135,4,60,84,133,149,136,105];
let out=`# GP-5 patch audit — 2026-10-16

Reviewed **195 patches: 135 bass and 60 guitar**. This is a design and file audit with proposed listening trials. **No patch settings, presets, PDFs, index entries or site uploads were changed.**

The main recommendation is to simplify several signal chains before replacing their amps. Many bass presets put a driven capture behind another drive and an input boost, then add room/hall at the loudest section. Several older guitar presets similarly stack compression, distortion, large presence boosts and extra gain on the board. That can make a patch bigger in isolation while reducing its attack and useful level contrast in a band.

## How to read this review

- **Critical:** a definite configuration defect with potentially severe playback consequences.
- **High:** a substantial design conflict, major outlier, unresolved sound dependency, or factual premise that affects the design.
- **Medium:** a worthwhile focused comparison; the architecture generally makes sense.
- **Low:** keep the main design; the proposed changes are small or optional.

Priority counts: **${Object.entries(count).map(([k,v])=>k+' '+v).join(' · ')}**. Priority is an order for review, not proof of bad sound.

All proposed numeric values are **starting points for an A/B comparison**, not measured corrections. A Mix value of 25 does not prove 25% wet; a VOL value of 50 does not prove unity; EQ numbers below are GP-5 control values, not calibrated dB. Reducing several stages changes perceived volume, so do not judge the result until it is level-matched. The strong dry-bass preference here applies to supporting bass parts; Egan, Adrift and explicitly synth/ambient adaptations keep their purposeful effects.

## Start with these patches

| Order | Patch | First action |
|---|---|---|
`;
const first={79:'Add missing active EQ VOL; then review the drive/EQ stack.',155:'Resolve Slapback 320ms outside its catalog range; retain Michael’s levels.',146:'Resolve the manual IR dependency, then simplify the heavy state.',181:'Reduce the comp/drive/EQ stack and check whether the verse cleans up.',152:'Reduce extreme EQ and front-end level; verify the clean/dirty contrast.',90:'Correct the organ/bass premise before revising the sound.',55:'Compare one fuzz source against the current multi-drive stack.',135:'Recover low-mid body and remove redundant industrial drive stages.',4:'Reduce repeated treble/drive boosts; preserve the intentional inverse CTL.',60:'Recover note attack from the heavy drive/gate stack.',84:'Investigate EQ VOL 100 and the fretless gate.',133:'Remove redundant compressor with VOL 100 as the first trial.',149:'Make the lead lift after the capture, and keep the riff dry.',136:'Keep the ambient palette but create a less processed foundation.',105:'Reduce the very wet Hall and protect fretless sustain.'};
for(const [i,n]of top.entries())out+=`| ${i+1} | [${name(a[n-1])}](#patch-${n}) | ${first[n]} |\n`;
out+=`
## Definite file findings and scope

- All 195 JSON specs have matching Markdown, PDF and PRST files. PDFs were checked for existence/nonzero size, not rendered or text-audited.
- All 195 PRST files are 507 bytes, with the expected header/sentinel and valid CRC. Stored screen names, patch VOL/BPM, fixed chain order, active model references, supplied parameter values, initial active states and CTL masks agree with the JSON in the fields checked. FS1 and FS2 agree. This establishes file consistency, not successful import or playback on the pedal.
- Every named model and supplied parameter key resolves against the vendored catalog; all supplied numeric values are within its min/max except **EverydayBlues-JM Slapback Time 320**, above its 300ms maximum. The encoder currently checks names but does not reject this range error.
- **Metropolis1-DT** omits EQ VOL. Its active Bass EQ 2 output parameter is stored as **0**, rather than the catalog’s default 50. Add VOL explicitly. The precise effect of zero on hardware has not been auditioned.
- No preset exceeds three CTL modules; the documented CTL states invert. MIDI flags use only PRE/DST/MOD/DLY. No NAM preset uses a dropped slot (60 or 67), stacks an AMP/CAB model, or also declares an IR.
- **Cassie-Flyleaf** is the only IR patch whose CAB is null. This is allowed by the project workflow, but the preset alone does not supply the documented cab; the manual load/assignment is essential.
- No Python installation was available through python or the Windows py launcher. Binary checks used a read-only Node parser based on the local format specification. The existing Python encoder was not run, no files were regenerated, and there was no hardware or recording audition.

Source inputs: every patch JSON and Markdown file was loaded into the inventory; module settings, intent and relevant board instructions were reviewed across the library. The reference basis is Prompts/gp5_prompt.md, Modules, the vendored catalog, NAMs/snaptone_combos.md, IRs/ir.md, fixed-board pedal files and Documents/gp5-prst-format.md. This is not a forensic verification of all historical session rigs, release dates, tuning, tempo or note-for-note section maps. Unverified claims are explicitly left for verification rather than replaced with invented certainty. The current [Valeton product page](https://www.valeton.net/product/gp-5/) confirms the general SnapTone/user-IR capability; the local fixed routing and confirmed CTL behavior remain this project’s working constraints.

## Library-wide changes I would make

1. **Preserve tested level decisions.** Keep all audited SnapTone VOL values and the explicit Michael-adjusted patch VOL 70 on Believe guitar and patch VOL 65/capture VOL 75 on Everyday Blues. Match new versions to the current patches using the actual rig; identical numeric patch VOL never guarantees equal loudness.
2. **Separate distortion from a solo level lift.** PRE/DST sit before the capture/amp. Once that stage is compressed, more input can mainly add saturation. Use a mild CTL EQ output lift after it when an actual volume lift is required. A trial EQ VOL around 52–54 must be level-matched, not described as a guaranteed dB increase.
3. **Keep supporting bass mostly dry.** Start with no delay, little/no reverb, and one primary added drive. Add space only when it solves a specific musical role. Preserve deliberate ambient and synth effects; do not make all bass patches identical.
4. **Keep clean fundamental claims honest.** Bass OD Blend retains a dry component inside that block, but the resulting signal still passes through the downstream capture. A driven capture is not a separate clean low-frequency path. Stacking serial blended drives is not equivalent to a split clean/dirty rig.
5. **Fix board instructions.** Tidal Wave drive-off leaves its preamp/EQ/Level active. Every full-board bass write-up needs those controls even if it calls the pedal bypassed. Specify physical knob/toggle positions, distinguish Donner TONE from its NORMAL/TREBLE switch, and never imply CTL operates a board pedal. Cassie’s claim that a board OD cannot be stomped independently is wrong.
6. **Respect fixed set boards.** Keep the four-song and five-song worship boards fixed across their sets. Per-patch changes to their GP-5 settings are independent trials; a shared board-control change must be reviewed across the whole set. The six shared White Tape slap patches keep one 120ms setting. Lion’s 700ms ambient setting needs a reset or separate set plan when sharing that board.
7. **Describe the gate accurately.** NR is ahead of PRE/DST/amp. It can reduce signal entering the following stages during rests, but it is not a post-drive gate that directly removes all hiss generated downstream. Tune THRE on the actual guitar, including soft notes, harmonics and fretless decay. Suggested lower thresholds below are listening trials, not proof the current gate is clipping notes.
8. **Correct reference drift.** The catalog’s B-Chorus origin is CE-2B while Modules/MOD.md calls it CEB-3; resolve that provenance conflict before repeating it as fact. Modules/EQ.md labels ±50 as dB without a calibration basis in the catalog; use control values until verified. Modules/DLY.md gives Slapback the generic 1000ms upper bound even though the catalog says 300ms. Several write-ups also retain old amp/cab names after capture replacements.
9. **Make switching maps reliable.** Keep the existing shared CTL/MIDI reset warning. Name every sound by actual block states and board stomps; CTL flips current states, so “CTL on” alone is insufficient after MIDI edits. Remove labels such as “dry” where fixed reverb remains on. Newly proposed maps below must be rechecked against the three-block limit before implementation.
10. **Improve preset identification.** Sixteen cross-instrument pairs share the same first ten screen characters. That is harmless in separate sets, confusing in a combined library. On the next naming pass, put an instrument marker near the front (for example G-BeatIt/B-BeatIt), preserving song-level site grouping and avoiding blind filename changes.

## Suggested comparison procedure

Work on copies. Address the definite Metropolis EQ omission and Everyday Blues range mismatch first. Then take one high-priority patch at a time. Start with its amp/capture and required cab; bring the compressor, primary drive and essential effects back individually. Compare with the original at matched perceived output, using the same pickup, guitar volume, articulation and monitoring path. Listen both alone and against the song/band. Check low B, quiet notes, chord attack and held-note decay. Exercise every CTL/MIDI/board transition. Keep changes that improve the musical role; discard a proposed number if the current setting wins. Only then regenerate the four deliverables, update the index and upload under the existing song-level site title.

## Per-patch review

`;
let section='';const rows=[];
for(const [i,r]of a.entries()){
 const n=i+1,note=notes.get(n);if(!note)throw Error('Missing recommendation '+n);
 const sec=r.file.split('/').slice(1,3).join(' / ');if(sec!==section){section=sec;out+=`\n### ${sec}\n\n`;}
 const base=r.j.nam?`SnapTone slot ${r.j.nam.slot}; ${val(r.j.nam.settings)}`:r.j.ir?`IR: ${r.j.ir.name}; CAB ${r.j.modules.CAB?.model||'off/manual assignment required'}`:'Built-in AMP/CAB';
 out+=`<a id="patch-${n}"></a>\n\n#### ${n}. ${name(r)} — ${note.priority}\n\n[Source write-up](${link(r)}) · [JSON](../../${r.file})\n\n**Current foundation:** patch VOL ${r.j.patch_vol??50}; BPM ${r.j.bpm??'120 (encoder default; not a verified tempo)'}; ${base}.\n\n${chain(r)}.\n\n**Proposed changes:** ${note.text}\n\n`;
 if(extra[n])out+=`**Additional finding:** ${extra[n]}\n\n`;
 if(cites[n])out+=`**Source check:** ${cites[n]}\n\n`;
 rows.push({number:n,instrument:r.file.split('/')[1],type:r.file.split('/')[2],patch:path.basename(r.file,'.json'),title:name(r),priority:note.priority,proposal:note.text,additional_finding:extra[n]||'',source_file:r.file});
}
fs.writeFileSync(path.join(here,'Patch-review.md'),out);
const cols=Object.keys(rows[0]),q=v=>'"'+String(v??'').replaceAll('"','""')+'"';
fs.writeFileSync(path.join(here,'Patch-review.csv'),'\ufeff'+[cols,...rows.map(r=>cols.map(c=>r[c]))].map(row=>row.map(q).join(',')).join('\r\n')+'\r\n');
fs.writeFileSync(path.join(here,'validation.json'),JSON.stringify({date:'2026-10-16',patches:a.length,counts:count,issues:a.filter(r=>r.issues.length).map(({file,issues})=>({file,issues})),omitted:a.filter(r=>r.omitted.length).map(({file,omitted})=>({file,omitted})),recommendations:rows.length},null,2)+'\n');
const reviewIds=[...out.matchAll(/<a id="patch-(\d+)"><\/a>/g)].map(m=>Number(m[1]));
if(reviewIds.length!==195||new Set(reviewIds).size!==195)throw Error('Review coverage failure');
for(const m of out.matchAll(/\]\((\.\.\/\.\.\/[^)]+)\)/g))if(!fs.existsSync(path.resolve(here,m[1])))throw Error('Broken source link '+m[1]);
for(const r of a)if(!fs.statSync(path.join(root,r.file.replace(/\.json$/,'.pdf'))).size)throw Error('Empty PDF');
const metro=fs.readFileSync(path.join(root,'Patches/Bass/Song/Metropolis1-DT.prst'));
const parameterStart=metro.indexOf(Buffer.from('04304001','hex'))+4;
const metroEqVol=metro.readFloatLE(parameterStart+(5*8+5)*4);
if(metroEqVol!==0)throw Error('Metropolis finding no longer matches current binary');
console.log('Confirmed Metropolis active EQ VOL stored as '+metroEqVol+'.');
console.log('Verified 195 unique review entries, all local source links and all PDFs nonempty.');
console.log(JSON.stringify({patches:a.length,recommendations:rows.length,counts:count,report_bytes:Buffer.byteLength(out)}));
