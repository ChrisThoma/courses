# MUS-8B Syllabus: Chiptune on the NES 2A03

## Course description

A three-week intensive in composing music for the Nintendo Entertainment System's sound chip, the Ricoh 2A03, using the FamiTracker family of trackers. Students begin with no tracker experience and learn the chip voice by voice: the two pulse channels and their duty cycles, the volume-less triangle, the noise generator, and the DPCM sample channel. From there the course turns compositional: how to distribute a whole arrangement across five monophonic voices, how to fake chords with arpeggio and space with echo, how to build a drum kit out of a noise channel, and how to structure a track that loops the way a game theme has to. The last week is production: groove, transitions, mixing inside a non-linear hardware mixer, a survey of the Famicom expansion chips, and export to NSF.

This is a **composition and production course**: the bulk of the work is writing music, every day, in the tracker.

## Learning objectives

By the end of this course you will be able to:

1. **Describe the 2A03's five channels** and state precisely what each can and cannot do (duty cycles, volume resolution, the triangle's missing volume control, noise modes, DPCM limits).
2. **Navigate FamiTracker fluently**: enter and edit notes, manage patterns and frames, use the order list, and control speed and tempo.
3. **Build instruments from sequences**: write volume, arpeggio, pitch, hi-pitch, and duty envelopes with loop and release points to make plucks, pads, basses, and effects.
4. **Program drums** on the noise channel and triangle, and load and trigger a DPCM sample.
5. **Arpeggiate** to imply chords on a monophonic channel, using both the `0xy` effect and an instrument's arpeggio sequence, and choose between absolute and fixed arpeggio for the result you want.
6. **Budget five voices** across a full arrangement: melody, counter-melody, bass, harmony, and drums, including deliberate channel-sharing.
7. **Apply the expressive effect vocabulary**: vibrato, portamento, pitch slides, hardware sweep, volume slides, note delay, and note cut, and know which channels accept which.
8. **Structure a track**: intro, A and B sections, transitions and fills, and a loop point that is invisible on the seam.
9. **Mix on the chip**: balance the two non-linear mixer groups, use volume columns and envelopes for depth, and create space without reverb.
10. **Explain the expansion chips** (VRC6, VRC7, FDS, MMC5, Namco 163, Sunsoft 5B) and what each adds.
11. **Export a finished piece to NSF and WAV** and verify it plays back correctly.
12. **Analyze an existing NES track** by ear and by channel, name the techniques in it, and reuse them in your own writing.

## Schedule overview

### Week 1: The Chip & Five Voices
| Day | Topic |
|---|---|
| 1 | What a chiptune is, the 2A03's five voices, installing the tracker, first sound |
| 2 | The tracker itself: rows, patterns, frames, the order list, speed and tempo |
| 3 | The pulse channel: duty cycles, the volume column, and a real melody |
| 4 | Instruments are sequences: volume, arpeggio, pitch, hi-pitch, duty |
| 5 | The triangle: bass that carries the whole song (and the kick drum) |
| 6 | The noise channel: a drum kit from one voice, then **Quiz 1** |
| 7 | Studio day + Project 1 (The Four-Voice Loop) |

### Week 2: Writing for the Chip
| Day | Topic |
|---|---|
| 8 | Two pulses, one band: melody, counter-melody, and the voice budget |
| 9 | **Arpeggio**: chords on a monophonic voice |
| 10 | Echo, delay, and faking space with no reverb |
| 11 | Vibrato, slides, sweeps: making a square wave sing |
| 12 | Drums in depth: noise patterns, the triangle kick, and DPCM samples |
| 13 | Song form: frames, the order list, and a 32-bar tune, then **Quiz 2** |
| 14 | Studio day + Project 2 (The Two-Part Tune) |

### Week 3: The Finished Track
| Day | Topic |
|---|---|
| 15 | Groove: speed, swing, note delay, and the feel of 60 ticks per second |
| 16 | Intros, transitions, fills, and the invisible loop point |
| 17 | Mixing on the chip: the non-linear mixer, balance, and space |
| 18 | Beyond the 2A03: the expansion chips |
| 19 | Style study: taking a great NES track apart and stealing from it |
| 20 | Polish and export: NSF, WAV, metadata, then Project 3 |
| 21 | **Final exam** + Final Capstone Track due |

## Daily structure (~45–75 minutes)

| Block | Time | Activity |
|---|---|---|
| Listen | 5–10 min | The day's required listening, with the specific thing to listen for |
| Lecture | 10–15 min | Read the lecture with the tracker open; play every example |
| Do | 25–40 min | The day's writing assignment, in the tracker |
| Daily drill | 5 min | The short repeatable rep introduced that day (see `DRILLS.md`) |
| Review | 5 min | Answer the self-check from memory; save a dated version of your file |

**Three days run long.** Days 6 and 13 carry a full lesson plus a 40-minute quiz, and Day 21 is a 60-minute exam plus the capstone hand-in, so budget closer to 90–120 minutes for those. If that does not fit your day, take the quiz first thing on the studio day that follows it (Day 7 or Day 14) instead. Do not take it later than that; a quiz you postpone twice is a quiz you never take, and its whole job is to find gaps while there is still course left to fix them in.

## Grading

| Component | Weight |
|---|---|
| Quiz 1 (Week 1) | 10% |
| Quiz 2 (Week 2) | 10% |
| Project 1: The Four-Voice Loop | 10% |
| Project 2: The Two-Part Tune | 15% |
| Project 3: The Polished Level Theme | 15% |
| Final Capstone Track | 25% |
| Final Exam | 15% |

Grade yourself against `RUBRIC.md`. **Mastery threshold: 90%.** Be honest about the applied work. The reliable test is to **export to WAV, walk away for a day, and listen to it cold on different speakers**, ideally phone speakers and headphones both. Music you just wrote always sounds better than it is; music you have not heard for 24 hours tells the truth.

## Course policies

- **Write inside the constraint.** No pitch-shifting a sample to fake a sixth voice, no exporting stems and layering them in a DAW. If it does not play back correctly as an NSF on the chip, it is not a chiptune, it is a chiptune-flavored production. There is nothing wrong with the latter; it is just not this course.
- **Listen before you write.** Every day has a listening assignment with a specific thing to hunt for. Do it first, at the start of the session, before you type a note.
- **Finish loops before you polish them.** The universal beginner failure in tracker music is a hard drive full of eight-bar loops and no songs. This course forces completion: every project has a length requirement and a loop point.
- **Save versions, not files.** Increment the filename every session. You will want yesterday's version.
- **Slow the tempo down to hear mistakes.** A tracker will happily play something wrong at 150 BPM that is obviously wrong at 90. Drop the tempo when you cannot tell what a part is doing.
- **Closed-book quizzes.** The point is to find gaps, not to feel good.
- **Falling behind:** use the studio day to catch up. This course is cumulative: Day 4's instrument sequences are used every remaining day, and Week 3 assumes the Week 2 tune exists. If you are more than a day behind, slow down and cut the optional listening rather than skipping a technique day.
