---
name: create-course
description: Use when creating or substantially editing a course in this repo ("create a course", "add a course on X"). Covers file structure, manifests, lesson format, voice, and review.
disable-model-invocation: true
---

# Creating a course for christhoma-courses

This repo is a zero-build static site that renders markdown courses into a web viewer (GitHub Pages, deploys from `main`). A course is a folder of markdown plus one manifest. The engine (`index.html`, `assets/app.js`, `assets/styles.css`) never changes when you add a course.

Every course here is a **3-week, college-style, self-paced intensive for a motivated beginner**, modeled on a deep online university course (syllabus, lectures, drills, quizzes, projects, a mastery rubric). Match that. The bar is high: these read like a real course written by an expert who also teaches well, not like generated filler.

## What is canonical: the structure, not any one course

**The canonical thing to replicate is the flat-file structure and manifest layout**, not a specific course's subject treatment. Six of the eight existing courses share it (clawhammer-course, guitar-music-theory, photography-foundations, outdoor-garden-care-pittsburgh, spanish-foundations, spanish-intermediate): the same file set, the same `course.json` sectioning (Start Here / Week 1–3 / Practice / Assessments), the same manifest fields. That is invariant across every subject. Replicate it exactly (see "The file set" and "Manifest formats" below).

Note: `sampling_course` and `agentic-harness-engineering` use an older, leaner layout (`RESOURCES.md` plus `week1/`/`week2/`/`week3/` subdirectories). Do not copy that one.

### Pick the right exemplar for the subject type

The structure is fixed, but the **daily rhythm and framing** differ by what kind of thing you are teaching. Read the exemplar that matches, then mirror its rhythm. Do not force an instrument framing onto a knowledge subject or vice versa.

- **Skill / practice subjects** (an instrument, a language, photography, a craft you build by repetition): exemplar **`courses/clawhammer-course/`**. Hands-on every day, muscle memory and reps, projects are recordings or performances, the rubric is a technique-mastery ladder.
- **Knowledge / applied subjects** (gardening, a science, a fact-heavy or reasoning-heavy domain): exemplar **`courses/outdoor-garden-care-pittsburgh/`**. The emphasis is *understanding you can transfer to new problems*, taught through worked examples and field labs/observation, projects are plans or applied artifacts, the rubric measures knowing-and-applying. It also models how to handle real-world constraints (seasonality): mark constrained tasks and always give a do-it-now alternative.

Many subjects are a blend (the SP-404 sampling course is skill-led with knowledge chunks); lean on the closer exemplar and borrow from the other where it fits.

## The process (in order)

1. **Study the matching exemplar.** Read the exemplar for your subject type (above) and `courses.json` in full. Internalize the format before drafting.
2. **Plan the arc.** Decide the course code, the 3-week progression, and the 21-day schedule so each day builds on the last and the three projects ladder up to a capstone. Week 1 = foundations, Week 2 = the core skill, Week 3 = synthesis into a finished artifact.
3. **Verify the facts.** For any factual/technical subject, use WebSearch/WebFetch against authoritative sources (official manuals, primary references) and confirm specifics before stating them. Cite sources in the Field Guide. A course with confident wrong information is worse than none.
4. **Write the files** (see the file set below), in the established voice (see the voice rules below). Teach through doing: every concept is paired with a hands-on task (a drill, a lab, a build), not just explained.
5. **Review** against the checklist below, and fix.
6. **Validate and smoke-test** (JSON parses, every lesson path resolves over HTTP).
7. **Register** the course in the root `courses.json`.
8. **Deploy** only when the user asks: commit and push to `main` (this repo deploys from `main`; recent history commits directly there). End commit messages with the `Co-Authored-By` trailer.

## The file set (the canonical flat layout)

Create `courses/<slug>/` with these files (every course in the canonical group has exactly these). `<slug>` is lowercase-kebab (e.g. `sp404-mk2-sampling`).

