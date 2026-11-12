import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {BLACKHOLE_WORKS,BLACKHOLE_GROUPS,blackholeScore,blackholeRows} from '../assets/blackhole-data.js';

const hash=b=>createHash('sha256').update(b).digest('hex');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
assert.equal(BLACKHOLE_WORKS.length,8,'One pinned example and seven published submissions');
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
assert.deepEqual(blackholeRows(BLACKHOLE_WORKS).map(w=>w.id),[w.id,o.id,sonnet.id,haiku.id,sol.id,hy.id,d.id,m.id]);
assert.deepEqual(blackholeRows(BLACKHOLE_WORKS,'score',1).map(w=>w.id),[w.id,m.id,d.id,hy.id,sol.id,haiku.id,sonnet.id,o.id]);
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
