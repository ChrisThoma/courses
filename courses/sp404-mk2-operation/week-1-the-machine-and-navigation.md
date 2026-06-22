# Week 1: The Machine, Navigation & Signal

> **The thesis of this week:** before you can do anything musical, you have to stop being lost. Most beginners quit the SP-404 MK2 not because the music is hard but because the *machine* is opaque: they cannot find functions, they do not know where their sound went, and they lose work. Week 1 fixes exactly that. You will learn the anatomy, learn to navigate any menu, understand how sound flows in and out, set clean levels, play and edit a sample, and make saving a reflex. None of this is beatmaking. All of it is the ground every beat stands on. Spend the week making the machine *transparent*, and the rest of the course is building on rock.

Before Day 1, read the first five sections of the [Machine Reference](SUPPLEMENT-machine-reference.md) and **update your firmware** as it instructs. Throughout, "save your project" means the actual save command, done as a reflex.

---

# Day 1: Meet the SP-404 MK2

### Objectives
- Identify every major part of the machine and what it is for.
- Power up, understand that everything lives on the SD card in projects, and load a project.
- Confirm your firmware is current.
- Save a project, and back up the card, and know why both matter.

### Orient (5 min)
Put the machine in front of you with the screen at the top. Without pressing anything, find with your eyes: the **16 pads**, the **bank buttons** down their left, the **screen** and the **[VALUE] knob**, the **[CTRL] knobs**, **[REC]**, **[SHIFT]**, **[PATTERN SELECT]**, the **pitch/speed knob**, the **[SUB PAD]**, and on the back the **inputs**, **outputs**, **MIDI**, **USB-C**, and the **microSD slot**. Name each one's job out loud. That is the whole physical machine; everything else is software inside it.

### Lecture

**What the SP-404 MK2 is.** At heart it is a **sampler**: a machine that records short pieces of sound and plays them back from buttons. But the MK2 is more than that. It is also a **four-bus effects processor**, a **pattern sequencer**, a **DJ mixer**, and a **USB audio interface**, all in one box. This course is the tour of all of it. The reason it can feel overwhelming is that one small screen and a handful of buttons have to control five different machines. The good news: they all obey the same navigation logic, which you learn tomorrow.

**Everything lives on the microSD card, organized into projects** ([Reference §3](SUPPLEMENT-machine-reference.md)). A **project** is one self-contained world: 10 banks of 16 pads, its patterns, its tempo, its settings. The card can hold many projects and you switch between them from the menu. When you power on, the machine loads a project and lands in **sample mode** with the pads lit, ready to play. Internalize "the card holds projects, a project holds banks, a bank holds 16 pads" and the storage model is done.

**Firmware is not optional** ([Reference, top](SUPPLEMENT-machine-reference.md)). The MK2 shipped fairly bare and grew into a powerhouse through updates: the step sequencer, most effects, DJ mode, the crossfader, and Serato support all arrived later. The latest system program is **Version 5.52**. If your machine is older, whole lessons in this course will reference features you do not have. Update before Day 2.

**Saving is the habit that keeps you in the hobby.** The SP holds recent work in volatile memory; an explicit **save** writes it to the card. Power off without saving and you lose what you did. Pull the card mid-write and you can corrupt the whole project. So: **save before every power-off, save often during a session, and back up the whole card weekly.** This is the single most important operating habit on the machine, which is why it is Day 1.

### Do
1. **(8 min) Power up and tour.** Plug in headphones, power on, let it land in sample mode. Press pads and hear the factory samples. Point to and name each control from the Orient step, out loud, again.
2. **(10 min) Confirm firmware.** Find the version number in the system menu (you will learn the menu properly tomorrow; today just hunt for it). If it is below 5.52, follow Roland's updater now using the SP-404 MK2 app, before continuing the course.
3. **(7 min) Save and back up.** Do an explicit save of the project ([Reference §3](SUPPLEMENT-machine-reference.md)). Then power off, remove the card, put it in a computer, and copy the entire card folder somewhere safe. Reinsert. You now have a backup and the beginning of a reflex.

