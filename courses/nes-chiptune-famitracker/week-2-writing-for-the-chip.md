# Week 2: Writing for the Chip

> **The thesis of this week:** you have four usable melodic voices and a piece of music needs melody, counter-melody, harmony, bass, and drums. The arithmetic does not work, and every technique in this week exists because a composer in the 1980s hit that exact wall. Arpeggio makes one voice sound like three. Echo makes one voice sound like a room. Careful scheduling makes one voice do two jobs at different moments. By Friday you will stop asking "how do I fit this in" and start writing music that was *designed* for five voices, which sounds completely different and much better.

---

# Day 8: Two Pulses, One Band

### Objectives
- Assign every part of an arrangement to a channel on purpose.
- Write a counter-melody on Pulse 2 that supports rather than competes.
- Make one channel do two jobs at different points in a bar.

### Listen (8 min)
**Mega Man, "Cut Man,"** twice. First pass: follow only Pulse 1. Second pass: follow only Pulse 2. What you should hear is that they are not "melody and harmony." They are two *characters* who take turns: when one holds a long note, the other moves. That call-and-response is the single most transferable arranging idea in NES music.

### Lecture

Time to be explicit about the budget. Here is what a normal pop arrangement wants, and what you have:

| Part | Wants a voice | You have |
|---|---|---|
| Melody | 1 | Pulse 1 |
| Counter-melody / harmony | 1–2 | Pulse 2 |
| Chords | 2–3 | (nothing) |
| Bass | 1 | Triangle |
| Kick, snare, hats | 3 | Noise (1) + optionally DMC |
| **Total wanted** | **8–10** | **5** |

You are short by half. There are exactly four ways out, and good NES writing uses all of them:

**1. Cut parts.** The most common and the most underrated. An enormous number of great NES tracks have **no chords at all**. Zelda's Overworld theme implies its harmony entirely through the bassline and the melody's note choices. If your melody outlines the chord and your bass states the root, a listener hears the chord that is not there. Learn to trust this.

**2. Fake parts.** Arpeggio (tomorrow) turns one voice into a chord. Echo (Day 10) turns one voice into two. Both are covered this week.

**3. Time-share a channel.** Pulse 2 plays a harmony line in bars 1–2, then a fill in bar 3, then a chord arpeggio in bar 4. A channel's job is per-bar, not per-song. This is where most beginners leave value on the table: they decide "Pulse 2 is the harmony channel" and then never use it for anything else.

**4. Take turns.** If Pulse 1 holds a whole note, Pulse 2 is free to be busy underneath it. Write the two lines so their activity is *interleaved*, not simultaneous. Two busy pulse lines at once is the most common way an amateur chiptune turns to mush.

**Writing the second pulse.** Practical rules, in order of usefulness:

- **Different duty from the lead.** If the lead is `V01` (25%), put the second on `V02` (50%) or `V00` (12.5%). Same duty on both pulses playing different notes is muddy in a specific, recognizable, amateur way.
- **Lower volume than the lead.** Lead at `F`, second pulse at `A`–`C`. There is no other way to establish foreground and background.
- **Sixths and thirds are your friends.** Harmonizing the melody a third or a sixth below is the most reliable way to make two pulse lines sound intentional. Fourths and fifths sound archaic and hollow (which is sometimes exactly what you want, and is why so much fantasy game music uses them).
- **Or do not harmonize at all.** A counter-melody that moves when the melody rests is more interesting than parallel thirds for 32 bars.

> **The mush test:** export or record eight bars and listen on phone speakers. If you cannot tell which line is the melody within two seconds, your duties are too similar or your volumes are too close. Fix it with duty first, volume second, and register third.

### Do
1. **(5 min) Budget your Project 1 loop.** Open it and write down, for each channel, what job it is doing in each bar. Find at least one bar where a channel is idle or repeating pointlessly. That is free real estate.
2. **(20 min) Write a counter-melody.** On Pulse 2 of your Project 1 loop, write a second line for all 8 bars. Requirements: a different duty from Pulse 1, a lower volume, and **it must move where the melody rests**. Do not write parallel thirds the whole way; do it for one phrase at most.
3. **(10 min) Time-share.** Pick one bar (a phrase ending is best) and give Pulse 2 a completely different job there: a quick fill, an octave stab, a descending run into the next phrase. Same channel, different role.
4. **(5 min) The mush test.** Play it back at low volume through the worst speaker you own. Adjust duty and volume until the melody is unmistakable.

