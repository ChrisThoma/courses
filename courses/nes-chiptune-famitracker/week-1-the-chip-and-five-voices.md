# Week 1: The Chip & Five Voices

> **The thesis of this week:** a chiptune is not a genre, it is an *instrument*, and the instrument is five monophonic voices with fixed timbres and no effects. Week 1 is spent meeting each of those voices individually and learning what it will and will not do for you. By Day 7 you will have a four-voice loop that sounds like a video game, and more importantly you will have stopped thinking "how do I get around this limitation" and started thinking "what does this limitation want me to write." That shift is the whole course.

Every example in this week is written in tracker notation. `C-4` means the note C in octave 4; `01` is an instrument number; the volume column is hex `0`–`F`; `...` means an empty cell, which always means *keep doing what you were doing*. The [Field Guide](SUPPLEMENT-the-chip-and-the-tracker.md) has the full keyboard map and effect list; keep it open in a second tab all week.

---

# Day 1: Five Voices

### Objectives
- Say what the 2A03 is and name its five channels and their limits.
- Get FamiTracker installed and making sound.
- Enter one note on each channel and hear the difference.

### Listen (5 min)
Put on **Super Mario Bros., "Overworld"**. You have heard it ten thousand times; today listen *analytically*. Try to count the simultaneous voices. There is a melody, a second line harmonizing it, a bouncing bass, and a shuffling percussion noise. That is four. There is a fifth voice, and it is mostly used for sound effects. This piece is the reason the whole course fits in three weeks: the constraint is small enough to hold in your head on day one.

