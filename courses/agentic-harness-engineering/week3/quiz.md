# Final Exam — Comprehensive (Week 3)

Closed book except the design question (Part C). ~60 minutes.
Part A: 8 MC · Part B: 5 short answer · Part C: 1 design question. Passing: 80%.

---

## Part A — Multiple Choice (across all 3 weeks)

**A1.** The single fact that makes prompt injection possible is:
- A) Models have limited context
- B) Tool results enter context as ordinary messages with no trusted/untrusted distinction the model can rely on
- C) MCP servers run arbitrary code
- D) Bash has no sandbox

**A2.** The "lethal trifecta" is:
- A) Hallucination + cost + latency
- B) Private-data access + untrusted-content exposure + an exfiltration channel
- C) Bad prompts + bad tools + bad model
- D) Network + filesystem + shell access

**A3.** Every SWE-bench score should be read as a property of:
- A) The model alone
- B) The model *and* the harness together
- C) The benchmark version only
- D) The hardware

**A4.** Compaction deliberately incurs which one-time cost to gain a cheaper steady state?
- A) A model downgrade
- B) Busting the prompt cache by rewriting the prefix
- C) Losing all memory
- D) A full re-clone of the repo

**A5.** For an agent that already has file tools, file-based memory usually beats vector memory because:
- A) Vectors are inaccurate
- B) It reuses existing tools, is human-inspectable/editable, and avoids embedding-staleness and extra infra
- C) Embeddings are illegal
- D) Files are faster than any database always

**A6.** "Read-parallel, write-serial" means:
- A) Read files in parallel, write them one at a time to disk
- B) Fan out read-only subagents freely; route all mutations through a single full-context agent
- C) Reads before writes in every turn
- D) Parallelize reads, never write

**A7.** A programmatic verifier beats eyeballing eval outputs because eyeballing systematically hides:
- A) Latency
- B) Plausible-but-wrong outputs (and lets confirmation bias pass regressions)
- C) Token cost
- D) Tool-call counts

**A8.** Cost-per-completed-task can favor a *more expensive* model because:
- A) Token prices fluctuate
- B) It may finish in fewer turns, and fewer turns × cached context can total less than many turns of a cheap model
- C) Expensive models never fail
- D) Caching only works on expensive models

---

## Part B — Short Answer

**B1.** Give the four foundational layers of a harness and one production-grade concern each (the kind a demo skips but a shipped agent can't).

**B2.** A harness instruction says "always run the linter after editing." Why is this strictly more reliable as a `PostToolUse` hook than as a system-prompt line? Use the word "probabilistic."

**B3.** You changed your harness's truncation policy and pass@1 on your 10-task eval went 6→7, but cost-per-solve doubled. Is this an improvement? What do you check before deciding?

**B4.** Name the three trifecta legs and, for each, one concrete harness mechanism that cuts it. Why is "defense in depth" the right framing rather than picking the single best one?

**B5.** Explain why mini-SWE-agent (~100 lines, bash-only, >70% on SWE-bench Verified) is *not* a refutation of the Agent-Computer-Interface thesis. What is the actual lesson about the model/harness boundary?

---

## Part C — Design Question (open book, ~25 min, ~500 words)

You're tasked with building a **headless coding agent that runs in CI**: triggered by a new GitHub issue labeled `auto-fix`, it attempts a patch, opens a PR, and runs unattended with no human in the loop. The repo is private and contains secrets in environment config. Issues can be filed by *anyone* (it's an open-source project).

Design the harness. Your answer must address, using course vocabulary:

1. **The loop & limits** — turn/time/cost ceilings, retry policy, what "give up cleanly" looks like.
2. **Tool surface** — which tools, scoped how; what you deliberately *don't* expose.
3. **Security** — this is the heart. Identify the lethal-trifecta exposure precisely (note: attacker-controlled issue text + private repo + the ability to open PRs / make network calls), and design the mitigations. Which leg(s) do you cut and how? What's irreversible and how is it gated without a human?
4. **Context** — how a possibly-long autonomous run manages its window (compaction/memory) without drifting from the goal.
5. **Evaluation** — how you'd gain confidence to enable this on a real repo, and how you'd catch a regression after a harness change.
6. **Observability** — what you log so that when it does something wrong at 3am, you can reconstruct exactly what happened.

Grading favors *specific, mechanism-level* answers tied to named course concepts over generic "be careful" advice. A strong answer explicitly notes where it accepts residual risk and why.

---
---

## Answer Key

**Part A:** A1-B · A2-B · A3-B · A4-B · A5-B · A6-B · A7-B · A8-B

**B1.** Loop (retry/backoff, turn+time+cost ceilings, idempotency on replay) · ACI/tools (truncation that survives no-human-reading, errors that teach) · Context (compaction + on-disk state so long runs don't drift or overflow) · Environment (sandboxing/egress control, since no human gates actions). Any sensible production concern per layer scores.

**B2.** A system-prompt instruction is a *probabilistic* request — the model may forget, be distracted by a long context, or be overridden by injected content; it holds most of the time, not all. A `PostToolUse` hook is deterministic code the harness runs after every matching tool call, 100% of the time, independent of the model's state. Invariants belong in code; steering belongs in prompts.

**B3.** Not obviously — you've traded money for a marginal, possibly-noise score gain (Δ of one task out of ten is within variance; check pass@k / run multiple seeds). Before deciding: confirm the gain is real (more samples, not n=1), check *which* task flipped and whether it generalizes or you overfit, and weigh the doubled cost-per-solve against your budget. A one-task lift at 2× cost is usually a *regression* in production terms.

**B4.** Private-data access → least-privilege tool scoping / read-only subagents. Untrusted content → don't auto-fetch arbitrary URLs, taint/segregate untrusted inputs. Exfiltration → network-egress allowlist / sandbox network-off / human gate on irreversible network actions. Defense-in-depth because no single leg-cut is reliable (humans get fatigued, allowlists have holes, scoping has gaps); breaking two independent legs means one failure isn't a breach.

**B5.** The ACI tools (windowed viewer, lint-feedback edits) *did* help the models they were built for — that's measured, not refuted. The lesson is that the model/harness boundary *moves every generation*: capability the harness used to supply gets absorbed into the model, so scaffolding must continually re-justify itself against the current model. mini-SWE-agent shows 2026 models need *less* interface crutching than 2024 models — not that interface never mattered.

**Part C:** Graded against the six required elements. Strong-answer markers: cuts exfiltration *structurally* (egress allowlist + no auto-URL-fetch) rather than relying on a (absent) human gate; scopes the agent so issue text can't reach secrets (env config not in context / not readable by the agent's tools); treats PR-open as the gated irreversible step (open as draft, require CI+review before merge — the human re-enters at *review*, not mid-run); compaction preserves the issue goal + patch state; eval = shadow-run on closed historical issues with the real test suites as verifiers before enabling; observability = structured per-run trace of every tool call + tokens + cost via hooks. Auto-fail markers: "trust the model to not be fooled," no trifecta analysis, exposing unrestricted bash+network to attacker-influenced input with only a prompt as defense.

### Scoring
≥80% with a Part-C answer that genuinely engages the trifecta: you've passed. Combine with your rubric self-assessment for the final mastery call.
