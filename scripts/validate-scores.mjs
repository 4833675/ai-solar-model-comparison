import fs from 'node:fs';
import vm from 'node:vm';
import { createHash } from 'node:crypto';

const read = path => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const asset = path => new URL(`../${path}`, import.meta.url);
const context = { window: {} };
context.window.window = context.window;
vm.createContext(context);
for (const file of ['assets/data.js', 'assets/scores.js', 'assets/prices.js', 'assets/site.js']) {
  vm.runInContext(read(file), context, { filename: file });
}

const { WORKS, SCORES, PAIR_ORDER, HIDDEN_WORK_IDS, WORK_CREATION_DATES, SITE } = context.window;
const HAIKU_MAX_SPEC_ID = 'Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5';
const SOL61_SPEC_ID = 'GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5';
const SOL61_XHIGH_SPEC_ID = 'GPT6.1Sol(xhigh)V1-TasksAssignedByOpus5';
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
const canonical = value => Array.isArray(value) ? value.map(canonical)
  : value && typeof value === 'object' ? Object.fromEntries(Object.keys(value).sort().map(key => [key, canonical(value[key])])) : value;
const digest = value => createHash('sha256').update(JSON.stringify(canonical(value))).digest('hex');

const CANONICAL_NAMES = {
  [SOL61_XHIGH_SPEC_ID]: 'GPT-6.1 Sol (xHigh)',
  [SOL61_SPEC_ID]: "GPT-6.1 Sol (Ultra·Max)",
  "Haiku5.5(Ultracode·Max)V1": "Claude Haiku 5.5 (Ultracode·Max)",
  "Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5": "Claude Haiku 5.5 (Ultracode·Max)",
  "Haiku5.5(Ultracode)V1": "Claude Haiku 5.5 (Ultracode·xhigh)",
  "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5": "Claude Haiku 5.5 (Ultracode·xhigh)",
  "GPT6Astra(Light)V1": "GPT-6 Astra (Light)",
  "GPT6Astra(Medium)V1-TasksAssignedByOpus5": "GPT-6 Astra (Medium)",
  "GPT6Luna(Max)V1": "GPT-6 Luna (Max)",
  "GPT6Luna(Max)V1-TasksAssignedByOpus5": "GPT-6 Luna (Max)",
  'Sonnet5.5(Max)V1': 'Claude Sonnet 5.5 (Max)',
  'MiniMaxM3.1FlashPreview(Max)V1': 'MiniMax M3.1 Flash Preview (Max)',
  'MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5': 'MiniMax M3.1 Flash Preview (Max)',
  'GPT6.1Sol(Ultra)V1': 'GPT-6.1 Sol (Ultra·Max)',

  'Opus5.5(Max)V1': 'Claude Opus 5.5 (Max)',

  'Grok4.7(xhigh)V1': 'Grok 4.7 (xHigh)',
  'Grok4.7(xhigh)V1-TasksAssignedByOpus5': 'Grok 4.7 (xHigh)',

  'MiMo2.6Flash(Unknown)V1': 'MiMo 2.6 Flash (Unknown)',
  'MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5': 'MiMo 2.6 Flash (Unknown)',
  'MiMo2.6Pro(Unknown)V1': 'MiMo 2.6 Pro (Unknown)',
  'MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5': 'MiMo 2.6 Pro (Unknown)',

  'Step5Preview(high)V1': 'Step 5 Preview (high)',
  'Step5Preview(high)V1-TasksAssignedByOpus5': 'Step 5 Preview (high)',

  'MiMoXProPreview(Unknown)V1': 'MiMo X Pro Preview (Unknown)',
  'MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5': 'MiMo X Pro Preview (Unknown)',

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
  'DoubaoSeedEvolving0827(Max)V1': 'Doubao Seed Evolving 0827 (Max)',
  'DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5': 'Doubao Seed Evolving 0827 (Max)',
  'GPT6Astra(Light)V1-TasksAssignedByOpus5': 'GPT-6 Astra (Light)',
  'Opus5(Low)V1-TasksAssignedByOpus5': 'Claude Opus 5 (Low)',
  'GPT5.6Sol(high)V1': 'GPT-5.6 Sol (high)',
  'Opus5Ultra-TasksAssignedByOpus5': 'Claude Opus 5 (Ultracode·xhigh)',
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
  'GPT5.6SolUltra-TasksAssignedByOpus5': 'GPT-5.6 Sol (Ultra·Max)',
  'GPT5.6SolUltra-WebGL2': 'GPT-5.6 Sol (Ultra·Max)',
  'GPT5.6SolUltra': 'GPT-5.6 Sol (Ultra·Max) #2',
  'GPT5.6Sol(xhigh)V1': 'GPT-5.6 Sol (xHigh) #1',
  'GPT5.6Sol(xhigh)V2': 'GPT-5.6 Sol (xHigh) #2',
  'GPT5.6Sol(xhigh)V3': 'GPT-5.6 Sol (xHigh) #3',
  'GPT5.6TerraUltra-Three': 'GPT-5.6 Terra (Ultra·Max)',
  'GPT5.6TerraUltra-TasksAssignedByOpus5': 'GPT-5.6 Terra (Ultra·Max)',
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
  'Opus5Ultra-WebGL2': 'Claude Opus 5 (Ultracode·xhigh)',
  'Opus_4_8_Max': 'Claude Opus 4.8 (Max)',
  'Opus4.8Ultra-TasksAssignedByOpus5': 'Claude Opus 4.8 (Ultracode·xhigh)',
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
  'Sonnet5Ultra': 'Claude Sonnet 5 (Ultracode·xhigh)',
  'Sonnet5Ultra-TasksAssignedByOpus5': 'Claude Sonnet 5 (Ultracode·xhigh)',
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
  'GPT6Astra(Ultra)V1': 'GPT-6 Astra (Ultra·Max)',
  'GPT6Astra(Max)V1': 'GPT-6 Astra (Max)',
  'GPT6Astra(xhigh)V1': 'GPT-6 Astra (xHigh)',
  'DeepSeekV4.1Flash0910(Max)V1': 'DeepSeek V4.1 Flash 0910 (Max)',
  'DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5': 'DeepSeek V4.1 Flash 0910 (Max)',
};

const EXPECTED_EXACT = {
  [SOL61_XHIGH_SPEC_ID]: 100,
  "Opus5(Max)V1": 105,
  "Fable5.1(Max)V1": 109,
  "Qwen3.8Flash(xhigh)V1": 67.83666666666667,
  "Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5": 83.75,
  "Hy4Preview(high)V1": 89.33666666666667,
  "Hy4Preview(high)V2": 80.52666666666667,
  "Hy4Preview(high)V1-TasksAssignedByOpus5": 96.45,
  "Hy4Preview(high)V2-TasksAssignedByOpus5": 98.75,
  "GLM5.3Flash(Max)V2": 89.85333333333332,
  "GLM5.3Flash(Max)V2-TasksAssignedByOpus5": 92.06,
  "GLM5.3Flash(Max)V1": 82.58666666666667,
  "GLM5.3Flash(Max)V1-TasksAssignedByOpus5": 83.02666666666667,
  "DoubaoSeedEvolving0827(Max)V1": 83.12,
  "DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5": 93.21666666666667,
  "GPT5.6Sol(high)V1": 74.08666666666667,
  "Opus5Ultra-TasksAssignedByOpus5": 84.21666666666667,
  "DeepSeek-V4-Flash-0731": 64.28,
  "DeepSeek-V4-Flash-0731-TasksAssignedByOpus5": 79.7,
  "DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5": 69.41,
  "DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5": 73.18333333333334,
  "DeepSeek-V4-Pro-0813-V1": 73.60333333333332,
  "DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5": 93.02666666666667,
  "DeepSeekV4Pro0813(Max)V2": 80.08666666666667,
  "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5": 93.31,
  "DeepSeekProMax-TasksAssignedByOpus5": 69.76,
  "DeepSeek_V4_Pro_high-1": 40.42,
  "DeepSeek_V4_Pro_high-2": 46.92,
  "DeepSeek_V4_Pro_high-3": 45.480000000000004,
  "GLM5.2Max-TasksAssignedByOpus5": 80.52666666666667,
  "GLM5.2Max": 51.03666666666666,
  "GLM5.3(Max)V1": 87.10333333333332,
  "GLM5.3(Max)V2": 88.85333333333332,
  "GLM5.3(Max)V3": 88.27,
  "GLM5.3(Max)V1-TasksAssignedByOpus5": 94,
  "GLM5.3(Max)V2-TasksAssignedByOpus5": 91.25,
  "GLM_5_1_high-1": 50.480000000000004,
  "GPT5.5xHigh-TasksAssignedByOpus5": 79.21666666666667,
  "GPT5.6Luna(Max)V1": 64.24666666666667,
  "GPT5.6Luna(Max)V2": 55.64666666666666,
  "GPT5.6LunaMax-TasksAssignedByOpus5": 76.58666666666666,
  "GPT5.6Sol(Max)V1": 77.83666666666667,
  "GPT5.6SolUltra-TasksAssignedByOpus5": 96.21666666666667,
  "GPT5.6Sol(Max)V1-TasksAssignedByOpus5": 84.21666666666667,
  "GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5": 83.45,
  "GPT5.6Sol(high)V1-TasksAssignedByOpus5": 77.02,
  "GPT5.6Sol(Medium)V1": 69.74666666666667,
  "GPT5.6Sol(Medium)V1-TasksAssignedByOpus5": 72.24666666666667,
  "GPT5.6Sol(Light)V1": 56.596666666666664,
  "GPT5.6Sol(Light)V1-TasksAssignedByOpus5": 71.77,
  "GPT5.6SolUltra-WebGL2": 94.62,
  "GPT5.6SolUltra": 74.22,
  "GPT5.6Sol(xhigh)V1": 74.07,
  "GPT5.6Sol(xhigh)V2": 75.14666666666668,
  "GPT5.6Sol(xhigh)V3": 75.39666666666668,
  "GPT5.6TerraUltra-Three": 68.58666666666666,
  "GPT5.6TerraUltra-TasksAssignedByOpus5": 82.77666666666667,
  "GPT_5_5_xhigh": 70.12666666666667,
  "Gemini3.1Pro-TasksAssignedByOpus5": 64.91666666666667,
  "Gemini3.5Flash-TasksAssignedByOpus5": 72.57666666666667,
  "Gemini3.6Flash(high)V0": 38.343333333333334,
  "Gemini3.6Flash-TasksAssignedByOpus5": 70.36,
  "Gemini3.7Flash(high)V1": 52.30333333333333,
  "Gemini3.7Flash(high)V1-TasksAssignedByOpus5": 82.45,
  "Gemini_3_5_flash_high": 58.25,
  "Grok4.5": 59.06999999999999,
  "Grok4.6(xhigh)V1": 70.07,
  "Grok4.6(xhigh)V1-TasksAssignedByOpus5": 78.45,
  "Hy3-TasksAssignedByOpus5": 71.72666666666667,
  "Hy3": 45.42,
  "KimiK3Max-TasksAssignedByOpus5": 95.75,
  "KimiK3Max": 81.83666666666667,
  "KimiK3(Max)V2-TasksAssignedByOpus5": 95.98333333333333,
  "KimiK3(Max)V2": 76.87,
  "KimiK3(Max)V3": 73.57,
  "LongCat2.0-TasksAssignedByOpus5": 65.34666666666666,
  "LongCat2.0": 43.06333333333333,
  "Mimo_2_5_Pro_high-1": 43.92,
  "MiniMaxM3-TasksAssignedByOpus5": 66.92,
  "MiniMaxM3(high)V2-TasksAssignedByOpus5": 54.43,
  "MiniMax_M3_thinking-1": 54.62,
  "Opus5Ultra-WebGL2": 100,
  "Opus_4_8_Max": 72.32,
  "Opus4.8Ultra-TasksAssignedByOpus5": 86.23333333333333,
  "Qwen3.7Max": 52.879999999999995,
  "Qwen3.8Max-TasksAssignedByOpus5": 65.99333333333334,
  "Qwen3.8MaxV2-TasksAssignedByOpus5": 78.38333333333333,
  "Qwen3.8MaxV2": 47.32,
  "Qwen3.8Max-inQoder": 55.379999999999995,
  "Qwen3.8MaxV1-inQoder": 53.03666666666666,
  "Qwen3.8Max(Max)V1": 59.31999999999999,
  "Qwen3.8Max(Max)V2": 62.24333333333334,
  "Qwen3.8Max(Max)V3": 68.85333333333332,
  "Qwen3.8Max(Max)V1-TasksAssignedByOpus5": 95.75,
  "Sonnet5Ultra": 76.67,
  "Sonnet5Ultra-TasksAssignedByOpus5": 84.21666666666667,
  "MuseSpark1.3Contributor(xhigh)V1": 74.83666666666667,
  "MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5": 88.21666666666667,
  "Gemini3.8Flash(high)V1": 48.80333333333333,
  "Gemini3.8Flash(high)V1-TasksAssignedByOpus5": 88,
  "Gemini3.8Flash(high)V2": 68.33666666666666,
  "Gemini3.8Flash(high)V2-TasksAssignedByOpus5": 87.02666666666667,
  "MuseSpark1.3Contributor(xhigh)V2": 73.36333333333333,
  "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5": 93.5,
  "OmenAlpha(Max)V1": 84.47666666666667,
  "OmenAlpha(Max)V1-TasksAssignedByOpus5": 94.46666666666667,
  "GPT6Astra(Light)V1-TasksAssignedByOpus5": 98.5,
  "Opus5(Low)V1-TasksAssignedByOpus5": 82.21666666666667,
  "GPT6Astra(Ultra)V1": 99.06,
  "GPT6Astra(Max)V1": 83.06,
  "GPT6Astra(xhigh)V1": 83.06,
  "DeepSeekV4.1Flash0910(Max)V1": 88.79333333333334,
  "DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5": 87.71666666666667,
  "MiMoXProPreview(Unknown)V1": 66.28666666666666,
  "MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5": 84.27666666666667,
  "Step5Preview(high)V1": 72.35333333333332,
  "Step5Preview(high)V1-TasksAssignedByOpus5": 68.98333333333333,
  "MiMo2.6Flash(Unknown)V1": 74.88,
  "MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5": 89.16666666666667,
  "MiMo2.6Pro(Unknown)V1": 68.28666666666666,
  "MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5": 94.21666666666667,
  "Grok4.7(xhigh)V1": 84.54333333333334,
  "Grok4.7(xhigh)V1-TasksAssignedByOpus5": 95.75,
  "Opus5.5(Max)V1": 109,
  "MiniMaxM3.1FlashPreview(Max)V1": 86.16,
  "MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5": 97.98333333333333,
  "GPT6.1Sol(Ultra)V1": 99.7,
  "Sonnet5.5(Max)V1": 107.23333333333333,
  "GPT6Astra(Light)V1": 71.88,
  "GPT6Astra(Medium)V1-TasksAssignedByOpus5": 100,
  "GPT6Luna(Max)V1": 66.57,
  "GPT6Luna(Max)V1-TasksAssignedByOpus5": 94,
  "Haiku5.5(Ultracode)V1": 87.87,
  "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5": 98.5,
  "Haiku5.5(Ultracode·Max)V1": 97.02666666666667,
  "Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5": 96.75,
  "GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5": 98.75
};