| File | Contents |
|---|---|
| `course.json` | The manifest: title, subtitle, description, accent, and `sections` → `lessons` (see format below). |
| `README.md` | Course overview: the promise of the course, what it covers and deliberately omits, how the subject is really learned, a materials table linking every file, how to use the course, a note on pace. |
| `SYLLABUS.md` | Course description, numbered learning objectives, the 3-week/21-day schedule tables, the daily structure (~45–75 min), grading weights, course policies. |
| `RUBRIC.md` | A mastery rubric: ~10 skill domains, each a 4-level ladder (Novice→Solid) with a concrete "Test," plus a score sheet and an expected trajectory. Mastery threshold 90%. |
| `SUPPLEMENT-<topic>.md` | The reference appendix the learner returns to (gear/tooling, notation, diagrams, history/context, and curated free resources with real links). The canonical six all name it `SUPPLEMENT-<topic>.md`; use that. (The filename is free since the manifest sets the path, but match the convention.) Tell the reader which sections to read before Day 1. |
| `week-1-<name>.md` | Days 1–7, one file. A weekly thesis up top, then a section per day. |
| `week-2-<name>.md` | Days 8–14. |
| `week-3-<name>.md` | Days 15–21, ending with the final exam + capstone. |
| `DRILLS.md` | A rotating practice menu grouped by skill, with a daily-time recipe and rules that make drills work. |
| `PROJECTS.md` | Three graded projects + a final capstone, each with a deliverable spec, a points rubric (table), and a plain-language "pass bar." |
| `QUIZZES.md` | Two weekly quizzes + a final exam, closed-book, with point values and an applied/"do it" section. |
| `ANSWER-KEYS.md` | Full keys for every quiz and the exam, with partial-credit guidance and how to grade the applied parts. |

Use `course.json` `sections` to group these (Start Here / Week 1 / Week 2 / Week 3 / Practice / Assessments), exactly as clawhammer does.

## Manifest formats

`courses/<slug>/course.json`:
```json
{
  "title": "Full Course Title",
  "subtitle": "CODE-00 · A 3-week intensive",
  "description": "One dense paragraph: what they go from/to and what is covered, through daily lectures, drills, quizzes, and projects.",
  "accent": "#0d9488",
  "sections": [
    { "title": "Start Here", "lessons": [
      { "title": "Course Overview & How to Practice", "path": "README.md" },
      { "title": "Syllabus", "path": "SYLLABUS.md" },
      { "title": "Mastery Rubric", "path": "RUBRIC.md" },
      { "title": "Field Guide: ...", "path": "SUPPLEMENT-<topic>.md" }
    ]},
    { "title": "Week 1: ...", "lessons": [ { "title": "Days 1–7: ...", "path": "week-1-....md" } ] },
    { "title": "Week 2: ...", "lessons": [ { "title": "Days 8–14: ...", "path": "week-2-....md" } ] },
    { "title": "Week 3: ...", "lessons": [ { "title": "Days 15–21: ...", "path": "week-3-....md" } ] },
    { "title": "Practice",    "lessons": [ { "title": "Practice Menu (Drills)", "path": "DRILLS.md" } ] },
    { "title": "Assessments", "lessons": [
      { "title": "Projects (1–3 + Final ...)", "path": "PROJECTS.md" },
      { "title": "Quizzes & Final Exam", "path": "QUIZZES.md" },
      { "title": "Answer Keys", "path": "ANSWER-KEYS.md" }
    ]}
  ]
}
```

Then add one entry to the root **`courses.json`** `courses` array: `slug`, `title`, `subtitle`, `description`, `tags` (3–4, last is usually `"3 weeks"`), and `accent`. **Pick an `accent` hex not already used** by another course (check the file), and keep it consistent between `course.json` and `courses.json`.

## The daily lesson format (inside each week file)

Open each week file with a `> ` blockquote stating the **thesis of the week**. Then each day is a section. The engine renders standard markdown and auto-builds a table of contents from headings.

Every day shares the same skeleton: **state the goal, teach it, do it, then self-check.** The middle headings differ by subject type, so use the rhythm from your exemplar:

**Skill / practice rhythm** (clawhammer exemplar):
- `# Day N: Title`
- `### Objectives`: a few concrete, doable outcomes.
- `### Listen` / `### Setup` (5 min): prime the ear/senses or stage the tools before doing.
- `### Lecture`: the teaching. Precise, plain, example-driven.
- `### Do` / `### Play`: the timed, hands-on assignment.
- `### Daily drill`: a short repeatable rep introduced that day.
- `### Self-check`: 5 questions answered from memory.

