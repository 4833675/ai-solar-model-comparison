/* Blackhole challenge records. Kept separate from the solar-system scores. */
export const BLACKHOLE_WORKS = [{
  id: 'Fable5.2(Max)(Claude Code)', model: 'Claude Fable 5.2 (Max)',
  file: 'blackhole/Fable5.2(Max)(Claude Code).html',
  shot: 'assets/shots/blackhole/Fable5.2(Max)(Claude Code).jpg',
  date: '261110', tier: 1, example: true, environment: 'Claude Code', logo: 'anthropic',
  recommendation: '△△△△△', reason: '示例、未按任务文档执行、任务发布者', reasonEn: 'Example; did not follow the task specification; task author',
  tech: 'WebGL2', lines: 378, bytes: 40234, priceModel: 'Claude Fable 5.2',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-10',
    base: { A1:4, A2:4, A3:4, B1:6, B2:6, C1:4, C2:5, C3a:1, C3b:1, C3c:1, C4:2,
      F1:{hdr:1,bloom:.4,aces:1}, F2a:1.5, F2b:1.5,
      F3:{fps:52.6,renderScale:.5,adaptive:true,score:4}, F4:2,
      G1:2, G2:{working:7,score:14/9}, G3:3, G4a:2, G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,
      J1:3,J2:3,J3:2,J4:2,J5:0,R1a:1,R1b:0,R2a:2,R2b:0,R3:1,V1:1,V2:1 },
    free: [], rootCauses: [], fatal: null,
    deductions: [
      {points:2,zh:'轨道实验室没有界面：粒子放置、有效势、轨道读数与牛顿对照均缺失。',en:'No orbit laboratory interface: particle placement, potential plot, live readouts and Newtonian comparison are missing.'},
      {points:2,zh:'未展示 S2 轨道及其相对论进动；计算接口的得分保留。',en:'S2 orbit and relativistic precession are not demonstrated; the numerical interface retains its credit.'},
      {points:.6,zh:'泛光仅做单层模糊，没有多级降采样与升采样。',en:'Bloom uses a single blur level instead of a multilevel downsample/upsample chain.'},
      {points:4/9,zh:'星空、泛光两个开关缺失，九项控件中七项有效。',en:'Starfield and bloom toggles are missing: seven of nine controls work.'}
    ],
    note: '自动项 68.5/68.5，六项接口与画面一致性检查均通过。后台恢复采用 62 秒等效 rAF 暂停测试，实际标签页隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six interface-to-image consistency checks pass. Recovery used an equivalent 62-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'DeepSeekFlash(Max)(ZCode)V1', model: 'DeepSeek Flash (Max)',
  file: 'blackhole/DeepSeekFlash(Max)(ZCode)V1.html',
  shot: 'assets/shots/blackhole/DeepSeekFlash(Max)(ZCode)V1.jpg',
  date: '261110', tier: 1, environment: 'Zcode', logo: 'deepseek',
  recommendation: '△△△', reason: '速度快缓存高；干活慢消耗多',
  reasonEn: 'Fast responses and frequent cache hits; slow work with heavy usage',
  tech: 'WebGL2', lines: 3279, bytes: 139635, priceModel: null,
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-10',
    base: { A1:4,A2:4,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:1,aces:1},F2a:1.5,F2b:1.5,F3:{fps:60.1,renderScale:.51,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:9,score:2},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:2,R1a:1,R1b:1,R2a:2,R2b:.5,R3:1,V1:1,V2:1 },
    free: [{name:'GW150914 啁啾',usable:1,number:1,computed:1,integrated:1}],rootCauses:[],fatal:null,
    performanceDeduction: {source:'author',points:1,reason:'站点作者指定：性能扣1分。'},
    deductions: [
      {points:.5,zh:'S2 进动显示为固定 12.17′ 参考文字，未展示相对论积分结果；真实积分项保留满分。',en:'S2 precession is a fixed 12.17′ reference label, rather than a displayed integration result; the actual integration retains full credit.'},
      {points:1,zh:'站点作者指定：性能扣1分。',en:'The site author explicitly requested a one-point performance deduction.'}
    ],
    note: '自动项 68.5/68.5，六项画面一致性检查通过。GW150914 啁啾扩展四条判据全满足，加4分。性能按站点作者明确要求扣1分。后台恢复采用86秒等效 rAF 暂停，实际隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks pass. The GW150914 chirp meets all four extension criteria (+4). Performance loses one point at the site author’s explicit request. Recovery used an equivalent 86-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'Opus5.5(xhigh)(Claude Code)V1', model: 'Claude Opus 5.5 (xhigh)',
  file: 'blackhole/Opus5.5(xhigh)(Claude Code)V1.html',
  shot: 'assets/shots/blackhole/Opus5.5(xhigh)(Claude Code)V1.jpg',
  date: '261110', tier: 0, environment: 'Claude Code', logo: 'anthropic',
  recommendation: '△△△△△', reason: '当前最优选择', reasonEn: 'The best choice right now',
  tech: 'WebGL2', lines: 3447, bytes: 213547, priceModel: 'Claude Opus 5.5',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-10',
    base: { A1:4,A2:4,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:1,aces:1},F2a:1.5,F2b:1.5,F3:{fps:60.2,renderScale:1,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:9,score:2},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:2,R1a:1,R1b:1,R2a:2,R2b:1,R3:1,V1:1,V2:1 },
    free: [
      {name:'有限距离信标的爱因斯坦环',usable:1,number:1,computed:1,integrated:1},
      {name:'热斑与光变曲线',usable:1,number:1,computed:1,integrated:1},
      {name:'微引力透镜',usable:1,number:1,computed:1,integrated:1},
      {name:'自由下落观察者与光行差',usable:1,number:1,computed:1,integrated:1},
      {name:'GW150914 并合与引力波',usable:1,number:1,computed:1,integrated:1}
    ],rootCauses:[],fatal:null,deductions:[],
    note: '自动项 68.5/68.5，六项画面一致性检查及61项自检通过。五项自由发挥各4分。微透镜在 Rc=50000、u=2 时放大率误差约71%，u=1时约4%；该项仍满足至少两个关键值误差≤3%的加分条件，问题单独保留。后台恢复采用145.7秒等效 rAF 暂停，实际隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks and 61 self-checks pass. Five extensions earn four points each. Microlensing magnification errors are about 71% at Rc=50000, u=2 and 4% at u=1; the extension still meets the criterion of at least two key values within 3%, and these issues remain recorded. Recovery used an equivalent 145.7-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'MiniMaxM3.1Flash(Max)(MiniMax Code)V1', model: 'MiniMax M3.1 Flash (Max)',
  file: 'blackhole/MiniMaxM3.1Flash(Max)(MiniMax Code)V1.html',
  shot: 'assets/shots/blackhole/MiniMaxM3.1Flash(Max)(MiniMax Code)V1.jpg',
  date: '261110', tier: 2, environment: 'MiniMax Code', logo: 'minimax',
  recommendation: '△', reason: '', reasonEn: '',
  tech: 'WebGL2', lines: 3156, bytes: 134967, priceModel: 'MiniMax M3.1 Flash',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-11',
    base: { A1:4,A2:3,A3:3,B1:6,B2:6,C1:.16,C2:.55,C3a:.5,C3b:1,C3c:1,C4:0,
      F1:{hdr:1,bloom:.4,aces:1},F2a:1.5,F2b:1.5,F3:{fps:53.2,renderScale:1229/1920,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:7,score:14/9},G3:.75,G4a:2,G4b:.5 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:0,I1:0,I2:19/75,I3:2,J1:3,J2:3,J3:2,J4:2,J5:.5,R1a:.75,R1b:.5,R2a:1,R2b:.5,R3:1,V1:1,V2:1 },
    free: [
      {name:'EHT有限分辨率观察',usable:1,number:1,computed:1,integrated:1},
      {name:'史瓦西径向自由落体',usable:1,number:1,computed:1,integrated:1},
      {name:'微引力透镜',usable:1,number:0,computed:0,integrated:0},
      {name:'GW150914啁啾',usable:1,number:1,computed:0,integrated:0}
    ],
    rootCauses: [{autoBefore:14239/300,autoAfter:265/4,cap:6}],fatal:null,
    performanceDeduction: {source:'author',points:2,reason:'站点作者指定：性能扣2分。'},
    deductions: [
      {points:6,zh:'主画面纵坐标与接口反向；单点副本验证后，相关诊断及前方盘纹理的连带失分净计6分。',en:'The rendered vertical axis is reversed relative to the interface. A single-change diagnostic copy confirms the shared cause; its cascading loss is capped at six points.'},
      {points:2,zh:'接口请求301条光线只返回64条，ISCO细扫未完成；分批诊断证明物理内缘本身正确，原接口限制的失分保留。',en:'A request for 301 rays returns only 64, leaving the ISCO scan incomplete. Batched diagnostics confirm the physical inner edge; the original interface limitation retains its deduction.'},
      {points:1,zh:'高自转 a=0.998 时，阴影边缘反复出现局部非有限 HDR 像素；默认场景正常，未判致命。',en:'At spin a=0.998, localized non-finite HDR pixels recur near the shadow edge. The default scene remains stable; no fatal classification applies.'},
      {points:.6,zh:'泛光缓冲与程序存在，但各 pass 的实际视口为0×0，只有名义效果；HDR及ACES各保留满分。',en:'Bloom buffers and programs exist, but every bloom pass uses a zero-sized viewport. Bloom receives nominal credit; HDR and ACES retain full credit.'},
      {points:4/9,zh:'九个控件中七项有效：泛光无实际效果，时间速度只能为正，不能倒放。',en:'Seven of nine controls work: bloom has no effect and the time-speed control cannot run in reverse.'},
      {points:.5,zh:'信息卡有量纲字段未全部给出物理单位，当前ISCO周期漏项，S2距离读数也有偏差。',en:'Some dimensional readouts omit physical units; the current ISCO period is incomplete and S2 distance readouts are incorrect.'},
      {points:1.5,zh:'能放粒子并画轨迹；有效势位置标记与当前状态不符，时间及圈数是预计算常数，牛顿对照路径未绘制。',en:'Particle placement and trajectories work. The potential marker and current-state readouts are incorrect or static, and the Newtonian comparison is not drawn.'},
      {points:.25,zh:'四个S2位置时刻中，2030年东向偏移误差超过0.5 mas；其余三个通过。',en:'The eastward S2 offset for 2030 exceeds the 0.5 mas tolerance; the other three epochs pass.'},
      {points:.5,zh:'S2全轨道可显示和缩放，但标准相机下远心点朝向反了；叠加层另有纵坐标反向，单改主渲染不能修复。',en:'The full S2 orbit is visible and zoomable, but its apocenter points the wrong way. A separate overlay-axis error remains after fixing the main rendering line.'},
      {points:1,zh:'实际S2轨道积分每圈进动11.1928′，参考12.167′，落在半分容差内。',en:'The integrated S2 precession is 11.1928 arcminutes per orbit versus 12.167, earning half credit.'},
      {points:.5,zh:'主面板12.17′为固定参考文字，自检另算参考值，未展示实际轨道积分的进动结果。',en:'The main panel shows a fixed 12.17 arcminute reference; self-checks use a separate reference calculation rather than displaying the actual orbital integration result.'},
      {points:2,zh:'站点作者指定：性能扣2分。',en:'The site author explicitly requested a two-point performance deduction.'}
    ],
    note: '纵坐标根因的联动失分为18.79分，按6分封顶返还12.79分；范围含H3c人工前后量测，接口64条限制不借此次返还恢复。附加项：EHT4、落体4、微透镜1、引力波2；EHT角分辨率响应未标定，落体潮汐与奇点后计时另有错误。默认场景运行超过12分钟无非有限数或GL错误；后台采用276.1秒等效rAF暂停，实际标签隐藏未验证。',
    noteEn: 'The vertical-axis cause produces 18.79 cascading points of loss, capped at six with a 12.79 refund. This includes manual H3c measurements; the 64-ray limit is retained separately. Extensions: EHT 4, radial fall 4, microlensing 1, chirp 2. EHT angular response is uncalibrated, and fall tidal/post-singularity readouts have errors. The default scene ran for over 12 minutes without non-finite pixels or GL errors. Recovery used an equivalent 276.1-second rAF suspension; literal tab hiding was not verified.'
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
  const p=s.performanceDeduction;
  const performanceDeduction=p?.source==='author'&&Number.isFinite(p.points)?Math.max(0,Math.min(4,p.points)):0;
  const effectiveBase={...s.base,F3:{...s.base.F3,score:4-performanceDeduction}};
  const value=v=>typeof v==='number'?v:('score' in v?v.score:Object.values(v).reduce((a,b)=>a+b,0));
  const sum=o=>Object.values(o).reduce((a,v)=>a+value(v),0);
  const base=sum(effectiveBase),advanced=sum(s.advanced);
  const refund=(s.rootCauses||[]).reduce((a,r)=>a+Math.max(0,r.autoAfter-r.autoBefore-r.cap),0);
  const required=Math.min(100,base+advanced+refund);
  const free=Math.min(20,(s.free||[]).map(f=>f.usable?(1+f.number+f.computed+f.integrated):0).sort((a,b)=>b-a).slice(0,5).reduce((a,b)=>a+b,0));
  const tier=s.fatal?4:work.tier;
  const adjustment=tier===0?3:tier===2?-3:tier===3?-6:0;
  const exact=required+free+adjustment;
  const groups=Object.fromEntries(BLACKHOLE_GROUPS.map(g=>[g.key,Object.entries(g.layer==='base'?effectiveBase:s.advanced).filter(([k])=>k.startsWith(g.key)).reduce((a,[,v])=>a+value(v),0)]));
  return {base,advanced,refund,required,free,tier,adjustment,performanceDeduction,exact,total:Math.round(exact),groups};
}

export function blackholeRows(works, key='score', direction=-1) {
  const examples=works.filter(w=>w.example),ranked=works.filter(w=>!w.example);
  const get=w=>key==='score'?blackholeScore(w).exact:key==='tier'?blackholeScore(w).tier:
    key==='recommendation'?Array.from(w.recommendation||'').reduce((n,c)=>n+(c==='△'?1:c==='▽'?-1:0),0):w[key]??'';
  ranked.sort((a,b)=>{const x=get(a),y=get(b),v=typeof x==='number'&&typeof y==='number'?x-y:String(x).localeCompare(String(y));return v*direction||a.id.localeCompare(b.id);});
  return [...examples,...ranked];
}
