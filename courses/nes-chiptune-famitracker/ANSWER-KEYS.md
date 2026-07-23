# Answer Keys: MUS-8B

Grade honestly. Partial credit is fine on anything worth more than a point; the goal is to find the gaps, not to award yourself a grade. For the "Do" sections, the standard is stated in the question, and the honest test is to **export and listen back**, not to judge while you are still typing.

---

## Quiz 1 Key: The Chip & Five Voices *(40 pts)*

### Part A: The chip (8 pts)
1. Pulse 1, Pulse 2, Triangle, Noise, DMC (DPCM).
2. Five. All five channels are monophonic.
3. The triangle.
4. Sixteen (4-bit, 0–15).
5. Three. Duty 3 is a phase-inverted 25%, so it sounds identical to duty 1 on its own.
6. 12.5% is thin and nasal; 50% (the true square) is the fattest.
7. Sixteen, taken from a lookup table, and they are **not** musically spaced. The tracker shows them as hex values `0-#` (lowest grind) through `F-#` (brightest hiss) rather than note names. Treat them as numbered hiss flavors, not notes.
8. A list of instructions telling the sound chip which registers to write, updated 60 times a second. The audio is generated live by the hardware.

### Part B: The tracker (8 pts)
1. "No change." The channel keeps whatever value it was last given.
2. A **pattern** is a reusable block of rows. A **frame** is one row of the order list saying which pattern each channel plays right now.
3. Note, instrument, volume, effect.
4. 150 BPM.
5. Speed 4.
6. Non-default tempos can produce fractional ticks per row, making some rows longer than others and putting a stagger in the groove.
7. Because your drums then exist in dozens of places and changing them means editing all of them. Reference one pattern from many frames instead.
8. The `1` key.

### Part C: Instruments (8 pts)
1. Volume, Arpeggio, Pitch, Hi-Pitch, Duty/Noise.
2. Once per tracker update; at the default NTSC/Tempo 150 setup, once per tick (1/60 s).
3. Six.
4. It is where the sequence jumps back to at the end, so everything from the loop point on repeats for as long as the note is held. It is your sustain.
5. It separates the held portion from the tail: values after it play only when the note is **released** (`===`), not cut.
6. `---` is a note cut (the `1` key), which stops the channel instantly and skips the release. `===` is a note release (the `-` key), which plays the part of the sequence after the release point.
7. It puts a fast pitch blip on the front of the note, which the ear reads as a percussive, plucked attack rather than three separate notes.
8. Downward. The pitch sequence adds to the channel's **period**, not its frequency, so positive values lower the note and negative values raise it. And it **accumulates**: a looping `1` adds one more every tick, forever, so the pitch runs away downward out of hearing. (That runaway is exactly how the triangle kick works.)

### Part D: Triangle and noise (8 pts)
1. Note length (short = light, long = heavy), register (octave drops for emphasis), and motion (busier writing in place of dynamic variation).
2. Octaves 1–3. Above about octave 4 it stops reading as bass.
3. Play a very short low note with an instrument whose pitch sequence dives steeply downward (accumulating), so the pitch drops fast like a kick's beater transient.
4. Your bassline stops for the two or three rows the kick occupies.
5. Because it cannot use dynamics, so interest has to come from note choice: walking lines, octave jumps, passing tones.
6. It switches the noise channel to periodic (short) mode, where the shift register's sequence collapses to 93 steps and the ear hears a pitched metallic buzz. It is used for lasers, engine drones, and robot noises.
7. The length of the volume envelope. Same pitch, longer decay.
8. Roughly `3`–`6`. Hats too loud is the most common drum mix error.

### Part E: Do (8 pts)
1. (4) Full credit if the volume sequence has a shaped attack and decay with a loop point holding a sustain, an arpeggio sequence of a few values resolving to `0` and looping there, and a single held note that is not boring. Deduct 1 for a missing loop point (the note will cut off), 1 for a flat envelope, 2 if it is indistinguishable from the default instrument.
2. (4) Full credit for a recognizable hat/snare backbeat where the snare is clearly louder than the hats and at least three distinct hat volumes are used. Deduct 2 if all hats are the same volume, 1 if hats and snare are within two volume steps of each other.

---

## Quiz 2 Key: Writing for the Chip *(40 pts)*

### Part A: The voice budget (8 pts)
1. Eight to ten; you have five.
2. Cut parts, fake parts (arpeggio, echo), time-share a channel across bars, and take turns so parts interleave instead of overlapping.
3. Giving one channel different jobs in different bars or sections: harmony here, a fill there, an arpeggio bed later. A channel's job is per-bar, not per-song.
4. Different duty from the lead, lower volume than the lead, and (usually) a different register.
5. Because they occupy the same harmonic territory, so neither reads as foreground.
6. Thirds and sixths. Fourths and fifths sound hollow and archaic, which is occasionally what you want.
7. Playing eight bars on a bad speaker at low volume and checking that you can identify the melody within two seconds.
8. The Legend of Zelda "Overworld" is the canonical answer; Super Mario Bros. "Overworld" is also acceptable. Credit any track where the harmony is implied by melody and bass alone.

