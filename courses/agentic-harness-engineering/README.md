# CS 2960 — Agentic Harness Engineering

**An intensive 3-week graduate-style course on the architecture of modern AI agent harnesses**
*Self-paced edition · ~4–6 hours/day · June 2026*

---

## Course Description

A frontier LLM is a brain in a jar. A **harness** is everything around it that turns it into a working agent: the system prompt, the tool definitions, the agent loop, the execution environment, the permission system, the context-management machinery, and the evaluation pipeline. In 2026, nearly every serious coding agent — Claude Code, Codex CLI, OpenCode, OpenHands, Cline, Aider, Pi — runs the same fundamental loop (*read → think → act → observe → repeat*). The differentiation is almost entirely in the harness, and "harness engineering" has emerged as a discipline in its own right.

This course teaches you that discipline from first principles. You will build a working agent harness from scratch in Week 1, tear down the major production harnesses in Week 2, and in Week 3 build a capstone harness with permissions, compaction, memory, and an eval suite — the same components shipped in production systems.

By the end you will be able to read any harness's source and explain its design decisions, build your own harness, extend existing ones via MCP/hooks/skills, and evaluate agents rigorously.

## Prerequisites

- Comfortable in Python (or TypeScript) and the Unix shell
- An Anthropic API key (or OpenAI/other — examples use the Anthropic API)
- Docker installed (Week 3 sandboxing labs)
- Claude Code installed (you're presumably already here)
- **Understand what an LLM is** (tokens, context window, function calling). New to this? Do **Week 0** in `RESOURCES.md` first — one day of videos and you're ready.

## How to study this course (read this)

The lectures (`weekN/lectures.md`) are written to be **read and learned from directly** — they explain each concept in full and include working code; you don't need anything else to follow them. But this is a real field with primary sources, so each lecture is paired with vetted external materials in **`RESOURCES.md`** (papers, engineering blogs, and YouTube videos, mapped lecture-by-lecture, with a ⭐ on the one thing you shouldn't skip).

**The recommended rhythm for each lecture:**
1. Watch/skim that lecture's ⭐ resource in `RESOURCES.md` (primes the concepts).
2. Read the lecture in full and answer its **Section questions** in writing.
3. Do the **Lab**.
4. After the lab, go deep on the remaining resources for that lecture.

If you only read the lecture notes and do the labs, you'll learn the material. If you also do every ⭐ resource, you'll be as current as anyone working in the field. Both paths are valid — pick based on your time.

## Course Structure (Harvard model)

Each weekday follows the same rhythm:

| Block | Time | What |
|---|---|---|
| **Lecture** | ~60–90 min | Read the lecture notes; chase every linked primary source |
| **Section** | ~30 min | "Section questions" at the end of each lecture — answer them in writing |
| **Lab / Problem Set** | ~2–3 hrs | Hands-on build or teardown work |
| **Reading** | ~30–60 min | Primary sources (papers, engineering blogs, source code) |

Fridays: weekly quiz (closed-book, then self-grade with the answer key) + project milestone due.

## Calendar

### Week 1 — Foundations: Anatomy of a Harness
| Day | Lecture | Lab |
|---|---|---|
| 1 | What is a harness? The agent loop | Trace a real loop with raw API calls |
| 2 | Tool use & the Agent-Computer Interface (ACI) | Design and break tool schemas |
| 3 | Context engineering I: prompts, caching, window economics | Measure cache behavior |
| 4 | The execution environment: shell, files, edit formats | Implement three edit formats |
| 5 | **Quiz 1** + Project 1 due | Ship your minimal harness |

**Project 1:** Build a working coding agent in ~300 lines (see `week1/project.md`)

### Week 2 — The Modern Landscape: Comparative Harness Study
| Day | Lecture | Lab |
|---|---|---|
| 6 | Claude Code teardown: permissions, hooks, subagents, skills | Instrument Claude Code with hooks |
| 7 | Open-source teardowns: OpenCode, Aider, OpenHands, SWE-agent, Pi, Cline | Read source; diff the designs |
| 8 | MCP: the extensibility protocol | Build and ship an MCP server |
| 9 | Multi-agent: subagents, orchestrators, and when not to | Build a subagent dispatcher |
| 10 | **Quiz 2** + Midterm due | Comparative teardown paper |

