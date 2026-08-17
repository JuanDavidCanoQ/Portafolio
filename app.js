/* ==========================================================================
   APP — Portafolio Juan David Cano
   Renderiza el sitio a partir de CONTENIDO (contenido.js).
   Para cambiar textos o agregar contenido, editar contenido.js, no este archivo.
   ========================================================================== */

/* ------------------------------------------------- almacenamiento seguro */
const store = {
  get(k){ try { return localStorage.getItem(k); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k,v); } catch(e){} }
};

let LANG = store.get("jdc-lang") === "en" ? "en" : "es";

/* Devuelve el texto en el idioma activo. Acepta string plano u objeto {es,en}. */
const T = v => (v && typeof v === "object") ? (v[LANG] ?? v.es ?? "") : (v ?? "");
/* Atajo para el diccionario de textos sueltos */
const t = k => T(CONTENIDO.t[k]);

const esc = s => String(s).replace(/[&<>"']/g, m =>
  ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]));

/* ---------------------------------------------------------------- ICONOS */
const svg = inner =>
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"
        stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;

const ICONOS = {
  maletin:  svg('<rect x="2.5" y="7" width="19" height="13" rx="2"/><path d="M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2M2.5 12.5h19"/>'),
  dolar:    svg('<path d="M12 2.5v19"/><path d="M16.5 6.5a4 4 0 00-4-2.5h-1a3.5 3.5 0 000 7h1a3.5 3.5 0 010 7h-1a4 4 0 01-4-2.5"/>'),
  tienda:   svg('<path d="M3.5 9.5V20h17V9.5"/><path d="M2.5 9.5l1.8-5.2A1.5 1.5 0 015.7 3.3h12.6a1.5 1.5 0 011.4 1L21.5 9.5"/><path d="M9.5 20v-5.5h5V20"/>'),
  caja:     svg('<path d="M20.5 7.5L12 3 3.5 7.5v9L12 21l8.5-4.5v-9z"/><path d="M3.5 7.5L12 12l8.5-4.5M12 12v9"/>'),
  grafico:  svg('<path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L20 7"/>'),
  diana:    svg('<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>'),
  tendencia:svg('<path d="M3 17l5.5-5.5 3.5 3L21 5.5"/><path d="M15.5 5.5H21v5.5"/>'),
  moneda:   svg('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5v9M14.5 9.8a2.6 2.6 0 00-2.5-1.5h-.6a2.1 2.1 0 000 4.2h1.2a2.1 2.1 0 010 4.2H11a2.6 2.6 0 01-2.5-1.5"/>'),
  equipo:   svg('<circle cx="9" cy="8" r="3.4"/><path d="M2.8 20a6.2 6.2 0 0112.4 0"/><path d="M16.2 5.1a3.4 3.4 0 010 5.8M17.6 20a6.2 6.2 0 00-1.6-4.2"/>'),
  excel:    svg('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>'),
  barras:   svg('<path d="M3 21h18"/><rect x="5" y="12" width="3.5" height="7" rx="1"/><rect x="10.25" y="7" width="3.5" height="12" rx="1"/><rect x="15.5" y="3" width="3.5" height="16" rx="1"/>'),
  sap:      svg('<rect x="2.5" y="4" width="19" height="13" rx="2"/><path d="M8 21h8M12 17v4M7 9h4M7 12h6"/>'),
  db:       svg('<ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/>'),
  sobre:    svg('<rect x="2.5" y="4.5" width="19" height="15" rx="2"/><path d="M3 6l9 6.5L21 6"/>'),
  pin:      svg('<path d="M20 10.5c0 6-8 11.5-8 11.5S4 16.5 4 10.5a8 8 0 1116 0z"/><circle cx="12" cy="10.5" r="2.8"/>'),
  doc:      svg('<path d="M14 2.5H7a2 2 0 00-2 2v15a2 2 0 002 2h10a2 2 0 002-2V7.5z"/><path d="M14 2.5v5h5"/>')
};

