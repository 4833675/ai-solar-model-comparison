/* 作品评分输入；旧 visualBase 仅保留为历史记录，不参与评分。 */
(function () {
  'use strict';

  window.SCORES = {
"GPT6.1Terra(Ultra)V1":{
  "reference": false,
  "featureMap": {
    "rings": 0.4,
    "belt": 0,
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
  "earthMoonValid": false,
  "moonEvidence": [],
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
    "focus": 0.5,
    "follow": 0,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "原生离线Canvas2D，八行星使用JPL世纪根数、J2000/当前UTC历元、Newton开普勒和同源三维投影轨道，路径贴合；Canvas选择本身不扣分。土星环和行星径向光晕仅示意，无实际Bloom/ACES、小行星带、卫星或彗星。表面光照固定屏幕左上且无实体自转，归data4。独立遮挡故障：太阳始终先画、所有行星随后再画；正常拖到低角度并将日期滑块置1，金星深度−.857且投影完整落入太阳，仍画到太阳前方，integrity4.5，不与环/功能缺失重复。拖拽、有界二维缩放和物理暂停有效；点击只改信息与选中圈，镜头仍居中太阳，focus部分、follow0；复位恢复当前日期/视角，但保留1000天每秒、暂停及关闭轨道的状态，reset部分。JS/外网0，390px正常；无fatal。",
  "reviewedAt": "2026-10-27",
  "reviewVersion": "V3-20261027"
},
"GPT6.1Terra(Ultra)V2":{
  "reference": false,
  "featureMap": {
    "rings": 0.4,
    "belt": 0,
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
  "earthMoonValid": false,
  "moonEvidence": [],
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
    "focus": 0.5,
    "follow": 0,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "原生离线WebGL1，八行星JPL世纪根数、开普勒与当前UTC历元有效，反射映射(x,z,+y)本身可用，240等E同源轨道线贴合。土星环有结构但无双向阴影，行星仅rim大气；太阳billboard光晕不是亮源提取/扩散Bloom，也无ACES。未实现小行星带、卫星或彗星。反射世界的轨道黄北为−Y，但表面仍绕+Y侧轴推进，地球等实际逆行；另太阳自转.03rad/日对应209.44日，独立物理问题合并data4。真实距离开关将1AU缩到.20266单位却保留Sun半径.34，实测水星距.0722+半径.13、金星距.1467+半径.19均完全埋入太阳，integrity4.5，不当作视觉偏好。拖拽、安全有界缩放及物理暂停有效；选择只改资料、相机仍对太阳，focus部分/follow0；复位保留1000天每秒、暂停、真实比例与关轨道，reset部分。默认4×MSAA/depth24，JS/GL/net0，390px正常，无fatal。",
  "reviewedAt": "2026-10-27",
  "reviewVersion": "V3-20261027"
},
"GPT6.1Terra(Ultra)V1-TasksAssignedByOpus5":{
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
      "actualInclinationDeg": 5.14499999999973,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reference": "ecliptic",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.05000000000036243,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.47000000000248926,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.19999999999981222,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.18999999999694875,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 0.3500000000016677,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "actualInclinationDeg": 156.89999999999569,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualInclinationDeg": 0.0799999999939542,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reference": "equator",
      "reason": "原函数中心差分有向r×v与周期闭合复算成立；world=(x,z,−y)保持右手性，Triton补角配负周期后实际156.9°。真实AU及显示轨道同向且实体实际draw无GL错误。"
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
    "follow": 0.5,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "原生离线WebGL2，逐条对照实际任务。JPL世纪根数/J2000、稳健开普勒九行星与哈雷、同源180等E轨道、运动主带/希尔达/特洛伊/柯伊伯、双向同空间环影、亮源25采样扩散Bloom后全画面ACES、视线密度大气均有效。八颗卫星的周期/参考面及有向倾角实际成立：Moon5.145°、Io.05°、Triton156.9°、Charon.08°，全计；Triton对负周期用补角，正确处理了方向。球网格2592非退化三角全部朝外、模型基det≈1，HDR/depth24完整，可退RGBA8，JS/GL/外网0。信息卡真实AU和光行时有限，物理暂停冻结JD/全部位置与自转，Now和倒放有效。太阳近缩distance2.002<R4.6，zoom部分；Io在约1.053天每秒时，默认视角24/24在屏内，正常拖拽后的视角16/18在屏内、相机滞后约2.9单位，follow部分，不标核心fatal。聚焦平滑成立；任务没有全状态reset、额外卫星初相历表或潮汐锁定UI要求，任务自转表的内生符号矛盾也不归责。390px与真实比例往返正常，视觉不计分。",
  "reviewedAt": "2026-10-27",
  "reviewVersion": "V3-20261027"
},

"KimiK3.1Pro(Max)V1":{
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 5.1587466562818065,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.321583231105077,
      "reference": "ecliptic",
      "reason": "实际最终moonRelativeAU采用同一全局反射(x,z,+y)；以det(M)*M黄北[0,-1,0]而非错误母自转为参考，有向r×v≈5.15875°（含节点进动），黄道5.145°及27.32158d基本有效。增强模式保留方向，真实比例直接AU缩放；不额外要求外部高精历表。"
    }
  ],
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
  "note": "原生离线WebGL2，九行星JPL世纪根数/开普勒、当前UTC历元和统一反射世界映射有效。唯一Moon按正确映射黄北有向5.15875°/27.32158d，基本有效。主带位置虽更新，VBO却将全部3600颗颜色和点尺寸清零，带实际不可见，belt0，不重复扣完整性。环局部光向漏逆自转且无环投行星影，部分；大气仅rim。真实提亮/高斯Bloom后统一ACES成立。增强轨道线当前贴合，真实比例固定J2000/512等M旧线，当前Pluto实测偏264.339个实体半径，pathFit部分。全局反射后实体自转仍用+Y，普通行星及Moon名义锁定方向错误合并data4.5，不改已正确Moon轨道信用。真实Pause冻结JD/11天体位置与实体自转；默认Moon跟随16/16屏内，保留满分，不因30天/秒高速平滑限制重复过罚。拖拽、Nav/标签聚焦、Now和倒放有效；选中Sun近缩安全，但总览自由缩放distance.042<R2.15进入太阳，zoom部分。overview仅镜头复位、保留倒放速度，A重置部分。JS/GL/net均0，390×844正常；无彗星，无fatal。",
  "reviewedAt": "2026-10-24",
  "reviewVersion": "V3-20261024"
},
"KimiK3.1Pro(Max)V1-TasksAssignedByOpus5":{
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
      "actualInclinationDeg": 174.85500000000022,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.94999999999234,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.5300000000014,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.79999999999654,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.8099999999992,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 179.65000000000356,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "actualInclinationDeg": 156.89999999999384,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualInclinationDeg": 179.91999999998782,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "原函数中心差分有向r×v；显示分支严格采用任务§3.7正Z/Rx及proper母轴或黄道直接相加，内生方向按任务信用，不声称物理反向已修。真实AU支路缺分量的问题统一归data；实跑uDistanceNaN但solid确实绘制，不能据NaN输入误判全部卫星无效。"
    }
  ],
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "原生离线WebGL2，逐条对照实际任务。JPL世纪率/J2000、开普勒九行星和哈雷、同源引导线、运动双带、双向环影、Bloom后最终ACES及解析大气有效。8颗卫星显示轨道忠实采用任务正Z/Rx/proper母基，按任务信用；Moon174.855°等实际有向角保留，不称物理已经纠正。7颗赤道卫星的真实AU支路少写q[2]，导致信息卡距日/距地/光行时NaN并给光照上传NaN；实跑31×31 Io实体像素差分证明solid仍绘制，不能由NaN输入推断不可见，统一data4扣分而不重复moon或完整性。独立银河背景顶点输入vUv未绑定，空VAO给默认零，三点退化为一点，星表和主景仍运行，完整性部分。实际物理暂停冻结JD/实体位置与自转；1天/秒Io跟随12/12屏内、目标lag0，drag/focus/Now/reverse与距离比例回切有效；近缩可进入Sun（.6<R4.6），zoom部分。任务不要求全状态reset。JS/模型GL0，无fatal；视觉不计分。",
  "reviewedAt": "2026-10-24",
  "reviewVersion": "V3-20261024"
},

"MiniMaxM3.1Flash(Max)V1":{
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
  "moons": 18,
  "hasEarthMoon": true,
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 5.320151303617098,
      "expectedInclinationDeg": 5.145,
      "nominalPeriodDays": 27.321661,
      "instantAngularPeriodDays": 31.348569812277194,
      "reference": "ecliptic",
      "reason": "L538–570/L737–741：独立Meeus月球地心黄道级数；有向黄道倾角本轮历元5.320151°，一月范围4.434–5.873°为扰动近似，平均月运动/真实日历/母关联成立，质量1。不把对母星错误黄赤pole的夹角当Moon轨道倾角。",
      "actualToDrawnNorthDeg": 19.09132770830185,
      "physicalInclinationRangeDeg": [
        4.434434960957399,
        5.8726196098634595
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 42.84522657947402,
      "expectedInclinationDeg": 1.075,
      "nominalPeriodDays": 0.3189102589826629,
      "instantAngularPeriodDays": 0.24285542922494868,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.242855d而表给0.318910d；独立Rx(−EPS)物理母pole的有向r×v倾角42.845227°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 1.0737341972061125,
      "physicalInclinationRangeDeg": [
        41.544595747016686,
        42.85242743234838
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 42.68715376713618,
      "expectedInclinationDeg": 1.788,
      "nominalPeriodDays": 1.2624408416276485,
      "instantAngularPeriodDays": 0.5662986312553169,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.566299d而表给1.262441d；独立Rx(−EPS)物理母pole的有向r×v倾角42.687154°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.9243565094889179,
      "physicalInclinationRangeDeg": [
        40.15437925874463,
        43.55799808849499
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 46.87337198828318,
      "expectedInclinationDeg": 0.036,
      "nominalPeriodDays": 1.769137799754121,
      "instantAngularPeriodDays": 0.33578484273783843,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.335785d而表给1.769138d；独立Rx(−EPS)物理母pole的有向r×v倾角46.873372°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.008347152961210604,
      "physicalInclinationRangeDeg": [
        46.83757632218499,
        46.906346728985454
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 47.20330153293227,
      "expectedInclinationDeg": 0.466,
      "nominalPeriodDays": 3.551181079177,
      "instantAngularPeriodDays": 0.37080321676984257,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.370803d而表给3.551181d；独立Rx(−EPS)物理母pole的有向r×v倾角47.203302°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.42618483543832136,
      "physicalInclinationRangeDeg": [
        46.41823091941827,
        47.33923531920676
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 46.999169181997644,
      "expectedInclinationDeg": 0.177,
      "nominalPeriodDays": 7.154553119547032,
      "instantAngularPeriodDays": 0.39107831634868684,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.391078d而表给7.154553d；独立Rx(−EPS)物理母pole的有向r×v倾角46.999169°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.16408072565420098,
      "physicalInclinationRangeDeg": [
        46.70061253942039,
        47.045491226539816
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 46.94289796138307,
      "expectedInclinationDeg": 0.192,
      "nominalPeriodDays": 16.689017974837274,
      "instantAngularPeriodDays": 0.40368298776982436,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.403683d而表给16.689018d；独立Rx(−EPS)物理母pole的有向r×v倾角46.942898°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.1901027870913474,
      "physicalInclinationRangeDeg": [
        46.68537151446452,
        47.06100517299399
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 46.9473622045817,
      "expectedInclinationDeg": 0.348,
      "nominalPeriodDays": 15.945447576488629,
      "instantAngularPeriodDays": 0.43123003151811024,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.431230d而表给15.945448d；独立Rx(−EPS)物理母pole的有向r×v倾角46.947362°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.29861075859147707,
      "physicalInclinationRangeDeg": [
        46.350719728818575,
        47.0260982585962
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 46.957957520655256,
      "expectedInclinationDeg": 0.345,
      "nominalPeriodDays": 4.517499664324678,
      "instantAngularPeriodDays": 0.4033798634910911,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.403380d而表给4.517500d；独立Rx(−EPS)物理母pole的有向r×v倾角46.957958°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.29117640424327706,
      "physicalInclinationRangeDeg": [
        46.36428331511165,
        47.0394877562156
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 46.704809079413096,
      "expectedInclinationDeg": 0.009,
      "nominalPeriodDays": 1.3702180837122833,
      "instantAngularPeriodDays": 0.33495507550150444,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.334955d而表给1.370218d；独立Rx(−EPS)物理母pole的有向r×v倾角46.704809°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.008454412311162314,
      "physicalInclinationRangeDeg": [
        46.68795879040557,
        46.70572889336961
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "iapetus",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 50.584312180496106,
      "expectedInclinationDeg": 15.47,
      "nominalPeriodDays": 79.3308495725786,
      "instantAngularPeriodDays": 0.4449943210328647,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.444994d而表给79.330850d；独立Rx(−EPS)物理母pole的有向r×v倾角50.584312°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 5.1031395136439555,
      "physicalInclinationRangeDeg": [
        31.581464789638215,
        61.445402056513274
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 45.61604441327711,
      "expectedInclinationDeg": 0.34,
      "nominalPeriodDays": 8.70586545787208,
      "instantAngularPeriodDays": 0.7828012572623766,
      "reference": "negative physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.782801d而表给8.705865d；独立Rx(−EPS)物理母pole的有向r×v倾角45.616044°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 179.844018574884,
      "physicalInclinationRangeDeg": [
        45.41231119665382,
        46.08355073748894
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 45.70336259328028,
      "expectedInclinationDeg": 0.058,
      "nominalPeriodDays": 13.463228557003683,
      "instantAngularPeriodDays": 0.7588854502943169,
      "reference": "negative physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.758885d而表给13.463229d；独立Rx(−EPS)物理母pole的有向r×v倾角45.703363°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 179.95108454293066,
      "physicalInclinationRangeDeg": [
        45.694102286170846,
        45.80853486474849
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "ariel",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 45.718155359294855,
      "expectedInclinationDeg": 0.26,
      "nominalPeriodDays": 2.52037887166924,
      "instantAngularPeriodDays": 1.0051285774871843,
      "reference": "negative physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期1.005129d而表给2.520379d；独立Rx(−EPS)物理母pole的有向r×v倾角45.718155°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 179.76315483124588,
      "physicalInclinationRangeDeg": [
        45.50755855876444,
        46.00001832491841
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "miranda",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 47.35211989116592,
      "expectedInclinationDeg": 4.232,
      "nominalPeriodDays": 1.4134819134635417,
      "instantAngularPeriodDays": 1.4612189528753685,
      "reference": "negative physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期1.461219d而表给1.413482d；另用独立Rx(−EPS)正确IAU母pole量得有向r×v倾角47.352120°，不是原错误frame.z下的近似倾角。质量0。Miranda虽周期巧合接近，正确物理pole夹角47.352°，不能恢复半分；相同卫星问题不在data再次扣。",
      "actualToDrawnNorthDeg": 175.63422497355776,
      "physicalInclinationRangeDeg": [
        47.35211989116589,
        48.122329379576385
      ],
      "parentFrameDeterminant": 1
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 32.111953507875135,
      "expectedInclinationDeg": 156.865,
      "nominalPeriodDays": 5.876854078286229,
      "instantAngularPeriodDays": 0.6583242408909632,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.658324d而表给5.876854d；独立Rx(−EPS)物理母pole的有向r×v倾角32.111954°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 17.072766208445266,
      "physicalInclinationRangeDeg": [
        20.95438971361403,
        66.74536998497611
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "proteus",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 43.65908238725055,
      "expectedInclinationDeg": 0.075,
      "nominalPeriodDays": 1.1223120626100491,
      "instantAngularPeriodDays": 0.41986709573511705,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期0.419867d而表给1.122312d；独立Rx(−EPS)物理母pole的有向r×v倾角43.659082°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.030622830746868546,
      "physicalInclinationRangeDeg": [
        43.583265664871625,
        43.718791284160865
      ],
      "parentFrameDeterminant": 0.9999999999999997
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 0,
      "actualInclinationDeg": 33.99624443196929,
      "expectedInclinationDeg": 0.08,
      "nominalPeriodDays": 6.387222999112575,
      "instantAngularPeriodDays": 3.1942477863678786,
      "reference": "physical IAU north",
      "reason": "L573–600/L743–747：moonOffset的坐标乘包含母星W0+Wd*d的每日旋转frame，叠加母星自转，实际瞬时角周期3.194248d而表给6.387223d；独立Rx(−EPS)物理母pole的有向r×v倾角33.996244°。质量0，不把declared i或n当实际轨道；同一问题不在data再次扣。",
      "actualToDrawnNorthDeg": 0.040367915560341854,
      "physicalInclinationRangeDeg": [
        33.9241044325201,
        34.08327829257965
      ],
      "parentFrameDeterminant": 1
    }
  ],
  "halley": false,
  "otherComets": 1,
  "correctness": {
    "runtime": 4,
    "data": 3,
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
  "note": "原生离线WebGL2，JPL世纪率/开普勒、Meeus月球、运动双带、HDR三层Bloom与最终ACES有效；大气仅边缘壳。环投影到星球正确，星球投到环的射线符号相反，环部分。行星引导线因按数组索引创建orb_0而实际请求orb_mercury等全部缺失，pathFit0。18颗名义卫星中Moon有效；其余乘带每日W的母星frame，周期叠加母自转，17颗无效（Miranda虽周期巧合接近，实际有向轨道偏离正确物理母pole47°），同一卫星问题不在data重复。无哈雷，有独立恩克彗星1奖励；实际彗头POINTS1在视野内且GL0，不另扣非法不可见尾的朝向。grid累计offset错误产生负drawcount，comet把浮点数量作顶点数越界，实测重复GL_INVALID_VALUE/INVALID_OPERATION（终态1282）合并runtime4；611帧主loop持续且JS0/错误面板空、无fatal。黄赤变换反号、Sun质心质量单位与动态带角度单位合并data3。两个独立显示缺陷合并integrity4：26000星的单位方向被作为原点附近world坐标绘制，全系视角仅占.000228×.000186像素；卫星显示先于母星坐标更新，真实比例、moonGain1、普通UI10^5×下，Moon显示中心比同帧phys/1000错50059.252km，即28.81274个Moon半径。后者是显示次序故障，保留Moon轨道quality1，不重复扣已缺失行星引导线的pathFit。物理暂停前后JD/全部天体phys/disp/frame/双带一致；Moon在10^5×跟随12/12屏内且camera lag0，显示错位不当跟随故障重复扣。拖拽/聚焦/Now/倒放成立；最近Moon视距.1<实体半径1.7374，R仅回Sun且保留10^5×倒放，两项部分。",
  "reviewedAt": "2026-10-20",
  "reviewVersion": "V3-20261020"
},
"MiniMaxM3.1Flash(Max)V2":{
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
  "moons": 7,
  "hasEarthMoon": true,
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reference": "ecliptic",
      "actualInclinationDeg": 5.1071886582372965,
      "actualEclipticInclinationDeg": 5.1071886582372965,
      "actualDrawnEquatorInclinationDeg": 153.49514647520581,
      "unorientedEquatorPlaneAngle": 26.504853524794186,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.321661,
      "sourceLines": [
        523,
        780,
        2003,
        2021
      ],
      "reason": "最终ELP-2000月理覆盖名义Kepler Moon：proper世界变换后r×v黄道倾角4.99–5.11°、27.32d周期、真实父关联和顺行成立。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 3.0954885315034533,
      "actualEclipticInclinationDeg": 0.05000000000036243,
      "actualDrawnEquatorInclinationDeg": 176.90451146849657,
      "unorientedEquatorPlaneAngle": 3.0954885315034346,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "实际moonRelative未经母赤道basis直接当黄道，r×v与母赤道平面无向夹角3.095489°，不是输入0.05°；参考面缺失quality0，不由母星错误自转方向倒推。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 3.445757098674246,
      "actualEclipticInclinationDeg": 0.46999999999861186,
      "actualDrawnEquatorInclinationDeg": 176.55424290132575,
      "unorientedEquatorPlaneAngle": 3.4457570986742496,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "实际moonRelative未经母赤道basis直接当黄道，r×v与母赤道平面无向夹角3.445757°，不是输入0.47°；参考面缺失quality0，不由母星错误自转方向倒推。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 2.952278307571623,
      "actualEclipticInclinationDeg": 0.19999999999981222,
      "actualDrawnEquatorInclinationDeg": 177.04772169242838,
      "unorientedEquatorPlaneAngle": 2.9522783075716177,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "实际moonRelative未经母赤道basis直接当黄道，r×v与母赤道平面无向夹角2.952278°，不是输入0.2°；参考面缺失quality0，不由母星错误自转方向倒推。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 3.2976916730512227,
      "actualEclipticInclinationDeg": 0.189999999998867,
      "actualDrawnEquatorInclinationDeg": 176.70230832694878,
      "unorientedEquatorPlaneAngle": 3.2976916730512187,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689017,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "实际moonRelative未经母赤道basis直接当黄道，r×v与母赤道平面无向夹角3.297692°，不是输入0.19°；参考面缺失quality0，不由母星错误自转方向倒推。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 26.567024693656855,
      "actualEclipticInclinationDeg": 0.34999999999958503,
      "actualDrawnEquatorInclinationDeg": 153.43297530634314,
      "unorientedEquatorPlaneAngle": 26.56702469365686,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945421,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "实际moonRelative未经母赤道basis直接当黄道，r×v与母赤道平面无向夹角26.567025°，不是输入0.35°；参考面缺失quality0，不由母星错误自转方向倒推。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "reference": "parent-equator",
      "actualInclinationDeg": 38.26962047987922,
      "actualEclipticInclinationDeg": 23.115000000022107,
      "actualDrawnEquatorInclinationDeg": 141.73037952012078,
      "unorientedEquatorPlaneAngle": 38.26962047987922,
      "expectedInclinationDeg": 156.885,
      "periodDays": -5.876854,
      "sourceLines": [
        338,
        424,
        1978,
        1998
      ],
      "reason": "156.885°和负P同时进入标准Kepler公式，实际有向r×v相对黄道23.115°，且未建立Neptune赤道basis；对正确映射母赤道有向角38.2696°，不是156.885°，quality0。"
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
  "note": "离线打包Three.js r149，JPL世纪根数/开普勒与当前UTC历元、8行星proper世界坐标、双带、6级Bloom后统一ACES、真实哈雷有效。7颗卫星仅最终ELP Moon有效，另6颗缺母赤道参考面，Triton还叠加负周期与156.885°反转。土/天王星环最终均与母赤道垂直90°，母星缺环纹理，环影只有部分实现；大气为边缘光。初始轨道线误差小于实体半径，但正常比例按钮往返把已缩放顶点再次视作AU，同刻实体恢复后guide仍扩大50–149倍。正常顺行行星实体自转实际反向，合并data4；Pluto在太阳中心无状态/运动，以及“真实比例”仍失真，独立integrity4。默认Io12/12、快速8/8居中，跟随满分；暂停后JD/实体自转位置/双带/Sun时间全冻结，反放与Now正常。Sun最小缩放.0300196<R4.6，缩放部分；缺A完整reset，暂停与重置部分。隔离运行errors[]/warnings[]/GL0、scene4×MSAA/depth16完整，无fatal。",
  "reviewedAt": "2026-10-20",
  "reviewVersion": "V3-20261020"
},
"MiniMaxM3.1Flash(Max)V1-TasksAssignedByOpus5":{
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
      "periodDays": 27.32166,
      "expectedInclinationDeg": 5.145,
      "actualInclinationDeg": 95.14499999997227,
      "normal": [
        8.103446960681964e-13,
        -0.0896765581917414,
        0.9959709407964087
      ],
      "parentBasisDet": 0.9999999999999996,
      "displayDistance": 1.692,
      "displayRadius": 0.41717975576163957,
      "quality": 0,
      "reason": "L584–586额外黄道换轴使实际有向倾角95.145°，且L1598–1606低模VAO被环索引覆盖、solid draw越界失败；不在data重复扣。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "periodDays": 1.769138,
      "expectedInclinationDeg": 0.05,
      "actualInclinationDeg": 179.9500000000215,
      "normal": [
        0.015706522524579665,
        -0.9992157192491046,
        -0.03634902413654959
      ],
      "parentBasisDet": 0.9999999999999998,
      "displayDistance": 5.072701990581489,
      "displayRadius": 0.42555487470019454,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "periodDays": 3.551181,
      "expectedInclinationDeg": 0.47,
      "actualInclinationDeg": 179.53000000000063,
      "normal": [
        0.023035513513669545,
        -0.9990738154962562,
        -0.03634386202530011
      ],
      "parentBasisDet": 0.9999999999999998,
      "displayDistance": 6.549329760091805,
      "displayRadius": 0.39881469291737826,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "periodDays": 7.154553,
      "expectedInclinationDeg": 0.2,
      "actualInclinationDeg": 179.80000000000567,
      "normal": [
        0.018324136644577577,
        -0.9991712026402209,
        -0.03634740473163345
      ],
      "parentBasisDet": 0.9999999999999998,
      "displayDistance": 8.467211377968514,
      "displayRadius": 0.4968563570569457,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "periodDays": 16.689,
      "expectedInclinationDeg": 0.19,
      "actualInclinationDeg": 179.80999999999153,
      "normal": [
        0.018149632745673848,
        -0.9991743834731205,
        -0.036347520442343746
      ],
      "parentBasisDet": 0.9999999999999998,
      "displayDistance": 11.550961278442577,
      "displayRadius": 0.4786688483426695,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "periodDays": 15.945,
      "expectedInclinationDeg": 0.35,
      "actualInclinationDeg": 179.6499999998692,
      "normal": [
        -0.08670360454768464,
        -0.8795655473836275,
        0.467810787406809
      ],
      "parentBasisDet": 0.9999999999999999,
      "displayDistance": 5.762367519261363,
      "displayRadius": 0.4921194026359892,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "periodDays": -5.876854,
      "expectedInclinationDeg": 156.9,
      "actualInclinationDeg": 156.8999999998982,
      "normal": [
        -0.06502117000725864,
        -0.9963154193599251,
        -0.05592702921257469
      ],
      "parentBasisDet": 0.9999999999999998,
      "displayDistance": 4.300994261818852,
      "displayRadius": 0.3756334807417218,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "periodDays": 6.3872,
      "expectedInclinationDeg": 0.08,
      "actualInclinationDeg": 179.91999997688987,
      "normal": [
        0.6781818362551503,
        0.3888023724446739,
        0.6236201665717569
      ],
      "parentBasisDet": 1,
      "displayDistance": 0.8357995353352305,
      "displayRadius": 0.26804258921600144,
      "quality": 0,
      "reason": "L588–594的proper母轴/正Z/Rx周期忠实spec§3.7，原轨道可获任务信用；但L1598–1606低模VAO被环索引覆盖、实际solid draw越界失败，只有标签（Titan另有大气壳层），故最终有效质量0，不再在runtime/integrity重复扣。"
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 3,
    "data": 4,
    "integrity": 4.5
  },
  "visualBase": null,
  "interaction": {
    "drag": 1,
    "zoom": 0.5,
    "focus": 1,
    "follow": 0.5,
    "pauseReset": 1
  },
  "fatal": "L2",
  "fatalReason": "loop的simMs推进多乘1000，轨道/卫星/带与自转使用相差1000倍的模拟时钟，默认实时档持续过速；运行实测约.9054秒墙钟推进917模拟秒，而名义应.9054秒，偏差由源公式的额外1000确定。",
  "reviewedAt": "2026-10-20",
  "reviewVersion": "V3-20261020",
  "note": "原生离线WebGL2，逐条对照任务。JPL世纪根数/开普勒与行星轨道线、动态双带、Bloom/最终ACES及解析大气有效。核心时钟多乘1000，使JD、公转与自转不同步，实跑确认，按L2未完成；分数不封顶。低模VAO索引被环缓冲覆盖，8颗卫星实体逐draw均GL1282失败，只在卫星项扣；月球还多做坐标换轴，实际有向95.145°。其余7颗原轨道遵循任务算法，给定数据诱发方向不归责，但不能给未绘实体分；Titan仅有独立气壳。环的正背光分支反向，哈雷没有轨道线，离子尾向日；压缩world误作AU/光行时、低速标签×60合并扣数据。缩放回弹且可穿Sun；默认Io跟随12/12屏内，校准实际1天/秒后仅5/12屏内，部分分。物理暂停、倒放、此刻有效，任务未要求全状态复位。视觉不计分；致命错误自动灰色未完成。"
},

"DeepSeekV4.1Flash1017(Max)V2": {
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
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 0.5,
      "actualInclinationDeg": 3.4336303624504017,
      "actualEclipticInclinationDeg": 3.4336303624504017,
      "actualDrawnEquatorInclinationDeg": 23.676107470419513,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.321661,
      "reference": "ecliptic",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "L2246–2305/L2425–2434最终r=(cos a,.06 sin a,−sin a)，parent.moonsGroup未继承Earth tilt，proper world黄北+Y；有向r×v黄道3.433630362°，周期27.321661d、母关联/顺行正确，黄道参考面成立但incline数值偏离5.145°，部分quality0.5并保留Earth Moon锚点。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 3.332921583468809,
      "actualEclipticInclinationDeg": 1.1457628381751443,
      "actualDrawnEquatorInclinationDeg": 3.332921583468809,
      "expectedInclinationDeg": 0.036,
      "periodDays": 1.769138,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "月球挂parent.moonsGroup仅做母星平移，未建立母赤道basis；实际直接黄道小斜率圆，与已有QwenFlashA同口径错误参考面quality0，不因Jupiter倾轴较小而碰巧近似计半分。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 3.570254354171716,
      "actualEclipticInclinationDeg": 1.7183580016531674,
      "actualDrawnEquatorInclinationDeg": 3.570254354171716,
      "expectedInclinationDeg": 0.466,
      "periodDays": 3.551181,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "月球挂parent.moonsGroup仅做母星平移，未建立母赤道basis；实际直接黄道小斜率圆，与已有QwenFlashA同口径错误参考面quality0，不因Jupiter倾轴较小而碰巧近似计半分。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 3.3329215834684804,
      "actualEclipticInclinationDeg": 1.1457628381748262,
      "actualDrawnEquatorInclinationDeg": 3.3329215834684804,
      "expectedInclinationDeg": 0.177,
      "periodDays": 7.154553,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "月球挂parent.moonsGroup仅做母星平移，未建立母赤道basis；实际直接黄道小斜率圆，与已有QwenFlashA同口径错误参考面quality0，不因Jupiter倾轴较小而碰巧近似计半分。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 3.8779599438359225,
      "actualEclipticInclinationDeg": 2.2906100426371614,
      "actualDrawnEquatorInclinationDeg": 3.8779599438359225,
      "expectedInclinationDeg": 0.192,
      "periodDays": 16.689017,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "月球挂parent.moonsGroup仅做母星平移，未建立母赤道basis；实际直接黄道小斜率圆，与已有QwenFlashA同口径错误参考面quality0，不因Jupiter倾轴较小而碰巧近似计半分。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 26.752738523934813,
      "actualEclipticInclinationDeg": 1.1457628381751443,
      "actualDrawnEquatorInclinationDeg": 26.752738523934813,
      "expectedInclinationDeg": 0.34854,
      "periodDays": 15.945421,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "月球挂parent.moonsGroup仅做母星平移，未转Saturn赤道；有向r×v对所绘母赤道26.752738524°，不是约0.34854°，错误参考面quality0。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 151.25492092389024,
      "actualEclipticInclinationDeg": 174.85723544211393,
      "actualDrawnEquatorInclinationDeg": 151.25492092389024,
      "expectedInclinationDeg": 156.865,
      "periodDays": -5.876854,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2246,
        2269,
        2286,
        2425,
        2427,
        2431,
        2433
      ],
      "reason": "负周期确逆行，但在黄道小斜率圆而非Neptune赤道建轨；有向r×v对所绘母赤道151.254920924°而非约156.865°，未建母赤道/正确倾角quality0。"
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
    "follow": 0.5,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "离线打包Three.js r128，JPL世纪根数/当前UTC历元、开普勒、proper世界坐标及同源轨道线成立。7颗卫星中，月球黄道3.43363°、周期和顺行正确但倾角数值偏离5.145°，部分计0.5；4颗木卫及Titan/Triton未建立母赤道，实际有向法线不符而无效。环只母星投环影，大气仅Fresnel边缘辉光；运动双带、自建提亮/双级模糊及Bloom后统一ACES有效。负周期叠加大倾角造成Venus/Uranus/Pluto自转再翻、卫星名义锁定反转、belt的+Z映射逆行及Venus半径用直径合并数据扣分，不在moon重复。640段引导线误差及冻结世纪率漂移均小于实体半径，路径满分。A暂停/镜头复位部分；实跑确认默认Io跟随20次均离屏，镜头半径0.7000002而target滞后约2.4，跟随部分；正常Pause后JD、Earth/Moon位置与自转、双带时间和Sun实体自转完全冻结。暂停Sun最小距离0.280005小于半径3.6，缩放部分已实证。JS/GL0、requests[]，无任何彗星、无fatal。",
  "reviewedAt": "2026-10-18",
  "reviewVersion": "V3-20261018"
},
"DeepSeekV4.1Flash1017(Max)V2-TasksAssignedByOpus5": {
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
  "earthMoonValid": true,
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
    "follow": 0.5,
    "pauseReset": 1
  },
  "fatal": null,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 174.85499999999865,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.94999999998507,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.53000000004016,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.79999999999472,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.81000000000498,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 179.65000000005355,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "actualInclinationDeg": 156.9000000002329,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualInclinationDeg": 179.9200000065072,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "L2563–2589原函数数值r×v；严格spec§3.7正Z、Rx和proper母轴/黄道直接相加，内生反向不归责；保留实际有向角，不声称物理修复。"
    }
  ],
  "reviewedAt": "2026-10-18",
  "reviewVersion": "V3-20261018",
  "note": "原生离线 WebGL2，逐条对照详细任务复核。JPL世纪率/J2000、开普勒行星和哈雷、运动双带、Bloom/最终ACES及解析大气有效；8颗卫星忠实采用任务给定正Z/Rx/proper母轴，按任务信用全计，实际Moon174.855°等方向保留，不称物理已修。球面环影的光向漏逆自转，双向环影部分计分。行星与哈雷轨道线漏黄道到世界换轴，和实体偏离多个半径；默认Io近景跟随因目标平滑滞后仍会出屏。月球距地/光行时及反日离子尾正确，不重复扣分。拖拽、安全缩放、聚焦、物理暂停、正倒放和此刻有效，任务不要求全状态重置。视觉不计分。"
},

"DeepSeekV4.1Flash1017(Max)V1": {
  "reference": false,
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
  "moons": 15,
  "hasEarthMoon": true,
  "earthMoonValid": false,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 0,
      "reason": "L2248/L2350–2352/L2588–2595最终Three XYZ父子变换复算：月球挂在地球tilt23.4393°的parent.pivot，实际r×v对黄道北倾角23.966176050°，而不是5.145°；黄道参考面硬错，quality0。",
      "actualInclinationDeg": 23.96617605036169,
      "expectedInclinationDeg": 5.145,
      "actualEclipticInclinationDeg": 23.96617605036169,
      "actualDrawnEquatorInclinationDeg": 5.1449999990985145,
      "actualIAUPoleInclinationDeg": 36.61081473956694,
      "periodDays": 27.321661,
      "reference": "ecliptic",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角1.080000000°，真实周期0.31891天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 1.0799999999997978,
      "expectedInclinationDeg": 1.08,
      "actualEclipticInclinationDeg": 25.21163144784269,
      "actualDrawnEquatorInclinationDeg": 1.0799999999997978,
      "actualIAUPoleInclinationDeg": 2.5280567570296664,
      "periodDays": 0.31891,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角1.790000000°，真实周期1.263天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 1.7900000000179748,
      "expectedInclinationDeg": 1.79,
      "actualEclipticInclinationDeg": 25.24937694238999,
      "actualDrawnEquatorInclinationDeg": 1.7900000000179748,
      "actualIAUPoleInclinationDeg": 1.9742666966034106,
      "periodDays": 1.263,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.036000000°，真实周期1.769137786天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.0359999999936279,
      "expectedInclinationDeg": 0.036,
      "actualEclipticInclinationDeg": 3.1302068159358445,
      "actualDrawnEquatorInclinationDeg": 0.0359999999936279,
      "actualIAUPoleInclinationDeg": 4.475282773176583,
      "periodDays": 1.769137786,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.466000000°，真实周期3.551181天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.4660000000109385,
      "expectedInclinationDeg": 0.466,
      "actualEclipticInclinationDeg": 3.164465189571689,
      "actualDrawnEquatorInclinationDeg": 0.4660000000109385,
      "actualIAUPoleInclinationDeg": 4.2954317107476045,
      "periodDays": 3.551181,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.177000000°，真实周期7.154553天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.17700000000138957,
      "expectedInclinationDeg": 0.177,
      "actualEclipticInclinationDeg": 3.134995666463279,
      "actualDrawnEquatorInclinationDeg": 0.17700000000138957,
      "actualIAUPoleInclinationDeg": 4.412507749242404,
      "periodDays": 7.154553,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.192000000°，真实周期16.6890184天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.1920000000179186,
      "expectedInclinationDeg": 0.192,
      "actualEclipticInclinationDeg": 3.135877440450449,
      "actualDrawnEquatorInclinationDeg": 0.1920000000179186,
      "actualIAUPoleInclinationDeg": 4.406042042995218,
      "periodDays": 16.6890184,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.009000000°，真实周期1.370218天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.00899999993807682,
      "expectedInclinationDeg": 0.009,
      "actualEclipticInclinationDeg": 26.730001403597853,
      "actualDrawnEquatorInclinationDeg": 0.00899999993807682,
      "actualIAUPoleInclinationDeg": 34.24517972409046,
      "periodDays": 1.370218,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.345000000°，真实周期4.518212天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.3450000000144264,
      "expectedInclinationDeg": 0.345,
      "actualEclipticInclinationDeg": 26.732062432301266,
      "actualDrawnEquatorInclinationDeg": 0.3450000000144264,
      "actualIAUPoleInclinationDeg": 34.52188498221298,
      "periodDays": 4.518212,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.348500000°，真实周期15.945天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.34850000021649585,
      "expectedInclinationDeg": 0.3485,
      "actualEclipticInclinationDeg": 26.732104489164637,
      "actualDrawnEquatorInclinationDeg": 0.34850000021649585,
      "actualIAUPoleInclinationDeg": 34.52477218493719,
      "periodDays": 15.945,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "iapetus",
      "parent": "saturn",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角15.470000000°，真实周期79.3215天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。 此处incl15.47°是equatorial近似值，不是把7.6°的Laplace倾角套到equator。JPL分列Laplace i7.6°与参考面Tilt14.8°；原始研究给equatorial倾角随进动约5–21°，不能机械沿用既有7.6参考面误用的扣分。",
      "actualInclinationDeg": 15.470000000169598,
      "expectedInclinationDeg": 15.47,
      "actualEclipticInclinationDeg": 30.595961351625455,
      "actualDrawnEquatorInclinationDeg": 15.470000000169598,
      "actualIAUPoleInclinationDeg": 47.670844349628155,
      "periodDays": 79.3215,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.340000000°，真实周期8.705872天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.34000000007004466,
      "expectedInclinationDeg": 0.34,
      "actualEclipticInclinationDeg": 97.76986235006657,
      "actualDrawnEquatorInclinationDeg": 0.34000000007004466,
      "actualIAUPoleInclinationDeg": 77.1930894420938,
      "periodDays": 8.705872,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.058000000°，真实周期13.463239天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.057999999807764255,
      "expectedInclinationDeg": 0.058,
      "actualEclipticInclinationDeg": 97.76999599432438,
      "actualDrawnEquatorInclinationDeg": 0.057999999807764255,
      "actualIAUPoleInclinationDeg": 76.91274407077354,
      "periodDays": 13.463239,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角157.000000000°，真实周期5.876854天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。 retrograde=true将phase反向，incl23°后实测157°（近似目标156.9°），不是错误双翻。",
      "actualInclinationDeg": 157.000000000098,
      "expectedInclinationDeg": 156.9,
      "actualEclipticInclinationDeg": 144.12831250809188,
      "actualDrawnEquatorInclinationDeg": 157.000000000098,
      "actualIAUPoleInclinationDeg": 138.6924454753975,
      "periodDays": 5.876854,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "L2350–2352/L2588–2595最终实际r×v相对所绘母星equator有向倾角0.080000000°，真实周期6.3872天，母星关联和公转方向成立；按项目既有A基本信用quality1。母星全球poleLon简化只在data归责一次，不在本颗重复扣。",
      "actualInclinationDeg": 0.07999999989372637,
      "expectedInclinationDeg": 0.08,
      "actualEclipticInclinationDeg": 122.52996437826278,
      "actualDrawnEquatorInclinationDeg": 0.07999999989372637,
      "actualIAUPoleInclinationDeg": 111.38334142163633,
      "periodDays": 6.3872,
      "reference": "drawn-parent-equator",
      "sourceLines": [
        2248,
        2350,
        2351,
        2352,
        2588,
        2589,
        2590,
        2591
      ]
    }
  ],
  "halley": false,
  "otherComets": 0,
  "visualBase": null,
  "fatal": null,
  "note": "本轮重新核最终内嵌 Three.js r159 执行链：JPL世纪率/开普勒与径向压缩、15卫星中14颗基本有效、双向环影、运动双带、自建HDR/Bloom和末尾ACES成立；大气仅边缘辉光。月球继承倾斜Earth轴，实际黄道23.966176°，quality0并只执行月球锚点扣；其余按drawn母赤道与周期/实际有向法线信用，不突增高精IAU要求。轨道引导线固定启动T，实体继续世纪率，30年后Pluto旧guide偏5.44px，pathFit部分。父轴方位简化、反相自转使名义锁定失败、带映射逆转、Phobos年/日科普单位合并data4，不重复moon/path。无哈雷/额外彗星。拖拽/聚焦和物理暂停/Now可用，A无完整reset；默认Phobos跟随12仅2屏内，follow部分；暂停近缩另有77顶点near剪裁缺口，zoom部分。实跑JS/GL/net均0，无fatal。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "featureMap": {
    "rings": 1,
    "belt": 1,
    "bloom": 1,
    "aces": 1,
    "atmo": 0.4
  },
  "correctness": {
    "runtime": 5,
    "data": 4,
    "integrity": 5
  },
  "interaction": {
    "drag": 1,
    "zoom": 0.5,
    "focus": 1,
    "follow": 0.5,
    "pauseReset": 0.5
  }
},
"DeepSeekV4.1Flash1017(Max)V1-TasksAssignedByOpus5": {
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
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 174.85499999999575,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reason": "L941–963原始最终函数数值r×v；actual=174.855°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reason": "L941–963原始最终函数数值r×v；actual=179.95°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.5299999999921,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reason": "L941–963原始最终函数数值r×v；actual=179.53°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.7999999999984,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reason": "L941–963原始最终函数数值r×v；actual=179.8°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 179.81000000000498,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reason": "L941–963原始最终函数数值r×v；actual=179.81°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 179.65000000013995,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reason": "L941–963原始最终函数数值r×v；actual=179.65°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "actualInclinationDeg": 156.90000000016116,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reason": "L941–963原始最终函数数值r×v；actual=156.9°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualInclinationDeg": 179.92000000180101,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "L941–963原始最终函数数值r×v；actual=179.92°。严格按spec§2.4/3.7 local正Z、Rx倾斜及proper母基/黄道直接相加；提示内生反向不归责。Triton实际156.9°有效；其它反向保持实角记录，不声称物理修复。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "note": "原生离线 WebGL2，按详细任务逐条复核。JPL世纪率/J2000、开普勒行星和哈雷、同源动态路径、双带、Bloom/最终ACES及解析大气有效；8颗卫星忠实采用任务给定局部正Z/Rx和proper母基，按任务信用全计，实际Moon174.855°等方向仍明确保留，不称物理已修。行星投环阴影单位正确，但球面环影太阳方向漏逆自转，双向环影部分计分。月球卡把母星日心距当与地球距离并据此算光行时，data4.5；离子尾antiSun实际取朝太阳，独立完整性4.5，不在Halley重复扣。拖拽、平滑聚焦、默认及中速跟随、安全缩放、物理暂停、正倒放和此刻实际通过，任务不要求全状态重置。HDR降级/4×MSAA/手机重建正常，JS/GL/外网0，无致命故障，视觉不计分。"
},

    'GPT6.1Sol(xhigh)V1-TasksAssignedByOpus5': {
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
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对黄道北worldY有向倾角5.145000000°，期望5.145°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 5.1450000000067515,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对jupiter惯性pole有向倾角0.050000000°，期望0.05°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 0.05000000000765173,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对jupiter惯性pole有向倾角0.470000000°，期望0.47°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 0.4699999999993874,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对jupiter惯性pole有向倾角0.200000000°，期望0.2°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 0.20000000000345688,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对jupiter惯性pole有向倾角0.190000000°，期望0.19°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 0.1900000000007852,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对saturn惯性pole有向倾角0.350000000°，期望0.35°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。",
      "actualInclinationDeg": 0.35000000000375037,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对neptune惯性pole有向倾角156.900000000°，期望156.9°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。 负周期保留，内部把156.9°换为23.1°后配负Z局部相位，有向法线实测156.9°，没有双翻。",
      "actualInclinationDeg": 156.89999999998096,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "L46/L85–107：原始最终moonOffset的真实周期差分r×v相对pluto惯性pole有向倾角0.080000000°，期望0.08°；AU轨道半径与orbitKm/AU相等，显示路径与实体同源。 依据Pluto惯性pole及真实轨道有向法线，不以任务负rotH产生的母星自转效果反推卫星方向。",
      "actualInclinationDeg": 0.07999999999851003,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终源码重新复核：原生离线 WebGL2 的JPL/开普勒、8颗正确有向参考面和周期卫星、哈雷、双向解析环影、17900运动带粒子、HDR/Bloom/最终ACES及解析大气有效。最终model/normal/环坐标和球绕序配套，轨迹同源；768均偏近点角哈雷最大压缩弦距.00850，小于.22核半径。示意初相和二体日期已披露，任务自转参数/算法矛盾不归责。拖拽抑制误点、完整聚焦/持续跟随、暂停物理与此刻/日期/倒放成立；全景min8、焦点1.8R(土星2.75R)安全。哈雷构图偏移随当前位置重算。未见新独立数据、运行或完整性缺陷，100建议不变。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "note": "按完整任务和最终执行链重新核：自包含 WebGL2 的JPL/开普勒、8颗有正确有向参考面/周期卫星、哈雷、双向环影、动态17900带粒子、HDR/Bloom/最终ACES及解析大气有效。模型/法线/环投光都含实际自转，球网格外绕序，排除同类漏洞。512均偏近点角路径与实体同源，哈雷弦误差小于.22核半径。任务给定tilt、负rotH、signed/clamp和June/July矛盾不归责，初相示意已披露。拖拽、聚焦/跟随和暂停物理/日期/此刻/倒放有效；全景最低.5可入Sun4.6，zoom部分，焦点按1.45R安全。无其他已证硬错，98.75建议不变。"
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
  "note": "完整对照任务重新核：原生离线 WebGL2 的 JPL/开普勒、8颗实际有向倾角和参考面正确卫星、哈雷、双向环影、动态带、HDR/Bloom/最终ACES及解析大气有效。哈雷引导线512均平均近点角采样造成近日点最大弦距约6.465显示单位，保留pathFit部分；实体和其它轨迹不因此再扣正确性。自转参数和signed/clamp组合忠实任务，其物理双反矛盾不扣。Moon采用真实orbit h作同步轴，未见额外锁定反向错误。拖拽、完整聚焦、直接跟随与暂停/此刻/倒放成立，任务无fullreset；固定最低.3可进半径.72地球，zoom部分。无其它独立正确性硬错或额外彗星。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新核原生离线 WebGL2 的 JPL/开普勒、Meeus月球、22颗卫星、哈雷、双向环影、动态带与HDR/Bloom/最终ACES；大气仍为边缘光。卫星按真实有向基核16颗有效，5颗天王星卫星方向及土卫八7.57°Laplace参考误用保留无效，奖励仍满；不依母星错误自转推断。缓存1200天的月球路径本轮纯函数复算：启动JD2461313.5后500天到旧引导线最近约25003km，pathFit部分，实体稳定。土卫七错误同步锁定与海卫一同步姿态错误独立data4，不重复轨道/卫星。完整聚焦、精确跟随与逐帧半径安全缩放成立；暂停位置/自转有效，Now和视图reset分离，A部分。",
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "phobos",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "deimos",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "io",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "europa",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "ganymede",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "callisto",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "mimas",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "enceladus",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "tethys",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "dione",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "rhea",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "titan",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "hyperion",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "triton",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，黄道Moon/母星赤道Kepler模型，基本轨道方向成立；自转问题另在data"
    },
    {
      "id": "iapetus",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，Laplace面7.57°被当作土星赤道倾角"
    },
    {
      "id": "miranda",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，正meanrate绕IAU north但真实IAU相对运动方向为负极，方向错误"
    },
    {
      "id": "ariel",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，正meanrate绕IAU north但真实IAU相对运动方向为负极，方向错误"
    },
    {
      "id": "umbriel",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，正meanrate绕IAU north但真实IAU相对运动方向为负极，方向错误"
    },
    {
      "id": "titania",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，正meanrate绕IAU north但真实IAU相对运动方向为负极，方向错误"
    },
    {
      "id": "oberon",
      "quality": 0,
      "reason": "本轮重读L671–727/L1159–1190，正meanrate绕IAU north但真实IAU相对运动方向为负极，方向错误"
    },
    {
      "id": "charon",
      "quality": 1,
      "reason": "本轮重读L671–727/L1159–1190，Pluto DATA Wrate=+56.3625225，Charon正meanrate绕IAU north正确"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新核最终 Three.js r160 执行链：JPL世纪率/开普勒、Meeus月球及5颗正确母赤道规则卫星、哈雷、动态带、Bloom与末尾OutputPass的ACES有效。Earth引导线仍因earth→emb改传而在BODIES查空，退化太阳原点；Earth实体正常，仅pathFit部分扣。普通环材质无双向阴影，大气为边缘光。实体/云/大气与尺寸缩放同步，数据单位和EMB质量修正成立，无独立正确性硬错。拖拽/完整聚焦/相对平移跟随可用；.02近距下限缺半径保护，reset仅镜头/选择，分别部分。需运行CDN及字体，Composer无实际MSAA；无其它彗星或致命故障。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L681–718（月球）/L721–759（常规月）：正确黄道或所绘母赤道正向基础圆轨道/周期；理想化圆轨道本身不扣。"
    }
  ]
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
      "reason": "L1150–1154/L1163/L1199–1209：spinSenseEcl额外按Pluto负rotH翻转几何pole，再用于moonFrame；任务3.7未要求此翻极步骤，实际r×v对Pluto几何pole179.92°，quality0保留。",
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "对照完整任务与最终绑定重新核：原生离线 WebGL2 的 JPL/开普勒、同源行星与卫星路径、7颗有效卫星、哈雷、动态带、双向解析环影、HDR/Bloom/最终ACES和解析大气有效。Charon额外依据Pluto负rotH翻转moonFrame，实际179.92°仍无效，不把母星错误自转当真实参考。新增缩放实证：Sun半径4.6，wheel可将距离缩到1.5000035，近距无动态半径守卫，zoom降部分；小星体焦点安全不掩盖太阳问题。拖拽、完整聚焦/直接跟随和冻结物理的暂停/此刻/倒放可用。任务本身参数、相位未给历表和日期冲突不归责，无全状态reset要求；无其它独立正确性硬错。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "完整WebGL1原生应用及最后绑定重读，原分项保持：真实JPL世纪率/12次Newton与完整三角旋转，行星和512均E轨道同源、30天刷新，没有哈雷/卫星。静止2000点带仅部分分，土星环只有母星投环、表面Fresnel大气均部分；日冕是解析billboard，非Bloom或ACES。球绕序虽朝内但全程未启用CULL，不扣完整性；clear前上一帧已恢复depthMasktrue，未误判深度残留。大倾角配正spin正确表达逆行，轴方位/初经度简化已明确说明，不引入IAU严格项。跟随在近观直接锁当前体、缩放始终按所追目标或太阳2.8R限距安全；暂停物理JD/spin冻结，A日期和镜头分别恢复仍.5。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": []
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
      "parent": 3,
      "quality": 1,
      "worldNormal": [
        0,
        0.9959709407967984,
        0.08967655818741324
      ],
      "actualInclinationDeg": 5.144999999723371,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        -0.014834424886536312,
        0.9992603731939672,
        0.03547740693087773
      ],
      "actualInclinationDeg": 0.049999999993073134,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        -0.014837886608249175,
        0.9994935579239439,
        0.028150751136272772
      ],
      "actualInclinationDeg": 0.47000000000093833,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        -0.014835752732023559,
        0.99934981807968,
        0.03286094254558737
      ],
      "actualInclinationDeg": 0.19999999999981222,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        -0.014835667372686892,
        0.9993440681741943,
        0.03303538071005907
      ],
      "actualInclinationDeg": 0.18999999999119402,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": 6,
      "quality": 1,
      "worldNormal": [
        0.08670360454714254,
        0.8795655473805426,
        -0.46781078741270943
      ],
      "actualInclinationDeg": 0.35000000050359076,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": 8,
      "quality": 1,
      "worldNormal": [
        -0.06502117000152645,
        -0.9963154193597297,
        -0.05592702922271504
      ],
      "actualInclinationDeg": 156.90000000002854,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": 9,
      "quality": 1,
      "worldNormal": [
        -0.6781818363799949,
        -0.38880237210234303,
        -0.623620166649419
      ],
      "actualInclinationDeg": 0.08000000182539,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "负Z/absoluteP配正确倾角与proper母基；实际有向角符合参考，物理有效。",
      "sourceLines": "L30/34–35/44–47",
      "reviewedAt": "2026-10-17"
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
  "note": "完整任务与最终170行应用复核：8颗卫星负Z/proper母轴、Triton仅用绝对周期与156.9°，实际有向角均有效，不靠提示免责。JPL/稳健Newton、384均E行星/哈雷线、逐帧母星平移的卫星线正确。环影完整orient逆变换且双向半径单位一致，17900运动小天体、撞击参数大气、六级Bloom后ACES满分重新证实；raw卫星按km/AU另算，实时数据没有混显示单位。暂停dd=0同时冻结物理自转、Now真回当前符合任务，装饰云纹elapsed不归暂停。新查鼠标wheel有1.7R/全景5保护，但双指pinch另走固定min.8，可进入Sun4.6，zoom部分；其余交互保持。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "离线 Canvas2D 的 JPL世纪率/开普勒与同源三维投影行星路径、随模拟时间运动的小行星带有效。土星环和大气是绘图示意；普通渐变/阴影光晕没有亮源提取与扩散Bloom，也无ACES。唯一月球按27.32天在地球旁画屏幕空间椭圆，计半颗有效，未声称真实3D参考面。选择只改参数与标记、镜头仍固定太阳，focus部分/follow0；拖拽和有界缩放成立。JD物理暂停可用，resetView只恢复镜头。未见独立运行/数据/完整性错误，不因Canvas本身额外扣分，无彗星。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 0.5,
      "reason": "L472–479明确screen-space ellipse；27.321661天正确但无随3D镜头变换的参考面，2D示意partial。"
    }
  ]
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
      "reason": "L74/L232最终覆盖：母基Z=cross(axis,X)为额外左手基(det−1)，实际r×v对Neptune几何pole23.1°；不属于proper母基下忠实执行任务正Z/Rx的内生矛盾，quality0保留，非物理已修正。",
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
    "data": 5,
    "integrity": 4
  },
  "visualBase": null,
  "interaction": {
    "drag": 1,
    "zoom": 1,
    "focus": 1,
    "follow": 0.5,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "重新核全部文件尾覆盖与完整任务：原生 WebGL2 的 JPL/开普勒、当前同源行星路径、7颗有效卫星、哈雷、动态带、双向世界环影、Bloom/最终ACES和解析大气有效。海卫一仍因额外左手母基实际23.1°无效，任务不要求该左手基。新增独立完整性证据：外绕序球网格配负det模型和实际BACK/CCW剔除，净显示内侧，integrity4；不重复到卫星或数据。哈雷最终选择清空follow，持续跟随部分；普通聚焦/跟随、拖拽、安全缩放与任务暂停/此刻/正倒放有效。任务给定自转/日期冲突不归责，也不额外要求全状态reset。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新逐执行链与状态数据复核：离线原生 WebGL2 的 DE441锚点/IAS15/1PN动力学、由当前r/v重建的同源路径、67颗有向卫星状态、哈雷及超过3颗额外独立彗星、双向解析环影、动态带、HDR/Bloom/最终ACES和真实光程大气散射有效。卫星逐颗解码实际锚点并核proper变换，逆行按r×v保留，不以母自转猜方向。重新独算哈雷SBDB二体周期27728.046天，下一近日点2062-01-08与页面2061-07-28仍不合，A数据保留4.5。单主循环、完整飞行/直接跟随与逐帧半径缩放守卫有效；物理暂停成立，Now与仅恢复显示参数的设置复位分离，无完整A状态重置。视觉不计分，两类奖励均封顶。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "L1367–1478/L3781–3834：Moon由DE441锚点与同Nbody/1PN/J2动力学实体速度推进，坐标AU→km一致，真实有向状态不依错误母自转推导。"
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 1,
      "actualEclipticInclinationDeg": 25.65716791536286,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 1,
      "actualEclipticInclinationDeg": 24.123633222219325,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.227120192067366,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.0796135604683927,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.3433629149261956,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 1.9524454693514492,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "amalthea",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.4930083069786253,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "himalia",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.555617982073628,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "elara",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 29.46264620955511,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "pasiphae",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 152.90803430443862,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "sinope",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 159.04637877707876,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "lysithea",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 27.11620691170546,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "carme",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 162.33885007623482,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "ananke",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 148.94994098283527,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "leda",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.31495988976626,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "thebe",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 1.2254901239790825,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "adrastea",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.2218644178607683,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "metis",
      "parent": "jupiter",
      "quality": 1,
      "actualEclipticInclinationDeg": 2.2198684783292726,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "mimas",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.101909320372595,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.043570373388743,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "tethys",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.123426625761237,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "dione",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.025509651407802,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.27294892139141,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 27.70571118411442,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "hyperion",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 27.056352355530553,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "iapetus",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 16.981811963181148,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "phoebe",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 172.86637790273514,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "janus",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.118412807263315,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "epimetheus",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.36282491429923,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "helene",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.248951674040484,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "telesto",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.71582050722113,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "calypso",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 26.883845494099155,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "atlas",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.050905861253174,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "prometheus",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.050136712136702,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "pandora",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.096640450756166,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "pan",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.05183000138394,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "daphnis",
      "parent": "saturn",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.051378406903165,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "miranda",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 98.0491804629344,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "ariel",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.71790453327701,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "umbriel",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.71430469426643,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.7621660679099,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.9057281290424,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "puck",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 98.31784928507804,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "cordelia",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.86627235382865,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "ophelia",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.90684936517552,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "bianca",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 99.7538231956547,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "cressida",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 96.20085690686604,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "desdemona",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 95.0061757737945,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "juliet",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 99.61714946211467,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "portia",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 97.4227495506533,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "rosalind",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 99.38596638062613,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "belinda",
      "parent": "uranus",
      "quality": 1,
      "actualEclipticInclinationDeg": 96.33752653253504,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 129.12733035525088,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "nereid",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 5.099202638456096,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "naiad",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 24.111845286321252,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "thalassa",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.41480293505774,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "despina",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.48970894735931,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "galatea",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.533757812623904,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "larissa",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.691007513543468,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "proteus",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 29.04852091982987,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "hippocamp",
      "parent": "neptune",
      "quality": 1,
      "actualEclipticInclinationDeg": 28.875048863777607,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualEclipticInclinationDeg": 112.88777345799426,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "nix",
      "parent": "pluto",
      "quality": 1,
      "actualEclipticInclinationDeg": 112.86765668742137,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "hydra",
      "parent": "pluto",
      "quality": 1,
      "actualEclipticInclinationDeg": 112.62180712277625,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "kerberos",
      "parent": "pluto",
      "quality": 1,
      "actualEclipticInclinationDeg": 113.299252756069,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    },
    {
      "id": "styx",
      "parent": "pluto",
      "quality": 1,
      "actualEclipticInclinationDeg": 112.84335612433745,
      "reason": "L3155–3185/L3202–3259/L3275–3289：实际anchor r/v→proper有向基，逆行按r×v翻(y,z)后同基复原；propagate与实体/guide同源；保留真实有向参考，基本信用1。"
    }
  ]
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
  "note": "重新核对最终Three.js调用链：Bloom后OutputPass真实ACES，运动带成立；环仅母星投环、表面边缘大气仍部分分。开普勒初值归一化但残差用未归一化M，当前周期彗星残差1.74777rad；标注2026-09-01对应轨道时刻偏3.5天，分别保留求解/历元扣分。全局(x,z,+y)反射须用轴向变换，月球实际黄北5.1°有效，其余8颗未变换到母星赤道、方向与参考面均不正确。独立周期彗星可加1，无哈雷。表面局部法线对世界光向仍是独立data4；minDistance2可进入Sun9/Jupiter4.6，复位仅镜头。跟随已由本轮默认速度跟随运行验证。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 1,
      "reason": "150/569/814–815:5.1° applied to unrotated ecliptic XZ plane; idealized circular orbit with actual period accepted.",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Phobos",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Deimos",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Triton",
      "quality": 0,
      "reason": "558–570/812–815:moon group attaches to unrotated planet translation; inclination is applied to global ecliptic instead of its parent equator (Triton157° also relative wrongplane).",
      "sourceLines": "L150–194/539–571/812–816: pure numeric actual directed planes in numerics-01.json.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5': {
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
    "orientation": 0,
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
      "reason": "L1215: 实际world轨道r×v有向黄道倾角84.855°，期望5.145°。 本次按任务核对仍保留：月球分支将local再次交换到ox=lx,oy=lz,oz=-ly，实际84.855°；不是直接世界偏移。",
      "actualInclinationDeg": 84.855,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.05000000000036243,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.4700000000001629,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.19999999999981224,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.1900000000007852,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.34999999999958503,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。 本次按任务核对仍保留：Z=axis×X给左手母轴基；负P与156.9°结果为23.1°。不能以普通卫星正确倒推Triton正确。",
      "actualInclinationDeg": 23.099999999999994,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "L897/L1215: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.07999999999851001,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L897–903/1215–1223/1267–1272 final world offsets; baseline angle evidence independently rederived from basis det−1 and signedP.",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务及最终调用链复核：月球额外坐标交换成84.855°、Triton左手母轴成23.1°，仍为6颗有效；不能把提示内生方向冲突当另一项扣分。升交点基准未转弧度、rate遗漏T保留定向扣分。新增确证：环投行星只处理Lo.y<0，另一太阳侧缺影，环部分分；257个等M点使哈雷近日点到折线11.1225显示单位，路径部分分；彗尾−position实际向日，独立data4。球网格局部朝外与负行列式模型净合成朝内，BACK剔除画远侧，integrity4。暂停/此刻符合任务、无需完整reset；缩放下限1.2仍可穿大球。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新读实际完整父链：世界映射(x,z,−y)保持右手，卫星scene→母星平移→Rx(−tilt)→moHolder没有额外反射；正P的(cosθ,+sinθ sin i,+sinθ cos i)使普通卫星r×v对母几何pole为180−i，海卫一负P/inc23净23°，月球黄道151.415°。旧把17颗计有效漏查有向运动，本次18颗均无效；这是一句话A，没有文档公式免责。月线本就漏倾角及固定J2000行星线，pathFit.5保留。环缺环向球投影、大气rim、真实Bloom后ACES保留；JPL与Kepler完整。哈雷/恩克/67P有独立轨道，哈雷ω误当ϖ以及密度单位/负spin叠翻在data4一次说明；不再重复扣彗星功能或orbit方向。zoom仍可穿球、Now仅日期。",
  "moonEvidence": [
    {
      "id": "Phobos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 178.92000000000021,
      "expectedInclinationDeg": 1.0799999999997851,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Deimos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 178.21000000000015,
      "expectedInclinationDeg": 1.78999999999985,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Moon",
      "parent": "earth",
      "quality": 0,
      "actualInclinationDeg": 151.41500000000002,
      "expectedInclinationDeg": 5.145,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 179.95000000001423,
      "expectedInclinationDeg": 0.04999999998577209,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 179.5300000000014,
      "expectedInclinationDeg": 0.4699999999986062,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.1999999999998181,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 179.72000000000122,
      "expectedInclinationDeg": 0.279999999998779,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Mimas",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 178.43,
      "expectedInclinationDeg": 1.5699999999999932,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Enceladus",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 179.98000000003145,
      "expectedInclinationDeg": 0.0199999999685474,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Tethys",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 178.1400000000004,
      "expectedInclinationDeg": 1.8599999999995873,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Dione",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 179.98000000003145,
      "expectedInclinationDeg": 0.0199999999685474,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Rhea",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.349999999999568,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.349999999999568,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Iapetus",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 164.50000000000006,
      "expectedInclinationDeg": 15.499999999999943,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titania",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 179.6600000000007,
      "expectedInclinationDeg": 0.33999999999929287,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Oberon",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 179.6600000000007,
      "expectedInclinationDeg": 0.33999999999929287,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Triton",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 23.00000000000001,
      "expectedInclinationDeg": 157,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Charon",
      "parent": "pluto",
      "quality": 0,
      "actualInclinationDeg": 179.91999999999695,
      "expectedInclinationDeg": 0.08000000000305363,
      "reason": "A无任务公式免责；proper world映射、完整父链均无反射。positive P净r×v绕母pole反向，TritonnegativeP/inc23净23°；Moon额外继承Earthtilt黄道151.415°。",
      "sourceLines": "L450–487/1372–1437/2230–2236",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "pathFit": 0.5,
    "stability": 1
  },
  "moons": 13,
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
  "note": "本次核到旧Moon有效判断错误：行星proper映射(x,z,−y)，月球局部正Z圆周的r×v对黄北174.855°，实际逆行，应无效；其他12颗仍绕全球参考面而非母赤道，均无效，卫星问题不重复扣data。JPL/Kepler完整，双向环影空间单位一致，Bloom后OutputPass真实ACES，大气rim部分分。行星轨道线固定J2000，哈雷720等M采样近日点粗疏，pathFit降部分。聚焦半径缩放安全，但overview/ESC重设1.2下限小于太阳22，缩放改部分；Now和wide分别只恢复日期/镜头。负自转与大tilt重复翻转在data4保留。",
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 0,
      "reason": "Proper world=(x,z,−y), but L2058–2063 U×V gives −cos(5.145) Y: Moon actual174.855° to physicalecliptic, A has no formula exemption.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "phobos",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "deimos",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "rhea",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titania",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "oberon",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "quality": 0,
      "reason": "Final L1402–1404 attaches moon to untranslated-axis parentgroup, L2058–2063 uses globalplane rather than parenttilt; keep0 after directed normal check.",
      "sourceLines": "L467–524/1402–1404/2051–2064 actual U,Vcross; Moon h.y=−cos5.145 gives174.855°, no globalreflection.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'Hy4Preview(high)V1-TasksAssignedByOpus5': {
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
      "reason": "L1863: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L1689/L1863: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L1684–1694 properbasis; L1863–1881 Moonphysical5.145, eqpositiveZpromptformula6reversecredited, Triton156.9. Source-a/numerics will retainall8actualangles.",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终链重新核对：8颗卫星按任务信用成立，保留实际有向角，未把提示诱发方向错误归责。JPL/Kepler/均E轨道线、母星偏移与动态缩放一致，运动带、六级Bloom后ACES和撞击参数大气成立。新查ring-on-body和表面光照的sunO/camO只按母basis变换，却未逆掉模型中额外Ry(phase)，环影随自转偏移，rings改部分；母星投环方向/单位正确。原data3.5仍由卫星把天数当rotH后/24、快24倍且声称潮汐锁定承担，不再为环影重复扣。暂停/此刻符合任务，zoom0.16可入球仍部分。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角174.855000°仍与物理期望5.145°不同。模型源文件未改。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L1462/L1573: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L1462–1470properB; L1570–1590 directworldMoon/properEq signedP per spec3.7, actualangles preserved from source-derived normal.",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "逐任务重核：8颗卫星完整按§3.7实际路径计任务有效，物理角与免责原因保留。GPU均E512轨道与当前元素同坐标，双向环影使用实际含自转逆变换、正确半径和t>0，六级Bloom合成后ACES、撞击参数大气与运动带成立。新增独立数据错误：moon显示偏移直接混入未压缩AU坐标，信息卡据此计算与地距离及光行时，月球显示约数AU而非0.00257AU；太阳又在自转循环被跳过，data5改4一次。任务给定signedspin/July矛盾不扣；暂停/此刻可用，overview下限1.2入Sun保留zoom.5。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新核对：行星同源均E256轨道、固定真实J2000根数及开普勒成立，9颗卫星通过实际负Z圆周与母轴变换有向有效，Moon独立黄道5.14°。环为无阴影透明MeshBasic、大气rim，Bloom后OutputPass真实ACES和运动双带成立。data4.5改4：Uranus/Pluto负spin叠倾轴仍错，Moon等负Z轨道却mesh.rotation.y=−θ+π使固定面无法持续朝母星，独立潮汐锁定错误，另Sun实体无物理自转；不扣moon轨道。哈雷核心元素/过近日点标定成立，尘埃尾沿正速度偏移不在orbit/功能重复扣。zoom1.4可入大球、Now/wide分开恢复，pauseReset仍.5。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 1,
      "reason": "249toEcliptic:true/985–986/1138–1141:5.14°inclinationoutsideEarthtiltgroup,correcteclipticreference.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Phobos",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Deimos",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Charon",
      "quality": 1,
      "reason": "255–289/985–986/1138–1141:actualperiod/inclinationinparent-equatorialframe;idealizedcirclesaccepted.",
      "sourceLines": "L249–289/932–986/1136–1142 positiveP offset(cos,+sinI,−sinCosI) gives +pole; Moon eclflag correct; all9basicvalid.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "L1654: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。 本次按任务核对仍保留：Moon输出[c,s*cosI,s*sinI]到world，有向95.145°；不是XZ局部Rx后直接相加。",
      "actualInclinationDeg": 95.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L251/L1654: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L251–257 properB; L1654–1661Moonextra[eclvertical]95.145; properEqpromptformula6reversecredited;Triton156.9; realAUcorrectkm/AU L1694.",
      "reviewedAt": "2026-10-17"
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务及最终draw链复核：7颗任务有效、Moon额外映射95.145°仍无效，原球面环影世界长度误当归一化半径保留rings.4。新核哈雷512等M线近日点粗采样，pathFit改.5；独立尘埃尾的差分平均角表达式先乘TAU再%1，并把正速度当negVel，data改4.5，不与哈雷轨道信用重复。撞击参数大气、六级Bloom后ACES、GPU运动带成立。默认cam虽focusSun但minD2<Sun4.6，显式聚焦才安全，zoom改.5；暂停/Now符合任务，跟随直接取当前pos成立。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": false,
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
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "重新核对最终有效定义：末尾mul3被定义为恒等矩阵，所有实体spinM均失效；独立data4保留，旧“逆时自转”说明纠正为实际无物理自转。6颗卫星正周期正Z运动在proper世界净反向，月球174.9134°而非5.1°，全部0。局部球面三角网格朝内且模型proper、BACK剔除，integrity4。环径范围钳值取代范围拒绝、环面投影又混绝对世界位置，rings.4；大气rim。完整JPL/同源行星线、实际Bloom后ACES和运动带保留。所谓哈雷把角度转弧度写成除法，运动快3282.8倍，仍不计且不改其他彗星。安全聚焦缩放成立，Now只改日期且paused时实体暂不重算，A复位仍部分分。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 174.91340559759715,
      "expectedInclinationDeg": 5.1,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 179.9600000064985,
      "expectedInclinationDeg": 0.04,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 179.5300105416725,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 179.8000008123072,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 179.81000069645236,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "quality": 0,
      "reason": "A完整执行链为proper全局映射；局部(cosθ,inclRad*sinθ,+sinθ)正周期净r×v绕−Y。eq母轴为proper旋转，不能将近似同一无向平面当正确方向。",
      "actualInclinationDeg": 179.67000364893946,
      "expectedInclinationDeg": 0.33,
      "sourceLines": "L198–204/248–258/1279–1283",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "L1674: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。 本次按任务核对仍保留：黄道分支额外将sin*cosI放worldY，实际95.145°。",
      "actualInclinationDeg": 95.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.05000000000036243,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.4700000000001629,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.19999999999981224,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.1900000000007852,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.34999999999958503,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。 本次按任务核对仍保留：Z=Y×X的左手基使Triton实际23.1°，区别于题给proper母轴基路径。",
      "actualInclinationDeg": 23.099999999999994,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "L201/L1674: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 0.07999999999851001,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L201–213leftbasis, L1674–1681finalmoonoffset actualMoon95.145/Triton23.1; other6directedvalid.",
      "reviewedAt": "2026-10-17"
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
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终函数重核：八颗仍6颗有效，Moon额外映射95.145°、Triton左手基23.1°不能按提示proper公式免责。新增硬证据：Ribbon.fill原地覆盖输入，80点圆上传474顶点仅剩2个不同位置，实际行星/月球/哈雷轨道与尾缎带均退化，pathFit0，不在integrity重复扣。球网格本地朝外但makeBodyModel左手基净朝内，BACK剔除独立integrity4。哈雷仍将结果写临时Array.from后丢弃、实际保持原点，功能0；Moon地心距离沿用母星0AU，data4保留。环兼容点路径部分分，真实撞击参数大气、六级Bloom合成后ACES和运动带成立；安全缩放/聚焦/跟随及暂停此刻符合任务。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "data": 4,
    "integrity": 4
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
  "note": "原生离线WebGL2；固定J2000根数、Kepler及实体/轨道同源，节点/近心点符号不一致保留定向半分。六颗母赤道近似卫星有效；月球错误继承23.44°地球赤道、Triton缺156.9°逆行倾角，分别剔除，月球锚点扣2。环仅行星投环影，大气为边缘光，运动小行星带与Bloom后ACES有效。新增确认：球网格朝内而以正行列式模型/CULL_BACK绘制，完整性扣1；表面使用旋转后的世界方向作纹理输入，球体自转不带动地表，数据扣1。深空视图以太阳为中心时最小距离3小于太阳半径3.6，缩放半分。暂停能冻结物理时间，完整复位不足；实跑：暂停后点击地球精确中心[720,450]却切到太阳（太阳当时在屏外/背面），拾取半分；全景dist3进入太阳3.6也已实证。",
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角174.855000°仍与物理期望5.145°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L226/L342: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。 本轮重读最终L330–361，纯函数r×v复算已记录02.numeric.json，任务内生方向问题不转嫁模型。",
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
    "follow": 0.5,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "离线原生WebGL2，HDR可降级、场景4×MSAA、双向环影、指数密度大气、运动双带及Bloom后ACES成立。完整JPL世纪率与Kepler/历元定向有效；八颗卫星忠实spec§3.7局部正Z/母轴算法，保留任务信用及真实有向角证据，不把提示矛盾归责模型。新增：Halley按等平近点角仅384段采样，压缩空间轨迹最坏偏离8.1227而核半径.16，pathFit半分；普通地球表面实际绕正轴反转，另所有卫星以母星方向作太阳照明，合计数据扣1。离子尾朝日的独立完整性扣1保留；暂停后spin仍按非零dayStep推进、无聚焦zoom floor.5小于太阳4.6，交互各半分。等待camDist与wanted误差<2%后，默认Io12样本仅3在屏内且多次深度为负，follow半分；暂停JD固定而Earthspin从.3776到2.01797，已实证。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": false,
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
  "note": "联网Three.js；完整JPL世纪率与Kepler、同坐标轨道/行星运动、运动双带、Bloom后OutputPass ACES成立。纠正旧误扣：初始化L1300先更新世界矩阵，再L1301–1308读取环网格世界法线，纯数学与母极点积1；双向环影空间/长度一致，恢复环满分。大气仍仅Fresnel壳光。15颗名义卫星中月球继承地球赤道、Triton无真实倾角剔除，其他13颗母赤道圆轨道保留基本信用；运行验证确认暂停simMs固定但Phobos角4.339→3.982仍追赶；沿原pauseReset半分计，不在moon/data重复扣。金星/天王星/冥王星自转重复翻转且卫星局部反旋抵消pivot，自称潮汐锁定实际固定朝向，数据4。轨道线虽然固定J2000，但2026至2100实算偏差远小于实际显示球半径，不仅因代码未更新强扣pathFit。全景min10可入太阳14，缩放半分；聚焦后按位移量精确跟随，完整复位不足。",
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "联网Three.js使用完整JPL世纪率、Kepler、同源采样轨道、运动双带及Bloom后OutputPass ACES；大气仅Fresnel，环只有透明受光几何。纠正旧卫星信用：最终实体位置L1414为(cos,0,+sin)，而全局行星L381为proper(x,z,-y)，七颗月轨道方向全部反了：月球174.86°、五颗普通卫星180°、Triton23°顺行，全部计无效且月球锚点扣2；这是A版，无任务提示免责。金星/天王星双翻、夜光不分昼夜与小行星带同样逆行合并数据扣1，不重复卫星缺陷。真实Halley成立。行星聚焦及delta跟随成立，最小距离18>太阳8.5、聚焦floor2.2R安全；卫星拾取仅信息卡、完整复位不足。",
  "moonEvidence": [
    {
      "id": "Moon",
      "parent": "earth",
      "periodDays": 27.3217,
      "actualInclinationDeg": 174.85999999997014,
      "quality": 0,
      "normal": [
        1.4725814952209825e-14,
        -0.9959787627599441,
        -0.08958964299053367
      ],
      "reference": [
        0,
        1,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Io",
      "parent": "jupiter",
      "periodDays": 1.769,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163812549218,
        -0.998508217850015,
        7.714152403513745e-13
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Europa",
      "parent": "jupiter",
      "periodDays": 3.551,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163812551733,
        -0.9985082178500135,
        1.5150565757355415e-12
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Ganymede",
      "parent": "jupiter",
      "periodDays": 7.155,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163812584847,
        -0.9985082178499953,
        3.131527485694748e-14
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Callisto",
      "parent": "jupiter",
      "periodDays": 16.689,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163812631973,
        -0.9985082178499697,
        -1.0111269012873524e-11
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Titan",
      "parent": "saturn",
      "periodDays": 15.945,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.44978670516741887,
        -0.8931360029999,
        1.1801111693757413e-11
      ],
      "reference": [
        -0.4497867051679302,
        0.8931360029996425,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    },
    {
      "id": "Triton",
      "parent": "neptune",
      "periodDays": -5.877,
      "actualInclinationDeg": 23.000000001693227,
      "quality": 0,
      "normal": [
        -0.4366833829647803,
        0.8103312953667009,
        0.3907311285164769
      ],
      "reference": [
        -0.47439552473392926,
        0.8803118118669202,
        0
      ],
      "reason": "A variant: actual +sin circular position in a proper world basis reverses the intended orbital angular momentum; no prompt exemption."
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "runtime": 5,
    "data": 4,
    "integrity": 3
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
  "note": "离线WebGL2，JPL世纪率、Kepler、同源轨道、运动双带、Halley/Encke、Bloom后ACES有效；大气仅方向边光，环投影混用射线单位。最终proper母基的X cos+Z sin使普通卫星反向、Triton23°顺行，月球156.56°，十颗全无效并扣月球锚点。撤回旧GL错误推断：近日点实绘GL0，runtime恢复5；但tail实际VAO/两属性buffer全非尾缓冲，尾几何画错。另真实rtScene无depth附件、所有sphere模型漏b.R全半径1，三项独立结构损坏合计integrity3，不重复扣其他项。自转双翻/假同步/Halley文案等data4。实测Enceladus min.25进入真实球R1；稳定Io12样本仅2屏内，zoom/follow各半分。缺完整复位，原件未改、旧图复用。",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "periodDays": 27.322,
      "actualInclinationDeg": 156.56000044162556,
      "quality": 0,
      "normal": [
        0.3977885003262006,
        -0.9174771435890011,
        -2.909487787507236e-12
      ],
      "reference": [
        0,
        1,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "io",
      "parent": "jupiter",
      "periodDays": 1.769,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163966347913,
        -0.9985082177659129,
        -1.5065975214584193e-13
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "periodDays": 3.551,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163966317609,
        -0.9985082177659294,
        -2.0569504424622754e-15
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "periodDays": 7.155,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163966322799,
        -0.9985082177659266,
        -1.2089927779924835e-14
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "periodDays": 16.689,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.05460163966503125,
        -0.998508217765828,
        6.520416967123844e-13
      ],
      "reference": [
        -0.05460163812585187,
        0.9985082178499952,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "periodDays": 1.37,
      "actualInclinationDeg": 179.99999914622637,
      "quality": 0,
      "normal": [
        0.44978668672084937,
        -0.8931360122896628,
        -5.895677611684579e-13
      ],
      "reference": [
        -0.4497867051679302,
        0.8931360029996425,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "periodDays": 4.518,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.44978668672573485,
        -0.8931360122872025,
        -8.15037522015252e-12
      ],
      "reference": [
        -0.4497867051679302,
        0.8931360029996425,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "titan",
      "parent": "saturn",
      "periodDays": 15.945,
      "actualInclinationDeg": 179.99999879258175,
      "quality": 0,
      "normal": [
        0.4497866867322109,
        -0.8931360122839409,
        -5.949766164195704e-11
      ],
      "reference": [
        -0.4497867051679302,
        0.8931360029996425,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "titania",
      "parent": "uranus",
      "periodDays": 8.706,
      "actualInclinationDeg": 180,
      "quality": 0,
      "normal": [
        0.9908187639489084,
        0.13519680841927137,
        2.707847398666362e-12
      ],
      "reference": [
        -0.9908187651661832,
        -0.13519679949821306,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    },
    {
      "id": "triton",
      "parent": "neptune",
      "periodDays": -5.877,
      "actualInclinationDeg": 22.999998222452337,
      "quality": 0,
      "normal": [
        -0.43668339024162645,
        0.8103313052285576,
        0.39073109993147653
      ],
      "reference": [
        -0.47439552473392926,
        0.8803118118669202,
        0
      ],
      "reason": "A variant: actual +sin local circular position uses the reversed directed plane; Moon additionally inherits Earth equator, Triton is prograde23 degrees."
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'GLM5.3(Max)V1-TasksAssignedByOpus5': {
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
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角174.855000°仍与物理期望5.145°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L330/L1518: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。 本轮重读L1518–1535：黄道分支的basisEcl经proper转换恰为世界单位基，直接世界偏移；eq分支proper母轴，忠实提示，原真实角证据保留。",
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
    "zoom": 1,
    "focus": 0.5,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "离线原生WebGL2；JPL世纪率、Kepler、同源动态轨道、运动双带、指数密度大气、Bloom后ACES、HDR降级及4×MSAA有效。八颗moon按任务正Z/proper母轴算法保留任务信用及原实际有向角，提示矛盾不归责模型。新确认漏项：addBody预设basis(0,0)，最终if(!basis)永不执行，使全部行星实际轴仍全球Y，未实现题给倾角/极点；Halley状态缺a却用于vis-viva，速度显示NaN，合计data3.5。环模型本已有R而顶点又乘uScale=R，实际环半径R²、球面投影仍按R，环半分；不重复扣data。八颗moon未登记bodyByKey，明确列表聚焦按钮无响应，focus半分。其余拖拽、安全缩放、精确位置跟随、暂停/当前时刻/倒放成立，无完整reset额外义务。 实跑Moon/Triton按钮始终停在Sun、地轴全球Y、Halley显示NaN km/s均证实，未发生JS错误。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角174.855000°仍与物理期望5.145°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "reason": "L386/L633: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。 本次按任务核对仍保留：给定P为−5.876854，模型改为+5.876854；proper基正Z与inc156.9°实际得23.1°，独立于提示负P矛盾。 本轮重读完整最终公式633–646并用07.numeric.json重算r×v确认：方向冲突按任务归责，Triton擅改P正号仍无效。",
      "actualInclinationDeg": 23.099999999999994,
      "expectedInclinationDeg": 156.9,
      "periodDays": 5.876854
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 0,
      "reason": "L597–607：Charon初始化dDisp=0，仅planetBodies八大行星循环赋距离，Pluto未包含；最终世界坐标始终与Pluto重合，r×v=0、倾角无定义，不是提示内生方向冲突。",
      "actualInclinationDeg": null,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "nominalUnitRadiusInclinationDeg": 179.9200000000015
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 5,
    "data": 5,
    "integrity": 4.5
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
  "note": "离线原生WebGL2，JPL世纪率、Kepler、径向压缩、真实行星轴模型、双向环影、密度大气、运动双带、Bloom后ACES、HDR/MSAA成立；不因GL0路径的LINEAR字样判fatal。八颗moon中六颗忠实任务局部正Z算法，保留任务信用；Triton自行把负周期改正、实际23.1°顺行仍无效。新确认Charon显示距离始终0，和Pluto重合、没有月轨道，改无效。轨道缓冲每采样写两份顶点却POINTS只画n，使所有轨道只显示前半周，pathFit半分。Halley有真实轨道/周期与活动期双尾，保留3；但远日距>6.5AU时无实体彗核/彗发，结构完整性4.5。其余独立数据错误未证实，题给自转双翻与June/July矛盾免责；安全缩放仍不足(min.05)、拖拽聚焦/稳定位置跟随/暂停Now倒放成立。 实跑确认Charon与Pluto重合dDisp0，轨道POINTS512而geoCount1024/buffer32768；远日Halley距离34.94、ion/dust0且无核绘制，GL0。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "pathFit": 0.5,
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
  "note": "重新阅读完整最终app：反射世界(x,z,+y)下五颗普通母赤道圆轨道有向有效，Moon错误Earth赤道、Triton缺23.1°倾角仍0。真实固定J2000元素、归一化Kepler、完整定向和同源行星线成立。新增量化720等M哈雷线最大距连续实体5.73308显示单位=16.38核半径，pathFit1改.5，不在data再扣。环无阴影、大气rim；Bloom后OutputPass真实ACES及运动带成立。data4保留：普通行星+RY自转与反射世界物理公转方向不一致、哈雷近日点相位与7月宣传不一致，Sun仅动画噪声；不复扣卫星/路径。真实Halley功能3，安全跟随，globalzoom1.5可入Sun10和Jupiter5.97；A仅镜头复位。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Triton",
      "quality": 0,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 1,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 1,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 1,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 1,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "quality": 1,
      "reason": "实际全局(x,z,+y)为反射，轴向黄北−Y。最终positiveZ圆周在该世界正向，五regular位于母赤道基本有效；Moon仍错误Earthtilt赤道面无5.145，Triton负P但缺23.1°倾角无效。",
      "sourceLines": "L202–216/249–256/675–708/1112–1122",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "data": 4,
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
  "note": "完整最终代码重核后修正旧卫星全0：世界proper(x,z,−y)，母基为左手，但卫星正Z圆周的净r×v反而与所绘母轴正向；六regular周期/母赤道基本有效，随机±3°倾角各计.5，Moon实际黄北27.6386°和Triton179.776°仍0。当前JPL+均E288主轨道同源，真实运动带和Bloom后ACES成立；环仅母星投环、rim大气、无哈雷。新增独立data4：左手model下RY纹理的物理自转净−pole，Earth156.56°，运动belt也与proper行星反向；不再data扣moon。bodyPass未启用剔除，不能仅det负扣完整性。暂停dt归0同时冻结相机focus/zoom插值，暂停后新聚焦无法移动，focus改.5已由本轮运行确认；zoom原.5仍仅一次。物理暂停正常，Ahome仅镜头恢复。",
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 0,
      "actualInclinationDeg": 27.638563759930822,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "quality": 0.5,
      "actualInclinationDeg": 2.845868737902394,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "quality": 0.5,
      "actualInclinationDeg": 0.9780052131970883,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "quality": 0.5,
      "actualInclinationDeg": 1.9348562168889867,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "quality": 0.5,
      "actualInclinationDeg": 0.040586489722170056,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "quality": 0.5,
      "actualInclinationDeg": 2.4979869523086315,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "quality": 0,
      "actualInclinationDeg": 179.7760983346963,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "quality": 0.5,
      "actualInclinationDeg": 1.9699694816950268,
      "reason": "Moon套Earth赤道实际黄北27.63856°、Triton实际179.776°而非156.9，均硬错0；其余六颗正确母赤道/方向/周期，但倾角由伪随机±3°生成无真实约束，统一半质量.5，不因Callisto某值偶然接近而升级。",
      "sourceLines": "L1031–1064/1391–1402",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "本轮最终Euler链重算：proper Three group rotations但全局ecliptic=(x,z,+y)reflection；moonPivot为默认XYZ，z=α与y=−θ同组，净Ry(−θ)Rzα。相对地心位置[2.7cosαcosθ,2.7sinα,2.7cosαsinθ]，恒Y=.2418918，不过地心，轨迹平面黄道0°。r×v瞬时5.14°只是法线随月转动，不能当固定有效黄道轨道。",
      "sourceLines": "L853–862/1100–1103",
      "reviewedAt": "2026-10-17"
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
  "note": "完整实际app及最后绑定重新核对，原分项保持：真实固定J2000元素/归一化Kepler与全局反射(x,z,+y)映射、主轨道同源。唯一Moon同一XYZ组混入Ry/Rz，净路径Y恒.241892且绕地心上方黄道平行圈，0；不能把瞬时r×v5.14°误认为固定轨道。Halley360等M路径近日点4.317显示单位错位，pathFit.5。环无投影、大气rim，Bloom后OutputPass真实ACES和运动带成立。data3.5重证：普通行星自转与同反射世界公转方向不一致、Halley相位为1986-01-09而非2月、尾仅历史位置串，分别独立而不复扣Moon/path。正常聚焦后精确平移跟随，zoom.6可入Earth1；暂停冻结物理运动，云纹漂移是装饰不扣，A全景只恢复镜头仍.5。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "完整Canvas2D最终app重读后维持分项：真偏心率/周期配七次Newton推进椭圆，半长轴/方向/初相自定义且未绑定真实历元，分别仅扣轨道根数、定向和历元。解析ctx.ellipse与实体同焦点旋转精确贴合，520运动小行星成立。Moon是27.3日屏幕椭圆示意，半质量保留；e.86自定义平面“哈雷”不计，不转其他彗星。环前后半圆与径向辉光只部分，未有Bloom/ACES。2D平移、平滑缩放和聚焦持续跟随可用，drag部分；zoom不按3D穿球规则误扣。暂停冻结轨道/月球，太阳图案属装饰；缺完整A复位保留.5。视觉和Canvas选择均不扣。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0.5,
      "reason": "429–436:period27.3-day screen-spaceellipseindependentof3Dreferenceplane,partial2Dillustration.",
      "sourceLines": "L429–436Moon27.3day projectedellipse.92aspect, correctparent/periodillustrative.5.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "完整实际Three.js调用链与最后绑定复核后维持分项：真e/P/i的椭圆成立，但a/ω/初相自定义，无真实历元，行星线/实体同父组同变换。Moon固定黄道XZ缺5.145与节点仍0；自定义e.86/i9°“哈雷”仍0不转其他彗星。环MeshBasic无阴影、无大气；实际UnrealBloomPass成立，后期最终无OutputPass/ACES合成，renderer设置未应用到最终后期，ACES0。自转速度约慢10.47倍、Venus2.6rad误轴，data4.5；普通自转方向相对反射世界也不一致，聚合数据扣分不触及Moon。globalmin12可入Sun30/Jup19；Sun实体按walltime自转，暂停仍转，本来pauseReset.5重证，A缺完整复位不重复扣。跟随精确平移当前位置，拖拽/聚焦有效。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0,
      "reason": "407–411/558–560:coplanarXZorbitwithno5.145°inclinationorMoonnode; cannotvalidaterealMoonplane.",
      "sourceLines": "L407–411MoonoutsideEarthsysbutfixedparentEarthinc0XZ; L558–560flatcircle no5.145/node.0.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "完整最终原生WebGL2调用链复核后维持分项：真e/P与简化i椭圆同源，a/ω/初相自定义、无真实历元，根数/定向部分和历元0；运动带、实际提亮/双向模糊/ACES合成成立。Moon固定全球XZ无5.145仍0，自定义e.86/i9°“哈雷”仍0不转其他彗星。环无双向投影、大气是表面Fresnel部分。自转Earth.6rad/日约慢10.47倍、Venus2.6rad误轴，data4.5保留且不在Moon/轨道复扣。球网格绕序虽向内但全流程从未启用CULL，不据关键词扣完整性。相机持续按当前体位移跟随，globalmin40>Sun30/Jup19安全，拖拽/拾取/聚焦可用；暂停冻结物理相位，A无完整复位仍.5。RGBA8后期无浮点需求，最终scene没有MSAA。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0,
      "reason": "644–645:fixedglobalXZcirclewithnoMooninclination/node.",
      "sourceLines": "L644–645worldXZcircle27.3day; no5.145inclination/node. quality0.",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "重新按完整世界坐标约定审查：正Z行星映射对应反射，不能直接以+Y误杀所有卫星；五颗普通母赤道圆轨道保留基本信用，Moon错误Earth赤道、Triton缺倾角仍0。实体未应用近日点辐角、线却应用，pathFit0；节点/倾角错误顺序单列定向部分分，不再data扣同错。新确证卫星显示开关只控制空moonGroup，实际卫星全挂母星tiltG，integrity4.5。data4.5改为可证的普通行星自转与该反射世界公转方向不一致，不沿用未经手性检查的旧自转说明。环无阴影、rim大气部分，Bloom/ACES与运动带成立。宽景可入Sun，A仅镜头复位部分；默认速度下聚焦地球，实测持续在视野内，保留跟随满分。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 0,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Triton",
      "quality": 0,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 1,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 1,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 1,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 1,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Titan",
      "quality": 1,
      "reason": "全局正Z行星映射为反射，轴向北必须取−Y；最终parent.tiltG链无额外反射。Moon缺5.145且在Earth赤道无效，Triton负period但缺23.1倾角无效；其余5颗按同世界约定在所绘母赤道正向、周期正确。",
      "sourceLines": "L634–642/775–784/865–866/914–929/1135–1147",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "L1608: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L148/L1608: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L148–153properB; L1608–1613directworldMooncorrect5.145; properEqpromptformula taskcredit6; Triton156.9.",
      "reviewedAt": "2026-10-17"
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
  "note": "按完整任务重核8颗卫星：Moon5.145°与Triton156.9°物理有效，普通6颗按§3.7正Z+proper母轴逐式实现保留任务信用及实际179.5–179.95°角。真实均E行星/哈雷轨道与月球平移、运动带、大气和Bloom后ACES均成立。环影未拒负t仍部分分。data4保留小时周期被当日慢24倍，另尘埃速度差分拿对象当数组、继而拿数组当对象，归一化fallback恒+Y，数据错误不重复扣哈雷功能。新增overview没有聚焦1.6R界，滚轮/pinch下限.05可入Sun，zoom改.5；暂停Date.now仍推进保留.5，此刻有效。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "pathFit": 0.5,
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
  "note": "重核Z朝上的真实世界映射：月球独立5.145°黄道开普勒有效，四木卫localXY与母星实际localY极轴夹90°仍无效。J2000真根数、求解、定向与历元有效；新量化2000等M哈雷线在M=.0004725距实体.85991显示单位=3.91核半径，路径改部分分，不在data再扣。哈雷和独立C/2025保留功能。环无投影、双Fresnel大气部分，OutputPass真实ACES及Bloom/运动带成立。彗尾向日、Z朝上世界却用Y轴为行星极轴及太阳聚变说明数量错误，data4保留；安全缩放/聚焦跟随可用，A只复位镜头。",
  "moonEvidence": [
    {
      "id": "Moon",
      "quality": 1,
      "reason": "全局行星直接(xe,ye,ze)，物理黄北为+Z。Moon独立黄道Kepler i5.145/node125.08有效；4颗木卫在localXY绕+Z，但所绘Jupiter赤道法线为localY，同一proper tilt保留90°错误，0。",
      "sourceLines": "L487–516/739–743/822–854/1234–1252",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Io",
      "quality": 0,
      "reason": "全局行星直接(xe,ye,ze)，物理黄北为+Z。Moon独立黄道Kepler i5.145/node125.08有效；4颗木卫在localXY绕+Z，但所绘Jupiter赤道法线为localY，同一proper tilt保留90°错误，0。",
      "sourceLines": "L487–516/739–743/822–854/1234–1252",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Europa",
      "quality": 0,
      "reason": "全局行星直接(xe,ye,ze)，物理黄北为+Z。Moon独立黄道Kepler i5.145/node125.08有效；4颗木卫在localXY绕+Z，但所绘Jupiter赤道法线为localY，同一proper tilt保留90°错误，0。",
      "sourceLines": "L487–516/739–743/822–854/1234–1252",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Ganymede",
      "quality": 0,
      "reason": "全局行星直接(xe,ye,ze)，物理黄北为+Z。Moon独立黄道Kepler i5.145/node125.08有效；4颗木卫在localXY绕+Z，但所绘Jupiter赤道法线为localY，同一proper tilt保留90°错误，0。",
      "sourceLines": "L487–516/739–743/822–854/1234–1252",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "Callisto",
      "quality": 0,
      "reason": "全局行星直接(xe,ye,ze)，物理黄北为+Z。Moon独立黄道Kepler i5.145/node125.08有效；4颗木卫在localXY绕+Z，但所绘Jupiter赤道法线为localY，同一proper tilt保留90°错误，0。",
      "sourceLines": "L487–516/739–743/822–854/1234–1252",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "L1635: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.950000°仍与物理期望0.05°不同。模型源文件未改。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.530000°仍与物理期望0.47°不同。模型源文件未改。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.800000°仍与物理期望0.2°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.810000°仍与物理期望0.19°不同。模型源文件未改。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.650000°仍与物理期望0.35°不同。模型源文件未改。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L314/L1635: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本次重核最终有效实现/参考面/周期，原有物理有效结论保持。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务信用恢复：spec.html §3.7 L138–143明给正Z局部圆轨道、Rx倾角及直接世界偏移/proper母轴基；最终代码忠实逐式实现，方向矛盾归属提示，不再归责模型。实际有向倾角179.920000°仍与物理期望0.08°不同。模型源文件未改。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L314–319properB; L1635–1647Moonworldproper5.145; eq§3.7signedP formula6taskcredit;Triton156.9.",
      "reviewedAt": "2026-10-17"
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "完整任务重核8颗卫星沿proper母轴/直接黄道分支，物理Moon5.145/Triton156.9成立，普通6颗提示公式反向保留任务信用。新增路径证据：320等M哈雷线在M=−.0057225距连续实体9.60338显示单位=32.01核半径，行星线另固定J2000，pathFit改.5，不重扣data。新增独立data4.5：所有moon.spin和draw实参恒0，却称月球始终同面朝地，真实物理自转缺失；不扣其轨道。环影反相/缺负t过滤和局部光向未去spin仍同feature部分分。Bloom后ACES、真实近似大气、运动带与Halley有效。pause绝对phase欠账逐帧追赶，原实测800ms+10.56rad仍部分，非缺完整reset；手动zoom.4可穿入，其他交互保留。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.05000000000036243,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.4700000000001629,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.19999999999981224,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.1900000000007852,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.34999999999958503,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "本轮逐式复核proper全局(x,z,−y)、proper母轴基、local负Z并Rx倾角；Moon直接世界黄道5.145°，regular实际inc有效，Triton23.1°/负P净156.9°。不使用有bug的母自转作方向基准。",
      "actualInclinationDeg": 0.07999999999851001,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L350–396/498–515",
      "reviewedAt": "2026-10-17"
    }
  ],
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终绑定重核：8颗卫星负Z圆周配proper母轴/独立黄道，实际有向倾角均有效；归一化开普勒、当前JPL根数与每帧均E256行星/哈雷线同坐标，Moon线同倾角与母星平移。真实双向环影使用同空间、母半径及正t，运动带、撞击参数大气、Bloom后ACES成立。新增独立data4：antiSun=−halley.pos实际向日、尾沿其延伸，Sun模型uSpin又恒IDENT3而无物理自转；不重复扣Halley功能。暂停物理dtDays0/此刻真回当前，任务满分；Play按钮被note层覆盖但空格正常，完整性是否需部分扣分交运行影响校准。滚轮.25可穿球仍zoom.5，其他交互有效。 本轮运行确认note长期遮挡可见Play且没有正常关闭途径，独立integrity4.5；空格暂停仍1，不重复扣。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "完整最终执行链properworld/proper母轴；L1783–1798严格按任务§3.7positiveZ+Rx再直接世界/母轴。Moon174.855°、六ordinary179.x°实际物理反向但提示免责保留1；TritonnegativeP+156.9在这条路径净156.9°。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L439–445/1783–1798",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终绑定复核：Moon174.855°、六ordinary179.x°按§3.7逐式的方向矛盾不归责，实际角保留；Triton物理156.9°。JPL当前根数/均E256轨道与实体一致，但月轨圈省略incl，pathFit.5重证。双向环影正确物体逆变换/半径/t，真实大气、运动带及Bloom后ACES均满；双尾xyz+alpha16B/160顶点真实有效，撤回旧误扣继续成立。面板world显示偏移/SCALE混入AU错误重证，另SUN无rotH自转推进跳过、面板宣25.05天却矩阵恒初phase，data4；不扣提示signedspin/JuneJuly。paused推进完全停、此刻可用，B满分；滚轮下限.06无安全界仍zoom.5，聚焦跟随正常。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "任务§3.7指定正Z局部相位并直接加世界偏移；L383–389; L1471–1482照该算法，实际有向倾角仍174.855000°（物理方向反转，原实测角不改），此为提示公式内生问题，按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对jupiter轴有向倾角仍179.950000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对jupiter轴有向倾角仍179.530000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对jupiter轴有向倾角仍179.800000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对jupiter轴有向倾角仍179.810000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对saturn轴有向倾角仍179.650000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L383/L1471: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L383–389; L1471–1482直接照做，实际对pluto轴有向倾角仍179.920000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "L383–389properB; L1471–1482loc(cosθ,−sinθ sini,+sinθ cosi), Moondirectworld/equatorialB as spec3.7; signedTriton direction kept. All8 taskcredit; no extraexchange.",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "完整任务与最终绑定复核：8颗卫星按§3.7逐式实现，实际有向角保留但提示内生方向矛盾不归责；JPL/归一化Kepler/日期、视线撞击参数大气、GPU运动带和六级Bloom后ACES成立。新增确证：球面环影的太阳向量只逆母basis却遗漏模型Ry自转，ring-on-body错位，环部分分；256等M点的哈雷线近日点到折线11.1498显示单位（111.50倍核半径），路径部分分，稳定性不重复扣。独立数据错误是冥族39.45AU却使用海王星1.5倍平均运动，正确3:2共振应为2/3倍，data4.5；任务并未给该错误n公式。撤旧zoom扣分：最终相机始终按当前目标1.6倍显示半径限距，太阳聚焦也安全。暂停/倒放/此刻符合任务，不要求全状态复位；跟随直接读当前体位置。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "elements": 0.5,
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
  "note": "联网Three.js完整JPL形式世纪率与Kepler、同源轨道、动态双带、Bloom后OutputPass ACES有效。新核实Pluto升节点错写128.65786387，和110.30393684相差18.3539°，elements半分；坐标公式本身正确，不在定向/数据再扣此错。独立月球黄道5.145°轨道有效；其余11颗绕世界Y并含sin(.9θ)非闭合起伏，和本作黄道北Z及母星赤道不符，均无效。环仅行星投环影，大气为边缘壳光。全体行星轴Rz(tilt)·Y始终在黄道XY面、Venus2802小时错误及Sun.05rad/day=125.66天合计data3.5。真实比例按钮只重建Sun/planet几何却漏全部moon（月球R.27>地球.02），完整性4.5。拖拽聚焦跟随有效，min.5可入太阳6，完整复位不足；watchdog只排空rAF无复制主循环，不判fatal。 实跑真实尺度Earth geometry半径.02而Moon.27，确认13.5倍反转。",
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "reason": "Independent ecliptic Kepler branch5.145deg; worldXYZ is eclipticXYZ."
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 151.37304513606082,
      "periodDays": 0.31891,
      "returnDistanceAtOnePeriod": 0.07271435304881765,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 0,
      "actualInclinationDeg": 151.25188876435047,
      "periodDays": 1.26244,
      "returnDistanceAtOnePeriod": 0.07295682235686203,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 169.97378108679763,
      "periodDays": 1.76914,
      "returnDistanceAtOnePeriod": 0.0713676396606863,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 169.24480373941554,
      "periodDays": 3.55118,
      "returnDistanceAtOnePeriod": 0.014472554288367363,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 169.4524586744454,
      "periodDays": 7.15455,
      "returnDistanceAtOnePeriod": 0.07157924137540403,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 0,
      "actualInclinationDeg": 168.82714375904675,
      "periodDays": 16.68902,
      "returnDistanceAtOnePeriod": 0.015410751223653388,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 150.51547932289105,
      "periodDays": 15.94542,
      "returnDistanceAtOnePeriod": 0.022118575932830214,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 0,
      "actualInclinationDeg": 149.88535673293703,
      "periodDays": 4.51821,
      "returnDistanceAtOnePeriod": 0.0567656845865169,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 82.02914268332721,
      "periodDays": 8.70587,
      "returnDistanceAtOnePeriod": 0.061451782267721584,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 80.22905263192183,
      "periodDays": 13.46323,
      "returnDistanceAtOnePeriod": 0.060341852654395185,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 30.18458128046169,
      "periodDays": -5.87685,
      "returnDistanceAtOnePeriod": 0.014961246819717413,
      "reason": "Final local worldXZ wobbling trajectory is not transformed to parent equator and is not closed at the declared period."
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": true
},
    'MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5': {
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
      "periodDays": 27.32166,
      "actualInclinationDeg": 174.85499998102938,
      "quality": 1,
      "normal": [
        8.878853126840357e-11,
        -0.9959709407666733,
        -0.08967655852199029
      ],
      "reason": "最终世界直接正Z/Rx偏移忠实任务3.7；实际有向174.855°由提示诱发，计任务信用1，不假称物理修好。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "periodDays": 1.769138,
      "actualInclinationDeg": 0.05000000016072693,
      "quality": 1,
      "normal": [
        -0.015706522527767785,
        0.9992157192492412,
        0.036349024131414956
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "periodDays": 3.551181,
      "actualInclinationDeg": 0.4700000003250829,
      "quality": 1,
      "normal": [
        -0.023035513519357256,
        0.9990738154963376,
        0.03634386201946148
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "periodDays": 7.154553,
      "actualInclinationDeg": 0.2000000002786283,
      "quality": 1,
      "normal": [
        -0.018324136649589703,
        0.9991712026401981,
        0.03634740472974199
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "periodDays": 16.689,
      "actualInclinationDeg": 0.1900000002175462,
      "quality": 1,
      "normal": [
        -0.018149632749313523,
        0.9991743834715452,
        0.0363475204838255
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "periodDays": 15.945,
      "actualInclinationDeg": 0.35000002199256364,
      "quality": 1,
      "normal": [
        0.08670360433049555,
        0.8795655472021064,
        -0.46781078778835333
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "periodDays": -5.876854,
      "actualInclinationDeg": 156.89999999805616,
      "quality": 1,
      "normal": [
        -0.06502116986259145,
        -0.9963154193626821,
        -0.05592702933164607
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "periodDays": 6.3872,
      "actualInclinationDeg": 0.07999809273583354,
      "quality": 1,
      "normal": [
        -0.678181844490752,
        -0.3888023414039272,
        -0.6236201769682771
      ],
      "reason": "实际left-handed母基配正/负周期和额外sgn修正后的r×v与正确母轴倾角相符；按最终世界公式确认，不凭单一符号误杀。"
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 4,
    "data": 4,
    "integrity": 3.5
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
  "note": "原生离线WebGL2的JPL世纪率、Kepler、同源动态轨道、运动双带、密度大气和Bloom后ACES成立。Moon直接正Z/Rx按任务信用，其余七颗最终有向轨道正确（left-handed母基与符号组合后得实际.05/.47/.2/.19/.35/156.9/.08°）；不拿有bug母星或单一符号误杀。新环影射线交点公式分子误用光向，命中点不在环平面，只环半分。Moon卡缺r/lat却toFixed，实际点击Moon抛toFixed TypeError，但frame184→270→397持续，runtime4、非fatal。球体外绕序配det−1模型/BACK剔除画远半球，彗尾负world方向朝日且远日无实体核，合计integrity3.5。信息卡仅选择时更新的data4保留。暂停Earth/JD固定，但Sun/moon姿态取墙钟simT继续转，pauseReset半分；不在数据重复此时钟缺陷。过渡结束即停止跟随follow0、zoom最低.5可入太阳保留。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'Gemini3.8Flash(high)V1': {
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
  "note": "联网Three r128有动态小行星带和真实Bloom；ACES只在Bloom叠加前的基础画面执行，最终加法CopyShader不做tone mapping，部分分；无双向环影，大气仅Fresnel。焦点极坐标椭圆几何成立，但匀真近点角推进，无Kepler/完整Ωω/历元。唯一月球是3D全球XZ零倾角且按帧动画，旧半颗信用撤销并按无效月球锚点。自转的年/日速度比例不成立、倾轴Euler与自转顺序产生绕全球Y的转动，聚合data4保留，不重复轨道/卫星问题。巡航调用selectBody立即把自身关闭，integrity4。按下即选择影响拖拽；聚焦/跟随仅改变controls.target不平移镜头；minDistance1.5可入Sun半径10、无完整重置，均保留部分交互分。无致命错误。",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 0,
      "reason": "L1422–1435/1805直接worldXZ零倾角3D圆轨道，未实现5.145°月球黄道倾角；不是明确2D示意。且按帧固定角度非27.3天，不计有效。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": false
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
      "reason": "L3114: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。",
      "actualInclinationDeg": 95.145,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对jupiter轴有向倾角仍179.950000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对jupiter轴有向倾角仍179.530000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对jupiter轴有向倾角仍179.800000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对jupiter轴有向倾角仍179.810000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对saturn轴有向倾角仍179.650000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
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
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L812–831; L3112–3132直接照做，实际对pluto轴有向倾角仍179.920000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 5,
    "data": 4.5,
    "integrity": 4
  },
  "visualBase": null,
  "interaction": {
    "drag": 0.5,
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "原生离线WebGL2的JPL世纪率/定向Kepler、运动小天体双带、双向同单位环影、密度大气、真实Bloom后ACES成立。七颗赤道卫星按任务正Z/Rx算法保留信用/实际角不改；Moon重复Y/Z世界转换产生95.145°，仍无效和锚点扣分。重新原函数密采样发现Halley256等M轨道折线最大偏差13.4619显示单位，核半径.65，pathFit部分分；不另扣Kepler/历元。球网格三角形为朝内绕序，母轴proper det+1、BACK/CCW未修正，实际画远半球，完成度4。非地球卫星卡把母星日心距当距地球（L2785），data4.5，不重复卫星平面错误。拖动释放会触发无阈值click拾取，缩放下限.5能入Sun4.6，维持部分；持续聚焦跟随、暂停/倒放/此刻均成立，不额外要求全状态复位。无fatal。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "kepler": 0.5,
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
    "data": 4,
    "integrity": 4.5
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
  "note": "联网Three r160有完整定向焦点椭圆、同源按E采样轨迹、运动双带、哈雷、真实Bloom后OutputPass ACES。环只有行星投环影、气氛仅Fresnel。新复核发现高偏心率Kepler初值固定+π，对负M的20001点采样有3220点未收敛、最大方程残差4.30×10^9；Kepler部分分，稳定性不因同一问题重复扣。Earth错把平均黄经100.464当M0，历元部分分。月球最大轨道半径.0488<地球3全埋入，另七颗均全球XZ、未继承赤道且有向方向错误，全无效/锚点扣分。旧“金星双反”撤销：该rotPeriod是正值；实际独立data4依据卡片把以天计Earth.997/Jupiter.413标为小时，以及Euler自转绕全球Y使倾轴随相位摆动。Moon显示开关只遍历另七颗而遗漏月球，integrity4.5。目录聚焦真实飞行且无明确必须canvas点取要求，focus恢复1；跟随只改target不平移camera、zoom1<Sun12、完整重置缺失保留。无fatal。",
  "earthMoonValid": false,
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 0,
      "reason": "L1503–1505实体月轨半径.04372–.04880，小于地球半径3，始终埋入。"
    },
    {
      "id": "io",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "europa",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "ganymede",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "callisto",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "titan",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "enceladus",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，正period令有向法线与母星轴近反向，独立于buggy母星自转，不计。"
    },
    {
      "id": "triton",
      "quality": 0,
      "reason": "L1511–1518全球XZ轨道未继承母赤道，负period令实际r×v对母轴仅28.32°，成为顺行，独立于buggy母星自转，不计。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "任务§3.7指定正Z局部相位并直接加世界偏移；L1264–1290; L3899–3928照该算法，实际有向倾角仍174.855000°（物理方向反转，原实测角不改），此为提示公式内生问题，按任务依从免责计1，不宣称物理正确。",
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
    "data": 4,
    "integrity": 3.5
  },
  "visualBase": null,
  "interaction": {
    "drag": 0.5,
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "原生离线WebGL2的JPL世纪率/定向Kepler、同源E采样轨迹、运动双带、双向同空间环影、密度大气及最终ACES成立。Bloom管线实际已删，只余眩光/日冕，保留.4而非看到注释判满。Moon直接正Z世界偏移的174.855°属任务算法信用；普通六颗实际有向倾角符合母轴，Triton因额外left-handed母基23.1°顺行仍无效。新核算球三角朝外但实际planet basis det−1、BACK/CCW无修正，所有行星画远面；另Halley只有轨道/尾和标签，无任何球核draw，近远日均缺实体，合计integrity3.5，不重复扣Halley奖励/环。data4保留：Moon地距错当约1AU/8分钟，且太阳模型仅固定scale、月球等未做潮汐姿态；不与卫星轨道质量重复。注意left-handed母基乘局部负phase反而令Earth实际自转轴dot期望≈1，不误扣普通自转方向；任务大tilt/signed冲突免责。拖动触发click及minDistance.08穿入保留，持续跟随、暂停/Now满足任务，fatalnull。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "orientation": 0.5,
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
  "note": "联网Three r160有定向Kepler/J2000相位、同源动态缩放轨道、哈雷和Bloom后OutputPass ACES；静态小天体带.4、无双向环影.4、Fresnel大气.4保留。新增定向部分分：默认scalePos将worldY额外乘1.6，真实倾角由I变atan(1.6tanI)，如冥王星17.16°→26.2921°，不是整体坐标反射，线和实体虽一致但科学平面被改。六颗卫星全球XZ+非闭合.9频率竖直摆动，方向及参考面均不成立，0颗/无效月球锚点，数据不重复扣。data3.5保留独立实体无倾轴（全部绕全球Y）、太阳无实体自转及Halley任意L=0历元；暂停仍自转仅归pause项。完整度4.5保留改准彗尾依据：Sprite.rotation用worldXY atan2，未投影到随相机旋转的billboard平面，反日尾方向不能随视角成立。拖拽阈值、聚焦/持续跟随可用；minDistance3<Sun10、暂停只冻结JD/卫星而行星自转仍按墙钟，部分交互。无fatal。",
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5': {
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "任务§3.7指定正Z局部相位并直接加世界偏移；L1139–1160照该算法，实际有向倾角仍174.855000°（物理方向反转，原实测角不改），此为提示公式内生问题，按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对jupiter轴有向倾角仍179.950000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对jupiter轴有向倾角仍179.530000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对jupiter轴有向倾角仍179.800000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对jupiter轴有向倾角仍179.810000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对saturn轴有向倾角仍179.650000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
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
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L1139–1160直接照做，实际对pluto轴有向倾角仍179.920000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。",
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
    "drag": 0.5,
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "原生离线WebGL2有JPL世纪率/定向Kepler、8颗按任务信用卫星、双带GPU运动、真实Bloom/ACES/密度大气。新核实际矩阵：CPU modelMat写成Bᵀ而顶点又乘B，world=BᵀBRy(phase)a=Ry(phase)a，倾轴抵消；程序纹理vObj=B·world点，与自转phase无关，表面世界锚定，data4。因此旧暂停仍传墙钟moonSpin虽然属实，但可见程序纹理不旋转，该旧pause扣分撤销，实体JD/轨道/有效姿态已冻结；装饰uTime不当成物理暂停故障。环影把已旋转的vObj与basis-local光向混用，实际环模型也是Bᵀ但传正常axis法线，双向环影未成立，rings.4。原函数密采样300等M的Halley曲线在JD2461331最大误差11.4586>核.35，首点虽锚定实体仍整圈粗折线离轨，pathFit.5，不重复Kepler/历元。离子尾用-hwp朝太阳、核仅6.5AU内画，聚合integrity4。Moon和普通卫星方向冲突为任务算法信用，Triton负周期+156.9按proper基实际逆行有效，不凭buggy母星自转剔除。鼠标拖动末点重置导致释放误选、缩放最小2可入Sun4.6保留；聚焦/持续跟随/Now/正倒放可用，fatalnull。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": 3,
      "quality": 1,
      "worldNormal": [
        8.864218580114216e-13,
        -0.995970940796488,
        0.08967655819086198
      ],
      "actualInclinationDeg": 174.85500000007846,
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.32166,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        0.014833483170142851,
        -0.9991969383311021,
        -0.03722158254014731
      ],
      "actualInclinationDeg": 179.95000000000692,
      "expectedInclinationDeg": 0.05,
      "periodDays": 1.769138,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        0.014829034573934726,
        -0.9988972768246533,
        -0.04454582007210611
      ],
      "actualInclinationDeg": 179.53000000000372,
      "expectedInclinationDeg": 0.47,
      "periodDays": 3.551181,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        0.014831985874318278,
        -0.9990960791112963,
        -0.03983763169991551
      ],
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "periodDays": 7.154553,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": 5,
      "quality": 1,
      "worldNormal": [
        0.014832088857267334,
        -0.9991030161064982,
        -0.03966323671900944
      ],
      "actualInclinationDeg": 179.80999999999347,
      "expectedInclinationDeg": 0.19,
      "periodDays": 16.689,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": 6,
      "quality": 1,
      "worldNormal": [
        -0.08473889410076717,
        -0.8853124820275441,
        0.4572101584532088
      ],
      "actualInclinationDeg": 179.64999999999625,
      "expectedInclinationDeg": 0.35,
      "periodDays": 15.945,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": 8,
      "quality": 0,
      "worldNormal": [
        0.06502117000262794,
        0.9963154193597549,
        0.055927029220987655
      ],
      "actualInclinationDeg": 23.099999999988224,
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.876854,
      "reason": "负周期外又自行改inc为180−156.9，最终实际23.1°非任务给定156.9，保持0。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": 9,
      "quality": 1,
      "worldNormal": [
        0.6789784019077061,
        0.38622804534176225,
        0.6243526461338487
      ],
      "actualInclinationDeg": 179.9199999995049,
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "局部正Z相位净反向，实际角如列；依任务3.7逐式归责免责计1，不声称物理顺行。",
      "sourceLines": "L18/21–22/29",
      "reviewedAt": "2026-10-17"
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
  "note": "完整任务及最终WebGL2管线重读：真实JPL世纪率/归一化Kepler/均E轨道线与实际实体同源，8颗卫星逐链保留实际有向角与任务归责；Moon和六regular的正Z相位反向依§3.7免责，Triton自行改23.1后再负周期实际23.1仍无效。环影正确逆完整model，双向空间单位一致；17900运动小天体、视线撞击参数大气、六级Bloom后ACES均成立。暂停物理增量为0、Now真回当前，B不要求全状态reset。新查全景保留旧selected却把目标切Sun，滚轮下限仍按旧目标半径，Earth→全景后min1.152<Sun4.6，zoom部分；聚焦/正常跟随保持。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "完整实际应用与最后绑定重读，七颗卫星全部由真实黄道根数推进：Moon含节点回归/近心进动，其余六颗为明确标注的固定JPL瞬时根数，实际有向母轴夹角0.0085–.4555°有效。四颗独立周期彗星含哈雷，均E960轨道、反日离子尾/反速度尘尾真实绘制，奖励保持。行星JPL世纪率、局部浮点原点、10天刷新轨道与320点卫星线正确；环双向影在完整世界空间、运动带、Bloom后ACES保持。大气仍只幂次rim，部分分。聚焦后逐帧精确平移相机、相对半径安全缩放，暂停物理相位固定；A日期/镜头分开恢复仍.5。所有数据/完整性原满分重新证实，不为贴图或视觉扣分。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "actualInclinationDeg": 5.16,
      "periodDays": 27.322,
      "sourceLines": "L101/523/525–526",
      "reason": "proper黄道映射、独立5.16°/节点回归/近心进动，不继承Earth轴；有向黄北5.16°，真实周期近似有效。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": 5,
      "quality": 1,
      "actualInclinationDeg": 0.02545777597862784,
      "eclipticInclinationDeg": 2.225546757590088,
      "periodDays": 1.771317209053707,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": 5,
      "quality": 1,
      "actualInclinationDeg": 0.45553124513123694,
      "eclipticInclinationDeg": 2.085445277116178,
      "periodDays": 3.553395485594247,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": 5,
      "quality": 1,
      "actualInclinationDeg": 0.1367025121639213,
      "eclipticInclinationDeg": 2.343077765689559,
      "periodDays": 7.159743824908989,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": 5,
      "quality": 1,
      "actualInclinationDeg": 0.26646113446986286,
      "eclipticInclinationDeg": 1.952395159370541,
      "periodDays": 16.68285667301603,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": 6,
      "quality": 1,
      "actualInclinationDeg": 0.40432517252493033,
      "eclipticInclinationDeg": 27.70608004133254,
      "periodDays": 15.94765818615398,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "enceladus",
      "parent": 6,
      "quality": 1,
      "actualInclinationDeg": 0.008533981303040297,
      "eclipticInclinationDeg": 28.04365621935622,
      "periodDays": 1.374551390850792,
      "sourceLines": "L54/83/98–102/523/544",
      "reason": "完整黄道JPL瞬时根数、正n和proper世界映射给正确有向轨道；母星pole与实际卫星法线接近，固定开普勒近似已明确说明。",
      "reviewedAt": "2026-10-17"
    }
  ]
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "完整离线Three应用及最后事件/RAF重读，原分项保持。行星真实JPL世纪率/Kepler与均E640轨道同源；唯一Moon用独立黄道5.145°、节点/近心进动，真实有向有效，128点线附着地球并20天刷新，误差低于卫星核尺度。土星环双向影正确逆axis和spin，运动2500点带、HalfFloat真MSAA、Bloom后手写ACES成立，大气仍rim。IAU北轴配signed周期而非大tilt重复翻转，真实距离与信息面板一致，无独立data扣。聚焦后相机精确追踪位移、近观半径下限安全，但真实比例全景下限.025<Sun.03723765，zoom改部分；暂停物理相位固定，日期与镜头分别恢复，A仍.5。无哈雷/其他彗星。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "reason": "完整黄道根数5.145°，负Z世界映射保持proper；升交点/近心进动和真实周期推进，不继承Earth轴。",
      "sourceLines": "L138/157–159/168",
      "reviewedAt": "2026-10-17"
    }
  ]
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "完整最终应用重新核对：JPL世纪率/归一化Kepler及512均E轨道同源，Moon独立黄道5.145°带节点/近心进动，逐颗有向有效。环影统一世界空间，3000点带真实Kepler、HalfFloat多采样和Bloom后手写ACES成立，大气rim保持部分。物理spin由IAU北极与signed周期推进，没把教科书大tilt再叠一次，data满分重新证实；无哈雷/其他彗星。新查全景/俯瞰缩放下限.2<Rsun3.1，近观2.8R安全，zoom改部分。跟随精确平移当前体位置，暂停JD与spin固定；A此刻和镜头分开复位仍.5。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145,
      "reason": "实际独立黄道5.145°与节点/近心进动，proper(x,z,−y)，正周期r×v对黄北5.145°。",
      "sourceLines": "L157/163–165/188",
      "reviewedAt": "2026-10-17"
    }
  ]
},
    'DeepSeekV4.1Flash0910(Max)V1': {
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
  "moons": 15,
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
    "drag": 1,
    "zoom": 0.5,
    "focus": 1,
    "follow": 0.5,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "完整3019行原件与最后绑定本轮重新阅读并抽取最终纯函数复算。JPL世纪率/Kepler/世界坐标与运动双带、真实Bloom后ACES成立；大气仅Fresnel边缘项。15颗卫星有效12：Moon黄北5.145°，Iapetus实际15.413089°接近源码15.47°母赤道近似，撤销旧Laplace误读；Titania/Oberon对真实物理顺行轴179.667729°/179.943318°、Triton对Neptune轴47.415987°仍无效，Charon不跟Pluto错误spin误扣。15颗卫星GPU轨道线未加母星平移且incl被乘0，pathFit部分；行星固定J2000线不另扣epoch/data/stability。环投球成立，球投环的world遮挡半径却恒1.02而Saturn真实应2.761672，rings部分。独立data4：Sun实体spin始终0、Pluto负rotP及卫星锁定轴/朝向错误；本轮固定朝面漂移Moon57.17°/Io51.05°/Charon112.65°。局部球网格朝外与负det模型净合成向内，实际CCW/BACK画远侧，integrity4。默认1天/秒火卫一跟随12样本均丢视野，follow部分；聚焦近距有1.6R+.02保护，但R全景滚轮实测.07767<Sun3，zoom仍部分。暂停物理运动有效，A只恢复速度/镜头仍.5；无哈雷/其他彗星，无fatal，T3保留。",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 5.144999999999942,
      "actualEclipticInclinationDeg": 5.144999999999942,
      "actualParentPoleInclinationDeg": 28.58429999999998,
      "actualReferenceAxis": [
        0,
        1,
        0
      ],
      "expectedInclinationDeg": 5.145,
      "periodDays": 27.3217,
      "reason": "Moon独立黄道法线5.145°与27.3217d成立。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 1,
      "actualInclinationDeg": 0.966572158462948,
      "actualEclipticInclinationDeg": 26.867827207700866,
      "actualParentPoleInclinationDeg": 0.966572158462948,
      "actualReferenceAxis": [
        0.4461125688373591,
        0.8932557789209908,
        0.05547692628099071
      ],
      "expectedInclinationDeg": 1.08,
      "periodDays": 0.31891,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 1,
      "actualInclinationDeg": 1.6019956084921516,
      "actualEclipticInclinationDeg": 26.989841803091867,
      "actualParentPoleInclinationDeg": 1.6019956084921516,
      "actualReferenceAxis": [
        0.4461125688373591,
        0.8932557789209908,
        0.05547692628099071
      ],
      "expectedInclinationDeg": 1.79,
      "periodDays": 1.263,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.03599617654530564,
      "actualEclipticInclinationDeg": 2.244953596665989,
      "actualParentPoleInclinationDeg": 0.03599617654530564,
      "actualReferenceAxis": [
        -0.014574056914845713,
        0.9992551384537579,
        0.035731850481103555
      ],
      "expectedInclinationDeg": 0.036,
      "periodDays": 1.7691,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.4659505071684774,
      "actualEclipticInclinationDeg": 2.6489173398948025,
      "actualParentPoleInclinationDeg": 0.4659505071684774,
      "actualReferenceAxis": [
        -0.014574056914845713,
        0.9992551384537579,
        0.035731850481103555
      ],
      "expectedInclinationDeg": 0.466,
      "periodDays": 3.5512,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.17698120130995432,
      "actualEclipticInclinationDeg": 2.3764101209388118,
      "actualParentPoleInclinationDeg": 0.17698120130995432,
      "actualReferenceAxis": [
        -0.014574056914845713,
        0.9992551384537579,
        0.035731850481103555
      ],
      "expectedInclinationDeg": 0.177,
      "periodDays": 7.1546,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "actualInclinationDeg": 0.1919796081968109,
      "actualEclipticInclinationDeg": 2.39045883700198,
      "actualParentPoleInclinationDeg": 0.1919796081968109,
      "actualReferenceAxis": [
        -0.014574056914845713,
        0.9992551384537579,
        0.035731850481103555
      ],
      "expectedInclinationDeg": 0.192,
      "periodDays": 16.689,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 0.008967091174056429,
      "actualEclipticInclinationDeg": 28.041105348108,
      "actualParentPoleInclinationDeg": 0.008967091174056429,
      "actualReferenceAxis": [
        0.08543804491951781,
        0.8825379306487928,
        -0.46241446933079067
      ],
      "expectedInclinationDeg": 0.009,
      "periodDays": 1.3702,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 0.34373849831931985,
      "actualEclipticInclinationDeg": 27.710762869124657,
      "actualParentPoleInclinationDeg": 0.34373849831931985,
      "actualReferenceAxis": [
        0.08543804491951781,
        0.8825379306487928,
        -0.46241446933079067
      ],
      "expectedInclinationDeg": 0.345,
      "periodDays": 4.5182,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 0.3467275287036133,
      "actualEclipticInclinationDeg": 27.707813946382668,
      "actualParentPoleInclinationDeg": 0.3467275287036133,
      "actualReferenceAxis": [
        0.08543804491951781,
        0.8825379306487928,
        -0.46241446933079067
      ],
      "expectedInclinationDeg": 0.348,
      "periodDays": 15.945,
      "reason": "正确母星/真实周期/有向法线基本有效；全球Rx引起的小角近似沿现有基本信用接受，不加IAU节点严格项。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "iapetus",
      "parent": "saturn",
      "quality": 1,
      "actualInclinationDeg": 15.413089461890939,
      "actualEclipticInclinationDeg": 13.117836996176381,
      "actualParentPoleInclinationDeg": 15.413089461890939,
      "actualReferenceAxis": [
        0.08543804491951781,
        0.8825379306487928,
        -0.46241446933079067
      ],
      "expectedInclinationDeg": 15.47,
      "periodDays": 79.322,
      "reason": "Iapetus输入明确15.47°母赤道近似，实际15.413089°，旧Laplace15.47误读撤回。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 179.66772914030548,
      "actualEclipticInclinationDeg": 82.61539190554136,
      "actualParentPoleInclinationDeg": 0.33227085969451514,
      "actualReferenceAxis": [
        0.21201099582187397,
        -0.13427574007583673,
        -0.9679986380557069
      ],
      "expectedInclinationDeg": 0.34,
      "periodDays": 8.7062,
      "reason": "Uranus此处实际IAU北pole配负Wrate；本星正P却绕该north，r×v相对物理顺行轴−pole约179.x°，非只看负号判错。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 0,
      "actualInclinationDeg": 179.9433184987868,
      "actualEclipticInclinationDeg": 82.33991564418389,
      "actualParentPoleInclinationDeg": 0.056681501213208293,
      "actualReferenceAxis": [
        0.21201099582187397,
        -0.13427574007583673,
        -0.9679986380557069
      ],
      "expectedInclinationDeg": 0.058,
      "periodDays": 13.4632,
      "reason": "Uranus此处实际IAU北pole配负Wrate；本星正P却绕该north，r×v相对物理顺行轴−pole约179.x°，非只看负号判错。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "actualInclinationDeg": 47.41598713035838,
      "actualEclipticInclinationDeg": 21.199289643893287,
      "actualParentPoleInclinationDeg": 47.41598713035838,
      "actualReferenceAxis": [
        0.355883256858649,
        0.8827313455902422,
        0.30681016769351244
      ],
      "expectedInclinationDeg": 156.9,
      "periodDays": -5.877,
      "reason": "Triton负P加全球world-X倾斜156.9°，净对Neptune pole47.415987°，不是期望156.9°，保留0。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "actualInclinationDeg": 0.05880981463350731,
      "actualEclipticInclinationDeg": 112.75935318777762,
      "actualParentPoleInclinationDeg": 0.05880981463350731,
      "actualReferenceAxis": [
        -0.6779336643918905,
        -0.38773391996215817,
        -0.6245545244371883
      ],
      "expectedInclinationDeg": 0.08,
      "periodDays": 6.3872,
      "reason": "Charon沿Pluto真实IAU正Wrate北pole顺行有效，不以母星错误负rotP误扣。",
      "sourceLines": "L1512–1521/1545–1616/2387–2407",
      "reviewedAt": "2026-10-17"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "earthMoonValid": true
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
      "reason": "L2056: 实际world轨道r×v有向黄道倾角95.145°，期望5.145°。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 95.145,
      "expectedInclinationDeg": 5.145,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对jupiter轴有向倾角仍179.950000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对jupiter轴有向倾角仍179.530000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对jupiter轴有向倾角仍179.800000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对jupiter轴有向倾角仍179.810000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对saturn轴有向倾角仍179.650000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.65000000000043,
      "expectedInclinationDeg": 0.35,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L306/L2056: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角156.900000°，期望156.9°。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 156.9,
      "expectedInclinationDeg": 156.9,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "任务§3.7指定正Z/Rx再proper母轴；L306–315; L2062–2080直接照做，实际对pluto轴有向倾角仍179.920000°，提示公式内生反向按任务依从免责计1，不宣称物理正确。 本轮重新执行原函数并核完整母基det+1；期望参考面不从错误自转相位倒推。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08,
      "sourceLines": "306–315;375–383;1880–1901;2056–2078",
      "reviewedAt": "2026-10-17"
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "本轮逐条参照完整任务、重新读3067行最终执行链：原生离线WebGL2、HDR降级与自建4×MSAA成立。双向环影使用含自转的完整模型逆旋转和实际世界半径，动态带、Bloom后最终ACES及解析密度/日照/Mie大气均有效。8颗卫星保留7颗任务信用；Moon额外Y/Z映射使黄道有向倾角95.145°，仍无效，六颗普通赤道卫星的179.x°属任务正Z/Rx内生方向，Triton156.9°实际有效。哈雷420等E轨迹弦距小于核，但最终draw仅r<6.5AU时执行，默认远日段有核却无轨迹，pathFit改部分；不重复扣Halley或完整性。卫星把显示距离混入AU导致实时距离/光行时错误、行星模型额外Ry(-spin)反转属独立数据问题，data4；不扣任务轴倾/负周期或June/July冲突。球网格外绕序与proper模型相容、clear前恢复深度写，未见0910一句话版的剔除或轨道平移故障。拖拽、聚焦和直接跟随有效，暂停/倒放/此刻按任务成立；固定0.35缩放下限缺半径保护，zoom保留部分，不要求全状态reset。无致命故障。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "联网 Three.js 的八行星 J2000/开普勒轨道与同源轨迹、动态小行星带、Bloom 和末尾 OutputPass 的 ACES 有效。环缺双向阴影，大气是边缘辉光。唯一月球实际公转方向与行星映射相反，计无效并执行月球锚点扣分，不重复扣数据。负自转周期与大倾角叠加、真实尺寸漏云层/大气/月球仍是独立缺陷。聚焦只一次插值55%，持续观察只移动目标，近景聚焦与跟随部分有效；Space冻结模拟日期但太阳仍按墙钟转，缺完整重置。无彗星，视觉不计分。",
  "earthMoonValid": false,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 0,
      "actualInclinationDeg": 173.15722658736905,
      "expectedInclinationDeg": 5.145,
      "reason": "L372 proper行星world(x,z,-y)对应north+Y；L1601 r=(cosθ,.12sinθ,+sinθ)的r×v对+Y为173.157227°，公转逆向。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "reason": "L1397: 实际world轨道r×v有向黄道倾角5.145°，期望5.145°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 5.145,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.050000°，期望0.05°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 0.05000000000036243,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.470000°，期望0.47°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 0.4700000000001629,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.200000°，期望0.2°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 0.19999999999981224,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对jupiter几何pole有向倾角0.190000°，期望0.19°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 0.1900000000007852,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对saturn几何pole有向倾角0.350000°，期望0.35°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 0.34999999999958503,
      "expectedInclinationDeg": 0.35
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 0,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对neptune几何pole有向倾角23.100000°，期望156.9°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
      "actualInclinationDeg": 23.099999999999994,
      "expectedInclinationDeg": 156.9
    },
    {
      "id": "charon",
      "parent": "pluto",
      "quality": 1,
      "reason": "L1459/L1397: 根据实际基手性和正负相位，r×v对pluto几何pole有向倾角0.080000°，期望0.08°。 本轮重新核L1405–1420/L1459–1468最终函数，额外left-handed基与prompt proper基区分；物理结果未修。",
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "按完整任务与最终执行链复核：原生离线 WebGL2 的 JPL/开普勒、动态带、Bloom/最终 ACES 和解析大气有效。环面半径单位正确，但球面环影固定关闭，部分计分。行星实体直接用黄道XYZ，轨迹用(x,z,−y)，路径不合；只在路径项扣。8颗卫星7颗有效，海卫一额外左手母轴导致23.1°仍无效。月球日心距离误显示母轨道半径，data4；球面反绕序与负模型基净抵消，完整性满分。聚焦/跟随、暂停/正倒放/此刻可用，缩放被持续焦点距离拉回。任务给定自转/哈雷日期矛盾不归责，无额外全状态重置要求，无其他彗星或已证致命故障。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "data": 3.5,
    "integrity": 3.5
  },
  "visualBase": null,
  "interaction": {
    "drag": 1,
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": "L2",
  "fatalReason": "选择卫星后逐帧异常阻断最终绘制，核心观察功能失效。",
  "note": "重新检查最终源码：联网 Three.js 的真实行星开普勒求解、运动带、Bloom/末尾 ACES 有效，大气为边缘光。环几何额外转90°且影子判定反向；轨迹把近日点黄经当幅角，与主体不合。12颗卫星中月球及4颗木卫沿既有基本信用有效，另7颗仍有错误参考面或逆行方向，不重复扣数据。Halley幅角/历元、向太阳的尾、特洛伊镜像及Pluto倾角率误抄构成data3.5；Earth云层物理半径误作显示尺度、真实尺寸漏卫星构成integrity3.5，撤销旧无充分支撑的2/2。正常选择卫星会在updateClock访问缺失el并中断绘制，本轮实跑已确认L2/runtime3：正常Moon选择后renderFrame固定、未再绘制。完整相机过渡与同量平移跟随存在，不以过远或同一信息异常重复扣focus/follow。暂停仍有太阳墙钟自转，无完整复位。",
  "moonEvidence": [
    {
      "id": "moon",
      "quality": 1,
      "reason": "黄道5.145°及正周期方向基本成立 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "phobos",
      "quality": 0,
      "reason": "把母星赤道小倾角套在世界黄道面，Mars约25°倾斜遗漏 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "deimos",
      "quality": 0,
      "reason": "把母星赤道小倾角套在世界黄道面，Mars约25°倾斜遗漏 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "io",
      "quality": 1,
      "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "europa",
      "quality": 1,
      "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "ganymede",
      "quality": 1,
      "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "callisto",
      "quality": 1,
      "reason": "世界黄道面近似与Jupiter约3°赤道倾斜接近，方向/周期成立 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "titan",
      "quality": 0,
      "reason": "母星赤道参考面被世界黄道面替代 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "enceladus",
      "quality": 0,
      "reason": "母星赤道参考面被世界黄道面替代 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "titania",
      "quality": 0,
      "reason": "母星赤道参考面被世界黄道面替代 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "charon",
      "quality": 0,
      "reason": "母星赤道参考面被世界黄道面替代 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    },
    {
      "id": "triton",
      "quality": 0,
      "reason": "dir-1与156.9°轨道倾角重复翻转逆行 本轮重新核L1389–1400实际位置与period/dir，未以可能错误母自转当公转参考。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "runtime": 5,
    "data": 3,
    "integrity": 2
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
  "fatalReason": "最终全屏合成buffer的非交错布局与16byte交错步长不一致，clip顶点及UV配对错误，整体核心画面合成失效；仅归integrity2，不重复扣runtime、focus或卫星NaN。",
  "note": "逐条对照任务与最终执行：给定轴倾/负自转、卫星算法和哈雷日期冲突不归责模型，也不要求全状态复位。Kepler行星、同源路径、动态带、双向环影、Bloom/最终ACES与解析大气有效。8颗卫星缺自身轴/自转字段导致模型NaN，只计卫星项。最终全屏buffer按错误交错步长读取，clip顶点与UV整体错配，核心合成失效，integrity2/L2；主循环本身持续，runtime恢复5，聚焦不重复扣。压缩显示长度标AU、光行时错误量纲两个独立数据链保留data3。暂停只冻JD而自转继续、跟随目标停在旧位置；固定缩放边界可能穿Sun，分别按独立控制部分/无效计分。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "离线打包 Three.js 的 J2000/开普勒轨道与同源轨迹、运动小行星带和自制 Bloom 有效。唯一月球对本程序反射世界黄北实际约4.574°，方向、母星和27.322天周期正确，沿基本小角近似计有效。环无双向投影，大气为边缘光；默认 Bloom 合成未调用 ACES，仅关 Bloom 直渲染生效，部分计分。负周期与大倾角叠加、“10y/s”实际912.5天/秒是数据问题。暂停冻结行星但太阳和小行星带继续墙钟运动，系统视图仅恢复镜头。聚焦、跟随和安全缩放成立。撤旧无独立证据的完整性半分扣项，避免重复归责；无彗星，视觉不计分。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "actualInclinationDeg": 4.573921259900861,
      "expectedInclinationDeg": 5.145,
      "reason": "L533整体反射world(x,z,+y)，north=-Y；L1497–1501 r×v为4.573921°，period27.322及parent正确，基本小角近似计1。"
    }
  ]
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角174.855000°保留，并非物理已修正。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.950000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.530000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.800000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.810000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.650000°保留，并非物理已修正。",
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
      "quality": 1,
      "reason": "L204–216/L469–483：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.920000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 3,
    "data": 4,
    "integrity": 4
  },
  "visualBase": null,
  "interaction": {
    "drag": 0.5,
    "zoom": 0.5,
    "focus": 0.5,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "重新核最终覆盖函数与完整任务：原生离线 WebGL2 的开普勒轨道、同源路径、8颗任务给定算法卫星、哈雷、动态带、双向环影、Bloom、最终 ACES 与解析大气有效。存在独立实现错误：proper模型配内绕序球网格且实际BACK/CCW剔除，实体完整性4；自转基矩阵额外反号及卫星统一30小时，data4。非地球行星信息更新对const赋值抛异常，最终选择函数因此没执行聚焦距离设置，runtime3/focus部分计分，无核心停机证据。拖拽后的click未抑制，缩放虽算minD但未执行保护；持续跟随、暂停/此刻/正倒放成立。任务自身signed自转/卫星算法矛盾不归责。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
  "note": "联网 Three.js 的固定真实根数/开普勒与同源轨迹、动态带、Bloom 和末尾 OutputPass 的 ACES 有效；环无双向阴影，大气为边缘光。6颗卫星公转坐标与行星映射相反，全部无效，月球锚点扣分不重复到数据。自转依墙钟而非模拟日期、负周期叠大倾角，以及速度面板显示固定近日点值仍为独立data3.5。拖拽开始即选目标，缩放下限可小于太阳，聚焦过渡过早结束；持续跟随的camera与target平移链完整。暂停不停止物理自转，系统视图非完整重置。旧完整性4无独立硬错，撤重复归责恢复5；无彗星，无已证致命故障。",
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5': {
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
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角174.855000°保留，并非物理已修正。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.950000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.530000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.800000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.810000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.650000°保留，并非物理已修正。",
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
      "quality": 1,
      "reason": "L467–472/L2412–2441：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.920000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08
    }
  ],
  "halley": true,
  "otherComets": 0,
  "correctness": {
    "runtime": 5,
    "data": 5,
    "integrity": 3.5
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
  "note": "按完整任务与最终绑定复核，原生 WebGL2 的 JPL/开普勒、同源路径、8颗任务算法卫星、哈雷、动态带、Bloom/最终 ACES 和解析大气有效。新增硬证据：球面环影用未逆自转的母基，而实体已转，环影部分计分；所有球体的normalMat也漏当前自转，影响独立球面光照。真实尺度关闭仍向硬压缩插值、离子尾指向太阳，三项合并完整性3.5，不重复归责到数据或哈雷。数据面板单位正确，给定signed自转/卫星算法冲突免责。拖拽、聚焦、跟随、暂停/此刻/正倒放完整；缩放最低.05可入太阳，保留部分。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "follow": 0.5,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "原生离线长时段 JPL/开普勒与同源轨迹、动态带、双向世界坐标环影、Bloom/最终 ACES、哈雷及独立恩克彗星有效；大气为边缘光。13颗卫星中月球节点/倾角和天卫三方向有效，其余实际有向轨道含木星基矩阵/母赤道逆向错误，按卫星项扣。冥王星IAU北极配负自转率是独立data4.5。球网格显式校正外绕序，深度写入在透明层后恢复，未发现0910式剔除或清屏故障。缩放缺半径保护，暂停无完整A重置，分别部分计分。默认3days/s选Phobos并等聚焦距离收敛至2%内后，12个中心投影仍全在屏外，低通目标明显滞后，follow部分；不重复扣focus/zoom。视觉不计分。",
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
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.950000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.530000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.800000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.810000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.650000°保留，并非物理已修正。",
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
      "quality": 1,
      "reason": "L277–286/L1746–1763：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.920000°保留，并非物理已修正。",
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
    "pauseReset": 1
  },
  "fatal": null,
  "note": "按完整任务复核最终绑定：原生离线 WebGL2 的 JPL世纪率/开普勒、同源行星/月球/哈雷路径、8颗任务算法卫星、动态带、双向环影、Bloom/最终 ACES 和解析大气均有效。球体网格显式校正外绕序，model、normal和逆投光矩阵均含当前自转，排除同类坐标漏洞。拖拽、完整聚焦/持续跟随、暂停物理运动与此刻/正倒放可用；最小缩放.45小于太阳4.6且没有动态半径守卫，保留zoom部分。任务给定signed自转/卫星算法/哈雷日期矛盾不扣，无额外全状态重置要求；无其它彗星，未见独立数据/完整性硬错。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "pathFit": 0.5,
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
  "note": "原生离线 WebGL2 的 JPL/开普勒、Meeus月球、动态带、双向环影、Bloom/最终ACES与安全缩放有效，大气仅边缘光。20颗卫星按本轮基本参考面复算，土卫八15.47°赤道近似恢复有效；5颗天王星卫星方向仍错，计15颗有效，奖励上限不变。新发现所有卫星引导线强制落母赤道、遗漏实际倾角与节点，行星引导线正常，pathFit部分。独立数据包括黄赤转换符号、把完整Moon位移加到地月质心、E替真近点角。定时器每120ms永久新增RAF链，实测链数38→89；8ms guard使暂停JD/自转仍固定，不误称时钟加速或已发生L2，runtime4。云/大气较小LOD配原sphere索引数，跨阈值实测GL1282，独立integrity3.5。focus仅切目标，双击才拉近；持续跟随和物理暂停成立，无完整A重置。",
  "moonEvidence": [
    {
      "id": "luna",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "phobos",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "deimos",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "io",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "europa",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "ganymede",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "callisto",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "mimas",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "enceladus",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "tethys",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "dione",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "rhea",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "titan",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "triton",
      "quality": 1,
      "reason": "L359–410（月球）或L418–438/L2021–2030（母星赤道）：周期、父体、有向参考面已重新逐式核；基本Kepler信用1。"
    },
    {
      "id": "iapetus",
      "quality": 1,
      "reason": "L304/L418–429/L2021–2030：15.47°是所绘母赤道近似，不是7.6°Laplace误套，沿本轮基本drawn-equator口径恢复1。"
    },
    {
      "id": "miranda",
      "quality": 0,
      "reason": "L264/L418–438/L2021–2030：正period绕所绘Uranus IAU north，五颗应绕反极方向，仍quality0；不采用母星自转效果推导。"
    },
    {
      "id": "ariel",
      "quality": 0,
      "reason": "L264/L418–438/L2021–2030：正period绕所绘Uranus IAU north，五颗应绕反极方向，仍quality0；不采用母星自转效果推导。"
    },
    {
      "id": "umbriel",
      "quality": 0,
      "reason": "L264/L418–438/L2021–2030：正period绕所绘Uranus IAU north，五颗应绕反极方向，仍quality0；不采用母星自转效果推导。"
    },
    {
      "id": "titania",
      "quality": 0,
      "reason": "L264/L418–438/L2021–2030：正period绕所绘Uranus IAU north，五颗应绕反极方向，仍quality0；不采用母星自转效果推导。"
    },
    {
      "id": "oberon",
      "quality": 0,
      "reason": "L264/L418–438/L2021–2030：正period绕所绘Uranus IAU north，五颗应绕反极方向，仍quality0；不采用母星自转效果推导。"
    }
  ],
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
},
    'MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5': {
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
  "earthMoonValid": true,
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角174.855000°保留，并非物理已修正。",
      "actualInclinationDeg": 174.855,
      "expectedInclinationDeg": 5.145
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.950000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.94999999999965,
      "expectedInclinationDeg": 0.05
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.530000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.52999999999986,
      "expectedInclinationDeg": 0.47
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.800000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80000000000018,
      "expectedInclinationDeg": 0.2
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.810000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.80999999999923,
      "expectedInclinationDeg": 0.19
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.650000°保留，并非物理已修正。",
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
      "quality": 1,
      "reason": "L2015–2028/L2062–2077：周期/倾角/参考面与正Z局部圆轨道绕X后直接加到世界/母星proper基，忠实执行任务2.4/3.7；该提示组合内生的反向有向法线不归责，按任务依从quality1。实际有向倾角179.920000°保留，并非物理已修正。",
      "actualInclinationDeg": 179.9200000000015,
      "expectedInclinationDeg": 0.08
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
    "zoom": 0.5,
    "focus": 1,
    "follow": 1,
    "pauseReset": 1
  },
  "fatal": null,
  "note": "按完整任务与最终执行复核：原生离线 WebGL2 的 JPL/开普勒、8颗任务算法卫星、哈雷、动态带、Bloom/最终ACES和解析大气有效。新核球面环影把normalMat的R/r当作inverseR乘世界光向量，且仅单侧生效；环面球影正确，rings部分。额外矮行星rotH小时再乘24及科普共振圈数错误独立保留data4.5。球网格与模型绕序、normal矩阵、深度状态完整；交互拖拽/聚焦/跟随及任务暂停/此刻/倒放成立，.35缩放无半径保护保留部分。任务给定轴倾/负周期、卫星算法及哈雷日期冲突不扣。另将原待量化的路径核实：哈雷512等M采样在可达1986近日点段最大弦距6.53071显示单位，大于核半径0.34，pathFit改部分；其余路径正常，不在数据或哈雷项重复扣。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017"
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
    "pathFit": 0.5,
    "stability": 1
  },
  "moons": 13,
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
    "zoom": 1,
    "focus": 1,
    "follow": 1,
    "pauseReset": 0.5
  },
  "fatal": null,
  "note": "重新核完整最终源码：离线原生 WebGL2 的 JPL世纪率/开普勒与同源引导线、13颗有正确基本有向参考面的卫星、哈雷、动态带、双向环影、HDR/Bloom/最终ACES，以及8步视线密度和光学深度散射均实际有效。平均卫星根数、示意初相、EMB位置与哈雷二体近似均已明示，没有独立证据要求额外高精历表或扣分；旧data4和integrity4.5无独立硬错，恢复5。外绕序/proper模型、深度状态和真实尺度链成立；拖拽、按半径保护的缩放、完整聚焦和直接跟随有效。物理暂停工作，“现在”与全景分离，没有完整A状态重置，保留pauseReset部分。另将原待量化的路径核实：哈雷512等M采样在可达1986近日点段最大弦距0.32834显示单位，大于核半径0.09，pathFit改部分；其余路径正常，不在数据或哈雷项重复扣。",
  "reviewedAt": "2026-10-17",
  "reviewVersion": "V3-20261017",
  "moonEvidence": [
    {
      "id": "moon",
      "parent": "earth",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "phobos",
      "parent": "mars",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "deimos",
      "parent": "mars",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "io",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "europa",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "ganymede",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "callisto",
      "parent": "jupiter",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "enceladus",
      "parent": "saturn",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "rhea",
      "parent": "saturn",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "titan",
      "parent": "saturn",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "titania",
      "parent": "uranus",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "oberon",
      "parent": "uranus",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    },
    {
      "id": "triton",
      "parent": "neptune",
      "quality": 1,
      "reason": "L93–101：完整Kepler相位/倾角；Moon直接黄道，规则moon经proper母基，Uranus用负相位、Triton156.865°正周期，实际有向方向成立；相位示意已披露。"
    }
  ]
}
  };
})();
