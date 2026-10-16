// Explicit, replayable implementation of the approved October 16 patch audit.
// Uses the immutable pre-audit inventory; does not infer settings from prose.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../..');
const originals=JSON.parse(fs.readFileSync(path.join(__dirname,'inventory.json'),'utf8'));
const manifestPath=path.join(__dirname,'implementation-manifest.json');
const priorManifest=fs.existsSync(manifestPath)?JSON.parse(fs.readFileSync(manifestPath,'utf8')):[];
const notes=new Map(fs.readFileSync(path.join(__dirname,'recommendations.tsv'),'utf8').trim().split(/\r?\n/).map(l=>{const[n,p,...v]=l.split('\t');return[+n,v.join('\t')];}));
const catalog=Object.values(JSON.parse(fs.readFileSync(path.join(root,'Tools/fxid_ring_gp5.json'),'utf8')));
const blocks=['NR','PRE','DST','AMP','CAB','EQ','MOD','DLY','RVB'];
const work=originals.map(r=>({...r,j:structuredClone(r.j),boardChanges:[],decisions:[]}));
const R=n=>work[n-1], M=(n,k)=>R(n).j.modules[k];
function set(n,k,values){if(k==='NAM'){if(!R(n).j.nam)throw Error('No NAM '+n);Object.assign(R(n).j.nam.settings,values);}else {if(!M(n,k)?.model)throw Error('No module '+n+' '+k);Object.assign(M(n,k).settings,values);}}
function off(n,...ks){for(const k of ks)R(n).j.modules[k]={model:null};}
function ctl(n,k,initial='off'){const m=M(n,k);if(!m?.model)throw Error('Missing CTL model');delete m.always_on;delete m.start_state;m.ctl=true;m.ctl_off_state=initial;m.ctl_on_state=initial==='on'?'off':'on';}
function fixed(n,k){const m=M(n,k);delete m.ctl;delete m.ctl_off_state;delete m.ctl_on_state;delete m.start_state;delete m.midi;m.always_on=true;}
function make(n,k,model,settings,isCtl=false){R(n).j.modules[k]={model,settings,always_on:true};if(isCtl)ctl(n,k);}
function eqLift(n,vol=53){let eq=M(n,'EQ');if(!eq?.model)make(n,'EQ',R(n).file.includes('/Bass/')?'Bass EQ 2':'Guitar EQ 2',{});eq=M(n,'EQ');Object.assign(eq.settings,{VOL:vol});ctl(n,'EQ');}
function board(n,pedal,values,state){R(n).boardChanges.push({pedal,values,state});}
function decision(n,text){R(n).decisions.push(text);}
function nam(n,slot,settings){const donor=originals.find(r=>r.j.nam?.slot===slot).j.nam;R(n).j.nam={name:donor.name,slot,settings};delete R(n).j.ir;off(n,'AMP','CAB');}
function mesa(n){delete R(n).j.nam;R(n).j.ir={name:'Mesa215'};make(n,'AMP','Mess Bass',{Gain:40,VOL:62,Bass:54,Middle:58,Treble:52});make(n,'CAB','User IR 7',{VOL:58});}
// Bass: Artist and Song, 1–50.
set(1,'NR',{THRE:10});set(1,'PRE',{Sustain:45});set(1,'MOD',{VOL:50});set(1,'EQ',{'33Hz':0,'600Hz':-2,'8kHz':3});set(1,'RVB',{Mix:15});board(1,'Narcissus',{Depth:30});
set(2,'PRE',{Sustain:35});
set(3,'MOD',{Rate:0.6,Depth:25});set(3,'RVB',{Mix:12,Decay:30});
off(4,'PRE');set(4,'DST',{Gain:30,Blend:35});set(4,'EQ',{'33Hz':0,'2kHz':4,'8kHz':3});set(4,'NAM',{Treble:58});decision(4,'Keep Bass OD as the principal added drive; Tidal Wave drive stays off in both CTL states.');board(4,'Tidal Wave',{},'Drive off throughout; preamp active');
set(5,'PRE',{Gain:20});
set(6,'PRE',{Gain:25});set(6,'RVB',{Mix:8});set(6,'EQ',{'33Hz':0,'8kHz':0});
off(7,'DLY');set(7,'MOD',{Depth:18});set(7,'RVB',{Mix:8});set(7,'PRE',{Gain:25});
set(8,'DLY',{Mix:18});set(8,'RVB',{Mix:18});set(8,'NAM',{Bass:55});set(8,'EQ',{'50Hz':1});set(8,'NR',{THRE:8});
set(9,'RVB',{Mix:8,Decay:30});set(9,'NAM',{Bass:55});
set(10,'RVB',{Mix:8});set(10,'EQ',{VOL:52});
set(11,'PRE',{Gain:25});set(11,'RVB',{Mix:8});
set(12,'PRE',{Gain:25});set(12,'RVB',{Mix:8});
off(13,'DST');eqLift(13,54);
set(14,'DST',{Gain:25,Blend:35});off(14,'RVB');set(14,'EQ',{'4.5kHz':3});set(14,'NAM',{Bass:56});
off(15,'DST','RVB');set(15,'PRE',{Gain:25});
board(16,'Flamma',{},'Off by default; optional synth layer for higher-register notes only');
off(17,'DST');set(17,'RVB',{Mix:6});set(17,'NAM',{Bass:56});
set(18,'DST',{Gain:25,Blend:30});set(18,'RVB',{Mix:6});
set(19,'NAM',{Bass:56});set(19,'EQ',{'50Hz':1});decision(19,'Keep the shared board controls; Flamma is optional at the climax and stays off on the lowest-register notes.');
off(20,'PRE');set(20,'RVB',{Mix:6,Decay:30});set(20,'EQ',{'50Hz':1,'800Hz':0});
off(21,'DST');set(21,'EQ',{'800Hz':3});
set(22,'DST',{Gain:30,Blend:35});off(22,'RVB');set(22,'PRE',{Sustain:40});
off(23,'DST');board(23,'Tidal Wave',{Drive:30,Blend:35},'Drive off for intro/verses; on for heavy choruses and outro; preamp active throughout');set(23,'RVB',{Mix:5});
set(24,'RVB',{Mix:8});set(24,'NAM',{Treble:58});set(24,'EQ',{'4.5kHz':2});
off(25,'DST');set(25,'NR',{THRE:15});set(25,'RVB',{Mix:6});decision(25,'HairySVT supplies the distortion; no added Bass OD.');
off(26,'DST');set(26,'RVB',{Mix:6,Decay:30});set(26,'NAM',{Bass:56});set(26,'EQ',{'33Hz':0});
set(27,'DST',{Gain:25,Blend:35});set(27,'PRE',{Sustain:40});set(27,'NR',{THRE:12});
off(28,'PRE','MOD');set(28,'RVB',{Mix:8});
set(29,'DST',{Gain:30,Blend:40});set(29,'RVB',{Mix:6,Trail:true});
set(30,'PRE',{Gain:25,'+3dB':false});set(30,'EQ',{'33Hz':0,'600Hz':-2,'2kHz':3});set(30,'NAM',{Middle:55});board(30,'Narcissus',{Rate:'9 o’clock'});
set(31,'PRE',{Low:20,Dry:100});set(31,'DST',{Gain:15,Blend:20});
set(32,'DST',{Gain:20,Blend:30});set(32,'PRE',{Sustain:40});
set(33,'PRE',{Gain:25});set(33,'RVB',{Mix:6});set(33,'NAM',{Treble:55});set(33,'EQ',{'2kHz':2});
set(34,'EQ',{'400Hz':1});
set(35,'DST',{Gain:15,Blend:20});off(35,'RVB');set(35,'EQ',{'50Hz':1});
nam(36,51,{Gain:50,VOL:80,Bass:53,Middle:53,Treble:48});off(36,'DST');set(36,'RVB',{Mix:6});decision(36,'Choose the approved clean/woody alternative; no claim of the exact recorded rig.');
make(37,'DST','Bass OD',{Gain:20,Blend:25,VOL:55,Bass:50,Treble:50},true);off(37,'PRE');set(37,'RVB',{Mix:6});
off(38,'DST','RVB');set(38,'PRE',{Gain:25});set(38,'EQ',{'2kHz':3});
off(39,'DST','RVB');set(39,'PRE',{Sustain:40});set(39,'EQ',{'33Hz':0,'2kHz':2});eqLift(39,53);
set(40,'PRE',{Gain:20});
set(41,'DST',{Gain:15,Blend:20});set(41,'RVB',{Mix:8});
off(42,'PRE','MOD');set(42,'EQ',{'33Hz':0});set(42,'RVB',{Mix:6});
off(43,'DST','RVB');set(43,'PRE',{Gain:25});board(43,'Tidal Wave',{Drive:25,Blend:35},'Drive on for the main garage-rock groove; preamp active throughout');
set(44,'PRE',{Sustain:35,Clip:40});set(44,'EQ',{'33Hz':0,'8kHz':2});set(44,'NAM',{Bass:56});
set(45,'DST',{Gain:25,Blend:30});set(45,'RVB',{Mix:5});
set(46,'RVB',{Mix:6});
set(47,'NAM',{Gain:50,Treble:56});set(47,'NR',{THRE:12});set(47,'EQ',{'4.5kHz':2});set(47,'PRE',{Gain:25});set(47,'RVB',{Mix:6});
set(48,'NAM',{Bass:56});set(48,'EQ',{'50Hz':1});set(48,'RVB',{Mix:8,Decay:30});set(48,'NR',{THRE:10});
set(49,'PRE',{Gain:25});set(49,'RVB',{Mix:6});set(49,'EQ',{'2kHz':3});
off(50,'DST');set(50,'PRE',{Gain:25});set(50,'RVB',{Mix:6});
// Bass: Song, 51–100.
set(51,'DST',{Gain:20,Blend:30});set(51,'EQ',{'800Hz':3,'4.5kHz':2});
set(52,'NR',{THRE:12});set(52,'NAM',{Gain:50,Treble:56});set(52,'RVB',{Mix:6});
off(53,'DST');eqLift(53,53);
off(54,'DST');set(54,'RVB',{Mix:6});set(54,'NAM',{Bass:56});set(54,'EQ',{'50Hz':1});
off(55,'DST','RVB');set(55,'NAM',{Gain:50});set(55,'PRE',{Gain:25});board(55,'Tidal Wave',{},'Drive off throughout; preamp active');board(55,'Flamma',{},'Off by default; optional quiet octave only above the lowest register');
set(56,'RVB',{Mix:8,Decay:35});set(56,'PRE',{Gain:25});set(56,'EQ',{'33Hz':0});
set(57,'RVB',{Mix:6});set(57,'NAM',{Bass:56});
set(58,'RVB',{Mix:7,Decay:30});
off(59,'DST');set(59,'RVB',{Mix:6});set(59,'PRE',{Sustain:40});
off(60,'DST','RVB');set(60,'PRE',{Gain:25});set(60,'NR',{THRE:20});set(60,'NAM',{Middle:58});set(60,'EQ',{'2kHz':3});
set(61,'DST',{Gain:25,Blend:30});set(61,'PRE',{Sustain:40});set(61,'NR',{THRE:12});
set(62,'NR',{THRE:12});set(62,'NAM',{Gain:50,Bass:56});set(62,'PRE',{Gain:25});set(62,'RVB',{Mix:6,Decay:25});
set(63,'DST',{Gain:25,Blend:30});
set(64,'NR',{THRE:10});set(64,'RVB',{Mix:8,Decay:25});off(64,'MOD');
off(65,'PRE');set(65,'DST',{Gain:25,Blend:30});ctl(65,'DST');set(65,'RVB',{Mix:5});
set(66,'MOD',{VOL:50});set(66,'NR',{THRE:10});set(66,'RVB',{Mix:8,Decay:25});decision(66,'Retain the light chorus, with its output level brought back to the library baseline.');
off(67,'DST');set(67,'PRE',{Gain:25});set(67,'RVB',{Mix:6});
set(68,'MOD',{Depth:15});set(68,'RVB',{Mix:6});set(68,'PRE',{Gain:25});
off(69,'DST');board(69,'Tidal Wave',{Drive:25,Blend:35},'Drive on for the main boogie groove; preamp active throughout');set(69,'NAM',{Bass:55});set(69,'EQ',{'33Hz':0});
set(70,'NR',{THRE:8});set(70,'RVB',{Mix:7,Decay:30});off(70,'MOD');set(70,'EQ',{'400Hz':0});
off(71,'DST','PRE');board(71,'Tidal Wave',{Drive:25,Blend:35},'Drive off for restrained sections; on for the climax; preamp active throughout');set(71,'RVB',{Mix:6});
off(72,'DST');set(72,'PRE',{Gain:20,'+3dB':false});set(72,'NAM',{Gain:50,Bass:55});set(72,'EQ',{'50Hz':1,'400Hz':-2,'800Hz':2,'4.5kHz':2});
set(73,'NR',{THRE:12});set(73,'RVB',{Mix:6});set(73,'PRE',{Gain:20});
off(74,'DST','RVB');set(74,'NAM',{Bass:55,Middle:50});set(74,'EQ',{'50Hz':0,'120Hz':1,'800Hz':0});
set(75,'NR',{THRE:8});set(75,'RVB',{Mix:6});set(75,'NAM',{Gain:50});
set(76,'RVB',{Mix:6});set(76,'EQ',{'400Hz':-1,'800Hz':1,'4.5kHz':2});set(76,'NR',{THRE:15});
off(77,'DST');set(77,'EQ',{VOL:52});
off(78,'DST');
mesa(79);off(79,'DST');set(79,'EQ',{VOL:50,'400Hz':-2,'800Hz':3,'4.5kHz':3});set(79,'RVB',{Mix:6});
set(80,'PRE',{Gain:25});set(80,'RVB',{Mix:6});set(80,'MOD',{Depth:12});
off(81,'DST');
set(82,'RVB',{Mix:5});
set(83,'RVB',{Mix:6});set(83,'NAM',{Treble:44});
set(84,'EQ',{VOL:50,'50Hz':1,'120Hz':1});set(84,'NR',{THRE:8});set(84,'RVB',{Mix:6});
off(85,'DST','PRE');board(85,'Tidal Wave',{Drive:25,Blend:35},'Drive off for verses; on for the solo/outro; preamp active throughout');set(85,'RVB',{Mix:8});
off(86,'DST','PRE');board(86,'Tidal Wave',{Blend:35},'Drive off for intro/verses; on for the heavy machine-gun sections; preamp active throughout');set(86,'RVB',{Mix:5});
set(87,'DST',{Gain:30,Blend:35});set(87,'RVB',{Mix:6});
set(88,'DST',{Gain:18,Blend:25});set(88,'RVB',{Mix:6});
set(89,'NAM',{Bass:56});set(89,'EQ',{'120Hz':1});off(89,'PRE');
off(90,'MOD','DST');set(90,'NAM',{Gain:50,Middle:58});set(90,'NR',{THRE:18});set(90,'RVB',{Mix:6});set(90,'EQ',{'2kHz':3});board(90,'Tidal Wave',{Drive:30,Blend:35},'Drive on for the main rock voice; preamp active throughout');
set(91,'DST',{Gain:20,Blend:25});set(91,'PRE',{Sustain:40});
set(92,'RVB',{Mix:6});set(92,'PRE',{Gain:25});
set(93,'RVB',{Mix:5});set(93,'NR',{THRE:8});
set(94,'DST',{Gain:25,Blend:35});set(94,'RVB',{Mix:5});set(94,'AMP',{Bass:55});set(94,'EQ',{'800Hz':1});
set(95,'RVB',{Mix:8,Decay:35});set(95,'PRE',{Gain:25});
set(96,'RVB',{Mix:5,Decay:25});
set(97,'DST',{Gain:15,Blend:20});set(97,'RVB',{Mix:6});
set(98,'PRE',{Sustain:30});
set(99,'NAM',{Bass:55});set(99,'DST',{Gain:20,Blend:30});set(99,'RVB',{Mix:8,Trail:true});
set(100,'RVB',{Mix:6,Decay:25});
// Bass: 101–135.
off(101,'DST');set(101,'RVB',{Mix:5});eqLift(101,53);
set(102,'RVB',{Mix:5});set(102,'DST',{Gain:25,Blend:25});
set(103,'DST',{Gain:25,Blend:30});
board(104,'Tidal Wave',{Drive:25});
set(105,'RVB',{Mix:10,Decay:35});set(105,'NR',{THRE:8});set(105,'EQ',{'400Hz':0,'800Hz':1});off(105,'MOD');
off(106,'PRE');set(106,'DST',{Gain:20,Blend:25});set(106,'RVB',{Mix:5});set(106,'NAM',{Bass:55});
off(107,'PRE');set(107,'DST',{Gain:25,Blend:30});set(107,'RVB',{Mix:8});decision(107,'Use the GP-5 Bass OD alone for the adapted heavy section; Tidal Wave drive stays off.');
off(108,'DST');set(108,'RVB',{Mix:12,Trail:true});set(108,'NAM',{Bass:56});set(108,'EQ',{'800Hz':0});
mesa(109);off(109,'PRE');set(109,'DST',{Gain:25,Blend:35});set(109,'RVB',{Mix:5});set(109,'NR',{THRE:18});
set(110,'PRE',{Gain:25});set(110,'RVB',{Mix:5});
set(111,'PRE',{Gain:20});
set(112,'DST',{Gain:25,Blend:30});set(112,'PRE',{Sustain:40});
off(113,'DST');set(113,'PRE',{Gain:25});set(113,'NAM',{Bass:55});
set(114,'EQ',{'33Hz':0,'8kHz':0});set(114,'RVB',{Mix:6});set(114,'PRE',{Gain:25});set(114,'NAM',{Bass:56});
set(115,'NR',{THRE:8});set(115,'RVB',{Mix:6});set(115,'EQ',{'33Hz':0,'150Hz':2,'2kHz':0});
set(116,'RVB',{Mix:5});board(116,'Tidal Wave',{Drive:25});
off(117,'PRE');set(117,'NAM',{Gain:50});set(117,'DST',{Gain:25,Blend:30});set(117,'EQ',{'50Hz':1,'800Hz':2,'4.5kHz':2});
set(118,'RVB',{Mix:6});set(118,'PRE',{Sustain:40});
off(119,'DST');set(119,'PRE',{Gain:25});set(119,'RVB',{Mix:5});set(119,'EQ',{'33Hz':0});set(119,'NAM',{Bass:55});
set(120,'RVB',{Mix:8,Decay:35});set(120,'PRE',{Gain:25});set(120,'EQ',{'50Hz':1});
off(121,'DST');set(121,'PRE',{Gain:25,'+3dB':false});set(121,'NAM',{Gain:50});set(121,'EQ',{'50Hz':1,'4.5kHz':2});
off(122,'MOD','DST','RVB');set(122,'PRE',{Mix:45});set(122,'EQ',{'50Hz':1});
set(123,'RVB',{Mix:5});
off(124,'DST');set(124,'RVB',{Mix:7,Trail:true});set(124,'NAM',{Bass:55});set(124,'EQ',{'800Hz':0});
off(125,'DST');
set(126,'DST',{Gain:20,Blend:25});set(126,'RVB',{Mix:6});
off(127,'DST');board(127,'Tidal Wave',{Drive:25,Blend:35});set(127,'PRE',{Gain:25});set(127,'RVB',{Mix:5});
set(128,'NAM',{Bass:56,Middle:50});set(128,'DST',{Gain:20,Blend:25});set(128,'RVB',{Mix:6});
set(129,'PRE',{Gain:25});set(129,'RVB',{Mix:5});
set(130,'RVB',{Mix:8});set(130,'PRE',{Gain:25});set(130,'EQ',{'2kHz':3});set(130,'NR',{THRE:12});off(130,'MOD');
set(131,'RVB',{Mix:5});
set(132,'RVB',{Mix:8,Decay:35});set(132,'PRE',{Gain:25});set(132,'EQ',{'33Hz':0});set(132,'NR',{THRE:10});off(132,'MOD');
off(133,'PRE','DST','MOD');set(133,'RVB',{Mix:6});set(133,'EQ',{'50Hz':1,'800Hz':0});
set(134,'EQ',{'50Hz':1,'400Hz':-2,'4.5kHz':2,VOL:52});set(134,'PRE',{Sustain:40});
off(135,'DST');set(135,'PRE',{Gain:25});set(135,'NR',{THRE:22});set(135,'EQ',{'150Hz':0,'600Hz':4,'2kHz':3,'8kHz':2});set(135,'NAM',{Middle:56});
board(135,'Stylish Fuzz',{},'Bypassed throughout; Tidal Wave is the principal added drive');
// Guitar: 136–195.
set(136,'MOD',{Depth:30});set(136,'DLY',{Mix:25});set(136,'RVB',{Mix:25,Mod:15});off(136,'PRE');set(136,'EQ',{'6kHz':1});board(136,'Flamma',{},'Off for rhythm/lead; on for sustained pad sections only');board(136,'King of Kings Right',{},'Bypassed; reserve for exceptional peaks after level matching');
set(137,'PRE',{Gain:25,'+3dB':false});set(137,'RVB',{Mix:12});set(137,'MOD',{Depth:30});board(137,'King of Kings Right',{},'Bypassed throughout');
set(138,'NR',{THRE:15});set(138,'RVB',{Mix:10});set(138,'DLY',{Mix:12});set(138,'DST',{Gain:55});
set(139,'PRE',{Sustain:40});set(139,'DLY',{Mix:12});
nam(140,62,{Gain:45,VOL:75,Bass:48,Middle:48,Treble:56});set(140,'RVB',{Mix:10});
set(141,'NAM',{Gain:48});off(141,'PRE');decision(141,'Use Super OD alone for the solo push; keep the rhythm-first Deluxe compromise.');
set(142,'RVB',{Mix:14});set(142,'PRE',{Gain:25,'+3dB':false});
set(143,'RVB',{Mix:12});set(143,'DLY',{Mix:15});
off(144,'DST');set(144,'NAM',{Treble:42});set(144,'RVB',{Mix:8});
off(145,'PRE');set(145,'DLY',{Mix:12});set(145,'AMP',{Bass:50});eqLift(145,53);
R(146).j.ir={name:'V30112'};make(146,'CAB','User IR 10',{VOL:50});set(146,'DST',{Gain:55,VOL:60});set(146,'EQ',{'500Hz':-2,'1kHz':2,'3kHz':2,'6kHz':0});set(146,'RVB',{Mix:12});set(146,'DLY',{Mix:20});board(146,'Narcissus',{},'On for clean verses; off for heavy choruses');
set(147,'DST',{Gain:25});
off(148,'PRE');set(148,'NR',{THRE:18});set(148,'NAM',{Gain:50});
board(149,'King of Kings Left',{},'Bypassed throughout');board(149,'Narcissus',{},'Bypassed throughout');set(149,'DST',{Gain:15,Tone:55});set(149,'NAM',{Middle:56,Treble:55});set(149,'EQ',{'500Hz':1,'1kHz':2});eqLift(149,53);set(149,'RVB',{Mix:10});
off(150,'PRE');set(150,'EQ',{'1.6kHz':2,'4kHz':3,VOL:50});board(150,'Stylish Fuzz',{},'Bypassed throughout');set(150,'RVB',{Mix:10});decision(150,'Keep the loaded Foxy cab so the patch remains self-contained; British Alnico remains a manual audition alternative.');
set(151,'PRE',{Gain:25,'+3dB':false});set(151,'DLY',{Mix:16});eqLift(151,53);
set(152,'PRE',{VOL:55});set(152,'NR',{THRE:15});set(152,'EQ',{'100Hz':0,'500Hz':-1,'1kHz':2,'3kHz':2,'6kHz':0,VOL:50});set(152,'NAM',{Treble:55});set(152,'DST',{Gain:35,VOL:60});set(152,'DLY',{Mix:12});set(152,'RVB',{Mix:10});
set(153,'PRE',{Mix:40});board(153,'Narcissus',{Depth:15});set(153,'RVB',{Mix:10});decision(153,'CTL remains an intentional filtered-lead effect voice; do not add MIDI to a non-MIDI song build.');
off(154,'PRE');set(154,'DST',{Gain:30});set(154,'RVB',{Mix:10});
off(155,'PRE');board(155,'King of Kings Right',{},'Bypassed throughout');set(155,'DLY',{Mix:15,Time:288});set(155,'RVB',{Mix:12});set(155,'NR',{THRE:15});
nam(156,80,{Gain:40,VOL:60,Bass:50,Middle:50,Treble:45});set(156,'RVB',{Mix:10,Trail:true});
set(157,'DLY',{Mix:10});set(157,'DST',{Gain:25});
set(158,'PRE',{Sustain:40});set(158,'DLY',{Mix:12});
set(159,'DST',{Gain:20,Tone:55});
off(160,'PRE');ctl(160,'MOD','on');set(160,'RVB',{Mix:10});eqLift(160,53);
set(161,'PRE',{Sustain:40});set(161,'DLY',{Mix:12});set(161,'DST',{Gain:25});
set(162,'RVB',{Mix:12,Decay:30});set(162,'DLY',{Mix:12});
set(163,'RVB',{Mix:12});set(163,'DLY',{Mix:12});set(163,'DST',{Gain:20});
set(164,'DLY',{Mix:16,Feedback:22});set(164,'RVB',{Mix:12});set(164,'DST',{Gain:30});
off(165,'DST');set(165,'PRE',{Gain:25,'+3dB':false});set(165,'DLY',{Mix:18});set(165,'NR',{THRE:12});set(165,'RVB',{Trail:true});eqLift(165,53);
nam(166,61,{Gain:45,VOL:75,Bass:48,Middle:50,Treble:55});set(166,'NR',{THRE:12});set(166,'DST',{Gain:40});
off(167,'PRE');set(167,'DLY',{Mix:14});eqLift(167,53);
set(168,'EQ',{'400Hz':-2,'1.6kHz':2,'4kHz':3,VOL:50});set(168,'NAM',{Treble:56});set(168,'RVB',{Mix:10});set(168,'DLY',{Mix:14});off(168,'DST');eqLift(168,53);
set(169,'DST',{Gain:8,VOL:60});set(169,'PRE',{Mix:50,Q:50});set(169,'NR',{THRE:25});
set(170,'RVB',{Mix:10});set(170,'DST',{Gain:25});
set(171,'RVB',{Mix:12});set(171,'DST',{Gain:25});
set(172,'PRE',{Sustain:35});set(172,'NAM',{Middle:50});set(172,'EQ',{'500Hz':0});set(172,'RVB',{Mix:8});
set(173,'RVB',{Mix:12,Decay:30});set(173,'DLY',{Mix:12});
off(174,'PRE');set(174,'DST',{Gain:45});M(174,'DLY').start_state='off';eqLift(174,53);
set(175,'PRE',{Gain:25,'+3dB':false});set(175,'RVB',{Mix:10});eqLift(175,53);
set(176,'PRE',{Mix:60,Q:50});set(176,'RVB',{Mix:8});set(176,'EQ',{'125Hz':-4});
set(177,'DLY',{Mix:18,'F.Back':22});set(177,'PRE',{Gain:25,'+3dB':false});
set(178,'PRE',{Sustain:30});set(178,'RVB',{Mix:10});off(178,'DST');set(178,'NAM',{Middle:48});eqLift(178,53);
set(179,'RVB',{Mix:12,Decay:35});set(179,'PRE',{Sustain:30});off(179,'DST','MOD');eqLift(179,53);
set(180,'RVB',{Mix:10});set(180,'DLY',{Mix:12});
off(181,'PRE');nam(181,80,{Gain:45,VOL:60,Bass:55,Middle:60,Treble:62});set(181,'DST',{Gain:40,Tone:55,VOL:60});set(181,'EQ',{'500Hz':1,'1kHz':2,'3kHz':3,'6kHz':0,VOL:53});set(181,'RVB',{Mix:10});set(181,'DLY',{Mix:18});board(181,'King of Kings Right',{},'Bypassed throughout');
set(182,'PRE',{Sustain:40});set(182,'DLY',{Mix:12});
set(183,'DST',{Gain:30});set(183,'DLY',{Mix:12});set(183,'RVB',{Mix:16});
set(184,'PRE',{Gain:25,'+3dB':false});set(184,'NR',{THRE:20});eqLift(184,53);
off(185,'PRE');set(185,'DLY',{Mix:12});set(185,'NR',{THRE:20});
set(186,'NAM',{Treble:58});set(186,'EQ',{'4kHz':1});set(186,'RVB',{Mix:18});set(186,'DLY',{Mix:12});
off(187,'DST');eqLift(187,53);set(187,'NR',{THRE:20});
set(188,'MOD',{Depth:20});set(188,'RVB',{Mix:12});set(188,'DLY',{Mix:12});set(188,'DST',{Gain:30});
set(189,'RVB',{Mix:10});set(189,'DLY',{Mix:10});
set(190,'DST',{Gain:20});set(190,'DLY',{Mix:18,'F.Back':24});set(190,'RVB',{Trail:true});
set(191,'RVB',{Mix:8});set(191,'DST',{Gain:25});
set(192,'RVB',{Mix:12});set(192,'DLY',{Mix:14});set(192,'DST',{Gain:40});
off(193,'PRE');set(193,'RVB',{Mix:22,Mod:15});
off(194,'DST');set(194,'MOD',{Depth:18,Rate:0.5});set(194,'RVB',{Mix:10});set(194,'EQ',{'3kHz':1});eqLift(194,53);
set(195,'DST',{Gain:20});set(195,'DLY',{Mix:8});
// Finalize all nine module records, range-check, keep every audited capture VOL,
// and give cross-instrument screen collisions an instrument-first short name.
const names=new Map();
for(const r of originals){const name=r.j.patch_name.slice(0,10);names.set(name,[...(names.get(name)||[]),r.file]);}
for(const [i,r]of work.entries()){
 const n=i+1;
 r.j.modules=Object.fromEntries(blocks.map(k=>[k,r.j.modules[k]||{model:null}]));
 if(names.get(originals[i].j.patch_name.slice(0,10)).length>1){const prefix=r.file.includes('/Bass/')?'B-':'G-';r.j.patch_name=prefix+originals[i].j.patch_name.replace(/[^a-zA-Z0-9]/g,'').slice(0,8);}
 const explicitNames={102:'B-Spidey67',103:'B-Spidey94',183:'G-Spidey67',184:'G-Spidey94'};
 if(explicitNames[n])r.j.patch_name=explicitNames[n];
 const count=Object.values(r.j.modules).filter(m=>m.ctl).length;if(count>3)throw Error('CTL limit '+n);
 for(const [k,m]of Object.entries(r.j.modules)){
  if(!m.model)continue;
  const e=catalog.find(e=>e.module===k&&e.name.trim()===m.model);if(!e)throw Error('Catalog model '+n+' '+k);
  for(const [key,value]of Object.entries(m.settings)){const p=e.params.find(p=>p.name.trim()===key);if(!p||+value<p.min||+value>p.max)throw Error('Invalid parameter '+n+' '+k+' '+key);}
  for(const p of e.params)if(!(p.name.trim() in m.settings))m.settings[p.name.trim()]=p.default;
 }
 r.number=n;r.proposal=notes.get(n);
 r.before_sha256=priorManifest[i]?.before_sha256||crypto.createHash('sha256').update(fs.readFileSync(path.join(root,r.file))).digest('hex');
}
fs.writeFileSync(path.join(__dirname,'implementation-manifest.json'),JSON.stringify(work.map(({file,j,number,boardChanges,decisions,proposal,before_sha256})=>({number,file,j,boardChanges,decisions,proposal,before_sha256})),null,2)+'\n');
if(process.argv.includes('--write'))for(const r of work)fs.writeFileSync(path.join(root,r.file),JSON.stringify(r.j,null,2)+'\n');
console.log('Prepared '+work.length+' explicit approved patch revisions'+(process.argv.includes('--write')?' and wrote JSON specs.':'.'));