// Current scoring-input field oracle. Order:
// reference | featureMap(5) | orbitModel(5) | orbitRuntime(2) | moons | Earth Moon | Halley | other comets |
// correctness(3) | legacy visualBase (not scored) | interaction(5) | fatal | fatalReason.
// This is deliberately independent of the score formula: compensated field drift must still fail.
const EXPECTED_AUDIT_FINGERPRINT = {
  [SOL61_XHIGH_SPEC_ID]: "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:880c4e958207e74cfb44e4c616e6b387596a53d673e95c21b926b605d939ac2c",
  "GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:8c10d2dc850f2c8292ebf2358b9c54f2624316f1f59ac764c9cb3c6626cb23de",
  "Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:68b9beeadd6a6a14222155fb9d083c5e0ac7284f4186d01d40c0bfedf61a8919",
  "Haiku5.5(Ultracode·Max)V1": "0|1|1|1|1|0.4|1|1|1|1|1|0.5|1|22|1|1|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:2295e1361d9956fd10e3a7cbf9c033ba8917f7eb4ad5f266c3721f491f164ee5",
  "Haiku5.5(Ultracode)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|0.5|1|6|1|1|0|5|5|5|-|1|0.5|1|1|0.5|-|-",
  "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:c8da8ba8b2267848d15364abe6c5dfc213126f11800ae3c00e17fdc857424a16",
  "GPT6Astra(Light)V1": "0|0.4|0.4|0|0|0.4|1|1|1|1|1|1|1|0|0|0|0|5|5|5|-|1|1|1|1|0.5|-|-",
  "GPT6Astra(Medium)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:f7d09c3ce82c254a538e12cfccd7fb547d276e6de6f4a995ae587e2f735a9540",
  "GPT6Luna(Max)V1": "0|0.4|1|0|0|0.4|1|1|1|1|1|1|1|1|1|0|0|5|5|5|-|1|1|0.5|0|0.5|-|-",
  "GPT6Luna(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|0.5|1|-|-|moonEvidence:8f0f92df3862ce88fb00a44bc802ab9bfb05917d4d20bb02a15786d2ed2f36e3",
  "Sonnet5.5(Max)V1": "0|1|1|1|1|1|1|1|1|1|1|1|1|67|1|1|3|5|4.5|5|-|1|1|1|1|0.5|-|-",
  "Opus5(Max)V1": "0|1|1|1|1|1|1|1|1|1|1|1|1|21|1|1|2|5|5|5|-|1|1|1|1|1|-|-",
  "Fable5.1(Max)V1": "0|1|1|1|1|1|1|1|1|1|1|1|1|18|1|1|3|5|5|5|-|1|1|1|1|1|-|-",
  "Qwen3.8Flash(xhigh)V1": "0|0.4|1|1|1|0.4|1|0.5|1|1|0.5|1|1|9|1|0|1|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:60f621e508320326c193cc088d9b40ae0f641952c8364da60aa794071d0fea67",
  "Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|0|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:8082f4c606239074ae90aa539290562acdd3275f2d996d81feef3eb97f58a0a9",
  "Hy4Preview(high)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|0.5|1|18|1|1|2|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:ad393bc08509e74efa72511d3b5c3797247f48d331567aa813beaf8cd4769a86",
  "Hy4Preview(high)V2": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|13|1|1|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:7e68169acd15c50c8f9cf59c0cc90d65f47553bff0613c048da692b7ac91fa38",
  "Hy4Preview(high)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3.5|5|-|1|0.5|1|1|1|-|-|moonEvidence:c01db0abe2bec2cf357eb16f9c779e76e5ea011ea010146231415b3749805b65",
  "Hy4Preview(high)V2-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:931e37562c0e25376f04ab8c74e6f3cba7086f0b95c5f95bca852d04ec3e2777",
  "GLM5.3Flash(Max)V2": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|9|1|1|0|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:33b13f642caa29e3aa6befaec8eb19bfb23599dc467c20bac4993409abfa0426",
  "GLM5.3Flash(Max)V2-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:1ab874e3a34b9cbc6d505f350fc85b882da5e052e1cb393a0a31e4283eb6c21b",
  "GLM5.3Flash(Max)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|6|1|0|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:5f03f4ee4356654bdde781ca1ad3ca6748ea2263652d89153fab2cff1ffad109",
  "GLM5.3Flash(Max)V1-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|0|0|5|4|5|-|1|1|1|1|1|-|-|moonEvidence:7c0dd7fa9447b246a228151f1148296751ca38454ab66c63c2abb26718190cb5",
  "GPT5.6Sol(Medium)V1": "0|0.4|1|0.4|0|0.4|1|1|1|1|1|1|1|0|0|0|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",
  "GPT5.6Sol(Medium)V1-TasksAssignedByOpus5": "0|0.4|1|0.4|0|0.4|1|1|1|1|1|0.5|1|8|1|1|0|5|4|5|-|0.5|0.5|1|0|0.5|-|-|moonEvidence:67280f006fca705739cace957e8e28eb4d3f6b6d1b8e3ad56abf885a5c49585f",
  "GPT5.6Sol(Light)V1": "0|0.4|0|0.4|0|0.4|1|1|0.5|1|0|1|1|1|1|0|0|5|4|5|-|0.5|1|1|0|0.5|-|-|moonEvidence:bf23e77ba64f0d4cbc0a7139a8e69da7068417435497d52a479a58dbe560a5a6",
  "GPT5.6Sol(Light)V1-TasksAssignedByOpus5": "0|0.4|1|0|0|0.4|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|1|0.5|1|0|0.5|-|-|moonEvidence:f9c93bb41f0796b89dc3cc5f49642aca2c82d32e066c7a309e29146b0db96b34",
  "DoubaoSeedEvolving0827(Max)V1": "0|0.4|1|1|1|0.4|1|1|1|0.5|1|1|1|8|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-|moonEvidence:389408b5f23c6fa900bb2ba2e4bcec37fbe4ac8bba8ef32b841038d84998c1bf",
  "DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|4|-|1|0.5|1|1|0.5|-|-|moonEvidence:df7cc9a768adaa6ebe29755cb8b0c3e861806654266cee66f70687cfba08c63e",
  "GPT5.6Sol(high)V1": "0|0.4|1|1|1|0.4|1|1|1|1|0|1|1|8|1|0|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:7c0492628c591f54edc5517aa64a5d3be02802683dcfbfc27782a02b3e56abde",
  "DeepSeek-V4-Flash-0731": "0|0.4|0.4|1|1|0.4|1|1|1|1|0.5|1|1|1|1|0|3|4|3.5|3|-|1|1|0.5|0.5|0.5|-|-|moonEvidence:ec827ebd7b1a0e7e2ee0acc9b9eddbc5bf752d06a9f63393b7ac3a2d1efb62cc",
  "DeepSeek_V4_Pro_high-1": "0|0.4|1|1|0.4|0|0.5|0|0|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|0|0|0|-|-|moonEvidence:22ea1c5b457c993b68759b9b3633ff2ad8951fb8261d7730497d3e23e99fe2d2",
  "DeepSeek_V4_Pro_high-2": "0|0|1|1|0.4|0.4|0.5|0|0.5|0.5|0|0.5|1|0|0|0|0|5|3.5|5|-|1|1|0.5|0.5|0.5|-|-|moonEvidence:4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",
  "DeepSeek_V4_Pro_high-3": "0|0.4|0.4|0|1|0.4|0.5|0|0.5|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|1|0|0.5|-|-|moonEvidence:4ce97cce43c14e2a33ef930e9d4e976b330d07ba61f991efcecb21e0453e0a5c",
  "GLM5.2Max": "0|0.4|1|1|1|0.4|0.5|0|0.5|0|0|1|1|1|1|0|0|5|2.5|5|-|1|0.5|1|0.5|0.5|-|-|moonEvidence:5f9ccd48b4fd282b6c60b9cb49dfc3793d6568b75bea1ba83d3b35df379dbf25",
  "GLM5.3(Max)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|15|1|0|0|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:85776da3d708a26601e31f046eeda0a7989e82675e34a9d569866024a16fc437",
  "GLM5.3(Max)V2": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|7|1|1|0|5|4.5|5|-|1|1|1|1|0.5|-|-|moonEvidence:95ed016413c6d956942f1b0ed74cec886758c6793d643479b42065ff183d1486",
  "GLM5.3(Max)V3": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|10|1|1|1|4|4|4|-|1|1|1|1|0.5|-|-|moonEvidence:ce4ca3bfed83e9adb586c7edd2bb6fe320022053471ba5e17f685f8a4a866bb8",
  "GLM5.3(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:2e43dbfddcb3070a30d76efd318487ca666ace1fbec5b7fcb11d303987c2f9d2",
  "GLM5.3(Max)V2-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:081f0dd5606fffe73b8927ff65f2e4e5c875d065a225080f508a696152e27b05",
  "GLM_5_1_high-1": "0|0.4|0.4|1|0.4|0|1|0|0.5|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|1|1|0.5|-|-|moonEvidence:59a6de841f7b65941d9eecac2406708cfa2d8b686ab97231ffb87fa08bd987ee",
  "GPT5.6Sol(Max)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|0.5|1|10|1|0|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:d6e9ae05af793e1b317069923bc18a698d91c0e84fceb918e72d0524fa4311b4",
  "GPT5.6SolUltra-WebGL2": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|14|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-|moonEvidence:8d7a94978e4340e0a9cc3706326febb73fe679eff7539c34922493e9e17492cd",
  "GPT5.6SolUltra": "0|0.4|1|0|1|0.4|1|1|1|1|1|0.5|1|14|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-|moonEvidence:a4bd0442d05b51812b6f8643de0e93d92c89c4241354b40bbe80248e72f7b19b",
  "GPT5.6Sol(xhigh)V1": "0|0.4|1|0|0|0.4|1|1|1|1|0|0.5|1|13|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-|moonEvidence:ea86fc07815ce04ba8d0a83455ab8a9b94b8bc811e7e5a07502d737a92dab4e9",
  "GPT5.6Sol(xhigh)V2": "0|0.4|1|1|0.4|0.4|1|1|1|1|1|1|1|11|1|0|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:6168103f540f0470f66493479d8d6a767916ccafb9dd8f15e971a476c9a084bf",
  "GPT5.6Sol(xhigh)V3": "0|0.4|1|1|0.4|0.4|1|1|1|1|1|1|1|7|1|0|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:7de9c3540d756caf0389533b03edd2d87621ac86112630195cf20521b4a3d553",
  "GPT5.6TerraUltra-Three": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|1|1|0|0|5|4|5|-|1|1|1|0|0.5|-|-|moonEvidence:928b7165f757cfa350b22272fb4f3a440dc9690d48dcda834f5a56b9a6eb8cac",
  "GPT_5_5_xhigh": "0|0.4|1|1|1|0|1|1|1|1|1|1|1|9|1|1|0|5|4|5|-|0.5|0.5|0.5|0.5|1|-|-|moonEvidence:41860b99d586e8d5aa19c8d1c4f3d96a1d3cb2c11b1bc2a909ad601364c56f44",
  "Gemini_3_5_flash_high": "0|1|0|0|1|0|1|1|1|0.5|0|0.5|1|10|1|0|0|5|3.5|5|-|1|0.5|0.5|1|0.5|-|-|moonEvidence:75cf1d0a7dceede35fc07999b237de2602ba76f2a14d5272111f58d04728e73e",
  "Grok4.5": "0|0.4|1|1|1|0.4|1|1|0.5|0.5|0|1|1|5|1|0|1|5|3.5|5|-|1|0.5|0.5|0.5|0.5|-|-|moonEvidence:9bafb400a1a4e57fb91d9f03861ba6a6eb432d05d9f49146cf19330205ff4cf5",
  "Grok4.6(xhigh)V1": "0|0.4|1|1|1|0.4|1|1|1|1|0|1|1|12|1|1|0|5|3.5|5|-|1|0.5|0.5|0.5|0.5|-|-|moonEvidence:ad5ab71ce68daf6440c0a78148cebe2428b2e93f897425e13c94439176599537",
  "Hy3": "0|0.4|0|1|1|0.4|0.5|0|0.5|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|0|0.5|0.5|-|-|moonEvidence:1eecb0c5f8c0eac889bdfa32011d4abf73d880e8d0e3d93334be895e389523a7",
  "KimiK3Max": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|7|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:d438c933e25663e784cfc71385a5726c0ee0cee6262fcbf3bd1ae849dd076cee",
  "KimiK3(Max)V2": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|0|0|5|5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:c7a498fb13d7569ceca1e378f438ec8e14c0211b3c647ff5b0f28f07f59f20f9",
  "KimiK3(Max)V3": "0|0.4|1|1|1|0.4|1|1|1|1|1|0.5|1|1|1|1|0|5|3.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:40182ab3f8c60e1df51d182c07332000028221a04ea733e3b824763417644977",
  "LongCat2.0": "0|0.4|0.4|0|0|0.4|0.5|0|0.5|0|0|0.5|1|1|1|0|3|5|3|5|-|1|1|0|0|0.5|-|-|moonEvidence:c4564a3f0cbafff1c90687132ad36b326f99a804840d207ad1e6f7e864490740",
  "Mimo_2_5_Pro_high-1": "0|0.4|1|0|1|0.4|0.5|0|0.5|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|0|0|0.5|-|-|moonEvidence:f3e99ca27eeeb90a60565dad3422c85e6f3ce5a9a148c4f5c4d588eb0450db52",
  "MiniMax_M3_thinking-1": "0|0.4|0|1|1|0.4|1|1|0.5|0|0|0|1|1|1|0|0|3|4|5|-|1|1|0.5|0.5|0.5|L2|正常将速度滑杆设为0.5会永久污染速度/时间/实体为NaN；复位不修复速度。|moonEvidence:a9ce079def55e837e4030d3f6f3addffc50643cbf617ed8bdf480a4c2913ca81",
  "Opus5Ultra-WebGL2": "1|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|10|1|1|1|1|1|-|-",
  "Opus_4_8_Max": "0|0.4|1|1|1|0.4|1|1|0.5|1|1|1|1|8|1|0|0|5|3.5|5|-|1|1|1|1|0.5|-|-|moonEvidence:74a7ec90ca7a7e6aa78b7b3c475116abd754000c988e3f0d094ce24d8dd6a9a8",
  "Qwen3.7Max": "0|0.4|1|1|0.4|0.4|1|1|0.5|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|0|0|0.5|-|-|moonEvidence:7b94c781d306831da2331d85f0fb06499f6c2202b2d028d692b1b9dc92d7e2d8",
  "Qwen3.8MaxV2": "0|0.4|1|0|0|0.4|0.5|0|0.5|0.5|0|1|1|1|1|0|0|5|5|5|-|0.5|1|0|0|0.5|-|-|moonEvidence:8ca7934e4f315e72fed0065dd1c7ba6764bfcecead8b64003b151dbe61bd60e2",
  "Qwen3.8Max-inQoder": "0|0.4|1|1|0.4|0.4|1|1|1|0|0|1|1|1|1|0|0|5|3.5|5|-|1|1|0|0|0.5|-|-|moonEvidence:012386f0a91df63ac953a863934c0f393c341f234bbaa88354499da1519bf3f2",
  "Qwen3.8MaxV1-inQoder": "0|0.4|1|0|0|0.4|1|1|0.5|0|0|1|1|1|1|0|0|5|4|5|-|1|1|0|0|0.5|-|-|moonEvidence:8bb1601908a72384d0925b5bf2c27b7fb3b375fdc8cae0429d824e80aac78d3a",
  "Qwen3.8Max(Max)V1": "0|0.4|1|0|0|0.4|1|1|0.5|0|0|1|1|1|1|0|0|5|5|5|-|0.5|1|1|1|0.5|-|-|moonEvidence:e81effa29305df586c4482e1328b8fbde7fa4371fea1611f0ab105021e6ad065",
  "Qwen3.8Max(Max)V2": "0|0.4|1|1|0|0|1|1|0.5|0.5|0|1|1|1|1|0|0|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:41c2005b28482a1f6c15201c086d8cdf6aa332a2ee7a7629d4dcfab5cc3f7b99",
  "Qwen3.8Max(Max)V3": "0|0.4|1|1|1|0.4|1|1|0.5|0.5|0|1|1|1|1|0|0|5|4.5|5|-|1|1|1|1|0.5|-|-|moonEvidence:a8048bc5748ef0170849e86504d80c45fbc87a41f6dcb8281108bc8114e1190b",
  "Sonnet5Ultra": "0|0.4|1|1|0|0.4|1|1|1|1|1|0.5|1|6|1|0|0|5|3.5|5|-|1|0.5|1|0.5|0.5|-|-|moonEvidence:386710558e5b6d3affdf1a2ac3c184d166bb14f14073937ec95ffc10d9797a23",
  "Opus5Ultra-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:475ff0846fca5075073c5fbac2f73547095051f559d1e1cf3e1295c6ff5c6c06",
  "DeepSeek-V4-Flash-0731-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|0.5|0.5|0.5|1|0.5|-|-|moonEvidence:8e8fcbc76c51d2a9d8494902bbbc0cf770c1abddfc4a024d5f00f6f3f7b33883",
  "DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|0.5|0|8|1|1|0|2|3.5|5|-|1|0.5|1|0|0.5|L2|frame2428与drive2495各自申请下一帧；drive2497又启动frame，每次drive新增永久RAF链，待执行队列持续增长，核心模拟长程负载无界。|moonEvidence:6d36c1c9f53f553e98100d9cbeaf706416455e4a1386a4af150dfaa78ada02c8",
  "DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3|5|-|1|0.5|0.5|1|0.5|-|-|moonEvidence:a61dd78b145eaed95dfdae2a2acc9360c4a792bc20816ee41c766b9455f539e0",
  "DeepSeek-V4-Pro-0813-V1": "0|0.4|1|1|1|0.4|1|1|1|0.5|1|0|1|7|1|0|0|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:0f13698fdd95188f6b604c46929839b77dc50a11a333e7095cd2ab16ea8927b6",
  "DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:bb9e11ac15a140e00ffb580f9ef91d555abed51e07471512257cffca57a33ed3",
  "DeepSeekV4Pro0813(Max)V2": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|5|1|1|1|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:9d938ad554ecfe31ae8f4c38f780d55b397a753d3f0a79738a7ceafcf30b29d4",
  "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:6df911edb7fb827b420eb3351bef5ca1fb32d2267cd968933954f7b470585006",
  "DeepSeekProMax-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|0.5|0.5|1|0|0.5|-|-|moonEvidence:0ce2a5a52c0fdbe987f0b1a502075567f9dec07378ebb754a37b5f4f41dd6568",
  "GLM5.2Max-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|4|5|-|0.5|0.5|1|0|0.5|-|-|moonEvidence:960ae8a8ff4d221e294690c31a2070c6e39317e27e0756348e48e211f029623d",
  "GPT5.5xHigh-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:d7f22781bc1686c8f126e956040b1e3b07db6e1be3786b3b50e2f6f55bb9332c",
  "GPT5.6Luna(Max)V1": "0|0.4|1|0.4|0|0.4|1|1|0.5|1|0|1|1|1|1|0|0|5|4|5|-|1|1|0.5|1|1|-|-|moonEvidence:09e391c37d370664fb9ae83847c75ab3ae045ad6f6f99de0e76c067f801792eb",
  "GPT5.6Luna(Max)V2": "0|0.4|1|0.4|1|0.4|1|1|0.5|0|0|0.5|1|1|1|0|1|5|4|5|-|1|1|1|0|0.5|-|-|moonEvidence:80822a316c8af7fd770cd3b581398e7fe2179cdce8760121d37a9e53a0d3c2e3",
  "GPT5.6LunaMax-TasksAssignedByOpus5": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|1|1|0|0.5|-|-|moonEvidence:3324a568c0fa14623e9bb7fa1812dfe7c575766666e199378df8a09f6d5232c6",
  "GPT5.6SolUltra-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:cad94785573c7e8f2357b85a3976e0e6159ced2336f99506bfd0534165996ff1",
  "GPT5.6TerraUltra-TasksAssignedByOpus5": "0|1|0.4|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:98776cccf088065a074fa44284e7ecd48c286c5a0f650df713805a0e5b1693a9",
  "GPT5.6Sol(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:edd7677aa0d00eda75f8d38a1fae29b054c633c46bd09c6c23af35acaa2a2f50",
  "GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|3.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:6fb77dce2fe6f8f0218fd287672b3f7d646c1eb5eb803c8250fe1208bde16746",
  "GPT5.6Sol(high)V1-TasksAssignedByOpus5": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|8|1|1|0|3|4|5|-|0.5|0.5|1|1|0.5|L2|选择月球后 updateInfo 读取不存在的 orbit.a 抛出 TypeError，随后的周期信息更新使 requestAnimationFrame 主循环停止。|moonEvidence:63187f1ee876c32c9302407b55ac7e6123443b96e7197586162e398b448edcf9",
  "Gemini3.1Pro-TasksAssignedByOpus5": "0|1|0|1|1|0|1|1|1|1|1|0|0.5|0|0|0|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:4f53cda18c2baa0c0354bb5f9a3ecbe5ed12ab4d8e11ba873c2f11161202b945",
  "Gemini3.5Flash-TasksAssignedByOpus5": "0|1|1|0.4|1|0|1|1|1|1|1|0.5|1|8|1|1|0|5|3|4.5|-|1|0.5|1|1|0.5|-|-|moonEvidence:f279337564fca6251dc8877683dc34aa0d22a099fe8dc25158fec7df7bb26295",
  "Gemini3.6Flash(high)V0": "0|0.4|0|1|1|0|0.5|0|0|0|0|1|1|1|1|0|0|5|0|5|-|1|0.5|1|0.5|0.5|-|-|moonEvidence:7e57e3bd90ca0688f15485dd331dc301421a93726ce1efb9bfffd04fcc4cc5e4",
  "Gemini3.6Flash-TasksAssignedByOpus5": "0|0.4|1|0|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|0.5|0.5|1|1|0.5|-|-|moonEvidence:71449b70f5e7d0a9be15d19429eee94c5d8f7f62a2cfffd4cb6558a27ff3e947",
  "Gemini3.7Flash(high)V1": "0|0.4|1|1|1|0.4|1|0|0.5|0.5|0|0.5|1|1|1|0|0|5|4|4|-|1|0.5|1|1|0.5|-|-|moonEvidence:dfc8ad5921e2a649417a565d528ffed9650bd6bab395297c39181630f1799d2c",
  "Gemini3.7Flash(high)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:3a9586a0d5540ae0998a078aad25d39c44d9d6cc5dadf0f046f8c43725355934",
  "Grok4.6(xhigh)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:3cd0f0ccd6131012055880606ac9bded522833b7b2712c8d1f64fc37ef813b1e",
  "Hy3-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|0|1|8|1|1|0|5|3.5|4|-|0.5|0.5|0.5|0|0.5|-|-|moonEvidence:92f54b9cc0576d189639509e6cfcee57272a9a1b31ff6d0764a418bda9bef287",
  "KimiK3Max-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:a25071e7116a8e0dccfd54c1bf03cdda48d8048b43a7333d013669eec02e8981",
  "KimiK3(Max)V2-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|4.5|5|-|1|0.5|1|1|1|-|-|moonEvidence:fc4a4cad984cffaf7d089304b07e7bf2013d4b3a5141ca20e5ca3ab2f21f0206",
  "LongCat2.0-TasksAssignedByOpus5": "0|0.4|1|0.4|1|0.4|1|1|1|1|1|0.5|1|8|1|1|0|5|3.5|4|-|0.5|0.5|1|0|0.5|-|-|moonEvidence:fe61f19323d6c2113a27ec6c22f4570d6747565c67f636bf6b3b2f40440654a5",
  "MiniMaxM3-TasksAssignedByOpus5": "0|0.4|1|1|1|0.4|1|1|1|1|1|0|1|8|1|1|0|0|4|5|-|0.5|0.5|0.5|1|0.5|L1|所有非太阳主实体uSunDir从{x,y,z}对象以[0..2]读取，实际上传全NaN；主行星位置为原AU且太阳半径4.6，Earth等内行星位于太阳内部，核心画布物理/照明不可用。|moonEvidence:eff57319fc111ea6dce91cef922fbb843bb8f36031b246d5fa7c59d7a99d2b69",
  "MiniMaxM3(high)V2-TasksAssignedByOpus5": "0|0.4|1|0.4|1|0.4|0.5|1|1|0|1|0.5|0|8|1|1|0|0|3.5|4|-|1|0.5|0.5|0|0.5|L1|postQuad把packed vec3位置按size2读取，final主画布三角形布局错误；逐轴dispR钳掉所有负坐标、阳光方向固定零，核心主视图失败。|moonEvidence:b4f9a8dcb2c1b82292f5d38c1acf44bd75e7eacffba6d795c379117328c65b11",
  "Opus4.8Ultra-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4.5|5|-|1|1|1|1|0.5|-|-|moonEvidence:03d6c3575f15a4726d837928e555dcffc96618f626551c6993fd157036461166",
  "Qwen3.8Max-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|0|0|1|8|1|1|0|5|3.5|4.5|-|0.5|0.5|1|1|0.5|-|-|moonEvidence:fda8ff1f9bd2a0cc67357184db276c4298c6e6fd1a8effefdae44f99c0a0882e",
  "Qwen3.8MaxV2-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|3|3.5|5|-|1|0.5|1|1|0.5|L2|空白画布点击1389–1404保留best=-1却调用focusOn(-1)，1304把planetRadii[-1]算入camDistGoal得到NaN，随后相机/VP矩阵失效；实测650ms后dist/goalNaN且VP非finite，RAF仍运行。|moonEvidence:e6e74d2963cc3d92dabad606755e267766c815d333c1686850a5945827041000",
  "Qwen3.8Max(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:e16d1011cfc83f37827c550644aa453a88614ed6a8fa516a66a28d8bc88a83a1",
  "Sonnet5Ultra-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:742190aea181b7d835654a3aaa173fc82a0db000278ecf199ae004d06a6f1dc6",
  "MuseSpark1.3Contributor(xhigh)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|12|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:dafe55d7d69d00a58aab0fddd31ada43f62a98e0c32c29912ad880f4c5458d68",
  "MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|0|1|-|-|moonEvidence:50ceb1aadca630922a59a173d2c1f7f7bcf4c6065639111eb8d2f1981c7c5141",
  "Gemini3.8Flash(high)V1": "0|0.4|1|1|1|0.4|1|0|0.5|0|0|1|1|1|1|0|0|5|4|4|-|0.5|0.5|0.5|0.5|0.5|-|-|moonEvidence:24ddc90280d661007a9469be2b3e1dadcb68a3650d89797b50b3d243b88dc13a",
  "Gemini3.8Flash(high)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|0.5|0.5|1|1|1|-|-|moonEvidence:12d53f1a7f59801e869bebb22ee927c6cf70be9339f34c6a0ebf8e1777ac93ff",
  "Gemini3.8Flash(high)V2": "0|0.4|1|1|1|0.4|1|1|1|1|0.5|1|1|8|1|1|0|5|4.5|4.5|-|1|0.5|0.5|0.5|0.5|-|-|moonEvidence:2c91cb113c6c3c60aaae5517ebb922ec657d20197a95825160eff4cc84d2596f",
  "Gemini3.8Flash(high)V2-TasksAssignedByOpus5": "0|1|1|0.4|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|0.5|0.5|1|1|1|-|-|moonEvidence:e53d1d4d3fadbb6b3f82d1112282dd5628c39d41a71b4362a809de86774763af",
  "MuseSpark1.3Contributor(xhigh)V2": "0|0.4|0.4|1|1|0.4|1|1|1|1|1|1|1|6|1|1|0|5|3.5|4.5|-|1|0.5|1|1|0.5|-|-|moonEvidence:307c302da3a25052ffec8d6f93cb55e1789913a7633de4d2d41cc795662390fe",
  "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|0.5|0.5|1|1|0.5|-|-|moonEvidence:4134c2287d2f9f5e50aec10146284e622154e25b2159971907f870c290f6da52",
  "OmenAlpha(Max)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|7|1|1|0|3|4.5|5|-|1|0.5|1|0.5|0.5|L2|正常前台1350ms短主线程停顿后，看门狗直调自调度frame累积4条持久rAF链；同timestamp的dt=0又回退0.016，使模拟时钟持续过速，实测1.2043秒内推进应有值的3.72050倍。|moonEvidence:36b0a30af0f6abe8e96099ac908e43b9870842ee25affc90249583ba23e75b09",
  "OmenAlpha(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|1|1|1|0.5|-|-|moonEvidence:e3763c07a2cdb96a974e72416cdf41eff22c778bc7b9660e49fff4e1db1fc534",
  "GPT6Astra(Light)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|1|1|1|1|-|-|moonEvidence:8498693755fdc8fcffef060208f8d12087cf6254263ed085166c7d04f5ed0da5",
  "Opus5(Low)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|0.5|1|8|1|1|0|5|4|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:b8532c7209cbeed433d383806afcf9d632b7879fa5e656a241227fa64a7f3897",
  "GPT6Astra(Ultra)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|7|1|1|3|5|5|5|-|1|1|1|1|0.5|-|-",
  "GPT6Astra(Max)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|1|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-",
  "GPT6Astra(xhigh)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|1|1|0|0|5|5|5|-|1|1|1|1|0.5|-|-",
  "DeepSeekV4.1Flash0910(Max)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|15|1|0|0|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:942fed0769cc8e126bb8e0461731889dd1f0c6619e08e06e2aab89965944d5d1",
  "DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4|5|-|1|0.5|1|1|1|-|-|moonEvidence:147f0f3492fbb96cf47e7c7a7a1535e952822f1ae5c80dfaf5f4e8b6518283da",
  "MiMoXProPreview(Unknown)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|1|1|0|0|5|4|3.5|-|1|1|0.5|0.5|0.5|-|-|moonEvidence:098003335e20e8dc5ede37219f7ef0c2cb8829ce34d6364314d1b05dcbd0ac7f",
  "MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5": "0|0.4|1|1|1|1|1|1|1|1|1|0|1|8|1|1|0|5|4|5|-|1|0.5|1|1|1|-|-|moonEvidence:21b69f35b2b1a6c1ebe6ba810c011170ada5272b5e5f13c989c4c216efabc901",
  "Step5Preview(high)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|0.5|1|12|1|1|0|3|2|2|-|1|1|0.5|0.5|0.5|L2|选择卫星后逐帧异常阻断最终绘制，核心观察功能失效。|moonEvidence:c2ec6224118cc55239e7ac7a01fecd436a5670f29ae07655febce9c7d1e045ec",
  "Step5Preview(high)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|2|3|2|-|1|0.5|0.5|0|0.5|L2|卫星模型矩阵NaN与合成顶点布局错误造成核心实体和画面/拾取映射失败；新规则标记未完成，不设分数封顶。|moonEvidence:2390290be82919514b028345e93ab659f1d806accfbedcad6122f6e994c28e6d",
  "MiMo2.6Flash(Unknown)V1": "0|0.4|1|1|0.4|0.4|1|1|1|1|1|1|1|1|1|0|0|5|4|4.5|-|1|1|1|1|0.5|-|-",
  "MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|3|4.5|5|-|0.5|0.5|0.5|1|1|-|-|moonEvidence:7dbf9cec7dcae623c9e624d75da7a1de434bf99ac505f9f30d009783ed3a4fa8",
  "MiMo2.6Pro(Unknown)V1": "0|0.4|1|1|1|0.4|1|1|1|1|1|1|1|6|1|0|0|5|3.5|4|-|0.5|0.5|0.5|1|0.5|-|-|moonEvidence:a80cc13dcb01708ec40e5404b0c25ecfe930842fae7e415f40699853a4efc9e9",
  "MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|4|-|1|0.5|1|1|1|-|-|moonEvidence:a19a4f22f2d2aabc485e5b3afe1550e4006f0aadecc5126c439eacfd9405f9b5",
  "Grok4.7(xhigh)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|13|1|1|1|5|4.5|5|-|1|0.5|1|1|0.5|-|-|moonEvidence:c54db812c50006101ef808dad400281ef049296bf3e3e42b671a73bc33c1fd98",
  "Grok4.7(xhigh)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|5|5|-|1|0.5|1|1|1|-|-|moonEvidence:0aa231e6bdc1773287c829ed9ea077ea591c871ed6773fbdf34cafbd6e263c98",
  "Opus5.5(Max)V1": "0|1|1|1|1|1|1|1|1|1|1|1|1|18|1|1|3|5|5|5|-|1|1|1|1|1|-|-",
  "MiniMaxM3.1FlashPreview(Max)V1": "0|1|1|1|1|0.4|1|1|1|1|1|1|1|20|1|0|0|4|3|3.5|-|1|1|0.5|1|0.5|-|-|moonEvidence:f01382151cb77d1b4126fe393f89446bc606917c8c964973be14a19f72824c67",
  "MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5": "0|1|1|1|1|1|1|1|1|1|1|1|1|8|1|1|0|5|4.5|5|-|1|0.5|1|1|1|-|-|moonEvidence:1b3ebc6ef9180e0d33492d2b5d146bc7121ec75d04f1c432914634631e10796d",
  "GPT6.1Sol(Ultra)V1": "0|1|1|1|1|1|1|1|1|1|1|1|1|13|1|1|0|5|4|4.5|-|1|1|1|1|0.5|-|-"
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
].join('|') + (Array.isArray(score.moonEvidence) ? '|moonEvidence:' + digest(score.moonEvidence) : '');