### Daily drill
**Channel-solo listening, 3 min:** in any NES track, pick a single channel and narrate what job it does bar by bar. "Harmony, harmony, fill, harmony, arpeggio." Your goal is to see how often a channel changes jobs.

### Self-check
1. How many voices does a conventional arrangement want, and how many do you have?
2. Name the four strategies for closing that gap.
3. What are the three rules for making a second pulse line sit behind a lead?
4. Why do two pulse lines with the same duty cycle sound muddy?
5. What is "time-sharing" a channel, and why do beginners underuse it?

---

# Day 9: Arpeggio

### Objectives
- Explain why arpeggio exists and what it costs.
- Use the `0xy` effect and the arpeggio sequence, and choose between them.
- Write a chord bed for an entire section on one channel.

### Listen (8 min)
**Mega Man 2, "Dr. Wily Stage 1"** and then **Silver Surfer, "Level 1."** In Wily 1, the harmony under the lead is a fast burbling figure; that is a three-note arpeggio on one pulse channel, and your ear reads it as a chord. In Silver Surfer, the Follins run arpeggios so fast and so densely that the track sounds like it has eight voices. It has five.

### Lecture

**The problem:** a chord needs three voices, and you cannot spare three voices.

**The solution:** play the three notes of the chord *one at a time, extremely fast*, on a single voice. Above roughly 20 alternations per second, human hearing stops resolving them as separate notes and starts fusing them into a single buzzy timbre that carries the chord's harmony. This is arpeggio, and it is the defining sound of the era. Nobody chose it for its beauty; they chose it because it was the only way, and then it became beautiful because a generation grew up with it.

**Two ways to do it.**

**The `0xy` effect** starts arpeggio on a specific channel. `x` and `y` are semitone offsets above the played note, and the channel cycles root → root+`x` → root+`y`, one step per tick, until another pitch effect or `000` cancels it.

| Effect | On note C | Gives you |
|---|---|---|
| `047` | C | C, E, G: a **major** chord |
| `037` | C | C, Eb, G: a **minor** chord |
| `03A` | C | C, Eb, A#: a **minor 7th** |
| `048` | C | C, E, G#: **augmented** |
| `00C` | C | C, C, C+octave: an octave **shimmer**, not a chord |
| `057` | C | C, F, G: **sus4** |

Memorize `047` (major) and `037` (minor). Those two carry most of what you will write. Note the pattern: the second digit is the fifth (7 semitones), the first digit is the third (4 = major, 3 = minor).

**The arpeggio sequence** in an instrument does the same thing but as part of the instrument, so you do not have to type an effect on every row. An instrument with an arpeggio sequence of `0 4 7` looping *is* a major chord instrument: play C on it and you get C major, play G and you get G major. This is enormously convenient for a chord bed, and it is what most people use for sustained harmony.

**Speed matters, but not because the arpeggio clock changes.** The arpeggio steps once per tracker update, normally 60 times per second. What speed changes is **how many arpeggio steps fit inside a row or note length**. At Tempo 150 and speed 6, a row contains 6 steps, so a 3-note arpeggio cycles twice before the next row. At speed 3, a one-row note contains only one cycle; at speed 10, it contains more than three. Very short notes may not give the arpeggio enough time to state the chord clearly, while long held notes sound like a continuous buzzy chord.

**What arpeggio costs you.**

- **It is loud and busy.** An arpeggiated channel occupies a lot of psychoacoustic space. Pull its volume down, `8`–`A`, not `F`.
- **It cannot be subtle.** There is no soft arpeggio. If you want a quiet chord bed, use a 50% duty and low volume, and accept that it still buzzes.
- **It eats the channel.** An arpeggio on Pulse 2 means Pulse 2 is doing nothing else that bar.
- **Detuning it is impossible** in the usual way, so two arpeggios at once tend to phase against each other unpleasantly. Use one.

