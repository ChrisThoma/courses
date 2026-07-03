# Machine Reference: Layout, Signal Flow, Shortcuts & Resources (MUS-40H)

This is the page you come back to all course. Read the first five sections (**The layout**, **The screen and how you navigate**, **Projects, storage & backup**, **Signal flow**, **The shortcuts that matter**) *before Day 1*. The rest is reference you will return to as each topic comes up.

Button names and menu wording shift slightly between firmware versions. The *logic* below does not. When the exact wording on your screen differs from the course, trust the printed labels on the machine and the [official reference manual](#10-resources-curated-free-trustworthy); the SHIFT key reaches the second label printed on most buttons.

> **Do this before anything else: update the firmware.** As of this writing the latest SP-404 MK2 system program is **Version 5.52**, and the machine has changed enormously since launch. The step sequencer, most of the effects, DJ mode, the crossfader, and Serato support all arrived in updates. Download the latest firmware and the SP-404 MK2 app from Roland's support site, run the updater, then start the course. A current machine matches what you read here; an out-of-the-box one may be missing whole features the lessons use.

---

## 1. The layout (the 60-second tour)

Set the unit down with the screen along the top and the 16 rubber pads filling the lower right.

- **The 16 pads.** Velocity-sensitive (harder press = louder) and backlit in color. In sample mode each pad holds and plays one sample. They are your keyboard, your drum kit, your performance surface, and, in many menus, your selection buttons all at once.
- **The bank buttons (A/F through E/J), down the left of the pads.** Each bank is a fresh set of 16 pads. There are **10 banks per project, A through J**, so one project holds up to **160 sample pads**. Banks A–E are the first press of each button; banks F–J are a second press (the button flashes to show you are on the "second floor").
- **The screen and the value knob, up top.** A small display shows the current sample, mode, and parameter. The **[VALUE]** knob (also called the control or CTRL knob) is your main navigator: **turn** it to move through lists and change values, **press** it to enter a menu or confirm.
- **The CTRL knobs.** Dedicated control knobs (**[CTRL 1]**, **[CTRL 2]**, **[CTRL 3]**) sit near the top. Their job changes with context: they tweak effect parameters, set levels in DJ mode, and adjust whatever the screen says they adjust right now. Always glance at the screen to see what a knob is doing.
- **The mode and transport buttons.** **[REC]** (record/sample), **[PATTERN SELECT]** (the sequencer), **[REMAIN]**, the dedicated **effect buttons** (FILTER+DRIVE, RESONATOR, DELAY, ISOLATOR, DJFX LOOPER, MFX, and more), **[START/END]** and the sample-edit controls, **[SHIFT]** (hold for the second function on a button), and the **[SUB PAD]** (a 17th pad with performance roles).
- **The pitch/speed knob.** Changes how fast a sample plays back, and therefore its pitch and key.
- **The back panel.** **POWER** (USB-C bus power, the supplied adapter, or six AA batteries), **LINE IN** and **MIC/GUITAR IN** (the inputs you sample through; a guitar or bass plugs straight into the latter), **LINE OUT** and **PHONES** (the outputs), **MIDI IN/OUT** (3.5mm TRS mini-jacks; an adapter cable reaches 5-pin gear), and the **USB-C** port (audio, MIDI, and file transfer over one cable). The **SD card** slot is for backup and import/export; projects, samples, and patterns live on the machine's internal storage.

> You do not have to memorize this. You need to know each thing exists so the lessons make sense. The pads, the [VALUE] knob, [SHIFT], and [REC] are most of what you touch.

---

## 2. The screen and how you navigate (the skill this course is really about)

The whole machine is driven by one repeating gesture: **hold or press a function button, then turn or press the [VALUE] knob, then act on a pad.** Once that loop is automatic, no menu is scary.

- **The [VALUE] knob is the cursor.** Turn to move a highlight or change a number; press to enter a sub-menu or confirm a choice. Most "how do I set X?" questions end at this knob.
- **[SHIFT] reaches the second label.** A great many buttons have a small word printed above or below them. Hold **[SHIFT]** and press the button to reach that second function. When the manual says "press SHIFT + [something]," this is what it means.
- **Pads double as menu buttons.** Inside many menus the 16 pads become numbered choices or toggles (this is how DJ mode assigns channels, how you pick a chop, how you confirm a system option). The screen tells you when the pads have switched jobs.
- **The system / utility menu** holds the global settings: display brightness, auto-off, pad sensitivity and velocity curve, metronome, the USB audio routing, MIDI settings, and the format/backup tools. Reach it by holding [SHIFT] and pressing **pad 13** (UTILITY), then turn [VALUE] to walk the list. You will visit it on Day 2 to set the machine up once, and rarely after.

> The fastest way to stop feeling lost: when you do not know how to do something, slow down and read the screen out loud. It is almost always telling you which knob does what and which pad to press.

---

## 3. Projects, storage & backup (the most important page here)

Everything you make on the SP-404 MK2 lives on its **internal storage** (about 16 GB), organized into **projects**. A project is one self-contained world: its 10 banks of samples, its patterns, its tempo, its settings. The machine holds **16 projects** and you switch between them from the menu. The **SD card slot** is not where your work lives: a card (sold separately, SDHC/SDXC) is for **backup, restore, import, and export**, and one card holds up to 64 backups. The **SP-404 MK2 app** over USB-C does the same jobs from a computer.

**The golden rules:**

- **The SP saves as you go.** There is no save command and nothing to remember before power-off: record a sample or edit a pattern and it is already written to internal storage. The flip side is that your *mistakes* are written just as faithfully. A deleted pad is gone for real, so treat the backup as your undo.
- **Never yank power (or pull the SD card) while the machine is writing.** That is the one reliable way to corrupt data. Power down with the switch and let a busy screen finish.
- **Back up weekly, and before anything risky.** Put an SD card in the slot and run the backup from the UTILITY menu (hold [SHIFT] and press pad 13), or connect USB-C and copy your projects out with the SP-404 MK2 app. Storage can fail or fill; a backup is the difference between a hiccup and a disaster.
- **A fresh project per big idea.** Projects are cheap. Starting a new one for each course project keeps your banks uncluttered.

If you remember one thing from this whole reference, it is this section. Lost work is the fastest way to quit.

---

## 4. Signal flow (how sound moves through the machine)

Understanding the path audio takes is what turns the SP from a box of mysteries into an instrument you can reason about.

**Recording (sound coming in):**

```
  source            into the SP             stored
 (phone / laptop /  →  LINE IN or MIC/GUITAR  →  the REC engine  →  a sample
  turntable / mic       (or USB audio)       (level, INPUT FX?)   on a pad
  / the SP itself)
```

You set the input **level** (loud but not clipping), choose whether to record **dry** or through the **INPUT FX**, and commit the result to a **pad** in the current bank.

**Playback through the four buses (sound going out):**

```
  a pad's sample → its pad settings → BUS 1 / BUS 2 → BUS 3 / BUS 4 → LINE OUT / PHONES
                   (pitch, mode,       (per-sample FX)  (master FX)
                    volume, pan)
```

This is the heart of the machine's design, and §7 explains it in full. The short version: **BUS 1 and BUS 2 carry per-sample effects** (you choose, per pad, whether it is dry or routed to BUS 1 or BUS 2), and **everything then passes through BUS 3 and BUS 4, which are master effects on the whole mix.** Effects change the sound in real time without altering the stored sample.

**Resampling (the SP's central move):**

```
  the SP's own output → back into the REC engine → a new pad
  (pads + buses + FX)                               (the result, committed)
```

Resampling is just sampling the machine's own output instead of an external source. It "prints" an effect, glues a sequence into one loop, and frees up the voices and pads a complex sound was using. Week 2 makes it a habit.

---

## 5. The shortcuts that matter (your everyday moves)

You do not need the full shortcut list (it is long; the [official one](#10-resources-curated-free-trustworthy) is in §10). These are the moves the course leans on. Wording can vary by firmware; the printed labels are your guide and [SHIFT] reaches the second label.

| To do this | The move (general form) |
|---|---|
| Move through a menu / change a value | Turn **[VALUE]**; press it to enter or confirm |
| Reach a button's second function | Hold **[SHIFT]**, press the button |
| Open the system / utility menu | **[SHIFT]** + **pad 13** (UTILITY), then turn **[VALUE]** |
| Back up / restore / import / export | **[SHIFT]** + **pad 13** (UTILITY), then the SD-card and export functions |
| Sample / record | Press **[REC]**, choose source and level, start (manually or by auto-trigger) |
| Skip-back sample | After hearing something good, grab the last several seconds the SP was buffering |
| Play a sample | Press its **pad** (in the current bank) |
| Hold a sample playing | **[REMAIN]** / hold, so it keeps sounding after you let go |
| Trim a sample | **[START/END]**, turn **[VALUE]** to move the points |
| Chop a sample | Sample edit, then the **MARK/CHOP** function; add markers, then assign to pads |
| Change pitch/speed | The **pitch/speed** knob (per pad) |
| Choose play mode | The pad's **gate / one-shot / loop** setting |
| Route a pad to an effect | Set the pad's **BUS** (DRY / BUS 1 / BUS 2); turn on that bus's effect |
| Turn an effect on / edit it | Press its **effect button**; tweak with **[CTRL 1–3]** |
| Open the sequencer | **[PATTERN SELECT]**, then **[REC]** on an empty pattern to record |
| Step-record (TR-REC) | In a pattern, switch to **TR-REC** and place hits on the 16 pads as steps |
| Resample | Arm **[REC]** with the source set to the SP's own (resample) output, pick a destination pad, record |
| Enter DJ mode | Press the **[D/I]** and **[E/J]** bank buttons **together** |
| Copy / delete a pad | The **copy** and **delete** functions (hold the function, tap the pad) |
| Undo | The **undo** function (limited; do not rely on it, resample instead) |

> The pattern of the whole machine, one more time: **press a function button (often with [SHIFT]), then turn the knob or press a pad.** Internalize that and the menus stop being scary.

---

## 6. The pads: gate, one-shot, and loop (the three ways a pad plays)

Every pad plays its sample in one of three modes. Choosing the right one is half of using the machine well.

| Mode | What it does | Use it for |
|---|---|---|
| **Gate** | Plays only while you hold the pad; stops the instant you release | Chops you want to "play" rhythmically; stabs; anything where length is a performance |
| **One-shot** (trigger) | One press plays the whole sample through; release does nothing | Drum hits; one-off vocal lines; risers |
| **Loop** | Plays and repeats until you stop it | Drum loops; background textures; a beat you build over |

A separate **reverse** setting plays the sample backwards and pairs with any of the three. Two more pad behaviors matter: **[REMAIN] / hold** (keep a sample sounding hands-free) and **mono vs poly** (whether re-triggering a pad cuts off its own previous sound, which you want for a stuttering hi-hat and do not want for a ringing piano).

---

## 7. The four-bus effects engine (read before Week 2)

The MK2's effects are organized into **four buses**, and this layout is the single most important thing to understand about operating the machine's sound.

- **BUS 1 and BUS 2 are per-sample (insert) buses.** Each pad is routed to **DRY**, **BUS 1**, or **BUS 2**. Whatever effect you load on a bus is applied only to the pads sent to it. So you might put a filter on BUS 1 and send only your drums there, and a delay on BUS 2 for a vocal.
- **BUS 3 and BUS 4 are master buses.** Everything (DRY pads plus BUS 1 and BUS 2) flows through the two master buses, BUS 3 and BUS 4. Effects here color the **whole mix**: a Vinyl Sim or Cassette for overall lo-fi character, an isolator across the master, a final compressor.

```
  pad (DRY) ─────────────┐
  pad → BUS 1 (insert FX) ┤→ BUS 3 & BUS 4 (master FX) → OUTPUT
  pad → BUS 2 (insert FX) ┘
```

- **The effect buttons** load and toggle effects: **[FILTER+DRIVE]**, **[RESONATOR]**, **[DELAY]**, **[ISOLATOR]**, **[DJFX LOOPER]**, **[MFX]** (a deep menu of many effect types), and more. You assign an effect to a bus, then turn it on and shape it with **[CTRL 1–3]**.
- **INPUT FX** are a separate stage that affects only the input jacks. You can apply an INPUT FX to incoming audio and **record it that way** (Day 5/Day 9), committing the effect into the sample.
- **There is a limit to how many effects run at once** (the machine shares processing power across the buses). The screen and manual tell you when a combination is too heavy. When you want more than the engine allows, **resample** (§4) to bake one effect in and free up the engine.

The reason this matters: once you know which bus an effect lives on, you always know *what it will affect*. Confusion about the SP's effects is almost always confusion about buses.

---

## 8. Connecting to the world: USB audio and MIDI (read before Week 3)

The single USB-C port carries three things at once: **power, MIDI, and digital audio**, plus file transfer with the app.

- **Class-compliant USB audio.** The SP-404 MK2 is a class-compliant USB audio device, so a computer (and many phones/tablets) sees it as an audio interface with no driver install. You can stream the SP's output into a DAW as a stereo input, and stream audio from the computer into the SP. A **USB audio routing setting in the Utility menu** decides what the USB sends to the computer (to record the full mix into a DAW, set it to **MIX OUT**; the exact label varies by firmware, so go by the Utility menu's USB audio section).
- **Class-compliant USB MIDI.** Over the same cable the SP sends and receives MIDI: pad notes, and clock. A DAW or keyboard can play the SP's pads; the SP can play or sync external gear.
- **MIDI sync.** The SP can be the clock leader or follower. It synchronizes **tempo, measure, and beat** with a DAW or external device, so its sequencer locks to your project's grid. You choose which device leads in the MIDI settings.
- **The MIDI IN/OUT jacks** do the same job for hardware that does not speak USB MIDI (a hardware sequencer, a drum machine, a synth). They are **3.5mm TRS mini-jacks**, not 5-pin DIN sockets; a TRS-to-5-pin MIDI adapter cable connects standard gear.

Week 3 walks each of these through a real setup. For now, know the one cable does power, MIDI, and audio together.

---

## 9. The family the machine comes from (context, not trivia)

The SP-404 MK2 is the newest of a line, and that line has a *sound* producers chase on purpose.

- **1998, Boss SP-202 "Dr. Sample."** The cheap, gritty origin: low fidelity, a few seconds of sampling, a cult following.
- **2001, SP-303 "Dr. Sample."** Home of the legendary **Vinyl Sim** effect, the lo-fi filter that defined an era. **Madlib** built much of his sound on it.
- **2005 on, SP-404 / SP-404SX / SP-404A.** The red-and-black boxes that became the standard sampler of the beat scene: **Flying Lotus, Knxwledge, Kaytranada**, and the Los Angeles beat-tape world ran on them.
- **2021, SP-404 MK2.** The modern overhaul: bigger screen, better pads, a real four-bus effects engine, a step sequencer, DJ mode, USB-C, and a long tail of firmware updates. It keeps the lineage's lo-fi soul (Vinyl Sim and Cassette are right there) while finally being a competent full production and performance tool.

When you want to get better, go listen to the people who defined the instrument: Madlib, Flying Lotus, Knxwledge, Kaytranada, J Dilla.

---

## 10. Resources (curated, free, trustworthy)

- **Official Roland SP-404 MK2 support & reference manual** ([roland.com](https://www.roland.com/global/products/sp-404mk2/), updates at [Roland Support](https://www.roland.com/global/support/by_product/sp-404mk2/updates_drivers/)): the firmware updater (currently Ver. 5.52), the SP-404 MK2 app for moving samples to and from a computer, and the full reference manual. The final word on any button.
- **DJ mode in the reference manual** ([static.roland.com](https://static.roland.com/manuals/sp-404mk2_reference/eng/17804949.html)) and **bus routing** ([BUS 1/2](https://static.roland.com/manuals/sp-404mk2_reference/eng/17805308.html), [BUS 3/4](https://static.roland.com/manuals/sp-404mk2_reference/eng/17805381.html)).
- **Synchronizing with external MIDI** ([Roland Support](https://support.roland.com/hc/en-us/articles/4408205416475-SP-404MK2-Synchronizing-with-an-External-MIDI-Device)).
- **Official shortcut list (PDF)** ([Roland](https://files.kraftmusic.com/media/ownersmanual/Roland_SP-404MKII_Shortcut_List.pdf)): every key combination on one sheet. Print it and keep it next to the machine.
- **NearTao's unofficial SP-404 MK2 guide** (search "NearTao SP-404 mk2 guide"): a thorough, community-loved free reference that explains the menus in plain language, often clearer than the manual.
- **The SP-404 community** (the r/SP404 subreddit and the SP-404 MK2 Facebook group): friendly places to search a problem or watch how others work.
- **Sister course:** once you can *operate* the machine, [MUS-45H: Sampling & Beatmaking on the SP-404 MK2](#/sp404-mk2-sampling) teaches the *craft* of making beats on it.

---

*Specifics here were checked against Roland's official documentation: the [SP-404 MK2 product and support pages](https://www.roland.com/global/products/sp-404mk2/), the [updates page](https://www.roland.com/global/support/by_product/sp-404mk2/updates_drivers/) (firmware Ver. 5.52), the [reference manual DJ mode](https://static.roland.com/manuals/sp-404mk2_reference/eng/17804949.html) and [bus FX](https://static.roland.com/manuals/sp-404mk2_reference/eng/17805308.html) sections, the [MIDI sync support article](https://support.roland.com/hc/en-us/articles/4408205416475-SP-404MK2-Synchronizing-with-an-External-MIDI-Device), and the [official shortcut list](https://files.kraftmusic.com/media/ownersmanual/Roland_SP-404MKII_Shortcut_List.pdf). Firmware differences mean your unit's exact wording may vary; the logic holds.*
