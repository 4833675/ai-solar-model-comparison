import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {BLACKHOLE_WORKS,BLACKHOLE_GROUPS,blackholeScore,blackholeRows} from '../assets/blackhole-data.js';

const hash=b=>createHash('sha256').update(b).digest('hex');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
assert.equal(BLACKHOLE_WORKS.length,3,'One pinned example and two published submissions');
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
assert.deepEqual(blackholeRows(BLACKHOLE_WORKS).map(w=>w.id),[w.id,o.id,d.id]);
assert.deepEqual(blackholeRows(BLACKHOLE_WORKS,'score',1).map(w=>w.id),[w.id,d.id,o.id]);
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