**Project 2:** Build an MCP server · **Midterm:** comparative teardown of 3 harnesses (see `week2/project.md`)

### Week 3 — Mastery: Safety, Evaluation, Production
| Day | Lecture | Lab |
|---|---|---|
| 11 | Security: prompt injection, the lethal trifecta, sandboxing | Attack your own Week-1 agent |
| 12 | Evaluation: SWE-bench, Terminal-Bench, building your own evals | Build a 10-task eval harness |
| 13 | Long-horizon agents: compaction, memory, checkpointing | Add compaction + memory to your harness |
| 14 | Production: cost, observability, headless/CI agents, parallelism | Capstone build day |
| 15 | **Final exam** + Capstone due | Present (writeup) your capstone |

**Capstone:** A production-grade harness with permissions, compaction, memory, and an eval suite (see `week3/capstone.md`)

## Grading (self-assessed against `RUBRIC.md`)

- Quizzes (3 × 10%) — 30%
- Project 1 (minimal harness) — 15%
- Project 2 + Midterm teardown — 20%
- Capstone — 30%
- Section question writeups — 5%

**Mastery bar:** "Proficient" or better on all eight rubric dimensions, "Master" on at least three.

## Primary Reading List

Read these as assigned in the lectures; they are the canon of the field.

**Papers**
- Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models* (2022) — the original agent loop
- Yang et al., *SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering* (2024) — the ACI concept
- Jimenez et al., *SWE-bench* (2023) and the SWE-bench Verified follow-up
- *Confucius Code Agent* (Meta/Harvard, Feb 2026) — AX/UX/DX harness framing

**Engineering essays (the real curriculum)**
- Anthropic: *Building Effective Agents* · *Writing Tools for Agents* · *Effective Context Engineering for AI Agents* · *How we built our multi-agent research system* (anthropic.com/engineering)
- Thorsten Ball, *How to Build an Agent* (ampcode.com) — the famous "it's ~300 lines" essay
- Martin Fowler's site, *Harness engineering for coding agent users* (2026)
- Aider docs: *Edit formats* and *Repository map* (aider.chat/docs)
- Cognition, *Don't Build Multi-Agents* — the counterpoint to subagent maximalism
- Simon Willison's blog — prompt injection series, "lethal trifecta"
- Manus, *Context Engineering for AI Agents: Lessons from Building Manus* (KV-cache stability)
- modelcontextprotocol.io — the MCP specification

**Source code to read (yes, actually read it)**
- OpenCode (github.com/sst/opencode) — the dominant open harness, ~165k stars
- Aider (github.com/Aider-AI/aider) — `base_coder.py`, `repomap.py`
- OpenHands (github.com/All-Hands-AI/OpenHands) — event stream + runtime
- SWE-agent (github.com/SWE-agent/SWE-agent) — config-driven ACI
- Pi — the lean, hackable 2026-era harness; small enough to read entirely

## A Note on Currency (June 2026)

This field turns over fast. As of this writing: Google retired Gemini CLI in May 2026 in favor of **Antigravity CLI**; OpenCode passed 150k stars and became the open-source default; Codex CLI ships Docker-sandboxed execution by default; Claude Code's permission/hook/skill system is the reference design for extensibility. Verify versions before citing specifics — the *concepts* in this course are durable, the product details are not.

## File Map

```
agentic-harness-course/
├── README.md          ← you are here (syllabus + how to study)
├── RUBRIC.md          ← the mastery rubric — read this FIRST
├── RESOURCES.md       ← Week 0 primer + per-lecture videos/readings (⭐ = don't skip)
├── week1/  lectures.md · quiz.md · project.md
├── week2/  lectures.md · quiz.md · project.md
└── week3/  lectures.md · quiz.md · capstone.md
```
