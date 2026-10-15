/* 作品评分输入；旧 visualBase 仅保留为历史记录，不参与评分。 */
(function () {
  'use strict';

  window.SCORES = {
    'GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "actualInclinationDeg": 5.144999999969512,
          "expectedInclinationDeg": 5.145,
          "reason": "源码95–101直接以世界黄道参考构造轨道，实际r×v对黄道北为5.145°，正周期27.32166天；不是倾斜的地球赤道面。界面512说明初始相位示意、非卫星历表。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.049999905450823494,
          "expectedInclinationDeg": 0.05,
          "reason": "源码93建立proper母星赤道基，100局部(cosθ,+sinθ sinI,−sinθ cosI)在正周期下r×v沿正确pole；参考面、倾角与周期均有效。圆轨道和明确披露的示意初相不扣分。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.46999988555926986,
          "expectedInclinationDeg": 0.47,
          "reason": "源码93建立proper母星赤道基，100局部(cosθ,+sinθ sinI,−sinθ cosI)在正周期下r×v沿正确pole；参考面、倾角与周期均有效。圆轨道和明确披露的示意初相不扣分。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.19999989833579107,
          "expectedInclinationDeg": 0.2,
          "reason": "源码93建立proper母星赤道基，100局部(cosθ,+sinθ sinI,−sinθ cosI)在正周期下r×v沿正确pole；参考面、倾角与周期均有效。圆轨道和明确披露的示意初相不扣分。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.18999989880982077,
          "expectedInclinationDeg": 0.19,
          "reason": "源码93建立proper母星赤道基，100局部(cosθ,+sinθ sinI,−sinθ cosI)在正周期下r×v沿正确pole；参考面、倾角与周期均有效。圆轨道和明确披露的示意初相不扣分。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "actualInclinationDeg": 0.35000113049625053,
          "expectedInclinationDeg": 0.35,
          "reason": "源码93建立proper母星赤道基，100局部(cosθ,+sinθ sinI,−sinθ cosI)在正周期下r×v沿正确pole；参考面、倾角与周期均有效。圆轨道和明确披露的示意初相不扣分。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "actualInclinationDeg": 156.9000017053521,
          "expectedInclinationDeg": 156.9,
          "reason": "源码99将倾角折为23.1°并保留负周期−5.876854天，配合100的proper局部方向，实际有向法线对Neptune pole为156.9°，是真逆行，没有二次反转。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "actualInclinationDeg": 0.08000120147516103,
          "expectedInclinationDeg": 0.08,
          "reason": "源码93/100–101围绕几何Pluto pole构造正周期轨道，实际相对pole有向倾角0.080001°，符合Charon；不以母星负rotH产生的错误自转当轨道基准。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 1
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "按详细任务原文复核：自包含原生WebGL2实现JPL世纪率/Kepler、8颗有效卫星、哈雷、双向环影、17900个运动带粒子、视线撞击参数密度大气及HDR/Bloom/最终ACES。512个等偏近点角样本与实体轨道同源，哈雷近日点最大压缩弦偏差0.0191显示单位，小于彗核半径0.22，路径有效。任务2.2/3.6明确给定大倾角转轴、负自转周期及有符号自转公式，7.11要求每帧限速；实现遵从，不将这些任务预设组合的物理矛盾扣给模型。第6节/8.1只要求暂停、倒放、改期与跳回此刻，均已完成，没有要求全状态复位。拖拽抑制误点、聚焦和持续跟随有效；聚焦缩放下限1.45R安全，但全景下限0.5可进入半径4.6的太阳，作为实际缩放可用性缺陷给予部分分，而非声称任务明文要求碰撞限制。8颗卫星参考面、周期及有向法线均有效；卫星示意初相和2061年哈雷二体外推均有披露。HDR可降级RGBA8，实际支持4×MSAA，实跑GL0且无JS错误，无致命故障。"
    },
    'Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 0.05,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 0.47,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 0.2,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 0.19,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L671–693 以实际黄道或母星赤道为参考，r×v有向倾角匹配基础轨道数据。",
          "actualInclinationDeg": 0.35,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L671–693 倾角156.9°直接产生逆行，周期取绝对值推进，无重复翻转。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L671–693 实际有向法线与冥王星几何极相差0.08°，黄道倾角112.768913°；不采用母星错误自转符号。",
          "actualInclinationDeg": 0.08,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用 JPL 世纪率/开普勒行星轨道、8颗有效卫星、哈雷、双向环影、动态小天体带、视线积分大气和 HDR/Bloom/ACES。逐颗核对实际有向法线，月球、海卫一及卡戎方向均正确；只实现8颗，无超额卫星或其他彗星奖励。哈雷轨道线用512个等平均近点角样本，近日点附近折线距真实位置最大约6.465显示单位，路径拟合部分计分，不重复扣开普勒或哈雷。金星、天王星和冥王星的逆行几何轴再配负自转周期，实际自转方向双反，数据项扣分，不扣卫星。地球聚焦后相机能缩到0.3，小于显示半径0.72；支持持续聚焦跟随、暂停与日期跳转，总览和此刻只分别恢复镜头或日期，无完整复位。",
      "reviewedAt": "2026-10-12",
      "reviewVersion": "V3-20261012"
    },
    'Haiku5.5(Ultracode·Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 22,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用 JPL 世纪率/开普勒行星轨道、Meeus 月球、22 颗已绘制卫星、哈雷、双向土星环影、动态小天体带和 HDR/Bloom/ACES。土卫八错误使用 Laplace 面倾角；五颗天王星卫星采用正平均角速度绕 IAU 北极，却未匹配天王星负 Wrate，剔除这六颗后计 16 颗有效，超额卫星奖励仍满；卡戎与 Pluto 的正 IAU Wrate 匹配，仍计有效，不重复扣数据项。月球轨道线缓存 1200 天，500 天后路径偏差约 16991 km，路径拟合部分计分。大气是边缘辉光；海卫一轨道逆行正确，但同步自转方向/朝向错误，土卫七被错误同步自转，数据项扣分。支持安全缩放与持续跟随，暂停停止公转和自转，重置视角和回到现在分离，无完整复位。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "phobos",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "deimos",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "mimas",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "enceladus",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "tethys",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "dione",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "rhea",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "hyperion",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "Laplace面7.57°被当作土星赤道倾角"
        },
        {
          "id": "miranda",
          "quality": 0,
          "reason": "正meanrate绕IAU north但母星signedWrate负，方向错误"
        },
        {
          "id": "ariel",
          "quality": 0,
          "reason": "正meanrate绕IAU north但母星signedWrate负，方向错误"
        },
        {
          "id": "umbriel",
          "quality": 0,
          "reason": "正meanrate绕IAU north但母星signedWrate负，方向错误"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "正meanrate绕IAU north但母星signedWrate负，方向错误"
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "正meanrate绕IAU north但母星signedWrate负，方向错误"
        },
        {
          "id": "charon",
          "quality": 1,
          "reason": "Pluto DATA Wrate=+56.3625225，Charon正meanrate绕IAU north正确"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "Haiku5.5(Ultracode)V1": {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 6,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js r160 使用 JPL 世纪率/开普勒行星轨道、Meeus 月球、四颗木卫和土卫六，六颗卫星的基本参考面与方向成立。哈雷、两类动态小天体带、HDR/Bloom/ACES 和持续聚焦跟随均有实现。地球运动正常，但轨道绘制把 earth 改传成 BODIES 中不存在的 emb，轨道线退化到太阳，其余路径有效，路径拟合给部分分，不重复扣运行正确性。环无双向物理阴影，大气是边缘辉光；近距缩放可穿入天体，复位仅恢复镜头。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5": {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1199: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L1158/L1199: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计7颗有效；视觉不计分。行星、带、环影、视线大气、HDR/Bloom/ACES与交互成立；月球和海卫一实际法线正确。Pluto几何pole已是112.8度，moonFrame再按负rotH翻转使Charon黄道倾角67.2737度，剔除该颗。预设相位与真实相位宣传不符；此刻只改日期。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "GPT6Astra(Light)V1": {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 0,
      "hasEarthMoon": false,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL1 使用 JPL 世纪率/开普勒轨道，行星与轨道线同源，支持持续聚焦跟随和按半径限制缩放。小行星带为静止点阵；土星只有行星投向环的单向阴影，大气是表面边缘辉光，均给部分功能分。太阳光晕是加法 billboard，没有实际 Bloom/ACES，没有卫星或彗星。暂停只停止模拟时间，“此刻”和全景分别恢复日期或镜头，缺少完整状态复位。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "GPT6Astra(Medium)V1-TasksAssignedByOpus5": {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L44: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L30/L44: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计8颗有效；视觉不计分。实际负Z局部轨道、右手基与海卫一绝对周期加大倾角的组合正确，8颗均有效。JPL元素、GPU带、双向环影、大气和后期有效，跟随和目标半径缩放有效；唯一明确交互缺项为此刻单独改日期。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "GPT6Luna(Max)V1": {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 Canvas2D 使用 JPL 世纪率/开普勒轨道，行星与轨道线经过同一投影，小行星带随模拟时间运动。月球按 27.32 天周期在地球旁做屏幕空间椭圆，不随三维镜头旋转，维持半颗有效卫星。土星环和大气只为示意，没有彗星及实际 Bloom/ACES。拖拽与缩放可用，点击行星只更新参数和选中标记，没有镜头聚焦或持续跟随；暂停可用，复位只恢复视角。Canvas2D 本身不另扣分。",
      "moonQuality": 0.5,
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    "GPT6Luna(Max)V1-TasksAssignedByOpus5": {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L232最终updateSim覆盖L193：Moon先构造黄道[costheta,sintheta*cosI,sintheta*sinI]，再直接eclWorld映射；无二次AU压缩。有向黄道倾角5.145°，有效。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L74/L193: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：以文件尾部最终生效覆盖为准，实现8颗卫星、7颗方向有效。L232的updateSim已修正旧L193月球分支，月球参考面与距离正确；左手赤道基下海卫一负周期配156.9度仍给出顺行法线，剔除该颗。行星、哈雷、环影、大气与后期有效。L231最终selectedRawPosition和L233最终updateLiveInfo已修正旧的哈雷/卫星实时坐标路径；只对固定周期与7月底回归文案不符保留data扣分。L230选择哈雷仍清空camera.follow，L232中的哈雷跟随分支不能由该UI到达，follow部分分；此刻不是完整重置。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Sonnet5.5(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 67,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 3,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用 DE441 初值与 IAS15/1PN N 体积分，主要行星和月球由同一动力学引擎推进，其他卫星从星历锚点传播并插值，轨道面与逆行方向随实际状态向量建立。67 颗卫星、哈雷及超过三颗独立额外彗星、双向环影、动态小天体带、HDR/Bloom/ACES、真实光程大气散射与持续跟随均有实现。哈雷固定二体根数预测下一近日点约 2062-01-08，与页面 2061-07-28 的说明不一致，数据项保留扣分。“现在”和恢复默认设置分离，后者仅恢复显示参数，没有完整状态复位；两类额外奖励各按三分上限，T0 另加三分。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Opus5(Max)V1': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 21, hasEarthMoon: true, halley: true, otherComets: 2,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: null,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '原生离线 WebGL2，采用 JPL 世纪率与开普勒求解，包含 21 颗卫星、哈雷等 3 颗彗星、行星环、小天体带、Bloom/ACES 与大气，并提供显示、比例、成像及画质控制。'
    },
    'Fable5.1(Max)V1': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 18, hasEarthMoon: true, halley: true, otherComets: 3,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: null,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '原生离线 WebGL2 实现真实比例、18 颗卫星、4 颗彗星、大陆轮廓、Bloom/ACES、环影与大气，提供天象跳转和渲染性能设置。第0梯队额外补证 +3。'
    },
    'Qwen3.8Flash(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 0.5,
        "elements": 1,
        "orientation": 1,
        "epoch": 0.5
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 9,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": false,
      "otherComets": 1,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 的行星椭圆、运动带、Bloom/ACES、九颗卫星示意与独立周期彗星可运行。开普勒迭代混用归一化初值与未归一化平均近点角，当前彗星残差约1.75弧度；起始日期还偏移3.5天，分别只扣求解和历元。卫星采用统一零相位、简化距离与黄道参考面，其中月球黄道参考面成立，其余八颗把母星赤道面错误替换为黄道面，计为无效。环只有行星投向环的阴影，大气为表面边缘光；行星照明混用局部法线与世界光向，缩放可穿入大天体，复位仅镜头。实际后期需要半浮点，场景无MSAA。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 1,
          "reason": "150/569/814–815:5.1° applied to unrotated ecliptic XZ plane; idealized circular orbit with actual period accepted."
        },
        {
          "id": "Phobos",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Deimos",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Io",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Europa",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Ganymede",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Callisto",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Titan",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        },
        {
          "id": "Triton",
          "quality": 0,
          "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane)."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 0,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1215: 实际world轨道r×v有向黄道倾角84.855°，期望5.145°。",
          "actualInclinationDeg": 84.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计6颗有效；视觉不计分。升交点基准角未转弧度且变化率遗漏世纪因子；只在轨道方向项扣分。月球近竖直参考面、海卫一方向错误按逐颗卫星处理。哈雷计算周期与7月底文案不符，缩放可穿入；此刻仅恢复日期。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Hy4Preview(high)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 18,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": true,
      "otherComets": 2,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 使用完整 JPL 世纪率与归一化开普勒求解，提供18颗卫星示意、哈雷/恩克/67P、运动双小天体带及Bloom/ACES。环仅解析行星投影，未向行星投影；大气为方向性边缘辉光。卫星随机初相并统一置于母星简化赤道面，月球的黄道倾角因此套错参考面，地球月球计为无效，其余17颗理想化圆轨道仍计有效；卫星轨道线又遗漏各自倾角，路径匹配部分分。密度把kg/m³标为g/cm³，金星/天王星自转符号与大于90°倾角重复反转，数据部分分。近距缩放可穿入天体，没有完整复位。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "457/1437/2230–2235:ecliptic5.145° wrongly applied insideEarth23.44°tiltGroup."
        },
        {
          "id": "Phobos",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Deimos",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Mimas",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Enceladus",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Tethys",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Dione",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Rhea",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Iapetus",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Titania",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Oberon",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Triton",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        },
        {
          "id": "Charon",
          "quality": 1,
          "reason": "450–487/1437/2230–2235:actualparent-relativeorbit radii/periods and declaredinclination applied to modelparent-equator; idealizedcircles/randomphase alone notdeducted. Triton usesnegativeperiod with23°inclination once."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Hy4Preview(high)V2': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 13,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 提供完整JPL世纪率、稳健开普勒、真实哈雷、运动小天体带、双向环影及Bloom/ACES。13颗卫星中，月球在黄道面作近似运动可计有效，其余12颗把相对母星赤道的倾角套到黄道面，海卫一还同时用负周期与156.8°倾角，均计无效而不重复扣data。大气仅方向性边缘光；金星、天王星和冥王星把负自转周期与翻转轴重复使用，数据部分分。目标半径限制缩放、聚焦和跟随成立，宽景与此刻按钮分别只恢复镜头或时间，缺完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "469/1404/2051–2063:Moon5.145° applied to global ecliptic; acceptableidealizedelliptical/circular model."
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "rhea",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "515/2051/2058–2063:negativeperiod plus156.8°inclination reversesretrograde twice, alsoeclipticinsteadNeptuneequator."
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "1402–1404/2058–2063:moon translation group is childofplanetgroup, nottilt; declaredparent-equatorial inclination thereforeappliesinecliptic."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Hy4Preview(high)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1863: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计2颗有效；视觉不计分。环双向投影与视线大气均有实际实现，撤销纯视觉造成的rings和integrity扣分。右手赤道基配正Z轨道使普通卫星反向；月球和海卫一方向反而正确。卫星rotH误填公转天数再除24，自转快24倍；滚轮下限0.16可穿入。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Hy4Preview(high)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1573: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。双向环影完整，旧环明暗/辉光观感不计分。卫星正Z相位与右手基使普通赤道卫星方向颠倒，月球也逆行；仅海卫一有向法线符合要求。此刻仅改日期，缩放安全边界不足。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3Flash(Max)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 9,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网Three.js采用真实固定J2000根数、稳健开普勒和同源轨道采样，九颗卫星、真实哈雷、运动双带、Bloom/ACES及聚焦跟随成立。月球以toEcliptic:true放在黄道参考面，其余卫星在母星赤道面作理想化圆轨道，均有效。环为透明几何而无物理投影，大气只是壳层边缘光；天王星和冥王星负自转符号与翻转轴重复使用，数据部分分。全局缩放下限1.4可进入大天体，宽景和此刻分别只复位镜头或时间，缺完整重置；使用FXAA而非场景MSAA，半浮点后期无回退。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 1,
          "reason": "249toEcliptic:true/985–986/1138–1141:5.14°inclinationoutsideEarthtiltgroup,correcteclipticreference."
        },
        {
          "id": "Phobos",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Deimos",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        },
        {
          "id": "Charon",
          "quality": 1,
          "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3Flash(Max)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1654: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。",
          "actualInclinationDeg": 95.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。球面环影使用世界长度而未除显示半径，环影尺度错误故rings部分分；月球有向倾角95.145度。赤道卫星按实际基手性逐颗处理。聚焦和按显示半径限制缩放成立；旧曝光/颗粒观感不扣分。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3Flash(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 6,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线WebGL2使用完整JPL世纪率、开普勒及同源采样，六颗卫星、运动小天体带、实际Bloom/ACES和安全聚焦跟随有效。月球通过eq:false独立黄道参考面，其他五颗在母星赤道面，均有效。标为哈雷的运动把角度转弧度写成除法，速度快约3283倍，不计哈雷且不转其他彗星。环投向行星的交点未限制环内外半径，产生整片半球遮光，只给部分环分；大气仅方向性边缘光。彗尾指向太阳、逆向时间时自转未反向，金星/天王星符号又重复反转，数据部分分。可RGBA8回退且无MSAA，缺完整复位。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 1,
          "reason": "252eq:false/1280–1283:5.1°eclipticinclinationoutsideEarthtilt,small-angleheightapproxaccepted."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "253–258/1280–1283:actualperiod/inclinationappliedinsideparent-equatorialbasis;circlesaccepted."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "253–258/1280–1283:actualperiod/inclinationappliedinsideparent-equatorialbasis;circlesaccepted."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "253–258/1280–1283:actualperiod/inclinationappliedinsideparent-equatorialbasis;circlesaccepted."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "253–258/1280–1283:actualperiod/inclinationappliedinsideparent-equatorialbasis;circlesaccepted."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "253–258/1280–1283:actualperiod/inclinationappliedinsideparent-equatorialbasis;circlesaccepted."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3Flash(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1674: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。",
          "actualInclinationDeg": 95.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计6颗有效；视觉不计分。Halley计算值写入临时数组后没有更新主体位置，哈雷功能不成立。点状兼容路径使环连续结构仅部分有效；但主行星和控制仍运行，撤销仅视觉降级造成的L2。月球近竖直；其余卫星据实际左手基方向计数。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GPT5.6Sol(Medium)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 0,
      "hasEarthMoon": false,
      "earthMoonValid": false,
      "moonEvidence": [],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000 开普勒轨道、粒子带、选择与跟随有效；没有卫星或哈雷。环、太阳辉光及大气边缘色为简化效果，未实现 Bloom 后处理或 ACES；行星自转方向与公转关系错误，返回全景不重置模拟。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L66-67：Moon的+sinZ在proper黄道map中逆行；Triton负period+156.9°在左手basis双翻为顺行。",
          "actualInclinationDeg": 174.855
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L66-67：Moon的+sinZ在proper黄道map中逆行；Triton负period+156.9°在左手basis双翻为顺行。",
          "actualInclinationDeg": 23.1
        },
        {
          "id": "charon",
          "quality": 1,
          "reason": "L65-67：左手basis z=axis×x，使+sinZ的顺行赤道卫星r×v=+axis，参考面有效。",
          "actualInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000、哈雷与粒子带成立；八颗卫星中六颗顺行赤道卫星有效，月球反向、海卫一双翻。环仅单向阴影，大气与太阳辉光为近似，未实现 ACES。哈雷420等M轨道线近日点粗疏，部分行星自转反向；聚焦不跟随，拖拽会误点，缩放可进入太阳。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(Light)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0,
        "bloom": 0.4,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L111：Moon y=.12sin(.7M)并非固定5.145°地心轨道，基础面与周期不一致。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 1,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生 WebGL2 用开普勒位置驱动公告板行星，带环、太阳辉光和边缘光近似；无小行星带、ACES、哈雷。半长轴与相位为展示值，月球高度使用另一频率摆动，不构成有效轨道。聚焦固定在点击时位置，拖拽结束会误点选；全景仅恢复镜头。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(Light)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L38：Moon+sinZ在proper黄道map下逆行；Triton负period+156.9°经左手basis后方向错误。",
          "actualInclinationDeg": 174.855
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L38：Moon+sinZ在proper黄道map下逆行；Triton负period+156.9°经左手basis后方向错误。",
          "actualInclinationDeg": 23.1
        },
        {
          "id": "charon",
          "quality": 1,
          "reason": "L37-38：左手axisBasis使+sinZ的顺行赤道卫星方向有效。",
          "actualInclinationDeg": 0.080001
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 有 J2000、哈雷、粒子带与六颗有效赤道卫星；月球和海卫一方向错误。环为线条，大气为边缘光，没有实际 Bloom 或 ACES。哈雷220等M轨道线粗疏；表面模型不更新自转，卫星与哈雷读数误用显示距离。聚焦不跟随，缩放可进入太阳，仅此刻日期恢复。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'DoubaoSeedEvolving0827(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 0.5,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用固定 J2000 根数与开普勒方程，行星及轨道线同源，小行星带、Bloom/ACES 和持续聚焦跟随有效。轨道点采用 x/z 正向映射，却使用标准右手 Ry(node) 与 Ry(peri) 定向，导致节点和近心点角符号相反；倾角有实现，定向只给部分分，不再因同一坐标手性问题重复扣历元或数据项。土星环只有行星投向环的单向阴影，大气为边缘光。八颗名义卫星中，月球错误使用地球赤道面，海卫一缺少真实轨道倾角，剔除两颗后计六颗有效，月球有效性另扣两分。没有彗星；暂停可用，缺少完整状态复位。",
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "错误地使用地球23.44°赤道面，而非黄道附近5.145°"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "rhea",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "母星赤道面基本成立，周期方向正确"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "只在海王星赤道面逆行，缺少真实23.1°轨道倾角"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L342: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L226/L342: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。环双向投影和后期有效。右手基正Z使月球及普通顺行卫星方向错误；海卫一有向法线正确。离子尾向量朝向太阳属于独立渲染完整性问题；7月底日期文案不符。缩放可穿入，仅日期恢复。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GPT5.6Sol(high)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L338/382：月球绕地球的5.1°黄道圆轨道与27.32天周期有效。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L337-340/382：以全球黄道面直接倾斜，未继承母星赤道；Triton负周期与157°双翻导致错误法线。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的开普勒轨道、Bloom、ACES、小行星带及聚焦跟随有效；行星没有历元相位，八颗绘制卫星仅月球的参考面有效。环无互投影，大气为边缘光；自转相对行星公转方向存在错误，复位仅重置镜头。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    /* 一句话组（含三个金色参考作品） */
    'DeepSeek-V4-Flash-0731': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0.5
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L335/L348–358/L854–867/L1171–1173：5.145°黄道根数独立于地球倾斜自转，27.322日开普勒轨道；与各行星使用同一坐标映射。"
        }
      ],
      "halley": false,
      "otherComets": 3,
      "correctness": {
        "runtime": 4,
        "data": 3.5,
        "integrity": 3
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "九天体使用焦点椭圆、开普勒求解和倾角/节点/近心点，但部分J2000 M0混用了平均经度，且零时相差半日，历元部分分。月球独立黄道5.145°根数和27.322日周期有效。土星环无真实投影；粒子带只修改CPU数组未标记上传，首帧后不运动；Bloom/OutputPass ACES有效，大气是sprite辉光。三条独立彗星轨迹存在但彗核sprite未赋位置，完整性部分分。行星逆行轴与负转速叠加。行星只有sphere而拾取表读取mesh，悬停点击会报错；侧栏仍可目标跟踪。暂停有效，复位仅镜头；无浮点回退和场景MSAA。 Sun半径7大于水/金/地各自最大日距加实体半径2.367/3.863/5.067，三内行星完全被太阳遮住，计完整性扣分，不升级fatal。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'DeepSeek_V4_Pro_high-1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L445/L490/L574–581：Moon pivot挂在随机倾斜且自转的Earth mesh下，轨道面随父公转/自转变换，不是独立黄道月球参考面。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0
      },
      "fatal": null,
      "note": "联网Three.js提供八颗行星的示意圆轨道、运动小行星带与Bloom，土星环只是受光透明几何，没有物理环影。没有真实根数、开普勒变速或历元；唯一月球继承随机地球倾斜与自转，计无效，不在数据项重复扣分。行星自转速度和轴倾为任意值，金星等方向错误。仅有拖拽缩放，没有聚焦、跟随、暂停或复位；最小距离5大于最大实体半径。半浮点后期无回退，离屏场景无MSAA。  实际Bloom输出先用MeshBasicMaterial对base执行ACES，再叠加未经统一映射的Bloom，故ACES为0.4部分分。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'DeepSeek_V4_Pro_high-2': {
      "reference": false,
      "featureMap": {
        "rings": 0,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 0,
      "hasEarthMoon": false,
      "earthMoonValid": false,
      "moonEvidence": [],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星按近似周期沿圆轨道运动，倾角存在但相位随机，没有开普勒变速与历元。静态轨道线未复现随相位变化的完整Euler变换，路径部分吻合。RingGeometry用setXY写三个坐标，第三项被忽略，土星环退化为直线，环项为零。运动带和Bloom有效；后期缺少OutputPass，ACES部分有效；大气是边缘辉光。无卫星、哈雷或其他彗星。自转速度随机且不随模拟倍率变化；没有暂停按钮，R仅复位镜头；聚焦只平滑改变观察目标，未保持镜头相对位置。半浮点后期无回退、无场景MSAA。 实际Bloom输出先用MeshBasicMaterial对base执行ACES，再叠加未经统一映射的Bloom，故ACES为0.4部分分。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'DeepSeek_V4_Pro_high-3': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 0,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L615–626/L756：Moon为全球XZ面圆轨道，缺少5.145°倾角和节点；3D月球不合格。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星使用近似周期的示意圆轨道，实体与轨道线一致；没有偏心根数、开普勒变速、轨道节点或历元。土星环和静态小行星带为部分实现，ACES直接渲染有效，没有Bloom，大气仅透明壳。唯一月球固定在黄道0°面，缺少倾角与节点，计无效。行星统一任意自转速度，物理数据部分分。点击聚焦为一次固定目标运镜，没有持续跟随；速度归零仍自转，复位只恢复镜头。直接渲染不要求浮点颜色附件，画布MSAA开启。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GLM5.2Max': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L788–794/L1013：Moon固定全球XZ面，缺少5.145°倾角/节点，周期也仅任意0.9rad/s。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 2.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星按近似公转周期沿示意圆轨道运动，实体与路径一致；没有开普勒变速、倾角/节点与历元。运动小行星带、Bloom及OutputPass ACES有效，环无物理环影，大气只是Fresnel边缘辉光。Moon缺倾角、节点且周期任意，计无效。自转周期公式取了反比后又相除，水星反比地球快58.6倍，金星和天王星另有轴倾负速双翻，数据部分分。最小缩放8小于太阳半径12，能进入太阳。聚焦运镜有效，后续只跟随目标点；速度0停行星但复位只镜头。浮点后期无降级，无场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GLM5.3(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 15,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网Three.js实现完整JPL世纪率、开普勒及匹配轨道，运动双小天体带、Bloom/ACES和4×场景MSAA成立。15颗卫星中月球错置地球赤道、海卫一仅反向赤道圆轨道而缺少约23°倾角，计无效，其余13颗理想化母星圆轨道有效，不因圆轨道自扣。双向环影代码存在，但世界环法线始终未随倾斜环更新，故只给部分分；大气为方向性边缘壳光。金星/天王星/冥王星自转符号重复翻转，数据部分分；无哈雷，未聚焦缩放可进入太阳，复位不完整。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "306/1117/1195/1587–1593:MoonorbitinsideEarthtiltGroup;wrongEarth-equatorialplane."
        },
        {
          "id": "Triton",
          "quality": 0,
          "reason": "401/1195/1587–1593:negativeperiodcreates180°retrogradeequatorialcircle,not~157°Tritonplane."
        },
        {
          "id": "Phobos",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Deimos",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Enceladus",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Rhea",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Miranda",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Titania",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Oberon",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        },
        {
          "id": "Charon",
          "quality": 1,
          "reason": "319–417/1191–1208/1587–1593:actualperiodswithidealizedparent-equatorialcircles;nodata-generatedwrongreferenceframe,minor omittedinclinationsnotalonepenalized."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3(Max)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网Three.js用完整JPL世纪率、归一化开普勒和同源采样绘制匹配轨道，七颗卫星、真实哈雷、运动小天体带、Bloom/ACES与4×场景MSAA成立。月球特意挂在未倾斜地球系统并加5.14°黄道倾角，海卫一用负周期与23°倾角只反转一次，均有效。环只有透明受光几何，没有物理投影，大气仅Fresnel壳光；金星/天王星自转重复反转，地球夜光贴图作为不分昼夜的emissive使用，数据部分分。安全缩放、聚焦跟随成立，此刻只复位时间，缺完整重置。旧画面曝光与外观扣分移除。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 1,
          "reason": "310/1023–1024:pivot5.14°attachedtosysinsteadEarthtiltG,correcteclipticreference."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "323–338/1024/1413–1414:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "323–338/1024/1413–1414:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "323–338/1024/1413–1414:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "323–338/1024/1413–1414:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "323–338/1024/1413–1414:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "Triton",
          "quality": 1,
          "reason": "350/1023–1024/1413–1414:negativeperiodplus23°inclinationgivescorrect157°retrograde,attachedNeptunetiltG."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3(Max)V3': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 10,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": true,
      "otherComets": 1,
      "correctness": {
        "runtime": 4,
        "data": 4,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线WebGL2的JPL世纪率、开普勒、匹配轨道、运动双带、哈雷/恩克、Bloom/ACES与跟随成立。十颗卫星中月球错误挂在地球赤道面，计无效，其余九颗母星圆轨道含只反转一次的海卫一有效。环投向行星的射线计算混用归一化光向与未归一参数，只给部分环分；大气为方向性边缘光。活动彗尾漏绑VAO产生GL_INVALID_OPERATION，runtime部分分；场景FBO无深度附件导致遮挡依绘制顺序，单独计完整性部分分。金星/天王星/冥王星自转重复翻转，哈雷推算2061-06-05却标7月，仅扣data。安全缩放成立，无完整重置，视觉不扣分。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "302/1277–1283:tiltX0insideEarthparenttilt23.44°;Moonwrongreferenceplane."
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "enceladus",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "rhea",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "titania",
          "quality": 1,
          "reason": "306–340/1277–1283:actualperiodsidealparent-equatorialcirclesaccepted."
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "337/1279–1283:negativeperiodwith23°tiltinsideNeptuneequatorcorrectsingleinversion."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1518: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。真实元素与Kepler、运动带、视线大气和后期成立。月球及多数赤道卫星有向法线颠倒，仅海卫一方向正确。旧点状轨道与光晕外观不计分；此刻只恢复日期，7月近日点文案与周期推算不符。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM5.3(Max)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L633: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L386/L633: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计0颗有效；视觉不计分。程序具有离屏MSAA、环影和后期。源码LINEAR解析需结合实际FBO判定，主任务已确认本机GL0与持续渲染，不能据此判fatal。月球及赤道卫星实际方向均不符合给定轨道方向；滚轮0.05可穿入，缺完整复位。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GLM_5_1_high-1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L360/L427/L577–580：Moon挂在倾斜23.44°且自转的Earth mesh下，而月球应使用黄道约5.145°参考；无效。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网Three.js使用太阳位于焦点的椭圆与近似周期、偏心率，但直接匀速推进参数角，没有开普勒求解、节点方向或真实历元。轨道线和实体位置同源。只有静态小行星带；Bloom有效，ACES部分有效，土星环无物理投影，没有行星大气。唯一月球挂在地球倾斜自转mesh上，计无效。金星和天王星轴倾与负自转叠加，方向重复翻转，数据部分分。聚焦与持续镜头跟随成立；暂停只停公转，行星和月球仍自转，没有完整复位。半浮点后期无回退，场景无MSAA。  实际Bloom输出先用MeshBasicMaterial对base执行ACES，再叠加未经统一映射的Bloom，故ACES为0.4部分分。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 10,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L1965/2026：月球地心5.145°黄道圆轨道与真实周期有效。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "rhea",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L2026-2043：只将全球XZ圆轨道绕Y转parent.tilt*.2，没有继承真正赤道轴；Triton方向/参考面错误。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000 行星轨道、Bloom、ACES、粒子带与持续聚焦有效；十颗绘制卫星仅月球的基本参考面正确。卫星轨道线与实际位置的倾角符号不一致，环无双向阴影，大气只是边缘光；行星表面自转方向存在错误，缩放可进入大行星，返回总览不重置时间与速度。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6SolUltra-WebGL2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 14,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 5.16
        },
        {
          "id": "phobos",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 1.1
        },
        {
          "id": "deimos",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 1.800001
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.000001
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.500001
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.299999
        },
        {
          "id": "enceladus",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.000002
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 0.300001
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "L68-82/150-151：天卫使用IAU north而未按Uranus负Wrate改变有向法线，实际175.6/179.9/179.9°相对物理spin；Iapetus 7.6°为JPL Laplace元素，却套Saturn赤道面，缺少14.8°参考面变换。",
          "actualInclinationDeg": 7.600001
        },
        {
          "id": "miranda",
          "quality": 0,
          "reason": "L68-82/150-151：天卫使用IAU north而未按Uranus负Wrate改变有向法线，实际175.6/179.9/179.9°相对物理spin；Iapetus 7.6°为JPL Laplace元素，却套Saturn赤道面，缺少14.8°参考面变换。",
          "actualInclinationDeg": 175.599999
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "L68-82/150-151：天卫使用IAU north而未按Uranus负Wrate改变有向法线，实际175.6/179.9/179.9°相对物理spin；Iapetus 7.6°为JPL Laplace元素，却套Saturn赤道面，缺少14.8°参考面变换。",
          "actualInclinationDeg": 179.9
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "L68-82/150-151：天卫使用IAU north而未按Uranus负Wrate改变有向法线，实际175.6/179.9/179.9°相对物理spin；Iapetus 7.6°为JPL Laplace元素，却套Saturn赤道面，缺少14.8°参考面变换。",
          "actualInclinationDeg": 179.9
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L150-151：Moon用黄道5.16°、其他有效卫星用正确母星参考面/周期/方向；纯函数r×v验证。",
          "actualInclinationDeg": 157.300001
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生 WebGL2 的真实根数、IAU自转、Bloom/ACES、粒子带与聚焦跟随成立；十四颗绘制卫星中十颗有效，三颗天卫方向反向，土卫八误用拉普拉斯参考面。环只有母星投影，大气为边缘光；泛称彗星没有哈雷参数且没有日期运动，不能获得彗星奖励。返回全览及参考时间不是完整状态复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6SolUltra': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 14,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L790-797：Moon -sinZ、5.14°黄道圆轨道及真实27.3217天有效。"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "miranda",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L790-799：卫星只在全球黄道基础面倾斜，未套母星赤道，不能把名义倾角当实际参考面；Iapetus同样无Laplace变换。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "打包 Three.js 的 J2000 开普勒轨道、ACES、粒子带和持续聚焦成立；实际绘制十四颗卫星，仅月球参考面有效。卫星轨道线与实际倾面不一致，环和大气只是纹理/边缘光，未实现 Bloom。泛称彗星不是哈雷；参考时间与总览分别恢复，没有完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 13,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "phobos",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "deimos",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "io",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "europa",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "ganymede",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "callisto",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "titan",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "enceladus",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "rhea",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "titania",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "oberon",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        },
        {
          "id": "triton",
          "quality": 0.5,
          "reason": "L902-916：Canvas2D明确示意绘制，保留正确母体和周期；高度另用.87频率，未实现固定真实轨道参考面，给半颗质量。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "Canvas2D 版有开普勒行星轨道、粒子带、选择与持续锁定；十三颗卫星为示意运动，按每颗半份质量计入。行星相位不是真实历元，卫星轨道线与高度运动不一致；环和大气为绘图近似，无 Bloom、ACES或哈雷。返回全景不重置模拟。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(xhigh)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 11,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L177：统一全球XZ加sin(.37angle)高度；无固定轨道倾角/赤道参考面，Moon也不是5.145°地心平面。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000 开普勒轨道、Bloom、粒子带与跟随成立；十一颗卫星统一使用摆动高度，均没有有效固定轨道参考面。环无互投影，大气是边缘光，色调映射为指数近似；行星自转方向相对公转错误。只有此刻/总览恢复，没有完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(xhigh)V3': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L1160/1269-1277：Moon地心5.1°黄道圆轨道周期有效。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L1269-1277：卫星只相对全球黄道面倾斜，没有母星赤道，Triton负period与157°方向不成立。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生 WebGL2 的 J2000 开普勒轨道、Bloom、双粒子带与持续聚焦有效；七颗卫星只有月球基础参考面正确。环无双向阴影，大气为边缘光，色调映射为非 ACES近似；表面自转相对公转反向。缩放可进入太阳，重置只覆盖镜头。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6TerraUltra-Three': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L792-799/1116：Moon pivot固定rotation.z=.1再动画rotation.y，Euler XYZ产生不经过母星的偏置圈，非有效月球轨道。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 的日期根数、开普勒轨道、Bloom/ACES与聚焦有效；木星卫星配置被数组覆盖，实际只绘制一颗月球，其 Euler偏置圈无效。环无互投影、大气仅边缘光；表面自转倍率错误且暂停时仍动。聚焦动画后不跟随，只有此刻日期恢复。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT_5_5_xhigh': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 9,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "L4056：所有satellite pivot设置rotation.z=inclination后动画rotation.y，Euler XYZ产生非中心偏置圈，且赤道卫星没有母星pole参考。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 1
      },
      "fatal": null,
      "note": "打包 Three.js 有真实日期六根数、哈雷、Bloom/ACES与双粒子带；九颗卫星的 Euler偏置圈均不成立，环无双向阴影，也没有大气层实现。表面自转参考轴不正确；pointerdown直接选择会干扰拖拽，镜头每帧回拉固定全局位置，缩放、近距聚焦和持续跟随均只能部分有效。重载可完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Gemini_3_5_flash_high': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 0,
        "bloom": 0,
        "aces": 1,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 0.5,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 10,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L26188–26192/L27671–27687：27.322日、全球黄道5.145°，独立于Earth倾斜自转，方向与行星同源。"
        },
        {
          "id": "phobos",
          "parent": "mars",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "deimos",
          "parent": "mars",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "titania",
          "parent": "uranus",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L26213–26387/L27671–27687：将母星赤道倾角直接当全球黄道倾角，未应用母星赤道参考。 Triton同时负周期和157°，方向双翻。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "打包Three.js直接渲染，近似真实半长轴/偏心率/周期和倾角、Newton开普勒成立，但没有节点/近心点方向，M0由名字hash产生，历元为零。十颗卫星仅Moon黄道5.145°有效，其余把赤道倾角套黄道，Triton又双翻；Moon轨道线也错用母星倾角，路径部分分，不在data重复扣。土星环双向shadowMap有效；没有主带、Bloom或大气散射/边缘层，直接ACES有效。逆行轴与负转速叠加、速度遥测公式错误，数据部分分。聚焦先飞向mesh局部原点，结束才跳到世界位置，部分分；之后位移跟随有效。min3小于太阳12，暂停仍自转，复位仅镜头。直接渲染无需浮点附件，画布MSAA开启。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Grok4.5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 5,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L448/L1445–1450：Moon为全球XZ，未实现5.145°倾角/节点。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L465–468/L1201–1215/L1445–1450：木星规则卫星全部放全球XZ，未使用木星赤道参考/轴倾。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L465–468/L1201–1215/L1445–1450：木星规则卫星全部放全球XZ，未使用木星赤道参考/轴倾。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L465–468/L1201–1215/L1445–1450：木星规则卫星全部放全球XZ，未使用木星赤道参考/轴倾。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L465–468/L1201–1215/L1445–1450：木星规则卫星全部放全球XZ，未使用木星赤道参考/轴倾。"
        }
      ],
      "halley": false,
      "otherComets": 1,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星用焦点椭圆、开普勒求解和近似周期/倾角，轨道线同源；缺少节点/近心点方向，随机初相位、无历元。运动带、Bloom/OutputPass ACES有效，土星环无投影，大气仅Fresnel。五颗卫星全部全球XZ，不是对应黄道/母星赤道参考，质量均零；不在data重复扣。存在一颗独立运动示意彗星，无真实哈雷。金星/天王星倾斜与负自转双翻，数据部分分。聚焦与跟随主要修改target，过远才拉镜头，均部分分；min3小于太阳4.2。暂停锁行星但太阳/尾巴动画继续，复位只镜头。半浮点无回退/场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Grok4.6(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 12,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L342/L1163/L1310–1312：独立全球黄道5.15°、27.321日，方向正确，节点随机是简化初相。"
        },
        {
          "id": "phobos",
          "parent": "mars",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "deimos",
          "parent": "mars",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "enceladus",
          "parent": "saturn",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "titania",
          "parent": "uranus",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。 Triton又用负周期叠加156.9°，方向双翻。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L341–353/L1163/L1310–1312：把相对母星赤道的倾角直接当全球黄道倾角；未使用母星赤道参考。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "十颗行星/矮行星和哈雷使用近似真实根数、开普勒求解与一致路径，所有天体从模拟0时近日点开始，没有真实历元。哈雷高偏心逆行轨道成立。十二颗卫星中Moon独立黄道5.15°与周期有效；其余十一颗把赤道倾角直接套黄道，Triton另有负周期双翻，计无效，不在data重复扣。运动带、Bloom/OutputPass ACES有效；环为不受光MeshBasic，没有物理影；大气为rim。金星/天王星/冥王星轴倾加负自转重复翻转，数据部分分。镜头主要aim跟踪、过远才追，聚焦/跟随部分分，min4小于太阳4.6。暂停仍动太阳/风，复位镜头。半浮点无回退/MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Hy3': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L359/L405–409/L486：Moon轨道继承Earth23.4°赤道和公转枢轴，无独立黄道5.145°/节点。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星有近似周期和匹配圆轨道，没有真实偏心根数、开普勒变速、节点与历元。土星环无物理投影，未实现小行星带；Bloom/OutputPass ACES有效，大气仅Fresnel壳。月球继承地球赤道倾角，计无效。金星和天王星轴倾加负自转重复翻转，物理数据部分分。选择行星时未将镜头目标置于该行星，只将后续位移加给原镜头与目标，跟随部分分、聚焦为零。暂停锁住行星/月球运动，太阳自转继续，复位只镜头。最小距离12安全；半浮点后期无回退/场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'KimiK3Max': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网Three.js以真实固定J2000根数和稳健开普勒绘制同源轨道，运动双带、真实哈雷、Bloom/ACES与聚焦跟随成立。七颗卫星中月球错置地球赤道、海卫一缺少约23°轨道倾角，计无效，其余五颗母星圆轨道有效。环没有物理阴影，大气为Fresnel边缘光；金星/天王星自转重复反转，哈雷模型下次近日点为2061-05-29却写成7月，数据部分分。全局缩放下限1.5可进入太阳和木星，复位只恢复镜头；旧视觉扣分移除。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "249/700–708/1118–1121:MoonflatcircleinsideEarthtilt23.44° instead5.145°eclipticplane."
        },
        {
          "id": "Triton",
          "quality": 0,
          "reason": "255/706/1118–1121:negativeperiodwithflatNeptuneequatorialcircle, missing~23°tiltfromretrogradeequator."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "250–254/706/1118–1121:actualperiodswithidealparent-equatorialcircles;randomphase/circlealoneaccepted."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "250–254/706/1118–1121:actualperiodswithidealparent-equatorialcircles;randomphase/circlealoneaccepted."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "250–254/706/1118–1121:actualperiodswithidealparent-equatorialcircles;randomphase/circlealoneaccepted."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "250–254/706/1118–1121:actualperiodswithidealparent-equatorialcircles;randomphase/circlealoneaccepted."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "250–254/706/1118–1121:actualperiodswithidealparent-equatorialcircles;randomphase/circlealoneaccepted."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'KimiK3(Max)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线WebGL2使用JPL世纪率、开普勒和同一轨道采样，运动带、实际Bloom/ACES及持续聚焦跟随成立；支持浮点HDR、RGBA8回退和多采样。八颗卫星只有半径/周期采用真实值，除月球外倾角和节点随机，月球又把黄道5.14°套入地球赤道，均不计有效卫星；这些硬错误只在卫星项扣分。环仅行星投影，大气是表面与壳层边缘光，没有哈雷；未选择天体时缩放可进入太阳，没有完整复位。旧曝光/视觉及重复数据扣分移除。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "1061/1391–1402:5.14°eclipticinclinationappliedtoEarth-equatorialbasis."
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "1061/1391–1402:orbitalinclination±3°andnoderandomratherthanactualparent-orbitgeometry;Tritonalsorandomprogradeplanewithnegativeperiodinsteadknown~157°."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'KimiK3(Max)V3': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "actualInclinationDeg": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L853–862/L1100–1103：同一默认XYZ Euler组同时设z=5.14°、y=−theta，实际R=Ry(−theta)Rz(alpha)。相对地心位置为[2.7cos(alpha)cos(theta),2.7sin(alpha),2.7cos(alpha)sin(theta)]，y恒0.241892、轨迹平面倾角0°并偏离地心，不是过地心的5.145°月球轨道。按全局reflection的axial变换计算r×v仍有5.14°瞬时倾角，但其法线每一月绕北极旋转，不能把这个值误判为固定有效轨道；因此quality0。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 一句话版以 J2000 六根数和开普勒方程推进九颗行星与实际哈雷，主轨道与轨道线使用统一坐标映射；动态小行星带、Bloom/ACES 有效。土星环有径向结构与缝隙但无环影，大气仅菲涅尔边缘辉光，均部分计分。唯一月球把倾角与公转写在同一 XYZ Euler 组中，实际路径的 y 恒为 0.241892、绕地心上方的黄道平行圆圈运行，并非过地心的 5.145° 倾斜轨道，判无效地球月球。哈雷轨道线用 360 个等平均近点角样本，近日点附近最大偏离 4.317 场景单位，路径拟合部分计分。自转与同基下轨道方向不一致（地球实际轴轨夹角 156.56°），哈雷相位对应 1986-01-09 近日点，尾部仅为历史位置串，数据项合并扣分，不重复扣轨道或卫星。支持拖拽、主天体聚焦和持续跟随，固定缩放下限 0.6 可进入地球等天体；暂停冻结主公转/自转而云层仍漂移，返回全景仅复位相机，无完整日期、速度和显示状态复位。",
      "reviewedAt": "2026-10-12",
      "reviewVersion": "V3-20261012"
    },
    'LongCat2.0': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0.5,
          "reason": "L285–295：screen-space二维月球圆圈，随模拟time移动，但无真实倾角/根数；按示意实现部分分。"
        }
      ],
      "halley": false,
      "otherComets": 3,
      "correctness": {
        "runtime": 5,
        "data": 3,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生Canvas2D提供八行星和约略周期比的二维圆轨道示意，没有开普勒变速、节点或历元；轨道绘制把zoom乘了两次，非默认缩放时不贴合实体。土星环、静态小行星带和行星渐变辉光为部分实现，无真正Bloom/ACES。月球是二维示意，计0.5质量。三颗有独立移动彗核和尾巴的示意彗星可辨认，没有哈雷；尾巴朝向太阳、光照固定屏幕方向，数据部分分。拖拽平移和缩放有效，双击只加选中圈，未聚焦或跟随镜头。速度0可暂停，复位只平移/缩放。无需浮点附件，MSAA不适用。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Mimo_2_5_Pro_high-1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L451–452/L737–745：月球全球XZ圆轨道且继承planetGroup自转，无5.145°倾角/节点。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星沿匹配的示意圆轨道按近似周期比运动，无开普勒求解、轨道方向或历元。Shader运动带有效，土星/天王星环无物理投影；直接ACES有效，没有后期Bloom，地球只有边缘辉光大气。唯一月球无独立倾角/节点并继承父组自转，计无效。所有行星使用相同自转速度且金星倾角错误，数据部分分。拖拽旋转、平移与缩放存在，最小距离20安全；没有聚焦跟随，暂停只锁行星运动，带/太阳仍动，复位只镜头。直接渲染无需浮点颜色附件，画布MSAA有效。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'MiniMax_M3_thinking-1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1392–1398：Moon缺2π导致周期约171.5日，固定XZ无5.145°/节点；不在data重复扣。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "note": "八行星有焦点椭圆、Newton开普勒求解和近似偏心率/周期，但节点/相位随机，实体变换把面内分量赋到竖轴，轨道线却仍在另一平面，路径不吻合。环无真实投影、无主小行星带；Bloom/OutputPass ACES有效，大气为rim。唯一月球周期缺2π且参考面错误，计无效。自转为任意视觉速率，数据部分分。目标跟踪只改target；缩放最小1.5大于实体，安全。正常滑杆0.5会由0×Infinity产生NaN并污染模拟时间和实体，实跑确认L2；fatal仅标识且应显示T4，不封顶。暂停仍自转，reset不修复NaN速度。半浮点后期无回退/场景MSAA。 低速输入污染只在runtime3扣一次；有限输入下开普勒数值稳定仍1，不另扣同一故障。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "fatalReason": "正常将速度滑杆设为0.5会永久污染速度/时间/实体为NaN；复位不修复速度。"
    },
    'Opus5Ultra-WebGL2': {
      reference: true,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '源码、实跑与截图均验证开普勒轨道、月球与哈雷、五项交互和双向环影；作为同规则金色参考。'
    },
    'Opus_4_8_Max': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "phobos",
          "parent": "mars",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "deimos",
          "parent": "mars",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L23232–23242/L23313–23323/L23545–23546：随机全球黄道倾角±14.3°；旋转Y方向相对反射后的行星轨道反向，速度0.6/period还缺2π，不合格。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "打包Three.js使用焦点椭圆、Newton开普勒、真实角根数与J2000平均经度减近心点经度，实体/路径同源；半长轴是任意显示距离，没有保留真实距离比例，根数部分分。八颗卫星使用随机黄道倾角，方向相对行星公转反向且周期缺2π，全部无效，不在data重复扣。土星/天王星环无真实阴影；运动带、Bloom/OutputPass ACES有效，大气为Fresnel。坐标x,z,y反射后未对应修正自转，金星/天王星又负速双翻，数据部分分。拖拽安全缩放、聚焦与位移跟随有效。暂停锁行星和卫星，但太阳/云层仍动，复位镜头而非初始日期。半浮点后期无回退、无场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Qwen3.7Max': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L771–778：Moon始终全球XZ平面，无5.145°倾角/节点；周期存在但参考面不合格。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星使用焦点椭圆和Newton开普勒求解、近似偏心率与周期，路径同源；缺少轨道倾角/节点/近心点方向且相位随机，无历元。运动带和Bloom有效；Composer没有OutputPass，ACES部分有效。土星环无真实环影，大气只是Fresnel壳。唯一月球固定黄道0°，计无效。金星和天王星轴倾与负自转重复翻转，数据部分分。拖拽缩放安全，没有聚焦跟随；暂停公转/月球但行星自转继续，无复位。半浮点后期无回退，场景无MSAA。 实际Bloom输出先用MeshBasicMaterial对base执行ACES，再叠加未经统一映射的Bloom，故ACES为0.4部分分。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Qwen3.8MaxV2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0.5,
          "reason": "L347–360：Moon直接在屏幕坐标画椭圆，为2D示意，周期任意，无真实三维参考面；部分质量。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生Canvas2D投影八行星，近似周期/偏心率/倾角存在，但r=a(1−e cos角)不是焦点椭圆，也无开普勒变速、节点或历元。实体与所绘同源路径吻合。运动小行星带有效；环和渐变大气为部分实现，无Bloom/ACES。月球为屏幕空间示意，质量0.5；无彗星。公开基础行星数据近似正确，不重复从轨道简化扣数据分。水平拖拽与缩放有效，垂直拖拽倾角每帧被滑杆覆盖，因此拖拽部分分。没有聚焦跟随，速度0停天体但太阳动画仍继续，无复位。无浮点/MSAA要求。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Qwen3.8Max-inQoder': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L508–515：3D Moon固定XZ平面，缺5.145°倾角/节点，12rad每模拟年也不是27.3日周期。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "八行星保留近似真实半长轴比例、偏心率和周期，六次迭代开普勒方程，焦点椭圆与实体同源；没有轨道方向，全部在模拟0时近日点，没有真实历元。运动带/Bloom有效，r160 Composer缺OutputPass，ACES部分有效；环无物理投影，大气为rim。Moon平面与周期均不符，计无效。行星统一自转速度且未实现所述天王星倾斜，数据部分分。点击仅显示资料，不移动镜头；拖拽/安全缩放有效，无跟随，归零速度仍自转，未实现复位。半浮点后期无降级、场景无MSAA。 实际Bloom输出先用MeshBasicMaterial对base执行ACES，再叠加未经统一映射的Bloom，故ACES为0.4部分分。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Qwen3.8MaxV1-inQoder': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0.5,
          "reason": "L321–335：直接屏幕坐标绘制Moon，为部分二维示意；角速t*13缺少真实27.3日期间关系。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生二维Canvas使用焦点椭圆与五次开普勒迭代、近似半长轴和周期，但忽略倾角/节点且全部初始近日点，无历元。路径吻合、运动带有效，土星/天王星环与大气渐变为部分实现，无真正Bloom/ACES。月球屏幕圆圈为0.5质量，无彗星。光照始终朝屏幕左上角，数据部分分；不重复从轨道简化扣数据。拖拽平移/缩放有效，hover资料不是镜头聚焦或跟随。速度0可暂停，无复位。无需浮点颜色附件，MSAA不适用。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Qwen3.8Max(Max)V1': {
      "reference": false,
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "halley": false,
      "otherComets": 0,
      "visualBase": null,
      "fatal": null,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "interaction": {
        "drag": 0.5,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "note": "离线Canvas2D以真实偏心率和周期求解椭圆，运动小行星带与平移、缩放、聚焦、跟随可用；显示半长轴、方向和初相为自定义，未绑定真实历元，分别仅在轨道项扣分。月球为屏幕空间周期椭圆，计半质量示意。标为哈雷的彗星使用e0.86、平面自定义方向和初相，不是真实哈雷，不转算其他彗星。环与大气为2D示意，没有Bloom/ACES，暂停成立但缺完整复位。视觉与Canvas路线本身不扣分。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0.5,
          "reason": "429–436:period27.3-day screen-spaceellipseindependentof3Dreferenceplane,partial2Dillustration."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Qwen3.8Max(Max)V2': {
      "reference": false,
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "halley": false,
      "otherComets": 0,
      "visualBase": null,
      "fatal": null,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "note": "联网Three.js保留真实偏心率、周期和轨道倾角，但半长轴、近日点方向与初相是显示自定义值，没有真实历元；轨道线与实体一致。月球固定在黄道平面，缺少月球倾角和节点，计无效；标为哈雷的e0.86/i9°彗星并非真实哈雷。实际Bloom成立，但仅设置renderer.ACES而后期未加OutputPass，ACES未应用。无大气，环无物理投影；自转速率约慢十倍且金星轴角有误，数据部分分。全局缩放下限12小于太阳30与木星19，复位不完整。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "407–411/558–560:coplanarXZorbitwithno5.145°inclinationorMoonnode; cannotvalidaterealMoonplane."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Qwen3.8Max(Max)V3': {
      "reference": false,
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "halley": false,
      "otherComets": 0,
      "visualBase": null,
      "fatal": null,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "note": "离线WebGL2以真实偏心率/周期与简化倾角绘制一致的椭圆，运动带、实际图像Bloom和ACES成立；半长轴、方向与相位为显示自定义值，没有真实历元。月球固定在黄道平面，计无效；e0.86/i9°的哈雷标签对象也非真实哈雷，不转其他彗星。环无物理投影，大气仅表面边缘光；行星自转约慢十倍、金星轴角有误，仅扣data。聚焦、持续跟随和安全距离40的缩放成立，缺完整复位。RGBA8后期无需浮点扩展，但没有场景MSAA。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "644–645:fixedglobalXZcirclewithnoMooninclination/node."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Sonnet5Ultra': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 6,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L2870/L3199–3202：Moon独立黄道参考、5.145°、正确27.3217日Kepler位置。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L2872/L3199–3202：规则卫星继承母星独立赤道倾角、正周期，与正确右手x,z,−y公转方向一致；基础理想化有效。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L2872/L3199–3202：规则卫星继承母星独立赤道倾角、正周期，与正确右手x,z,−y公转方向一致；基础理想化有效。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L2872/L3199–3202：规则卫星继承母星独立赤道倾角、正周期，与正确右手x,z,−y公转方向一致；基础理想化有效。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L2872/L3199–3202：规则卫星继承母星独立赤道倾角、正周期，与正确右手x,z,−y公转方向一致；基础理想化有效。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L2872/L3199–3202：规则卫星继承母星独立赤道倾角、正周期，与正确右手x,z,−y公转方向一致；基础理想化有效。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "打包r128 Three.js使用真实近似根数、J2000历元和Newton开普勒，三维位置/行星路径同源。六颗卫星分黄道Moon与母星赤道规则卫星，倾角、周期和方向均有效；但所绘卫星路径未应用倾角且z方向相反，路径部分分。环无真实投影、运动带和选择性Bloom有效，大气仅rim；所有天体自写ShaderMaterial和最终base+bloom合成都未调用toneMapping，ACES属性无效。金星/天王星/冥王星负转速叠加大于90°轴倾双翻，带shader把以日为单位的角速乘86400，数据部分分。聚焦有效，后续只target追踪；min2.2小于太阳约6.92，缩放部分分。暂停锁模拟运动，只有今日/视图复位，未完整恢复初态。LDR后期无浮点要求/场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },

    /* 详细文档组 */
    'Opus5Ultra-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 174.855,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 179.95,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 179.53,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 179.8,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 179.81,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 179.65,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 156.9,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 179.92,
          "reason": "L2229–2269/L425–432：Moon使用世界XZ正相位，r×v对黄道北为174.855°；赤道卫星采用右手X×Y=Z基及+Z相位，正周期均产生反向轨道，Io/Europa/Ganymede/Callisto/Titan/Charon分别为179.95/179.53/179.80/179.81/179.65/179.92°。Triton负周期在这个实际右手基中使有向倾角156.9°，应保留，不凭负周期直接剔除。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "原生离线 WebGL2 的 JPL 世纪率/开普勒行星轨道、校准回归的哈雷、双向环影、动态小天体群、HDR/Bloom/ACES 与大气有效。逐颗有向法线复核后，仅海卫一的负周期与实际右手基共同给出正确156.9°；月球和另六颗赤道卫星方向错误，不能按旧八颗满分。轨道线按偏近点角采样，与实际曲线同源。逆行行星的几何pole又叠加负自转周期，卫星未正确同步自转，数据项温和扣分。拖拽、聚焦、持续跟随成立；缩放下限.02可进入天体，此刻仅日期、显示与镜头分离，无完整重置。"
    },
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L1505–1517 ignores Moon ref and uses Earth spin basis, adding Earth obliquity rather than the ecliptic reference."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.05,
          "reason": "L306–312 left-handed Z=Y×X plus local (cosθ,−sinI sinθ,+cosI sinθ) gives correct positive-pole angular momentum."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.47,
          "reason": "L1505–1517 ignores Moon ref and uses Earth spin basis, adding Earth obliquity rather than the ecliptic reference."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.2,
          "reason": "L1505–1517 ignores Moon ref and uses Earth spin basis, adding Earth obliquity rather than the ecliptic reference."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.19,
          "reason": "L1505–1517 ignores Moon ref and uses Earth spin basis, adding Earth obliquity rather than the ecliptic reference."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "expectedInclinationDeg": 0.35,
          "reason": "L1505–1517 ignores Moon ref and uses Earth spin basis, adding Earth obliquity rather than the ecliptic reference."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L1509 signed negative period in the left-handed frame yields 23.1° instead of156.9°."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "expectedInclinationDeg": 0.08,
          "reason": "L306–312/L1512 correct .08° about Pluto geometric pole; Pluto signed spin is not used to invalidate this orbit."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "离线原生 WebGL2 的行星六根数/世纪率、开普勒、真实哈雷、双向环影、带运动和后期有效。卫星中月球错误套用地球赤道参考，海卫一在实际左手基中被负周期翻成23.1°，其余六颗有效，卡戎保留。等平均近点角384点轨道线使高偏心哈雷近日点折线偏离，路径部分计分。卫星实时日心/地距字段未采用实际卫星坐标，自转pole/符号也有不一致，数据合并扣分。桌面拖拽结束仍触发独立click点选，投影拾取缺少FOV尺度；固定缩放下限可进入大天体。列表聚焦和连续跟随可用，此刻只重置日期。"
    },
    'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 0
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 95.145,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 179.95,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 179.53,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 179.8,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 179.81,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 179.65,
          "reason": "508–526：Moon把显示单位局部坐标再次compressEcl且实际黄道倾角95.145°；赤道右手基正XZ相位使普通卫星逆向。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 156.9,
          "reason": "Triton的负period抵消右手局部反向，实际相对正确母星pole156.9°，有效。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 179.92,
          "reason": "Charon相对正确Pluto几何pole为179.92°，轨道无效；不以母星错误自转作基准。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 2,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "fatalReason": "frame2428与drive2495各自申请下一帧；drive2497又启动frame，每次drive新增永久RAF链，待执行队列持续增长，核心模拟长程负载无界。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2带HDR回退、泛光/ACES、大气与运动粒子带，环仅单向遮影。JPL/Kepler与Halley实际轨道有效，240点真近点采样未闭合最后一段，贴合部分。8颗卫星仅Triton有向参考面和方向有效。frame与drive各自续约RAF且drive每次调用frame，造成永久链数递增；实跑队列requested-called从38增至71，L2核心长程故障，改按T4未完成且不设旧数字封顶。行星自转模型方向与pole冲突、质量格式有错误，数据3.5。聚焦复制被下一帧替换的数组，不随动；缩放可穿入，日期按钮不重置全状态。"
    },
    'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 174.855,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 179.95,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 179.53,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 179.8,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 179.81,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 179.65,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 156.9,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 179.92,
          "reason": "L531–540 right-handed basis; L2311–2326 positive phase + local +Z means Moon174.855° and ordinary equatorial moons180−I; Triton negative period produces156.9° correctly; Charon179.92° is invalid."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "JPL/开普勒行星轨道、真实哈雷、双向环影、运动带和HDR/Bloom/ACES/大气有效；旧过曝外观不扣分。逐有向法线仅海卫一有效，月球及另六颗卫星方向错误。行星/哈雷轨迹并非完全同一采样和实体路径，路径部分计分。暂停后自转循环仍用非零速度推进；卫星把显示单位直接当AU显示距离及地距，数据项合并扣分，不重复扣卫星方向。拖拽抑制成立，但点选用设备像素对CSS坐标；缩放会被聚焦距离逐帧拉回且下限可穿入。仍有连续跟随，此刻仅改日期。"
    },
    'DeepSeek-V4-Pro-0813-V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 0.5,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 的真实偏心率、J2000相位、开普勒运动、双运动带和Bloom/ACES成立。轨道方向只使用错误次序的节点与倾角旋转；轨道线另加近日点辐角而实体未加，2026-10-11水星与火星距各自轨道线约为半长轴的6.1%，分别在方向和路径项处理，不再扣data。七颗卫星中月球错误置于地球赤道、海卫一缺少约23°倾角，五颗其余圆轨道仍有效。无哈雷，环没有投影，大气仅边缘光；金星和天王星自转重复反转，宽景缩放能进入太阳，复位只恢复镜头。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 0,
          "reason": "635/919/1145–1147:orbit lies in EarthtiltG equatorialplane,no5.145°ecliptic inclination."
        },
        {
          "id": "Triton",
          "quality": 0,
          "reason": "641/919/1146–1147:negativeperiod gives180°retrograde butrequired~157°inclination omitted; equatorialcircle hashardplaneerror."
        },
        {
          "id": "Io",
          "quality": 1,
          "reason": "636–640/919/1146–1147:actualperiodsinidealizedparent-equatorialcircles; noautomaticcirclepenalty."
        },
        {
          "id": "Europa",
          "quality": 1,
          "reason": "636–640/919/1146–1147:actualperiodsinidealizedparent-equatorialcircles; noautomaticcirclepenalty."
        },
        {
          "id": "Ganymede",
          "quality": 1,
          "reason": "636–640/919/1146–1147:actualperiodsinidealizedparent-equatorialcircles; noautomaticcirclepenalty."
        },
        {
          "id": "Callisto",
          "quality": 1,
          "reason": "636–640/919/1146–1147:actualperiodsinidealizedparent-equatorialcircles; noautomaticcirclepenalty."
        },
        {
          "id": "Titan",
          "quality": 1,
          "reason": "636–640/919/1146–1147:actualperiodsinidealizedparent-equatorialcircles; noautomaticcirclepenalty."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1608: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计2颗有效；视觉不计分。行星解析元素与轨道同源，双向环影的球面测试遗漏正向射线条件，ring部分分。普通赤道卫星的方向因右手基正Z反转，月球和海卫一正确。暂停使用Date.now加offset仍随真实时间漂移；7月近日点文案错误。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekV4Pro0813(Max)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 5,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "halley": true,
      "otherComets": 1,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 使用真实固定J2000根数、归一化开普勒及同源轨道采样，提供运动双带、哈雷和独立C/2025模型彗星、Bloom/ACES。五颗卫星中月球采用独立黄道开普勒轨道有效，四颗伽利略卫星却在母星自转轴垂直的另一平面运行，计无效。环没有物理投影，大气仅双层Fresnel辉光。彗尾方向指向太阳，金星/天王星符号和轴翻转重复处理，太阳聚变说明也有数量错误，数据部分分。聚焦跟随可用，全局最小距离6大于所有实体半径，复位只还原镜头。",
      "moonEvidence": [
        {
          "id": "Moon",
          "quality": 1,
          "reason": "487/822–840/1243–1246:independentworldeclipticKeplerellipsewithi5.145,node125.08,realperiod."
        },
        {
          "id": "Io",
          "quality": 0,
          "reason": "739–742 parentSpherepolar/spinaxisY but848–850/1251 moonsorbitlocalXY(normalZ); sametilttransformpreserves90°equatorerror."
        },
        {
          "id": "Europa",
          "quality": 0,
          "reason": "739–742 parentSpherepolar/spinaxisY but848–850/1251 moonsorbitlocalXY(normalZ); sametilttransformpreserves90°equatorerror."
        },
        {
          "id": "Ganymede",
          "quality": 0,
          "reason": "739–742 parentSpherepolar/spinaxisY but848–850/1251 moonsorbitlocalXY(normalZ); sametilttransformpreserves90°equatorerror."
        },
        {
          "id": "Callisto",
          "quality": 0,
          "reason": "739–742 parentSpherepolar/spinaxisY but848–850/1251 moonsorbitlocalXY(normalZ); sametilttransformpreserves90°equatorerror."
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1635: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计2颗有效；视觉不计分。球投环使用1减smoothstep，背阳环遮挡锥内外亮暗反转，rings部分分。月球正确，右手基正Z令普通赤道卫星反向，海卫一方向正确。移除旧默认曝光/材质带来的完整性扣分；滚轮0.4可穿入。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekProMax-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "L379–424 Moon local +Z gives reverse ecliptic direction; equatorial frames use axisVector raw ecliptic XYZ as a world axis without mapping eclZ→worldY, so the other seven orbit around the wrong physical reference plane. Period/parent nominally exist but reference planes fail."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "离线原生 WebGL2 使用真实JPL行星根数/开普勒和哈雷轨道、运动带、Bloom/ACES与大气。环只有部分遮影，按部分环功能计分。八颗卫星全部参考/方向错误：月球世界+Z正相位逆行，其他卫星把原始黄道转轴直接当世界转轴，缺少坐标变换。轨道线缓存静态根数/等M采样，不能全程贴合。行星自转轴同样混用黄道和世界坐标、哈雷回归说明与模型日期不同，数据温和扣分。拖拽释放会误点，固定缩放下限可穿入；聚焦保存旧位置快照而不更新，没有持续跟随；此刻只改日期。"
    },
    'GLM5.2Max-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 95.145,
          "reason": "2596–2626：Moon将原黄道局部XZ圆再作(x,z,-y)映射，实际有向倾角95.145°。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 0.05,
          "reason": "514–528左手母星基与2608局部参数组合后，r×v沿母星pole，倾角/周期正确；圆轨道本身可有效。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 0.47,
          "reason": "2596–2626：Moon将原黄道局部XZ圆再作(x,z,-y)映射，实际有向倾角95.145°。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 0.2,
          "reason": "2596–2626：Moon将原黄道局部XZ圆再作(x,z,-y)映射，实际有向倾角95.145°。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 0.19,
          "reason": "2596–2626：Moon将原黄道局部XZ圆再作(x,z,-y)映射，实际有向倾角95.145°。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 0.35,
          "reason": "2596–2626：Moon将原黄道局部XZ圆再作(x,z,-y)映射，实际有向倾角95.145°。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 23.1,
          "reason": "负period与左手基使实际相对pole倾角23.1°，非156.9°。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 0.08,
          "reason": "以几何Pluto pole评估，Charon相对倾角.08°有效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2、HDR回退及多级泛光/ACES/大气有效；环只有行星投到环的求交代码且衰减反向，缺环投到行星。JPL根数和Kepler传播正确，轨道线固定J2000并等M采样，取部分贴合。8颗卫星中6颗有效；Moon黄道坐标再次映射后有向倾角95.145°，Triton重复翻成23.1°。几何逆行pole与负自转周期还使部分行星自转方向错误，数据项单独扣分。拖拽后的click未被抑制，缩放可进入球体；聚焦复制位置且不持续跟随，此刻仅重置日期。无已证实fatal。"
    },
    'GPT5.5xHigh-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L1110-1121：Triton负周期和156.9°在当前+sinZ基底下得到156.9°逆行。"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L1110-1121：proper eclToWorld北轴+Y下cosX,+sinZ产生反向r×v；赤道卫星同样相对正确母星轴反向，Moon无效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "J2000 六根数、哈雷、双向环影、密度大气与完整聚焦跟随成立；八颗卫星中仅海卫一有正确有向轨道，月球逆行无效。哈雷按384个等平近点角采样，近日点轨道线粗疏；部分行星表面自转反向，缩放可进入太阳，只有回到当前日期而无完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Luna(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 0,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L821/945-962：独立地心椭圆5.14°、node125.1°、周期27.322天，未继承地球赤道。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 1
      },
      "fatal": null,
      "note": "原生 WebGL2 的开普勒轨道、有效月球、小行星带和锁定跟随成立；距离为展示比例，初始相位未对应真实日期。环、辉光和大气为简化效果，未实现 ACES；选择不自动拉近，部分行星自转方向错误。复位恢复参考时间和镜头。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Luna(Max)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L805-808/836：月球固定全球XZ圆轨道，未实现5.145°倾角；Moon自转不同步。"
        }
      ],
      "halley": false,
      "otherComets": 1,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 场景使用开普勒椭圆与 ACES，带、环和辉光可见；轨道节点与近日点方向由任意相位代替，月球未实现倾角。名为哈雷的参数不符，只有 Encke 的周期与偏心率可辨识为额外彗星；Hale–Bopp参数也失真。彗星轨道线多一次旋转，聚焦结束不持续跟随，重置只恢复镜头。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6LunaMax-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L323-328：Triton当前基底与负period/156.9°组合得到真实逆行。"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L323-328：proper mapEcl下正period的+sinZ给反向法线；Moon及顺行赤道卫星无效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 有 J2000、哈雷、Bloom、ACES与聚焦；八颗卫星仅海卫一方向有效，月球反向。环只接收母星阴影，大气为边缘光，部分行星自转方向双翻。聚焦只记录瞬时目标，没有持续跟随；只有回到现在，没有完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6SolUltra-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        },
        {
          "id": "charon",
          "quality": 1,
          "reason": "L555-565：正确黄道/母星赤道参考面，-sinZ右手运动；Triton23.1°+负period给156.9°，8颗均有效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000 根数、哈雷、八颗有效卫星、双向环影、密度大气、Bloom/ACES及持续聚焦成立；行星负自转周期与超过90°轴倾角叠加，金星、天王星和冥王星自转方向错误。缩放可以进入太阳，返回总览及此刻并非完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6TerraUltra-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 0.4,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 174.855
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.95
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.53
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.8
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.81
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.65
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L1344-1347：Triton负period/156.9°在当前基底给正确逆行，独立r×v确认。",
          "actualInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L1344-1347：proper eclToWorld+右手basis下cosX,+sinZ使Moon/顺行赤道卫星有向法线反向。",
          "actualInclinationDeg": 179.92
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 的 J2000、哈雷、Bloom/ACES、双向环影和密度大气有效；八颗卫星仅海卫一方向正确，月球逆行无效。小行星顶点公式的垂直项误用 cos(i)，粒子带轨道只能部分有效；部分行星自转方向双翻。缩放可进入太阳，此刻恢复不重置整体。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L754-756：Triton负周期+156.9°在当前基底产生正确逆行。"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L754-756：proper map下正period的+sinZ使Moon/顺行卫星法线反向。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 有真实 J2000 根数、哈雷、双向环影、密度大气与聚焦跟随；八颗卫星中只有海卫一方向正确，月球逆行无效。金星、天王星和冥王星的轴倾角与负自转周期双翻；缩放可进入太阳，只有此刻/镜头恢复而无完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "L126：Moon分支额外取负Z，5.145°黄道顺行；Triton负period+156.9°当前基底给正确逆行。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "L126：Moon分支额外取负Z，5.145°黄道顺行；Triton负period+156.9°当前基底给正确逆行。"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L126：顺行赤道卫星local+sinZ经右手basis后给-axis，方向错误。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线 WebGL2 有完整 J2000、哈雷、Bloom/ACES、双向环影与密度大气；八颗卫星中月球和海卫一有效，其余方向反向。卫星信息误把显示距离换算为物理距离，部分行星自转方向双翻；缩放可进入太阳，只有回到此刻而无完整复位。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT5.6Sol(high)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "L135/148：moon没有tilt/pole，axisOf(moon)产生NaN，drawBody模型矩阵非有限值；同时信息卡没有orbit字段。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "note": "离线 WebGL2 行星与哈雷的 J2000 根数、Bloom、ACES及跟随成立；八颗声明卫星的绘制轴含 NaN，均不计有效卫星。环只接收母星阴影，大气为边缘光，部分自转方向错误。拖拽结束会误点选，缩放可进入太阳；真实点击月球触发 TypeError，主循环随之停止（L2，按规则归未完成，不封顶分数）。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "fatalReason": "选择月球后 updateInfo 读取不存在的 orbit.a 抛出 TypeError，随后的周期信息更新使 requestAnimationFrame 主循环停止。"
    },
    'Gemini3.1Pro-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 0,
        "bloom": 1,
        "aces": 1,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 0.5
      },
      "moons": 0,
      "hasEarthMoon": false,
      "earthMoonValid": false,
      "moonEvidence": [],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "JPL/开普勒行星、土星双向环影、HDR/Bloom/ACES实际可运行。源中虽声明卫星与哈雷参数，最终renderLoop没有绘制卫星、哈雷、小行星带、大气或轨道线，不能按声明和复选框给功能分；缺少地球月球。自转按真实帧秒而非模拟天推进，与时间速度不一致；压缩和镜头插值未限制dt，后台恢复易超调，稳定性部分。列表聚焦和按新天体位置持续跟随成立；滚轮下限1.1可进入太阳/巨行星，此刻只重置日期。"
    },
    'Gemini3.5Flash-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 0.4,
        "aces": 1,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L2606–2612 world+Z positive phase gives Moon174.855° about ecliptic north, invalid."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0.5,
          "expectedInclinationDeg": 0.05,
          "reason": "L2615–2617 left-handed Z=Y×X basis gives correct equatorial direction and parent/period, but ignores incDeg entirely: actualI0°, only idealized equatorial demonstration, quality.5."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0.5,
          "expectedInclinationDeg": 0.47,
          "reason": "L2606–2612 world+Z positive phase gives Moon174.855° about ecliptic north, invalid."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0.5,
          "expectedInclinationDeg": 0.2,
          "reason": "L2606–2612 world+Z positive phase gives Moon174.855° about ecliptic north, invalid."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0.5,
          "expectedInclinationDeg": 0.19,
          "reason": "L2606–2612 world+Z positive phase gives Moon174.855° about ecliptic north, invalid."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0.5,
          "expectedInclinationDeg": 0.35,
          "reason": "L2606–2612 world+Z positive phase gives Moon174.855° about ecliptic north, invalid."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L2598/L2615–2617 ignore156.9° and negative period gives180° equatorial direction: wrong Triton plane, quality0."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0.5,
          "expectedInclinationDeg": 0.08,
          "reason": "Actual0° equator instead of.08°, correct Pluto geometric-pole direction, partial."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "JPL/开普勒行星、真实哈雷、双向环影和动态小天体带有效，ACES有效。Bloom只有高亮提取及线性放大，没有模糊扩散，部分计分；大气只有表面limb，未绘制大气壳。月球有向174.855°无效；六颗普通赤道卫星母星/方向/周期成立但忽略全部倾角，仅半分；海卫一实际180°而非156.9°，无效。缓存初始根数的轨道线与传播状态不全贴合。computedPositions每帧重建使自转相位每帧归零，模拟固定.016秒随帧率变化，实时数据亦有缺项，分属数据/整合扣分。聚焦、跟随和拖拽成立，缩放可穿入，只有日期复位。"
    },
    'Gemini3.6Flash(high)V0': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0,
        "bloom": 1,
        "aces": 1,
        "atmo": 0
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 0,
        "elements": 0,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L790–803/L865–866：3D Moon为XZ面任意2rad/s圆轨道，没有黄道倾角/节点及真实周期。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 0,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "实现为幻想太阳系：中央是晶体能源核，八行星名称/描述与速度均为艺术设定，数据真实性为零，但圆轨道和交互仍按真实功能计分。未实现真实轨道根数、开普勒变速、方向与历元。环为线框几何，轨道粒子流不算火木之间小行星带，能量网格不是大气。r128的Bloom及内建材质ACES有效；月球无倾角/节点和真实周期，计无效。聚焦运镜有效，跟随只调整target；最小缩放5小于中央核14，可进入实体。暂停不停止核心自转，复位仅镜头。LDR后期无需浮点附件，无场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Gemini3.6Flash-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "L2114–2141 applies all satellite inclinations in global worldXZ, never uses parent equator; Moon positive +Z phase is174.855° about ecliptic north, others use wrong parent reference plane."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "原生WebGL2的行星JPL/开普勒、实际哈雷、小天体带、ACES和视线密度大气有效。环只有部分遮影；Bloom复选框/制服存在，但最终后期完全未读取uBloomEnabled，也无高亮模糊链，实际0。八颗卫星全部直接套世界黄道平面，未用母星赤道；月球方向也反向，全部无效。轨道线初始根数/缓存更新不足，路径部分。自转/实时字段有误差，数据合并扣分，不重复扣卫星参考面。拖拽释放可触发独立click，缩放下限可穿入；列表聚焦和持续跟随可用，此刻仅日期，无完整复位。"
    },
    'Gemini3.7Flash(high)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0.5,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1944–1969/L2314–2318：Moon为XZ黄道0°轨道，未实现5.145°倾角/节点，角速还不随模拟倍率。"
        }
      ],
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "九行星有焦点椭圆和近似偏心率/周期、部分倾角，但直接匀速推进参数角，没有开普勒变速或真实历元。默认路径吻合，真实尺度开关只改实体轨道距离而不重建轨道线，pathFit部分分。环接收行星投影但未castShadow，单向环影为部分实现；运动带、r128 Bloom/内建材质ACES有效，大气为Fresnel壳。月球固定黄道0°、周期任意，计无效。自转和带运动不随模拟倍率，资料中所称真实尺度也不是实际比例，数据/完整性部分分。聚焦和位移跟随有效；min3小于太阳16，缩放部分分，暂停锁物理更新但无完整复位。LDR后期无需浮点附件/场景MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L3383–3389 Moon world+Z positive phase gives174.855°, invalid."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.05,
          "reason": "L1077–1101 left-handed Z=Y×X and local+sinI Y/+cosI Z give actualI equal listed inclination, correct parent reference/direction/period."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.47,
          "reason": "L3383–3389 Moon world+Z positive phase gives174.855°, invalid."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.2,
          "reason": "L3383–3389 Moon world+Z positive phase gives174.855°, invalid."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.19,
          "reason": "L3383–3389 Moon world+Z positive phase gives174.855°, invalid."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "expectedInclinationDeg": 0.35,
          "reason": "L3383–3389 Moon world+Z positive phase gives174.855°, invalid."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L3371 negative period in left-handed frame gives23.1° rather than156.9°, invalid."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "expectedInclinationDeg": 0.08,
          "reason": "L1077–1101/L3390–3396 gives.08° about Pluto geometric pole, retained independently of parent signed spin."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "原生离线WebGL2完整具有JPL/开普勒行星、实际哈雷、双向环影、动态小天体群、HDR/Bloom/ACES和视线散射大气。逐颗卫星复核月球反向、海卫一23.1°错误，其余六颗含卡戎有效。轨道线用初始根数，传播日期后未按世纪率重建，路径部分。暂停后自转仍推进，卫星距离基准a0取自身导致同组距离塌缩，另有自转pole符号/遥测简化，数据合并扣分。拖拽和聚焦/跟随可用，缩放可进入太阳，此刻仅日期复位。"
    },
    'Grok4.6(xhigh)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 174.855,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 179.95,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 179.53,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 179.8,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 179.81,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 179.65,
          "reason": "1541–1556：世界XZ正相位使Moon有向倾角174.855°；赤道右手基中同样的正相位使普通卫星绕pole反转。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 156.9,
          "reason": "Triton负period抵消右手局部参数的反向，实际相对pole为156.9°，有效。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 179.92,
          "reason": "Charon轨道相对几何Pluto pole反转，与错误母星自转分开判定。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2含有效双向环影、运动粒子带、HDR泛光、ACES与大气。JPL/Kepler和近日点历元有效，轨道每帧重建但256个等M样本在哈雷近日点过疏，贴合取部分。8颗卫星只有Triton有向参考面/方向正确；Moon与普通赤道卫星反向，单按卫星规则扣。行星模型正相位自转沿负pole，且离子尾anti取-halley.pos指向太阳，数据项扣至3.5。跟随/选取/拖拽有效，缩放下限1.6可进入太阳和巨行星，此刻仅回到当前日期。"
    },
    'Hy3-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 95.145,
          "reason": "708–724世界坐标采用原黄道XYZ，但Moon局部XZ圆给出相对黄道北95.145°，错误参考面。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 0.05,
          "reason": "母星轴采用同一原黄道XYZ、左手基与局部相位组合，普通赤道卫星有向倾角/周期正确。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 0.47,
          "reason": "708–724世界坐标采用原黄道XYZ，但Moon局部XZ圆给出相对黄道北95.145°，错误参考面。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 0.2,
          "reason": "708–724世界坐标采用原黄道XYZ，但Moon局部XZ圆给出相对黄道北95.145°，错误参考面。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 0.19,
          "reason": "708–724世界坐标采用原黄道XYZ，但Moon局部XZ圆给出相对黄道北95.145°，错误参考面。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 0.35,
          "reason": "708–724世界坐标采用原黄道XYZ，但Moon局部XZ圆给出相对黄道北95.145°，错误参考面。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 23.1,
          "reason": "Triton负period重复翻转后相对母星pole23.1°，剔除。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 0.08,
          "reason": "Pluto pole与Charon轨道有向倾角.08°正确，母星自转另评。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2有运动带、HDR泛光/ACES和大气，环只有单向行星遮影。Kepler与JPL公式正确，但实体使用原黄道XYZ、轨道线却用(x,z,-y)，实际体线错转90°，pathFit为0。8颗卫星6颗有效，Moon参考面错误、Triton逆行重复翻转。渲染把水星作为第二个太阳并使用太阳半径；卫星材质字段未传入，数据/完整性各作适度扣分。拖拽可误拾取，缩放不按半径限制，卫星列表只聚焦母星且所有聚焦不持续跟随。Now回到启动日期，非全状态重置；无核心fatal。"
    },
    'KimiK3Max-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L498: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L367/L498: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计8颗有效；视觉不计分。实际负Z轨道和右手基保持正确顺行；海卫一用23.1度几何面配负周期，8颗方向均有效。真实元素、双环影、后期与持续跟随成立。滚轮全局0.25可穿入；此刻仅恢复时间。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'KimiK3(Max)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1783: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L439/L1783: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。行星和路径同源；卫星轨道缓冲只绘制生成顶点一半，pathFit部分分。右手基正Z使普通卫星反向，仅海卫一方向有效。彗尾4浮点布局写5值是独立完整性错误；信息距离近似与7月底文案有误，滚轮可穿入。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'LongCat2.0-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "L1347–1395 parentPos=bodyPositions[parent] is uncompressed AU/world, but renderer places parent at compressed display center; moon draws use the raw parent plus display offsets directly L1402–1415. All eight therefore orbit a different location from their displayed parent; Moon also has reversed world-XZ phase."
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "撤销仅凭白场/观感的旧fatal，主行星与控制仍运行，恢复原T3。原生离线WebGL2具有JPL/开普勒轨道、实际哈雷与动态小行星。八颗卫星使用未压缩母星AU位置加显示距离，实际不绕显示母星，全部无效。环只有行星投环单向影；大气视线撞击参数错误退化为边缘光；合成在加入Bloom后又覆盖红蓝通道，仅绿通道保留泛光，功能部分计分。轨道线仅建初始根数，真实比例开关也未重建，路径部分。自转符号与基手性不一致、数据/开关整合有缺漏。拖拽会误点，缩放可进入太阳，聚焦只保存旧位置，不跟随，无完整复位。"
    },
    'MiniMaxM3-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "2702将km转AU写成乘1e-3*1.496e8，压缩后卫星距离达10^7–10^8世界单位；不能构成围绕可观察母星的有效卫星系统，全部剔除，不再在数据项重复扣此故障。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 0,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": "L1",
      "fatalReason": "所有非太阳主实体uSunDir从{x,y,z}对象以[0..2]读取，实际上传全NaN；主行星位置为原AU且太阳半径4.6，Earth等内行星位于太阳内部，核心画布物理/照明不可用。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2及HDR回退/MSAA有效，泛光/ACES与运动带存在，环影/大气仅部分实现。核心故障为uSunDir全NaN；主实体使用原AU坐标，太阳显示半径4.6吞没内行星，轨道线另用34*r^.62，pathFit为0。8颗卫星km转AU乘除写反，实际距离达千万至亿级，全部无效。L1按T4未完成、无旧数字封顶，卫星单位错误不再重复扣correctness.data。Halley Kepler/Tp和反日方向存在。行星信息/光强近似较粗，data4；拖拽误触拾取，缩放不断被聚焦预设拉回且可穿入，列表部分可聚焦，随动会更新目标，此刻只改日期。"
    },
    'MiniMaxM3(high)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 0.4,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 0.5,
        "kepler": 1,
        "elements": 1,
        "orientation": 0,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 0
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "Moon实际局部正Z相位给174.855°；其余虽有母星局部基，2181母星worldZ漏负号，轨道参考面不是真实母星pole，全部无效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 0,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": "L1",
      "fatalReason": "postQuad把packed vec3位置按size2读取，final主画布三角形布局错误；逐轴dispR钳掉所有负坐标、阳光方向固定零，核心主视图失败。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2有HDR回退和实际4样本MSAA，LINEAR解析实测GL错误0，不能沿用旧非法解析说明。主后期quad把vec3缓冲按vec2读取，最终主画布失败；实体逐轴dispR将负坐标钳成.11258并破坏椭圆象限，几何部分、定向0，Kepler/根数/历元公式仍有效。8颗卫星Moon反向、其余母星pole漏worldZ负号，均无效。环是平面条带映色且遮影方向无效，大气uModel未上传、SunDir恒零；泛光quad也仅部分。真实距离动画使用模拟dtDays，负速可发散，stability0。L1改T4未完成、无数字封顶。信息把显示坐标当AU、秒字段undefined及遗漏卫星列表使data3.5/integrity4；拖拽可用，缩放可穿入，列表部分聚焦但画布拾取矩阵列错误，不持续随动，此刻仅改时间。"
    },
    'Opus4.8Ultra-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "actualInclinationDeg": 174.855,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "actualInclinationDeg": 179.95,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "actualInclinationDeg": 179.53,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "actualInclinationDeg": 179.8,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "actualInclinationDeg": 179.81,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "actualInclinationDeg": 179.65,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "actualInclinationDeg": 23.1,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "actualInclinationDeg": 179.92,
          "reason": "1551–1571正相位XZ局部圆在世界/母星右手基中沿负参考pole；Moon174.855°，普通卫星约180°，Triton使用绝对period后变成23.1°，均为方向硬错误。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2提供有效双向环影、运动粒子带、HDR多级泛光、ACES和大气。JPL随历元传播、Kepler与轨道线一致；10年缓存变化对这些行星轨道仅小量。8颗卫星均因有向法线反向失效：右手基的正XZ相位沿负pole，Triton取绝对周期也未修正这个基向问题。母星模型使用Xcos-Zsin，不能以其自转方向替代卫星r×v判断。Halley实体/Tp有效，界面2061年7月与固定周期推算不完全一致，数据4.5。拖拽/缩放/聚焦/随动有效，缩放最小8大于所有球体半径；此刻仅重置时间。"
    },
    'Qwen3.8Max-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "Moon542–551世界正Z相位给出174.855°，而非5.145°；其余使用getAxis512漏负号的母星pole，参考面实际错误，不能用错误pole自证。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2的运动带、泛光/ACES和大气有效，环缺环投行星阴影。主轨道根数/Kepler/定向公式存在，但122行将L先转弧度后M再次乘DEG，真实日期相位和平均运动均错，epoch不给分；729–738同一输入错误令轨道线只覆盖约6.283°弧，pathFit为0。8颗卫星Moon有向轨道反向，其余母星pole漏world Z负号，均无效。离子尾指向太阳、部分自转pole/负周期冲突，数据3.5；卫星信息面板无分支，完整性4.5。拖拽误触click、缩放可进太阳；聚焦与随动有效，此刻只重置日期，无fatal。"
    },
    'Qwen3.8MaxV2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "expectedInclinationDeg": 5.145,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.05,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.47,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.2,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "expectedInclinationDeg": 0.19,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "expectedInclinationDeg": 0.35,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "expectedInclinationDeg": 156.9,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "expectedInclinationDeg": 0.08,
          "reason": "1458–1481所有卫星均直接加世界XZ局部圆，ref=equator分支只计算axis却不使用；Moon正Z相位有向倾角174.855°，其余均未绕真实母星赤道参考面。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "fatalReason": "空白画布点击1389–1404保留best=-1却调用focusOn(-1)，1304把planetRadii[-1]算入camDistGoal得到NaN，随后相机/VP矩阵失效；实测650ms后dist/goalNaN且VP非finite，RAF仍运行。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "note": "本地WebGL2含HDR回退、实际MSAA、双向环影、运动带、泛光/ACES和大气。主行星JPL/Kepler/历元公式正确，固定128点轨道缓存仅在比例过渡重建，长期贴合部分。8颗卫星全部只用世界XZ平面，母星赤道axis计算后未使用；Moon同时反向，按卫星项扣分。空白画布点击使focusOn(-1)的距离NaN，实测点击650ms后相机/VP失效，L2改T4未完成且无数字封顶；此故障仅由runtime3与fatal记录，交互不重复扣。暂停仍继续自转，离子尾指向太阳且pole Z号错误，data3.5。缩放下限1可穿入巨行星，列表聚焦和连续随动有效，此刻只重置日期。"
    },
    'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1471: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。J2000元素、运动小天体和双向环影完整；但右手基正Z令月球及普通赤道卫星方向反转，仅海卫一方向符合给定值。7月底哈雷文案与固定周期冲突；滚轮没有目标半径下限，此刻只改时间。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Sonnet5Ultra-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "actualInclinationDeg": 95.145,
          "expectedInclinationDeg": 5.145,
          "reason": "L2244–2250：先按世界XZ构造倾角后又eclToWorld交换Y/Z，Moon有向黄道倾角95.145°，非5.145°。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.95,
          "expectedInclinationDeg": 0.05,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.53,
          "expectedInclinationDeg": 0.47,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.8,
          "expectedInclinationDeg": 0.2,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.81,
          "expectedInclinationDeg": 0.19,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "actualInclinationDeg": 179.65,
          "expectedInclinationDeg": 0.35,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9,
          "reason": "L513/L2244–2255：底层x=cosθ,z=sinθ方向先反，再由负周期翻转，156.9°实际有向轨道仍为真逆行；按最终结果有效，不机械按字段双翻判错。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "actualInclinationDeg": 179.92,
          "expectedInclinationDeg": 0.08,
          "reason": "L2244–2255：proper母星赤道基内正周期x=cosθ,z=sinθ，r×v沿负轴，规则卫星逆行。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生WebGL2文档版真实JPL世纪率、J2000历元、稳健开普勒及正确行星方向成立，行星/哈雷路径同源。八卫星按有向轨道核对仅Triton有效：Moon重复交换坐标轴后为95.145°，其余六颗规则卫星在proper母赤道基中顺序相反而逆行，质量为零，不在数据项重复扣。三套双向解析环影、运动带、Bloom/完整ACES与视线撞击参数密度/日照/前散射大气有效。金星/天王星/冥王星大倾角再配负转速，方向双翻；哈雷周期推出2061-06-08而公开写7月，data部分分。拖拽、聚焦和随目标移动的球坐标镜头有效；最小距离0.9可进入太阳/大型行星，缩放部分分。暂停锁模拟运动，但只有“此刻”与视图操作，无完整状态复位。HDR支持RGBA8降级，自建最多4×MSAA；统一浏览器实跑无错误。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'MuseSpark1.3Contributor(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 12,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 使用 JPL 世纪率/开普勒轨道。月球有独立黄道根数，另十一颗卫星绕世界 Y 轴，而此作品行星黄道北实际为 Z 轴，参考面明显错误且有非闭合起伏；仅月球计有效，不重复扣数据项。土星环只有行星柱影，大气是随太阳调制的边缘光，两项只给部分分。哈雷、动态小天体带和 Bloom/ACES 存在。金星自转周期误用 2802 小时；支持聚焦和持续跟随，缩放可进入大型天体，缺完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "月球独立黄道5.145°开普勒近似"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "rhea",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "行星黄道北为worldZ，其余卫星绕worldY，参考面错误且非闭合起伏"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1231: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L234/L1231: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计7颗有效；视觉不计分。后期和环影成立。相机只在camTransition存在时更新目标，过渡后停止跟随；暂停仍以现实时间驱动自转。月球有向法线反转，其余赤道卫星通过左手基与额外符号处理方向有效；信息卡仅选择时刷新，近日点文案错误。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Gemini3.8Flash(high)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 0,
        "elements": 0.5,
        "orientation": 0,
        "epoch": 0
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 的小行星带和 Bloom/ACES 可用，土星环没有双向环影，大气只是边缘辉光。行星以匀速角代入极坐标椭圆，没有开普勒求解、完整节点/近日点定向或历元相位。仅一颗月球，轨道平面为简化黄道面且按帧增加固定角度，按半颗有效卫星计，没有哈雷。按下即拾取，聚焦和跟随只更新视线目标而不移动镜头保持距离；巡航被选取逻辑立即关闭，无完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0.5,
          "reason": "黄道附近简化圆面可辨识，但固定帧增量而非模拟27.3天周期"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Gemini3.8Flash(high)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L3114: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。",
          "actualInclinationDeg": 95.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L811/L3114: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。行星元素和路径一致，环影、大气、Bloom/ACES有效。月球映射后有向倾角95.145度；右手赤道基正Z使普通卫星反向，海卫一方向正确。该故障只扣卫星，不重复扣data；拖动释放误选、安全缩放及完整复位不足。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Gemini3.8Flash(high)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 0.5
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 实现定向开普勒轨道、动态小天体带、哈雷与 Bloom/ACES。行星环只有行星投向环的阴影，大气为边缘光。地球 M0 错用平均黄经，历元相位偏移约 103°；月球埋在地球内部，按无效月球扣分。七颗其他卫星的 Z 坐标符号与行星映射相反，木卫与土卫变成逆行，海卫一反成顺行；全部不计有效卫星，不再因同一卫星问题重复扣数据项。金星自转方向与大倾角叠加重复翻转。聚焦仅有目录入口，跟随只更新目标不平移镜头，卫星开关遗漏月球，重置仅恢复日期。",
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "轨道半径.04626小于地球半径3，埋在地球内部"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "planet映射(x,z,-y)，卫星(xcos,0,+zsin)，公转方向与预期相反"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Gemini3.8Flash(high)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 0.4,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L3894: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L1269/L3894: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计6颗有效；视觉不计分。实际后处理未调用HDR Bloom金字塔，只有眩光近似，bloom部分分。月球世界相位反转，海卫一在左手基中方向错误；其他卫星有效。月球面板显示母星日心距，哈雷日期文案与周期不符；缺拖拽抑制和安全缩放。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MuseSpark1.3Contributor(xhigh)V2': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 0.4,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 6,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 具备完整定向的 J2000/开普勒行星轨道、六颗名义卫星、哈雷、Bloom/ACES 和持续跟随。环没有双向物理阴影，大气为边缘光，小天体带是静止点阵，均给部分功能分。六颗卫星的 Z 符号与行星黄道映射相反，方向全部错误且轨迹竖直起伏不闭合，均不计有效，月球执行无效锚点扣分，不重复扣数据项。哈雷相位来自任意 L=0；行星自转按墙钟推进，暂停仍转。缩放可进入大型天体，缺完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "planet映射z=-zh，但卫星z=+sin(angle)，方向相反且竖直轨迹不闭合"
        }
      ],
      "earthMoonValid": false,
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1140: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L1150/L1140: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。环影、运动带、真实元素与后期有效；右手基正Z导致多数卫星方向反转，仅海卫一方向有效。7月底文案错误；拖拽释放误点、固定缩放下限及日期单独复位为实际交互缺项，不以视觉观感扣分。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'OmenAlpha(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L1168–1169：即使ecl:true仍左乘Earth fix23.44°，Moon倾角实际24.308313°而不是独立黄道5.1°。",
          "actualInclinationDeg": 24.308313,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1166–1171：母星独立赤道fix乘小倾角，正周期+右手x,0,−z位置，方向/参考面/周期有效。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1166–1171：母星独立赤道fix乘小倾角，正周期+右手x,0,−z位置，方向/参考面/周期有效。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1166–1171：母星独立赤道fix乘小倾角，正周期+右手x,0,−z位置，方向/参考面/周期有效。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1166–1171：母星独立赤道fix乘小倾角，正周期+右手x,0,−z位置，方向/参考面/周期有效。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L1166–1171：母星独立赤道fix乘小倾角，正周期+右手x,0,−z位置，方向/参考面/周期有效。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L1166–1171：157°倾角已经逆行，再使用sgn−负相位重复翻转，变成相对海王赤道顺行。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "note": "原生WebGL2实现随世纪变化的J2000根数、稳健Newton/二分求解及正确方向，行星/哈雷与路径同源，哈雷有1986近日点历元。七颗卫星中五颗规则卫星有效；Moon错误继承Earth倾斜，Triton157°再负相位双翻，二者无效，不在data重复扣。双向解析环影、运动带、HDR/Bloom/ACES有效，大气是Fresnel日侧辉光。Triton资料速度漏用Neptune GM而回退Earth值，data部分分。相机先更新再算位置，跟随滞后一帧；自由视角可缩入太阳，选中才有限制。暂停带仍按实时时间运动，复位只镜头/今日。正常前台短停顿实跑后看门狗累积4条持久rAF链，同timestamp的dt0回退0.016，时钟实测持续过速3.72050倍，L2成立、runtime3、自动T4且无额外分数封顶；轨道求解数值稳定保留1，不重复扣data。HDR有RGBA8降级，无MSAA。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015",
      "fatalReason": "正常前台1350ms短主线程停顿后，看门狗直调自调度frame累积4条持久rAF链；同timestamp的dt=0又回退0.016，使模拟时钟持续过速，实测1.2043秒内推进应有值的3.72050倍。"
    },
    'OmenAlpha(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.05,
          "expectedInclinationDeg": 0.05,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.47,
          "expectedInclinationDeg": 0.47,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.2,
          "expectedInclinationDeg": 0.2,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "actualInclinationDeg": 0.19,
          "expectedInclinationDeg": 0.19,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "actualInclinationDeg": 0.35,
          "expectedInclinationDeg": 0.35,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9,
          "reason": "L1737/L2019–2034：实际P=Math.abs(periodDays)，世界x=cosθ,z=−sinθ，独立黄道/母赤道参考正确；Triton156.9°维持真逆行。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "actualInclinationDeg": 0.08,
          "expectedInclinationDeg": 0.08,
          "reason": "L1737/L2019–2034：独立黄道Moon或proper母赤道基，正绝对周期x=cosθ,z=−sinθ，有向倾角与周期有效。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生WebGL2文档版JPL世纪率、J2000历元、开普勒求解、正确手性及压缩路径同源成立，哈雷按E采样避免近日点大缺口。八颗卫星全部有效：实际构造时已将周期取绝对值，proper参考中x=cosθ/z=−sinθ使规则卫星顺行，Triton156.9°单独实现真逆行。三套双向解析环影、运动带、Bloom/ACES及视线密度/光照/前散射大气有效。金星/天王星/冥王星负自转叠加大倾角双翻，data部分分，与卫星不重复；哈雷公开写2061年年中，与周期推出6月8日相容，不扣此项。拖拽抑制误点，缩放按目标半径1.5倍限制，聚焦及持续位移跟随有效。暂停物理时间，但无完整镜头/时间/速度/开关一次复位。HDR可RGBA8降级、自建4×MSAA；看门狗只UI.step不续rAF，无一句话版加链问题。统一实跑无错误。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT6Astra(Light)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L29: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L18/L29: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计0颗有效；视觉不计分。元素、GPU运动带、后期与双向环影完整。卫星实际右手基正Z使普通卫星反向，海卫一把156.9改23.1后负周期也成为顺行；月球亦逆行，8颗均不能按有效方向计。说明示意相位与6月回归自洽，不扣数据；安全缩放有效。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Opus5(Low)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.95,
          "expectedInclinationDeg": 0.05,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.53,
          "expectedInclinationDeg": 0.47,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.8,
          "expectedInclinationDeg": 0.2,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "actualInclinationDeg": 179.81,
          "expectedInclinationDeg": 0.19,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "actualInclinationDeg": 179.65,
          "expectedInclinationDeg": 0.35,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9,
          "reason": "L223/L1301–1308：底层圆周本来反向，负period再次翻转后实际有向倾角156.9°，结果为真逆行；不按原始字段机械判零。"
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "actualInclinationDeg": 179.92,
          "expectedInclinationDeg": 0.08,
          "reason": "L1301–1308：全球黄道或proper母赤道基内正period、x=cosθ/z=sinθ，r×v为负参考轴，方向错误。"
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "原生WebGL2文档版真实JPL世纪率、J2000历元、稳健开普勒与正确行星手性成立。哈雷N220均匀M路径在默认日期的压缩真实曲线最大弦距24.088988单位、彗核半径0.9，近日点缺口使pathFit部分分，非fatal。八卫星仅Triton实际有向156.9°有效；Moon174.855°，六颗正周期规则卫星在proper基中逆行，质量零，不在data重复扣。双向解析环影、运动带、Bloom/ACES与视线密度/前散射大气有效。金星/天王星/冥王星负速配倒置轴双翻，哈雷周期下一近日点2061-06-08却说明7月，data部分分。拖拽抑制误点，聚焦/持续球坐标跟随有效；最小缩放0.35可穿太阳/行星，暂停锁物理但无完整复位。HDR可RGBA8降级、自建最多4×MSAA；统一实跑无错误。",
      "reviewedAt": "2026-10-15",
      "reviewVersion": "V3-20261015"
    },
    'GPT6Astra(Ultra)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 7,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 3,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用 JPL 世纪率/开普勒行星轨道、带真实黄道参考面的七颗卫星，以及哈雷、恩克、67P、斯威夫特四颗独立周期彗星。双向土星环影、动态小行星带、HDR/Bloom/ACES、聚焦跟随及按半径限制缩放均有实际实现。大气着色只用视角边缘幂次和昼夜调制，属于边缘辉光，只给部分功能分。暂停停止模拟时间，缺少一次恢复镜头、时间、速度与全部显示状态的完整重置。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GPT6Astra(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线打包 Three.js 完整实现 JPL 世纪率/开普勒行星轨道、黄道月球、土星环双向阴影、动态小行星带、HDR/Bloom/ACES、真实比例与持续跟随。大气仅是幂次边缘辉光，改按部分有效计；没有哈雷或其他彗星。按天体半径限制缩放，暂停可锁住模拟日期；“现在”和总览分别恢复日期或镜头，没有完整状态复位。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GPT6Astra(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线打包 Three.js 使用完整定向的 JPL 世纪率/开普勒轨道、黄道月球、土星环双向阴影、独立运动的小行星带、HDR/Bloom/ACES、三种比例和持续跟随。大气仅是随日照调制的边缘辉光，按部分有效计。没有哈雷或其他彗星；聚焦与半径安全缩放有实现，日期与相机分别复位，缺少恢复全部状态的完整重置。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekV4.1Flash0910(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 15,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 包含 JPL 世纪率/开普勒行星轨道、15 颗已绘制卫星、双向环影、动态小行星带与柯伊伯带、Bloom/ACES 和持续跟随。大气以 Fresnel 边缘光和简化前向项组成，没有实际大气光程积分，按部分有效计。海卫一叠加负周期与 156.9° 倾角造成方向重复翻转；土卫八把 Laplace 面倾角当成土星赤道倾角，天卫三、天卫四又未匹配天王星负自转方向；剔除这四颗后计 11 颗有效卫星，超额奖励为 2.25 分；卡戎正周期与 Pluto 的 IAU 正 Wrate 匹配，仍计有效，不重复扣数据项。卫星同步自转朝向只是近似。无哈雷；缩放可进入大型天体，R 只恢复速度与镜头，无完整状态复位。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "phobos",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "deimos",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "enceladus",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "rhea",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "基本黄道/母星赤道面及方向成立"
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "Laplace面15.47°被当成母星赤道倾角"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "正周期绕IAU北极，未随母星负自转方向"
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "正周期绕IAU北极，未随母星负自转方向"
        },
        {
          "id": "charon",
          "quality": 1,
          "reason": "Pluto IAU北极(132.993,-6.163)的真实Wrate正，Charon正周期绕该北极有效"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "负周期与156.9°倾角重复翻转方向"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L2056: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。",
          "actualInclinationDeg": 95.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。真实行星元素和渲染路径成立；月球局部轴误映射为近竖直，右手赤道基正Z导致普通卫星反向，仅海卫一方向正确。卫星posEcl把显示坐标直接加到AU用于面板且7月回归文案错误；缩放及完整复位不足。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMoXProPreview(Unknown)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 3.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 使用定向 J2000/开普勒行星轨道、动态小行星带与 Bloom/ACES。环没有双向环影，大气是边缘光；唯一月球的 Z 坐标符号与行星黄道映射相反，公转方向错误，按无效月球计并执行月球锚点扣分，该问题不再扣数据项。“真实尺寸”没有同步云层、大气与月球尺寸；聚焦只一次插值 55%，之后只移动观察目标，近景和持续跟随仅部分有效。金星/天王星的负周期与大倾角叠加重复逆行。没有彗星，空格可暂停，缺少完整重置。",
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "行星(x,zh,-yh)与Moon(+cos,.12sin,+sin)方向相反"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1397: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。",
          "actualInclinationDeg": 0.05000000000036243,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。",
          "actualInclinationDeg": 0.4700000000001629,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。",
          "actualInclinationDeg": 0.19999999999981224,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。",
          "actualInclinationDeg": 0.1900000000007852,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。",
          "actualInclinationDeg": 0.34999999999958503,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。",
          "actualInclinationDeg": 23.099999999999994,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 1,
          "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。",
          "actualInclinationDeg": 0.07999999999851001,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计7颗有效；视觉不计分。行星位置采用未映射黄道坐标，轨道线却按Y朝上映射，pathFit为0，数学轨道旋转本身不重复扣orientation。球面uHasRing固定0，只有单向环影。左手赤道基下海卫一方向错误；滚轮被聚焦距离拉回，真实距离显示失真。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Step5Preview(high)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 0.5,
        "stability": 1
      },
      "moons": 12,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 2,
        "integrity": 2
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 0.5,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "fatalReason": "选择卫星后逐帧异常阻断最终绘制，核心观察功能失效。",
      "note": "联网 Three.js 一句话版有 JPL 世纪率/开普勒行星轨道、12 颗名义卫星、哈雷、小行星带与柯伊伯带、Bloom/ACES。选择卫星后 updateClock 访问不存在的 el，逐帧异常阻断最终绘制，保留 L2 致命错误标记；分数按各分项正常计算，梯队标为未完成。轨道线混淆近日点黄经与幅角而错位，哈雷相位也近似；环额外旋转 90°且影子判定反向，大气为边缘光，地球云层半径异常。月球与四颗木卫基本有效，其他七颗卫星参考面或逆行方向硬错，计五颗有效，不重复扣数据项。聚焦过远，真实比例不同步卫星，缺完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "黄道5.145°及正周期方向基本成立"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "把母星赤道小倾角套在世界黄道面，Mars约25°倾斜遗漏"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "把母星赤道小倾角套在世界黄道面，Mars约25°倾斜遗漏"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "母星赤道参考面被世界黄道面替代"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "母星赤道参考面被世界黄道面替代"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "母星赤道参考面被世界黄道面替代"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "母星赤道参考面被世界黄道面替代"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "dir-1与156.9°轨道倾角重复翻转逆行"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Step5Preview(high)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L511: 卫星缺自转参数使axis/model非有限，实体无效；不再在data重复扣本故障。",
          "actualInclinationDeg": null,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 2,
        "data": 2,
        "integrity": 2
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 0,
        "pauseReset": 0.5
      },
      "fatal": "L2",
      "fatalReason": "卫星模型矩阵NaN与合成顶点布局错误造成核心实体和画面/拾取映射失败；新规则标记未完成，不设分数封顶。",
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计0颗有效；视觉不计分。8颗卫星缺tilt/poleLon/rotH，模型矩阵NaN而实体无效；合成顶点步长错误使主画面与投影/标签不一致，属核心失败L2，按新规则建议灰色未完成而非分数封顶。行星Kepler路径仍有效；聚焦不跟随，暂停仍自转，距离/光行时和近日点文案错误。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMo2.6Flash(Unknown)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 0.4,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 1,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线打包 Three.js 使用 J2000 开普勒轨道、一颗简化黄道月球、动态小行星带和自制 Bloom。环没有双向阴影，大气是边缘辉光。默认 Bloom 离屏路径与最终合成未调用 ACES，仅关闭 Bloom 后直接渲染才启用，保留部分色调映射分。小行星带按墙钟整体旋转，暂停仍运动；金星和天王星的负自转周期与大倾角叠加重复翻转，“10y/s”仅 912.5 天/秒。支持聚焦跟随及安全缩放，没有彗星，系统视图仅复位镜头。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L454: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L204/L454: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 3,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。后期、双向环影和行星路径有效。L2890最终selectBody覆盖旧定义，先选中并设cam.focusId，随后非地球updateInfoPanel重赋const lightMin，已由主任务复跑重现异常；选择与自动拉近部分失败但绘制继续，不判fatal。右手基正Z使多数卫星反向，仅海卫一方向正确；统一30小时自转和近日点文案错误。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMo2.6Pro(Unknown)V1': {
      "reference": false,
      "featureMap": {
        "rings": 0.4,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 6,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 0.5,
        "zoom": 0.5,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "联网 Three.js 具备 J2000/开普勒行星轨道、小行星带、Bloom/ACES 与持续跟随。六颗名义卫星使用的 Z 符号与行星黄道映射相反，公转方向全部错误，土卫六又未变换到母星赤道面，均不计有效卫星，月球按无效锚点扣分，不重复扣数据项。环无双向环影，大气为边缘光；行星自转与小行星带按墙钟推进，暂停仍运动，金星/天王星重复逆行。按下即选取、任意卫星均跳到月球，聚焦插值过早结束且缩放可进入天体，没有彗星与完整复位。",
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "planet out(x,z,-y)但moon out.z+=ry，方向相反"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L2412: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L467/L2412: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 4
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。真实元素、后期与环影成立。右手基正Z使多数卫星方向反转，仅海卫一正确；不再对同一轨道方向重复扣data。真实比例关闭仍插值到1、离子尾朝太阳为独立完整性问题；面板AU/压缩单位混用与7月底文案错误。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Grok4.7(xhigh)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 13,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 1,
      "correctness": {
        "runtime": 5,
        "data": 4.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 使用 JPL 世纪率/开普勒行星轨道、13 颗名义卫星、哈雷与恩克、双向环影、动态小天体带、Bloom/ACES 和聚焦跟随；大气为 Fresnel 边缘光。通用卫星基底的 Z=X×Y 配合正角推进，使火卫两颗、土卫三颗方向逆转，海卫一反成顺行；卡戎也与 Pluto 的 IAU 正 Wrate 方向不符。四颗伽利略卫星的 L1 输出变换符号错误，轨道法线与木星北极相差约 51°。仅月球和天卫三计有效，不重复扣数据项。哈雷固定二体周期与回归说明有偏差；缩放可进入天体，缺完整重置。",
      "moonEvidence": [
        {
          "id": "moon",
          "quality": 1,
          "reason": "独立黄道Moon模型及Galilean L1模型，参考面/方向成立"
        },
        {
          "id": "io",
          "quality": 0,
          "reason": "L1输出变换JUP_EQJ第三列Y符号反；纯源码VM测得轨道法线与Jupiter IAU pole夹角51.18°"
        },
        {
          "id": "europa",
          "quality": 0,
          "reason": "L1输出变换JUP_EQJ第三列Y符号反；纯源码VM测得轨道法线与Jupiter IAU pole夹角51.18°"
        },
        {
          "id": "ganymede",
          "quality": 0,
          "reason": "L1输出变换JUP_EQJ第三列Y符号反；纯源码VM测得轨道法线与Jupiter IAU pole夹角51.18°"
        },
        {
          "id": "callisto",
          "quality": 0,
          "reason": "L1输出变换JUP_EQJ第三列Y符号反；纯源码VM测得轨道法线与Jupiter IAU pole夹角51.18°"
        },
        {
          "id": "phobos",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "deimos",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "enceladus",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "titan",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "triton",
          "quality": 0,
          "reason": "basisZ=X×Y再用正cos/sin导致正周期反向，Triton大倾角反成顺行"
        },
        {
          "id": "titania",
          "quality": 1,
          "reason": "该分支负pole方向与Uranus/Pluto负自转匹配"
        },
        {
          "id": "charon",
          "quality": 0,
          "reason": "basisFrom的Xcos+Zsin产生−pole方向，但Pluto IAU真实Wrate为正，方向错误"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Grok4.7(xhigh)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": true,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 1,
          "reason": "L1743: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。",
          "actualInclinationDeg": 5.145,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L277/L1743: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计2颗有效；视觉不计分。真实元素、后期和双向环影成立；月球参考面与方向正确，但右手赤道基正Z使普通卫星反向，仅海卫一方向正确。7月预设与模型周期不符；滚轮0.45可穿入、缺完整重置；撤销旧纯观感完整性扣分。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'Opus5.5(Max)V1': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 18, hasEarthMoon: true, halley: true, otherComets: 3,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: null,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: "基础 106 分，T0 额外加 3 分，总分 109。"
    },
    'MiniMaxM3.1FlashPreview(Max)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 0.4
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 20,
      "hasEarthMoon": true,
      "halley": false,
      "otherComets": 0,
      "correctness": {
        "runtime": 4,
        "data": 3,
        "integrity": 3.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 0.5,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 包含 JPL 世纪率/开普勒行星轨道、Meeus 月球、20 颗名义卫星、双向环影、小行星带/柯伊伯带、Bloom/ACES 与安全缩放。大气仅是边缘辉光，按部分有效计。土卫八把 Laplace 面倾角套在土星赤道面，五颗天王星卫星又未匹配母星负自转方向，剔除六颗后计 14 颗有效卫星，超额奖励仍满。地球错误地给地月质心加上完整月球地心位移，日心位置偏差只扣数据项。setInterval(loop,120) 不断新增自注册的 rAF 链，运行正确性扣分，轨道稳定性不再重复扣同一问题。聚焦按钮仅切观察目标，双击才拉近，回到现在只恢复日期；没有彗星或完整重置。",
      "moonEvidence": [
        {
          "id": "luna",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "phobos",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "deimos",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "io",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "europa",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "ganymede",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "callisto",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "mimas",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "enceladus",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "tethys",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "dione",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "rhea",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "titan",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "triton",
          "quality": 1,
          "reason": "黄道Moon/母星赤道Kepler模型，基本方向成立"
        },
        {
          "id": "iapetus",
          "quality": 0,
          "reason": "Laplace面15.47°当作土星赤道倾角"
        },
        {
          "id": "miranda",
          "quality": 0,
          "reason": "Uranus负自转而各卫星以正period绕IAU北极，方向不匹配"
        },
        {
          "id": "ariel",
          "quality": 0,
          "reason": "Uranus负自转而各卫星以正period绕IAU北极，方向不匹配"
        },
        {
          "id": "umbriel",
          "quality": 0,
          "reason": "Uranus负自转而各卫星以正period绕IAU北极，方向不匹配"
        },
        {
          "id": "titania",
          "quality": 0,
          "reason": "Uranus负自转而各卫星以正period绕IAU北极，方向不匹配"
        },
        {
          "id": "oberon",
          "quality": 0,
          "reason": "Uranus负自转而各卫星以正period绕IAU北极，方向不匹配"
        }
      ],
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 8,
      "hasEarthMoon": true,
      "earthMoonValid": false,
      "moonEvidence": [
        {
          "id": "moon",
          "parent": "earth",
          "quality": 0,
          "reason": "L2062: 实际world轨道r×v有向黄道倾角174.855°，期望5.145°。",
          "actualInclinationDeg": 174.855,
          "expectedInclinationDeg": 5.145
        },
        {
          "id": "io",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.950000°，期望0.05°。",
          "actualInclinationDeg": 179.94999999999965,
          "expectedInclinationDeg": 0.05
        },
        {
          "id": "europa",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.530000°，期望0.47°。",
          "actualInclinationDeg": 179.52999999999986,
          "expectedInclinationDeg": 0.47
        },
        {
          "id": "ganymede",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.800000°，期望0.2°。",
          "actualInclinationDeg": 179.80000000000018,
          "expectedInclinationDeg": 0.2
        },
        {
          "id": "callisto",
          "parent": "jupiter",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角179.810000°，期望0.19°。",
          "actualInclinationDeg": 179.80999999999923,
          "expectedInclinationDeg": 0.19
        },
        {
          "id": "titan",
          "parent": "saturn",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角179.650000°，期望0.35°。",
          "actualInclinationDeg": 179.65000000000043,
          "expectedInclinationDeg": 0.35
        },
        {
          "id": "triton",
          "parent": "neptune",
          "quality": 1,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
          "actualInclinationDeg": 156.9,
          "expectedInclinationDeg": 156.9
        },
        {
          "id": "charon",
          "parent": "pluto",
          "quality": 0,
          "reason": "L2015/L2062: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角179.920000°，期望0.08°。",
          "actualInclinationDeg": 179.9200000000015,
          "expectedInclinationDeg": 0.08
        }
      ],
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 3.5,
        "integrity": 5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 0.5,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "源码与纯函数复核：实现8颗卫星，按实际有向法线及实体有效性计1颗有效；视觉不计分。环影、GPU运动带、HDR/Bloom/ACES与行星路径成立。右手赤道基正Z使普通卫星方向反转，仅海卫一方向正确，月球也逆行。部分矮行星自转小时又乘24、描述物理参数和回归日期有误；滚轮0.35可穿入，无完整复位。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    },
    'GPT6.1Sol(Ultra)V1': {
      "reference": false,
      "featureMap": {
        "rings": 1,
        "belt": 1,
        "bloom": 1,
        "aces": 1,
        "atmo": 1
      },
      "orbitModel": {
        "geometry": 1,
        "kepler": 1,
        "elements": 1,
        "orientation": 1,
        "epoch": 1
      },
      "orbitRuntime": {
        "pathFit": 1,
        "stability": 1
      },
      "moons": 13,
      "hasEarthMoon": true,
      "halley": true,
      "otherComets": 0,
      "correctness": {
        "runtime": 5,
        "data": 4,
        "integrity": 4.5
      },
      "visualBase": null,
      "interaction": {
        "drag": 1,
        "zoom": 1,
        "focus": 1,
        "follow": 1,
        "pauseReset": 0.5
      },
      "fatal": null,
      "note": "离线原生 WebGL2 内嵌纹理，使用 JPL 世纪率/开普勒行星轨道、13 颗卫星和哈雷，双向环影、动态小天体带、HDR/Bloom/ACES 及持续聚焦跟随均有实现。大气沿视线做八步密度与光学深度积分，并计算日照遮挡和散射相函数，维持完整功能分。卫星使用固定近似根数、手调 J2000 相位，哈雷以固定二体周期推进，数据项保留扣分；没有重复扣有效卫星项。按半径限制缩放，“现在”与总览分别恢复日期或镜头，没有完整状态重置。",
      "reviewedAt": "2026-10-11",
      "reviewVersion": "V3-20261011"
    }
  };
})();
