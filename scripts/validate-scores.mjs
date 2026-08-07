import fs from 'node:fs';
import vm from 'node:vm';

const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const context = { window: {} };
context.window.window = context.window;
vm.createContext(context);
for (const file of ['assets/data.js', 'assets/scores.js', 'assets/site.js']) {
  vm.runInContext(read(file), context, { filename: file });
}

const { WORKS, SCORES, PAIR_ORDER, HIDDEN_WORK_IDS, SITE } = context.window;
const fail = message => { throw new Error(message); };
const check = (condition, message) => { if (!condition) fail(message); };
const close = (actual, expected, label) => check(Math.abs(actual - expected) < 1e-9, `${label}: expected ${expected}, got ${actual}`);
const exactKeys = (value, expected, label) => {
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  check(JSON.stringify(actual) === JSON.stringify(wanted), `${label}: keys ${actual.join(', ')}; expected ${wanted.join(', ')}`);
};
const allowed = (value, values, label) => check(values.includes(value), `${label}: invalid value ${value}`);
const finiteRange = (value, min, max, label) => check(Number.isFinite(value) && value >= min && value <= max, `${label}: expected finite ${min}..${max}, got ${value}`);

const CANONICAL_NAMES = {
  'Opus5Ultra-TasksAssignedByOpus5': 'Claude Opus 5 (Ultra)',
  'DeepSeek-V4-Flash-0731': 'DeepSeek V4 Flash 0731 (Max)',
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #1',
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #2',
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #3',
  'DeepSeekProMax-TasksAssignedByOpus5': 'DeepSeek V4 Pro (Max)',
  'DeepSeek_V4_Pro_high-1': 'DeepSeek V4 Pro (Max) #1',
  'DeepSeek_V4_Pro_high-2': 'DeepSeek V4 Pro (Max) #2',
  'DeepSeek_V4_Pro_high-3': 'DeepSeek V4 Pro (Max) #3',
  'Fable5Max-Three': 'Claude Fable 5 (Max) #1',
  'Fable5Max-WebGL2': 'Claude Fable 5 (Max) #2',
  'GLM5.2Max-TasksAssignedByOpus5': 'GLM 5.2 (Max)',
  'GLM5.2Max': 'GLM 5.2 (Max)',
  'GLM_5_1_high-1': 'GLM 5.1 (Max)',
  'GPT5.5xHigh-TasksAssignedByOpus5': 'GPT-5.5 (xHigh)',
  'GPT5.6LunaMax-TasksAssignedByOpus5': 'GPT-5.6 Luna (Max)',
  'GPT5.6SolMax': 'GPT-5.6 Sol (Max)',
  'GPT5.6SolUltra-TasksAssignedByOpus5': 'GPT-5.6 Sol (Ultra)',
  'GPT5.6SolUltra-WebGL2': 'GPT-5.6 Sol (Ultra) #1',
  'GPT5.6SolUltra': 'GPT-5.6 Sol (Ultra) #2',
  'GPT5.6TerraUltra-Three': 'GPT-5.6 Terra (Ultra)',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': 'GPT-5.6 Terra (Ultra)',
  'GPT_5_5_xhigh': 'GPT-5.5 (xHigh)',
  'Gemini3.1Pro-TasksAssignedByOpus5': 'Gemini 3.1 Pro (high)',
  'Gemini3.5Flash-TasksAssignedByOpus5': 'Gemini 3.5 Flash (high)',
  'Gemini3.6Flash-TasksAssignedByOpus5': 'Gemini 3.6 Flash (high)',
  'Gemini_3_5_flash_high': 'Gemini 3.5 Flash (high)',
  'Grok4.5': 'Grok 4.5 (high)',
  'Hy3-TasksAssignedByOpus5': 'Hy 3 (high)',
  'Hy3': 'Hy 3 (high)',
  'KimiK3Max-TasksAssignedByOpus5': 'Kimi K3 (Max)',
  'KimiK3Max': 'Kimi K3 (Max)',
  'LongCat2.0-TasksAssignedByOpus5': 'LongCat 2.0 (high)',
  'LongCat2.0': 'LongCat 2.0 (high)',
  'Mimo_2_5_Pro_high-1': 'MiMo 2.5 Pro (high)',
  'MiniMaxM3-TasksAssignedByOpus5': 'MiniMax M3 (high) #1',
  'MiniMaxM3(high)V2-TasksAssignedByOpus5': 'MiniMax M3 (high) #2',
  'MiniMax_M3_thinking-1': 'MiniMax M3 (high)',
  'Opus5Ultra-WebGL2': 'Claude Opus 5 (Ultra)',
  'Opus_4_8_Max': 'Claude Opus 4.8 (Max)',
  'Opus4.8Ultra-TasksAssignedByOpus5': 'Claude Opus 4.8 (Ultra)',
  'Qwen3.7Max': 'Qwen 3.7 Max (Max)',
  'Qwen3.8Max-TasksAssignedByOpus5': 'Qwen 3.8 Max Preview (Max) #1',
  'Qwen3.8MaxV2-TasksAssignedByOpus5': 'Qwen 3.8 Max Preview (Max) #2',
  'Qwen3.8MaxV2': 'Qwen 3.8 Max Preview (Max) #3',
  'Qwen3.8Max-inQoder': 'Qwen 3.8 Max Preview (Max) #1',
  'Qwen3.8MaxV1-inQoder': 'Qwen 3.8 Max Preview (Max) #2',
  'Qwen3.8Max(Max)V1': 'Qwen 3.8 Max (Max) #1',
  'Qwen3.8Max(Max)V2': 'Qwen 3.8 Max (Max) #2',
  'Qwen3.8Max(Max)V3': 'Qwen 3.8 Max (Max) #3',
  'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': 'Qwen 3.8 Max (Max)',
  'Sonnet5Ultra': 'Claude Sonnet 5 (Ultra)',
  'Sonnet5Ultra-TasksAssignedByOpus5': 'Claude Sonnet 5 (Ultra)',
};