> **The most common beginner mistake with arpeggio:** running it at full volume for the entire song. Arpeggio is a texture, and a texture that never changes stops being heard within thirty seconds. Drop it out for a phrase. Bring it back for the chorus. Let it breathe.

**Fixed arpeggio for sound effects.** The arpeggio sequence has a **fixed** mode, where the values are absolute notes rather than offsets. In fixed mode the instrument plays the same pitches regardless of what note you enter, which is how you build a drum-like instrument on a pulse channel or a fixed sound effect. You will not need it often, but knowing it exists explains a lot of weird NES noises.

### Do
1. **(10 min) Chord vocabulary.** On Pulse 2, hold a single long C note. Apply `047`, listen. Then `037`. Then `03A`, `048`, `057`. Say out loud what each one is. Then move the root note around and hear the chord move with it.
2. **(10 min) Speed lab.** With `047` running, change the song speed from 6 to 3 to 10 to 16. Listen for how much of the chord fits inside one written row and how one-row notes change. The arpeggio clock itself stays at the tracker update rate; your row length is what changed.
3. **(20 min) Write a chord bed.** Build an instrument with an arpeggio sequence for a major chord and another for minor. Then, on Pulse 2 of your loop, write a chord progression underneath your melody, one chord per bar, using those instruments. Keep the volume around `9`. Play the whole thing with bass and drums. Your loop just became a piece of music.
4. **(5 min) Make it breathe.** Now delete the arpeggio for one entire bar somewhere in the 8. Listen to how much more the arpeggio means when it comes back.

### Daily drill
**Arpeggio hunting, 3 min:** in any NES track, find every arpeggio and name the chord. Are they major or minor? Do they change per bar? Does the composer drop them out?

### Self-check
1. Why does arpeggio exist on the NES?
2. What does `047` produce on a C? What about `037`?
3. What is the difference between the `0xy` effect and an instrument's arpeggio sequence, and when do you use each?
4. How does song speed change how an arpeggio fits inside written rows and note lengths?
5. Name two costs of using arpeggio.

---

# Day 10: Echo, Delay, and Faking Space

### Objectives
- Build a hardware echo using a second channel.
- Use volume envelopes and note delay to create depth without reverb.
- Know when *not* to echo.

### Listen (8 min)
**Metroid, "Brinstar"** and **Castlevania, "Vampire Killer."** Brinstar sounds like it is in a cave. There is no reverb on the NES. That sense of space comes entirely from writing choices: sparse notes, long decays, and echoed repeats. Listen for a note that repeats itself quieter a moment later; that repeat is a second channel playing the same note on purpose.

### Lecture

The 2A03 has **no reverb, no delay, no stereo, and no filter.** Space is not a processing decision on this chip, it is a *composition* decision. There are three ways to create it, and they are all manual.

**1. The echo channel.** Take the melody on Pulse 1, copy it to Pulse 2, shift it down by a few rows, and drop its volume. That is a delay line built out of notes.

```
Row  Pulse 1              Pulse 2 (echo)
00 | C-5 01 F ...         ... .. . ...
02 | ... .. . ...         C-5 01 8 ...
03 | E-5 01 F ...         ... .. . ...
05 | ... .. . ...         E-5 01 8 ...
06 | G-5 01 F ...         ... .. . ...
08 | ... .. . ...         G-5 01 8 ...
```

Two rows of delay, volume dropped from `F` to `8`, which is seven steps down and roughly halves the perceived loudness. Anywhere from five to eight steps works; less than four and it reads as a doubled part rather than an echo. Refinements that make it convincing:

- **Use a different, duller instrument** for the echo, ideally a 50% duty with a soft attack. Real echoes lose high frequencies; imitate that.
- **Two-row delay at 4 rows per beat** is an eighth-note echo and is the standard starting point. One row is a tight slapback. Three rows gives a dotted-eighth feel. Four rows is a quarter-note echo you should write on purpose.
- **A second echo** at even lower volume, if you have a channel free, sells it completely. You almost never have a channel free.
- Instead of moving rows, you can use **`Gxx` (note delay)** to offset the echo by a few ticks, which gets you sub-row delays for a tighter slapback.

