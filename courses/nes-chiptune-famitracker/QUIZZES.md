# Quizzes and Final Exam: MUS-8B

Rules: **closed book, tracker allowed only where a question says "do."** Write answers on paper (or out loud), then grade with `ANSWER-KEYS.md`. Passing = 90%. The "do" questions are graded by honest self-assessment against the stated standard; export and listen back if you are unsure.

---

## Quiz 1: The Chip & Five Voices *(Day 6 · 40 points · ~40 min)*

### Part A: The chip (8 pts, 1 each)
1. Name the five channels of the 2A03.
2. How many notes can sound simultaneously on the 2A03, in total?
3. Which channel has no volume control?
4. How many volume steps do the pulse and noise channels have?
5. How many *audibly distinct* duty cycles does a pulse channel have, and why is the answer not four?
6. Which duty setting is thin and nasal, and which is the fattest?
7. How many pitches does the noise channel have, are they musically spaced, and how does the tracker display them?
8. What is stored on an NES cartridge instead of recorded audio?

### Part B: The tracker (8 pts, 1 each)
1. What does an empty cell in the volume column mean?
2. What is the difference between a pattern and a frame?
3. What are the four sub-columns of a channel?
4. At Tempo 150, Speed 6, 4 rows per beat, what is the BPM?
5. What speed gives you 225 BPM at 4 rows per beat?
6. Why is it usually best to leave tempo at 150 and change speed instead?
7. Why is copy-pasting your drum pattern into every frame a mistake?
8. Which key inserts a note cut?

### Part C: Instruments (8 pts, 1 each)
1. Name the five sequence types available to a 2A03 instrument.
2. How often does a sequence step forward?
3. At speed 6, how many sequence steps happen per row?
4. What does the loop point do?
5. What does the release point do?
6. What is the difference between `---` and `===` in a pattern?
7. What does a short arpeggio sequence at the front of an instrument do to the sound?
8. Which way does a positive value in the pitch sequence bend a note, and why does a looping value of `1` make the note disappear?

### Part D: Triangle and noise (8 pts, 1 each)
1. Name the three things that replace volume dynamics on the triangle.
2. What octave range should triangle bass live in?
3. How do you make a kick drum out of the triangle channel?
4. What does a triangle kick cost you?
5. Why is NES bass writing typically busier than bass in other genres?
6. What does `V01` do on the noise channel, and what is it used for?
7. What is the only difference between a closed-hat and an open-hat noise instrument?
8. Roughly what volume range should hi-hats sit in?

### Part E: Do (8 pts) *(tracker allowed)*
1. (4) Build a plucked lead instrument from scratch, with a volume envelope that has a loop point and an attack blip in the arpeggio sequence. Self-score on whether a single held note is musical.
2. (4) Program one bar of a hat-and-snare backbeat on the noise channel with at least three different hat volumes. Self-score on whether it grooves.

---

## Quiz 2: Writing for the Chip *(Day 13 · 40 points · ~40 min)*

### Part A: The voice budget (8 pts, 1 each)
1. Roughly how many voices does a conventional pop arrangement want, and how many do you have?
2. Name the four strategies for closing that gap.
3. What does it mean to "time-share" a channel?
4. Name the three rules for making a second pulse line sit behind a lead.
5. Why do two pulse lines with the same duty sound muddy?
6. Which intervals are the most reliable for harmonizing a melody on the second pulse?
7. What is the "mush test"?
8. Name one famous NES track that has no chords at all and still implies harmony.

### Part B: Arpeggio (8 pts, 1 each)
1. Why does arpeggio exist on the NES?
2. What does `047` produce when played on a C?
3. What does `037` produce?
4. What produces a sus4?
5. What is the difference between the `0xy` effect and an instrument's arpeggio sequence?
6. How does song speed change how an arpeggio fits inside written rows and note lengths?
7. Name two costs of using arpeggio.
8. What is the most common beginner mistake with arpeggio?

