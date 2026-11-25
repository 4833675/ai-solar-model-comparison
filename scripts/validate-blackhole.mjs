import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {BLACKHOLE_WORKS,BLACKHOLE_GROUPS,blackholeScore,blackholeRows} from '../assets/blackhole-data.js';

const hash=b=>createHash('sha256').update(b).digest('hex');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
assert.equal(BLACKHOLE_WORKS.length,15,'One pinned example and fourteen published submissions');
const w=BLACKHOLE_WORKS[0];
assert.equal(w.id,'Fable5.2(Max)(Claude Code)');assert.equal(w.example,true);assert.ok(!w.reference);
assert.equal(w.tier,1);assert.equal(w.recommendation,'△△△△△');assert.equal(w.reason,'示例、未按任务文档执行、任务发布者');assert.equal(w.environment,'Claude Code');
assert.equal(hash(await readFile(w.file)),'9e7f1a27eee623947c495c67c9bb51d61c685db1e3846fad492b27c1418df905','Renaming must preserve the reference source');
assert.equal(hash(await readFile(w.shot)),'9175f0018a11e3732c97a59a2f55e1e98c2d435b1f66b90b1191e0c56e21f09c','Reuse the saved screenshot');
assert.equal((await readFile(w.file)).length,w.bytes);
assert.equal((await readFile(w.file,'utf8')).split('\n').length-1,w.lines);
const s=blackholeScore(w);close(s.base,2653/45);close(s.advanced,36);close(s.exact,4273/45);assert.equal(s.total,95);
assert.equal(s.adjustment,0);assert.equal(s.free,0);assert.equal(s.refund,0);
close(BLACKHOLE_GROUPS.filter(g=>g.layer==='base').reduce((a,g)=>a+g.max,0),60);
close(BLACKHOLE_GROUPS.filter(g=>g.layer==='advanced').reduce((a,g)=>a+g.max,0),40);

// Policy boundaries: full points with extensions can reach 123; a fatal record
// drops its subjective tier correction without capping its measured score.
const variant=structuredClone(w);variant.tier=0;
variant.score.rootCauses=[{autoBefore:20,autoAfter:50,cap:10}];
variant.score.free=Array.from({length:6},()=>({usable:1,number:1,computed:1,integrated:1}));
assert.equal(blackholeScore(variant).total,123);
variant.score.fatal={level:'L2'};
assert.equal(blackholeScore(variant).tier,4);assert.equal(blackholeScore(variant).total,120);
variant.score.rootCauses=[];variant.score.free=[{usable:0,number:1,computed:1,integrated:1}];
close(blackholeScore(variant).exact,4273/45);assert.equal(blackholeScore(variant).free,0);

