import fs from 'node:fs';
import vm from 'node:vm';

const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const asset = path => new URL(`../${path}`, import.meta.url);
const context = { window: {} };
context.window.window = context.window;
vm.createContext(context);
for (const file of ['assets/data.js', 'assets/scores.js', 'assets/prices.js', 'assets/site.js']) {
  vm.runInContext(read(file), context, { filename: file });
}

const { WORKS, SCORES, PAIR_ORDER, HIDDEN_WORK_IDS, WORK_CREATION_DATES, SITE } = context.window;
const fail = message => { throw new Error(message); };
const check = (condition, message) => { if (!condition) fail(message); };
const close = (actual, expected, label) => check(Math.abs(actual - expected) < 1e-9, `${label}: expected ${expected}, got ${actual}`);
const stripCreationDate = model => String(model || '').replace(/\s+\(\d{6}\)$/, '');
const exactKeys = (value, expected, label) => {
  const actual = Object.keys(value).sort();
  const wanted = [...expected].sort();
  check(JSON.stringify(actual) === JSON.stringify(wanted), `${label}: keys ${actual.join(', ')}; expected ${wanted.join(', ')}`);
};
const allowed = (value, values, label) => check(values.includes(value), `${label}: invalid value ${value}`);
const finiteRange = (value, min, max, label) => check(Number.isFinite(value) && value >= min && value <= max, `${label}: expected finite ${min}..${max}, got ${value}`);

const CANONICAL_NAMES = {
  'Opus5(Max)V1': 'Claude Opus 5 (Max)',
  'Fable5.1(Max)V1': 'Claude Fable 5.1 (Max)',
  'Hy4Preview(high)V1': 'Hy 4 Preview (high) #1',
  'Hy4Preview(high)V2': 'Hy 4 Preview (high) #2',
  'Hy4Preview(high)V1-TasksAssignedByOpus5': 'Hy 4 Preview (high) #1',
  'Hy4Preview(high)V2-TasksAssignedByOpus5': 'Hy 4 Preview (high) #2',
  'GLM5.3Flash(Max)V2': 'GLM 5.3 Flash (Max) #2',
  'GLM5.3Flash(Max)V2-TasksAssignedByOpus5': 'GLM 5.3 Flash (Max) #2',
  'GLM5.3Flash(Max)V1': 'GLM 5.3 Flash (Max) #1',
  'GLM5.3Flash(Max)V1-TasksAssignedByOpus5': 'GLM 5.3 Flash (Max) #1',
  'GPT5.6Sol(Medium)V1': 'GPT-5.6 Sol (Medium)',
  'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5': 'GPT-5.6 Sol (Medium)',
  'GPT5.6Sol(Light)V1': 'GPT-5.6 Sol (Light)',
  'GPT5.6Sol(Light)V1-TasksAssignedByOpus5': 'GPT-5.6 Sol (Light)',
  'GPT5.6Sol(Max)V1-TasksAssignedByOpus5': 'GPT-5.6 Sol (Max)',
  'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5': 'GPT-5.6 Sol (xHigh)',
  'GPT5.6Sol(high)V1-TasksAssignedByOpus5': 'GPT-5.6 Sol (high)',
  'DoubaoSeedEvolving(Max)V1': 'Doubao Seed Evolving (Max)',
  'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5': 'Doubao Seed Evolving (Max)',
  'GPT5.6Sol(high)V1': 'GPT-5.6 Sol (high)',
  'Opus5Ultra-TasksAssignedByOpus5': 'Claude Opus 5 (Ultra)',
  'DeepSeek-V4-Flash-0731': 'DeepSeek V4 Flash 0731 (Max)',
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #1',
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #2',
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': 'DeepSeek V4 Flash 0731 (Max) #3',
  'DeepSeek-V4-Pro-0813-V1': 'DeepSeek V4 Pro 0813 (Max) #1',
  'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': 'DeepSeek V4 Pro 0813 (Max) #1',
  'DeepSeekV4Pro0813(Max)V2': 'DeepSeek V4 Pro 0813 (Max) #2',
  'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': 'DeepSeek V4 Pro 0813 (Max) #2',
  'DeepSeekProMax-TasksAssignedByOpus5': 'DeepSeek V4 Pro (Max)',
  'DeepSeek_V4_Pro_high-1': 'DeepSeek V4 Pro (Max) #1',
  'DeepSeek_V4_Pro_high-2': 'DeepSeek V4 Pro (Max) #2',
  'DeepSeek_V4_Pro_high-3': 'DeepSeek V4 Pro (Max) #3',
  'Fable5Max-Three': 'Claude Fable 5 (Max) #1',
  'Fable5Max-WebGL2': 'Claude Fable 5 (Max) #2',
  'GLM5.2Max-TasksAssignedByOpus5': 'GLM 5.2 (Max)',
  'GLM5.2Max': 'GLM 5.2 (Max)',
  'GLM5.3(Max)V1': 'GLM 5.3 (Max) #1',
  'GLM5.3(Max)V2': 'GLM 5.3 (Max) #2',
  'GLM5.3(Max)V3': 'GLM 5.3 (Max) #3',
  'GLM5.3(Max)V1-TasksAssignedByOpus5': 'GLM 5.3 (Max) #1',
  'GLM5.3(Max)V2-TasksAssignedByOpus5': 'GLM 5.3 (Max) #2',
  'GLM_5_1_high-1': 'GLM 5.1 (Max)',
  'GPT5.5xHigh-TasksAssignedByOpus5': 'GPT-5.5 (xHigh)',
  'GPT5.6Luna(Max)V1': 'GPT-5.6 Luna (Max) #1',
  'GPT5.6Luna(Max)V2': 'GPT-5.6 Luna (Max) #2',
  'GPT5.6LunaMax-TasksAssignedByOpus5': 'GPT-5.6 Luna (Max)',
  'GPT5.6Sol(Max)V1': 'GPT-5.6 Sol (Max)',
  'GPT5.6SolUltra-TasksAssignedByOpus5': 'GPT-5.6 Sol (Ultra)',
  'GPT5.6SolUltra-WebGL2': 'GPT-5.6 Sol (Ultra) #1',
  'GPT5.6SolUltra': 'GPT-5.6 Sol (Ultra) #2',
  'GPT5.6Sol(xhigh)V1': 'GPT-5.6 Sol (xHigh) #1',
  'GPT5.6Sol(xhigh)V2': 'GPT-5.6 Sol (xHigh) #2',
  'GPT5.6Sol(xhigh)V3': 'GPT-5.6 Sol (xHigh) #3',
  'GPT5.6TerraUltra-Three': 'GPT-5.6 Terra (Ultra)',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': 'GPT-5.6 Terra (Ultra)',
  'GPT_5_5_xhigh': 'GPT-5.5 (xHigh)',
  'Gemini3.1Pro-TasksAssignedByOpus5': 'Gemini 3.1 Pro (high)',
  'Gemini3.5Flash-TasksAssignedByOpus5': 'Gemini 3.5 Flash (high)',
  'Gemini3.6Flash(high)V0': 'Gemini 3.6 Flash (high)',
  'Gemini3.6Flash-TasksAssignedByOpus5': 'Gemini 3.6 Flash (high)',
  'Gemini3.7Flash(high)V1': 'Gemini 3.7 Flash (high)',
  'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': 'Gemini 3.7 Flash (high)',
  'Gemini_3_5_flash_high': 'Gemini 3.5 Flash (high)',
  'Grok4.5': 'Grok 4.5 (high)',
  'Grok4.6(xhigh)V1': 'Grok 4.6 (xHigh)',
  'Grok4.6(xhigh)V1-TasksAssignedByOpus5': 'Grok 4.6 (xHigh)',
  'Hy3-TasksAssignedByOpus5': 'Hy 3 (high)',
  'Hy3': 'Hy 3 (high)',
  'KimiK3Max-TasksAssignedByOpus5': 'Kimi K3 (Max) #1',
  'KimiK3Max': 'Kimi K3 (Max) #1',
  'KimiK3(Max)V2-TasksAssignedByOpus5': 'Kimi K3 (Max) #2',
  'KimiK3(Max)V2': 'Kimi K3 (Max) #2',
  'KimiK3(Max)V3': 'Kimi K3 (Max) #3',
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
  'Qwen3.8Flash(xhigh)V1': 'Qwen 3.8 Flash (xHigh)',
  'Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5': 'Qwen 3.8 Flash (xHigh)',
  'Sonnet5Ultra': 'Claude Sonnet 5 (Ultra)',
  'Sonnet5Ultra-TasksAssignedByOpus5': 'Claude Sonnet 5 (Ultra)',
  'MuseSpark1.3Contributor(xhigh)V1': 'MuseSpark 1.3 Contributor (xHigh) #1',
  'MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5': 'MuseSpark 1.3 Contributor (xHigh) #1',
  'Gemini3.8Flash(high)V1': 'Gemini 3.8 Flash (high) #1',
  'Gemini3.8Flash(high)V1-TasksAssignedByOpus5': 'Gemini 3.8 Flash (high) #1',
  'Gemini3.8Flash(high)V2': 'Gemini 3.8 Flash (high) #2',
  'Gemini3.8Flash(high)V2-TasksAssignedByOpus5': 'Gemini 3.8 Flash (high) #2',
  'MuseSpark1.3Contributor(xhigh)V2': 'MuseSpark 1.3 Contributor (xHigh) #2',
  'MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5': 'MuseSpark 1.3 Contributor (xHigh) #2',
  'OmenAlpha(Max)V1': 'Omen Alpha (Max)',
  'OmenAlpha(Max)V1-TasksAssignedByOpus5': 'Omen Alpha (Max)',
  'GPT6Astra(Ultra)V1': 'GPT-6 Astra (Ultra)',
};

const EXPECTED_EXACT = {
  'Opus5(Max)V1': 105,
  'Fable5.1(Max)V1': 109,
  "Hy4Preview(high)V1": 96.7,
  "Hy4Preview(high)V2": 96.466666666667,
  "Hy4Preview(high)V1-TasksAssignedByOpus5": 93.726666666667,
  "Hy4Preview(high)V2-TasksAssignedByOpus5": 94.726666666667,
  "GLM5.3Flash(Max)V2": 92.01,
  "GLM5.3Flash(Max)V2-TasksAssignedByOpus5": 89.993333333333,
  "GLM5.3Flash(Max)V1": 85.466666666667,
  "GLM5.3Flash(Max)V1-TasksAssignedByOpus5": 60,
  "DoubaoSeedEvolving(Max)V1": 62.783333333333,
  "DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5": 91.466666666667,
  "GPT5.6Sol(high)V1": 85.493333333333,
  "Opus5Ultra-TasksAssignedByOpus5": 100,
  "DeepSeek-V4-Flash-0731": 59.04666666666667,
  "DeepSeek-V4-Flash-0731-TasksAssignedByOpus5": 82.183333333333,
  "DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5": 60,
  "DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5": 79.383333333333,
  "DeepSeek-V4-Pro-0813-V1": 79.46,
  "DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5": 93.933333333333,
  "DeepSeekV4Pro0813(Max)V2": 85.22666666666667,
  "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5": 92.933333333333,
  "DeepSeekProMax-TasksAssignedByOpus5": 85.243333333333,
  "DeepSeek_V4_Pro_high-1": 47.093333333333,
  "DeepSeek_V4_Pro_high-2": 58.46,
  "DeepSeek_V4_Pro_high-3": 55.093333333333,
  "Fable5Max-Three": 86.876666666667,
  "Fable5Max-WebGL2": 92.02666666666667,
  "GLM5.2Max-TasksAssignedByOpus5": 88.243333333333,
  "GLM5.2Max": 60.493333333333,
  "GLM5.3(Max)V1": 88.95,
  "GLM5.3(Max)V2": 89.76,
  "GLM5.3(Max)V3": 93.36666666666667,
  "GLM5.3(Max)V1-TasksAssignedByOpus5": 90.933333333333,
  "GLM5.3(Max)V2-TasksAssignedByOpus5": 91.7,
  "GLM_5_1_high-1": 51.093333333333,
  "GPT5.5xHigh-TasksAssignedByOpus5": 97,
  "GPT5.6Luna(Max)V1": 62.463333333333,
  "GPT5.6Luna(Max)V2": 60.519999999999996,
  "GPT5.6LunaMax-TasksAssignedByOpus5": 91.026666666667,
  "GPT5.6Sol(Max)V1": 94.81,
  "GPT5.6SolUltra-TasksAssignedByOpus5": 100,
  "GPT5.6Sol(Max)V1-TasksAssignedByOpus5": 99,
  "GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5": 96,
  "GPT5.6Sol(high)V1-TasksAssignedByOpus5": 88.933333333333,
  "GPT5.6Sol(Medium)V1": 68.786666666667,
  "GPT5.6Sol(Medium)V1-TasksAssignedByOpus5": 79.82,
  "GPT5.6Sol(Light)V1": 55.603333333333,
  "GPT5.6Sol(Light)V1-TasksAssignedByOpus5": 82.03,
  "GPT5.6SolUltra-WebGL2": 97.93333333333334,
  "GPT5.6SolUltra": 88.66,
  "GPT5.6Sol(xhigh)V1": 80.786666666667,
  "GPT5.6Sol(xhigh)V2": 92.37,
  "GPT5.6Sol(xhigh)V3": 88.62,
  "GPT5.6TerraUltra-Three": 76.993333333333,
  "GPT5.6TerraUltra-TasksAssignedByOpus5": 100,
  "GPT_5_5_xhigh": 82.626666666667,
  "Gemini3.1Pro-TasksAssignedByOpus5": 82.783333333333,
  "Gemini3.5Flash-TasksAssignedByOpus5": 81.953333333333,
  "Gemini3.6Flash(high)V0": 41.843333333333,
  "Gemini3.6Flash-TasksAssignedByOpus5": 87.9,
  "Gemini3.7Flash(high)V1": 55.71,
  "Gemini3.7Flash(high)V1-TasksAssignedByOpus5": 86.933333333333,
  "Gemini_3_5_flash_high": 83.153333333333,
  "Grok4.5": 74.49333333333334,
  "Grok4.6(xhigh)V1": 78.693333333333,
  "Grok4.6(xhigh)V1-TasksAssignedByOpus5": 92.4,
  "Hy3-TasksAssignedByOpus5": 78.333333333333,
  "Hy3": 53.593333333333,
  "KimiK3Max-TasksAssignedByOpus5": 96,
  "KimiK3Max": 90.526666666667,
  "KimiK3(Max)V2-TasksAssignedByOpus5": 96.7,
  "KimiK3(Max)V2": 79.633333333333,
  "KimiK3(Max)V3": 80.526666666667,
  "LongCat2.0-TasksAssignedByOpus5": 60,
  "LongCat2.0": 48.27666666666667,
  "Mimo_2_5_Pro_high-1": 46.12,
  "MiniMaxM3-TasksAssignedByOpus5": 25,
  "MiniMaxM3(high)V2-TasksAssignedByOpus5": 25,
  "MiniMax_M3_thinking-1": 56.926666666667,
  "Opus5Ultra-WebGL2": 100,
  "Opus_4_8_Max": 91.56,
  "Opus4.8Ultra-TasksAssignedByOpus5": 99.233333333333,
  "Qwen3.7Max": 62.526666666667,
  "Qwen3.8Max-TasksAssignedByOpus5": 75.86,
  "Qwen3.8MaxV2-TasksAssignedByOpus5": 83.926666666667,
  "Qwen3.8MaxV2": 51.56,
  "Qwen3.8Max-inQoder": 58.566666666667,
  "Qwen3.8MaxV1-inQoder": 53.31,
  "Qwen3.8Max(Max)V1": 63.27,
  "Qwen3.8Max(Max)V2": 69.826666666667,
  "Qwen3.8Max(Max)V3": 72.02,
  "Qwen3.8Max(Max)V1-TasksAssignedByOpus5": 93.7,
  "Qwen3.8Flash(xhigh)V1": 84.68333333333334,
  "Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5": 87.4,
  "Sonnet5Ultra": 87.026666666667,
  "Sonnet5Ultra-TasksAssignedByOpus5": 98.466666666667,
  "MuseSpark1.3Contributor(xhigh)V1": 85.216666666667,
  "MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5": 85.683333333333,
  "Gemini3.8Flash(high)V1": 52.433333333333,
  "Gemini3.8Flash(high)V1-TasksAssignedByOpus5": 87.733333333333,
  "Gemini3.8Flash(high)V2": 81.216666666667,
  "Gemini3.8Flash(high)V2-TasksAssignedByOpus5": 85.993333333333,
  "MuseSpark1.3Contributor(xhigh)V2": 81.51,
  "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5": 91.966666666667,
  "OmenAlpha(Max)V1": 88.95,
  "OmenAlpha(Max)V1-TasksAssignedByOpus5": 96,
  "GPT6Astra(Ultra)V1": 100.5,
};