### Daily drill (start today)
**Name-the-control, 2 min:** point at five controls at random and say each one's job in under two seconds. Do it until you never hesitate. Knowing the names cold is what makes the lessons readable.

### Self-check
1. Name the five "machines" the SP-404 MK2 is in one box.
2. What holds projects, what does a project hold, and how many pads is that in total?
3. What does an explicit save actually do, and when must you do it?
4. What is the one action that can corrupt a project, and how do you avoid it?
5. Why does the course insist you update firmware before Day 2?

---

# Day 2: Navigation, the Screen & the System Menu

### Objectives
- Master the core navigation gesture: function, then [VALUE], then pad.
- Read the screen to know what every knob and pad does right now.
- Open the system/utility menu and change settings.
- Configure the machine once: brightness, auto-off, pad sensitivity, metronome.

### Orient (3 min)
Press [SHIFT] and hold it. Look at the small words printed near each button: those are the *second functions* [SHIFT] reaches. Let go. Turn the [VALUE] knob one notch and watch the screen change. Press the [VALUE] knob and watch it enter something; find the way back out. You are feeling the two controls that drive the entire interface.

### Lecture

**The one gesture that runs the whole machine.** Almost every operation on the SP is the same shape:

```
  press a function button  →  turn / press [VALUE]  →  act on a pad
  (often while holding SHIFT)   (move and choose)        (apply it)
```

Want to set a pad's play mode? Hold the function, turn [VALUE] to the setting, the choice lands on the pad. Want a system setting? Open the menu, turn [VALUE] to the item, press to change it. **Once this rhythm is automatic, the menus stop being scary** because you are always doing the same three things. The whole feeling of fluency is just this gesture becoming reflex.

**The screen is a live label for the knobs.** The [VALUE] knob and the three [CTRL] knobs do *different jobs in different contexts*, and the screen always says which. In an effect, [CTRL 1–3] tweak that effect's parameters. In DJ mode they set channel levels. The beginner's mistake is to memorize "knob 2 does X"; the operator's habit is to **glance at the screen and read what the knobs do right now.** Build that glance into a reflex this week.

**[SHIFT] is the second floor.** Most buttons have two jobs: the printed label, and a second label reached by holding [SHIFT] first. When this course or the manual says "[SHIFT] + [something]," hold [SHIFT], then press the button. This is also how you reach the save command, the system menu, copy, delete, and many editing functions.

**The system / utility menu** ([Reference §2](SUPPLEMENT-machine-reference.md)) is the machine's settings drawer: display brightness, auto-power-off, pad sensitivity and velocity curve, the metronome, USB audio routing, MIDI settings, and the format/backup tools. You configure it **once** and rarely return. Doing that today removes a pile of small future annoyances (a screen that is too dim, a machine that powers off mid-session, pads that feel too soft or too hard).

> The difference between someone who looks fluent and someone who looks lost is almost never talent. It is whether the navigation gesture is automatic. Drill it until it is.