check(Array.isArray(WORKS) && WORKS.length === 137, `WORKS count must be 137, got ${WORKS?.length}`);
check(Object.keys(SCORES).length === 137, `SCORES count must be 137, got ${Object.keys(SCORES).length}`);
check(new Set(WORKS.map(w => w.id)).size === 137, 'WORKS IDs must be unique');
check(new Set(Object.keys(SCORES)).size === 137, 'SCORES IDs must be unique');
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
const renamedUltraIds = {
  Claude: ['Opus5Ultra-TasksAssignedByOpus5', 'Opus5Ultra-WebGL2', 'Opus4.8Ultra-TasksAssignedByOpus5', 'Sonnet5Ultra', 'Sonnet5Ultra-TasksAssignedByOpus5'],
  GPT: ['GPT5.6SolUltra-TasksAssignedByOpus5', 'GPT5.6SolUltra-WebGL2', 'GPT5.6SolUltra', 'GPT5.6TerraUltra-Three', 'GPT5.6TerraUltra-TasksAssignedByOpus5', 'GPT6Astra(Ultra)V1', 'GPT6.1Sol(Ultra)V1', SOL61_SPEC_ID],
};
const renamedHaikuIds = ['Haiku5.5(Ultracode)V1', 'Haiku5.5(Ultracode)V1-TasksAssignedByOpus5'];
check(WORKS.every(work => !/^(?:Claude |GPT-).*\(Ultra\)/.test(work.model)), 'WORKS must no longer display the standalone Claude/GPT Ultra name');
for (const [family, ids] of Object.entries(renamedUltraIds)) {
  const effort = family === 'Claude' ? '(Ultracode·xhigh)' : '(Ultra·Max)';
  const expectedIds = family === 'Claude' ? [...ids, ...renamedHaikuIds] : ids;
  const actualIds = WORKS.filter(work => work.model.startsWith(family === 'Claude' ? 'Claude ' : 'GPT-') && work.model.includes(effort)).map(work => work.id).sort();
  check(JSON.stringify(actualIds) === JSON.stringify([...expectedIds].sort()), family + ': display-only rename must cover exactly ' + expectedIds.length + ' records' + (family === 'Claude' ? ' (five former Ultra and two Haiku)' : ''));
  for (const id of expectedIds) {
    const work = WORKS.find(work => work.id === id);
    check(work.file === `models/${id}.html` && work.shot === `assets/shots/${id}.jpg` && Object.hasOwn(SCORES, id), id + ': renamed display must preserve its original source, screenshot, and score key');
  }
}
check(JSON.stringify(WORKS.filter(work => /^Claude Haiku 5\.5 \(Ultracode·xhigh\)/.test(work.model)).map(work => work.id).sort()) === JSON.stringify([...renamedHaikuIds].sort()), 'The two existing Haiku records must use Ultracode·xhigh while preserving their original IDs');
check(WORK_CREATION_DATES['DeepSeekV4Pro0813(Max)V2'] === '260814' && WORK_CREATION_DATES['DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5'] === '260814', 'DeepSeek V4 Pro 0813 #2 must use its actual 260814 filesystem creation date');
check(WORKS.filter(w => w.group === 'A').length === 76, 'Group A count must be 76 after adding Haiku 5.5 Ultracode·Max');
check(WORKS.filter(w => w.group === 'B').length === 61, 'Group B count must be 61 after adding GPT-6.1 Sol xHigh detailed spec');
const newlyArchivedIds = ['Opus5(Max)V1', 'MiniMax_M3_thinking-1', 'MiniMaxM3-TasksAssignedByOpus5', 'MiniMaxM3(high)V2-TasksAssignedByOpus5'];
const newlyArchivedDocIds = ['Opus5Ultra-TasksAssignedByOpus5', 'Opus5(Low)V1-TasksAssignedByOpus5', 'Gemini3.1Pro-TasksAssignedByOpus5'];
const restoredIds = new Set(['KimiK3(Max)V3']);
const archiveBaselineIds = [
  ...newlyArchivedIds,
  ...newlyArchivedDocIds,
  "GPT5.6Sol(high)V1",
  "GPT5.6Luna(Max)V1",
  "GPT5.6Luna(Max)V2",
  "GPT5.6LunaMax-TasksAssignedByOpus5",
  "GPT5.6Sol(Max)V1",
  "GPT5.6SolUltra-TasksAssignedByOpus5",
  "GPT5.6Sol(Max)V1-TasksAssignedByOpus5",
  "GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5",
  "GPT5.6Sol(high)V1-TasksAssignedByOpus5",
  "GPT5.6Sol(Medium)V1",
  "GPT5.6Sol(Medium)V1-TasksAssignedByOpus5",
  "GPT5.6Sol(Light)V1",
  "GPT5.6Sol(Light)V1-TasksAssignedByOpus5",
  "GPT5.6SolUltra-WebGL2",
  "GPT5.6Sol(xhigh)V1",
  "GPT5.6Sol(xhigh)V2",
  "GPT5.6Sol(xhigh)V3",
  "GPT5.6TerraUltra-Three",
  "GPT5.6TerraUltra-TasksAssignedByOpus5",
  "Sonnet5Ultra",
  "Sonnet5Ultra-TasksAssignedByOpus5",

  "GPT5.5xHigh-TasksAssignedByOpus5",
  "GPT_5_5_xhigh",
  "Gemini3.6Flash(high)V0",
  "Gemini3.6Flash-TasksAssignedByOpus5",
  "Gemini3.7Flash(high)V1",
  "Gemini3.7Flash(high)V1-TasksAssignedByOpus5",
  "Grok4.6(xhigh)V1",
  "Grok4.6(xhigh)V1-TasksAssignedByOpus5",
  "LongCat2.0-TasksAssignedByOpus5",
  "LongCat2.0",
  "Mimo_2_5_Pro_high-1",
  "Opus_4_8_Max",
  "Opus4.8Ultra-TasksAssignedByOpus5",

  'OmenAlpha(Max)V1',
  'OmenAlpha(Max)V1-TasksAssignedByOpus5',
  'DeepSeek-V4-Flash-0731',
  'DeepSeek-V4-Flash-0731-TasksAssignedByOpus5',
  'DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5',
  'DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5',

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
const expectedHiddenIds = archiveBaselineIds.filter(id => !restoredIds.has(id));
check(JSON.stringify([...HIDDEN_WORK_IDS].sort()) === JSON.stringify(expectedHiddenIds), 'The hidden-work set must restore Kimi K3 #3 and otherwise preserve the existing archive');
const visibleWorks = SITE.visibleWorks();
const archivedWorks = SITE.archivedWorks();
// Re-auditing changes evidence only for current, non-protected works. The supplied
// programs and the existing screenshots are immutable inputs to this review.
const protectedScoreDigests = {
  "Opus5(Max)V1": "f56b13bfcaaed1bfa12ccbd5a1fdc88f7e9cadccdb8a6fa46388a47e62ecb0db",
  "Fable5.1(Max)V1": "bec020c1c78c02cbbdee7337f50f8ae1644c7d862ac2ccdff11536c35ce72fae",
  "Opus5Ultra-WebGL2": "46fcdf5211d9c6477035e0f396dc0af61f3935eda1e5c23a28a446b96ebcde39",
  "Opus5.5(Max)V1": "30d254bae2c681d69ef70a6ac16a1b69fb95433208910db15f0b98a47d1a785b"
};
for (const [id, expected] of Object.entries(protectedScoreDigests))
  check(digest(SCORES[id]) === expected, id + ': benchmark/user-specified scoring evidence must remain untouched');
for (const id of restoredIds) {
  check(archiveBaselineIds.includes(id) && SITE.isVisibleWork(SITE.byId(id)) && !SITE.isArchivedWork(SITE.byId(id)), id + ': restore only the confirmed misplaced archive entry');
}
// Completed task-attribution review provenance. The e4b6700 records are now frozen.
const currentSpecReviewIds = new Set([
  "Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5",
  "Hy4Preview(high)V1-TasksAssignedByOpus5",
  "Hy4Preview(high)V2-TasksAssignedByOpus5",
  "GLM5.3Flash(Max)V2-TasksAssignedByOpus5",
  "GLM5.3Flash(Max)V1-TasksAssignedByOpus5",
  "DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5",
  "DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5",
  "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5",
  "GLM5.3(Max)V1-TasksAssignedByOpus5",
  "GLM5.3(Max)V2-TasksAssignedByOpus5",
  "KimiK3Max-TasksAssignedByOpus5",
  "KimiK3(Max)V2-TasksAssignedByOpus5",
  "Qwen3.8Max(Max)V1-TasksAssignedByOpus5",
  "MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5",
  "Gemini3.8Flash(high)V1-TasksAssignedByOpus5",
  "Gemini3.8Flash(high)V2-TasksAssignedByOpus5",
  "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5",
  "GPT6Astra(Light)V1-TasksAssignedByOpus5",
  "DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5",
  "MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5",
  "Step5Preview(high)V1-TasksAssignedByOpus5",
  "MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5",
  "MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5",
  "Grok4.7(xhigh)V1-TasksAssignedByOpus5",
  "MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5",
  "GPT6Astra(Medium)V1-TasksAssignedByOpus5",
  "GPT6Luna(Max)V1-TasksAssignedByOpus5",
  "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5",
  "Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5",
  "GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5"
]);
const originalWorks = WORKS.filter(work => work.id !== SOL61_XHIGH_SPEC_ID);
const originalAssets = originalWorks.flatMap(work => [work.file, work.shot]).sort()
  .map(path => ({path, sha256: createHash('sha256').update(fs.readFileSync(asset(path))).digest('hex')}));
check(originalAssets.length === 272 && digest(originalAssets) === 'ff720ec53430c4c4661082164424f6ed47bd417a916b51535b1eec9ae3dffef7', 'All 272 original programs and saved screenshots must remain byte-for-byte unchanged');
const originalRecords = originalWorks.map(work => [work, SCORES[work.id]]);
check(currentSpecReviewIds.size === 30 && originalRecords.length === 136 && digest(originalRecords) === '4341624792cf283c4863879ac51d4e0a0dc9483915c75781028685ea5b950429', 'All 136 e4b6700 records, including metadata, notes, and scoring inputs, must remain unchanged');
for (const id of currentSpecReviewIds) check(SITE.isVisibleWork(SITE.byId(id)) && SITE.byId(id).group === 'B', id + ': task-attribution review scope must contain only current detailed-spec works');
// The 2026-10-15 independent archive review covers 65 records; the manually scored Opus 5 Max remains protected.
const archiveEvidenceIds = archiveBaselineIds.filter(id => id !== 'KimiK3(Max)V3');
const archivedEvidence = archiveEvidenceIds.map(id => [id,
  Object.fromEntries(Object.entries(SCORES[id]).filter(([key]) => key !== 'note'))])
  .sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
check(digest(archivedEvidence) === '0811239886d314b3584157563fa827441d9cabe1fc6a28e17af361347492de0b', 'The archive ledger must match the independent 2026-10-15 review and retain the protected manual score');
check(archiveBaselineIds.length === 67 && archiveEvidenceIds.length === 66 && archivedWorks.length === 66 && archivedWorks.filter(w => w.group === 'A').length === 36 && archivedWorks.filter(w => w.group === 'B').length === 30, 'Only the re-audited Kimi #3 may leave the original archive evidence snapshot');
check(archivedWorks.every(work => SITE.personalRecommendationFor(work)?.symbols === '-' && SITE.isArchivedWork(work)), 'Every offline model must use a dash recommendation');
check(SITE.tableDisplayRowCount(archivedWorks.filter(w => w.group === 'A')) === 23 && SITE.tableDisplayRowCount(archivedWorks.filter(w => w.group === 'B')) === 21, 'Offline tabs must remove the misplaced Kimi row while preserving all other folding rules');
for (const group of ['A','B']) {
  const sol=SITE.tableDisplayRows(archivedWorks.filter(w=>w.group===group),'tier',1,'zh').find(w=>w.tableVariantBase==='GPT-5.6 Sol');
  check(sol?.id === (group==='A'?'GPT5.6SolUltra-WebGL2':'GPT5.6SolUltra-TasksAssignedByOpus5') && sol.tableAlternates.length === (group==='A'?6:5) && stripCreationDate(sol.model) === 'GPT-5.6 Sol (Ultra·Max)', `${group}: archived Sol must retain Ultra·Max as primary and all other efforts/runs`);
}
check(visibleWorks.length === 71, 'Active WORKS count must be 71');
check(visibleWorks.filter(w => w.group === 'A').length === 40, 'Active Group A count must be 40');
check(visibleWorks.filter(w => w.group === 'B').length === 31, 'Active Group B count must be 31');
check(JSON.stringify(WORKS.filter(work => /^(?:Claude Opus 5 \(Max\)|MiniMax M3 \(high\))/.test(stripCreationDate(work.model))).map(work => work.id).sort()) === JSON.stringify([...newlyArchivedIds].sort()), 'Archiving must cover exactly the requested Opus 5 Max and MiniMax M3 high families');
for (const id of [...newlyArchivedIds, ...newlyArchivedDocIds]) {
  const work = SITE.byId(id), recommendation = SITE.personalRecommendationFor(work);
  check(SITE.isArchivedWork(work) && !SITE.isVisibleWork(work) && fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)), id + ': keep the original source and screenshot reachable only in the offline archive');
  check(recommendation?.symbols === '-' && recommendation.count === 0 && recommendation.sortValue === 0 && SITE.recommendationSymbols(recommendation).replace(/<[^>]+>/g, '') === '-', id + ': archived recommendations must render a literal ASCII dash');
}
for (const id of ['Opus5Ultra-WebGL2', 'MiniMaxM3.1FlashPreview(Max)V1', 'MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5']) check(SITE.isVisibleWork(SITE.byId(id)) && !SITE.isArchivedWork(SITE.byId(id)), id + ': the one-line benchmark and MiniMax M3.1 must remain current');
check(visibleWorks.every(w => !w.model.includes('Qwen 3.8 Max Preview')), 'No retired Qwen Preview work may remain on visible site surfaces');
check(visibleWorks.every(w => !/^DeepSeek V4 Pro \(Max\)/.test(w.model)), 'No retired DeepSeek V4 Pro work may remain on visible site surfaces');
for (const id of expectedHiddenIds) { const work=SITE.byId(id); check(SITE.isArchivedWork(work) && !SITE.isVisibleWork(work) && fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)), id + ': archive lookup must open the retained original and screenshot without entering active lists'); }
check(PAIR_ORDER.length === 44 && new Set(PAIR_ORDER).size === 44, 'PAIR_ORDER must contain 44 configured pair keys, including GPT-6.1 Sol');
check(!PAIR_ORDER.includes('qwen38') && !Object.hasOwn(context.window.PAIR_TITLES, 'qwen38'), 'The Preview comparison must be absent from visible pair metadata');
check(!PAIR_ORDER.includes('deepseek') && !Object.hasOwn(context.window.PAIR_TITLES, 'deepseek'), 'The retired DeepSeek V4 Pro comparison must be absent from visible pair metadata');
check(SITE.pairs().length === 28, 'Expected 28 complete active pairs after adding GPT-6.1 Sol detailed spec');
check(!SITE.pairs().some(pair => pair.a.pair === 'minimax'), 'The retired MiniMax M3 pair must not appear in current comparisons');
check(!SITE.pairs().some(pair => pair.a.pair === 'opus5'), 'The Opus 5 pair must leave current comparisons when only its detailed-spec side is archived');
const historicalOpusPair = SITE.pairs(WORKS).find(pair => pair.a.pair === 'opus5');
check(historicalOpusPair?.a?.id === 'Opus5Ultra-WebGL2' && historicalOpusPair?.b?.id === 'Opus5Ultra-TasksAssignedByOpus5', 'The complete retained work set must preserve the historical Opus 5 pair across current and offline tabs');
check(typeof SITE.displayPairs === 'function', 'SITE must expose the six largest positive detailed-spec gains');
check(JSON.stringify(SITE.displayPairs().map(pair => pair.a.pair)) === JSON.stringify(["gemini38flashv1","qwen38max","gpt6luna","gpt6astralight","mimo26pro","musespark13v2"]), 'Featured comparisons must be the six largest positive detailed-spec score gains');
check(PAIR_ORDER[4] === 'kimik3' && PAIR_ORDER[5] === 'kimik3v2', 'Kimi K3 #1 and #2 must occupy comparison positions 05 and 06');
check(PAIR_ORDER[7] === 'deepseekv4pro0813' && PAIR_ORDER[8] === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #1 and #2 must occupy comparison positions 08 and 09');
check(PAIR_ORDER[9] === 'glm53v1' && PAIR_ORDER[10] === 'glm53v2', 'GLM 5.3 #1 and #2 must occupy comparison positions 10 and 11');
check(PAIR_ORDER[12] === 'qwen38max', 'The Qwen 3.8 Max pair must occupy comparison position 13');
check(PAIR_ORDER[13] === 'grok46', 'The Grok 4.6 pair must occupy comparison position 14');
check(PAIR_ORDER[16] === 'gemini36flash', 'Gemini 3.6 Flash must occupy comparison position 17');
check(PAIR_ORDER[18] === 'gemini37flash', 'Gemini 3.7 Flash must occupy comparison position 19 after inserting Grok 4.6');
check(PAIR_ORDER[21] === 'doubao' && PAIR_ORDER[22] === 'hy4v1' && PAIR_ORDER[23] === 'hy4v2' && PAIR_ORDER[24] === 'glm53flashv2' && PAIR_ORDER[25] === 'minimax' && PAIR_ORDER[26] === 'qwen38flash', 'Doubao, Hy 4 #1/#2, GLM 5.3 Flash #2, MiniMax, and Qwen 3.8 Flash must occupy the final comparison positions');
check(PAIR_ORDER[27] === 'musespark13' && PAIR_ORDER[28] === 'gemini38flashv1' && PAIR_ORDER[29] === 'gemini38flashv2' && PAIR_ORDER[30] === 'musespark13v2' && PAIR_ORDER[31] === 'omenalpha', 'MuseSpark, Gemini 3.8 Flash, and Omen Alpha must be appended in their declared pair order');
check(PAIR_ORDER[32] === 'deepseekv41flash0910' && context.window.PAIR_TITLES.deepseekv41flash0910 === 'DeepSeek V4.1 Flash 0910 (Max)', 'DeepSeek V4.1 Flash 0910 must be the final configured pair');

const referenceIds = ['Opus5Ultra-WebGL2'];
check(JSON.stringify(Object.entries(SCORES).filter(([, score]) => score.reference).map(([id]) => id).sort()) === JSON.stringify(referenceIds), 'Only Claude Opus 5 (Ultracode·xhigh) may be flagged as the benchmark');

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
const omenA = WORKS.find(work => work.id === 'OmenAlpha(Max)V1');
const omenB = WORKS.find(work => work.id === 'OmenAlpha(Max)V1-TasksAssignedByOpus5');
check(omenA?.tier === 4 && omenB?.tier === 2 && omenA?.pair === 'omenalpha' && omenB?.pair === 'omenalpha', 'Both Omen Alpha works must form one Tier 2 pair');
check(omenA?.bytes === 89376 && omenA?.lines === 1903 && omenA?.tech === 'WebGL2' && !omenA?.needsFloat && !omenA?.msaa && omenA?.net.length === 0, 'Omen Alpha one-line metadata must match the supplied source');
check(omenB?.bytes === 136419 && omenB?.lines === 3254 && omenB?.tech === 'WebGL2' && !omenB?.needsFloat && omenB?.msaa && omenB?.net.length === 0, 'Omen Alpha detailed metadata must match the supplied source');
check(SITE.environmentTag(omenA) === 'in Zcode' && SITE.environmentTag(omenB) === 'in Zcode', 'Both Omen Alpha works must use Zcode');
check((omenA.tags || []).includes('匿名参测') && (omenB.tags || []).includes('匿名参测'), 'Both Omen Alpha works must disclose anonymous participation');
for (const work of [omenA, omenB]) check(fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)) && work.jsErrors === 0, `${work.id}: source, screenshot, and clean runtime result must exist`);
const gpt6Astra = SITE.byId('GPT6Astra(Ultra)V1');
const gpt6AstraScore = SITE.scoreFor(gpt6Astra);
check(gpt6Astra?.group === 'A' && gpt6Astra?.tier === 1 && gpt6Astra?.pair === null && stripCreationDate(gpt6Astra?.model) === 'GPT-6 Astra (Ultra·Max)', 'GPT-6 Astra must be an unpaired Tier 1 one-line work');
check(gpt6Astra?.bytes === 10045652 && gpt6Astra?.lines === 586 && gpt6Astra?.tech === 'WebGL2' && !gpt6Astra?.needsFloat && gpt6Astra?.msaa && gpt6Astra?.net.length === 0, 'GPT-6 Astra metadata must match the supplied source');
check(SITE.environmentTag(gpt6Astra) === 'in Codex' && fs.existsSync(asset(gpt6Astra.file)) && fs.existsSync(asset(gpt6Astra.shot)) && gpt6Astra.jsErrors === 0, 'GPT-6 Astra must expose Codex, its source, screenshot, and clean runtime result');
close(gpt6AstraScore.evidenceBase, 99.06, 'GPT-6 Astra evidence score with three other comets');
check(gpt6AstraScore.otherComets === 3 && gpt6AstraScore.parts.cometBonus === 3 && gpt6AstraScore.total === 99 && gpt6AstraScore.manualAdjustment === 0 && gpt6AstraScore.independenceMode === 'native', 'GPT-6 Astra must retain its reviewed numeric score and separate three-point other-comet bonus');
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
for (const fatal of ['L1', 'L2']) {
  SCORES.testFatalTier = { ...SCORES[fable51.id], fatal, fatalReason: 'Fixture: core renderer fails.' };
  const work = { ...fable51, id: 'testFatalTier' }, score = SITE.scoreFor(work);
  check(SITE.workTier(work) === 4 && score.total === 106 && score.fatalCap === null,
    'Every fatal level must retain its evidence score and automatically use Incomplete, without a score cap or Tier 0 bonus');
  close(score.exact, score.preCap, 'Fatal scores must equal the ordinary evidence calculation');
  delete SCORES.testFatalTier;
}
SCORES.testMixedMoons = { ...SCORES[fable51.id], moons: 3, moonQuality: .5, earthMoonValid: false,
  moonEvidence: [{ id: 'moon', quality: 0, reason: 'Wrong reference plane' },
    { id: 'io', quality: 1, reason: 'Valid orbit' }, { id: 'europa', quality: .5, reason: 'Partial orbit' }] };
const mixedMoons = SITE.scoreFor({ ...fable51, id: 'testMixedMoons' });
close(mixedMoons.effectiveMoons, 1.5, 'Per-moon evidence must take precedence over the legacy uniform multiplier');
close(mixedMoons.parts.moons, .25, 'An invalid Earth Moon must receive the separate anchor deduction after effective-moon credit');
close(mixedMoons.parts.moonBonus, 0, 'Invalid and partial moons must not inflate the excess-moon bonus');
delete SCORES.testMixedMoons;


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
  'Claude Fable 5.1':[10,50,.25], 'Claude Opus 5':[5,25,.5], 'Claude Opus 5.5':[4,20,.2],
  'Claude Opus 4.8':[5,25,.5], 'Claude Sonnet 5':[2,10,.2], 'Claude Sonnet 5.5':[2,10,.2], 'Claude Haiku 5.5':[.5,2.5,.05], 'GPT-6 Astra':[20,75,2], 'GPT-5.6 Sol':[10,45,1], 'GPT-6.1 Sol':[4,15,.2], 'GPT-6 Luna':[.2,.75,.02],
  'GPT-5.6 Terra':[4,18,.4], 'GPT-5.6 Luna':[.4,1.8,.04], 'GPT-5.5':[10,45,1],
  'Gemini 3.1 Pro':[4,18,.4], 'Gemini 3.6 Flash':[1.5,7.5,.15], 'Gemini 3.7 Flash':[1.5,7.5,.15], 'Gemini 3.8 Flash':[1.5,7.5,.15],
  'Grok 4.6':[4,12,1], 'Grok 4.7':[4,12,1], 'Hy 4 Preview':[.834,2.501,.042], 'Kimi K3':[3,15,.3],
  'DeepSeek V4 Pro 0813':[1.32,3.96,.044], 'DeepSeek V4 Flash 0731':[.44,1.32,.014], 'DeepSeek V4.1 Flash 0910':[.44,1.32,.014],
  'Qwen 3.8 Max':[2,6,.25], 'Qwen 3.8 Flash':[.15,.47,.016], 'GLM 5.3':[1.4,4.4,.26],
  'GLM 5.3 Flash':[.15,.5,.03], 'Doubao Seed Evolving 0827':[.9,4.47,.18],
  'Step 5 Preview':[1,2.7,.05],
  'MiMo 2.6 Flash':[.14,.28,.0028], 'MiMo 2.6 Pro':[.435,.87,.0036],
  'LongCat 2.0':[.75,2.95,.015], 'MiMo 2.5 Pro':[.435,.87,.0036], 'MiniMax M3':[1.2,4.8,.24],
  'MuseSpark 1.3 Contributor':[.10,.20,.002],
};
check(context.window.MODEL_PRICE_DATE === '2026-09-03', 'Price snapshot must disclose its saved date');
exactKeys(context.window.MODEL_PRICES, Object.keys(expectedPrices), 'Price families');
for (const [model, values] of Object.entries(expectedPrices)) {
  const actual = context.window.MODEL_PRICES[model];
  ['input','output','cache'].forEach((key,i)=>close(actual[key],values[i],model+' '+key));
}
const expectedContextPrices = {
  'GPT-6 Luna': { threshold: 272000, short: [.1, .5, .01], long: [.2, .75, .02], source: 'https://developers.openai.com/api/docs/models/gpt-6-luna' },
  'Claude Haiku 5.5': { threshold: 100000, short: [.1, .5, .01], long: [.5, 2.5, .05], source: 'https://platform.claude.com/docs/en/about-claude/pricing' },
};
exactKeys(context.window.MODEL_CONTEXT_PRICES, Object.keys(expectedContextPrices), 'Luna/Haiku context-price families');
for (const [model, expected] of Object.entries(expectedContextPrices)) {
  const saved = context.window.MODEL_CONTEXT_PRICES[model];
  check(saved.threshold === expected.threshold && saved.date === '2026-10-09' && saved.source === expected.source, model + ': context pricing must preserve the official threshold, source, and lookup date');
  for (const inputTokens of [0, 99999, 100000, 100001, 271999, 272000, 272001]) {
    const values = inputTokens > expected.threshold ? expected.long : expected.short;
    const actual = SITE.contextPriceFor(model, inputTokens);
    exactKeys(actual, ['input', 'output', 'cache'], model + ': context-price fields');
    ['input', 'output', 'cache'].forEach((key, i) => close(actual[key], values[i], `${model} ${inputTokens} input tokens ${key}`));
  }
  for (const inputTokens of [-1, NaN, Infinity]) check(SITE.contextPriceFor(model, inputTokens) === null, model + ': invalid input lengths must not select a rate');
  ['input', 'output', 'cache'].forEach((key, i) => close(context.window.MODEL_PRICES[model][key], expected.long[i], model + ': main-table pricing must keep the highest context band'));
}
check(SITE.contextPriceFor('unknown-model', 100000) === null, 'Unknown models must not acquire Luna/Haiku context pricing');
const lunaHaikuRows = SITE.lunaHaikuComparisons();
check(JSON.stringify(lunaHaikuRows.map(row => row.group)) === JSON.stringify(['A', 'B']), 'Luna/Haiku comparison must contain exactly the one-line and detailed-spec rows in order');
for (const [row, expected] of lunaHaikuRows.map(row => [row, row.group === 'A' ? [30.456666666666678,24.456666666666678,6] : [2.75,-0.25,3]])) {
  const suffix = row.group === 'B' ? '-TasksAssignedByOpus5' : '';
  check(row.luna.id === 'GPT6Luna(Max)V1' + suffix && row.haiku.id === 'Haiku5.5(Ultracode·Max)V1' + suffix && row.luna.group === row.group && row.haiku.group === row.group, row.group + ': comparison must pair Luna Max and Haiku Ultracode·Max for the same brief');
  const luna = SITE.scoreFor(row.luna), haiku = SITE.scoreFor(row.haiku);
  close(haiku.exact - luna.exact, expected[0], row.group + ': Luna/Haiku exact-score gap');
  close(haiku.evidenceBase - luna.evidenceBase, expected[1], row.group + ': Luna/Haiku base-score gap');
  close(haiku.manualAdjustment - luna.manualAdjustment, expected[2], row.group + ': Luna/Haiku tier-adjustment gap');
  close(haiku.exact - luna.exact, haiku.evidenceBase - luna.evidenceBase + haiku.manualAdjustment - luna.manualAdjustment, row.group + ': exact gap must disclose both components');
  for (const query of ['', 'Luna', 'Haiku']) check(SITE.lunaHaikuMatches(row, query), row.group + ': either model search must retain the comparison');
  check(!SITE.lunaHaikuMatches(row, 'no-such-model'), row.group + ': unrelated model search must not match the comparison');
}
check(visibleWorks.filter(work => !work.id.startsWith('OmenAlpha') && !work.id.startsWith('MiMoXProPreview') && !work.id.startsWith('MiniMaxM3.1FlashPreview')).every(work=>SITE.priceFor(work)), 'Every visible identified work with published pricing must map to a saved price family');
check(!SITE.priceFor(omenA) && !SITE.priceFor(omenB) && SITE.priceCell(omenA).includes('—'), 'Anonymous Omen Alpha pricing must remain undisclosed');
check(SITE.priceFor(gpt6Astra).date === '2026-09-05' && SITE.priceCell(gpt6Astra).includes('20 / 75 / 2') && SITE.priceCell(gpt6Astra).includes('developers.openai.com/api/docs/pricing'), 'GPT-6 Astra must show its official long-context price and source date');
for (const id of ['MiMoXProPreview(Unknown)V1', 'MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5']) {
  const work = SITE.byId(id);
  check(work?.tier === 3 && work.tags[0] === 'in MiMo' && WORK_CREATION_DATES[id] === '260912', id + ': MiMo Preview metadata must match the supplied grouping and birth date');
  check(!SITE.priceFor(work) && SITE.priceCell(work).includes('—'), id + ': preview pricing must remain undisclosed');
}
for (const id of ['Step5Preview(high)V1', 'Step5Preview(high)V1-TasksAssignedByOpus5']) {
  const work = SITE.byId(id);
  check(work?.tier === 4 && SITE.environmentTag(work) === 'in Zcode' && WORK_CREATION_DATES[id] === '260920', id + ': Step metadata must preserve user grouping and filesystem birth date');
  check(SITE.scoreFor(work).fatal === 'L2' && SITE.scoreFor(work).fatalCap === null && SITE.workTier(work) === 4, id + ': verified core failures must retain L2 and use uncapped Incomplete scoring');
  check(SITE.priceFor(work).date === '2026-09-22' && SITE.priceCell(work).includes('1 / 2.7 / 0.05'), id + ': Step must use the verified international price');
}
for (const work of WORKS.filter(work => work.id.startsWith('DeepSeek-V4-Flash-0731'))) {
  check(SITE.isArchivedWork(SITE.byId(work.id)) && fs.existsSync(asset(work.file)) && fs.existsSync(asset(work.shot)), work.id + ': keep the original and screenshot available only in the offline archive');
}
check(!SITE.pairs().some(pair => pair.a.pair === 'deepseekv4flash0731'), 'Retired Flash 0731 pair must not appear on the page');
for (const id of ['MiMo2.6Flash(Unknown)V1', 'MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5', 'MiMo2.6Pro(Unknown)V1', 'MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5']) {
  const work = SITE.byId(id);
  check(work?.tier === 2 && SITE.environmentTag(work) === 'in MiMo' && WORK_CREATION_DATES[id] === '260922', id + ': MiMo 2.6 must preserve the supplied grouping and filesystem birth date');
  check(SITE.priceFor(work).date === '2026-09-22' && SITE.priceFor(work).source.includes('mimo.mi.com/docs/en-US/price/pay-as-you-go'), id + ': MiMo 2.6 must use official standard international pricing');
  check(SITE.modelLogoFor(work) === 'assets/logos/mi.png', id + ': MiMo 2.6 must use the Xiaomi logo');
}
for (const [id, birth] of [['Grok4.7(xhigh)V1','260922'], ['Grok4.7(xhigh)V1-TasksAssignedByOpus5','260923']]) {
  const work = SITE.byId(id);
  check(work?.tier === 2 && SITE.environmentTag(work) === 'in build' && WORK_CREATION_DATES[id] === birth, id + ': Grok 4.7 must inherit Grok 4.6 placement, environment, and actual birth date');
  check(SITE.priceFor(work).date === '2026-09-23' && SITE.priceCell(work).includes('4 / 12 / 1'), id + ': Grok 4.7 must show official high-context pricing');
  check(SITE.modelLogoFor(work) === 'assets/logos/grok.png', id + ': Grok logo must remain correct');
}
for (const [id, tier, birth] of [['MiniMaxM3.1FlashPreview(Max)V1',2,'260928'], ['MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5',1,'260930']]) {
  const work = SITE.byId(id);
  check(work?.tier === tier && SITE.environmentTag(work) === 'in MiniMax Code' && WORK_CREATION_DATES[id] === birth, id + ': MiniMax preview grouping, environment, and birth date must match');
  check(!SITE.priceFor(work) && SITE.priceCell(work).includes('—'), id + ': unpublished preview API pricing must remain empty');
}
const sol61 = SITE.byId('GPT6.1Sol(Ultra)V1');
check(sol61?.tier === 1 && sol61.pair === 'gpt61sol' && SITE.environmentTag(sol61) === 'in Codex' && WORK_CREATION_DATES[sol61.id] === '260930', 'GPT-6.1 Sol one-line must preserve its supplied Codex Tier 1 metadata and join only the new Sol pair');
check(SITE.priceFor(sol61).date === '2026-09-30' && SITE.priceCell(sol61).includes('4 / 15 / 0.2'), 'GPT-6.1 Sol must show verified long-context pricing');

