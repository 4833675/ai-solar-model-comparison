/* 作品评分输入；旧 visualBase 仅保留为历史记录，不参与评分。 */
(function () {
  'use strict';

  window.SCORES = {
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: .4, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 0, hasEarthMoon: false, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 5 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 的 J2000/开普勒轨道、小行星带、程序化表面与持续聚焦跟随均稳定，默认总览清楚；但没有月球或其他卫星，也没有哈雷、ACES、独立大气层和真正的后处理 Bloom，环系仅为透明几何，重置也不完整。'
    },
    'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: .4, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 4,
      interaction: { drag: .5, zoom: .5, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '详细文档版具备 JPL 世纪率、开普勒轨道、八颗卫星、哈雷、三套环和多重小天体带；但太阳颗粒噪声和默认曝光压低了画面层级，没有 ACES、独立大气或真正 Bloom，拖拽释放可能误选，缩放可进入大型天体，聚焦也不会持续跟随。'
    },
    'GPT5.6Sol(Light)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: .4, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: .5, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 6,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 总览简洁，开普勒轨道、月球、程序化行星、环系、拖拽缩放和聚焦均可运行；但轨道半长轴是显示尺度、相位未绑定真实历元，没有小行星带、哈雷、ACES、大气和真正 Bloom，拖拽释放还可能误触，聚焦后也不持续跟随。'
    },
    'GPT5.6Sol(Light)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: .4, aces: 0, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '详细文档版完整运行 JPL/开普勒轨道、八颗卫星、哈雷、小行星带与柯伊伯带，地球近景细节清楚；但环系只是七条线，没有物理环影，辉光与大气仅为简化近似，没有 ACES，缩放可进入大型天体，聚焦也不持续跟随且没有完整状态重置。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 的八颗卫星、小行星带、Bloom/ACES、大气与完整交互均稳定，默认总览清晰；但所有行星从近日点同步起步，没有真实初始平近点角，且缺少哈雷与物理环影。'
    },
    /* 一句话组（含三个金色参考作品） */
    'DeepSeek-V4-Flash-0731': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: .5 },
      orbitRuntime: { pathFit: .5, stability: .5 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 3,
      correctness: { runtime: 4, data: 4, integrity: 3 }, visualBase: 1.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道、材质和控制结构丰富，但小行星带与柯伊伯带的浮点颜色写入错误，Bloom 几乎洗白全场；仅月球，三颗彗星均非哈雷，悬停和聚焦也有缺陷。'
    },
    'DeepSeek_V4_Pro_high-1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 2.5,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: '多颗行星高光剪切成白色半球，环层次难辨；只有基础视角控制，没有模拟控制或聚焦。'
    },
    'DeepSeek_V4_Pro_high-2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: 1, orientation: 1, epoch: .5 },
      orbitRuntime: { pathFit: .5, stability: 1 }, moons: 0, hasEarthMoon: false, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 6.1,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: .5, pauseReset: .5 }, fatal: null,
      note: '视觉和交互相对完整，但没有月球；土星环几何被错误压成细线，暂停也不会真正停止时间。'
    },
    'DeepSeek_V4_Pro_high-3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 5.8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '曝光克制且关键行星有专用材质；轨道仅为基础元素形状，无开普勒与历元传播，按钮聚焦也不持续跟随。'
    },
    'GLM5.2Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '五项控制均可用，但轨道是简化非开普勒路径；过强 Bloom 抹去了中心细节。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 3,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '拖拽、缩放、聚焦和暂停可用，但没有完整重置；轨道简化，星空与土星观感粗糙。'
    },
    'GPT5.6Sol(Max)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 10, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版的 J2000/开普勒轨道、十颗卫星、小行星带、Bloom/ACES、大气与持续跟随均稳定，地球昼夜面、木星条纹和土星近景层次清楚；但没有哈雷，土星环缺少物理环影，缩放下限可进入大型天体，也没有一次完整状态重置。'
    },
    'GPT5.6SolUltra-WebGL2': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 14, hasEarthMoon: true, halley: false, otherComets: 1,
      correctness: { runtime: 4, data: 5, integrity: 4 }, visualBase: 9.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '十四颗卫星、完整渲染与交互很突出；程序世界需约 12 秒建成，彗星轨道根数也并非哈雷。'
    },
    'GPT5.6SolUltra': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false, otherComets: 1,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 6,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线版的轨道、卫星和五项交互均扎实；没有哈雷，土星环仅部分达到物理处理要求。'
    },
    'GPT5.6Sol(xhigh)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 13, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 5 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: 'Canvas2D 总览的十三颗卫星、开普勒轨道与完整交互均稳定；但相位并非真实历元，且无哈雷、Bloom、ACES 与物理环影。Canvas2D 技术路线本身不再额外扣分。'
    },
    'GPT5.6Sol(xhigh)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: .4, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 11, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版具备 J2000 开普勒轨道、十一颗卫星、小行星带、Bloom、大气与持续跟随；没有哈雷和物理环影，色调映射并非严格 ACES，也没有完整重置。'
    },
    'GPT5.6Sol(xhigh)V3': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: .4, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 7, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版的 J2000 开普勒轨道、七颗卫星、双粒子带、Bloom、大气和聚焦跟随均稳定，近景层次较好；没有哈雷与物理环影，色调映射并非严格 ACES，重置只覆盖镜头。'
    },
    'GPT5.6TerraUltra-Three': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 5, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 3 }, visualBase: 6,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '日期驱动的开普勒场景、聚焦和重置可用；依赖联网，聚焦动画结束后不再持续跟随。'
    },
    'GPT_5_5_xhigh': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 9, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 2,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道、卫星与哈雷覆盖很强，但最终画面过曝且聚焦过远；画布拖拽和点选路径也不一致。'
    },
    'Gemini_3_5_flash_high': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 10, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '十颗卫星、J2000 轨道与完整交互突出；没有哈雷，环透明阴影和大气实现只有部分证据。'
    },
    'Grok4.5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 5, hasEarthMoon: true, halley: false, otherComets: 1,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '开普勒求解器、历元和行星材质清楚；依赖联网且无哈雷，拖拽可能触发点选，也无持续跟随。'
    },
    'Grok4.6(xhigh)V1': {
      reference: false,
      moonQuality: .5,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 12, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 2.5, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '替换后的联网 Three.js 版拥有克制的总览、专用行星表面、十二颗卫星、哈雷、双星带、Bloom/ACES、大气和持续跟随；但轨道数据缺少 J2000 初始平近点角，所有行星与哈雷都从近日点同时起步，卫星升交点还由随机数生成。土星环没有物理环影，选择天体也往往要再点“复位镜头”才会明显拉近，重置不会恢复时间或显示开关。'
    },
    'Hy3': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 6.6,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '表面、红斑和程序化土星环较丰富；选定后不会主动拉近，但会持续跟随天体位移，暂停和重置可用。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 3,
      correctness: { runtime: 5, data: 2.5, integrity: 5 }, visualBase: 4.6,
      interaction: { drag: .5, zoom: 1, focus: 0, follow: 0, pauseReset: .5 }, fatal: null,
      note: 'Canvas2D 总览稳定，但拖拽是平移而非 3D 环绕，“双击聚焦”也不移动视角；功能与交互证据有限，但 Canvas2D 技术路线本身不再额外扣分。'
    },
    'Mimo_2_5_Pro_high-1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 2, integrity: 5 }, visualBase: 4.2,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 1 }, fatal: null,
      note: '可以稳定运行，暂停与完整视角重置均有效；但中文天体名让专用材质分支无法命中，也没有聚焦和跟随。'
    },
    'MiniMax_M3_thinking-1': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 3, data: 4, integrity: 1 }, visualBase: 4.7,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: .5, pauseReset: .5 }, fatal: 'L2',
      fatalReason: '外行星偏离轨道线，低速产生 NaN，重置失效。',
      note: '外行星会明显脱离轨道线，低速区间可产生 NaN，重置也不恢复视角；主画面仍可见，故按 L2 长程核心故障封顶。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 9,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线完整作品，表面、夜面、轨道和交互都很强；没有实际哈雷，环照明也未达双向参考实现。'
    },
    'Qwen3.7Max': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 5.2,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: .5 }, fatal: null,
      note: '开普勒求解与材质工作成立；太阳烧白且细节较低，没有点击聚焦、持续跟随或完整重置。'
    },
    'Qwen3.8MaxV2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3.5, integrity: 5 }, visualBase: 6.5,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: 'Canvas2D 总览稳定，带状物、月球与倾斜轨道清楚；但无开普勒求解、哈雷、ACES 或大气，也无聚焦、暂停和重置。'
    },
    'Qwen3.8Max-inQoder': {
      reference: false,
      featureMap: { rings: 0, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 2.1,
      interaction: { drag: 1, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: '运行稳定且有类开普勒传播，但没有可计分环结构；Bloom 洗白中心，点击只显示资料。'
    },
    'Qwen3.8MaxV1-inQoder': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 0, aces: 0, atmo: 0 },
      orbitModel: { geometry: 1, kepler: .5, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3.5, integrity: 5 }, visualBase: 4.8,
      interaction: { drag: .5, zoom: 1, focus: 0, follow: 0, pauseReset: 0 }, fatal: null,
      note: 'Canvas2D 有近似开普勒路径和基础行星数据，但拖拽只是平移，仅有悬停信息，视觉也缺色调映射与大气。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 6, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线的多卫星开普勒模型与持续跟随均成立；没有哈雷，环结构因缺参考级双向阴影而只计部分分。'
    },

    /* 详细文档组 */
    'Opus5Ultra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整 J2000/速率传播、哈雷、八颗卫星、双向环影与五项交互均经源码和实跑验证。'
    },
    'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': {
      reference: false,
      moonQuality: .5,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 7,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '功能、轨道、八颗卫星与跟随均成立；卫星距离和投影计算有误，桌面拖拽释放仍可误触点选。'
    },
    'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 0, data: 2, integrity: 1 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: 'L2',
      fatalReason: '双重帧调度让渲染循环持续倍增，长程性能失稳。',
      note: '主画面与控制初始可用，故非 L1；但相机聚焦后只保留旧位置数组，不能持续跟随，双重帧调度还会让循环持续累积，因长程核心故障按 L2 封顶。'
    },
    'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': {
      reference: false,
      moonQuality: .5,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: .5, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 2.5, integrity: 4 }, visualBase: 6,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: 'JPL/开普勒、八颗卫星、环影、多重小行星带与后期均可运行；但日冕明显过曝，哈雷实体不贴合轨道线，卫星距离数据失真，高 DPI 点选及聚焦后缩放仍有缺陷。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 6,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '轨道与数据系统稳定，但土星纹理和环近景异常；拖拽释放可误选，聚焦后不持续跟随。'
    },
    'GLM5.2Max-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 3,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '求解器、轨道元素和渲染管线均在，但全场洗白并剪掉细节；拖拽可误选，聚焦不持续。'
    },
    'GPT5.5xHigh-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '真实元素、哈雷、八颗卫星、双向环行为和持续聚焦均稳定；只扣固定角度与偏暖亮的视觉分。'
    },
    'GPT5.6Luna(Max)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: .4, aces: 0, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: .5, orientation: 1, epoch: .5 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 5,
      interaction: { drag: 1, zoom: .5, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 版具备开普勒轨道、月球、小行星带、程序化行星与持续锁定跟随，运行稳定；但没有哈雷和 ACES，辉光与大气只是简化近似，巨大橙色太阳光层主导总览，锁定视角也不会自动拉近，木星和土星难以形成有效近景。'
    },
    'GPT5.6Luna(Max)V2': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: .4, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: .5, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 2,
      correctness: { runtime: 5, data: 2, integrity: 5 }, visualBase: 3,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版的界面、ACES、大气层、小行星带和聚焦动画较完整，但行星轨道缺少真实升交点、近日点方向和历元，标为 HALLEY 的彗星根数也不是哈雷；默认太阳严重过曝，木星与土星聚焦后几乎只剩黑色轮廓，聚焦不会持续跟随，重置也没有恢复完整模拟状态。'
    },
    'GPT5.6LunaMax-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 3.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 0, pauseReset: 1 }, fatal: null,
      note: '功能与轨道管线完整，但聚焦后天体仍小且暗，土星环和红斑证据较弱，摄像机也不持续跟随。'
    },
    'GPT5.6SolUltra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 10,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '自带测试 API，轨道、渲染与五项交互均完整；地球、木星与土星细节清楚。'
    },
    'GPT5.6TerraUltra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整 J2000 元素、求解器、动态聚焦、哈雷与八卫星数据均稳定；视觉很强但仍低于 GPT-5.6 Sol (Ultra·Max)。'
    },
    'GPT5.6Sol(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 9,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '完整覆盖 JPL/开普勒轨道、八颗卫星、哈雷、三套环影、Bloom/ACES、大气与持续跟随；默认曝光克制、表面层次清晰，仅缺少完整状态重置。'
    },
    'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 5 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '轨道、八颗卫星、哈雷、环影、多层 Bloom 与完整聚焦跟随均可运行；但默认粒子密度、橙色辉光和轨道线明显过强，画面层级被大量高亮元素干扰，且没有完整重置。'
    },
    'GPT5.6Sol(high)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 5 }, visualBase: 7,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '八颗卫星、哈雷、小天体带、ACES、大气和持续跟随完整，整体画面清晰；但行星初始相位使用随机值而非真实历元，默认小行星带也过密，且没有完整状态重置。'
    },
    'Gemini3.1Pro-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: .5, focus: .5, follow: 0, pauseReset: 1 }, fatal: null,
      note: '源码没有独立大气壳或散射；运行稳定，但缩放边界弱，聚焦依赖列表且不持续跟随。'
    },
    'Gemini3.5Flash-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 2, integrity: 3 }, visualBase: 4,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '红斑可误出现在土星，环影混用坐标空间，大气也只是部分边缘效果；列表聚焦跟随可用，但画布拾取缺失。'
    },
    'Gemini3.6Flash(high)V0': {
      reference: false,
      featureMap: { rings: .4, belt: 0, bloom: 1, aces: 1, atmo: 0 },
      orbitModel: { geometry: 1, kepler: 0, elements: 0, orientation: 0, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 1, integrity: 4 }, visualBase: 3.5,
      interaction: { drag: .5, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '运行稳定、UI 与特效也完整，但它明确把“尽可能真实”改写成“脱离真实物理约束”的赛博幻想：八颗行星均为同构霓虹大理石球，轨道只是平面匀速圆周，没有开普勒、真实元素、历元、小行星带或哈雷，仅有月球；默认自动聚焦地球时还会被巨大的粉色晶体太阳遮挡。土星只有线框环且无环影，暂停和重置也只覆盖部分状态。'
    },
    'Gemini3.6Flash-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '专用大气、土星环、小行星着色器和完整元素均在；地球拼块、红斑弱和生硬环影扣分，拖拽释放还可误选。'
    },
    'Gemini3.7Flash(high)V1': {
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 0, elements: .5, orientation: .5, epoch: 0 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 1, hasEarthMoon: true, halley: false, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 4 }, visualBase: 4,
      interaction: { drag: .5, zoom: 1, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '联网 Three.js 版的椭圆轨道、月球、程序化表面、Bloom/ACES、大气与持续跟随均可运行；但公转只按偏近点角匀速推进，没有开普勒求解、轨道方向或历元，且仅一颗卫星、没有哈雷。太阳与土星近景明显过曝，木星夜面几乎全黑，拖拽释放也缺少误点抑制。'
    },
    'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 4 }, visualBase: 7.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、八颗卫星、哈雷、三套行星环、环影、Bloom/ACES 与完整交互，近景层次也较丰富；但轨道带重建时把 y 方向旋转矩阵中的 cos(Ω) 误写成 sin(Ω)，导致显示轨道与天体位置系统性不一致。默认小行星带和色散效果也偏亮、偏杂。'
    },
    'Grok4.6(xhigh)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 3 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '离线原生 WebGL2 版具备 JPL 世纪率、开普勒求解、八颗卫星、哈雷、三套环系与双向环影、Bloom/ACES、大气和完整交互，1440×900 实跑约 60 fps 且长程加速无报错；但彗尾代码把日心位置取反后当作背日方向，离子尾实际朝向太阳。默认太阳辉光也覆盖了大片内太阳系，近景表面带有明显颗粒与高光噪声。'
    },
    'Hy3-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: .5, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 2, integrity: 3 }, visualBase: 5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: .5 }, fatal: null,
      note: '求解与定向管线完整，但金星半长轴误用地球值；聚焦不持续，“此刻”恢复加载时间而非真正当前时间。'
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
      reference: false,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 1, integrity: 2 }, visualBase: 4.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: 1 }, fatal: 'L2',
      fatalReason: '环与大红斑核心结构失效，并出现 NaN 实时数据。',
      note: '环半径重复缩放而基本消失，大红斑永不可见，太阳速度还显示 NaN；按已批准阈值，复合核心结构与数据故障归 L2。'
    },
    'MiniMaxM3-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: .4, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 1, data: 1, integrity: 1 }, visualBase: 0,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: 'L1',
      fatalReason: '白场与巨大黑三角遮挡主画面，无法正常审阅。',
      note: '源码有名义功能与控制，但白场和巨大黑三角持续遮挡主画面，环着色器也丢弃输出；按 L1 主视图不可用封顶。'
    },
    'MiniMaxM3(high)V2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: .4, belt: .4, bloom: .4, aces: .4, atmo: .4 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 0, stability: 0 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 1, data: 1, integrity: 1 }, visualBase: 0,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 0, pauseReset: .5 }, fatal: 'L1',
      fatalReason: '全屏后期四边形以 XYZ 数据生成，却按紧密排列的 XY 读取；同时 4× MSAA 解析使用了非法的 LINEAR 过滤。两处核心合成错误叠加，使主画布持续全黑，仅 UI 可见。',
      note: '源码覆盖开普勒轨道、八颗卫星、哈雷彗星和完整控制框架，但逐轴距离压缩会把负坐标钳成正值，地球面板因此错报 39.0253 AU；聚焦不连续跟随，时间秒数显示 undefined，哈雷活跃期还会持续触发顶点缓冲不足警告。主视图不可用，按 L1 封顶。'
    },
    'Opus4.8Ultra-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4.5, integrity: 5 }, visualBase: 9.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整稳定的 WebGL2 实现与优秀土星证据；哈雷按规格书密切周期而非额外的 2061 实测回归校正，仍计实际哈雷。'
    },
    'Qwen3.8Max-TasksAssignedByOpus5': {
      reference: false,
      moonQuality: .5,
      featureMap: { rings: .4, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 2, integrity: 2 }, visualBase: 5.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: 1 }, fatal: null,
      note: '开普勒求解和元素变换成立，但环几何实质失效，卫星距离映射也错；拖拽释放会影响聚焦可靠性。'
    },
    'Qwen3.8MaxV2-TasksAssignedByOpus5': {
      reference: false,
      featureMap: { rings: 1, belt: .4, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 3, integrity: 3 }, visualBase: 2.5,
      interaction: { drag: 1, zoom: 1, focus: .5, follow: 1, pauseReset: .5 }, fatal: null,
      note: '环、大气与完整轨道源码成立，但粒子场与辉光压倒默认总览；拖拽释放可误选，且没有完整状态与视角重置。'
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
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 5, integrity: 4 }, visualBase: 8.5,
      interaction: { drag: 1, zoom: 1, focus: 1, follow: 1, pauseReset: 1 }, fatal: null,
      note: '完整的源码、运行覆盖与稳定控制；仅木星略发白且大红斑对比偏低。'
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
      reference: false,
      featureMap: {
        rings: 1,
        belt: 1,
        bloom: 1,
        aces: 1,
        atmo: 1
      },
      orbitModel: {
        geometry: 1,
        kepler: 1,
        elements: 1,
        orientation: 1,
        epoch: 1
      },
      orbitRuntime: {
        pathFit: 1,
        stability: 1
      },
      moons: 7,
      hasEarthMoon: true,
      halley: true, otherComets: 0,
      correctness: {
        runtime: 5,
        data: 4.5,
        integrity: 4
      },
      visualBase: null,
      interaction: {
        drag: 1,
        zoom: 0.5,
        focus: 1,
        follow: 1,
        pauseReset: 0.5
      },
      fatal: null,
      note: "离线原生 WebGL2 一句话版覆盖 JPL 世纪率/开普勒轨道、七颗卫星、校正到 2061 回归的哈雷、双向环影、多重小天体群、Bloom/ACES、大气及持续跟随。月球轨道在 5.1° 黄道倾角之外又叠加地球约 23.4° 轴倾角，按无效地球月球扣分。隐藏标签页的定时兜底会直接再次调用并自调度 frame，恢复可见后可能累积并行 rAF 循环；缩放也可进入大型天体，且没有完整状态重置。",
      earthMoonValid: false
    },
    'OmenAlpha(Max)V1-TasksAssignedByOpus5': {
      reference: false,
      featureMap: {
        rings: 1,
        belt: 1,
        bloom: 1,
        aces: 1,
        atmo: 1
      },
      orbitModel: {
        geometry: 1,
        kepler: 1,
        elements: 1,
        orientation: 1,
        epoch: 1
      },
      orbitRuntime: {
        pathFit: 1,
        stability: 1
      },
      moons: 8,
      hasEarthMoon: true,
      halley: true, otherComets: 0,
      correctness: {
        runtime: 5,
        data: 5,
        integrity: 5
      },
      visualBase: null,
      interaction: {
        drag: 1,
        zoom: 1,
        focus: 1,
        follow: 1,
        pauseReset: 0.5
      },
      fatal: null,
      note: "离线原生 WebGL2 文档版完整实现 JPL 世纪率/开普勒轨道、八颗卫星、哈雷、三套双向环影、多重小天体群、Bloom/ACES、大气与持续跟随；1440×900 实跑稳定且无控制台错误。拖拽误点抑制与按目标半径限制的安全缩放均成立，暂停和“此刻”可用；主要缺项是没有一次恢复镜头、时间、速度和显示开关的完整状态重置。"
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
      reference: false,
      featureMap: { rings: 1, belt: 1, bloom: 1, aces: 1, atmo: 1 },
      orbitModel: { geometry: 1, kepler: 1, elements: 1, orientation: 1, epoch: 1 },
      orbitRuntime: { pathFit: 1, stability: 1 }, moons: 8, hasEarthMoon: true, halley: true, otherComets: 0,
      correctness: { runtime: 5, data: 4, integrity: 5 }, visualBase: null,
      interaction: { drag: 1, zoom: .5, focus: 1, follow: 1, pauseReset: .5 }, fatal: null,
      note: '离线原生 WebGL2 文档版完整覆盖 JPL 世纪率/开普勒轨道、八颗卫星、哈雷、三套双向环影、小天体带、Bloom/ACES、大气和持续跟随，1440×900 高倍推进约 144 FPS且无报错。海卫一同时使用负周期和 156.9° 倾角，逆行方向被重复翻转；哈雷按 75.32 年周期推进，却把下一次近日点写成 2061 年 7 月。缩放下限可进入大型天体，也没有完整状态重置。'
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
