# Quiz 2 — Construction (Week 2)

Closed-Live. 30 minutes. 10 questions: 6 multiple choice, 4 short answer.
Answer key at the bottom — no peeking until done. Passing: 8/10.

---

**Q1.** You "Slice to New MIDI Track" by transient, and the resulting MIDI clip plays back as the original break. What is that clip, and what do you do next to *flip* it?

- A) It's a bounce; you can't edit it
- B) It's MIDI that re-triggers the slices in original order; you re-sequence/edit the MIDI to make a new groove
- C) It's an audio copy; you warp it differently
- D) It's a Sampler instrument; you add zones

**Q2.** For chopping a **drum break** so you can process each hit independently, the better tool is:

- A) Simpler Slice mode (one slice per key)
- B) A Drum Rack (one chain per pad)
- C) Sampler with velocity zones
- D) Granulator III

**Q3.** Why does stretching a single sample across five octaves sound bad, and what fixes it?

- A) The file gets corrupted; re-export it
- B) Formants and timbre shift unnaturally when pitched far from the source; **multisampling** (mapping several recordings across zones) fixes it
- C) Live runs out of CPU; freeze the track
- D) The sample rate changes; resample it

**Q4.** You want a drum loop to sound *slowed like a tape machine* — pitch dropping as it slows, not pitch-preserved. Which warp mode?

- A) Beats
- B) Complex Pro
- C) Re-Pitch
- D) Texture

**Q5.** Layering two kick samples, you keep the *click* of one and the *thump* of the other by:

- A) Putting them in different choke groups
- B) High-passing the click layer and low-passing the sub layer so each owns a frequency range
- C) Reversing one of them
- D) Setting both to One-Shot

**Q6.** Resampling means:

- A) Lowering a sample's bit depth for a lo-fi effect
- B) Recording Live's own output back into a new audio clip, so a processed/played result becomes new source you can chop and process again
- C) Re-downloading a sample at higher quality
- D) Applying a swing groove to MIDI

**Q7. (short answer)** Explain how you'd turn a single 2-second chord stab into a 4-chord progression using only chopping and pitching — no new sounds. (Two or three sentences.)

**Q8. (short answer)** What does the Groove Pool / swing do to your MIDI, and why does it make a beat feel more human than rigid quantization? (One or two sentences.)

**Q9. (short answer)** Name two things a Drum Rack lets you do that a single sliced Simpler does not, and why they matter for drums specifically.

**Q10. (short answer)** Describe the "resampling loop" in your own words and give one concrete example of a transformation that *requires* it (i.e., you can't do it without committing to audio first).

---
---

## Answer Key

**Q1 — B.** Slicing writes a Drum Rack/Simpler plus MIDI that reproduces the original. The flip is in *editing that MIDI* — reorder, delete, repeat, move hits.

**Q2 — B.** The Drum Rack gives each hit its own chain, so you can process kick/snare/hats independently and layer them. That per-pad processing is the deciding factor for drums.

**Q3 — B.** Pitch-shifting far from the source moves formants/timbre unnaturally. Multisampling maps several recordings to nearby key ranges so nothing stretches far.

**Q4 — C.** Re-Pitch links pitch to speed (tape behavior). Complex Pro would hold pitch while changing time — the opposite character.

**Q5 — B.** Each layer should own a frequency band (high-pass the click, low-pass the sub) so they reinforce instead of fight; check in mono for phase.

**Q6 — B.** Resampling = recording/bouncing Live's output into a new clip for further chopping/processing.

**Q7.** Slice the stab (or load it in Simpler), then trigger it four times in sequence, **transposing each trigger** to a different pitch (e.g., 0, −2, −5, +3 semitones) to spell a progression; vary rhythm/length per hit. Same source, new harmony from pitch + order.

**Q8.** It shifts the timing (and often velocity) of off-beat notes — typically pulling them slightly late — by a template amount. Tiny, consistent timing/velocity deviations read as "human feel" where dead-on quantization reads as mechanical.

**Q9.** Any two: (1) **per-pad processing** — compress the snare, saturate the kick, filter the hats independently; (2) **layering** multiple samples per hit for punch; (3) **choke groups** for realistic open/closed hat behavior; (4) easier individual mixing/level/pan per hit. Each matters because drums need each element shaped and balanced separately.

**Q10.** Make something (a played instrument, a heavy effect chain, an extreme stretch) → bounce/record it to a new audio clip → now chop/warp/process *that* → repeat. Example requiring it: you can't *slice* a MIDI performance of your sampled instrument — you must resample it to audio first, then slice the bounce. (Also acceptable: committing a CPU-heavy effects chain so you can stack more processing.)

### Scoring
8–10: proceed to Week 3. 6–7: reread the flagged lecture and redo its lab. <6: redo Labs 6 and 9 before Week 3 — arranging and mixing assume you can chop and resample fluently.
