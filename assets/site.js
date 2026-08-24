/* ===== 太阳系模型对比展示站 · 公共脚本 ===== */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const kb = b => b < 1024 * 1024 ? (b / 1024).toFixed(0) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const I18N = window.I18N || { en: false, t: key => key, page: value => value,
    workText: (work, key) => key === 'fix.what' ? work.fix && work.fix.what || '' : work[key] || '',
    scoreNote: (_work, fallback) => fallback || '' };
  const t = (key, vars) => I18N.t(key, vars);
  const page = value => I18N.page(value);
  const workText = (work, key) => I18N.workText(work, key);
  const scoreNote = (work, fallback) => I18N.scoreNote(work, fallback);
  const tierLabel = tier => t(`tier.${tier}`);
  const hiddenWorkIds = new Set(window.HIDDEN_WORK_IDS || []);
  const isVisibleWork = work => !!work && !hiddenWorkIds.has(work.id);
  const visibleWorks = () => (window.WORKS || []).filter(isVisibleWork);
  const modelSearchKey = value => String(value == null ? '' : value)
    .normalize('NFKC').toLocaleLowerCase().replace(/[\s()[\]{}·._/\\-]+/g, '');
  const modelMatches = (work, query) => {
    const key = modelSearchKey(query);
    return !key || modelSearchKey(work && work.model).includes(key);
  };
  const MODEL_GAP_DEFS = [
    { key: 'prompt', leftId: 'Opus5Ultra-WebGL2', middleId: 'Hy3', rightId: 'DoubaoSeedEvolving(Max)V1' },
    { key: 'document', leftId: 'Opus5Ultra-TasksAssignedByOpus5', middleId: 'Hy3-TasksAssignedByOpus5', rightId: 'DoubaoSeedEvolving(Max)V1-TasksAssignedByOpus5' },
  ];
  const SOL_EFFORT_IDS = [
    'GPT5.6SolUltra-WebGL2',
    'GPT5.6Sol(Max)V1',
    'GPT5.6Sol(xhigh)V3',
    'GPT5.6Sol(high)V1',
  ];
  const SOL_EFFORT_DOCUMENT_IDS = [
    'GPT5.6SolUltra-TasksAssignedByOpus5',
    'GPT5.6Sol(Max)V1-TasksAssignedByOpus5',
    'GPT5.6Sol(xhigh)V1-TasksAssignedByOpus5',
    'GPT5.6Sol(high)V1-TasksAssignedByOpus5',
  ];
  function modelGapComparisons() {
    const byId = new Map(visibleWorks().map(work => [work.id, work]));
    return MODEL_GAP_DEFS.map(def => Object.assign({}, def, {
      left: byId.get(def.leftId), middle: byId.get(def.middleId), right: byId.get(def.rightId),
    })).filter(row => row.left && row.middle && row.right);
  }
  const modelGapMatches = (row, query) => modelMatches(row.left, query) || modelMatches(row.middle, query) || modelMatches(row.right, query);
  function effortComparisonWorks() {
    const byId = new Map(visibleWorks().map(work => [work.id, work]));
    return SOL_EFFORT_IDS.map(id => byId.get(id)).filter(Boolean);
  }
  function effortDocumentWorks() {
    const byId = new Map(visibleWorks().map(work => [work.id, work]));
    return SOL_EFFORT_DOCUMENT_IDS.map(id => byId.get(id)).filter(Boolean);
  }
  const effortComparisonMatches = (works, query) => works.some(work => modelMatches(work, query));

  /* Claude Code 的 Ultracode 实际使用 xhigh + workflows；只给名称中的 Ultra 上语义色。 */
  const CLAUDE_ULTRA_RE = /(Claude(?:\s+[A-Za-z0-9.-]+){1,4}\s+\()Ultra(\))/g;
  function highlightClaudeUltra(root) {
    const eligible = node => {
      const parent = node.parentElement;
      return parent && !parent.closest('script,style,textarea,.claude-ultra-effort') &&
        /Claude(?:\s+[A-Za-z0-9.-]+){1,4}\s+\(Ultra\)/.test(node.nodeValue || '');
    };
    const nodes = [];
    if (root.nodeType === Node.TEXT_NODE) {
      if (eligible(root)) nodes.push(root);
    } else if (root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE) {
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode: node => eligible(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT,
      });
      while (walker.nextNode()) nodes.push(walker.currentNode);
    }
    nodes.forEach(node => {
      if (!node.isConnected || !eligible(node)) return;
      const fragment = document.createDocumentFragment();
      const value = node.nodeValue;
      let cursor = 0;
      CLAUDE_ULTRA_RE.lastIndex = 0;
      for (let match; (match = CLAUDE_ULTRA_RE.exec(value));) {
        fragment.append(value.slice(cursor, match.index), match[1]);
        const ultra = document.createElement('span');
        ultra.className = 'claude-ultra-effort';
        const note = I18N.en
          ? 'Claude Code Ultracode uses xhigh effort plus dynamic workflows, not Max.'
          : 'Claude Code Ultracode 使用 xhigh + dynamic workflows，而不是 Max。';
        ultra.dataset.effortNote = note;
        ultra.textContent = 'Ultra';
        fragment.append(ultra, match[2]);
        cursor = match.index + match[0].length;
      }
      fragment.append(value.slice(cursor));
      node.replaceWith(fragment);
    });
  }
  function installClaudeUltraTooltip() {
    if (document.getElementById('claude-ultra-tip')) return;
    const tip = document.createElement('div');
    tip.id = 'claude-ultra-tip';
    tip.className = 'claude-ultra-tip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;
    document.body.appendChild(tip);

    let active = null;
    const place = () => {
      if (!active || tip.hidden || !active.isConnected) return;
      const rect = active.getBoundingClientRect();
      const gap = 9, edge = 12;
      const left = Math.max(edge, Math.min(innerWidth - tip.offsetWidth - edge,
        rect.left + rect.width / 2 - tip.offsetWidth / 2));
      const above = rect.top - tip.offsetHeight - gap;
      const top = above >= edge ? above : rect.bottom + gap;
      tip.style.left = `${Math.round(left)}px`;
      tip.style.top = `${Math.round(top)}px`;
    };
    const show = target => {
      active = target;
      tip.textContent = target.dataset.effortNote || '';
      tip.hidden = false;
      target.setAttribute('aria-describedby', tip.id);
      requestAnimationFrame(() => {
        tip.classList.add('show');
        place();
      });
    };
    const hide = () => {
      if (active) active.removeAttribute('aria-describedby');
      active = null;
      tip.classList.remove('show');
      tip.hidden = true;
    };
    const enter = event => {
      const target = event.target.closest && event.target.closest('.claude-ultra-effort');
      if (target && target !== active) show(target);
    };
    const leave = event => {
      const target = event.target.closest && event.target.closest('.claude-ultra-effort');
      if (target && !target.contains(event.relatedTarget)) hide();
    };
    document.addEventListener('pointerover', enter);
    document.addEventListener('mouseover', enter);
    document.addEventListener('pointerout', leave);
    document.addEventListener('mouseout', leave);
    document.addEventListener('click', event => {
      const target = event.target.closest && event.target.closest('.claude-ultra-effort');
      if (!target) return hide();
      if (target === active && !tip.hidden) hide();
      else show(target);
      event.stopPropagation();
    });
    addEventListener('resize', place);
    addEventListener('scroll', place, true);
  }
  function installClaudeUltraHighlight() {
    highlightClaudeUltra(document.body);
    installClaudeUltraTooltip();
    new MutationObserver(records => records.forEach(record =>
      record.addedNodes.forEach(highlightClaudeUltra)
    )).observe(document.body, { childList: true, subtree: true });
  }
  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', installClaudeUltraHighlight, { once: true });
    } else {
      installClaudeUltraHighlight();
    }
  }

  /* ---------------------------------------------------------- 环境自检 */
  const CAP = { done: false };

  function detect() {
    const c = document.createElement('canvas');
    let gl = null;
    try { gl = c.getContext('webgl2', { antialias: false }); } catch (e) { }
    CAP.webgl2 = !!gl;
    CAP.webgl1 = CAP.webgl2 || !!(function () { try { return c.getContext('webgl'); } catch (e) { return null; } })();
    CAP.dpr = window.devicePixelRatio || 1;
    CAP.cores = navigator.hardwareConcurrency || null;
    CAP.mem = navigator.deviceMemory || null;
    CAP.screen = screen.width + '×' + screen.height;
    CAP.mobile = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      (navigator.maxTouchPoints > 1 && /Mac/.test(navigator.platform));
    CAP.reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (gl) {
      CAP.float = !!gl.getExtension('EXT_color_buffer_float');
      CAP.floatLinear = !!gl.getExtension('OES_texture_float_linear');
      CAP.samples = gl.getParameter(gl.MAX_SAMPLES) || 0;
      CAP.texSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
      const dbg = gl.getExtension('WEBGL_debug_renderer_info');
      CAP.gpu = dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL) : gl.getParameter(gl.RENDERER);
      const hp = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
      CAP.highp = !!(hp && hp.precision >= 23);
      CAP.gl = gl;
    }
    return CAP;
  }

  // 与这些作品同量级的负载：5 层 fbm + 27 抽样 Worley
  const BENCH_FS = `#version 300 es
precision highp float;
out vec4 o; uniform float uT; uniform vec2 uR;
float h13(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.x+p.y)*p.z);}
vec3 h33(vec3 p){p=fract(p*vec3(.1031,.1030,.0973));p+=dot(p,p.yxz+33.33);return fract((p.xxy+p.yxx)*p.zyx);}
float vn(vec3 x){vec3 i=floor(x),f=fract(x);f=f*f*(3.-2.*f);
 return mix(mix(mix(h13(i),h13(i+vec3(1,0,0)),f.x),mix(h13(i+vec3(0,1,0)),h13(i+vec3(1,1,0)),f.x),f.y),
            mix(mix(h13(i+vec3(0,0,1)),h13(i+vec3(1,0,1)),f.x),mix(h13(i+vec3(0,1,1)),h13(i+vec3(1,1,1)),f.x),f.y),f.z);}
const mat3 RM=mat3(0.,.8,.6,-.8,.36,-.48,-.6,-.48,.64);
float fbm(vec3 p){float a=.5,s=0.;for(int i=0;i<5;i++){s+=a*vn(p);p=RM*p*2.03;a*=.5;}return s;}
float wor(vec3 p){vec3 i=floor(p),f=fract(p);float d=9.;
 for(int z=-1;z<=1;z++)for(int y=-1;y<=1;y++)for(int x=-1;x<=1;x++){
  vec3 g=vec3(float(x),float(y),float(z));vec3 r=g+h33(i+g)-f;d=min(d,dot(r,r));}
 return sqrt(d);}
void main(){vec3 p=vec3(gl_FragCoord.xy/uR*4.,uT*.1);
 float v=fbm(p)*.6+(1.-wor(p*6.))*.4;
 o=vec4(vec3(v),1.);}`;

  const BENCH_VS = `#version 300 es
void main(){vec2 p=vec2(float((gl_VertexID<<1)&2),float(gl_VertexID&2));gl_Position=vec4(p*2.-1.,0.,1.);}`;

  function bench() {
    const gl = CAP.gl;
    if (!gl) return null;
    try {
      const mk = (t, s) => { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); return x; };
      const p = gl.createProgram();
      gl.attachShader(p, mk(gl.VERTEX_SHADER, BENCH_VS));
      gl.attachShader(p, mk(gl.FRAGMENT_SHADER, BENCH_FS));
      gl.linkProgram(p);
      if (!gl.getProgramParameter(p, gl.LINK_STATUS)) return null;
      gl.useProgram(p);
      const N = 1024;
      // 渲染到 FBO：readPixels 从 FBO 读才会真正等待 GPU
      const tex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, tex);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, N, N, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
      const fb = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) return null;
      gl.viewport(0, 0, N, N);
      // 加法混合：每次绘制都依赖已有内容，驱动无法把连续绘制合并/剔除
      gl.enable(gl.BLEND); gl.blendFunc(gl.ONE, gl.ONE);
      gl.uniform2f(gl.getUniformLocation(p, 'uR'), N, N);
      const uT = gl.getUniformLocation(p, 'uT');
      const px = new Uint8Array(4);
      const run = n => {
        const t0 = performance.now();
        for (let i = 0; i < n; i++) { gl.uniform1f(uT, i * 0.37); gl.drawArrays(gl.TRIANGLES, 0, 3); }
        gl.readPixels(0, 0, 1, 1, gl.RGBA, gl.UNSIGNED_BYTE, px);   // 强制同步等待 GPU
        return performance.now() - t0;
      };
      run(2);                                    // 预热 + 着色器编译
      let n = 4, t = run(n);
      while (t < 8 && n < 64) { n *= 2; t = run(n); }
      const perPass = t / n;                     // 单次 1024² 满屏 pass 的毫秒数
      gl.disable(gl.BLEND);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      // 某些环境（无头/虚拟时钟）下计时器不推进，测出 0 是无效结果而非"无限快"
      if (!isFinite(perPass) || perPass <= 0.0005) return null;
      // 折算系数由实测反标定：本机（M4）此基准 ≈3.0ms/pass，实跑重量级作品约 75~80fps，
      // 换算下来这些作品每屏像素的开销约为本基准的 3 倍（背景与泛光链比行星表面便宜）
      return { ms: perPass, ms1080: perPass * (1920 * 1080) / (N * N) * 3.0 };
    } catch (e) { return null; }
  }

  function verdict() {
    if (!CAP.webgl2) return { lv: 'bad', code: 'noWebgl', t: t('verdict.noWebgl.title'), s: t('verdict.noWebgl.body') };
    const b = CAP.b1080;
    if (CAP.mobile) return { lv: 'warn', code: 'mobile', t: t('verdict.mobile.title'), s: t('verdict.mobile.body') };
    if (!CAP.float) return { lv: 'warn', code: 'noFloat', t: t('verdict.noFloat.title'), s: t('verdict.noFloat.body') };
    if (b == null) return { lv: 'warn', code: 'noBenchmark', t: t('verdict.noBenchmark.title'), s: t('verdict.noBenchmark.body') };
    if (b < 22) return { lv: 'ok', code: 'smooth', t: t('verdict.smooth.title'), s: t('verdict.smooth.body') };
    if (b < 45) return { lv: 'ok', code: 'heavy', t: t('verdict.heavy.title'), s: t('verdict.heavy.body') };
    if (b < 100) return { lv: 'warn', code: 'strained', t: t('verdict.strained.title'), s: t('verdict.strained.body') };
    return { lv: 'bad', code: 'insufficient', t: t('verdict.insufficient.title'), s: t('verdict.insufficient.body') };
  }

  // 逐作品的可运行性判断（作品重量差近百倍，不能只给一个笼统结论）
  function workRisk(w) {
    if (!CAP.done) return null;
    if (!CAP.webgl2 && w.tech !== 'Canvas2D') return { lv: 'bad', code: 'noWebgl2', t: t('risk.noWebgl2') };
    if (w.needsFloat && !CAP.float) return { lv: 'bad', code: 'noFloat', t: t('risk.noFloat') };
    const b = CAP.b1080;
    if (b == null) return null;
    const cost = w.weight === 'heavy' ? 1.9 : w.weight === 'medium' ? 1.1 : 0.55;
    const est = b * cost;
    if (est < 40) return null;                       // 流畅，不打标
    if (est < 90) return { lv: 'warn', code: 'mayDrop', t: t('risk.mayDrop') };
    return { lv: 'bad', code: 'verySlow', t: t('risk.verySlow') };
  }

  function renderProbe(el) {
    detect();
    const box = document.createElement('div');
    box.className = 'probe';
    box.innerHTML = `<div class="probe-top">
        <div class="probe-badge">◍</div>
        <div><div class="probe-verdict">${t('probe.testing')}</div><div class="probe-sub">${t('probe.benchmarking')}</div></div>
      </div><div class="probe-grid"></div>`;
    el.appendChild(box);

    // 让首屏先绘制，再跑基准
    requestAnimationFrame(() => setTimeout(() => {
      const r = bench();
      CAP.b = r ? r.ms : null;
      CAP.b1080 = r ? r.ms1080 : null;
      CAP.done = true;
      const v = verdict();
      box.className = 'probe ' + v.lv;
      $('.probe-badge', box).textContent = v.lv === 'ok' ? '✓' : v.lv === 'warn' ? '!' : '×';
      $('.probe-verdict', box).textContent = v.t;
      $('.probe-sub', box).textContent = v.s;

      const yn = (v2, good) => `<dd class="${v2 ? (good === false ? 'w' : 'y') : 'n'}">${v2 ? t('probe.supported') : t('probe.unsupported')}</dd>`;
      const items = [
        [t('probe.webgl2'), yn(CAP.webgl2)],
        [t('probe.floatBuffer'), yn(CAP.float)],
        [t('probe.gpu'), `<dd>${esc(CAP.gpu || t('probe.undisclosed'))}</dd>`],
        [t('probe.maxMsaa'), `<dd class="${CAP.samples >= 4 ? 'y' : 'w'}">${CAP.samples || 0}×</dd>`],
        [t('probe.maxTexture'), `<dd>${CAP.texSize || '—'}</dd>`],
        [t('probe.fragmentPrecision'), yn(CAP.highp)],
        [t('probe.benchmarkPass'), `<dd class="${CAP.b == null ? 'n' : CAP.b < 1.2 ? 'y' : CAP.b < 4 ? 'w' : 'n'}">${CAP.b == null ? t('probe.incomplete') : CAP.b.toFixed(2) + ' ms'}</dd>`],
        [t('probe.estimatedFrame'), `<dd class="${CAP.b1080 == null ? 'n' : CAP.b1080 < 22 ? 'y' : CAP.b1080 < 45 ? 'w' : 'n'}">${CAP.b1080 == null ? '—' : CAP.b1080.toFixed(1) + ' ms ≈ ' + Math.round(1000 / CAP.b1080) + ' fps'}</dd>`],
        [t('probe.dpr'), `<dd>${CAP.dpr}×</dd>`],
        [t('probe.hardware'), `<dd>${t('probe.hardwareValue', { screen: CAP.screen, cores: CAP.cores || '?', memory: CAP.mem ? CAP.mem + 'GB' : t('probe.undisclosed') })}</dd>`],
      ];
      $('.probe-grid', box).innerHTML = items.map(([k, d]) =>
        `<div class="pitem"><dt>${k}</dt>${d}</div>`).join('') +
        `<div class="pitem" style="border-right:0"><dt>${t('probe.deviceType')}</dt><dd class="${CAP.mobile ? 'w' : 'y'}">${CAP.mobile ? t('probe.mobile') : t('probe.desktop')}</dd></div>`;

      document.dispatchEvent(new CustomEvent('probe-done'));
    }, 60));
  }

  /* ---------------------------------------------------------- 渲染部件 */
  function techChip(w) {
    const cls = w.tech === 'Three.js' ? 'three' : w.tech === 'Canvas2D' ? 'c2d' : 'gl';
    return `<span class="chip tech ${cls}">${w.tech === 'WebGL2' ? t('tech.nativeWebgl2') : esc(w.tech)}</span>`;
  }
  const cleanEnvironmentTag = tag => String(tag || '').trim().replace(/^\[|\]$/g, '');
  function environmentTag(w) {
    const explicit = (w.tags || []).map(cleanEnvironmentTag).find(tag => /^in\s+/i.test(tag));
    if (explicit) return explicit;
    if (w.model.startsWith('Qwen 3.8 Max')) return 'in Qoder';
    if (w.group === 'A' && (w.id === 'DeepSeek_V4_Pro_high-2' || w.id === 'DeepSeek_V4_Pro_high-3')) return 'in Claude Code';
    if (w.model.startsWith('Claude ')) return 'in Claude Code';
    if (w.model.startsWith('GPT-')) return 'in Codex';
    if (w.model.startsWith('Gemini ')) return 'in Antigravity';
    return 'in Zcode';
  }
  function chips(w, risk) {
    const environment = environmentTag(w);
    const out = [techChip(w), `<span class="chip context">${esc(environment)}</span>`,
      `<span class="chip">${kb(w.bytes)}</span>`, `<span class="chip">${t('unit.lines', { count: w.lines })}</span>`];
    const displayTags = workText(w, 'tags') || [];
    displayTags.filter(tag => cleanEnvironmentTag(tag) !== environment)
      .forEach(tag => out.push(`<span class="chip context note">${esc(tag)}</span>`));
    if (w.weight === 'heavy') out.push(`<span class="chip warn">${t('weight.heavy')}</span>`);
    if (w.net && w.net.length)
      out.push(`<span class="chip warn" title="${esc(t('network.title', { hosts: w.net.join(I18N.en ? ', ' : '、') }))}">${t('network.required')}</span>`);
    if (w.incomplete) out.push(`<span class="chip bad">${t('work.incomplete')}</span>`);
    if (w.issue) out.push(`<span class="chip bad" title="${esc(workText(w, 'issue'))}">${t('render.issue')}</span>`);
    if (risk) out.push(`<span class="chip ${risk.lv}">${risk.t}</span>`);
    return `<div class="chips">${out.join('')}</div>`;
  }
  const link = w => `${page('view.html')}?w=${encodeURIComponent(w.id)}`;

  /* ---------------------------------------------------------- 评分 */
  const FEATURE_KEYS = ['rings', 'belt', 'bloom', 'aces', 'atmo'];
  const ORBIT_WEIGHTS = { geometry: 3, kepler: 5, elements: 4, orientation: 3, epoch: 3 };
  const ORBIT_RUNTIME_WEIGHTS = { pathFit: 4, stability: 3 };
  const INTERACTION_KEYS = ['drag', 'zoom', 'focus', 'follow', 'pauseReset'];
  const FATAL_CAPS = { L1: 25, L2: 60 };
  const scoreNum = n => Number.isInteger(n) ? String(n) : Number(n).toFixed(1);
  const weighted = (values, weights) => Object.keys(weights)
    .reduce((sum, key) => sum + values[key] * weights[key], 0);
  const summed = (values, keys) => keys.reduce((sum, key) => sum + values[key], 0);

  function scoreFor(w) {
    const r = (window.SCORES || {})[w.id];
    if (!r) return null;
    const parts = {
      features: summed(r.featureMap, FEATURE_KEYS) * 2.5,
      orbit: weighted(r.orbitModel, ORBIT_WEIGHTS) + weighted(r.orbitRuntime, ORBIT_RUNTIME_WEIGHTS),
      moons: r.hasEarthMoon ? Math.min(12, 4 + .8 * Math.max(0, r.moons - 1)) : 0,
      offline: w.net.length === 0 ? 7 : 0,
      halley: r.halley ? 3 : 0,
      correctness: r.correctness.runtime + r.correctness.data + r.correctness.integrity,
      visual: r.visualBase * 1.6,
      interaction: summed(r.interaction, INTERACTION_KEYS) * 1.9,
    };
    const evidenceBase = Object.values(parts).reduce((sum, value) => sum + value, 0);
    const penalty = w.tech === 'Canvas2D' ? 10 : 0;
    const raw = evidenceBase - penalty;
    const manualAdjustment = r.reference ? 0 : w.tier === 2 ? -2 : w.tier === 3 ? -5 : 0;
    const preCap = Math.max(0, Math.min(100, raw + manualAdjustment));
    const fatalCap = r.fatal ? FATAL_CAPS[r.fatal] : null;
    const exact = fatalCap == null ? preCap : Math.min(preCap, fatalCap);
    const total = Math.round(exact);
    return Object.assign({}, r, { parts, evidenceBase, penalty, raw, manualAdjustment, preCap, fatalCap, exact, adjusted: exact, total });
  }

  function scoreOrder(a, b, direction = -1) {
    const sa = scoreFor(a), sb = scoreFor(b);
    const totalDiff = (sa ? sa.total : -1) - (sb ? sb.total : -1);
    const exactDiff = (sa ? sa.exact : -1) - (sb ? sb.exact : -1);
    const uncappedDiff = (sa ? sa.preCap : -1) - (sb ? sb.preCap : -1);
    return totalDiff * direction || exactDiff * direction ||
      uncappedDiff * direction ||
      (a.rank ?? Number.MAX_SAFE_INTEGER) - (b.rank ?? Number.MAX_SAFE_INTEGER) ||
      String(a.id).localeCompare(String(b.id));
  }

  function scoreTipHtml(w, s) {
    const part = (label, key, max) => `<div><span>${label}</span><b>${scoreNum(s.parts[key])}<i>/${max}</i></b></div>`;
    const tier = tierLabel(w.tier);
    const capped = s.exact < s.preCap;
    const high = !s.reference && s.total >= (w.group === 'B' ? 91 : 80);
    const interaction = INTERACTION_KEYS.map(key => `<div><span>${t(`score.interaction.${key}`)}</span><b>${scoreNum(s.interaction[key])}</b></div>`).join('');
    return `<div class="score-tip-head${s.reference ? ' is-reference' : ''}${high ? ' is-high' : ''}${capped ? ' is-capped' : ''}">
        <div><span>${t('score.breakdownHead')}</span><strong>${esc(w.model)}</strong></div>
        <b>${scoreNum(s.total)}<i>/100</i></b>
      </div>
      <p class="score-tip-meta">${capped
        ? t('score.cappedMeta', { base: scoreNum(s.evidenceBase), adjusted: scoreNum(s.preCap), cap: scoreNum(s.fatalCap) })
        : s.manualAdjustment
          ? t('score.adjustedMeta', { base: scoreNum(s.evidenceBase), adjusted: scoreNum(s.preCap) })
          : t('score.baseMeta', { base: scoreNum(s.evidenceBase) })}</p>
      <div class="score-tip-grid">
        ${part(t('score.features'), 'features', 12.5)}
        ${part(t('score.orbit'), 'orbit', 25)}
        ${part(t('score.moons'), 'moons', 12)}
        ${part(t('score.offline'), 'offline', 7)}
        ${part(t('score.halley'), 'halley', 3)}
        ${part(t('score.correctness'), 'correctness', 15)}
        ${part(t('score.visual'), 'visual', 16)}
        ${part(t('score.interaction'), 'interaction', 9.5)}
      </div>
      <div class="score-tip-detail"><span>${t('score.visualFormula')}</span><b>${scoreNum(s.visualBase)} × 1.6</b></div>
      <div class="score-tip-subtitle">${t('score.interactionEvidence')}</div><div class="score-tip-subgrid">${interaction}</div>
      <div class="score-tip-penalty"><span>${t('score.canvasPenalty')}</span><b>${s.penalty ? '−10' : '0'}</b></div>
      <div class="score-tip-adjustment"><span>${t('score.manualAdjustment', { tier: esc(tier) })}</span><b>${scoreNum(s.manualAdjustment)}</b></div>
      ${s.fatal ? `<div class="score-tip-fatal"><span>${t('score.fatalLevel', { level: s.fatal })}</span><b>${t('score.fatalCapValue', { cap: scoreNum(s.fatalCap) })}</b></div>
        ${I18N.en ? '' : `<p class="score-tip-fatal-reason"><b>${t('score.fatalReason')}</b>${esc(s.fatalReason || '')}</p>`}` : ''}
      ${s.note ? `<p class="score-tip-note">${esc(scoreNote(w, s.note))}</p>` : ''}`;
  }

  function scoreCell(w) {
    const s = scoreFor(w);
    if (!s) return '<span class="score-empty">—</span>';
    if (s.reference) return `<button type="button" class="score-trigger score-benchmark" data-score-id="${esc(w.id)}"
      aria-label="${esc(t('score.referenceAria', { name: w.model, score: s.total }))}" aria-expanded="false">
      <span aria-hidden="true">⚑</span><b>${t('benchmark.badge')}</b>
    </button>`;
    const label = t('score.evidenceAria', { name: w.model, score: s.total });
    const capped = s.exact < s.preCap;
    const high = s.total >= (w.group === 'B' ? 91 : 80);
    return `<button type="button" class="score-trigger score-pill${high ? ' is-high' : ''}${capped ? ' is-capped' : ''}"
      data-score-id="${esc(w.id)}" aria-label="${esc(label)}" aria-expanded="false">
      <b>${scoreNum(s.total)}</b>
    </button>`;
  }

  function installScoreTooltip() {
    if (document.getElementById('score-tip')) return;
    const tip = document.createElement('div');
    tip.id = 'score-tip';
    tip.className = 'score-tip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;
    document.body.appendChild(tip);

    let active = null, pinned = false;
    const place = () => {
      if (!active || tip.hidden) return;
      const r = active.getBoundingClientRect();
      const gap = 9, edge = 12;
      const left = Math.max(edge, Math.min(innerWidth - tip.offsetWidth - edge,
        r.left + r.width / 2 - tip.offsetWidth / 2));
      const above = Math.max(0, r.top - gap - edge);
      const below = Math.max(0, innerHeight - r.bottom - gap - edge);
      const placeAbove = above >= below;
      const available = Math.max(1, placeAbove ? above : below);
      tip.style.maxHeight = `${Math.floor(available)}px`;
      const top = placeAbove ? r.top - tip.offsetHeight - gap : r.bottom + gap;
      tip.style.left = `${Math.round(left)}px`;
      tip.style.top = `${Math.round(Math.max(edge, top))}px`;
    };
    const show = button => {
      const w = visibleWorks().find(item => item.id === button.dataset.scoreId);
      const s = w && scoreFor(w);
      if (!w || !s) return;
      if (active && active !== button) {
        active.setAttribute('aria-expanded', 'false');
        active.removeAttribute('aria-describedby');
      }
      active = button;
      tip.innerHTML = scoreTipHtml(w, s);
      tip.classList.toggle('is-reference', s.reference);
      tip.hidden = false;
      button.setAttribute('aria-describedby', tip.id);
      button.setAttribute('aria-expanded', pinned ? 'true' : 'false');
      requestAnimationFrame(() => { tip.classList.add('show'); place(); });
    };
    const hide = force => {
      if (pinned && !force) return;
      pinned = false;
      if (active) {
        active.setAttribute('aria-expanded', 'false');
        active.removeAttribute('aria-describedby');
      }
      active = null;
      tip.classList.remove('show');
      tip.hidden = true;
    };

    document.addEventListener('pointerover', e => {
      const button = e.target.closest && e.target.closest('button.score-trigger[data-score-id]');
      if (button && button !== active && !pinned) show(button);
    });
    document.addEventListener('pointerout', e => {
      const button = e.target.closest && e.target.closest('button.score-trigger[data-score-id]');
      if (button && !button.contains(e.relatedTarget) && !tip.contains(e.relatedTarget)) hide(false);
    });
    tip.addEventListener('pointerleave', e => {
      if (!active || active.contains(e.relatedTarget)) return;
      hide(false);
    });
    document.addEventListener('focusin', e => {
      const button = e.target.closest && e.target.closest('button.score-trigger[data-score-id]');
      if (button && (!pinned || button === active)) show(button);
    });
    document.addEventListener('focusout', e => {
      const button = e.target.closest && e.target.closest('button.score-trigger[data-score-id]');
      if (button && !button.contains(e.relatedTarget)) hide(false);
    });
    document.addEventListener('click', e => {
      const button = e.target.closest && e.target.closest('button.score-trigger[data-score-id]');
      if (!button) return hide(true);
      if (button === active && pinned) return hide(true);
      pinned = true;
      show(button);
      button.setAttribute('aria-expanded', 'true');
      e.stopPropagation();
    });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') hide(true); });
    addEventListener('resize', place);
    addEventListener('scroll', place, true);
  }

  function card(w) {
    const risk = workRisk(w);
    const benchmark = Boolean(scoreFor(w)?.reference);
    return `<div class="card ${w.group === 'A' ? 'ga' : 'gb'}${benchmark ? ' is-benchmark' : ''}${w.incomplete ? ' is-incomplete' : ''}">
      <a class="shot-link" href="${link(w)}">
        ${w.shot ? `<img class="shot" loading="lazy" src="${w.shot}" alt="${esc(t('card.screenshotAlt', { name: w.model }))}">`
        : '<div class="shot"></div>'}
      </a>
      <div class="card-body">
        <h4><span class="dot"></span><span class="model-name">${esc(w.model)}</span>${benchmark
          ? `<span class="benchmark-badge" title="${t('benchmark.title')}"><span aria-hidden="true">⚑</span> ${t('benchmark.badge')}</span>` : ''}</h4>
        <div class="sub">${esc(workText(w, 'title') || w.id)}</div>
        ${chips(w, risk)}
        ${w.fix ? `<a class="fixlink" href="${w.fix.file}" target="_blank" rel="noopener"
             title="${esc(workText(w, 'fix.what'))}">${t('fix.link')}</a>` : ''}
      </div></div>`;
  }

  function modelGapSide(work, role) {
    const renderer = work.tech === 'WebGL2' ? t('tech.nativeWebgl2') : work.tech;
    const family = role === 'opus' ? 'CLAUDE OPUS 5' : role === 'hy' ? 'HY 3' : 'DOUBAO SEED EVOLVING';
    return `<div class="model-gap-side ${role}">
      <div class="model-gap-model">
        <div><span>${family}</span><h5>${esc(work.model)}</h5></div>
        <div class="model-gap-score">${scoreCell(work)}</div>
      </div>
      <a class="model-gap-shot" href="${link(work)}" aria-label="${esc(t('card.openAria', { name: work.model }))}">
        <img loading="lazy" src="${work.shot}" alt="${esc(t('card.screenshotAlt', { name: work.model }))}">
        <span>${t('gap.open')}</span>
      </a>
      <div class="model-gap-meta">
        <span class="tier-cell-${work.tier}">${esc(tierLabel(work.tier))}</span>
        <span>${esc(environmentTag(work))}</span>
        <span>${esc(renderer)}</span>
        <span>${t('gap.featureCount', { count: work.feats.length })}</span>
      </div>
    </div>`;
  }

  function modelGapBlock(row, index) {
    const isPrompt = row.key === 'prompt';
    return `<article class="model-gap-row ${isPrompt ? 'is-prompt' : 'is-document'}" data-gap-key="${esc(row.key)}">
      <header class="model-gap-row-head">
        <span>${String(index + 1).padStart(2, '0')}</span>
        <div><b>${t(isPrompt ? 'group.prompt' : 'group.document')}</b><h4>${t(isPrompt ? 'gap.promptTitle' : 'gap.documentTitle')}</h4></div>
      </header>
      <div class="model-gap-body">
        ${modelGapSide(row.left, 'opus')}
        <div class="model-gap-vs" aria-hidden="true"><span>VS</span></div>
        ${modelGapSide(row.middle, 'hy')}
        <div class="model-gap-vs" aria-hidden="true"><span>VS</span></div>
        ${modelGapSide(row.right, 'doubao')}
      </div>
    </article>`;
  }

  function effortRunCard(work, index, brief) {
    const isUltra = index === 0;
    const effort = isUltra ? t('effort.ultra') : (work.model.match(/\(([^)]+)\)/) || [])[1] || 'MODE';
    const renderer = work.tech === 'WebGL2' ? t('tech.nativeWebgl2') : work.tech;
    const environment = environmentTag(work);
    const displayTags = workText(work, 'tags') || [];
    const extraTags = displayTags.filter(tag => cleanEnvironmentTag(tag) !== environment);
    return `<article class="effort-run-card${isUltra ? ' is-ultra' : ''}">
      <header>
        <div><span>${esc(effort)}</span><h4>${esc(work.model)}</h4></div>
        <b>${String(index + 1).padStart(2, '0')}</b>
      </header>
      <a class="effort-run-shot" href="${link(work)}" aria-label="${esc(t('card.openAria', { name: work.model }))}">
        <img loading="lazy" src="${work.shot}" alt="${esc(t('card.screenshotAlt', { name: work.model }))}">
        <span>${t('gap.open')}</span>
      </a>
      <div class="effort-run-score">${scoreCell(work)}</div>
      <div class="effort-run-meta">
        <span class="tier-cell-${work.tier}">${esc(tierLabel(work.tier))}</span>
        <span>${esc(environment)}</span>
        ${extraTags.map(tag => `<span class="is-note">${esc(tag)}</span>`).join('')}
        <span>${esc(renderer)}</span>
        <span>${t('gap.featureCount', { count: work.feats.length })}</span>
      </div>
      <p>${t(brief === 'document' ? 'effort.sameDocument' : 'effort.samePrompt')}</p>
    </article>`;
  }

  const effortComparisonBlock = (works, brief = 'prompt') => works.map((work, index) => effortRunCard(work, index, brief)).join('');

  function featuredPairProof(a, b) {
    if (a.pair !== 'opus5') return '';
    const proof = [
      ['pair.proofHalley', 'pair.proofHalleyValue', 'pair.proofHalleyNote'],
      ['pair.proofRing', 'pair.proofRingValue', 'pair.proofRingNote'],
      ['pair.proofKirkwood', 'pair.proofKirkwoodValue', 'pair.proofKirkwoodNote'],
      ['pair.proofPerf', 'pair.proofPerfValue', 'pair.proofPerfNote'],
    ];
    return `<div class="pair-proof">
      <div class="pair-proof-copy">
        <span>${t('pair.featuredEyebrow')}</span>
        <strong>${t('pair.featuredTitle')}</strong>
        <p>${t('pair.featuredBody')}</p>
        <small>${t('pair.featuredScoreNote', { b: scoreFor(b).total })}</small>
      </div>
      <div class="pair-proof-grid">${proof.map(item => `<div>
        <span>${t(item[0])}</span><b>${t(item[1])}</b><small>${t(item[2])}</small>
      </div>`).join('')}</div>
    </div>`;
  }

  function pairBlock(w, i) {
    const a = w.a, b = w.b;
    const featured = a.pair === 'opus5';
    const af = a.feats.length;
    const bf = b.feats.length;
    const fmtDiff = (label, va, vb) => I18N.en
      ? `<span>${label}: <i>${va}</i> → <b>${vb}</b></span>`
      : `<span><i>${va}</i> → <b>${vb}</b> ${label}</span>`;
    return `<div class="pair${featured ? ' pair-featured' : ''}">
      <div class="pair-head">
        <span class="seq">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(pairTitle(w))}</h3>
        ${featured ? `<span class="pair-featured-badge"><span aria-hidden="true">⚑</span> ${t('pair.featuredBadge')}</span>` : ''}
      </div>
      <div class="pair-body">
        <div class="side a">
          <div class="side-tag">${t('group.prompt')}</div>
          <h4 class="side-model">${esc(a.model)}</h4>
          <a class="shot-link" href="${link(a)}" aria-label="${esc(t('card.openAria', { name: a.model }))}">${a.shot ? `<img class="shot" loading="lazy" src="${a.shot}" alt="${esc(t('card.screenshotAlt', { name: a.model }))}">` : '<div class="shot"></div>'}</a>
          ${chips(a, workRisk(a))}
        </div>
        <div class="arrow">→</div>
        <div class="side b">
          <div class="side-tag">${t('group.document')}</div>
          <h4 class="side-model">${esc(b.model)}</h4>
          <a class="shot-link" href="${link(b)}" aria-label="${esc(t('card.openAria', { name: b.model }))}">${b.shot ? `<img class="shot" loading="lazy" src="${b.shot}" alt="${esc(t('card.screenshotAlt', { name: b.model }))}">` : '<div class="shot"></div>'}</a>
          ${chips(b, workRisk(b))}
        </div>
      </div>
      <div class="diff">
        ${fmtDiff(t('pair.rendering'), a.tech === 'WebGL2' ? t('tech.nativeWebgl2') : a.tech, b.tech === 'WebGL2' ? t('tech.nativeWebgl2') : b.tech)}
        ${fmtDiff(t('pair.codeSize'), t('unit.lines', { count: a.lines }), t('unit.lines', { count: b.lines }))}
        ${fmtDiff(t('pair.features'), t('unit.items', { count: af }), t('unit.items', { count: bf }))}
      </div>
      ${featuredPairProof(a, b)}
      ${(window.PAIR_NOTES || {})[a.pair]
        ? `<div class="pair-caveat">⚠ ${esc(window.PAIR_NOTES[a.pair])}</div>` : ''}
      </div>`;
  }

  function pairCollection(pairs, expandRest = false) {
    if (!pairs.length) return '';
    const first = pairBlock(pairs[0], 0);
    const rest = pairs.slice(1);
    if (!rest.length) return first;
    return `${first}<details class="pair-archive"${expandRest ? ' open' : ''}>
      <summary><span class="collection-closed">${t('collection.showPairs', { count: rest.length })}</span><span class="collection-open">${t('collection.hidePairs', { count: rest.length })}</span><b aria-hidden="true">⌄</b></summary>
      <div class="pairs pair-archive-grid">${rest.map((pair, index) => pairBlock(pair, index + 1)).join('')}</div>
    </details>`;
  }

  function pairTitle(pair) {
    return (window.PAIR_TITLES || {})[pair.a.pair] || pair.a.model;
  }

  function scorePairs() {
    const matched = {};
    visibleWorks().forEach(w => {
      if (!w.pair) return;
      (matched[w.pair] = matched[w.pair] || {})[w.group === 'A' ? 'a' : 'b'] = w;
    });
    return (window.PAIR_ORDER || Object.keys(matched)).map(key => matched[key]).filter(pair => pair && pair.a && pair.b);
  }

  function scoreStats() {
    const works = visibleWorks().map(work => ({ work, score: scoreFor(work) })).filter(row => row.score);
    const mean = (rows, getter) => rows.length ? rows.reduce((sum, row) => sum + getter(row), 0) / rows.length : 0;
    const coverage = score => score.parts.features + score.parts.orbit + score.parts.moons + score.parts.offline + score.parts.halley;
    const execution = score => score.parts.correctness + score.parts.visual + score.parts.interaction;
    const summarize = rows => ({
      n: rows.length,
      coverage: mean(rows, row => coverage(row.score)),
      execution: mean(rows, row => execution(row.score)),
      exact: mean(rows, row => row.score.exact),
    });
    const outcomes = rows => rows.reduce((counts, row) => {
      const delta = row.b - row.a;
      counts[Math.abs(delta) < 1e-9 ? 'tie' : delta > 0 ? 'improve' : 'decline'] += 1;
      return counts;
    }, { improve: 0, tie: 0, decline: 0 });
    const paired = scorePairs().map(pair => {
      const a = scoreFor(pair.a), b = scoreFor(pair.b);
      return {
        pair: pair.a.pair,
        a: { id: pair.a.id, coverage: coverage(a), execution: execution(a), exact: a.exact },
        b: { id: pair.b.id, coverage: coverage(b), execution: execution(b), exact: b.exact },
      };
    });
    const pairMetric = key => paired.map(row => ({ a: row.a[key], b: row.b[key] }));
    const pairedSummary = {
      n: paired.length,
      coverage: { a: mean(paired, row => row.a.coverage), b: mean(paired, row => row.b.coverage), max: 59.5, outcomes: outcomes(pairMetric('coverage')) },
      execution: { a: mean(paired, row => row.a.execution), b: mean(paired, row => row.b.execution), max: 40.5, outcomes: outcomes(pairMetric('execution')) },
      exact: { a: mean(paired, row => row.a.exact), b: mean(paired, row => row.b.exact), outcomes: outcomes(pairMetric('exact')) },
    };
    const population = predicate => works.filter(predicate);
    const sensitivity = (excludeReferences, excludeTier4) => ({
      a: summarize(population(row => row.work.group === 'A' && (!excludeReferences || !row.score.reference) && (!excludeTier4 || row.work.tier !== 4))),
      b: summarize(population(row => row.work.group === 'B' && (!excludeReferences || !row.score.reference) && (!excludeTier4 || row.work.tier !== 4))),
    });
    return {
      maxima: { coverage: 59.5, execution: 40.5, total: 100 },
      paired,
      pairedSummary,
      wholeGroup: {
        all: sensitivity(false, false),
        withoutReferences: sensitivity(true, false),
        withoutTier4: sensitivity(false, true),
        withoutReferencesOrTier4: sensitivity(true, true),
      },
    };
  }

  // 按梯队分组渲染画廊
  function tieredGallery(works, expandRest = false) {
    const byTier = {};
    works.forEach(w => (byTier[w.tier] = byTier[w.tier] || []).push(w));
    const tierBlock = tier => {
      const list = byTier[tier].sort((a, b) => scoreOrder(a, b));
      const benchmarkTier = tier === '1' && list[0] && list[0].group === 'A';
      return `<div class="tier tier-${tier}${tier === '4' ? ' t-fail' : ''}${benchmarkTier ? ' t-benchmark' : ''}">
          <div class="tier-hd"><span>${esc(tierLabel(tier) || tier)}</span>${benchmarkTier
            ? `<b class="tier-recommend"><span aria-hidden="true">⚑</span> ${t('benchmark.recommend')}</b>` : ''}<i>${t('unit.works', { count: list.length })}</i></div>
          <div class="grid">${list.map(card).join('')}</div>
        </div>`;
    };
    const tiers = Object.keys(byTier).sort((a, b) => a - b);
    const primary = tiers.includes('1') ? tierBlock('1') : '';
    const rest = tiers.filter(tier => tier !== '1');
    if (!rest.length) return primary;
    const restCount = rest.reduce((sum, tier) => sum + byTier[tier].length, 0);
    return `${primary}<details class="tier-archive"${expandRest ? ' open' : ''}>
      <summary><span class="collection-closed">${t('collection.showWorks', { count: restCount })}</span><span class="collection-open">${t('collection.hideWorks', { count: restCount })}</span><b aria-hidden="true">⌄</b></summary>
      <div class="tier-archive-body">${rest.map(tierBlock).join('')}</div>
    </details>`;
  }

  /* ---------------------------------------------------------- 导出 */
  window.SITE = {
    tieredGallery, pairCollection,
    $, $$, kb, esc, t, page, workText, scoreNote, tierLabel, CAP, detect, renderProbe, workRisk, card, pairBlock, pairTitle, chips, techChip, link,
    environmentTag, scoreFor, scoreOrder, scoreCell, scoreTipHtml, installScoreTooltip, scoreStats, visibleWorks, isVisibleWork, modelMatches,
    modelGapComparisons, modelGapMatches, modelGapBlock,
    effortComparisonWorks, effortDocumentWorks, effortComparisonMatches, effortComparisonBlock,
    byId: id => visibleWorks().find(w => w.id === id),
    pairs: scorePairs,
  };
})();