**The catch, and it is the whole catch:** an echo costs you an entire channel. You have effectively spent Pulse 2 on ambience. In a sparse track (a cave theme, an ending theme, a menu) that is a superb trade. In a dense action theme it is a terrible one. Choose deliberately.

**2. Fake distance with the volume envelope.** A note that fades *in* over a few ticks and then decays reads as further away than a note that starts at full volume. Build a "distant" version of your lead instrument: attack `4 6 8 9 9`, loop on the sustain, duty 50%. Use it for background lines. This costs nothing.

**3. Space from silence.** With no reverb tail, a rest is a *hole*. That hole is a resource. Sparse writing with real silence between phrases sounds enormous on this chip; dense writing sounds claustrophobic. Brinstar's atmosphere is largely the notes Tanaka did not write.

**A related trick: the detune thickener.** Play the same note on both pulses and offset one slightly with `Pxx` (fine pitch; `80` is center, so try `P82` or `P7E`). The two waves beat against each other and produce a much fatter, chorused sound than either alone. Cost: both pulse channels, for one note. Use it on a big single-line hook, an intro stab, or the final chord, never for a whole song.

> **The rule for all three:** ambience costs voices, and voices are the scarcest thing you own. Ask of every echo, "is this worth more than a counter-melody?" Sometimes yes. Often no.

### Do
1. **(15 min) Build an echo.** Take your melody from Pulse 1, copy it to Pulse 2, move it down two rows, and set its volume six or seven steps lower. Make a duller instrument for it (50% duty, soft attack). Listen. Then try one-row and four-row delays and pick a favorite.
2. **(10 min) Was it worth it?** Now A/B: version A has the echo, version B replaces it with the counter-melody you wrote on Day 8. Which track is better? There is no universally right answer; the point is that you now *make the choice* instead of defaulting.
3. **(10 min) Distance instrument.** Build a "far away" lead (fade-in attack, 50% duty, mid volume) and rewrite a background phrase with it. Compare against the same phrase with your bright pluck.
4. **(10 min) Detune stab.** Write a single held note on both pulses, same pitch, one with `P82`. Then try `P84` and `P7C`. Find the amount of detune that sounds fat rather than out of tune.

### Daily drill
**Space audit, 3 min:** play back your current loop and count how many rows out of 64 have *nothing at all* sounding on the pulse channels. If the answer is near zero, you have no space. Cut something.

### Self-check
1. Why can you not use reverb on the 2A03?
2. How do you build an echo, and what three things make it convincing?
3. What does an echo cost, and when is that a bad trade?
4. How does a volume envelope create the impression of distance?
5. What does `Pxx` do, and what is the detune trick for?

---

# Day 11: Making a Square Wave Sing

### Objectives
- Apply vibrato, portamento, pitch slides, and hardware sweep correctly.
- Know which effects work on which channels.
- Give a static lead line a sense of performance.

### Listen (8 min)
**Ninja Gaiden, "Act 1-1"** and **Silver Surfer, "Level 1."** Both take a square wave and make it behave like a played instrument: notes bend into each other, held notes wobble, phrase endings fall away. None of that is in the chip; all of it is typed in one row at a time.

### Lecture

A pulse wave with no pitch movement sounds like a test tone. The vocabulary below is what turns it into a performance.

**Vibrato, `4xy`.** `x` is speed, `y` is depth. `403` is a gentle shimmer; `486` is a seasick wobble. Rules that keep it musical:

- **Apply it to sustained notes only.** Vibrato on eighth notes is inaudible clutter.
- **Delay it.** Real players do not start vibrato at the note's attack. Put the note on row 00 and the `4xy` on row 02 or 04, and it sounds like a human decided to lean on the note.
- **Turn it off.** `40y` (speed zero) cancels it. Vibrato persists on a channel until you cancel it, and a forgotten vibrato wobbling through your bassline is a classic debugging mystery.
- Depth of `2`–`4` for most things. Above `8` you are writing a sound effect, not a note.

