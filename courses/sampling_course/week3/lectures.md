# Week 3 Lectures: Production & Polish

> **Work at the computer, on your Project-2 beat.** This week turns a loop into a finished, released track. Bring your beat from Week 2; you'll design sound on it, arrange it, mix it, and export it. Companion videos/reading in `../RESOURCES.md`.

---

# Lecture 11: Sound Design with Samples (Racks, Chains & Mangling)

## 11.1 Processing *is* sampling

In Week 2 you transformed samples by *editing* them (chopping, pitching, stretching). The other half of transformation is *processing*: running them through effects until their character changes. With samples, processing isn't polish-at-the-end; it's a **source-generation tool.** The ugliest junk audio becomes the best element in the track after the right chain. This lecture is about building those chains and then *committing* them (resampling, from Lecture 9, pays off here constantly).

## 11.2 The core effects, and what they're *for*

You don't need every plugin. You need to know what each core effect *does to a sample* and reach for it on purpose:

| Effect | What it does | Sampling use |
|---|---|---|
| **EQ Eight** | boost/cut frequency bands | carve mud out of a loop; high-pass rumble; sculpt a chop to sit in a mix |
| **Compressor / Glue** | controls dynamics, evens level | tame a wild break; "glue" a layered kit; pump with sidechain |
| **Saturator / Drive** | adds harmonics/grit | warm a clean sample; add the "analog"/tape character; make thin samples thick |
| **Auto Filter** | filter with envelope/LFO | movement, build-ups (sweep the cutoff), wobble, lo-fi muffling |
| **Reverb** | space, depth | place a dry sample "in a room"; turn a hit into a wash (then resample!) |
| **Delay / Echo** | repeats, rhythm, space | dub throws, rhythmic interest, thickening, the "ping-pong" stereo trick |
| **Redux / bit-reduction** | lowers sample rate & bit depth | the literal lo-fi/vintage-sampler sound from Lecture 4: *adding* limitation back |
| **Utility** | gain, width, mono | gain-stage, mono the bass, control stereo width |

## 11.3 Audio Effect Racks: the producer's instrument

An **Audio Effect Rack** wraps a chain of effects into one device with **Macros** (8 knobs you map to any parameters inside) and **parallel chains.** Two reasons this is central to sample work:

- **Macros = playable processing.** Map one Macro to "everything that makes this lo-fi" (filter cutoff + bit reduction + wow/flutter + reverb mix) and now a single knob takes your sample from clean to destroyed. Automate that knob across a section and the *processing itself* becomes an arrangement element.
- **Parallel chains.** Split a sample into parallel paths (clean + heavily distorted, or dry + a pitched-up shimmer) and blend. **Parallel (New York) compression** (a clean path + a crushed path summed) is how you get drums that are both punchy *and* controlled.

> **Move now:** Put a boring chop in an Audio Effect Rack. Build a "destruction" chain: Auto Filter → Saturator → Redux → Reverb. Map a Macro to filter cutoff + Redux amount + reverb dry/wet. Sweep the Macro. One knob, clean-to-cosmic. Save the rack to your browser: you just made a reusable instrument.

## 11.4 Resampling chains: commit to keep building