const EXPECTED_EXACT = {
  'DeepSeek-V4-Flash-0731': 45.55, 'DeepSeek_V4_Pro_high-1': 40.3, 'DeepSeek_V4_Pro_high-2': 51.86,
  'DeepSeek_V4_Pro_high-3': 51.43, 'Fable5Max-Three': 83.6, 'Fable5Max-WebGL2': 89.7,
  'GLM5.2Max': 53.9, 'GLM_5_1_high-1': 43.95, 'GPT5.6SolMax': 81.4,
  'GPT5.6SolUltra-WebGL2': 94.2, 'GPT5.6SolUltra': 81.4, 'GPT5.6TerraUltra-Three': 68.4,
  'GPT_5_5_xhigh': 71.8, 'Gemini_3_5_flash_high': 78.9, 'Grok4.5': 67.55, 'Hy3': 51.61,
  'KimiK3Max': 80.5, 'LongCat2.0': 36.66, 'Mimo_2_5_Pro_high-1': 42.42,
  'MiniMax_M3_thinking-1': 51.17, 'Opus5Ultra-WebGL2': 97.6, 'Opus_4_8_Max': 89.5,
  'Qwen3.7Max': 57.57, 'Qwen3.8MaxV2': 44.2, 'Qwen3.8Max-inQoder': 49.16,
  'Qwen3.8MaxV1-inQoder': 43.03, 'Qwen3.8Max(Max)V1': 54, 'Qwen3.8Max(Max)V2': 63.05,
  'Qwen3.8Max(Max)V3': 72.95, 'Sonnet5Ultra': 84.5,
  'Opus5Ultra-TasksAssignedByOpus5': 97.6, 'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': 83.9,
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': 60, 'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': 79.75,
  'DeepSeekProMax-TasksAssignedByOpus5': 79.85,
  'GLM5.2Max-TasksAssignedByOpus5': 78.05, 'GPT5.5xHigh-TasksAssignedByOpus5': 92.4,
  'GPT5.6LunaMax-TasksAssignedByOpus5': 80.8, 'GPT5.6SolUltra-TasksAssignedByOpus5': 97.6,
  'GPT5.6TerraUltra-TasksAssignedByOpus5': 95.2, 'Gemini3.1Pro-TasksAssignedByOpus5': 77.1,
  'Gemini3.5Flash-TasksAssignedByOpus5': 74.05, 'Gemini3.6Flash-TasksAssignedByOpus5': 80.65,
  'Hy3-TasksAssignedByOpus5': 73.8, 'KimiK3Max-TasksAssignedByOpus5': 93.05,
  'LongCat2.0-TasksAssignedByOpus5': 60, 'MiniMaxM3-TasksAssignedByOpus5': 25,
  'MiniMaxM3(high)V2-TasksAssignedByOpus5': 25,
  'Opus4.8Ultra-TasksAssignedByOpus5': 96.3, 'Qwen3.8Max-TasksAssignedByOpus5': 76.95,
  'Qwen3.8MaxV2-TasksAssignedByOpus5': 73.2, 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': 90.75,
  'Sonnet5Ultra-TasksAssignedByOpus5': 94.2,
};