**Portamento and slides.** Three related tools, easy to confuse:

| Effect | Behavior | Use for |
|---|---|---|
| `3xx` | **Auto-portamento**: glides to whatever note you type next, at speed `xx` | Legato lines, singing leads. The one you want most often |
| `1xx` / `2xx` | Portamento up / down at speed `xx`, **forever** until stopped | Sirens, risers, dives |
| `Qxy` / `Rxy` | Slide up/down exactly `y` semitones at speed `x`, then stop | Controlled bends, guitar-style pull-offs |

`3xx` is the workhorse. Put `301` on a channel and every subsequent note glides into place instead of jumping. Set it to `300` to turn it off. Slow values (`301`–`304`) are lyrical; fast values (`30F`+) are almost instant and just soften the note transition.

`Qxy` is the guitar bend: `Q34` slides up 4 semitones at speed 3. Perfect for the end of a phrase.

**Hardware sweep, `Hxy` and `Ixy`, pulse channels only.** This is the chip's own pitch-sweep unit, which is what makes NES sound effects sound like NES sound effects. `x` is the period (how fast it steps), `y` is the shift (how far each step moves). It is aggressive and slightly unruly, and it is not really a musical tool. It is a **sound effect** tool: jumps, lasers, power-ups, explosions. Two things to know:

- The sweep unit silences the channel if it drives the period out of range, which is a feature for sound effects and a bug for notes.
- It only exists on the pulse channels. The triangle and noise have no sweep.

**The pitch sequence, revisited.** An instrument's pitch sequence gives you all of the above *automatically*, per note. A pitch sequence of `0 0 0 0 0 0 1 -1 1 -1` looping is a delayed vibrato built into the instrument, with no effect column typed at all. If you find yourself typing `404` on every long note, build it into the instrument instead.

**Which effects work where.** Worth memorizing:

| Effect | Pulse | Triangle | Noise | DMC |
|---|---|---|---|---|
| `0xy` arpeggio | yes | yes | yes (jumps hiss pitch) | no |
| `4xy` vibrato | yes | yes | no meaningful use | no |
| `3xx`/`1xx`/`2xx`/`Qxy`/`Rxy` | yes | yes | no | no |
| `Axy` volume slide | yes | **no** | yes | no |
| `Vxx` | duty | no | noise mode | no |
| `Hxy`/`Ixy` sweep | **yes only** | no | no | no |
| `Gxx` delay, `Sxx` cut | yes | yes | yes | yes |

The triangle row is the one to remember: **it takes pitch effects but not volume effects**, because it has no volume.

### Do
1. **(10 min) Vibrato lab.** Hold a long note on Pulse 1. Try `402`, `404`, `408`, `4C8`. Then put the note on row 00 and the vibrato on row 04 and hear the difference the delay makes. Then cancel it with `400` and confirm the wobble stops.
2. **(10 min) Legato pass.** Take a phrase of your melody and add `302` at the start. Every note now glides. Decide whether you like it (often you will like it on some phrases and hate it on others; that judgment is the skill).
3. **(10 min) Phrase endings.** Find the last note of each phrase in your melody. Give one a `Q34` bend up, one an `R32` fall, and one a `Sxx` short cut. Three different punctuation marks.
4. **(10 min) Sound effect.** On Pulse 2, make a laser with `H` or `I` sweep plus a short volume envelope, and a power-up with a fast rising arpeggio. These are not for your song; they are for understanding what the sweep unit is.
5. **(5 min) Build it in.** Take the vibrato you liked best and implement it as a *pitch sequence* inside your lead instrument instead of an effect. Confirm it sounds the same.

### Daily drill
**One-note expression, 3 min:** play a single long note and make it interesting using only effects. Vibrato in, bend out, volume swell. Ten different ways to play one note.

