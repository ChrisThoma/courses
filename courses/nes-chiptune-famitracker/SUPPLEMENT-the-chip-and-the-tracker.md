# Field Guide: The Chip & the Tracker

The reference appendix for MUS-8B. Read **§1, §2, and §3 before Day 1**. Everything else is here for when the lectures point at it.

---

## §1. The Ricoh 2A03 at a glance

The NES's CPU is a Ricoh 2A03 (NTSC) or 2A07 (PAL): a 6502 core with an audio unit bolted on, called the APU. The APU has **five channels**, and every one of them is **monophonic**. Five notes at a time, total, forever. That is the whole instrument.

| Channel | What it makes | Volume control | Notes |
|---|---|---|---|
| **Pulse 1** | Square/pulse wave, 4 duty settings | Yes, 4-bit (0–15) | Has a hardware sweep unit |
| **Pulse 2** | Identical to Pulse 1 | Yes, 4-bit (0–15) | Sweep unit behaves slightly differently on the negate path |
| **Triangle** | A 32-step quantized triangle wave | **No** | On or off only. One octave below a pulse at the same period value |
| **Noise** | Pseudo-random noise from a 15-bit shift register | Yes, 4-bit (0–15) | 16 pitches, plus a second "periodic" mode |
| **DMC** | 1-bit delta-encoded PCM samples | 7-bit output level, no per-note volume | Real recorded sound, at a real cost |

**The pulse channels.** Each has an 11-bit period register; the output frequency is `f = fCPU / (16 × (t + 1))`. A period below 8 silences the channel outright, which is why the pulse channels cannot play very high notes and why extreme upward pitch slides sometimes just stop. Volume is 4 bits, so you get **sixteen loudness steps and no more**, which matters when you write fades. The four duty settings are:

| Duty | Waveform | Character |
|---|---|---|
| 0 | 12.5% (`0 1 0 0 0 0 0 0`) | Thin, nasal, reedy. Great for leads that need to cut |
| 1 | 25% (`0 1 1 0 0 0 0 0`) | The classic NES lead. Bright but full |
| 2 | 50% (`0 1 1 1 1 0 0 0`) | A true square. Hollow, clarinet-like, the fattest of the four |
| 3 | 25% negated (`1 0 0 1 1 1 1 1`) | Phase-inverted 25%. **Sounds identical to duty 1 on its own** |

Duty 3 is not a fifth timbre. It is duty 1 upside down. It matters only when you are doing phase tricks against the other pulse channel; treat the palette as three usable timbres.

**The triangle.** A 32-step staircase between output values 0 and 15, so it is slightly grainy rather than a pure triangle, which is a large part of why NES bass sounds like NES bass. Its timer runs at the full CPU rate rather than half, so `f = fCPU / (32 × (t + 1))`: at the same period value it sounds **an octave lower** than a pulse. It has **no volume control at all**. You cannot fade it directly or accent it with the normal volume tools. You can only start it and stop it, and that single limitation shapes every NES bassline ever written. It reaches far lower than the pulses and also far higher; at period 0 or 1 it produces an ultrasonic tone that some games (Mega Man 2 among them) used as a way to "silence" the channel.

**The noise channel.** A 15-bit linear feedback shift register clocked at one of **16 periods** taken from a lookup table (NTSC: 4, 8, 16, 32, 64, 96, 128, 160, 202, 254, 380, 508, 762, 1016, 2034, 4068). Low table indices are fast and hissy, high indices are slow and rumbly. A **mode flag** changes which bit feeds back: normally bit 1, giving a 32,767-step sequence that reads as white noise; with the flag set, bit 6 feeds back and the sequence collapses to 93 steps, which is short enough that your ear hears it as a **pitched metallic buzz** instead of noise. That short mode is where NES lasers, engine hums, and robot voices come from.

**The DMC (DPCM) channel.** Plays 1-bit delta-modulated samples: each bit says "go up 2" or "go down 2" on a 7-bit output counter (0–127). Sixteen fixed playback rates, roughly 4.1 kHz to 33 kHz on NTSC. Samples must live in the upper memory region and a single sample maxes out at **4,081 bytes**: about one second at the fastest rate, or several seconds at the lowest, always grainy. It is how you get a real snare, a real kick, or a shouted word onto a cartridge, and it costs both ROM and CPU time.