// Current scoring-input field oracle. Order:
// reference | featureMap(5) | orbitModel(5) | orbitRuntime(2) | moons | Earth Moon | Halley | other comets |
// correctness(3) | legacy visualBase (not scored) | interaction(5) | fatal | fatalReason.
// This is deliberately independent of the score formula: compensated field drift must still fail.
const EXPECTED_AUDIT_FINGERPRINT = {
  'Opus5(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|21|1|1|2|5|5|5|-|1|1|1|1|1|-|-',
  'Fable5.1(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|18|1|1|3|5|5|5|-|1|1|1|1|1|-|-',
  'Hy4Preview(high)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|18|1|1|2|5|4|4.5|7|1|1|1|1|0.5|-|-',
  'Hy4Preview(high)V2': '0|1|1|1|1|1|1|1|1|1|1|1|1|13|1|1|0|5|4|5|7.5|1|1|1|1|1|-|-',
  'Hy4Preview(high)V1-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|3.5|5.5|1|1|1|1|0.5|-|-',
  'Hy4Preview(high)V2-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|3.5|5.5|1|1|1|1|1|-|-',
  'GLM5.3Flash(Max)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|9|1|1|0|5|4|4.5|7.5|1|1|1|1|1|-|-',
  'GLM5.3Flash(Max)V2-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|4.5|1|1|0.5|1|0.5|-|-',
  'GLM5.3Flash(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|6|1|0|0|5|4|5|6|1|1|1|1|0.5|-|-',
  'GLM5.3Flash(Max)V1-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|0|0|4|3|2|3|1|1|0.5|1|0.5|L2|页面可运行，但兼容探测会把轨道、环与日冕切换为点状降级路径，随后出现明显棋盘格光晕；木星、土星聚焦后仍小到无法有效近景观察。',
  'GPT5.6Luna(Max)V1': '0|0.4|1|0.4|0|0.4|1|1|0.5|1|0.5|1|1|1|1|0|0|5|3|5|5|1|0.5|0.5|1|0.5|-|-',
  'GPT5.6Luna(Max)V2': '0|0.4|1|0.4|1|1|1|1|0.5|0.5|0|1|1|1|1|0|2|5|2|5|3|1|1|1|0|0.5|-|-',
  'GPT5.6Sol(Medium)V1': '0|0.4|1|0.4|0|0|1|1|1|1|1|1|1|0|0|0|0|5|4|5|7|1|1|1|1|0.5|-|-',
  'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5': '0|0.4|1|0.4|0|0|1|1|1|1|1|1|1|8|1|1|0|5|5|5|4|0.5|0.5|1|0|0.5|-|-',
  'GPT5.6Sol(Light)V1': '0|0.4|0|0.4|0|0|1|1|0.5|1|0|1|1|1|1|0|0|5|3|5|6|0.5|1|1|0|0.5|-|-',
  'GPT5.6Sol(Light)V1-TasksAssignedByOpus5': '0|0.4|1|0.4|0|0.4|1|1|1|1|1|1|1|8|1|1|0|5|5|5|6.5|1|0.5|1|0|0.5|-|-',
  'GPT5.6Sol(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|9|1|1|1|1|0.5|-|-',
  'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|5.5|1|1|1|1|0.5|-|-',
  'GPT5.6Sol(high)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|0|1|1|8|1|1|0|5|3|5|7|1|1|1|1|0.5|-|-',
  'DoubaoSeedEvolving(Max)V1': '0|1|1|1|1|0|1|0|0|0|0|1|1|11|1|0|0|5|3|5|3|1|1|0|0|1|-|-',
  'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|4|1|1|1|1|0.5|-|-',
  'GPT5.6Sol(high)V1': '0|0.4|1|1|1|1|1|1|1|1|0|1|1|8|1|0|0|5|3|5|8|1|1|1|1|1|-|-',
  'DeepSeek-V4-Flash-0731': '0|0.4|0.4|0.4|1|1|1|1|1|0.5|0.5|0.5|0.5|1|1|0|3|4|4|3|1.5|1|1|0.5|0|1|-|-',
  'DeepSeek_V4_Pro_high-1': '0|0.4|1|1|1|0|1|0|0.5|0|0|1|1|1|1|0|0|5|3|5|2.5|1|1|0|0|0|-|-',
  'DeepSeek_V4_Pro_high-2': '0|0.4|1|1|1|1|1|0|1|1|0.5|0.5|1|0|0|0|0|5|3|4|6.1|1|1|1|0.5|0.5|-|-',
  'DeepSeek_V4_Pro_high-3': '0|0.4|1|0|1|1|1|0|0.5|1|0|1|1|1|1|0|0|5|3|5|5.8|1|1|1|0|0.5|-|-',
  'Fable5Max-Three': '0|0.4|1|1|0|1|1|1|1|1|1|1|0.5|6|1|1|0|5|5|4|7.5|1|0.5|1|1|0.5|-|-',
  'Fable5Max-WebGL2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|0|1|5|5|4|9.5|1|1|1|1|1|-|-',
  'GLM5.2Max': '0|0.4|1|1|1|1|1|0|0.5|0|0|1|1|1|1|0|0|5|3|5|4|1|1|1|1|1|-|-',
  'GLM5.3(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|15|1|0|0|5|4|4.5|7.5|1|1|1|1|1|-|-',
  'GLM5.3(Max)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|7|1|1|0|5|4|4.5|8|1|1|1|1|1|-|-',
  'GLM5.3(Max)V3': '0|1|1|1|1|1|1|1|1|1|1|1|1|10|1|1|1|4|4|3|3.5|1|1|1|1|1|-|-',
  'GLM5.3(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|3|1|1|1|1|1|-|-',
  'GLM5.3(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4.5|4|1|1|1|1|1|-|-',
  'GLM_5_1_high-1': '0|0.4|1|1|1|0|1|0|0.5|0|0|1|1|1|1|0|0|5|3|5|3|1|1|1|0|0.5|-|-',
  'GPT5.6Sol(Max)V1': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|10|1|0|0|5|5|5|8|1|0.5|1|1|0.5|-|-',
  'GPT5.6SolUltra-WebGL2': '0|1|1|1|1|1|1|1|1|1|1|1|1|14|1|0|1|4|5|4|9.5|1|1|1|1|1|-|-',
  'GPT5.6SolUltra': '0|0.4|1|0|1|1|1|1|1|1|1|1|1|7|1|0|1|5|5|5|6|1|1|1|1|1|-|-',
  'GPT5.6Sol(xhigh)V1': '0|0.4|1|0|0|0.4|1|1|1|1|0|1|1|13|1|0|0|5|4|5|7.5|1|1|1|1|1|-|-',
  'GPT5.6Sol(xhigh)V2': '0|0.4|1|1|0.4|1|1|1|1|1|1|1|1|11|1|0|0|5|5|5|8|1|1|1|1|0.5|-|-',
  'GPT5.6Sol(xhigh)V3': '0|0.4|1|1|0.4|1|1|1|1|1|1|1|1|7|1|0|0|5|5|5|8.5|1|1|1|1|0.5|-|-',
  'GPT5.6TerraUltra-Three': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|5|1|0|0|5|5|3|6|1|1|1|0|1|-|-',
  'GPT_5_5_xhigh': '0|0.4|1|1|1|0|1|1|1|1|1|1|1|9|1|1|0|5|5|4|2|0.5|1|0.5|0|1|-|-',
  'Gemini_3_5_flash_high': '0|0.4|1|0|1|0.4|1|1|1|1|1|1|1|10|1|0|0|5|4|4|7|1|1|1|1|1|-|-',
  'Grok4.5': '0|0.4|1|1|1|1|1|1|1|0.5|1|1|1|5|1|0|1|5|4|4|7|1|1|0.5|0|1|-|-',
  'Grok4.6(xhigh)V1': '0|0.4|1|1|1|1|1|1|1|1|0|1|1|12|1|1|0|5|2.5|4|7.5|1|1|0.5|1|0.5|-|-',
  'Hy3': '0|0.4|0|1|1|1|1|0|0.5|0|0|1|1|1|1|0|0|5|3|5|6.6|1|1|0.5|1|1|-|-',
  'KimiK3Max': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|7|1|1|0|5|5|4|7|1|1|1|1|1|-|-',
  'KimiK3(Max)V2': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|0|0|5|2.5|4|6.5|1|1|1|1|0.5|-|-',
  'KimiK3(Max)V3': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|1|1|1|0|5|4.5|4.5|5.5|1|1|1|1|0.5|-|-',
  'LongCat2.0': '0|0.4|1|0|0|0|1|0|0.5|0.5|0|1|1|1|1|0|3|5|2.5|5|4.6|0.5|1|0|0|0.5|-|-',
  'Mimo_2_5_Pro_high-1': '0|0.4|1|0|1|0.4|1|0|0.5|0|0|1|1|1|1|0|0|5|2|5|4.2|1|1|0|0|1|-|-',
  'MiniMax_M3_thinking-1': '0|0.4|0|1|1|1|1|1|1|0.5|1|0|0|1|1|0|0|3|4|1|4.7|1|1|0.5|0.5|0.5|L2|外行星偏离轨道线，低速产生 NaN，重置失效。',
  'Opus5Ultra-WebGL2': '1|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|10|1|1|1|1|1|-|-',
  'Opus_4_8_Max': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|0|0|5|5|5|9|1|1|1|1|1|-|-',
  'Qwen3.7Max': '0|0.4|1|1|1|1|1|1|1|0.5|0|1|1|1|1|0|0|5|5|4|5.2|1|1|0|0|0.5|-|-',
  'Qwen3.8MaxV2': '0|0.4|1|0|0|0|1|0|1|1|0|1|1|1|1|0|0|5|3.5|5|6.5|1|1|0|0|0|-|-',
  'Qwen3.8Max-inQoder': '0|0|1|1|1|1|1|1|1|0|0|1|1|1|1|0|0|5|5|4|2.1|1|1|0|0|0|-|-',
  'Qwen3.8MaxV1-inQoder': '0|0.4|1|0|0|0|1|0.5|1|1|0|1|1|1|1|0|0|5|3.5|5|4.8|0.5|1|0|0|0|-|-',
  'Qwen3.8Max(Max)V1': '0|0.4|1|0|0|0.4|1|1|1|0|0|1|1|1|1|1|0|5|3.5|5|6.5|0.5|1|1|1|0.5|-|-',
  'Qwen3.8Max(Max)V2': '0|0.4|1|1|1|0|1|1|1|0.5|0|1|1|1|1|1|0|5|3.5|4|5|1|1|1|1|0.5|-|-',
  'Qwen3.8Max(Max)V3': '0|0.4|1|1|1|0.4|1|1|1|0.5|0|1|1|1|1|1|0|5|3.5|3.5|6.5|1|1|1|1|0.5|-|-',
  'Sonnet5Ultra': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|0|0|5|5|4|7.5|1|1|1|1|1|-|-',
  'Opus5Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|10|1|1|1|1|1|-|-',
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3|5|7|0.5|1|0.5|1|1|-|-',
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|0|8|1|1|0|0|2|1|4|1|1|1|0|1|L2|双重帧调度让渲染循环持续倍增，长程性能失稳。',
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|2.5|4|6|1|0.5|1|1|1|-|-',
  'DeepSeek-V4-Pro-0813-V1': '0|0.4|1|1|1|1|1|1|1|1|1|0|1|7|1|0|0|5|3|4|5.5|1|1|1|1|0.5|-|-',
  'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|7.5|1|1|1|1|1|-|-',
  'DeepSeekV4Pro0813(Max)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|5|1|1|1|5|4|3.5|6.5|1|1|1|1|0.5|-|-',
  'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|4.5|1|1|1|1|0.5|-|-',
  'DeepSeekProMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|6|0.5|1|1|0|1|-|-',
  'GLM5.2Max-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4|3|0.5|1|1|0|1|-|-',
  'GPT5.5xHigh-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|8|1|1|1|1|1|-|-',
  'GPT5.6LunaMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|4|3.5|1|1|1|0|1|-|-',
  'GPT5.6SolUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|10|1|1|1|1|1|-|-',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|8.5|1|1|1|1|1|-|-',
  'Gemini3.1Pro-TasksAssignedByOpus5': '0|1|1|1|1|0|1|1|1|1|1|1|1|8|1|1|0|5|4|4|5.5|1|0.5|0.5|0|1|-|-',
  'Gemini3.5Flash-TasksAssignedByOpus5': '0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|1|0|5|2|3|4|1|1|0.5|1|1|-|-',
  'Gemini3.6Flash(high)V0': '0|0.4|0|1|1|0|1|0|0|0|0|1|1|1|1|0|0|5|1|4|3.5|0.5|1|0.5|1|0.5|-|-',
  'Gemini3.6Flash-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3|4|5|1|1|0.5|1|1|-|-',
  'Gemini3.7Flash(high)V1': '0|0.4|1|1|1|1|1|0|0.5|0.5|0|1|1|1|1|0|0|5|3|4|4|0.5|1|1|1|0.5|-|-',
  'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|0|1|8|1|1|0|5|4|4|7.5|1|1|1|1|1|-|-',
  'Grok4.6(xhigh)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|3|5.5|1|1|1|1|1|-|-',
  'Hy3-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|0.5|1|1|1|1|8|1|1|0|5|2|3|5|1|1|0.5|0|0.5|-|-',
  'KimiK3Max-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|9|1|1|1|1|0.5|-|-',
  'KimiK3(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4.5|4|8.5|1|1|1|1|0.5|-|-',
  'LongCat2.0-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|1|2|4.5|1|1|0.5|0|1|L2|环与大红斑核心结构失效，并出现 NaN 实时数据。',
  'MiniMaxM3-TasksAssignedByOpus5': '0|0.4|0.4|0.4|0.4|0.4|1|1|1|1|1|0|0|8|1|1|0|1|1|1|0|1|1|0.5|1|1|L1|白场与巨大黑三角遮挡主画面，无法正常审阅。',
  'MiniMaxM3(high)V2-TasksAssignedByOpus5': '0|0.4|0.4|0.4|0.4|0.4|1|1|1|1|1|0|0|8|1|1|0|1|1|1|0|1|1|0.5|0|0.5|L1|全屏后期四边形以 XYZ 数据生成，却按紧密排列的 XY 读取；同时 4× MSAA 解析使用了非法的 LINEAR 过滤。两处核心合成错误叠加，使主画布持续全黑，仅 UI 可见。',
  'Opus4.8Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4.5|5|9.5|1|1|1|1|1|-|-',
  'Qwen3.8Max-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|2|2|5.5|1|1|0.5|1|1|-|-',
  'Qwen3.8MaxV2-TasksAssignedByOpus5': '0|1|0.4|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3|3|2.5|1|1|0.5|1|0.5|-|-',
  'Qwen3.8Max(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|4.5|8.5|1|1|1|1|0.5|-|-',
  'Qwen3.8Flash(xhigh)V1': '0|1|1|1|1|1|1|1|1|1|0.5|1|1|9|1|0|1|5|3.5|4.5|7.5|1|1|1|1|0.5|-|-',
  'Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|0.5|1|1|1|8|1|1|0|5|2.5|4.5|6.5|1|1|1|1|1|-|-',
  'Sonnet5Ultra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|4|8.5|1|1|1|1|1|-|-',
  'MuseSpark1.3Contributor(xhigh)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|12|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-',
  'MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3.5|4.5|-|1|0.5|1|0|0.5|-|-',
  'Gemini3.8Flash(high)V1': '0|1|1|1|1|1|1|0|0.5|0|0|1|1|1|1|0|0|5|4|4|-|0.5|0.5|0.5|0.5|0.5|-|-',
  'Gemini3.8Flash(high)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4.5|5|-|0.5|0.5|1|1|0.5|-|-',
  'Gemini3.8Flash(high)V2': '0|1|1|1|1|1|1|1|1|1|0.5|1|1|8|1|1|0|5|4.5|4.5|-|1|0.5|0.5|0.5|0.5|-|-',
  'Gemini3.8Flash(high)V2-TasksAssignedByOpus5': '0|1|1|0.4|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3.5|4.5|-|0.5|0.5|1|1|0.5|-|-',
  'MuseSpark1.3Contributor(xhigh)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|1|0|5|3.5|5|-|1|0.5|1|1|0.5|-|-',
  'MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|0.5|0.5|1|1|0.5|-|-',
  'OmenAlpha(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|7|1|1|0|5|4.5|4|-|1|0.5|1|1|0.5|-|-',
  'OmenAlpha(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|0.5|-|-',
  'GPT6Astra(Ultra)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|7|1|1|3|5|5|5|-|1|1|1|1|0.5|-|-',
};

const auditFingerprint = score => [
  score.reference ? 1 : 0,
  ...['rings', 'belt', 'bloom', 'aces', 'atmo'].map(key => score.featureMap[key]),
  ...['geometry', 'kepler', 'elements', 'orientation', 'epoch'].map(key => score.orbitModel[key]),
  ...['pathFit', 'stability'].map(key => score.orbitRuntime[key]),
  score.moons, score.hasEarthMoon ? 1 : 0, score.halley ? 1 : 0, score.otherComets,
  ...['runtime', 'data', 'integrity'].map(key => score.correctness[key]),
  score.visualBase ?? '-',
  ...['drag', 'zoom', 'focus', 'follow', 'pauseReset'].map(key => score.interaction[key]),
  score.fatal ?? '-', score.fatalReason ?? '-',
].join('|');

