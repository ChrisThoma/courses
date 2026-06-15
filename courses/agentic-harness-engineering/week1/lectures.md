# Week 1 Lectures — Foundations: Anatomy of a Harness

> **Companion resources:** each lecture below has matched videos/papers/blogs in `../RESOURCES.md`. New to LLMs? Do **Week 0** in that file first. The ⭐ items there are worth doing *before* each lecture.

---

# Lecture 1 — What Is a Harness? The Agent Loop

## 1.1 The central claim of this course

A modern LLM API does exactly one thing: given a list of messages and a list of tool definitions, it returns either **text** or **a request to call tools**. That's it. It cannot read files, run commands, or remember yesterday. Everything else — everything that makes Claude Code feel like a colleague rather than a chatbot — is the **harness**:

```
┌─────────────────────────── HARNESS ───────────────────────────┐
│  System prompt      Tool definitions       Permission gate    │
│  ┌──────────────────────── AGENT LOOP ─────────────────────┐  │
│  │   messages ──► LLM API ──► tool_use? ──► execute tools  │  │
│  │      ▲                        │ no            │          │  │
│  │      └────── tool results ◄───┼───────────────┘          │  │
│  │                               ▼                          │  │
│  │                         final answer                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│  Context mgmt (compaction/caching)   Environment (shell, fs)  │
│  Memory/state          Hooks          Telemetry/evals         │
└────────────────────────────────────────────────────────────────┘
```

In 2026 the industry consensus is explicit: across Claude Code, Codex CLI, OpenCode, Cline, and the rest, *the loop is the same; the harness is the product*. Same model, different harness → dramatically different capability. This is measurable: SWE-bench scores for an identical model vary by tens of percentage points depending on scaffold.

## 1.2 A short history, so the design choices make sense

- **2022 — ReAct** (Yao et al.): interleave *reasoning* ("Thought: I should search…") with *actions* (tool call) and *observations* (result) in one text loop. Tool calls were parsed out of free text with regex. Fragile, but the loop shape was born — and it's still the dominant shape today.
- **2023 — native function calling**: OpenAI then Anthropic moved tool calls into the API as structured JSON. No more regex parsing; the model is trained to emit `tool_use` blocks.
- **2024 — agentic coding**: SWE-agent showed the *interface* mattered as much as the model (ACI — Lecture 2). Aider, Devin, OpenHands made "agent edits your repo" real.
- **2025 — the harness era**: Claude Code, Codex CLI, Gemini CLI, OpenCode, Cline. MCP standardized tool extensibility. Models trained *specifically* to be good in harnesses (long-horizon RL on agentic tasks).
- **2026 — harness engineering as a discipline**: the term shows up in job titles. Google retires Gemini CLI for Antigravity CLI; OpenCode passes 150k stars; the Confucius Code Agent paper (Meta/Harvard) formalizes harness design around AX (agent experience), UX, and DX.

## 1.3 The loop, in real code

This is the entire core of every harness you'll study. Internalize it:

```python
import anthropic

client = anthropic.Anthropic()
messages = [{"role": "user", "content": "What's in main.py? Summarize it."}]

while True:
    response = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=8096,
        system=SYSTEM_PROMPT,          # the harness's personality + rules
        tools=TOOLS,                   # JSON-schema tool definitions
        messages=messages,
    )
    # Append the assistant turn verbatim (preserves cache prefix — Lecture 3)
    messages.append({"role": "assistant", "content": response.content})

    if response.stop_reason != "tool_use":
        break                          # model produced a final answer

    # Execute every requested tool; return results in ONE user turn
    results = []
    for block in response.content:
        if block.type == "tool_use":
            output = execute_tool(block.name, block.input)   # the harness's job
            results.append({
                "type": "tool_result",
                "tool_use_id": block.id,
                "content": output,
            })
    messages.append({"role": "user", "content": results})
```

Five facts to memorize:

1. **The model never executes anything.** It *asks*; the harness executes. Every security property of an agent lives in `execute_tool`.
2. **Tool results are just user messages.** The model can't distinguish a tool result from user input except by structure — this is why prompt injection via tool results works (Lecture 11).
3. **One response may request many tools.** Handle them all, return all results together.
4. **Errors are observations.** A failed command isn't an exception to crash on — stderr goes back as a tool result and the model adapts. This error-feedback loop is *the* reason agents feel smart.
5. **`stop_reason` drives everything.** `tool_use` → keep looping; `end_turn` → done; `max_tokens` → you have a decision to make (continue? truncate?).

## 1.4 Harness taxonomy (the map you'll fill in during Week 2)

