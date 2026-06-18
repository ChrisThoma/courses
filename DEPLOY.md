# Deploying to GitHub Pages

This repo is a static site: no build step. GitHub Pages serves it as-is (the `.nojekyll` file disables Jekyll processing so the `courses/` markdown is served untouched).

## Option A: Dedicated project repo (recommended)

Lives at `https://christhoma.github.io/courses/`. Keeps your courses separate from anything in your existing user site.

```bash
cd christhoma-courses
gh repo create courses --public --source=. --remote=origin --push
# enable Pages from the main branch root:
gh api -X POST repos/ChrisThoma/courses/pages -f source.branch=main -f source.path=/ 2>/dev/null \
  || echo "If that errored, enable it in Settings → Pages → Source: main / root"
```

Wait ~1 minute, then open: **https://christhoma.github.io/courses/**

## Option B: Your existing user site (`ChrisThoma.github.io`)

Serves at the root `https://christhoma.github.io/`. ⚠️ This repo already exists and has content: only do this if you want the course hub to *be* your homepage (or you put it in a subfolder). To avoid clobbering, the safest form is a subfolder:

```bash
# clone your existing user site, drop this site into a subfolder, push
git clone git@github.com:ChrisThoma/ChrisThoma.github.io.git
cp -R christhoma-courses/{index.html,assets,courses,courses.json,.nojekyll} ChrisThoma.github.io/courses/
cd ChrisThoma.github.io && git add . && git commit -m "Add courses viewer" && git push
# → https://christhoma.github.io/courses/
```

## Updating content later

Edit any `.md` file or manifest, then:
```bash
git add . && git commit -m "Update course content" && git push
```
Pages redeploys automatically within a minute.

## Adding a new course (no code changes)

1. `courses/<new-slug>/`: drop your markdown in.
2. `courses/<new-slug>/course.json`: define sections → lessons.
3. Add the course to `courses.json`.
4. Commit and push.
