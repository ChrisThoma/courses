# Mastery Rubric: Agentic Harness Engineering

Self-assess against this at the end of each week. Four levels per dimension:
**Novice → Competent → Proficient → Master**

**Passing the course:** Proficient+ on all eight dimensions.
**Mastery:** Master on at least three, including at least one of D1/D3/D8 (the build dimensions).

---

## D1: Agent Loop Mechanics

| Level | You can… |
|---|---|
| Novice | Describe the loop verbally: model call → tool calls → tool results → repeat until no tool calls |
| Competent | Implement the loop against a raw LLM API, handling multiple tool calls per turn and stop reasons |
| Proficient | Handle the full surface: parallel tool execution, streaming, error results fed back as observations, max-turn guards, cancellation, retry/backoff on API errors |
| Master | Reason about loop *design trade-offs*: single-loop vs. event-stream architectures (OpenHands), turn-based vs. interruptible loops, where to inject hooks/checkpoints, and you've shipped a loop others can build on |

## D2: Tool Design & the Agent-Computer Interface (ACI)

| Level | You can… |
|---|---|
| Novice | Write a valid JSON-schema tool definition |
| Competent | Explain why tool descriptions are prompts (the model reads them), and write descriptions that reduce misuse |
| Proficient | Apply ACI principles: few high-leverage tools over many narrow ones, output formatting tuned for the model (line numbers, truncation, "N more results" hints), errors that teach (actionable messages), idempotency-aware design |
| Master | Diagnose agent failures back to ACI flaws and fix them; e.g., you can explain why `edit_file` with exact-string-match beats line-number edits, why SWE-agent's 100-line file viewer beat `cat`, and design novel tools that measurably improve task success |

## D3: Context Engineering

| Level | You can… |
|---|---|
| Novice | Know the context window is finite and the system prompt steers behavior |
| Competent | Explain prompt caching (prefix-stability rule: stable system prompt + append-only history = cache hits) and price the difference |
| Proficient | Implement compaction (summarize-and-restart), manage tool-result truncation, keep KV-cache-friendly message layouts, and budget tokens across a long task |
| Master | Design full context architectures: what lives in the system prompt vs. files-on-disk vs. memory vs. retrieved-on-demand; sub-agent context isolation; note-taking/scratchpad patterns for cross-session state (à la Confucius CCA persistent notes) |

## D4: Harness Landscape Literacy

| Level | You can… |
|---|---|
| Novice | Name 5 modern harnesses |
| Competent | Place each major harness on the map: terminal vs. IDE vs. cloud, open vs. closed, model-locked vs. provider-agnostic |
| Proficient | Explain each one's *signature design idea*: Claude Code (permissions/hooks/skills/subagents), Aider (repo map + edit formats), OpenHands (event stream + Docker runtime), SWE-agent (config-driven ACI), OpenCode (client/server split, provider-agnostic), Codex CLI (sandbox-first), Cline (plan/act modes) |
| Master | Given a new harness, predict its architecture from its constraints before reading the source, and be right; articulate where the field is converging (MCP, hooks, sandboxes) vs. still diverging (multi-agent, memory) |

## D5: MCP & Extensibility

| Level | You can… |
|---|---|
| Novice | Know MCP exists and connects agents to external tools |
| Competent | Explain the host/client/server architecture and the three primitives (tools, resources, prompts); configure an existing MCP server into a harness |
| Proficient | Build and ship a working MCP server (stdio + HTTP transports), and use harness-native extension points: hooks, slash commands/skills, CLAUDE.md-style steering files |
| Master | Choose correctly between extension mechanisms (MCP server vs. CLI-tool-plus-bash vs. hook vs. skill) per use case, and articulate MCP's costs (token overhead per tool definition, security surface) as well as benefits |

## D6: Safety, Permissions & Sandboxing

| Level | You can… |
|---|---|
| Novice | Know agents can run dangerous commands and need guardrails |
| Competent | Explain prompt injection and why it's unsolved; describe the "lethal trifecta" (private data + untrusted content + exfiltration channel) |
| Proficient | Compare real permission models (Claude Code per-action approval & allowlists, Codex Docker-default sandbox, OpenHands isolated runtime, trusted-folder models) and implement a basic permission gate in your own harness |
| Master | Threat-model a harness end-to-end: enumerate injection vectors (tool results, fetched web content, repo files), design layered mitigations (sandboxing, network egress rules, human-in-the-loop on irreversible actions), and demonstrate a working attack + defense on your own agent |

## D7: Evaluation & Benchmarking

| Level | You can… |
|---|---|
| Novice | Name SWE-bench |
| Competent | Explain how SWE-bench Verified, Terminal-Bench, GAIA, and OSWorld differ, and what "the harness is half the score" means (same model, different harness → wildly different results) |
| Proficient | Build a task-based eval for your own agent: task definitions, automated verification (tests/assertions, not vibes), pass@k, cost-per-solve tracking |
| Master | Design evals that resist overfitting and measure what matters (held-out tasks, contamination awareness, partial-credit rubrics, LLM-judge calibration), and use eval results to drive harness iterations: the "agent never makes that mistake again" loop |

## D8: Building & Shipping (Capstone Quality)

| Level | You can… |
|---|---|
| Novice | Run someone else's agent |
| Competent | Your Week-1 minimal harness works on real tasks in a real repo |
| Proficient | Your capstone has the production pillars: permission gating, compaction, session persistence, error recovery, and passes your own 10-task eval suite ≥70% |
| Master | Another developer could adopt your capstone from its README alone; the code shows deliberate trade-off decisions you can defend; you've extended or contributed to a real harness ecosystem (MCP server published, plugin, or upstream PR) |

---

## Self-Assessment Protocol

At each Friday checkpoint, for every dimension write **2–3 sentences of evidence** ("I claim Proficient on D3 because I implemented compaction in `harness/compact.py` that triggers at 80% window and my agent completed a 200-turn task"). No evidence, no level. Claims must point at artifacts: code, quiz scores, writeups.

| Checkpoint | Expected floor |
|---|---|
| End of Week 1 | Competent on D1–D3, Novice+ elsewhere |
| End of Week 2 | Proficient on D1–D2, D4–D5 |
| End of Week 3 | Proficient on all; Master on ≥3 |