| Axis | Poles | Examples |
|---|---|---|
| Surface | Terminal ↔ IDE ↔ Web/cloud | Claude Code, Codex CLI ↔ Cursor, Cline ↔ Devin, Codex cloud |
| Model coupling | Locked ↔ agnostic | Claude Code ↔ OpenCode, Aider |
| Autonomy | Pair-programmer ↔ fire-and-forget | Aider ↔ OpenHands, CI agents |
| Openness | Open source ↔ proprietary | OpenCode, OpenHands ↔ Devin, Cursor |
| Execution | Host shell ↔ sandboxed | Claude Code (permission-gated host) ↔ Codex CLI (Docker default) |

## Section questions (write your answers)

1. Why is "tool results are just user messages" a security-critical fact and not a trivia point?
2. ReAct parsed actions from free text; native tool calling uses structured output. Name two failure modes the structured approach eliminates and one flexibility it gives up.
3. A teammate says "GPT-5.5 beat Opus on SWE-bench, so it's the better coding model." Give the harness-engineer's rebuttal.

## Lab 1

Write a script that calls the Anthropic API with one tool (`get_weather`, faked) and **manually** walk one full loop iteration: print the raw `tool_use` block, hand-construct the `tool_result` message, send it back. No loop abstraction — feel the wire format. Then read Thorsten Ball's *How to Build an Agent* (ampcode.com).

---

# Lecture 2 — Tool Use & the Agent-Computer Interface (ACI)

## 2.1 Tool definitions are prompts

A tool definition has three parts — name, description, JSON-schema input — and the model reads *all of it, every turn*. The description field is the most underrated prompt surface in agent engineering. Compare:

```json
{"name": "search", "description": "Searches files."}
```

```json
{
  "name": "grep_repo",
  "description": "Search file contents in the repository with a regex. Returns at most 50 matching lines as `path:line: text`. Use this to FIND code; use read_file to view full context around a match. Prefer specific patterns — `def process_` over `process` — to avoid truncated results.",
  "input_schema": {
    "type": "object",
    "properties": {
      "pattern": {"type": "string", "description": "Rust-style regex, e.g. 'fn \\w+_handler'"},
      "glob": {"type": "string", "description": "Optional file filter, e.g. '*.py'"}
    },
    "required": ["pattern"]
  }
}
```

The second tells the model *when* to use it, *what comes back*, *how it relates to other tools*, and *how to avoid a bad call*. Anthropic's *Writing Tools for Agents* essay is tonight's required reading; its core advice: write the description as if onboarding a new hire who will never see the implementation.

## 2.2 The ACI thesis (SWE-agent, 2024)

SWE-agent's key result: agents fail not because models are dumb but because the **interface** is hostile. Humans tolerate bad interfaces by improvising; models don't. Their fixes, now standard everywhere:

- **A file viewer that shows 100 lines with line numbers**, not `cat` (full files blow context; no numbers means no addressing).
- **Edit commands with built-in lint feedback** — if an edit produced a syntax error, say so *immediately* in the tool result, so the model fixes it while the intent is fresh.
- **Guardrails in the tools themselves**: e.g., search that refuses to dump 5,000 results and instead says "873 matches — narrow your pattern."
- **Compact, consistent output formats.** Every token of tool output competes with reasoning for context.

> **Design principle:** when an agent misbehaves, your first suspect is the tool surface, not the model. "Engineer it so the agent never makes that mistake again."

## 2.3 The core toolset of every coding harness

Strip any 2026 coding harness to its skeleton and you find a near-identical kit:

| Tool | Design questions it hides |
|---|---|
| `bash` / `shell` | Persistent session or per-call? Timeout? Output truncation (head/tail of huge output)? Background processes? |
| `read_file` | Whole file or windowed? Line numbers? Binary/image handling? |
| `edit_file` | **The deepest design problem in coding agents** — see Lecture 4 |
| `write_file` | Overwrite protection? Require prior read? |
| `grep` / `glob` | Why dedicated tools when bash has grep? (Answer: structured truncation, permission granularity, no shell-quoting failures) |
| `web_fetch` / `web_search` | The #1 prompt-injection vector (Lecture 11) |

A real tension to internalize: **bash is the universal escape hatch** (anything is possible) but the *worst* ACI (unstructured output, quoting hell, ungated side effects). Harness design is substantially the art of pulling high-frequency operations *out* of bash into purpose-built tools; note how this very harness's instructions tell the model to prefer dedicated file tools over `cat`/`sed`.

## 2.4 Tool-count economics

Every tool definition costs tokens on *every* API call, and beyond ~20–30 tools, selection accuracy degrades. Hence: few, composable, high-leverage tools beat many narrow ones. This is also the standard critique of naive MCP usage — installing five MCP servers can silently add 10k tokens of tool definitions per turn (Lecture 8).

