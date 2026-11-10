/* Blackhole challenge records. Kept separate from the solar-system scores. */
export const BLACKHOLE_WORKS = [{
  id: 'Fable5.2(Max)(Claude Code)', model: 'Claude Fable 5.2 (Max)',
  file: 'blackhole/Fable5.2(Max)(Claude Code).html',
  shot: 'assets/shots/blackhole/Fable5.2(Max)(Claude Code).jpg',
  date: '261110', tier: 1, reference: true, environment: 'Claude Code',
  recommendation: '△△△△△', reason: '附加赛标杆作品', reasonEn: 'Benchmark for the blackhole challenge',
  tech: 'WebGL2', lines: 378, bytes: 40234, priceModel: 'Claude Fable 5.2',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-10',
    base: { A1:4, A2:4, A3:4, B1:6, B2:6, C1:4, C2:5, C3a:1, C3b:1, C3c:1, C4:2,
      F1:{hdr:1,bloom:.4,aces:1}, F2a:1.5, F2b:1.5,
      F3:{fps:52.6,renderScale:.5,adaptive:true,score:3}, F4:2,
      G1:2, G2:{working:7,score:14/9}, G3:3, G4a:2, G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,
      J1:3,J2:3,J3:2,J4:2,J5:0,R1a:1,R1b:0,R2a:2,R2b:0,R3:1,V1:1,V2:1 },
    free: [], rootCauses: [], fatal: null,
    deductions: [
      {points:2,zh:'轨道实验室没有界面：粒子放置、有效势、轨道读数与牛顿对照均缺失。',en:'No orbit laboratory interface: particle placement, potential plot, live readouts and Newtonian comparison are missing.'},
      {points:2,zh:'未展示 S2 轨道及其相对论进动；计算接口的得分保留。',en:'S2 orbit and relativistic precession are not demonstrated; the numerical interface retains its credit.'},
      {points:.6,zh:'泛光仅做单层模糊，没有多级降采样与升采样。',en:'Bloom uses a single blur level instead of a multilevel downsample/upsample chain.'},
      {points:1,zh:'默认画面实测 52.6 fps；帧率档 2 分，自适应降载 1 分。',en:'Default scene: 52.6 fps. Frame-rate band earns 2 points; adaptive resolution earns 1.'},
      {points:4/9,zh:'星空、泛光两个开关缺失，九项控件中七项有效。',en:'Starfield and bloom toggles are missing: seven of nine controls work.'}
    ],
    note: '自动项 68.5/68.5，六项接口与画面一致性检查均通过。后台恢复采用 62 秒等效 rAF 暂停测试，实际标签页隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six interface-to-image consistency checks pass. Recovery used an equivalent 62-second rAF suspension; literal tab hiding was not verified.'
  }
}];

export const BLACKHOLE_GROUPS = [
  {key:'A',zh:'交付与运行',en:'Delivery & stability',max:12,layer:'base'},
  {key:'B',zh:'史瓦西光线',en:'Schwarzschild rays',max:12,layer:'base'},
  {key:'C',zh:'吸积盘与红移',en:'Accretion disk & redshift',max:14,layer:'base'},
  {key:'F',zh:'渲染与性能',en:'Rendering & performance',max:12,layer:'base'},
  {key:'G',zh:'交互与界面',en:'Interaction & interface',max:10,layer:'base'},
  {key:'H',zh:'克尔光线',en:'Kerr rays',max:12,layer:'advanced'},
  {key:'I',zh:'克尔吸积盘',en:'Kerr accretion disk',max:8,layer:'advanced'},
  {key:'J',zh:'轨道实验室',en:'Orbit laboratory',max:12,layer:'advanced'},
  {key:'R',zh:'真实尺度与 S2',en:'Physical scale & S2',max:6,layer:'advanced'},
  {key:'V',zh:'近似说明与自检',en:'Disclosures & self-checks',max:2,layer:'advanced'}
];

export function blackholeScore(work) {
  const s=work.score;
  const value=v=>typeof v==='number'?v:('score' in v?v.score:Object.values(v).reduce((a,b)=>a+b,0));
  const sum=o=>Object.values(o).reduce((a,v)=>a+value(v),0);
  const base=sum(s.base),advanced=sum(s.advanced);
  const refund=(s.rootCauses||[]).reduce((a,r)=>a+Math.max(0,r.autoAfter-r.autoBefore-r.cap),0);
  const required=Math.min(100,base+advanced+refund);
  const free=Math.min(20,(s.free||[]).map(f=>f.usable?(1+f.number+f.computed+f.integrated):0).sort((a,b)=>b-a).slice(0,5).reduce((a,b)=>a+b,0));
  const tier=s.fatal?4:work.tier;
  const adjustment=tier===0?3:tier===2?-3:tier===3?-6:0;
  const exact=required+free+adjustment;
  const groups=Object.fromEntries(BLACKHOLE_GROUPS.map(g=>[g.key,Object.entries(s[g.layer]).filter(([k])=>k.startsWith(g.key)).reduce((a,[,v])=>a+value(v),0)]));
  return {base,advanced,refund,required,free,tier,adjustment,exact,total:Math.round(exact),groups};
}
