# Quiz 1 — Foundations (Week 1)

Closed book. 30 minutes. 10 questions: 6 multiple choice, 4 short answer.
Answer key at the bottom — no peeking until done. Passing: 8/10.

---

**Q1.** An LLM API response comes back with `stop_reason: "tool_use"`. What is the harness's contractual obligation before calling the API again?

- A) Append a summary of the tools the model wants to call
- B) Execute the requested tool(s) and append a `tool_result` for **every** `tool_use` block, each referencing its `tool_use_id`
- C) Ask the user to approve, and if denied, drop the tool_use block from history
- D) Re-send the same messages with higher max_tokens

**Q2.** Why are tool *descriptions* described as "the most underrated prompt surface"?

- A) They are cached separately at a discount
- B) They are the only field the model is fine-tuned on
- C) The model reads them every turn and uses them to decide when/how to call tools — they steer behavior exactly like prompt text
- D) They are invisible to the user, so you can hide instructions there

**Q3.** Your 40-turn agent session has a stable system prompt and append-only history. Turn 25 includes a tool result. On turn 26, roughly what fraction of the input tokens are billed at the cached rate?

- A) None — caching only applies to the system prompt
- B) Almost all of them — everything except the newly appended content
- C) Half — caching covers alternating turns
- D) All of them, including new content

**Q4.** SWE-agent's "Agent-Computer Interface" research found that replacing `cat` with a 100-line windowed file viewer improved task success. The *general* principle this illustrates is:

- A) Models have small context windows
- B) Shell tools are deprecated for agents
- C) Agent failures are often interface failures — output shaped for the model's consumption (windowed, addressable, truncated) beats raw human-tool output
- D) File reading should always be paginated for cost reasons

**Q5.** Search/replace edit blocks are the dominant 2026 edit format primarily because:

- A) They produce the smallest diffs
- B) Their failure mode is loud and safe: a stale or hallucinated SEARCH text fails to match instead of silently corrupting the file
- C) Models cannot generate unified diffs at all
- D) They don't require reading the file first

**Q6.** Which change busts the prompt cache for the remainder of a session?

- A) Appending a new user message
- B) Appending a tool result
- C) Editing the system prompt to update a "current time" field each turn
- D) The model emitting a longer response than usual

**Q7. (short answer)** "Tool results are just user messages." State the security consequence of this fact in one or two sentences.

**Q8. (short answer)** Your agent ran `npm test`, which failed with a stack trace. Describe what the harness should do with that failure and why this behavior is central to why agents work at all.

**Q9. (short answer)** Name the four foundational layers of a harness covered this week, and for each, name one concrete design decision a harness author must make.

**Q10. (short answer)** Two teams run the *same model* on SWE-bench. Team A scores 38%, Team B scores 62%. Give three specific harness differences that could plausibly account for the gap.

---
---

## Answer Key

**Q1 — B.** Every `tool_use` block must get a matching `tool_result` (by `tool_use_id`) in the next user message, even if execution failed or was denied (a denial is itself a result). (C is half-right about approval but you never silently drop the block — the API requires result pairing.)

**Q2 — C.**

**Q3 — B.** Stable prefix + append-only history = the entire prior conversation is a cache hit; only newly appended tokens are billed fresh.

**Q4 — C.**

**Q5 — B.** The exact-match requirement doubles as a consistency check on the model's belief about file state.

**Q6 — C.** A/B are appends (cache-friendly). C mutates an early byte of the prefix, invalidating everything after it, every turn.

**Q7.** The model has no privileged channel telling it which text is trusted; instructions embedded in tool output (a fetched webpage, a file, an error message) look the same as user intent. This is the root mechanism of prompt injection — anything that flows into a tool result is a potential instruction channel.

**Q8.** Feed the stack trace back as a `tool_result` (truncated sanely if huge) and let the loop continue. The error-as-observation cycle — act, observe failure, adapt — is the core mechanism that lets agents complete multi-step work; a harness that crashes or hides errors removes the model's ability to self-correct.

**Q9.** (1) **The agent loop** — e.g., parallel tool execution, max-turn guards, stop-reason handling. (2) **The tool surface / ACI** — e.g., which tools exist, description quality, truncation policy. (3) **Context management** — e.g., cache-stable layout, compaction trigger, what lives in system prompt vs. files. (4) **The execution environment** — e.g., host vs. sandbox, persistent shell state, edit format. (Any reasonable per-layer decision earns the point.)

**Q10.** Any three of: better ACI (windowed file viewer, lint-feedback edit tool); edit format with loud failures vs. silent corruption; tool-result truncation that preserves the informative parts of test output; context/compaction policy that lets long tasks finish; system-prompt steering (test-running discipline, "keep going until tests pass"); retry/error-handling in the loop; repo-orientation tooling (map/search). Grade generously if specific, harshly if vague ("better prompts").

### Scoring
8–10: proceed. 6–7: reread the flagged lectures, retake in 24h. <6: redo Labs 1–3 before Week 2 — Week 2 assumes this material cold.