### Do
1. **(8 min) Gesture reps.** Do the function-then-knob-then-pad gesture ten times on different functions: set a pad's play mode, change its level, change its pitch. You are not trying to make music; you are wearing a groove in the gesture.
2. **(12 min) Configure the machine.** Open the system/utility menu. Set the **display brightness** comfortably, lengthen or disable **auto-power-off** so it does not quit on you mid-lesson, set the **pad sensitivity / velocity curve** to feel good when you play soft and hard, and find the **metronome** settings. Save.
3. **(8 min) Read-the-screen drill.** Enter three different contexts (a pad's parameters, an effect, the record screen) and for each, say out loud what [VALUE] and [CTRL 1–3] are doing according to the screen. Confirm by turning them.

### Daily drill
**Blind menu reach, 3 min:** name a setting (brightness, metronome, pad sensitivity), then race to reach it from sample mode. The goal is to cut the time each day until any setting is a few seconds away.

### Self-check
1. Write out the three-step gesture that runs almost every operation on the machine.
2. Why is it a mistake to memorize "[CTRL] knob 2 does X"? What should you do instead?
3. What does holding [SHIFT] before a button do?
4. Name four things you configured in the system menu and why each matters.
5. Where do the firmware version, USB settings, and MIDI settings live?

---

# Day 3: Inputs, Outputs & Levels

### Objectives
- Identify every input and output and choose the right one for a source.
- Understand line level vs mic level and set a healthy recording level.
- Set up monitoring so you hear what you are recording.
- Know when to record in mono vs stereo.

### Setup (5 min)
Gather what you have: a **phone or laptop** (a line source), a cable to the SP's **LINE IN**, and, if you own one, a **microphone** for **MIC IN** and **headphones** for **PHONES**. Have a song queued on the phone. You will connect each in turn.

### Lecture

**The back panel is your audio interface** ([Reference §1](SUPPLEMENT-machine-reference.md)). Inputs: **LINE IN** (for line-level sources, phones, laptops, mixers, turntables through a phono preamp) and **MIC IN** (for a microphone). Outputs: **LINE OUT** (to speakers, a mixer, or an interface) and **PHONES** (headphones). Plus **USB-C**, which can carry audio in *and* out (Week 3). Using the right jack for the source is the first step of getting clean sound.

**Line level vs mic level** is the concept beginners trip on. A microphone puts out a *very weak* signal that needs a lot of boost; a phone or laptop puts out a much *stronger* line-level signal. Plug a mic into a line input (or set the input wrong) and it will be too quiet; plug a line source into a mic input and it can be too hot and distorted. The SP lets you pick the input and set its gain, so the rule is simple: **match the input to the source, then set the level by the meter, not by guessing.**

**Setting a healthy level is the one habit that decides recording quality.** Too quiet and your sample is buried in noise and weak when you turn it up; too loud and it **clips**, distorting harshly and unrecoverably. The target is **loud but never clipping**: with the source playing its *loudest* part, the level meter should bounce up near the top and never slam the ceiling. This takes ten seconds and you do it every single time, because a badly recorded sample cannot be fixed afterward, only re-recorded.

**Monitoring** means hearing the input while you set it up. Put on headphones, bring the source up, and watch the meter while you listen. If you can hear it and the meter is healthy, you are ready to record (Day 5).

**Mono vs stereo.** A stereo recording keeps left and right (width); a mono recording is one channel. Stereo sounds wider but uses more of the machine's resources and can cause phase oddities when you chop and layer. Many operators record **drums and single sounds in mono** for punch and simplicity, and keep loops and ambiences in stereo for width. You do not need a philosophy today; know the choice exists and where to set it.

> Gain staging in one sentence: get a strong, clean level at the input, and you never have to fight noise or distortion downstream. Skip it and every later stage inherits the problem.

### Do
1. **(8 min) Connect each source.** Plug the phone into LINE IN and confirm you can monitor it on headphones. If you have a mic, plug it into MIC IN and speak; hear it. Notice how much weaker the mic is before you add gain.
2. **(12 min) Level practice.** With the song playing its loudest section, arm the input and set the level so the meter is strong but never clips. Then deliberately set it too low and too high and listen to the difference (thin/noisy vs distorted). Reset it to healthy. Repeat until the meter reads instantly.
3. **(7 min) Mono/stereo.** Find the mono/stereo setting for recording. Note where it is. Decide a default: mono for single drum hits and voice, stereo for music loops.

### Daily drill
**Ten-second level set, 3 min:** arm the input on whatever is playing, set a healthy level, disarm, repeat. Make it a five-to-ten-second reflex you never skip no matter how eager you are to grab a sound.

### Self-check
1. Name the inputs and outputs on the back panel and what each is for.
2. Explain line level vs mic level and what goes wrong if you mismatch them.
3. What is the target for a recording level, and what are the two failure modes?
4. What does it mean to monitor an input, and why do it before recording?
5. When would you record in mono, and when in stereo, and why?

---

# Day 4: The Pads as an Instrument

### Objectives
- Play fluently across all 10 banks.
- Use velocity to control dynamics.
- Set a pad to gate, one-shot, or loop and know when to use each.
- Use hold/remain and the sub pad.

### Orient (3 min)
Press each bank button once, then a second time, and watch the indicator flash on the second press. You have just visited all 10 banks (A–J) of the current project. Press a few pads in each. Every lit pad is a sample; every empty one is a slot waiting.

### Lecture

**The pads are velocity-sensitive** ([Reference §6](SUPPLEMENT-machine-reference.md)): press softly for a quiet hit, hard for a loud one. This is not a gimmick; it is how dynamics and feel get into anything you play, so start feeling it now. Pad sensitivity is adjustable in the system menu (Day 2) if soft hits are not registering or hard hits feel the same as medium.

**The three play modes are the most important per-pad setting you control:**

- **One-shot (trigger):** one press plays the whole sample through; releasing does nothing. For **drum hits** and one-off sounds.
- **Gate:** plays only while you *hold* the pad, stops the instant you release. For **chops** you play rhythmically, where how long you hold is the performance.
- **Loop:** plays and repeats until you stop it. For **drum loops** and beds you build over.

Set this per pad in its parameters. For every sample, ask: "one-shot, gate, or loop?" The answer shapes how the whole thing feels. A separate **reverse** setting plays the sample backwards and pairs with any mode.

**Hold / remain.** The **[REMAIN]** (hold) function lets a sample keep sounding hands-free, so you can let go and play other pads on top. Essential for performing: hold a loop, then drum over it.

**The sub pad** is a 17th pad with special performance roles, most usefully **re-triggering** (rolls and stutters on the last-played sound). You will lean on it in Week 2 for fills; today, just find it and hear what it does.

**Mono vs poly (re-trigger behavior).** When a pad cuts off its own previous sound on re-press, that is mono behavior, exactly right for a fast hi-hat or a stuttering vocal. When you want a sound to ring and overlap with itself (a piano chord, a long pad), you want poly, so it does *not* cut itself off. Knowing this setting exists saves a lot of "why does my hi-hat sound weird" later.

### Do
1. **(8 min) Bank tour.** Play through all 10 banks. For each pad you land on, name what it is (drum, loop, stab, vocal) and press soft then hard to feel velocity.
2. **(12 min) Set the three modes.** Pick a drum-like pad and set it **one-shot**; a loop-like pad and set it **loop**; a melodic stab and set it **gate**. Play each and feel how differently it responds to your finger.
3. **(10 min) Hold and drum.** Set a loop going, hold it with [REMAIN] so it sustains hands-free, then finger-drum a one-shot pad over it in time for a minute. Try the sub pad to roll the last sound. This is the core performance move, and it is also a preview of Week 2.

### Daily drill
**Eyes-closed pad-find, 3 min:** pick four pads in a bank; with eyes closed, play them in patterns (1-2-3-4, then 1-3-2-4). The goal is to stop *looking* at the pads, the way a typist stops looking at keys. This reflex underlies all performance.

### Self-check
1. How many banks per project, and how do you reach the second set?
2. What does velocity control, and where do you adjust how the pads respond?
3. Name the three play modes and the best use of each.
4. What does [REMAIN]/hold let you do, and why is it central to performing?
5. When do you want a pad to cut off its own sound (mono), and when not (poly)?

---

# Day 5: Recording Operations

### Objectives
- Run the full record flow from arming to a sample on a pad.
- Choose the right source, including the SP's own output.
- Use auto-trigger for a clean front edge.
- Record through INPUT FX, and use skip-back to capture the past.

### Setup (5 min)
Have a line source (phone/laptop) on LINE IN, monitored on headphones, with yesterday's level habit ready. Have a song queued you would enjoy capturing.

### Lecture

Recording is the machine's central act, and you already own the hardest part: setting a healthy level (Day 3). The rest is a repeatable flow ([Reference §4–5](SUPPLEMENT-machine-reference.md)):

1. **Press [REC]** to arm. The screen shows you are about to sample.
2. **Choose the source:** LINE IN, MIC IN, USB audio, or **RESAMPLE** (the SP's own output, the heart of Week 2). The screen labels the choice.
3. **Set the input level** so the meter is strong but never clips, with the source at its loudest.
4. **Choose dry or INPUT FX.** For now record **dry**; you can add effects later. Recording with INPUT FX commits them into the sample, which is a deliberate choice, not a default.
5. **Start recording,** either manually or by **auto-trigger** (the SP waits and begins the instant sound crosses a threshold, so you do not capture dead air at the front).
6. **Stop** when you have it. The sample lands on the destination pad.

**Auto-trigger** is worth using from day one: set a threshold, hit start, and recording begins exactly when the sound does, giving a clean front edge and saving you trimming work tomorrow.

**INPUT FX** are a separate effect stage on the input jacks only ([Reference §7](SUPPLEMENT-machine-reference.md)). You can run incoming audio through an effect (a filter, lo-fi, a compressor) and **record it that way**, baking the effect into the sample. It is how you capture a sound already colored the way you want. Today, just record one sample with a gentle INPUT FX so you have done it; choosing effects well comes in Week 2.

**Skip-back sampling** is the SP's secret weapon. The machine is *always* quietly buffering the last several seconds of audio it heard. So when something great goes by that you were not ready for, you grab the past with the skip-back function instead of cursing the miss. Learn where it is today; it will save you constantly.

> A grounding habit: decide what each bank holds before you fill it (bank A loops, bank B drums, bank C one-shots, say). A project fills fast, and a hunt for "that one snare" mid-flow kills momentum.

### Do
1. **(8 min) Clean dry record.** Using auto-trigger, record a few seconds of the song onto an empty pad, dry, at a healthy level. Play it back. Re-record until it is clean and strong.
2. **(10 min) Record three sources.** Sample a drum part, a melodic part, and (if you have a mic) your own voice, each onto its own pad in a bank you have designated for it.
3. **(7 min) INPUT FX and skip-back.** Record one sample through a gentle INPUT FX and hear the effect baked in. Then play the song, and *without arming first*, use skip-back to grab the last several seconds you just heard. Marvel briefly.

### Daily drill
**Arm-source-level-go, 3 min:** run the first four steps of the record flow (arm, choose source, set level, choose dry) without actually recording, repeatedly, until the sequence is automatic. The flow being reflex is what lets you grab a sound before the moment passes.

### Self-check
1. List the six steps of the record flow in order.
2. What are the possible sources, and which one is the basis of resampling?
3. What does auto-trigger do, and why use it?
4. What does recording through INPUT FX commit, and why is that a deliberate choice?
5. What is skip-back sampling, and when does it save you?

---

# Day 6: Editing & Pad Management (+ Quiz 1)

### Objectives
- Trim a sample to tight start and end points and make a clean loop.
- Apply pitch and basic pad parameters.
- Copy, move, and delete pads to organize a project.
- Take Quiz 1.

### Orient (3 min)
Play one of yesterday's raw samples. Hear the junk: silence at the front, a stray bit at the end, maybe a click. Editing is the unglamorous operation that turns a raw grab into something usable. Find the **[START/END]** controls and the pitch/speed knob before you read on.

### Lecture

**Trimming** sets where a sample begins and ends. On the SP, the **[START/END]** controls plus the [VALUE] knob move the **start point** (in, to cut dead air or a stray sound) and the **end point** (in, to cut whatever follows). A tight trim is the difference between a clean sample and a sloppy one.

**Looping cleanly** is its own operation. To make a sample loop seamlessly (a groove that repeats with no audible seam), the start and end points have to land on the same spot in the rhythm, almost always right on a beat. A loop a hair too long or short will hiccup every time around. The fix is patient: set the pad to loop and nudge the end point with the knob until the seam disappears. Use your ears, not your eyes. (This is an *operation* here; making loops *musical* is the sister course.)

**Pad parameters at a glance.** Beyond play mode (Day 4), each pad carries **pitch/speed** (the knob; faster = higher and shorter, slower = lower and longer), **volume** and **pan**, an **amp envelope** (a touch of attack and release smooths clicks at the edges), and its **bus routing** (Week 2). You do not set all of these every time; know they live on the pad so you can find them.

**Pad management is project hygiene.** You will constantly **copy** a pad (duplicate a sample to another slot or bank to edit a version without losing the original), **move** pads (organize a messy bank), and **delete** pads (clear a slot to reuse it). These are function-then-pad moves ([Reference §5](SUPPLEMENT-machine-reference.md)): hold the copy or delete function, then tap the source and destination pads. There is a limited **undo**; do not rely on it, and save before risky reorganizing.

> Clicks at the edges happen when a sample starts or ends mid-waveform. Two fixes you will reuse all course: move the point to a quiet "zero crossing," or add a few milliseconds of attack/release in the amp envelope.

### Do
1. **(10 min) Trim and loop.** Take a raw sample: trim the start and end tight so it begins and ends on the sound. Then take a rhythmic sample, set it to loop, and nudge the end point until it loops seamlessly. Kill any edge click with a touch of attack/release.
2. **(8 min) Pitch and params.** Sweep the pitch knob on a melodic sample and find a setting you like. Open the pad's parameters and locate volume, pan, and the amp envelope.
3. **(7 min) Organize.** Copy one finished pad to another bank. Move a pad to a tidier position. Delete a junk pad. Save the project.

### Quiz 1
Take **Quiz 1** now (see [QUIZZES.md](QUIZZES.md)), closed-book, then grade against [ANSWER-KEYS.md](ANSWER-KEYS.md). It covers the machine, navigation, signal flow, I/O and levels, the pads, recording, and editing: Week 1's whole operational core. Below 90%? Re-study the weak spot on tomorrow's studio day.

### Self-check
1. Which controls set the start and end points, and what does each do?
2. Why is looping cleanly harder than trimming a one-shot, and what must the points line up with?
3. Name four parameters that live on a pad besides play mode.
4. How do you copy, move, and delete a pad, and why is each useful for organizing a project?
5. What causes an edge click, and what are two ways to remove it?

---

# Day 7: Studio Day + Project 1

Today is consolidation, not new material. "Studio day" means you stop taking in new ideas and make the Week 1 operations solid, then finish something. Three parts.

### 1. Review the week
Reread the self-checks for Days 1–6 and answer every one from memory. Anything you fumble, reread that paragraph and do the example at the machine. The operations everything else rests on are **navigation (Day 2)**, **setting a clean level (Day 3)**, and **saving/backup (Day 1)**. Spend the most time wherever you hesitated.

### 2. The "cold start" drill (20 min)
Power off. Power on. Then, without notes, run the full Week 1 chain as fast as you cleanly can: open the system menu and confirm a setting, play across three banks, connect a source and set a healthy level, record a dry sample with auto-trigger, trim it to a clean loop, copy it to another bank, and save. Do it twice. The second run should feel noticeably smoother. That smoothness is the whole point of the week.

### 3. Project 1: Configured & Mapped
Do **Project 1** (see [PROJECTS.md](PROJECTS.md)). It asks you to deliver a correctly configured, backed-up machine, a one-page "machine map" you author, and a short screen/hands recording in which you navigate the modes, set a clean level, record and trim a sample, and save, the proof that the machine is no longer opaque to you. Due end of Day 7 (carry into the Week-2 studio day only if you genuinely must).

### Looking ahead
Week 1 was about removing friction: you can now navigate the machine, get clean sound in and out, play and edit a sample, and you never lose work. The machine is transparent. **Week 2 turns on the engines.** You will learn the four-bus effects system in full, program the pattern sequencer two ways, master the looper, and learn resampling, the move that ties every workflow together. From here the navigation gesture should be reflex, so your attention is free for what each engine does.