### Setup (10 min)
Install the tracker before you read further. [Field Guide §3](SUPPLEMENT-the-chip-and-the-tracker.md) walks through it. The short version: download **Dn-FamiTracker** from its GitHub releases page, unzip it, run the exe (Windows), or run it under Wine (Mac/Linux). If playback crackles, raise the audio buffer in Settings. Do not spend more than fifteen minutes on this; if you are stuck, install [FamiStudio](https://famistudio.org/) instead and follow along conceptually.

### Lecture

**What a chiptune actually is.** Early game consoles could not stream recorded audio; there was no room on the cartridge and no CPU time to spare. Instead, the console contained a small **sound synthesis chip**, and the "music file" on the cartridge was a list of instructions telling that chip which registers to write, sixty times a second. A chiptune is music written *as those instructions*. Everything you hear is generated live by the hardware. That is why it has no reverb, no stereo, no dynamics beyond sixteen volume steps: nothing was recorded, so there was nothing to process.

**Your instrument is the Ricoh 2A03**, the chip inside every NES. Five channels, all monophonic:

| Channel | Sound | The catch |
|---|---|---|
| **Pulse 1** | Square/pulse wave, 3 usable timbres | 16 volume steps |
| **Pulse 2** | Identical | Identical |
| **Triangle** | A stepped triangle wave, deep and buzzy | **No volume control whatsoever** |
| **Noise** | Hiss, and a pitched metallic buzz mode | Only 16 pitches, unevenly spaced |
| **DMC** | Real recorded samples | Tiny, grainy, expensive |

Read that table again and notice what it implies for composing. **Five monophonic voices means five notes maximum.** A three-note chord costs three of your five. Melody, bass, drums, and a chord is already five voices with nothing left for a counter-melody or a fill. That arithmetic is the central compositional problem of this course, and Week 2 is entirely about solving it.

**Why the limits are shaped the way they are.** These are not arbitrary. The pulse channels are cheap square-wave generators, so they got the full feature set: volume, duty, sweep. The triangle was implemented as a fixed 32-step counter, and giving it a volume multiplier would have cost transistors, so it does not have one. The noise channel is a 15-bit shift register, which is about the cheapest randomness a circuit can make. The DMC is a delta counter, which is the cheapest possible sample playback. Every limitation you are about to work around was a cost decision in 1983.

> **The single most useful reframe in this course:** you are not writing music and then squeezing it onto a chip. You are writing music *for* an instrument that has five monophonic voices, the way a composer writes for a string quartet. Nobody complains that a string quartet only has four players.

### Do
1. **(5 min) Open a new module.** File → New. You should see five vertical channel strips labeled Pulse 1, Pulse 2, Triangle, Noise, and DPCM. Press **Space** to enter edit mode; the pattern border changes color when you can type.
2. **(10 min) One note on each voice.** Put the cursor in Pulse 1's note column at row 00 and press `Q` (that is C in the octave above your base octave). Press **Ctrl+Enter** to audition that single row; plain **Enter** starts and stops playback of the whole song. Now do the same on Pulse 2, then Triangle, then Noise. Type the same key on every channel and listen to how radically different the same "note" sounds. On Noise, notice the column does not even show a note name: it shows a hex pitch like `C-#`, because that channel has 16 hiss pitches and nothing else.
3. **(10 min) Meet the range.** On Pulse 1, enter a note, then step the base octave with the numpad `/` and `*` keys and enter the same key again several rows apart. Walk it from octave 1 up to octave 7. Find the point where it gets thin and the point where it stops sounding at all. Do the same on Triangle and notice it goes *lower* and gets muddy *higher*. Write down the usable range you found for each; you will use these numbers all course.
4. **(5 min) Save.** Save as `day01.ftm`. Start the versioning habit now.

### Daily drill (start today)
**Voice ID, 3 min:** put on any NES track. Name out loud which channel is playing each thing you hear. "That's pulse 1, that's the triangle, that's noise." Being able to hear the channel is the foundational ear skill of this course.

### Self-check
1. Name the five channels of the 2A03.
2. Which channel has no volume control, and what does that mean for writing bass?
3. How many notes can sound at once on this chip, in total?
4. Why does a three-note chord cost so much on the NES?
5. What is a chiptune, in terms of what is stored on the cartridge?

---

# Day 2: The Tracker

### Objectives
- Read a tracker screen: rows, patterns, frames, and the order list.
- Enter, edit, copy, and transpose notes fluently.
- Set speed and tempo, and explain how they relate to BPM.

### Listen (5 min)
**The Legend of Zelda, "Overworld."** Count the bars. Notice it is built out of a handful of repeating blocks with small variations. Tracker music is *made* of blocks; the format encourages it. Today you learn the container that holds them.

### Lecture

A tracker is a **spreadsheet that plays downward**. Time runs top to bottom, one row at a time, and nothing happens between rows. The four words you need:

**Row.** One time slice. By default 64 rows make a pattern, and with 4 rows to a beat that is 16 beats, or 4 bars of 4/4.

**Columns.** Each channel has four sub-columns:

```
        note  instrument  volume  effect
Pulse1: C-4      01          A     4 0 3
```

`C-4` is the note. `01` says which instrument to play it with. `A` is volume (hex, so `F` is loudest and `0` is silent). `4 0 3` is the effect `403`, a vibrato. **A blank cell means "no change."** If you set volume `A` on row 0 and leave it blank for the next sixty rows, it stays at `A`. This is the most important convention in the whole format and the source of most beginner confusion: things persist.

**Pattern.** A numbered block of rows covering all five channels. Patterns are reusable.

**Frame.** One row of the **order list**, the small grid usually at the top or left. It says *which pattern each channel plays right now*:

```
Frame   Pulse1  Pulse2  Triangle  Noise  DPCM
  00      00      00       00      00     00
  01      01      01       00      00     00
  02      02      01       01      00     00
```

Look at frame 01: the pulses moved on to new patterns while the triangle and noise kept playing pattern 00. That is the whole power of the order list. **Your drum loop is written once and referenced forty times.** Beginners who copy-paste their drums into every pattern make files that are miserable to edit; when you decide on Day 19 to change the snare, you want to change it in one place.

**Speed and tempo.** FamiTracker's default NTSC engine updates 60 times a second, and each update is a **tick**. Two numbers turn ticks into music:

- **Speed** = how many ticks each row lasts. Default **6**.
- **Tempo** = a scaling factor. Default **150**.

At Tempo 150, Speed 6 with 4 rows per beat gives 6 × 4 = 24 ticks per beat, and 3,600 ticks per minute ÷ 24 = 150 BPM. The displayed-BPM formula:

```
BPM = (24 × Tempo) / (Speed × RowsPerBeat)
```

> **Leave Tempo at 150 and change Speed.** Other tempo values can land on fractional tick counts per row, which makes some rows a tick longer than others and puts a subtle stagger in your groove. Speed 6 = 150 BPM, speed 8 = 112.5, speed 5 = 180, speed 4 = 225. Want more grid resolution at the same tempo? Use more rows per beat and lower the speed value: 8 rows per beat at speed 3 is still 150 BPM, and you get double the timing resolution for drums and delays.

You can change speed mid-song with the `Fxx` effect: `F06` sets speed 6, `F04` sets speed 4.

### Do
1. **(10 min) Navigate.** In a new module, practice: `Tab` to move between channels, arrow keys to move by row, `Home`/`End`, Page Up/Down. Step the base octave with numpad `/` and `*`. Type a scale down Pulse 1 (Z X C V B N M then Q W E R T Y U) and play it back. Delete it with the Delete key.
2. **(10 min) Block editing.** Enter eight notes. Select them (Shift+arrows or click-drag), copy (Ctrl+C), move down eight rows, paste (Ctrl+V). Then with the block still selected, transpose it: `Ctrl+F1`/`Ctrl+F2` move it a semitone down/up and `Ctrl+F3`/`Ctrl+F4` move it an octave down/up. Fluency with block operations is 80% of tracker speed.
3. **(10 min) Frames and patterns.** Write a four-note figure in pattern 00 on Pulse 1. In the order list, add a new frame and set Pulse 1 to pattern 01. Write a *different* figure there. Now set frame 02 back to pattern 00. Play the whole song and hear A-B-A. You just arranged something.
4. **(10 min) Tempo lab.** With a simple repeating figure playing, use `F04`, `F06`, `F08` on row 00 and listen. Then change the module's Tempo away from 150 and back. Get a feel for what speed number corresponds to what tempo, because you will pick a speed before you write anything from now on.

### Daily drill
**Blind entry, 3 min:** pick a simple melody you know (Happy Birthday, a nursery rhyme) and enter it into Pulse 1 by ear, without looking up the notes. Wrong notes are fine; the drill is the typing and the ear, not the accuracy.

### Self-check
1. What does an empty cell in the volume column mean?
2. What is the difference between a pattern and a frame?
3. Why is it a mistake to copy-paste your drum pattern into every frame?
4. At Tempo 150, Speed 6, 4 rows per beat, what is the BPM? What about at Speed 4?
5. Why should you generally leave tempo at 150?

---

# Day 3: The Pulse Channels

### Objectives
- Describe the four duty settings and pick the right one for a part.
- Use the volume column to shape a melody.
- Write an eight-bar melody on Pulse 1 that sounds intentional.

### Listen (5 min)
**Mega Man 2, "Dr. Wily Stage 1."** Focus entirely on the lead. Hear how *thin and cutting* it is; that is a narrow duty cycle. Now find the second pulse underneath. It has a different, fuller character. Two identical pieces of hardware, made to sound like two different instruments purely by duty and volume.

### Lecture

The two pulse channels are your melodic instruments. They are identical to each other, and each has exactly three things you can change: **pitch**, **volume**, and **duty cycle**.

**Duty cycle** is the fraction of each wave cycle spent at the high value. It is the pulse channel's only timbre control, and there are four settings:

| `Vxx` | Duty | Sounds like |
|---|---|---|
| `V00` | 12.5% | Thin, nasal, reedy. A clarinet with a cold. Cuts through anything |
| `V01` | 25% | The classic NES lead. Bright, present, full enough to carry a tune |
| `V02` | 50% | A true square. Hollow and round, the fattest of the set. Good for warm leads and pads |
| `V03` | 25% inverted | **Identical to `V01` by ear.** It is the same wave upside down |

Three timbres, not four. Do not go hunting for a difference in `V03`; on its own there isn't one. (It matters only in phase interactions with the other pulse, which is a Week 3 curiosity.)

Here is the thing that trips up everyone coming from a DAW: **narrower is not thinner in the mix**. 12.5% has *more* upper harmonic content, so it is the one that cuts through a busy arrangement. 50% has the strongest fundamental, so it sounds fat solo but can disappear under noise and triangle. Choose duty for the *role*, not for how nice it sounds alone.

**Volume** is the hex column, `0` (silent) to `F` (loudest). Sixteen steps total. A few consequences:

- A fade from `F` to `0` in four rows is *audibly steppy*. If you want a smooth fade you need many rows, or the `Axy` volume-slide effect, or a volume envelope (tomorrow).
- Volume is your only mixing tool on this channel. There is no fader, no EQ, no compressor. If the lead is too loud against the bass, you type a smaller number.
- Accents are done by hand. `C` on the downbeat and `9` on the offbeats gives a part a pulse that a flat `A` everywhere never will.

**Two ways to set duty.** The `Vxx` effect changes it right now, on that row. An instrument's **duty sequence** (tomorrow) changes it automatically over the course of a note. Use `Vxx` when a whole section should have a different character; use the sequence when a single note should.

**Writing a melody for this chip.** Some practical guidance that comes straight from the hardware:

- **Octave 4 and 5 are the sweet spot** for pulse leads. Below octave 3 the pulses get muddy and step on the triangle; above 6 they get shrill and eventually silence themselves.
- **Silence is a note.** With no reverb, a rest is *total*. Use `---` (the `1` key) deliberately to end phrases; the abruptness is part of the sound, and dense continuous playing is the fastest way to make a chiptune tiring.
- **Repetition is not a weakness here.** A four-bar hook stated twice with a small change is the entire form of most NES themes. You have five voices; the listener needs handholds.

### Do
1. **(10 min) Duty lab.** On Pulse 1, write a simple four-note figure and loop it. On row 00, try `V00`, then `V01`, then `V02`. Listen to each for a full loop before switching. Write yourself a one-line note about what you would use each for. This is your palette; know it cold.
2. **(20 min) Write eight bars.** On Pulse 1 only, at speed 6, write an **8-bar melody** (that is 128 rows at 64 rows per pattern, so two patterns, or use one 128-row pattern). Rules: pick a key and stay in it, keep it in octaves 4–5, and make it a **question-and-answer** shape (four bars that go up and end unresolved, four bars that come back down and land home). Use `---` to end phrases cleanly.
3. **(10 min) Shape it with volume.** Go back through and set the volume column deliberately: louder on downbeats and on the notes you want the ear to catch, quieter on passing notes. Play before and after. This step is what separates "notes entered into a tracker" from "a melody."

### Daily drill
**Duty roulette, 3 min:** loop a 2-bar phrase and change duty every loop with `Vxx`, naming out loud what each one does to the phrase's role ("that's a lead, that's a flute, that's a background pad").

### Self-check
1. How many *audibly distinct* duty cycles does the pulse channel have, and why is the answer not four?
2. Which duty cuts through a busy mix best, and why is that counterintuitive?
3. How many volume steps are there, and what does that mean for fades?
4. What octave range is the sweet spot for a pulse lead?
5. What is the difference between setting duty with `Vxx` and setting it in an instrument's duty sequence?

---

# Day 4: Instruments Are Sequences

### Objectives
- Build a 2A03 instrument from volume, arpeggio, pitch, and duty sequences.
- Use loop points and release points correctly.
- Make three usable instruments: a pluck, a sustained lead, and a soft pad.

### Listen (5 min)
**Mega Man, "Cut Man."** Listen to the *attack* of the lead notes. There is a tiny blip of pitch and volume at the front of each one that makes it read as "plucked" rather than "switched on." That is an instrument envelope, and it is four values in a list.

### Lecture

An instrument in FamiTracker is not a sample and not a preset. It is **up to five sequences**, each a list of numbers that gets stepped through **once per tracker update**. With Tempo 150, that means one value per tick: at speed 6, six values are consumed per row, so a 12-value sequence lasts exactly two rows.

| Sequence | Range | Job |
|---|---|---|
| **Volume** | 0–15 | Amplitude envelope: attack, decay, sustain |
| **Arpeggio** | semitones | Pitch offsets per tick. Chords, or an attack "blip" |
| **Pitch** | signed, accumulating | Slow bends and drifts. **Positive bends down, negative bends up** |
| **Hi-Pitch** | signed, coarse | Fast wide sweeps, same inversion |
| **Duty** | 0–3 | Timbre change over the note |

**Two markers make a sequence musical:**

- The **loop point** is where the sequence jumps back to when it reaches the end. Everything from the loop point on repeats forever while the note is held. This is your **sustain**.
- The **release point** separates the held part from the tail. Values after the release point only play when the note is **released** (`===`, the `-` key), not when it is **cut** (`---`, the `1` key). This is your **release**.

Here is a plucked lead's volume sequence, written the way the editor shows it:

```
step:   0  1  2  3  4  5  6  7  8  9 10 11
value: 15 15 13 11 10  9  9  8  8  8  8  8
                              ^loop
```

Loud attack, quick decay, then a held sustain at 8. Two rows of attack at speed 6, then it holds. Compare with a soft pad:

```
step:   0  1  2  3  4  5  6  7  8  9 10 11 12
value:  0  2  4  6  8  9 10 11 12 12 12 12 12
                                    ^loop
```

That fades *in* over two rows. On a chip with no filter, a slow volume ramp is how you get "soft."

**The attack blip.** The single highest-value trick on this instrument screen: put a short arpeggio sequence at the front of a lead instrument.

```
arpeggio:  12  7  0  0  0  0
                  ^loop
```

For one tick the note plays an octave up, for the next tick a fifth up, and then it settles on the actual note and stays there. Your ear does not hear "three notes"; it hears a **percussive, plucky attack**. This one trick is responsible for a huge amount of what people think of as "the NES sound." Vary the numbers: `24 0` is a sharp blip, `-12 0 0` is a swoop up from below, `5 0` is a gentle chirp.

**The duty sequence** gives you pseudo-PWM. A duty sequence of `2 1 0 1` looping produces a wobbling, chorused timbre that a static duty cannot. Slow it down (repeat each value several times) and you get a slowly opening pad. This is the closest the 2A03 gets to a filter sweep.

**The pitch sequence accumulates, and it runs upside down.** Two things surprise everyone here, so learn them together.

First, the values are added to the channel's *period*, not its frequency, and a longer period is a lower note. So **a positive value bends the pitch down and a negative value bends it up.** Up is down. Every chiptune musician has been bitten by this; write it on a sticky note. Note that this applies to the pitch and hi-pitch sequences only. The arpeggio sequence above is in plain semitones and behaves the way you expect: `12` is an octave up.

Second, it accumulates. A pitch sequence of `1` looping does not lower the note by one step, it lowers it by one step *every tick*, forever, and the note dives out of hearing within a second. That runaway is exactly what you want for a kick drum (Day 5) and exactly what you do not want on a lead. To make a settling "wobble" instead, alternate: `2 -2 2 -2` looping, which cancels out to a vibrato.

> **How to know if an instrument is good:** play a single note with it and hold it. If the note is boring held out, the instrument is boring, and no amount of good melody writing will fix it. Fix the envelope, not the notes.

### Do
1. **(10 min) A plucked lead.** New instrument. Volume sequence: `15 15 13 11 10 9 9 8` with the loop on the last value. Give it a duty sequence too, a single value of `1`, which pins the instrument to 25% duty wherever you use it. Play a melody with it. Then remove the loop point and hear what happens (the note goes silent after the sequence ends). Put it back.
2. **(10 min) Add the blip.** Give that instrument an arpeggio sequence of `12 7 0` with the loop on the `0`. Play the same melody. The change should be obvious and delightful. Try `24 0`, try `-5 0`, and keep the one you like.
3. **(10 min) A soft pad.** New instrument, volume `0 2 4 6 8 10 12 12` looping on the last, and a duty sequence of `2 2 2 1 1 1` looping so the timbre moves while the note is held. Hold a long note with it.
4. **(10 min) A release tail.** Take your pluck, add a release point, and put `6 4 2 0` after it. Now in the pattern, end a note with `===` (note release, the `-` key) instead of `---` (note cut, the `1` key) and hear the fade. Understand the difference: cut is instant, release plays the tail.
5. **(5 min) Save your instruments.** These three are your starter kit. You will refine them all course. Save as `day04.ftm`.

### Daily drill
**One-note test, 3 min:** for any instrument you build, play exactly one long note and listen to it for ten seconds. If you get bored, the envelope needs work. Fix it before writing anything with it.

### Self-check
1. How often does a sequence step forward, and how many steps is that per row at speed 6?
2. What does the loop point do? The release point?
3. What is the difference between `---` and `===` in a pattern?
4. What does a short arpeggio sequence at the front of an instrument do to the sound, and why?
5. Which direction does a positive value in the pitch sequence bend a note, and why does a looping value of `1` make the note disappear?

---

# Day 5: The Triangle

### Objectives
- Write a bassline on the triangle that carries a song.
- Work around the absence of volume control.
- Build a kick drum out of the triangle channel.

### Listen (5 min)
**Journey to Silius, "Stage 1."** This is the reference recording for NES bass. Follow only the low part. Notice that it is *busy*: it moves constantly, uses passing notes and octave jumps, and never just sits on a root note. That is not a stylistic accident, it is a workaround, and today's lecture explains why.

### Lecture

The triangle channel is your bass, and it comes with one enormous restriction: **it has no volume control.** None. It is on at full level, or it is off. You cannot fade it directly, accent it with normal volume commands, or mix it down like a DAW channel.

Think about what that removes. On a normal bass you shape a groove with dynamics: loud on the one, softer on the pickup notes. Here, every note is the same loudness. So NES bass writing evolved three replacements for dynamics:

**1. Note length is your dynamics.** A short note (cut with `---` a row or two later, or with `Sxx` for a tick-level cut such as `S02`) reads as light and staccato. A long note reads as heavy. Sixteenth-note staccato bass under a sustained melody creates exactly the sense of motion a volume envelope would.

**2. Register is your emphasis.** Dropping an octave on the downbeat and coming back up feels like an accent, because the low note has more perceived weight. Octave jumps are everywhere in NES bass for this reason.

**3. Motion is your interest.** Since you cannot vary loudness, you vary *notes*. Walking basslines, arpeggiated root-fifth-octave figures, and passing tones are why NES bass is so much busier than, say, a synth-pop bassline. Listen to Silius again with this in mind.

**Practical range.** The triangle sounds an octave below a pulse at the same period value, so it reaches genuinely low. Live in **octaves 1 through 3**. Above octave 4 it stops reading as bass and starts sounding like a thin buzzy lead, which is occasionally useful and usually a mistake.

**The triangle kick drum.** Here is the classic trick, and you will use it in every project. Take a triangle note in a low octave and give its instrument a steep downward pitch sequence:

```
volume:   (n/a on triangle; nonzero volume values only keep it sounding)
pitch:    0  8  16  24  32  40  48   (positive = downward, and it accumulates, so it dives fast)
```

Those values are positive because, as Day 4 covered, the pitch sequence adds to the period: positive is down. Played as a very short note (two or three rows), that is a **kick drum**: a thump with a fast pitch drop, exactly like a real kick's beater transient. Because it accumulates, the pitch runs away downward and the note goes sub-audible in a fraction of a second, which is the sound you want.

> **The cost, and it is real:** every kick you play on the triangle is a moment where your bassline is not playing. This is the first genuine voice-budget decision of the course. Most NES tracks accept it: the bass drops out for two rows on each kick and your ear fills in the gap. Some tracks put the kick on DPCM instead to protect the bass. Decide per song.

**Fading the unfadeable.** You have three options when you need the triangle to get quieter, and none of them is a volume control:
- Cut it and let silence do the work.
- Shorten the notes so it is present less of the time.
- Use the `Zxx` effect (DMC delta counter) to change the level of the whole triangle/noise/DMC mixer group. This is a real technique and a Week 3 topic; it affects all three of those channels at once.

In FamiTracker, a triangle volume or volume-envelope value of `0` can silence the channel, but values `1` through `F` are not a usable loudness scale. Treat them as gates, not dynamics.

### Do
1. **(10 min) Range hunt.** Enter the same note on the triangle in octaves 1, 2, 3, 4, and 5. Find where it stops being bass. Note it down.
2. **(15 min) Write a bassline.** Under yesterday's melody, write **8 bars of triangle bass**. Requirements: it must move at least every half bar, it must use at least one octave jump, and it must use note length (short vs long) as its dynamics. Play the melody and bass together. This is the first time your track will sound like a track.
3. **(10 min) Build the kick.** New instrument for the triangle with an accumulating downward pitch sequence as above. Test it on a low note lasting two rows. Tune the sequence values until it thumps rather than buzzing or clicking.
4. **(10 min) Kick in the bassline.** Now put the kick on beats 1 and 3 *inside* your bassline, accepting that the bass drops out for those rows. Listen for whether the gap bothers you. If it does, try moving the kick to a row where the bass was resting anyway. This negotiation is the job.

### Daily drill
**Bass-only pass, 3 min:** play any NES track and follow only the triangle. Ask: how often does it move? Does it drop out for kicks? Does it jump octaves? Steal one thing you hear.

### Self-check
1. What can you not do to the triangle channel, and what three things replace it?
2. What octave range should triangle bass live in?
3. How do you make a kick drum out of the triangle?
4. What does a triangle kick cost you, and how do NES composers handle that cost?
5. Why is NES bass writing typically busier than bass in other genres?

---

# Day 6: The Noise Channel (+ Quiz 1)

### Objectives
- Build a snare, a hi-hat, and an open hat from the noise channel.
- Use both noise modes and know what the periodic mode is for.
- Program a drum pattern that grooves.
- Take Quiz 1.

### Listen (5 min)
**Castlevania, "Vampire Killer."** Follow only the noise channel. Hear a distinct hi-hat pattern, a snare, and occasional crashes, all from *one* monophonic hiss generator. The variation is entirely from pitch and envelope.

### Lecture

The noise channel makes pseudo-random noise from a 15-bit shift register. You get two controls: **16 pitches** and **two modes**.

**The 16 pitches** come from a lookup table and they are not musically spaced. The tracker is honest about this: the noise channel's note column does not show note names at all, it shows a hex pitch, `0-#` through `F-#`. `0-#` is the lowest, slowest grind and `F-#` is the brightest, fastest hiss. You still enter them from the same piano keys, but do not think of them as notes; think of them as **sixteen numbered hiss flavors**. Learn them by ear: enter all sixteen in a row and listen down the list.

**The two modes** are switched with `V00` and `V01`, or with the instrument's duty sequence:

- `V00` is normal noise: the shift register runs a 32,767-step sequence, which reads to the ear as white noise. This is your drum mode.
- `V01` is **periodic mode**: the feedback comes from a different bit and the sequence collapses to 93 steps, short enough that your ear hears it as **a pitched metallic buzz**. This is where NES lasers, engine drones, and R2-D2 noises come from. It is a genuinely different instrument, and most beginners never touch it.

**A whole drum kit from one voice.** The kit is not made of different sounds; it is made of the same hiss with different **pitch** and **volume envelope**:

| Drum | Noise pitch | Volume sequence | Notes |
|---|---|---|---|
| **Closed hat** | High, around `D-#`–`F-#` | `6 3 1 0` | Very short. Quiet, so it doesn't dominate |
| **Open hat** | Same as the closed hat | `8 7 6 5 4 3 2 1 0` | Same pitch, longer decay. That's the only difference |
| **Snare** | Mid, around `7-#`–`A-#` | `15 12 10 8 6 4 2 0` | Louder, mid-pitched, a decay of about half a beat |
| **Crash** | Mid-high, around `B-#` | `15 14 13 12 ... 0` (long) | Long decay, used sparingly |
| **Kick** | Low, around `2-#`, or use the triangle | `15 10 5 0` | Noise kicks are weak; the triangle kick is better |

Those pitch suggestions are starting points, not gospel. When today's first exercise disagrees with this table, trust your ears.

Notice what that table is telling you: **an open hat and a closed hat are the same instrument with different envelope lengths.** That realization is how you get a five-piece kit out of a channel that can only hiss.

**Groove on one monophonic channel.** Since the noise channel is monophonic, you cannot play a hat and a snare at once. Every drum pattern is therefore a single line where the hat drops out whenever the snare hits. In practice this sounds completely natural, because that is also roughly what a drummer's ear picks out. The one thing to watch: **the snare must be loud enough and the hats quiet enough** that the alternation reads as a groove rather than a stutter. Hats around volume `4`–`6`, snare around `C`–`F`.

A basic backbeat, at 4 rows per beat, one bar:

```
Row  Noise
00 | E-# 02 5 ...    hat
02 | E-# 02 4 ...    hat
04 | 8-# 03 D ...    SNARE
06 | E-# 02 4 ...    hat
08 | E-# 02 5 ...    hat
10 | E-# 02 4 ...    hat
12 | 8-# 03 D ...    SNARE
14 | E-# 02 6 ...    hat (slightly louder as a pickup)
```

Rows 04 and 12 are beats 2 and 4, so the snares land on the backbeat and the hats fill the eighths around them.

That is the skeleton of half the NES catalog. Vary it by changing hat volumes, dropping a hat, or adding a 16th-note pair before the snare.

### Do
1. **(10 min) Pitch tour.** On the noise channel, enter all sixteen pitches, `0-#` through `F-#`, on consecutive rows and play them. Listen down the list and write down which three you would use for a hat, a snare, and a crash. This list is worth more than any table in this lesson.
2. **(10 min) Build the kit.** Make three noise instruments as in the table: hat (short decay), snare (medium), crash (long). Keep them clearly labeled, since you will use them for the rest of the course.
3. **(10 min) Periodic mode.** Switch to `V01` and play a few notes. Then write a two-second descending laser sound with it. This is not a drum; it is a whole other instrument, and it is worth knowing it exists.
4. **(10 min) Write the beat.** Program **one bar** of the backbeat above, then copy it out to fill 8 bars, then go back and *vary* two of those bars (drop a hat, add a 16th, make one snare louder). Play it against your melody and bass from Days 3 and 5.

### Quiz 1
Take **Quiz 1** now (see `QUIZZES.md`), closed-book, and budget about 40 minutes for it on top of today's lesson. If that makes today too long, take it first thing tomorrow on the studio day instead, but do not push it further than that. Grade against `ANSWER-KEYS.md`. It covers the chip, the tracker, the pulse channels, instrument sequences, the triangle, and the noise channel: the whole technical core of Week 1. Below 90%, re-study the weak area on tomorrow's studio day.

### Self-check
1. How many noise pitches are there, and are they musically spaced?
2. What does `V01` do on the noise channel, and what is it used for?
3. What is the only difference between a closed hat and an open hat instrument?
4. Why can a noise drum pattern never play a hat and a snare simultaneously, and why does that sound fine anyway?
5. What volume range keeps hats from dominating a groove?

---

# Day 7: Studio Day + Project 1

Today is consolidation, not new material. Three things.

### 1. Review the week
Reread the self-checks for Days 1–6 and answer every one from memory. The two things everything later depends on are **instrument sequences (Day 4)** and **the voice-budget thinking that started on Day 5** (the kick that costs you a bass note). If either is shaky, that is where the time goes.

### 2. The instrument bank drill (15 min)
Open a new module and build, from scratch, without looking at your old file: a plucked lead, a soft pad, a triangle bass, a triangle kick, a hat, and a snare. Six instruments in fifteen minutes. Do this until it is muscle memory, because from Week 2 on you want to be spending your session writing music, not rebuilding a hi-hat.

### 3. Project 1: The Four-Voice Loop
Begin **Project 1** (see `PROJECTS.md`). It asks for an 8-bar loop using all four of the main channels, with your own instruments, that repeats without an audible bump. It is the proof that Week 1's foundation is real, and **it becomes the raw material for Project 2**, so make it something you want to keep living with.

### Looking ahead
Week 1 was about the **instrument**: five voices, what each one does, and how to build sounds on them. You can now make a loop that unmistakably sounds like an NES game.

Week 2 is about **composing** for it. The central problem: you have four melodic-ish voices and you need melody, counter-melody, harmony, bass, and drums, which is five or six parts. Week 2 teaches the techniques the NES generation invented to solve that arithmetic: arpeggio to fake chords out of one voice, echo to fake space, and a set of choices about what to leave out. That is where a loop becomes a piece of music.
