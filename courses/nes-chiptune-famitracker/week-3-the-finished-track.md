# Week 3: The Finished Track

> **The thesis of this week:** the gap between an amateur chiptune and a professional one is almost never the notes. It is groove, transitions, and balance: the track feels stiff, the sections feel glued together rather than connected, and everything is at volume `F` fighting everything else. Week 3 fixes those three things, tours the expansion chips so you know what is on the other side of the fence, takes a professional track apart to see how it was actually built, and then gets your song out of the editor and into a file other people can play.

---

# Day 15: Groove

### Objectives
- Diagnose why a tracker part feels stiff.
- Implement swing with alternating speeds or grooves.
- Use `Gxx` note delay for humanized timing.

### Listen (8 min)
**DuckTales, "The Moon"** and **Castlevania, "Vampire Killer."** Both feel like they are being *played*, not clocked out. Listen specifically to whether the offbeats sit exactly halfway between the beats or slightly late. Then listen to a beginner chiptune on any streaming service; the difference is almost always here.

### Lecture

In a FamiTracker NSF, musical updates happen on a 60 Hz grid by default. Nothing can occur between ticks. That is a real constraint, and it is also less limiting than it sounds, because at speed 6 you have six tick-sized positions inside every row and you have not been using any of them.

**Three sources of stiffness, in order of how often they are the culprit:**

**1. Flat velocities.** Covered on Day 12 for drums, but it applies everywhere. If your melody's volume column is `F` on every note, the part has no phrasing. Real playing accents some notes and not others. Spend ten minutes putting a dynamic contour on every part: louder into phrase peaks, softer on passing notes, a touch louder on downbeats.

**2. Everything exactly on the grid.** The `Gxx` effect delays a note by `xx` ticks. `G01` moves a note one-sixth of a row later at speed 6. Nudging *specific* notes late by one tick makes a part feel played:

- Snares nudged `G01` late give a beat a slight drag and weight.
- A counter-melody nudged `G01` behind the lead stops the two from sounding like one fused chord.
- Vocal-style leads sound better when the *first* note of a phrase is late and the rest are on time.

Do not nudge everything. Stiffness comes from uniformity, and uniformly-late is just as uniform.

**3. No swing.** Straight row-level subdivisions can sound mechanical because they are mechanical. Two ways to swing:

**Alternating speeds.** Put `F07` on even rows and `F05` on odd rows. Now long-short, long-short: the rows alternate between 7 ticks and 5 ticks, which is a 7:5 swing ratio on the row subdivision and still averages to speed 6. Adjust the pair for taste; `F08`/`F04` is hard shuffle. A pair like `F07`/`F06` is subtler, but it averages slower than speed 6, so it changes the overall tempo too.

**Grooves.** 0CC-FamiTracker and Dn-FamiTracker add a **groove** feature: you define a repeating list of per-row speeds (say `7 5 7 5`) once and apply it to the song, instead of typing `Fxx` on every row. If your tracker has it, use it; it is the same idea with far less typing.

> **Test for swing:** alternating speed every row swings whatever one row represents. At 4 rows per beat, that is 16ths. At 8 rows per beat, that is 32nds. If you want swung 8ths at 4 rows per beat, swing row pairs instead (`7 7 5 5`, for example). Decide which subdivision you want to swing *before* choosing your rows-per-beat, because changing it later means moving a lot of notes.

**The 60 Hz feel.** One more thing that is specific to tracker writing: because sequences step per tracker update, **row speed changes how instruments line up with the pattern grid**. At Tempo 150 and speed 3, a 12-step volume envelope spans four rows instead of two; at speed 8 it spans only a row and a half. When you change a song's speed or rows-per-beat late in the process, re-audition every instrument in context. This bites everyone once.

**Rows per beat, chosen properly.** Four rows per beat at speed 6 is the default and is fine for most things. Move to **8 rows per beat** (usually speed 3 at Tempo 150 if you want the same perceived BPM) when you need 32nd-note drum detail, tight echoes, or fine `Gxx` control. The cost is twice as much scrolling and twice as many rows to fill. Many serious chiptunes use 8.