## Section questions

1. Rewrite this real-world-bad description into a good one: `{"name": "db", "description": "Runs database stuff."}` — invent reasonable semantics.
2. Why does an edit tool that returns "edit applied, but file now fails `python -m py_compile`: line 84 unexpected indent" outperform one that just says "OK"? Tie it to the loop from Lecture 1.
3. Your agent keeps calling `read_file` on 8,000-line files and drowning. List three ACI-level fixes, no model change allowed.

## Lab 2

Take your Lab-1 script. Add `read_file` and `list_files` with deliberately terrible descriptions ("reads a file", "lists files") and no truncation. Give it a task in a real repo; log every tool call. Then fix the ACI (descriptions, line numbers, truncation, result counts) and rerun. Write down the behavioral diff — this is your first taste of harness iteration.

---

# Lecture 3 — Context Engineering I: Prompts, Caching, Window Economics

## 3.1 The context window is the agent's RAM

Everything the model knows about your task fits in one window (200k–1M+ tokens in 2026 frontier models, but effective attention degrades well before the limit). Per-turn, context contains: system prompt + tool definitions + the entire message history including every tool result. A 50-turn agentic session can easily be 100k+ tokens, and **you re-send all of it every turn**. Naively, the cost of a session is quadratic in its length.

## 3.2 Prompt caching: the economics that shape harness design

Providers cache the KV-state of a *prefix* of your request. A cache hit costs ~10% of a fresh token (Anthropic pricing). The rule:

> **Cache survives only on an identical prefix.** Stable system prompt + stable tool definitions + append-only message history = every turn re-reads history nearly free. Change one early byte and you pay full price for everything after it.

