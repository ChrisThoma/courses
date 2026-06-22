# Week 2: The Engines (Effects, Sequencer, Resampling)

> **The thesis of this week:** the SP-404 MK2 has three engines that turn it from a sample player into a production and performance machine: the **four-bus effects engine**, the **pattern sequencer**, and **resampling**. Each is a self-contained system with its own logic, and each intimidates beginners until the logic clicks. This week you learn to *operate* all three, plus the looper. You are still not chasing good music (that is the sister course); you are learning what each engine does and how to drive it, so that when you do chase music, the controls are invisible. Effects answer "how do I change the sound?", the sequencer answers "how do I make it repeat in time?", and resampling answers "how do I commit and keep building?". Master the three and you can operate the core of the machine.

Before Day 8, read [Machine Reference §7](SUPPLEMENT-machine-reference.md) (the four-bus engine). It is the mental model the whole week hangs on.

---

# Day 8: The Effects Engine 1 (the Four Buses)

### Objectives
- Understand the four-bus layout: what BUS 1/2 do vs BUS 3/4.
- Route a pad to a bus and hear the effect apply only to that pad.
- Apply a master effect on BUS 3/4 across the whole mix.
- Use the [CTRL] knobs to shape an effect.

### Orient (3 min)
Find the dedicated effect buttons: **[FILTER+DRIVE]**, **[RESONATOR]**, **[DELAY]**, **[ISOLATOR]**, **[DJFX LOOPER]**, **[MFX]**. Press one and watch the screen show its parameters mapped to the [CTRL] knobs. Turn a [CTRL] knob and hear it change. That is the whole interaction; today is about *where* the effect sits.

### Lecture

The effects engine is the part of the SP people find most confusing, and the confusion is almost always about **buses**. Get the bus layout and the rest is easy ([Reference §7](SUPPLEMENT-machine-reference.md)).

**There are four buses, in two pairs:**

- **BUS 1 and BUS 2 are per-sample (insert) buses.** Each pad is routed to **DRY**, **BUS 1**, or **BUS 2**. An effect on a bus applies only to the pads sent there. Put a filter on BUS 1, send your drums to BUS 1, and only the drums get filtered.
- **BUS 3 and BUS 4 are master buses.** Everything (DRY pads, BUS 1, BUS 2) flows through the two master buses, BUS 3 and BUS 4. An effect here colors the **whole mix**: a Vinyl Sim for overall lo-fi character, an isolator across the master, a final compressor.

```
  pad (DRY) ─────────────┐
  pad → BUS 1 (insert FX) ┤→ BUS 3 & BUS 4 (master FX) → OUTPUT
  pad → BUS 2 (insert FX) ┘
```

**Why this matters:** once you know which bus an effect lives on, you always know *what it will affect*. "Why is the delay on everything?" means the delay is on a master bus, not BUS 1/2. "Why does my filter do nothing?" usually means the pad is not routed to that filter's bus. Diagnosing the SP's effects is almost always diagnosing routing.

**The operation:** pick an effect button (it loads onto a bus), turn it on, and shape it with the **[CTRL] knobs**, reading the screen for what each knob does. Route a pad to a bus in the pad's parameters. That is it. Everything else this week is variations on "put an effect on a bus and send something to it."

> The single most useful sentence about SP effects: **BUS 1/2 are for "this sound," BUS 3/4 are for "everything."** Say it until it is automatic.

### Do
1. **(10 min) Insert effect on one pad.** Load a drum loop on a pad and a melodic loop on another. Put a **filter** on BUS 1. Route only the melodic pad to BUS 1. Play both: the melody is filtered, the drums are not. Now route the drums to BUS 1 too and hear both filtered. You have felt a per-sample bus.
2. **(10 min) Master effect on everything.** Put a **Vinyl Sim** or lo-fi effect on BUS 3. Play several pads at once and hear it color the whole mix regardless of their BUS 1/2 routing. That is a master bus.
3. **(7 min) Shape with [CTRL].** On each effect, sweep the [CTRL] knobs and watch the screen name each parameter. Learn to read the knobs rather than memorize them.

### Daily drill
**Route-and-name, 3 min:** pick a pad, route it to a bus, turn on that bus's effect, and say out loud "this affects only this pad" or "this affects everything." Build the habit of always knowing what a given effect touches.

