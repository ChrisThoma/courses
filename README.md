# christhoma · Courses

A zero-build static site that renders markdown courses into a clean, navigable web viewer. Hosted on GitHub Pages. No framework, no build step, no dependencies to install — just static files and two CDN scripts (markdown rendering + syntax highlighting).

**Live site:** `https://christhoma.github.io/<repo>/` (see Deployment below)

---

## The pattern (why this is reusable)

The repo cleanly separates a course-agnostic **engine** from per-course **content**:

```
.
├── index.html            # SPA shell  ─┐
├── assets/app.js         # the engine  ├─ never changes when you add a course
├── assets/styles.css     # the theme  ─┘
├── courses.json          # hub manifest: the list of courses
├── .nojekyll             # tell GitHub Pages to serve files as-is
└── courses/
    └── <course-slug>/
        ├── course.json   # this course's structure (sections → lessons)
        └── **/*.md       # the lesson content (any folder layout you like)
```

To **add a new course**, you never touch `index.html`, `app.js`, or `styles.css`:

1. Create `courses/<slug>/` and drop your `.md` files in (any subfolder structure).
2. Add `courses/<slug>/course.json` describing the table of contents.
3. Add one entry to the root `courses.json`.
4. Commit and push. Done.

That's the whole authoring loop. Write markdown, describe it in one manifest, push.

## Manifest formats

**`courses.json`** (hub — lists every course):
```json
{
  "site": { "title": "christhoma · Courses", "tagline": "…", "author": "christhoma" },
  "courses": [
    {
      "slug": "my-course",
      "title": "My Course",
      "subtitle": "optional one-liner",
      "description": "Shown on the hub card.",
      "tags": ["Tag A", "Tag B"],
      "accent": "#6d5dfc"
    }
  ]
}
```

**`courses/<slug>/course.json`** (one course — its table of contents):
```json
{
  "title": "My Course",
  "subtitle": "optional",
  "description": "optional",
  "accent": "#6d5dfc",
  "sections": [
    {
      "title": "Module 1",
      "lessons": [
        { "title": "Intro", "path": "module1/intro.md" },
        { "title": "Quiz",  "path": "module1/quiz.md" }
      ]
    }
  ]
}
```
`path` is relative to the course folder. Lessons can live in any subfolder layout; only the manifest defines order and grouping.

## Features the engine gives every course for free

- Hash-based routing (`#/<slug>/<section>/<lesson>`) — works on GitHub Pages with no server config and survives refresh/deep-links.
- Sidebar nav generated from the manifest, with **per-lesson progress** (visited lessons get a check, stored in `localStorage`).
- GitHub-flavored markdown: tables, code fences, blockquotes, task lists.
- Syntax highlighting (highlight.js) and a right-rail **table of contents** with scroll-spy.
- **Internal `.md` links are auto-rewritten** to in-app routes — your lessons can link to each other with normal relative paths (e.g. `../RESOURCES.md`) and navigation stays in the SPA. External links open in a new tab.
- Light/dark theme toggle (persisted), responsive layout with a mobile drawer.
- Per-course `accent` color pulled from the manifest.

## Run locally

Because the engine uses `fetch()`, open it over HTTP (not `file://`):

```bash
cd christhoma-courses
python3 -m http.server 8000
# visit http://localhost:8000
```

## Deployment (GitHub Pages)

The `.nojekyll` file is required — it stops GitHub from running Jekyll, which would otherwise mangle the `courses/` markdown. After pushing this repo to GitHub:

- **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / root.**

Then the site is live at `https://christhoma.github.io/<repo-name>/`. Hash routing and relative paths mean it works identically at a repo subpath or at the user-site root — nothing to configure.

See `DEPLOY.md` for the exact commands.

## Adding interactivity later (optional)

The viewer is intentionally read-only and static. If you later want quizzes that grade themselves, embedded runnable code, or saved notes, those are additive: the engine renders raw HTML from markdown, so you can extend `app.js` to hydrate special fenced blocks (e.g. ```` ```quiz ````) without changing the content model.
