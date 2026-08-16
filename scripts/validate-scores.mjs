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
  'GLM5.3(Max)V1-TasksAssignedByOpus5': 'GLM 5.3 (Max) #1',
  'GLM5.3(Max)V2-TasksAssignedByOpus5': 'GLM 5.3 (Max) #2',
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
  'Gemini3.6Flash(high)V0': 'Gemini 3.6 Flash (high)',
  'Gemini3.6Flash-TasksAssignedByOpus5': 'Gemini 3.6 Flash (high)',
  'Gemini3.7Flash(high)V1': 'Gemini 3.7 Flash (high)',
  'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': 'Gemini 3.7 Flash (high)',
  'Gemini_3_5_flash_high': 'Gemini 3.5 Flash (high)',
  'Grok4.5': 'Grok 4.5 (high)',
  'Grok4.6(xhigh)V1': 'Grok 4.6 (xHigh)',
  'Hy3-TasksAssignedByOpus5': 'Hy 3 (high)',
  'Hy3': 'Hy 3 (high)',
  'KimiK3Max-TasksAssignedByOpus5': 'Kimi K3 (Max) #1',
  'KimiK3Max': 'Kimi K3 (Max) #1',
  'KimiK3(Max)V2-TasksAssignedByOpus5': 'Kimi K3 (Max) #2',
  'KimiK3(Max)V2': 'Kimi K3 (Max) #2',
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
  'GLM5.2Max': 53.9, 'GLM5.3(Max)V1': 82.5, 'GLM5.3(Max)V2': 81.6,
  'GLM5.3(Max)V1-TasksAssignedByOpus5': 79.4, 'GLM5.3(Max)V2-TasksAssignedByOpus5': 81.5,
  'GLM_5_1_high-1': 43.95, 'GPT5.6SolMax': 81.4,
  'GPT5.6SolUltra-WebGL2': 94.2, 'GPT5.6SolUltra': 81.4, 'GPT5.6TerraUltra-Three': 68.4,
  'GPT_5_5_xhigh': 71.8, 'Gemini_3_5_flash_high': 78.9, 'Grok4.5': 67.55, 'Grok4.6(xhigh)V1': 70.6, 'Hy3': 51.61,
  'KimiK3Max': 80.5, 'KimiK3(Max)V2': 82.55, 'LongCat2.0': 36.66, 'Mimo_2_5_Pro_high-1': 42.42,
  'MiniMax_M3_thinking-1': 51.17, 'Opus5Ultra-WebGL2': 97.6, 'Opus_4_8_Max': 89.5,
  'Qwen3.7Max': 57.57, 'Qwen3.8MaxV2': 44.2, 'Qwen3.8Max-inQoder': 49.16,
  'Qwen3.8MaxV1-inQoder': 43.03, 'Qwen3.8Max(Max)V1': 54, 'Qwen3.8Max(Max)V2': 63.05,
  'Qwen3.8Max(Max)V3': 72.95, 'Sonnet5Ultra': 84.5,
  'Opus5Ultra-TasksAssignedByOpus5': 97.6, 'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5': 83.9,
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5': 60, 'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5': 79.75,
  'DeepSeek-V4-Pro-0813-V1': 68.15,
  'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': 89.6,
  'DeepSeekV4Pro0813(Max)V2': 75.65,
  'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': 83.85,
  'DeepSeekProMax-TasksAssignedByOpus5': 79.85,
  'GLM5.2Max-TasksAssignedByOpus5': 78.05, 'GPT5.5xHigh-TasksAssignedByOpus5': 92.4,
  'GPT5.6LunaMax-TasksAssignedByOpus5': 80.8, 'GPT5.6SolUltra-TasksAssignedByOpus5': 97.6,
  'GPT5.6TerraUltra-TasksAssignedByOpus5': 95.2, 'Gemini3.1Pro-TasksAssignedByOpus5': 77.1,
  'Gemini3.5Flash-TasksAssignedByOpus5': 74.05, 'Gemini3.6Flash(high)V0': 37.25, 'Gemini3.6Flash-TasksAssignedByOpus5': 80.65,
  'Gemini3.7Flash(high)V1': 49.5, 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': 82.6,
  'Hy3-TasksAssignedByOpus5': 73.8, 'KimiK3Max-TasksAssignedByOpus5': 93.05,
  'KimiK3(Max)V2-TasksAssignedByOpus5': 92.75,
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
  'Fable5Max-Three': '0|0.4|1|1|0|1|1|1|1|1|1|1|0.5|6|1|1|5|5|4|7.5|1|0.5|1|1|0.5|-|-',
  'Fable5Max-WebGL2': '1|0.4|1|1|1|1|1|1|1|1|1|1|1|6|1|0|5|5|4|9.5|1|1|1|1|1|-|-',
  'GLM5.2Max': '0|0.4|1|1|1|1|1|0|0.5|0|0|1|1|1|1|0|5|3|5|4|1|1|1|1|1|-|-',
  'GLM5.3(Max)V1': '0|1|1|1|1|1|1|1|1|1|1|1|1|15|1|0|5|4|4.5|7.5|1|1|1|1|1|-|-',
  'GLM5.3(Max)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|7|1|1|5|4|4.5|8|1|1|1|1|1|-|-',
  'GLM5.3(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|3|1|1|1|1|1|-|-',
  'GLM5.3(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4.5|4|1|1|1|1|1|-|-',
  'GLM_5_1_high-1': '0|0.4|1|1|1|0|1|0|0.5|0|0|1|1|1|1|0|5|3|5|3|1|1|1|0|0.5|-|-',
  'GPT5.6SolMax': '0|0.4|1|0|1|1|1|1|1|1|1|1|1|7|1|0|5|5|5|6|1|1|1|1|1|-|-',
  'GPT5.6SolUltra-WebGL2': '1|1|1|1|1|1|1|1|1|1|1|1|1|14|1|0|4|5|4|9.5|1|1|1|1|1|-|-',
  'GPT5.6SolUltra': '0|0.4|1|0|1|1|1|1|1|1|1|1|1|7|1|0|5|5|5|6|1|1|1|1|1|-|-',
  'GPT5.6TerraUltra-Three': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|5|1|0|5|5|3|6|1|1|1|0|1|-|-',
  'GPT_5_5_xhigh': '0|0.4|1|1|1|0|1|1|1|1|1|1|1|9|1|1|5|5|4|2|0.5|1|0.5|0|1|-|-',
  'Gemini_3_5_flash_high': '0|0.4|1|0|1|0.4|1|1|1|1|1|1|1|10|1|0|5|4|4|7|1|1|1|1|1|-|-',
  'Grok4.5': '0|0.4|1|1|1|1|1|1|1|0.5|1|1|1|5|1|0|5|4|4|7|1|1|0.5|0|1|-|-',
  'Grok4.6(xhigh)V1': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|9|1|1|5|4|4|3.5|0.5|1|1|1|0.5|-|-',
  'Hy3': '0|0.4|0|1|1|1|1|0|0.5|0|0|1|1|1|1|0|5|3|5|6.6|1|1|0.5|1|1|-|-',
  'KimiK3Max': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|7|1|1|5|5|4|7|1|1|1|1|1|-|-',
  'KimiK3(Max)V2': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|0|5|2.5|4|6.5|1|1|1|1|0.5|-|-',
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
  'DeepSeek-V4-Pro-0813-V1': '0|0.4|1|1|1|1|1|1|1|1|1|0|1|7|1|0|5|3|4|5.5|1|1|1|1|0.5|-|-',
  'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|7.5|1|1|1|1|1|-|-',
  'DeepSeekV4Pro0813(Max)V2': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|5|1|1|5|4|3.5|6.5|1|1|1|1|0.5|-|-',
  'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|4.5|1|1|1|1|0.5|-|-',
  'DeepSeekProMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|6|0.5|1|1|0|1|-|-',
  'GLM5.2Max-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4|4|3|0.5|1|1|0|1|-|-',
  'GPT5.5xHigh-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|8|1|1|1|1|1|-|-',
  'GPT5.6LunaMax-TasksAssignedByOpus5': '0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|4|3.5|1|1|1|0|1|-|-',
  'GPT5.6SolUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|10|1|1|1|1|1|-|-',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|8.5|1|1|1|1|1|-|-',
  'Gemini3.1Pro-TasksAssignedByOpus5': '0|1|1|1|1|0|1|1|1|1|1|1|1|8|1|1|5|4|4|5.5|1|0.5|0.5|0|1|-|-',
  'Gemini3.5Flash-TasksAssignedByOpus5': '0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|1|5|2|3|4|1|1|0.5|1|1|-|-',
  'Gemini3.6Flash(high)V0': '0|0.4|0|1|1|0|1|0|0|0|0|1|1|1|1|0|5|1|4|3.5|0.5|1|0.5|1|0.5|-|-',
  'Gemini3.6Flash-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|3|4|5|1|1|0.5|1|1|-|-',
  'Gemini3.7Flash(high)V1': '0|0.4|1|1|1|1|1|0|0.5|0.5|0|1|1|1|1|0|5|3|4|4|0.5|1|1|1|0.5|-|-',
  'Gemini3.7Flash(high)V1-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|0|1|8|1|1|5|4|4|7.5|1|1|1|1|1|-|-',
  'Hy3-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|0.5|1|1|1|1|8|1|1|5|2|3|5|1|1|0.5|0|0.5|-|-',
  'KimiK3Max-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|5|5|9|1|1|1|1|0.5|-|-',
  'KimiK3(Max)V2-TasksAssignedByOpus5': '0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|5|4.5|4|8.5|1|1|1|1|0.5|-|-',
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