// Machine-dependent measurements never lower the default four points.
variant.score.base.F3={fps:1,renderScale:.1,adaptive:false,score:0};
close(blackholeScore(variant).exact,4273/45);
variant.score.performanceDeduction={source:'automatic',points:4};close(blackholeScore(variant).exact,4273/45);
variant.score.performanceDeduction={source:'author',points:1,reason:'Explicit author request'};close(blackholeScore(variant).exact,4228/45);
const d=BLACKHOLE_WORKS[1];assert.equal(d.id,'DeepSeekFlash(Max)(ZCode)V1');assert.equal(d.tier,1);assert.equal(d.recommendation,'△△△');assert.equal(d.reason,'速度快缓存高；干活慢消耗多');
assert.deepEqual(d.score.performanceDeduction,{source:'author',points:1,reason:'站点作者指定：性能扣1分。'});
const ds=blackholeScore(d);close(ds.base,59);close(ds.advanced,39.5);close(ds.free,4);close(ds.exact,102.5);assert.equal(ds.total,103);assert.equal(ds.performanceDeduction,1);
assert.equal(hash(await readFile(d.file)),'efb1301d8dd56ffb2a2e3df1568c49560c4e1c334b12293d794b64511a93a293');
assert.equal(hash(await readFile(d.shot)),'5a2990fbe6250390a23b1aaddd280e9a282c8024fa6b244d9eaa8fd6b4d54691');
const o=BLACKHOLE_WORKS[2];assert.equal(o.id,'Opus5.5(xhigh)(Claude Code)V1');assert.equal(o.tier,0);assert.equal(o.recommendation,'△△△△△');assert.equal(o.reason,'当前最优选择');assert.equal(o.environment,'Claude Code');
const os=blackholeScore(o);close(os.base,60);close(os.advanced,40);close(os.free,20);assert.equal(os.adjustment,3);assert.equal(os.total,123);assert.equal(os.performanceDeduction,0);
assert.equal(hash(await readFile(o.file)),'010483fcdffce12064060d4ab9c36bf7d646b43be30212058e06539c8a9539da');
assert.equal(hash(await readFile(o.shot)),'6b4ee139291eeee244de3093a9a8e6a8e32ea419ca3ce1cca9ab2189516b4790');
assert.equal((await readFile(o.file)).length,o.bytes);assert.equal((await readFile(o.file,'utf8')).split('\n').length-1,o.lines);
const m=BLACKHOLE_WORKS[3];assert.equal(m.id,'MiniMaxM3.1Flash(Max)(MiniMax Code)V1');assert.equal(m.tier,2);assert.equal(m.recommendation,'△');assert.equal(m.reason,'');assert.equal(m.environment,'MiniMax Code');assert.equal(m.date,'261110');
assert.deepEqual(m.score.performanceDeduction,{source:'author',points:2,reason:'站点作者指定：性能扣2分。'});
const ms=blackholeScore(m);close(ms.base,18637/450);close(ms.advanced,8851/300);close(ms.refund,959/75);close(ms.required,15067/180);assert.equal(ms.free,11);assert.equal(ms.adjustment,-3);assert.equal(ms.performanceDeduction,2);close(ms.exact,16507/180);assert.equal(ms.total,92);
assert.equal(hash(await readFile(m.file)),'66664f026d03a53a8616b8e022d4b322af460e83d5d90bb15e7c408f48f32698');
assert.equal(hash(await readFile(m.shot)),'6fd2b878136b5e98052168dabf0e50e08192a117ea3c9925af2e1a14cf395c7b');
assert.equal((await readFile(m.file)).length,m.bytes);assert.equal((await readFile(m.file,'utf8')).split('\n').length-1,m.lines);
const sol=BLACKHOLE_WORKS[4];assert.equal(sol.id,'GPT6.1Sol(Max)(Codex)V1');assert.equal(sol.model,'GPT-6.1 Sol (Max)');assert.equal(sol.tier,1);assert.equal(sol.recommendation,'△△△');assert.equal(sol.reason,'按要求完成度非常高，不会多想');assert.equal(sol.environment,'Codex');assert.equal(sol.date,'261111');assert.equal(sol.priceModel,'GPT-6.1 Sol');
const ss=blackholeScore(sol);close(ss.base,60);close(ss.advanced,40);close(ss.required,100);assert.equal(ss.free,4);assert.equal(ss.adjustment,0);assert.equal(ss.performanceDeduction,0);close(ss.exact,104);assert.equal(ss.total,104);
assert.equal(hash(await readFile(sol.file)),'7284ea166772c21d36f3db968af52b4c726edeb11bcd0f8341a320466ec2ccb9');
assert.equal(hash(await readFile(sol.shot)),'705ccb8b166ebb7e9ee5687eaa0e43f49542687f90c8aae54603c06a087ac2dd');
assert.equal((await readFile(sol.file)).length,sol.bytes);assert.equal((await readFile(sol.file,'utf8')).split('\n').length-1,sol.lines);
const hy=BLACKHOLE_WORKS[5];assert.equal(hy.id,'Hy4(High)(WorkBuddy)V1');assert.equal(hy.model,'Hy 4 (high)');assert.equal(hy.tier,2);assert.equal(hy.recommendation,'△△');assert.equal(hy.reason,'细节把控不足');assert.equal(hy.environment,'WorkBuddy');assert.equal(hy.date,'261111');assert.equal(hy.priceModel,'Hy 4');
assert.deepEqual(hy.score.performanceDeduction,{source:'author',points:3,reason:'站点作者指定：性能扣3分。'});
const hs=blackholeScore(hy);close(hs.base,2483/45);close(hs.advanced,79/2);close(hs.required,8521/90);assert.equal(hs.free,11);assert.equal(hs.adjustment,-3);assert.equal(hs.performanceDeduction,3);close(hs.exact,9241/90);assert.equal(hs.total,103);assert.equal(hy.score.base.F3.score,4,'Keep the original measurement; apply the authorized deduction through the policy field');
assert.equal(hash(await readFile(hy.file)),'0298cffb704e56e745f3b49ce4c8ef07a273bd6bb9c3bb7fcf6f8da6a2d68360');
assert.equal(hash(await readFile(hy.shot)),'f8cb7eec72cb3c705fa6d78b5aa132d1298a47f516f972651ffbb5d4a91969b4');
assert.equal((await readFile(hy.file)).length,hy.bytes);assert.equal((await readFile(hy.file,'utf8')).split('\n').length-1,hy.lines);
const sonnet=BLACKHOLE_WORKS[6];assert.equal(sonnet.id,'Sonnet5.5(Max)(Claude Code)V1');assert.equal(sonnet.model,'Claude Sonnet 5.5 (Max)');assert.equal(sonnet.tier,0);assert.equal(sonnet.recommendation,'△△△△△');assert.equal(sonnet.reason,'');assert.equal(sonnet.environment,'Claude Code');assert.equal(sonnet.date,'261112');assert.equal(sonnet.priceModel,'Claude Sonnet 5.5');
const sns=blackholeScore(sonnet);close(sns.base,60);close(sns.advanced,79/2);close(sns.required,199/2);assert.equal(sns.free,20);assert.equal(sns.adjustment,3);assert.equal(sns.performanceDeduction,0);close(sns.exact,245/2);assert.equal(sns.total,123);assert.equal(sonnet.score.performanceDeduction,undefined);
assert.equal(hash(await readFile(sonnet.file)),'01b7192f2fc12df14f05e54d1b783a0fcc0eabb6059e0f6e733993262b5a6b0b');
assert.equal(hash(await readFile(sonnet.shot)),'cec6042dec865ff44da1fce2ee71c7cc0c2f0398e5ecf6b31cb1c31acf252303');
assert.equal((await readFile(sonnet.file)).length,sonnet.bytes);assert.equal((await readFile(sonnet.file,'utf8')).split('\n').length-1,sonnet.lines);
const haiku=BLACKHOLE_WORKS[7];assert.equal(haiku.id,'Hauku5.5(Max)(Claude Code)V3');assert.equal(haiku.model,'Claude Haiku 5.5 (Max)');assert.equal(haiku.tier,1);assert.equal(haiku.recommendation,'△△△△△');assert.equal(haiku.reason,'需要向我确认才做了额外的功能');assert.equal(haiku.environment,'Claude Code');assert.equal(haiku.date,'261112');assert.equal(haiku.priceModel,'Claude Haiku 5.5');
const hks=blackholeScore(haiku);close(hks.base,538/9);close(hks.advanced,39);close(hks.required,889/9);assert.equal(hks.free,20);assert.equal(hks.adjustment,0);assert.equal(hks.performanceDeduction,0);close(hks.exact,1069/9);assert.equal(hks.total,119);assert.equal(haiku.score.performanceDeduction,undefined);
assert.equal(hash(await readFile(haiku.file)),'dddc5d8784cac43b3ef85e305d724340aa401d796ba32d7400a3d24a503d23f3');
assert.equal(hash(await readFile(haiku.shot)),'3cb08f74dfeb6f4013d032ae6fee4d2eb5954681a7a26028ebcaa1610f819dd6');
assert.equal((await readFile(haiku.file)).length,haiku.bytes);assert.equal((await readFile(haiku.file,'utf8')).split('\n').length-1,haiku.lines);
const latest = [
  {id:"GPT6.2Astra(Ultra·Max)(Codex)V1", tier:1, environment:"Codex", reason:"不要跟他讨论问题，因为他不会替你多想",
    reasonEn:"Don't bounce ideas off it. It won't think things through for you", logo:"openai", priceModel:"GPT-6.2 Astra",
    advanced:39.5, free:12, exact:111.5, total:112,
    sourceSHA:"09afafc398e2fc066e4c0e6f5246f0cb43feba0b183819938f8f5085b4dce5da", shotSHA:"d8b22c563fde6f19b07860fc41b1d385a36286cdd24c1f97f98f78a93f900129"},
  {id:"GPT6.2Sol(Ultra·Max)(Codex)V1", tier:1, environment:"Codex", reason:"无话可说、无法形容",
    reasonEn:"I'm speechless. I can't even describe it", logo:"openai", priceModel:"GPT-6.2 Sol",
    advanced:40, free:4, exact:104, total:104,
    sourceSHA:"df5741cba51d7b992da206f71ce3ee823e0e02e33a67e36cd668562d222eed9d", shotSHA:"48caee1153c80408e50e9f4d3fe0f3fe4912741bb006d2545148efa25bfec13c"},
  {id:"KimiK3.1Pro(Max)(ZCode)V1", tier:2, environment:"ZCode", reason:"如此狼狈",
    reasonEn:"What a sorry showing", logo:"kimi", priceModel:"Kimi K3.1 Pro",
    advanced:38.5, free:0, exact:95.5, total:96,
    sourceSHA:"37e050e4ec81102f3812483b2390e003cf42a85b9c29101bc4f30b74c9418ad6", shotSHA:"8757bc6795edcc55739f614593996673b14abb36685964ea1fb99a1d732f55f0"},
];
for (const expected of latest) {
  const work = BLACKHOLE_WORKS.find(w => w.id === expected.id);
  assert.ok(work, expected.id);
  for (const key of ['tier','environment','reason','reasonEn','logo','priceModel']) assert.equal(work[key], expected[key], expected.id + ' ' + key);
  assert.equal(work.date, '261118');
  assert.equal(work.recommendation, '▽▽▽▽▽');
  assert.equal(work.score.reviewedAt, '2026-11-18');
  assert.equal(work.score.performanceDeduction, undefined);
  assert.equal(work.score.fatal, null);
  const score = blackholeScore(work);
  assert.equal(score.base, 60);
  for (const key of ['advanced','free','exact','total']) assert.equal(score[key], expected[key], expected.id + ' ' + key);
  assert.equal(score.adjustment, expected.tier === 2 ? -3 : 0);
  assert.equal(hash(await readFile(work.file)), expected.sourceSHA);
  assert.equal(hash(await readFile(work.shot)), expected.shotSHA);
  assert.equal((await readFile(work.file)).length, work.bytes);
  assert.equal((await readFile(work.file,'utf8')).split('\n').length-1, work.lines);
}
const [astraId,sol62Id,kimiId] = latest.map(e => e.id);
const neon = BLACKHOLE_WORKS.find(work => work.id === 'Gemini4Neon(xhigh)(Antigravity)V1');
assert.ok(neon);
assert.equal(neon.model, 'Gemini 4 Neon (xhigh)');
assert.equal(neon.tier, 1);
assert.equal(neon.environment, 'Antigravity');
assert.equal(neon.recommendation, '△△△');
assert.equal(neon.reason, 'Antigravity太他妈烂了');
assert.equal(neon.reasonEn, 'Antigravity is fucking awful');
assert.equal(neon.date, '261122');
assert.equal(neon.logo, 'gemini');
assert.equal(neon.tech, 'WebGL2');
assert.equal(neon.priceModel, 'Gemini 4 Neon');
assert.equal(neon.score.reviewedAt, '2026-11-22');
assert.equal(neon.score.fatal, null);
const neonScore = blackholeScore(neon);
close(neonScore.base, 1067/18);
close(neonScore.advanced, 39.5);
close(neonScore.exact, 1069/9);
assert.equal(neonScore.free, 20);
assert.equal(neonScore.adjustment, 0);
assert.equal(neonScore.performanceDeduction, 0);
assert.equal(neonScore.total, 119);
assert.equal(hash(await readFile(neon.file)), 'a6f0d85c52203ebbc347f9cad296c371af4fb8f816b9dfa3dbd05ed223ea0705');
assert.equal(hash(await readFile(neon.shot)), 'd255813c5d7decaf22c8f646786132f9e0feac2a4ee945a8329102afb4038419');
assert.equal((await readFile(neon.file)).length, neon.bytes);
assert.equal((await readFile(neon.file, 'utf8')).split('\n').length - 1, neon.lines);
const argon = BLACKHOLE_WORKS.find(work => work.id === 'Gemini4Argon(high)(Antigravity)V1');
assert.ok(argon);
assert.equal(argon.model, 'Gemini 4 Argon (high)');
assert.equal(argon.tier, 2);
assert.equal(argon.environment, neon.environment);
assert.equal(argon.recommendation, '△△');
assert.equal(argon.reason, neon.reason);
assert.equal(argon.reasonEn, neon.reasonEn);
assert.equal(argon.date, '261122');
assert.equal(argon.logo, 'gemini');
assert.equal(argon.tech, 'WebGL2');
assert.equal(argon.priceModel, 'Gemini 4 Argon');
assert.equal(argon.score.reviewedAt, '2026-11-22');
assert.equal(argon.score.fatal, null);
assert.equal(argon.score.base.F3.score, 4);
assert.deepEqual(argon.score.performanceDeduction, {source:'author',points:2,reason:'作者指定性能项扣 2 分（4→2）。'});
const argonScore = blackholeScore(argon);
close(argonScore.base, 5101/90);
close(argonScore.advanced, 309/8);
close(argonScore.exact, 39709/360);
assert.equal(argonScore.free, 18);
assert.equal(argonScore.adjustment, -3);
assert.equal(argonScore.performanceDeduction, 2);
assert.equal(argonScore.total, 110);
assert.equal(hash(await readFile(argon.file)), 'b0b38dc0109de04bb0cc1d14ad577ea4bbe8a9a1f42468269fdc54fb9486306d');
assert.equal(hash(await readFile(argon.shot)), '296580f30a3fdac2766964e90fb5665d41f45bbf2d10e370b637e0a0194a2a72');
assert.equal((await readFile(argon.file)).length, argon.bytes);
assert.equal((await readFile(argon.file, 'utf8')).split('\n').length - 1, argon.lines);
const hydrogen = BLACKHOLE_WORKS.find(work => work.id === 'Gemini4Hydrogen(xhigh)(Antigravity)V1');
assert.ok(hydrogen);
assert.deepEqual(
  [hydrogen.model, hydrogen.date, hydrogen.tier, hydrogen.environment, hydrogen.recommendation, hydrogen.reason, hydrogen.reasonEn],
  ['Gemini 4 Hydrogen (xhigh)', '261122', 2, 'Antigravity', '△△', 'Antigravity太他妈烂了', 'Antigravity is fucking awful'],
);
assert.equal(hydrogen.logo, 'gemini');
assert.equal(hydrogen.tech, 'WebGL2');
assert.equal(hydrogen.priceModel, 'Gemini 4 Hydrogen');
assert.equal(hydrogen.score.reviewedAt, '2026-11-22');
assert.equal(hydrogen.score.fatal, null);
assert.equal(hydrogen.score.base.F3.score, 4);
const hydrogenScore = blackholeScore(hydrogen);
close(hydrogenScore.base, 1067/18);
close(hydrogenScore.advanced, 39);
close(hydrogenScore.exact, 2039/18);
assert.equal(hydrogenScore.free, 18);
assert.equal(hydrogenScore.adjustment, -3);
assert.equal(hydrogenScore.performanceDeduction, 0);
assert.equal(hydrogenScore.total, 113);
assert.equal(hash(await readFile(hydrogen.file)), 'b739d151712e41be6fe6d004210068566717b8da309956877bfc0ed05659d2b0');
assert.equal(hash(await readFile(hydrogen.shot)), '5435421e6e9e1cf860dd6cda2f36884aeaa93995d318de70b47b36f3dd2ad505');
assert.equal((await readFile(hydrogen.file)).length, hydrogen.bytes);
assert.equal((await readFile(hydrogen.file, 'utf8')).split('\n').length - 1, hydrogen.lines);
const carbon = BLACKHOLE_WORKS.find(work => work.id === 'Gemini4Carbon(high)(Antigravity)V1');
assert.ok(carbon);
assert.deepEqual(
  [carbon.model, carbon.date, carbon.tier, carbon.logo, carbon.tech, carbon.priceModel],
  ['Gemini 4 Carbon (high)', '261124', 1, 'gemini', 'WebGL2', 'Gemini 4 Carbon'],
);
for (const field of ['environment', 'reason', 'reasonEn']) assert.equal(carbon[field], neon[field]);
assert.equal(carbon.recommendation, '△△△');
assert.equal(carbon.score.reviewedAt, '2026-11-24');
assert.equal(carbon.score.fatal, null);
const carbonScore = blackholeScore(carbon);
assert.deepEqual(
  [carbonScore.base, carbonScore.advanced, carbonScore.free, carbonScore.adjustment, carbonScore.performanceDeduction, carbonScore.total],
  [59.5, 38.5, 20, 0, 0, 118],
);
assert.equal(hash(await readFile(carbon.file)), '9e6d4bc16f4b639513cd92efa5c6c557e7155fc9fe4261c3c741df17a92db7ed');
assert.equal(hash(await readFile(carbon.shot)), '8beb0fb1caa091bbabcce208a873014ff164b6773b3e569e1f0700b80b14a2ba');
assert.equal((await readFile(carbon.file)).length, carbon.bytes);
assert.equal((await readFile(carbon.file, 'utf8')).split('\n').length - 1, carbon.lines);