const sol61Spec = SITE.byId(SOL61_SPEC_ID);
check(sol61Spec?.group === 'B' && sol61Spec.tier === 1 && sol61Spec.pair === 'gpt61sol' && SITE.environmentTag(sol61Spec) === 'in Codex' && WORK_CREATION_DATES[SOL61_SPEC_ID] === '261015', 'GPT-6.1 Sol detailed spec must use its supplied Tier 1, Codex environment, actual creation date, and Sol-only pair');
check(sol61Spec.file === `models/${SOL61_SPEC_ID}.html` && sol61Spec.shot === `assets/shots/${SOL61_SPEC_ID}.jpg` && sol61Spec.bytes === 89619 && sol61Spec.lines === 550 && sol61Spec.tech === 'WebGL2' && !sol61Spec.needsFloat && sol61Spec.msaa && sol61Spec.net.length === 0 && sol61Spec.jsErrors === 0, 'Sol detailed metadata must preserve native WebGL2, optional HDR fallback, and actual offscreen multisample resolve');
const sol61SpecSource = fs.readFileSync(asset(sol61Spec.file));
check(sol61SpecSource.length === 89619 && [...sol61SpecSource].filter(byte => byte === 10).length === 550 && createHash('sha256').update(sol61SpecSource).digest('hex') === '366bf049cfaf07bd4fa3f092ae3d3dddee60546f4697611ef9966c6c571b943a', 'The supplied Sol detailed original must remain byte-for-byte unchanged');
check(fs.existsSync(asset(sol61Spec.shot)) && SITE.isVisibleWork(sol61Spec) && !SITE.isArchivedWork(sol61Spec), 'Sol detailed spec must expose the saved runtime screenshot as a current work');
check(createHash('sha256').update(fs.readFileSync(asset(sol61Spec.shot))).digest('hex') === 'adb9f5aaa8d14068cd3c2cb473327ea7f20387a300d9a40d2b0b8e0262a65da1', 'The verified 1440×900 JPEG runtime screenshot must remain unchanged');
check(SITE.priceFor(sol61Spec).date === '2026-09-30' && SITE.priceCell(sol61Spec).includes('4 / 15 / 0.2'), 'Sol detailed spec must reuse the existing verified Sol pricing');
const sol61Pair = SITE.pairs().find(pair => pair.a.pair === 'gpt61sol');
check(sol61Pair?.a.id === sol61.id && sol61Pair?.b.id === SOL61_SPEC_ID && PAIR_ORDER.at(-1) === 'gpt61sol' && context.window.PAIR_TITLES.gpt61sol === 'GPT-6.1 Sol (Ultra·Max)', 'Sol must append exactly its matching one-line and detailed originals');
close(SITE.scoreFor(sol61Spec).exact - SITE.scoreFor(sol61).exact, -0.9500000000000028, 'Sol detailed-minus-one-line exact difference');
check(!SITE.displayPairs().some(pair => pair.a.pair === 'gpt61sol'), 'Sol must join the full pair population without displacing a larger positive featured gain');
check(SCORES[SOL61_SPEC_ID].visualBase === null && SCORES[SOL61_SPEC_ID].moons === 8 && SCORES[SOL61_SPEC_ID].earthMoonValid === true && Array.isArray(SCORES[SOL61_SPEC_ID].moonEvidence) && SCORES[SOL61_SPEC_ID].moonEvidence.length === 8 && SCORES[SOL61_SPEC_ID].moonEvidence.every(moon => moon.quality === 1), 'The new Sol review must retain its eight independently verified moons and no legacy visual input');

const sol61XhighSpec = SITE.byId(SOL61_XHIGH_SPEC_ID);
check(sol61XhighSpec?.group === 'B' && sol61XhighSpec.tier === 1 && sol61XhighSpec.pair === null && SITE.environmentTag(sol61XhighSpec) === 'in Codex' && WORK_CREATION_DATES[SOL61_XHIGH_SPEC_ID] === '261015', 'Sol xHigh must be a current Tier 1 Codex detailed-spec work with its actual creation date and no invented one-line pair');
check(sol61XhighSpec.file === `models/${SOL61_XHIGH_SPEC_ID}.html` && sol61XhighSpec.shot === `assets/shots/${SOL61_XHIGH_SPEC_ID}.jpg` && sol61XhighSpec.bytes === 90718 && sol61XhighSpec.lines === 268 && sol61XhighSpec.tech === 'WebGL2' && !sol61XhighSpec.needsFloat && sol61XhighSpec.msaa && sol61XhighSpec.net.length === 0 && sol61XhighSpec.jsErrors === 0, 'Sol xHigh metadata must describe the supplied self-contained native WebGL2 original and optional HDR fallback with actual offscreen MSAA');
const sol61XhighSource = fs.readFileSync(asset(sol61XhighSpec.file));
check(sol61XhighSource.length === 90718 && [...sol61XhighSource].filter(byte => byte === 10).length === 268 && createHash('sha256').update(sol61XhighSource).digest('hex') === 'c955e557e8c9e7788de3389fa36e8c20146d47491607182ca2a26158faac9287', 'The supplied Sol xHigh source must remain byte-for-byte unchanged');
check(fs.existsSync(asset(sol61XhighSpec.shot)) && SITE.isVisibleWork(sol61XhighSpec) && !SITE.isArchivedWork(sol61XhighSpec), 'Sol xHigh must open its saved runtime screenshot from the current detailed-spec list');
check(createHash('sha256').update(fs.readFileSync(asset(sol61XhighSpec.shot))).digest('hex') === 'b5b9c2cf781defc13760c18246f00092db7651f7c57319fc81d76fa943a0f629', 'The verified 1440×900 Sol xHigh runtime screenshot must remain unchanged');
check(SITE.priceFor(sol61XhighSpec).date === '2026-09-30' && SITE.priceCell(sol61XhighSpec).includes('4 / 15 / 0.2'), 'Sol xHigh must reuse the existing verified Sol pricing');
check(JSON.stringify(SITE.personalRecommendationFor(sol61XhighSpec)) === JSON.stringify(SITE.personalRecommendationFor(sol61Spec)), 'Sol xHigh must inherit the same five green recommendations and both localized reasons as Ultra·Max');
check(!SITE.pairs().some(pair => pair.a.id === SOL61_XHIGH_SPEC_ID || pair.b.id === SOL61_XHIGH_SPEC_ID), 'Adding xHigh must not replace the existing Ultra·Max Sol pair or enter paired statistics');
check(SCORES[SOL61_XHIGH_SPEC_ID].visualBase === null && SCORES[SOL61_XHIGH_SPEC_ID].moons === 8 && SCORES[SOL61_XHIGH_SPEC_ID].earthMoonValid === true && SCORES[SOL61_XHIGH_SPEC_ID].moonEvidence.length === 8 && SCORES[SOL61_XHIGH_SPEC_ID].moonEvidence.every(moon => moon.quality === 1 && Number.isFinite(moon.periodDays) && moon.periodDays !== 0), 'Sol xHigh must retain eight individually verified moons, their signed periods, and no visual points');

for (const [id,group,bytes,lines,tech,needsFloat,msaa] of [
  ['Haiku5.5(Ultracode)V1','A',131344,2423,'Three.js',true,false],
  ['Haiku5.5(Ultracode)V1-TasksAssignedByOpus5','B',191908,5160,'WebGL2',false,true],
]) {
  const work=SITE.byId(id);
  check(work?.group===group && work.tier===1 && work.pair==='haiku55' && SITE.environmentTag(work)==='in Claude Code' && WORK_CREATION_DATES[id]==='261008', id+': supplied tier, environment, pairing, and creation date must match');
  check(work.bytes===bytes && work.lines===lines && work.tech===tech && work.needsFloat===needsFloat && work.msaa===msaa && fs.existsSync(asset(work.shot)) && work.jsErrors===0, id+': audited metadata and saved screenshot must match the original');
  check(SITE.priceFor(work).date==='2026-10-08' && SITE.priceCell(work).includes('0.5 / 2.5 / 0.05') && SITE.priceCell(work).includes('100K'), id+': official highest-context rates and threshold must be disclosed');
}
const haikuMax = SITE.byId('Haiku5.5(Ultracode·Max)V1');
check(haikuMax?.group === 'A' && haikuMax.tier === 1 && haikuMax.pair === 'haiku55max' && SITE.environmentTag(haikuMax) === 'in Claude cli' && WORK_CREATION_DATES[haikuMax.id] === '261011', 'Haiku 5.5 Ultracode·Max must retain Tier 1, Claude cli, creation date, and its new Max-only pair');
check(haikuMax.file === 'models/Haiku5.5(Ultracode·Max)V1.html' && haikuMax.shot === 'assets/shots/Haiku5.5(Ultracode·Max)V1.jpg' && haikuMax.bytes === 243482 && haikuMax.lines === 4897 && haikuMax.tech === 'WebGL2' && !haikuMax.needsFloat && haikuMax.msaa && haikuMax.net.length === 0 && haikuMax.jsErrors === 0, 'Haiku 5.5 Ultracode·Max source metadata and renderer capabilities must match the audited original');
check(fs.existsSync(asset(haikuMax.file)) && fs.existsSync(asset(haikuMax.shot)) && SITE.isVisibleWork(haikuMax) && !SITE.isArchivedWork(haikuMax), 'Haiku 5.5 Ultracode·Max original and saved screenshot must be available as a current work');
const haikuMaxSpec = SITE.byId(HAIKU_MAX_SPEC_ID);
check(haikuMaxSpec?.group === 'B' && haikuMaxSpec.tier === 1 && haikuMaxSpec.pair === 'haiku55max' && SITE.environmentTag(haikuMaxSpec) === 'in Claude cli' && WORK_CREATION_DATES[haikuMaxSpec.id] === '261011', 'Haiku 5.5 Ultracode·Max detailed spec must reuse the supplied tier, environment, creation date, and Max-only pair');
check(haikuMaxSpec.file === `models/${HAIKU_MAX_SPEC_ID}.html` && haikuMaxSpec.shot === `assets/shots/${HAIKU_MAX_SPEC_ID}.jpg` && haikuMaxSpec.bytes === 191845 && haikuMaxSpec.lines === 4506 && haikuMaxSpec.tech === 'WebGL2' && !haikuMaxSpec.needsFloat && haikuMaxSpec.msaa && haikuMaxSpec.net.length === 0 && haikuMaxSpec.jsErrors === 0, 'Haiku Ultracode·Max detailed metadata must distinguish 4x offscreen scene MSAA from context antialias:false and preserve the HDR fallback');
const haikuMaxSpecSource = fs.readFileSync(asset(haikuMaxSpec.file));
check(haikuMaxSpecSource.length === 191845 && [...haikuMaxSpecSource].filter(byte => byte === 10).length === 4506 && createHash('sha256').update(haikuMaxSpecSource).digest('hex') === '76c9edf174191632523af63d251cdfbcdb4e81d90cdb57904860b5114de56ebc', 'The new Haiku Ultracode·Max detailed original must remain byte-for-byte unchanged');
check(fs.existsSync(asset(haikuMaxSpec.shot)) && SITE.isVisibleWork(haikuMaxSpec) && !SITE.isArchivedWork(haikuMaxSpec), 'Haiku Ultracode·Max detailed spec must expose its saved runtime screenshot as a current work');
const haikuMaxPair = SITE.pairs().find(pair => pair.a.pair === 'haiku55max');
check(haikuMaxPair?.a.id === haikuMax.id && haikuMaxPair?.b.id === haikuMaxSpec.id && PAIR_ORDER.at(-2) === 'haiku55max' && context.window.PAIR_TITLES.haiku55max === 'Claude Haiku 5.5 (Ultracode·Max)', 'Haiku Max must retain its complete pair immediately before Sol without replacing the existing xhigh pair');
close(SITE.scoreFor(haikuMaxSpec).exact - SITE.scoreFor(haikuMax).exact, -0.27666666666667084, 'Haiku Max detailed-minus-one-line exact score difference');
check(!SITE.displayPairs().some(pair => pair.a.pair === 'haiku55max'), 'The Haiku Max pair must enter the full pair population without replacing a larger positive featured gain');
check(SITE.lunaHaikuComparisons().every(row => row.haiku.id.startsWith('Haiku5.5(Ultracode·Max)V1')), 'The independent Luna/Haiku comparison must use only the Max works while preserving the xhigh ordinary pair');
check(SITE.priceFor(haikuMax).date === '2026-10-08' && SITE.priceCell(haikuMax).includes('0.5 / 2.5 / 0.05') && SITE.priceCell(haikuMax).includes('100K'), 'Haiku 5.5 Ultracode·Max must reuse the existing verified Haiku pricing without a new price snapshot');
check(SITE.priceFor(haikuMaxSpec).date === '2026-10-08' && SITE.priceCell(haikuMaxSpec).includes('0.5 / 2.5 / 0.05') && SITE.priceCell(haikuMaxSpec).includes('100K'), 'Haiku Max detailed spec must reuse the existing Haiku price family and context threshold');
const sonnet55 = SITE.byId('Sonnet5.5(Max)V1');
check(sonnet55?.group === 'A' && sonnet55.tier === 0 && sonnet55.pair === null && SITE.environmentTag(sonnet55) === 'in Claude Code' && WORK_CREATION_DATES[sonnet55.id] === '260930', 'Sonnet 5.5 must be the supplied unpaired Tier 0 one-line work');
check(sonnet55.bytes === 4957094 && sonnet55.lines === 11211 && sonnet55.tech === 'WebGL2' && sonnet55.needsFloat && !sonnet55.msaa && sonnet55.net.length === 0 && fs.existsSync(asset(sonnet55.shot)), 'Sonnet 5.5 metadata and saved screenshot must match the original');
check(SITE.scoreFor(sonnet55).total === 107 && SITE.scoreFor(sonnet55).parts.cometBonus === 3 && !SITE.scoreFor(sonnet55).reference && SITE.priceFor(sonnet55).date === '2026-09-30', 'Sonnet 5.5 must show 107 with capped extra-comet credit and dated official prices');
const deepSeek41Priced = SITE.byId('DeepSeekV4.1Flash0910(Max)V1');
check(SITE.priceFor(deepSeek41Priced).date === '2026-09-08' && SITE.priceCell(deepSeek41Priced).includes('0.44 / 1.32 / 0.014') && SITE.priceCell(deepSeek41Priced).includes('api-docs.deepseek.com/quick_start/pricing'), 'DeepSeek V4.1 Flash 0910 must show the official peak-hour Flash price and source date');
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
check(SITE.priceCell(SITE.byId('DoubaoSeedEvolving0827(Max)V1')).includes('≈0.9 / ≈4.47 / ≈0.18'), 'Doubao 0827 prices must remain explicitly approximate');
check(SITE.priceCell(SITE.byId('GPT5.6Sol(Max)V1')).includes('10 / 45 / 1*'), 'Sol must retain its pre-promotion reference marker');
for (const [group, expectedCount] of [['A', 26], ['B', 22]]) {
  const groupWorks = visibleWorks.filter(work => work.group === group);
  const displayRows = SITE.tableDisplayRows(groupWorks, 'tier', 1, 'zh');
  for (const row of displayRows) {
    const name = row.model.replace(/\s+\(\d{6}\)$/, '');
    check(row.testDate === WORK_CREATION_DATES[row.id], `${row.id}: table date must retain the saved filesystem creation date`);
    const cell = SITE.modelCell(row);
    check(cell.includes(`>${name}</span>`) && !cell.includes(`>${row.model}</span>`), `${row.id}: table model link must show the name without its date suffix`);
  }
  for (const direction of [1, -1]) {
    const dated = SITE.tableDisplayRows(groupWorks, 'testDate', direction, 'zh');
    check(dated.every((row, index) => !index || (Number(row.testDate) - Number(dated[index - 1].testDate)) * direction >= 0), `${group}: test dates must sort chronologically in both directions`);
  }
  check(displayRows.length === expectedCount && SITE.tableDisplayRowCount(groupWorks) === expectedCount, `${group}: numbered reruns must collapse to the expected model-row count`);
  for (const row of displayRows.filter(work => work.tableAlternates && work.tableVariantType !== 'effort')) {
      check(row.tableAlternates.every(alternate => SITE.scoreOrder(row, alternate) <= 0), `${group} ${row.tableVariantBase}: primary table row must retain the highest-scoring run`);
  }
  check(!displayRows.some(work => /GPT-5\.6 (Sol|Terra|Luna)|Claude Sonnet 5 \(/.test(work.model)), `${group}: newly archived families must not occur in active table rows`);
  if (group === 'A') {
    const astra = displayRows.find(work => work.tableVariantBase === 'GPT-6 Astra');
    check(astra?.id === 'GPT6Astra(Ultra)V1' && stripCreationDate(astra.model) === 'GPT-6 Astra (Ultra·Max)' && JSON.stringify(astra.tableAlternates.map(work => work.id)) === JSON.stringify(['GPT6Astra(Max)V1', 'GPT6Astra(xhigh)V1', 'GPT6Astra(Light)V1']), 'A: GPT-6 Astra must default to Ultra·Max and collapse Max, xHigh, and Light');
    const kimi = displayRows.find(work => work.tableVariantBase === 'Kimi K3 (Max)');
    check(kimi?.id === 'KimiK3Max' && JSON.stringify(kimi.tableAlternates.map(work => work.id)) === JSON.stringify(['KimiK3(Max)V2', 'KimiK3(Max)V3']), 'A: current Kimi scores must retain #1 as primary, with #2 then the re-audited #3 as alternates');
  } else {
    const astra = displayRows.find(work => work.tableVariantBase === 'GPT-6 Astra');
    check(astra?.id === 'GPT6Astra(Medium)V1-TasksAssignedByOpus5' && astra.tableAlternates.length === 1 && astra.tableAlternates[0].id === 'GPT6Astra(Light)V1-TasksAssignedByOpus5', 'B: Astra must display its highest available effort, Medium, and fold Light behind it');
    const sol = displayRows.find(work => work.tableVariantBase === 'GPT-6.1 Sol');
    check(sol?.id === SOL61_XHIGH_SPEC_ID && sol.tableVariantType === 'effort' && JSON.stringify(sol.tableAlternates.map(work => work.id)) === JSON.stringify([SOL61_SPEC_ID]) && sol.tableAlternates.every(alternate => SITE.scoreOrder(sol, alternate) <= 0), 'B: Sol 6.1 must default to its highest-scoring xHigh result and fold Ultra·Max behind it');
  }
}

const expectedCurrentDocPrimaries = {
  "Hy 4 Preview (high)": "Hy4Preview(high)V2-TasksAssignedByOpus5",
  "GLM 5.3 Flash (Max)": "GLM5.3Flash(Max)V2-TasksAssignedByOpus5",
  "DeepSeek V4 Pro 0813 (Max)": "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5",
  "GLM 5.3 (Max)": "GLM5.3(Max)V1-TasksAssignedByOpus5",
  "Kimi K3 (Max)": "KimiK3(Max)V2-TasksAssignedByOpus5",
  "MuseSpark 1.3 Contributor (xHigh)": "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5",
  "Gemini 3.8 Flash (high)": "Gemini3.8Flash(high)V1-TasksAssignedByOpus5"
};
const currentDocRows = SITE.tableDisplayRows(visibleWorks.filter(work => work.group === 'B'), 'tier', 1, 'zh');
for (const [family, id] of Object.entries(expectedCurrentDocPrimaries)) check(currentDocRows.find(row => row.tableVariantBase === family)?.id === id, family + ': rechecked detailed-spec fold must expose its independently derived highest exact-scoring run');

const recordKeys = ['reference', 'featureMap', 'orbitModel', 'orbitRuntime', 'moons', 'hasEarthMoon', 'halley', 'otherComets', 'correctness', 'visualBase', 'interaction', 'fatal', 'note'];
const optionalRecordKeys = ['fatalReason', 'moonQuality', 'earthMoonValid', 'moonEvidence', 'reviewedAt', 'reviewVersion'];
const expectedMoonAdjustments = {
  [SOL61_XHIGH_SPEC_ID]: { earthMoonValid: true },
  "GPT6.1Sol(Ultra·Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Haiku5.5(Ultracode·Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Haiku5.5(Ultracode·Max)V1": {},
  "Haiku5.5(Ultracode)V1": {},
  "Haiku5.5(Ultracode)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT6Astra(Light)V1": {},
  "GPT6Astra(Medium)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT6Luna(Max)V1": {
    "moonQuality": 0.5
  },
  "GPT6Luna(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Sonnet5.5(Max)V1": {},
  "Opus5(Max)V1": {},
  "Fable5.1(Max)V1": {},
  "Qwen3.8Flash(xhigh)V1": {
    "earthMoonValid": true
  },
  "Qwen3.8Flash(xhigh)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Hy4Preview(high)V1": {
    "earthMoonValid": false
  },
  "Hy4Preview(high)V2": {
    "earthMoonValid": true
  },
  "Hy4Preview(high)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Hy4Preview(high)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GLM5.3Flash(Max)V2": {
    "earthMoonValid": true
  },
  "GLM5.3Flash(Max)V2-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GLM5.3Flash(Max)V1": {
    "earthMoonValid": true
  },
  "GLM5.3Flash(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Medium)V1": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Medium)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Light)V1": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Light)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "DoubaoSeedEvolving0827(Max)V1": {
    "earthMoonValid": false
  },
  "DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT5.6Sol(high)V1": {
    "earthMoonValid": true
  },
  "DeepSeek-V4-Flash-0731": {
    "earthMoonValid": true
  },
  "DeepSeek_V4_Pro_high-1": {
    "earthMoonValid": false
  },
  "DeepSeek_V4_Pro_high-2": {
    "earthMoonValid": false
  },
  "DeepSeek_V4_Pro_high-3": {
    "earthMoonValid": false
  },
  "GLM5.2Max": {
    "earthMoonValid": false
  },
  "GLM5.3(Max)V1": {
    "earthMoonValid": false
  },
  "GLM5.3(Max)V2": {
    "earthMoonValid": true
  },
  "GLM5.3(Max)V3": {
    "earthMoonValid": false
  },
  "GLM5.3(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GLM5.3(Max)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GLM_5_1_high-1": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Max)V1": {
    "earthMoonValid": true
  },
  "GPT5.6SolUltra-WebGL2": {
    "earthMoonValid": true
  },
  "GPT5.6SolUltra": {
    "earthMoonValid": true
  },
  "GPT5.6Sol(xhigh)V1": {
    "earthMoonValid": true
  },
  "GPT5.6Sol(xhigh)V2": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(xhigh)V3": {
    "earthMoonValid": true
  },
  "GPT5.6TerraUltra-Three": {
    "earthMoonValid": false
  },
  "GPT_5_5_xhigh": {
    "earthMoonValid": false
  },
  "Gemini_3_5_flash_high": {
    "earthMoonValid": true
  },
  "Grok4.5": {
    "earthMoonValid": false
  },
  "Grok4.6(xhigh)V1": {
    "earthMoonValid": true
  },
  "Hy3": {
    "earthMoonValid": false
  },
  "KimiK3Max": {
    "earthMoonValid": false
  },
  "KimiK3(Max)V2": {
    "earthMoonValid": false
  },
  "KimiK3(Max)V3": {
    "earthMoonValid": false
  },
  "LongCat2.0": {
    "earthMoonValid": true
  },
  "Mimo_2_5_Pro_high-1": {
    "earthMoonValid": false
  },
  "MiniMax_M3_thinking-1": {
    "earthMoonValid": false
  },
  "Opus5Ultra-WebGL2": {},
  "Opus_4_8_Max": {
    "earthMoonValid": false
  },
  "Qwen3.7Max": {
    "earthMoonValid": false
  },
  "Qwen3.8MaxV2": {
    "earthMoonValid": true
  },
  "Qwen3.8Max-inQoder": {
    "earthMoonValid": false
  },
  "Qwen3.8MaxV1-inQoder": {
    "earthMoonValid": true
  },
  "Qwen3.8Max(Max)V1": {
    "earthMoonValid": true
  },
  "Qwen3.8Max(Max)V2": {
    "earthMoonValid": false
  },
  "Qwen3.8Max(Max)V3": {
    "earthMoonValid": false
  },
  "Sonnet5Ultra": {
    "earthMoonValid": true
  },
  "Opus5Ultra-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "DeepSeek-V4-Flash-0731-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "DeepSeek-V4-Flash-0731-V2-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "DeepSeek-V4-Flash-0731-V3-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "DeepSeek-V4-Pro-0813-V1": {
    "earthMoonValid": false
  },
  "DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "DeepSeekV4Pro0813(Max)V2": {
    "earthMoonValid": true
  },
  "DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "DeepSeekProMax-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GLM5.2Max-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.5xHigh-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6Luna(Max)V1": {
    "earthMoonValid": true
  },
  "GPT5.6Luna(Max)V2": {
    "earthMoonValid": false
  },
  "GPT5.6LunaMax-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6SolUltra-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT5.6TerraUltra-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT5.6Sol(high)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Gemini3.1Pro-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Gemini3.5Flash-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Gemini3.6Flash(high)V0": {
    "earthMoonValid": false
  },
  "Gemini3.6Flash-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Gemini3.7Flash(high)V1": {
    "earthMoonValid": false
  },
  "Gemini3.7Flash(high)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Grok4.6(xhigh)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Hy3-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "KimiK3Max-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "KimiK3(Max)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "LongCat2.0-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "MiniMaxM3-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "MiniMaxM3(high)V2-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Opus4.8Ultra-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Qwen3.8Max-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Qwen3.8MaxV2-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Qwen3.8Max(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Sonnet5Ultra-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "MuseSpark1.3Contributor(xhigh)V1": {},
  "MuseSpark1.3Contributor(xhigh)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Gemini3.8Flash(high)V1": {},
  "Gemini3.8Flash(high)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "Gemini3.8Flash(high)V2": {
    "earthMoonValid": false
  },
  "Gemini3.8Flash(high)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "MuseSpark1.3Contributor(xhigh)V2": {
    "earthMoonValid": false
  },
  "MuseSpark1.3Contributor(xhigh)V2-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "OmenAlpha(Max)V1": {
    "earthMoonValid": false
  },
  "OmenAlpha(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT6Astra(Light)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Opus5(Low)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "GPT6Astra(Ultra)V1": {},
  "GPT6Astra(Max)V1": {},
  "GPT6Astra(xhigh)V1": {},
  "DeepSeekV4.1Flash0910(Max)V1": {},
  "DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "MiMoXProPreview(Unknown)V1": {
    "earthMoonValid": false
  },
  "MiMoXProPreview(Unknown)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Step5Preview(high)V1": {},
  "Step5Preview(high)V1-TasksAssignedByOpus5": {
    "earthMoonValid": false
  },
  "MiMo2.6Flash(Unknown)V1": {},
  "MiMo2.6Flash(Unknown)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "MiMo2.6Pro(Unknown)V1": {
    "earthMoonValid": false
  },
  "MiMo2.6Pro(Unknown)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Grok4.7(xhigh)V1": {},
  "Grok4.7(xhigh)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "Opus5.5(Max)V1": {},
  "MiniMaxM3.1FlashPreview(Max)V1": {},
  "MiniMaxM3.1FlashPreview(Max)V1-TasksAssignedByOpus5": {
    "earthMoonValid": true
  },
  "GPT6.1Sol(Ultra)V1": {}
};
const expectedOtherComets = {
  "Opus5(Max)V1": 2,
  "Fable5.1(Max)V1": 3,
  "Qwen3.8Flash(xhigh)V1": 1,
  "Hy4Preview(high)V1": 2,
  "DeepSeek-V4-Flash-0731": 3,
  "DeepSeekV4Pro0813(Max)V2": 1,
  "GLM5.3(Max)V3": 1,
  "GPT5.6Luna(Max)V2": 1,
  "Grok4.5": 1,
  "LongCat2.0": 3,
  "GPT6Astra(Ultra)V1": 3,
  "Grok4.7(xhigh)V1": 1,
  "Opus5.5(Max)V1": 3,
  "Sonnet5.5(Max)V1": 3
};
check(Math.max(...Object.values(expectedOtherComets)) === 3 && expectedOtherComets['Fable5.1(Max)V1'] === 3 && expectedOtherComets['GPT6Astra(Ultra)V1'] === 3 && expectedOtherComets['Sonnet5.5(Max)V1'] === 3, 'Other-comet credit must cap at three, independently of the number of implemented comets and the separate Halley score');
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
  const isProtected = Object.hasOwn(protectedScoreDigests, id);
  const inArchiveReview = SITE.isArchivedWork(work) && !isProtected;
  const inCurrentReview = SITE.isVisibleWork(work) && !isProtected;
  if (inCurrentReview || inArchiveReview) {
    const reviewDate = inArchiveReview || currentSpecReviewIds.has(id) || id === SOL61_XHIGH_SPEC_ID ? '2026-10-15' : id === 'KimiK3(Max)V3' ? '2026-10-12' : '2026-10-11';
    check(score.reviewedAt === reviewDate && score.reviewVersion === 'V3-' + reviewDate.replaceAll('-', ''), `${id}: every reviewed work must retain its own completed V3 provenance`);
    check(score.visualBase === null, `${id}: reviewed works must not retain legacy visual scoring inputs`);
    if (inArchiveReview) check(Array.isArray(score.moonEvidence), `${id}: the archive review requires individual moon evidence`);
    if (Array.isArray(score.moonEvidence)) check(!Object.hasOwn(score, 'moonQuality'), `${id}: per-moon evidence must replace the old global quality multiplier`);
  } else check(!Object.hasOwn(score, 'reviewedAt') && !Object.hasOwn(score, 'reviewVersion'), `${id}: protected records must retain their original review provenance`);
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
  if (!score.hasEarthMoon) check(score.earthMoonValid !== true, `${id}: a missing Earth Moon cannot be marked valid`);
  if (Object.hasOwn(score, 'moonQuality')) allowed(score.moonQuality, [.5, 1], `${id}.moonQuality`);
  if (Object.hasOwn(score, 'moonEvidence')) {
    check(Array.isArray(score.moonEvidence) && score.moonEvidence.length === score.moons, `${id}: per-moon evidence must cover every rendered moon`);
    check(new Set(score.moonEvidence.map(moon => moon.id)).size === score.moons, `${id}: per-moon evidence IDs must be unique`);
    for (const moon of score.moonEvidence) {
      const details = ['parent', 'actualInclinationDeg', 'expectedInclinationDeg', 'periodDays'].filter(key => Object.hasOwn(moon, key));
      exactKeys(moon, ['id', 'quality', 'reason', ...details], `${id}.moonEvidence`);
      check(typeof moon.id === 'string' && moon.id.length > 0 && typeof moon.reason === 'string' && moon.reason.length > 0, `${id}: each moon must have an identifier and evidence`);
      allowed(moon.quality, [0, .5, 1], `${id}.moonEvidence.${moon.id}.quality`);
      if (Object.hasOwn(moon, 'parent')) check(typeof moon.parent === 'string' && moon.parent.length > 0, `${id}.moonEvidence.${moon.id}.parent`);
      if (Object.hasOwn(moon, 'periodDays')) check(Number.isFinite(moon.periodDays) && moon.periodDays !== 0, `${id}.moonEvidence.${moon.id}.periodDays must be a finite nonzero signed period`);
      for (const key of ['actualInclinationDeg', 'expectedInclinationDeg'].filter(key => Object.hasOwn(moon, key))) {
        if (key === 'actualInclinationDeg' && moon[key] === null)
          check(moon.quality === 0 && Boolean(score.fatal), `${id}: an undefined orbital plane must belong to an invalid moon in a documented fatal failure`);
        else finiteRange(moon[key], 0, 180, `${id}.moonEvidence.${moon.id}.${key}`);
      }
    }
  }
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
  const tier = SITE.workTier(work);
  const expectedAdjustment = score.reference ? 0 : tier === 0 ? 3 : tier === 2 ? -3 : tier === 3 ? -6 : 0;
  close(computed.manualAdjustment, expectedAdjustment, `${id}.human-experience tier adjustment`);
  finiteRange(computed.total, 0, tier === 0 ? 109 : 106, `${id}.total`);
  check(computed.fatalCap === null && computed.exact === computed.preCap, `${id}: fatal errors must not cap the numeric score`);
  if (score.fatal) check(tier === 4, `${id}: every fatal work must automatically use the gray Incomplete tier`);
  close(computed.exact, EXPECTED_EXACT[id], `${id}.exact oracle`);
  check(computed.total === Math.round(EXPECTED_EXACT[id]), `${id}.total oracle: expected ${Math.round(EXPECTED_EXACT[id])}, got ${computed.total}`);
}