check(Array.isArray(WORKS) && WORKS.length === 108, `WORKS count must be 108, got ${WORKS?.length}`);
check(Object.keys(SCORES).length === 108, `SCORES count must be 108, got ${Object.keys(SCORES).length}`);
check(new Set(WORKS.map(w => w.id)).size === 108, 'WORKS IDs must be unique');
check(new Set(Object.keys(SCORES)).size === 108, 'SCORES IDs must be unique');
const workIds = [...WORKS.map(w => w.id)].sort();
const scoreIds = Object.keys(SCORES).sort();
check(JSON.stringify(workIds) === JSON.stringify(scoreIds), 'WORKS/SCORES IDs have missing or extra entries');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(CANONICAL_NAMES).sort()), 'Canonical-name ledger does not cover exactly the WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_EXACT).sort()), 'Expected-score ledger does not cover exactly the WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_AUDIT_FINGERPRINT).sort()), 'Audit fingerprint ledger does not cover exactly the WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(WORK_CREATION_DATES).sort()), 'Creation-date ledger must cover exactly the WORKS IDs');
for (const work of WORKS) {
  const date = WORK_CREATION_DATES[work.id];
  check(/^\d{6}$/.test(date) && work.model.endsWith(` (${date})`), `${work.id}: model name must end with its YYMMDD filesystem creation date`);
  check(stripCreationDate(work.model) === CANONICAL_NAMES[work.id], `${work.id}: dated model name must preserve its canonical base name`);
}
check(WORK_CREATION_DATES['DeepSeekV4Pro0813(Max)V2'] === '260814' && WORK_CREATION_DATES['DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5'] === '260814', 'DeepSeek V4 Pro 0813 #2 must use its actual 260814 filesystem creation date');
check(WORKS.filter(w => w.group === 'A').length === 62, 'Audited Group A count must be 62 after adding GPT-6 Astra');
check(WORKS.filter(w => w.group === 'B').length === 46, 'Audited Group B count must remain 46 after adding GPT-6 Astra');
const expectedHiddenIds = [
  'Qwen3.8Max-TasksAssignedByOpus5',
  'Qwen3.8MaxV2-TasksAssignedByOpus5',
  'Qwen3.8MaxV2',
  'Qwen3.8Max-inQoder',
  'Qwen3.8MaxV1-inQoder',
  'DeepSeekProMax-TasksAssignedByOpus5',
  'DeepSeek_V4_Pro_high-1',
  'DeepSeek_V4_Pro_high-2',
  'DeepSeek_V4_Pro_high-3',
  'GPT5.6SolUltra',
  'KimiK3(Max)V3',
  'GLM_5_1_high-1',
  'Grok4.5',
  'Hy3',
  'Hy3-TasksAssignedByOpus5',
  'GLM5.2Max',
  'GLM5.2Max-TasksAssignedByOpus5',
  'Qwen3.7Max',
  'Gemini_3_5_flash_high',
  'Gemini3.5Flash-TasksAssignedByOpus5',
].sort();
check(JSON.stringify([...HIDDEN_WORK_IDS].sort()) === JSON.stringify(expectedHiddenIds), 'The hidden-work set must include historical entries plus Hy 3, GLM 5.2, Qwen 3.7 Max, and Gemini 3.5 Flash');
const visibleWorks = SITE.visibleWorks();
check(visibleWorks.length === 88, 'Visible WORKS count must be 88');
check(visibleWorks.filter(w => w.group === 'A').length === 48, 'Visible Group A count must be 48');
check(visibleWorks.filter(w => w.group === 'B').length === 40, 'Visible Group B count must be 40');
check(visibleWorks.every(w => !w.model.includes('Qwen 3.8 Max Preview')), 'No retired Qwen Preview work may remain on visible site surfaces');
check(visibleWorks.every(w => !/^DeepSeek V4 Pro \(Max\)/.test(w.model)), 'No retired DeepSeek V4 Pro work may remain on visible site surfaces');
for (const id of expectedHiddenIds) check(SITE.byId(id) === undefined, id + ': direct work page lookup must stay hidden');
check(PAIR_ORDER.length === 32 && new Set(PAIR_ORDER).size === 32, 'PAIR_ORDER must retain 32 configured pair keys, including Omen Alpha');
check(!PAIR_ORDER.includes('qwen38') && !Object.hasOwn(context.window.PAIR_TITLES, 'qwen38'), 'The Preview comparison must be absent from visible pair metadata');
check(!PAIR_ORDER.includes('deepseek') && !Object.hasOwn(context.window.PAIR_TITLES, 'deepseek'), 'The retired DeepSeek V4 Pro comparison must be absent from visible pair metadata');
check(SITE.pairs().length === 29, 'Expected 29 complete visible pairs');
check(typeof SITE.displayPairs === 'function', 'SITE must expose the six largest positive detailed-spec gains');
check(JSON.stringify(SITE.displayPairs().map(pair => pair.a.pair)) === JSON.stringify(['gemini36flash', 'gemini38flashv1', 'gemini37flash', 'qwen38max', 'doubao', 'deepseekv4flash0731']), 'Featured comparisons must be the six largest positive detailed-spec score gains');
check(PAIR_ORDER[4] === 'kimik3' && PAIR_ORDER[5] === 'kimik3v2', 'Kimi K3 #1 and #2 must occupy comparison positions 05 and 06');
check(PAIR_ORDER[7] === 'deepseekv4pro0813' && PAIR_ORDER[8] === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #1 and #2 must occupy comparison positions 08 and 09');
check(PAIR_ORDER[9] === 'glm53v1' && PAIR_ORDER[10] === 'glm53v2', 'GLM 5.3 #1 and #2 must occupy comparison positions 10 and 11');
check(PAIR_ORDER[12] === 'qwen38max', 'The Qwen 3.8 Max pair must occupy comparison position 13');
check(PAIR_ORDER[13] === 'grok46', 'The Grok 4.6 pair must occupy comparison position 14');
check(PAIR_ORDER[16] === 'gemini36flash', 'Gemini 3.6 Flash must occupy comparison position 17');
check(PAIR_ORDER[18] === 'gemini37flash', 'Gemini 3.7 Flash must occupy comparison position 19 after inserting Grok 4.6');
check(PAIR_ORDER[21] === 'doubao' && PAIR_ORDER[22] === 'hy4v1' && PAIR_ORDER[23] === 'hy4v2' && PAIR_ORDER[24] === 'glm53flashv2' && PAIR_ORDER[25] === 'minimax' && PAIR_ORDER[26] === 'qwen38flash', 'Doubao, Hy 4 #1/#2, GLM 5.3 Flash #2, MiniMax, and Qwen 3.8 Flash must occupy the final comparison positions');
check(PAIR_ORDER[27] === 'musespark13' && PAIR_ORDER[28] === 'gemini38flashv1' && PAIR_ORDER[29] === 'gemini38flashv2' && PAIR_ORDER[30] === 'musespark13v2' && PAIR_ORDER[31] === 'omenalpha', 'MuseSpark, Gemini 3.8 Flash, and Omen Alpha must be appended in their declared pair order');

const referenceIds = ['Opus5Ultra-WebGL2'];
check(JSON.stringify(Object.entries(SCORES).filter(([, score]) => score.reference).map(([id]) => id).sort()) === JSON.stringify(referenceIds), 'Only Claude Opus 5 (Ultra) may be flagged as the benchmark');

const fable51 = SITE.byId('Fable5.1(Max)V1');
const fable51Score = SITE.scoreFor(fable51);
const newPairIds = [
  'MuseSpark1.3Contributor(xhigh)V1','MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5',
  'Gemini3.8Flash(high)V1','Gemini3.8Flash(high)V1-TasksAssignedByOpus5',
  'Gemini3.8Flash(high)V2','Gemini3.8Flash(high)V2-TasksAssignedByOpus5',
];
for (const id of newPairIds) {
  const work = SITE.byId(id);
  check(work && work.tier === 3 && fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)), `${id}: new Tier 3 source and screenshot must exist`);
  check(work.shot.endsWith(`${id}.jpg`) && work.jsErrors === 0, `${id}: screenshot identity and clean runtime result must be recorded`);
}
for (const id of ['MuseSpark1.3Contributor(xhigh)V2','MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5']) {
  const work = SITE.byId(id);
  check(work && work.tier === 2 && fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)), `${id}: new Tier 2 source and screenshot must exist`);
  check(work.shot.endsWith(`${id}.jpg`) && work.jsErrors === 0, `${id}: screenshot identity and clean runtime result must be recorded`);
}
const museA = SITE.byId('MuseSpark1.3Contributor(xhigh)V1');
const museB = SITE.byId('MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5');
const muse2A = SITE.byId('MuseSpark1.3Contributor(xhigh)V2');
const muse2B = SITE.byId('MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5');
check(museA.bytes === 52107 && museA.lines === 970 && museA.tech === 'Three.js' && JSON.stringify(museA.net) === JSON.stringify(['cdn.jsdelivr.net']), 'MuseSpark one-line metadata must match the supplied source');
check(museB.bytes === 98588 && museB.lines === 1971 && museB.tech === 'WebGL2' && !museB.needsFloat && museB.net.length === 0, 'MuseSpark detailed metadata must match the supplied source');
check(SITE.environmentTag(museA) === 'in Zcode' && SITE.environmentTag(museB) === 'in Zcode', 'Both MuseSpark works must use the supplied Zcode environment');
check(muse2A.bytes === 46583 && muse2A.lines === 796 && muse2A.tech === 'Three.js' && JSON.stringify(muse2A.net) === JSON.stringify(['unpkg.com']), 'MuseSpark #2 one-line metadata must match the supplied source');
check(muse2B.bytes === 91860 && muse2B.lines === 1794 && muse2B.tech === 'WebGL2' && !muse2B.needsFloat && muse2B.msaa && muse2B.net.length === 0, 'MuseSpark #2 detailed metadata must match the supplied source');
check(SITE.environmentTag(muse2A) === 'in Pi' && SITE.environmentTag(muse2B) === 'in Pi', 'Both MuseSpark #2 works must use the supplied Pi environment');
check(stripCreationDate(museA.model).endsWith('#1') && stripCreationDate(museB.model).endsWith('#1') && stripCreationDate(muse2A.model).endsWith('#2') && stripCreationDate(muse2B.model).endsWith('#2'), 'MuseSpark repeated runs must be numbered independently in both requirement groups');
const omenA = SITE.byId('OmenAlpha(Max)V1');
const omenB = SITE.byId('OmenAlpha(Max)V1-TasksAssignedByOpus5');
check(omenA?.tier === 2 && omenB?.tier === 2 && omenA?.pair === 'omenalpha' && omenB?.pair === 'omenalpha', 'Both Omen Alpha works must form one Tier 2 pair');
check(omenA?.bytes === 89376 && omenA?.lines === 1903 && omenA?.tech === 'WebGL2' && !omenA?.needsFloat && !omenA?.msaa && omenA?.net.length === 0, 'Omen Alpha one-line metadata must match the supplied source');
check(omenB?.bytes === 136419 && omenB?.lines === 3254 && omenB?.tech === 'WebGL2' && !omenB?.needsFloat && omenB?.msaa && omenB?.net.length === 0, 'Omen Alpha detailed metadata must match the supplied source');
check(SITE.environmentTag(omenA) === 'in Zcode' && SITE.environmentTag(omenB) === 'in Zcode', 'Both Omen Alpha works must use Zcode');
check((omenA.tags || []).includes('匿名参测') && (omenB.tags || []).includes('匿名参测'), 'Both Omen Alpha works must disclose anonymous participation');
for (const work of [omenA, omenB]) check(fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)) && work.jsErrors === 0, `${work.id}: source, screenshot, and clean runtime result must exist`);
const gpt6Astra = SITE.byId('GPT6Astra(Ultra)V1');
const gpt6AstraScore = SITE.scoreFor(gpt6Astra);
check(gpt6Astra?.group === 'A' && gpt6Astra?.tier === 1 && gpt6Astra?.pair === null && stripCreationDate(gpt6Astra?.model) === 'GPT-6 Astra (Ultra)', 'GPT-6 Astra must be an unpaired Tier 1 one-line work');
check(gpt6Astra?.bytes === 10045652 && gpt6Astra?.lines === 586 && gpt6Astra?.tech === 'WebGL2' && !gpt6Astra?.needsFloat && gpt6Astra?.msaa && gpt6Astra?.net.length === 0, 'GPT-6 Astra metadata must match the supplied source');
check(SITE.environmentTag(gpt6Astra) === 'in Codex' && fs.existsSync(asset(gpt6Astra.file)) && fs.existsSync(asset(gpt6Astra.shot)) && gpt6Astra.jsErrors === 0, 'GPT-6 Astra must expose Codex, its source, screenshot, and clean runtime result');
close(gpt6AstraScore.evidenceBase, 100.5, 'GPT-6 Astra evidence score with three other comets');
check(gpt6AstraScore.otherComets === 3 && gpt6AstraScore.parts.cometBonus === 3 && gpt6AstraScore.total === 101 && gpt6AstraScore.manualAdjustment === 0 && gpt6AstraScore.independenceMode === 'native', 'GPT-6 Astra must show 101 after its three-point other-comet bonus');
for (const [run, oneBytes, oneLines, docBytes, docLines, env] of [[1,67828,1877,148351,3736,'in Antigravity'],[2,64353,1808,170910,4799,'in Zcode']]) {
  const one = SITE.byId(`Gemini3.8Flash(high)V${run}`), doc = SITE.byId(`Gemini3.8Flash(high)V${run}-TasksAssignedByOpus5`);
  check(one.bytes === oneBytes && one.lines === oneLines && one.tech === 'Three.js' && one.net.length > 0, `Gemini 3.8 Flash #${run} one-line metadata must match the source`);
  check(doc.bytes === docBytes && doc.lines === docLines && doc.tech === 'WebGL2' && !doc.needsFloat && doc.net.length === 0, `Gemini 3.8 Flash #${run} detailed metadata must match the source`);
  check(SITE.environmentTag(one) === env && SITE.environmentTag(doc) === env, `Gemini 3.8 Flash #${run} must use ${env}`);
}
check(fable51?.group === 'A' && fable51?.tier === 0 && fable51?.pair === null && stripCreationDate(fable51?.model) === 'Claude Fable 5.1 (Max)', 'Claude Fable 5.1 must be an unpaired Tier 0 one-line work');
check(fable51.bytes === 183910 && fable51.lines === 1769 && fable51.tech === 'WebGL2' && fable51.net.length === 0 && fable51.msaa && !fable51.needsFloat, 'Claude Fable 5.1 metadata must match the current supplied file');
check(SITE.environmentTag(fable51) === 'in Claude Code' && fs.existsSync(new URL(`../${fable51.shot}`, import.meta.url)), 'Claude Fable 5.1 must expose its environment and real screenshot');
close(fable51Score.evidenceBase, 106, 'Claude Fable 5.1 full evidence score');
for (const [part, maximum] of Object.entries({ features: 12, orbit: 30, moons: 12, moonBonus: 3, cometBonus: 3, independence: 7, halley: 3, correctness: 23, interaction: 13 })) {
  close(fable51Score.parts[part], maximum, `Claude Fable 5.1 full ${part} score`);
}
check(fable51Score.manualAdjustment === 3 && fable51Score.total === 109 && !fable51Score.reference, 'Claude Fable 5.1 must show full evidence 106 plus Tier 0 supplement 3 without benchmark status');
check(SITE.scoreCell(fable51).includes('109') && !SITE.scoreCell(fable51).includes('†') && !SITE.scoreCell(fable51).includes('⚑'), 'Claude Fable 5.1 must show an ordinary numeric score without extra markers');
check(!SITE.scoreTipHtml(fable51, fable51Score).includes('98.97') && SITE.scoreTipHtml(fable51, fable51Score).includes('109<i>/109</i>') && SITE.scoreTipHtml(fable51, fable51Score).includes('>+3<'), 'The Tier 0 tooltip must show the new full score and supplementary bonus');
for (const [fatal, cap] of [['L1', 25], ['L2', 60]]) {
  SCORES.testTier0Cap = { ...SCORES[fable51.id], fatal };
  check(SITE.scoreFor({ ...fable51, id: 'testTier0Cap' }).total === cap, 'Tier 0 bonus must not bypass fatal caps');
  delete SCORES.testTier0Cap;
}


const opusMax = SITE.byId('Opus5(Max)V1');
const opusMaxScore = SITE.scoreFor(opusMax);
check(opusMax?.tier === 1 && opusMax.group === 'A' && opusMax.pair === null && !opusMaxScore.reference, 'Opus 5 (Max) must be an unpaired Tier 1 non-benchmark');
check(opusMax.bytes === 144618 && opusMax.lines === 3116 && opusMax.tech === 'WebGL2' && !opusMax.msaa && !opusMax.needsFloat && opusMax.net.length === 0, 'Opus 5 (Max) metadata must match its supplied original');
check(SITE.environmentTag(opusMax) === 'in Claude Code' && fs.existsSync(new URL('../' + opusMax.shot, import.meta.url)), 'Opus 5 (Max) must use Claude Code and have a screenshot');
close(opusMaxScore.evidenceBase, 105, 'Opus 5 (Max) evidence score with two other comets');
check(opusMaxScore.total === 105 && opusMaxScore.parts.cometBonus === 2 && opusMaxScore.manualAdjustment === 0 && opusMaxScore.fatalCap === null, 'Opus 5 (Max) must show an ordinary 105 with its two other-comet points');
for (const [part, maximum] of Object.entries({features:12, orbit:30, moons:12, moonBonus:3, cometBonus:2, independence:7, halley:3, correctness:23, interaction:13}))
  close(opusMaxScore.parts[part], maximum, 'Opus 5 (Max) full ' + part);
check(!/97\.98|作者修订|作者人工|原始审查|审查原始|†/.test(SITE.scoreTipHtml(opusMax, opusMaxScore)), 'Opus 5 (Max) tooltip must contain only the current scoring treatment');

const expectedPrices = {
  'Claude Fable 5.1':[10,50,.25], 'Claude Fable 5':[10,50,1], 'Claude Opus 5':[5,25,.5],
  'Claude Opus 4.8':[5,25,.5], 'Claude Sonnet 5':[2,10,.2], 'GPT-5.6 Sol':[10,45,1],
  'GPT-5.6 Terra':[4,18,.4], 'GPT-5.6 Luna':[.4,1.8,.04], 'GPT-5.5':[10,45,1],
  'Gemini 3.1 Pro':[4,18,.4], 'Gemini 3.6 Flash':[1.5,7.5,.15], 'Gemini 3.7 Flash':[1.5,7.5,.15], 'Gemini 3.8 Flash':[1.5,7.5,.15],
  'Grok 4.6':[4,12,1], 'Hy 4 Preview':[.834,2.501,.042], 'Kimi K3':[3,15,.3],
  'DeepSeek V4 Pro 0813':[1.32,3.96,.044], 'DeepSeek V4 Flash 0731':[.44,1.32,.014],
  'Qwen 3.8 Max':[2,6,.25], 'Qwen 3.8 Flash':[.15,.47,.016], 'GLM 5.3':[1.4,4.4,.26],
  'GLM 5.3 Flash':[.15,.5,.03], 'Doubao Seed Evolving':[.9,4.47,.18],
  'LongCat 2.0':[.75,2.95,.015], 'MiMo 2.5 Pro':[.435,.87,.0036], 'MiniMax M3':[1.2,4.8,.24],
  'MuseSpark 1.3 Contributor':[.10,.20,.002],
};
check(context.window.MODEL_PRICE_DATE === '2026-09-03', 'Price snapshot must disclose its saved date');
exactKeys(context.window.MODEL_PRICES, Object.keys(expectedPrices), 'Price families');
for (const [model, values] of Object.entries(expectedPrices)) {
  const actual = context.window.MODEL_PRICES[model];
  ['input','output','cache'].forEach((key,i)=>close(actual[key],values[i],model+' '+key));
}
check(visibleWorks.filter(work => !work.id.startsWith('OmenAlpha') && work.id !== 'GPT6Astra(Ultra)V1').every(work=>SITE.priceFor(work)), 'Every visible work with disclosed token pricing must map to a saved price family');
check(!SITE.priceFor(omenA) && !SITE.priceFor(omenB) && SITE.priceCell(omenA).includes('—'), 'Anonymous Omen Alpha pricing must remain undisclosed');
check(!SITE.priceFor(gpt6Astra) && SITE.priceCell(gpt6Astra).includes('—'), 'GPT-6 Astra subscription availability must not be presented as token pricing');
check(SITE.priceFor(museA).note === 'openrouter' && SITE.priceCell(museA).includes('0.1 / 0.2 / 0.002'), 'MuseSpark must show the user-provided OpenRouter reference');
for (const key of ['priceInput','priceOutput','priceCache']) for (const direction of [1,-1]) {
  const sorted = SITE.tableRows(visibleWorks, key, direction, 'zh');
  check(sorted.length === visibleWorks.length, 'Price sorting must preserve all rows');
  const priced = sorted.filter(row => row[key] != null);
  for (let i=1;i<priced.length;i++) check((priced[i][key]-priced[i-1][key])*direction >= -1e-9, key+' must sort numerically in both directions');
  const withMissing = SITE.tableRows([...visibleWorks,{...opusMax,id:'missingPrice',model:'Unknown (Max)'}],key,direction,'zh');
  check(withMissing.at(-1).id === 'missingPrice', 'Missing prices must sort last in either direction');
}
check(SITE.priceCell(opusMax).includes('5 / 25 / 0.5'), 'Price cells must use input/output/cache order');
check(SITE.priceCell(SITE.byId('DoubaoSeedEvolving(Max)V1')).includes('≈0.9 / ≈4.47 / ≈0.18'), 'Doubao prices must remain explicitly approximate');
check(SITE.priceCell(SITE.byId('GPT5.6Sol(Max)V1')).includes('10 / 45 / 1*'), 'Sol must retain its pre-promotion reference marker');