**Knowledge / applied rhythm** (gardening exemplar):
- `# Day N: Title`
- `### Objectives`
- `### Lecture`: the teaching, with the *reasoning* behind each practice so the learner can solve unseen problems.
- `### Examples`: worked cases/scenarios that apply the lecture.
- `### Lab`: an observation or field task; if it needs a season or condition the learner may not have, mark it and give a do-it-now alternative.
- `### Self-check`: 5 questions answered from memory.

In both: use tables, fenced code blocks for any diagram/notation/ASCII, and `> ` callouts for the one thing not to miss. Cross-link the supplement with relative links like `[Field Guide §2](SUPPLEMENT-<topic>.md)`. The recurring-practice file (`DRILLS.md`) is daily *drills* for a skill course and a recurring *field-practice/habits menu* for a knowledge course.

End each week with a consolidation/"studio" day that folds in the project, then a "Looking ahead" paragraph bridging to the next week. Cross-reference relative `.md` links between files (the engine resolves them).

## Voice rules (non-negotiable; this is what makes it not sound like AI)

The whole corpus was deliberately cleaned to read human-written. Keep it that way.

- **No em-dashes (—).** Use commas, colons, semicolons, or parentheses for asides. (En-dashes `–` are fine in numeric/letter ranges like `Days 1–7`, `45–75 min`, `G – C – G`.)
- **No emoji as decoration.** Functional arrows in diagrams (`→ ↔`) are fine; an arrow in a "trajectory" line is fine. No 📝/🔥/✅ etc. in headings or prose.
- **Avoid AI tells:** no "it's not just X, it's Y," "when it comes to," "dive in," "unlock," "elevate," "in today's," "rich tapestry," "game-changer," "delve," "that said," reflexive "Whether you're a... or a...". Scan and remove.
- **Avoid the rhetorical rule-of-three tic.** Real domain triads (kick/snare/hat) are fine; manufactured parallel triples for rhythm are the tell. Vary sentence and list length.
- **Write like the clawhammer course:** direct, warm, knowledgeable, opinionated, second person, confident. Short declaratives mixed with longer explanatory sentences. Tables and diagrams over prose dumps. It should sound like one expert teacher with a point of view.
- **Beginner-first and honest:** assume zero prior knowledge, name what you are deliberately omitting and why, and be candid that some mastery only comes with months of practice after the course.

## Pedagogical conventions to keep

- A bold **"promise of this course"** callout in the README.
- **What it covers and what it deliberately omits** (and a sentence on where those omitted doors lead).
- **Grading weights** that sum to 100%, a **90% mastery threshold**, and grading that is honest about self-assessment (record/bounce/photograph the work and judge it cold).
- A **cumulative arc**: each week's foundation is required by the next; the three projects build toward the capstone.
- **Course policies** that fit the subject (the real failure modes a beginner hits) rather than generic boilerplate.
- **Real, working external links** in the Field Guide, verified, with sources noted.

## Review checklist (run before declaring done)

- `python3 -c "import json; json.load(open('courses/<slug>/course.json')); json.load(open('courses.json'))"` passes.
- Every `path` in `course.json` exists; every relative `.md` link between files resolves. Smoke-test by serving locally (`python3 -m http.server`) and curling each lesson for HTTP 200.
- Em-dash scan is clean: `grep -rn "—" courses/<slug>` returns only intended diagram/arrow lines (ideally nothing).
- AI-cliché scan is clean (grep the phrases listed above).
- The new `accent` is unique across `courses.json`.
- Facts are verified and sourced; nothing asserted from memory that could be checked.
- Length and depth are comparable to the clawhammer course (its week files run ~250–340 lines each; the whole course is ~1,800+ lines). Thin content fails the bar.
- It reads like a human expert wrote it. Read a few paragraphs aloud; if any sentence sounds like generated marketing copy, rewrite it.

## Deploy

Only when the user asks to push: `git add -A`, commit with a clear message ending in the `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>` trailer, and `git push` to `main`. Pages redeploys within a minute. Do not push unprompted.
