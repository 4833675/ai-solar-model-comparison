/* ===== 太阳系模型对比展示站 · 公共脚本 ===== */
(function () {
  'use strict';

  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => [...(r || document).querySelectorAll(s)];
  const kb = b => b < 1024 * 1024 ? (b / 1024).toFixed(0) + ' KB' : (b / 1048576).toFixed(2) + ' MB';
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

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
    if (!CAP.webgl2) return { lv: 'bad', t: '无法运行', s: '此浏览器不支持 WebGL 2，本站收录的绝大多数作品都无法显示。请改用较新的 Chrome / Edge / Firefox / Safari。' };
    const b = CAP.b1080;
    if (CAP.mobile) return { lv: 'warn', t: '移动设备 · 建议改用桌面', s: '这些作品按桌面独显设计，移动端多数会掉帧、发热甚至崩溃。轻量级作品可以试试。' };
    if (!CAP.float) return { lv: 'warn', t: '缺少浮点缓冲扩展', s: '缺少 EXT_color_buffer_float，依赖 HDR 渲染的作品可能白屏或报错（本站已逐一标注）。' };
    if (b == null) return { lv: 'warn', t: '无法完成性能实测', s: '能力探测通过，但基准测试未能运行。请以实际体验为准。' };
    if (b < 22) return { lv: 'ok', t: '可以流畅运行全部作品', s: '实测 GPU 着色吞吐充裕，重量级作品也没问题。' };
    if (b < 45) return { lv: 'ok', t: '可以运行，重量级作品可能掉帧', s: '轻中量级作品流畅；标记为「重」的作品建议逐个打开，不要同时开多个。' };
    if (b < 100) return { lv: 'warn', t: '性能吃紧', s: '建议只看标记为「轻」的作品，重量级作品会明显掉帧。' };
    return { lv: 'bad', t: '性能不足', s: '实测 GPU 负载能力偏低，多数作品会非常卡。建议换一台设备，或只浏览截图。' };
  }

  // 逐作品的可运行性判断（作品重量差近百倍，不能只给一个笼统结论）
  function workRisk(w) {
    if (!CAP.done) return null;
    if (!CAP.webgl2 && w.tech !== 'Canvas2D') return { lv: 'bad', t: '不支持 WebGL2' };
    if (w.needsFloat && !CAP.float) return { lv: 'bad', t: '缺 float 扩展' };
    const b = CAP.b1080;
    if (b == null) return null;
    const cost = w.weight === 'heavy' ? 1.9 : w.weight === 'medium' ? 1.1 : 0.55;
    const est = b * cost;
    if (est < 40) return null;                       // 流畅，不打标
    if (est < 90) return { lv: 'warn', t: '可能掉帧' };
    return { lv: 'bad', t: '预计很卡' };
  }

  function renderProbe(el) {
    detect();
    const box = document.createElement('div');
    box.className = 'probe';
    box.innerHTML = `<div class="probe-top">
        <div class="probe-badge">◍</div>
        <div><div class="probe-verdict">正在检测…</div><div class="probe-sub">正在运行 GPU 基准测试</div></div>
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

      const yn = (v2, good) => `<dd class="${v2 ? (good === false ? 'w' : 'y') : 'n'}">${v2 ? '支持' : '不支持'}</dd>`;
      const items = [
        ['WebGL 2', yn(CAP.webgl2)],
        ['浮点帧缓冲 <br>EXT_color_buffer_float', yn(CAP.float) + (CAP.float ? '' : '')],
        ['GPU', `<dd>${esc(CAP.gpu || '未公开')}</dd>`],
        ['最大 MSAA', `<dd class="${CAP.samples >= 4 ? 'y' : 'w'}">${CAP.samples || 0}×</dd>`],
        ['最大纹理', `<dd>${CAP.texSize || '—'}</dd>`],
        ['片元高精度', yn(CAP.highp)],
        ['基准 · 单次 1024² 着色', `<dd class="${CAP.b == null ? 'n' : CAP.b < 1.2 ? 'y' : CAP.b < 4 ? 'w' : 'n'}">${CAP.b == null ? '未完成' : CAP.b.toFixed(2) + ' ms'}</dd>`],
        ['估算 1080p 整帧', `<dd class="${CAP.b1080 == null ? 'n' : CAP.b1080 < 22 ? 'y' : CAP.b1080 < 45 ? 'w' : 'n'}">${CAP.b1080 == null ? '—' : CAP.b1080.toFixed(1) + ' ms ≈ ' + Math.round(1000 / CAP.b1080) + ' fps'}</dd>`],
        ['设备像素比', `<dd>${CAP.dpr}×</dd>`],
        ['屏幕 / 核心 / 内存', `<dd>${CAP.screen} · ${CAP.cores || '?'}核 · ${CAP.mem ? CAP.mem + 'GB' : '未公开'}</dd>`],
      ];
      $('.probe-grid', box).innerHTML = items.map(([k, d]) =>
        `<div class="pitem"><dt>${k}</dt>${d}</div>`).join('') +
        `<div class="pitem" style="border-right:0"><dt>设备类型</dt><dd class="${CAP.mobile ? 'w' : 'y'}">${CAP.mobile ? '移动端' : '桌面'}</dd></div>`;

      document.dispatchEvent(new CustomEvent('probe-done'));
    }, 60));
  }

  /* ---------------------------------------------------------- 渲染部件 */
  function techChip(w) {
    const cls = w.tech === 'Three.js' ? 'three' : w.tech === 'Canvas2D' ? 'c2d' : 'gl';
    return `<span class="chip tech ${cls}">${w.tech === 'WebGL2' ? '原生 WebGL2' : esc(w.tech)}</span>`;
  }
  function chips(w, risk) {
    const out = [techChip(w),
      `<span class="chip">${kb(w.bytes)}</span>`, `<span class="chip">${w.lines} 行</span>`];
    if (w.weight === 'heavy') out.push('<span class="chip warn">重量级</span>');
    if (w.net && w.net.length)
      out.push('<span class="chip warn" title="运行时会从 ' + esc(w.net.join('、')) +
        ' 拉取资源，断网或内网环境下无法显示">需联网</span>');
    if (w.issue) out.push('<span class="chip bad" title="' + esc(w.issue) + '">渲染异常</span>');
    if (risk) out.push(`<span class="chip ${risk.lv}">${risk.t}</span>`);
    return `<div class="chips">${out.join('')}</div>`;
  }
  const link = w => `view.html?w=${encodeURIComponent(w.id)}`;

  function card(w) {
    const risk = workRisk(w);
    return `<div class="card ${w.group === 'A' ? 'ga' : 'gb'}">
      <a class="shot-link" href="${link(w)}">
        ${w.shot ? `<img class="shot" loading="lazy" src="${w.shot}" alt="${esc(w.model)} 的作品截图">`
        : '<div class="shot"></div>'}
      </a>
      <div class="card-body">
        <h4><span class="dot"></span>${esc(w.model)}${w.featured ? '<span class="star">★</span>' : ''}</h4>
        <div class="sub">${esc(w.title || w.id)}</div>
        ${chips(w, risk)}
        ${w.fix ? `<a class="fixlink" href="${w.fix.file}" target="_blank" rel="noopener"
             title="${esc(w.fix.what)}">⚙ Opus 5 修复版（仅修复显示问题）→</a>` : ''}
      </div></div>`;
  }

  function pairBlock(w, i) {
    const a = w.a, b = w.b;
    const fmtDiff = (label, va, vb) => `<span><i>${va}</i> → <b>${vb}</b> ${label}</span>`;
    return `<div class="pair">
      <div class="pair-head">
        <span class="seq">${String(i + 1).padStart(2, '0')}</span>
        <h3>${esc(a.model.replace(/\s*#\d+$/, ''))}</h3>
        <a class="go" href="compare.html?p=${encodeURIComponent(a.pair)}">并排实跑 →</a>
      </div>
      <div class="pair-body">
        <div class="side a">
          <div class="side-tag">一句话提示</div>
          <a class="shot-link" href="${link(a)}">${a.shot ? `<img class="shot" loading="lazy" src="${a.shot}" alt="">` : '<div class="shot"></div>'}</a>
          ${chips(a, workRisk(a))}
        </div>
        <div class="arrow">→</div>
        <div class="side b">
          <div class="side-tag">详细文档</div>
          <a class="shot-link" href="${link(b)}">${b.shot ? `<img class="shot" loading="lazy" src="${b.shot}" alt="">` : '<div class="shot"></div>'}</a>
          ${chips(b, workRisk(b))}
        </div>
      </div>
      <div class="diff">
        ${fmtDiff('渲染方式', a.tech === 'WebGL2' ? '原生 WebGL2' : a.tech, b.tech === 'WebGL2' ? '原生 WebGL2' : b.tech)}
        ${fmtDiff('代码量', a.lines + ' 行', b.lines + ' 行')}
        ${fmtDiff('功能点', a.feats.length + ' 项', b.feats.length + ' 项')}
      </div>
      ${(window.PAIR_NOTES || {})[a.pair]
        ? `<div class="pair-caveat">⚠ ${esc(window.PAIR_NOTES[a.pair])}</div>` : ''}
      </div>`;
  }

  // 按梯队分组渲染画廊
  function tieredGallery(works) {
    const T = window.TIER_LABELS || {};
    const byTier = {};
    works.forEach(w => (byTier[w.tier] = byTier[w.tier] || []).push(w));
    return Object.keys(byTier).sort((a, b) => a - b).map(t => {
      const list = byTier[t].sort((a, b) => a.rank - b.rank);
      return `<div class="tier${t === '4' ? ' t-fail' : ''}">
          <div class="tier-hd"><span>${esc(T[t] || t)}</span><i>${list.length} 件</i></div>
          <div class="grid">${list.map(card).join('')}</div>
        </div>`;
    }).join('');
  }

  /* ---------------------------------------------------------- 导出 */
  window.SITE = {
    tieredGallery,
    $, $$, kb, esc, CAP, detect, renderProbe, workRisk, card, pairBlock, chips, techChip, link,
    byId: id => (window.WORKS || []).find(w => w.id === id),
    pairs() {
      const m = {};
      (window.WORKS || []).forEach(w => {
        if (!w.pair) return;
        (m[w.pair] = m[w.pair] || {})[w.group === 'A' ? 'a' : 'b'] = w;
      });
      return (window.PAIR_ORDER || Object.keys(m)).map(k => m[k]).filter(p => p && p.a && p.b);
    },
  };
})();