### Self-check
1. What is the difference between BUS 1/2 and BUS 3/4?
2. A pad routed to DRY: does a BUS 3 effect touch it? Does a BUS 1 effect?
3. How do you make an effect apply to only one sound?
4. Where do you read what the [CTRL] knobs are doing for a given effect?
5. "My filter does nothing": what is the most likely cause?

---

# Day 9: The Effects Engine 2 (Signature Effects & INPUT FX)

### Objectives
- Tour the SP's signature effects and know what each is for.
- Record a sample through INPUT FX.
- Understand the limit on how many effects run at once and what to do about it.

### Orient (3 min)
Press [MFX] and turn [VALUE] to scroll the list of MFX types. There are many. Do not try to learn them all; today you meet the headline ones and learn the *categories* so any effect you meet later has a slot to go in.

### Lecture

The MK2's effects are the reason the SP line has a sound. You do not need all of them; you need to know the **categories** so you can reach for the right kind.

| Effect (button or MFX) | Category | What it does, in plain terms |
|---|---|---|
| **Vinyl Sim / Cassette / Lo-Fi** | Character | Adds hiss, wow, rolled-off highs: the classic SP grit. The lineage's signature. |
| **[FILTER+DRIVE]** | Tone shaping | Cuts highs or lows and adds saturation; sweep it for movement. |
| **[RESONATOR]** | Tone/pitch | Adds resonant, pitched character. |
| **[DELAY]** | Time | Echoes; from slapback to long dub trails. |
| **Reverb (MFX)** | Space | Puts a sound in a room or a cavern. |
| **[ISOLATOR]** | Mix/DJ | A 3-band kill/boost (low/mid/high), great across the master. |
| **Compressor / EQ (MFX)** | Mix | Evens levels and shapes tone, usually on a master bus. |
| **[DJFX LOOPER]** | Performance | Live-captures and loops a slice for stutters and builds (Day 13). |

**Where each tends to live:** **character** and **space** effects often go on a master bus (BUS 3/4) to glue the whole thing; **tone shaping** and **time** effects often go on a per-sample bus (BUS 1/2) so they hit one element. There are no hard rules; the point is that *you decide by choosing the bus*, which is yesterday's lesson applied.

