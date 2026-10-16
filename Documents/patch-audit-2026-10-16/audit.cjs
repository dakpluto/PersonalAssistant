// Read-only patch inventory and binary checks for the October 2026 review.
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../..');
const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(path.join(d,e.name)):[path.join(d,e.name)]);
const catalog = JSON.parse(fs.readFileSync(path.join(root,'Tools','fxid_ring_gp5.json'),'utf8'));
const entries = Object.entries(catalog);
const blocks=['NR','PRE','DST','AMP','CAB','EQ','MOD','DLY','RVB','N->S'];
const results=walk(path.join(root,'Patches')).filter(p=>p.endsWith('.json')).sort().map(p=>{
 const j=JSON.parse(fs.readFileSync(p,'utf8')), md=fs.existsSync(p.slice(0,-5)+'.md')?fs.readFileSync(p.slice(0,-5)+'.md','utf8'):'';
 const issues=[], omitted=[];
 for(const ext of ['md','pdf','prst']) if(!fs.existsSync(p.slice(0,-5)+'.'+ext)) issues.push('Missing '+ext);
 const ctl=Object.entries(j.modules).filter(([k,v])=>v.ctl);
 if(ctl.length>3) issues.push('CTL exceeds 3');
 if(j.nam&&[60,67].includes(j.nam.slot)) issues.push('Dropped SnapTone slot');
 if(j.nam&&(!j.nam.slot||j.modules.AMP?.model||j.modules.CAB?.model||j.ir))issues.push('NAM configuration conflict');
 const binpath=p.slice(0,-5)+'.prst'; let bin, tone, trailer;
 if(fs.existsSync(binpath)){
  bin=fs.readFileSync(binpath);
  if(bin.length!==507)issues.push('PRST size '+bin.length);
  if(bin.subarray(0,20).toString('hex')!=='47502d3500000000000000000000000000000100')issues.push('Header mismatch');
  if(bin.subarray(21,25).toString('hex')!=='ffffffff')issues.push('Sentinel mismatch');
  if(bin.subarray(25,41).toString('latin1').replace(/\0+$/,'')!==Buffer.from(j.patch_name,'latin1').subarray(0,10).toString('latin1'))issues.push('Patch screen name differs');
  let crc=0;for(const b of bin.subarray(21)){crc^=b;for(let i=0;i<8;i++)crc=crc&128?((crc<<1)^7)&255:(crc<<1)&255;}if(crc!==bin[20])issues.push('CRC mismatch');
  for(let at=41;at+4<=bin.length;){const tag=bin.readUInt16LE(at),len=bin.readUInt16LE(at+2);if(tag===1){if(bin.readInt32LE(at+8)!==(j.patch_vol??50))issues.push('Patch VOL differs');if(bin.readInt32LE(at+16)!==(j.bpm??120))issues.push('Patch BPM differs');}if(tag===2)tone=bin.subarray(at+4,at+4+len);if(tag===3)trailer=bin.subarray(at+4,at+4+len);at+=4+len;}
  if(!tone||tone.length!==390||!trailer||trailer.length!==8)issues.push('Missing/malformed tone or CTL record');
  if(trailer&&!trailer.subarray(0,4).equals(trailer.subarray(4,8)))issues.push('FS1 and FS2 differ');
  if(tone){const order=tone.subarray(12,22);if(!order.equals(Buffer.from([0,1,2,9,3,4,5,6,7,8]))) issues.push('Chain order mismatch');}
 }
 for(const [idx,k]of blocks.entries()){
  const m=k==='N->S'?(j.nam?{model:'Empty',settings:j.nam.settings,always_on:true}:{}):(j.modules[k]||{});
  if(!m.model)continue;
  const hit=entries.find(([id,e])=>k==='N->S'?((e.module==='N->S'||e.module==='N→S')&&e.fxtitle==='Tone Catch '+j.nam.slot):(e.module===k&&e.name.trim()===m.model));
  if(!hit){issues.push(k+' model not in catalog: '+m.model);continue;}
  const [id,e]=hit;
  for(const [key,val]of Object.entries(m.settings||{})){
   const param=e.params.find(q=>q.name.trim()===key);if(!param){issues.push(k+' unknown parameter '+key);continue;}
   if(Number(val)<param.min||Number(val)>param.max)issues.push(k+'.'+key+' outside catalog range');
   if(tone){const actual=tone.readFloatLE(70+(idx*8+param.algId)*4);if(Math.abs(actual-Number(val))>0.0001)issues.push(k+'.'+key+' binary '+actual+' != JSON '+val);}
  }
  const missing=e.params.filter(q=>!(q.name.trim() in(m.settings||{}))).map(q=>q.name.trim());if(missing.length)omitted.push(k+': '+missing.join(','));
  const active=m.always_on?true:m.ctl?m.ctl_off_state==='on':m.midi?m.start_state!=='off':true;
  if(tone){if(!!(tone.readUInt32LE(4)&(1<<idx))!==active)issues.push(k+' initial bypass differs');if(tone.readUInt32LE(26+idx*4)!==Number(id))issues.push(k+' binary model differs');}
  if(trailer&&!!(trailer.readUInt32LE(0)&(1<<idx))!==!!m.ctl)issues.push(k+' CTL mask differs');
  if(m.ctl&&m.ctl_on_state===m.ctl_off_state)issues.push(k+' CTL states do not invert');
  if(m.midi&&!['PRE','DST','MOD','DLY'].includes(k))issues.push(k+' unsupported MIDI');
 }
 return {file:path.relative(root,p).replaceAll('\\','/'),j,md,issues,omitted};
});
const batch=Number(process.argv[2]||0),size=25;
if(process.argv[2]==='checks'){
 console.log(JSON.stringify({count:results.length,issues:results.filter(r=>r.issues.length).map(({file,issues})=>({file,issues})),omitted:results.filter(r=>r.omitted.length).map(({file,omitted})=>({file,omitted}))},null,2));
}else if(process.argv[2]==='save'){
 fs.mkdirSync(path.join(root,'Documents','patch-audit-2026-10-16'),{recursive:true});
 fs.writeFileSync(path.join(root,'Documents','patch-audit-2026-10-16','inventory.json'),JSON.stringify(results,null,2)+'\n');
 console.log('Saved '+results.length+' records');
}else{
 for(const [n,r]of results.slice(batch*size,batch*size+size).entries()){
  console.log('\n# '+(batch*size+n+1)+' '+r.file+'\n'+r.md.split('\n').slice(0,9).join(' ').slice(0,650));
  console.log('VOL '+r.j.patch_vol+' BPM '+r.j.bpm+' '+JSON.stringify(r.j.nam||r.j.ir||{}));
  console.log(Object.entries(r.j.modules).filter(([k,v])=>v.model).map(([k,v])=>k+' '+v.model+' '+(v.ctl?'CTL '+v.ctl_off_state+'>'+v.ctl_on_state:v.midi?'MIDI '+v.start_state:'fixed')+(v.midi&&v.ctl?' +MIDI':'')+' '+JSON.stringify(v.settings)).join(' | '));
  const paragraphs=r.md.split(/\r?\n\r?\n/);
  console.log('BOARD: '+paragraphs.filter(t=>/COMP:|COMP \d|Drive:|Drive \d|Width:|Width \d|Level ~|Level:/.test(t)&&/Ultimate Comp|Tidal Wave|Narcissus|White Tape|King of Kings/.test(t)).map(t=>t.replace(/\r?\n/g,' ').slice(0,330)).join(' | '));
  if(r.issues.length)console.log('ISSUES: '+r.issues.join('; '));
 }
}
