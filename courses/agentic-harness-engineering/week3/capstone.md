# Capstone — "prodharness": A Production-Grade Coding Harness

**Due:** end of Week 3 · **Weight:** 30% · **Rubric dimensions:** D1, D3, D6, D7, D8 (your Master evidence)

Take tinyharness from Project 1 and turn it into something another developer would actually trust to run. This is the integrative project: every Week-3 lecture contributes a component, and your Lab-12 eval suite is the judge.

---

## What you're building

A coding agent harness that runs both **interactively** and **headless**, with the five production pillars wired in and *demonstrated*, not just present. You may build on tinyharness or any open harness you forked in Week 2 — but you must have written the five pillars yourself.

## Required components

### 1. Permission & safety layer (D6)
- A permission gate on mutating/dangerous tools (`bash`, `edit_file`, `write_file`, network) with: a declarative allowlist (config file), per-action approval in interactive mode, and a policy for headless mode (auto-deny-and-report, or a pre-approved allowlist — your choice, documented).
- **At least one trifecta leg cut structurally** — e.g., a network-egress allowlist in the `bash`/fetch tool. Carry over and harden your Lab-11 defense.
- Confirmation (or refusal) on the irreversible class: force-push, `rm -rf`, destructive SQL, secret-file reads.

### 2. Context management (D3)
- Compaction at a configurable window threshold that provably preserves goal + decisions + state + recent-N verbatim (your Lab-13 work). Print before/after token counts on every compaction.
- A `.notes`/scratchpad file the agent writes progress to and re-reads — on-disk state, not just chat history.

### 3. Memory & persistence (D3)
- Session persistence (`--resume`) and a cross-session memory file the agent reads at start and appends durable facts to.

### 4. Headless / observability (D1, production)
- `--headless "<task>"` mode: no TTY, JSON-structured result on stdout, meaningful exit code.
- Structured logging of every tool call (name, input, result-status), per-run token + dollar totals, wall time. Hooks-style or inline — your call.
- Retry-with-backoff on API errors; turn + time + cost ceilings with a clean "budget exhausted" stop.

### 5. Evaluation (D7)
- Your 10-task eval suite from Lab 12, expanded to **15 tasks**, each with a programmatic verifier.
- A scoreboard the runner emits: pass@1, cost-per-solve, turns-to-solve per task.
- **Demonstrated regression discipline:** a `BEFORE_AFTER.md` showing the eval scoreboard at two points in the capstone's development, with a one-line note on what changed between them and how the numbers moved. (Even one real iteration of the "never make that mistake again" loop counts.)

## Deliverables

```
prodharness/
├── prodharness.py (or src/)   # the harness
├── config/
│   ├── permissions.yaml        # allowlist + egress rules
│   └── settings.*              # thresholds, budgets, model routing
├── evals/
│   ├── tasks/                  # 15 task dirs: prompt + fixture + verifier
│   └── runner.py               # clean env per task, emits scoreboard
├── README.md                   # run it (both modes); architecture; the
│                               #   trade-off decisions you made and why
├── SECURITY.md                 # threat model: enumerate trifecta exposure
│                               #   for YOUR harness + the mitigations + the
│                               #   residual risk you knowingly accept
├── BEFORE_AFTER.md             # eval scoreboard across one real iteration
└── DEMO.md                     # 3 annotated transcripts (below)
```

### The three demo transcripts (DEMO.md)
1. **Long task that triggers compaction** — show the goal surviving (quote the post-compaction context).
2. **The security demo** — your Lab-11 attack re-run against prodharness, now *failing*, with the blocked action in the log.
3. **A headless run** — the JSON output, exit code, and the structured log it produced.

## Grading rubric

| Criterion | Weight | Maps to |
|---|---|---|
| All five pillars present *and demonstrated* (not just coded) | 30% | D8 |
| Eval suite: 15 real tasks, programmatic verifiers, ≥70% pass@1, scoreboard with cost | 20% | D7 |
| Security: structural trifecta mitigation works (demo 2) + honest threat model | 20% | D6 |
| Compaction preserves goal + on-disk state pattern (demo 1) | 12% | D3 |
| Headless mode + observability are genuinely scriptable (demo 3) | 10% | D1 |
| README/SECURITY quality: trade-offs defended, residual risk named | 8% | D8 |

**Master bar (the thing to aim for):** a developer could adopt prodharness from the README alone; the code shows deliberate, defensible trade-offs; and `BEFORE_AFTER.md` shows you actually closed an eval-detected failure. If you also publish the MCP server from Project 2, contribute a PR upstream, or wire your MCP server into prodharness, you've cleared Master on D5 and D8 both.

## A closing note

The capstone is deliberately not "add more tools." Every component here exists because a real agent *failed without it* — drifted after compaction, leaked a secret, burned $40 on one task, passed a demo then broke in CI. Building these is the difference between someone who can make an agent *go* and someone who can make an agent *trustworthy*. That second person is what this course was for.