check(Array.isArray(WORKS) && WORKS.length === 67, `WORKS count must be 67, got ${WORKS?.length}`);
check(Object.keys(SCORES).length === 67, `SCORES count must be 67, got ${Object.keys(SCORES).length}`);
check(new Set(WORKS.map(w => w.id)).size === 67, 'WORKS IDs must be unique');
check(new Set(Object.keys(SCORES)).size === 67, 'SCORES IDs must be unique');
const workIds = [...WORKS.map(w => w.id)].sort();
const scoreIds = Object.keys(SCORES).sort();
check(JSON.stringify(workIds) === JSON.stringify(scoreIds), 'WORKS/SCORES IDs have missing or extra entries');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(CANONICAL_NAMES).sort()), 'Canonical-name ledger does not cover exactly the 67 WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_EXACT).sort()), 'Expected-score ledger does not cover exactly the 67 WORKS IDs');
check(JSON.stringify(workIds) === JSON.stringify(Object.keys(EXPECTED_AUDIT_FINGERPRINT).sort()), 'Audit fingerprint ledger does not cover exactly the 67 WORKS IDs');
check(WORKS.filter(w => w.group === 'A').length === 38, 'Audited Group A count must be 38 after adding GLM 5.3 #2');
check(WORKS.filter(w => w.group === 'B').length === 29, 'Audited Group B count must be 29 after adding both GLM 5.3 detailed runs');
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
].sort();
check(JSON.stringify([...HIDDEN_WORK_IDS].sort()) === JSON.stringify(expectedHiddenIds), 'Exactly the five Qwen Preview and four retired DeepSeek V4 Pro works must be hidden');
const visibleWorks = SITE.visibleWorks();
check(visibleWorks.length === 58, 'Visible WORKS count must be 58');
check(visibleWorks.filter(w => w.group === 'A').length === 32, 'Visible Group A count must be 32');
check(visibleWorks.filter(w => w.group === 'B').length === 26, 'Visible Group B count must be 26');
check(visibleWorks.every(w => !w.model.includes('Preview')), 'No Preview work may remain on visible site surfaces');
check(visibleWorks.every(w => !/^DeepSeek V4 Pro \(Max\)/.test(w.model)), 'No retired DeepSeek V4 Pro work may remain on visible site surfaces');
for (const id of expectedHiddenIds) check(SITE.byId(id) === undefined, id + ': direct work page lookup must stay hidden');
check(PAIR_ORDER.length === 21 && new Set(PAIR_ORDER).size === 21, 'PAIR_ORDER must contain 21 unique visible pairs');
check(!PAIR_ORDER.includes('qwen38') && !Object.hasOwn(context.window.PAIR_TITLES, 'qwen38'), 'The Preview comparison must be absent from visible pair metadata');
check(!PAIR_ORDER.includes('deepseek') && !Object.hasOwn(context.window.PAIR_TITLES, 'deepseek'), 'The retired DeepSeek V4 Pro comparison must be absent from visible pair metadata');
check(SITE.pairs().length === 21, 'Expected 21 complete visible pairs');
check(PAIR_ORDER[4] === 'kimik3' && PAIR_ORDER[5] === 'kimik3v2', 'Kimi K3 #1 and #2 must occupy comparison positions 05 and 06');
check(PAIR_ORDER[7] === 'deepseekv4pro0813' && PAIR_ORDER[8] === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #1 and #2 must occupy comparison positions 08 and 09');
check(PAIR_ORDER[9] === 'glm53v1' && PAIR_ORDER[10] === 'glm53v2', 'GLM 5.3 #1 and #2 must occupy comparison positions 10 and 11');
check(PAIR_ORDER[12] === 'qwen38max', 'The Qwen 3.8 Max pair must occupy comparison position 13');
check(PAIR_ORDER[15] === 'gemini36flash', 'Gemini 3.6 Flash must occupy comparison position 16');
check(PAIR_ORDER[17] === 'gemini37flash', 'Gemini 3.7 Flash must occupy comparison position 18 after inserting both GLM 5.3 pairs');

const referenceIds = ['Opus5Ultra-WebGL2', 'GPT5.6SolUltra-WebGL2', 'Fable5Max-WebGL2'].sort();
check(JSON.stringify(Object.entries(SCORES).filter(([, score]) => score.reference).map(([id]) => id).sort()) === JSON.stringify(referenceIds), 'Exactly the three approved references must be flagged');

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
  check(count === 67, `scores.js source key ${key} must occur exactly 67 times; duplicate/missing key detected (${count})`);
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

const grok45 = WORKS.find(w => w.id === 'Grok4.5');
const grok46 = WORKS.find(w => w.id === 'Grok4.6(xhigh)V1');
check(grok46?.group === 'A' && grok46?.tier === 3 && grok46?.pair === null, 'Grok 4.6 must be an unpaired Tier 3 one-line entry');
check(grok46?.model === 'Grok 4.6 (xHigh)' && grok46?.title === 'SOLARIS · 太阳系运动模型', 'Grok 4.6 visible naming must be canonical');
check(grok46?.bytes === 61227 && grok46?.lines === 1436 && grok46?.tech === 'Three.js' && grok46?.needsFloat === false && grok46?.msaa === true, 'Grok 4.6 source metadata must match the audited file');
check(JSON.stringify(grok46?.net) === JSON.stringify(['unpkg.com', 'fonts.googleapis.com', 'fonts.gstatic.com']), 'Grok 4.6 network dependencies must match the audited file');
for (const work of [grok45, grok46]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in build']), `${work?.id || 'Grok'} must show the exact in build tag`);
  check(SITE.environmentTag(work) === 'in build' && SITE.chips(work, null).includes('in build'), `${work?.id || 'Grok'} environment tag must render as in build`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Grok'} screenshot asset must exist`);
}
check(SITE.scoreFor(grok46).total === 71, 'Grok 4.6 must score 71 after the Tier 3 adjustment');

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
check(deepSeekPro0813?.model === 'DeepSeek V4 Pro 0813 (Max) #1' && deepSeekPro0813OneLine?.model === 'DeepSeek V4 Pro 0813 (Max) #1', 'Original DeepSeek V4 Pro 0813 runs must be numbered #1');
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
check(deepSeekPro0813V2?.model === 'DeepSeek V4 Pro 0813 (Max) #2' && deepSeekPro0813V2OneLine?.model === 'DeepSeek V4 Pro 0813 (Max) #2', 'New DeepSeek V4 Pro 0813 runs must be numbered #2');
check(deepSeekPro0813V2OneLine?.bytes === 61829 && deepSeekPro0813V2OneLine?.lines === 1387 && deepSeekPro0813V2OneLine?.tech === 'Three.js' && deepSeekPro0813V2OneLine?.needsFloat === false && deepSeekPro0813V2OneLine?.msaa === true, 'DeepSeek V4 Pro 0813 #2 one-line source metadata must match the audited file');
check(JSON.stringify(deepSeekPro0813V2OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'DeepSeek V4 Pro 0813 #2 one-line network dependencies must match the audited file');
check(deepSeekPro0813V2?.bytes === 104830 && deepSeekPro0813V2?.lines === 2423 && deepSeekPro0813V2?.tech === 'WebGL2' && deepSeekPro0813V2?.needsFloat === true && deepSeekPro0813V2?.msaa === true && deepSeekPro0813V2?.net.length === 0, 'DeepSeek V4 Pro 0813 #2 detailed source metadata must match the audited file');
for (const work of [deepSeekPro0813V2OneLine, deepSeekPro0813V2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in dsh']), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} must show the exact in dsh tag`);
  check(SITE.environmentTag(work) === 'in dsh' && SITE.chips(work, null).includes('in dsh'), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} environment tag must render as in dsh`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} screenshot asset must exist`);
}
check(SITE.scoreFor(deepSeekPro0813V2OneLine).total === 76 && SITE.scoreFor(deepSeekPro0813V2).total === 84, 'DeepSeek V4 Pro 0813 #2 evidence scores must stay at 76 and 84');
const glm53OneLine1 = WORKS.find(w => w.id === 'GLM5.3(Max)V1');
const glm53OneLine2 = WORKS.find(w => w.id === 'GLM5.3(Max)V2');
const glm53Detailed1 = WORKS.find(w => w.id === 'GLM5.3(Max)V1-TasksAssignedByOpus5');
const glm53Detailed2 = WORKS.find(w => w.id === 'GLM5.3(Max)V2-TasksAssignedByOpus5');
check(glm53OneLine1?.group === 'A' && glm53OneLine2?.group === 'A' && glm53OneLine1?.tier === 2 && glm53OneLine2?.tier === 2, 'Both GLM 5.3 one-line runs must be Tier 2');
check(glm53Detailed1?.group === 'B' && glm53Detailed2?.group === 'B' && glm53Detailed1?.tier === 3 && glm53Detailed2?.tier === 3, 'Both GLM 5.3 detailed runs must be Tier 3');
check(glm53OneLine1?.model === 'GLM 5.3 (Max) #1' && glm53Detailed1?.model === 'GLM 5.3 (Max) #1', 'GLM 5.3 V1 runs must be numbered #1');
check(glm53OneLine2?.model === 'GLM 5.3 (Max) #2' && glm53Detailed2?.model === 'GLM 5.3 (Max) #2', 'GLM 5.3 V2 runs must be numbered #2');
check(glm53OneLine1?.pair === 'glm53v1' && glm53Detailed1?.pair === 'glm53v1' && glm53OneLine2?.pair === 'glm53v2' && glm53Detailed2?.pair === 'glm53v2', 'GLM 5.3 versions must form two explicit pairs');
check(glm53OneLine1?.title === '太阳系 · Solar System 3D' && glm53OneLine2?.title === '太阳系运动模型 · Solar System', 'GLM 5.3 one-line titles must stay canonical');
check(glm53Detailed1?.title === '太阳系 · 实时运动模型' && glm53Detailed2?.title === '太阳系实时运动模型 v4', 'GLM 5.3 detailed titles must stay canonical');
check(glm53OneLine1?.bytes === 73580 && glm53OneLine1?.lines === 1700 && glm53OneLine1?.tech === 'Three.js' && glm53OneLine1?.needsFloat === true && glm53OneLine1?.msaa === true, 'GLM 5.3 #1 one-line metadata must match the audited file');
check(glm53OneLine2?.bytes === 75144 && glm53OneLine2?.lines === 1525 && glm53OneLine2?.tech === 'Three.js' && glm53OneLine2?.needsFloat === true && glm53OneLine2?.msaa === true, 'GLM 5.3 #2 one-line metadata must match the audited file');
check(JSON.stringify(glm53OneLine1?.net) === JSON.stringify(['cdn.jsdelivr.net']) && JSON.stringify(glm53OneLine2?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Both GLM 5.3 one-line runs must disclose the jsDelivr dependency');
check(glm53Detailed1?.bytes === 105974 && glm53Detailed1?.lines === 2320 && glm53Detailed1?.tech === 'WebGL2' && glm53Detailed1?.needsFloat === true && glm53Detailed1?.msaa === true && glm53Detailed1?.net.length === 0, 'GLM 5.3 #1 detailed metadata must match the audited file');
check(glm53Detailed2?.bytes === 115049 && glm53Detailed2?.lines === 2771 && glm53Detailed2?.tech === 'WebGL2' && glm53Detailed2?.needsFloat === true && glm53Detailed2?.msaa === true && glm53Detailed2?.net.length === 0, 'GLM 5.3 #2 detailed metadata must match the audited file');
for (const work of [glm53OneLine1, glm53OneLine2, glm53Detailed1, glm53Detailed2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']), `${work?.id || 'GLM 5.3'} must show the exact in Zcode tag`);
  check(SITE.environmentTag(work) === 'in Zcode' && SITE.chips(work, null).includes('in Zcode'), `${work?.id || 'GLM 5.3'} environment tag must render as in Zcode`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3'} screenshot asset must exist`);
  check(!SCORES[work.id].reference && !SITE.card(work).includes('is-benchmark'), `${work?.id || 'GLM 5.3'} must remain a scored non-benchmark`);
}
check(SITE.scoreFor(glm53OneLine1).total === 83 && SITE.scoreFor(glm53OneLine2).total === 82, 'GLM 5.3 one-line evidence scores must be 83 and 82');
check(SITE.scoreFor(glm53Detailed1).total === 79 && SITE.scoreFor(glm53Detailed2).total === 82, 'GLM 5.3 detailed evidence scores must be 79 and 82');
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
const kimi1OneLine = WORKS.find(w => w.id === 'KimiK3Max');
const kimi1Detailed = WORKS.find(w => w.id === 'KimiK3Max-TasksAssignedByOpus5');
const kimi2OneLine = WORKS.find(w => w.id === 'KimiK3(Max)V2');
const kimi2Detailed = WORKS.find(w => w.id === 'KimiK3(Max)V2-TasksAssignedByOpus5');
check(kimi1OneLine?.model === 'Kimi K3 (Max) #1' && kimi1Detailed?.model === 'Kimi K3 (Max) #1', 'Original Kimi K3 runs must be numbered #1');
check(kimi2OneLine?.model === 'Kimi K3 (Max) #2' && kimi2Detailed?.model === 'Kimi K3 (Max) #2', 'New Kimi K3 runs must be numbered #2');
check(kimi2OneLine?.group === 'A' && kimi2Detailed?.group === 'B' && kimi2OneLine?.tier === 2 && kimi2Detailed?.tier === 1, 'Kimi K3 #2 one-line must be Tier 2 while its detailed run remains Tier 1');
check(kimi2OneLine?.pair === 'kimik3v2' && kimi2Detailed?.pair === 'kimik3v2', 'Kimi K3 #2 must form its own comparison pair');
check(kimi2OneLine?.bytes === 71207 && kimi2OneLine?.lines === 1667 && kimi2OneLine?.tech === 'WebGL2' && kimi2OneLine?.needsFloat === false && kimi2OneLine?.msaa === true && kimi2OneLine?.net.length === 0, 'Kimi K3 #2 one-line source metadata must match the audited file');
check(kimi2Detailed?.bytes === 118997 && kimi2Detailed?.lines === 2635 && kimi2Detailed?.tech === 'WebGL2' && kimi2Detailed?.needsFloat === false && kimi2Detailed?.msaa === true && kimi2Detailed?.net.length === 0, 'Kimi K3 #2 detailed source metadata must match the audited file');
for (const work of [kimi2OneLine, kimi2Detailed]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Claude Cli']), `${work?.id || 'Kimi K3 #2'} must show the exact in Claude Cli tag`);
  check(SITE.environmentTag(work) === 'in Claude Cli' && SITE.chips(work, null).includes('in Claude Cli'), `${work?.id || 'Kimi K3 #2'} environment tag must render as in Claude Cli`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Kimi K3 #2'} screenshot asset must exist`);
}
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
const qwenStablePair = SITE.pairs()[12];
check(qwenStablePair?.a?.id === 'Qwen3.8Max(Max)V1' && qwenStablePair?.b?.id === 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5', 'Comparison position 13 must pair Qwen 3.8 Max #1 with its detailed run');
const gemini36OneLine = WORKS.find(w => w.id === 'Gemini3.6Flash(high)V0');
const gemini36Detailed = WORKS.find(w => w.id === 'Gemini3.6Flash-TasksAssignedByOpus5');
check(gemini36OneLine?.group === 'A' && gemini36OneLine?.tier === 3 && gemini36OneLine?.pair === 'gemini36flash', 'Gemini 3.6 Flash V0 must be the paired Tier 3 one-line entry');
check(gemini36Detailed?.group === 'B' && gemini36Detailed?.tier === 3 && gemini36Detailed?.pair === 'gemini36flash', 'Gemini 3.6 Flash detailed run must remain Tier 3 and join the new pair');
check(gemini36OneLine?.bytes === 40641 && gemini36OneLine?.lines === 1085 && gemini36OneLine?.tech === 'Three.js' && gemini36OneLine?.needsFloat === false && gemini36OneLine?.msaa === true, 'Gemini 3.6 Flash V0 source metadata must match the audited file');
check(JSON.stringify(gemini36OneLine?.net) === JSON.stringify(['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net']), 'Gemini 3.6 Flash V0 network dependencies must match the audited file');
check(JSON.stringify(gemini36OneLine?.tags) === JSON.stringify(['主动改写为幻想风格']), 'Gemini 3.6 Flash V0 must disclose its deliberate fantasy reframing');
for (const work of [gemini36OneLine, gemini36Detailed]) {
  check(work?.model === 'Gemini 3.6 Flash (high)', `${work?.id || 'Gemini 3.6 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.6 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.6 Flash'} screenshot asset must exist`);
}
check(SITE.scoreFor(gemini36OneLine).total === 37, 'Gemini 3.6 Flash V0 must score 37 after the Tier 3 adjustment');
const gemini36Pair = SITE.pairs()[15];
check(gemini36Pair?.a?.id === 'Gemini3.6Flash(high)V0' && gemini36Pair?.b?.id === 'Gemini3.6Flash-TasksAssignedByOpus5', 'Comparison position 16 must pair the two Gemini 3.6 Flash runs');
const gemini37OneLine = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1');
const gemini37Detailed = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5');
check(gemini37OneLine?.group === 'A' && gemini37OneLine?.tier === 3 && gemini37OneLine?.pair === 'gemini37flash', 'Gemini 3.7 Flash one-line run must be the paired Tier 3 entry');
check(gemini37Detailed?.group === 'B' && gemini37Detailed?.tier === 3 && gemini37Detailed?.pair === 'gemini37flash', 'Gemini 3.7 Flash detailed run must be the paired Tier 3 entry');
check(gemini37OneLine?.bytes === 86959 && gemini37OneLine?.lines === 2410 && gemini37OneLine?.tech === 'Three.js' && gemini37OneLine?.needsFloat === false && gemini37OneLine?.msaa === true, 'Gemini 3.7 Flash one-line source metadata must match the audited file');
check(JSON.stringify(gemini37OneLine?.net) === JSON.stringify(['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com']), 'Gemini 3.7 Flash one-line network dependencies must match the audited file');
check(gemini37Detailed?.bytes === 156951 && gemini37Detailed?.lines === 3967 && gemini37Detailed?.tech === 'WebGL2' && gemini37Detailed?.needsFloat === true && gemini37Detailed?.msaa === true && gemini37Detailed?.net.length === 0, 'Gemini 3.7 Flash detailed source metadata must match the audited file');
for (const work of [gemini37OneLine, gemini37Detailed]) {
  check(work?.model === 'Gemini 3.7 Flash (high)', `${work?.id || 'Gemini 3.7 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.7 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.7 Flash'} screenshot asset must exist`);
}
const gemini37Pair = SITE.pairs()[17];
check(gemini37Pair?.a?.id === 'Gemini3.7Flash(high)V1' && gemini37Pair?.b?.id === 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5', 'Comparison position 18 must pair the two Gemini 3.7 Flash runs');

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
check(!zhHome.includes('唯一的变量就是需求形式') && !enHome.includes('only variable between the two groups'), 'Home copy must not claim all 21 pairs differ only by brief format');
check(zhHome.includes('Claude Opus 4.8 是明确例外') && enHome.includes('Claude Opus 4.8 is the explicit exception'), 'Both home pages must disclose the Claude Opus 4.8 Max-to-Ultra exception');
check(!zhHome.includes('14 组严格对照') && !enHome.includes('14 strict pairs'), 'Paired statistics must not be described as uniformly strict controls');
check(zhHome.includes('第二梯队扣 2 分，第三梯队扣 5 分') && enHome.includes('Tier 2 receives −2, Tier 3 receives −5'), 'Both home pages must publish the current subjective tier deductions');
check(zhHome.includes('id="aAll">32') && enHome.includes('id="aAll">32') && zhHome.includes('id="bAll">26') && enHome.includes('id="bAll">26') && zhHome.includes('id="tAll">58') && enHome.includes('id="tAll">58'), 'Both home pages must publish 32/26 and 58-entry visible counts before JavaScript runs');
check(enHome.includes('prefer the 21 paired results over treating all 32 one-line and 26 detailed-spec works'), 'English full summary must use the current paired and group counts');
check(zhHome.includes('21 组同模型') && enHome.includes('21 same-model') && zhHome.includes('41.70 / 59.5') && enHome.includes('41.70 / 59.5') && zhHome.includes('31.58 / 40.5') && enHome.includes('31.58 / 40.5'), 'Both home pages must publish the current 21-pair statistics after adding and visually rechecking the two GLM 5.3 pairs');
check(zhHome.includes('第一梯队只代表主观分组，不会自动成为标杆') && enHome.includes('Tier 1 is only a subjective grouping and does not automatically confer benchmark status'), 'Both home pages must separate subjective Tier 1 placement from benchmark status');
check(zhHome.includes('其中三件经单独确认标为') && enHome.includes('Three have been separately designated') && i18nSource.includes("'benchmark.recommend': '含标杆 · 重点推荐'") && i18nSource.includes("'benchmark.recommend': 'Includes benchmarks · Recommended'"), 'Both languages must present Tier 1 as containing exactly three benchmarks rather than making the whole tier a benchmark');
check(zhHome.includes('悬停可查看证据评分与分项') && enHome.includes('hover to view the Evidence Score and breakdown'), 'Both home pages must explain that benchmark scores are available on hover');
check(zhHome.includes('最终分大于等于 80') && enHome.includes('final score of 80 or higher'), 'Both home pages must publish the inclusive green threshold');
for (const id of referenceIds) {
  const work = WORKS.find(item => item.id === id);
  const score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work);
  const visibleText = cell.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tip = SITE.scoreTipHtml(work, score);
  check(cell.includes('⚑') && cell.includes('<button') && cell.includes('score-trigger') && cell.includes('data-score-id'), `${id}: benchmark score cell must remain a gold flag button with a tooltip trigger`);
  check(!/\d/.test(visibleText), `${id}: benchmark score cell must not render the numeric score directly`);
  check(tip.includes(`${score.total}<i>/100</i>`) && tip.includes('score-tip-grid') && tip.includes('is-reference'), `${id}: benchmark tooltip must expose its score and breakdown`);
}
const kimi2ScoreCell = SITE.scoreCell(SITE.byId('KimiK3(Max)V2'));
check(!SCORES['KimiK3(Max)V2'].reference && kimi2ScoreCell.includes('83') && kimi2ScoreCell.includes('<button'), 'Kimi K3 #2 one-line must be Tier 2 and show its numeric evidence score instead of a benchmark flag');
const fableThreeScoreCell = SITE.scoreCell(SITE.byId('Fable5Max-Three'));
check(!SCORES['Fable5Max-Three'].reference && fableThreeScoreCell.includes('84') && fableThreeScoreCell.includes('<button'), 'Claude Fable 5 #1 must show its numeric evidence score instead of a benchmark flag');
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
check(!zhHome.includes('cost-token-case') && !enHome.includes('cost-token-case'), 'The removed DeepSeek Flash/Pro cost comparison must stay absent in both languages');
check(zhHome.includes('已收录的 Claude Fable 5 (Max) #1') && enHome.includes('included Claude Fable 5 (Max) #1 entry'), 'Fable Three.js footer reference must include its #1 run number');

const stats = SITE.scoreStats();
close(stats.maxima.coverage + stats.maxima.execution, 100, 'Score maxima');
check(stats.maxima.coverage === 59.5 && stats.maxima.execution === 40.5 && stats.maxima.total === 100, 'Max definition must be 59.5 + 40.5 = 100');
check(stats.pairedSummary.n === 21, 'Paired statistics must use 21 visible pairs');
close(stats.pairedSummary.coverage.a, 41.7, 'Paired A coverage mean');
close(stats.pairedSummary.coverage.b, 55.83809523809524, 'Paired B coverage mean');
close(stats.pairedSummary.execution.a, 30.60904761904761, 'Paired A execution mean');
close(stats.pairedSummary.execution.b, 31.58333333333333, 'Paired B execution mean');
close(stats.pairedSummary.exact.a, 68.35666666666667, 'Paired A exact-score mean');
close(stats.pairedSummary.exact.b, 82.96428571428572, 'Paired B exact-score mean');
check(JSON.stringify(stats.pairedSummary.exact.outcomes) === JSON.stringify({ improve: 16, tie: 1, decline: 4 }), 'Final paired outcomes must be 16 improve / 1 tie / 4 decline');
check(JSON.stringify(stats.pairedSummary.coverage.outcomes) === JSON.stringify({ improve: 20, tie: 1, decline: 0 }), 'Coverage outcomes must be 20 / 1 / 0');
check(JSON.stringify(stats.pairedSummary.execution.outcomes) === JSON.stringify({ improve: 12, tie: 1, decline: 8 }), 'Execution outcomes must be 12 / 1 / 8');

const EXPECTED_WHOLE_GROUP = {
  all: { a: [32, 41.543749999999996, 30.508750000000003, 68.4275], b: [26, 55.17692307692307, 29.742307692307698, 79.41923076923075] },
  withoutReferences: { a: [29, 40.16551724137932, 29.633793103448276, 65.79931034482757], b: [26, 55.17692307692307, 29.742307692307698, 79.41923076923075] },
  withoutTier4: { a: [31, 41.94838709677419, 30.777741935483874, 68.98419354838708], b: [23, 56.31739130434782, 32.002173913043485, 84.99565217391303] },
  withoutReferencesOrTier4: { a: [28, 40.564285714285724, 29.900357142857143, 66.32178571428571], b: [23, 56.31739130434782, 32.002173913043485, 84.99565217391303] },
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
console.log('\nScore validation passed: 67 audited records, 58 visible works, V2 fields/formula, canonical metadata, oracle totals, pairs, sensitivity, and max=100.');