**The mixer is not linear.** The APU mixes in two groups: the two pulses together, and triangle + noise + DMC together. Within each group the summing is non-linear, so **channels in the same group fight each other**. The practical consequences are covered on Day 17, and the biggest one is that a loud DPCM sample audibly ducks your triangle bass.

**Sources:** [NESdev Wiki: APU](https://www.nesdev.org/wiki/APU), [APU Pulse](https://www.nesdev.org/wiki/APU_Pulse), [APU Triangle](https://www.nesdev.org/wiki/APU_Triangle), [APU Noise](https://www.nesdev.org/wiki/APU_Noise), [APU DMC](https://www.nesdev.org/wiki/APU_DMC).

---

## §2. How a tracker thinks

A tracker is not a piano roll. It is a **spreadsheet that plays downward in time**, and the sooner you accept that the sooner you are fast.

```
Row  Pulse 1        Pulse 2        Triangle       Noise          DPCM
00 | C-4 01 F ...   E-4 02 A ...   C-2 03 . ...   8-# 04 F ...   ... .. . ...
01 | ... .. . ...   ... .. . ...   ... .. . ...   ... .. . ...   ... .. . ...
02 | ... .. . ...   ... .. . ...   ... .. . ...   D-# 04 8 ...   ... .. . ...
03 | D-4 01 E ...   ... .. . ...   ... .. . ...   ... .. . ...   ... .. . ...
```

(The noise column reads `8-#` and `D-#` rather than note names because that channel has only 16 pitches. See §4.)

Four vocabulary words, in the order that matters:

- **Row.** One horizontal slice where you enter note data and effect commands. Between rows, tracker ticks still advance envelopes, effects, and playback.
- **Column group.** Each channel gets four sub-columns: **note** (`C-4`), **instrument** (`01`), **volume** (`0`–`F`), and **effect** (`4xy`, and there can be more than one effect column per channel).
- **Pattern.** A block of rows, typically 64, for all five channels at once. This is your "bar" or "section" unit.
- **Frame** (also "order list" row). A frame is one line of the order list, saying which pattern each channel plays right now. Frames are how you build a song out of patterns: frame 0 might play pattern 00 on every channel, frame 1 plays pattern 01 on the pulses but reuses pattern 00 on the drums.

The huge idea in that last bullet: **each channel picks its own pattern per frame**. Drums that repeat for the whole song are one pattern, referenced forty times, not forty copies.

**Speed and tempo.** FamiTracker's default NTSC engine runs at 60 updates per second, and a tracker "tick" is one of those updates. Two numbers control time:

- **Speed** = ticks per row. Default 6.
- **Tempo** = a scaling number. Default 150.

With Tempo 150, one row is exactly as many ticks long as the Speed value. At Speed 6 and 4 rows to a beat, that is 24 ticks per beat; 3,600 ticks per minute ÷ 24 = **150 BPM**. The general formula for the displayed BPM is:

```
BPM = (24 × Tempo) / (Speed × RowsPerBeat)
```

Advice from the scene, and it is good advice: **leave Tempo at 150 and change Speed**, because non-default tempos can land on fractional tick counts and produce uneven rows. Speed 6 = 150 BPM, speed 8 = 112.5, speed 5 = 180, speed 4 = 225, all at 4 rows per beat. Want more timing resolution at the same perceived tempo? Change your rows-per-beat and compensate with Speed: 8 rows per beat at speed 3 is still 150 BPM, and now you have twice the grid resolution.

You can also set **two speeds alternating** (see the `Fxx` effect and Day 15) to get swing.

**Sources:** [FamiTracker Fxx](http://famitracker.com/wiki/index.php?title=Fxx), [NESdev forums on tempo](https://forums.nesdev.org/viewtopic.php?t=18881).

---

## §3. Getting the tracker running

**Recommended: Dn-FamiTracker.** The lineage runs FamiTracker → 0CC-FamiTracker → j0CC-FamiTracker → **Dn-FamiTracker**, which is the actively maintained one. Latest GitHub release verified for this course: **Dn0.5.3, released May 25, 2026**. Download from [the GitHub releases page](https://github.com/Dn-Programming-Core-Management/Dn-FamiTracker/releases). It is a Windows program.

| Your OS | What to do |
|---|---|
| Windows | Download the release zip, unzip, run the `.exe`. There is no installer, and that is fine |
| Linux | Run it under Wine. It works well; increase the audio buffer size in Settings if you get crackling |
| macOS | Run it under Wine (via Whisky, CrossOver, or a Wine wrapper). Same buffer advice |
| Anything, easier | Use **[FamiStudio](https://famistudio.org/)**, a free native NES tracker for Windows/Mac/Linux/Android with a piano-roll interface. Friendlier, somewhat less deep, imports FamiTracker modules and exports FamiTracker text with documented limitations |

This course teaches FamiTracker's model because it is the one the scene, the tutorials, and many NSF dissections assume. If you use FamiStudio, the core chip concepts still apply; the workflow and some effect/import/export details differ, and FamiStudio has a "FamiTracker tempo mode" for the speed/tempo behavior described above.

**Original FamiTracker** (0.4.6 stable, 0.5.0 beta) still exists and works. Dn-FamiTracker is a superset with bug fixes, better emulation, and NSF 2.0 export. Use Dn.

**First-run settings worth changing immediately:**
1. Increase the audio buffer if playback crackles.
2. Turn on **"Preview next/previous pattern"** so you can see the seams between patterns.
3. Set your default pattern length to 64 rows and note the highlight settings (rows 4 and 16 by default; the highlight is what makes bars readable).

---

## §4. The keyboard map

Notes are entered from the QWERTY keyboard laid out like two octaves of a piano.

```
Upper octave (base + 1):
   2 3   5 6 7      2=C#  3=D#   5=F#  6=G#  7=A#
  Q W E R T Y U     Q=C   W=D   E=E   R=F   T=G   Y=A   U=B

Home octave (base):
   S D   G H J      S=C#  D=D#   G=F#  H=G#  J=A#
  Z X C V B N M     Z=C   X=D   C=E   V=F   B=G   N=A   M=B
```

| Key | Does |
|---|---|
| numpad `/` and `*` | Step base octave down / up. **Use these**; they never collide with anything |
| `F2`–`F9` | Also documented as "set base octave 0–7," but these keys overlap with the transport keys below, so behavior varies by build and by which pane has focus |
| `1` | Insert a **note cut** (`---`), which stops the channel dead |
| `-` (minus) | Insert a **note release** (`===`), which triggers the instrument's release tail |
| Space | Toggle edit mode (the pattern border turns red when you can type) |
| Enter | Start / stop playback |
| Ctrl+Enter | Play just the current row (this is the "audition what I typed" key) |
| `F5` / `F7` / `F8` | Play from start / play from cursor / stop |
| Tab | Jump to the next channel |
| Ctrl+drag / Shift+arrows | Select a block for copy, paste, transpose |
| Ctrl+`F1`–`F4` | Transpose the selection: semitone down/up, then octave down/up |

Both note-column keys (`1` and `-`) are rebindable in Configuration → General, and some people move the release key somewhere friendlier.

The **volume column** takes hex `0`–`F` directly. The **effect column** takes a letter then two hex digits. Leaving a cell blank means "no change," which is the single most important tracker convention: a channel keeps doing whatever it was told last until you tell it otherwise.

**The noise channel's note column is different.** It has only 16 pitches, so the tracker shows them as hex values `0-#` through `F-#` rather than note names, where `0-#` is the lowest rumble and `F-#` is the brightest hiss. Everything in this course that shows a noise row uses that notation. You still enter them from the same piano keys; the display just tells you the truth about what the channel actually has.

**Sources:** [FamiTracker Wiki: Pattern editor](http://famitracker.com/wiki/index.php?title=Pattern_editor), [Dn-FamiTracker help: keyboard shortcuts](https://dn-programming-core-management.github.io/Dn-help/hlp/shortcuts.htm).

---

## §5. The effect command reference

Every effect is a letter plus two hex digits. Type it in the effect column of the channel it should apply to.

### Timing and structure (these apply to the whole song)

| Effect | Meaning |
|---|---|
| `Fxx` | **Speed** if `xx` is 01–1F, **tempo** if 20–FF |
| `Bxx` | Jump to frame `xx`. This is how you set a loop point |
| `Dxx` | Skip to the next frame, starting at row `xx`. How you end a pattern early |
| `Cxx` | Halt: end the song |

### Pitch

| Effect | Meaning |
|---|---|
| `0xy` | **Arpeggio.** Cycles root, root+`x` semitones, root+`y` semitones, one step per tick until another pitch effect or `000` cancels it |
| `1xx` | Portamento up at speed `xx` (keeps going forever) |
| `2xx` | Portamento down at speed `xx` |
| `3xx` | **Automatic portamento**: glide to the next note entered, at speed `xx` |
| `4xy` | **Vibrato**, speed `x`, depth `y`. `40y` turns it off |
| `Qxy` | Pitch slide **up** to a note `y` semitones away, at speed `x` |
| `Rxy` | Pitch slide **down** to a note `y` semitones away, at speed `x` |
| `Pxx` | Fine pitch offset. `80` is center; above raises, below lowers. Use for detune. Note that this runs the *opposite* way from the instrument pitch sequence in §6, which is inverted |
| `Hxy` / `Ixy` | **Hardware sweep** (pulse channels only), up/down. `x` = period, `y` = shift |

### Volume and timbre

| Effect | Meaning |
|---|---|
| `Axy` | Volume slide. `x` = slide up rate, `y` = slide down rate. (The bundled help file states this the other way round; it is wrong. Try `A50` and `A05` on a held note and trust your ears) |
| `7xy` | Tremolo, speed `x`, depth `y` |
| `Vxx` | **Duty cycle** on the pulses (`V00`–`V03`); **noise mode** on noise (`V00` = white, `V01` = periodic buzz) |
| `Exx` | Set volume (deprecated; use the volume column) |

### Note timing

| Effect | Meaning |
|---|---|
| `Gxx` | **Delay** the note on this row by `xx` ticks |
| `Sxx` | **Cut** the note after `xx` ticks |

### DPCM only

| Effect | Meaning |
|---|---|
| `Wxx` | DPCM playback rate (00–0F) |
| `Xxx` | Retrigger the sample every `xx` ticks |
| `Yxx` | Start the sample `64 × xx` bytes in |
| `Zxx` | Set the DMC delta counter directly. Side effect: **changes the mix level of triangle, noise, and DPCM** |

**Source:** [FamiTracker Effect Commands, Battle of the Bits Lyceum](https://battleofthebits.com/lyceum/View/FamiTracker+Effects+Commands).

---

## §6. Instruments: the five sequences

A 2A03 instrument in FamiTracker is not a sample or a preset. It is up to **five sequences**, each a list of values stepped through **one value per tracker update**. With Tempo 150, that means one value per tick, so at speed 6 a sequence advances 6 steps per row.

| Sequence | Range | What it does |
|---|---|---|
| **Volume** | 0–15 | The amplitude envelope. This is your attack, decay, and sustain. On triangle, nonzero values act more like on/off gating than real volume |
| **Arpeggio** | semitone offsets | Adds/sets pitch in semitones per tick. Fast chords, or a pitch "blip" attack |
| **Pitch** | signed | Adds to the channel's *period* each tick and **accumulates**. Because it is period and not frequency, **positive values bend the pitch down and negative values bend it up**. Drifts, dives, slow bends |
| **Hi-Pitch** | signed | The same, inversion included, but in coarser steps, for fast, wide sweeps |
| **Duty / Noise** | 0–3 (pulse), 0–1 (noise) | Changes timbre over time. Pseudo-PWM lives here |

Two markers make sequences musical:

- **Loop point:** when the sequence reaches the end, it jumps back here and repeats. This is your **sustain**. A volume sequence of `15 12 10 | 8 8` with the loop on the last two values gives you a plucked attack that then holds.
- **Release point:** everything after this marker plays only when the note is **released** (as opposed to cut). This is your **release tail**. Note cut (`---`, the `1` key) stops instantly and ignores the release; note release (`===`) triggers it.

**Arpeggio schemes.** The arpeggio sequence has modes: **absolute** (offsets are added to the played note, the usual choice), **fixed** (the values *are* the notes, ignoring what you played, which is how you build drum instruments and sound effects), and **relative** (offsets accumulate). Absolute is what you want 90% of the time.

**Source:** [FamiTracker Wiki: Instruments](http://famitracker.com/wiki/index.php?title=Instruments).

---

## §7. Practical ranges and gotchas

| Thing | Reality |
|---|---|
| Pulse low end | Runs out around A-1; below that the period register can't go high enough |
| Pulse high end | Silences when the period drops under 8, roughly above the top of octave 7 |
| Triangle | Reaches roughly an octave below the pulses. **Do not write triangle above about octave 4**; it thins out and stops reading as bass |
| Noise pitch | Only 16 values, and they are not evenly spaced. There is no "noise in key" |
| Volume steps | 16 total. A four-step fade is audible as steps, not a smooth fade |
| Triangle volume | Does not exist as a real loudness control. In FamiTracker, triangle volume/instrument values can silence or gate the channel, but they cannot make a quieter triangle |
| DPCM | Eats ROM and CPU. On real hardware, DMC DMA can corrupt controller reads; irrelevant for music-only NSFs, relevant if you ever score a game |
| Retriggering | Re-entering the same note restarts the instrument's sequences from step 0. That *is* your articulation control |

---

## §8. Required listening: the canon

Ten tracks that between them contain most of the vocabulary in this course. Find them as NSF rips ([the NSF archives on OverClocked ReMix](https://ocremix.org/chiptunes/) are a good start) so you can solo channels, or just listen on any streaming service.

| Track | Composer | Listen for |
|---|---|---|
| Super Mario Bros., "Overworld" | Koji Kondo | The masterclass in economy: one pulse melody, one pulse harmony line, triangle walking bass, noise shuffle |
| The Legend of Zelda, "Overworld" | Koji Kondo | Melodic writing that survives having no chords at all |
| Metroid, "Brinstar" | Hirokazu Tanaka | Atmosphere from a chip. Sparse, modal, uses silence |
| Mega Man 2, "Dr. Wily Stage 1" | Takashi Tateishi | Arpeggio-driven harmony under a screaming lead; the template for a thousand chiptunes |
| Mega Man, "Cut Man" | Manami Matsumae | Counter-melody writing: the two pulses genuinely converse |
| Castlevania, "Vampire Killer" | Kinuyo Yamashita / Satoe Terashima (credited jointly as "James Banana"; sources disagree on which of them wrote this one) | Groove and drive from noise plus a relentless triangle |
| Silver Surfer, "Level 1" | Tim & Geoff Follin | The upper limit of what the chip does. Dense arpeggios, tempo changes, fake guitars |
| Ninja Gaiden, "Act 1-1" | Keiji Yamagishi | Rock arrangement instincts applied to five voices |
| Journey to Silius, "Stage 1" | Naoki Kodaka | The best bass writing on the system, including a classic Sunsoft DPCM-bass approach |
| DuckTales, "The Moon" | Hiroshige Tonomura | Hooks. Just relentlessly good hooks |

**How to listen for this course:** pick one channel and follow only it for a full pass. Then another. You will hear the arrangement decisions immediately, and you will notice how often a "chord" is one voice moving fast.

---

## §9. Where to go next

| Direction | Start here |
|---|---|
| Deeper hardware knowledge | [NESdev Wiki](https://www.nesdev.org/wiki/Nesdev_Wiki), the definitive reference for everything about the console |
| Other chips | LSDj (Game Boy), Deflemask and Furnace (multi-chip: SID, Genesis, PC Engine), SunVox |
| Composition-first tooling | [FamiStudio](https://famistudio.org/), piano roll instead of a hex grid |
| Putting music in a real NES game | [Pently](https://github.com/pinobatch/pently), a free NES sound driver that imports FamiTracker files; then 6502 assembly |
| Community and competition | [Battle of the Bits](https://battleofthebits.com/) runs regular chip compos including Famicom-format battles; [chipmusic.org](https://chipmusic.org/) forums |
| Hearing your work on hardware | An EverDrive-style flash cart plays NSFs on a real NES; or the NSF player in Mesen, an accurate emulator |

---

## §10. Glossary

| Term | Meaning |
|---|---|
| **APU** | Audio Processing Unit, the sound half of the 2A03 |
| **Arpeggio** | Cycling rapidly between notes on one voice to imply a chord |
| **Detune** | Offsetting two voices slightly in pitch so they beat against each other and sound thicker |
| **DPCM** | Delta Pulse Code Modulation, the 1-bit sample format the DMC channel plays |
| **Duty cycle** | The fraction of a pulse wave's period spent high; the pulse channel's timbre control |
| **Frame** | One row of the order list (also: one 1/60s tick, from the video frame rate; context tells you which) |
| **FTM** | FamiTracker Module, the editable project file |
| **LFSR** | Linear Feedback Shift Register, the circuit that generates the noise channel's output |
| **NSF** | Nintendo/NES Sound Format, the exported playable chiptune file |
| **Order list** | The arrangement: which pattern each channel plays in each frame |
| **Pattern** | A reusable block of rows |
| **Row** | One time slice; the smallest unit of the grid |
| **Speed** | Ticks per row |
| **Tick** | One tracker update; by default on NTSC modules, 1/60 second. Sequences and effects step once per tick |