### Part B: Arpeggio (8 pts)
1. Because a chord needs three voices and you cannot spare three of five. Cycling the notes rapidly on one voice gets the harmony for the price of one channel.
2. C major (C, E, G).
3. C minor (C, Eb, G).
4. `057` (root, +5, +7).
5. `0xy` starts arpeggio on a specific channel and keeps it running until another pitch effect or `000` cancels it; an arpeggio sequence builds it into the instrument so every note played on it is a chord. Use the effect for a section-level or manually controlled arpeggio, the sequence for a chord-bed instrument.
6. Arpeggio steps once per tracker update, not once per musical beat. At Tempo 150, the speed value determines how many arpeggio steps fit inside each written row or note length. Short one-row notes at low speed values may not state the whole chord clearly; long held notes give the arpeggio time to read as a continuous chord.
7. Any two of: it is loud and busy for its volume number; it cannot be subtle; it occupies the whole channel; two arpeggios at once phase against each other badly.
8. Running it at full volume for the entire song, so it stops being heard within thirty seconds.

### Part C: Echo and expression (8 pts)
1. There is no reverb or effects processor on the chip. The APU generates pulse, triangle, noise, and DMC output directly, then mixes them; there is no send, delay buffer, or reverb unit.
2. Copy the melody to a second channel, shift it down by about two rows (at speed 6), and drop its volume by roughly six steps.
3. Any two of: use a duller instrument (50% duty, soft attack) since real echoes lose highs; add a second, quieter echo if a channel is free; use `Gxx` for sub-row delay offsets.
4. An entire channel. It is a bad trade in a dense arrangement where that channel could carry a counter-melody, and a good one in a sparse atmospheric track.
5. `Pxx` is a fine pitch offset with `80` as center. Playing the same note on both pulses with one slightly offset makes them beat against each other for a fatter, chorused sound. Cost: both pulse channels for one note.
6. `x` is speed, `y` is depth. Vibrato should be delayed a few rows because real players do not start vibrato at the attack, and an immediate vibrato sounds artificial.
7. `3xx` is automatic portamento: it glides to whatever note you enter next and keeps doing so until cancelled. `Qxy` slides up a specific number of semitones (`y`) at speed `x` and then stops.
8. Only the pulse channels. It is really a sound-effect tool (lasers, jumps, explosions) rather than a musical one, partly because it silences the channel if it drives the period out of range.

### Part D: Drums and form (8 pts)
1. Which noise pitch, which volume, and which rows.
2. Varying the hat volumes.
3. Triangle kick (costs you bass notes), noise kick (steals from the hats and sounds weak), DPCM kick (costs ROM/CPU and ducks the triangle and noise).
4. 4,081 bytes.
5. The triangle, noise, and DMC share a non-linear mixing group, and a high DMC output level attenuates the other two.
6. Intro, A section, B section (sometimes C), then loop, and the loop returns to the top of the A section rather than to the intro.
7. Jumps to frame `xx`. It is how you set a loop point.
8. Any three of: a fill in the last bar leading into the top; end on a chord that wants to resolve to the first chord; make sure nothing is still decaying on the final row; make sure no persistent effect (vibrato, portamento, duty) is left in the wrong state; match the drum pattern's last bar to what naturally precedes bar 1.

### Part E: Do (8 pts)
1. (4) Full credit if the chord quality is clearly audible, the progression changes per bar, the volume sits around `7`–`9` rather than `F`, and the one-bar dropout is obvious on playback. Deduct 2 if there is no dropout, 1 if the arpeggio is too loud.
2. (4) Full credit if two of key, register, density, or rhythm genuinely change and a listener would identify it as a different section. Deduct 3 if only the melody changed.

---

## Final Exam Key *(60 pts)*

### Part A: Speed fundamentals (10 pts, 1 each)
1. Pulse 1, Pulse 2, Triangle, Noise, DMC. 2. Triangle. 3. Three. 4. Sixteen. 5. C major. 6. Jump to frame `xx` (the loop point). 7. Speed 6. 8. The `1` key. 9. Once per tracker update; at default NTSC settings, sixty times a second. 10. NSF.

### Part B: The hardware (12 pts, 2 each)
1. Because the triangle's timer is clocked at the full CPU rate rather than at half rate like the pulses, so `f = fCPU / (32 × (t+1))` instead of `fCPU / (16 × (t+1))`: half the frequency, one octave down. *(1 pt for "it's an octave lower," 2 for the reason.)*
2. Normal mode feeds back from bit 1 and produces a 32,767-step sequence that reads as white noise. Short/periodic mode feeds back from bit 6 and collapses to a 93-step sequence, short enough that the ear hears a pitched metallic buzz. Used for lasers, engine hums, and robotic effects.
3. Group one: the two pulse channels. Group two: triangle, noise, and DMC. Consequences: adding a second pulse line squashes and slightly reduces the apparent loudness of the first; a loud DPCM sample audibly ducks the triangle and noise. *(1 pt for the groups, 1 for a consequence.)*
4. Maximum 4,081 bytes per sample; sixteen fixed playback rates from roughly 4 kHz to 33 kHz, so that maximum is about one second at the fastest rate and several seconds at the slowest; 1-bit delta encoding onto a 7-bit output, so it is inherently grainy and low-fidelity. It also costs ROM and CPU time.
5. Because a period value below 8 silences the channel outright, and high notes require small period values.
6. They are cost decisions. Each feature was transistors on a 1983 die: a volume multiplier for the triangle was cut, the noise generator is the cheapest possible pseudo-randomness (a shift register), and the DMC is the cheapest possible sample playback (a delta counter). None of it was an aesthetic choice.

