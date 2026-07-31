/* 评分来自源码审计、统一浏览器实跑与固定口径复核。 */
(function () {
  'use strict';

  window.SCORES = {
    /* 标杆：只给同规则参考分，不参与排名 */
    'Opus5Ultra-WebGL2': {
      reference: true, features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 15, visual: 10, interaction: 5,
      note: '八项功能、双向环影和完整交互均成立；参考分仅因卫星数量尚未达到样本最高档而少量失分。'
    },
    'GPT5.6SolUltra-WebGL2': {
      reference: true, features: 7, orbit: 4, moons: 14, offline: true, halley: false,
      correctness: 15, visual: 9.5, interaction: 5,
      note: '十四颗卫星与完整交互很突出；实现了彗星，但轨道根数并非哈雷，因此不计哈雷功能及加分。'
    },
    'Fable5Max-Three': {
      reference: true, features: 7, orbit: 4, moons: 6, offline: true, halley: true,
      correctness: 15, visual: 7.5, interaction: 4.5,
      note: '没有实际 ACES，近景偏亮；土星环缺少环投向行星的反向阴影，最小缩放也可能进入大型天体内部。'
    },
    'Fable5Max-WebGL2': {
      reference: true, features: 7, orbit: 4, moons: 6, offline: true, halley: false,
      correctness: 14.5, visual: 9.5, interaction: 5,
      note: '实际是恩克彗星而非哈雷；六颗卫星，土星环只有行星投向环的单向阴影。'
    },

    /* 一句话组 */
    'DeepSeek-V4-Flash-0731': {
      features: 7, orbit: 4, moons: 1, offline: false, halley: false,
      correctness: 12.5, visual: 1.5, interaction: 4,
      note: '轨道、材质和控制结构丰富，但小行星带与柯伊伯带把 0–255 色值写入浮点顶点颜色，Bloom 几乎洗白全场；仅一颗月球，三颗彗星均非哈雷，悬停还会触发 Raycaster 异常，聚焦也不会自动拉近。'
    },
    'KimiK3Max': {
      features: 8, orbit: 4, moons: 7, offline: false, halley: true,
      correctness: 14, visual: 7, interaction: 5,
      note: '功能、轨道和交互完整；主要扣分来自联网依赖、环系没有真实阴影，以及中心辉光偏强。'
    },
    'GLM5.2Max': {
      features: 6, orbit: 1, moons: 1, offline: false, halley: false,
      correctness: 13, visual: 4, interaction: 5,
      note: '强 Bloom 让中心大面积发白，行星细节被吞没；轨道真实度低，且所谓大红斑是多枚随机风暴。'
    },
    'Opus_4_8_Max': {
      features: 7, orbit: 4, moons: 8, offline: true, halley: false,
      correctness: 15, visual: 9, interaction: 5,
      note: '表面、夜面、轨道与交互都很完整；主要缺少哈雷彗星和土星环的双向阴影。'
    },
    'GPT5.6SolUltra': {
      features: 6, orbit: 4, moons: 7, offline: true, halley: false,
      correctness: 15, visual: 6, interaction: 5,
      note: '轨道、卫星和交互扎实；固定近景下木星红斑与土星夜面细节难以观察，也没有哈雷彗星。'
    },
    'GPT5.6SolMax': {
      features: 6, orbit: 4, moons: 7, offline: true, halley: false,
      correctness: 15, visual: 6, interaction: 5,
      note: '与 Sol Ultra 一句话版接近；完整可用，但木星与土星近景偏暗，缺少哈雷和真实环影。'
    },
    'GPT_5_5_xhigh': {
      features: 8, orbit: 4, moons: 9, offline: true, halley: true,
      correctness: 14, visual: 2, interaction: 3,
      note: '客观功能、轨道和卫星很强，但最终画面过曝且聚焦距离过远；画布拖拽和点选路径也不一致。'
    },
    'Gemini_3_5_flash_high': {
      features: 6, orbit: 3, moons: 10, offline: true, halley: false,
      correctness: 13, visual: 7, interaction: 5,
      note: '卫星数量最多、交互完整且曝光克制；缺少哈雷、真实夜面，透明环的阴影路径也存在疑点。'
    },
    'Grok4.5': {
      features: 7, orbit: 3, moons: 5, offline: false, halley: false,
      correctness: 14, visual: 7, interaction: 4,
      note: '行星身份、彗尾与大气表现清楚；联网且没有哈雷，pointerdown 拾取可能在拖拽时误选。'
    },
    'GLM_5_1_high-1': {
      features: 5, orbit: 2, moons: 1, offline: false, halley: false,
      correctness: 13, visual: 3, interaction: 3,
      note: '表面主要套用三类模板，无大红斑与真实环影；星空与土星观感粗糙，并缺少完整重置。'
    },
    'GPT5.6TerraUltra-Three': {
      features: 7, orbit: 4, moons: 5, offline: false, halley: false,
      correctness: 13, visual: 6, interaction: 4,
      note: '源码表面与夜面较丰富，但中心辉光明显过强；依赖联网，聚焦动画结束后不会持续跟随。'
    },
    'Qwen3.7Max': {
      features: 7, orbit: 3, moons: 1, offline: false, halley: false,
      correctness: 14, visual: 5.2, interaction: 2.2,
      note: '专用纹理和径向土星环较扎实；太阳烧白，且没有点击聚焦、持续跟随或重置。'
    },
    'Mimo_2_5_Pro_high-1': {
      features: 5, orbit: 1, moons: 1, offline: false, halley: false,
      correctness: 10, visual: 4.2, interaction: 3,
      note: '可以正常运行，但中文天体名让地球、木星等专用纹理分支无法命中；没有聚焦和跟随。'
    },
    'DeepSeek_V4_Pro_high-1': {
      features: 5, orbit: 1, moons: 1, offline: false, halley: false,
      correctness: 13, visual: 2.5, interaction: 1.5,
      note: '多颗行星高光剪切为白色半球，环层次难辨；仅有基础视角控制，没有模拟控制或聚焦。'
    },
    'DeepSeek_V4_Pro_high-2': {
      features: 5, orbit: 2, moons: 0, hasMoon: false, offline: false, halley: false,
      correctness: 9, visual: 6.1, interaction: 4.7,
      note: '视觉和交互相对完整，但没有月球；土星环几何被错误压成细线，而且不能真正暂停。'
    },
    'DeepSeek_V4_Pro_high-3': {
      features: 5, orbit: 1, moons: 1, offline: false, halley: false,
      correctness: 13, visual: 5.8, interaction: 3.8,
      note: '曝光克制且关键行星有专用材质；没有大红斑和真实环影，按钮聚焦也不会持续跟随。'
    },
    'Qwen3.8Max-inQoder': {
      features: 7, orbit: 3, moons: 1, offline: false, halley: false,
      correctness: 14, visual: 2.1, interaction: 2.1,
      note: '太阳与内圈被 Bloom 冲白，行星小且表面趋同；点击只显示资料，不移动镜头，也没有重置。'
    },
    'Qwen3.8MaxV1-inQoder': {
      features: 5, orbit: 3, moons: 1, offline: true, halley: false, canvas: true,
      correctness: 14, visual: 4.8, interaction: 2.4,
      note: 'Canvas2D 画面简洁稳定，但表面与光影较基础；只有悬停资料，没有聚焦跟随，并额外扣 10 分。'
    },
    'LongCat2.0': {
      features: 2, orbit: 1, moons: 1, offline: true, halley: false, canvas: true,
      correctness: 14, visual: 4.6, interaction: 2.6,
      note: '总览清楚，但功能和真实度较少；所谓聚焦只画提示圈，不移动镜头，Canvas2D 额外扣 10 分。'
    },
    'Hy3': {
      features: 5, orbit: 1, moons: 1, offline: false, halley: false,
      correctness: 13, visual: 6.6, interaction: 4,
      note: '表面、红斑和程序化土星环较丰富；轨道真实度低、需要联网、没有真实环影，也不能直接点天体。'
    },
    'MiniMax_M3_thinking-1': {
      features: 6, orbit: 3, moons: 1, offline: false, halley: false,
      correctness: 7, visual: 4.7, interaction: 3.5,
      note: '外行星会明显脱离轨道线，低速区间可产生 NaN，重置也不恢复视角；因此保持“未完成”。'
    },

    /* 详细文档组 */
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 13, visual: 7, interaction: 4,
      note: '八项功能、八颗卫星、双向环影与持续跟随均成立；但卫星距离读数错误，标签和画布拾取投影未计视场角与宽高比，拖拽后仍可能误选。近景常偏暗，土星环默认角度近乎细线，粒子与标签也较拥挤。'
    },
    'Sonnet5Ultra-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 14, visual: 8.5, interaction: 5,
      note: '地球夜面、土星环与双向阴影很突出；木星表面略发白，大红斑对比度稍弱。'
    },
    'GPT5.6SolUltra-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 15, visual: 10, interaction: 5,
      note: '地球云层和夜灯、木星大红斑、土星多层环与双向阴影均清楚，五项交互全部成立。'
    },
    'GPT5.6TerraUltra-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 15, visual: 8.5, interaction: 5,
      note: '表面分类、大红斑、大气夜面与双向环影完整；实际细节明显高于 Luna，但仍低于 Sol。'
    },
    'GPT5.6LunaMax-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 14, visual: 3.5, interaction: 4,
      note: '功能和轨道齐全，但近景天体仍偏小偏暗，木星红斑和土星环层次难以观察；也不持续跟随。'
    },
    'KimiK3Max-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 15, visual: 9, interaction: 5,
      note: '地球夜面、木星云带和土星双向环影均完整，曝光自然；仅大红斑在固定角度下不够醒目。'
    },
    'GPT5.5xHigh-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 15, visual: 8, interaction: 5,
      note: '云带、红斑和双向环影完整，交互也无明显缺项；固定土星角度较侧，整体略暖亮。'
    },
    'GLM5.2Max-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 13, visual: 3, interaction: 3.5,
      note: '客观功能齐全，但全场明显泛白、地球贴图断阶，木星和环影细节被吃掉；拖拽会误选且不持续跟随。'
    },
    'DeepSeekProMax-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 13, visual: 6, interaction: 3.5,
      note: '功能与轨道完整；木星红斑偏灰、土星纹理和环近景异常，拖拽会误触且聚焦后不持续跟随。'
    },
    'LongCat2.0-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 8, visual: 4.5, interaction: 3.5,
      note: '大红斑经度计算使其永远不可见，土星环因半径重复缩放基本消失，太阳信息还会显示 NaN 速度。'
    },
    'Gemini3.5Flash-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 10, visual: 4, interaction: 4,
      note: '小行星带与太阳偏刺眼；红斑会误出现在土星，环阴影混用了坐标空间，且不能直接点画布天体。'
    },
    'Gemini3.6Flash-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 12, visual: 5, interaction: 4.5,
      note: '地球表面呈拼块状，木星红斑不明显；土星环有生硬阴影，拖拽结束还可能误选。'
    },
    'Qwen3.8Max-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 9, visual: 5.5, interaction: 4.5,
      note: '总览清楚克制，但土星环因归一化半径被二次缩放而实质失效，卫星显示距离也有映射问题。'
    },
    'Gemini3.1Pro-TasksAssignedByOpus5': {
      features: 8, orbit: 4, moons: 8, offline: true, halley: true,
      correctness: 13, visual: 5.5, interaction: 3,
      note: '曝光干净但表面分类较基础，只有夜面而缺完整大气；缩放没有最大边界，也不能直接点画布天体。'
    },
    'Hy3-TasksAssignedByOpus5': {
      features: 8, orbit: 3, moons: 8, offline: true, halley: true,
      correctness: 10, visual: 5, interaction: 3,
      note: '土星和环系可辨，但整体被米白辉光洗平；金星半长轴有误，聚焦不持续，“此刻”也使用旧时间。'
    },
    'MiniMaxM3-TasksAssignedByOpus5': {
      features: 8, orbit: 0, moons: 8, offline: true, halley: true, cap: 12,
      correctness: 3, visual: 0, interaction: 4.5,
      note: '白底和巨大黑三角持续遮挡主画面，土星环片元也被全部丢弃；触发致命渲染故障总分上限。'
    }
  };
})();