This single fact explains several otherwise-mysterious harness conventions (the Manus team's essay on this is required reading):

- System prompts **never** include the current time-of-day at second precision (a timestamp busts the cache every turn; harnesses inject dates once, in a stable place).
- History is **append-only** during a session; nothing is edited in place.
- Tool definitions don't change mid-session (dynamically toggling tools busts cache — which is why "deferred tools" get loaded via a *tool call* rather than by mutating the tool list silently).
- Compaction is a *discrete, rare* event, not continuous rewriting — every compaction deliberately pays one full-price turn to buy a smaller window.

**Do the math once and you'll never forget it:** 40-turn session, 80k average context, no caching ≈ 3.2M input tokens. With caching ≈ 80k fresh + ~3.1M at 10%. Harnesses that ignore caching are ~5–10× more expensive.

## 3.3 The system prompt: the harness's constitution

Read real ones (Claude Code's is studied in Lecture 6; OpenCode's and Aider's are in their repos). Common anatomy:

1. **Identity & tone** — terse, terminal-appropriate output rules
2. **Tool-use policy** — when to prefer which tool, parallelism encouragement
3. **Safety rails** — confirm destructive actions, never push to main, etc.
4. **Environment block** — cwd, OS, repo status, date (stable per session!)
5. **Steering-file injection** — CLAUDE.md / AGENTS.md contents: *user-controlled* system prompt extension. This convention (a markdown file in the repo that every harness reads) is one of 2025–26's quiet standardizations.

## 3.4 What goes where: the context placement decision

A master harness engineer's checklist for any piece of information:

| Put it in… | When… | Example |
|---|---|---|
| System prompt | Needed every turn, true all session | Tool policy, repo conventions |
| A steering file (CLAUDE.md) | Project-stable, user-maintained | "Run tests with `make test`" |
| Tool results, on demand | Needed sometimes, fetchable | File contents, docs |
| Memory/notes on disk | Must outlive the session | "User prefers tabs" |
| Nowhere (recompute) | Cheaper to re-derive than to carry | Directory listings |

The failure mode of novices is shoving everything into the system prompt; context is a budget, and irrelevant text doesn't just cost money — it measurably degrades attention on what matters ("context rot").

## Section questions

1. Your harness puts `Current time: 14:32:07` at the top of the system prompt. What does this cost, concretely, in a 30-turn session?
2. Why do compaction designs summarize *old* turns but keep *recent* turns verbatim? (Two distinct reasons — one about caching, one about task fidelity.)
3. CLAUDE.md exists. Why also have per-session memory files? When does each win?

## Lab 3

Using your script, run the same 5-turn session twice and read `usage` off each response (`cache_creation_input_tokens`, `cache_read_input_tokens`). Then sabotage the cache: prepend a timestamp to the system prompt and rerun. Compute the cost delta at current pricing. Graph tokens-per-turn for both runs.

---

# Lecture 4 — The Execution Environment: Shell, Files, and Edit Formats

## 4.1 The harness owns a machine, not just an API

The execution layer decides: *where* commands run (host vs. container vs. remote VM), *what state persists* between calls (working directory? env vars? background processes?), and *what comes back* (truncation policy, exit codes, timing). Three production answers, previewing Week 2:

- **Claude Code:** host machine, per-action permission gate + allowlists; persistent-cwd shell; optional sandbox modes.
- **Codex CLI:** Docker-style sandbox *by default* — network off, writes confined; permissions traded for isolation.
- **OpenHands:** a full Docker runtime per session with an event-stream architecture — every action and observation is an event in a log, which buys replayability and clean headless operation.

There is no free lunch: host execution is maximally capable and maximally dangerous; sandboxes are safe and constantly annoying (need a package? network's off). Week 3 treats this properly.

## 4.2 Edit formats: the hardest small problem in agentic coding

How does a model — which can only emit text — modify a file? Aider's maintainer benchmarked this exhaustively (aider.chat/docs, required reading); it's the clearest case study of "the harness is the product." The contenders:

**A. Whole-file rewrite.** Model re-emits the entire file.
✓ trivially reliable to apply ✗ slow and expensive on big files ✗ models *truncate or subtly mangle* distant unchanged lines.

**B. Unified diff.** Model emits `diff -u` patches.
✓ compact ✗ models are bad at line numbers and context-line bookkeeping; apply failures common (though improving with diff-trained models).

**C. Search/replace blocks (Aider's classic, and the dominant 2026 pattern — it's what Claude Code's Edit tool uses).** Model emits the exact old text and the new text:

```
<<<<<<< SEARCH
def total(items):
    return sum(items)
=======
def total(items):
    return sum(i.price for i in items)
>>>>>>> REPLACE
```

✓ no line numbers needed ✓ exact-match requirement is a built-in safety check: if the model hallucinated the current file state, the edit *fails loudly* instead of corrupting silently ✗ fails on whitespace drift; needs "read before edit" discipline and uniqueness handling (which is why real edit tools error on non-unique matches and offer `replace_all`).

**The meta-lesson:** the failure mode you choose matters more than the success path. C fails loud-and-safe; B fails quiet-and-corrupting. Harness engineering is largely choosing loud failures.

## 4.3 Repo orientation: how agents find their footing

A fresh agent in a 500k-line repo is a tourist without a map. Standard techniques:

- **Aider's repo map:** a PageRank-ranked summary of files/symbols (built from tree-sitter parses), token-budgeted, injected into context. Elegant pre-agentic-search design.
- **Agentic search (the 2026 default):** give grep/glob/read and let the model explore — burns turns but scales and self-corrects.
- **Steering files** (CLAUDE.md/AGENTS.md): human-curated map.
- **Subagent exploration** (Lecture 9): send a cheap scout, keep only its report.

## Section questions

1. Search/replace failed because the model's SEARCH text doesn't match the file. List three plausible causes and the right tool-result message for each (remember: errors are observations that teach).
2. Why does whole-file rewrite get *worse* as models' max output tokens grow but files grow faster? When is it still the right choice?
3. Your agent edits a file the *user* also edited mid-session. Which edit format degrades most gracefully, and why?

## Lab 4 (Problem Set 1 core)

Implement all three edit formats as functions: `apply_whole_file`, `apply_unified_diff`, `apply_search_replace`. Write 10 adversarial test cases (whitespace drift, non-unique match, overlapping hunks, trailing-newline traps). Score each format on apply-success and corruption-on-failure. Keep `apply_search_replace` — it goes into Project 1.

---

# Lecture 5 — Synthesis + Lab Day

## 5.1 The harness, restated

You now have the four foundations: **the loop** (L1), **the tool surface** (L2), **the context economy** (L3), **the execution layer** (L4). Every feature you'll meet in Week 2 (hooks, subagents, MCP, plan modes, sandboxes) is one of these four, elaborated. When you read a new harness, ask four questions: How does it loop? What tools does it expose and how are they shaped? How does it manage the window? Where does code actually run?

## 5.2 Today

1. **Quiz 1** (`week1/quiz.md`) — closed book, then self-grade.
2. **Finish Project 1** (`week1/project.md`) — your minimal harness, due tonight.
3. **Rubric checkpoint** — evidence paragraphs for D1–D3 (target: Competent).

## 5.3 Looking ahead

Week 2 is comparative anatomy: you'll read production source code and instrument real harnesses. Tonight, install/clone: OpenCode, Aider, OpenHands, SWE-agent. Skim Anthropic's *Building Effective Agents* — note its insistence that you *don't* need frameworks, just the patterns you built this week.