const recordKeys = ['reference', 'featureMap', 'orbitModel', 'orbitRuntime', 'moons', 'hasEarthMoon', 'halley', 'otherComets', 'correctness', 'visualBase', 'interaction', 'fatal', 'note'];
const optionalRecordKeys = ['fatalReason', 'moonQuality', 'earthMoonValid'];
const expectedMoonAdjustments = {
  'MuseSpark1.3Contributor(xhigh)V1': { moonQuality: .5 },
  'MuseSpark1.3Contributor(xhigh)V2': { moonQuality: .5 },
  'OmenAlpha(Max)V1': { earthMoonValid: false },
  'Gemini3.8Flash(high)V1-TasksAssignedByOpus5': { earthMoonValid: false },
  'Gemini3.8Flash(high)V2': { earthMoonValid: false },
  'GLM5.3(Max)V1': { moonQuality: .5 },
  'Grok4.6(xhigh)V1': { moonQuality: .5 },
  'KimiK3(Max)V2': { moonQuality: .5, earthMoonValid: false },
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': { moonQuality: .5 },
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': { moonQuality: .5 },
  'Qwen3.8Max-TasksAssignedByOpus5': { moonQuality: .5 },
};
const expectedOtherComets = {
  'Opus5(Max)V1': 2,
  'Fable5.1(Max)V1': 3,
  'Qwen3.8Flash(xhigh)V1': 1,
  'Hy4Preview(high)V1': 2,
  'DeepSeek-V4-Flash-0731': 3,
  'DeepSeekV4Pro0813(Max)V2': 1,
  'Fable5Max-WebGL2': 1,
  'GLM5.3(Max)V3': 1,
  'GPT5.6Luna(Max)V2': 2,
  'GPT5.6SolUltra-WebGL2': 1,
  'GPT5.6SolUltra': 1,
  'Grok4.5': 1,
  'LongCat2.0': 3,
  'GPT6Astra(Ultra)V1': 3,
};
check(Math.max(...Object.values(expectedOtherComets)) === 3 && expectedOtherComets['Fable5.1(Max)V1'] === 3 && expectedOtherComets['GPT6Astra(Ultra)V1'] === 3, 'The audited maximum must be four total comets: Halley plus three others');
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
  check(stripCreationDate(work.model) === CANONICAL_NAMES[id], `${id}: canonical name mismatch: ${work.model}`);
  const actualFingerprint = auditFingerprint(score);
  check(actualFingerprint === EXPECTED_AUDIT_FINGERPRINT[id], `${id}: audit evidence fingerprint mismatch\n  expected ${EXPECTED_AUDIT_FINGERPRINT[id]}\n  actual   ${actualFingerprint}`);
  const presentOptional = optionalRecordKeys.filter(key => Object.hasOwn(score, key));
  const required = [...recordKeys, ...presentOptional];
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
  if (Object.hasOwn(score, 'moonQuality')) allowed(score.moonQuality, [.5, 1], `${id}.moonQuality`);
  if (Object.hasOwn(score, 'earthMoonValid')) check(typeof score.earthMoonValid === 'boolean', `${id}.earthMoonValid must be boolean`);
  const expectedMoonAdjustment = expectedMoonAdjustments[id] || {};
  check((score.moonQuality ?? 1) === (expectedMoonAdjustment.moonQuality ?? 1), `${id}: moon quality evidence drift`);
  check((score.earthMoonValid ?? score.hasEarthMoon) === (expectedMoonAdjustment.earthMoonValid ?? score.hasEarthMoon), `${id}: Earth Moon validity evidence drift`);
  check(typeof score.halley === 'boolean', `${id}.halley must be boolean`);
  check(Number.isInteger(score.otherComets) && score.otherComets >= 0 && score.otherComets <= 3, `${id}.otherComets must be an integer from 0 to 3`);
  if (work.group === 'B') check(score.otherComets === 0, `${id}: detailed-spec entries must not receive other-comet bonus evidence`);
  check(score.otherComets === (expectedOtherComets[id] || 0), `${id}: other-comet evidence drift`);
  if (score.visualBase !== null) finiteRange(score.visualBase, 0, 10, `${id}.visualBase legacy audit value`);
  allowed(score.fatal, [null, 'L1', 'L2'], `${id}.fatal`);
  check(typeof score.note === 'string' && /[\u3400-\u9fff]/u.test(score.note), `${id}.note must be concise Chinese text`);
  if (score.fatal) check(typeof score.fatalReason === 'string' && score.fatalReason.length > 5, `${id}.fatalReason required`);

  const computed = SITE.scoreFor(work);
  exactKeys(computed.parts, ['features', 'orbit', 'moons', 'moonBonus', 'cometBonus', 'independence', 'halley', 'correctness', 'interaction'], `${id}.computed parts`);
  for (const [key, value] of Object.entries(computed.parts)) check(Number.isFinite(value), `${id}.parts.${key} is not finite`);
  for (const key of ['effectiveMoons', 'evidenceBase', 'manualAdjustment', 'preCap', 'exact', 'adjusted', 'total']) check(Number.isFinite(computed[key]), `${id}.${key} is not finite`);
  check(!Object.hasOwn(computed.parts, 'visual'), `${id}: legacy visual evidence must not enter scoring`);
  close(computed.evidenceBase, Object.values(computed.parts).reduce((sum, value) => sum + value, 0), `${id}.evidenceBase`);
  const expectedAdjustment = score.reference ? 0 : work.tier === 0 ? 3 : work.tier === 2 ? -3 : work.tier === 3 ? -6 : 0;
  close(computed.manualAdjustment, expectedAdjustment, `${id}.human-experience tier adjustment`);
  finiteRange(computed.total, 0, work.tier === 0 ? 109 : 106, `${id}.total`);
  close(computed.exact, EXPECTED_EXACT[id], `${id}.exact oracle`);
  check(computed.total === Math.round(EXPECTED_EXACT[id]), `${id}.total oracle: expected ${Math.round(EXPECTED_EXACT[id])}, got ${computed.total}`);
}

