const fs=require('fs'),path=require('path');
const here=__dirname,root=path.resolve(here,'../..');
const old=JSON.parse(fs.readFileSync(path.join(here,'inventory.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(here,'implementation-manifest.json'),'utf8'));
const index=fs.readFileSync(path.join(root,'Patches/README.md'),'utf8');
const headings=['Flamma FS-08 Octave','Donner Ultimate Comp','Donner Stylish Fuzz','Joyo Tidal Wave','Joyo King of Kings','Joyo Narcissus','Joyo American Sound','Donner White Tape','Valeton GP-5'];
const keyNames={Flamma:'Flamma FS-08 Octave','Ultimate Comp':'Donner Ultimate Comp','Stylish Fuzz':'Donner Stylish Fuzz','Tidal Wave':'Joyo Tidal Wave',Narcissus:'Joyo Narcissus'};
function strip(s){return s.replace(/[*`]/g,'').trim();}
function extract(md){
 const start=md.search(/^## (?:Full [Pp]edalboard|Full [Bb]oard|[Pp]edalboard)/m);const text=start>=0?md.slice(start):'';
 const re=/^(?:#{1,4}\s*|[-*]\s*)?(?:\d+\.\s*)?\*{0,2}(?:\d+\.\s*)?(Flamma FS-08 Octave|Donner Ultimate Comp|Donner Stylish Fuzz|Joyo Tidal Wave|Joyo King of Kings|Joyo Narcissus|Joyo American Sound|Donner White Tape|Valeton GP-5)\b[^\n]*/gmi;
 const hits=[...text.matchAll(re)],out={};
 hits.forEach((h,i)=>{out[h[1]]=text.slice(h.index,(hits[i+1]?.index??text.length)).split(/^## (?!Full)/m)[0];});
 return out;
}
function value(text,key,fallback){
 const escaped=key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const re=new RegExp('(?:^|[\\s,;(])'+escaped+'\\s*(?::|~|=)?\\s*([~]?(?:\\d+(?:\\.\\d+)?(?:\\/\\d+|\\s*o[’\']clock|:\\d+)?|fully counterclockwise|unity))','im');
 const m=strip(text).match(re);return m?m[1]:fallback;
}
function mode(text,fallback='NORMAL'){return /mode\s*:?\s*TREBLE|switch\s*:?\s*TREBLE/i.test(strip(text))?'TREBLE':/mode\s*:?\s*NORMAL/i.test(strip(text))?'NORMAL':fallback;}
function state(text){
 const t=strip(text),h=t.split('\n')[0];
 if(/bypassed|— off|: Off|not engaged/i.test(h)&&!/engaged only|on for|off for|by default/i.test(h))return 'Bypassed throughout';
 if(/engaged|— on|: On/i.test(h)&&!/only|for CTL|stomp|off for|bypassed during/i.test(h))return 'On throughout';
 const cues=t.split('\n').filter(l=>/footswitch|stomp|engag|bypass|CTL off|CTL on/i.test(l)&&!/^Signal|^The .prst/i.test(l));
 return cues.slice(0,3).join(' ').replace(/^[-\d. ]+/,'').slice(0,400)||'Bypassed throughout';
}
function pedalSpec(name,text){
 const p={name,state:state(text),settings:{}};
 if(name==='Flamma FS-08 Octave')for(const key of ['-2OCT','-OCT','+OCT','+2OCT','Dry'])p.settings[key]=value(text,key,key==='Dry'?100:0);
 if(name==='Donner Ultimate Comp'){for(const key of ['COMP','TONE','LEVEL'])p.settings[key]=value(text,key,key==='COMP'?30:50);p.settings.Mode=mode(text);}
 if(name==='Donner Stylish Fuzz')for(const key of ['Sustain','Treble','Bass','Volume'])p.settings[key]=value(text,key,key==='Sustain'?25:50);
 if(name==='Joyo Tidal Wave'){
  for(const key of ['Drive','Blend','Presence','Level','Treble','Middle','Bass'])p.settings[key]=value(text,key,key==='Drive'?15:key==='Blend'?20:50);
  p.settings['Mid-Frequency']=strip(text).match(/Mid-Frequency(?: toggle| select)?\s*:?\s*(500|1000)\s*Hz/i)?.[1]+'Hz';if(p.settings['Mid-Frequency']==='undefinedHz')p.settings['Mid-Frequency']='500Hz';
  p.settings['Bass-Shift']=(strip(text).match(/Bass-Shift(?: toggle| select)?\s*:?\s*(40|80)\s*Hz/i)?.[1]||'80')+'Hz';
  p.settings['Cab-Sim (DI out)']=/Cab-Sim(?:\s*\([^)]*\))?\s*:?\s*On\b/i.test(strip(text))?'On':'Off';p.settings['Ground Lift']=/Ground Lift\s*:?\s*On\b/i.test(strip(text))?'On':'Off';
  if(/Drive footswitch\s*:\s*off all song|Drive not engaged|Drive off|Drive effectively out/i.test(strip(text)))p.state='Drive off throughout; preamp/EQ/Level remain active';
  if(/bypassed/i.test(p.state))p.state='Drive off throughout; preamp/EQ/Level remain active';
 }
 if(name==='Joyo Narcissus'){for(const key of ['Width','Depth','Rate'])p.settings[key]=value(text,key,key==='Width'?30:key==='Depth'?20:20);p.settings.Mode=/Mode\s*:\s*Modern|Modern mode/i.test(strip(text).split(/\. /)[0])?'Modern':'Vintage';}
 if(name==='Joyo American Sound'){p.state='Bypassed throughout';for(const key of ['Level','Drive','Voice','Low','Mid','High'])p.settings[key]=key==='Drive'?10:50;}
 if(name==='Donner White Tape'){p.settings={Level:/700ms/.test(text)?'~10 o’clock':'~10:30',Time:/700ms/.test(text)?'700ms (loose ambient; quarter at 85.7 BPM)':'120ms (free-time slap; no beat subdivision)',Feedback:/700ms/.test(text)?'~11 o’clock':'Fully counterclockwise (one repeat)'};}
 return p;
}
function kok(text){
 const clean=strip(text);let l=clean.search(/Left channel[^\n]*:|Left:/i),r=clean.search(/Right channel[^\n]*:|Right:/i);
 if(l<0)l=0;if(r<=l)r=clean.toLowerCase().lastIndexOf('right channel');if(r<0)r=clean.length;
 function side(name,t){const p={name,state:/bypassed|off all song|off, footswitch/i.test(t.split('\n').slice(0,3).join(' '))?'Bypassed throughout':/only|solo|lead|bridge|outro/i.test(t)?'On for the named lead/bridge/outro sections only':'On throughout',settings:{}};for(const key of ['Volume','Gain','Tone'])p.settings[key]=value(t,key,key==='Gain'?20:50);p.settings['Clipping toggle']=/harder|higher.clipping|hard clipping/i.test(t)?'Harder position':'Softer position';p.settings['Feedback toggle']=/higher|high.gain|high gain/i.test(t)?'Higher-gain position':'Standard position';return p;}
 const result=[side('King of Kings Left',clean.slice(l,r)),side('King of Kings Right',clean.slice(r))];
 if(/both channels bypassed|both channels.*off|Left: off\. Right: off/i.test(clean))for(const p of result)p.state='Bypassed throughout';
 return result;
}
const shared4=[5,19,40,98],shared5=[20,42,117,121,132];
function buildBoard(n,source){
 const extracted=extract(source.md),isBass=source.file.includes('/Bass/');
 const full=Object.keys(extracted).length>0;
 if(!full)return null;
 const white=/Board Option\s*[:=]\s*White Tape|Board Option:\*\* White Tape/.test(source.md)||!!extracted['Donner White Tape'];
 const chain=isBass?['Flamma FS-08 Octave','Donner Ultimate Comp','Donner Stylish Fuzz','Joyo Tidal Wave']:['Flamma FS-08 Octave','Donner Ultimate Comp','Donner Stylish Fuzz','Joyo King of Kings'];
 if(!white)chain.push('Joyo American Sound');chain.push('Joyo Narcissus','Valeton GP-5');if(white)chain.push('Donner White Tape');
 const pedals=[];
 for(const name of chain){if(name==='Valeton GP-5')continue;if(name==='Joyo King of Kings'){pedals.push(...kok(extracted[name]||'Left: bypassed\nRight: bypassed'));continue;}pedals.push(pedalSpec(name,extracted[name]||name+' — bypassed'));}
 for(const change of manifest[n-1].boardChanges){const name=keyNames[change.pedal]||change.pedal;const p=pedals.find(p=>p.name===name);if(!p)throw Error('Missing board pedal '+n+' '+change.pedal);Object.assign(p.settings,change.values);if(change.state)p.state=change.state;}
 if(n===55)pedals.find(p=>p.name==='Donner Stylish Fuzz').state='On throughout; primary fuzz source';
 const stateOverrides={
 2:{'Flamma FS-08 Octave':'Off for base/slap; on for optional 808-style sections','Joyo Tidal Wave':'Drive off for clean/slap; on for heavy riffs and breakdowns; preamp active'},
 3:{'Joyo Narcissus':'Bypassed throughout'},19:{'Flamma FS-08 Octave':'Off by default; optional on for bridge/Amen climax above the lowest register'},
 30:{'Flamma FS-08 Octave':'Off by default; on for outro vamp with CTL on'},
 135:{'Flamma FS-08 Octave':'Off for main tone; optional on for ending hits only'},
 136:{'Donner White Tape':'Off for strummed rhythm and anthem lead; on for sustained pads, ambient intros/bridges/outros'},
 137:{'Donner White Tape':'Off by default; on for slap chops at CTL off, or fast lead at CTL on with MIDI DLY off'},
 147:{'King of Kings Left':'Off for verses/choruses; on for bridge only'},
 148:{'King of Kings Left':'Off for intro/main riff/solo; on for double-time outro only','Joyo Narcissus':'On for intro only; off when the band enters'},
 149:{'Donner White Tape':'Off for verse/chorus; on for solo only'},
 155:{'Donner White Tape':'Off for shuffle rhythm and CTL-on solo; on for fills between horn lines at CTL off'},
 171:{'Donner White Tape':'Off for strum and solo; on for clean fills/turnarounds at CTL off'},
 173:{'Donner White Tape':'Off for strum and CTL-on lead; on for clean answer licks at CTL off'},
 182:{'Donner White Tape':'Off for strum; on for intro riff and picked fills at CTL off'},
 104:{'Joyo Tidal Wave':'Drive off for verses; on for Spidey hooks and final tag; preamp active'},
 116:{'Joyo Tidal Wave':'Drive off for creeping verses; on for ensemble shouts and ending; preamp active'}
 };
 for(const [name,s]of Object.entries(stateOverrides[n]||{})){const p=pedals.find(p=>p.name===name);if(p)p.state=s;}
 // Exact shared controls: the existing four-song/five-song set documents agree.
 if(shared4.includes(n)||shared5.includes(n)){
  const four=shared4.includes(n),comp=pedals.find(p=>p.name==='Donner Ultimate Comp'),tidal=pedals.find(p=>p.name==='Joyo Tidal Wave'),chorus=pedals.find(p=>p.name==='Joyo Narcissus');
  comp.settings=four?{COMP:40,TONE:50,LEVEL:55,Mode:'NORMAL'}:{COMP:42,TONE:50,LEVEL:55,Mode:'NORMAL'};comp.state='On throughout the set';
  tidal.settings=four?{Drive:42,Blend:40,Presence:55,Level:55,Treble:52,Middle:55,Bass:55,'Mid-Frequency':'500Hz','Bass-Shift':'80Hz','Cab-Sim (DI out)':'Off (DI unused)','Ground Lift':'Off (DI unused)'}:{Drive:25,Blend:35,Presence:55,Level:55,Treble:55,Middle:58,Bass:55,'Mid-Frequency':'500Hz','Bass-Shift':'80Hz','Cab-Sim (DI out)':'On','Ground Lift':'Off'};
  tidal.state=four?(n===5?'Drive off throughout':n===98?'Drive off for verses; on for choruses and bridge':n===40?'Drive off for verses; on for bridge/final choruses':'Drive off for verses; on for bridge/Amen climax'):'Drive on throughout the set; preamp active throughout';
  chorus.state='Bypassed throughout the set';chorus.settings={Width:30,Depth:25,Rate:20,Mode:'Vintage'};
 }
 for(const p of pedals)for(const [key,v]of Object.entries(p.settings)){if(typeof v==='string'&&/^\d+\/10$/.test(v))p.settings[key]=Number(v.split('/')[0])*10;}
 return{option:white?'White Tape':'American Sound (bypassed; retained for legacy full-board builds)',chain,pedals,shared:shared4.includes(n)?'Four-song worship set: The River / 10,000 Reasons / Forever Reign / The Blessing':shared5.includes(n)?'Five-song worship set: Bread / Giving It All / Thrive / Unstoppable God / Your Love':''};
}
const roleOverrides={4:['Main driven Squire voice','Cleaner open passages'],7:['Main verse groove','Hook lift'],19:['Sparse opening/verses','Bridge and Amen climax (board stomps)'],23:['Intro and verses','Heavy choruses and outro (Tidal Wave stomp)'],25:['Dark main verse line','Heavier chorus push'],36:['Clean woody part','Optional Plate ambience'],37:['Grounded syncopated groove','Climax with blended grit'],55:['Main fuzz riff','Chorus push'],71:['Restrained intro/verses','Climax (Tidal Wave stomp)'],74:['Dry main riff','Same voice; no extra CTL'],79:['Intro/interludes','Driving riff and instrumental unisons'],85:['Piano/verse support','Solo/outro (Tidal Wave stomp)'],86:['Intro/verses','Heavy machine-gun section (board drive)'],89:['Main ostinato','Same voice; no extra CTL'],90:['Main Parallels rock voice','Same voice; no extra CTL'],107:['Acoustic verse support','Adapted heavy section'],122:['Filtered synth-style pulse','Open heavy chorus voice'],136:['Clean ambient rhythm','Driven anthem lead'],137:['Clean synthwave rhythm','RAT lead and digital echo'],140:['Acoustic-adjacent strum','Electric fills'],144:['Warm clean comping/head','Clean melodic lead with Tape'],146:['Ambient clean verse','Heavy chorus'],148:['Intro/verse or crunch riff (guitar volume)','Lead'],149:['Tight verse riff','Chorus lift; solo adds White Tape'],150:['Clean verses','Distorted pre-chorus hits and chorus chords'],152:['Vibe intro/rhythm','Driven riff/lead'],153:['Clean soul comping','Filtered lead color'],155:['Shuffle rhythm','Green OD solo'],156:['Clean arpeggios','Crunch chorus'],160:['Clean verse','Driven chorus/lead'],166:['Acoustic-adjacent verse','Electric chorus'],168:['Clean jangly rhythm','Clean hook lift'],174:['Clean verse arpeggios','Heavy chorus/lead'],178:['Acoustic-adjacent rhythm','Clean melody lift'],179:['Gentle fingerpicking','Clean melody and Tape'],181:['Cleaner verse/rhythm','Lead solo'],187:['Boosted-amp riff','EQ-lifted solo with Tape'],194:['Clean main groove','Clean chorus/outro lift']};
function roles(n,md){if(roleOverrides[n])return roleOverrides[n];
 const text=strip(md),lines=text.split('\n');const get=which=>{const l=lines.find(l=>new RegExp('^\\s*[- ]*CTL '+which+'\\s*(?:—|–|=|[-:])','i').test(l));if(!l)return which==='off'?'Main rhythm / intro / supporting part':'Lead / chorus / larger section';return l.replace(new RegExp('^\\s*[- ]*CTL '+which+'\\s*(?:—|–|=|[-:])\\s*','i'),'').split(/[.]/)[0].replace(/\s*CTL on.*$/i,'').slice(0,110);};return[get('off'),get('on')];}
const contextOverrides={
 1:'Mark Egan-inspired melodic fretless voice. Active Sire V7 with flatwounds. Keep the preamp close to flat and avoid clipping the GP-5 input. Lush chorus is intentional; the revised compression and low-frequency EQ keep the fundamental present. Offramp features Steve Rodby, so it is not an Egan personnel reference.',
 3:'Sixpence None the Richer artist palette. Dry, bouncy pop support at rest; slower, lighter chorus and Air for the atmospheric voice. CleanSVT is the loaded SVT/8x10 combination. Exact record-by-record bass rigs and release attributions are not assumed.',
 8:'Atmospheric fretless bass for Adrift. Sire V7 in active mode, flatwounds. Set its onboard EQ near flat and check the actual input peaks. Active mode is a voicing option, not a guarantee of more downstream headroom. Avalon supports the clean line; CTL adds restrained delay and Hall for the spacious passages.',
 4:'Chris Squire-inspired picked P/J bass. Bright, mid-forward drive is intentional. Bass OD is the principal additional drive; the capture still contributes its own character. This serial chain approximates the musical role and is not a true split clean/dirty rig.',
 36:'A clean, woody bass interpretation of Dryad of the Woods. This revision selects CleanB15 instead of inheriting a generic prog-metal gain structure. Compare the arrangement against the recording; the original session rig is unverified.',
 33:'A Day in the Life: clean, melodic bass interpreted through Avalon studio-DI character. The modern capture is a tonal substitute; the exact historical recording chain and playing details are not asserted. Less presence boost and a smaller Room preserve note identity.',
 47:'Bright, bouncy country-pop support for Heads Carolina, Tails California. CleanB15 at its captured gain, with a smaller chorus lift. Exact session gear is unverified; the previous album attribution was removed.',
 87:'Warm clean bass for One Last Breath, with restrained blended drive for the heavy sections. The original Brian Marshall studio credit was unverified and has been removed pending track-specific credits.',
 79:'Metropolis Pt. 1 on passive P/J bass. Technical, precise lines need body and attack beneath guitar, keys and drums. Mess Bass with the loaded Mesa215 IR replaces the SVT stand-in. EQ VOL is explicitly set to 50, fixing the previously omitted output control. CTL exchanges the small intro Room for an input push in the driving sections.',
 89:'Papa Was a Rollin’ Stone: one dry, muted repeating bass figure. Favor the P pickup and roll the tone down for the round attack. CleanB15 provides the amp voice. The prior Bob Babbitt credit was not verified and has been removed pending a reliable session source.',
 90:'Parallels is on Going for the One (1977). Yes’s official credits distinguish Squire’s bass guitar from Wakeman’s church organ. The bass design therefore uses driven bass and focused mids without pretending the keyboard part is a vibrato bass effect.',
 95:'Clean supportive bass for Purple Rain. The previous claim that the title track has little or no traditional bass was not established and is removed. Prince’s album credits list BrownMark on bass; this patch does not claim a verified track-by-track transcription or rig.',
 135:'Rammstein-inspired industrial P/J bass. Dry, driven and precise. Tidal Wave is the principal added drive; Stylish Fuzz and GP-5 Bass OD are bypassed. BrightSVT supplies the amp voice. Lower midrange is restored so the low notes still read beneath the grind.',
 123:'Waiting on the World to Change: passive Sire V7 fretless with flatwounds. Neck pickup favored, soft fingers and short muted notes for the soul pocket. FullB15 supplies the warm foundation. Passive mode is the selected feel/voicing; active mode does not inherently guarantee more downstream headroom.',
 136:'Elevation Worship Lion album palette on HSS Strat. Chimey rhythm, driven anthem lead, and a separately stomped pad layer. Ambient effects remain intentional, with less stacked modulation and gain. The White Tape keeps its 700ms loose ambient setting; reset it before sharing a set with the 120ms slap builds.',
 137:'The Midnight Syndicate album-inspired HSS Strat palette. Compressed chorused cleans and RAT-style leads over a clean Dumble capture. Exact recording gear is unverified. White Tape supplies the shared 120ms slap; Pure 433ms is a dotted eighth at about 104 BPM. Fixed Hall means reduced-effect sounds are not fully dry.',
 138:'Polyphia-inspired HSS Strat palette: compressed, articulate clean rhythm and a controlled high-gain lead. Playing God’s nylon/acoustic attack is an adaptation target, not something the electric guitar’s amp EQ reproduces exactly.',
 141:'Beat It on HSS Strat: Deluxe-family rhythm crunch and a more saturated solo adaptation. The Super OD is the sole GP-5 solo gain addition. One fixed capture is a rhythm-first compromise; it does not switch to an EVH amp on CTL. Exact historical amp and preamp claims remain unverified.',
 146:'Cassie on HSS Strat. Ambient clean verse and a heavy distorted chorus built around one fixed clean amp. La Charger supplies the extra gain. The loaded V30112 IR now makes the cab part of the preset. Narcissus is on for the clean part and off for the heavy part. The exact recording rig is unverified.',
 151:'Danger Zone on HSS Strat. Solo100 OD is a useful tonal platform for 80s hard-rock rhythm and lead. It is not presented as a verified model of the exact recorded amp. The solo combines less input boost, restrained delay and a post-amp EQ lift.',
 152:'December on HSS Strat. Retain the original vibe-to-driven contrast, with much smaller compression output and EQ boosts. ClassicMarshall is a JCM800 capture, not a JTM45. The section map is the existing cover interpretation; verify it against the chosen recording rather than treating the old intro description as established fact.',
 174:'One Last Breath on HSS Strat. Clean Match CL supports the verse and La Charger supplies the heavy voice. The constraint is one fixed GP-5 amp voice within this preset, not an inability of real Rectifiers to produce clean tones. Delay loads off and can be added by MIDI.',
 191:'Werewolves of London on HSS Strat. Bellman 59N and the loaded EVM112 IR provide a warm 70s rhythm platform. This amp is a tonal choice; the original session rig has not been verified.'
};
function context(n,md){if(contextOverrides[n])return contextOverrides[n];
 let text=md.split(/\r?\n/).slice(1);const stop=text.findIndex(l=>/^## (?:GP|Module|AMP|Instrument|Why)|^\*\*(?:NR|PRE|AMP|DST)\b/.test(l));if(stop>=0)text=text.slice(0,stop);
 let joined=text.filter(l=>l.trim()&&!/^#|^\*?\*?(?:Type|Full Board|Board Option|BPM|CTL |Patch VOL)|^Module order|^Rebuilt |^\*\*(?:Rebuild|Earlier)/i.test(l)).join('\n');
 if(joined.length>1100){const end=joined.slice(0,1100).lastIndexOf('.');if(end>100)joined=joined.slice(0,end+1);}
 return joined.replace(/active.*extra headroom[^.]*\./ig,'Active mode is a voicing choice; check input peaks.').replace(/the low B covers any drop tuning\./ig,'Use the actual pitches required by the arrangement.');
}
Object.assign(roleOverrides,{
 3:['Dry pop support','Chorus and Air atmosphere'],8:['Clean fretless support','Ambient delay/Hall voice'],
 20:['Quiet communion support','Same voice throughout'],28:['Intimate verse support','Hook with a small Room'],
 38:['Driving verse riff','Chorus push'],40:['Sparse verse support','Bridge and final choruses'],
 56:['Warm verse support','Chorus lift'],60:['Driven controlled verse','Chorus input push'],
 91:['Compressed worship pulse','Restrained chorus grit'],98:['Bouncy verse pocket','Choruses/bridge with board drive'],
 100:['Soft upright-like support','Same voice throughout'],104:['Verse groove','Hook/final tag with board drive'],
 116:['Creeping verses','Ensemble shouts with board drive'],117:['Punchy verse','Chorus grit'],
 121:['Driving verse','Chorus/bridge input push'],130:['Restrained verse','Chorus lift'],
 132:['Intimate verse','Chorus/bridge lift'],133:['Soft lo-fi verse','Small Room for hook'],
 135:['Main Tidal Wave grind','Input push for choruses and unison hits'],
 169:['Main riff','Envelope-filter talk-box approximation / solo']
});
const reasons={
 NR:'Use the lowest threshold that keeps rests quiet. Check soft notes and held-note decay. This gate is before the drives and amp; it does not directly gate noise generated after it.',
 PRE:'Controls the source dynamics or adds the specified push/filter before distortion and amp processing. The settings stay fixed; only its on/off state can change.',
 DST:'Supplies the selected additional drive voice. Use its level and gain as separate controls. A pre-amp boost may add compression instead of a proportional solo-volume increase.',
 AMP:'Provides one fixed amp voice for the complete preset. CTL does not change its knobs or select another amp channel.',
 CAB:'Keeps the required speaker response in the exported preset. Use the documented loaded IR slot; no extra cab goes after a SnapTone.',
 EQ:'Shapes note body and cut after the amp/capture. Where assigned to CTL, its output adds the specified lift after the gain stages. Numbers are GP-5 control values, not a calibrated loudness guarantee.',
 MOD:'Adds the specified movement. Keep it underneath the note except for intentionally wet artist or ambient voices.',
 DLY:'Adds repeats only in the listed states. Trail preserves the remaining repeats when this block is bypassed; it does not change delay time or mix.',
 RVB:'Adds the specified room or ambient tail. The revised mix keeps the initial note audible. Trail behavior follows the saved setting.'
};
function initial(m){return m.always_on?true:m.ctl?m.ctl_off_state==='on':m.midi?m.start_state!=='off':true;}
function active(j,press=false,overrides={}){return Object.entries(j.modules).filter(([k,m])=>m.model&&(k in overrides?overrides[k]:m.ctl&&press?!initial(m):initial(m))).map(([k])=>k).concat(j.nam?['N->S']:[]).join(', ')||'None';}
function format(v){return typeof v==='boolean'?(v?'on':'off'):v;}
const sources={1:'https://www.patmetheny.com/music/detail.cfm?id=39',90:'https://www.yesworld.com/discography/going-for-the-one/',95:'https://discography.prince.com/albums/purple-rain'};
function changes(before,after){
 const list=[];if(before.patch_name!==after.patch_name)list.push('Pedal display name: '+before.patch_name+' -> '+after.patch_name+'. Filenames stay unchanged.');
 if(before.nam?.slot!==after.nam?.slot)list.push('Amp/cab foundation: '+(before.nam?'SnapTone '+before.nam.slot:before.modules.AMP.model)+' -> '+(after.nam?'SnapTone '+after.nam.slot:after.modules.AMP.model+' / '+after.modules.CAB.model)+'.');
 if(after.nam)for(const[k,v]of Object.entries(after.nam.settings))if(before.nam?.settings[k]!==v)list.push('SnapTone '+k+': '+(before.nam?.settings[k]??'new capture')+' -> '+v+'.');
 for(const[k,m]of Object.entries(after.modules)){const b=before.modules[k]||{};
  if(m.model!==b.model)list.push(k+': '+(b.model||'off')+' -> '+(m.model||'off')+'.');
  if(m.model)for(const[p,v]of Object.entries(m.settings))if(b.settings?.[p]!==v)list.push(k+' '+p+': '+(b.settings?.[p]??'unset')+' -> '+format(v)+'.');
  if(!!m.ctl!==!!b.ctl)list.push(k+': '+(m.ctl?'assigned to':'removed from')+' CTL.');
  if(m.midi&&m.start_state!==b.start_state)list.push(k+' MIDI load state: '+m.start_state+'.');
 }
 return list;
}
function namedSounds(n,j){
 const lines=[];const s=(name,press=false,overrides={},board='Base board states as listed below')=>{const midi=Object.keys(overrides).map(k=>k+' '+(overrides[k]?'on':'off')).join(', ');lines.push('- '+name+': CTL '+(press?'on':'off')+(midi?'; MIDI '+midi:'; MIDI at the corresponding baseline pattern')+'; '+board+'. Active GP-5: '+active(j,press,overrides)+'.');};
 if(n===136){s('Clean wash');s('Driven rhythm',false,{DST:true});s('Reduced-effects strum',false,{MOD:false,DLY:false},'Flamma off, White Tape off, King of Kings Left on/Right off; fixed Sweet Space remains on');s('Anthem lead',true,{},'King of Kings Left on/Right off, Flamma off, White Tape off');s('Swell pad',false,{MOD:true,DLY:true},'Flamma on, White Tape on, King of Kings Left on/Right off');}
 if(n===137){s('Clean rhythm');s('Clean echo',false,{DLY:true});s('Crunch rhythm',false,{DST:true});s('Reduced-modulation chops',false,{MOD:false},'White Tape off, both King of Kings channels off; fixed Hall remains on');s('Lead',true);s('Reduced-delay fast lead',true,{DLY:false});s('Slap fast lead',true,{DLY:false},'White Tape on, both King of Kings channels off');s('Slap chops',false,{},'White Tape on, both King of Kings channels off');}
 if(n===181){s('Verse',false);s('Motoring chorus',false,{DST:true},'Both King of Kings channels off; Narcissus on');s('Solo',true,{},'Both King of Kings channels off; Narcissus on');}
 if(n===147){s('Verse');s('Chorus',true);s('Bridge',true,{},'King of Kings Left on/Right off');}
 if(n===148){s('Intro',false,{},'Narcissus on, both King of Kings channels off; lower guitar volume for cleanup');s('Main crunch',false,{},'Narcissus off, both King of Kings channels off; guitar volume up');s('Solo',true,{},'Narcissus off, both King of Kings channels off');s('Double-time outro',true,{},'King of Kings Left on/Right off, Narcissus off');}
 if(n===149){s('Verse',false,{},'White Tape off, Narcissus off, both King of Kings channels off');s('Chorus',true,{},'White Tape off, Narcissus off, both King of Kings channels off');s('Solo',true,{},'White Tape on, Narcissus off, both King of Kings channels off');}
 if(n===155){s('Shuffle comping',false,{},'King of Kings Left on/Right off, White Tape off');s('Clean fills',false,{},'King of Kings Left on/Right off, White Tape on');s('Solo',true,{},'King of Kings Left on/Right off, White Tape off');}
 return lines.length?'\nNamed sounds (from an unmodified baseline CTL/MIDI pattern):\n'+lines.join('\n')+'\n':'';
}
let indexOut=index;const log=[];
for(const [i,r]of manifest.entries()){
 const n=i+1,source=old[i],j=r.j,b=buildBoard(n,source),isBass=r.file.includes('/Bass/'),type=r.file.split('/')[2];
 let title=source.md.split(/\r?\n/)[0].replace(/^# /,'');if(n===2)title='Polyphia — Clay Gober Signature Bass Sound';
 const [restRole,pressRole]=roles(n,source.md);
 const diff=changes(source.j,j);
 let md=`# ${title}\n\nRevised 2026-10-16 following the approved library audit.\nType: ${type}. Instrument: ${isBass?(/Sire|fretless/i.test(source.md.slice(0,1300))?'Sire V7 2nd Generation 5-string fretless, flatwounds':'Harley Benton passive 5-string P/J'):'HSS Stratocaster'}.\n${b?'Full board. Board Option: '+b.option+'.':'GP-5 only.'}\nPatch screen name: ${j.patch_name}. Patch VOL: ${j.patch_vol??50}.\n${j.bpm?'Preset tempo: '+j.bpm+' BPM.':'Preset BPM: 120 encoder default; song tempo unverified.'}\n\n${context(n,source.md)}\n\n## Revision intent\n\nKeep the musical role of the original patch while reducing redundant gain, excessive space and unclear switching where identified in audit entry ${n}.\nThe module settings and section map below are the active revision.\nAudited capture volumes and Michael’s explicit patch-level adjustments are preserved.\n${r.decisions.map(t=>t+'\n').join('')}No hardware audition or measured level match has been performed.\n\n## GP-5 settings\n\nModule order: NR -> PRE -> DST -> AMP -> CAB -> EQ -> MOD -> DLY -> RVB.\nThe encoded N->S block sits between DST and AMP when a SnapTone is used.\n\n`;
 if(j.nam)md+=`AMP/CAB replacement: SnapTone ${j.nam.name}.\nSlot: ${j.nam.slot}. Always on.\n${Object.entries(j.nam.settings).map(([k,v])=>k+': '+v).join(', ')}.\nAMP and CAB are both off; the capture already includes its cab/DI character.\nThe capture voice is fixed across CTL states. Audited VOL is preserved for this slot.\n\n`;
 if(j.ir)md+=`Cab IR: ${j.ir.name}. ${j.modules.CAB.model?'Encoded as '+j.modules.CAB.model+'.':'Manual cab loading/assignment is required.'}\n\n`;
 for(const k of ['NR','PRE','DST','AMP','CAB','EQ','MOD','DLY','RVB']){
  const m=j.modules[k];md+=`## ${k}${m.model?' - '+m.model:' - Module off'}\n\n`;if(!m.model){md+='Not used.\n\n';continue;}
  md+=Object.entries(m.settings).map(([p,v])=>`${p}: ${format(v)}.`).join('\n')+'\n';
  md+=m.ctl?`CTL assigned. Loads ${m.ctl_off_state}; first CTL press switches it ${m.ctl_on_state}.\n`:m.midi?`MIDI-only. Loads ${m.start_state||'on'}.\n`:'Fixed on. Not on CTL.\n';
  if(m.midi&&m.ctl)md+='Also on an individual MIDI toggle.\n';md+=reasons[k]+'\n\n';
 }
 const ctls=Object.entries(j.modules).filter(([k,v])=>v.ctl).map(([k])=>k),midis=Object.entries(j.modules).filter(([k,v])=>v.midi).map(([k])=>k);
 md+=`## Switching and section map\n\nCTL blocks: ${ctls.join(', ')||'None'}.\n`;
 md+=`- CTL off / loaded state: ${restRole}. GP-5 active: ${active(j)}.\n`;
 md+=ctls.length?`- First CTL press: ${pressRole}. GP-5 active: ${active(j,true)}.\n- Press CTL again to return to the loaded block pattern, provided no shared MIDI block has been changed.\n`:'- No GP-5 CTL change. Use the board stomps listed below when the arrangement needs another sound.\n';
 if(!b&&!ctls.length)md=md.replace('Use the board stomps listed below when the arrangement needs another sound.','One consistent GP-5 voice serves this bass part.');
 if(midis.length){md+='\nMIDI toggles: '+midis.join(', ')+'.\nMIDI mapping lives on the controller/device, not in the .prst.\n';
 for(const k of midis){const m=j.modules[k];md+=`- ${k} ${m.model}: loads ${initial(m)?'on':'off'}; toggle to ${initial(m)?'remove':'add'} this block independently.\n`;}
 if(midis.some(k=>j.modules[k].ctl))md+='Before CTL, undo MIDI changes to shared CTL blocks so they match the preceding CTL pattern. CTL flips current states, not a stored scene. After pressing CTL, apply individual MIDI changes.\n';
 for(const k of midis){const m=j.modules[k],on=!initial(m);md+=`- ${k}-only alternative from loaded state: CTL off, MIDI ${k} ${on?'on':'off'}; other MIDI blocks at their load states. GP-5 active: ${active(j,false,{[k]:on})}. Board switches unchanged.\n`;}
 }
 md+=namedSounds(n,j);
 if(b){md+='\n## Full pedalboard\n\n'+b.chain.join(' -> ')+'.\n';if(b.shared)md+=b.shared+'. Knob settings stay fixed for this entire set; footswitches may change.\n';
 md+='Board settings are set by hand and are not encoded in the .prst.\nAll numeric pedal positions use the existing 0–100 position shorthand unless a clock position is specified.\n';
 for(const p of b.pedals){md+=`\n## ${p.name}\n\n${p.state}.\n`+Object.entries(p.settings).map(([k,v])=>`${k}: ${v}.`).join('\n')+'\n';
 if(p.name==='Joyo Tidal Wave')md+='The footswitch toggles drive only. Preamp EQ and Level stay active in both states. Cab-Sim/Ground Lift affect the DI path; main instrument output is unchanged.\n';
 if(p.name==='Donner White Tape')md+='Mono rig: use the top row/left channel; bottom row unused. Set Time against the track by ear. No tap tempo. Its repeats include the GP-5 reverb. Keep this fixed across the shared slap set.\n';
 }
 md+='\n## Board choreography\n\n';for(const p of b.pedals)md+=`- ${p.name}: ${p.state}.\n`;
  md+='Set the board switches for the section you are entering. Intro-only or clean-only effects may need to start on. Return each pedal to its documented state at the next section. Board pedals are independent of CTL.\n';
 }
 md+='\n## Revision record\n\nApproved audit entry '+n+'.\n';md+=diff.map(t=>'- '+t).join('\n')+'\n';for(const c of r.boardChanges)md+='- Board '+c.pedal+': '+Object.entries(c.values).map(([k,v])=>k+' '+v).join(', ')+(c.state?'; '+c.state:'')+'.\n';md+='Pre-revision JSON, Markdown and original file hashes are preserved in Documents/patch-audit-2026-10-16/inventory.json and implementation-manifest.json.\nThe site piece title and on-disk filenames stay stable; only the short pedal display name may change.\n';if(sources[n])md+='Source check: '+sources[n]+'\n';
 // Preserve only actionable context; historical proposals are in the audit, not the playing instructions.
 md=md.replace(/\n{3,}/g,'\n\n').replace('Patch screen name: '+j.patch_name+'.','Patch screen name: '+j.patch_name.slice(0,10)+'.');
 if(isBass&&/Sire|fretless/i.test(source.md.slice(0,1300))){const chosen=source.md.slice(0,1600).match(/\b(Passive|Active)\b/i)?.[1]||'Passive';md=md.replace('Sire V7 2nd Generation 5-string fretless, flatwounds.','Sire V7 2nd Generation 5-string fretless, flatwounds; run '+chosen.toLowerCase()+'.');}
 if(process.argv.includes('--write'))fs.writeFileSync(path.join(root,r.file.replace(/\.json$/,'.md')),md);
 const stem=path.basename(r.file,'.json'),rowRe=new RegExp('^\\| `'+stem.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+'`[^\\n]*$','m');
 const oldRow=indexOut.match(rowRe);
 if(oldRow){const cols=oldRow[0].split('|');cols[5]=j.nam?' SnapTone: '+j.nam.name.split(' (slot')[0]+' (slot '+j.nam.slot+') ':j.ir?' IR: '+j.ir.name+' ('+j.modules.CAB.model+') ':' AMP: '+j.modules.AMP.model+'; CAB: '+j.modules.CAB.model+' ';cols[6]=' Revised 2026-10-16. CTL: '+(ctls.join(' + ')||'none')+'. '+(midis.length?'MIDI: '+midis.join(', ')+'. ':'')+(b?'Board: '+(b.option.startsWith('White')?'White Tape':'American Sound bypassed')+'. ':'')+'See write-up for exact states. ';indexOut=indexOut.replace(rowRe,cols.join('|'));}
 log.push({number:n,file:r.file,title,board:b,roles:[restRole,pressRole],ctl:ctls,midi:midis,changedName:j.patch_name!==source.j.patch_name,mdBytes:Buffer.byteLength(md)});
}
if(process.argv.includes('--write'))fs.writeFileSync(path.join(root,'Patches/README.md'),indexOut);
fs.writeFileSync(path.join(here,'implementation-details.json'),JSON.stringify(log,null,2)+'\n');
console.log('Prepared '+log.length+' write-ups; '+log.filter(r=>r.board).length+' full-board patches; '+log.filter(r=>r.changedName).length+' display names disambiguated.');
