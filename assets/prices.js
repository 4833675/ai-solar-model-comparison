/* Saved USD / 1M-token references: mostly 2026-09-03, with entry-specific dates where set.
   Peak hours, highest context band, standard service, before promotions.
   Cache means read/hit, not write/storage. */
(function () {
  'use strict';
  const sources = {
    claude: 'https://platform.claude.com/docs/en/about-claude/pricing',
    openai: 'https://developers.openai.com/api/docs/pricing',
    google: 'https://ai.google.dev/gemini-api/docs/pricing',
    grok: 'https://docs.x.ai/developers/pricing',
    hy: 'https://www.tencentcloud.com/document/product/1300/78937',
    kimi: 'https://www.kimi.com/en/blog/kimi-k3',
    deepseek: 'https://api-docs.deepseek.com/quick_start/pricing/',
    qwen: 'https://www.alibabacloud.com/help/en/model-studio/model-pricing',
    glm: 'https://docs.z.ai/guides/overview/pricing',
    longcat: 'https://longcat.ai/platform/docs/Pricing/LongCat-2.0.html',
    mimo: 'https://mimo.mi.com/models/mimo-v2.5-pro',
    minimax: 'https://platform.minimax.io/docs/guides/pricing-paygo',
    openrouter: 'https://openrouter.ai/meta/muse-spark-1.3-contributor',
  };
  const entries = [
    ['Claude Fable 5.1', 10, 50, .25, 'claude'],
    ['Claude Fable 5', 10, 50, 1, 'claude'],
    ['Claude Opus 5', 5, 25, .5, 'claude'],
    ['Claude Opus 4.8', 5, 25, .5, 'claude'],
    ['Claude Sonnet 5', 2, 10, .2, 'claude'],
    ['GPT-6 Astra', 20, 75, 2, 'openai', null, '2026-09-05'],
    ['GPT-5.6 Sol', 10, 45, 1, 'openai', 'solReference'],
    ['GPT-5.6 Terra', 4, 18, .4, 'openai'],
    ['GPT-5.6 Luna', .4, 1.8, .04, 'openai'],
    ['GPT-5.5', 10, 45, 1, 'openai'],
    ['Gemini 3.1 Pro', 4, 18, .4, 'google'],
    ['Gemini 3.6 Flash', 1.5, 7.5, .15, 'google'],
    ['Gemini 3.7 Flash', 1.5, 7.5, .15, 'google'],
    ['Gemini 3.8 Flash', 1.5, 7.5, .15, 'google'],
    ['MuseSpark 1.3 Contributor', .10, .20, .002, 'openrouter', 'openrouter'],
    ['Grok 4.6', 4, 12, 1, 'grok'],
    ['Hy 4 Preview', .834, 2.501, .042, 'hy'],
    ['Kimi K3', 3, 15, .3, 'kimi'],
    ['DeepSeek V4 Pro 0813', 1.32, 3.96, .044, 'deepseek'],
    ['DeepSeek V4 Flash 0731', .44, 1.32, .014, 'deepseek'],
    ['Qwen 3.8 Max', 2, 6, .25, 'qwen', 'qwenCache'],
    ['Qwen 3.8 Flash', .15, .47, .016, 'qwen'],
    ['GLM 5.3', 1.4, 4.4, .26, 'glm'],
    ['GLM 5.3 Flash', .15, .5, .03, 'glm'],
    ['Doubao Seed Evolving', .9, 4.47, .18, null, 'estimated'],
    ['LongCat 2.0', .75, 2.95, .015, 'longcat'],
    ['MiMo 2.5 Pro', .435, .87, .0036, 'mimo'],
    ['MiniMax M3', 1.2, 4.8, .24, 'minimax', 'minimaxList'],
  ];
  window.MODEL_PRICE_DATE = '2026-09-03';
  window.MODEL_PRICES = Object.fromEntries(entries.map(([model, input, output, cache, source, note, date]) =>
    [model, Object.freeze({ input, output, cache, source: sources[source] || null, note: note || null, date: date || null })]));
})();
