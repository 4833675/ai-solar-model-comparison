import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import {BLACKHOLE_WORKS,BLACKHOLE_GROUPS,blackholeScore} from '../assets/blackhole-data.js';

const hash=b=>createHash('sha256').update(b).digest('hex');
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);
assert.equal(BLACKHOLE_WORKS.length,1,'DeepSeek is under review, not yet listed');
const w=BLACKHOLE_WORKS[0];
assert.equal(w.id,'Fable5.2(Max)(Claude Code)');assert.equal(w.reference,true);
assert.equal(w.tier,1);assert.equal(w.recommendation,'△△△△△');assert.equal(w.reason,'附加赛标杆作品');
assert.equal(hash(await readFile(w.file)),'9e7f1a27eee623947c495c67c9bb51d61c685db1e3846fad492b27c1418df905','Renaming must preserve the reference source');
assert.equal(hash(await readFile(w.shot)),'9175f0018a11e3732c97a59a2f55e1e98c2d435b1f66b90b1191e0c56e21f09c','Reuse the saved screenshot');
assert.equal((await readFile(w.file)).length,w.bytes);
assert.equal((await readFile(w.file,'utf8')).split('\n').length-1,w.lines);
const s=blackholeScore(w);close(s.base,2608/45);close(s.advanced,36);close(s.exact,4228/45);assert.equal(s.total,94);
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
close(blackholeScore(variant).exact,4228/45);assert.equal(blackholeScore(variant).free,0);

const published=await readdir('.sites-static/blackhole');
assert.deepEqual(published,[w.file.split('/').pop()],'Only listed submissions enter the deployment');
assert.deepEqual(await readdir('.sites-static/assets/shots/blackhole'),[w.shot.split('/').pop()]);
for(const path of [w.file,w.shot])assert.equal(hash(await readFile('.sites-static/'+path)),hash(await readFile(path)));
for(const lang of ['', '.en']){
 const home=await readFile(`index${lang}.html`,'utf8');assert.ok(home.includes(`href="blackhole${lang}.html"`));
 const html=await readFile(`blackhole${lang}.html`,'utf8');assert.ok(html.includes('id="rules"'));assert.ok(html.includes('id="bh-table"'));
 assert.ok(!html.includes('参考实现-评审用')&&!html.includes('评分规则.md'),'Private judging files must not be linked');
}
console.log('Blackhole reference, scoring policy, bilingual routes and private deployment boundary passed.');