// Audit-authored field oracle. Order:
// reference | featureMap(5) | orbitModel(5) | orbitRuntime(2) | moons | Earth Moon | Halley |
// correctness(3) | visualBase | interaction(5) | fatal | fatalReason.
// This is deliberately independent of the score formula: compensated field drift must still fail.
const EXPECTED_AUDIT_FINGERPRINT = {
  'DeepSeek-V4-Flash-0731': '0|0.4|0.4|0.4|1|1|1|1|1|0.5|0.5|0.5|0.5|1|1|0|4|4|3|1.5|1|1|0.5|0|1|-|-',
  'DeepSeek_V4_Pro_high-1': '0|0.4|1|1|1|0|1|0|0.5|0|0|1|1|1|1|0|5|3|5|2.5|1|1|0|0|0|-|-',
  'DeepSeek_V4_Pro_high-2': '0|0.4|1|1|1|1|1|0|1|1|0.5|0.5|1|0|0|0|5|3|4|6.1|1|1|1|0.5|0.5|-|-',
  'DeepSeek_V4_Pro_high-3': '0|0.4|1|0|1|1|1|0|0.5|1|0|1|1|1|1|0|5|3|5|5.8|1|1|1|0|0.5|-|-',
  'Fable5Max-Three': '1|0.4|1|1|0|1|1|1|1|1|1|1|0.5|6|1|1|5|5|4|7.5|1|0.5|1|1|0.5|-|-',
  'Fable5Max-WebGL2': '1|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|0|5|5|4|9.5|1|1|1|1|1|-|-',
  'GLM5.2Max': '0|0.4|1|1|1|1|1|0|0.5|0|0|1|1|1|1|0|5|3|5|4|1|1|1|1|1|-|-',
  'GLM_5_1_high-1': '0|0.4|1|1|1|0|1|0|0.5|0|0|1|1|1|1|0|5|3|5|3|1|1|1|0|0.5|-|-',
  'GPT5.6SolMax': '0|0.4|1|0|1|1|1|1|1|1|1|1|1|7|1|0|5|5|5|6|1|1|1|1|1|-|-',
  'GPT5.6SolUltra-WebGL2': '1|1|1|1|1|1|1|1|1|1|1|1|1|14|1|0|4|5|4|9.5|1|1|1|1|1|-|-',
  'GPT5.6SolUltra': '0|0.4|1|0|1|1|1|1|1|1|1|1|1|7|1|0|5|5|5|6|1|1|1|1|1|-|-',
  'GPT5.6TerraUltra-Three': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|5|1|0|5|5|3|6|1|1|1|0|1|-|-',
  'GPT_5_5_xhigh': '0|0.4|1|1|1|0|1|1|1|1|1|1|1|9|1|1|5|5|4|2|0.5|1|0.5|0|1|-|-',
  'Gemini_3_5_flash_high': '0|0.4|1|0|1|0.4|1|1|1|1|1|1|1|10|1|0|5|4|4|7|1|1|1|1|1|-|-',
  'Grok4.5': '0|0.4|1|1|1|1|1|1|1|0.5|1|1|1|5|1|0|5|4|4|7|1|1|0.5|0|1|-|-',
  'Hy3': '0|0.4|0|1|1|1|1|0|0.5|0|0|1|1|1|1|0|5|3|5|6.6|1|1|0.5|1|1|-|-',
  'KimiK3Max': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|7|1|1|5|5|4|7|1|1|1|1|1|-|-',
  'LongCat2.0': '0|0.4|1|0|0|0|1|0|0.5|0.5|0|1|1|1|1|0|5|2.5|5|4.6|0.5|1|0|0|0.5|-|-',
  'Mimo_2_5_Pro_high-1': '0|0.4|1|0|1|0.4|1|0|0.5|0|0|1|1|1|1|0|5|2|5|4.2|1|1|0|0|1|-|-',
  'MiniMax_M3_thinking-1': '0|0.4|0|1|1|1|1|1|1|0.5|1|0|0|1|1|0|3|4|1|4.7|1|1|0.5|0.5|0.5|L2|外行星偏离轨道线，低速产生 NaN，重置失效。',
  'Opus5Ultra-WebGL2': '1|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|10|1|1|1|1|1|-|-',
  'Opus_4_8_Max': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|0|5|5|5|9|1|1|1|1|1|-|-',
  'Qwen3.7Max': '0|0.4|1|1|1|1|1|1|1|0.5|0|1|1|1|1|0|5|5|4|5.2|1|1|0|0|0.5|-|-',
  'Qwen3.8MaxV2': '0|0.4|1|0|0|0|1|0|1|1|0|1|1|1|1|0|5|3.5|5|6.5|1|1|0|0|0|-|-',
  'Qwen3.8Max-inQoder': '0|0|1|1|1|1|1|1|1|0|0|1|1|1|1|0|5|5|4|2.1|1|1|0|0|0|-|-',
  'Qwen3.8MaxV1-inQoder': '0|0.4|1|0|0|0|1|0.5|1|1|0|1|1|1|1|0|5|3.5|5|4.8|0.5|1|0|0|0|-|-',
  'Qwen3.8Max(Max)V1': '0|0.4|1|0|0|0.4|1|1|1|0|0|1|1|1|1|1|5|3.5|5|6.5|0.5|1|1|1|0.5|-|-',
  'Qwen3.8Max(Max)V2': '0|0.4|1|1|1|0|1|1|1|0.5|0|1|1|1|1|1|5|3.5|4|5|1|1|1|1|0.5|-|-',
  'Qwen3.8Max(Max)V3': '0|0.4|1|1|1|0.4|1|1|1|0.5|0|1|1|1|1|1|5|3.5|3.5|6.5|1|1|1|1|0.5|-|-',
  'Sonnet5Ultra': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|0|5|5|4|7.5|1|1|1|1|1|-|-',
  'Opus5Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|10|1|1|1|1|1|-|-',
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|3|5|7|0.5|1|0.5|1|1|-|-',
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|0|8|1|1|0|2|1|4|1|1|1|0|1|L2|双重帧调度让渲染循环持续倍增，长程性能失稳。',
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|5|2.5|4|6|1|0.5|1|1|1|-|-',
  'DeepSeekProMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|6|0.5|1|1|0|1|-|-',
  'GLM5.2Max-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|3|0.5|1|1|0|1|-|-',
  'GPT5.5xHigh-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|8|1|1|1|1|1|-|-',
  'GPT5.6LunaMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|4|3.5|1|1|1|0|1|-|-',
  'GPT5.6SolUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|10|1|1|1|1|1|-|-',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|8.5|1|1|1|1|1|-|-',
  'Gemini3.1Pro-TasksAssignedByOpus5': '0|1|1|1|1|0|1|1|1|1|1|1|1|8|1|1|5|4|4|5.5|1|0.5|0.5|0|1|-|-',
  'Gemini3.5Flash-TasksAssignedByOpus5': '0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|1|5|2|3|4|1|1|0.5|1|1|-|-',
  'Gemini3.6Flash-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|3|4|5|1|1|0.5|1|1|-|-',
  'Hy3-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|0.5|1|1|1|1|8|1|1|5|2|3|5|1|1|0.5|0|0.5|-|-',
  'KimiK3Max-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|9|1|1|1|1|0.5|-|-',
  'LongCat2.0-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|1|2|4.5|1|1|0.5|0|1|L2|环与大红斑核心结构失效，并出现 NaN 实时数据。',
  'MiniMaxM3-TasksAssignedByOpus5': '0|0.4|0.4|0.4|0.4|0.4|1|1|1|1|1|0|0|8|1|1|1|1|1|0|1|1|0.5|1|1|L1|白场与巨大黑三角遮挡主画面，无法正常审阅。',
  'MiniMaxM3(high)V2-TasksAssignedByOpus5': '0|0.4|0.4|0.4|0.4|0.4|1|1|1|1|1|0|0|8|1|1|1|1|1|0|1|1|0.5|0|0.5|L1|全屏后期四边形以 XYZ 数据生成，却按紧密排列的 XY 读取；同时 4× MSAA 解析使用了非法的 LINEAR 过滤。两处核心合成错误叠加，使主画布持续全黑，仅 UI 可见。',
  'Opus4.8Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4.5|5|9.5|1|1|1|1|1|-|-',
  'Qwen3.8Max-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|2|2|5.5|1|1|0.5|1|1|-|-',
  'Qwen3.8MaxV2-TasksAssignedByOpus5': '0|1|0.4|1|1|1|1|1|1|1|1|1|1|8|1|1|5|3|3|2.5|1|1|0.5|1|0.5|-|-',
  'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4.5|8.5|1|1|1|1|0.5|-|-',
  'Sonnet5Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|4|8.5|1|1|1|1|1|-|-',
};

