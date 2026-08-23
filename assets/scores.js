/* 证据值来自源码审计、统一浏览器实跑与人工视觉复核；公式与排序自动执行。 */
(function () {
  'use strict';

  window.SCORES = {
    'DoubaoSeedEvolving(Max)V1': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: 0, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 11, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 3,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2、十一颗卫星、环影、Bloom/ACES 与小行星带均可运行；但行星使用共面圆轨道与手工速度，没有开普勒、真实历元或聚焦跟随，默认画面也被大量高亮粒子明显洗白。'
    },
    'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 5 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '详细文档版完整覆盖 JPL/开普勒轨道、八颗卫星、哈雷、三套环影、Bloom/ACES、大气和持续跟随；但默认场景曝光与轨道线亮度过强，近景背景明显泛金，且没有完整状态重置。'
    },
    'GPT5.6Sol(high)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 的八颗卫星、小行星带、Bloom/ACES、大气与完整交互均稳定，默认总览清晰；但所有行星从近日点同步起步，没有真实初始平近点角，且缺少哈雷与物理环影。'
    },
    /* 一句话组（含三个金色参考作品） */
    'DeepSeek-V4-Flash-0731': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: .5 },
      orbitRuntime: { pathFit: .5, stability: .5 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 4, data: 4, integrity: 3 }, visualBase: 1.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道、材质和控制结构丰富，但小行星带与柯伊伯带的浮点颜色写入错误，Bloom 几乎洗白全场；仅月球，三颗彗星均非哈雷，悬停和聚焦也有缺陷。'
    },
    'DeepSeek_V4_Pro_high-1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 2.5,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: '多颗行星高光剪切成白色半球，环层次难辨；只有基础视角控制，没有模拟控制或聚焦。'
    },
    'DeepSeek_V4_Pro_high-2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: 1, orientation: 1, epoch: .5 },
      orbitRuntime: { pathFit: .5, stability: 1 }, moons: 0, hasEarthMoon: false, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 6.1,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: .5, pauseReset: .5 }, fatal: null,
      note: '视觉和交互相对完整，但没有月球；土星环几何被错误压成细线，暂停也不会真正停止时间。'
    },
    'DeepSeek_V4_Pro_high-3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 5.8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '曝光克制且关键行星有专用材质；轨道仅为基础元素形状，无开普勒与历元传播，按钮聚焦也不持续跟随。'
    },
    'Fable5Max-Three': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 0, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: .5 }, moons: 6, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '哈雷与六颗卫星均成立；没有实际 ACES，环影仅单向，最小缩放可进入大型天体内部。'
    },
    'Fable5Max-WebGL2': {
      reference: true,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 6, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 9.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '彗星实际是恩克而非哈雷；六颗卫星，土星环只有行星投向环的单向阴影。'
    },
    'GLM5.2Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '五项控制均可用，但轨道是简化非开普勒路径；过强 Bloom 抹去了中心细节。'
    },
    'GLM5.3(Max)V1': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 15, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 4, integrity: 4.5 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '联网 Three.js 版的 JPL 世纪率、开普勒求解、十五颗卫星、双向环影、Bloom/ACES、大气和五项交互均稳定；但没有哈雷，卫星轨道均简化为贴合行星赤道的圆轨道，地球高光与木星、土星近景也略显过曝。'
    },
    'GLM5.3(Max)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4.5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '联网 Three.js 版的 JPL/开普勒轨道、七颗卫星、哈雷彗星、Bloom/ACES、大气与持续跟随均稳定；地球昼夜面和土星环层次较好，但没有物理环影，卫星显示偏大，木星也缺少清楚的大红斑。'
    },
    'GLM5.3(Max)V3': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 10, hasEarthMoon: true, halley: true,
      correctness: { runtime: 4, data: 4, integrity: 3 }, visualBase: 3.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、十颗卫星、哈雷与恩克彗星、双向环影、Bloom/ACES、大气和五项交互；但总览被极强灰白光晕与色散覆盖，近景卫星和轨道显示过大，木星、土星主体反而难以观察。彗尾绘制还漏绑点阵 VAO，活跃时每帧产生 GL_INVALID_OPERATION，实际尾迹无法正常绘制。'
    },
    'GLM5.3(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 3,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版完整实现 JPL/开普勒、八颗卫星、哈雷、双向环影、Bloom/ACES、大气与五项交互；但轨道线由间距明显的点构成，总览辉光拥挤，地球和月球近景偏黑且有噪点，木星表面偏平，土星环高光与阴影也明显过重。'
    },
    'GLM5.3(Max)V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4.5 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版完整实现 JPL/开普勒、八颗卫星、哈雷、双向环影、Bloom/ACES、大气与五项交互，长程加速运行无报错；但轨道线呈点状且不连续，靠近太阳时会出现明显的 X 形光晕伪影，木星表面偏平，卫星显示也过大。'
    },
    'GLM_5_1_high-1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 3,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '拖拽、缩放、聚焦和暂停可用，但没有完整重置；轨道简化，星空与土星观感粗糙。'
    },
    'GPT5.6SolMax': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 6,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线版的开普勒轨道、七颗卫星与持续跟随均成立；没有哈雷，土星环缺少物理环影。'
    },
    'GPT5.6SolUltra-WebGL2': {
      reference: true,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 14, hasEarthMoon: true, halley: false,
      correctness: { runtime: 4, data: 5, integrity: 4 }, visualBase: 9.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '十四颗卫星、完整渲染与交互很突出；程序世界需约 12 秒建成，彗星轨道根数也并非哈雷。'
    },
    'GPT5.6SolUltra': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 6,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线版的轨道、卫星和五项交互均扎实；没有哈雷，土星环仅部分达到物理处理要求。'
    },
    'GPT5.6Sol(xhigh)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 13, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 4, integrity: 5 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: 'Canvas2D 总览的十三颗卫星、开普勒轨道与完整交互均稳定，视觉完成度也较高；但相位并非真实历元，且无哈雷、Bloom、ACES 与物理环影，另计 Canvas2D 扣分。'
    },
    'GPT5.6Sol(xhigh)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: .4, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 11, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版具备 J2000 开普勒轨道、十一颗卫星、小行星带、Bloom、大气与持续跟随；没有哈雷和物理环影，色调映射并非严格 ACES，也没有完整重置。'
    },
    'GPT5.6Sol(xhigh)V3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: .4, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版的 J2000 开普勒轨道、七颗卫星、双粒子带、Bloom、大气和聚焦跟随均稳定，近景层次较好；没有哈雷与物理环影，色调映射并非严格 ACES，重置只覆盖镜头。'
    },
    'GPT5.6TerraUltra-Three': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 5, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 3 }, visualBase: 6,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '日期驱动的开普勒场景、聚焦和重置可用；依赖联网，聚焦动画结束后不再持续跟随。'
    },
    'GPT_5_5_xhigh': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 9, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 2,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道、卫星与哈雷覆盖很强，但最终画面过曝且聚焦过远；画布拖拽和点选路径也不一致。'
    },
    'Gemini_3_5_flash_high': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 10, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '十颗卫星、J2000 轨道与完整交互突出；没有哈雷，环透明阴影和大气实现只有部分证据。'
    },
    'Grok4.5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 5, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '开普勒求解器、历元和行星材质清楚；依赖联网且无哈雷，拖拽可能触发点选，也无持续跟随。'
    },
    'Grok4.6(xhigh)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 12, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 2.5, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '替换后的联网 Three.js 版拥有克制的总览、专用行星表面、十二颗卫星、哈雷、双星带、Bloom/ACES、大气和持续跟随；但轨道数据缺少 J2000 初始平近点角，所有行星与哈雷都从近日点同时起步，卫星升交点还由随机数生成。土星环没有物理环影，选择天体也往往要再点“复位镜头”才会明显拉近，重置不会恢复时间或显示开关。'
    },
    'Hy3': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 6.6,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '表面、红斑和程序化土星环较丰富；选定后不会主动拉近，但会持续跟随天体位移，暂停和重置可用。'
    },
    'KimiK3Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '求解器、哈雷、七颗卫星和五项控制均成立；主要扣分来自联网依赖与缺少物理环影。'
    },
    'KimiK3(Max)V2': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 2.5, integrity: 4 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、八颗卫星、行星投向土星环的阴影、Bloom/ACES、大气与稳定跟随；但卫星只有半径与周期采用真实值，轨道方向并不真实：月球把相对黄道的 5.14° 错套到地球赤道面，其余卫星的倾角与升交点也由随机数生成。另有无哈雷、完整状态重置不足，以及太阳、地球昼面和土星近景曝光偏强等问题。'
    },
    'KimiK3(Max)V3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4.5, integrity: 4.5 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版具备 J2000 开普勒轨道、哈雷、月球、小行星带与柯伊伯带、Bloom/ACES、大气和稳定跟随；但只实现一颗卫星，土星环没有物理阴影，彗尾是沿轨道累积的历史尾迹而非背太阳方向。地球近景明显偏棕，木星纹理模糊且没有清楚的大红斑，重置也只恢复视角。'
    },
    'LongCat2.0': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 2.5, integrity: 5 }, visualBase: 4.6,
      interaction: { drag: .5, zoom: 1, focus: 0, follow: 0, pauseReset: .5 }, fatal: null,
      note: 'Canvas2D 总览稳定，但拖拽是平移而非 3D 环绕，“双击聚焦”也不移动视角；功能有效性有限并受 Canvas2D 扣分。'
    },
    'Mimo_2_5_Pro_high-1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 2, integrity: 5 }, visualBase: 4.2,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 1 }, fatal: null,
      note: '可以稳定运行，暂停与完整视角重置均有效；但中文天体名让专用材质分支无法命中，也没有聚焦和跟随。'
    },
    'MiniMax_M3_thinking-1': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 3, data: 4, integrity: 1 }, visualBase: 4.7,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: .5, pauseReset: .5 }, fatal: 'L2',
      fatalReason: '外行星偏离轨道线，低速产生 NaN，重置失效。',
      note: '外行星会明显脱离轨道线，低速区间可产生 NaN，重置也不恢复视角；主画面仍可见，故按 L2 长程核心故障封顶。'
    },
    'Opus5Ultra-WebGL2': {
      reference: true,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '源码、实跑与截图均验证开普勒轨道、月球与哈雷、五项交互和双向环影；作为同规则金色参考。'
    },
    'Opus_4_8_Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 9,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线完整作品，表面、夜面、轨道和交互都很强；没有实际哈雷，环照明也未达双向参考实现。'
    },
    'Qwen3.7Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 5.2,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: .5 }, fatal: null,
      note: '开普勒求解与材质工作成立；太阳烧白且细节较低，没有点击聚焦、持续跟随或完整重置。'
    },
    'Qwen3.8MaxV2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3.5, integrity: 5 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: 'Canvas2D 总览稳定，带状物、月球与倾斜轨道清楚；但无开普勒求解、哈雷、ACES 或大气，也无聚焦、暂停和重置。'
    },
    'Qwen3.8Max-inQoder': {
      reference: false,
      featureMap: { rings: 0, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 2.1,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: '运行稳定且有类开普勒传播，但没有可计分环结构；Bloom 洗白中心，点击只显示资料。'
    },
    'Qwen3.8MaxV1-inQoder': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: .5, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3.5, integrity: 5 }, visualBase: 4.8,
      interaction: { drag: .5, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: 'Canvas2D 有近似开普勒路径和基础行星数据，但拖拽只是平移，仅有悬停信息，视觉也缺色调映射与大气。'
    },
    'Qwen3.8Max(Max)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3.5, integrity: 5 }, visualBase: 6.5,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: 'Canvas2D 总览稳定且聚焦跟随可用；拖拽只是平移，哈雷轨道根数高度简化，没有 Bloom、ACES 或完整重置，并承受 Canvas2D 扣分。'
    },
    'Qwen3.8Max(Max)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3.5, integrity: 4 }, visualBase: 5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: 'Three.js 总览、开普勒、哈雷与持续跟随均可运行；但依赖联网，太阳和星点明显过曝，土星环无物理环影，仅月球且没有完整重置。'
    },
    'Qwen3.8Max(Max)V3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3.5, integrity: 3.5 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '原生 WebGL2、离线后期和完整聚焦跟随稳定；但哈雷根数与轨道定向被大幅简化，土星环近景几乎不可见，行星表面细节偏粗且无完整重置。'
    },
    'Sonnet5Ultra': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 6, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线的多卫星开普勒模型与持续跟随均成立；没有哈雷，环结构因缺参考级双向阴影而只计部分分。'
    },

    /* 详细文档组 */
    'Opus5Ultra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整 J2000/速率传播、哈雷、八颗卫星、双向环影与五项交互均经源码和实跑验证。'
    },
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 7,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '功能、轨道、八颗卫星与跟随均成立；卫星距离和投影计算有误，桌面拖拽释放仍可误触点选。'
    },
    'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 0, data: 2, integrity: 1 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: 'L2',
      fatalReason: '双重帧调度让渲染循环持续倍增，长程性能失稳。',
      note: '主画面与控制初始可用，故非 L1；但相机聚焦后只保留旧位置数组，不能持续跟随，双重帧调度还会让循环持续累积，因长程核心故障按 L2 封顶。'
    },
    'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: .5, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 2.5, integrity: 4 }, visualBase: 6,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: 'JPL/开普勒、八颗卫星、环影、多重小行星带与后期均可运行；但日冕明显过曝，哈雷实体不贴合轨道线，卫星距离数据失真，高 DPI 点选及聚焦后缩放仍有缺陷。'
    },
    'DeepSeek-V4-Pro-0813-V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版具备 J2000/开普勒运动、七颗卫星、程序化表面、Bloom/ACES、大气和稳定的聚焦跟随；但轨道线额外加入近日点方向，天体传播未加入同一角度，水星、火星、木星和天王星会系统性偏离显示轨道。没有哈雷，土星环无物理环影，默认太阳辉光明显过曝，地球近景偏棕且细节被吞，重置也只恢复视角。'
    },
    'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整离线 WebGL2：JPL/开普勒、八颗卫星、哈雷、三套行星环与双向环影、ACES/Bloom 及五项交互均稳定；但密切周期外推未校正 2061 回归，卫星显示距离的相对压缩失效，色散/辉光和程序化表面略显粗重。'
    },
    'DeepSeekV4Pro0813(Max)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 5, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 3.5 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版具备 J2000/开普勒轨道、月球与四颗伽利略卫星、哈雷、主带/柯伊伯带、Bloom/ACES、大气与完整聚焦跟随；但土星环纹理生成时把函数本身误传给噪声采样，透明度变为 NaN，实际运行中行星环完全不可见。近景的方块星点与过大前景小行星较抢眼，木星细节偏软，重置也只恢复视角。'
    },
    'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 4.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版的 JPL/开普勒、八颗卫星、哈雷、三套环系与双向环影、多重小天体带和五项基本交互长时运行稳定；但默认地球近景被太阳过曝与巨大月球前景明显干扰，木星泛白且表面质感偏蜂窝，土星环明暗分区也过重。页面只有“此刻”日期恢复，没有完整的视角/状态重置。'
    },
    'DeepSeekProMax-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 6,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道与数据系统稳定，但土星纹理和环近景异常；拖拽释放可误选，聚焦后不持续跟随。'
    },
    'GLM5.2Max-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 3,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '求解器、轨道元素和渲染管线均在，但全场洗白并剪掉细节；拖拽可误选，聚焦不持续。'
    },
    'GPT5.5xHigh-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '真实元素、哈雷、八颗卫星、双向环行为和持续聚焦均稳定；只扣固定角度与偏暖亮的视觉分。'
    },
    'GPT5.6LunaMax-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 3.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '功能与轨道管线完整，但聚焦后天体仍小且暗，土星环和红斑证据较弱，摄像机也不持续跟随。'
    },
    'GPT5.6SolUltra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '自带测试 API，轨道、渲染与五项交互均完整；地球、木星与土星细节清楚。'
    },
    'GPT5.6TerraUltra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整 J2000 元素、求解器、动态聚焦、哈雷与八卫星数据均稳定；视觉很强但仍低于 GPT-5.6 Sol (Ultra)。'
    },
    'Gemini3.1Pro-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: .5, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '源码没有独立大气壳或散射；运行稳定，但缩放边界弱，聚焦依赖列表且不持续跟随。'
    },
    'Gemini3.5Flash-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 2, integrity: 3 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '红斑可误出现在土星，环影混用坐标空间，大气也只是部分边缘效果；列表聚焦跟随可用，但画布拾取缺失。'
    },
    'Gemini3.6Flash(high)V0': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: 0, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 1, integrity: 4 }, visualBase: 3.5,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '运行稳定、UI 与特效也完整，但它明确把“尽可能真实”改写成“脱离真实物理约束”的赛博幻想：八颗行星均为同构霓虹大理石球，轨道只是平面匀速圆周，没有开普勒、真实元素、历元、小行星带或哈雷，仅有月球；默认自动聚焦地球时还会被巨大的粉色晶体太阳遮挡。土星只有线框环且无环影，暂停和重置也只覆盖部分状态。'
    },
    'Gemini3.6Flash-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '专用大气、土星环、小行星着色器和完整元素均在；地球拼块、红斑弱和生硬环影扣分，拖拽释放还可误选。'
    },
    'Gemini3.7Flash(high)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 4,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版的椭圆轨道、月球、程序化表面、Bloom/ACES、大气与持续跟随均可运行；但公转只按偏近点角匀速推进，没有开普勒求解、轨道方向或历元，且仅一颗卫星、没有哈雷。太阳与土星近景明显过曝，木星夜面几乎全黑，拖拽释放也缺少误点抑制。'
    },
    'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、八颗卫星、哈雷、三套行星环、环影、Bloom/ACES 与完整交互，近景层次也较丰富；但轨道带重建时把 y 方向旋转矩阵中的 cos(Ω) 误写成 sin(Ω)，导致显示轨道与天体位置系统性不一致。默认小行星带和色散效果也偏亮、偏杂。'
    },
    'Grok4.6(xhigh)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 3 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、八颗卫星、哈雷、三套环系与双向环影、Bloom/ACES、大气和完整交互，1440×900 实跑约 60 fps 且长程加速无报错；但彗尾代码把日心位置取反后当作背日方向，离子尾实际朝向太阳。默认太阳辉光也覆盖了大片内太阳系，近景表面带有明显颗粒与高光噪声。'
    },
    'Hy3-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: .5, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 2, integrity: 3 }, visualBase: 5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: .5 }, fatal: null,
      note: '求解与定向管线完整，但金星半长轴误用地球值；聚焦不持续，“此刻”恢复加载时间而非真正当前时间。'
    },
    'KimiK3Max-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 9,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '真实元素、哈雷、八颗卫星、双向环影与持续相机目标均稳定；但 1440×900 下说明面板会挡住暂停按钮，仍可用空格键控制。'
    },
    'KimiK3(Max)V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4.5, integrity: 4 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版的 JPL/开普勒轨道、八颗卫星、哈雷、三套行星环与环影、木星大红斑、Bloom/ACES 和持续跟随均稳定；但彗尾缓冲按四浮点布局却逐顶点写入五个值，卫星轨道缓冲也只绘制了已生成顶点的一半，且没有完整状态重置。'
    },
    'LongCat2.0-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 1, integrity: 2 }, visualBase: 4.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: 'L2',
      fatalReason: '环与大红斑核心结构失效，并出现 NaN 实时数据。',
      note: '环半径重复缩放而基本消失，大红斑永不可见，太阳速度还显示 NaN；按已批准阈值，复合核心结构与数据故障归 L2。'
    },
    'MiniMaxM3-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: .4, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 1, data: 1, integrity: 1 }, visualBase: 0,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: 'L1',
      fatalReason: '白场与巨大黑三角遮挡主画面，无法正常审阅。',
      note: '源码有名义功能与控制，但白场和巨大黑三角持续遮挡主画面，环着色器也丢弃输出；按 L1 主视图不可用封顶。'
    },
    'MiniMaxM3(high)V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: .4, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 1, data: 1, integrity: 1 }, visualBase: 0,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: .5 }, fatal: 'L1',
      fatalReason: '全屏后期四边形以 XYZ 数据生成，却按紧密排列的 XY 读取；同时 4× MSAA 解析使用了非法的 LINEAR 过滤。两处核心合成错误叠加，使主画布持续全黑，仅 UI 可见。',
      note: '源码覆盖开普勒轨道、八颗卫星、哈雷彗星和完整控制框架，但逐轴距离压缩会把负坐标钳成正值，地球面板因此错报 39.0253 AU；聚焦不连续跟随，时间秒数显示 undefined，哈雷活跃期还会持续触发顶点缓冲不足警告。主视图不可用，按 L1 封顶。'
    },
    'Opus4.8Ultra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4.5, integrity: 5 }, visualBase: 9.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整稳定的 WebGL2 实现与优秀土星证据；哈雷按规格书密切周期而非额外的 2061 实测回归校正，仍计实际哈雷。'
    },
    'Qwen3.8Max-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 2, integrity: 2 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '开普勒求解和元素变换成立，但环几何实质失效，卫星距离映射也错；拖拽释放会影响聚焦可靠性。'
    },
    'Qwen3.8MaxV2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: .4, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 3, integrity: 3 }, visualBase: 2.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '环、大气与完整轨道源码成立，但粒子场与辉光压倒默认总览；拖拽释放可误选，且没有完整状态与视角重置。'
    },
    'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 4, integrity: 4.5 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: 'J2000 轨道、八颗卫星、双向环影、Bloom/ACES 与持续跟随都很强；但哈雷仍按 75.31 年密切周期推进，却把下次近日点标成 2061-07-28，模型实际约早 50 天，且没有完整视角重置。'
    },
    'Sonnet5Ultra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整的源码、运行覆盖与稳定控制；仅木星略发白且大红斑对比偏低。'
    }
  };
})();
