# Project 1: Build a Minimal Coding Harness ("tinyharness")

**Due:** end of Week 1 · **Weight:** 15% · **Rubric dimensions:** D1, D2, D8

The famous claim (Thorsten Ball, *How to Build an Agent*): a working coding agent is ~300 lines. You will verify this personally. No frameworks, raw API client only. The point is to own every line of the loop before you study anyone else's.

## Spec

Build a CLI program (`python tinyharness.py` or TS equivalent) that:

### Core (required)

1. **The loop.** Conversational REPL: user types a task; agent loops (API call → tool execution → results) until `end_turn`; prints text output as it goes. Handle multiple `tool_use` blocks per response. Hard cap of 50 turns per task with a clean "turn limit reached" message.

2. **Four tools, well-shaped** (apply Lecture 2; descriptions are graded):
   - `bash`: run a shell command. 60s timeout. Truncate output to ~10k chars *keeping head and tail* with `[... N chars truncated ...]` marker. Return exit code on failure.
   - `read_file`: line-numbered output (`   42→text`), optional offset/limit, refuse-with-guidance on files > 2k lines ("file has 8,012 lines; pass offset/limit").
   - `list_files`: directory listing, depth-limited.
   - `edit_file` uses **search/replace semantics from Lab 4**: exact-match old string; error loudly on zero matches ("not found. Re-read the file; whitespace must match exactly") and on multiple matches ("matched 3 locations; provide more surrounding context").

3. **Errors are observations.** Tool failures (bad path, command error, non-unique match) return as `tool_result` with `is_error: true` and an actionable message. The process never crashes on a tool failure.

4. **A real system prompt.** Identity, tool policy (e.g., "read before you edit"), an environment block (cwd, OS, date, *stable per session*), and terse-output rules. Written by you, not pasted.

5. **Cache-correct layout.** Stable system prompt, append-only messages, cache breakpoint set (e.g., `cache_control` on the system prompt / last message per Anthropic docs). Print per-turn `usage` including cache reads, so you can *see* it working.

### Stretch (pick at least one for Proficient on D8)

- **Streaming** output token-by-token
- **Parallel tool execution** when the model requests multiple independent calls
- **`/cost` command** showing session token/dollar totals
- **Permission gate**: y/n prompt before `bash` and `edit_file`, with an allowlist file (`allow: ["git status", "ls *"]`); previews Week 3
- **Conversation persistence**: `--resume` flag reloading the message log from JSON

## Acceptance Tests (run all five in a real repo)

| # | Task you give the agent | Pass condition |
|---|---|---|
| 1 | "What does this repo do? Look around first." | Explores via tools before answering; no hallucinated files |
| 2 | "Create fizzbuzz.py with tests and run them" | Tests written, executed, passing |
| 3 | "There's a bug in <file you sabotaged>: find and fix it" | Locates by reading/running, fixes via edit_file, verifies |
| 4 | "Rename function X to Y everywhere it's used" | All call sites updated; nothing else mangled |
| 5 | Give it a task that *must* fail (missing dep, locked file) | Recovers or explains gracefully; never crashes |

## Deliverables

```
tinyharness/
├── tinyharness.py     # the harness (~300 lines is honest; <600 acceptable)
├── README.md          # how to run; one paragraph per design decision you made
└── TRANSCRIPTS.md     # the 5 acceptance-test transcripts, annotated:
                       #   mark 3 moments where YOUR harness design (not the
                       #   model) determined the outcome, good or bad
```

## Grading rubric

| Criterion | Weight |
|---|---|
| Loop correctness (multi-tool turns, stop reasons, turn cap, never crashes) | 25% |
| ACI quality (descriptions, truncation, error messages that teach) | 25% |
| Edit tool robustness (loud failures, uniqueness handling) | 20% |
| Cache-correct context layout, demonstrated via printed usage | 15% |
| Transcript annotations show you can attribute behavior to harness design | 15% |

**The trap to avoid:** making it fancy. A 300-line harness that nails truncation, error messages, and edit semantics beats a 1,500-line one with config files and a plugin system. You're graded on judgment, not features; the features come in the capstone.
