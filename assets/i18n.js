/* Shared language helpers and copy for the comparison site. */
(function () {
  'use strict';

  const lang = /^en(?:-|$)/i.test(document.documentElement.lang || '') ? 'en' : 'zh';
  const en = lang === 'en';

  const UI = {
    zh: {
      'verdict.noWebgl.title': '无法运行',
      'verdict.noWebgl.body': '此浏览器不支持 WebGL 2，本站收录的绝大多数作品都无法显示。请改用较新的 Chrome / Edge / Firefox / Safari。',
      'verdict.mobile.title': '移动设备 · 建议改用桌面',
      'verdict.mobile.body': '这些作品按桌面独显设计，移动端多数会掉帧、发热甚至崩溃。轻量级作品可以试试。',
      'verdict.noFloat.title': '缺少浮点缓冲扩展',
      'verdict.noFloat.body': '缺少 EXT_color_buffer_float，依赖 HDR 渲染的作品可能白屏或报错（本站已逐一标注）。',
      'verdict.noBenchmark.title': '无法完成性能实测',
      'verdict.noBenchmark.body': '能力探测通过，但基准测试未能运行。请以实际体验为准。',
      'verdict.smooth.title': '可以流畅运行全部作品',
      'verdict.smooth.body': '实测 GPU 着色吞吐充裕，重量级作品也没问题。',
      'verdict.heavy.title': '可以运行，重量级作品可能掉帧',
      'verdict.heavy.body': '轻中量级作品流畅；标记为「重」的作品建议逐个打开，不要同时开多个。',
      'verdict.strained.title': '性能吃紧',
      'verdict.strained.body': '建议只看标记为「轻」的作品，重量级作品会明显掉帧。',
      'verdict.insufficient.title': '性能不足',
      'verdict.insufficient.body': '实测 GPU 负载能力偏低，多数作品会非常卡。建议换一台设备，或只浏览截图。',
      'risk.noWebgl2': '不支持 WebGL2',
      'risk.noFloat': '缺 float 扩展',
      'risk.mayDrop': '可能掉帧',
      'risk.verySlow': '预计很卡',
      'probe.testing': '正在检测…',
      'probe.benchmarking': '正在运行 GPU 基准测试',
      'probe.supported': '支持',
      'probe.unsupported': '不支持',
      'probe.undisclosed': '未公开',
      'probe.incomplete': '未完成',
      'probe.webgl2': 'WebGL 2',
      'probe.floatBuffer': '浮点帧缓冲 <br>EXT_color_buffer_float',
      'probe.gpu': 'GPU',
      'probe.maxMsaa': '最大 MSAA',
      'probe.maxTexture': '最大纹理',
      'probe.fragmentPrecision': '片元高精度',
      'probe.benchmarkPass': '基准 · 单次 1024² 着色',
      'probe.estimatedFrame': '估算 1080p 整帧',
      'probe.dpr': '设备像素比',
      'probe.hardware': '屏幕 / 核心 / 内存',
      'probe.hardwareValue': '{screen} · {cores}核 · {memory}',
      'probe.deviceType': '设备类型',
      'probe.mobile': '移动端',
      'probe.desktop': '桌面',
      'tech.nativeWebgl2': '原生 WebGL2',
      'unit.lines': '{count} 行',
      'unit.items': '{count} 项',
      'unit.works': '{count} 件',
      'weight.heavy': '重量级',
      'weight.medium': '中等',
      'weight.light': '轻量',
      'network.title': '运行时会从 {hosts} 拉取资源，断网或内网环境下无法显示',
      'network.required': '需联网',
      'render.issue': '渲染异常',
      'work.incomplete': '未完成',
      'score.breakdownHead': '证据评分明细',
      'score.cappedMeta': '证据基础分 {base} · 扣分与修正后 {adjusted} · 致命等级封顶 {cap}',
      'score.adjustedMeta': '证据基础分 {base} · 扣分与修正后 {adjusted}',
      'score.baseMeta': '证据基础分 {base} · 无 Canvas2D 或主观梯队扣减',
      'score.features': '功能有效性',
      'score.orbit': '轨道真实度',
      'score.moons': '卫星系统',
      'score.offline': '离线性',
      'score.halley': '哈雷彗星',
      'score.correctness': '正确与稳定',
      'score.visual': '视觉执行',
      'score.interaction': '交互完成度',
      'score.visualFormula': '视觉证据基准 × 1.6',
      'score.interactionEvidence': '五项交互证据（0 / 0.5 / 1）',
      'score.interaction.drag': '拖拽',
      'score.interaction.zoom': '缩放',
      'score.interaction.focus': '聚焦',
      'score.interaction.follow': '跟随',
      'score.interaction.pauseReset': '停/重置',
      'score.canvasPenalty': 'Canvas2D 额外扣分',
      'score.manualAdjustment': '主观梯队修正 · {tier}',
      'score.fatalLevel': '致命等级 {level}',
      'score.fatalCapValue': '上限 {cap}',
      'score.fatalReason': '原因：',
      'score.referenceAria': '{name}，标杆',
      'score.evidenceAria': '{name} 证据评分 {score} 分，查看分项得分',
      'card.screenshotAlt': '{name} 的作品截图',
      'card.openAria': '打开 {name} 的完整作品',
      'benchmark.title': '第一梯队 · 重点推荐',
      'benchmark.badge': '标杆',
      'benchmark.recommend': '标杆 · 重点推荐',
      'fix.link': '⚙ Claude Opus 5 (Max) 修复版（仅修复显示问题）→',
      'group.prompt': '一句话提示',
      'group.document': '详细文档',
      'pair.rendering': '渲染方式',
      'pair.codeSize': '代码量',
      'pair.features': '功能点',
      'pair.featuredBadge': '特别对照 · 自己出题自己做',
      'pair.featuredEyebrow': '自主校验记录 · SELF-AUDIT LOG',
      'pair.featuredTitle': '它不只照着规格书做，还会主动质疑规格书',
      'pair.featuredBody': 'Claude Opus 5 (Ultra) 从自己的一句话标杆反推任务说明书，再据此重做。实现过程中，它主动校正天文数据，并通过长期实跑修复云层、眩光与性能问题。',
      'pair.featuredScoreNote': '一句话版标为标杆，不展示分数；详细文档版当前证据评分为 {b}。两版的表面细节与工程自检差异，仍需结合右侧实证阅读。',
      'pair.proofHalley': '哈雷近日点',
      'pair.proofHalleyValue': '2061-07-28',
      'pair.proofHalleyNote': '0.5860 AU · 75.31 → 75.46 年校正',
      'pair.proofRing': '土星环平面',
      'pair.proofRingValue': '2025-05-06',
      'pair.proofRingNote': '自发算中真实穿越日期',
      'pair.proofKirkwood': '柯克伍德空隙',
      'pair.proofKirkwoodValue': '−76% / −63%',
      'pair.proofKirkwoodNote': '3:1 / 5:2 共振区抑制',
      'pair.proofPerf': 'M4 实测',
      'pair.proofPerfValue': '56–70 FPS',
      'pair.proofPerfNote': '带迟滞的自适应内部分辨率',
      'tier.1': '第一梯队',
      'tier.2': '第二梯队',
      'tier.3': '第三梯队',
      'tier.4': '未完成',
      'tier.9': '未分组'
    },
    en: {
      'verdict.noWebgl.title': 'Unable to run',
      'verdict.noWebgl.body': 'This browser does not support WebGL 2, so most works on this site cannot be displayed. Try a recent version of Chrome, Edge, Firefox, or Safari.',
      'verdict.mobile.title': 'Mobile device · Desktop recommended',
      'verdict.mobile.body': 'These works were designed for desktop GPUs. Many will drop frames, heat up the device, or crash on mobile, although lightweight entries may still work.',
      'verdict.noFloat.title': 'Floating-point buffer extension unavailable',
      'verdict.noFloat.body': 'EXT_color_buffer_float is unavailable. Works that rely on HDR rendering may show a blank screen or an error; affected entries are marked individually.',
      'verdict.noBenchmark.title': 'Performance benchmark unavailable',
      'verdict.noBenchmark.body': 'Capability detection passed, but the benchmark could not run. Use the actual viewing experience as your guide.',
      'verdict.smooth.title': 'All works should run smoothly',
      'verdict.smooth.body': 'Measured GPU shader throughput is ample, including for heavyweight works.',
      'verdict.heavy.title': 'Supported, but heavyweight works may drop frames',
      'verdict.heavy.body': 'Lightweight and medium works should be smooth. Open entries marked “Heavy” one at a time rather than running several together.',
      'verdict.strained.title': 'Performance may be limited',
      'verdict.strained.body': 'Stick to works marked “Light.” Heavyweight entries are likely to drop frames noticeably.',
      'verdict.insufficient.title': 'Insufficient performance',
      'verdict.insufficient.body': 'Measured GPU capacity is low, so most works will be very slow. Try another device or browse the screenshots instead.',
      'risk.noWebgl2': 'WebGL2 unavailable',
      'risk.noFloat': 'Float extension unavailable',
      'risk.mayDrop': 'May drop frames',
      'risk.verySlow': 'Likely very slow',
      'probe.testing': 'Checking…',
      'probe.benchmarking': 'Running the GPU benchmark',
      'probe.supported': 'Supported',
      'probe.unsupported': 'Unsupported',
      'probe.undisclosed': 'Not disclosed',
      'probe.incomplete': 'Incomplete',
      'probe.webgl2': 'WebGL 2',
      'probe.floatBuffer': 'Floating-point framebuffer <br>EXT_color_buffer_float',
      'probe.gpu': 'GPU',
      'probe.maxMsaa': 'Maximum MSAA',
      'probe.maxTexture': 'Maximum texture size',
      'probe.fragmentPrecision': 'High-precision fragments',
      'probe.benchmarkPass': 'Benchmark · One 1024² shader pass',
      'probe.estimatedFrame': 'Estimated 1080p frame',
      'probe.dpr': 'Device pixel ratio',
      'probe.hardware': 'Screen / Cores / Memory',
      'probe.hardwareValue': '{screen} · {cores} cores · {memory}',
      'probe.deviceType': 'Device type',
      'probe.mobile': 'Mobile',
      'probe.desktop': 'Desktop',
      'tech.nativeWebgl2': 'Native WebGL2',
      'unit.lines': '{count} lines',
      'unit.items': '{count} items',
      'unit.works': '{count} works',
      'weight.heavy': 'Heavy',
      'weight.medium': 'Medium',
      'weight.light': 'Light',
      'network.title': 'Loads resources from {hosts} at runtime and will not display correctly offline or on a restricted network',
      'network.required': 'Network required',
      'render.issue': 'Rendering issue',
      'work.incomplete': 'Incomplete',
      'score.breakdownHead': 'EVIDENCE SCORE BREAKDOWN',
      'score.cappedMeta': 'Evidence base {base} · {adjusted} after deductions and adjustments · Fatal-level cap {cap}',
      'score.adjustedMeta': 'Evidence base {base} · {adjusted} after deductions and adjustments',
      'score.baseMeta': 'Evidence base {base} · No Canvas2D or subjective tier deduction',
      'score.features': 'Feature effectiveness',
      'score.orbit': 'Orbital realism',
      'score.moons': 'Moon system',
      'score.offline': 'Offline support',
      'score.halley': 'Halley’s Comet',
      'score.correctness': 'Correctness & stability',
      'score.visual': 'Visual execution',
      'score.interaction': 'Interaction completeness',
      'score.visualFormula': 'Visual evidence base × 1.6',
      'score.interactionEvidence': 'Five interaction evidence items (0 / 0.5 / 1)',
      'score.interaction.drag': 'Drag',
      'score.interaction.zoom': 'Zoom',
      'score.interaction.focus': 'Focus',
      'score.interaction.follow': 'Follow',
      'score.interaction.pauseReset': 'Pause/reset',
      'score.canvasPenalty': 'Canvas2D penalty',
      'score.manualAdjustment': 'Subjective tier adjustment · {tier}',
      'score.fatalLevel': 'Fatal level {level}',
      'score.fatalCapValue': 'cap {cap}',
      'score.fatalReason': 'Reason:',
      'score.referenceAria': '{name}, benchmark.',
      'score.evidenceAria': '{name}, Evidence Score {score}. View score breakdown.',
      'card.screenshotAlt': 'Screenshot of the {name} work',
      'card.openAria': 'Open the complete {name} work',
      'benchmark.title': 'Tier 1 · Recommended',
      'benchmark.badge': 'Benchmark',
      'benchmark.recommend': 'Benchmark · Recommended',
      'fix.link': '⚙ Claude Opus 5 (Max) display fix →',
      'group.prompt': 'One-line prompt',
      'group.document': 'Detailed specification',
      'pair.rendering': 'Rendering',
      'pair.codeSize': 'Code size',
      'pair.features': 'Features',
      'pair.featuredBadge': 'Special comparison · self-authored brief',
      'pair.featuredEyebrow': 'AUTONOMOUS VALIDATION · SELF-AUDIT LOG',
      'pair.featuredTitle': 'It did not merely follow the specification—it challenged it',
      'pair.featuredBody': 'Claude Opus 5 (Ultra) reverse-engineered the specification from its own one-line benchmark, then rebuilt the project from that brief. During implementation it corrected astronomical data and used long-run testing to repair cloud behavior, glare, and performance.',
      'pair.featuredScoreNote': 'The one-line entry is a benchmark and its score is hidden; the detailed-spec entry currently has an Evidence Score of {b}. Read that alongside the evidence at right for the visible surface-detail and engineering self-review differences.',
      'pair.proofHalley': 'Halley perihelion',
      'pair.proofHalleyValue': '2061-07-28',
      'pair.proofHalleyNote': '0.5860 AU · 75.31 → 75.46 years',
      'pair.proofRing': 'Saturn ring plane',
      'pair.proofRingValue': '2025-05-06',
      'pair.proofRingNote': 'independently matched the real crossing date',
      'pair.proofKirkwood': 'Kirkwood gaps',
      'pair.proofKirkwoodValue': '−76% / −63%',
      'pair.proofKirkwoodNote': 'suppression at the 3:1 / 5:2 resonances',
      'pair.proofPerf': 'Measured on M4',
      'pair.proofPerfValue': '56–70 FPS',
      'pair.proofPerfNote': 'hysteresis-based adaptive internal resolution',
      'tier.1': 'Tier 1',
      'tier.2': 'Tier 2',
      'tier.3': 'Tier 3',
      'tier.4': 'Incomplete',
      'tier.9': 'Ungrouped'
    }
  };

  const DIRECT_KEYS = {
    '无法运行': 'verdict.noWebgl.title',
    '移动设备 · 建议改用桌面': 'verdict.mobile.title',
    '缺少浮点缓冲扩展': 'verdict.noFloat.title',
    '无法完成性能实测': 'verdict.noBenchmark.title',
    '可以流畅运行全部作品': 'verdict.smooth.title',
    '可以运行，重量级作品可能掉帧': 'verdict.heavy.title',
    '性能吃紧': 'verdict.strained.title',
    '性能不足': 'verdict.insufficient.title',
    '不支持 WebGL2': 'risk.noWebgl2',
    '缺 float 扩展': 'risk.noFloat',
    '可能掉帧': 'risk.mayDrop',
    '预计很卡': 'risk.verySlow',
    '原生 WebGL2': 'tech.nativeWebgl2',
    '重量级': 'weight.heavy',
    '需联网': 'network.required',
    '渲染异常': 'render.issue',
    '一句话提示': 'group.prompt',
    '详细文档': 'group.document',
    '第一梯队': 'tier.1',
    '第二梯队': 'tier.2',
    '第三梯队': 'tier.3',
    '未完成': 'tier.4',
    '未分组': 'tier.9'
  };

  const SCORE_NOTES_EN = {
    'Opus5Ultra-WebGL2': 'All eight features, bidirectional ring shadows, and the complete interaction set are present. It remains one of the four score-hidden benchmark entries.',
    'Opus5Ultra-TasksAssignedByOpus5': 'All eight features, eight moons, complete interaction, and bidirectional ring shadows work. It also corrected Halley’s 2061 perihelion using the measured return interval and used runtime testing to fix long-term cloud drift, glare, and fragment-shader performance.',
    'GPT5.6SolUltra-WebGL2': 'Fourteen moons and a complete interaction set stand out. The procedural-world build takes about 12 seconds, and its comet elements are not Halley’s, so the Halley score does not apply.',
    'Fable5Max-Three': 'There is no actual ACES pass, and close-ups run bright. Saturn’s rings do not cast the reverse shadow onto the planet, and the minimum zoom can enter large bodies.',
    'Fable5Max-WebGL2': 'The comet is Encke rather than Halley. It models six moons, and Saturn has only the one-way planet-to-ring shadow.',
    'DeepSeek-V4-Flash-0731': 'The orbital, material, and control structure is rich, but 0–255 asteroid and Kuiper colors are fed into float vertex colors, so bloom washes out nearly the entire scene. It has only the Moon, none of its three comets is Halley, hovering can trigger a Raycaster error, and focus does not zoom in.',
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': 'All eight features, eight moons, two-way ring shadows, and continuous follow work. However, moon-to-Earth distances are wrong, label and canvas-picking projection ignores FOV and aspect ratio, and dragging can still trigger a mistaken click. Close-ups are often dark, Saturn\'s rings are nearly edge-on by default, and particles and labels feel crowded.',
    'KimiK3Max': 'Features, orbital motion, and interaction are complete. The main deductions are for network dependencies, the lack of physically meaningful ring shadows, and an overly strong central glow.',
    'KimiK3(Max)V2': 'This offline native-WebGL2 build includes JPL secular elements, a Kepler solver, eight moons, a planet-to-ring shadow, Bloom/ACES, atmospheres, and stable follow. However, only the moon radii and periods use real values: the Moon applies its 5.14° ecliptic inclination to Earth’s equatorial plane, while every other moon receives a randomized inclination and ascending node. It also has no Halley, lacks a complete state reset, and runs bright in the Sun, Earth daylight, and Saturn close-ups.',
    'GLM5.2Max': 'Heavy bloom washes out a large central area and erases planetary detail. Orbital realism is low, and the supposed Great Red Spot is implemented as several random storms.',
    'Opus_4_8_Max': 'Surface detail, night sides, orbits, and interaction are all strong. The main omissions are Halley’s Comet and bidirectional shadows for Saturn’s rings.',
    'Sonnet5Ultra': 'Six modeled moons, real Keplerian orbits, continuous following, and an offline Three.js bundle all work. Saturn is clear in close-up, but Halley is absent, ring shadows are not bidirectional as in the specification group, and orbit lines become busy at close range.',
    'GPT5.6SolUltra': 'Orbits, moons, and interaction are solid. In the fixed close-up, Jupiter’s spot and Saturn’s night-side detail are hard to see, and Halley is absent.',
    'GPT5.6SolMax': 'Close to the one-line GPT-5.6 Sol (Ultra) #2 result: complete and usable, but Jupiter and Saturn are dark in close-up, with no Halley and no physically accurate ring shadows.',
    'GPT_5_5_xhigh': 'Its objective feature set, orbits, and moons are strong, but the final image is overexposed and the focus distance is too great. Canvas dragging and selection also follow inconsistent paths.',
    'Gemini_3_5_flash_high': 'It has ten modeled moons, complete interaction, and restrained exposure. It lacks Halley and a real night side, while the transparent-ring shadow path is also questionable.',
    'Grok4.5': 'Planet identities, the comet tail, and atmospheres read clearly. It requires a network connection and lacks Halley; pointerdown picking may also select an object during a drag.',
    'GLM_5_1_high-1': 'Most surfaces reuse three templates, with no Great Red Spot or physically meaningful ring shadows. The star field and Saturn are rough, and there is no complete reset.',
    'GPT5.6TerraUltra-Three': 'The source contains rich surfaces and night-side detail, but the central glow is much too strong. It depends on the network, and focus stops following once the animation ends.',
    'Qwen3.7Max': 'Dedicated textures and the radial Saturn ring are fairly solid. The Sun clips to white, and there is no click-to-focus, continuous following, or reset.',
    'Mimo_2_5_Pro_high-1': 'Pause and the complete view reset both work. It runs stably, but Chinese body names prevent the dedicated Earth, Jupiter, and related texture branches from matching, and it has no focus or follow behavior.',
    'DeepSeek_V4_Pro_high-1': 'Highlights on several planets clip into white hemispheres, and the ring structure is difficult to read. It offers only basic camera controls, with no simulation controls or focus.',
    'DeepSeek_V4_Pro_high-2': 'The visuals and interaction are relatively complete, but the Moon is missing. Saturn’s ring geometry is incorrectly flattened into a thin line, and pause does not truly stop the simulation.',
    'DeepSeek_V4_Pro_high-3': 'Exposure is restrained and key planets have dedicated materials. It lacks a Great Red Spot and real ring shadows, while button focus does not follow continuously.',
    'Qwen3.8Max-inQoder': 'Bloom blows out the Sun and inner system, while the planets are small and visually similar. Clicking only opens information; it neither moves the camera nor provides a reset.',
    'Qwen3.8MaxV1-inQoder': 'The Canvas2D view is clean and stable, but surfaces and lighting are basic. It offers hover information only, with no focus or follow behavior, and receives the additional 10-point Canvas2D penalty.',
    'Qwen3.8MaxV2': 'The Canvas2D overview is stable, with recognizable rings, orbital inclinations, an asteroid belt, the Moon, and glow effects. It lacks Halley, ACES, and a real atmosphere, while orbital angle advancement does not solve Kepler’s equation. Interaction is limited to drag, zoom, and hover, with no click focus, continuous follow, pause, or reset; the 10-point Canvas2D penalty also applies.',
    'Qwen3.8Max(Max)V1': 'The Canvas2D overview is stable and click focus with continuous follow works. Dragging only pans the scene, Halley’s elements are heavily simplified, Bloom, ACES, and a complete reset are absent, and the 10-point Canvas2D penalty applies.',
    'Qwen3.8Max(Max)V2': 'The Three.js overview, Kepler solver, Halley, and continuous follow all run. It requires a network connection, the Sun and square star sprites are visibly overexposed, Saturn has no physical ring shadows, only the Moon is modeled, and there is no complete reset.',
    'Qwen3.8Max(Max)V3': 'Native WebGL2, offline post-processing, and complete focus-follow behavior run stably. Halley’s elements and orbital orientation are heavily simplified, Saturn’s ring is nearly invisible in close-up, planetary surfaces remain coarse, and there is no complete reset.',
    'LongCat2.0': 'The overview is clear, but features and realism are limited. Its “focus” only draws a marker without moving the camera, and Canvas2D incurs an additional 10-point penalty.',
    'Hy3': 'Surfaces, the red spot, and the procedural Saturn ring are comparatively rich. Selection does not pull the camera closer, but subsequent body displacement is followed continuously. Orbital realism remains low, it requires a network connection, and real ring shadows are absent.',
    'MiniMax_M3_thinking-1': 'The outer planets visibly drift away from their orbit lines, low speed settings can produce NaN values, and reset does not restore the view. The main view remains visible, so this is L2 rather than L1.',
    'Sonnet5Ultra-TasksAssignedByOpus5': 'Earth’s night side, Saturn’s rings, and bidirectional shadows are particularly strong. Jupiter is slightly washed out and the Great Red Spot has limited contrast.',
    'Opus4.8Ultra-TasksAssignedByOpus5': 'All eight features, eight moons, native WebGL2, bidirectional ring shadows, and continuous following work, with an excellent Saturn close-up. Halley follows the specification’s osculating period rather than the measured 2061 return correction added by the Claude Opus 5 (Ultra) specification run.',
    'GPT5.6SolUltra-TasksAssignedByOpus5': 'Earth’s clouds and city lights, Jupiter’s Great Red Spot, Saturn’s layered rings, and bidirectional shadows all read clearly; all five interaction criteria are satisfied.',
    'GPT5.6TerraUltra-TasksAssignedByOpus5': 'Distinct surface classes, the Great Red Spot, atmospheric and night-side detail, and bidirectional ring shadows are all present. Actual detail is clearly above GPT-5.6 Luna (Max), though still below GPT-5.6 Sol (Ultra).',
    'GPT5.6LunaMax-TasksAssignedByOpus5': 'Features and orbital motion are complete, but bodies remain small and dark in close-up, making Jupiter’s spot and Saturn’s ring structure hard to inspect. Focus also does not follow continuously.',
    'KimiK3Max-TasksAssignedByOpus5': 'Earth’s night side, Jupiter’s cloud bands, and Saturn’s bidirectional ring shadows are complete, with natural exposure. At 1440×900 the note panel intercepts the visible pause button, although Space still controls playback.',
    'KimiK3(Max)V2-TasksAssignedByOpus5': 'The offline native-WebGL2 build stably implements JPL/Keplerian orbits, eight moons, Halley, three ring systems with shadows, Jupiter’s Great Red Spot, Bloom/ACES, and continuous follow. However, the comet-tail buffer writes five floats per vertex into a four-float layout, the moon-orbit draw uses only half of its generated vertices, and there is no complete state reset.',
    'GPT5.5xHigh-TasksAssignedByOpus5': 'Cloud bands, the red spot, bidirectional ring shadows, and interaction are complete. Saturn’s fixed angle is rather edge-on, and the overall image is slightly warm and bright.',
    'GLM5.2Max-TasksAssignedByOpus5': 'The objective feature set is complete, but the whole scene is visibly washed out, Earth’s texture shows stepping, and detail on Jupiter and the ring shadows is lost. Dragging can mis-select, and focus does not follow.',
    'DeepSeekProMax-TasksAssignedByOpus5': 'Features and orbital motion are complete. Jupiter’s spot is gray, Saturn’s texture and ring close-up are abnormal, dragging can trigger an unintended click, and focus does not follow afterward.',
    'LongCat2.0-TasksAssignedByOpus5': 'The Great Red Spot’s longitude calculation makes it permanently invisible, Saturn’s rings nearly disappear because their radius is scaled twice, and the Sun’s information panel reports a NaN speed. Under the approved compounded-core-failure threshold, this is L2.',
    'Gemini3.5Flash-TasksAssignedByOpus5': 'The asteroid belt and Sun are harshly bright. The red spot also appears on Saturn, ring shadows mix coordinate spaces, and canvas bodies cannot be clicked directly.',
    'Gemini3.6Flash-TasksAssignedByOpus5': 'Earth’s surface looks blocky and Jupiter’s spot is indistinct. Saturn’s rings have a hard-edged shadow, and releasing a drag can still select an object accidentally.',
    'Gemini3.7Flash(high)V1': 'The network-dependent Three.js version runs with elliptical orbits, the Moon, procedural surfaces, Bloom/ACES, atmospheres, and continuous follow. However, bodies advance uniformly in eccentric anomaly without a Kepler solver, orbital orientation, or an epoch; there is only one moon and no Halley. The Sun and Saturn are heavily overexposed in close-up, Jupiter’s night side is almost black, and dragging has no release-click suppression.',
    'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': 'The offline native-WebGL2 version includes JPL secular elements, a Kepler solver, eight moons, Halley, three ring systems, ring shadows, Bloom/ACES, and all five interactions, with fairly rich close-ups. However, orbit-ribbon rebuilding uses sin(Ω) where cos(Ω) is required in the y rotation term, so displayed paths systematically disagree with body positions. The default asteroid belt and chromatic fringe are also overly bright and busy.',
    'Qwen3.8Max-TasksAssignedByOpus5': 'The overview is clear and restrained, but Saturn’s ring is effectively broken because its normalized radius is scaled a second time. Display distances for moons are also mapped incorrectly.',
    'Qwen3.8MaxV2-TasksAssignedByOpus5': 'All eight features, realistic orbits, and eight moons are implemented, but excessive particles and glow wash the default overview into a large off-white field, making planetary detail difficult to read. Click handling checks the dragging state only after mouseup, so releasing a drag can still select an object, and there is no complete reset.',
    'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': 'J2000 orbits, eight moons, bidirectional ring shadows, Bloom/ACES, and continuous follow are all strong. However, Halley is advanced with the 75.31-year osculating period while the panel labels the next perihelion as 2061-07-28; the model reaches perihelion about 50 days earlier, and there is no complete view reset.',
    'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': 'The main view and controls initially work, so this is not L1. Focus retains a stale position array instead of following continuously, while frame schedules itself and drive also calls it every display frame; accumulating render loops make long-run performance unstable, so this remains L2.',
    'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': 'The JPL/Kepler pipeline, eight moons, ring shadows, multiple belts and post-processing all run, but the corona is visibly overexposed, Halley does not follow its displayed orbit, moon distance readouts are distorted, and high-DPI picking plus focused zoom remain flawed.',
    'DeepSeek-V4-Pro-0813-V1': 'The network-dependent Three.js scene includes J2000/Keplerian motion, seven moons, procedural surfaces, Bloom/ACES, atmospheres, and stable focus/follow. However, the orbit line adds the periapsis direction while body propagation does not, so Mercury, Mars, Jupiter, and Uranus systematically miss their displayed paths. There is no Halley; Saturn’s unlit rings have no physical ring shadow, the default solar glow is heavily overexposed, Earth’s close-up turns brown and loses surface detail, and reset restores only the camera.',
    'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': 'The complete offline WebGL2 implementation includes JPL/Keplerian orbits, eight moons, Halley, three ring systems with bidirectional shadows, ACES/Bloom, and all five stable interactions. However, the osculating-period projection is not corrected for Halley\'s 2061 return, relative moon-distance compression is broken, and the chromatic fringe, glow, and procedural surfaces look somewhat coarse.',
    'Gemini3.1Pro-TasksAssignedByOpus5': 'Exposure is clean but surface classes are basic, with a night side but no complete atmosphere. Zoom has no maximum bound, and canvas bodies cannot be clicked directly.',
    'Hy3-TasksAssignedByOpus5': 'Saturn and its rings are recognizable, but a cream-colored glow flattens the whole scene. Venus has the wrong semimajor axis, focus does not follow, and “Now” reuses an old timestamp.',
    'MiniMaxM3-TasksAssignedByOpus5': 'A white background and a huge black triangle continuously obscure the main view, while Saturn’s ring fragments are discarded entirely. This unusable main view is L1 and caps the score at 25.',
    'MiniMaxM3(high)V2-TasksAssignedByOpus5': 'The source includes Keplerian orbits, eight moons, Halley, and a substantial control framework, but the main canvas is unusable. The post-process quad is packed as XYZ and read as tightly packed XY, while the 4× MSAA resolve uses LINEAR instead of NEAREST, leaving the canvas black. Component-wise distance compression clamps negative coordinates positive, Earth is reported at 39.0253 AU, focus does not follow continuously, seconds render as undefined, and active Halley passages repeatedly trigger undersized-buffer draw warnings.'
  };

  const WORK_TEXT_EN = {
    'DeepSeek-V4-Flash-0731': { title: 'Solar System Simulation' },
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': { title: 'Solar System · Real-Time Orbital Model' },
    'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': {
      title: 'Solar System · Real-Time Motion Model',
      note: 'Marked incomplete by the author: a large debug overlay remains visible, and frame schedules itself while drive also calls it every display frame, so duplicate render loops accumulate over time.'
    },
    'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'DeepSeek-V4-Pro-0813-V1': { title: 'Solar System · Real-Time Motion Model' },
    'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'DeepSeekProMax-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model — DeepSeek V4 Pro (Max)' },
    'DeepSeek_V4_Pro_high-1': { title: 'Solar System' },
    'DeepSeek_V4_Pro_high-2': { title: 'Solar System Motion Model' },
    'DeepSeek_V4_Pro_high-3': { title: 'Solar System' },
    'Fable5Max-Three': { title: 'Solar System', note: 'Nearly identical to Fable_5_Max.html; only this version is included.' },
    'Fable5Max-WebGL2': { title: 'Solar System' },
    'GLM5.2Max-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'GLM5.2Max': { title: 'Solar System' },
    'GLM_5_1_high-1': { title: 'Solar System Motion Model' },
    'GPT5.5xHigh-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'GPT5.6LunaMax-TasksAssignedByOpus5': { title: 'Solar System · Real-Time Motion Model' },
    'GPT5.6SolMax': { title: 'Solar System · Orbital Atlas' },
    'GPT5.6SolUltra-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model · Ecliptic Observatory' },
    'GPT5.6SolUltra-WebGL2': { title: 'Ecliptic Exposure · Native WebGL2 Solar System' },
    'GPT5.6SolUltra': { title: 'Solar System · Orbital Atlas' },
    'GPT5.6TerraUltra-Three': { title: 'GPT-5.6 Terra (Ultra) · Three.js Solar System' },
    'GPT5.6TerraUltra-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'GPT_5_5_xhigh': { title: 'Solar System Motion Model — Single-File Edition' },
    'Gemini3.1Pro-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Gemini3.5Flash-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model — High-Precision Solar System Simulation' },
    'Gemini3.6Flash-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model — Solar System Real-Time Simulation' },
    'Gemini3.7Flash(high)V1': { title: '3D Solar System — High-Fidelity Dynamics and Celestial Evolution Model' },
    'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': { title: 'Real-Time Solar-System Dynamics and Astrophysics Simulator' },
    'Gemini_3_5_flash_high': { title: 'Cosmic Odyssey: 3D Solar System Motion Model — Single-File Edition' },
    'Grok4.5': { title: 'Solar System · Real-Time Celestial Mechanics Model' },
    'Hy3-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Hy3': { title: 'Solar System Motion Model' },
    'KimiK3Max-TasksAssignedByOpus5': { title: 'Solar System · Real-Time Orbital Model' },
    'KimiK3Max': { title: 'Solar System Simulator' },
    'KimiK3(Max)V2-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'KimiK3(Max)V2': { title: 'Solar System' },
    'LongCat2.0-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'LongCat2.0': { title: 'Solar System', note: 'The only non-3D work in the one-line-prompt group.' },
    'Mimo_2_5_Pro_high-1': { title: 'Solar System Motion Model' },
    'MiniMaxM3-TasksAssignedByOpus5': {
      title: 'Real-Time Solar System Model',
      issue: 'Rendering failure: the background is white instead of a star field, a black wedge cuts through the image, and only the Sun is visible. The interface and data panels still work.',
      'fix.what': 'Fixes two issues: the full-screen quad vertex order (TRIANGLE_STRIP requires a Z pattern; the original perimeter order left a wedge-shaped hole on the left), and the corona billboard size units (originally 11–32 times the full screen, whose additive blending washed the frame to white).'
    },
    'MiniMaxM3(high)V2-TasksAssignedByOpus5': {
      title: 'Real-Time Solar System Model',
      issue: 'Incomplete: only the UI is visible. A malformed full-screen quad and an invalid multisample resolve leave the main canvas black; the timestamp shows undefined seconds, and accelerated Halley passages generate repeated WebGL buffer warnings.'
    },
    'MiniMax_M3_thinking-1': {
      title: 'Solar System · Real-Time Keplerian Simulation',
      'fix.what': 'Adjusts three settings: the solar-flare radius (3.5 originally exceeded Mercury’s 3.17 orbit and swallowed the inner three planets), the bloom threshold (0.15 was too low), and the default camera distance (the original framing cut off the outer four planets).'
    },
    'Opus5Ultra-WebGL2': { title: 'Solar System', note: 'The site’s detailed task specification was reverse-engineered from this Claude Opus 5 (Ultra) implementation.' },
    'Opus5Ultra-TasksAssignedByOpus5': {
      title: 'Real-Time Solar System Model',
      note: 'Claude Opus 5 (Ultra) reverse-engineered the specification from its own one-line benchmark, then rebuilt it while autonomously validating astronomy, long-run behavior, and performance.',
      tags: ['Nearly half the time went into performance tuning (the features were already complete)']
    },
    'Opus4.8Ultra-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Opus_4_8_Max': { title: 'Solar System · Real-Time Motion Model' },
    'Qwen3.7Max': { title: 'Solar System Motion Model' },
    'Qwen3.8Max-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Qwen3.8Max-inQoder': { title: '3D Solar System Model — Three.js', note: 'Produced in Qoder, an IDE agent, rather than the conversational environment used for the other works; not every difference can necessarily be attributed to the model.' },
    'Qwen3.8MaxV1-inQoder': { title: 'Solar System Motion Model', note: 'Also produced in Qoder. This earlier version was later replaced by the 3D version created in the same environment.' },
    'Qwen3.8MaxV2': { title: 'Solar System Motion Model' },
    'Qwen3.8MaxV2-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Qwen3.8Max(Max)V1': { title: 'Solar System Motion Model' },
    'Qwen3.8Max(Max)V2': { title: 'Solar System Motion Model · Three.js 3D' },
    'Qwen3.8Max(Max)V3': { title: 'Solar System Motion Model · WebGL2' },
    'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' },
    'Sonnet5Ultra': { title: 'Solar System Motion Model · Claude Sonnet 5 (Ultra)' },
    'Sonnet5Ultra-TasksAssignedByOpus5': { title: 'Real-Time Solar System Model' }
  };

  function template(value, vars) {
    if (!vars) return value;
    return String(value).replace(/\{([\w.]+)\}/g, function (_, key) {
      return Object.prototype.hasOwnProperty.call(vars, key) ? String(vars[key]) : _;
    });
  }

  function t(key, vars) {
    const resolved = DIRECT_KEYS[key] || key;
    const value = UI[lang][resolved] != null ? UI[lang][resolved] : UI.zh[resolved];
    return template(value != null ? value : key, vars);
  }

  function page(value, targetLang) {
    if (value == null) return value;
    const target = /^en(?:-|$)/i.test(targetLang || lang) ? 'en' : 'zh';
    return String(value).replace(/(^|\/)(index|view|compare|spec)(?:\.en)?(?:\.html)?(?=$|[?#])/i,
      function (_, prefix, name) { return prefix + name + (target === 'en' ? '.en' : '') + '.html'; });
  }

  function targetUrl(targetLang) {
    const target = /^en(?:-|$)/i.test(targetLang || lang) ? 'en' : 'zh';
    const url = new URL(location.href);
    if (/\/$/.test(url.pathname)) {
      if (target === 'en') url.pathname += 'index.en.html';
    } else {
      url.pathname = page(url.pathname, target);
    }
    return url;
  }

  function switchTo(targetLang) {
    const target = /^en(?:-|$)/i.test(targetLang || '') ? 'en' : 'zh';
    try { localStorage.setItem('solar-comparison-language', target); } catch (_) { }
    location.assign(targetUrl(target).href);
  }

  function sourceText(work, key) {
    if (!work) return '';
    if (key === 'fix.what') return work.fix && work.fix.what || '';
    return work[key] == null ? '' : work[key];
  }

  function workText(work, key) {
    const original = sourceText(work, key);
    if (!en || !work) return original;
    const translated = WORK_TEXT_EN[work.id];
    return translated && translated[key] != null ? translated[key] : original;
  }

  function scoreNote(workOrId, fallback) {
    const id = typeof workOrId === 'object' && workOrId ? workOrId.id : workOrId;
    let original = fallback;
    if (original == null && window.SCORES && window.SCORES[id]) original = window.SCORES[id].note;
    return en && SCORE_NOTES_EN[id] ? SCORE_NOTES_EN[id] : original || '';
  }

  function bindSwitches() {
    document.querySelectorAll('.lang-switch [data-lang]').forEach(function (control) {
      const target = /^en(?:-|$)/i.test(control.dataset.lang || '') ? 'en' : 'zh';
      const active = target === lang;
      control.classList.toggle('active', active);
      control.setAttribute('aria-pressed', String(active));
      if (control.tagName === 'A') control.href = targetUrl(target).href;
      control.addEventListener('click', function (event) {
        if (active) { event.preventDefault(); return; }
        event.preventDefault();
        switchTo(target);
      });
    });
  }

  window.I18N = { lang, en, t, page, switchTo, workText, scoreNote };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bindSwitches);
  else bindSwitches();
})();