A heavy rack is CPU-hungry and *fixed in place.* Resample it (Lecture 9.4) and the result is:
- a clean new sample you can chop/warp/process *again* (stacking transformations the live chain can't),
- zero CPU, and
- a **happy accident frozen**: that perfect moment of the Macro sweep, captured forever as source.

The professional sound-design loop: **chain → tweak → resample the best 4 bars → chop the resample → process again.** Each pass moves further from recognizability and closer to *your* sound. This is how producers build sounds nobody can reverse-engineer.

## 11.5 Mangling: when you want it broken

Some of the best sample sounds come from *abuse*: extreme bit-reduction, feedback delays pushed to self-oscillation, reversing, granular freezing (Lecture 9), pitching down two octaves then back up. "Mangling" is deliberate destruction in search of a texture. The rule: **mangle, then resample the good bits.** You're prospecting: most of it is garbage, and occasionally you strike a sound that defines the whole track.

## Listening & section questions

1. You have a thin, brittle vocal chop. Name three effects (in order) you'd reach for to make it warm and thick, and what each contributes.
2. Why map several parameters to *one* Macro instead of automating each separately? Give a musical example where this is clearly better.
3. Explain the sound-design resampling loop and why committing a chain to audio lets you create sounds a single live chain cannot.

## Lab 11: Three signature sounds from junk

Take three pieces of *unpromising* audio (a boring loop, a field recording, a vocal scrap). Build each into a *signature sound* using a Rack + resampling:
1. A **lo-fi instrument** (Redux + filter + wow/flutter + reverb, Macro-controlled).
2. A **mangled texture** (mangle → resample → re-process).
3. A **parallel-processed drum or bass** (clean + crushed chains blended).
Save the three Racks to your browser and bounce a demo of each. Save `lab11_design.als`. These become palette for your capstone.

---

# Lecture 12: Arrangement (From Loop to Song)

## 12.1 The hardest skill in the course

Most people who "make beats" never make *songs.* They have a hard drive of 8-bar loops and nothing finished. Arrangement (turning a loop into a piece with a beginning, middle, and end) is the skill that separates the rubric's *Artist* from *Proficient,* and it's where we now move from **Session** to **Arrangement view** (Lecture 2.2). Today you arrange your Week-2 beat into an actual track.

## 12.2 Sketch → commit: getting your loop into the timeline

1. In **Session view**, build a few **scenes**: variations of your beat: full, drums-only, melody+texture (a breakdown), an intro version (filtered/sparse). Each scene is a "section."
2. **Record into Arrangement:** arm the global record, hit play, and **perform your sections** by launching scenes in an order: intro → build → full → breakdown → full → outro. Live captures it to the timeline.
3. Now you have raw structure in Arrangement to **edit**: refine section lengths, add transitions, automate. (You can also build directly in Arrangement by copying clips along the timeline; the Session-performance route just gets you a musical skeleton fast.)

## 12.3 The grammar of song sections

Sample-based tracks use a vocabulary you can hear in almost everything:

| Section | Job | Sampling moves |
|---|---|---|
| **Intro** | establish, invite | one element (filtered loop, vinyl crackle), build anticipation |
| **Verse / groove** | the main pocket | full beat; the "home" the track returns to |
| **Build / riser** | create tension | filter sweep up, snare roll, rising sample, drop the bass |
| **Drop / chorus / hook** | release, payoff | the fullest version; the chopped hook front-and-center |
| **Breakdown** | rest, contrast | strip to melody/texture; let ears recover so the next drop hits |
| **Outro** | exit | reverse the intro; filter down; let a loop run out |

The engine of arrangement is **contrast:** sections must *differ.* If every 8 bars sounds the same, there's no song: just a loop with a length. **Add and subtract elements** to create change; the most reliable arrangement move, by far, is to *drop the drums out* and bring them back.

## 12.4 Tension and release (why arrangements feel good)

Music is anticipation managed over time. Tools:

- **Automation**: record knob movements over the timeline (filter cutoff opening across a build, reverb swelling into a breakdown, volume fades). Automation is *the* arrangement tool; an arrangement without automation is usually static. Draw it in the Arrangement lanes or record it live.
- **Filtering for energy**: a low-pass closing = energy draining (intro/breakdown); opening = energy rising (build). Your ear reads brightness as energy.
- **The drop**: silence or a single hit *before* the full section makes the full section hit 10× harder. Negative space is an instrument.
- **Risers and impacts**: a rising noise sweep (resample a stretched cymbal!) into a downbeat impact glues a transition. You can build these from your own samples.

## 12.5 Finishing discipline

The course's core value (from the README) lands here: **finish it.** A finished 2:30 at 80% quality teaches you more than a perfect 8-bar loop. Set a length target, force every section to exist, and resist re-opening the beat to "improve the sound"; that's procrastination disguised as craft. Arrangement is a *decision* phase: commit.

## Listening & section questions

1. Take a track you love and map its sections on paper with timestamps (intro/verse/build/drop/breakdown/outro). What *changes* at each boundary: what's added or removed?
2. Why does dropping all elements to near-silence *before* a drop make the drop hit harder? Tie it to "music is managed anticipation."
3. Your arrangement feels static even though it's 3 minutes long. List three specific moves (automation, subtraction, contrast) to fix it without writing new parts.

## Lab 12: Arrange your beat into 2:30

Take your Project-2 beat. Build 4–5 Session scenes (full, intro, breakdown, build, outro-variant), perform them into Arrangement, and edit into a **complete 2:00–2:30 track** with:
- a clear intro, at least two "drops" of the main groove, one real breakdown, and an outro;
- **at least three automation moves** (a filter sweep build, a volume/element drop, one of your choice);
- one transition built from your own sample (a riser or impact, resampled).
Save as `lab12_arrangement.als`. **This is the spine of your capstone**: don't restart from scratch next lecture.

---

# Lecture 13: Mixing Sample-Based Music

## 13.1 Mixing is making room

A mix is not "making it loud": it's **giving every element its own space** so the whole is clear. Sample-based music has a specific mixing challenge: your sounds come from *different recordings* with different EQ curves, different rooms, different eras, and different loudness. Mixing reconciles them into one coherent space. Three axes of space: **frequency** (EQ), **dynamics** (compression), and **stereo/depth** (pan, width, reverb).

## 13.2 Frequency: carving with EQ

The number-one cause of muddy sample-based tracks: **everything occupies the low-mids.** A sampled chord, a bass, a kick, and vinyl noise all pile up around 200–500 Hz and turn to mush. The fix is **subtractive EQ: carve, don't boost.**

- **High-pass everything that isn't bass.** Roll off below ~100–300 Hz on melodic samples, pads, hats: anything that doesn't *need* lows. Instantly clears space for kick and bass.
- **Complementary EQ ("EQ carving").** Where two elements fight (kick vs. bass), *cut* one where the other lives: dip the bass at the kick's punch frequency (~60–100 Hz) so they interlock instead of masking.
- **Tame resonances.** Old samples have ugly peaks; a narrow cut where it's harsh beats a broad boost everywhere else.
- **Boost narrow, cut wide** is the gentle rule of thumb.

> **Move now:** On every non-bass track in your arrangement, drop an EQ Eight and high-pass until it sounds *thin in solo*; then un-solo. The full mix gets *clearer,* not thinner, because you stopped elements from masking each other.

## 13.3 Dynamics: compression and the sidechain

- **Compression** evens an element's level (a wild break, a vocal chop with loud and quiet hits) and, pushed, adds punch/character. On the **bus** (drum bus, master) it "glues" elements into one cohesive thing.
- **Sidechain compression**: the signature sound of sample-based dance/hip-hop: a kick triggers ducking on the bass/pads, so they "breathe" out of the way of every kick (the "pumping" effect). It solves the kick-vs-bass clash *dynamically* (where EQ solves it statically) and adds groove. Set the bass's compressor sidechain input to the kick.

## 13.4 Depth and width: pan, reverb, the stereo field

- **Pan** to declutter: hats slightly left, a perc right, the lead center. Mono elements (old samples) sit center by default; spread the *supporting* cast.
- **Keep the center anchored:** kick, snare, bass, and lead vocal/hook live in the middle. Width is for *support.*
- **Reverb = depth, not just "wet."** A little reverb pushes an element *back*; a dry element sits *forward.* Use a shared reverb send so disparate samples share one room (huge for coherence: it makes a 1970s chop and a 2026 synth sound like they're in the same place).
- **Mono-check constantly.** Club systems, phones, and Bluetooth speakers are mono. If your mix collapses in mono (Utility on the master → mono to test), you have phase problems: usually in over-widened stereo samples or layered drums (Lecture 8.3).

## 13.5 Mix discipline

- **Reference.** A/B against a released track in your genre, level-matched (loudness bias again, Lecture 4). Your low end, brightness, and width should be in the same ballpark.
- **Mix at low volume.** If the balance works quiet, it works loud. Loud hides problems.
- **Fewer moves, on purpose.** A clean mix is mostly high-passes, a few EQ cuts, level/pan, one or two compressors, and a shared reverb. Resist plugin-on-everything.

## Listening & section questions

1. Your sampled chord and your bass both sound muddy together. Walk through the EQ and the sidechain approach to fixing it: what does each do that the other doesn't?
2. Why does high-passing non-bass elements make a mix sound *clearer* rather than thinner? What problem does it solve?
3. Why mono-check, and what specific kinds of sample-based elements most often cause a mix to collapse in mono?

## Lab 13: Mix your arrangement to balance

Mix your Lecture-12 arrangement:
- High-pass every non-bass element; carve at least two element clashes with complementary EQ.
- Set up **one sidechain** (kick → bass or kick → pad).
- Use a **shared reverb send** so everything sits in one space.
- Pan the supporting cast; keep kick/snare/bass/lead centered.
- Reference against a released track, level-matched, at low volume. Mono-check.
Save as `lab13_mix.als`. Bounce a rough and listen on three systems (headphones, phone, laptop/speaker). Note what changed across systems: that *is* the mixing skill.

---

# Lecture 14: Finishing & the Law (Clearing, Export & Release)

## 14.1 The last 10% (and the legal reality)

Two things stand between your mix and a "released" track: a final loudness/format pass, and (if you're sharing it) the law. We do both today, then you finish the capstone.

## 14.2 Mastering, the lightweight version

**Mastering** is the final stage that makes a track translate across systems and sit at a competitive loudness. Full mastering is its own craft; for this course you need a *competent finish,* not a mastering certificate. A minimal, honest master-bus chain:

1. **Bus EQ**: gentle, broad moves only (a slight high-pass to clear sub-rumble, maybe a touch of "air" up top). If you need big EQ here, fix the *mix* instead.
2. **Glue compression**: very light (1–2 dB gain reduction) to cohere the whole.
3. **Saturation (optional)**: a hair of harmonic glue/warmth.
4. **Limiter**: the final ceiling. Set the ceiling to ~**−1 dBTP** (true peak) and push the gain *gently* for loudness. **Don't crush it**: squashing the master flat kills the dynamics that make sample-based music groove.

**Loudness (LUFS).** Streaming platforms normalize to roughly **−14 LUFS (integrated)**; aim around there (−14 to −9 depending on genre; hip-hop/EDM run louder, lo-fi quieter). Live's **Utility** and external meters show LUFS; the point is *consistency,* not maximum loudness. Louder is not better; it just *seems* better for a few seconds (Lecture 4, one last time).

## 14.3 Exporting correctly

**File → Export Audio/Video.** The settings that matter:

- **Sample rate:** match your project (44.1 or 48 kHz).
- **Bit depth:** **24-bit** for a master/archive; **16-bit** WAV or 320 kbps MP3 for distribution. Enable **dither** *only* when going to 16-bit (and only once, ever; never dither twice).
- **Normalize:** off, unless you specifically want it. Render your loudness with the limiter, not normalize.
- **Render the tail:** make sure your reverb/delay tails aren't cut off: extend the export range past the last note.
- **Stems (optional but pro):** export each track/group as its own file for remixing, collaboration, or DJ edits.

## 14.4 The law, the practical version

You learned the principle in Lecture 1 (composition + master, no length exemption). Here's how releasing actually works:

- **Clearing a sample** means licensing *both* copyrights: the **master** (from the label/owner of the recording) and the **composition** (from the publisher). It's a real process: you contact the rights holders, negotiate a fee and/or a royalty/ownership split, and get written permission. Famous, big-budget records do this. It can be expensive and slow, and they can say no.
- **The risk landscape (not advice, reality):** uncleared samples on a track that makes money is how people get sued or have releases taken down. "Small/transformed" reduces the *chance of getting caught*, not the *legal liability.* Plan as if you'll be caught if it succeeds.
- **The clean paths** (your real toolkit for releasing):
  - **Royalty-free / Creative Commons** sources (check the license terms: some require attribution or forbid commercial use), and official **sample packs** (Splice, Ableton packs, label packs): licensed for use in your productions by design.
  - **Public domain** recordings (very old works, or explicitly released to PD).
  - **Sample yourself**: record your own sources. Infinite, free, unique, and *yours.* The most artistically rewarding path, and the one this course quietly pushes you toward.
  - **Interpolation / re-performance**: re-play or re-sing a part yourself instead of sampling the master; you still owe the *composition* rights, but you avoid the master. (Common in pop.)
- **Credit and registration:** when you release, register your work (with a PRO/distributor) and credit any cleared samples and collaborators. Keep your **source documentation** (where every sample came from): the habit you've built in every LOG.md is exactly this.

## Listening & section questions

1. Your master sounds quiet next to a commercial reference. Walk through what you'd check *before* reaching for more limiter gain. Why is "just turn up the limiter" usually the wrong first move?
2. You want to release a beat built on an unknown 1970s soul record. Lay out your realistic options, from most to least work, and the trade-offs of each.
3. Why is "I'll just keep it small and changed so no one notices" a risk-management strategy and not a legal one? What's the difference?

## Lab 14: Master and export a release file

On your Lecture-13 mix:
1. Build a minimal master chain (bus EQ → light glue comp → limiter at −1 dBTP). Check LUFS against a level-matched reference; tune for *consistency,* not maximum loudness.
2. Export a **16-bit/44.1 distribution WAV** (dither on) and a **24-bit master/archive** (dither off), with the reverb tail rendered.
3. Write the **clearance plan** for your sources in your log: for each sample, which release path (cleared / royalty-free / own recording / replace) you'd take.
Save `lab14_master.als` and both exports. You now have a finishable, releasable file: the capstone is putting it all together well.

---

# Lecture 15: Synthesis + Capstone Day

## 15.1 The whole course, in one breath

You can take **any sound** and: hear the music in it (L1–2, D2), warp it to time (L2–3, D3), turn it into an instrument or chop it into new phrases (L3, L6–8, D4–5), design its character with processing and resampling (L9, L11, D6), arrange those parts into a song with tension and release (L12, D7), mix it so it translates (L13, D6–7), and finish/release it legally (L14, D7–8). That is the entire craft of sample-based production, and you've done every piece.

The two through-lines worth carrying forever:
- **Source → transform → finish.** In that order. Taste in sourcing and the discipline to finish matter more than any single technique.
- **The resampling loop.** Make → commit to audio → transform that → repeat. It's the engine behind every rich sample-based sound.

## 15.2 Today

1. **Final exam** (`week3/quiz.md`): closed-Live, comprehensive, self-grade.
2. **Finish the Capstone: The Finished Track** (`week3/capstone.md`): your complete, mixed, exported, documented piece.
3. **Final rubric checkpoint**: evidence for **all eight dimensions** (target: Proficient everywhere, Artist on ≥3 including D7 or D8). Point at your capstone files.

## 15.3 After the course

The work now is volume and voice. Finish a short track every week or two. Sample your own life (your room, your city, your voice) and a personal sound will emerge that no pack can give you. Re-watch your favorite producers' breakdowns; you'll now *see* the moves. And keep every LOG.md habit: documented sources, articulated decisions. The honest measure remains the one from the rubric: that someone hears your track and asks, *"wait, what's that sample?"*
