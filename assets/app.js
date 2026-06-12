/* ============================================================================
 * Course Viewer — a reusable, zero-build static engine for markdown courses.
 *
 * It is entirely course-agnostic. To add a course you never touch this file:
 *   1. create  courses/<slug>/  with your .md files
 *   2. add a   courses/<slug>/course.json  manifest (sections -> lessons)
 *   3. add the course to the root  courses.json
 *
 * Routing is hash-based so it works on GitHub Pages with no server config:
 *   #/                                  -> hub (all courses)
 *   #/<slug>                            -> course overview (first lesson)
 *   #/<slug>/<sectionIdx>/<lessonIdx>   -> a specific lesson
 * ========================================================================== */

const App = (() => {
  const el = {
    content: document.getElementById('content'),
    sidebar: document.getElementById('sidebar'),
    toc: document.getElementById('toc'),
    crumbs: document.getElementById('crumbs'),
    scrim: document.getElementById('scrim'),
  };

  const state = {
    site: null,        // root courses.json
    course: null,      // current course.json
    courseSlug: null,
    currentRoute: null,
  };

  const cache = new Map(); // url -> text

  /* ---- tiny helpers ------------------------------------------------------ */
  const h = (s) => String(s).replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  async function getJSON(url) {
    const r = await fetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    return r.json();
  }
  async function getText(url) {
    if (cache.has(url)) return cache.get(url);
    const r = await fetch(url, { cache: 'no-cache' });
    if (!r.ok) throw new Error(`${r.status} ${url}`);
    const t = await r.text();
    cache.set(url, t);
    return t;
  }

  const slug = (s) => s.toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');

  /* ---- progress (per-lesson, persisted) ---------------------------------- */
  const Progress = {
    key: (courseSlug, path) => `progress:${courseSlug}:${path}`,
    seen(courseSlug, path) { return localStorage.getItem(this.key(courseSlug, path)) === '1'; },
    mark(courseSlug, path) { localStorage.setItem(this.key(courseSlug, path), '1'); },
  };

  /* ---- markdown link rewriting ------------------------------------------ *
   * Lessons cross-link with relative paths like ../RESOURCES.md or
   * week1/quiz.md. Resolve those against the manifest and turn them into
   * in-app hash routes so navigation never leaves the SPA.                  */
  function resolveRelative(fromPath, href) {
    const stack = fromPath.split('/').slice(0, -1);
    for (const part of href.split('/')) {
      if (part === '..') stack.pop();
      else if (part !== '.' && part !== '') stack.push(part);
    }
    return stack.join('/');
  }
  function lessonRouteForPath(path) {
    const secs = state.course.sections;
    for (let s = 0; s < secs.length; s++) {
      const li = secs[s].lessons.findIndex((l) => l.path === path);
      if (li !== -1) return `#/${state.courseSlug}/${s}/${li}`;
    }
    return null;
  }

  function flatLessons() {
    const out = [];
    state.course.sections.forEach((sec, s) =>
      sec.lessons.forEach((les, l) => out.push({ ...les, s, l, section: sec.title })));
    return out;
  }

  /* ---- rendering: hub ---------------------------------------------------- */
  function renderHub() {
    state.course = null; state.courseSlug = null;
    el.sidebar.innerHTML = '';
    el.sidebar.classList.add('is-hidden');
    el.toc.innerHTML = '';
    el.crumbs.innerHTML = '';
    document.documentElement.style.removeProperty('--accent');

    const cards = state.site.courses.map((c) => {
      const tags = (c.tags || []).map((t) => `<span class="tag">${h(t)}</span>`).join('');
      const accent = c.accent ? ` style="--card-accent:${h(c.accent)}"` : '';
      return `
        <a class="card" href="#/${h(c.slug)}"${accent}>
          <div class="card-accent"></div>
          <h2>${h(c.title)}</h2>
          ${c.subtitle ? `<p class="card-sub">${h(c.subtitle)}</p>` : ''}
          <p class="card-desc">${h(c.description || '')}</p>
          <div class="tags">${tags}</div>
          <span class="card-cta">Start course →</span>
        </a>`;
    }).join('');

    el.content.innerHTML = `
      <div class="hub">
        <div class="card-grid">${cards}</div>
      </div>`;
    el.content.focus();
    setCrumbs([]);
    window.scrollTo(0, 0);
  }

  /* ---- rendering: sidebar ------------------------------------------------ */
  function renderSidebar(activeS, activeL) {
    const secs = state.course.sections.map((sec, s) => {
      const items = sec.lessons.map((les, l) => {
        const active = s === activeS && l === activeL ? ' active' : '';
        const done = Progress.seen(state.courseSlug, les.path) ? ' done' : '';
        return `<li><a class="lesson-link${active}${done}" href="#/${state.courseSlug}/${s}/${l}">
                  <span class="check" aria-hidden="true"></span>${h(les.title)}</a></li>`;
      }).join('');
      return `<div class="nav-section"><div class="nav-section-title">${h(sec.title)}</div>
                <ul>${items}</ul></div>`;
    }).join('');

    el.sidebar.classList.remove('is-hidden');
    el.sidebar.innerHTML = `
      <a class="nav-course" href="#/${state.courseSlug}">
        <span class="nav-course-kicker">Course</span>
        <span class="nav-course-title">${h(state.course.title)}</span>
      </a>
      <nav>${secs}</nav>
      <a class="nav-all" href="#/">← All courses</a>`;
  }

  /* ---- rendering: a lesson ---------------------------------------------- */
  async function renderLesson(sIdx, lIdx) {
    const sec = state.course.sections[sIdx];
    const lesson = sec && sec.lessons[lIdx];
    if (!lesson) return renderCourseHome();

    const base = `courses/${state.courseSlug}/`;
    el.content.innerHTML = `<div class="loading">Loading ${h(lesson.title)}…</div>`;

    let md;
    try { md = await getText(base + lesson.path); }
    catch (e) {
      el.content.innerHTML = `<div class="error"><h1>Couldn't load lesson</h1>
        <p><code>${h(lesson.path)}</code> — ${h(e.message)}</p></div>`;
      return;
    }

    const html = marked.parse(md, { gfm: true, breaks: false });
    const article = document.createElement('article');
    article.className = 'doc';
    article.innerHTML = html;

    // Rewrite intra-course .md links to in-app routes; mark external links.
    article.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href');
      if (/^(https?:)?\/\//.test(href) || href.startsWith('mailto:')) {
        a.target = '_blank'; a.rel = 'noopener'; a.classList.add('ext');
        return;
      }
      if (href.startsWith('#')) return; // in-page anchor
      const cleaned = href.split('#')[0].split('?')[0];
      if (cleaned.endsWith('.md')) {
        const resolved = resolveRelative(lesson.path, cleaned);
        const route = lessonRouteForPath(resolved);
        if (route) a.setAttribute('href', route);
      }
    });

    // Heading anchors + IDs for the TOC.
    article.querySelectorAll('h2, h3').forEach((node) => {
      if (!node.id) node.id = slug(node.textContent);
    });

    el.content.innerHTML = '';
    el.content.appendChild(article);

    // Syntax highlighting.
    if (window.hljs) article.querySelectorAll('pre code').forEach((b) => hljs.highlightElement(b));

    // Prev / next footer.
    const flat = flatLessons();
    const pos = flat.findIndex((f) => f.s === sIdx && f.l === lIdx);
    const prev = flat[pos - 1], next = flat[pos + 1];
    const navFoot = document.createElement('div');
    navFoot.className = 'lesson-nav';
    navFoot.innerHTML = `
      ${prev ? `<a class="ln prev" href="#/${state.courseSlug}/${prev.s}/${prev.l}">
        <span>← Previous</span><strong>${h(prev.title)}</strong></a>` : '<span></span>'}
      ${next ? `<a class="ln next" href="#/${state.courseSlug}/${next.s}/${next.l}">
        <span>Next →</span><strong>${h(next.title)}</strong></a>` : '<span></span>'}`;
    el.content.appendChild(navFoot);

    Progress.mark(state.courseSlug, lesson.path);
    renderSidebar(sIdx, lIdx);
    buildTOC(article);
    setCrumbs([
      { label: state.course.title, href: `#/${state.courseSlug}` },
      { label: sec.title },
      { label: lesson.title },
    ]);
    document.title = `${lesson.title} · ${state.course.title}`;
    el.content.focus();
    window.scrollTo(0, 0);
    closeMobileNav();
  }

  function renderCourseHome() {
    // Land on the first lesson of the course.
    location.hash = `#/${state.courseSlug}/0/0`;
  }

  /* ---- table of contents (right rail) ----------------------------------- */
  function buildTOC(article) {
    const heads = [...article.querySelectorAll('h2, h3')];
    if (heads.length < 3) { el.toc.innerHTML = ''; return; }
    el.toc.innerHTML = `<div class="toc-title">On this page</div>` +
      heads.map((hd) =>
        `<a class="toc-${hd.tagName.toLowerCase()}" href="#${hd.id}">${h(hd.textContent)}</a>`
      ).join('');

    const links = [...el.toc.querySelectorAll('a')];
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(link.getAttribute('href').slice(1));
        if (!target) return;
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        links.forEach((l) => l.classList.remove('active'));
        link.classList.add('active');
      });
    });

    // Scroll-spy.
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove('active'));
          const active = el.toc.querySelector(`a[href="#${e.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '0px 0px -75% 0px' });
    heads.forEach((hd) => obs.observe(hd));
  }

  /* ---- breadcrumbs ------------------------------------------------------- */
  function setCrumbs(items) {
    el.crumbs.innerHTML = items.map((it, i) => {
      const sep = i > 0 ? '<span class="crumb-sep">/</span>' : '';
      return sep + (it.href ? `<a href="${it.href}">${h(it.label)}</a>`
                            : `<span>${h(it.label)}</span>`);
    }).join('');
  }

  /* ---- routing ----------------------------------------------------------- */
  async function loadCourse(slugName) {
    if (state.courseSlug === slugName && state.course) return;
    state.course = await getJSON(`courses/${slugName}/course.json`);
    state.courseSlug = slugName;
    if (state.course.accent)
      document.documentElement.style.setProperty('--accent', state.course.accent);
  }

  async function route() {
    const hash = location.hash || '#/';
    if (!hash.startsWith('#/')) {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (state.currentRoute) history.replaceState(null, '', state.currentRoute);
      return;
    }
    state.currentRoute = hash;

    const parts = hash.replace(/^#\/?/, '').split('/').filter(Boolean);

    try {
      if (parts.length === 0) return renderHub();

      const [slugName, s, l] = parts;
      if (!state.site.courses.some((c) => c.slug === slugName)) {
        el.content.innerHTML = `<div class="error"><h1>Course not found</h1>
          <p>No course “${h(slugName)}”. <a href="#/">Back to all courses →</a></p></div>`;
        return;
      }
      await loadCourse(slugName);
      if (s === undefined) return renderCourseHome();
      await renderLesson(parseInt(s, 10) || 0, parseInt(l, 10) || 0);
    } catch (e) {
      el.content.innerHTML = `<div class="error"><h1>Something went wrong</h1>
        <p>${h(e.message)}</p><p><a href="#/">Back to all courses →</a></p></div>`;
    }
  }

  /* ---- theme + mobile nav ------------------------------------------------ */
  function initTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) document.documentElement.setAttribute('data-theme', saved);
    document.getElementById('themeToggle').addEventListener('click', () => {
      const now = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', now);
      localStorage.setItem('theme', now);
      const hl = document.getElementById('hljs-theme');
      hl.href = `https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.9.0/build/styles/github-${now === 'dark' ? 'dark' : ''}.min.css`;
    });
  }
  function openMobileNav() { el.sidebar.classList.add('open'); el.scrim.hidden = false; }
  function closeMobileNav() { el.sidebar.classList.remove('open'); el.scrim.hidden = true; }
  function initNavToggles() {
    document.getElementById('menuToggle').addEventListener('click', () =>
      el.sidebar.classList.contains('open') ? closeMobileNav() : openMobileNav());
    el.scrim.addEventListener('click', closeMobileNav);
  }

  /* ---- boot -------------------------------------------------------------- */
  async function init() {
    initTheme();
    initNavToggles();
    try {
      state.site = await getJSON('courses.json');
      document.title = (state.site.site && state.site.site.title) || 'Courses';
    } catch (e) {
      el.content.innerHTML = `<div class="error"><h1>Couldn't load courses.json</h1>
        <p>${h(e.message)}</p></div>`;
      return;
    }
    window.addEventListener('hashchange', route);
    route();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', App.init);
