# Supplemental Resources — Watch / Read Guide

The lectures in this course are written as **self-contained lecture notes**: you can read them start to finish and learn the material without leaving the file. But "comprehensive" means giving you the primary sources behind every claim, in a sensible order, so you can go as deep as you want. This file maps real, vetted external materials to each lecture.

**How to use this file**
- Each lecture lists **▶ Watch** (video), **📄 Read** (article/paper/docs), and **💻 Code** (repos to read or run).
- A ⭐ marks the single highest-value resource for that lecture — if you do nothing else, do that one.
- **Before** the lecture: skim the ⭐. **After** the lecture: go deep on the rest.
- Links were verified in June 2026. The web rots and products churn (see the currency note in the README) — if a link is dead, search the title; the *ideas* are stable.

---

## Week 0 — Prerequisites Primer (optional, do this first if LLMs are new to you)

Skip if you already understand tokens, transformers, and what "function calling" is. Otherwise, spend a day here — every later lecture assumes this.

- ⭐ ▶ **Andrej Karpathy — "Deep Dive into LLMs like ChatGPT"** (3.5 hrs, YouTube). The best single explanation of what an LLM *is* and isn't — pretraining, tokenization, fine-tuning, RLHF, hallucination, tool use. Watch the whole thing; it's the foundation for "the model is a stateless next-token predictor" that the entire course rests on. https://www.youtube.com/watch?v=7xTGNNLPyMI (search "Karpathy Deep Dive into LLMs" if the ID moved)
- ▶ **3Blue1Brown — "Attention in transformers, visually explained" (Chapter 6)**. Why a model has a finite *context window* and what "attention" means, visually. ~26 min. https://www.youtube.com/watch?v=eMlx5fFNoYc — and the surrounding Deep Learning series (Ch. 5–7) if you want the full picture: https://www.3blue1brown.com/topics/neural-networks
- ⭐ ▶ **Andrej Karpathy — "Software Is Changing (Again)" (Software 3.0)** (YC AI Startup School, June 2025). The framing for *why* this whole field exists: natural language as a programming interface, and "building for agents" as a new consumer of software. https://www.youtube.com/watch?v=LCEmiRjPEtQ
- 📄 **Anthropic — tool use / function calling docs**. The exact wire format the course's loop uses. https://docs.anthropic.com/en/docs/build-with-claude/tool-use

---

## Week 1 — Foundations

### Lecture 1 — What Is a Harness? The Agent Loop
- ⭐ 📄 **Thorsten Ball — "How to Build an Agent"** (ampcode.com). The famous "an agent is ~300 lines" essay. This *is* Lecture 1 in long form, with complete code. Read it the same day. https://ampcode.com/how-to-build-an-agent
- ⭐ 📄 **Anthropic — "Building Effective Agents"**. The canonical workflow-vs-agent distinction and the augmented-LLM building block. Required reading for the whole course. https://www.anthropic.com/engineering/building-effective-agents
- 📄 **ReAct: Synergizing Reasoning and Acting in Language Models** (Yao et al., 2022) — the paper that defined the loop shape. https://arxiv.org/abs/2210.03629
- ▶ **"Agent, take the wheel" — Thorsten Ball on Changelog #648**. Conversational deep-dive on building Amp; good for hearing a harness author reason out loud. https://changelog.com/podcast/648
- 💻 **anthropics/anthropic-cookbook — patterns/agents**. Runnable reference implementations of the patterns. https://github.com/anthropics/anthropic-cookbook/tree/main/patterns/agents

### Lecture 2 — Tool Use & the Agent-Computer Interface (ACI)
- ⭐ 📄 **Anthropic — "Writing Tools for Agents" (Engineering)**. Directly backs the "tool descriptions are prompts" thesis. https://www.anthropic.com/engineering/writing-tools-for-agents (search the title from the engineering blog index if moved: https://www.anthropic.com/engineering)
- ⭐ 📄 **SWE-agent paper — "Agent-Computer Interfaces Enable Automated Software Engineering"** (Yang et al., 2024). The origin of the ACI concept and the 100-line-file-viewer result. https://arxiv.org/abs/2405.15793 · project site: https://swe-agent.com
- 📄 **Anthropic tool-use docs** (re-read with Lecture-2 eyes): schema design, `tool_choice`, parallel tool use. https://docs.anthropic.com/en/docs/build-with-claude/tool-use

