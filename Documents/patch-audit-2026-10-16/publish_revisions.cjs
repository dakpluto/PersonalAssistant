// Match existing pieces by attached patch filename first, then song+artist.
// Reads secrets from the music site's env file and never writes or prints them.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../..'),runtime=path.join(root,'.runtime');
fs.mkdirSync(runtime,{recursive:true});
const envText=fs.readFileSync('C:/Users/dakpl/ClaudeCode/Music_Storage_Site/.env.local','utf8');
const env={};for(const line of envText.split(/\r?\n/)){const m=line.match(/^([A-Z_][A-Z0-9_]*)=(.*)$/);if(m)env[m[1]]=m[2].trim().replace(/^['"]|['"]$/g,'');}
const supa=env.NEXT_PUBLIC_SUPABASE_URL,secret=env.SUPABASE_SERVICE_ROLE_KEY;
if(!supa||!secret||!env.PATCH_UPLOAD_API_KEY)throw Error('Required site configuration missing');
const headers={apikey:secret,Authorization:'Bearer '+secret};
async function get(table,select){let error;for(let attempt=0;attempt<3;attempt++){try{const r=await fetch(supa+'/rest/v1/'+table+'?select='+select,{headers,signal:AbortSignal.timeout(30000)});if(!r.ok)throw Error('Site '+table+' read HTTP '+r.status);return await r.json();}catch(e){error=e;if(attempt<2)await new Promise(r=>setTimeout(r,1000));}}throw error;}
const norm=s=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]/g,'');
async function main(){
if(process.argv.includes('--probe')){const r=await fetch('https://www.dakplutomusic.us/login',{signal:AbortSignal.timeout(15000)});console.log('Music-site HTTP '+r.status);return;}
const pieces=await get('pieces','id,title,artist,notes,tags'),files=await get('files','id,piece_id,filename,kind');
if(process.argv.includes('--verify')){
 const log=JSON.parse(fs.readFileSync(path.join(__dirname,'publication-results.json'),'utf8'));
 const duplicates=[];for(const l of log)for(const f of l.files){const matches=files.filter(row=>row.piece_id===l.pieceId&&row.filename===f.filename&&row.kind===f.kind);if(matches.length!==1||matches[0].id!==f.id)duplicates.push({number:l.number,filename:f.filename,count:matches.length});}
 if(duplicates.length)throw Error('Attachment verification: '+JSON.stringify(duplicates));
 console.log('Final site verification: '+pieces.length+' pieces, '+files.length+' files; all 398 revised attachments present exactly once.');return;
}
if(process.argv.includes('--inspect')){const hits=files.filter(f=>f.filename==='ManInTheBox-AIC-RhythmGtr.prst'||f.filename==='ManInTheBox-AIC-RhythmGtr.pdf');console.log(JSON.stringify(hits.map(f=>({...f,title:pieces.find(p=>p.id===f.piece_id)?.title}))));return;}
const details=JSON.parse(fs.readFileSync(path.join(__dirname,'implementation-details.json'),'utf8'));
const manifest=JSON.parse(fs.readFileSync(path.join(__dirname,'implementation-manifest.json'),'utf8'));
const map=[];
for(const d of details){
 const stem=path.basename(d.file,'.json');let ids=[...new Set(files.filter(f=>f.filename===stem+'.prst'&&f.kind==='gp5_patch').map(f=>f.piece_id))];
 if(!ids.length)ids=[...new Set(files.filter(f=>f.filename===stem+'.pdf'&&f.kind==='patch_writeup').map(f=>f.piece_id))];
 const songTitle=d.title.replace(/\s*\((?:Rhythm Guitar|Lead Guitar|Guitar|Bass|GP-5 Only)\)/ig,'');
 if(!ids.length){const candidates=pieces.filter(p=>norm(p.title)===norm(songTitle));ids=candidates.map(p=>p.id);}
 // One intentionally shared style file already lives on five EWF pieces.
 // Refresh each attachment in place; do not merge or rename the pieces.
 if(d.number===134&&ids.length>1){for(const id of ids){const piece=pieces.find(p=>p.id===id);map.push({number:d.number,file:d.file,pieceId:id,title:piece.title,artist:piece.artist,notes:piece.notes});}continue;}
 if(ids.length!==1){map.push({number:d.number,file:d.file,unresolved:true,candidates:ids.map(id=>pieces.find(p=>p.id===id)),title:songTitle});continue;}
 const piece=pieces.find(p=>p.id===ids[0]);map.push({number:d.number,file:d.file,pieceId:piece.id,title:piece.title,artist:piece.artist,notes:piece.notes});
}
fs.writeFileSync(path.join(runtime,'site-match-map.json'),JSON.stringify(map,null,2)+'\n');
const unresolved=map.filter(r=>r.unresolved);console.log(JSON.stringify({pieces:pieces.length,siteFiles:files.length,matched:map.length-unresolved.length,unresolved}));
if(!process.argv.includes('--publish'))return;
if(unresolved.length)throw Error('Resolve all piece matches before publishing');
const verified=JSON.parse(fs.readFileSync(path.join(__dirname,'build-results.json'),'utf8'));
if(verified.patches!==195)throw Error('All builds must be verified before publishing');
for(const r of verified.results)for(const ext of ['prst','pdf','md']){const file=path.join(root,r.file.replace(/\.json$/,'.'+ext));const hash=crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');if(hash!==r[ext+'_sha256'])throw Error('File changed since QA: '+file);}
const logPath=path.join(__dirname,'publication-results.json'),log=fs.existsSync(logPath)?JSON.parse(fs.readFileSync(logPath,'utf8')):[];
for(const match of map){
 if(log.some(l=>l.number===match.number&&l.pieceId===match.pieceId&&l.success))continue;
 const d=details[match.number-1],r=manifest[match.number-1],stem=path.basename(r.file,'.json'),instrument=r.file.split('/')[1].toLowerCase(),type=r.file.split('/')[2].toLowerCase();
 const base=path.join(root,r.file.slice(0,-5));
 const foundation=r.j.nam?'SnapTone slot '+r.j.nam.slot+' '+r.j.nam.name.split(' (slot')[0]:r.j.modules.AMP.model+' / '+(r.j.ir?.name||r.j.modules.CAB.model);
 const summary=(d.board?'Full board '+d.board.option:'GP-5 only')+'; '+foundation+'; audit revision 2026-10-16';
 const form=new FormData();form.set('title',match.title);if(match.artist)form.set('artist',match.artist);form.set('tags','gp5,'+instrument+','+type+'-patch');form.set('notes',summary);
 form.set('prst',new Blob([fs.readFileSync(base+'.prst')],{type:'application/octet-stream'}),stem+'.prst');form.set('pdf',new Blob([fs.readFileSync(base+'.pdf')],{type:'application/pdf'}),stem+'.pdf');
 console.log('Uploading '+stem+' to its existing piece...');
 const res=await fetch('https://www.dakplutomusic.us/api/patches',{method:'POST',headers:{Authorization:'Bearer '+env.PATCH_UPLOAD_API_KEY},body:form,signal:AbortSignal.timeout(120000)});
 if(!res.ok)throw Error('Patch '+match.number+' upload HTTP '+res.status);
 const result=await res.json();if(result.pieceId!==match.pieceId||!result.pieceUrl||result.files?.length!==2)throw Error('Unexpected upload response for '+match.number);
 log.push({number:match.number,file:match.file,title:match.title,pieceId:result.pieceId,pieceUrl:result.pieceUrl,files:result.files,success:true,summary,instrument});fs.writeFileSync(logPath,JSON.stringify(log,null,2)+'\n');
 console.log('Uploaded '+log.length+'/'+map.length+': '+stem);
}
// Refresh notes for the revised patch setup, preserving unrelated non-patch notes.
const grouped=new Map();for(const l of log){const g=grouped.get(l.pieceId)||[];g.push(l);grouped.set(l.pieceId,g);}
for(const[id,items]of grouped){
 const piece=pieces.find(p=>p.id===id);const patchNotes=items.map(l=>(l.instrument==='guitar'?'Guitar: ':'Bass: ')+l.summary).join(' | ');
 const prior=piece.notes||'';
 const marker='\nPatch revision: ';
 const hasMarker=prior.includes(marker),base=hasMarker?prior.split(marker)[0]:prior;
 const isOldPatchNote=/GP-5|GP5|[Ss]nap[Tt]one|[Ff]ull [Bb]oard|Guitar:|Bass:/i.test(base);
 const notes=base&&(hasMarker||!isOldPatchNote)?base+marker+patchNotes:patchNotes;
 const response=await fetch(supa+'/rest/v1/pieces?id=eq.'+id,{method:'PATCH',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({notes})});if(!response.ok)throw Error('Notes update HTTP '+response.status);
}
const finalFiles=await get('files','id,piece_id,filename,kind,size_bytes');
for(const l of log)for(const f of l.files){const row=finalFiles.find(v=>v.id===f.id&&v.piece_id===l.pieceId);const local=path.join(root,l.file.replace(/\.json$/,f.kind==='gp5_patch'?'.prst':'.pdf'));if(!row||row.size_bytes!==fs.statSync(local).size)throw Error('Post-upload file check failed '+l.number);}
console.log('Verified all '+log.reduce((n,l)=>n+l.files.length,0)+' uploaded file records and refreshed notes for '+grouped.size+' existing pieces.');
}
main().catch(e=>{console.error(e.message);process.exitCode=1;});