### Do
1. **(10 min) Velocity pass.** Go through every channel of your song and set the volume column deliberately on every note. No two consecutive notes at the same volume unless you mean it.
2. **(10 min) Swing it.** Add `F07`/`F05` alternating (or set up a groove) and listen. Try three different swing ratios and pick one. Then decide honestly whether the track is better straight; plenty of NES music is, and swing on an action theme often just makes it feel drunk.
3. **(10 min) Nudge.** Add `G01` to your snares. Then to the first note of each melodic phrase. Then remove them and confirm you can hear the difference. If you cannot, the effect is doing nothing and you should not keep it.
4. **(10 min) Resolution check.** If your drums feel constrained, convert the song to 8 rows per beat: double the pattern length, spread every note to every other row, halve the speed. It is tedious once and worth it.

### Daily drill
**One-bar groove, 3 min:** take a flat, dead one-bar drum pattern and make it groove in three minutes, using only volume and `Gxx`. No new notes.

### Self-check
1. What are the three most common causes of a stiff tracker part?
2. What does `Gxx` do, and what is a good use for it?
3. How do you implement swing with `Fxx`?
4. Why does changing a song's speed change how your instruments sound?
5. When would you move from 4 rows per beat to 8?

---

# Day 16: Transitions, Fills, and the Invisible Loop

### Objectives
- Write fills that connect sections instead of decorating them.
- Build an intro that earns the A section.
- Make the loop seam inaudible.

### Listen (8 min)
Pick any two NES tracks and listen *only* to the four rows on either side of each section change. What happens? You will find drum fills, a held pulse note that carries across, a rising arpeggio run, a dropout where everything stops for half a beat, or a bass line that walks up into the new key. Almost never nothing.

### Lecture

A song made of correct sections that do not connect sounds like a slideshow. The connective tissue is small, cheap, and it is what most beginners skip entirely.

**The transition toolkit,** roughly in ascending order of drama:

| Move | How | Best at |
|---|---|---|
| **Drum fill** | Last bar of a section: 16th snares, a tom run down the noise pitches, a crash on the landing | Every section change, always |
| **Dropout** | Everything cuts for 2–4 rows before the new section | Before a big chorus; the silence makes the entrance huge |
| **Riser** | A fast ascending arpeggio or a `1xx` portamento up on a pulse | Building into an energetic section |
| **Bass walk** | The triangle walks stepwise from the old root to the new one | Key changes and gentle transitions |
| **Held tie** | A pulse note held across the boundary while everything else changes | Making two sections feel like one piece |
| **Cymbal + silence** | A crash on the downbeat of the new section, over a bar of thinner texture | Marking the top of a form |

You do not need all of them. You need *one* at every section boundary, chosen for what the boundary is doing.

**Where fills go.** A fill belongs in the **last bar** of the outgoing section, resolving on the **first beat** of the incoming one. Beginners write fills in the first bar of the new section, which makes the new section sound like it is stumbling in. The fill is a run-up, not a landing.

**Building an intro.** Write it last, keep it short (2–8 bars), and make it do one job: establish something the A section then pays off. Four intros that always work:

1. **Drums alone** for 2 bars, then the band enters. Establishes tempo and groove.
2. **A single stab** (detuned across both pulses, with a crash), a beat of silence, then A. Establishes drama.
3. **The A-section chord bed alone** for 4 bars, then the melody enters. Establishes harmony.
4. **A fragment of the melody**, slower or sparser, then the full version. Establishes the hook.

**Making the loop invisible** is the part that separates a finished track from a demo. Work through this checklist on your song:

- Is there a **fill in the final bar** that leads back into the top?
- Does the harmony at the end **want to resolve** to the harmony at the beginning? (End on the V chord, or on a note a step above or below the first note.)
- Is anything **still decaying** on the final row? A long crash, a released pad, a `3xx` glide in progress? All of those get chopped off by the jump. Move them earlier.
- Does the **drum pattern's last bar** match what would naturally precede bar 1?
- Do you have a **stray persistent effect** still running (a vibrato, a portamento, a `Vxx` duty change) that will be in the wrong state when the loop restarts? This is the single most common loop bug. Re-state your duty and cancel your vibratos on the first row of your loop target frame.

> **The ten-loop test.** Set your song looping and go do something else for ten minutes. Come back and listen without watching the screen. If you can pinpoint the seam, it is not fixed.

### Do
1. **(15 min) Fill every seam.** Every section boundary in your song gets a transition from the table above. Write them in the last bar of the *outgoing* section.
2. **(10 min) Build the intro.** Pick one of the four intro shapes and write it. Two to eight bars. Add it as frame 00 and make sure your `Bxx` loop point returns to frame 01, not frame 00, so the intro plays once.
3. **(10 min) Seam repair.** Run the loop checklist above, item by item, on your final frame. Fix the persistent-effect bug specifically; check every channel for a running vibrato or portamento.
4. **(10 min) The ten-loop test.** Actually do it. Note what you hear and fix it tomorrow if you cannot fix it now.

### Daily drill
**Fill-a-bar, 3 min:** take any bar of drums and turn it into a fill three different ways: a snare roll, a tom run, and a dropout.

### Self-check
1. Where does a fill belong, and where do beginners wrongly put it?
2. Name four transition types and what each is best at.
3. Why should the loop point usually return to frame 01 rather than frame 00?
4. What is the most common loop bug involving effects?
5. What is the ten-loop test?

---

# Day 17: Mixing on the Chip

### Objectives
- Explain the 2A03's two non-linear mixer groups and their practical consequences.
- Set a volume hierarchy across five channels.
- Create separation with register and duty instead of EQ.

### Listen (8 min)
Play three NES tracks back to back at the same system volume. Notice that the well-mixed ones have an obvious foreground and background, and that the balance holds up on bad speakers. Then listen for the triangle dipping whenever a DPCM drum hits, which you now know is the mixer, not a mixing decision.

### Lecture

You have no EQ, no compression, no reverb, no panning, and no faders. Mixing here is four things: **volume numbers, register choices, duty choices, and what you leave out.**

**The mixer is non-linear, in two groups.** The APU sums the two pulse channels in one group, and the triangle, noise, and DMC in another, and within each group the summing is non-linear. Two consequences you can hear:

1. **Channels within a group compress each other.** Two pulses at volume `F` are not twice as loud as one; they are somewhat louder and each is somewhat squashed. Adding a second pulse line therefore reduces the apparent loudness of the first, which is a real reason a lead can "disappear" when you add harmony.
2. **The DMC level pulls down the triangle and noise.** Raising the DMC's output level attenuates the other two members of its group. This is why DPCM drums duck the bass. You can exploit it deliberately with the `Zxx` effect, which sets the DMC delta counter directly and therefore adjusts the whole group's level *even with no sample playing*. That is the closest thing to a bus fader on this chip, and it is the one legitimate way to make the volume-less triangle quieter.

**A working volume hierarchy.** Start here and adjust:

| Part | Volume | Reasoning |
|---|---|---|
| Lead melody | `D`–`F` | Foreground; should never be in doubt |
| Counter-melody | `9`–`B` | Clearly behind the lead |
| Arpeggio / chord bed | `7`–`9` | Arpeggios sound louder than their number suggests |
| Snare | `C`–`F` | Needs to punch through |
| Hats | `3`–`6` | The most common mix error is hats too loud |
| Crash | `A`–`D`, decaying | Loud on the hit, out of the way after |
| Triangle | n/a | Manage with note length, register, and `Zxx` |

**Separation without EQ.** Three tools:

- **Register.** Two parts in the same octave fight. Move the counter-melody down an octave and the problem often disappears entirely. This is the first thing to try, always.
- **Duty.** Different duty cycles occupy different harmonic territory. A 12.5% lead over a 50% pad separates naturally; two 25% lines do not.
- **Rhythm.** Two parts that move at different times never mask each other. This is why the Day 8 interleaving rule is a *mixing* rule as much as an arranging one.

**Checking your mix.** With no meters worth trusting, use your ears and these three tests:

1. **The phone test.** Export to WAV and play it on a phone speaker. Bass disappears there, so this tells you whether the track still works when the triangle is inaudible. If your song is unrecognizable, your arrangement is over-dependent on bass.
2. **The quiet test.** Turn the volume down until you can barely hear it. Whatever you can still make out is your foreground. If it is the hats, fix the hats.
3. **The cold test.** Sleep on it and listen the next morning. Everything you wrote yesterday sounds better than it is.

> **The single most common chiptune mix error** is everything at volume `F`. Because there is no compressor, a chip mix at full volume on all channels is genuinely, physically fatiguing: the non-linear mixing squashes it into a wall. Making your background parts quieter is free and it is the biggest improvement available to most beginner tracks.

### Do
1. **(15 min) Set the hierarchy.** Go through your song channel by channel and apply the volume table above. Do not fine-tune yet; just get the gross levels right and listen.
2. **(10 min) Fix a collision.** Find two parts that occupy the same octave and move one of them an octave away. Then find two parts on the same duty and change one. Listen after each fix.
3. **(10 min) `Zxx` experiment.** Put a small `Zxx` change on one row while your triangle is playing, and listen to the triangle/noise/DMC group shift. Avoid jumping straight between `Z00` and `Z7F` in a real song; large delta-counter jumps click. Then use a modest value musically: duck the triangle group slightly during your busiest section.
4. **(10 min) The three tests.** Export to WAV. Do the phone test and the quiet test now, and schedule the cold test for tomorrow.

### Daily drill
**Quiet-test, 3 min:** listen to your track at the lowest audible volume and write down, in order, what you can still hear. That list is your real mix.

### Self-check
1. What are the 2A03's two mixer groups?
2. Why can adding a second pulse line make the first one seem quieter?
3. What does `Zxx` do, and why is it the only real way to lower the triangle?
4. Name three ways to get separation between two parts without EQ.
5. What is the most common chiptune mix error, and why is it physically fatiguing?

---

# Day 18: Beyond the 2A03

### Objectives
- Name the major Famicom expansion chips and what each adds.
- Enable an expansion chip in the tracker and write with it.
- Explain why you would, or would not, use one.

