# Week 1: The Machine & Your First Track

> **The thesis of this week:** before you can make a record, you have to stop being lost. Most people who give up on a Portastudio do not quit because the music is hard; they quit because the *machine* is opaque. They cannot find a function, they do not know where their sound went, and they record something quiet and hissy or loud and distorted and assume the gear is bad. Week 1 fixes exactly that. You will learn the machine as a mixer plus a tape deck, learn the signal flow that explains every problem, get a guitar or bass in cleanly, and record one part to tape that actually sounds good. None of this is "making a song" yet. All of it is the ground every song stands on. Make the machine transparent this week and the rest of the course is building on rock.

Before Day 1, read **Machine Reference §1–§3** (the machine, the signal flow, the connections) and load a fresh **Type II cassette**. Throughout, when a lecture says "set the level," it means *by the meter*, every time.

---

# Day 1: Meet the Machine

### Objectives
- Identify the three regions of the 424 MKIII and what each is for.
- Understand the machine as a **mixer plus a four-track tape deck**.
- Draw the signal flow, roughly, from memory.
- Load and handle a Type II tape correctly, and know why you do not flip it.

### Setup (5 min)
Put the machine in front of you. Without touching anything, find with your eyes: the **channel strips** (the columns of knobs and faders on the left), the **EQ knobs** and **faders**, the **cassette door** and the **transport buttons** (play, stop, rewind, fast-forward, record) on the right, the **RECORD FUNCTION switches** near the transport, the **tape counter**, the **master fader**, the **level meters**, and the **PHONES** jack. On the back, find the **inputs**, the **LINE OUT**, the four **TAPE OUT** jacks, the **EFFECT SEND** jacks, and the power. Name each one's job out loud. That is the whole physical machine.

### Lecture