const auditFingerprint = score => [
  score.reference ? 1 : 0,
  ...['rings', 'belt', 'bloom', 'aces', 'atmo'].map(key => score.featureMap[key]),
  ...['geometry', 'kepler', 'elements', 'orientation', 'epoch'].map(key => score.orbitModel[key]),
  ...['pathFit', 'stability'].map(key => score.orbitRuntime[key]),
  score.moons, score.hasEarthMoon ? 1 : 0, score.halley ? 1 : 0,
  ...['runtime', 'data', 'integrity'].map(key => score.correctness[key]),
  score.visualBase,
  ...['drag', 'zoom', 'focus', 'follow', 'pauseReset'].map(key => score.interaction[key]),
  score.fatal ?? '-', score.fatalReason ?? '-',
].join('|');

check(Array.isArray(WORKS) && WORKS.length === 53, `WORKS count must be 53, got ${WORKS?.length}`);
check(Object.keys(SCORES).length === 53, `SCORES count must be 53, got ${Object.keys(SCORES).length}`);
check(new Set(WORKS.map(w => w.id)).size === 53, 'WORKS IDs must be unique');
check(new Set(Object.keys(SCORES)).size === 53, 'SCORES IDs must be unique');
const workIds = [...WORKS.map(w => w.id)].sort();
const scoreIds = Object.keys(SCORES).sort();
check(JSON.stringify(workIds) === JSON.stringify(scoreIds), 'WORKS/SCORES IDs have missing or extra entries');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(CANONICAL_NAMES).sort()), 'Canonical-name ledger does not cover exactly the 53 WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_EXACT).sort()), 'Expected-score ledger does not cover exactly the 53 WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_AUDIT_FINGERPRINT).sort()), 'Audit fingerprint ledger does not cover exactly the 53 WORKS IDs');
check(WORKS.filter(w => w.group === 'A').length === 30, 'Audited Group A count must remain 30');
check(WORKS.filter(w => w.group === 'B').length === 23, 'Audited Group B count must remain 23');
const expectedHiddenIds = [
  'Qwen3.8Max-TasksAssignedByOpus5',
  'Qwen3.8MaxV2-TasksAssignedByOpus5',
  'Qwen3.8MaxV2',
  'Qwen3.8Max-inQoder',
  'Qwen3.8MaxV1-inQoder',
].sort();
check(JSON.stringify([...HIDDEN_WORK_IDS].sort()) === JSON.stringify(expectedHiddenIds), 'Exactly the five Qwen 3.8 Max Preview works must be hidden');
const visibleWorks = SITE.visibleWorks();
check(visibleWorks.length === 48, 'Visible WORKS count must be 48');
check(visibleWorks.filter(w => w.group === 'A').length === 27, 'Visible Group A count must be 27');
check(visibleWorks.filter(w => w.group === 'B').length === 21, 'Visible Group B count must be 21');
check(visibleWorks.every(w => !w.model.includes('Preview')), 'No Preview work may remain on visible site surfaces');
for (const id of expectedHiddenIds) check(SITE.byId(id) === undefined, id + ': direct work page lookup must stay hidden');
check(PAIR_ORDER.length === 15 && new Set(PAIR_ORDER).size === 15, 'PAIR_ORDER must contain 15 unique visible pairs');
check(!PAIR_ORDER.includes('qwen38') && !Object.hasOwn(context.window.PAIR_TITLES, 'qwen38'), 'The Preview comparison must be absent from visible pair metadata');
check(SITE.pairs().length === 15, 'Expected 15 complete visible pairs');
check(PAIR_ORDER[7] === 'qwen38max', 'The new Qwen 3.8 Max pair must occupy comparison position 08');

const referenceIds = ['Opus5Ultra-WebGL2', 'GPT5.6SolUltra-WebGL2', 'Fable5Max-Three', 'Fable5Max-WebGL2'].sort();
check(JSON.stringify(Object.entries(SCORES).filter(([, score]) => score.reference).map(([id]) => id).sort()) === JSON.stringify(referenceIds), 'Exactly the four approved references must be flagged');

const recordKeys = ['reference', 'featureMap', 'orbitModel', 'orbitRuntime', 'moons', 'hasEarthMoon', 'halley', 'correctness', 'visualBase', 'interaction', 'fatal', 'note'];
const optionalRecordKeys = ['fatalReason'];
const nested = {
  featureMap: ['rings', 'belt', 'bloom', 'aces', 'atmo'],
  orbitModel: ['geometry', 'kepler', 'elements', 'orientation', 'epoch'],
  orbitRuntime: ['pathFit', 'stability'],
  correctness: ['runtime', 'data', 'integrity'],
  interaction: ['drag', 'zoom', 'focus', 'follow', 'pauseReset'],
};