const source = read('assets/scores.js');
const explicitKeys = [...recordKeys, ...Object.values(nested).flat()];
for (const key of explicitKeys) {
  const count = [...source.matchAll(new RegExp(`\\b${key}\\s*:`, 'g'))].length;
  check(count === 108, `scores.js source key ${key} must occur exactly 108 times; duplicate/missing key detected (${count})`);
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

const doubaoOneLine = WORKS.find(w => w.id === 'DoubaoSeedEvolving(Max)V1');
const doubaoDetailed = WORKS.find(w => w.id === 'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5');
const solHigh = WORKS.find(w => w.id === 'GPT5.6Sol(high)V1');
const solMaxOneLine = WORKS.find(w => w.id === 'GPT5.6Sol(Max)V1');
const solMaxDetailed = WORKS.find(w => w.id === 'GPT5.6Sol(Max)V1-TasksAssignedByOpus5');
const solXHighDetailed = WORKS.find(w => w.id === 'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5');
const solHighDetailed = WORKS.find(w => w.id === 'GPT5.6Sol(high)V1-TasksAssignedByOpus5');
const solMediumOneLine = WORKS.find(w => w.id === 'GPT5.6Sol(Medium)V1');
const solMediumDetailed = WORKS.find(w => w.id === 'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5');
const solLightOneLine = WORKS.find(w => w.id === 'GPT5.6Sol(Light)V1');
const solLightDetailed = WORKS.find(w => w.id === 'GPT5.6Sol(Light)V1-TasksAssignedByOpus5');
const lunaMax1 = WORKS.find(w => w.id === 'GPT5.6Luna(Max)V1');
const lunaMax2 = WORKS.find(w => w.id === 'GPT5.6Luna(Max)V2');
const glm53FlashOneLine = WORKS.find(w => w.id === 'GLM5.3Flash(Max)V1');
const glm53FlashDetailed = WORKS.find(w => w.id === 'GLM5.3Flash(Max)V1-TasksAssignedByOpus5');
const hy4OneLine1 = WORKS.find(w => w.id === 'Hy4Preview(high)V1');
const hy4OneLine2 = WORKS.find(w => w.id === 'Hy4Preview(high)V2');
const hy4Detailed1 = WORKS.find(w => w.id === 'Hy4Preview(high)V1-TasksAssignedByOpus5');
const hy4Detailed2 = WORKS.find(w => w.id === 'Hy4Preview(high)V2-TasksAssignedByOpus5');
const glm53Flash2OneLine = WORKS.find(w => w.id === 'GLM5.3Flash(Max)V2');
const glm53Flash2Detailed = WORKS.find(w => w.id === 'GLM5.3Flash(Max)V2-TasksAssignedByOpus5');
check(doubaoOneLine?.group === 'A' && doubaoDetailed?.group === 'B' && doubaoOneLine?.tier === 3 && doubaoDetailed?.tier === 3, 'Both Doubao Seed Evolving runs must be Tier 3');
check(doubaoOneLine?.pair === 'doubao' && doubaoDetailed?.pair === 'doubao', 'Doubao Seed Evolving runs must form one explicit pair');
check(JSON.stringify(doubaoOneLine?.tags) === JSON.stringify(['in Claude CLI']) && JSON.stringify(doubaoDetailed?.tags) === JSON.stringify(['in Claude CLI']), 'Both Doubao runs must show in Claude CLI');
check(doubaoOneLine?.bytes === 43559 && doubaoOneLine?.lines === 994 && doubaoDetailed?.bytes === 100880 && doubaoDetailed?.lines === 2568, 'Doubao source metadata must match the supplied files');
check(solHigh?.group === 'A' && solHigh?.tier === 2 && solHigh?.pair === null && JSON.stringify(solHigh?.tags) === JSON.stringify(['in Codex']), 'GPT-5.6 Sol high must be an unpaired Tier 2 in Codex run');
check(solHigh?.bytes === 48544 && solHigh?.lines === 407 && solHigh?.tech === 'WebGL2', 'GPT-5.6 Sol high source metadata must match the supplied file');
check(solMaxOneLine?.group === 'A' && solMaxOneLine?.tier === 1 && solMaxOneLine?.pair === null && SITE.environmentTag(solMaxOneLine) === 'in Codex', 'GPT-5.6 Sol Max replacement must be an unpaired Tier 1 in Codex run');
check(solMaxOneLine?.file === 'models/GPT5.6Sol(Max)V1.html' && solMaxOneLine?.bytes === 102251 && solMaxOneLine?.lines === 2737 && solMaxOneLine?.tech === 'WebGL2' && solMaxOneLine?.msaa === false, 'GPT-5.6 Sol Max replacement metadata must match the supplied file');
for (const work of [doubaoOneLine, doubaoDetailed, solHigh, solMaxOneLine]) check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work.id} screenshot asset must exist`);
check(SITE.scoreFor(doubaoOneLine).total === 63 && SITE.scoreFor(doubaoDetailed).total === 91 && SITE.scoreFor(solHigh).total === 85, 'V3 evidence scores must be 63, 91, and 85');
check(solMaxDetailed?.group === 'B' && solMaxDetailed?.tier === 1 && solMaxDetailed?.pair === null, 'GPT-5.6 Sol Max must be an unpaired Tier 1 detailed-spec run');
check(JSON.stringify(solMaxDetailed?.tags) === JSON.stringify(['in Codex']) && fs.existsSync(new URL(`../${solMaxDetailed.shot}`, import.meta.url)), 'GPT-5.6 Sol Max detailed must show in Codex and have a screenshot');
for (const work of [solXHighDetailed, solHighDetailed]) {
  check(work?.group === 'B' && work?.tier === 2 && work?.pair === null, `${work?.id || 'GPT-5.6 Sol detailed'} must be an unpaired Tier 2 detailed-spec run`);
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Codex']) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Sol detailed'} must show in Codex and have a screenshot`);
}
check(solMaxDetailed?.bytes === 86118 && solMaxDetailed?.lines === 1061 && solMaxDetailed?.msaa === true, 'GPT-5.6 Sol Max detailed metadata must match the supplied file');
check(solXHighDetailed?.bytes === 76202 && solXHighDetailed?.lines === 283 && solXHighDetailed?.msaa === true, 'GPT-5.6 Sol xHigh detailed metadata must match the supplied file');
check(solHighDetailed?.bytes === 45296 && solHighDetailed?.lines === 172 && solHighDetailed?.msaa === false, 'GPT-5.6 Sol high detailed metadata must match the supplied file');
check(SITE.scoreFor(solMaxOneLine).total === 95 && SITE.scoreFor(solMaxDetailed).total === 99 && SITE.scoreFor(solXHighDetailed).total === 96 && SITE.scoreFor(solHighDetailed).total === 89, 'Updated Sol effort scores must be 95, 99, 96, and 89');
const lowerEffortRuns = [solMediumOneLine, solMediumDetailed, solLightOneLine, solLightDetailed];
for (const work of lowerEffortRuns) {
  check(work?.tier === 3 && work?.pair === null && JSON.stringify(work?.tags) === JSON.stringify(['in Codex']), `${work?.id || 'GPT-5.6 Sol lower effort'} must be an unpaired Tier 3 in Codex run`);
  check(work?.tech === 'WebGL2' && work?.net.length === 0 && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Sol lower effort'} must be offline WebGL2 with a screenshot`);
}
check(solMediumOneLine?.group === 'A' && solMediumOneLine?.bytes === 22057 && solMediumOneLine?.lines === 161 && solMediumOneLine?.msaa === true, 'GPT-5.6 Sol Medium one-line metadata must match the supplied file');
check(solMediumDetailed?.group === 'B' && solMediumDetailed?.bytes === 37827 && solMediumDetailed?.lines === 111 && solMediumDetailed?.msaa === false, 'GPT-5.6 Sol Medium detailed metadata must match the supplied file');
check(solLightOneLine?.group === 'A' && solLightOneLine?.bytes === 20733 && solLightOneLine?.lines === 127 && solLightOneLine?.msaa === true, 'GPT-5.6 Sol Light one-line metadata must match the supplied file');
check(solLightDetailed?.group === 'B' && solLightDetailed?.bytes === 31891 && solLightDetailed?.lines === 79 && solLightDetailed?.msaa === true, 'GPT-5.6 Sol Light detailed metadata must match the supplied file');
check(SITE.scoreFor(solMediumOneLine).total === 69 && SITE.scoreFor(solMediumDetailed).total === 80 && SITE.scoreFor(solLightOneLine).total === 56 && SITE.scoreFor(solLightDetailed).total === 82, 'Medium and Light evidence scores must be 69, 80, 56, and 82');
for (const work of [lunaMax1, lunaMax2]) {
  check(work?.group === 'A' && work?.tier === 3 && work?.pair === null && JSON.stringify(work?.tags) === JSON.stringify(['in Codex']), `${work?.id || 'GPT-5.6 Luna Max'} must be an unpaired Tier 3 in Codex run`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Luna Max'} screenshot asset must exist`);
}
check(stripCreationDate(lunaMax1?.model) === 'GPT-5.6 Luna (Max) #1' && lunaMax1?.tech === 'WebGL2' && lunaMax1?.bytes === 75455 && lunaMax1?.lines === 1944 && lunaMax1?.net.length === 0, 'GPT-5.6 Luna Max #1 metadata must match the supplied file');
check(stripCreationDate(lunaMax2?.model) === 'GPT-5.6 Luna (Max) #2' && lunaMax2?.tech === 'Three.js' && lunaMax2?.bytes === 64120 && lunaMax2?.lines === 876 && JSON.stringify(lunaMax2?.net) === JSON.stringify(['cdn.jsdelivr.net', 'fonts.googleapis.com']), 'GPT-5.6 Luna Max #2 metadata must match the supplied file and disclose network dependencies');
check(SITE.scoreFor(lunaMax1).total === 62 && SITE.scoreFor(lunaMax2).total === 61, 'GPT-5.6 Luna Max #1 and #2 evidence scores must be 62 and 61');
for (const work of [glm53FlashOneLine, glm53FlashDetailed]) {
  check(work?.tier === 3 && work?.pair === null && work?.tech === 'WebGL2' && work?.net.length === 0, `${work?.id || 'GLM 5.3 Flash'} must be an unpaired offline Tier 3 WebGL2 run`);
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3 Flash'} must show in Zcode and have a screenshot`);
}
check(glm53FlashOneLine?.group === 'A' && glm53FlashOneLine?.bytes === 75687 && glm53FlashOneLine?.lines === 1738 && glm53FlashOneLine?.msaa === false, 'GLM 5.3 Flash one-line metadata must match the supplied file');
check(glm53FlashDetailed?.group === 'B' && glm53FlashDetailed?.bytes === 113486 && glm53FlashDetailed?.lines === 2699 && glm53FlashDetailed?.msaa === true, 'GLM 5.3 Flash detailed metadata must match the supplied file');
check(SITE.scoreFor(glm53FlashOneLine).total === 85 && SITE.scoreFor(glm53FlashDetailed).total === 60 && SITE.scoreFor(glm53FlashDetailed).fatal === 'L2', 'GLM 5.3 Flash evidence scores must be 85 and L2-capped 60');
for (const work of [hy4OneLine1, hy4OneLine2, hy4Detailed1, hy4Detailed2]) {
  check(work?.tier === (work.group === 'A' ? 2 : 1) && JSON.stringify(work?.tags) === JSON.stringify(['in WorkBuddy']), `${work?.id || 'Hy 4 Preview'} must be T2 for one-line, T1 for detailed, and show in WorkBuddy`);
  check(fs.existsSync(new URL(`../${work.file}`, import.meta.url)) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Hy 4 Preview'} source and screenshot must exist`);
}
check(hy4OneLine1?.group === 'A' && hy4OneLine1?.pair === 'hy4v1' && hy4OneLine1?.tech === 'Three.js' && hy4OneLine1?.bytes === 99488 && hy4OneLine1?.lines === 2447 && JSON.stringify(hy4OneLine1?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Hy 4 Preview #1 one-line metadata must match the supplied file');
check(hy4OneLine2?.group === 'A' && hy4OneLine2?.pair === 'hy4v2' && hy4OneLine2?.tech === 'Three.js' && hy4OneLine2?.bytes === 105738 && hy4OneLine2?.lines === 2286 && JSON.stringify(hy4OneLine2?.net) === JSON.stringify(['cdn.jsdelivr.net','unpkg.com','registry.npmmirror.com']), 'Hy 4 Preview #2 one-line metadata must match the renamed V2 file');
check(hy4Detailed1?.group === 'B' && hy4Detailed1?.pair === 'hy4v1' && hy4Detailed1?.tech === 'WebGL2' && hy4Detailed1?.bytes === 126382 && hy4Detailed1?.lines === 2898 && hy4Detailed1?.net.length === 0, 'Hy 4 Preview #1 detailed metadata must match the supplied file');
check(hy4Detailed2?.group === 'B' && hy4Detailed2?.pair === 'hy4v2' && hy4Detailed2?.tech === 'WebGL2' && hy4Detailed2?.bytes === 126917 && hy4Detailed2?.lines === 2864 && hy4Detailed2?.net.length === 0, 'Hy 4 Preview #2 detailed metadata must match the supplied file');
check(!fs.existsSync(new URL('../models/Hy4Preview(high)V3.html', import.meta.url)) && !read('models/Hy4Preview(high)V2.html').includes('HY4 PREVIEW · V3'), 'The former Hy 4 V3 source and visible V3 branding must be removed after renaming it to V2');
check(SITE.scoreFor(hy4OneLine1).total === 97 && SITE.scoreFor(hy4OneLine2).total === 96 && SITE.scoreFor(hy4Detailed1).total === 94 && SITE.scoreFor(hy4Detailed2).total === 95, 'Hy 4 Preview scores must be 97, 96, 94, and 95');
check(SITE.scoreFor(hy4OneLine1).manualAdjustment === -3 && SITE.scoreFor(hy4OneLine2).manualAdjustment === -3, 'Both one-line Hy 4 works must receive only the normal T2 adjustment');
close(SITE.scoreFor(hy4OneLine1).evidenceBase, 99.7, 'Hy 4 #1 evidence including two other comets');
close(SITE.scoreFor(hy4OneLine2).evidenceBase, 99.46666666666667, 'Hy 4 #2 base evidence unchanged');
check(SITE.tieredGallery([hy4OneLine1,hy4OneLine2],false).includes('tier-archive') && !SITE.tieredGallery([hy4OneLine1,hy4OneLine2],false).includes('tier tier-1'), 'One-line Hy 4 cards must be in the collapsible T2 gallery');
for (const work of [glm53Flash2OneLine, glm53Flash2Detailed]) {
  check(work?.tier === 2 && work?.pair === 'glm53flashv2' && JSON.stringify(work?.tags) === JSON.stringify(['in Zcode', '突然聪明了']), `${work?.id || 'GLM 5.3 Flash #2'} must be paired Tier 2 in Zcode with the requested note tag`);
  check(fs.existsSync(new URL(`../${work.file}`, import.meta.url)) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3 Flash #2'} source and screenshot must exist`);
}
check(glm53Flash2OneLine?.group === 'A' && glm53Flash2OneLine?.tech === 'Three.js' && glm53Flash2OneLine?.bytes === 64541 && glm53Flash2OneLine?.lines === 1504 && JSON.stringify(glm53Flash2OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'GLM 5.3 Flash #2 one-line metadata must match the supplied file');
check(glm53Flash2Detailed?.group === 'B' && glm53Flash2Detailed?.tech === 'WebGL2' && glm53Flash2Detailed?.bytes === 102402 && glm53Flash2Detailed?.lines === 2390 && glm53Flash2Detailed?.net.length === 0, 'GLM 5.3 Flash #2 detailed metadata must match the supplied file');
check(SITE.scoreFor(glm53Flash2OneLine).total === 92 && SITE.scoreFor(glm53Flash2Detailed).total === 90, 'GLM 5.3 Flash #2 evidence scores must be 92 and 90');
const doubaoPair = SITE.pairs()[18];
check(doubaoPair?.a?.id === doubaoOneLine.id && doubaoPair?.b?.id === doubaoDetailed.id, 'Visible comparison position 19 must be the Doubao pair');
check(SITE.pairs()[19]?.a?.id === hy4OneLine1.id && SITE.pairs()[19]?.b?.id === hy4Detailed1.id && SITE.pairs()[20]?.a?.id === hy4OneLine2.id && SITE.pairs()[20]?.b?.id === hy4Detailed2.id, 'Visible comparison positions 20 and 21 must be Hy 4 Preview #1 and #2');
check(SITE.pairs()[21]?.a?.id === glm53Flash2OneLine.id && SITE.pairs()[21]?.b?.id === glm53Flash2Detailed.id, 'Visible comparison position 22 must be GLM 5.3 Flash #2');

const solXHigh1 = WORKS.find(w => w.id === 'GPT5.6Sol(xhigh)V1');
const solXHigh2 = WORKS.find(w => w.id === 'GPT5.6Sol(xhigh)V2');
const solXHigh3 = WORKS.find(w => w.id === 'GPT5.6Sol(xhigh)V3');
check(solXHigh1?.group === 'A' && solXHigh1?.tier === 3 && solXHigh1?.tech === 'Canvas2D', 'GPT-5.6 Sol xHigh #1 must be a Tier 3 Canvas2D one-line run');
check(solXHigh2?.group === 'A' && solXHigh2?.tier === 2 && solXHigh2?.tech === 'WebGL2', 'GPT-5.6 Sol xHigh #2 must be a Tier 2 WebGL2 one-line run');
check(solXHigh3?.group === 'A' && solXHigh3?.tier === 2 && solXHigh3?.tech === 'WebGL2', 'GPT-5.6 Sol xHigh #3 must be a Tier 2 WebGL2 one-line run');
check(JSON.stringify(solXHigh1?.tags) === JSON.stringify(['in Zcode', '中转站']) && JSON.stringify(solXHigh2?.tags) === JSON.stringify(['in Zcode', '中转站']), 'GPT-5.6 Sol xHigh #1/#2 must show in Zcode plus the relay-service tag');
check(JSON.stringify(solXHigh3?.tags) === JSON.stringify(['in Codex']), 'GPT-5.6 Sol xHigh #3 must show the in Codex tag');
check(solXHigh1?.bytes === 60111 && solXHigh1?.lines === 1107 && solXHigh1?.net.length === 0, 'GPT-5.6 Sol xHigh #1 source metadata must match the supplied file');
check(solXHigh2?.bytes === 40148 && solXHigh2?.lines === 187 && solXHigh2?.net.length === 0, 'GPT-5.6 Sol xHigh #2 source metadata must match the supplied file');
check(solXHigh3?.bytes === 63449 && solXHigh3?.lines === 1688 && solXHigh3?.net.length === 0, 'GPT-5.6 Sol xHigh #3 source metadata must match the supplied file');
for (const work of [solXHigh1, solXHigh2, solXHigh3]) {
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work.id} screenshot asset must exist`);
}
check(SITE.scoreFor(solXHigh1).total === 81 && SITE.scoreFor(solXHigh2).total === 92 && SITE.scoreFor(solXHigh3).total === 89, 'GPT-5.6 Sol xHigh evidence scores must be 81, 92, and 89');

const grok45 = WORKS.find(w => w.id === 'Grok4.5');
const grok46 = WORKS.find(w => w.id === 'Grok4.6(xhigh)V1');
const grok46Detailed = WORKS.find(w => w.id === 'Grok4.6(xhigh)V1-TasksAssignedByOpus5');
check(grok46?.group === 'A' && grok46Detailed?.group === 'B' && grok46?.tier === 2 && grok46Detailed?.tier === 2, 'Both Grok 4.6 runs must be Tier 2');
check(grok46?.pair === 'grok46' && grok46Detailed?.pair === 'grok46', 'Grok 4.6 runs must form one explicit pair');
check(stripCreationDate(grok46?.model) === 'Grok 4.6 (xHigh)' && stripCreationDate(grok46Detailed?.model) === 'Grok 4.6 (xHigh)', 'Grok 4.6 visible naming must be canonical');
check(grok46?.title === '日心仪 · Helios Orrery' && grok46Detailed?.title === '太阳系实时运动模型', 'Grok 4.6 visible titles must match the audited files');
check(grok46?.bytes === 59361 && grok46?.lines === 1527 && grok46?.tech === 'Three.js' && grok46?.needsFloat === false && grok46?.msaa === true, 'Grok 4.6 one-line source metadata must match the replaced file');
check(JSON.stringify(grok46?.net) === JSON.stringify(['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net']), 'Grok 4.6 one-line network dependencies must match the replaced file');
check(grok46Detailed?.bytes === 88989 && grok46Detailed?.lines === 2134 && grok46Detailed?.tech === 'WebGL2' && grok46Detailed?.needsFloat === false && grok46Detailed?.msaa === true && grok46Detailed?.net.length === 0, 'Grok 4.6 detailed source metadata must match the audited file');
for (const work of [grok45, grok46, grok46Detailed]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in build']), `${work?.id || 'Grok'} must show the exact in build tag`);
  check(SITE.environmentTag(work) === 'in build' && SITE.chips(work, null).includes('in build'), `${work?.id || 'Grok'} environment tag must render as in build`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Grok'} screenshot asset must exist`);
}
check(SITE.scoreFor(grok46).total === 79 && SITE.scoreFor(grok46Detailed).total === 92, 'Grok 4.6 evidence scores must be 79 and 92 after Tier 2 adjustments');

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
const deepSeekPro0813 = WORKS.find(w => w.id === 'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5');
const deepSeekPro0813OneLine = WORKS.find(w => w.id === 'DeepSeek-V4-Pro-0813-V1');
const deepSeekPro0813V2 = WORKS.find(w => w.id === 'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5');
const deepSeekPro0813V2OneLine = WORKS.find(w => w.id === 'DeepSeekV4Pro0813(Max)V2');
check(deepSeekPro0813OneLine?.group === 'A' && deepSeekPro0813OneLine?.tier === 2 && deepSeekPro0813OneLine?.pair === 'deepseekv4pro0813', 'DeepSeek V4 Pro 0813 #1 one-line run must be the paired Tier 2 entry');
check(deepSeekPro0813?.group === 'B' && deepSeekPro0813?.tier === 2 && deepSeekPro0813?.pair === 'deepseekv4pro0813', 'DeepSeek V4 Pro 0813 #1 detailed run must be the paired Tier 2 entry');
check(stripCreationDate(deepSeekPro0813?.model) === 'DeepSeek V4 Pro 0813 (Max) #1' && stripCreationDate(deepSeekPro0813OneLine?.model) === 'DeepSeek V4 Pro 0813 (Max) #1', 'Original DeepSeek V4 Pro 0813 runs must be numbered #1');
check(deepSeekPro0813?.title === '太阳系实时运动模型' && deepSeekPro0813OneLine?.title === '太阳系 · 实时运动模型', 'DeepSeek V4 Pro 0813 #1 visible titles must remain canonical');
for (const work of [deepSeekPro0813, deepSeekPro0813OneLine]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']), `${work?.id || 'DeepSeek V4 Pro 0813 #1'} must show the exact in Zcode tag`);
  check(SITE.environmentTag(work) === 'in Zcode' && SITE.chips(work, null).includes('in Zcode'), `${work?.id || 'DeepSeek V4 Pro 0813 #1'} environment tag must render as in Zcode`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'DeepSeek V4 Pro 0813 #1'} screenshot asset must exist`);
}
check(deepSeekPro0813?.bytes === 118670 && deepSeekPro0813?.lines === 2590 && deepSeekPro0813?.tech === 'WebGL2' && deepSeekPro0813?.needsFloat === true && deepSeekPro0813?.msaa === true && deepSeekPro0813?.net.length === 0, 'DeepSeek V4 Pro 0813 #1 detailed source metadata must match the audited file');
check(deepSeekPro0813OneLine?.bytes === 50852 && deepSeekPro0813OneLine?.lines === 1235 && deepSeekPro0813OneLine?.tech === 'Three.js' && deepSeekPro0813OneLine?.needsFloat === false && deepSeekPro0813OneLine?.msaa === true, 'DeepSeek V4 Pro 0813 #1 one-line source metadata must match the audited file');
check(JSON.stringify(deepSeekPro0813OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net', 'esm.sh']), 'DeepSeek V4 Pro 0813 #1 one-line network dependencies must match the audited file');
check(deepSeekPro0813V2OneLine?.group === 'A' && deepSeekPro0813V2OneLine?.tier === 2 && deepSeekPro0813V2OneLine?.pair === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #2 one-line run must be the paired Tier 2 entry');
check(deepSeekPro0813V2?.group === 'B' && deepSeekPro0813V2?.tier === 2 && deepSeekPro0813V2?.pair === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #2 detailed run must be the paired Tier 2 entry');
check(stripCreationDate(deepSeekPro0813V2?.model) === 'DeepSeek V4 Pro 0813 (Max) #2' && stripCreationDate(deepSeekPro0813V2OneLine?.model) === 'DeepSeek V4 Pro 0813 (Max) #2', 'New DeepSeek V4 Pro 0813 runs must be numbered #2');
check(deepSeekPro0813V2OneLine?.bytes === 61829 && deepSeekPro0813V2OneLine?.lines === 1387 && deepSeekPro0813V2OneLine?.tech === 'Three.js' && deepSeekPro0813V2OneLine?.needsFloat === false && deepSeekPro0813V2OneLine?.msaa === true, 'DeepSeek V4 Pro 0813 #2 one-line source metadata must match the audited file');
check(JSON.stringify(deepSeekPro0813V2OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'DeepSeek V4 Pro 0813 #2 one-line network dependencies must match the audited file');
check(deepSeekPro0813V2?.bytes === 104830 && deepSeekPro0813V2?.lines === 2423 && deepSeekPro0813V2?.tech === 'WebGL2' && deepSeekPro0813V2?.needsFloat === true && deepSeekPro0813V2?.msaa === true && deepSeekPro0813V2?.net.length === 0, 'DeepSeek V4 Pro 0813 #2 detailed source metadata must match the audited file');
for (const work of [deepSeekPro0813V2OneLine, deepSeekPro0813V2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in dsh']), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} must show the exact in dsh tag`);
  check(SITE.environmentTag(work) === 'in dsh' && SITE.chips(work, null).includes('in dsh'), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} environment tag must render as in dsh`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} screenshot asset must exist`);
}
check(SITE.scoreFor(deepSeekPro0813V2OneLine).total === 85 && SITE.scoreFor(deepSeekPro0813V2).total === 93, 'DeepSeek V4 Pro 0813 #2 evidence scores must be 85 and 93');
const glm53OneLine1 = WORKS.find(w => w.id === 'GLM5.3(Max)V1');
const glm53OneLine2 = WORKS.find(w => w.id === 'GLM5.3(Max)V2');
const glm53OneLine3 = WORKS.find(w => w.id === 'GLM5.3(Max)V3');
const glm53Detailed1 = WORKS.find(w => w.id === 'GLM5.3(Max)V1-TasksAssignedByOpus5');
const glm53Detailed2 = WORKS.find(w => w.id === 'GLM5.3(Max)V2-TasksAssignedByOpus5');
check([glm53OneLine1, glm53OneLine2, glm53OneLine3].every(w => w?.group === 'A' && w?.tier === 2), 'All three GLM 5.3 one-line runs must be Tier 2');
check(glm53Detailed1?.group === 'B' && glm53Detailed2?.group === 'B' && glm53Detailed1?.tier === 3 && glm53Detailed2?.tier === 3, 'Both GLM 5.3 detailed runs must be Tier 3');
check(stripCreationDate(glm53OneLine1?.model) === 'GLM 5.3 (Max) #1' && stripCreationDate(glm53Detailed1?.model) === 'GLM 5.3 (Max) #1', 'GLM 5.3 V1 runs must be numbered #1');
check(stripCreationDate(glm53OneLine2?.model) === 'GLM 5.3 (Max) #2' && stripCreationDate(glm53Detailed2?.model) === 'GLM 5.3 (Max) #2', 'GLM 5.3 V2 runs must be numbered #2');
check(stripCreationDate(glm53OneLine3?.model) === 'GLM 5.3 (Max) #3' && glm53OneLine3?.pair === null, 'GLM 5.3 V3 must be the unpaired one-line #3 run');
check(glm53OneLine1?.pair === 'glm53v1' && glm53Detailed1?.pair === 'glm53v1' && glm53OneLine2?.pair === 'glm53v2' && glm53Detailed2?.pair === 'glm53v2', 'GLM 5.3 versions must form two explicit pairs');
check(glm53OneLine1?.title === '太阳系 · Solar System 3D' && glm53OneLine2?.title === '太阳系运动模型 · Solar System' && glm53OneLine3?.title === '太阳系运动模型 · WebGL2', 'GLM 5.3 one-line titles must stay canonical');
check(glm53Detailed1?.title === '太阳系 · 实时运动模型' && glm53Detailed2?.title === '太阳系实时运动模型 v4', 'GLM 5.3 detailed titles must stay canonical');
check(glm53OneLine1?.bytes === 73580 && glm53OneLine1?.lines === 1700 && glm53OneLine1?.tech === 'Three.js' && glm53OneLine1?.needsFloat === true && glm53OneLine1?.msaa === true, 'GLM 5.3 #1 one-line metadata must match the audited file');
check(glm53OneLine2?.bytes === 75144 && glm53OneLine2?.lines === 1525 && glm53OneLine2?.tech === 'Three.js' && glm53OneLine2?.needsFloat === true && glm53OneLine2?.msaa === true, 'GLM 5.3 #2 one-line metadata must match the audited file');
check(glm53OneLine3?.bytes === 80129 && glm53OneLine3?.lines === 1840 && glm53OneLine3?.tech === 'WebGL2' && glm53OneLine3?.needsFloat === true && glm53OneLine3?.msaa === false && glm53OneLine3?.net.length === 0, 'GLM 5.3 #3 one-line metadata must match the audited file');
check(JSON.stringify(glm53OneLine1?.net) === JSON.stringify(['cdn.jsdelivr.net']) && JSON.stringify(glm53OneLine2?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Both GLM 5.3 one-line runs must disclose the jsDelivr dependency');
check(glm53Detailed1?.bytes === 105974 && glm53Detailed1?.lines === 2320 && glm53Detailed1?.tech === 'WebGL2' && glm53Detailed1?.needsFloat === true && glm53Detailed1?.msaa === true && glm53Detailed1?.net.length === 0, 'GLM 5.3 #1 detailed metadata must match the audited file');
check(glm53Detailed2?.bytes === 115049 && glm53Detailed2?.lines === 2771 && glm53Detailed2?.tech === 'WebGL2' && glm53Detailed2?.needsFloat === true && glm53Detailed2?.msaa === true && glm53Detailed2?.net.length === 0, 'GLM 5.3 #2 detailed metadata must match the audited file');
for (const work of [glm53OneLine1, glm53OneLine2, glm53OneLine3, glm53Detailed1, glm53Detailed2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']), `${work?.id || 'GLM 5.3'} must show the exact in Zcode tag`);
  check(SITE.environmentTag(work) === 'in Zcode' && SITE.chips(work, null).includes('in Zcode'), `${work?.id || 'GLM 5.3'} environment tag must render as in Zcode`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3'} screenshot asset must exist`);
  check(!SCORES[work.id].reference && !SITE.card(work).includes('is-benchmark'), `${work?.id || 'GLM 5.3'} must remain a scored non-benchmark`);
}
check(SITE.scoreFor(glm53OneLine1).total === 89 && SITE.scoreFor(glm53OneLine2).total === 90 && SITE.scoreFor(glm53OneLine3).total === 93, 'GLM 5.3 one-line evidence scores must be 89, 90, and 93');
check(SITE.scoreFor(glm53Detailed1).total === 91 && SITE.scoreFor(glm53Detailed2).total === 92, 'GLM 5.3 detailed evidence scores must be 91 and 92');
const miniMax2 = WORKS.find(w => w.id === 'MiniMaxM3(high)V2-TasksAssignedByOpus5');
check(miniMax2?.group === 'B' && miniMax2?.tier === 4, 'MiniMax detailed #2 must remain in the Incomplete group');
check(!Object.hasOwn(miniMax2, 'incomplete'), 'MiniMax detailed #2 must not duplicate Tier 4 with an inline Incomplete marker');
check(miniMax2?.pair === null, 'MiniMax detailed #2 must not replace the existing controlled pair');
check(JSON.stringify(miniMax2?.tags) === JSON.stringify(['in ClaudeCLI']), 'MiniMax detailed #2 must show the exact in ClaudeCLI tag');
check(miniMax2?.bytes === 137459 && miniMax2?.lines === 3612 && miniMax2?.tech === 'WebGL2' && miniMax2?.net.length === 0, 'MiniMax detailed #2 source metadata must match the audited file');
check(SITE.chips(miniMax2, null).includes('in ClaudeCLI'), 'MiniMax detailed #2 context tag must render in its chip list');
check(fs.existsSync(new URL(`../${miniMax2.shot}`, import.meta.url)), 'MiniMax detailed #2 screenshot asset must exist');
check(stripCreationDate(WORKS.find(w => w.id === 'MiniMaxM3-TasksAssignedByOpus5')?.model) === 'MiniMax M3 (high) #1', 'Original MiniMax detailed run must be numbered #1');

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
const qwenFlashOneLine = WORKS.find(w => w.id === 'Qwen3.8Flash(xhigh)V1');
const qwenFlashDetailed = WORKS.find(w => w.id === 'Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5');
for (const work of [qwenFlashOneLine, qwenFlashDetailed]) {
  check(stripCreationDate(work?.model) === 'Qwen 3.8 Flash (xHigh)' && work?.tier === 3 && work?.pair === 'qwen38flash', `${work?.id || 'Qwen 3.8 Flash'} must use the canonical xHigh name, Tier 3, and its explicit pair`);
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Claude CLI']), `${work?.id || 'Qwen 3.8 Flash'} must show the exact in Claude CLI tag`);
  check(SITE.environmentTag(work) === 'in Claude CLI' && SITE.chips(work, null).includes('in Claude CLI'), `${work?.id || 'Qwen 3.8 Flash'} environment tag must render as in Claude CLI`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Qwen 3.8 Flash'} screenshot asset must exist`);
}
check(qwenFlashOneLine?.group === 'A' && qwenFlashOneLine?.tech === 'Three.js' && qwenFlashOneLine?.bytes === 47293 && qwenFlashOneLine?.lines === 912 && qwenFlashOneLine?.needsFloat === false && qwenFlashOneLine?.msaa === true && JSON.stringify(qwenFlashOneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Qwen 3.8 Flash one-line metadata must match the supplied file');
check(qwenFlashDetailed?.group === 'B' && qwenFlashDetailed?.tech === 'WebGL2' && qwenFlashDetailed?.bytes === 97214 && qwenFlashDetailed?.lines === 1826 && qwenFlashDetailed?.needsFloat === true && qwenFlashDetailed?.msaa === true && qwenFlashDetailed?.net.length === 0, 'Qwen 3.8 Flash detailed metadata must match the supplied file');
check(SITE.scoreFor(qwenFlashOneLine).total === 85 && SITE.scoreFor(qwenFlashDetailed).total === 87, 'Qwen 3.8 Flash evidence scores must be 85 and 87');
const qwenFlashPair = SITE.pairs()[23];
check(qwenFlashPair?.a?.id === qwenFlashOneLine.id && qwenFlashPair?.b?.id === qwenFlashDetailed.id, 'The final visible same-model comparison must pair the two Qwen 3.8 Flash runs');
check(context.window.PAIR_TITLES.qwen38flash === 'Qwen 3.8 Flash (xHigh)', 'Qwen 3.8 Flash comparison title must use canonical xHigh casing');
const kimi1OneLine = WORKS.find(w => w.id === 'KimiK3Max');
const kimi1Detailed = WORKS.find(w => w.id === 'KimiK3Max-TasksAssignedByOpus5');
const kimi2OneLine = WORKS.find(w => w.id === 'KimiK3(Max)V2');
const kimi2Detailed = WORKS.find(w => w.id === 'KimiK3(Max)V2-TasksAssignedByOpus5');
const kimi3OneLine = WORKS.find(w => w.id === 'KimiK3(Max)V3');
check(stripCreationDate(kimi1OneLine?.model) === 'Kimi K3 (Max) #1' && stripCreationDate(kimi1Detailed?.model) === 'Kimi K3 (Max) #1', 'Original Kimi K3 runs must be numbered #1');
check(stripCreationDate(kimi2OneLine?.model) === 'Kimi K3 (Max) #2' && stripCreationDate(kimi2Detailed?.model) === 'Kimi K3 (Max) #2', 'New Kimi K3 runs must be numbered #2');
check(stripCreationDate(kimi3OneLine?.model) === 'Kimi K3 (Max) #3' && kimi3OneLine?.group === 'A' && kimi3OneLine?.tier === 2 && kimi3OneLine?.pair === null, 'Kimi K3 V3 must be the unpaired Tier 2 one-line #3 run');
check(kimi2OneLine?.group === 'A' && kimi2Detailed?.group === 'B' && kimi2OneLine?.tier === 2 && kimi2Detailed?.tier === 1, 'Kimi K3 #2 one-line must be Tier 2 while its detailed run remains Tier 1');
check(kimi2OneLine?.pair === 'kimik3v2' && kimi2Detailed?.pair === 'kimik3v2', 'Kimi K3 #2 must form its own comparison pair');
check(kimi2OneLine?.bytes === 71207 && kimi2OneLine?.lines === 1667 && kimi2OneLine?.tech === 'WebGL2' && kimi2OneLine?.needsFloat === false && kimi2OneLine?.msaa === true && kimi2OneLine?.net.length === 0, 'Kimi K3 #2 one-line source metadata must match the audited file');
check(kimi2Detailed?.bytes === 118997 && kimi2Detailed?.lines === 2635 && kimi2Detailed?.tech === 'WebGL2' && kimi2Detailed?.needsFloat === false && kimi2Detailed?.msaa === true && kimi2Detailed?.net.length === 0, 'Kimi K3 #2 detailed source metadata must match the audited file');
check(kimi3OneLine?.bytes === 53289 && kimi3OneLine?.lines === 1247 && kimi3OneLine?.tech === 'Three.js' && kimi3OneLine?.needsFloat === false && kimi3OneLine?.msaa === true, 'Kimi K3 #3 one-line source metadata must match the audited file');
check(JSON.stringify(kimi3OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Kimi K3 #3 must disclose the jsDelivr dependency');
for (const work of [kimi2OneLine, kimi2Detailed]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Claude Cli']), `${work?.id || 'Kimi K3 #2'} must show the exact in Claude Cli tag`);
  check(SITE.environmentTag(work) === 'in Claude Cli' && SITE.chips(work, null).includes('in Claude Cli'), `${work?.id || 'Kimi K3 #2'} environment tag must render as in Claude Cli`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Kimi K3 #2'} screenshot asset must exist`);
}
check(JSON.stringify(kimi3OneLine?.tags) === JSON.stringify(['in KimiCode']), 'Kimi K3 #3 must show the exact in KimiCode tag');
check(SITE.environmentTag(kimi3OneLine) === 'in KimiCode' && SITE.chips(kimi3OneLine, null).includes('in KimiCode'), 'Kimi K3 #3 environment tag must render as in KimiCode');
check(fs.existsSync(new URL(`../${kimi3OneLine.shot}`, import.meta.url)), 'Kimi K3 #3 screenshot asset must exist');
check(!SCORES[kimi3OneLine.id].reference && SITE.scoreFor(kimi3OneLine).total === 81, 'Kimi K3 #3 must remain a scored non-benchmark with evidence score 81');
const kimi2Pair = SITE.pairs()[5];
check(kimi2Pair?.a?.id === 'KimiK3(Max)V2' && kimi2Pair?.b?.id === 'KimiK3(Max)V2-TasksAssignedByOpus5', 'Comparison position 06 must pair the two Kimi K3 #2 runs');
const pro0813Pair = SITE.pairs()[7];
check(pro0813Pair?.a?.id === 'DeepSeek-V4-Pro-0813-V1' && pro0813Pair?.b?.id === 'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5', 'Comparison position 08 must pair the two DeepSeek V4 Pro 0813 #1 runs');
const pro0813V2Pair = SITE.pairs()[8];
check(pro0813V2Pair?.a?.id === 'DeepSeekV4Pro0813(Max)V2' && pro0813V2Pair?.b?.id === 'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5', 'Comparison position 09 must pair the two DeepSeek V4 Pro 0813 #2 runs');
check(context.window.PAIR_TITLES.deepseekv4pro0813 === 'DeepSeek V4 Pro 0813 (Max) #1' && context.window.PAIR_TITLES.deepseekv4pro0813v2 === 'DeepSeek V4 Pro 0813 (Max) #2', 'DeepSeek V4 Pro 0813 comparison titles must expose #1 and #2');
const glm53Pair1 = SITE.pairs()[9];
const glm53Pair2 = SITE.pairs()[10];
check(glm53Pair1?.a?.id === 'GLM5.3(Max)V1' && glm53Pair1?.b?.id === 'GLM5.3(Max)V1-TasksAssignedByOpus5', 'Comparison position 10 must pair the two GLM 5.3 #1 runs');
check(glm53Pair2?.a?.id === 'GLM5.3(Max)V2' && glm53Pair2?.b?.id === 'GLM5.3(Max)V2-TasksAssignedByOpus5', 'Comparison position 11 must pair the two GLM 5.3 #2 runs');
check(context.window.PAIR_TITLES.glm53v1 === 'GLM 5.3 (Max) #1' && context.window.PAIR_TITLES.glm53v2 === 'GLM 5.3 (Max) #2', 'GLM 5.3 comparison titles must expose #1 and #2');
const qwenStablePair = SITE.pairs()[11];
check(qwenStablePair?.a?.id === 'Qwen3.8Max(Max)V1' && qwenStablePair?.b?.id === 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5', 'Comparison position 13 must pair Qwen 3.8 Max #1 with its detailed run');
const grok46Pair = SITE.pairs()[12];
check(grok46Pair?.a?.id === 'Grok4.6(xhigh)V1' && grok46Pair?.b?.id === 'Grok4.6(xhigh)V1-TasksAssignedByOpus5', 'Comparison position 14 must pair the two Grok 4.6 runs');
check(context.window.PAIR_TITLES.grok46 === 'Grok 4.6 (xHigh)', 'Grok 4.6 comparison title must use canonical xHigh casing');
const gemini36OneLine = WORKS.find(w => w.id === 'Gemini3.6Flash(high)V0');
const gemini36Detailed = WORKS.find(w => w.id === 'Gemini3.6Flash-TasksAssignedByOpus5');
check(gemini36OneLine?.group === 'A' && gemini36OneLine?.tier === 3 && gemini36OneLine?.pair === 'gemini36flash', 'Gemini 3.6 Flash V0 must be the paired Tier 3 one-line entry');
check(gemini36Detailed?.group === 'B' && gemini36Detailed?.tier === 3 && gemini36Detailed?.pair === 'gemini36flash', 'Gemini 3.6 Flash detailed run must remain Tier 3 and join the new pair');
check(gemini36OneLine?.bytes === 40641 && gemini36OneLine?.lines === 1085 && gemini36OneLine?.tech === 'Three.js' && gemini36OneLine?.needsFloat === false && gemini36OneLine?.msaa === true, 'Gemini 3.6 Flash V0 source metadata must match the audited file');
check(JSON.stringify(gemini36OneLine?.net) === JSON.stringify(['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net']), 'Gemini 3.6 Flash V0 network dependencies must match the audited file');
check(JSON.stringify(gemini36OneLine?.tags) === JSON.stringify(['主动改写为幻想风格']), 'Gemini 3.6 Flash V0 must disclose its deliberate fantasy reframing');
for (const work of [gemini36OneLine, gemini36Detailed]) {
  check(stripCreationDate(work?.model) === 'Gemini 3.6 Flash (high)', `${work?.id || 'Gemini 3.6 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.6 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.6 Flash'} screenshot asset must exist`);
}
check(SITE.scoreFor(gemini36OneLine).total === 42, 'Gemini 3.6 Flash V0 must score 42 after the Tier 3 adjustment');
const gemini36Pair = SITE.pairs()[14];
check(gemini36Pair?.a?.id === 'Gemini3.6Flash(high)V0' && gemini36Pair?.b?.id === 'Gemini3.6Flash-TasksAssignedByOpus5', 'Comparison position 17 must pair the two Gemini 3.6 Flash runs');
const gemini37OneLine = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1');
const gemini37Detailed = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5');
check(gemini37OneLine?.group === 'A' && gemini37OneLine?.tier === 3 && gemini37OneLine?.pair === 'gemini37flash', 'Gemini 3.7 Flash one-line run must be the paired Tier 3 entry');
check(gemini37Detailed?.group === 'B' && gemini37Detailed?.tier === 3 && gemini37Detailed?.pair === 'gemini37flash', 'Gemini 3.7 Flash detailed run must be the paired Tier 3 entry');
check(gemini37OneLine?.bytes === 86959 && gemini37OneLine?.lines === 2410 && gemini37OneLine?.tech === 'Three.js' && gemini37OneLine?.needsFloat === false && gemini37OneLine?.msaa === true, 'Gemini 3.7 Flash one-line source metadata must match the audited file');
check(JSON.stringify(gemini37OneLine?.net) === JSON.stringify(['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com']), 'Gemini 3.7 Flash one-line network dependencies must match the audited file');
check(gemini37Detailed?.bytes === 156951 && gemini37Detailed?.lines === 3967 && gemini37Detailed?.tech === 'WebGL2' && gemini37Detailed?.needsFloat === true && gemini37Detailed?.msaa === true && gemini37Detailed?.net.length === 0, 'Gemini 3.7 Flash detailed source metadata must match the audited file');
for (const work of [gemini37OneLine, gemini37Detailed]) {
  check(stripCreationDate(work?.model) === 'Gemini 3.7 Flash (high)', `${work?.id || 'Gemini 3.7 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.7 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.7 Flash'} screenshot asset must exist`);
}
const gemini37Pair = SITE.pairs()[16];
check(gemini37Pair?.a?.id === 'Gemini3.7Flash(high)V1' && gemini37Pair?.b?.id === 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5', 'Comparison position 19 must pair the two Gemini 3.7 Flash runs');

const expectedEnvironmentTag = work => {
  const explicit = (work.tags || []).find(tag => /^in\s+/i.test(String(tag).trim()));
  if (explicit) return String(explicit).trim();
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
  check(SITE.environmentName(work) === expected.replace(/^in\s+/i, ''), `${work.id}: table environment must omit the in prefix`);
  check(SITE.chips(work, null).includes(`>${expected}<`), `${work.id}: card chips must include environment tag ${expected}`);
}

const sonnetOneLine = WORKS.find(w => w.id === 'Sonnet5Ultra');
check(sonnetOneLine?.title === '太阳系运动模型 · Claude Sonnet 5 (Ultra)', 'Claude Sonnet 5 visible subtitle must use the canonical model name');
const i18nSource = read('assets/i18n.js');
check(i18nSource.includes("'card.openAria': '{name} 的作品截图'") === false, 'card.openAria must describe opening the full work, not only the screenshot');
check(i18nSource.includes("'card.openAria': '打开 {name} 的完整作品'") && i18nSource.includes("'card.openAria': 'Open the complete {name} work'"), 'Pair screenshot links must have bilingual canonical accessible names');
check(!i18nSource.includes('Real-Time Solar System Model — DeepSeek ProMax'), 'English visible subtitle still uses DeepSeek ProMax');
check(!i18nSource.includes('Solar System Motion Model · Sonnet5Ultra'), 'English visible subtitle still uses Sonnet5Ultra');
check(!i18nSource.includes('above Luna, though still below Sol'), 'English score note still uses bare Luna/Sol names');
check(!source.includes('低于 Sol。'), 'Chinese score note still uses bare Sol name');
const siteSource = read('assets/site.js');
const cssSource = read('assets/site.css');
check(siteSource.includes("w.tier === 2 ? -3 : w.tier === 3 ? -6"), 'Scoring formula must use Tier 2 −3 and Tier 3 −6');
check(siteSource.includes("* (23 / 15)") && siteSource.includes("w.tier === 0 ? 109 : 106") && siteSource.includes("Math.min(scoreCeiling, evidenceBase + manualAdjustment)"), 'Correctness must convert to 23 points, with ordinary ceiling 106 and Tier 0 ceiling 109');
check(siteSource.includes("* 2.4") && siteSource.includes("geometry: 4, kepler: 6, elements: 5, orientation: 4, epoch: 4"), 'V3 feature and 30-point orbit weights must remain explicit');
check(siteSource.includes("effectiveMoons * 1.5") && siteSource.includes("effectiveMoons - 8") && siteSource.includes("* .75"), 'V3 moon baseline and extra-moon bonus must remain explicit');
check(siteSource.includes("Math.min(3, r.otherComets)") && siteSource.includes("score.parts.cometBonus"), 'V3 other-comet bonus must award one point per non-Halley comet up to three');
check(siteSource.includes("independenceMode === 'native' ? 7 : independenceMode === 'bundled' ? 6 : 5"), 'Runtime independence must use native 7 / bundled Three.js 6 / online 5');
check(!siteSource.includes("w.tech === 'Canvas2D' ? 10") && !siteSource.includes("parts.visual"), 'Canvas2D and legacy visual evidence must not receive score deductions or points');
check((siteSource.match(/s\.total >= 95/g) || []).length === 2, 'Both score badge and tooltip must use the inclusive 95-point green threshold for every non-benchmark entry');
check((siteSource.match(/card\.openAria/g) || []).length === 5, 'Table model links, pair, model-gap, and reasoning-effort screenshot links must render accessible full-work labels');
check((siteSource.match(/card\.screenshotAlt/g) || []).length >= 4, 'Cards, pair screenshots, and model-gap screenshots must render localized alt text');
check(cssSource.includes('.model-gap-model>div:first-child{min-width:0;flex:1}') && cssSource.includes('grid-template-columns:minmax(0,1fr) 44px minmax(0,1fr) 44px minmax(0,1fr)'), 'Model-gap layout must reserve three equal model columns');
check(cssSource.includes('.model-gap-model>div:first-child>span{') && !cssSource.includes('.model-gap-model span{'), 'Model-gap eyebrow styling must not turn nested Ultra or score spans into block elements');
check(fs.existsSync(new URL('../assets/site-galaxy-bg.jpg', import.meta.url)), 'The generated fixed Milky Way background asset must exist');
check(cssSource.includes('url("site-galaxy-bg.jpg") center center / cover no-repeat') && cssSource.includes('content:"";position:fixed;inset:0;z-index:-2'), 'The Milky Way image must remain a fixed full-viewport background layer');
check(cssSource.includes('--r:0;') && cssSource.includes('html *,html *::before,html *::after{border-radius:0!important}'), 'The shared site chrome must use the requested square-corner treatment');
check(cssSource.includes('.nav-model-search-icon{border-radius:50%!important}'), 'The semantic magnifying-glass icon must stay circular despite square UI chrome');
const zhHome = read('index.html');
const enHome = read('index.en.html');
for (const home of [zhHome, enHome]) {
  check(!/#data|id="data"|id="stats"|statpair|const PAIRS/.test(home), 'The removed quantitative section must have no markup, navigation, or rendering code');
  check(!home.includes('量化对比') && !home.includes('Turning the Differences into Numbers'), 'The quantitative comparison heading must be removed in both languages');
}
for (const lang of ['zh', 'en']) {
  const localized = { window: {}, document: { documentElement: { lang }, readyState: 'loading', addEventListener() {} } };
  vm.createContext(localized);
  for (const file of ['assets/data.js', 'assets/scores.js', 'assets/prices.js', 'assets/i18n.js', 'assets/site.js']) vm.runInContext(read(file), localized, { filename: file });
  const localizedSite = localized.window.SITE;
  const work = localizedSite.byId('Fable5.1(Max)V1');
  const tip = localizedSite.scoreTipHtml(work, localizedSite.scoreFor(work));
  const expectedMeta = lang === 'zh' ? '证据基础分 106 · 人工体验修正后 109' : 'Evidence base 106 · 109 after human-experience adjustment';
  check(tip.includes(expectedMeta), `${lang}: Fable 5.1 must use the new 106-to-109 scoring summary`);
  check(!/98\.97|†|作者|Author|author|原始审查|审查原始/.test(tip), `${lang}: Fable 5.1 must not render superseded score explanations`);
}
check(enHome.includes("0:'Tier 0'") && i18nSource.includes("'tier.0': 'Tier 0'") && cssSource.includes('.tier-cell-0') && cssSource.includes('.tier.tier-0 .tier-hd'), 'Tier 0 must have an English table label, localized gallery label, and distinct color');
check(zhHome.includes('<section id="glossary" class="glossary" hidden>') && enHome.includes('<section id="glossary" class="glossary" hidden>'), 'Both glossary sections must stay in source but remain hidden');
check(zhHome.includes('<h2>关键术语说明</h2>') && enHome.includes('<h2>Key Terms</h2>') && cssSource.includes('.glossary[hidden]{display:none!important}'), 'Hidden glossary content must be preserved and explicitly suppressed');
const zhSpec = read('spec.html');
// Exercise the actual home-page handlers in a small DOM substitute (no browser).
for (const lang of ['zh', 'en']) {
  const nodes = new Map();
  function node(dataset = {}, classes = []) {
    const names = new Set(classes);
    return { dataset, attributes: {}, listeners: {}, innerHTML: '', textContent: '', value: '', hidden: false,
      classList: { contains: key => names.has(key), add: (...keys) => keys.forEach(key => names.add(key)), remove: (...keys) => keys.forEach(key => names.delete(key)) },
      setAttribute(key, value) { this.attributes[key] = value; },
      addEventListener(key, listener) { this.listeners[key] = listener; }, focus() {} };
  }
  const headers = ['model','tier','score','environment','recommendation','tech','lines'].map(key => node({ k: key }));
  const priceHeader = node({}, ['price-head']);
  const buttons = ['priceInput','priceOutput','priceCache'].map(key => node({ priceSort: key }));
  const tabs = ['A','B'].map(group => node({ tableGroup: group }));
  const one = selector => { if (!nodes.has(selector)) nodes.set(selector, node()); return nodes.get(selector); };
  const many = selector => selector === '#tbl th' ? [...headers, priceHeader]
    : selector === '#tbl th[data-k]' ? headers : selector === '#tbl [data-price-sort]' ? buttons
    : selector === '[data-table-group]' ? tabs : [];
  const sandbox = { window: {}, document: { documentElement: { lang }, readyState: 'loading',
    addEventListener() {}, querySelector: one, querySelectorAll: many } };
  vm.createContext(sandbox);
  for (const file of ['assets/data.js','assets/scores.js','assets/prices.js','assets/i18n.js','assets/site.js'])
    vm.runInContext(read(file), sandbox, { filename: file });
  const localSite = sandbox.window.SITE;
  localSite.installScoreTooltip = () => {};
  localSite.renderProbe = () => {};
  const home = lang === 'zh' ? zhHome : enHome;
  const inline = [...home.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('const S=window.SITE'));
  check(Boolean(inline), lang + ': home behavior script must exist');
  vm.runInContext(inline[1], sandbox, { filename: 'home-' + lang });
  const body = () => one('#tbl tbody').innerHTML;
  const countRows = () => (body().match(/<tr>/g) || []).length;
  check(countRows() === 48 && body().includes('Claude Opus 5 (Max)') && body().includes('GPT-6 Astra (Ultra)'), lang + ': table must default to the 48 one-line works');
  if (lang === 'zh') check(body().includes('<td class="tier-cell-1">T1'), 'Chinese rendered table must abbreviate Tier 1');
  for (const [index,group] of ['A','B'].entries()) {
    tabs[index].listeners.click();
    const works = localSite.visibleWorks().filter(work => work.group === group);
    check(countRows() === works.length, lang + ': tab must show only its own group');
    check(tabs[index].attributes['aria-selected'] === 'true' && tabs[index].tabIndex === 0 && tabs[1-index].tabIndex === -1, lang + ': selected tab must expose accessible state');
    check(one('#tablePanel').attributes['aria-labelledby'] === 'tableTab'+group, lang + ': panel must be named by the selected tab');
    for (const button of buttons) {
      for (const direction of [1,-1]) {
        button.onclick();
        check(button.attributes['aria-pressed'] === 'true', lang + ': active price sort must be announced');
        check(priceHeader.attributes['aria-sort'] === (direction === 1 ? 'ascending' : 'descending'), lang + ': price sort direction must be announced');
        const first = localSite.tableRows(works,button.dataset.priceSort,direction,lang)[0];
        check(body().startsWith('<tr>\n      <td class="table-model-cell">' + localSite.modelCell(first) + '</td>'), lang + ': sort must reorder only the selected group');
      }
    }
  }
  for (const [from,key,to] of [[1,'Home',0],[0,'End',1],[1,'ArrowRight',0],[0,'ArrowLeft',1]]) {
    let prevented=false;
    tabs[from].listeners.keydown({key,preventDefault(){prevented=true;}});
    check(prevented && tabs[to].attributes['aria-selected'] === 'true', lang + ': tabs must support '+key);
  }
  tabs[0].listeners.click();
  one('#modelSearchInput').value = 'Opus 5';
  one('#modelSearchInput').listeners.input();
  check(countRows() === 2, lang + ': model search must filter the active one-line tab');
  check(one('#tableCountA').textContent === '2 / 48' && one('#tableCountB').textContent === '1 / 40', lang + ': both tabs must show filtered and total counts');
  check(buttons[2].attributes['aria-pressed'] === 'true', lang + ': search must retain selected price field');
  tabs[1].listeners.click();
  check(countRows() === 1 && body().includes('Opus5Ultra-TasksAssignedByOpus5'), lang + ': switching tabs must retain the model search');
  check(buttons[2].attributes['aria-pressed'] === 'true' && buttons[2].dataset.direction === 'desc', lang + ': switching tabs must retain price direction');
  check(one('#gridA').innerHTML.includes('Opus5(Max)V1') && one('#gridB').innerHTML.includes('Opus5Ultra-TasksAssignedByOpus5'), lang + ': tab switching must not filter the galleries');
  one('#modelSearchInput').value = 'no-such-model';
  one('#modelSearchInput').listeners.input();
  check(body().includes('colspan="9"'), lang + ': empty state must span all nine columns');
  one('#modelSearchClear').listeners.click();
  check(countRows() === 40, lang + ': clearing search must preserve the selected detailed-spec tab');
  tabs[0].listeners.click();
  check(countRows() === 48, lang + ': one-line tab must restore its 48 entries');
  const work = localSite.byId('Opus5(Max)V1');
  const tooltip = localSite.scoreTipHtml(work,localSite.scoreFor(work));
  check(tooltip.includes('105') && !/97\.98|†|作者修订|Author revision/.test(tooltip), lang + ': new Opus must show only its current score with two other-comet points');
}
const enSpec = read('spec.en.html');
const visibleNamingSurface = [
  read('assets/data.js'), i18nSource, zhHome, enHome, zhSpec, enSpec,
  read('view.html'), read('view.en.html'), read('compare.html'), read('compare.en.html'),
].join('\n');
check(!/\((?:max|MAX)\)/.test(visibleNamingSurface), 'Visible reasoning strength must use the exact casing (Max), never (max) or (MAX)');
check(typeof SITE.modelMatches === 'function', 'SITE.modelMatches must expose the shared model-name search predicate');
check(typeof SITE.personalRecommendationFor === 'function', 'SITE must expose the personal recommendation lookup');
check(typeof SITE.modelLogoFor === 'function' && typeof SITE.modelCell === 'function', 'SITE must expose shared model-logo rendering');
const expectedModelLogos = {
  'Claude Opus 5 (Ultra)': 'anthropic', 'Claude Fable 5 (Max)': 'anthropic',
  'GPT-5.6 Sol (Max)': 'openai', 'Gemini 3.7 Flash (high)': 'gemini',
  'Kimi K3 (Max)': 'kimi', 'DeepSeek V4 Pro 0813 (Max)': 'deepseek',
  'Qwen 3.8 Max (Max)': 'qwen', 'GLM 5.3 (Max)': 'glm', 'Hy 4 Preview (high)': 'hy',
  'Grok 4.6 (xHigh)': 'grok', 'Doubao Seed Evolving (Max)': 'doubao',
  'LongCat 2.0 (high)': 'longcat', 'MiniMax M3 (high)': 'minimax',
  'MiMo 2.5 Pro (high)': 'mi',
  'MuseSpark 1.3 Contributor (xHigh)': 'meta',
  'GPT-6 Astra (Ultra)': 'openai',
};
for (const [model, logo] of Object.entries(expectedModelLogos)) {
  const work = { model };
  const path = `assets/logos/${logo}.png`;
  check(SITE.modelLogoFor(work) === path, `${model}: wrong company logo mapping`);
  check(fs.existsSync(asset(path)) && fs.statSync(asset(path)).size > 100, `${model}: normalized company logo is missing`);
  const cell = SITE.modelCell(work);
  check(cell.includes(`src="${path}"`) && cell.includes(`>${model}</span>`), `${model}: table cell must combine logo and model name`);
}
check(SITE.modelLogoFor({ model: 'MiMo 2.5 Pro (high)' }) === 'assets/logos/mi.png', 'MiMo must use the supplied Xiaomi logo');
const expectedRecommendations = {
  'Claude Opus 5 (Max)': ['up', 5, '天下第一(天↑)'],
  'Claude Fable 5.1 (Max)': ['down', 3, '在座的各位都是垃圾'],
  'Claude Opus 5 (Ultra)': ['up', 5, '又快、又稳、又贵'],
  'Hy 4 Preview (high)': ['down', 5, '绝版测试。已经降智。'],
  'GPT-5.6 Sol (Ultra)': ['up', 4, '甩手掌柜'],
  'GPT-5.6 Terra (Ultra)': ['up', 2, '感谢那个男人'],
  'GPT-5.6 Luna (Max)': ['down', 1, '别浪费token'],
  'Claude Fable 5 (Max)': ['down', 5, '性价比太低'],
  'Kimi K3 (Max)': ['up', 1, '性价比不够'],
  'DeepSeek V4 Pro 0813 (Max)': ['down', 1, '梁子要加油啊'],
  'DeepSeek V4 Flash 0731 (Max)': ['down', 3, '看看GLM Flash？'],
  'Qwen 3.8 Max (Max)': ['down', 1, '纯属骗钱'],
  'Qwen 3.8 Flash (xHigh)': ['down', 4, '一个任务花了¥20！'],
  'Gemini 3.7 Flash (high)': ['up', 1, '你就说快不快吧'],
  'GLM 5.3 Flash (Max)': ['up', 2, '真便宜啊'],
  'GLM 5.3 (Max)': ['down', 1, '理解在线干活拉胯'],
  'GPT-5.6 Sol (Max)': ['up', 2, '好好学学Ultra'],
  'GPT-5.6 Sol (xHigh)': ['up', 1, '知道你要干啥吧？'],
  'GPT-5.6 Sol (high)': ['down', 1, '你想干啥？'],
  'GPT-5.6 Sol (Medium)': ['down', 2, '你想干啥？？'],
  'GPT-5.6 Sol (Light)': ['down', 3, '你想干啥？？？'],
  'GPT-5.5 (xHigh)': ['down', 5, '你不喜欢Sol？'],
  'LongCat 2.0 (high)': ['down', 3, '我外卖到哪了？'],
  'MiniMax M3 (high)': ['down', 3, '你还是老实的做视频吧'],
  'Grok 4.6 (xHigh)': ['up', 1, '平庸的中等生'],
  'Claude Sonnet 5 (Ultra)': ['up', 1, '感觉不值得'],
  'Claude Opus 4.8 (Ultra)': ['down', 5, '你不喜欢Opus5？'],
  'MiMo 2.5 Pro (high)': ['down', 1, '小爱同学…'],
  'Gemini 3.6 Flash (high)': ['down', 1, '你就说快不快吧'],
  'Doubao Seed Evolving (Max)': ['down', 1, '给你一个最直白的'],
  'Gemini 3.1 Pro (high)': ['down', 3, '昔日荣光'],
  'Claude Opus 4.8 (Max)': ['down', 5, '你不喜欢Opus5？'],
  'MuseSpark 1.3 Contributor (xHigh)': ['up', 1, '四舍五入约等于不要钱'],
  'Gemini 3.8 Flash (high)': ['up', 1, '更新了版本号错误的问题'],
  'Omen Alpha (Max)': ['up', 1, '看起来好像很厉害？'],
  'GPT-6 Astra (Ultra)': ['mixed', 4, '任何订阅都能用/太费太贵', '▲▲▽▽', 0],
};
for (const work of visibleWorks) {
  const modelKey = stripCreationDate(work.model).replace(/ #\d+$/, '');
  const expected = expectedRecommendations[modelKey];
  const recommendation = SITE.personalRecommendationFor(work);
  if (!expected) {
    check(recommendation === null, `${work.id}: unlisted model must not receive a personal recommendation`);
    continue;
  }
  check(recommendation.direction === expected[0] && recommendation.count === expected[1] && recommendation.reason === expected[2], `${work.id}: personal recommendation mismatch`);
  check(recommendation.symbols === (expected[3] || (expected[0] === 'up' ? '▲' : '▽').repeat(expected[1])) && recommendation.sortValue === (expected[4] ?? (expected[0] === 'up' ? expected[1] : -expected[1])), `${work.id}: recommendation symbols or sort value mismatch`);
}
const searchKimi3 = WORKS.find(w => w.id === 'KimiK3(Max)V3');
check(SITE.modelMatches(searchKimi3, 'kimi k3 max #3'), 'Model search must ignore case, spaces, and display punctuation');
check(SITE.modelMatches(searchKimi3, 'KIMI'), 'Model search must support model-family queries');
check(!SITE.modelMatches(searchKimi3, 'GLM 5.3'), 'Model search must not match unrelated models');
check(SITE.modelMatches(searchKimi3, ''), 'An empty model query must restore every work');
check(typeof SITE.modelGapComparisons === 'function' && typeof SITE.modelGapBlock === 'function' && typeof SITE.modelGapMatches === 'function', 'SITE must expose the curated cross-model comparison API');
const modelGaps = SITE.modelGapComparisons();
check(modelGaps.length === 2, 'The curated model-gap section must contain exactly two comparisons');
check(modelGaps[0]?.left?.id === 'Opus5Ultra-WebGL2' && modelGaps[0]?.middle?.id === 'Hy4Preview(high)V2' && modelGaps[0]?.right?.id === 'DoubaoSeedEvolving(Max)V1', 'The first model-gap comparison must contain Claude Opus 5, the higher-scoring Hy 4 one-line run, and Doubao');
check(modelGaps[1]?.left?.id === 'Opus5Ultra-TasksAssignedByOpus5' && modelGaps[1]?.middle?.id === 'Hy4Preview(high)V2-TasksAssignedByOpus5' && modelGaps[1]?.right?.id === 'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5', 'The second model-gap comparison must contain Claude Opus 5, the higher-scoring Hy 4 detailed run, and Doubao');
check(SITE.modelGapMatches(modelGaps[0], 'Opus') && SITE.modelGapMatches(modelGaps[0], 'Hy 4 Preview') && SITE.modelGapMatches(modelGaps[0], 'Doubao') && !SITE.modelGapMatches(modelGaps[0], 'Kimi'), 'Curated comparisons must follow the global model-name search');
const modelGapHtml = modelGaps.map(SITE.modelGapBlock).join('');
for (const id of ['Opus5Ultra-WebGL2', 'Hy4Preview(high)V2', 'DoubaoSeedEvolving(Max)V1', 'Opus5Ultra-TasksAssignedByOpus5', 'Hy4Preview(high)V2-TasksAssignedByOpus5', 'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5']) {
  check(modelGapHtml.includes(`data-score-id="${id}"`), `${id} must render its existing score trigger in the curated comparison`);
  check(modelGapHtml.includes(WORKS.find(w => w.id === id).shot), `${id} must render its existing screenshot in the curated comparison`);
}
check(typeof SITE.effortComparisonWorks === 'function' && typeof SITE.effortDocumentWorks === 'function' && typeof SITE.effortComparisonBlock === 'function' && typeof SITE.effortComparisonMatches === 'function', 'SITE must expose both six-way reasoning-effort comparison APIs');
const effortWorks = SITE.effortComparisonWorks();
check(JSON.stringify(effortWorks.map(work => work.id)) === JSON.stringify(['GPT5.6SolUltra-WebGL2', 'GPT5.6Sol(Max)V1', 'GPT5.6Sol(xhigh)V3', 'GPT5.6Sol(high)V1', 'GPT5.6Sol(Medium)V1', 'GPT5.6Sol(Light)V1']), 'The reasoning-effort comparison must preserve Ultra #1, Max, xHigh #3, high, Medium, and Light');
check(SITE.effortComparisonMatches(effortWorks, 'GPT-5.6 Sol') && SITE.effortComparisonMatches(effortWorks, 'xhigh') && !SITE.effortComparisonMatches(effortWorks, 'Kimi'), 'The reasoning-effort comparison must follow model-name search filtering');
const effortHtml = SITE.effortComparisonBlock(effortWorks);
for (const work of effortWorks) {
  check(effortHtml.includes(`data-score-id="${work.id}"`) && effortHtml.includes(work.shot), `${work.id} must render its score trigger and screenshot in the six-way comparison`);
}
check((effortHtml.match(/in Codex/g) || []).length === 6 && !effortHtml.includes('中转站'), 'The revised six-way comparison must show the six requested Codex runs');
const effortDocumentWorks = SITE.effortDocumentWorks();
check(JSON.stringify(effortDocumentWorks.map(work => work.id)) === JSON.stringify(['GPT5.6SolUltra-TasksAssignedByOpus5', 'GPT5.6Sol(Max)V1-TasksAssignedByOpus5', 'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5', 'GPT5.6Sol(high)V1-TasksAssignedByOpus5', 'GPT5.6Sol(Medium)V1-TasksAssignedByOpus5', 'GPT5.6Sol(Light)V1-TasksAssignedByOpus5']), 'The detailed-spec effort comparison must preserve Ultra, Max, xHigh, high, Medium, and Light');
const effortDocumentHtml = SITE.effortComparisonBlock(effortDocumentWorks, 'document');
for (const work of effortDocumentWorks) check(effortDocumentHtml.includes(work.shot) && effortDocumentHtml.includes(`data-score-id="${work.id}"`), `${work.id} must render in the detailed-spec six-way comparison`);
check((effortDocumentHtml.match(/effort\.sameDocument/g) || []).length === 6, 'Detailed effort cards must use the detailed-spec caption');
check(typeof SITE.pairCollection === 'function', 'SITE must expose the collapsible same-model comparison renderer');
const featuredPairs = SITE.displayPairs();
const collapsedPairs = SITE.pairCollection(featuredPairs, false);
check(!collapsedPairs.includes('pair-archive') && (collapsedPairs.match(/class="pair"/g) || []).length === 6, 'All six featured same-model comparisons must render at the same level without a special first card');
check(!read('assets/site.css').includes('.pairs#pairList>.pair:first-child'), 'The first featured comparison must not span both columns');
check((collapsedPairs.match(/pair-score-gain/g) || []).length === 6 && collapsedPairs.includes('pair.scoreGain'), 'All six featured comparisons must disclose the directional detailed-spec score gain');
const collapsedGallery = SITE.tieredGallery(visibleWorks.filter(work => work.group === 'A'), false);
check(collapsedGallery.includes('tier-archive') && !collapsedGallery.includes('<details class="tier-archive" open'), 'Entry previews must keep Tier 0 and Tier 1 visible by default');
check(collapsedGallery.indexOf('tier tier-0') < collapsedGallery.indexOf('tier tier-1') && collapsedGallery.indexOf('tier tier-1') < collapsedGallery.indexOf('<details class="tier-archive"'), 'Tier 0 must precede Tier 1 outside the collapsed archive');
check(SITE.tieredGallery(visibleWorks.filter(work => work.group === 'A'), true).includes('<details class="tier-archive" open'), 'Active model search must expand the remaining preview tiers');
for (const [page, language] of [[zhHome, 'Chinese'], [enHome, 'English']]) {
  check(page.includes('id="modelSearchInput"') && page.includes('id="modelSearchClear"') && page.includes('id="modelSearchStatus"'), `${language} home must include the global model-search controls`);
  check(page.includes('role="search"') && page.includes('aria-live="polite"'), `${language} model search must expose search and live-status semantics`);
  check(page.includes('S.modelMatches') && page.includes('model-search-empty'), `${language} home must filter all rendered work surfaces and show an empty state`);
  const navStart = page.indexOf('<nav class="nav">');
  const navEnd = page.indexOf('</nav>', navStart);
  const searchStart = page.indexOf('id="modelSearch"');
  const heroStart = page.indexOf('<header class="hero">');
  const heroEnd = page.indexOf('</header>', heroStart);
  check(searchStart > navStart && searchStart < navEnd, `${language} model search must live inside the sticky navigation`);
  check(!(searchStart > heroStart && searchStart < heroEnd), `${language} hero must no longer contain the model search`);
  const rulesStart = page.indexOf('class="score-rules"');
  check(!page.includes('effort-caveat') && !page.includes('ULTRA ≠ MAX'), `${language} must remove the Ultra notice box`);
  const modelGapStart = page.indexOf('id="modelGapComparisons"');
  const tableStart = page.indexOf('class="tablewrap"');
  check(modelGapStart > rulesStart && modelGapStart < tableStart && page.includes('id="modelGapList"'), `${language} model-gap section must sit between the score rules and the table`);
  check(page.includes('S.modelGapComparisons') && page.includes('S.modelGapMatches'), `${language} model-gap section must participate in global search filtering`);
  check(page.indexOf('<section id="table"') < page.indexOf('<section id="pairs"'), `${language} total table must appear before the same-model comparison`);
  const effortStart = page.indexOf('id="solEffortComparison"');
  check(effortStart > tableStart && effortStart < page.indexOf('<section id="pairs"') && page.includes('id="solEffortList"') && page.includes('id="solEffortDocumentList"') && (page.match(/class="effort-run-scroll"/g) || []).length === 2, `${language} both six-way reasoning-effort comparisons must sit below the table and remain in single-row scroll frames`);
  check(page.includes('S.effortComparisonWorks') && page.includes('S.effortDocumentWorks') && page.includes('S.effortComparisonMatches') && page.includes('S.effortComparisonBlock'), `${language} both six-way reasoning-effort comparisons must participate in global search filtering`);
}
check(zhHome.includes('Claude Opus 5 (Ultra) ｜ Hy 4 Preview (high) ｜ Doubao Seed Evolving (Max)') && enHome.includes('Claude Opus 5 (Ultra) ｜ Hy 4 Preview (high) ｜ Doubao Seed Evolving (Max)'), 'Both languages must title the curated comparison with the three requested models');
check(zhHome.includes('各自得分更高的 #2') && enHome.includes('higher-scoring #2 run'), 'Both curated comparison introductions must disclose that Hy 4 uses its higher-scoring #2 runs');
check(zhHome.includes('同一个 GPT-5.6 Sol，六档推理强度') && enHome.includes('One GPT-5.6 Sol across six reasoning levels'), 'Both languages must title the six-way reasoning-effort comparison');
check(!zhHome.includes('不能用来证明的：模型能力排序') && !zhHome.includes('Claude Fable 5 (Max) 仍没有文档版') && !zhHome.includes('思考档位说明：'), 'Chinese method section must remove the three requested explanatory paragraphs');
check(!enHome.includes('What it cannot demonstrate: an overall ranking of model capability') && !enHome.includes('Claude Fable 5 (Max) still has no specification-based version') && !enHome.includes('Reasoning-level note:'), 'English method section must remove the corresponding three explanatory paragraphs');
check(enHome.includes("works.length===1?'entry':'entries'") && enHome.includes("pairs.length===1?'comparison':'comparisons'"), 'English live search status must use singular nouns for one result');
check(zhHome.includes('<th data-k="model">模型</th><th data-k="tier">梯队</th><th data-k="score" class="n">得分</th><th data-k="environment">环境</th>\n      <th data-k="recommendation">推荐</th><th>理由</th><th data-k="tech">渲染</th><th data-k="lines">行数(大小)</th>'), 'Chinese table must use the requested Model, Tier, Score, Environment, Pick, Reason, Renderer, Lines/Size order');
check(enHome.includes('<th data-k="model">Model</th><th data-k="tier">Tier</th><th data-k="score" class="n">Score</th><th data-k="environment">Environment</th>\n      <th data-k="recommendation">Pick</th><th>Reason</th><th data-k="tech">Renderer</th><th data-k="lines">Lines (Size)</th>'), 'English table must mirror the requested column order');
for (const page of [zhHome, enHome]) {
  check(!page.includes('data-k="nfeat"') && !page.includes('data-k="weight"'), 'Total table must remove Feature Count and Weight columns');
  check(!page.includes('w.nfeat') && !page.includes("w.weight==='heavy'"), 'Table row renderer must not emit removed Feature Count or Weight cells');
  check(page.includes('S.tableRows(works.filter(w=>w.group===tableGroup),sk,sd,') && page.includes('w.personal.symbols'), 'Table rows must render family-level personal recommendations');
  check(page.includes('S.modelCell(w)') && page.includes('S.codeSizeCell(w)') && !page.includes('>运行 →</a>') && !page.includes('>Run →</a>'), 'Model names must open entries and replace the old Action column');
  check(page.includes('w.personal.symbols') && !page.includes("w.personal.direction==='up'?'👍':'👎'"), 'Recommendation cells must use the normalized triangle-symbol string instead of thumb emoji');
}

check(zhHome.includes("0:'T0',1:'T1',2:'T2',3:'T3'"), 'Chinese table must use T0–T3 while preserving other tier labels');
for (const page of [zhHome,enHome]) {
  const table = page.slice(page.indexOf('<table id="tbl">'),page.indexOf('</table>',page.indexOf('<table id="tbl">'))+8);
  check(!/data-k="(?:bytes|group)"/.test(table) && table.includes('data-k="lines"'), 'Lines and size must share one sortable column while Brief stays hidden');
  check((page.match(/role="tab"/g)||[]).length === 2 && page.includes('role="tablist"') && page.includes('role="tabpanel"'), 'Both pages must expose two prompt-format tabs and their table panel');
  check((table.match(/<th[ >]/g)||[]).length === 9, 'Revised table must have nine columns');
  check(table.indexOf('data-k="lines"') < table.indexOf('data-price-sort') && table.indexOf('data-k="environment"') < table.indexOf('data-price-sort'), 'Price must be the final column');
  check(table.includes(') $/M</th>'), 'Both price headings must visibly include the dollar symbol');
  check((table.match(/data-price-sort=/g)||[]).length === 3, 'Each price component must be independently sortable');
  check(page.includes('colspan="9"') && page.includes('S.priceCell(w)') && page.includes('assets/prices.js'), 'Rows, empty state and price script must be synchronized');
  check(page.includes('button.dataset.priceSort') && page.includes('tbl(searchWorks())'), 'Price sorting must preserve active model search');
  check(page.includes('2026-09-03') && page.includes('$0.90 / $4.47 / $0.18') && page.includes('OpenRouter'), 'Price notes must disclose the update date, Doubao estimate, and OpenRouter exception');
  for (const match of page.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
}

check(zhHome.includes('其余暂时留空') && enHome.includes('all others remain blank for now'), 'Both table introductions must explain the intentionally partial recommendation list');
check(siteSource.includes('Fast, reliable, and expensive') && siteSource.includes('Understanding is online; execution falls flat'), 'Personal recommendation reasons must include English translations');
check(cssSource.includes('.table-personal-rec.is-up{color:var(--good)}') && cssSource.includes('.table-personal-rec.is-down{color:var(--bad)}'), 'Recommendation triangles must use distinct positive and negative colors');
check(!zhHome.includes('唯一的变量就是需求形式') && !enHome.includes('only variable between the two groups'), 'Home copy must not claim all 22 pairs differ only by brief format');
check(zhHome.includes('文档版提升最大的 6 组') && zhHome.includes('详细文档</span> − <span style="color:var(--A)">一句话') && enHome.includes('The 6 Largest Detailed-Spec Gains') && enHome.includes('detailed specification</span> − <span style="color:var(--A)">one-line prompt'), 'Both pair introductions must explain the directional top-six selection');
check(zhHome.includes('不能单凭筛选后的六组证明因果') && enHome.includes('not causal proof on their own'), 'Both pair introductions must disclose the selected-case evidence limit');
check(!zhHome.includes('14 组严格对照') && !enHome.includes('14 strict pairs'), 'Paired statistics must not be described as uniformly strict controls');
check(zhHome.includes('第二梯队扣 3 分，第三梯队扣 6 分') && enHome.includes('Tier 2 receives −3, Tier 3 receives −6'), 'Both home pages must publish the current human-experience tier deductions');
check(zhHome.includes('基础 100 分 + 超额卫星 3 分 + 其他彗星 3 分') && zhHome.includes('理论最高分为 106') && zhHome.includes('哈雷彗星仍单独计 3 分'), 'Chinese scoring rules must explain the 100+3+3 structure and separate Halley score');
check(enHome.includes('100 Base + 3 Extra Moons + 3 Other Comets') && enHome.includes('the theoretical maximum is 106') && enHome.includes('Halley’s Comet remains a separate 3-point item'), 'English scoring rules must explain the 100+3+3 structure and separate Halley score');
check(zhHome.includes('id="aAll">48') && enHome.includes('id="aAll">48') && zhHome.includes('id="bAll">40') && enHome.includes('id="bAll">40') && zhHome.includes('id="tAll">88') && enHome.includes('id="tAll">88'), 'Both home pages must publish 48/40 and 88-entry visible counts before JavaScript runs');
check(zhHome.includes('一句话组 48 件和文档组 40 件') && enHome.includes('prefer the 29 paired results over treating all 48 one-line and 40 detailed-spec works'), 'Both full summaries must use the current paired and group counts');
check(zhHome.includes('29 组同模型') && enHome.includes('29 same-model') && zhHome.includes('51.86 / 70') && enHome.includes('51.86 / 70') && zhHome.includes('31.74 / 36') && enHome.includes('31.74 / 36'), 'Both home pages must publish the current V3 29-pair statistics');
check(zhHome.includes('第一梯队只代表主观分组，不会自动成为标杆') && enHome.includes('Tier 1 is only a subjective grouping and does not automatically confer benchmark status'), 'Both home pages must separate subjective Tier 1 placement from benchmark status');
check(zhHome.includes('仅 Claude Opus 5 (Ultra) 经单独确认标为') && enHome.includes('Only Claude Opus 5 (Ultra) has been separately designated') && i18nSource.includes("'benchmark.recommend': '含标杆 · 重点推荐'") && i18nSource.includes("'benchmark.recommend': 'Includes benchmarks · Recommended'"), 'Both languages must present Claude Opus 5 (Ultra) as the only benchmark');
check(zhHome.includes('悬停可查看证据评分与分项') && enHome.includes('hover to view the Evidence Score and breakdown'), 'Both home pages must explain that benchmark scores are available on hover');
check(zhHome.includes('两组非标杆作品的最终分均需大于等于 95') && enHome.includes('entries in both groups turn green only at 95 or higher'), 'Both home pages must publish the shared inclusive 95-point green threshold');
for (const id of referenceIds) {
  const work = WORKS.find(item => item.id === id);
  const score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work);
  const visibleText = cell.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tip = SITE.scoreTipHtml(work, score);
  check(cell.includes('⚑') && cell.includes('<button') && cell.includes('score-trigger') && cell.includes('data-score-id'), `${id}: benchmark score cell must remain a gold flag button with a tooltip trigger`);
  check(!/\d/.test(visibleText), `${id}: benchmark score cell must not render the numeric score directly`);
  check(tip.includes(`${score.total}<i>/106</i>`) && tip.includes('score-tip-grid') && tip.includes('is-reference'), `${id}: benchmark tooltip must expose its score and breakdown`);
}
for (const id of ['GPT5.6SolUltra-WebGL2', 'Fable5Max-WebGL2']) {
  const work = SITE.byId(id);
  const score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work);
  check(!SCORES[id].reference && cell.includes(`>${score.total}<`) && !cell.includes('score-benchmark') && !cell.includes('⚑'), `${id}: former benchmark must render its ordinary numeric Evidence Score`);
}
const kimi2ScoreCell = SITE.scoreCell(SITE.byId('KimiK3(Max)V2'));
check(!SCORES['KimiK3(Max)V2'].reference && kimi2ScoreCell.includes('80') && kimi2ScoreCell.includes('<button'), 'Kimi K3 #2 one-line must be Tier 2 and show its numeric evidence score instead of a benchmark flag');
const fableThreeScoreCell = SITE.scoreCell(SITE.byId('Fable5Max-Three'));
check(!SCORES['Fable5Max-Three'].reference && fableThreeScoreCell.includes('87') && fableThreeScoreCell.includes('<button'), 'Claude Fable 5 #1 must show its numeric evidence score instead of a benchmark flag');
check(!SITE.card(SITE.byId('Fable5Max-Three')).includes('is-benchmark'), 'Claude Fable 5 #1 card must not retain benchmark presentation');
check(i18nSource.includes("'score.referenceAria': '{name}，标杆，证据评分 {score} 分，查看分项得分'") && i18nSource.includes("'score.referenceAria': '{name}, benchmark, Evidence Score {score}. View score breakdown.'"), 'Benchmark tooltip triggers must expose their scores to assistive technology in both languages');
check(!siteSource.includes("pair.featuredScoreNote', { a:"), 'Featured comparison must not expose the benchmark score');
check(zhSpec.includes('Claude Opus 5 (Ultra)') && enSpec.includes('Claude Opus 5 (Ultra)'), 'Specification author must be labeled Claude Opus 5 (Ultra) in both languages');
check(!zhSpec.includes('Claude Opus 5 (Max)') && !enSpec.includes('Claude Opus 5 (Max)'), 'Specification author must not be mislabeled as Claude Opus 5 (Max)');
for (const stale of ['Flash 用时', 'Pro 仅用', 'Flash 折算', 'Flash 执行', 'Flash Token', 'Flash 最终', 'Flash/Pro']) {
  check(!zhHome.includes(stale), `Chinese static copy still uses bare model shorthand: ${stale}`);
}
for (const stale of ['Flash took', 'Pro took', 'Flash effective', 'Flash elapsed', 'Flash token', 'Flash final', 'Flash/Pro']) {
  check(!enHome.includes(stale), `English static copy still uses bare model shorthand: ${stale}`);
}
for (const page of [zhHome, enHome]) check(!page.includes('DeepSeek V4 Pro (Max)'), 'Static home copy must not mention the retired DeepSeek V4 Pro name');
check((zhHome.match(/class="cost-token-case cost-plan-case"/g) || []).length === 1 && (enHome.match(/class="cost-token-case cost-plan-case"/g) || []).length === 1, 'Both languages must include exactly one GLM Coding Lite vs Claude Pro allowance case');
check(zhHome.includes('整整一周额度') && zhHome.includes('一个 5 小时额度内') && zhHome.includes('¥118') && zhHome.includes('$20'), 'Chinese cost case must preserve the supplied plan prices and allowance record');
check(enHome.includes('the full weekly allowance') && enHome.includes('within one five-hour window') && enHome.includes('¥118') && enHome.includes('$20'), 'English cost case must preserve the supplied plan prices and allowance record');
for (const page of [zhHome, enHome]) {
  check(page.includes('view' + (page === enHome ? '.en' : '') + '.html?w=GLM5.3Flash(Max)V1-TasksAssignedByOpus5') && page.includes('view' + (page === enHome ? '.en' : '') + '.html?w=Opus5Ultra-TasksAssignedByOpus5'), 'The new allowance case must link both detailed-spec works');
  check(!page.includes('同一份文档，少用 Token 也未必更省') && !page.includes('Less Token use does not necessarily mean lower cost'), 'The removed DeepSeek Flash/Pro cost case must stay absent');
}
check(zhHome.includes('已收录的 Claude Fable 5 (Max) #1') && enHome.includes('included Claude Fable 5 (Max) #1 entry'), 'Fable Three.js footer reference must include its #1 run number');

const stats = SITE.scoreStats();
close(stats.maxima.coverage + stats.maxima.execution, 106, 'Score maxima');
check(stats.maxima.coverage === 70 && stats.maxima.execution === 36 && stats.maxima.total === 106, 'Max definition must be 70 coverage + 36 execution = 106, including both three-point bonuses');
check(stats.maxima.final === 109, 'Tier 0 final ceiling must be separately defined as 109');
check(stats.pairedSummary.n === 29, 'Paired statistics must use 29 visible pairs');
close(stats.pairedSummary.coverage.a, 51.86034482758621, 'Paired a coverage mean');
close(stats.pairedSummary.coverage.b, 62.77931034482758, 'Paired b coverage mean');
check(JSON.stringify(stats.pairedSummary.coverage.outcomes) === JSON.stringify({"improve":25,"tie":1,"decline":3}), 'coverage paired outcomes must match the evidence');
close(stats.pairedSummary.execution.a, 30.53390804597701, 'Paired a execution mean');
close(stats.pairedSummary.execution.b, 31.735632183908038, 'Paired b execution mean');
check(JSON.stringify(stats.pairedSummary.execution.outcomes) === JSON.stringify({"improve":16,"tie":3,"decline":10}), 'execution paired outcomes must match the evidence');
close(stats.pairedSummary.exact.a, 78.46321839080461, 'Paired a exact mean');
close(stats.pairedSummary.exact.b, 89.30022988505749, 'Paired b exact mean');
check(JSON.stringify(stats.pairedSummary.exact.outcomes) === JSON.stringify({"improve":24,"tie":1,"decline":4}), 'exact paired outcomes must match the evidence');

const EXPECTED_WHOLE_GROUP = {
  "all": {
    "a": [
      48,
      52.036249999999974,
      31.215625000000014,
      79.68937499999998
    ],
    "b": [
      40,
      61.818,
      30.538750000000004,
      85.84208333333332
    ]
  },
  "withoutReferences": {
    "a": [
      47,
      51.78170212765956,
      31.113829787234057,
      79.25723404255318
    ],
    "b": [
      40,
      61.818,
      30.538750000000004,
      85.84208333333332
    ]
  },
  "withoutTier4": {
    "a": [
      47,
      52.384680851063806,
      31.42730496453902,
      80.1736879432624
    ],
    "b": [
      37,
      62.48972972972972,
      31.85810810810811,
      89.82927927927926
    ]
  },
  "withoutReferencesOrTier4": {
    "a": [
      46,
      52.13217391304346,
      31.32789855072465,
      79.74268115942027
    ],
    "b": [
      37,
      62.48972972972972,
      31.85810810810811,
      89.82927927927926
    ]
  }
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
  const coverage = score.parts.features + score.parts.orbit + score.parts.moons + score.parts.moonBonus + score.parts.cometBonus + score.parts.independence + score.parts.halley;
  const execution = score.parts.correctness + score.parts.interaction;
  return { group: work.group, tier: work.tier, id: work.id, final: score.total, exact: score.exact.toFixed(2), coverage: coverage.toFixed(2), execution: execution.toFixed(2), fatal: score.fatal || '—', reference: score.reference ? 'yes' : '' };
}).sort((a, b) => a.group.localeCompare(b.group) || b.final - a.final || a.id.localeCompare(b.id));

console.log('\nEvidence Score V3 — final score table');
console.table(rows);
const p = stats.pairedSummary;
console.log(`Paired means (n=${p.n}): coverage A ${p.coverage.a.toFixed(4)} /70, B ${p.coverage.b.toFixed(4)} /70, delta ${(p.coverage.b - p.coverage.a).toFixed(4)}`);
console.log(`Paired means (n=${p.n}): execution A ${p.execution.a.toFixed(4)} /36, B ${p.execution.b.toFixed(4)} /36, delta ${(p.execution.b - p.execution.a).toFixed(4)}`);
console.log(`Outcomes: final ${p.exact.outcomes.improve}/${p.exact.outcomes.tie}/${p.exact.outcomes.decline} improve/tie/decline; coverage ${p.coverage.outcomes.improve}/${p.coverage.outcomes.tie}/${p.coverage.outcomes.decline}; execution ${p.execution.outcomes.improve}/${p.execution.outcomes.tie}/${p.execution.outcomes.decline}`);
console.log(`Mean exact post-cap score: A ${p.exact.a.toFixed(4)}, B ${p.exact.b.toFixed(4)}, delta ${(p.exact.b - p.exact.a).toFixed(4)}`);
console.log('\nWhole-group sensitivity (coverage / execution / exact)');
for (const [label, groups] of Object.entries(stats.wholeGroup)) {
  const format = group => `n=${group.n} ${group.coverage.toFixed(2)} / ${group.execution.toFixed(2)} / ${group.exact.toFixed(2)}`;
  console.log(`${label}: A ${format(groups.a)}; B ${format(groups.b)}`);
}
console.log('Sensitivity identifiers: references = ' + referenceIds.join(', '));
console.log('Sensitivity identifiers: Tier 4 = ' + visibleWorks.filter(w => w.tier === 4).map(w => w.id).join(', '));
console.log('\nScore validation passed: 108 audited records, 88 visible works, V3 fields/formula, canonical metadata, Tier 0, pairs, sensitivity, evidence max=106, and Tier 0 final max=109.');