/* ------------------------------------------------- PREVISUALIZACIONES SVG */
const PREVIEWS = {
  matriz: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" fill="var(--panel-2)"/>
    <rect x="0" y="0" width="220" height="18" fill="var(--panel)"/>
    <rect x="12" y="30" width="70" height="6" rx="3" fill="var(--text-faint)" opacity=".6"/>
    <rect x="12" y="46" width="196" height="6" rx="3" fill="var(--panel)"/>
    <rect x="12" y="46" width="120" height="6" rx="3" fill="var(--grad-a)"/>
    <circle cx="132" cy="49" r="5" fill="var(--grad-a)"/>
    <rect x="12" y="70" width="196" height="9" rx="4.5" fill="var(--panel)"/>
    <rect x="12" y="70" width="150" height="9" rx="4.5" fill="var(--mint)"/>
    <rect x="12" y="87" width="196" height="9" rx="4.5" fill="var(--panel)"/>
    <rect x="12" y="87" width="118" height="9" rx="4.5" fill="var(--orange-fill)"/>
    <rect x="12" y="104" width="196" height="9" rx="4.5" fill="var(--panel)"/>
    <rect x="12" y="104" width="92" height="9" rx="4.5" fill="var(--orange-fill)"/>
    <rect x="12" y="121" width="196" height="9" rx="4.5" fill="var(--panel)"/>
    <rect x="12" y="121" width="64" height="9" rx="4.5" fill="var(--orange-fill)"/>
  </svg>`,

  dashboard: `<svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg">
    <rect width="220" height="150" fill="var(--panel-2)"/>
    <rect x="10" y="10" width="62" height="30" rx="6" fill="var(--panel)"/>
    <rect x="78" y="10" width="62" height="30" rx="6" fill="var(--panel)"/>
    <rect x="146" y="10" width="62" height="30" rx="6" fill="var(--panel)"/>
    <rect x="18" y="20" width="30" height="4" rx="2" fill="var(--text-faint)" opacity=".6"/>
    <rect x="18" y="29" width="42" height="6" rx="3" fill="var(--mint)"/>
    <rect x="86" y="20" width="30" height="4" rx="2" fill="var(--text-faint)" opacity=".6"/>
    <rect x="86" y="29" width="34" height="6" rx="3" fill="var(--cyan)"/>
    <rect x="154" y="20" width="30" height="4" rx="2" fill="var(--text-faint)" opacity=".6"/>
    <rect x="154" y="29" width="38" height="6" rx="3" fill="var(--grad-a)"/>
    <rect x="10" y="48" width="198" height="44" rx="6" fill="var(--panel)"/>
    <polyline points="20,84 48,72 76,76 104,60 132,64 160,52 198,58" fill="none"
      stroke="var(--mint)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="10" y="100" width="96" height="40" rx="6" fill="var(--panel)"/>
    <circle cx="58" cy="120" r="13" fill="none" stroke="var(--cyan)" stroke-width="6"/>
    <circle cx="58" cy="120" r="13" fill="none" stroke="var(--orange-fill)" stroke-width="6" stroke-dasharray="26 60"/>
    <rect x="112" y="100" width="96" height="40" rx="6" fill="var(--panel)"/>
    <rect x="120" y="108" width="50" height="5" rx="2.5" fill="var(--grad-a)"/>
    <rect x="120" y="118" width="70" height="5" rx="2.5" fill="var(--cyan)"/>
    <rect x="120" y="128" width="38" height="5" rx="2.5" fill="var(--mint)"/>
  </svg>`
};

/* ====================================================== RENDER DE BLOQUES */
const S = CONTENIDO.sitio;

function renderHero(){
  return `
  <div class="panel reveal hero-left" style="--accent:var(--grad-a);">
    <div class="avatar-wrap">
      <div class="avatar-slot"><img src="${S.foto}" alt="${esc(S.nombre)}"></div>
      <span class="avatar-dot"></span>
    </div>
    <div class="hero-text">
      <span class="hero-greet">${esc(t("hero_greet"))}</span>
      <h1 class="hero-name">${esc(S.nombre)}</h1>
      <p class="hero-position">${esc(t("hero_position"))}</p>
      <p class="hero-credentials">${esc(t("hero_credentials"))}</p>
      <p class="hero-tagline">${t("hero_tagline")}</p>
    </div>
  </div>

  <div class="panel reveal help-card" style="--accent:var(--grad-b);">
    <div class="help-top">
      <div class="icon-circle" style="--accent:var(--grad-a);color:var(--grad-a);">${ICONOS.grafico}</div>
      <div>
        <span class="help-kicker">${esc(t("help_kicker"))}</span>
        <p class="help-text">${esc(t("help_text"))}</p>
      </div>
    </div>
    <div class="help-divider"></div>
    <div class="help-links">
      <a href="${S.linkedin}" target="_blank" rel="noopener" class="help-link"><span class="ico">in</span>LinkedIn</a>
      <a href="#" id="emailBtn" class="help-link"><span class="ico">${ICONOS.sobre}</span>${esc(t("link_email"))}</a>
    </div>
  </div>`;
}

function renderMetricas(){
  return CONTENIDO.metricas.map(m => `
    <div class="panel reveal metric-card c-3" style="--accent:var(--${m.color});">
      <div class="icon-circle" style="--accent:var(--${m.color});color:var(--${m.color});">${ICONOS[m.icono]||""}</div>
      <div class="metric-body">
        <span class="metric-value">${esc(T(m.valor))}</span>
        <span class="metric-label">${esc(T(m.label))}</span>
      </div>
    </div>`).join("");
}

function renderStack(){
  const items = CONTENIDO.stack.map(s => `
    <div class="stack-item">
      <div class="stack-logo" style="color:var(--${s.color});">${ICONOS[s.icono]||""}</div>
      <span class="stack-name">${esc(s.nombre)}</span>
    </div>`).join("");
  return `
  <div class="panel reveal c-4" style="--accent:var(--grad-a);">
    <span class="card-kicker" style="--accent:var(--grad-a);"><span>${esc(t("stack_kicker"))}</span></span>
    <div class="stack-grid">${items}</div>
    <div class="stack-divider"></div>
    <div class="stack-others-label">${esc(t("stack_others_label"))}</div>
    <div class="stack-others">${esc(t("stack_others"))}</div>
  </div>`;
}

function renderHerramientas(){
  const items = CONTENIDO.herramientas.map(h => {
    const live = h.estado === "live";
    const nombre = (live && h.url)
      ? `<a href="${h.url}" target="_blank" rel="noopener" class="tool-list-name">${esc(h.nombre)}</a>`
      : `<span class="tool-list-name">${esc(h.nombre)}</span>`;
    return `
    <li>
      <span class="tool-dot" style="${live ? "" : "background:var(--text-faint);"}"></span>
      <div class="tool-list-body">
        ${nombre}
        <span class="tool-list-desc">${esc(T(h.desc))}</span>
      </div>
      <span class="pill${live ? "" : " pill-soon"}">${esc(live ? t("pill_live") : t("pill_soon"))}</span>
    </li>`;
  }).join("");
  const nLive = CONTENIDO.herramientas.filter(h => h.estado === "live").length;
  return `
  <div class="panel reveal c-5" style="--accent:var(--orange-fill);">
    <span class="card-kicker" style="--accent:var(--orange-fill);">
      <span>${esc(t("tools_kicker"))}</span>
      <span class="pill">${nLive} ${esc(t("pill_prod_suffix"))}</span>
    </span>
    <p class="tool-intro">${esc(t("tools_intro"))}</p>
    <ul class="tool-list">${items}</ul>
    <a href="#proyectos" class="sec-link" style="margin-top:16px;display:inline-flex;">${esc(t("tools_seeall"))}</a>
  </div>`;
}

function renderDocumentos(){
  return `
  <div class="panel reveal cv-card c-3" style="--accent:var(--gold);">
    <span class="card-kicker" style="--accent:var(--gold);"><span>${esc(t("cv_kicker"))}</span></span>
    <div class="cv-doc"><span class="cv-doc-icon" style="color:var(--gold);">${ICONOS.doc}</span><span class="cv-doc-name">PDF</span></div>
    <p class="cv-desc">${esc(t("cv_desc"))}</p>
    <div class="cv-btns">
      <a href="${S.cv}" download class="btn primary">${esc(t("cv_btn"))}</a>
      <a href="${S.brochure}" download class="btn primary">${esc(t("brochure_btn"))}</a>
    </div>
  </div>`;
}

function renderProyectos(){
  return CONTENIDO.proyectos.map(p => {
    const items = p.items.map(i =>
      `<li><span class="check">✓</span><span>${esc(T(i))}</span></li>`).join("");
    const cta = p.cta
      ? `<a href="${p.cta.url}" target="_blank" rel="noopener" class="btn">${esc(T(p.cta.label))}</a>`
      : `<span class="btn btn-soon">${esc(t("btn_soon"))}</span>`;
    return `
    <div class="panel reveal proj-card c-6" style="--accent:var(--${p.color});">
      <div class="proj-num">${esc(p.num)}</div>
      <h3 class="proj-title">${esc(T(p.titulo))}</h3>
      <p class="proj-desc">${esc(T(p.desc))}</p>
      <div class="proj-inner">
        <ul class="proj-list">${items}</ul>
        <div class="proj-preview">${PREVIEWS[p.preview]||""}</div>
      </div>
      <div class="proj-footer">${cta}</div>
    </div>`;
  }).join("");
}

function renderPerfil(){
  const p = CONTENIDO.perfil;
  return `
  <div class="panel reveal perfil-card c-12" style="--accent:var(--violet);">
      <span class="card-kicker" style="--accent:var(--violet);"><span>${esc(T(p.kicker))}</span></span>
      <h3 class="perfil-cargo">${esc(T(p.cargo))}</h3>
      <p class="perfil-empresa">${esc(T(p.empresa))}</p>
      <p class="perfil-texto">${esc(T(p.texto))}</p>
      <p class="perfil-formacion">${ICONOS.doc}${esc(T(p.formacion))}</p>
  </div>`;
}

function renderImpacto(){
  return CONTENIDO.impacto.map(i => `
    <div class="panel reveal impact-card c-3" style="--accent:var(--${i.color});">
      <div class="icon-circle" style="--accent:var(--${i.color});color:var(--${i.color});">${ICONOS[i.icono]||""}</div>
      <div class="impact-body">
        <h4 class="impact-title">${esc(T(i.titulo))}</h4>
        <p class="impact-text">${esc(T(i.texto))}</p>
      </div>
    </div>`).join("");
}

function renderFooter(){
  return `
  <div>
    <span class="footer-kicker">${esc(t("footer_kicker"))}</span>
    <p class="footer-text">${esc(t("footer_text"))}</p>
  </div>
  <div class="footer-mid">
    <a href="mailto:${S.email}" class="footer-item">${ICONOS.sobre}${esc(S.email)}</a>
    <span class="footer-item">${ICONOS.pin}${esc(t("footer_place"))}</span>
  </div>
  <div class="footer-socials">
    <a href="${S.linkedin}" target="_blank" rel="noopener" class="social-btn" title="LinkedIn">in</a>
    <a href="${S.github}" target="_blank" rel="noopener" class="social-btn" title="GitHub">GH</a>
  </div>`;
}

/* ------------------------------------------------------- RENDER GENERAL */
function render(){
  document.documentElement.lang = LANG;
  document.title = t("seo_title");

  const set = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };
  set("heroGrid",     renderHero());
  set("metricsGrid",  renderMetricas());
  set("toolsGrid",    renderStack() + renderHerramientas() + renderDocumentos());
  set("projectsGrid", renderProyectos());
  set("aboutGrid",    renderPerfil());
  set("impactGrid",   renderImpacto());
  set("footerPanel",  renderFooter());

  document.querySelectorAll("[data-t]").forEach(el => el.textContent = t(el.dataset.t));

  const mail = document.getElementById("emailBtn");
  if(mail){
    mail.href = `mailto:${S.email}?subject=${encodeURIComponent(t("mail_subject"))}`
              + `&body=${encodeURIComponent(t("mail_body"))}`;
  }
  document.querySelectorAll("#langToggle button")
    .forEach(b => b.classList.toggle("active", b.dataset.lang === LANG));

  initGlow();
  initReveal();
}

/* ------------------------------------------------------------- IDIOMA */
document.getElementById("langToggle").addEventListener("click", e => {
  const b = e.target.closest("button[data-lang]");
  if(!b || b.dataset.lang === LANG) return;
  LANG = b.dataset.lang;
  store.set("jdc-lang", LANG);
  render();
});

/* --------------------------------------------------------------- TEMA */
const themeBtn = document.getElementById("themeToggle");
function applyTheme(dark){
  document.body.classList.toggle("theme-dark", dark);
  themeBtn.textContent = dark ? "☀" : "🌙";
}
applyTheme(store.get("jdc-theme") !== "light");
themeBtn.addEventListener("click", () => {
  const dark = !document.body.classList.contains("theme-dark");
  applyTheme(dark);
  store.set("jdc-theme", dark ? "dark" : "light");
});

/* ------------------------------------------------------- MENÚ MÓVIL */
(function(){
  const burger = document.getElementById("navBurger");
  const links  = document.querySelector(".nav-links");
  if(!burger || !links) return;
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  links.addEventListener("click", e => {
    if(e.target.tagName === "A"){
      links.classList.remove("open");
      burger.setAttribute("aria-expanded","false");
    }
  });
})();

/* ------------------------------------------- BARRA DE PROGRESO DE SCROLL */
(function(){
  const bar = document.getElementById("scrollProgress");
  if(!bar) return;
  const upd = () => {
    const h = document.documentElement;
    const s = h.scrollHeight - h.clientHeight;
    bar.style.width = (s > 0 ? (h.scrollTop / s) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", upd, { passive:true });
  window.addEventListener("resize", upd);
  upd();
})();

/* -------------------------------------------- APARICIÓN AL HACER SCROLL */
let revealObserver = null;
function initReveal(){
  const items = Array.from(document.querySelectorAll(".reveal"));
  if(!("IntersectionObserver" in window)){
    items.forEach(el => el.classList.add("visible")); return;
  }
  if(revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(en.isIntersecting){
        const sib = Array.from(en.target.parentElement.children)
                         .filter(x => x.classList.contains("reveal"));
        en.target.style.transitionDelay =
          Math.min(Math.max(0, sib.indexOf(en.target)) * 70, 280) + "ms";
        en.target.classList.add("visible");
      } else {
        en.target.style.transitionDelay = "0ms";
        en.target.classList.remove("visible");
      }
    });
  }, { rootMargin:"0px 0px -8% 0px", threshold:0.08 });
  items.forEach(el => revealObserver.observe(el));
}

/* ------------------------------------------------ BRILLO EN LAS TARJETAS */
function initGlow(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll(".panel").forEach(p => {
    if(p.querySelector(":scope > .panel-glow")) return;
    const g = document.createElement("div");
    g.className = "panel-glow";
    p.prepend(g);
    p.addEventListener("pointermove", e => {
      const r = p.getBoundingClientRect();
      p.style.setProperty("--px", ((e.clientX - r.left) / r.width) * 100 + "%");
      p.style.setProperty("--py", ((e.clientY - r.top) / r.height) * 100 + "%");
    }, { passive:true });
  });
}

/* --------------------------------------------------- HALO DEL CURSOR */
(function(){
  if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let raf = null, lx = 50, ly = 50;
  window.addEventListener("pointermove", e => {
    lx = (e.clientX / window.innerWidth) * 100;
    ly = (e.clientY / window.innerHeight) * 100;
    if(raf) return;
    raf = requestAnimationFrame(() => {
      document.body.style.setProperty("--mx", lx + "%");
      document.body.style.setProperty("--my", ly + "%");
      raf = null;
    });
  }, { passive:true });
})();

/* --------------------------------------------- FONDO DE PARTÍCULAS */
(function(){
  const canvas = document.getElementById("particles-bg");
  if(!canvas) return;
  const ctx = canvas.getContext && canvas.getContext("2d");
  if(!ctx) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let w, h, dpr, parts = [], mouse = { x:null, y:null };

  const colors = () => document.body.classList.contains("theme-dark")
    ? { line:"143,168,255", dot:"127,212,242" }
    : { line:"110,140,245", dot:"95,193,232" };
  const rand = (a,b) => a + Math.random() * (b - a);

  function resize(){
    dpr = Math.min(2, window.devicePixelRatio || 1);
    w = window.innerWidth; h = window.innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    canvas.style.width = w + "px"; canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = reduced ? 0 : Math.round(Math.min(80, Math.max(28, (w * h) / 26000)));
    parts = Array.from({ length:count }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: rand(-0.13, 0.13), vy: rand(-0.13, 0.13), r: rand(1, 2.1)
    }));
  }

  function step(){
    ctx.clearRect(0, 0, w, h);
    const { line, dot } = colors();
    for(const p of parts){
      p.x += p.vx; p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
      if(mouse.x !== null){
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        if(dx*dx + dy*dy < 16000){ p.x += dx * 0.0022; p.y += dy * 0.0022; }
      }
    }
    for(let i = 0; i < parts.length; i++){
      for(let j = i + 1; j < parts.length; j++){
        const a = parts[i], b = parts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if(dist < 128){
          ctx.strokeStyle = `rgba(${line},${(1 - dist/128) * 0.14})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    for(const p of parts){
      ctx.beginPath();
      ctx.fillStyle = `rgba(${dot},0.55)`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }
    requestAnimationFrame(step);
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", e => { mouse.x = e.clientX; mouse.y = e.clientY; }, { passive:true });
  window.addEventListener("pointerleave", () => { mouse.x = mouse.y = null; });
  if(!reduced) step();
})();

/* ------------------------------------------------------------ ARRANQUE */
render();