for (const work of WORKS) {
  const id = work.id;
  const score = SCORES[id];
  check(work.model === CANONICAL_NAMES[id], `${id}: canonical name mismatch: ${work.model}`);
  const actualFingerprint = auditFingerprint(score);
  check(actualFingerprint === EXPECTED_AUDIT_FINGERPRINT[id], `${id}: audit evidence fingerprint mismatch\n  expected ${EXPECTED_AUDIT_FINGERPRINT[id]}\n  actual   ${actualFingerprint}`);
  const required = score.fatal ? [...recordKeys, ...optionalRecordKeys] : recordKeys;
  exactKeys(score, required, `${id} record`);
  check(typeof score.reference === 'boolean', `${id}: reference must be boolean`);
  exactKeys(score.featureMap, nested.featureMap, `${id}.featureMap`);
  exactKeys(score.orbitModel, nested.orbitModel, `${id}.orbitModel`);
  exactKeys(score.orbitRuntime, nested.orbitRuntime, `${id}.orbitRuntime`);
  exactKeys(score.correctness, nested.correctness, `${id}.correctness`);
  exactKeys(score.interaction, nested.interaction, `${id}.interaction`);
  for (const [key, value] of Object.entries(score.featureMap)) allowed(value, [0, .4, 1], `${id}.featureMap.${key}`);
  for (const [key, value] of Object.entries(score.orbitModel)) allowed(value, [0, .5, 1], `${id}.orbitModel.${key}`);
  for (const [key, value] of Object.entries(score.orbitRuntime)) allowed(value, [0, .5, 1], `${id}.orbitRuntime.${key}`);
  for (const [key, value] of Object.entries(score.interaction)) allowed(value, [0, .5, 1], `${id}.interaction.${key}`);
  for (const [key, value] of Object.entries(score.correctness)) finiteRange(value, 0, 5, `${id}.correctness.${key}`);
  check(Number.isInteger(score.moons) && score.moons >= 0, `${id}.moons must be a non-negative integer`);
  check(typeof score.hasEarthMoon === 'boolean', `${id}.hasEarthMoon must be boolean`);
  if (!score.hasEarthMoon) check(score.moons === 0, `${id}: no Earth Moon must use moons=0`);
  check(typeof score.halley === 'boolean', `${id}.halley must be boolean`);
  finiteRange(score.visualBase, 0, 10, `${id}.visualBase`);
  allowed(score.fatal, [null, 'L1', 'L2'], `${id}.fatal`);
  check(typeof score.note === 'string' && /[\u3400-\u9fff]/u.test(score.note), `${id}.note must be concise Chinese text`);
  if (score.fatal) check(typeof score.fatalReason === 'string' && score.fatalReason.length > 5, `${id}.fatalReason required`);

  const computed = SITE.scoreFor(work);
  for (const [key, value] of Object.entries(computed.parts)) check(Number.isFinite(value), `${id}.parts.${key} is not finite`);
  for (const key of ['evidenceBase', 'penalty', 'raw', 'manualAdjustment', 'preCap', 'exact', 'adjusted', 'total']) check(Number.isFinite(computed[key]), `${id}.${key} is not finite`);
  close(computed.evidenceBase, Object.values(computed.parts).reduce((sum, value) => sum + value, 0), `${id}.evidenceBase`);
  close(computed.raw, computed.evidenceBase - computed.penalty, `${id}.Canvas2D deduction order`);
  const expectedAdjustment = score.reference ? 0 : work.tier === 2 ? -2 : work.tier === 3 ? -5 : 0;
  close(computed.manualAdjustment, expectedAdjustment, `${id}.subjective tier adjustment`);
  finiteRange(computed.total, 0, 100, `${id}.total`);
  close(computed.exact, EXPECTED_EXACT[id], `${id}.exact oracle`);
  check(computed.total === Math.round(EXPECTED_EXACT[id]), `${id}.total oracle: expected ${Math.round(EXPECTED_EXACT[id])}, got ${computed.total}`);
}

const source = read('assets/scores.js');
const explicitKeys = [...recordKeys, ...Object.values(nested).flat()];
for (const key of explicitKeys) {
  const count = [...source.matchAll(new RegExp(`\\b${key}\\s*:`, 'g'))].length;
  check(count === 53, `scores.js source key ${key} must occur exactly 53 times; duplicate/missing key detected (${count})`);
}
for (const old of ['features', 'orbit', 'offline', 'visual', 'canvas', 'cap', 'hasMoon']) {
  check(!new RegExp(`\\b${old}\\s*:`).test(source), `scores.js still contains old score field ${old}`);
}