### Part C: Composition (12 pts, 2 each)
1. A workable plan: melody on Pulse 1; bass on Triangle; drums on Noise, with the kick either on Triangle (accepting a bass gap) or DPCM; Pulse 2 time-shared between counter-melody and arpeggiated chords in different sections; and at least one part cut entirely, most likely the explicit chords, letting melody and bass imply the harmony. Full credit for any plan that names a channel for every part, uses time-sharing or arpeggio, and explicitly cuts something.
2. It solves the problem that a chord costs three voices and you have five. It works because above roughly 20 alternations per second the ear stops resolving separate notes and fuses them into a single buzzy timbre carrying the chord. Costs: the whole channel, it cannot be subtle, and it is psychoacoustically loud.
3. An echo channel (copy the part to a second channel, delayed and quieter, with a duller instrument); fade-in volume envelopes to make a part sound distant; and deliberate silence, since with no reverb tail a rest is a genuine hole that reads as space.
4. It changes something structural: key, register, density, or rhythm, and ideally two of them. A new melody over identical bass, drums, and harmony is not contrast.
5. In the **last bar of the outgoing section**, resolving on the first beat of the incoming one. Beginners put it in the first bar of the new section, which makes the new section sound like it is stumbling in.
6. Any four of: drum fill (every section change), dropout (before a big entrance; silence makes it huge), riser (into an energetic section), bass walk (key changes and gentle transitions), held tie (making two sections feel like one), crash plus thinner texture (marking the top of a form).

### Part D: Production and mixing (12 pts, 2 each)
1. Lead `D`–`F`; counter-melody `9`–`B`; arpeggio `7`–`9`; snare `C`–`F`; hats `3`–`6`.
2. Register (move one part an octave away), duty cycle (different duties occupy different harmonic territory), and rhythm (parts that move at different times never mask each other).
3. Everything at volume `F`. Because there is no compressor and the mixing within each group is non-linear, a full-volume chip mix squashes into a fatiguing wall.
4. `Zxx` sets the DMC delta counter directly, which changes the output level of the entire triangle/noise/DMC mixer group even with no sample playing. It is the only real way to make the volume-less triangle quieter, but large jumps can click.
5. (a) Flat velocities, fixed by shaping the volume column on every part. (b) Everything exactly on the grid, fixed by nudging specific notes late with `Gxx`. (c) No swing, fixed by alternating `Fxx` speeds (e.g. `F07`/`F05`) or by using the tracker's groove feature.
6. Phone test: export to WAV and play on phone speakers, where the bass disappears; it tells you whether the arrangement survives without the triangle. Quiet test: turn the volume down until barely audible and list what you can still hear; that list is your real mix hierarchy.

### Part E: Context and finishing (6 pts, 1 each)
1. The Famicom's cartridge connector carried an audio return line so a cartridge could mix its own chip's output with the console's. The American NES omitted that connection.
2. Two extra pulse channels (with eight duty settings rather than four) and a sawtooth channel.
3. FM synthesis, on a Yamaha YM2413 / OPLL variant, giving six FM channels.
4. A persistent effect left in the wrong state at the loop point: a vibrato, portamento, or `Vxx` duty change still running when the song jumps back. (A decaying note chopped off at the seam is also accepted.)
5. Title, author, and copyright (the three boxes at the top of the tracker window). They are embedded in the NSF and displayed by players; blank fields mark the file as unfinished.
6. Because everything is legible. There are five channels, no processing, and every audible thing is something a person typed, so you can solo channels and see exactly how a track was built. No other electronic music corpus is that transparent.

### Part F: Do / Applied (8 pts)
1. (3) Full credit if all five instruments are built inside fifteen minutes and each is immediately usable in a track (the lead has an attack and a sustain, the pad fades in, the kick dives, the hat is short and quiet, the snare is loud and mid-pitched). Deduct 1 per instrument that needs rework before use.
2. (2) Full credit if the pattern has varied hat volumes, at least one ghost note, and either swing or a `Gxx` nudge, and it audibly sounds played rather than clocked. Deduct 1 if it is merely correct but still stiff.
3. (3) Score honestly. 3 if you genuinely cannot locate the seam without watching the screen; 2 if you can hear it but it does not bother you; 1 if it is obvious; 0 if the loop is broken (wrong frame, stuck effect, chopped decay). A wrong answer here is the most useful thing on this exam, because it points at a fixable bug.
