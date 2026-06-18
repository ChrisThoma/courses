# Quiz 2: The Modern Landscape (Week 2)

Closed book. 30 minutes. 10 questions. Passing: 8/10.

---

**Q1.** Claude Code's plan mode vs. a system-prompt instruction "analyze only, don't edit yet": the categorical difference is:

- A) Plan mode is faster because it skips tool definitions
- B) Plan mode is *harness-enforced*: mutating tools are unavailable/blocked regardless of what the model decides; the prompt version is a request a confused or injected model can ignore
- C) Plan mode uses a different model
- D) There is no difference in practice

**Q2.** The principled rule for hooks vs. prompt instructions is:

- A) Hooks for performance, prompts for correctness
- B) Behavior that must hold 100% of the time belongs in deterministic code (hooks); prompts steer the probabilistic remainder
- C) Hooks are only for logging
- D) Prompts are deprecated in favor of hooks

**Q3.** Aider's repo map and pure agentic search (grep/read loops) trade off as:

- A) Map: precomputed, token-cheap, can be stale/lossy ↔ Search: turn-expensive, always fresh, self-correcting
- B) Map: requires an extra model ↔ Search: free
- C) Map: only works in Python ↔ Search: language-agnostic
- D) They are equivalent in cost and accuracy

**Q4.** OpenHands' event-stream architecture primarily buys:

- A) Lower latency per turn
- B) Replayability, auditability, and resumability: agent state is a pure function of an append-only event log
- C) Compatibility with more models
- D) Smaller context windows

**Q5.** mini-SWE-agent (~100 lines, bash-only) scoring >70% on SWE-bench Verified is best read as evidence that:

- A) The ACI thesis was wrong
- B) Tools other than bash are useless
- C) Newer models absorb harness complexity: interface scaffolding that was load-bearing in 2024 is partially obsolete, so harness features must continually justify themselves against the current model generation
- D) SWE-bench is saturated and meaningless

**Q6.** Five MCP servers with verbose tools are configured but rarely used. The primary *recurring* cost is:

- A) Server startup latency
- B) Their tool definitions ride in context on every API call, paying tokens and degrading tool-selection accuracy even on turns where they're never invoked
- C) License fees
- D) None; unused servers are free

**Q7. (short answer)** State the "read-parallel, write-serial" rule and the failure mode (per Cognition) it exists to prevent.

**Q8. (short answer)** Claude Code and Codex CLI made opposite default bets on execution safety. Name both bets and one concrete annoyance each inflicts on its users.

**Q9. (short answer)** Your parent agent dispatches a subagent: "look into the auth system." The report comes back generic and useless. Diagnose the root cause and rewrite the dispatch prompt (3–4 lines) correctly.

**Q10. (short answer)** Name the three MCP primitives and, for each, which party initiates its use.

---
---

## Answer Key

**Q1: B.**

**Q2: B.**

**Q3: A.**

**Q4: B.**

**Q5: C.** (It does *not* refute ACI; windowed viewers et al. demonstrably helped the models of their day, and the lesson is that the harness/model boundary moves every generation.)

**Q6: B.**

**Q7.** Fan out subagents for read-only work (exploration, research, review) where findings compress into reports; route all *mutations* through a single agent holding full context. Prevents: parallel writers with partial context making *conflicting implicit decisions* whose merge is incoherent; Cognition's core argument against multi-agent coding.

**Q8.** Claude Code: host-machine execution gated by per-action human approval + allowlists; annoyance: approval fatigue / interruption friction. Codex CLI: sandboxed (Docker-style) execution by default with network off; annoyance: environment friction (can't fetch deps, touch services outside the box) requiring explicit escalation.

**Q9.** Root cause: context isolation; the child sees *only* the dispatch prompt, so the parent's rich context doesn't transfer and a vague prompt yields a vague report. Better dispatch must include goal, scope, and success shape, e.g.: "In repo X, map how user authentication works: find where sessions are created/validated (start: src/auth/, middleware/). Return: entry-point files with line refs, the token lifecycle, and any spot where validation is skipped. I need this to plan a refresh-token change; flag anything that change would break."

**Q10.** **Tools:** invoked by the *model* during the loop. **Resources:** attached by the *host/application* (or user via UI) into context. **Prompts:** invoked by the *user* (slash-command-like templates).

### Scoring
8–10: proceed to Week 3. 6–7: redo Lab 7 with a third harness. <6: re-read Lectures 6–9; the capstone assumes this fluency.