const source = read('assets/scores.js');
const explicitKeys = [...recordKeys, ...Object.values(nested).flat()];
for (const key of explicitKeys) {
  const count = [...source.matchAll(new RegExp(`["']?\\b${key}["']?\\s*:`, 'g'))].length;
  check(count === WORKS.length, `scores.js source key ${key} must occur exactly ${WORKS.length} times; duplicate/missing key detected (${count})`);
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

const doubaoOneLine = WORKS.find(w => w.id === 'DoubaoSeedEvolving0827(Max)V1');
const doubaoDetailed = WORKS.find(w => w.id === 'DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5');
const astraLightDetailed = WORKS.find(w => w.id === 'GPT6Astra(Light)V1-TasksAssignedByOpus5');
const astraMaxOneLine = WORKS.find(w => w.id === 'GPT6Astra(Max)V1');
const astraXHighOneLine = WORKS.find(w => w.id === 'GPT6Astra(xhigh)V1');
const opusLowDetailed = WORKS.find(w => w.id === 'Opus5(Low)V1-TasksAssignedByOpus5');
const deepSeek41OneLine = WORKS.find(w => w.id === 'DeepSeekV4.1Flash0910(Max)V1');
const deepSeek41Detailed = WORKS.find(w => w.id === 'DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5');
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
check(doubaoOneLine?.group === 'A' && doubaoDetailed?.group === 'B' && doubaoOneLine?.tier === 2 && doubaoDetailed?.tier === 2, 'Both Doubao Seed Evolving 0827 runs must be Tier 2');
check(doubaoOneLine?.pair === 'doubao' && doubaoDetailed?.pair === 'doubao', 'Doubao Seed Evolving 0827 runs must form one explicit pair');
check(JSON.stringify(doubaoOneLine?.tags) === JSON.stringify(['in Zcode']) && JSON.stringify(doubaoDetailed?.tags) === JSON.stringify(['in Zcode']), 'Both Doubao 0827 runs must show in Zcode');
check(doubaoOneLine?.bytes === 56571 && doubaoOneLine?.lines === 1378 && doubaoDetailed?.bytes === 92053 && doubaoDetailed?.lines === 2115, 'Doubao 0827 source metadata must match the supplied files');
check(astraLightDetailed?.group === 'B' && astraLightDetailed?.tier === 1 && astraLightDetailed?.pair === 'gpt6astralight' && JSON.stringify(astraLightDetailed?.tags) === JSON.stringify(['in Codex']), 'GPT-6 Astra Light must remain a Tier 1 detailed-spec Codex run and pair with the added one-line run');
for (const work of [astraMaxOneLine, astraXHighOneLine]) {
  check(work?.group === 'A' && work?.tier === 1 && work?.pair === null && JSON.stringify(work?.tags).startsWith('["in Codex"'), `${work?.id || 'GPT-6 Astra effort'} must be an unpaired Tier 1 one-line Codex run`);
  check(work?.tech === 'Three.js' && work?.needsFloat === true && work?.msaa === true && work?.net.length === 0, `${work?.id || 'GPT-6 Astra effort'} must be offline bundled Three.js with HDR and MSAA`);
  check(WORK_CREATION_DATES[work.id] === '260910' && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work.id} must use its filesystem creation date and saved screenshot`);
}
check(astraMaxOneLine?.bytes === 9685732 && astraMaxOneLine?.lines === 199, 'GPT-6 Astra Max source metadata must match the supplied file');
check(astraXHighOneLine?.bytes === 10213750 && astraXHighOneLine?.lines === 230, 'GPT-6 Astra xHigh source metadata must match the supplied file');
check(opusLowDetailed?.group === 'B' && opusLowDetailed?.tier === 1 && opusLowDetailed?.pair === null && JSON.stringify(opusLowDetailed?.tags) === JSON.stringify(['in Claude Code']), 'Claude Opus 5 Low must be an unpaired Tier 1 detailed-spec Claude Code run');
check(astraLightDetailed?.bytes === 46568 && astraLightDetailed?.lines === 94 && astraLightDetailed?.msaa === true && opusLowDetailed?.bytes === 85421 && opusLowDetailed?.lines === 1713 && opusLowDetailed?.msaa === true, 'Astra Light and Opus Low source metadata must match the supplied files');
check(deepSeek41OneLine?.group === 'A' && deepSeek41Detailed?.group === 'B' && deepSeek41OneLine?.tier === 3 && deepSeek41Detailed?.tier === 3, 'Both DeepSeek V4.1 Flash 0910 runs must be Tier 3');
check(deepSeek41OneLine?.pair === 'deepseekv41flash0910' && deepSeek41Detailed?.pair === 'deepseekv41flash0910', 'DeepSeek V4.1 Flash 0910 runs must form one explicit pair');
check(JSON.stringify(deepSeek41OneLine?.tags) === JSON.stringify(['in Zcode']) && JSON.stringify(deepSeek41Detailed?.tags) === JSON.stringify(['in Zcode']), 'Both DeepSeek V4.1 Flash 0910 runs must show in Zcode');
check(deepSeek41OneLine?.bytes === 114685 && deepSeek41OneLine?.lines === 3019 && deepSeek41OneLine?.tech === 'WebGL2' && !deepSeek41OneLine?.needsFloat && !deepSeek41OneLine?.msaa && deepSeek41OneLine?.net.length === 0, 'DeepSeek V4.1 Flash 0910 one-line metadata must match the supplied file');
check(deepSeek41Detailed?.bytes === 124162 && deepSeek41Detailed?.lines === 3067 && deepSeek41Detailed?.tech === 'WebGL2' && !deepSeek41Detailed?.needsFloat && deepSeek41Detailed?.msaa && deepSeek41Detailed?.net.length === 0, 'DeepSeek V4.1 Flash 0910 detailed metadata must match the supplied file');
check(WORK_CREATION_DATES[deepSeek41OneLine.id] === '260908' && WORK_CREATION_DATES[deepSeek41Detailed.id] === '260908', 'DeepSeek V4.1 Flash 0910 must use its filesystem creation date');
for (const work of [deepSeek41OneLine, deepSeek41Detailed]) check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work.id} screenshot asset must exist`);
check(solHigh?.group === 'A' && solHigh?.tier === 2 && solHigh?.pair === null && JSON.stringify(solHigh?.tags) === JSON.stringify(['in Codex']), 'GPT-5.6 Sol high must be an unpaired Tier 2 in Codex run');
check(solHigh?.bytes === 48544 && solHigh?.lines === 407 && solHigh?.tech === 'WebGL2', 'GPT-5.6 Sol high source metadata must match the supplied file');
check(solMaxOneLine?.group === 'A' && solMaxOneLine?.tier === 1 && solMaxOneLine?.pair === null && SITE.environmentTag(solMaxOneLine) === 'in Codex', 'GPT-5.6 Sol Max replacement must be an unpaired Tier 1 in Codex run');
check(solMaxOneLine?.file === 'models/GPT5.6Sol(Max)V1.html' && solMaxOneLine?.bytes === 102251 && solMaxOneLine?.lines === 2737 && solMaxOneLine?.tech === 'WebGL2' && solMaxOneLine?.msaa === false, 'GPT-5.6 Sol Max replacement metadata must match the supplied file');
for (const work of [doubaoOneLine, doubaoDetailed, astraLightDetailed, opusLowDetailed, solHigh, solMaxOneLine]) check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work.id} screenshot asset must exist`);
check(solMaxDetailed?.group === 'B' && solMaxDetailed?.tier === 1 && solMaxDetailed?.pair === null, 'GPT-5.6 Sol Max must be an unpaired Tier 1 detailed-spec run');
check(JSON.stringify(solMaxDetailed?.tags) === JSON.stringify(['in Codex']) && fs.existsSync(new URL(`../${solMaxDetailed.shot}`, import.meta.url)), 'GPT-5.6 Sol Max detailed must show in Codex and have a screenshot');
for (const work of [solXHighDetailed, solHighDetailed]) {
  const expectedTier = work === solHighDetailed ? 4 : 2;
  check(work?.group === 'B' && work?.tier === expectedTier && work?.pair === null, `${work?.id || 'GPT-5.6 Sol detailed'} must retain its reviewed tier and unpaired detailed-spec metadata`);
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Codex']) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Sol detailed'} must show in Codex and have a screenshot`);
}
check(solMaxDetailed?.bytes === 86118 && solMaxDetailed?.lines === 1061 && solMaxDetailed?.msaa === true, 'GPT-5.6 Sol Max detailed metadata must match the supplied file');
check(solXHighDetailed?.bytes === 76202 && solXHighDetailed?.lines === 283 && solXHighDetailed?.msaa === true, 'GPT-5.6 Sol xHigh detailed metadata must match the supplied file');
check(solHighDetailed?.bytes === 45296 && solHighDetailed?.lines === 172 && solHighDetailed?.msaa === false, 'GPT-5.6 Sol high detailed metadata must match the supplied file');
const lowerEffortRuns = [solMediumOneLine, solMediumDetailed, solLightOneLine, solLightDetailed];
for (const work of lowerEffortRuns) {
  check(work?.tier === 3 && work?.pair === null && JSON.stringify(work?.tags) === JSON.stringify(['in Codex']), `${work?.id || 'GPT-5.6 Sol lower effort'} must be an unpaired Tier 3 in Codex run`);
  check(work?.tech === 'WebGL2' && work?.net.length === 0 && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Sol lower effort'} must be offline WebGL2 with a screenshot`);
}
check(solMediumOneLine?.group === 'A' && solMediumOneLine?.bytes === 22057 && solMediumOneLine?.lines === 161 && solMediumOneLine?.msaa === true, 'GPT-5.6 Sol Medium one-line metadata must match the supplied file');
check(solMediumDetailed?.group === 'B' && solMediumDetailed?.bytes === 37827 && solMediumDetailed?.lines === 111 && solMediumDetailed?.msaa === true, 'GPT-5.6 Sol Medium detailed metadata must match the supplied file');
check(solLightOneLine?.group === 'A' && solLightOneLine?.bytes === 20733 && solLightOneLine?.lines === 127 && solLightOneLine?.msaa === true, 'GPT-5.6 Sol Light one-line metadata must match the supplied file');
check(solLightDetailed?.group === 'B' && solLightDetailed?.bytes === 31891 && solLightDetailed?.lines === 79 && solLightDetailed?.msaa === true, 'GPT-5.6 Sol Light detailed metadata must match the supplied file');
for (const work of [lunaMax1, lunaMax2]) {
  check(work?.group === 'A' && work?.tier === 3 && work?.pair === null && JSON.stringify(work?.tags) === JSON.stringify(['in Codex']), `${work?.id || 'GPT-5.6 Luna Max'} must be an unpaired Tier 3 in Codex run`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GPT-5.6 Luna Max'} screenshot asset must exist`);
}
check(stripCreationDate(lunaMax1?.model) === 'GPT-5.6 Luna (Max) #1' && lunaMax1?.tech === 'WebGL2' && lunaMax1?.bytes === 75455 && lunaMax1?.lines === 1944 && lunaMax1?.net.length === 0, 'GPT-5.6 Luna Max #1 metadata must match the supplied file');
check(stripCreationDate(lunaMax2?.model) === 'GPT-5.6 Luna (Max) #2' && lunaMax2?.tech === 'Three.js' && lunaMax2?.bytes === 64120 && lunaMax2?.lines === 876 && JSON.stringify(lunaMax2?.net) === JSON.stringify(['cdn.jsdelivr.net', 'fonts.googleapis.com']), 'GPT-5.6 Luna Max #2 metadata must match the supplied file and disclose network dependencies');
for (const work of [glm53FlashOneLine, glm53FlashDetailed]) {
  check(work?.tier === 3 && work?.pair === null && work?.tech === 'WebGL2' && work?.net.length === 0, `${work?.id || 'GLM 5.3 Flash'} must be an unpaired offline Tier 3 WebGL2 run`);
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3 Flash'} must show in Zcode and have a screenshot`);
}
check(glm53FlashOneLine?.group === 'A' && glm53FlashOneLine?.bytes === 75687 && glm53FlashOneLine?.lines === 1738 && glm53FlashOneLine?.msaa === false, 'GLM 5.3 Flash one-line metadata must match the supplied file');
check(glm53FlashDetailed?.group === 'B' && glm53FlashDetailed?.bytes === 113486 && glm53FlashDetailed?.lines === 2699 && glm53FlashDetailed?.msaa === true, 'GLM 5.3 Flash detailed metadata must match the supplied file');
check(SITE.scoreFor(glm53FlashDetailed).fatal === null && SITE.workTier(glm53FlashDetailed) === 3, 'GLM 5.3 Flash visual degradation and weak close-ups must receive their audited feature/interaction deductions without a fatal classification');
for (const work of [hy4OneLine1, hy4OneLine2, hy4Detailed1, hy4Detailed2]) {
  check(work?.tier === (work.group === 'A' ? 2 : 1) && JSON.stringify(work?.tags) === JSON.stringify(['in WorkBuddy']), `${work?.id || 'Hy 4 Preview'} must be T2 for one-line, T1 for detailed, and show in WorkBuddy`);
  check(fs.existsSync(new URL(`../${work.file}`, import.meta.url)) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Hy 4 Preview'} source and screenshot must exist`);
}
check(hy4OneLine1?.group === 'A' && hy4OneLine1?.pair === 'hy4v1' && hy4OneLine1?.tech === 'Three.js' && hy4OneLine1?.bytes === 99488 && hy4OneLine1?.lines === 2447 && JSON.stringify(hy4OneLine1?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Hy 4 Preview #1 one-line metadata must match the supplied file');
check(hy4OneLine2?.group === 'A' && hy4OneLine2?.pair === 'hy4v2' && hy4OneLine2?.tech === 'Three.js' && hy4OneLine2?.bytes === 105738 && hy4OneLine2?.lines === 2286 && JSON.stringify(hy4OneLine2?.net) === JSON.stringify(['cdn.jsdelivr.net','unpkg.com','registry.npmmirror.com']), 'Hy 4 Preview #2 one-line metadata must match the renamed V2 file');
check(hy4Detailed1?.group === 'B' && hy4Detailed1?.pair === 'hy4v1' && hy4Detailed1?.tech === 'WebGL2' && hy4Detailed1?.bytes === 126382 && hy4Detailed1?.lines === 2898 && hy4Detailed1?.net.length === 0, 'Hy 4 Preview #1 detailed metadata must match the supplied file');
check(hy4Detailed2?.group === 'B' && hy4Detailed2?.pair === 'hy4v2' && hy4Detailed2?.tech === 'WebGL2' && hy4Detailed2?.bytes === 126917 && hy4Detailed2?.lines === 2864 && hy4Detailed2?.net.length === 0, 'Hy 4 Preview #2 detailed metadata must match the supplied file');
check(!fs.existsSync(new URL('../models/Hy4Preview(high)V3.html', import.meta.url)) && !read('models/Hy4Preview(high)V2.html').includes('HY4 PREVIEW · V3'), 'The former Hy 4 V3 source and visible V3 branding must be removed after renaming it to V2');
check(SITE.scoreFor(hy4OneLine1).manualAdjustment === -3 && SITE.scoreFor(hy4OneLine2).manualAdjustment === -3, 'Both one-line Hy 4 works must receive only the normal T2 adjustment');
close(SITE.scoreFor(hy4OneLine1).evidenceBase, 92.33666666666666, 'Hy 4 #1 evidence including two other comets');
close(SITE.scoreFor(hy4OneLine2).evidenceBase, 83.52666666666667, 'Hy 4 #2 base evidence unchanged');
check(SITE.tieredGallery([hy4OneLine1,hy4OneLine2],false).includes('tier-archive') && !SITE.tieredGallery([hy4OneLine1,hy4OneLine2],false).includes('tier tier-1'), 'One-line Hy 4 cards must be in the collapsible T2 gallery');
for (const work of [glm53Flash2OneLine, glm53Flash2Detailed]) {
  check(work?.tier === 2 && work?.pair === 'glm53flashv2' && JSON.stringify(work?.tags) === JSON.stringify(['in Zcode', '突然聪明了']), `${work?.id || 'GLM 5.3 Flash #2'} must be paired Tier 2 in Zcode with the requested note tag`);
  check(fs.existsSync(new URL(`../${work.file}`, import.meta.url)) && fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3 Flash #2'} source and screenshot must exist`);
}
check(glm53Flash2OneLine?.group === 'A' && glm53Flash2OneLine?.tech === 'Three.js' && glm53Flash2OneLine?.bytes === 64541 && glm53Flash2OneLine?.lines === 1504 && JSON.stringify(glm53Flash2OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'GLM 5.3 Flash #2 one-line metadata must match the supplied file');
check(glm53Flash2Detailed?.group === 'B' && glm53Flash2Detailed?.tech === 'WebGL2' && glm53Flash2Detailed?.bytes === 102402 && glm53Flash2Detailed?.lines === 2390 && glm53Flash2Detailed?.net.length === 0, 'GLM 5.3 Flash #2 detailed metadata must match the supplied file');
const doubaoPair = SITE.pairs().find(pair => pair.a.pair === 'doubao');
check(doubaoPair?.a?.id === doubaoOneLine.id && doubaoPair?.b?.id === doubaoDetailed.id, 'Visible comparison position 19 must be the Doubao pair');
check(SITE.pairs().find(pair => pair.a.pair === 'hy4v1')?.a?.id === hy4OneLine1.id && SITE.pairs().find(pair => pair.a.pair === 'hy4v1')?.b?.id === hy4Detailed1.id && SITE.pairs().find(pair => pair.a.pair === 'hy4v2')?.a?.id === hy4OneLine2.id && SITE.pairs().find(pair => pair.a.pair === 'hy4v2')?.b?.id === hy4Detailed2.id, 'Visible comparison positions 20 and 21 must be Hy 4 Preview #1 and #2');
check(SITE.pairs().find(pair => pair.a.pair === 'glm53flashv2')?.a?.id === glm53Flash2OneLine.id && SITE.pairs().find(pair => pair.a.pair === 'glm53flashv2')?.b?.id === glm53Flash2Detailed.id, 'Visible comparison position 22 must be GLM 5.3 Flash #2');

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

const grok45 = WORKS.find(w => w.id === 'Grok4.5');
const grok46 = WORKS.find(w => w.id === 'Grok4.6(xhigh)V1');
const grok46Detailed = WORKS.find(w => w.id === 'Grok4.6(xhigh)V1-TasksAssignedByOpus5');
check(grok46?.group === 'A' && grok46Detailed?.group === 'B' && grok46?.tier === 2 && grok46Detailed?.tier === 2, 'Both Grok 4.6 runs must be Tier 2');
check(grok46?.pair === 'grok46' && grok46Detailed?.pair === 'grok46', 'Grok 4.6 runs must form one explicit pair');
check(stripCreationDate(grok46?.model) === 'Grok 4.6 (xHigh)' && stripCreationDate(grok46Detailed?.model) === 'Grok 4.6 (xHigh)', 'Grok 4.6 visible naming must be canonical');
check(grok46?.title === '日心仪 · Helios Orrery' && grok46Detailed?.title === '太阳系实时运动模型', 'Grok 4.6 visible titles must match the audited files');
check(grok46?.bytes === 59361 && grok46?.lines === 1527 && grok46?.tech === 'Three.js' && grok46?.needsFloat === true && grok46?.msaa === false, 'Grok 4.6 one-line source metadata must match the replaced file');
check(JSON.stringify(grok46?.net) === JSON.stringify(['fonts.googleapis.com', 'fonts.gstatic.com', 'cdn.jsdelivr.net']), 'Grok 4.6 one-line network dependencies must match the replaced file');
check(grok46Detailed?.bytes === 88989 && grok46Detailed?.lines === 2134 && grok46Detailed?.tech === 'WebGL2' && grok46Detailed?.needsFloat === false && grok46Detailed?.msaa === true && grok46Detailed?.net.length === 0, 'Grok 4.6 detailed source metadata must match the audited file');
for (const work of [grok45, grok46, grok46Detailed]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in build']), `${work?.id || 'Grok'} must show the exact in build tag`);
  check(SITE.environmentTag(work) === 'in build' && SITE.chips(work, null).includes('in build'), `${work?.id || 'Grok'} environment tag must render as in build`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Grok'} screenshot asset must exist`);
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
check(deepSeekPro0813?.bytes === 118670 && deepSeekPro0813?.lines === 2590 && deepSeekPro0813?.tech === 'WebGL2' && deepSeekPro0813?.needsFloat === false && deepSeekPro0813?.msaa === true && deepSeekPro0813?.net.length === 0, 'DeepSeek V4 Pro 0813 #1 detailed source metadata must match the audited file');
check(deepSeekPro0813OneLine?.bytes === 50852 && deepSeekPro0813OneLine?.lines === 1235 && deepSeekPro0813OneLine?.tech === 'Three.js' && deepSeekPro0813OneLine?.needsFloat === true && deepSeekPro0813OneLine?.msaa === false, 'DeepSeek V4 Pro 0813 #1 one-line source metadata must match the audited file');
check(JSON.stringify(deepSeekPro0813OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net', 'esm.sh']), 'DeepSeek V4 Pro 0813 #1 one-line network dependencies must match the audited file');
check(deepSeekPro0813V2OneLine?.group === 'A' && deepSeekPro0813V2OneLine?.tier === 2 && deepSeekPro0813V2OneLine?.pair === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #2 one-line run must be the paired Tier 2 entry');
check(deepSeekPro0813V2?.group === 'B' && deepSeekPro0813V2?.tier === 2 && deepSeekPro0813V2?.pair === 'deepseekv4pro0813v2', 'DeepSeek V4 Pro 0813 #2 detailed run must be the paired Tier 2 entry');
check(stripCreationDate(deepSeekPro0813V2?.model) === 'DeepSeek V4 Pro 0813 (Max) #2' && stripCreationDate(deepSeekPro0813V2OneLine?.model) === 'DeepSeek V4 Pro 0813 (Max) #2', 'New DeepSeek V4 Pro 0813 runs must be numbered #2');
check(deepSeekPro0813V2OneLine?.bytes === 61829 && deepSeekPro0813V2OneLine?.lines === 1387 && deepSeekPro0813V2OneLine?.tech === 'Three.js' && deepSeekPro0813V2OneLine?.needsFloat === true && deepSeekPro0813V2OneLine?.msaa === false, 'DeepSeek V4 Pro 0813 #2 one-line source metadata must match the audited file');
check(JSON.stringify(deepSeekPro0813V2OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'DeepSeek V4 Pro 0813 #2 one-line network dependencies must match the audited file');
check(deepSeekPro0813V2?.bytes === 104830 && deepSeekPro0813V2?.lines === 2423 && deepSeekPro0813V2?.tech === 'WebGL2' && deepSeekPro0813V2?.needsFloat === false && deepSeekPro0813V2?.msaa === true && deepSeekPro0813V2?.net.length === 0, 'DeepSeek V4 Pro 0813 #2 detailed source metadata must match the audited file');
for (const work of [deepSeekPro0813V2OneLine, deepSeekPro0813V2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in dsh']), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} must show the exact in dsh tag`);
  check(SITE.environmentTag(work) === 'in dsh' && SITE.chips(work, null).includes('in dsh'), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} environment tag must render as in dsh`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'DeepSeek V4 Pro 0813 #2'} screenshot asset must exist`);
}
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
check(glm53OneLine3?.bytes === 80129 && glm53OneLine3?.lines === 1840 && glm53OneLine3?.tech === 'WebGL2' && glm53OneLine3?.needsFloat === false && glm53OneLine3?.msaa === false && glm53OneLine3?.net.length === 0, 'GLM 5.3 #3 one-line metadata must match the audited file');
check(JSON.stringify(glm53OneLine1?.net) === JSON.stringify(['cdn.jsdelivr.net']) && JSON.stringify(glm53OneLine2?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Both GLM 5.3 one-line runs must disclose the jsDelivr dependency');
check(glm53Detailed1?.bytes === 105974 && glm53Detailed1?.lines === 2320 && glm53Detailed1?.tech === 'WebGL2' && glm53Detailed1?.needsFloat === false && glm53Detailed1?.msaa === true && glm53Detailed1?.net.length === 0, 'GLM 5.3 #1 detailed metadata must match the audited file');
check(glm53Detailed2?.bytes === 115049 && glm53Detailed2?.lines === 2771 && glm53Detailed2?.tech === 'WebGL2' && glm53Detailed2?.needsFloat === false && glm53Detailed2?.msaa === true && glm53Detailed2?.net.length === 0, 'GLM 5.3 #2 detailed metadata must match the audited file');
for (const work of [glm53OneLine1, glm53OneLine2, glm53OneLine3, glm53Detailed1, glm53Detailed2]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Zcode']), `${work?.id || 'GLM 5.3'} must show the exact in Zcode tag`);
  check(SITE.environmentTag(work) === 'in Zcode' && SITE.chips(work, null).includes('in Zcode'), `${work?.id || 'GLM 5.3'} environment tag must render as in Zcode`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'GLM 5.3'} screenshot asset must exist`);
  check(!SCORES[work.id].reference && !SITE.card(work).includes('is-benchmark'), `${work?.id || 'GLM 5.3'} must remain a scored non-benchmark`);
}
const miniMax2 = WORKS.find(w => w.id === 'MiniMaxM3(high)V2-TasksAssignedByOpus5');
check(miniMax2?.group === 'B' && miniMax2?.tier === 4, 'MiniMax detailed #2 must remain in the Incomplete group');
check(!Object.hasOwn(miniMax2, 'incomplete'), 'MiniMax detailed #2 must not duplicate Tier 4 with an inline Incomplete marker');
check(miniMax2?.pair === null, 'MiniMax detailed #2 must not replace the existing controlled pair');
check(JSON.stringify(miniMax2?.tags) === JSON.stringify(['in ClaudeCLI']), 'MiniMax detailed #2 must show the exact in ClaudeCLI tag');
check(miniMax2?.bytes === 137459 && miniMax2?.lines === 3612 && miniMax2?.tech === 'WebGL2' && miniMax2?.net.length === 0, 'MiniMax detailed #2 source metadata must match the audited file');
check(SITE.chips(miniMax2, null).includes('in ClaudeCLI'), 'MiniMax detailed #2 context tag must render in its chip list');
check(fs.existsSync(new URL(`../${miniMax2.shot}`, import.meta.url)), 'MiniMax detailed #2 screenshot asset must exist');
check(stripCreationDate(WORKS.find(w => w.id === 'MiniMaxM3-TasksAssignedByOpus5')?.model) === 'MiniMax M3 (high) #1', 'Original MiniMax detailed run must be numbered #1');
const miniMaxArchivedPair = SITE.pairs(SITE.archivedWorks()).find(pair => pair.a.pair === 'minimax');
check(miniMaxArchivedPair?.a?.id === 'MiniMax_M3_thinking-1' && miniMaxArchivedPair?.b?.id === 'MiniMaxM3-TasksAssignedByOpus5', 'The original MiniMax M3 controlled pair must remain available in the archive without substituting detailed run #2');

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
check(qwenStableDoc?.bytes === 101683 && qwenStableDoc?.lines === 2096 && qwenStableDoc?.needsFloat === false && qwenStableDoc?.net.length === 0, 'Qwen 3.8 Max detailed source metadata must match the audited file');
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
check(qwenFlashOneLine?.group === 'A' && qwenFlashOneLine?.tech === 'Three.js' && qwenFlashOneLine?.bytes === 47293 && qwenFlashOneLine?.lines === 912 && qwenFlashOneLine?.needsFloat === true && qwenFlashOneLine?.msaa === false && JSON.stringify(qwenFlashOneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Qwen 3.8 Flash one-line metadata must match the supplied file');
check(qwenFlashDetailed?.group === 'B' && qwenFlashDetailed?.tech === 'WebGL2' && qwenFlashDetailed?.bytes === 97214 && qwenFlashDetailed?.lines === 1826 && qwenFlashDetailed?.needsFloat === false && qwenFlashDetailed?.msaa === true && qwenFlashDetailed?.net.length === 0, 'Qwen 3.8 Flash detailed metadata must match the supplied file');
const qwenFlashPair = SITE.pairs().find(pair => pair.a.pair === 'qwen38flash');
check(qwenFlashPair?.a?.id === qwenFlashOneLine.id && qwenFlashPair?.b?.id === qwenFlashDetailed.id, 'Comparison position 24 must pair the two Qwen 3.8 Flash runs');
check(context.window.PAIR_TITLES.qwen38flash === 'Qwen 3.8 Flash (xHigh)', 'Qwen 3.8 Flash comparison title must use canonical xHigh casing');
const deepSeek41Pair = SITE.pairs().find(pair => pair.a.pair === 'deepseekv41flash0910');
check(deepSeek41Pair?.a?.id === 'DeepSeekV4.1Flash0910(Max)V1' && deepSeek41Pair?.b?.id === 'DeepSeekV4.1Flash0910(Max)V1-TasksAssignedByOpus5', 'The final visible comparison must pair the two DeepSeek V4.1 Flash 0910 runs');
const kimi1OneLine = WORKS.find(w => w.id === 'KimiK3Max');
const kimi1Detailed = WORKS.find(w => w.id === 'KimiK3Max-TasksAssignedByOpus5');
const kimi2OneLine = WORKS.find(w => w.id === 'KimiK3(Max)V2');
const kimi2Detailed = WORKS.find(w => w.id === 'KimiK3(Max)V2-TasksAssignedByOpus5');
const kimi3OneLine = WORKS.find(w => w.id === 'KimiK3(Max)V3');
check(stripCreationDate(kimi1OneLine?.model) === 'Kimi K3 (Max) #1' && stripCreationDate(kimi1Detailed?.model) === 'Kimi K3 (Max) #1', 'Original Kimi K3 runs must be numbered #1');
check(stripCreationDate(kimi2OneLine?.model) === 'Kimi K3 (Max) #2' && stripCreationDate(kimi2Detailed?.model) === 'Kimi K3 (Max) #2', 'New Kimi K3 runs must be numbered #2');
check(stripCreationDate(kimi3OneLine?.model) === 'Kimi K3 (Max) #3' && kimi3OneLine?.group === 'A' && kimi3OneLine?.tier === 2 && kimi3OneLine?.pair === null, 'Kimi K3 V3 must be the unpaired Tier 2 one-line #3 run');
check(SITE.isVisibleWork(kimi3OneLine) && !SITE.isArchivedWork(kimi3OneLine) && !archivedWorks.some(work => work.id === kimi3OneLine.id), 'Kimi K3 #3 must be current and absent from the archive');
const restoredKimiRecommendation = SITE.personalRecommendationFor(kimi3OneLine);
check(restoredKimiRecommendation?.direction === 'up' && restoredKimiRecommendation.count === 1 && restoredKimiRecommendation.reason === '性价比不够', 'Restored Kimi #3 must regain the existing family recommendation instead of the archive dash');
check(kimi2OneLine?.group === 'A' && kimi2Detailed?.group === 'B' && kimi2OneLine?.tier === 2 && kimi2Detailed?.tier === 1, 'Kimi K3 #2 one-line must be Tier 2 while its detailed run remains Tier 1');
check(kimi2OneLine?.pair === 'kimik3v2' && kimi2Detailed?.pair === 'kimik3v2', 'Kimi K3 #2 must form its own comparison pair');
check(kimi2OneLine?.bytes === 71207 && kimi2OneLine?.lines === 1667 && kimi2OneLine?.tech === 'WebGL2' && kimi2OneLine?.needsFloat === false && kimi2OneLine?.msaa === true && kimi2OneLine?.net.length === 0, 'Kimi K3 #2 one-line source metadata must match the audited file');
check(kimi2Detailed?.bytes === 118997 && kimi2Detailed?.lines === 2635 && kimi2Detailed?.tech === 'WebGL2' && kimi2Detailed?.needsFloat === false && kimi2Detailed?.msaa === true && kimi2Detailed?.net.length === 0, 'Kimi K3 #2 detailed source metadata must match the audited file');
check(kimi3OneLine?.bytes === 53289 && kimi3OneLine?.lines === 1247 && kimi3OneLine?.tech === 'Three.js' && kimi3OneLine?.needsFloat === true && kimi3OneLine?.msaa === false, 'Kimi K3 #3 metadata must reflect required half-float composer targets and no scene MSAA');
check(JSON.stringify(kimi3OneLine?.net) === JSON.stringify(['cdn.jsdelivr.net']), 'Kimi K3 #3 must disclose the jsDelivr dependency');
for (const work of [kimi2OneLine, kimi2Detailed]) {
  check(JSON.stringify(work?.tags) === JSON.stringify(['in Claude Cli']), `${work?.id || 'Kimi K3 #2'} must show the exact in Claude Cli tag`);
  check(SITE.environmentTag(work) === 'in Claude Cli' && SITE.chips(work, null).includes('in Claude Cli'), `${work?.id || 'Kimi K3 #2'} environment tag must render as in Claude Cli`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Kimi K3 #2'} screenshot asset must exist`);
}
check(JSON.stringify(kimi3OneLine?.tags) === JSON.stringify(['in KimiCode']), 'Kimi K3 #3 must show the exact in KimiCode tag');
check(SITE.environmentTag(kimi3OneLine) === 'in KimiCode' && SITE.chips(kimi3OneLine, null).includes('in KimiCode'), 'Kimi K3 #3 environment tag must render as in KimiCode');
check(fs.existsSync(new URL(`../${kimi3OneLine.shot}`, import.meta.url)), 'Kimi K3 #3 screenshot asset must exist');
check(!SCORES[kimi3OneLine.id].reference, 'Kimi K3 #3 must remain a scored non-benchmark');
const kimi2Pair = SITE.pairs().find(pair => pair.a.pair === 'kimik3v2');
check(kimi2Pair?.a?.id === 'KimiK3(Max)V2' && kimi2Pair?.b?.id === 'KimiK3(Max)V2-TasksAssignedByOpus5', 'Comparison position 06 must pair the two Kimi K3 #2 runs');
const pro0813Pair = SITE.pairs().find(pair => pair.a.pair === 'deepseekv4pro0813');
check(pro0813Pair?.a?.id === 'DeepSeek-V4-Pro-0813-V1' && pro0813Pair?.b?.id === 'DeepSeekV4Pro0813(Max)V1-TasksAssignedByOpus5', 'Comparison position 08 must pair the two DeepSeek V4 Pro 0813 #1 runs');
const pro0813V2Pair = SITE.pairs().find(pair => pair.a.pair === 'deepseekv4pro0813v2');
check(pro0813V2Pair?.a?.id === 'DeepSeekV4Pro0813(Max)V2' && pro0813V2Pair?.b?.id === 'DeepSeekV4Pro0813(Max)V2-TasksAssignedByOpus5', 'Comparison position 09 must pair the two DeepSeek V4 Pro 0813 #2 runs');
check(context.window.PAIR_TITLES.deepseekv4pro0813 === 'DeepSeek V4 Pro 0813 (Max) #1' && context.window.PAIR_TITLES.deepseekv4pro0813v2 === 'DeepSeek V4 Pro 0813 (Max) #2', 'DeepSeek V4 Pro 0813 comparison titles must expose #1 and #2');
const glm53Pair1 = SITE.pairs().find(pair => pair.a.pair === 'glm53v1');
const glm53Pair2 = SITE.pairs().find(pair => pair.a.pair === 'glm53v2');
check(glm53Pair1?.a?.id === 'GLM5.3(Max)V1' && glm53Pair1?.b?.id === 'GLM5.3(Max)V1-TasksAssignedByOpus5', 'Comparison position 10 must pair the two GLM 5.3 #1 runs');
check(glm53Pair2?.a?.id === 'GLM5.3(Max)V2' && glm53Pair2?.b?.id === 'GLM5.3(Max)V2-TasksAssignedByOpus5', 'Comparison position 11 must pair the two GLM 5.3 #2 runs');
check(context.window.PAIR_TITLES.glm53v1 === 'GLM 5.3 (Max) #1' && context.window.PAIR_TITLES.glm53v2 === 'GLM 5.3 (Max) #2', 'GLM 5.3 comparison titles must expose #1 and #2');
const qwenStablePair = SITE.pairs().find(pair => pair.a.pair === 'qwen38max');
check(qwenStablePair?.a?.id === 'Qwen3.8Max(Max)V1' && qwenStablePair?.b?.id === 'Qwen3.8Max(Max)V1-TasksAssignedByOpus5', 'Comparison position 13 must pair Qwen 3.8 Max #1 with its detailed run');
const grok46Pair = SITE.pairs(SITE.archivedWorks()).find(pair => pair.a.pair === 'grok46');
check(grok46Pair?.a?.id === 'Grok4.6(xhigh)V1' && grok46Pair?.b?.id === 'Grok4.6(xhigh)V1-TasksAssignedByOpus5', 'Comparison position 14 must pair the two Grok 4.6 runs');
check(context.window.PAIR_TITLES.grok46 === 'Grok 4.6 (xHigh)', 'Grok 4.6 comparison title must use canonical xHigh casing');
const gemini36OneLine = WORKS.find(w => w.id === 'Gemini3.6Flash(high)V0');
const gemini36Detailed = WORKS.find(w => w.id === 'Gemini3.6Flash-TasksAssignedByOpus5');
check(gemini36OneLine?.group === 'A' && gemini36OneLine?.tier === 3 && gemini36OneLine?.pair === 'gemini36flash', 'Gemini 3.6 Flash V0 must be the paired Tier 3 one-line entry');
check(gemini36Detailed?.group === 'B' && gemini36Detailed?.tier === 3 && gemini36Detailed?.pair === 'gemini36flash', 'Gemini 3.6 Flash detailed run must remain Tier 3 and join the new pair');
check(gemini36OneLine?.bytes === 40641 && gemini36OneLine?.lines === 1085 && gemini36OneLine?.tech === 'Three.js' && gemini36OneLine?.needsFloat === false && gemini36OneLine?.msaa === false, 'Gemini 3.6 Flash V0 source metadata must match the audited file');
check(JSON.stringify(gemini36OneLine?.net) === JSON.stringify(['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com', 'cdn.jsdelivr.net']), 'Gemini 3.6 Flash V0 network dependencies must match the audited file');
check(JSON.stringify(gemini36OneLine?.tags) === JSON.stringify(['主动改写为幻想风格']), 'Gemini 3.6 Flash V0 must disclose its deliberate fantasy reframing');
for (const work of [gemini36OneLine, gemini36Detailed]) {
  check(stripCreationDate(work?.model) === 'Gemini 3.6 Flash (high)', `${work?.id || 'Gemini 3.6 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.6 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.6 Flash'} screenshot asset must exist`);
}
const gemini36Pair = SITE.pairs(SITE.archivedWorks()).find(pair => pair.a.pair === 'gemini36flash');
check(gemini36Pair?.a?.id === 'Gemini3.6Flash(high)V0' && gemini36Pair?.b?.id === 'Gemini3.6Flash-TasksAssignedByOpus5', 'Comparison position 17 must pair the two Gemini 3.6 Flash runs');
const gemini37OneLine = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1');
const gemini37Detailed = WORKS.find(w => w.id === 'Gemini3.7Flash(high)V1-TasksAssignedByOpus5');
check(gemini37OneLine?.group === 'A' && gemini37OneLine?.tier === 3 && gemini37OneLine?.pair === 'gemini37flash', 'Gemini 3.7 Flash one-line run must be the paired Tier 3 entry');
check(gemini37Detailed?.group === 'B' && gemini37Detailed?.tier === 3 && gemini37Detailed?.pair === 'gemini37flash', 'Gemini 3.7 Flash detailed run must be the paired Tier 3 entry');
check(gemini37OneLine?.bytes === 86959 && gemini37OneLine?.lines === 2410 && gemini37OneLine?.tech === 'Three.js' && gemini37OneLine?.needsFloat === false && gemini37OneLine?.msaa === false, 'Gemini 3.7 Flash one-line source metadata must match the audited file');
check(JSON.stringify(gemini37OneLine?.net) === JSON.stringify(['cdnjs.cloudflare.com', 'cdn.jsdelivr.net', 'fonts.googleapis.com', 'fonts.gstatic.com']), 'Gemini 3.7 Flash one-line network dependencies must match the audited file');
check(gemini37Detailed?.bytes === 156951 && gemini37Detailed?.lines === 3967 && gemini37Detailed?.tech === 'WebGL2' && gemini37Detailed?.needsFloat === false && gemini37Detailed?.msaa === true && gemini37Detailed?.net.length === 0, 'Gemini 3.7 Flash detailed source metadata must match the audited file');
for (const work of [gemini37OneLine, gemini37Detailed]) {
  check(stripCreationDate(work?.model) === 'Gemini 3.7 Flash (high)', `${work?.id || 'Gemini 3.7 Flash'} visible naming must be canonical`);
  check(SITE.environmentTag(work) === 'in Antigravity' && SITE.chips(work, null).includes('in Antigravity'), `${work?.id || 'Gemini 3.7 Flash'} must render the in Antigravity tag`);
  check(fs.existsSync(new URL(`../${work.shot}`, import.meta.url)), `${work?.id || 'Gemini 3.7 Flash'} screenshot asset must exist`);
}
const gemini37Pair = SITE.pairs(SITE.archivedWorks()).find(pair => pair.a.pair === 'gemini37flash');
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
check(sonnetOneLine?.title === '太阳系运动模型 · Claude Sonnet 5 (Ultracode·xhigh)', 'Claude Sonnet 5 visible subtitle must use the canonical model name');
const i18nSource = read('assets/i18n.js');
check(i18nSource.includes("'card.openAria': '{name} 的作品截图'") === false, 'card.openAria must describe opening the full work, not only the screenshot');
check(i18nSource.includes("'card.openAria': '打开 {name} 的完整作品'") && i18nSource.includes("'card.openAria': 'Open the complete {name} work'"), 'Pair screenshot links must have bilingual canonical accessible names');
check(!i18nSource.includes('Real-Time Solar System Model — DeepSeek ProMax'), 'English visible subtitle still uses DeepSeek ProMax');
check(!i18nSource.includes('Solar System Motion Model · Sonnet5Ultra'), 'English visible subtitle still uses Sonnet5Ultra');
check(!i18nSource.includes('above Luna, though still below Sol'), 'English score note still uses bare Luna/Sol names');
check(!source.includes('低于 Sol。'), 'Chinese score note still uses bare Sol name');
const siteSource = read('assets/site.js');
const cssSource = read('assets/site.css');
for (const [tier, color] of Object.entries({ 0: '#ff8000', 1: '#a335ee', 2: '#0070dd', 3: '#1eff00', 4: '#9d9d9d' })) {
  check(cssSource.includes(`--tier${tier}:${color}`), `Tier ${tier} must use the requested World of Warcraft equipment color`);
  check(cssSource.includes(`#tbl [data-tier="${tier}"]`), `Tier ${tier} must color rows and alternate entries through their own tier`);
}
const rowColorRule = cssSource.match(/^#tbl tr\[data-tier\]>td:is\([^\n]+/m)?.[0] || '';
for (const column of [1, 2, 3, 6, 8, 9, 10])
  check(rowColorRule.includes(`:nth-child(${column})`), `The requested table column ${column} must inherit its row's equipment color`);
for (const column of [4, 5, 7])
  check(!rowColorRule.includes(`:nth-child(${column})`), `Score, recommendation and environment column ${column} must retain their independent colors`);
check(cssSource.includes('.table-variant-item[data-tier]') && cssSource.includes('.table-variant-rerun[data-tier]'), 'Folded alternate models and reruns must retain their own equipment colors');
check(siteSource.includes("tier === 2 ? -3 : tier === 3 ? -6"), 'Scoring formula must use Tier 2 −3 and Tier 3 −6');
check(siteSource.includes("* (23 / 15)") && siteSource.includes("tier === 0 ? 109 : 106") && siteSource.includes("Math.min(scoreCeiling, evidenceBase + manualAdjustment)"), 'Correctness must convert to 23 points, with ordinary ceiling 106 and Tier 0 ceiling 109');
check(siteSource.includes("* 2.4") && siteSource.includes("geometry: 4, kepler: 6, elements: 5, orientation: 4, epoch: 4"), 'V3 feature and 30-point orbit weights must remain explicit');
check(siteSource.includes("effectiveMoons * 1.5") && siteSource.includes("effectiveMoons - 8") && siteSource.includes("* .75"), 'V3 moon baseline and extra-moon bonus must remain explicit');
check(siteSource.includes("Math.min(3, r.otherComets)") && siteSource.includes("score.parts.cometBonus"), 'V3 other-comet bonus must award one point per non-Halley comet up to three');
check(siteSource.includes("independenceMode === 'native' ? 7 : independenceMode === 'bundled' ? 6 : 5"), 'Runtime independence must use native 7 / bundled Three.js 6 / online 5');
check(!siteSource.includes("w.tech === 'Canvas2D' ? 10") && !siteSource.includes("parts.visual"), 'Canvas2D and legacy visual evidence must not receive score deductions or points');
check((siteSource.match(/s\.total >= 96/g) || []).length === 2 && !siteSource.includes("w.group === 'B' ? 91 : 95"), 'Both score badge and tooltip must use the same inclusive 96-point threshold');
check((siteSource.match(/card\.openAria/g) || []).length >= 6, 'Table model links, rerun popovers, pair, model-gap, and reasoning-effort screenshot links must render accessible full-work labels');
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
  check(home.includes('class="lh-shortcut" href="#luna-haiku"') && home.includes('id="lunaHaikuRows"') && home.includes('id="lunaHaikuPricing"'), 'Both homes must provide the Luna/Haiku shortcut, comparison rows, and pricing container');
  const comparisonHeading = home.match(/<h3 id="lunaHaikuTitle">([^<]*)<\/h3>/)?.[1] || '';
  check(comparisonHeading.includes('Claude Haiku 5.5 (Ultracode·Max)') && !comparisonHeading.includes('Ultracode·xhigh'), 'Both home comparison headings must explicitly name Haiku Ultracode·Max');
  check(home.indexOf('id="luna-haiku"') > home.indexOf('id="tbl"') && home.indexOf('id="luna-haiku"') < home.indexOf('id="solEffortComparison"'), 'The independent Luna/Haiku comparison must follow the main table');
}
const expectedLunaHaikuKeys = ['A.title', 'B.title', 'A.luna', 'A.haiku', 'B.luna', 'B.haiku', 'baseScore', 'delta', 'deltaParts', 'run', 'priceTitle', 'priceUnit', 'context', 'context.short', 'context.middle', 'context.long', 'priceGap', 'priceGap.short', 'priceGap.middle', 'priceGap.long', 'priceChecked', 'priceNote'].map(key => 'lh.' + key).sort();
for (const lang of ['zh', 'en']) {
  const dictionary = i18nSource.split('    ' + lang + ': {')[1]?.split('\n    }')[0] || '';
  const keys = [...dictionary.matchAll(/'(lh\.[^']+)':/g)].map(match => match[1]).sort();
  check(JSON.stringify(keys) === JSON.stringify(expectedLunaHaikuKeys), lang + ': Luna/Haiku strings must be explicitly translated, without fallback or duplicate keys');
}
function validateLunaHaikuMarkup(site, lang, html, pricing) {
  const comparisonRows = site.lunaHaikuComparisons();
  check(JSON.stringify([...html.matchAll(/data-lh-group="([AB])"/g)].map(match => match[1])) === JSON.stringify(['A', 'B']), lang + ': rendered comparison must retain both brief rows');
  const shots = [...html.matchAll(/<a class="lh-shot" href="([^"]+)"[\s\S]*?<img [^>]*src="([^"]+)"/g)];
  check(shots.length === 4, lang + ': comparison must render exactly four screenshot links');
  comparisonRows.flatMap(row => [row.luna, row.haiku]).forEach((work, index) => {
    const href = `view${lang === 'en' ? '.en' : ''}.html?w=${encodeURIComponent(work.id)}`;
    check(shots[index][1] === href && shots[index][2] === work.shot && fs.existsSync(asset(work.shot)), lang + ': screenshot must link the matching existing work in the same language: ' + work.id);
  });
  check(!html.includes('Haiku5.5(Ultracode)V1') && !html.includes('Ultracode·xhigh'), lang + ': dedicated comparison markup must not retain xhigh labels or assets');
  for (const row of comparisonRows) {
    const block = site.lunaHaikuBlock(row);
    const footer = block.match(/<footer class="lh-delta">([\s\S]*?)<\/footer>/)?.[1] || '';
    const values = row.group === 'A' ? ["+30.46","+24.46","+6.00"] : ["+2.75","−0.25","+3.00"];
    check(values.every(value => footer.includes(value)), lang + ': comparison must publish the exact, base, and tier gaps for ' + row.group);
    check(block.includes(`href="compare${lang === 'en' ? '.en' : ''}.html?c=luna-haiku&amp;g=${row.group}"`), lang + ': side-by-side link must select the same brief');
  }
  const rateRows = [...pricing.matchAll(/<tr><th scope="row">([^<]*)<\/th><td>([^<]*)<\/td><td>([^<]*)<\/td>/g)];
  const expectedRates = [['$0.10 / $0.50 / $0.01', '$0.10 / $0.50 / $0.01'], ['$0.10 / $0.50 / $0.01', '$0.50 / $2.50 / $0.05'], ['$0.20 / $0.75 / $0.02', '$0.50 / $2.50 / $0.05']];
  check(rateRows.length === 3, lang + ': pricing must render exactly three input bands');
  rateRows.forEach((row, index) => check(row[2] === expectedRates[index][0] && row[3] === expectedRates[index][1], lang + ': rendered rates must match input band ' + index));
  check(pricing.includes('2026-10-09') && Object.values(expectedContextPrices).every(rate => pricing.includes(`href="${rate.source}"`)), lang + ': pricing must disclose its date and both official sources');
  check(!/\blh\.|\{(?:base|adjustment|delta)\}/.test(html + pricing), lang + ': Luna/Haiku rendering must not leak translation keys or placeholders');
}
for (const lang of ['zh', 'en']) {
  const localized = { window: {}, document: { documentElement: { lang }, readyState: 'loading', addEventListener() {} } };
  vm.createContext(localized);
  for (const file of ['assets/data.js', 'assets/scores.js', 'assets/prices.js', 'assets/i18n.js', 'assets/site.js']) vm.runInContext(read(file), localized, { filename: file });
  const localizedSite = localized.window.SITE;
  const haikuMaxRecommendation = localizedSite.personalRecommendationFor(localizedSite.byId('Haiku5.5(Ultracode·Max)V1'));
  const haikuMaxRecommendationHtml = localizedSite.recommendationSymbols(haikuMaxRecommendation);
  check(haikuMaxRecommendation?.direction === 'up' && haikuMaxRecommendation.count === 5 && haikuMaxRecommendation.reason === '……' && (haikuMaxRecommendationHtml.match(/recommend-symbol-up/g) || []).length === 5 && !haikuMaxRecommendationHtml.includes('recommend-symbol-down'), lang + ': Haiku Ultracode·Max must show five green up-triangles and the literal supplied reason in both languages');
  const work = localizedSite.byId('Fable5.1(Max)V1');
  const tip = localizedSite.scoreTipHtml(work, localizedSite.scoreFor(work));
  const expectedMeta = lang === 'zh' ? '证据基础分 106 · 人工体验修正后 109' : 'Evidence base 106 · 109 after human-experience adjustment';
  check(tip.includes(expectedMeta), `${lang}: Fable 5.1 must use the new 106-to-109 scoring summary`);
  check(!/98\.97|†|作者|Author|author|原始审查|审查原始/.test(tip), `${lang}: Fable 5.1 must not render superseded score explanations`);
  validateLunaHaikuMarkup(localizedSite, lang, localizedSite.lunaHaikuComparisons().map(localizedSite.lunaHaikuBlock).join(''), localizedSite.lunaHaikuPriceBlock());
}
check(enHome.includes("0:'Tier 0'") && i18nSource.includes("'tier.0': 'Tier 0'") && cssSource.includes('.tier-cell-0') && cssSource.includes('.tier.tier-0 .tier-hd'), 'Tier 0 must have an English table label, localized gallery label, and distinct color');
check(zhHome.includes('<section id="glossary" class="glossary" hidden>') && enHome.includes('<section id="glossary" class="glossary" hidden>'), 'Both glossary sections must stay in source but remain hidden');
check(zhHome.includes('<h2>关键术语说明</h2>') && enHome.includes('<h2>Key Terms</h2>') && cssSource.includes('.glossary[hidden]{display:none!important}'), 'Hidden glossary content must be preserved and explicitly suppressed');
const zhSpec = read('spec.html');

// This Sol detailed-spec review is evaluated against the supplied task. Its
// prescribed pole/rotH combination is not a model-invented data error, and the
// requested pause/Now controls do not imply an additional full-state reset.
const sol61SourceText = sol61SpecSource.toString('utf8');
check(zhSpec.includes('渲染要用下表的值') && zhSpec.includes('直接抄') && [
  ['<td>177.4</td><td>211.2</td><td>−5832.5</td>', '177.4,211.2,-5832.5,177.4'],
  ['<td>97.77</td><td>77.7</td><td>−17.24</td>', '97.77,77.7,-17.24,97.77'],
  ['<td>112.8</td><td>137.4</td><td>−153.29</td>', '112.8,137.4,-153.29,119.6'],
].every(([taskValues, modelValues]) => zhSpec.includes(taskValues) && sol61SourceText.includes(modelValues)), 'Sol alone must retain the pole and signed rotH data explicitly prescribed by task 2.2');
check(zhSpec.includes('每帧 Δphase = clamp(2π·Δt_days / 自转周期_天,  −0.22,  +0.22)') && sol61SourceText.includes('Astro.TAU*dtDays/(b.rotH/24),-.22,.22'), 'Sol signed/clamped spin follows task 3.6/7.11; a contradiction inherited from the task must not be charged as a model data fault');
check(zhSpec.includes('播放/暂停、日期时间（UTC）、速度滑块、「此刻」按钮') && zhSpec.includes('时间可正放/倒放/暂停，可跳回当前时刻') && !/全(?:部)?状态(?:重置|复位)|\breset\b/i.test(zhSpec), 'The supplied Sol task requires pause and Now, without an additional full-state reset requirement');
check(SCORES[SOL61_SPEC_ID].correctness.data === 5 && SCORES[SOL61_SPEC_ID].interaction.pauseReset === 1 && SCORES[SOL61_SPEC_ID].interaction.zoom === .5, 'Only the new Sol review withdraws the task-inherited data/full-reset deductions while retaining the demonstrated zoom usability limitation');

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
  const headers = ['model','testDate','tier','score','environment','recommendation','tech','lines'].map(key => node({ k: key }));
  const priceHeader = node({}, ['price-head']);
  const buttons = ['priceInput','priceOutput','priceCache'].map(key => node({ priceSort: key }));
  const tabs = [node({tableGroup:'A',tableStatus:'active'}),node({tableGroup:'B',tableStatus:'active'}),node({tableGroup:'A',tableStatus:'offline'}),node({tableGroup:'B',tableStatus:'offline'})];
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
  localSite.installTableVariantPopovers = () => {};
  localSite.renderProbe = () => {};
  const home = lang === 'zh' ? zhHome : enHome;
  const inline = [...home.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('const S=window.SITE'));
  check(Boolean(inline), lang + ': home behavior script must exist');
  vm.runInContext(inline[1], sandbox, { filename: 'home-' + lang });
  const body = () => one('#tbl tbody').innerHTML;
  const countRows = () => (body().match(/<tr data-tier="\d+">/g) || []).length;
  const checkLunaHaikuHome = visible => {
    check(one('#luna-haiku').hidden === !visible && one('.lh-shortcut').hidden === !visible, lang + ': comparison and shortcut must follow the model search');
    const html = one('#lunaHaikuRows').innerHTML, pricing = one('#lunaHaikuPricing').innerHTML;
    if (visible) validateLunaHaikuMarkup(localSite, lang, html, pricing);
    else check(html === '' && pricing === '', lang + ': unrelated searches must clear both hidden comparison containers');
  };
  checkLunaHaikuHome(true);
  check(countRows() === 26 && !body().includes('Claude Opus 5 (Max)') && body().includes('GPT-6 Astra (Ultra·Max)') && body().includes('DeepSeek V4.1 Flash 0910 (Max)') && body().includes('Claude Haiku 5.5 (Ultracode·Max)') && body().includes('Claude cli') && !body().includes('Claude Fable 5 (Max)'), lang + ': table must default to 26 active one-line model rows including Haiku Ultracode·Max without Claude Fable 5');
  const firstDefaultRow = body().match(/^<tr\b[\s\S]*?<\/tr>/)?.[0] || '';
  check(firstDefaultRow.includes('Opus5.5(Max)V1') && body().includes('Fable5.1(Max)V1') && body().indexOf('Opus5.5(Max)V1') < body().indexOf('Fable5.1(Max)V1'), lang + ': the default one-line table must place Opus 5.5 first, ahead of the equal-scoring Fable 5.1');
  check((firstDefaultRow.match(/recommend-symbol-up/g) || []).length === 5 && !firstDefaultRow.includes('recommend-symbol-down') && firstDefaultRow.includes(lang === 'zh' ? '109是因为满分只有109' : '109 only because the maximum is 109'), lang + ': Opus 5.5 must show five green up-triangles and its requested localized reason');
  const kimiDefaultRow = [...body().matchAll(/<tr\b[\s\S]*?<\/tr>/g)].find(match => match[0].includes('KimiK3Max'))?.[0] || '';
  check(['KimiK3Max', 'KimiK3(Max)V2', 'KimiK3(Max)V3'].every(id => kimiDefaultRow.includes(id)) && kimiDefaultRow.includes('recommend-symbol-up'), lang + ': the default Kimi row must contain all three runs and its family recommendation');
  check(kimiDefaultRow.match(/<a class="table-model" href="([^"]+)"/)?.[1] === 'view' + (lang === 'en' ? '.en' : '') + '.html?w=KimiK3Max', lang + ': the Kimi primary link must keep the highest reviewed score, #1, ahead of #2 and #3');
  check(body().includes('table-variants-trigger') && body().includes('table-variants-popover'), lang + ': numbered reruns must collapse behind an accessible model-row popover');
  check(body().includes('GPT6Astra(Max)V1') && body().includes('GPT6Astra(xhigh)V1') && body().includes(lang === 'zh' ? '查看 GPT-6 Astra 的另外 3 个推理强度' : 'Show 3 other effort levels for GPT-6 Astra'), lang + ': GPT-6 Astra must expose Max and xHigh behind the Ultra row');
  if (lang === 'zh') check(body().includes('<td class="tier-cell-1">T1'), 'Chinese rendered table must abbreviate Tier 1');
  for (const [index,tab] of tabs.entries()) {
    const group=tab.dataset.tableGroup, offline=tab.dataset.tableStatus==='offline';
    tabs[index].listeners.click();
    const works = (offline ? localSite.archivedWorks() : localSite.visibleWorks()).filter(work => work.group === group);
    check(countRows() === localSite.tableDisplayRowCount(works), lang + ': tab must show one primary row per numbered model family in its own group');
    const expectedRows = localSite.tableDisplayRows(works, 'tier', 1, lang);
    const renderedTiers = [...body().matchAll(/<tr data-tier="(\d+)">/g)].map(match => Number(match[1]));
    check(renderedTiers.every(tier => [0,1,2,3,4,9].includes(tier)) && renderedTiers.length === expectedRows.length,
      lang + ': every primary row in each active/offline tab must declare its effective equipment tier');
    for (const work of works.filter(work => sandbox.window.SCORES[work.id].fatal))
      check(localSite.tableRows([work], 'tier', 1, lang)[0].tier === 4, lang + ': fatal models must use Incomplete in every tab and sorting mode');
    check(one('#luna-haiku').hidden === false && (one('#lunaHaikuRows').innerHTML.match(/data-lh-group="[AB]"/g) || []).length === 2, lang + ': all main-table tabs must leave the independent comparison on both briefs');
    check(tabs.every((tab,i)=>tab.attributes['aria-selected'] === String(i===index) && tab.tabIndex === (i===index?0:-1)), lang + ': exactly one of four tabs must expose selected state');
    check(one('#tablePanel').attributes['aria-labelledby'] === 'tableTab'+(offline?'Offline':'')+group, lang + ': panel must be named by the selected tab');
    if (offline) check(!body().includes('recommend-symbol-up') && !body().includes('recommend-symbol-down'), lang + ': offline rows must show dash recommendations even for formerly recommended models');
    if (offline) check([...restoredIds].every(id => !body().includes(id)), lang + ': restored works must not appear in either offline table');
    for (const button of buttons) {
      for (const direction of [1,-1]) {
        button.onclick();
        check(button.attributes['aria-pressed'] === 'true', lang + ': active price sort must be announced');
        check(priceHeader.attributes['aria-sort'] === (direction === 1 ? 'ascending' : 'descending'), lang + ': price sort direction must be announced');
        const first = localSite.tableDisplayRows(works,button.dataset.priceSort,direction,lang)[0];
        check(body().startsWith('<tr data-tier="' + first.tier + '">\n      <td class="table-model-cell">' + localSite.modelCell(first) + '</td>'), lang + ': sort must reorder only the selected group');
      }
    }
  }
  for (const [from,key,to] of [[1,'Home',0],[0,'End',3],[3,'ArrowRight',0],[0,'ArrowLeft',3]]) {
    let prevented=false;
    tabs[from].listeners.keydown({key,preventDefault(){prevented=true;}});
    check(prevented && tabs[to].attributes['aria-selected'] === 'true', lang + ': tabs must support '+key);
  }
  tabs[0].listeners.click();
  one('#modelSearchInput').value = 'Opus 5';
  one('#modelSearchInput').listeners.input();
  checkLunaHaikuHome(false);
  check(countRows() === 2 && !body().includes('Opus5(Max)V1'), lang + ': model search must filter the active one-line tab and exclude archived Opus Max');
  check(one('#tableCountA').textContent === '2 / 26' && one('#tableCountB').textContent === '0 / 22', lang + ': both tabs must show filtered and collapsed model-row counts');
  check(buttons[2].attributes['aria-pressed'] === 'true', lang + ': search must retain selected price field');
  tabs[2].listeners.click();
  check(countRows() === 1 && body().includes('Opus5(Max)V1') && !body().includes('recommend-symbol-up') && !body().includes('recommend-symbol-down'), lang + ': Opus 5 Max search must open its retained source only in the offline tab with a dash recommendation');
  tabs[3].listeners.click();
  check(countRows() === 2 && body().includes('Opus5Ultra-TasksAssignedByOpus5') && body().includes('Opus5(Low)V1-TasksAssignedByOpus5') && !body().includes('recommend-symbol-up') && !body().includes('recommend-symbol-down'), lang + ': archived detailed-spec search must retain both Opus originals with dash recommendations');
  tabs[1].listeners.click();
  check(countRows() === 0 && !body().includes('Opus5Ultra-TasksAssignedByOpus5') && !body().includes('Opus5(Low)V1-TasksAssignedByOpus5'), lang + ': current detailed-spec tab must retain the search without showing either archived Opus work');
  check(buttons[2].attributes['aria-pressed'] === 'true' && buttons[2].dataset.direction === 'desc', lang + ': switching tabs must retain price direction');
  check(!one('#gridA').innerHTML.includes('Opus5(Max)V1') && one('#gridA').innerHTML.includes('Opus5Ultra-WebGL2') && !one('#gridB').innerHTML.includes('Opus5Ultra-TasksAssignedByOpus5') && !one('#gridB').innerHTML.includes('Opus5(Low)V1-TasksAssignedByOpus5'), lang + ': galleries must retain the current one-line benchmark while excluding archived Opus works');
  one('#modelSearchInput').value = 'Omen Alpha';
  one('#modelSearchInput').listeners.input();
  check(countRows() === 0 && one('#modelSearchStatus').innerHTML.includes('2'), lang + ': search must include offline matches without placing them in an active table');
  tabs[2].listeners.click();
  check(countRows() === 1 && body().includes('view'+(lang==='en'?'.en':'')+'.html?w=OmenAlpha(Max)V1'), lang + ': offline one-line tab must open the retained Omen original');
  tabs[3].listeners.click();
  check(countRows() === 1 && body().includes('OmenAlpha(Max)V1-TasksAssignedByOpus5') && one('#tableCountOfflineA').textContent === '1 / 23' && one('#tableCountOfflineB').textContent === '1 / 21', lang + ': offline detailed-spec tab must preserve search and update both archive counts');
  check(!one('#gridA').innerHTML.includes('OmenAlpha') && !one('#gridB').innerHTML.includes('OmenAlpha'), lang + ': archived search matches must stay out of active galleries');
  tabs[1].listeners.click();
  one('#modelSearchInput').value = 'no-such-model';
  one('#modelSearchInput').listeners.input();
  checkLunaHaikuHome(false);
  check(body().includes('colspan="10"'), lang + ': empty state must span all ten columns');
  one('#modelSearchClear').listeners.click();
  checkLunaHaikuHome(true);
  check(countRows() === 22, lang + ': clearing search must preserve the selected detailed-spec tab');
  tabs[0].listeners.click();
  check(countRows() === 26, lang + ': one-line tab must restore its 26 primary model rows');
  for (const query of ['Luna', 'Haiku']) {
    one('#modelSearchInput').value = query;
    one('#modelSearchInput').listeners.input();
    checkLunaHaikuHome(true);
    for (const tab of tabs.slice(0, 2)) {
      tab.listeners.click();
      checkLunaHaikuHome(true);
      if (query === 'Haiku') check(countRows() === 2, lang + ': Haiku search must show both Max and xhigh in each active table while retaining the fixed cross-model comparison');
    }
  }
  tabs[0].listeners.click();
  one('#modelSearchInput').value = 'GPT-6.1 Sol';
  one('#modelSearchInput').listeners.input();
  checkLunaHaikuHome(false);
  for (const [index, id] of [[0, 'GPT6.1Sol(Ultra)V1'], [1, SOL61_XHIGH_SPEC_ID]]) {
    tabs[index].listeners.click();
    check(countRows() === 1 && body().match(/<a class="table-model" href="([^"]+)"/)?.[1] === 'view'+(lang==='en'?'.en':'')+'.html?w='+encodeURIComponent(id) && (body().match(/recommend-symbol-up/g) || []).length === 5 && !body().includes('recommend-symbol-down'), lang + ': Sol search must keep the highest-scoring primary with five green recommendation triangles');
  }
  check(body().includes(SOL61_SPEC_ID) && body().includes(SOL61_XHIGH_SPEC_ID) && body().includes(lang === 'zh' ? '查看 GPT-6.1 Sol 的另外 1 个推理强度' : 'Show 1 other effort levels for GPT-6.1 Sol'), lang + ': Sol search must expose Ultra·Max inside the xHigh effort popover');
  check(one('#gridA').innerHTML.includes('GPT6.1Sol(Ultra)V1') && [SOL61_SPEC_ID, SOL61_XHIGH_SPEC_ID].every(id => one('#gridB').innerHTML.includes(id)) && sandbox.window.WORKS.filter(work => localSite.modelMatches(work, 'GPT-6.1 Sol')).length === 3, lang + ': Sol search must retain all three current candidates across both galleries');
  for (const tab of tabs.slice(2)) { tab.listeners.click(); check(countRows() === 0, lang + ': the new Sol pair must not enter either offline tab'); }
  tabs[0].listeners.click();
  one('#modelSearchInput').value = 'Kimi K3';
  one('#modelSearchInput').listeners.input();
  checkLunaHaikuHome(false);
  check(countRows() === 1 && ['KimiK3Max', 'KimiK3(Max)V2', 'KimiK3(Max)V3'].every(id => body().includes(id)) && body().includes('recommend-symbol-up') && one('#gridA').innerHTML.includes('KimiK3(Max)V3'), lang + ': Kimi search must restore #3 in the current folded row and gallery with the family recommendation');
  tabs[2].listeners.click();
  check(countRows() === 0 && !body().includes('KimiK3(Max)V3') && one('#tableCountOfflineA').textContent === '0 / 23', lang + ': Kimi search must not return the restored #3 from the offline tab');
  one('#modelSearchInput').value = 'MiniMax M3 (high)';
  one('#modelSearchInput').listeners.input();
  for (const tab of tabs.slice(0, 2)) {
    tab.listeners.click();
    check(countRows() === 0, lang + ': MiniMax M3 high search must not insert archived works into either current tab');
  }
  tabs[2].listeners.click();
  check(countRows() === 1 && body().includes('MiniMax_M3_thinking-1'), lang + ': MiniMax M3 high one-line source must remain searchable in the archive');
  tabs[3].listeners.click();
  check(countRows() === 1 && body().includes('MiniMaxM3-TasksAssignedByOpus5') && body().includes('MiniMaxM3(high)V2-TasksAssignedByOpus5') && !body().includes('recommend-symbol-up') && !body().includes('recommend-symbol-down'), lang + ': both retained MiniMax M3 detailed runs must fold into one offline row with dash recommendations');
  one('#modelSearchClear').listeners.click();
  tabs[0].listeners.click();
  checkLunaHaikuHome(true);
  const work = localSite.byId('Opus5(Max)V1');
  const tooltip = localSite.scoreTipHtml(work,localSite.scoreFor(work));
  check(tooltip.includes('105') && !/97\.98|†|作者修订|Author revision/.test(tooltip), lang + ': new Opus must show only its current score with two other-comet points');
}
const compareIframeStyle = cssSource.match(/(?:^|\n)[^{}]*\.split>div>iframe[^{}]*\{([^}]*)\}/)?.[1] || '';
for (const [property, value] of [['position', 'absolute'], ['inset', '0'], ['width', '100%'], ['height', '100%']]) {
  check(new RegExp(`(?:^|;)\\s*${property}\\s*:\\s*${value}(?:;|$)`).test(compareIframeStyle), 'Comparison iframes must fill their side containers: ' + property);
}
// Execute comparison-page routing without loading any model iframe or browser.
function simulateCompare(lang, search) {
  const source = read(lang === 'en' ? 'compare.en.html' : 'compare.html');
  function element(tagName = 'div') {
    return { tagName, className: '', dataset: {}, attributes: {}, listeners: {}, children: [], innerHTML: '', textContent: '',
      setAttribute(key, value) { this.attributes[key] = value; },
      addEventListener(key, listener) { this.listeners[key] = listener; },
      appendChild(child) { child.parent = this; this.children.push(child); },
      remove() { if (this.parent) this.parent.children = this.parent.children.filter(child => child !== this); },
      querySelector(selector) { return this.children.find(child => selector.startsWith('.') && child.className.split(' ').includes(selector.slice(1))) || null; } };
  }
  const nodes = new Map(['#split', '#ttl', '#compareContext', '.back', '.lbl.a', '.lbl.b', '#mode', '#reload'].map(selector => [selector, element()]));
  const split = nodes.get('#split');
  for (let i = 0; i < 2; i++) {
    const cell = element(), gate = element(); gate.className = 'gate'; cell.appendChild(gate); split.appendChild(cell);
  }
  nodes.get('.back').href = source.match(/<a class="back" href="([^"]+)"/)?.[1];
  nodes.get('.lbl.a').textContent = source.match(/<span class="lbl a">([^<]*)/)?.[1];
  nodes.get('.lbl.b').textContent = source.match(/<span class="lbl b">([^<]*)/)?.[1];
  const sandbox = { window: {}, location: { search }, URLSearchParams, addEventListener() {},
    document: { documentElement: { lang }, readyState: 'loading', addEventListener() {},
      querySelector: selector => nodes.get(selector), querySelectorAll: () => [], createElement: element } };
  vm.createContext(sandbox);
  for (const file of ['assets/data.js', 'assets/i18n.js', 'assets/site.js']) vm.runInContext(read(file), sandbox, { filename: file });
  sandbox.window.SITE.detect = () => {};
  sandbox.window.SITE.workRisk = () => null;
  const inline = [...source.matchAll(/<script>([\s\S]*?)<\/script>/g)].find(match => match[1].includes('const S=window.SITE'));
  check(Boolean(inline), lang + ': comparison behavior script must exist');
  let notFound = false;
  try { vm.runInContext(inline[1], sandbox, { filename: 'compare-' + lang }); }
  catch (error) { if (error === 0) notFound = true; else throw error; }
  return { nodes, split, notFound, frames: split.children.flatMap(cell => cell.children.filter(child => child.tagName === 'iframe')) };
}
for (const lang of ['zh', 'en']) {
  const home = 'index' + (lang === 'en' ? '.en' : '') + '.html';
  for (const row of lunaHaikuRows) {
    const actual = simulateCompare(lang, '?c=luna-haiku&g=' + row.group);
    check(!actual.notFound && actual.split.dataset.crossGroup === row.group, lang + ': new comparison route must select group ' + row.group);
    check(JSON.stringify(actual.frames.map(frame => frame.src)) === JSON.stringify([row.luna.file, row.haiku.file]), lang + ': cross-model route must load the matching Luna and Haiku originals');
    check(actual.nodes.get('.back').href === home + '#luna-haiku' && actual.nodes.get('.lbl.a').textContent === 'GPT-6 Luna (Max)' && actual.nodes.get('.lbl.b').textContent === 'Claude Haiku 5.5 (Ultracode·Max)', lang + ': cross-model route must expose Max model labels and its own return anchor');
    const brief = lang === 'zh' ? (row.group === 'A' ? '同一句话任务' : '同一份详细文档') : (row.group === 'A' ? 'Same one-line prompt' : 'Same detailed specification');
    check(actual.nodes.get('#compareContext').textContent === brief && actual.frames.every(frame => frame.attributes.title.includes(lang === 'zh' ? (row.group === 'A' ? '一句话' : '详细文档') : (row.group === 'A' ? 'one-line prompt' : 'detailed specification'))), lang + ': both cross-model iframe titles must identify the selected brief');
  }
  for (const pairName of ['gpt6luna', 'haiku55', 'haiku55max', 'gpt61sol']) {
    const actual = simulateCompare(lang, '?p=' + pairName), pair = SITE.pairs().find(pair => pair.a.pair === pairName);
    check(!actual.notFound && !actual.split.dataset.crossGroup && JSON.stringify(actual.frames.map(frame => frame.src)) === JSON.stringify([pair.a.file, pair.b.file]), lang + ': legacy pair route must retain one-line versus detailed-spec originals');
    check(actual.nodes.get('.back').href === home + '#pairs' && actual.nodes.get('.lbl.a').textContent === (lang === 'zh' ? '一句话提示' : 'One-line prompt') && actual.nodes.get('.lbl.b').textContent === (lang === 'zh' ? '详细文档' : 'Detailed specification'), lang + ': legacy pair route must preserve its original labels and return anchor');
  }
  for (const search of ['?c=luna-haiku&g=C&p=gpt6luna', '?c=unknown&g=A&p=haiku55']) {
    const actual = simulateCompare(lang, search);
    check(actual.notFound && actual.frames.length === 0 && actual.split.innerHTML.includes(lang === 'zh' ? '找不到这组对照' : 'Comparison not found'), lang + ': invalid cross-model routes must show an empty state without falling back to a legacy pair');
  }
}
const enSpec = read('spec.en.html');
const visibleNamingSurface = [
  read('assets/data.js'), read('assets/scores.js'), siteSource, i18nSource, zhHome, enHome, zhSpec, enSpec,
  read('view.html'), read('view.en.html'), read('compare.html'), read('compare.en.html'),
].join('\n');
check(!/\((?:max|MAX)\)/.test(visibleNamingSurface), 'Visible reasoning strength must use the exact casing (Max), never (max) or (MAX)');
check(!/(?:Claude |GPT-)[^'"`\n<>]*\(Ultra\)/.test(visibleNamingSurface), 'Visible model names must use Ultracode·xhigh for Claude and Ultra·Max for GPT while old asset IDs remain unchanged');
check(!/Claude Haiku 5\.5 \(Ultracode\)/.test(visibleNamingSurface), 'Visible Haiku names must use Ultracode·xhigh while old Ultracode asset IDs remain unchanged');
const retiredClaudeUltraSurface = visibleNamingSurface + '\n' + cssSource;
for (const stale of ['CLAUDE_ULTRA_RE', 'installClaudeUltra', 'highlightClaudeUltra', 'claude-ultra-effort', 'claude-ultra-tip', 'dynamic workflows']) {
  check(!retiredClaudeUltraSurface.includes(stale), 'The retired Claude Ultra highlight/tooltip implementation and explanation must be removed: ' + stale);
}
check(typeof SITE.modelMatches === 'function', 'SITE.modelMatches must expose the shared model-name search predicate');
check(typeof SITE.personalRecommendationFor === 'function' && typeof SITE.recommendationSymbols === 'function', 'SITE must expose the personal recommendation lookup and colored-symbol renderer');
check(typeof SITE.modelLogoFor === 'function' && typeof SITE.modelCell === 'function', 'SITE must expose shared model-logo rendering');
const expectedModelLogos = {
  'Claude Haiku 5.5 (Ultracode·Max)': 'anthropic',
  'Claude Opus 5 (Ultracode·xhigh)': 'anthropic',
  'GPT-5.6 Sol (Max)': 'openai', 'Gemini 3.7 Flash (high)': 'gemini',
  'Kimi K3 (Max)': 'kimi', 'DeepSeek V4 Pro 0813 (Max)': 'deepseek',
  'Qwen 3.8 Max (Max)': 'qwen', 'GLM 5.3 (Max)': 'glm', 'Hy 4 Preview (high)': 'hy',
  'Grok 4.6 (xHigh)': 'grok', 'Grok 4.7 (xHigh)': 'grok', 'Doubao Seed Evolving 0827 (Max)': 'doubao',
  'LongCat 2.0 (high)': 'longcat', 'MiniMax M3 (high)': 'minimax',
  'MiMo 2.5 Pro (high)': 'mi',
  'Step 5 Preview (high)': 'stepfun',
  'MuseSpark 1.3 Contributor (xHigh)': 'meta',
  'GPT-6 Astra (Ultra·Max)': 'openai',
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
  'Claude Haiku 5.5 (Ultracode·Max)': ['up', 5, '……'],
  'Claude Haiku 5.5 (Ultracode·xhigh)': ['up', 5, '这价格，有问题都是我的问题'],
  'GPT-6 Astra (Medium)': ['up', 3, '质量不错，但还是用不起'],
  'GPT-6 Luna (Max)': ['up', 3, '便宜是真便宜，仅能完成任务'],
  'Claude Sonnet 5.5 (Max)': ['up', 5, '马甲脱了！你到底是谁？'],
  'Claude Opus 5 (Max)': ['up', 5, '天下第一(天↑)'],
  'Claude Opus 5.5 (Max)': ['up', 5, '109是因为满分只有109'],
  'Claude Fable 5.1 (Max)': ['down', 3, '在座的各位都是垃圾'],
  'Claude Opus 5 (Ultracode·xhigh)': ['up', 5, '又快、又稳、又贵'],
  'Hy 4 Preview (high)': ['down', 5, '绝版测试。已经降智。'],
  'GPT-5.6 Sol (Ultra·Max)': ['up', 4, '甩手掌柜'],
  'GPT-5.6 Terra (Ultra·Max)': ['up', 2, '感谢那个男人'],
  'GPT-5.6 Luna (Max)': ['down', 1, '别浪费token'],
  'Kimi K3 (Max)': ['up', 1, '性价比不够'],
  'DeepSeek V4 Pro 0813 (Max)': ['down', 1, '梁子要加油啊'],
  'DeepSeek V4 Flash 0731 (Max)': ['down', 3, '看看GLM Flash？'],
  'DeepSeek V4.1 Flash 0910 (Max)': ['down', 3, '梁子继续加油啊'],
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
  'MiniMax M3.1 Flash Preview (Max)': ['up', 2, '凑什么"Flash"的热闹'],
  'GPT-6.1 Sol (Ultra·Max)': ['up', 5, '这水平难道不是应该有的吗？'],
  'GPT-6.1 Sol (xHigh)': ['up', 5, '这水平难道不是应该有的吗？'],
  'Grok 4.6 (xHigh)': ['up', 1, '平庸的中等生'],
  'Grok 4.7 (xHigh)': ['up', 1, '平庸的中等生'],
  'Claude Sonnet 5 (Ultracode·xhigh)': ['up', 1, '感觉不值得'],
  'Claude Opus 4.8 (Ultracode·xhigh)': ['down', 5, '你不喜欢Opus5？'],
  'MiMo 2.5 Pro (high)': ['down', 1, '小爱同学…'],
  'MiMo X Pro Preview (Unknown)': ['down', 3, '这是反向升级？'],
  'MiMo 2.6 Flash (Unknown)': ['up', 2, '也就是那么回事'],
  'MiMo 2.6 Pro (Unknown)': ['up', 2, '也就是那么回事'],

  'Step 5 Preview (high)': ['down', 4, '慢的离谱，蠢的吓人'],
  'Gemini 3.6 Flash (high)': ['down', 1, '你就说快不快吧'],
  'Doubao Seed Evolving 0827 (Max)': ['up', 3, '豆包怎么了？现在挺好的'],
  'Gemini 3.1 Pro (high)': ['down', 3, '昔日荣光'],
  'Claude Opus 4.8 (Max)': ['down', 5, '你不喜欢Opus5？'],
  'MuseSpark 1.3 Contributor (xHigh)': ['up', 1, '四舍五入约等于不要钱'],
  'Gemini 3.8 Flash (high)': ['up', 1, '更新了版本号错误的问题'],
  'Omen Alpha (Max)': ['up', 1, '看起来好像很厉害？'],
  'GPT-6 Astra (Light)': ['up', 3, '质量不错，但还是用不起'],
  'Claude Opus 5 (Low)': ['up', 2, '不努力完全不是一个东西'],
  'GPT-6 Astra (Ultra·Max)': ['mixed', 5, '任何订阅都能用/太费太贵', '△△△▽▽', 1],
};
const legacyFamilies = new Set([
  'Claude Opus 5', 'Claude Opus 4.8', 'Claude Sonnet 5',
  'GPT-5.6 Sol', 'GPT-5.6 Terra', 'GPT-5.5', 'GPT-5.6 Luna', 'LongCat 2.0', 'MiMo 2.5 Pro',
]);
for (const work of visibleWorks) {
  const modelKey = stripCreationDate(work.model).replace(/ #\d+$/, '');
  const expected = expectedRecommendations[modelKey];
  const recommendation = SITE.personalRecommendationFor(work);
  if (legacyFamilies.has(modelKey.replace(/\s+\([^()]*\)$/, ''))) {
    const html = SITE.recommendationSymbols(recommendation);
    check(recommendation?.direction === 'legacy' && recommendation.symbols === '-' && recommendation.count === 0 && recommendation.sortValue === 0, `${work.id}: every effort of a retired family must replace triangles with a dash`);
    check(recommendation.reason === (expected?.[2] || '—') && html.includes('title="老模型都不推荐使用"') && html.replace(/<[^>]+>/g, '') === '-', `${work.id}: retired recommendations must retain their reason and show the requested hover explanation`);
    continue;
  }
  if (!expected) {
    check(recommendation === null, `${work.id}: unlisted model must not receive a personal recommendation`);
    continue;
  }
  check(recommendation.direction === expected[0] && recommendation.count === expected[1] && recommendation.reason === expected[2], `${work.id}: personal recommendation mismatch`);
  check(recommendation.symbols === (expected[3] || (expected[0] === 'up' ? '△' : '▽').repeat(expected[1])) && recommendation.sortValue === (expected[4] ?? (expected[0] === 'up' ? expected[1] : -expected[1])), `${work.id}: recommendation symbols or sort value mismatch`);
}
for (const id of [...Object.values(renamedUltraIds).flat(), ...renamedHaikuIds]) {
  const work = SITE.byId(id), key = stripCreationDate(work.model).replace(/ #\d+$/, '');
  const expected = expectedRecommendations[key], recommendation = SITE.personalRecommendationFor(work);
  check(expected && recommendation?.reason === expected[2], id + ': display-only rename must retain the recommendation reason, including archived works');
  if (SITE.isArchivedWork(work)) check(recommendation.symbols === '-' && recommendation.count === 0 && recommendation.sortValue === 0, id + ': renamed archived works must keep dash recommendations');
}
const astraRecommendationHtml = SITE.recommendationSymbols(SITE.personalRecommendationFor(gpt6Astra));
check((astraRecommendationHtml.match(/recommend-symbol-up/g) || []).length === 3 && (astraRecommendationHtml.match(/recommend-symbol-down/g) || []).length === 2 && astraRecommendationHtml.replace(/<[^>]+>/g, '') === '△△△▽▽', 'GPT-6 Astra must render three green outline up-triangles and two red down-triangles');
const searchKimi3 = WORKS.find(w => w.id === 'KimiK3(Max)V3');
check(SITE.modelMatches(searchKimi3, 'kimi k3 max #3'), 'Model search must ignore case, spaces, and display punctuation');
check(SITE.modelMatches(searchKimi3, 'KIMI'), 'Model search must support model-family queries');
check(!SITE.modelMatches(searchKimi3, 'GLM 5.3'), 'Model search must not match unrelated models');
check(SITE.modelMatches(searchKimi3, ''), 'An empty model query must restore every work');
check(typeof SITE.modelGapComparisons === 'function' && typeof SITE.modelGapBlock === 'function' && typeof SITE.modelGapMatches === 'function', 'SITE must expose the curated cross-model comparison API');
const modelGaps = SITE.modelGapComparisons();
check(modelGaps.length === 1 && modelGaps[0].key === 'prompt', 'The hidden model-gap API must retain only the all-current prompt comparison');
check(modelGaps[0]?.left?.id === 'Opus5Ultra-WebGL2' && modelGaps[0]?.middle?.id === 'Hy4Preview(high)V2' && modelGaps[0]?.right?.id === 'DoubaoSeedEvolving0827(Max)V1', 'The first model-gap comparison must contain Claude Opus 5, the higher-scoring Hy 4 one-line run, and Doubao 0827');
check(SITE.modelGapMatches(modelGaps[0], 'Opus') && SITE.modelGapMatches(modelGaps[0], 'Hy 4 Preview') && SITE.modelGapMatches(modelGaps[0], 'Doubao') && !SITE.modelGapMatches(modelGaps[0], 'Kimi'), 'Curated comparisons must follow the global model-name search');
const modelGapHtml = modelGaps.map(SITE.modelGapBlock).join('');
for (const id of ['Opus5Ultra-WebGL2', 'Hy4Preview(high)V2', 'DoubaoSeedEvolving0827(Max)V1']) {
  check(modelGapHtml.includes(`data-score-id="${id}"`), `${id} must render its existing score trigger in the curated comparison`);
  check(modelGapHtml.includes(WORKS.find(w => w.id === id).shot), `${id} must render its existing screenshot in the curated comparison`);
}
for (const id of ['Opus5Ultra-TasksAssignedByOpus5', 'Hy4Preview(high)V2-TasksAssignedByOpus5', 'DoubaoSeedEvolving0827(Max)V1-TasksAssignedByOpus5']) check(siteSource.includes(id) && !modelGapHtml.includes(`data-score-id="${id}"`), id + ': keep the historical document comparison definition without rendering a retired side');
check(typeof SITE.effortComparisonWorks === 'function' && typeof SITE.effortDocumentWorks === 'function' && typeof SITE.effortComparisonBlock === 'function' && typeof SITE.effortComparisonMatches === 'function', 'SITE must expose both six-way reasoning-effort comparison APIs');
check(SITE.effortComparisonWorks().length === 0 && SITE.effortDocumentWorks().length === 0 && !SITE.effortComparisonMatches([], ''), 'Archived Sol effort comparisons must stay off the active page');
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
  const testNoteStart = page.indexOf('class="table-test-note"');
  check(testNoteStart > rulesStart && testNoteStart < tableStart, `${language} detailed-spec testing note must sit between the score rules and the table`);
  check(modelGapStart > rulesStart && modelGapStart < tableStart && page.includes('id="modelGapList"'), `${language} model-gap section must sit between the score rules and the table`);
  check(page.includes('S.modelGapComparisons') && page.includes('S.modelGapMatches'), `${language} model-gap section must participate in global search filtering`);
  check(page.indexOf('<section id="table"') < page.indexOf('<section id="pairs"'), `${language} total table must appear before the same-model comparison`);
  const effortStart = page.indexOf('id="solEffortComparison"');
  check(effortStart > tableStart && effortStart < page.indexOf('<section id="pairs"') && page.includes('id="solEffortList"') && page.includes('id="solEffortDocumentList"') && (page.match(/class="effort-run-scroll"/g) || []).length === 2, `${language} both six-way reasoning-effort comparisons must sit below the table and remain in single-row scroll frames`);
  check(page.includes('S.effortComparisonWorks') && page.includes('S.effortDocumentWorks') && page.includes('S.effortComparisonMatches') && page.includes('S.effortComparisonBlock'), `${language} both six-way reasoning-effort comparisons must participate in global search filtering`);
}
check(zhHome.includes('Claude Opus 5 (Ultracode·xhigh) ｜ Hy 4 Preview (high) ｜ Doubao Seed Evolving 0827 (Max)') && enHome.includes('Claude Opus 5 (Ultracode·xhigh) ｜ Hy 4 Preview (high) ｜ Doubao Seed Evolving 0827 (Max)'), 'Both languages must title the curated comparison with the three requested models');
for (const page of [zhHome, enHome]) check(page.includes('<details class="model-gap-section" id="modelGapComparisons" aria-labelledby="modelGapTitle" hidden>') && page.includes('<summary class="model-gap-section-head">') && !page.includes("set('#modelGapComparisons'"), 'The retained model-gap comparison must stay hidden from the page and must not be restored by search');
check(zhHome.includes('各自得分更高的 #2') && enHome.includes('higher-scoring #2 run'), 'Both curated comparison introductions must disclose that Hy 4 uses its higher-scoring #2 runs');
check(zhHome.includes('同一个 GPT-5.6 Sol，六档推理强度') && enHome.includes('One GPT-5.6 Sol across six reasoning levels'), 'Both languages must title the six-way reasoning-effort comparison');
check(!zhHome.includes('不能用来证明的：模型能力排序') && !zhHome.includes('Claude Fable 5 (Max) 仍没有文档版') && !zhHome.includes('思考档位说明：'), 'Chinese method section must remove the three requested explanatory paragraphs');
check(!enHome.includes('What it cannot demonstrate: an overall ranking of model capability') && !enHome.includes('Claude Fable 5 (Max) still has no specification-based version') && !enHome.includes('Reasoning-level note:'), 'English method section must remove the corresponding three explanatory paragraphs');
check(enHome.includes("works.length===1?'entry':'entries'") && enHome.includes("pairs.length===1?'comparison':'comparisons'"), 'English live search status must use singular nouns for one result');
check(zhHome.includes('<th data-k="model">模型</th><th data-k="testDate">测评日</th><th data-k="tier">梯队</th><th data-k="score" class="n">得分</th>\n      <th data-k="recommendation">推荐(测评日)</th><th>理由</th><th data-k="environment">环境</th><th data-k="tech">渲染</th><th data-k="lines">行数(大小)</th>'), 'Chinese table must use the requested Model, Test Date, Tier, Score, Pick at Test Date, Reason, Environment, Renderer, Lines/Size order');
check(enHome.includes('<th data-k="model">Model</th><th data-k="testDate">Test Date</th><th data-k="tier">Tier</th><th data-k="score" class="n">Score</th>\n      <th data-k="recommendation">Pick (Test Date)</th><th>Reason</th><th data-k="environment">Environment</th><th data-k="tech">Renderer</th><th data-k="lines">Lines (Size)</th>'), 'English table must mirror the requested column order');
for (const page of [zhHome, enHome]) {
  check(!page.includes('data-k="nfeat"') && !page.includes('data-k="weight"'), 'Total table must remove Feature Count and Weight columns');
  check(!page.includes('w.nfeat') && !page.includes("w.weight==='heavy'"), 'Table row renderer must not emit removed Feature Count or Weight cells');
  check(page.includes('S.tableDisplayRows(tableScope(works,tableGroup,tableStatus),sk,sd,') && page.includes('S.recommendationSymbols(w.personal)'), 'Table rows must collapse numbered reruns while rendering colored family-level personal recommendations');
  check(page.includes('S.modelCell(w)') && page.includes('S.codeSizeCell(w)') && !page.includes('>运行 →</a>') && !page.includes('>Run →</a>'), 'Model names must open entries and replace the old Action column');
  check(page.includes('S.recommendationSymbols(w.personal)') && !page.includes("w.personal.direction==='up'?'👍':'👎'"), 'Recommendation cells must use the normalized colored triangle renderer instead of thumb emoji');
}

check(zhHome.includes("0:'T0',1:'T1',2:'T2',3:'T3'"), 'Chinese table must use T0–T3 while preserving other tier labels');
for (const page of [zhHome,enHome]) {
  const table = page.slice(page.indexOf('<table id="tbl">'),page.indexOf('</table>',page.indexOf('<table id="tbl">'))+8);
  check(!/data-k="(?:bytes|group)"/.test(table) && table.includes('data-k="lines"'), 'Lines and size must share one sortable column while Brief stays hidden');
  check((page.match(/role="tab"/g)||[]).length === 4 && page.includes('role="tablist"') && page.includes('role="tabpanel"'), 'Both pages must expose four active/offline prompt-format tabs and their table panel');
  check((table.match(/<th[ >]/g)||[]).length === 10, 'Revised table must have ten columns');
  check(table.indexOf('data-k="lines"') < table.indexOf('data-price-sort') && table.indexOf('data-k="environment"') < table.indexOf('data-price-sort'), 'Price must be the final column');
  check(table.includes(') $/M</th>'), 'Both price headings must visibly include the dollar symbol');
  check((table.match(/data-price-sort=/g)||[]).length === 3, 'Each price component must be independently sortable');
  check(page.includes('colspan="10"') && page.includes('S.esc(w.testDate') && page.includes('S.priceCell(w)') && page.includes('assets/prices.js'), 'Rows, date column, empty state and price script must be synchronized');
  check(page.includes('button.dataset.priceSort') && page.includes('tbl(searchTableWorks())'), 'Price sorting must preserve active model search');
  check(page.includes('2026-09-03') && page.includes('2026-09-05') && page.includes('$20 / $75 / $2') && page.includes('$0.90 / $4.47 / $0.18') && page.includes('OpenRouter'), 'Price notes must disclose the general date, Astra price/date, Doubao estimate, and OpenRouter exception');
  for (const match of page.matchAll(/<script>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
}

check(zhHome.includes('其余暂时留空') && enHome.includes('all others remain blank for now'), 'Both table introductions must explain the intentionally partial recommendation list');
check(siteSource.includes('Fast, reliable, and expensive') && siteSource.includes('Understanding is online; execution falls flat'), 'Personal recommendation reasons must include English translations');
check(cssSource.includes('--good:#84dfa0') && cssSource.includes('.table-personal-rec .recommend-symbol-up{color:var(--good)!important}') && cssSource.includes('.table-personal-rec .recommend-symbol-down{color:var(--bad)!important}'), 'Every recommendation triangle must use a defined and enforced positive or negative color');
check(!zhHome.includes('唯一的变量就是需求形式') && !enHome.includes('only variable between the two groups'), 'Home copy must not claim all 22 pairs differ only by brief format');
check(zhHome.includes('文档版提升最大的 6 组') && zhHome.includes('详细文档</span> − <span style="color:var(--A)">一句话') && enHome.includes('The 6 Largest Detailed-Spec Gains') && enHome.includes('detailed specification</span> − <span style="color:var(--A)">one-line prompt'), 'Both pair introductions must explain the directional top-six selection');
check(zhHome.includes('不能单凭筛选后的六组证明因果') && enHome.includes('not causal proof on their own'), 'Both pair introductions must disclose the selected-case evidence limit');
check(!zhHome.includes('14 组严格对照') && !enHome.includes('14 strict pairs'), 'Paired statistics must not be described as uniformly strict controls');
check(zhHome.includes('第二梯队扣 3 分，第三梯队扣 6 分') && enHome.includes('Tier 2 receives −3, Tier 3 receives −6'), 'Both home pages must publish the current human-experience tier deductions');
check(zhHome.includes('基础 100 分 + 超额卫星 3 分 + 其他彗星 3 分') && zhHome.includes('理论最高分为 106') && zhHome.includes('哈雷彗星仍单独计 3 分'), 'Chinese scoring rules must explain the 100+3+3 structure and separate Halley score');
check(enHome.includes('100 Base + 3 Extra Moons + 3 Other Comets') && enHome.includes('the theoretical maximum is 106') && enHome.includes('Halley’s Comet remains a separate 3-point item'), 'English scoring rules must explain the 100+3+3 structure and separate Halley score');
check(zhHome.includes('id="aAll">40') && enHome.includes('id="aAll">40') && zhHome.includes('id="bAll">31') && enHome.includes('id="bAll">31') && zhHome.includes('id="tAll">137') && enHome.includes('id="tAll">137'), 'Both home pages must publish 40/31 active counts and 137 retained entries before JavaScript runs');
check(zhHome.includes('一句话组 40 件和文档组 31 件') && enHome.includes('prefer the 28 paired results over treating all 40 one-line and 31 detailed-spec works'), 'Both full summaries must use the current paired and group counts');
check(zhHome.includes('28 组同模型') && enHome.includes('28 same-model') && ["50.02 / 70","62.01 / 70","31.56 / 36","33.19 / 36"].every(value => zhHome.includes(value) && enHome.includes(value)), 'Both home pages must publish all four independently calculated V3 28-pair statistics');
check(zhHome.includes('详细文档版以实际任务原文为验收依据') && zhHome.includes('任务依从与物理正确性的区别') && enHome.includes('Detailed-spec entries are assessed against the actual task.') && enHome.includes('distinguishes task compliance from physical correctness'), 'Both home pages must preserve the task-attribution rule and distinguish credited task compliance from physical correctness');
check(!zhHome.includes('没有显示稳定提升') && !zhHome.includes('没有显示出稳定提升') && !enHome.includes('no stable lift'), 'The revised sample summaries must not retain a stale claim that execution failed to improve after the corrected task-attribution review');
check(zhHome.includes('第一梯队只代表主观分组，不会自动成为标杆') && enHome.includes('Tier 1 is only a subjective grouping and does not automatically confer benchmark status'), 'Both home pages must separate subjective Tier 1 placement from benchmark status');
check(zhHome.includes('仅 Claude Opus 5 (Ultracode·xhigh) 经单独确认标为') && enHome.includes('Only Claude Opus 5 (Ultracode·xhigh) has been separately designated') && i18nSource.includes("'benchmark.recommend': '含标杆 · 重点推荐'") && i18nSource.includes("'benchmark.recommend': 'Includes benchmarks · Recommended'"), 'Both languages must present Claude Opus 5 (Ultracode·xhigh) as the only benchmark');
check(zhHome.includes('悬停可查看证据评分与分项') && enHome.includes('hover to view the Evidence Score and breakdown'), 'Both home pages must explain that benchmark scores are available on hover');
check(zhHome.includes('非标杆作品最终分大于等于 96，显示为绿色') && enHome.includes('Non-benchmark entries turn green at 96 or higher.'), 'Both home pages must publish the uniform inclusive 96-point green threshold');
for (const work of WORKS) {
  const id = work.id;
  const score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work);
  const visibleText = cell.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const tip = SITE.scoreTipHtml(work, score);
  const badgeClasses = cell.match(/class="([^"]*)"/)?.[1] || '';
  const tipHeadClasses = tip.match(/class="score-tip-head([^"]*)"/)?.[1] || '';
  const expectedHigh = !score.reference && score.total >= 96;
  const hasHigh = classes => /(?:^|\s)is-high(?:\s|$)/.test(classes);
  check(hasHigh(badgeClasses) === expectedHigh && hasHigh(tipHeadClasses) === expectedHigh, `${id}: badge and tooltip must use the 96-point threshold in current and offline tabs`);
  check(badgeClasses.includes('score-benchmark') === score.reference && tipHeadClasses.includes('is-reference') === score.reference, `${id}: only benchmark scores must retain the gold badge and tooltip classes`);
  if (!score.reference) continue;
  check(work.group === 'A' && SITE.isVisibleWork(work) && !SITE.isArchivedWork(work) && score.reference, `${id}: the one-line benchmark must remain current and retain reference status`);
  check(createHash('sha256').update(fs.readFileSync(asset(work.file))).digest('hex') === 'acaf9c08619c82288e53206bec6ec539c09a57cdfff7d3f10627938e1d82ba7c', `${id}: the original benchmark source must remain unchanged`);
  check(cell.includes('⚑') && cell.includes('<button') && cell.includes('score-trigger') && cell.includes('data-score-id'), `${id}: benchmark score cell must remain a gold flag button with a tooltip trigger`);
  check(!/\d/.test(visibleText), `${id}: benchmark score cell must not render the numeric score directly`);
  check(tip.includes(`${score.total}<i>/106</i>`) && tip.includes('score-tip-grid') && tip.includes('is-reference'), `${id}: benchmark tooltip must expose its score and breakdown`);
}
for (const group of ['A', 'B']) for (const [data, total, green] of [[2, 95, false], [2.5, 96, true]]) {
  SCORES.testGreenThreshold = { ...SCORES[SOL61_XHIGH_SPEC_ID], correctness: { runtime: 5, data, integrity: 5 } };
  const work = { ...sol61XhighSpec, id: 'testGreenThreshold', group }, score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work), tip = SITE.scoreTipHtml(work, score);
  const hasHigh = html => /class="[^"]*\bis-high\b/.test(html);
  check(score.total === total && hasHigh(cell) === green && hasHigh(tip) === green,
    `${group}: rounded 95 must remain ordinary and rounded 96 must turn green in both the score badge and tooltip`);
  delete SCORES.testGreenThreshold;
}
for (const id of ['GPT5.6SolUltra-WebGL2']) {
  const work = SITE.byId(id);
  const score = SITE.scoreFor(work);
  const cell = SITE.scoreCell(work);
  check(!SCORES[id].reference && cell.includes(`>${score.total}<`) && !cell.includes('score-benchmark') && !cell.includes('⚑'), `${id}: former benchmark must render its ordinary numeric Evidence Score`);
}
const kimi2ScoreCell = SITE.scoreCell(SITE.byId('KimiK3(Max)V2'));
check(!SCORES['KimiK3(Max)V2'].reference && kimi2ScoreCell.includes(`>${Math.round(EXPECTED_EXACT['KimiK3(Max)V2'])}<`) && kimi2ScoreCell.includes('<button') && !kimi2ScoreCell.includes('score-benchmark'), 'Kimi K3 #2 one-line must remain Tier 2 and show its reviewed numeric evidence score instead of a benchmark flag');
check(i18nSource.includes("'score.referenceAria': '{name}，标杆，证据评分 {score} 分，查看分项得分'") && i18nSource.includes("'score.referenceAria': '{name}, benchmark, Evidence Score {score}. View score breakdown.'"), 'Benchmark tooltip triggers must expose their scores to assistive technology in both languages');
check(!siteSource.includes("pair.featuredScoreNote', { a:"), 'Featured comparison must not expose the benchmark score');
check(zhSpec.includes('Claude Opus 5 (Ultracode·xhigh)') && enSpec.includes('Claude Opus 5 (Ultracode·xhigh)'), 'Specification author must be labeled Claude Opus 5 (Ultracode·xhigh) in both languages');
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
for (const sourceText of [read('assets/data.js'), read('assets/scores.js'), i18nSource, siteSource, zhHome, enHome]) check(!sourceText.includes('Fable5Max') && !sourceText.includes('Fable_5_Max') && !sourceText.includes('Claude Fable 5 (Max)'), 'Retired Claude Fable 5 references must be removed while Claude Fable 5.1 remains');

const stats = SITE.scoreStats();
close(stats.maxima.coverage + stats.maxima.execution, 106, 'Score maxima');
check(stats.maxima.coverage === 70 && stats.maxima.execution === 36 && stats.maxima.total === 106, 'Max definition must be 70 coverage + 36 execution = 106, including both three-point bonuses');
check(stats.maxima.final === 109, 'Tier 0 final ceiling must be separately defined as 109');
check(stats.pairedSummary.n === 28, 'Paired statistics must use 28 active pairs');
close(stats.pairedSummary.coverage.a, 50.016785714285696, 'Paired a coverage mean');
close(stats.pairedSummary.coverage.b, 62.010714285714286, 'Paired b coverage mean');
check(JSON.stringify(stats.pairedSummary.coverage.outcomes) === JSON.stringify({"improve":23,"tie":0,"decline":5}), 'coverage paired outcomes must match the evidence');
close(stats.pairedSummary.execution.a, 31.555952380952387, 'Paired a execution mean');
close(stats.pairedSummary.execution.b, 33.19047619047619, 'Paired b execution mean');
check(JSON.stringify(stats.pairedSummary.execution.outcomes) === JSON.stringify({"improve":24,"tie":0,"decline":4}), 'execution paired outcomes must match the evidence');
close(stats.pairedSummary.exact.a, 78.14416666666664, 'Paired a exact mean');
close(stats.pairedSummary.exact.b, 92.30833333333332, 'Paired b exact mean');
check(JSON.stringify(stats.pairedSummary.exact.outcomes) === JSON.stringify({"improve":24,"tie":0,"decline":4}), 'exact paired outcomes must match the evidence');

const EXPECTED_WHOLE_GROUP = {
  "all": {
    "a": [
      40,
      51.640999999999984,
      32.33333333333333,
      81.34933333333335
    ],
    "b": [
      31,
      61.898709677419355,
      33.41290322580646,
      92.50516129032258
    ]
  },
  "withoutReferences": {
    "a": [
      39,
      51.324102564102546,
      32.23931623931624,
      80.8711111111111
    ],
    "b": [
      31,
      61.898709677419355,
      33.41290322580646,
      92.50516129032258
    ]
  },
  "withoutTier4": {
    "a": [
      39,
      51.615897435897416,
      32.656410256410254,
      81.58000000000001
    ],
    "b": [
      30,
      62.22866666666666,
      33.96055555555556,
      93.28922222222222
    ]
  },
  "withoutReferencesOrTier4": {
    "a": [
      38,
      51.289999999999985,
      32.56842105263158,
      81.09526315789473
    ],
    "b": [
      30,
      62.22866666666666,
      33.96055555555556,
      93.28922222222222
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
console.log(`Mean exact score: A ${p.exact.a.toFixed(4)}, B ${p.exact.b.toFixed(4)}, delta ${(p.exact.b - p.exact.a).toFixed(4)}`);
console.log('\nWhole-group sensitivity (coverage / execution / exact)');
for (const [label, groups] of Object.entries(stats.wholeGroup)) {
  const format = group => `n=${group.n} ${group.coverage.toFixed(2)} / ${group.execution.toFixed(2)} / ${group.exact.toFixed(2)}`;
  console.log(`${label}: A ${format(groups.a)}; B ${format(groups.b)}`);
}
console.log('Sensitivity identifiers: references = ' + referenceIds.join(', '));
console.log('Sensitivity identifiers: Tier 4 = ' + visibleWorks.filter(w => SITE.workTier(w) === 4).map(w => w.id).join(', '));
console.log(`\nScore validation passed: ${WORKS.length} score records, ${visibleWorks.length} visible works, V3 fields/formula, canonical metadata, Tier 0, pairs, sensitivity, evidence max=106, and Tier 0 final max=109.`);