### Self-check
1. What do `x` and `y` mean in `4xy`, and why should vibrato usually be delayed?
2. What is the difference between `3xx` and `Qxy`?
3. Which effects does the triangle channel *not* accept, and why?
4. What is the hardware sweep for, and which channels have it?
5. When should you move an effect into an instrument's pitch sequence instead?

---

# Day 12: Drums in Depth

### Objectives
- Write drum patterns with real groove out of one noise channel.
- Decide between a triangle kick and a DPCM kick.
- Load and trigger a DPCM sample, and account for what it costs.

### Listen (8 min)
**Journey to Silius, "Stage 1"** and **DuckTales, "The Moon."** Silius is the Sunsoft-style answer: sampled DPCM low end helps carry the bass while triangle and noise cover percussion. DuckTales gets a groove out of the noise channel alone. Both approaches are correct; they cost different things.

### Lecture

**Groove from one monophonic channel.** You cannot layer, so the entire groove lives in three variables: **which pitch**, **which volume**, and **which rows**. Techniques that pay off:

- **Hat volume variation is the groove.** A pattern of hats at volumes `6 3 4 3 6 3 4 3` swings, breathes, and sounds played. The same pattern at a flat `5` sounds like a machine. This is the highest-return five minutes you can spend on any beat.
- **Ghost notes.** A hat at volume `1` or `2` between the main hits adds motion without clutter. Use them just before the snare.
- **Steal from the snare.** Because the channel is monophonic, the hat that "should" be under a snare simply is not there. Do not fight this; write the snare so it lands where you want the hat to disappear.
- **Vary bar 4.** In an 8-bar loop, the fourth and eighth bars should differ from the others: an extra snare, a 16th-note fill, a dropped hat. Identical bars are the fastest way to make a loop unlistenable.
- **Increase your rows per beat if you need finer drums.** At 4 rows per beat you cannot place a 32nd-note flam. Move to 8 rows per beat and lower the speed value to compensate (for example, speed 6 becomes speed 3 at the same perceived BPM), and suddenly you can.

**The kick question.** Three options:

| Kick | Sound | Cost |
|---|---|---|
| **Triangle kick** (pitch dive) | Deep, thumpy, authentically NES | Your bassline stops for 2–3 rows |
| **Noise kick** (low pitch, short envelope) | Weak, more of a thud than a kick | Steals from the hats, and it never sounds great |
| **DPCM kick** (sample) | The best-sounding by far | ROM space, CPU time, and it ducks the triangle (see below) |

Most tracks use the triangle kick and accept the gap. Some bass-forward Sunsoft-style tracks use DPCM for bass or low end, freeing triangle and noise for percussion; other tracks use a DPCM kick or snare to protect a triangle bassline. Decide per song.

**DPCM in practice.** The DMC channel plays 1-bit delta-encoded samples: a single sample maxes out at **4,081 bytes**, playback runs at one of 16 fixed rates from about 4 kHz to 33 kHz, and everything is grainy and low-fidelity by nature. That graininess is the sound; do not fight it.

In the tracker, DPCM is set up on the instrument's DPCM tab. **Load** brings in a `.dmc` file that is already in the chip's format; **Import** takes a `.wav` and converts it, asking you for a quality setting and a conversion volume on the way in. Either way, you then **assign the sample to a specific note** on the keyboard, along with a pitch setting, and playing that note in the DPCM channel plays it. A drum kit is several samples mapped to several notes.

Three things to know before you load anything:

1. **Keep samples short.** A kick and a snare at a few hundred bytes each are fine. Long samples quickly eat ROM and DPCM address space, especially at higher playback rates. Trim aggressively before importing.
2. **Lower the rate to save space.** The quality setting you pick at import *is* the playback rate, and a lower rate means fewer bytes per second of sample. A kick converted at a low rate is muddier and much smaller, and on a kick nobody notices. The highest quality setting buys you fidelity you cannot hear under a mix and costs you most of your sample budget.
3. **DPCM ducks your triangle and noise.** This is the non-linear mixer at work: the triangle, noise, and DMC share a mixing group, and a loud DMC output level pulls the other two down. If your DPCM is a kick, the triangle bass may dip under the drums; if it is Sunsoft-style bass, it can pull down triangle/noise percussion. You can use it as a feature (it is a free sidechain-compression effect) or avoid it by keeping DPCM levels moderate.