assert.deepEqual(blackholeRows(BLACKHOLE_WORKS).map(w=>w.id),[w.id,o.id,sonnet.id,neon.id,haiku.id,carbon.id,hydrogen.id,astraId,argon.id,sol.id,sol62Id,hy.id,d.id,kimiId,m.id]);
assert.deepEqual(blackholeRows(BLACKHOLE_WORKS,'score',1).map(w=>w.id),[w.id,m.id,kimiId,d.id,hy.id,sol.id,sol62Id,argon.id,astraId,hydrogen.id,carbon.id,neon.id,haiku.id,sonnet.id,o.id]);
for(const key of ['score','tier','model','date','recommendation','lines','environment','tech'])for(const direction of [-1,1]){
 const other=structuredClone(d);other.id='sort-fixture';other.model='A';other.date='250101';other.tier=3;
 assert.equal(blackholeRows([other,d,w],key,direction)[0].id,w.id,'Example stays pinned outside every sort');
}

const published=await readdir('.sites-static/blackhole');
assert.deepEqual(published.sort(),BLACKHOLE_WORKS.map(w=>w.file.split('/').pop()).sort(),'Only listed submissions enter the deployment');
assert.deepEqual((await readdir('.sites-static/assets/shots/blackhole')).sort(),BLACKHOLE_WORKS.map(w=>w.shot.split('/').pop()).sort());
for(const work of BLACKHOLE_WORKS)for(const path of [work.file,work.shot])assert.equal(hash(await readFile('.sites-static/'+path)),hash(await readFile(path)));
for(const lang of ['', '.en']){
 const home=await readFile(`index${lang}.html`,'utf8');assert.ok(home.includes(`href="blackhole${lang}.html"`));
 const html=await readFile(`blackhole${lang}.html`,'utf8');assert.ok(html.includes('id="rules"'));assert.ok(html.includes('id="bh-table"'));
 assert.ok(!html.includes('参考实现-评审用')&&!html.includes('评分规则.md'),'Private judging files must not be linked');
}
console.log('Blackhole example pinning, author-only performance policy, scores and private publication boundary passed.');