const numbered = new Map();
for (const work of WORKS) {
  const match = work.model.match(/^(.*) #(\d+)$/);
  if (!match) continue;
  const key = `${work.group}:${match[1]}`;
  const values = numbered.get(key) || [];
  values.push(Number(match[2]));
  numbered.set(key, values);
}
for (const [key, values] of numbered) {
  values.sort((a, b) => a - b);
  check(values.every((value, index) => value === index + 1), `${key}: attempt numbering is not unique and contiguous: ${values.join(',')}`);
}

const deepSeek2 = WORKS.find(w => w.id === 'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5');
check(deepSeek2?.tier === 4, 'DeepSeek detailed #2 must remain Tier 4');
check(!Object.hasOwn(deepSeek2, 'incomplete'), 'DeepSeek detailed #2 must not duplicate Tier 4 with an inline Incomplete marker');
check(deepSeek2?.pair === null, 'DeepSeek detailed #2 must not replace the existing controlled pair');
const deepSeek3 = WORKS.find(w => w.id === 'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5');
check(deepSeek3?.group === 'B' && deepSeek3?.tier === 3 && deepSeek3?.pair === null, 'DeepSeek detailed #3 must remain an unpaired Tier 3 detailed-spec entry');
check(JSON.stringify(deepSeek3?.tags) === JSON.stringify(['in Claude CLI']), 'DeepSeek detailed #3 must show the exact in Claude CLI tag');
check(deepSeek3?.bytes === 121892 && deepSeek3?.lines === 2992 && deepSeek3?.tech === 'WebGL2' && deepSeek3?.needsFloat === false && deepSeek3?.msaa === true && deepSeek3?.net.length === 0, 'DeepSeek detailed #3 source metadata must match the audited file');
check(SITE.environmentTag(deepSeek3) === 'in Claude CLI' && SITE.chips(deepSeek3, null).includes('in Claude CLI'), 'DeepSeek detailed #3 environment tag must render as in Claude CLI');
check(fs.existsSync(new URL(`../${deepSeek3.shot}`, import.meta.url)), 'DeepSeek detailed #3 screenshot asset must exist');
check(WORKS.find(w => w.id === 'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5')?.pair === 'deepseekv4flash0731', 'DeepSeek detailed #1 must remain the only controlled Flash pair');
const miniMax2 = WORKS.find(w => w.id === 'MiniMaxM3(high)V2-TasksAssignedByOpus5');
check(miniMax2?.group === 'B' && miniMax2?.tier === 4, 'MiniMax detailed #2 must remain in the Incomplete group');
check(!Object.hasOwn(miniMax2, 'incomplete'), 'MiniMax detailed #2 must not duplicate Tier 4 with an inline Incomplete marker');
check(miniMax2?.pair === null, 'MiniMax detailed #2 must not replace the existing controlled pair');
check(JSON.stringify(miniMax2?.tags) === JSON.stringify(['in ClaudeCLI']), 'MiniMax detailed #2 must show the exact in ClaudeCLI tag');
check(miniMax2?.bytes === 137459 && miniMax2?.lines === 3612 && miniMax2?.tech === 'WebGL2' && miniMax2?.net.length === 0, 'MiniMax detailed #2 source metadata must match the audited file');
check(SITE.chips(miniMax2, null).includes('in ClaudeCLI'), 'MiniMax detailed #2 context tag must render in its chip list');
check(fs.existsSync(new URL(`../${miniMax2.shot}`, import.meta.url)), 'MiniMax detailed #2 screenshot asset must exist');
check(WORKS.find(w => w.id === 'MiniMaxM3-TasksAssignedByOpus5')?.model === 'MiniMax M3 (high) #1', 'Original MiniMax detailed run must be numbered #1');

const qwenStable1 = WORKS.find(w => w.id === 'Qwen3.8Max(Max)V1');
const qwenStable2 = WORKS.find(w => w.id === 'Qwen3.8Max(Max)V2');
const qwenStable3 = WORKS.find(w => w.id === 'Qwen3.8Max(Max)V3');
const qwenStableDoc = WORKS.find(w => w.id === 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5');
check(qwenStable1?.group === 'A' && qwenStable1?.tier === 3 && qwenStable1?.tech === 'Canvas2D' && qwenStable1?.pair === 'qwen38max', 'Qwen 3.8 Max #1 must be the paired Tier 3 Canvas2D entry');
check(qwenStable2?.group === 'A' && qwenStable2?.tier === 2 && qwenStable2?.tech === 'Three.js' && qwenStable2?.pair === null, 'Qwen 3.8 Max #2 must be an unpaired Tier 2 Three.js entry');
check(qwenStable3?.group === 'A' && qwenStable3?.tier === 2 && qwenStable3?.tech === 'WebGL2' && qwenStable3?.pair === null, 'Qwen 3.8 Max #3 must be an unpaired Tier 2 WebGL2 entry');
check(qwenStableDoc?.group === 'B' && qwenStableDoc?.tier === 2 && qwenStableDoc?.tech === 'WebGL2' && qwenStableDoc?.pair === 'qwen38max', 'Qwen 3.8 Max detailed entry must be the paired Tier 2 WebGL2 entry');
check(qwenStable1?.bytes === 33139 && qwenStable1?.lines === 703 && qwenStable1?.net.length === 0, 'Qwen 3.8 Max #1 source metadata must match the audited file');
check(qwenStable2?.bytes === 33555 && qwenStable2?.lines === 629 && qwenStable2?.net[0] === 'unpkg.com', 'Qwen 3.8 Max #2 source metadata must match the audited file');
check(qwenStable3?.bytes === 47999 && qwenStable3?.lines === 806 && qwenStable3?.net.length === 0, 'Qwen 3.8 Max #3 source metadata must match the audited file');
check(qwenStableDoc?.bytes === 101683 && qwenStableDoc?.lines === 2096 && qwenStableDoc?.needsFloat === true && qwenStableDoc?.net.length === 0, 'Qwen 3.8 Max detailed source metadata must match the audited file');
for (const work of [qwenStable1, qwenStable2, qwenStable3, qwenStableDoc]) {
  check(work && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Qwen stable entry'} screenshot asset must exist`);
}
const qwenStablePair = SITE.pairs()[7];
check(qwenStablePair?.a?.id === 'Qwen3.8Max(Max)V1' && qwenStablePair?.b?.id === 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5', 'Comparison position 08 must pair Qwen 3.8 Max #1 with its detailed run');

const expectedEnvironmentTag = work => {
  if (work.id === 'MiniMaxM3(high)V2-TasksAssignedByOpus5') return 'in ClaudeCLI';
  if (work.id === 'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5') return 'in Claude CLI';
  if (work.model.startsWith('Qwen 3.8 Max')) return 'in Qoder';
  if (work.group === 'A' && (work.id === 'DeepSeek_V4_Pro_high-2' || work.id === 'DeepSeek_V4_Pro_high-3')) return 'in Claude Code';
  if (work.model.startsWith('Claude ')) return 'in Claude Code';
  if (work.model.startsWith('GPT-')) return 'in Codex';
  if (work.model.startsWith('Gemini ')) return 'in Antigravity';
  return 'in Zcode';
};
for (const work of WORKS) {
  const expected = expectedEnvironmentTag(work);
  check(SITE.environmentTag(work) === expected, `${work.id}: environment tag must be ${expected}`);
  check(SITE.chips(work, null).includes(`>${expected}<`), `${work.id}: card chips must include environment tag ${expected}`);
}

const deepSeekPro = WORKS.find(w => w.id === 'DeepSeekProMax-TasksAssignedByOpus5');
const sonnetOneLine = WORKS.find(w => w.id === 'Sonnet5Ultra');
check(deepSeekPro?.title === '太阳系实时运动模型 — DeepSeek V4 Pro (Max)', 'DeepSeek V4 Pro visible subtitle must use the canonical model name');
check(sonnetOneLine?.title === '太阳系运动模型 · Claude Sonnet 5 (Ultra)', 'Claude Sonnet 5 visible subtitle must use the canonical model name');
const i18nSource = read('assets/i18n.js');
check(i18nSource.includes("'card.openAria': '{name} 的作品截图'") === false, 'card.openAria must describe opening the full work, not only the screenshot');
check(i18nSource.includes("'card.openAria': '打开 {name} 的完整作品'") && i18nSource.includes("'card.openAria': 'Open the complete {name} work'"), 'Pair screenshot links must have bilingual canonical accessible names');
check(!i18nSource.includes('Real-Time Solar System Model — DeepSeek ProMax'), 'English visible subtitle still uses DeepSeek ProMax');
check(!i18nSource.includes('Solar System Motion Model · Sonnet5Ultra'), 'English visible subtitle still uses Sonnet5Ultra');
check(!i18nSource.includes('above Luna, though still below Sol'), 'English score note still uses bare Luna/Sol names');
check(!source.includes('低于 Sol。'), 'Chinese score note still uses bare Sol name');
const siteSource = read('assets/site.js');
check(siteSource.includes("w.tier === 2 ? -2 : w.tier === 3 ? -5"), 'Scoring formula must use Tier 2 −2 and Tier 3 −5');
check((siteSource.match(/s\.total >= 80/g) || []).length === 2, 'Both score badge and tooltip must use the green threshold final score >= 80');
check((siteSource.match(/card\.openAria/g) || []).length === 2, 'Both pair screenshot links must render an accessible full-work label');
check((siteSource.match(/card\.screenshotAlt/g) || []).length >= 3, 'Cards and both pair screenshots must render localized alt text');
const zhHome = read('index.html');
const enHome = read('index.en.html');
const zhSpec = read('spec.html');
const enSpec = read('spec.en.html');
const visibleNamingSurface = [
  read('assets/data.js'), i18nSource, zhHome, enHome, zhSpec, enSpec,
  read('view.html'), read('view.en.html'), read('compare.html'), read('compare.en.html'),
].join('\n');
check(!/\((?:max|MAX)\)/.test(visibleNamingSurface), 'Visible reasoning strength must use the exact casing (Max), never (max) or (MAX)');
check(zhHome.includes('<th data-k="model">模型</th><th data-k="environment">运行环境</th>'), 'Chinese total table must show Environment as the second column');
check(enHome.includes('<th data-k="model">Model</th><th data-k="environment">Environment</th>'), 'English total table must show Environment as the second column');
check(!zhHome.includes('唯一的变量就是需求形式') && !enHome.includes('only variable between the two groups'), 'Home copy must not claim all 16 pairs differ only by brief format');
check(zhHome.includes('Claude Opus 4.8 是明确例外') && enHome.includes('Claude Opus 4.8 is the explicit exception'), 'Both home pages must disclose the Claude Opus 4.8 Max-to-Ultra exception');
check(!zhHome.includes('15 组严格对照') && !enHome.includes('15 strict pairs'), 'Paired statistics must not be described as uniformly strict controls');
check(zhHome.includes('第二梯队扣 2 分，第三梯队扣 5 分') && enHome.includes('Tier 2 receives −2, Tier 3 receives −5'), 'Both home pages must publish the current subjective tier deductions');
check(zhHome.includes('id="aAll">27') && enHome.includes('id="aAll">27') && zhHome.includes('id="bAll">21') && enHome.includes('id="bAll">21') && zhHome.includes('id="tAll">48') && enHome.includes('id="tAll">48'), 'Both home pages must publish 27/21 and 48-entry visible counts before JavaScript runs');
check(!zhHome.includes('40.58 / 59.5') && !enHome.includes('40.58 / 59.5') && !zhHome.includes('16 组同模型') && !enHome.includes('16 same-model'), 'Both home pages must remove the hidden Preview pair from published statistics');
check(zhHome.includes('仅显示「⚑ 标杆」') && enHome.includes('show only “⚑ Benchmark”'), 'Both home pages must state that benchmark scores are hidden');
check(zhHome.includes('最终分大于等于 80') && enHome.includes('final score of 80 or higher'), 'Both home pages must publish the inclusive green threshold');
for (const id of referenceIds) {
  const work = WORKS.find(item => item.id === id);
  const cell = SITE.scoreCell(work);
  check(cell.includes('⚑') && !cell.includes('<button') && !cell.includes('data-score-id'), `${id}: benchmark score cell must be a static flag label without a score tooltip trigger`);
}
check(!i18nSource.includes('标杆参考分 {score}') && !i18nSource.includes('benchmark reference score {score}'), 'Benchmark accessible copy must not expose a numeric score');
check(!siteSource.includes("pair.featuredScoreNote', { a:"), 'Featured comparison must not expose the benchmark score');
check(zhSpec.includes('Claude Opus 5 (Ultra)') && enSpec.includes('Claude Opus 5 (Ultra)'), 'Specification author must be labeled Claude Opus 5 (Ultra) in both languages');
check(!zhSpec.includes('Claude Opus 5 (Max)') && !enSpec.includes('Claude Opus 5 (Max)'), 'Specification author must not be mislabeled as Claude Opus 5 (Max)');
for (const stale of ['Flash 用时', 'Pro 仅用', 'Flash 折算', 'Flash 执行', 'Flash Token', 'Flash 最终', 'Flash/Pro']) {
  check(!zhHome.includes(stale), `Chinese static copy still uses bare model shorthand: ${stale}`);
}
for (const stale of ['Flash took', 'Pro took', 'Flash effective', 'Flash elapsed', 'Flash token', 'Flash final', 'Flash/Pro']) {
  check(!enHome.includes(stale), `English static copy still uses bare model shorthand: ${stale}`);
}
check(zhHome.includes('已收录的 Claude Fable 5 (Max) #1') && enHome.includes('included Claude Fable 5 (Max) #1 entry'), 'Fable Three.js footer reference must include its #1 run number');

const stats = SITE.scoreStats();
close(stats.maxima.coverage + stats.maxima.execution, 100, 'Score maxima');
check(stats.maxima.coverage === 59.5 && stats.maxima.execution === 40.5 && stats.maxima.total === 100, 'Max definition must be 59.5 + 40.5 = 100');
check(stats.pairedSummary.n === 15, 'Paired statistics must use 15 visible pairs');
close(stats.pairedSummary.coverage.a, 41.086666666666666, 'Paired A coverage mean');
close(stats.pairedSummary.coverage.b, 55.500000000000014, 'Paired B coverage mean');
close(stats.pairedSummary.execution.a, 30.790000000000003, 'Paired A execution mean');
close(stats.pairedSummary.execution.b, 31.59, 'Paired B execution mean');
close(stats.pairedSummary.exact.a, 67.34333333333333, 'Paired A exact-score mean');
close(stats.pairedSummary.exact.b, 82.11666666666665, 'Paired B exact-score mean');
check(JSON.stringify(stats.pairedSummary.exact.outcomes) === JSON.stringify({ improve: 12, tie: 1, decline: 2 }), 'Final paired outcomes must be 12 improve / 1 tie / 2 decline');
check(JSON.stringify(stats.pairedSummary.coverage.outcomes) === JSON.stringify({ improve: 14, tie: 1, decline: 0 }), 'Coverage outcomes must be 14 / 1 / 0');
check(JSON.stringify(stats.pairedSummary.execution.outcomes) === JSON.stringify({ improve: 8, tie: 1, decline: 6 }), 'Execution outcomes must be 8 / 1 / 6');

const EXPECTED_WHOLE_GROUP = {
  all: { a: [27, 39.72592592592593, 30.328518518518514, 66.12851851851852], b: [21, 54.83809523809524, 29.164285714285718, 77.85952380952381] },
  withoutReferences: { a: [23, 37.30434782608695, 29.05956521739131, 61.75521739130434], b: [21, 54.83809523809524, 29.164285714285718, 77.85952380952381] },
  withoutTier4: { a: [26, 40.13846153846154, 30.64230769230769, 66.70384615384616], b: [18, 56.23888888888891, 31.95555555555556, 84.725] },
  withoutReferencesOrTier4: { a: [22, 37.68181818181818, 29.372727272727275, 62.23636363636364], b: [18, 56.23888888888891, 31.95555555555556, 84.725] },
};
for (const [label, groups] of Object.entries(EXPECTED_WHOLE_GROUP)) {
  for (const side of ['a', 'b']) {
    const [n, coverage, execution, exact] = groups[side];
    check(stats.wholeGroup[label][side].n === n, `${label}.${side}.n must be ${n}`);
    close(stats.wholeGroup[label][side].coverage, coverage, `${label}.${side}.coverage`);
    close(stats.wholeGroup[label][side].execution, execution, `${label}.${side}.execution`);
    close(stats.wholeGroup[label][side].exact, exact, `${label}.${side}.exact`);
  }
}

const rows = visibleWorks.map(work => {
  const score = SITE.scoreFor(work);
  const coverage = score.parts.features + score.parts.orbit + score.parts.moons + score.parts.offline + score.parts.halley;
  const execution = score.parts.correctness + score.parts.visual + score.parts.interaction;
  return { group: work.group, tier: work.tier, id: work.id, final: score.total, exact: score.exact.toFixed(2), coverage: coverage.toFixed(2), execution: execution.toFixed(2), fatal: score.fatal || '—', reference: score.reference ? 'yes' : '' };
}).sort((a, b) => a.group.localeCompare(b.group) || b.final - a.final || a.id.localeCompare(b.id));

console.log('\nEvidence Score V2 — final score table');
console.table(rows);
const p = stats.pairedSummary;
console.log(`Paired means (n=${p.n}): coverage A ${p.coverage.a.toFixed(4)} /59.5, B ${p.coverage.b.toFixed(4)} /59.5, delta ${(p.coverage.b - p.coverage.a).toFixed(4)}`);
console.log(`Paired means (n=${p.n}): execution A ${p.execution.a.toFixed(4)} /40.5, B ${p.execution.b.toFixed(4)} /40.5, delta ${(p.execution.b - p.execution.a).toFixed(4)}`);
console.log(`Outcomes: final ${p.exact.outcomes.improve}/${p.exact.outcomes.tie}/${p.exact.outcomes.decline} improve/tie/decline; coverage ${p.coverage.outcomes.improve}/${p.coverage.outcomes.tie}/${p.coverage.outcomes.decline}; execution ${p.execution.outcomes.improve}/${p.execution.outcomes.tie}/${p.execution.outcomes.decline}`);
console.log(`Mean exact post-cap score: A ${p.exact.a.toFixed(4)}, B ${p.exact.b.toFixed(4)}, delta ${(p.exact.b - p.exact.a).toFixed(4)}`);
console.log('\nWhole-group sensitivity (coverage / execution / exact)');
for (const [label, groups] of Object.entries(stats.wholeGroup)) {
  const format = group => `n=${group.n} ${group.coverage.toFixed(2)} / ${group.execution.toFixed(2)} / ${group.exact.toFixed(2)}`;
  console.log(`${label}: A ${format(groups.a)}; B ${format(groups.b)}`);
}
console.log('Sensitivity identifiers: references = ' + referenceIds.join(', '));
console.log('Sensitivity identifiers: Tier 4 = ' + visibleWorks.filter(w => w.tier === 4).map(w => w.id).join(', '));
console.log('\nScore validation passed: 53 audited records, 48 visible works, V2 fields/formula, canonical metadata, oracle totals, pairs, sensitivity, and max=100.');
