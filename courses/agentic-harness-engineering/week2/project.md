# Week 2 Deliverables — Project 2 (MCP Server) + Midterm (Comparative Teardown)

---

## Project 2 — Build and Ship an MCP Server

**Due:** Day 8 evening · **Rubric dimension:** D5

Build an MCP server exposing a real capability you actually want in your harness. Good candidates: your notes system, a project-tracker API, a database you own, your RSS reader, a home-automation endpoint. Bad candidates: weather (toy), anything you'd never use twice.

### Requirements

1. **Three or more tools** with Lecture-2-quality descriptions (graded as ACI, not just plumbing). At least one tool that *writes/mutates* something — you'll need it for the Week 3 security lab.
2. **One resource** (e.g., a status/config document the host can attach).
3. **One prompt** template.
4. **stdio transport** working end-to-end in **two different hosts** (e.g., Claude Code via `claude mcp add`, and OpenCode or Cline) — experiencing the M+N payoff firsthand is the point.
5. **Raw-protocol proof:** a transcript where you speak JSON-RPC to your server by hand (pipe to its stdin): `initialize` → `tools/list` → `tools/call`. No SDK on the client side. This is what separates "used the SDK" from "understands the protocol."
6. **Token audit:** measure the context cost of your server's tool definitions (count tokens of the definitions block). State it in the README next to a sentence justifying that this capability earns its tax over a plain CLI + bash. If you can't justify it — say so; honest negative results score full marks.

Use the official MCP SDK (Python `mcp` / TypeScript `@modelcontextprotocol/sdk`) for the server itself.

### Deliverables
```
mcp-project/
├── server/           # the code
├── README.md         # setup for both hosts; token audit; CLI-vs-MCP justification
└── PROTOCOL.md       # the hand-spoken JSON-RPC transcript, annotated
```

---

## Midterm — Comparative Harness Teardown

**Due:** Day 10 · **Weight:** counts with Project 2 as 20% · **Rubric dimension:** D4 (this is your Proficient/Master evidence)

A 1,500–2,500-word engineering paper. Pick **three** harnesses: Claude Code (required, since you've instrumented it), plus two of {OpenCode, Aider, OpenHands, SWE-agent/mini-SWE-agent, Cline, Pi, Codex CLI}. At least one must be one you read source for in Lab 7.

### Part A — The same task, three ways (empirical core)

Run an *identical* nontrivial task in all three (suggested: "find and fix the failing test in this repo and explain the root cause" on a repo you've sabotaged identically three times — fresh clone each run).

Capture for each: the full tool-call sequence, turn count, token/cost where visible, wall time, and outcome. Present a comparison table, then the interesting part: **attribute every behavioral difference to a specific harness design choice** from the Week 1–2 vocabulary (ACI shape, edit format, truncation policy, permission friction, system-prompt steering, orientation strategy). "Harness X was smarter" is an automatic fail; "X found the test first because its grep tool returns match counts, prompting pattern-narrowing, where Y's returned 400 raw lines that consumed its window" is the standard.

### Part B — Four-layer anatomy table

For each harness, one row per Week-1 layer (loop / ACI / context / environment) citing source files+lines or observed behavior (hooks logs count as evidence for Claude Code).

### Part C — Position (this is where Master-level D4 is earned)

Argue one thesis, ~500 words, with your Part A/B evidence plus the readings:

- "Most harness complexity shipped in 2026 will be obsolete by 2028" — attack or defend (mini-SWE-agent is your exhibit either way), **or**
- "Sandbox-default will win over permission-gated host execution" — attack or defend, **or**
- A thesis of your own, approved by… you. (Self-paced course. Be honest about rigor.)

### Grading

| Criterion | Weight |
|---|---|
| Empirical rigor (identical task, controlled, artifacts captured) | 30% |
| Attribution quality (behavior → named design choice, every time) | 35% |
| Anatomy table accuracy (citations check out) | 20% |
| Position: falsifiable thesis, evidence actually used | 15% |
