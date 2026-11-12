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
}, {
  id: 'GPT6.1Sol(Max)(Codex)V1', model: 'GPT-6.1 Sol (Max)',
  file: 'blackhole/GPT6.1Sol(Max)(Codex)V1.html',
  shot: 'assets/shots/blackhole/GPT6.1Sol(Max)(Codex)V1.jpg',
  date: '261111', tier: 1, environment: 'Codex', logo: 'openai',
  recommendation: '△△△', reason: '按要求完成度非常高，不会多想',
  reasonEn: 'Follows the requirements very thoroughly; does not overthink',
  tech: 'WebGL2', lines: 211, bytes: 93445, priceModel: 'GPT-6.1 Sol',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-11',
    base: { A1:4,A2:4,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:1,aces:1},F2a:1.5,F2b:1.5,F3:{fps:59.6,renderScale:1325/1920,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:9,score:2},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:2,R1a:1,R1b:1,R2a:2,R2b:1,R3:1,V1:1,V2:1 },
    free: [{name:'热斑与GPU采样光变',usable:1,number:1,computed:1,integrated:1}],
    rootCauses:[],fatal:null,deductions:[],
    note: '自动项68.5/68.5、六项画面一致性及51项自检通过。规定动作100分；热斑使用主场景GPU光线交点采样，半径10/12 M的坐标及固有时周期均正确，加4分。默认场景有效运行650秒，25次HDR采样均为有限数、GL无错误。后台采用65秒等效rAF暂停，实际标签隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks and 51 self-checks pass. Required work earns 100 points. The hotspot samples the main GPU ray intersections, with correct coordinate and proper periods at radii 10 and 12 M (+4). The default scene ran for 650 active seconds; all 25 HDR samples were finite with no GL errors. Recovery used an equivalent 65-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'Hy4(High)(WorkBuddy)V1', model: 'Hy 4 (high)',
  file: 'blackhole/Hy4(High)(WorkBuddy)V1.html',
  shot: 'assets/shots/blackhole/Hy4(High)(WorkBuddy)V1.jpg',
  date: '261111', tier: 2, environment: 'WorkBuddy', logo: 'hy',
  recommendation: '△△', reason: '细节把控不足', reasonEn: 'Insufficient attention to detail',
  tech: 'WebGL2', lines: 2156, bytes: 105233, priceModel: 'Hy 4',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-11',
    base: { A1:4,A2:3,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:.4,aces:1},F2a:1.5,F2b:1.5,F3:{fps:10,renderScale:1115/1920,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:8,score:16/9},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:1.5,R1a:1,R1b:1,R2a:2,R2b:1,R3:1,V1:1,V2:1 },
    free: [
      {name:'盘上热斑与光变',usable:1,number:1,computed:1,integrated:1},
      {name:'EHT角尺度观察与后处理',usable:1,number:1,computed:1,integrated:1},
      {name:'GW150914啁啾与音频',usable:1,number:1,computed:0,integrated:1}
    ],rootCauses:[],fatal:null,
    performanceDeduction: {source:'author',points:3,reason:'站点作者指定：性能扣3分。'},
    deductions: [
      {points:1,zh:'visibilitychange回调写入未定义的lastFrame变量，分派同名事件实测触发ReferenceError；主渲染不受阻，未判致命。',en:'The visibilitychange handler writes to an undefined lastFrame variable. Dispatching that event reproduces a ReferenceError; the main rendering continues, so no fatal classification applies.'},
      {points:.6,zh:'泛光只有单一分辨率的双向高斯模糊，没有多级降采样与升采样，按部分有效给分。',en:'Bloom uses a single-resolution separable Gaussian blur rather than a multilevel downsample/upsample chain, earning partial credit.'},
      {points:2/9,zh:'倒放时盘的坐标时回退，但测试粒子仅在正时间差下推进，粒子半径和时钟冻结；九个控件中八项有效。',en:'During reverse playback, disk coordinate time decreases but test particles advance only for positive time steps, leaving their radii and clocks frozen. Eight of nine controls work.'},
      {points:.5,zh:'累计进动角实际显示当前轨道相位phi模360°，没有测量每个径向周期的超额转角。',en:'The cumulative-precession readout is the current orbital phase modulo 360 degrees, rather than the excess angle measured across radial periods.'},
      {points:3,zh:'站点作者指定：性能扣3分。',en:'The site author explicitly requested a three-point performance deduction.'}
    ],
    note: '自动项68.5/68.5、六项画面一致性及105项自检通过。附加项热斑4、EHT4、啁啾3；EHT两组角径正确并与主管线联动，但波束sigma多乘1e-6，20微角秒响应不正确；模态内图表遮挡部分控件，键盘可操作。啁啾数值及共享单位有效，缺少可调参数。默认场景有效运行631秒，25次HDR采样均为有限数、GL无错误；65秒等效rAF暂停，实际标签隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks and 105 self-checks pass. Extensions: hotspot 4, EHT 4, chirp 3. EHT has correct angular diameters for two presets and shares the main pipeline, but its beam sigma has an extra factor of 1e-6, so the 20-microarcsecond response is incorrect. Modal charts overlap some controls, which remain keyboard-operable. The chirp has correct values and shared units but no adjustable parameters. The default scene ran for 631 active seconds; all 25 HDR samples were finite with no GL errors. Recovery used an equivalent 65-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'Sonnet5.5(Max)(Claude Code)V1', model: 'Claude Sonnet 5.5 (Max)',
  file: 'blackhole/Sonnet5.5(Max)(Claude Code)V1.html',
  shot: 'assets/shots/blackhole/Sonnet5.5(Max)(Claude Code)V1.jpg',
  date: '261112', tier: 0, environment: 'Claude Code', logo: 'anthropic',
  recommendation: '△△△△△', reason: '', reasonEn: '',
  tech: 'WebGL2', lines: 4135, bytes: 225455, priceModel: 'Claude Sonnet 5.5',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-12',
    base: { A1:4,A2:4,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:1,aces:1},F2a:1.5,F2b:1.5,F3:{fps:18.4,renderScale:.5,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:9,score:2},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:1.5,R1a:1,R1b:1,R2a:2,R2b:1,R3:1,V1:1,V2:1 },
    free: [
      {name:'第一人称径向下落',usable:1,number:1,computed:1,integrated:1},
      {name:'引力波旋近与铃宕',usable:1,number:1,computed:1,integrated:1},
      {name:'热斑与GPU光变测量',usable:1,number:1,computed:1,integrated:1},
      {name:'光线Jacobian微引力透镜',usable:1,number:1,computed:1,integrated:1},
      {name:'潮汐瓦解碎片流',usable:1,number:1,computed:1,integrated:1}
    ],rootCauses:[],fatal:null,
    deductions: [
      {points:.5,zh:'牛顿对照没有沿用相同初始径向运动：p=10、e=0.5、r₀=10时，向外运动的相对论粒子被换成牛顿径向速度0，且不再满足其声明的能量。',en:'The Newtonian comparison changes the initial radial motion: at p=10, e=0.5, r₀=10, an outward-moving relativistic particle is replaced by zero Newtonian radial velocity, which also violates its stated energy.'}
    ],
    note: '自动项68.5/68.5、六项画面一致性及146项自检通过。五项发挥各4分；附加数字独立抽核35/35通过。倒放能回退粒子状态，但进动计数保留向前经过近心点的历史。默认场景有效运行607秒，24次HDR采样均有限、GL无错误；65秒等效rAF暂停，实际标签隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks and 146 self-checks pass. Five extensions earn four points each; all 35 independently sampled extension values pass. Reverse playback rewinds particle state, while precession counters retain the history of forward pericenter passages. The default scene ran for 607 active seconds; all 24 HDR samples were finite with no GL errors. Recovery used an equivalent 65-second rAF suspension; literal tab hiding was not verified.'
  }
}, {
  id: 'Hauku5.5(Max)(Claude Code)V3', model: 'Claude Haiku 5.5 (Max)',
  file: 'blackhole/Hauku5.5(Max)(Claude Code)V3.html',
  shot: 'assets/shots/blackhole/Hauku5.5(Max)(Claude Code)V3.jpg',
  date: '261112', tier: 1, environment: 'Claude Code', logo: 'anthropic',
  recommendation: '△△△△△', reason: '需要向我确认才做了额外的功能',
  reasonEn: 'Only implemented the extra features after asking me for confirmation',
  tech: 'WebGL2', lines: 3274, bytes: 155659, priceModel: 'Claude Haiku 5.5',
  score: {
    task: 'blackhole-v1', reviewedAt: '2026-11-12',
    base: { A1:4,A2:4,A3:4,B1:6,B2:6,C1:4,C2:5,C3a:1,C3b:1,C3c:1,C4:2,
      F1:{hdr:1,bloom:1,aces:1},F2a:1.5,F2b:1.5,F3:{fps:24,renderScale:.5,adaptive:true,score:4},F4:2,
      G1:2,G2:{working:8,score:16/9},G3:3,G4a:2,G4b:1 },
    advanced: { H1:6,H2:3,H3a:1,H3b:1,H3c:1,I1:2,I2:4,I3:2,J1:3,J2:3,J3:2,J4:2,J5:1,R1a:1,R1b:1,R2a:2,R2b:1,R3:1,V1:1,V2:1 },
    free: [
      {name:'径向下落与潮汐',usable:1,number:1,computed:1,integrated:1},
      {name:'微引力透镜',usable:1,number:1,computed:1,integrated:1},
      {name:'恒星潮汐瓦解',usable:1,number:1,computed:1,integrated:1},
      {name:'盘面热斑与光变曲线',usable:1,number:1,computed:1,integrated:1},
      {name:'银心S星团与相对论红移',usable:1,number:1,computed:1,integrated:1}
    ],rootCauses:[],fatal:null,
    deductions: [
      {points:2/9,zh:'倒放时盘的坐标时回退，但测试粒子只在正速度下推进，半径和时钟冻结；九个控件中八项有效。',en:'During reverse playback, disk coordinate time decreases but test particles advance only at positive speed, leaving their radii and clocks frozen. Eight of nine controls work.'},
      {points:.5,zh:'有效势曲线读取缺失的粒子参数，所有曲线点变成NaN；能量线和位置标记仍在，势曲线没有画出。',en:'The effective-potential plot reads a missing particle parameter, making every curve point NaN. The energy line and position marker remain, but the potential curve is absent.'},
      {points:.5,zh:'牛顿对照初始位置不匹配：p=10、e=0.5时，粒子从r₀=20出发，对照却画成半径14.8148M的圆。',en:'The Newtonian comparison does not share the initial position: at p=10, e=0.5, the particle starts at r₀=20, while the comparison is a circle of radius 14.8148 M.'}
    ],
    note: '自动项68.5/68.5、六项画面一致性及27项自检通过；接口明示JS后端，一致性通过，不因后端单独扣分。五项发挥各4分。下落r₀=20的辅助数值为空；潮汐面板km/M换算错误，10⁶太阳质量组回落斜率偏差4.70%，但两组关键潮汐半径正确，仍满足加分条件。默认场景有效运行965秒，36次HDR采样均有限、GL无错误；65秒等效rAF暂停，实际标签隐藏未验证。',
    noteEn: 'Automated checks: 68.5/68.5; all six image-consistency checks and 27 self-checks pass. The disclosed JS backend passes consistency checks and incurs no backend-only deduction. Five extensions earn four points each. The auxiliary fall result at r₀=20 is missing; tidal km/M conversions are wrong, and the fallback slope at 10⁶ solar masses differs by 4.70%. Two correct tidal-radius parameter groups still meet the extension criteria. The default scene ran for 965 active seconds; all 36 HDR samples were finite with no GL errors. Recovery used an equivalent 65-second rAF suspension; literal tab hiding was not verified.'
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