**What a Portastudio is.** The Tascam 424 MKIII is two machines in one box: a **small mixing console** and a **four-track cassette recorder**. The console takes your instruments and shapes them; the recorder lays up to four separate parts onto one cassette; and the console mixes those four parts back down to a finished stereo track. You can make a whole record without anything else plugged in. ([Reference §1](SUPPLEMENT-machine-reference.md#1-the-machine-the-60-second-tour))

**The signal flow is the one idea that matters.** Sound takes a path through this machine, and almost every question you will ever have ("why is it quiet?", "why can't I hear it?", "where did my recording go?") is really *where on this path is the signal?* The path, in four stages:

```
  1. IN      a sound enters a CHANNEL; you shape it (trim, EQ, sends, pan, fader)
  2. TO TAPE you route the channel to one of 4 TRACKS and record it onto cassette
  3. MONITOR while recording, the CUE/MONITOR section lets you hear the tape in headphones
  4. OUT     at mixdown, all 4 tracks come back up the board and out to speakers/computer
```

Study the full diagram in [Reference §2](SUPPLEMENT-machine-reference.md#2-the-signal-flow-the-mental-model) now, with the machine in front of you, and point at the real control for each box. You will redraw this from memory by Day 6.

**The tape, briefly (full detail in [Reference §6](SUPPLEMENT-machine-reference.md#6-tape-dbx-the-medium)):**
- Use a **Type II (high-bias) cassette.** The machine is built for it; Type I sounds dull and wrong.
- The 424 records at **double cassette speed (3¾ ips)** for better sound. Leave it at high speed.
- **You do not flip the tape.** A four-track uses the *entire width* of the tape in one direction for its four tracks, so there is no "side B." A C-60 gives about 15 minutes of recording, a C-90 about 22.

> **The mental shift from a computer.** A DAW has unlimited tracks and infinite undo. This machine has **four tracks and no undo.** That is the whole discipline of the course: the limit forces you to commit, and committing is most of what makes recordings sound finished. Stop wishing it were a computer; the four-track is a different instrument.

### Do
1. **(8 min) Power up and tour.** Plug in headphones, power on, and find every control from the Setup step again, naming each one's job out loud until you do not hesitate.
2. **(7 min) Load the tape.** Open the cassette door, load your Type II tape, and close it. Press PLAY, then STOP, then RTZ (Return To Zero) and watch the counter. Zero the counter (the reset button by the counter). This is your "top of the song."
3. **(10 min) Draw the flow.** On paper, sketch the four-stage signal path from the diagram. Then put the paper away and redraw it from memory. Check it against [Reference §2](SUPPLEMENT-machine-reference.md#2-the-signal-flow-the-mental-model). Repeat until you can draw all four stages.
4. **(5 min) Clean the heads.** Eject the tape, power off, and learn the maintenance habit. Two different jobs, two different fluids: lightly wipe the **tape heads and the metal capstan shaft** with a cotton swab and head-cleaning fluid (high-purity isopropyl alcohol is fine on these metal parts), and clean the **rubber pinch roller** with a swab and a dedicated *rubber cleaner*. Do not use alcohol on the roller; it dries the rubber and hardens it over time ([Reference §6](SUPPLEMENT-machine-reference.md#6-tape-dbx-the-medium)). Do this whenever the daily Setup says "clean the heads if due"; dirty heads are the most common cause of a dull, muddy machine.

### Daily drill (start today)
**Name-the-control, 2 min:** point at five controls at random and say each one's job in under two seconds. Do it until you never hesitate. Knowing the names cold is what makes every later lesson readable.

### Self-check
1. What are the two machines a Portastudio combines in one box?
2. Name the four stages of the signal flow, in order.
3. What kind of cassette must you use, and why?
4. Why do you not flip a four-track tape, and roughly how long does a C-60 give you?
5. What is the single biggest difference in mindset between a four-track and a DAW?

---

# Day 2: The Channel Strip & the Meters

### Objectives
- Know every control on a mixer channel and what it does.
- Read the level meters and understand what they are telling you.
- Form the habit of **parking the fader at nominal, then setting trim by the meter**.

### Setup (5 min)
Plug a sound source into channel 1's **1/4" input**: a phone playing a song, a drum machine, or your guitar through a pedal (Day 3 covers why the pedal matters). Set the channel's **INPUT select** to **MIC/LINE** (not OFF or TAPE). Get the source playing.

### Lecture

A **channel strip** is the row of controls for one input. The 424's mono channels (1–6) have these, top to bottom ([Reference §4](SUPPLEMENT-machine-reference.md#4-the-channel-strip)):

| Control | What it does |
|---|---|
| **INPUT select** | The channel's source: **MIC/LINE** (the live input), **OFF** (channel muted), or **TAPE** (the tape return, used at mixdown). Stay on **MIC/LINE** while tracking. Mic vs. line is not a switch position: the jack you use sets it (XLR for a mic, 1/4" for a pedal/instrument/player), and TRIM dials the matching gain range |
| **TRIM** | input gain: how hard the channel boosts the incoming signal. The most important knob to set right |
| **EQ HIGH** | treble shelf, ±10 dB at 10 kHz |
| **EQ MID** | sweepable mid, ±12 dB, center movable 250 Hz–5 kHz |
| **EQ LOW** | bass shelf, ±10 dB at 100 Hz |
| **EFFECT 1 / 2** | how much of this channel feeds the effect sends (start at zero) |
| **PAN** | left/right placement, and which buss the channel feeds (left buss → tracks 1/3, right → 2/4) |
| **FADER** | the channel's volume |

**The meters are the truth.** The 424's level meters show how strong the signal is. Your job, forever, is to keep signals **strong but not clipping**: the meter should bounce up near the top on the loudest part and never slam the ceiling. Watch the meter, not the knob. A knob at "3 o'clock" tells you nothing; the meter tells you everything.

**Park the fader at nominal, then set trim by the meter.** The order that matters: first set the **channel fader** to its nominal mark (the shaded zone near the top of its travel) and leave it there. This matters because on this machine the channel fader is *in the record path*: when you record DIRECT (Day 4) the channel fader sets the level going to tape, and the master fader does that job when you record through the BUSS. So park the fader, then get the source playing its loudest and raise the **trim** until the meter is healthy, *then* worry about EQ. If you set trim wrong, nothing downstream can save you: too low buries the part in hiss, too high distorts it. (This is "gain staging," and we drill it all course; [Reference §9](SUPPLEMENT-machine-reference.md#9-gain-staging-reference).)

**The EQ is broad and musical.** These three knobs are for fixing obvious problems and carving space, not surgery. The **swept mid** is the most useful: to find a bad frequency, boost the mid and sweep its center until the ugliness jumps out, then cut there instead. Leave EQ flat until you have a reason to move it.

> **The one rule of this whole machine:** set the level by the meter, every time, before you do anything else. Ninety percent of bad home recordings are a trim that was never set. It takes ten seconds.

### Do
1. **(10 min) Trim by the meter.** With the source at its loudest, slowly raise the trim from zero until the meter reads strong but never clips. Then deliberately set it way too low (hear the part get weak and you have to crank everything) and way too high (hear it distort). Reset to healthy. Repeat five times until the healthy setting is instant.
2. **(10 min) EQ exploration.** With the source playing, sweep the **MID** center while boosting, and hear different frequency ranges jump out. Then try the HIGH and LOW shelves: add and cut, and learn what each sounds like. Return all EQ to flat.
3. **(5 min) Pan and fader.** Move the PAN fully left, fully right, center; then move the **channel fader** up and down and *watch the meter move with it.* This is the thing to internalize: the channel fader sits *after* the trim and *in the record path*, so it sets your level to tape, not just the volume you hear in the phones. Set trim with the fader parked at its nominal mark, then leave the fader there while tracking; you will use it as a mix-balance control later, at mixdown.

### Daily drill
**Ten-second level set, 3 min:** start the source, set a healthy trim by the meter, stop, repeat. Make it a reflex you never skip no matter how eager you are to record.

### Self-check
1. In what order do you set the fader, trim, and EQ, and why?
2. What does the meter tell you that the knob position does not?
3. What is the target the meter should show on the loudest part?
4. How do you use the swept mid to *find* a frequency you want to cut?
5. For a pedal or instrument output, which jack do you use, and what do you set the INPUT select to?

---

# Day 3: Getting Guitar & Bass In

### Objectives
- Understand the impedance problem and why a passive guitar straight in sounds thin.
- Use a pedal (or DI) as a buffer between instrument and machine.
- Set the input and trim correctly for a guitar/bass signal.

### Setup (5 min)
Have your guitar or bass, at least one pedal (or a DI box), and two 1/4" cables. You will plug the instrument straight in first, then through the pedal, and compare.

### Lecture

Here is the most important technical idea for a guitarist or bassist using this machine, and the reason "pedals feeding in" is the right way to do it.

**A passive guitar or bass has a high-impedance output.** Its pickups want to feed a very high input impedance (around 1 MΩ is ideal). The 424's line input is only **5.6 kΩ**, far lower. Plug a bare passive instrument straight in and the input *loads down* the pickups: you lose treble (the tone goes dull and dark) and you lose level (it gets quiet, so you crank the trim and add noise). It will sound weak and lifeless, and it is not your playing or the machine; it is an impedance mismatch. ([Reference §7](SUPPLEMENT-machine-reference.md#7-instruments-pedals-impedance))

**A pedal fixes it, because a pedal is a buffer.** Almost any powered pedal (especially buffered-bypass pedals like classic Boss units) presents a friendly high impedance to your guitar and a strong, **low-impedance, line-friendly output** to whatever is next. So the pedal does two jobs at once: it shapes your tone *and* it drives the 424's input properly.

```
  passive guitar ─► (any powered/buffered pedal) ─► 424 LINE in   =  full, strong, bright
  passive guitar ─────────────────────────────────► 424 LINE in   =  dull, dark, quiet
```

Practical rules:
- **Always put at least one pedal or a DI box between a passive instrument and the 424.** Even an always-on buffer, compressor, or light overdrive transforms the sound.
- **Active basses and active guitars** already have a buffered output and drive the machine fine on their own.
- A **DI box** is the clean, uncolored version of the same fix, but mind its output. Most DI boxes put out a *balanced, mic-level signal on an XLR*, so a DI goes into the **MIC (XLR) input** (channels 1–4), not the LINE input. A buffer or preamp pedal with a **line-level 1/4" output** goes into the **LINE** input like any pedal. (A DI's 1/4" "thru" jack is just the untouched instrument signal and fixes nothing; do not run it into LINE expecting the impedance fix.)
- Set the channel **INPUT select to MIC/LINE**, then pick the jack: the **1/4" input** for a pedal/line-level output, or the **XLR** for a DI's mic-level output. Park the channel fader at nominal and set **TRIM** by the meter as always.

> **This is why a pedalboard and a Portastudio are a natural pair.** Your pedals are not just effects here; they are your front end, your buffer, and your tone all at once. Lean into it.

### Do
1. **(8 min) Hear the problem.** Plug the passive guitar/bass **straight** into channel 1's 1/4" jack (INPUT select = MIC/LINE), set a healthy trim, and record-monitor it. Listen: note how dull and how quiet it is, and how high you had to push the trim.
2. **(10 min) Hear the fix.** Now run the same instrument **through a pedal** (even a buffer or a clean boost) into channel 1. Reset the trim by the meter. Listen: the highs return, the level is stronger, the trim sits lower. This difference is impedance.
3. **(7 min) Find your front end.** Decide what goes between your instrument and the 424 as a default (a favorite always-on pedal, a buffer, or a DI). Set its level so the meter reads healthy. This is your recording front end for the rest of the course.

### Daily drill
**Front-end check, 2 min:** plug in your instrument-through-pedal chain and set a clean trim by the meter from scratch. Build the reflex of always going *through something* and always checking the meter.

### Self-check
1. Why does a passive guitar plugged straight into the line input sound thin and quiet?
2. What is the input impedance of the 424's line input, and what does a passive pickup want to see?
3. How does a pedal solve the problem?
4. Which instruments can drive the machine fine on their own, and why?
5. Which jack and INPUT select setting, and what level procedure, do you use for a guitar/pedal signal?

---

# Day 4: Recording to Tape

### Objectives
- Understand the RECORD FUNCTION switches (SAFE / DIRECT / BUSS).
- Arm a track and record a part DIRECT.
- Use the transport and the counter, and protect finished tracks with SAFE.

### Setup (5 min)
Your instrument-through-pedal chain into channel 1's 1/4" jack, INPUT select = MIC/LINE, trim set by the meter. Zero the tape counter. Find the four **RECORD FUNCTION switches** near the transport.

### Lecture

This is the heart of "recording to tape." Each of the four tracks has its own **RECORD FUNCTION switch** with three positions ([Reference §5](SUPPLEMENT-machine-reference.md#5-recording-the-record-function-switches-transport)):

| Position | Meaning | Where the track's sound comes from |
|---|---|---|
| **SAFE** | protected; cannot record | nothing (this guards a finished take) |
| **DIRECT** | records from its same-numbered channel | track 1 ← ch 1, track 2 ← ch 2, track 3 ← ch 3, track 4 ← ch 4 |
| **BUSS** | records from the stereo buss | left buss → tracks 1 & 3; right buss → tracks 2 & 4 (PAN chooses) |

**DIRECT is the simple path and what you will use today.** Plug into channel 1, set track 1's switch to DIRECT, and channel 1 now records to track 1. Because all four switches can be DIRECT at once, you could record all four tracks at the same time (a whole band). **BUSS** is for blending several channels onto a track and is how you bounce and submix; we get there in Week 2.

**Arming and rolling:**
1. Set track 1's RECORD FUNCTION to **DIRECT**. The track is now armed; its meter shows your incoming level.
2. Leave the other three tracks on **SAFE** so nothing else can be touched.
3. To record: hold **RECORD** and press **PLAY**. Tape rolls and track 1 records. Press **STOP** to end.
4. Rewind (or **RTZ** to the zero point) and press **PLAY** to hear it back.

**The counter is your map.** With the counter zeroed at the top, write down counter numbers for landmarks (where the verse starts, where you flubbed a note). **RTZ** snaps you back to `0000`. You navigate a song by the counter; learn to trust it.

> **SAFE is not optional.** The instant a take is good, set its track to SAFE. There is no undo on tape: a track left armed can be recorded over and the take is gone forever. "Good take → SAFE" should become as automatic as locking your front door.

### Do
1. **(10 min) Arm and record.** Set track 1 to DIRECT, the rest to SAFE. Hold RECORD + PLAY and record 30–60 seconds of your part. STOP. RTZ. PLAY it back. You just recorded to tape.
2. **(10 min) Counter navigation.** Record a second pass on track 1 (over the first, since you are practicing). Note the counter number where you start a phrase. STOP, RTZ, fast-forward to that number, and confirm the phrase is there. Get comfortable moving by the counter.
3. **(7 min) Protect it.** When a take is decent, set track 1 to **SAFE**. Try to record again and confirm it will not. Then back to DIRECT to keep practicing. Internalize the SAFE habit.

### Daily drill
**Arm-route-roll, 3 min:** pick a track at random, set it to DIRECT, confirm its meter, record five seconds, STOP, set it to SAFE. Do it for each of the four tracks until arming and protecting is a reflex.

### Self-check
1. Name the three RECORD FUNCTION positions and what each does.
2. In DIRECT, which channel feeds track 3?
3. What two transport buttons do you use to start recording?
4. What does RTZ do, and why do you zero the counter at the top of a song?
5. What must you do to a track the moment its take is good, and why?

---

# Day 5: Levels to Tape, dbx & Saturation

### Objectives
- Gain-stage a recording to tape: strong and clean.
- Understand what dbx is doing and keep it set right.
- Hear tape saturation and use it on purpose.
- Set a basic monitor so you hear what you are recording.

### Setup (5 min)
Your front end into channel 1, track 1 armed DIRECT, counter zeroed. Confirm **dbx is on**.

### Lecture

You can record now; today you record *well*. Three ideas.

**Gain staging to tape.** The signal passes through several stages (trim, channel fader, the recording electronics, the tape itself), and each needs a healthy level. The rule is the same everywhere: **loud but never clipping.** With your part at its loudest, set trim by the meter so peaks sit near the top without slamming it. Too quiet and the part is buried in tape hiss and weak when you turn it up; too loud and it distorts harshly. ([Reference §9](SUPPLEMENT-machine-reference.md#9-gain-staging-reference))

**dbx noise reduction.** Cassette tape hisses. **dbx** removes most of that hiss by *companding*: it compresses the signal going onto tape and expands it back on playback, pushing the hiss far below the music. Two things to remember ([Reference §6](SUPPLEMENT-machine-reference.md#6-tape-dbx-the-medium)):
- **Keep dbx on** for both recording and playback. It only tracks correctly if it is on for both.
- It can occasionally "breathe" on very sparse, percussive material, but for guitar and bass it is almost always a clean win. The only time you deliberately turn it off is for a *sync tone* on track 4 (Week 2 / advanced), not for normal audio.

**Tape saturation is a feature, not a bug.** Push a strong (but not clipping) level onto analog tape and it adds gentle warmth and a soft compression as it nears its limit. This is the sound people buy these machines for: it can make a thin guitar sound fuller and a clean bass sound rounder. The trick is the difference between **saturation** (a strong level that flatters the sound) and **clipping** (an overloaded level that wrecks it). You learn the line by ear: push the level up until it sounds the best, and back off the instant it sounds bad.

**Monitoring.** You need to *hear* what you are recording. With headphones in PHONES, the machine lets you monitor the armed track's input and the tape as it plays. Set the phones level so you can hear yourself comfortably; the monitor/cue section gets a full treatment on Day 6 and in Week 2 when you overdub.

### Do
1. **(12 min) The level ladder.** Record the same short part three times to track 1: once deliberately too quiet, once clipping/too hot, once set right by the meter. Play all three back and listen to hiss vs distortion vs clean. Burn the difference into your ears.
2. **(10 min) Find the saturation.** Record your part at a healthy level, then a touch hotter, then hotter again, stopping just before it sounds bad. Play them back and pick the level that sounds *best*, not just "loudest." That sweet spot is what you are aiming for from now on.
3. **(5 min) dbx check.** Confirm dbx is on. (If your unit lets you, briefly record a quiet passage with dbx off and on and hear the difference in hiss on playback, then leave it on.)

### Daily drill
**Best-sound level, 3 min:** set a level by the meter, then trust your ears for the final nudge: hotter until it is best, back off the moment it is worse. Train the ear, not just the eye.

### Self-check
1. What is the target level for recording to tape, and what are the two failure modes?
2. What does dbx do, and why must it be on for both record and playback?
3. What is tape saturation, and how is it different from clipping?
4. When is the only time you deliberately defeat dbx?
5. Why does setting the level by the meter still need a final check by ear?

---

# Day 6: Listening Back, the Monitor Section & Quiz 1

### Objectives
- Use the monitor/cue section to hear tape playback and your input.
- Judge a take honestly and decide whether to keep or re-record.
- Take Quiz 1.

### Setup (5 min)
Headphones in. A recorded take on track 1. Find the **monitor / cue** controls and the master section.

### Lecture

**Listening back is the engineer's core skill.** Your sense of a take while you play it is always more flattering than the recording. The fastest improvement in recording comes from playing a take back **cold** and asking, plainly, "what is wrong with this?" Levels, timing, tone, noise: the tape does not lie.

**The monitor / cue section** is how you hear things. The 424 MKIII gives you a dedicated **TAPE CUE** system: a small four-into-one mixer (one **TAPE CUE** knob per tape track) that feeds tape playback to your headphones, kept separate from the main mix so the channel faders stay free for the inputs you record. To hear a track today: set the master **EFFECT 2 / TAPE CUE** switch to **TAPE CUE**, set the **MONITOR SELECT** (LINE OUT) switch to **L-R**, raise that track's **TAPE CUE** knob, and set **MONITOR LEVEL** for a comfortable volume. The full recipe is in [Reference §2, "Monitor and cue: a known-good setup"](SUPPLEMENT-machine-reference.md#monitor-and-cue-a-known-good-setup); you will lean on it hard in Week 2 when you overdub against a click. Today, just play a track back, set a comfortable phones level, and hear it clearly.

**A simple keep-or-redo standard.** Play the take back and check, in order:
1. **Level:** strong and clean, not buried in hiss, not distorted?
2. **Noise:** any clicks, hum, or pops that will haunt the mix?
3. **Timing:** does it feel steady (you will add a click in Week 2, which makes this objective)?
4. **Tone:** does it sound like you want, or does it need a different front end / EQ?
5. **Performance:** is the playing good enough to build a song on?

If it fails 1 or 2, re-record (those are not fixable later). If it fails 4, change the front end and re-record. Performance you can sometimes fix with a punch-in (Week 2).

> **"I basically played it" is not done.** A take that is close but noisy, or close but rushed, is a 70, not a 95. The standard for a kept track is *clean and steady*, because everything you stack on top inherits its problems.

### Do
1. **(10 min) Critical listen.** Play your best track-1 take back twice: once on headphones, once on any other speaker (a phone speaker is fine). Write down one problem with level, one with noise, one with tone. Hearing it on two systems exposes things one hides.
2. **(10 min) Re-record to the standard.** Fix the biggest problem (reset the level, change the front end, clean a noisy cable) and record the take again to beat it. Confirm by listening back.
3. **(5 min)** Set finished take to **SAFE**.

### Quiz 1
Take **Quiz 1** now (see [QUIZZES.md](QUIZZES.md)), closed-book. Grade against [ANSWER-KEYS.md](ANSWER-KEYS.md). It covers the machine, signal flow, the channel strip, gain staging, getting instruments in, recording to tape, and dbx/tape: Week 1's whole technical core. If you score below 90%, re-study the weak spot on tomorrow's studio day.

### Self-check
1. Why is listening back cold more honest than judging while you play?
2. What does the monitor/cue section let you hear while you record a new part?
3. List the five-point keep-or-redo standard.
4. Which two problems are *not* fixable later and force a re-record?
5. Why does the quality of a kept track matter so much for everything you add on top?

---

# Day 7: Studio Day + Project 1

Today is consolidation, not new material. "Studio day" is your catch-up-and-lock-it-in day. Three things:

### 1. Review the week
Reread the self-checks for Days 1–6 and answer every one from memory. Anything you fumble, reread that lecture and do the task at the machine. The two skills everything later rests on are the **signal flow (Day 1)** and **gain staging by the meter (Days 2 and 5)**, so spend the most time there. Redraw the signal-flow diagram from memory one more time.

### 2. The "clean capture" drill (15 min)
Record three different short parts (clean guitar, driven guitar, bass), each set by the meter and checked by ear, each played back and judged against the five-point standard. The goal is a clean, strong, noise-free capture *every time*, fast, with no fiddling.

### 3. Project 1: One Great Track
Begin **Project 1** (see [PROJECTS.md](PROJECTS.md)). It asks you to record a single guitar or bass part to tape that sounds genuinely good: clean level, no noise, a tone you like, through your pedal front end. This is the Domain 1–5 test and the proof that Week 1's foundation is solid. It is due end of Day 7 (or carry into the Week-2 studio day if you genuinely need it, but do not let it slide; everything ahead stands on a clean capture).

### Looking ahead
Week 1 was the **foundation**: the machine, the signal flow, clean levels, and one good track on tape. Right now you can capture a part that sounds good. **Week 2 is building a song**: keeping time to a click track, overdubbing parts that lock together, punching in to fix mistakes, and bouncing tracks so a full arrangement fits on four. From here on, the level-setting and routing should fade into reflex so your attention is free for the music.