### Lecture 3 — Context Engineering
- ⭐ 📄 **Anthropic — "Effective Context Engineering for AI Agents"**. The discipline, from the source. https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents (via https://www.anthropic.com/engineering if moved)
- ⭐ 📄 **Manus — "Context Engineering for AI Agents: Lessons from Building Manus"**. The KV-cache-stability essay; this is where the "never bust the prefix" discipline is argued concretely. https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
- 📄 **Anthropic — Prompt caching docs**. The exact mechanics and pricing behind Lecture 3's economics. https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching
- 📄 **"Lost in the Middle"** (Liu et al.) — empirical evidence for "context rot": models attend worst to the middle of long contexts. https://arxiv.org/abs/2307.03172

### Lecture 4 — Execution Environment & Edit Formats
- ⭐ 📄 **Aider docs — "Edit formats"** and the **edit-format leaderboard**. The benchmarked case study behind search/replace-vs-diff-vs-whole-file. https://aider.chat/docs/more/edit-formats.html · https://aider.chat/docs/leaderboards/
- 📄 **Aider docs — "Repository map"**. How the tree-sitter + PageRank repo map works. https://aider.chat/docs/repomap.html
- 💻 **Aider source** — read `aider/coders/base_coder.py` and `aider/repomap.py`. https://github.com/Aider-AI/aider

---

## Week 2 — The Modern Landscape

### Lecture 6 — Claude Code: The Reference Design
- ⭐ 📄 **Claude Code documentation** — permissions/settings, hooks, sub-agents, skills, MCP. The primary source for everything in this lecture. Start: https://docs.anthropic.com/en/docs/claude-code/overview · Hooks: https://docs.anthropic.com/en/docs/claude-code/hooks · Settings/permissions: https://docs.anthropic.com/en/docs/claude-code/settings
- ⭐ 📄 **Anthropic — "Harness design for long-running application development" (Engineering, 2026)**. Anthropic's own framing of harness design — directly on-topic for this whole course. https://www.anthropic.com/engineering/harness-design-long-running-apps
- ▶ **"Mastering Claude Code" / Claude Code deep-dive talks** (Anthropic, YouTube). Search the Anthropic channel for the most recent Claude Code walkthrough — the feature set changes fast, so prefer the newest. https://www.youtube.com/@anthropic-ai

### Lecture 7 — Open-Source Teardowns
Read the actual source — that's the assignment.
- 💻 **OpenCode** — https://github.com/sst/opencode (find the loop, the tool defs, the system prompt)
- 💻 **OpenHands** (event stream + Docker runtime) — https://github.com/All-Hands-AI/OpenHands · docs: https://docs.all-hands.dev
- 💻 **SWE-agent / mini-SWE-agent** — https://github.com/SWE-agent/SWE-agent · the ~100-line version: https://github.com/SWE-agent/mini-swe-agent
- 💻 **Aider** — https://github.com/Aider-AI/aider
- 💻 **Cline** — https://github.com/cline/cline
- 📄 **awesome-cli-coding-agents** — a maintained directory to find any harness mentioned. https://github.com/bradAGI/awesome-cli-coding-agents

### Lecture 8 — MCP
- ⭐ 📄 **Model Context Protocol — official docs & spec**. The primary source; read "Introduction," "Architecture," and the spec. https://modelcontextprotocol.io · spec: https://modelcontextprotocol.io/specification/2025-11-25
- ⭐ 💻 **MCP SDKs + "Build a server" quickstart** — Python `mcp` / TS `@modelcontextprotocol/sdk`. This is your Project-2 toolkit. https://modelcontextprotocol.io/quickstart/server · https://github.com/modelcontextprotocol
- 📄 **Simon Willison — MCP security / "lethal trifecta and MCP"**. The critical view; pairs with Lecture 11. https://simonwillison.net/tags/model-context-protocol/

### Lecture 9 — Multi-Agent
- ⭐ 📄 **Anthropic — "How we built our multi-agent research system"**. The pro-multi-agent case, with the ~90%-better / ~15×-tokens numbers. https://www.anthropic.com/engineering/multi-agent-research-system
- ⭐ 📄 **Cognition — "Don't Build Multi-Agents"**. The counter-case for coding; "read-parallel, write-serial" comes from reconciling these two. https://cognition.ai/blog/dont-build-multi-agents
- 📄 **Anthropic — "Building Effective Agents"** (re-read the workflows section): most "multi-agent systems" should be workflows. https://www.anthropic.com/engineering/building-effective-agents

---

## Week 3 — Mastery

### Lecture 11 — Security
- ⭐ 📄 **Simon Willison — "The lethal trifecta for AI agents"** and his **annotated Lethal Trifecta talk**. The primary source for the entire lecture. https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/ · talk: https://simonwillison.net/2025/Aug/9/bay-area-ai/
- ⭐ 📄 **Simon Willison — prompt injection series** (start at the tag, read chronologically). The definitive ongoing record of the unsolved problem. https://simonwillison.net/tags/prompt-injection/
- 📄 **OWASP Top 10 for LLM Applications** — the industry checklist; LLM01 is prompt injection. https://genai.owasp.org
- 📄 **Codex CLI / OpenHands sandboxing docs** — read how each *actually* sandboxes, to ground the comparison table. (From each project's docs, linked in Lecture 7.)

### Lecture 12 — Evaluation
- ⭐ 📄 **Anthropic — "Demystifying Evals for AI Agents" (Engineering)**. Exactly this lecture, from the source. https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- ⭐ 📄 **SWE-bench — paper, site, and leaderboard**. The benchmark that proves "the harness is half the score." Paper: https://arxiv.org/abs/2310.06770 · site/leaderboard: https://www.swebench.com · Verified announcement: https://openai.com/index/introducing-swe-bench-verified/
- 📄 **Terminal-Bench** — the harness-heavy terminal benchmark. https://www.tbench.ai
- 📄 **GAIA** (general assistant benchmark) — https://arxiv.org/abs/2311.12983
- 💻 **mini-SWE-agent** — run it against SWE-bench yourself to see the model+harness coupling firsthand. https://github.com/SWE-agent/mini-swe-agent

### Lecture 13 — Long-Horizon Agents
- ⭐ 📄 **Anthropic — "Effective Context Engineering"** (re-read for compaction + note-taking) and **"Harness design for long-running apps"** (the memory/state-on-disk patterns). Links in L3/L6 above.
- 📄 **Manus context-engineering essay** (re-read for the "file system as context" idea). https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus
- 📄 **Claude Code memory & `--resume` docs** — the file-based-memory and session-persistence reference implementation. https://docs.anthropic.com/en/docs/claude-code/memory

### Lecture 14 — Production
- ⭐ 📄 **Claude Code headless / SDK docs** — `-p`/`--output-format json`, scripting agents into CI. https://docs.anthropic.com/en/docs/claude-code/sdk
- 📄 **Anthropic — "Building agents with the Claude Agent SDK"**. Productionizing the loop. https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk
- 📄 **Martin Fowler's site — "Harness engineering for coding agent users" (2026)**. The practitioner's view of operating these tools. https://martinfowler.com/articles/harness-engineering.html
- 📄 **awesome-harness-engineering** — a living list covering evals, memory, MCP, permissions, observability, orchestration. Your map for staying current after the course. https://github.com/ai-boost/awesome-harness-engineering

---

## Ongoing — How to stay current after the course

The products change monthly; these sources track the field so you don't have to guess:

- **Anthropic Engineering blog** — https://www.anthropic.com/engineering (the single best signal)
- **Simon Willison's blog** — https://simonwillison.net (daily, especially on security & new tools)
- **Latent Space** (podcast + newsletter) — https://www.latent.space (practitioner interviews, incl. the Karpathy Software 3.0 breakdown)
- **The Changelog / Practical AI** podcasts — harness authors interviewed
- **awesome-harness-engineering** and **awesome-cli-coding-agents** (linked above) — keep an eye on their commit history; new harnesses land there first

## A few full-length courses, if you want a parallel track
- **DeepLearning.AI short courses** (free) — "Functions, Tools and Agents," "Building Agentic RAG," MCP courses. https://www.deeplearning.ai/short-courses/
- **Hugging Face — Agents Course** (free, hands-on) — https://huggingface.co/learn/agents-course
- **Anthropic Academy / Skilljar** — official Claude/Claude Code training. https://www.anthropic.com/learn

---

### Honest note on completeness
The lectures teach the *concepts* end-to-end on their own. These resources do two things the notes can't: (1) give you the primary evidence so you can verify and go deeper, and (2) keep you current as the field moves. If you read every ⭐ in this file alongside the lectures and do the labs, you will have covered the material as thoroughly as anyone working in the field in 2026.