**INPUT FX** are a separate stage on the input jacks only ([Reference §7](SUPPLEMENT-machine-reference.md)). Run incoming audio through an effect and **record it that way** to bake it into the sample. Use it when you want a sound captured already colored (a lo-fi'd vocal, a filtered loop) rather than added after. It commits, so it is a deliberate choice.

**The processing limit.** The engine shares power across the buses, so **you cannot run unlimited effects at once.** When a combination is too heavy the machine tells you. This is not a flaw to fight; it is the reason **resampling** exists (Day 12). When you want one more effect than the engine allows, you bake an existing one into a sample by resampling, which frees the engine for the next.

### Do
1. **(12 min) Effect tour.** On a loop, try in turn: Vinyl Sim, a filter sweep, a delay, a reverb, an isolator. For each, say which category it is and whether you would more likely put it on a per-sample or a master bus.
2. **(8 min) INPUT FX record.** Record a fresh sample through an INPUT FX (a lo-fi or filter) so the effect is baked in. Compare it to the same source recorded dry.
3. **(7 min) Hit the limit on purpose.** Stack effects on multiple buses until the machine warns you it cannot run more. Note the message. Tomorrow's workflow and Day 12's resampling are the answer to it.

### Daily drill
**Name-the-category, 2 min:** call up any effect and, before tweaking, say its category (character / tone / time / space / mix / performance) and a bus you would put it on. Reaching for the right *kind* of effect fast is the skill; the specific patch is secondary.

### Self-check
1. Name the SP's "character" effects and what they do to a sound.
2. Which effects tend to go on a master bus, and which on a per-sample bus, and why is that your choice, not a rule?
3. What does INPUT FX do, and when would you use it instead of adding an effect after?
4. Why can you not run unlimited effects at once?
5. What is the standard move when you need one more effect than the engine allows?

---

# Day 10: The Pattern Sequencer 1 (Real-Time Recording)

### Objectives
- Understand what a pattern is and where patterns live.
- Set the tempo and use the metronome.
- Record a pattern in real time and play it back.
- Apply quantize to tighten timing.

### Orient (3 min)
Press **[PATTERN SELECT]**. The pads now represent patterns rather than samples (the screen confirms). Press an empty one. This is the sequencer: a separate mode where the machine *remembers and replays* what you play on the pads.

### Lecture

A **pattern** is a recording of pad hits over time: which pads, when, how hard. Patterns belong to the project and live on their own pads under [PATTERN SELECT]. The sequencer replays your performance so you do not have to keep your hands on the pads, which is what lets one person build a full arrangement.

**Tempo and the metronome come first.** Set the project **BPM** before you record, because the grid the sequencer quantizes to is built from it. Turn on the **metronome** (a click) so you have something to play in time with. A wandering tempo makes everything that follows feel loose in a bad way.

**Real-time recording** is the natural first method:

1. Under [PATTERN SELECT], choose an empty pattern and arm recording (**[REC]**).
2. A count-in or the metronome starts; the pattern loops over a set length.
3. **Play the pads in time** as it loops. Each pass, you can add more (a kick this time around, snares the next, hats after).
4. Stop recording; the pattern plays back what you laid down.

This is "overdub" recording: the loop goes around and you layer parts onto it. It feels like the most musical way in, and it is how most people start.

**Quantize** snaps your hits to the nearest grid division (1/16 notes, say) so slightly-off timing lands exactly on the beat. It is a setting you apply to a take. Light quantize tightens without killing feel; full quantize makes it machine-perfect (and machine-stiff). You will learn to use it judiciously; today, just record loose and hear quantize pull it into line.

> The sequencer is a separate world from sample mode. Beginners get lost by forgetting which mode they are in. Glance at the screen: it always tells you whether a pad press plays a sample or selects/records a pattern.

### Do
1. **(5 min) Set up.** Pick a kick, snare, and hat on three pads (set to one-shot). Set a comfortable BPM and turn on the metronome.
2. **(15 min) Record live.** Arm an empty pattern and, as it loops, lay down a kick on the downbeats, then snares on the backbeats, then hats. Do not chase a good beat; chase *operating the recorder*: arm, play in time, stop, play back.
3. **(7 min) Quantize.** Apply quantize to your take and hear it tighten. Try a light setting and a full setting and feel the difference between tight and stiff.

### Daily drill
**Loop-and-layer, 4 min:** record a simple two-part pattern (kick, then snare) live, every day this week. The reps build the reflex of playing *in time with a looping recorder*, which is the heart of the sequencer.

### Self-check
1. What is a pattern, and where do patterns live?
2. Why must you set the tempo before recording, not after?
3. Describe real-time (overdub) recording in steps.
4. What does quantize do, and what is the trade-off between light and full?
5. How do you tell whether a pad press will play a sample or work the sequencer?

---

# Day 11: The Pattern Sequencer 2 (TR-REC, Editing, Swing & Chaining)

### Objectives
- Step-program a pattern with TR-REC.
- Set pattern length and edit individual hits without re-recording.
- Add swing/shuffle and velocity for feel.
- Use the sub-pad roll for fills.
- Copy a pattern and chain patterns into a longer sequence.

### Orient (3 min)
Enter a pattern and switch to **TR-REC** (step record). The 16 pads now represent the 16 steps of a bar (the screen confirms). This is the second, very different way to build a pattern, and the one that gives you total control.

### Lecture

**TR-REC** (named for Roland's classic TR drum machines) is **step recording**: instead of playing in time, you place hits on a grid by hand. You pick a sound, then light up the steps where it should sound. Want a kick on steps 1, 5, 9, 13? Select the kick, tap pads 1, 5, 9, 13. It is methodical, exact, and forgiving, the opposite of the live feel of real-time recording, and the two complement each other: program the skeleton in TR-REC, then overdub feel live, or vice versa.

**Pattern length** is yours to set: one bar, two, four, more. A longer pattern holds more variation; a shorter one loops tighter. Set it to fit the idea.

**Editing without re-recording** is the operation that makes the sequencer forgiving. A wrong hit? In TR-REC, toggle that step off. A missing hit? Toggle it on. You can fix any single event without redoing the take, which is exactly what beginners need, since first takes are always a little wrong.

**Swing / shuffle** delays the off-beats slightly so the groove "swings" instead of marching. A touch of swing is the difference between a stiff grid and something with bounce. It is a per-pattern setting; nudge it and listen.

**Velocity in the pattern.** Hits carry velocity (Day 4), and varying it (softer ghost notes, harder accents) is what keeps a programmed beat from sounding dead. You can set velocity as you step-record or edit it after.

**The sub-pad roll** retriggers a sound rapidly for rolls and fills. Held during recording, it prints a roll into the pattern. It is the quickest way to add a fill at the end of a phrase.

**Copying and chaining patterns** is how you get from one loop to a longer structure. Each pattern lives on its own pad under [PATTERN SELECT], and you can **copy** a pattern to another pad (the copy/paste function, then the source and destination patterns) to make a variation without rebuilding it from scratch, change a few hits, and now you have an A and a B. **Chaining** plays patterns back to back in an order you set, so an eight-bar idea can be A-A-B-A instead of one loop repeating forever. On the SP you build a chain by stringing patterns into a sequence (the pattern-chain/arrange function on your firmware); the machine then plays them through in that order. You are not arranging a song today, just learning the operation: copy a pattern, alter it, and chain two patterns so they play one after the other.

### Do
1. **(10 min) Step-program a beat.** In TR-REC, place a kick, snare, and hat pattern step by step. Set the pattern length to one bar. Play it back.
2. **(7 min) Edit and feel.** Toggle one hit off and a new one on without re-recording. Add a little swing and hear the bounce. Vary the velocity of a few hits.
3. **(5 min) Roll.** Use the sub pad to add a hi-hat or snare roll as a fill at the end of the bar.
4. **(8 min) Copy and chain.** Copy your pattern to a second pattern slot, change a few hits so it is a variation (call them A and B), then chain them so the machine plays A then B back to back. Play the chain. Save the project.

### Daily drill
**Skeleton-then-feel, 4 min:** step-program a bare kick/snare in TR-REC, then switch to real-time and overdub hats live on top. Practicing the handoff between the two recording methods is the real sequencer skill.

### Self-check
1. How does TR-REC differ from real-time recording, and when would you use each?
2. How do you fix a single wrong hit without re-recording the take?
3. What does swing do to a beat?
4. Why does varying velocity matter in a programmed pattern?
5. What is the sub-pad roll for, and what does chaining two patterns let you build?

---

# Day 12: Resampling (the Workflow Spine)

### Objectives
- Explain what resampling is and why it is central to the SP.
- Resample the machine's own output to a new pad.
- Use resampling to commit effects, glue a sequence, and free voices.

### Orient (3 min)
Arm **[REC]** and look at the source choices. One of them is the SP's own output (**RESAMPLE**). That single option is the most important workflow feature on the machine. Today is about using it deliberately.

### Lecture

**Resampling is sampling the machine's own output instead of an external source** ([Reference §4](SUPPLEMENT-machine-reference.md)). You play something on the SP, pads through buses through effects, and record *that* to a new pad. The result is a normal sample you can chop, sequence, and effect again.

It sounds simple. It is the spine of the whole workflow, for three reasons:

- **Commit effects.** An effect on a bus is live and temporary. Resample the effected sound and the effect is now *baked into a sample*, permanent and using no engine power. This is how you get past the processing limit (Day 9): print one effect, free the engine, add the next.
- **Glue a sequence.** A beat made of many pads and a pattern is fragile and voice-hungry. Resample the playing pattern to a single pad and now your whole beat is *one loop on one pad*, which you can drop into a new arrangement, chop further, or build over. This is how producers stack idea on idea without the machine running out of room.
- **Free voices and pads.** The SP can only play so many sounds at once. Resampling a busy section down to one pad releases all the voices and pads it was using, so you can keep building.

**The operation:**

1. Set up the sound you want to capture (pads, buses, effects, or a playing pattern).
2. Arm **[REC]**, set the source to **RESAMPLE** (the SP's output).
3. Set the level (the same healthy-meter habit), choose a destination pad.
4. Start, let it play/print, stop. The result is on the new pad.

> Resampling is the answer to most "I'm stuck / I ran out" problems on the SP: out of effects, out of voices, out of pads, want to keep building. Print it down and keep going. Make it a reflex, not a last resort.

### Do
1. **(8 min) Commit an effect.** Put a Vinyl Sim on a master bus over a loop. Resample the loop to a new pad. Turn the bus effect off, play the new pad: the effect is baked in. You have freed the bus.
2. **(12 min) Glue a pattern.** Take the beat you sequenced this week. Resample the playing pattern down to a single pad. Now play that one pad: your whole beat, one trigger. Notice how many voices and pads you just freed.
3. **(7 min) Build on it.** With your beat now on one pad, add a new sound over it. Feel how resampling lets you keep stacking without the machine choking. Save.

### Daily drill
**Print-it-down, 3 min:** take whatever you are working on and resample it to one pad, then continue from there. Practicing the move until it is automatic changes how you use the whole machine.

### Self-check
1. In one sentence, what is resampling?
2. How does resampling let you get past the effects processing limit?
3. What does it mean to "glue" a sequence, and why would you?
4. What does resampling free up, and why does that matter?
5. List the steps of a resample operation.

---

# Day 13: The DJFX Looper & Performance Effects (+ Quiz 2)

### Objectives
- Use the DJFX looper to live-capture and stutter a slice.
- Combine the looper with bus effects for performance.
- Take Quiz 2.

### Orient (3 min)
Press **[DJFX LOOPER]**. As something plays, it grabs a slice and loops it under the [CTRL] knob, letting you shrink, stretch, and stutter it live. Wiggle the knob over a loop and hear the classic build-up effect.

### Lecture

The **DJFX looper** is a performance effect: it captures a slice of whatever is playing and repeats it, and the [CTRL] knob controls the *size* of that slice in real time. Sweep toward small and you get a fast machine-gun stutter; sweep toward large and you get a longer repeat. It is how the SP does the build-and-drop stutter you hear all over electronic and hip-hop sets, and it is entirely a *live* gesture, you perform it.

It pairs with the bus engine. Run a beat through the looper while a filter sweeps on a master bus and you have a tension build you control with two hands. Because it is performed live and not stored, the way to *keep* a looper move is to **resample** the output while you perform it (yesterday's lesson, immediately useful).

Other performance moves you now have: **[REMAIN]/hold** to free a hand (Day 4), the **sub-pad roll** for fills (Day 11), **gate** chops you play by hand (Day 4), and live **[CTRL]** sweeps on any effect. Performance on the SP is just these gestures combined over a playing pattern. You are not learning to perform *well* today (reps do that); you are learning that these controls exist and how to reach them live.

> The looper, like the rest of the engine, is fleeting until you resample it. If a live take sounds great, print it down before you lose it.

### Do
1. **(10 min) Looper sweeps.** Over a looping beat, sweep the DJFX looper [CTRL] knob from large to small and back. Find a stutter you like and a build that resolves into the beat.
2. **(8 min) Combine and capture.** Run the looper while sweeping a filter on a master bus. Resample a 10-second performance of it to a pad so you keep it.
3. **(5 min) Gesture round-up.** In one minute, use four performance gestures over a beat: hold a loop, sub-pad roll, a gate chop, and a [CTRL] sweep. Feel the machine as an instrument.

### Quiz 2
Take **Quiz 2** now (see [QUIZZES.md](QUIZZES.md)), closed-book, then grade against [ANSWER-KEYS.md](ANSWER-KEYS.md). It covers the four-bus engine, the signature effects, both sequencer methods, resampling, and the looper: Week 2's engines. Below 90%? Re-study on tomorrow's studio day.

### Self-check
1. What does the DJFX looper do, and what does the [CTRL] knob control while it runs?
2. How do you keep a looper performance instead of losing it?
3. Name four performance gestures the SP gives you over a playing pattern.
4. Why is resampling the bridge between performance and a finished, reusable sound?
5. What master-bus effect pairs naturally with the looper for a build?

---

# Day 14: Studio Day + Project 2

Consolidation, not new material. Three parts.

### 1. Review the week
Reread the Day 8–13 self-checks and answer from memory. The engine everything else relies on is the **four buses (Day 8)**; if "what does this effect touch?" is ever unclear, that is where to drill. Then make sure **resampling (Day 12)** is a reflex, because Week 3 and all real workflows lean on it.

### 2. The "three engines" drill (20 min)
Without notes, run all three engines in one short chain: route a pad to a bus and apply an effect, put a master effect on BUS 3, sequence a one-bar pattern over it (using both TR-REC and a live overdub), then resample the whole thing to one pad. Do it twice. The second pass should feel like operating one machine, not three.

### 3. Project 2: The Three Engines
Do **Project 2** (see [PROJECTS.md](PROJECTS.md)). It asks you to demonstrate the effects engine, the sequencer, and resampling in one short piece, with a recording that shows each in use. It is a proof of *operation*, not a song. Due end of Day 14.

### Looking ahead
You can now drive the machine's core: navigate it (Week 1), and operate its effects, sequencer, and resampling (Week 2). **Week 3 takes the SP out of its box and into the world.** DJ mode, the SP as a USB audio interface into a DAW, MIDI in and out and clock sync, moving files to and from a computer, and a full operational workflow that ties everything together into the final Operator's Demo. The internal machine is yours; now you connect it to everything else.
