# Week 3: The Machine Connected

> **The thesis of this week:** the SP-404 MK2 is not an island. Through one USB-C cable and a pair of MIDI jacks it becomes a DJ mixer, a USB audio interface into your DAW, a MIDI instrument other gear can play, a clock that syncs a whole setup, and a librarian that swaps files with a computer. Most beginners never learn this half of the machine and so use a fraction of what they paid for. This week you learn to connect the SP to the outside world and operate it inside a real setup. Then you put the whole course together: a complete operational workflow from a cold machine to an exported result, performed without the manual. That run-through is the final Operator's Demo, and it is the proof you can drive the machine.

Before Day 15, read [Machine Reference §8](SUPPLEMENT-machine-reference.md) (USB audio and MIDI). It is the model for the connected half of the week.

---

# Day 15: DJ Mode

### Objectives
- Enter DJ mode and assign samples to the two channels.
- Use the [CTRL] knobs for channel levels and cue.
- Sync the tempo of the two channels and play patterns in DJ mode.

### Orient (3 min)
Press the **[D/I]** and **[E/J]** bank buttons **together** to enter DJ MIXER mode. The pads and knobs change jobs entirely (the screen confirms). This is a whole separate operating mode layered on top of your samples.

### Lecture

**DJ mode turns the SP into a two-channel mixer** for playing and blending your samples like a DJ ([Reference §10 → DJ mode manual](https://static.roland.com/manuals/sp-404mk2_reference/eng/17804949.html)). It is built for performance and for integrating the SP into a DJ setup (including Serato on later firmware).

**The layout in DJ mode:**

- **Two channels, CH1 and CH2.** You assign a sample to each: press [VALUE], choose **CH1 SELECT** or **CH2 SELECT**, and pick a pad. Each channel plays its sample independently.
- **The [CTRL] knobs become a mixer.** **[CTRL 1]** sets **CH1 level**, **[CTRL 2]** sets **CH2 level**, and **[CTRL 3]** sets the **cue mix** for headphone monitoring, so you can preview one channel in your headphones before bringing it into the main mix, exactly as a DJ does.
- **The pads become transport and sync.** Specific pads play/pause each channel, return it to the start, send a channel to cue, and **sync the tempo** of one channel to the other (so two samples at different BPMs lock together). The crossfader feature, added in firmware 2.0, blends between the channels.
- **Patterns in DJ mode.** You can play your internal patterns alongside the two channels, with the pattern following the tempo of the channel you choose, so a sequenced beat and a DJ-style blend run together.

You will not become a DJ today. The goal is to *operate* the mode: get a sample on each channel, mix them with the knobs, cue one in headphones, and sync their tempos. That is the full set of moves; performance is reps.

### Do
1. **(8 min) Enter and assign.** Enter DJ mode ([D/I]+[E/J]). Assign a loop to CH1 and a different loop to CH2. Play each.
2. **(10 min) Mix and cue.** Use [CTRL 1] and [CTRL 2] to blend the two channels' levels. Use [CTRL 3] to cue one channel in your headphones while the other plays out.
3. **(7 min) Sync.** Press the sync pad so one channel follows the other's tempo and hear them lock. If your firmware has the crossfader, blend across it. Exit back to sample mode (press [D/I]+[E/J] again) and confirm your project is intact.

### Daily drill
**Enter-and-assign, 2 min:** enter DJ mode, assign both channels, mix them, exit. Making entry and setup automatic is the operation skill; blending well comes later.

### Self-check
1. How do you enter DJ mode, and what changes when you do?
2. How do you assign a sample to each channel?
3. What do [CTRL 1], [CTRL 2], and [CTRL 3] do in DJ mode?
4. What does cue let you do, and why does a DJ want it?
5. What does the sync function do between the two channels?

---

# Day 16: The SP as a USB Audio Interface

### Objectives
- Understand class-compliant USB audio and connect the SP to a computer.
- Set the USB audio routing for recording into a DAW.
- Record the SP's output into a DAW track.

### Setup (5 min)
Have a computer with any DAW (a free one is fine) and the USB-C cable. Connect the SP to the computer.

### Lecture

**The SP-404 MK2 is a class-compliant USB audio device** ([Reference §8](SUPPLEMENT-machine-reference.md)). "Class-compliant" means the computer recognizes it as an audio interface with **no driver to install**: plug in, and the SP shows up as an input and output device. Over the one USB-C cable it carries audio *in and out* (and MIDI, and power) at once.

**Two directions of audio:**

- **SP → computer:** the SP's output streams into the computer as a stereo input, so you can **record your beats and performances straight into a DAW** with whatever effects you applied still on them. This is the cleanest way to get your work off the machine for mixing, releasing, or backup.
- **Computer → SP:** audio from the computer can stream into the SP, so you can **sample from anything on your computer** (a YouTube clip, a DAW track, a streaming source) directly over USB, no cables into LINE IN.

**The routing setting matters.** A **USB audio routing setting in the Utility menu** decides what the SP sends over USB. To record your full mix into the DAW, set it to **MIX OUT** (the whole output, post-effects); the exact label varies by firmware, so look in the Utility menu's USB audio section. For other workflows you might send individual streams. If your DAW "hears nothing," that routing setting is the first thing to check, along with selecting the SP as the input device in the DAW.

**In the DAW:** create an audio track, set its input to the SP, arm it, and record while you play the SP. What you played, effects and all, lands as audio you can edit on the computer.

> The USB cable does power, MIDI, and audio together. If you are new to interfaces, this is the moment the SP stops feeling like a toy and starts feeling like studio gear.

### Do
1. **(8 min) Connect and confirm.** Plug the SP into the computer. In the computer's sound settings, confirm the SP appears as an audio device. In the SP's Utility menu, find the USB audio routing setting and set it to **MIX OUT**.
2. **(12 min) Record into a DAW.** Open a DAW, make an audio track, set its input to the SP, arm it. Play a beat or performance on the SP and record it into the DAW. Play the DAW track back and confirm it captured what you played.
3. **(5 min) Sample from the computer (optional).** Play a sound on the computer and sample it into the SP over USB by choosing the USB source in the record screen.

### Daily drill
**Interface check, 2 min:** connect the SP, confirm the computer sees it, set the USB routing, disconnect. Making the connection reliable and quick removes the friction that stops people from ever recording their work out.

### Self-check
1. What does "class-compliant USB audio" mean for setup?
2. What three things does the one USB-C cable carry at once?
3. In which two directions can audio flow over USB, and what is each used for?
4. Which kind of setting decides what the SP sends over USB, and what do you set it to for recording the full mix?
5. Your DAW hears nothing from the SP: name two things to check.

---

# Day 17: MIDI

### Objectives
- Understand USB MIDI vs the 5-pin MIDI jacks.
- Sync the SP's tempo to (or from) a DAW or device over MIDI clock.
- Play the SP's pads from an external keyboard or DAW, and control gear from the SP.

### Setup (5 min)
Keep the SP connected to the computer by USB. If you own a MIDI keyboard or another piece of MIDI hardware, have it ready too.

### Lecture

MIDI is not audio: it is a stream of **performance and timing messages** ("this note, this hard, now") and a **clock**. The SP speaks MIDI two ways: over **USB** (the same cable as audio) and over the **5-pin MIDI IN/OUT** jacks for hardware that does not do USB MIDI. The SP is class-compliant for MIDI too, so a computer needs no driver.

**Clock sync** is the most useful MIDI feature for a beginner ([Reference §8](SUPPLEMENT-machine-reference.md), [Roland support](https://support.roland.com/hc/en-us/articles/4408205416475-SP-404MK2-Synchronizing-with-an-External-MIDI-Device)). The SP can be the **clock leader** (it sends the tempo and everything else follows) or the **clock follower** (it locks to a DAW's or device's tempo). It synchronizes **tempo, measure, and beat**, so the SP's sequencer plays in lockstep with your DAW's grid. You set which device leads in the MIDI settings, and you choose one leader for the whole setup, never two.

**Playing the SP from outside.** With the SP receiving MIDI notes, an external keyboard or a DAW track can **trigger its pads**: each pad responds to a MIDI note, so you can play the SP from weighted keys or program it from a piano roll. Conversely, with the SP sending, your pad hits and sequencer can **play external gear** (a synth, another drum machine) over MIDI.

**Channels** keep multiple instruments from talking over each other: each device listens on a MIDI channel, and you match the SP's send/receive channel to the gear you want to talk to. If MIDI "does nothing," a channel mismatch or the wrong leader/follower setting is the usual cause.

You are learning to *operate* MIDI: sync the clock, and pass notes in one direction. That is enough to put the SP into a real setup; deep MIDI mapping is a later road.

### Do
1. **(10 min) Clock sync.** In the SP's MIDI settings, set it to follow external clock. Set a tempo in your DAW, enable the DAW's MIDI clock out to the SP, and start the DAW. Confirm the SP's sequencer locks to the DAW's tempo. Then flip it: make the SP the leader and the DAW follow.
2. **(8 min) Play the pads by MIDI (if you have a controller/DAW).** Send MIDI notes from a keyboard or a DAW piano roll to the SP and trigger its pads. Match the channel if nothing happens.
3. **(5 min) Reflect on routing.** Write down, for your setup, which device is the clock leader and why. One leader, everything else follows.

### Daily drill
**Leader-or-follower, 2 min:** state, for any two-device setup you can imagine, which should lead the clock and which should follow, and how you would set it. Clear thinking about the clock prevents most MIDI headaches.

### Self-check
1. How is MIDI different from audio?
2. What are the two ways the SP sends and receives MIDI?
3. What does clock sync synchronize, and what is the rule about how many leaders a setup has?
4. How can an external keyboard or DAW play the SP's sounds?
5. MIDI "does nothing" between two devices: name two likely causes.

---

# Day 18: File Management (the Card, the App & Exporting)

### Objectives
- Understand the SD card's structure and the SP-404 MK2 app.
- Import samples from a computer onto the SP.
- Export projects, patterns, and audio off the SP.

### Setup (5 min)
Have the SP-404 MK2 app installed (from Roland's site) and the SP connected by USB, or a card reader ready.

### Lecture

Everything lives on the **microSD card** as files in a project structure ([Reference §3](SUPPLEMENT-machine-reference.md)). You manage those files two ways: directly with a **card reader** (power off, pull the card, copy on a computer) or, more conveniently, with the **SP-404 MK2 app** over USB-C, which lets you move samples and projects without removing the card.

**Importing samples.** To bring in sounds made elsewhere (a drum kit, a one-shot pack, a loop you bounced from a DAW), use the app (or the card) to put audio files where the SP can load them, then assign them to pads on the machine. This is how you stock the SP with material beyond what you sample live.

**Exporting your work.** Three things you will want to get *off* the SP:

- **Whole projects** for backup or to move to another card or machine: copy the project folder via the app or card reader.
- **Audio of a finished beat:** the cleanest route is to **resample** your pattern to one pad (Week 2), then export that sample, or to record the SP into a DAW over USB (Day 16). Either gives you a normal audio file.
- **Individual samples** you made on the SP, to use in a DAW or share.

**File hygiene.** Name and organize as you go, keep the weekly card backup (Day 1), and never pull the card mid-write. A tidy card is the difference between finding last month's beat in seconds and losing it.

> The app and the card reader do the same job; the app is just friendlier and does not require power-down. Either way, the principle is the same: the SP's life is files, and you are the librarian.

### Do
1. **(10 min) Import.** Using the app or a card reader, import two or three audio files (your own bounced loops, or a free sample pack) onto the SP and assign them to pads.
2. **(10 min) Export.** Resample one of your beats to a single pad, then export that sample to your computer with the app (or copy it from the card). Confirm it opens and plays on the computer.
3. **(5 min) Back up.** Do the weekly whole-card backup. Confirm a project opens from the copy.

### Daily drill
**Round-trip, 3 min:** move one file onto the SP and one file off it. Making import/export routine is what lets your SP work flow in and out of the rest of your music life.

### Self-check
1. Where does everything on the SP live, and what are the two ways to manage those files?
2. How do you import a sample made elsewhere onto the SP?
3. Name three things you might export off the SP and how.
4. What is the cleanest way to get audio of a finished beat off the machine?
5. What are the file-hygiene rules that keep you from losing work?

---

# Day 19: Full Operation (Workflow, Setup & Troubleshooting)

### Objectives
- Run a complete operational workflow from a cold machine to an exported result.
- Make signal-chain decisions for a performance or recording setup.
- Diagnose the common things that go wrong.

### Orient (3 min)
Power the machine off, then on. Today you do not learn anything new; you wire the whole course together into one flow and prove it runs without the manual.

### Lecture

**A complete workflow,** end to end, using everything you have learned:

1. **Start clean.** Power on, load (or create and save) a project, confirm settings.
2. **Get sound in.** Connect a source, set a healthy level, record dry with auto-trigger (Week 1).
3. **Edit.** Trim, loop, pitch, organize pads (Week 1).
4. **Shape.** Route to a bus, apply an effect, add a master effect (Week 2).
5. **Sequence.** Program a pattern in TR-REC, overdub feel live, quantize, swing (Week 2).
6. **Commit.** Resample the result to a pad to free the engine and glue the beat (Week 2).
7. **Connect and export.** Record into a DAW over USB, or resample and export the audio, with the card backed up (Week 3).

That sequence is the SP, operated. Every project you ever make is some path through it.

**Signal-chain decisions** are the judgment layer on top: for **live performance**, you favor things you can do hands-free and live (hold, looper, [CTRL] sweeps, DJ mode) and a clean output to a PA; for **recording**, you favor committing with resampling and capturing into a DAW. There is no one right chain; there is the chain that fits what you are doing, and now you know the options well enough to choose.

**Troubleshooting, the common ones:**

| Symptom | Likely cause | Fix |
|---|---|---|
| No sound from a pad | Wrong bank, pad empty, volume/level down, output not connected | Check bank, level, output |
| Effect does nothing | Pad not routed to that effect's bus | Route the pad to the right bus (Day 8) |
| Effect is on everything | It is on a master bus (BUS 3/4) | Move it to BUS 1/2 for per-sample |
| "Can't add more effects" | The processing limit | Resample to bake one in (Day 12) |
| DAW hears nothing over USB | USB routing or DAW input not set | Set USB to MIX OUT; select SP as input |
| Sequencer won't sync | Clock leader/follower or channel | Set one leader, match settings (Day 17) |
| Lost work | Did not save | Save reflexively; restore from backup |

> Almost every "the machine is broken" moment is one of these, and every one is a routing, level, or save issue, not a fault. Knowing the table *is* operating the machine.

### Do
1. **(25 min) Full run.** From a cold start, run the seven-step workflow above end to end and export a short result. No notes. Time yourself loosely; note where you hesitated.
2. **(10 min) Break and fix.** Deliberately cause three faults from the table (route an effect wrong, mis-set the USB, leave a pad on the wrong bank) and fix each by diagnosis, not by guessing.

### Daily drill
**Diagnose-out-loud, 3 min:** have someone (or yourself) name a symptom from the table; say the likely cause and fix before touching the machine. Speed of diagnosis is the mark of an operator.

### Self-check
1. List the seven steps of the complete workflow in order.
2. How does a performance signal chain differ from a recording one?
3. "Effect is on everything" and "effect does nothing": what is the cause of each?
4. What is the fix when the machine says it cannot add more effects?
5. What is the cause of essentially every "no sound" problem?

---

# Day 20: Final Workshop + Project 3

Consolidation and the last graded project before the capstone.

### 1. Review the connected half
Reread the Day 15–19 self-checks and answer from memory. The pieces people most need to re-drill are the **USB routing (Day 16)** and the **clock leader/follower decision (Day 17)**; make sure both are clear, because the final demo uses them.

### 2. The "connected" drill (15 min)
Without notes: enter DJ mode and mix two samples, exit, record the SP into a DAW over USB, sync the SP's clock to the DAW, and export one sample to the computer. Do the sequence once cleanly.

### 3. Project 3: Connected
Do **Project 3** (see [PROJECTS.md](PROJECTS.md)). It asks you to demonstrate the SP connected to a computer: record its output into a DAW over USB, sync over MIDI clock, and export a file, with a recording that shows it working. A proof of *connection*, not a song. Due end of Day 20.

---

# Day 21: Final Exam + The Operator's Demo

### The final exam
Take the **Final Exam** (see [QUIZZES.md](QUIZZES.md)), closed-book, and grade against [ANSWER-KEYS.md](ANSWER-KEYS.md). It is cumulative: navigation and signal flow, I/O and levels, the pads, recording and editing, the four-bus engine, both sequencer methods, resampling, the looper, DJ mode, USB audio, MIDI, and file management. The applied section asks you to *do* operations cold, not just describe them.

### The Operator's Demo (capstone)
Then do the capstone, the **Operator's Demo** (full spec in [PROJECTS.md](PROJECTS.md)). In one continuous recorded take of three to five minutes, you drive the machine through a real workflow that touches every major subsystem: get a sound in, edit it, route it through the bus engine, sequence a pattern, resample, perform a looper or DJ-mode moment, and export or record the result, all without the manual open. It is not judged on whether the music is good. It is judged on whether you *operate the machine cleanly and without getting lost*. That is the whole goal of the course, demonstrated in one take.

### Where you are now, and where the doors lead
Three weeks ago the machine was a wall of blinking pads. Now it is transparent: you can find any function, route any signal, drive every engine, and connect the SP to the world. That fluency is exactly the thing that stops most people, and you are past it.

What is left is the part this course deliberately did not teach: **making it good.** Chopping a break so it grooves, building a kit with punch, writing a pattern that breathes, arranging a track, mixing it. That craft is years of listening and reps, and the next step is the sister course, [MUS-45H: Sampling & Beatmaking on the SP-404 MK2](#/sp404-mk2-sampling), which assumes exactly the operational fluency you just built. Go make something. The machine is no longer in your way.