### Part C: Echo and expression (8 pts, 1 each)
1. Why can you not use reverb on the 2A03?
2. Describe how to build an echo, including the delay amount and volume drop.
3. Name two things that make an echo more convincing.
4. What does an echo cost, and when is that a bad trade?
5. What does `Pxx` do, and what is the detune trick for?
6. What do `x` and `y` mean in `4xy`, and why should vibrato usually be delayed?
7. What is the difference between `3xx` and `Qxy`?
8. Which channels have the hardware sweep, and what is it really for?

### Part D: Drums and form (8 pts, 1 each)
1. What are the three variables available for making a groove on one monophonic noise channel?
2. What is the single highest-return edit to a flat drum pattern?
3. Name the three kick options and one cost of each.
4. What is the maximum size of a single DPCM sample?
5. Why does a loud DPCM sample make your triangle bass quieter?
6. What is the standard NES song form, and where does the loop return to?
7. What does `Bxx` do?
8. Name three ways to hide a loop seam.

### Part E: Do (8 pts) *(tracker allowed)*
1. (4) Write a four-bar chord progression on one pulse channel using arpeggio, with the arpeggio dropping out for one bar. Self-score on whether the harmony reads clearly.
2. (4) Take an existing eight-bar section and write a genuinely contrasting B section that changes at least two of key, register, density, or rhythm. Self-score on whether it contrasts.

---

## Final Exam *(Day 21 · 60 points · ~60 min)*

### Part A: Speed fundamentals (10 pts, 1 each; answer each in ≤15 s)
1. Five channels of the 2A03? 2. Which one has no volume control? 3. How many usable duty cycles? 4. How many noise pitches? 5. `047` on a C gives what chord? 6. What does `Bxx` do? 7. Speed at 4 rows/beat for 150 BPM? 8. Which key inserts a note cut? 9. How often does an instrument sequence step? 10. What file format do you export for a playable chiptune?

### Part B: The hardware (12 pts, 2 each)
1. Why does the triangle sound an octave lower than a pulse at the same period value?
2. What are the two noise modes, and what does the short one sound like and get used for?
3. What are the two non-linear mixer groups, and name one audible consequence of each.
4. What are the constraints on a DPCM sample (size, rate, fidelity)?
5. Why do the pulse channels go silent at very high pitches?
6. Why do these limitations exist at all? Answer in terms of 1983 hardware, not aesthetics.

### Part C: Composition (12 pts, 2 each)
1. You have melody, counter-melody, chords, bass, and a three-piece drum kit to fit into five monophonic voices. Describe your plan.
2. Explain arpeggio: what problem it solves, how it works perceptually, and one thing it costs.
3. How do you create the impression of space on a chip with no reverb? Name three methods.
4. What makes a B section a genuine contrast rather than just a different melody?
5. Where does a fill belong, and where do beginners wrongly put it?
6. Name four transition types and what each is best at.

### Part D: Production and mixing (12 pts, 2 each)
1. Give a working volume hierarchy for lead, counter-melody, arpeggio, snare, and hats.
2. Name three ways to separate two parts without EQ.
3. What is the most common chiptune mix error, and why is it physically fatiguing?
4. What does `Zxx` do, and why is it relevant to the triangle?
5. Name the three most common causes of a stiff, mechanical-sounding tracker part, and a fix for each.
6. Describe the phone test and the quiet test, and what each one tells you.

### Part E: Context and finishing (6 pts, 1 each)
1. Why does expansion audio exist on the Famicom but not the American NES?
2. What does the VRC6 add?
3. What does the VRC7 use for synthesis?
4. Name the most common technical bug at a loop point.
5. Which metadata fields should you fill in before exporting an NSF, and why?
6. Why is NES music an unusually good corpus to learn composition from?

### Part F: Do / Applied (8 pts) *(tracker allowed; export and listen back)*
1. (3) Build, from scratch in under fifteen minutes, a plucked lead, a soft pad, a triangle kick, a hi-hat, and a snare. Self-score on whether each is immediately usable.
2. (2) Take a flat one-bar drum pattern and make it groove using only the volume column and `Gxx`. Self-score on whether it sounds played.
3. (3) Run the ten-loop test on your capstone track. Self-score honestly on whether the seam is audible.