### Listen (8 min)
Find a track using **VRC6** (Konami's *Akumajou Densetsu*, the Japanese Castlevania III, is the canonical example) and compare it directly with the American NES version of the same soundtrack, which had the expansion audio stripped out. The difference is startling and it is the best possible argument for what an extra two channels and a sawtooth buy you.

### Lecture

The Famicom's cartridge connector carried an **audio return line**: a cartridge could contain its own sound chip and mix its output with the console's. (The American NES omitted the connection, which is why expansion audio is a Famicom phenomenon and why Castlevania III sounds worse in English.)

| Chip | Adds | Character |
|---|---|---|
| **Konami VRC6** | 2 extra pulse channels (with **8** duty settings, not 4) + a **sawtooth** | The most musically useful. The saw gives you a genuinely different timbre; the extra pulses give you chords without arpeggio |
| **Konami VRC7** | 6 channels of **FM synthesis** (a Yamaha YM2413 / OPLL variant) | A completely different palette: bells, electric pianos, brass. Sounds like an arcade machine, not an NES |
| **Nintendo MMC5** | 2 extra pulse channels + an 8-bit PCM output | More of the same, which is not nothing when what you want is more pulses |
| **Namco 163** | Up to **8** wavetable channels | Enormous channel count, but they share bandwidth: the more channels you enable, the worse each one sounds |
| **Sunsoft 5B** | 3 square channels (from the AY-3-8910 family) | The classic home-computer sound. Gimmick! is the one everybody points to |
| **Famicom Disk System** | 1 wavetable channel | One extra voice with a drawable waveform. Warm, distinctive, used beautifully in Zelda and Metroid's Japanese releases |

**In the tracker**, expansion chips are enabled per module in the module properties. Turn one on and new channel strips appear. Everything you know transfers: patterns, frames, instruments, effects. The instrument editor gains chip-specific pages (a waveform editor for FDS and N163, FM operator parameters for VRC7).

**Should you use one?** Honest answer for this course: **finish the capstone on the plain 2A03 first.** Three reasons:

1. The constraint is the teacher. Give yourself eight channels in week three and you will stop making the hard arrangement decisions that are the actual skill.
2. Plain 2A03 is the format most compos, communities, and listeners assume. It is also the only configuration guaranteed to play on any NES.
3. Expansion chips are easy to add later and impossible to un-learn from. Everything in this course applies to them unchanged.

Even so, VRC6 is worth an afternoon of your time simply because the sawtooth is a genuinely new sound and having *two more pulse channels* recontextualizes the entire voice-budget problem. Try it and notice how differently you write when you have seven voices instead of five. That contrast teaches you something about the five.

**Source:** [NESdev Wiki: expansion audio](https://www.nesdev.org/wiki/Category:Expansion_audio).

### Do
1. **(10 min) Comparative listening.** Do the Castlevania III comparison above properly, with the same track on both versions. Write down what the expansion audio is actually doing that the 2A03 version cannot.
2. **(20 min) VRC6 sketch.** Make a **copy** of your song file. In the copy, enable VRC6 in module properties. Put a sawtooth bassline on the saw channel and move your arpeggio to one of the VRC6 pulses. Play it. Notice how much room opened up.
3. **(10 min) Reflect and revert.** Write two sentences on what you did with the extra channels. Then go back to your real 2A03 file. If the VRC6 version gave you a good idea that fits in five voices, port it.
4. **(5 min) Optional: peek at VRC7 or FDS** just to hear how different they are. Do not start a project.

### Daily drill
**Chip ID, 3 min:** listen to a Famicom track and guess whether it is plain 2A03 or expanded, and if expanded, which chip. Saw = VRC6, bells and e-piano = VRC7, warm wavetable = FDS.

### Self-check
1. Why does expansion audio exist on the Famicom but not the American NES?
2. What does the VRC6 add, and what makes it musically the most useful?
3. What is the trade-off with the Namco 163's eight channels?
4. What does the VRC7 use for synthesis, and how does it change the palette?
5. Why should you finish this course's capstone on the plain 2A03?

---

# Day 19: Style Study

### Objectives
- Take a professional NES track apart channel by channel.
- Name the specific techniques in it.
- Steal two of them into your own track.

### Listen (15 min, this is most of today's work)
Pick **one** track you genuinely love from the [Field Guide §8 listening list](SUPPLEMENT-the-chip-and-the-tracker.md), ideally one you can find as an NSF so you can solo channels. If you cannot solo channels, choose a sparse track where you can follow parts by ear (Metroid's Brinstar and Zelda's Overworld are both easy to hear into).

### Lecture

This is the day where the course turns into a lifelong method. **Every technique in chip music is legible.** Unlike a record, where you cannot tell what compressor was used, an NSF is fully visible: five channels, no processing, everything audible is something someone typed. That makes NES music the single best teaching corpus in electronic music, and the transcription habit is what will keep improving your writing long after this course ends.

**The teardown procedure.** Do it in this order, one full pass per step:

1. **Form.** Time the sections. Write out the frame map: intro / A / A' / B / A. How long is each? Where does it loop?
2. **Pulse 1.** Follow only the lead. What is its range? Its duty? Does it use vibrato, slides, arpeggio? How long are its phrases and where does it rest?
3. **Pulse 2.** What job does it do, and does that job *change* between sections? Is it harmony, counter-melody, arpeggio, echo, or several of these at different moments?
4. **Triangle.** How busy is the bass? Does it drop out for kicks? Where does it jump octaves? Does it play melody anywhere?
5. **Noise.** Transcribe one bar of the drum pattern exactly, including which hits are quiet. Find the fills.
6. **DPCM.** Is there any? What is it used for?
7. **Transitions.** What happens in the last bar of each section?

**Then answer the only question that matters:** what are two specific things this composer did that you do not currently do? Not "it sounds good" but "the counter-melody drops out entirely for the second half of every A section" or "the bass plays the melody an octave down for two bars in the B section" or "every phrase ends with a downward slide."

**Recreate, do not copy.** Take those two techniques and apply them to *your own* material. Recreating a famous track note for note is a fine exercise for another week; what you want today is the technique, transplanted.

> **Make this a habit.** One teardown a month, for a year, will do more for your writing than any tutorial. The corpus is enormous and it is all free.

### Do
1. **(15 min) The teardown.** Work the seven-step procedure above on your chosen track. Write it down; do not do it in your head. A page of notes is the deliverable.
2. **(5 min) Name two techniques** you do not currently use.
3. **(20 min) Transplant.** Implement both in your song. Not as a copy of their material, as the same *move* on your material.
4. **(5 min) A/B.** Compare against yesterday's version. If a transplant made it worse, that is a real result; note why and revert it.

### Daily drill
**Sixteen-bar transcription, 5 min:** pick any NES track and transcribe just the drum pattern of one bar into your tracker, by ear. You will be wrong at first. It gets fast.

### Self-check
1. Why is NES music an unusually good corpus to learn from?
2. What is the seven-step teardown order?
3. What is the difference between copying a track and transplanting a technique?
4. What specifically should you be looking for on Pulse 2 during a teardown?
5. What is the question the whole exercise exists to answer?

---

# Day 20: Polish and Export (+ Project 3)

### Objectives
- Run a finish checklist on a track.
- Export to NSF and WAV and verify both.
- Complete Project 3.

### Listen (5 min)
Listen to your own track, cold, from yesterday. Write down the first three things that bother you. Those are today's work, and the habit of listening cold and writing down the first three problems is the most valuable production habit in this lecture.

### Lecture

**The finish checklist.** Run all of it. Most of these take under a minute and most beginner tracks fail at least four.

*Arrangement*
- [ ] Every section boundary has a transition.
- [ ] No channel does the identical thing for the entire song.
- [ ] There is at least one moment where the texture drops to two or three voices. Constant density is exhausting.
- [ ] The B section genuinely contrasts (two of: key, register, density, rhythm).
- [ ] The intro plays once and the loop returns after it.

*Mix*
- [ ] Nothing is at `F` except the lead and the snare.
- [ ] Hats are between `3` and `6`.
- [ ] You can identify the melody within two seconds on a bad speaker.
- [ ] No two parts sit in the same octave doing the same rhythm.

*Technical*
- [ ] No persistent effect (vibrato, portamento, duty) is in the wrong state at the loop point.
- [ ] Nothing is decaying across the loop seam.
- [ ] Every instrument's volume sequence has a loop point, unless you meant it not to.
- [ ] The song survives the ten-loop test.
- [ ] Playback is identical after a fresh reload of the file (this catches state that only exists because of how you happened to be playing).

**Exporting.** Two formats, two purposes:

**NSF** (File → Create NSF...). This is the real deliverable: a playable chiptune file that runs on emulators, NSF players, flash carts, and actual NES hardware. Fill in the **title, author, and copyright boxes** at the top of the main tracker window (not the Module Properties dialog, which is where the expansion chips live); they are embedded in the file and displayed by players, and leaving them blank marks your file as unfinished. If you used an expansion chip the NSF records that, and a plain 2A03 NSF is the most universally playable thing you can make. Dn-FamiTracker can also export **NSF 2.0 / NSFe** for extended metadata; plain NSF is the safest choice.

**WAV** (File → Create WAV...). A rendered audio file for uploading to Bandcamp or SoundCloud, for sending to someone who will not install an NSF player, and for the listening tests in this course. Export the number of loops you want; most people render two or three loops plus a fade.

**Verify your export.** Actually load the NSF back and play it, in a different player than the tracker, ideally [Mesen](https://www.mesen.ca/)'s NSF player or a standalone one. Things that sound fine in the tracker and break in the NSF are rare but they exist, usually involving expansion chips or extremely aggressive DPCM. Two minutes of verification saves you posting a broken file.

**Where to put it.** Bandcamp and SoundCloud for the WAV. [Battle of the Bits](https://battleofthebits.com/) runs regular chip compos, including Famicom-format battles, and is the most direct way to get real feedback from people who know the format. Posting a first track to a compo is intimidating and it is the fastest improvement mechanism available.

### Do
1. **(20 min) Run the checklist** on your song. Fix everything that fails.
2. **(10 min) Export both formats.** NSF and WAV, with title/author/copyright filled in.
3. **(5 min) Verify.** Load the NSF in a separate player and listen all the way through, including the loop.
4. **(20 min) Project 3.** Complete **Project 3: The Polished Level Theme** (see `PROJECTS.md`). This is your Project 2 tune taken to a finished, exported state, and it is the direct precursor to tomorrow's capstone.

### Daily drill
**Three problems, 3 min:** listen to any of your own tracks cold and write the first three things that bother you. Do this every time you open an old file.

### Self-check
1. Name three items from the arrangement section of the finish checklist.
2. What is the difference between an NSF and a WAV export, and what is each for?
3. Which metadata fields should you fill in before exporting, and why?
4. Why should you load the exported NSF in a separate player?
5. What is the most common technical bug at a loop point?

---

# Day 21: Final Exam + Capstone

Today is the long one: about an hour of exam plus however long the capstone still needs. Clear two to three hours, or split it and take the exam in the morning and finish the track in the evening.

### Objectives
- Take the final exam.
- Deliver the capstone track.
- Set up what you do next.

### 1. Final exam
Take the **Final Exam** in `QUIZZES.md`, closed-book, before you touch the tracker today. It is cumulative: the chip, the tracker, instruments, arrangement, effects, mixing, and expansion audio, plus an applied section. Grade honestly against `ANSWER-KEYS.md`.

### 2. The capstone
Deliver the **Final Capstone Track** (see `PROJECTS.md`): a complete, exported, loopable NES piece of at least 90 seconds with intro, two contrasting sections, transitions, a working loop, and a real mix, plus a short written reflection.

This is not a new composition from scratch. It is the through-line of the whole course: your Day 3 melody became the Project 1 loop, which became the Project 2 two-part tune, which became the Project 3 polished theme. Today it becomes a finished track that you export, listen to on real speakers, and put somewhere other people can hear it.

### 3. Grade yourself
Fill out the score sheet in `RUBRIC.md` for the final time. Compare with your Week 1 and Week 2 columns. Then read the "expected trajectory" paragraph at the bottom and be honest about which domains are genuinely at level 4 and which need months rather than days.

### Where to go from here

**Keep writing, and set a length rule.** The failure mode from here is a folder of loops. Make a rule: every month, one track that has an intro, two sections, and a loop point, exported to NSF. Twelve tracks a year will make you good.

**Keep tearing down.** One teardown a month (Day 19's procedure) on a track you love. The corpus is free and enormous.

**Enter a compo.** [Battle of the Bits](https://battleofthebits.com/) has Famicom battles regularly. External deadlines finish tracks; nothing else does.

**Then, when you are ready, break the constraint on purpose.** Add VRC6. Try LSDj on the Game Boy, or Furnace for the SID and the Genesis FM chips. Every one of them will feel easy after this, because you learned to arrange with five voices, and arranging is the part that transfers.

**And put it on hardware.** An EverDrive-style flash cart will play your NSF on a real NES through a real TV. Hearing something you wrote come out of a thirty-year-old console is a specific and excellent feeling, and it is the proof that you wrote a chiptune rather than an imitation of one.