> **A DPCM-free track is not a lesser track.** Most of the best NES soundtracks use little or no DPCM, because the ROM space was needed for the game. If you never load a sample in this course, you can still get a 100%. Use DPCM when the song needs weight the noise channel cannot give it, not because it is there.

### Do
1. **(10 min) Groove pass.** Take your Week 1 drum pattern and do nothing but edit hat volumes for ten minutes. Vary them bar by bar. Add two ghost notes before the snares. Play it before and after.
2. **(10 min) Fill the fourth bar.** Write a distinct fill in bar 4 and a bigger one in bar 8 of your loop. Use 16th-note snares (which means adding rows between your current hits) and a crash on the downbeat after.
3. **(10 min) Kick comparison.** Build all three kicks: triangle, noise, and if you can find a sample, DPCM. Play the same beat with each. Note which one you would use for a fast action theme and which for a slow atmospheric one.
4. **(10 min) DPCM setup** (optional but recommended). Find or record a short kick sample. Trim it to under a quarter second. Import it into an instrument's DPCM tab, assign it to a note, lower the playback rate until it is small but still recognizable, and trigger it in the DPCM channel. Listen for the triangle ducking.
5. **(5 min) Decide.** Write one sentence in your notes: which kick this track uses and why.

### Daily drill
**Volume-only groove, 3 min:** take a flat 8th-note hat pattern and give it a groove using nothing but the volume column. No new notes, no new pitches.

### Self-check
1. What are the three variables you have for making a groove on a monophonic noise channel?
2. What is the single highest-return edit you can make to a flat drum pattern?
3. Name the three kick options and their costs.
4. What is the maximum size of a single DPCM sample, and what two things does loading one cost?
5. Why does a loud DPCM sample make your triangle bass quieter?

---

# Day 13: Song Form (+ Quiz 2)

### Objectives
- Build a 32-bar structure out of patterns and frames.
- Set a loop point with `Bxx`.
- Take Quiz 2.

### Listen (8 min)
**Castlevania, "Vampire Killer,"** with a stopwatch. Time each section. Find the moment it loops and note whether you can hear the seam. Then do the same with any other NES track. You will find nearly all of them share a shape: a short intro, an A section, a B section, sometimes a C, then a loop back to A (not to the intro).

### Lecture

Everything so far has been an 8-bar loop. Today it becomes a song, and the mechanism is the **order list**.

**The standard NES form:**

```
Frame:   00      01 02 03 04    05 06 07 08    09 10 11 12
Section: INTRO   A  A  A' A     B  B  B' B     A  A  A' A  → loop to frame 01
```

- **Intro** (0–4 bars): often just drums, or a rising arpeggio, or a single stab. Its job is to get you to the A section. It plays once.
- **A section** (8–16 bars): the main theme. The thing people will hum.
- **B section** (8–16 bars): contrast. Change something structural: the key, the register, the density, the rhythm. A B section that is just A with a different melody is not contrast.
- **Loop back**, usually to the start of A, not to the intro. This is what `Bxx` is for: put `B01` on the last row of the last frame to jump back to frame 01.

**Why loop instead of end?** Because game music has to survive being heard for twenty minutes while a player is stuck on a boss. That constraint made NES composers extremely good at two things: writing themes that bear repetition, and hiding the loop seam. Both are worth learning even if you never write for a game.

**Hiding the seam.** The moment your track jumps back is the most exposed moment in it. Fixes:

- **Put a fill in the last bar** that leads into the first bar, exactly as if it were an internal transition.
- **End the last bar on a note or chord that wants to resolve** to the first bar's chord. The V chord going back to I is the oldest trick in music, and it works.
- **Do not let anything decay across the seam.** A long crash on the last row is cut off dead by the jump. Move it a bar earlier.
- **Listen to the loop ten times in a row.** If you flinch on the tenth, fix it.

**Reusing patterns intelligently.** The order list means A and A' can share drum and bass patterns while the pulses differ:

```
Frame  Pulse1  Pulse2  Triangle  Noise
  01     10      20       30      40     ← A
  02     11      20       30      40     ← A, melody continues, everything else repeats
  03     10      21       30      41     ← A', new harmony and a drum fill
  04     12      22       31      42     ← A ending, turnaround
```

Four frames, but only about half as many patterns as a copy-paste approach would need. When you decide the bass is wrong, you fix pattern 30 once.

**A practical build order** that avoids the most common trap (writing 8 bars forty times):

1. Get your A section fully working, all channels, 8–16 bars.
2. **Write the B section next, not the intro.** Contrast is harder than starting; do it while you are fresh.
3. Build the arrangement in the order list with just A and B.
4. Add transitions and fills at the seams (Day 16).
5. Write the intro last. It is easiest once you know what it introduces.

### Do
1. **(10 min) Set the frame plan.** On paper, sketch your song's frames: how many of A, how many of B, where the loop goes. Do this before touching the tracker. **Sketch for the capstone, not just for Project 2.** The capstone needs 90 seconds of unique material, which at 150 BPM is about 56 bars, and Project 2's 32-bar minimum is only about 51 seconds. Leave slots in the plan for the extra 20-odd bars (a C section, a longer B, an intro and an outro) and fill them in during Week 3 rather than discovering the shortfall on Day 21.
2. **(25 min) Write the B section.** Take your Project 1 material and write a genuine contrasting section. Requirements: change **at least two** of key/register/density/rhythm. Not just a new melody over the same everything.
3. **(10 min) Arrange it.** Set up the order list so the song plays A A B B A A. Reuse drum and bass patterns across frames rather than copying.
4. **(5 min) Loop it.** Put `B00` on the last row of the last frame. You have no intro yet, so frame 00 is the top of the music and `B00` is correct; when you add an intro on Day 16 you will change this to `B01` so the intro plays once. Listen to the loop five times and note whether the seam is audible. You will fix it properly on Day 16.

### Quiz 2
Take **Quiz 2** now (see `QUIZZES.md`), closed-book, and budget about 40 minutes on top of today's lesson. As with Quiz 1, tomorrow's studio day is the one acceptable place to move it. Grade against `ANSWER-KEYS.md`. It covers the voice budget, arpeggio, echo, pitch effects, drums, and song form.

### Self-check
1. What is the standard NES song form, and where does the loop return to?
2. What does `Bxx` do?
3. Name three ways to hide a loop seam.
4. Why does the order list let you write a song with far fewer patterns than copy-pasting would?
5. Why is it good practice to write the intro last?

---

# Day 14: Studio Day + Project 2

Consolidation. Three things.

### 1. Review the week
Answer every self-check from Days 8–13 from memory. The two that matter most for Week 3 are **arpeggio (Day 9)**, because it is in every arrangement from here on, and **song form (Day 13)**, because Week 3 assumes you have a two-section song to polish.

### 2. The arrangement audit (15 min)
Open your song. For every frame, write down what job each of the five channels is doing. Then look for these three specific failures:

- A channel that does the exact same thing in every frame (it is wasted).
- Two channels doing the same job at the same time (one of them is redundant).
- A frame where all four melodic channels are busy at once (that is your mush).

Fix one of each.

### 3. Project 2: The Two-Part Tune
Complete **Project 2** (see `PROJECTS.md`): a 32-bar A/B piece with arpeggiated harmony, a real drum pattern, and a working loop. This is your Project 1 loop grown up, and **it is the raw material for Project 3 and the capstone**, so choose material you are willing to spend another week with.

### Looking ahead
Week 2 gave you the composing techniques: how to fake chords, fake space, and spend five voices wisely. You have a song with two sections that loops.

Week 3 is **production and finish**. Groove (why your track feels stiff and what to do about it), transitions and fills (why it feels like disconnected blocks), mixing inside a non-linear hardware mixer with no EQ, a tour of the expansion chips that Famicom cartridges used to escape the five-voice limit, a full teardown of a professional track, and then export. By Day 21 you hand in an NSF.
