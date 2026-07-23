# MUS-8B Chiptune: Writing NES Music on the 2A03 (A 3-Week Intensive)

**Format:** Self-paced intensive, modeled on a college January-term composition/studio course
**Time commitment:** ~45–75 min/day, 21 consecutive days (Days 7 and 14 are lighter studio days)
**Prerequisites:** A computer, headphones or speakers you trust, and FamiTracker (free; setup is Day 1). **No prior music theory, no prior production experience, no coding, and no NES hardware required.** If you can hum a tune and count to four, you have enough.

> **The promise of this course:** in three weeks you will go from never having opened a tracker to writing, arranging, mixing, and exporting a finished NES chiptune that sounds like it came off a cartridge. Not a plugin imitation of one: an actual NSF file, playable on a real Nintendo, written inside the exact five-voice limit Koji Kondo and Kinuyo Yamashita worked in. You will also leave with the composing habits that constraint teaches, which are the real prize.

## What this course is (and isn't)

This is a **composition course taught through a machine**. The machine is the Ricoh 2A03, the sound chip inside the NES, and the tool is FamiTracker. Everything here is aimed at getting music out of five voices:

- What the 2A03 actually is: two pulse channels, a triangle, a noise generator, and a sample channel, and what each one can and cannot do
- The tracker workflow: rows, patterns, frames, and the order list; entering notes; speed and tempo
- **Instruments as sequences**: the volume, arpeggio, pitch, and duty envelopes that turn a bare square wave into a plucked lead, a soft pad, or a laser
- **Arpeggio**, the technique that gets chords out of a monophonic voice, and why NES music sounds the way it does because of it
- Building a drum kit out of one noise channel, a triangle, and (optionally) a few kilobytes of DPCM sample
- **The voice budget**: how to score melody, counter-melody, bass, and drums onto five channels without ever running out
- Echo and delay tricks, vibrato, slides, sweeps, and the rest of the expressive vocabulary
- Song form: intro, loop, transitions, and how a level theme is actually built
- Mixing inside a chip with no EQ, no reverb, and a mixer that isn't linear
- A tour of the **expansion chips** (VRC6, VRC7, FDS, MMC5, Namco 163, Sunsoft 5B) that Famicom cartridges used to break the five-voice ceiling
- Exporting to **NSF** and WAV, and where to put a chiptune so people hear it

It deliberately **omits** things a beginning chiptune composer does not need: NES programming and 6502 assembly, writing your own sound driver, integrating music into a homebrew game, Game Boy (LSDj) and C64 (SID) composition, and deep music theory beyond what you need to write a good tune. Those doors are real and worth walking through later; the Field Guide points at each one.

## A note on how chiptune is actually learned

Chip music is learned by **imitation and dissection**, the way jazz players learn by transcribing. Every classic NES soundtrack is available as an NSF file you can open, slow down, and take apart channel by channel, which is a luxury almost no other tradition has. So this course does two things every day: it teaches a technique, and it makes you **listen to a real NES track and find that technique in it**. Required listening is not decoration. You cannot write music for a sound you have not internalized, and the fastest path to a convincing chiptune is to steal, deliberately and specifically, from people who did it under deadline in 1988.

The other half is the constraint. Five voices sounds like a punishment for the first three days and then becomes the most useful compositional teacher you will ever have. When you cannot stack another synth, you have to make the notes better.

## Course materials (all in this folder)

| File | Contents |
|---|---|
| [Syllabus](SYLLABUS.md) | Schedule, grading, daily structure, course policies |
| [Mastery Rubric](RUBRIC.md) | The skills ladder: your definition of "done" |
| [Week 1: The Chip & Five Voices](week-1-the-chip-and-five-voices.md) | Days 1–7: the 2A03, the tracker, pulse, instruments, triangle, noise, your first loop |
| [Week 2: Writing for the Chip](week-2-writing-for-the-chip.md) | Days 8–14: the voice budget, arpeggio, echo, pitch effects, drums, song form |
| [Week 3: The Finished Track](week-3-the-finished-track.md) | Days 15–21: groove, transitions, mixing, expansion chips, style study, export |
| [Projects](PROJECTS.md) | The three graded projects + the final capstone track |
| [Quizzes](QUIZZES.md) | Weekly quizzes + final exam |
| [Answer Keys](ANSWER-KEYS.md) | Answer keys for all quizzes and the final exam (no peeking) |
| [Practice Menu](DRILLS.md) | The full drill menu; build your own daily 30-minute session |
| [Field Guide: The Chip & the Tracker](SUPPLEMENT-the-chip-and-the-tracker.md) | Hardware reference, the full effect list, keyboard map, note ranges, listening list, and free resources |

## How to use this course

1. Read `SYLLABUS.md`, then `RUBRIC.md` so you know what "done" looks like. Then read **Field Guide §1–§3** (the chip, how a tracker thinks, and installing FamiTracker) before Day 1. Get the software running before you start Day 1's lecture; do not spend your first session fighting an installer.
2. Each day, work the lesson in order: **Listen → Lecture → Do → Self-check.**
3. **Always with the tracker open.** A chiptune technique you only read about is trivia. Every idea here has a "Do" section because every idea here is a thing you type into a pattern and hear.
4. **Save constantly, and save versions.** `mytrack-01.ftm`, `mytrack-02.ftm`. Trackers crash, and more importantly you will want to hear what an idea sounded like two hours ago.
5. **Listen to real NES music every single day.** The listening assignments are required work, not enrichment. Ten minutes of focused listening beats an hour of noodling.
6. Take the quizzes closed-book and grade honestly against `ANSWER-KEYS.md`. The applied sections are where the real grade lives.
7. Do the projects. They ladder: the Week 1 loop becomes the Week 2 tune becomes the Week 3 finished track. Nothing gets thrown away.

## A note on pace

Three weeks is enough to build **fluent tracker technique, a real understanding of the 2A03, and a finished, exportable song you are not embarrassed by**. It is not enough to make you Tim Follin. Chip music has an unusually long tail: the difference between a competent chiptune and a great one is mostly in arrangement instincts and sound-design tricks that accumulate over years of writing and listening. What this course locks in is the vocabulary, the constraint-thinking, and a working habit, so those years actually add up instead of stalling out in a folder of eight-bar loops.

Boot the tracker. Let's write.
