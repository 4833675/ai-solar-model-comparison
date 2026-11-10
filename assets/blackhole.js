import {BLACKHOLE_WORKS,BLACKHOLE_GROUPS,blackholeScore,blackholeRows} from './blackhole-data.js';

const en=document.documentElement.lang.startsWith('en');
const tr=(zh,english)=>en?english:zh;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const n=x=>Number(x.toFixed(2)).toString();
const page=name=>name+(en?'.en':'')+'.html';
const viewer=document.querySelector('[data-bh-viewer]');

if(viewer){
  const w=BLACKHOLE_WORKS.find(w=>w.id===new URLSearchParams(location.search).get('w'));
  document.querySelectorAll('.bh-language a').forEach(a=>{a.href+=location.search;});
  const stage=document.getElementById('stage');
  if(!w){
    stage.textContent=tr('找不到这个作品。请返回附加赛列表。','Work not found. Return to the challenge list.');
    document.querySelectorAll('[data-requires-work]').forEach(el=>el.hidden=true);
  }else{
    document.title=w.model+' · '+tr('黑洞附加赛','Blackhole challenge');
    document.getElementById('bh-title').textContent=w.model;
    document.getElementById('bh-raw').href=w.file;
    const download=document.getElementById('bh-download');download.href=w.file;download.download=w.file.split('/').pop();
    let frame;
    function load(){
      if(frame){frame.src='about:blank';frame.remove();}
      const loading=document.getElementById('bh-loading');loading.hidden=false;
      frame=document.createElement('iframe');frame.title=w.model+' · '+tr('克尔黑洞与吸积盘实时模型','Real-time Kerr black hole and accretion disk');
      frame.onload=()=>{loading.hidden=true;};frame.src=w.file;stage.append(frame);
    }
    document.getElementById('bh-reload').addEventListener('click',load);
    addEventListener('pagehide',()=>{if(frame){frame.src='about:blank';frame.remove();}});
    load();
  }
}else{
  const tbody=document.querySelector('#bh-table tbody');
  let sortKey='score',sortDirection=-1;
  function render(){
  const rows=blackholeRows(BLACKHOLE_WORKS,sortKey,sortDirection);
  tbody.innerHTML=rows.map(w=>{
    const s=blackholeScore(w),p=window.MODEL_PRICES?.[w.priceModel];
    const price=p?`<a class="bh-price" href="${esc(p.source)}" target="_blank" rel="noopener" title="${tr('标准单价，USD / 1M；读 / 写 / 缓存读；核对日','Standard USD / 1M: input / output / cache read; checked')} ${esc(p.date)}">${p.input} / ${p.output} / ${p.cache}</a>`:'—';
    const rec=Array.from(w.recommendation).map(c=>`<span class="${c==='▽'?'bh-rec-down':'bh-rec-up'}">${esc(c)}</span>`).join('');
    return `<tr style="--work-tier:var(--tier${s.tier})" data-work-id="${esc(w.id)}"${w.example?' class="bh-example"':''}><td class="bh-tier-text"><a class="bh-model" href="${page('blackhole-view')}?w=${encodeURIComponent(w.id)}"><img src="assets/logos/${esc(w.logo)}.png" width="23" height="23" alt=""><span>${esc(w.model)}</span><small aria-hidden="true">↗</small></a></td><td class="bh-tier-text num">${w.date}</td><td class="bh-tier-text">T${s.tier}</td><td><button type="button" class="bh-score${w.example?' is-example':s.total>=96?' is-high':''}" data-score-id="${esc(w.id)}" aria-controls="bh-score-detail" aria-haspopup="dialog" aria-expanded="false">${w.example?tr('示例','Example'):s.total}</button></td><td><span class="bh-recommendation" aria-label="${esc(w.recommendation)}">${rec}</span></td><td class="bh-tier-text">${esc(en?w.reasonEn:w.reason)}</td><td><span class="bh-env">${esc(en?(w.environmentEn||w.environment):w.environment)}</span></td><td class="bh-tier-text">${w.tech}</td><td class="bh-tier-text num">${w.lines.toLocaleString(en?'en-US':'zh-CN')} <small>(${n(w.bytes/1024)} KB)</small></td><td class="bh-tier-text">${price}</td></tr>`;
  }).join('');
  document.querySelectorAll('#bh-table th[data-k]').forEach(th=>th.setAttribute('aria-sort',th.dataset.k===sortKey?(sortDirection===1?'ascending':'descending'):'none'));
  }
  render();
  document.querySelectorAll('#bh-table th[data-k]').forEach(th=>{
    const button=document.createElement('button');button.type='button';button.textContent=th.textContent;th.textContent='';th.append(button);
    button.addEventListener('click',()=>{if(sortKey===th.dataset.k)sortDirection*=-1;else{sortKey=th.dataset.k;sortDirection=sortKey==='score'||sortKey==='recommendation'?-1:1;}if(pop.matches(':popover-open'))pop.hidePopover();render();});
  });
  const pop=document.getElementById('bh-score-detail');let active=null,pinned=false;
  function place(){
    if(!active||!pop.matches(':popover-open'))return;
    const r=active.getBoundingClientRect(),above=Math.max(0,r.top-22),below=Math.max(0,innerHeight-r.bottom-22),useAbove=above>=below;
    pop.style.maxHeight=Math.max(40,useAbove?above:below)+'px';
    const w=pop.offsetWidth,h=pop.offsetHeight;
    pop.style.left=Math.max(12,Math.min(innerWidth-w-12,r.left+r.width/2-w/2))+'px';
    pop.style.top=Math.max(12,Math.min(innerHeight-h-12,useAbove?r.top-h-10:r.bottom+10))+'px';
  }
  function show(button){
    const w=BLACKHOLE_WORKS.find(w=>w.id===button.dataset.scoreId);if(!w)return;
    if(active&&active!==button)active.setAttribute('aria-expanded','false');active=button;const s=blackholeScore(w);
    pop.innerHTML=`<button class="bh-dismiss" type="button" aria-label="${tr('关闭评分明细','Close score details')}">×</button><h2>${esc(w.model)}</h2><p>${tr('证据评分 · ','Evidence score · ')}${w.score.reviewedAt}</p><div class="bh-total">${s.total} <small>${tr('精确分','Exact')} ${n(s.exact)} · ${tr('理论最高','Theoretical maximum')} 123</small></div><div class="bh-breakdown">${BLACKHOLE_GROUPS.map(g=>`<div><span>${g.key} · ${esc(en?g.en:g.zh)}</span><b>${n(s.groups[g.key])}/${g.max}</b></div>`).join('')}<div><span>${tr('自由发挥','Original extensions')}</span><b>${n(s.free)}/20</b></div><div><span>${tr('梯队修正','Tier adjustment')} T${s.tier}</span><b>${s.adjustment>0?'+':''}${s.adjustment}</b></div></div><p style="margin-top:12px">${tr('基础','Basic')} ${n(s.base)}/60 · ${tr('进阶','Advanced')} ${n(s.advanced)}/40 · ${tr('同因返还','Root-cause refund')} ${n(s.refund)}</p><p style="margin-top:9px">${tr('性能项','Performance')} ${4-s.performanceDeduction}/4 · ${tr('性能仅记录，只有作者明确要求才扣分。','Measurements are recorded; performance deductions require an explicit author request.')}</p><h3>${tr('扣分依据','Deductions')}</h3><ul>${w.score.deductions.map(d=>`<li>−${n(d.points)} · ${esc(en?d.en:d.zh)}</li>`).join('')}</ul><p>${esc(en?w.score.noteEn:w.score.note)}</p>${w.example?`<p style="margin-top:10px">${tr('示例置顶，不参与排序；未按任务文档完整执行。','This example stays pinned outside sorting; it did not follow the full task specification.')}</p>`:''}`;
    if(!pop.matches(':popover-open'))pop.showPopover();active.setAttribute('aria-expanded','true');place();
    pop.querySelector('.bh-dismiss').onclick=()=>{pinned=false;pop.hidePopover();};
  }
  tbody.addEventListener('pointerover',e=>{const b=e.target.closest('[data-score-id]');if(b&&b!==active&&!pinned)show(b);});
  tbody.addEventListener('focusin',e=>{const b=e.target.closest('[data-score-id]');if(b&&!pinned)show(b);});
  tbody.addEventListener('click',e=>{const b=e.target.closest('[data-score-id]');if(!b)return;if(pinned&&active===b){pinned=false;pop.hidePopover();}else{show(b);pinned=true;}});
  tbody.addEventListener('pointerout',e=>{const b=e.target.closest('[data-score-id]');if(b&&!b.contains(e.relatedTarget))setTimeout(()=>{if(!pinned&&!pop.matches(':hover')&&document.activeElement!==b&&pop.matches(':popover-open'))pop.hidePopover();},150);});
  pop.addEventListener('pointerleave',()=>{if(!pinned&&document.activeElement!==active&&pop.matches(':popover-open'))pop.hidePopover();});
  pop.addEventListener('toggle',e=>{if(e.newState==='closed'){pinned=false;active?.setAttribute('aria-expanded','false');active=null;}});
  addEventListener('resize',place);addEventListener('scroll',place,{passive:true});
}
