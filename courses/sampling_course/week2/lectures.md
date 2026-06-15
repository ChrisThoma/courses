# Week 2 Lectures — Construction: Building a Track

> **Work at the computer.** Week 1 gave you the foundations; Week 2 is where you *build.* Companion videos/reading are in `../RESOURCES.md` — the ⭐ items are worth watching the same day. Have a clean **drum break** in your library before Lecture 6.

---

# Lecture 6 — Chopping & Slicing in Depth

## 6.1 The chop is the soul of sampling

Last week you made your first chop. This week you make it a *voice.* Chopping is taking a continuous piece of audio, cutting it into fragments, and **re-sequencing** those fragments into something new. Done well, the source becomes unrecognizable yet musical — the same notes, a different song. Done poorly, it's just the original with hiccups. The difference is *intention about where you cut and how you re-order.*

Two families of chopping, and you'll use both today:

- **Drum chopping** — slice a drummer's performance into hits and rebuild the groove. The break.
- **Melodic chopping** — slice a chord/melody phrase into musical fragments and reassemble them into a new progression or riff.

## 6.2 The break: hip-hop and jungle's founding material

A **break** is the passage of a record where everything drops out but the drums. The **Amen break** (from The Winstons' "Amen, Brother"), the **Think break**, the **Funky Drummer** — a handful of 1970s breaks underpin *thousands* of records and entire genres (jungle/drum-and-bass is literally built on chopped, sped-up breaks). Learning to chop a break is learning the central technique of sample-based rhythm. (Use a legally cleared/royalty-free break for anything you'd release — see `RESOURCES.md`. For *practice,* any break is fine.)

## 6.3 Slicing a break to a Drum Rack (the workflow)

This is the money workflow of the week. Do it now with a one- or two-bar break:

1. **Warp it tight.** Drop the break in, warp it so it's locked to the grid at the set tempo (Lecture 2). Transients on the grid lines.
2. **Slice to MIDI.** Right-click the clip → **Slice to New MIDI Track.** Choose the slicing resolution:
   - **By transient** — Live cuts at each detected hit (most faithful to the drummer's groove). Best default for breaks.
   - **By beat division** (1/8, 1/16) — even grid cuts (cleaner, more rigid, good for re-gridding).
   - **Manual** — you place every slice (most control).
3. Live builds a **Drum Rack** where **each pad = one slice**, and writes a MIDI clip that re-triggers the slices *in their original order* — so it plays back as the original break, but now every hit is on its own pad.
4. **Re-sequence.** Now the fun: edit that MIDI. Move hits, delete them, repeat a snare, drag a kick onto a different sixteenth. **You're now programming a new groove out of the drummer's own hits.** Swap the order, leave gaps, double a hat. This is the flip.

> **Move now:** Slice a break "to transient." Play it back — it's the original. Now in the MIDI clip, **delete every other hit** and listen — instantly a half-time feel. Re-add a snare on the "and." You just composed a new break. That's the whole technique; everything else is taste.

## 6.4 The two ways to chop: Slice mode vs. Drum Rack

You have two tools and they suit different jobs:

| | **Simpler Slice mode** | **Slice to Drum Rack** |
|---|---|---|
| Layout | one slice per key, chromatic | one slice per pad (16 visible) |
| Best for | melodic phrases you play like an instrument | drum breaks you sequence as a kit |
| Per-slice processing | one device for all slices | **each pad is its own chain** — process hits individually |
| Workflow | fast, fluid, playable | structured, mixable, layerable |

For **melodic** chopping, Simpler Slice mode is often faster — you *play* the chops on a keyboard, improvising a new melody from the fragments. For **drums,** the Drum Rack wins because you can process each hit separately (compress just the snare, filter just the kick) and layer in Lecture 8.

## 6.5 Re-pitching chops — the secret weapon

A chop doesn't have to play at its original pitch. **Transpose individual slices** (in the Drum Rack pad's Simpler, or per-note in Slice mode) and a single chord becomes a *progression*; one vocal word becomes a melody. Pitching a chop down adds weight (a chord stab becomes a bassline); pitching up adds brightness and the classic "sped-up soul" sound. This is how a 2-second clip yields a 16-bar song: **same fragments, different pitches and order.**

## Listening & section questions

1. You slice a break "by transient" and one pad contains *two* hits stuck together (a kick + a ghost snare). What happened, and how would you fix the slice?
2. When would you slice a melodic loop in **Simpler Slice mode** vs. **to a Drum Rack**? Give the deciding factor.
3. Describe, concretely, how you'd turn a single 2-second chord stab into a 4-chord progression using only chopping and pitching. No new sounds allowed.

## Lab 6 — Re-sequence a break + chop a melody

1. **Re-build a break.** Slice a break to a Drum Rack. Reprogram the MIDI into a *new* groove that's recognizably different from the original (half-time, busier, gappy — your call). Bounce 4 bars.
2. **Melodic flip.** Take a melodic loop, slice it to Simpler Slice mode, and *play* a new phrase from the chops on your keyboard — re-pitch at least two chops. Record the best 2 bars.
Save as `lab6_chop.als`. Keep both — they feed Project 2.

---

# Lecture 7 — The Full Sampler: Multisampling & Modulation

## 7.1 From one sample to an *instrument*

**Sampler** (Live Suite, or a paid add-on) is Simpler's deeper sibling. Everything you learned in Simpler Classic applies; Sampler adds two things that turn "a sample you can play" into "a real instrument":

1. **Multisampling / zones** — multiple samples mapped across the keyboard and across velocity.
2. **Deep modulation** — multiple envelopes and LFOs routed to pitch, filter, volume, pan, and more.

> **No Sampler?** You still need to understand this — multisampling is a core concept and most sample libraries *are* multisampled instruments. Do the lab's single-zone version in Simpler with a documented compromise, and read on; the *idea* is what's tested.

## 7.2 Why multisampling exists (the stretch problem)

In Lecture 3 you played one note across a whole keyboard. It works — but stretch a sample too far from its native pitch and it sounds wrong: pitched way up it gets thin and "chipmunky"; way down it gets sluggish and dark, and the *formants* (the resonances that make a voice or instrument sound natural) shift unnaturally. The fix professional sample libraries use: **record the instrument at many pitches** and map each recording to the keys *near* its true pitch, so nothing stretches far. That's multisampling.

**Zones.** In Sampler's **Zone** tab you place each sample over a **key range** (which notes play it) and a **velocity range** (how hard you must hit to trigger it). Crossfade the edges so adjacent zones blend. A realistic piano might have dozens of zones; a usable sampled instrument might need only 3–4 (one per octave).

**Velocity zones & round-robin** — map a *soft* recording to low velocities and a *hard* one to high velocities, and the instrument responds to your playing dynamics like the real thing. Round-robin (alternating samples on repeated notes) kills the "machine-gun" repetition of one sample retriggering.

## 7.3 Modulation: making a sample expressive

A static sample is dead. Modulation makes it move. Sampler gives you:

- **Multiple envelopes** — beyond the amp ADSR, route envelopes to the **filter** (so the tone evolves as a note sounds) and to **pitch** (for subtle attack bends).
- **LFOs** — low-frequency oscillators that cyclically modulate a target: vibrato (LFO→pitch), tremolo (LFO→volume), filter wobble (LFO→cutoff, the dubstep staple), auto-pan (LFO→pan).
- **Filter** — the single most musical processor; an envelope-driven low-pass turns a flat sample into something that *speaks.*

The art: **route a little modulation to many destinations** rather than a lot to one. Subtle filter movement + a touch of pitch envelope + velocity→volume makes a sample feel *played* instead of *triggered.*

## 7.4 Building a sampled "synth" from one note (the practical magic)

You don't need a real instrument. Take **one interesting sound** — a held synth note, a bowed string, even a vowel — and:
1. Tune it, loop the sustain (Lecture 3.3), spread it across a few zones if it stretches badly.
2. Add a filter with an envelope (slow attack on the cutoff = a sound that "opens up").
3. Add a slow pitch LFO for life, velocity→filter so harder = brighter.
4. Play chords. You now have a unique, characterful instrument that exists nowhere else. **This is how producers build signature sounds** — and it's 100% legal if the source is yours.

## Listening & section questions

1. Why does stretching one sample across five octaves sound bad, and how does multisampling fix it? What are "formants" and why do they betray an over-stretched vocal sample?
2. What's the difference between mapping samples across **key** zones vs. **velocity** zones? Give a musical reason to use each.
3. You have a flat, lifeless sampled string. List three modulation moves (specific source → destination) that would make it feel expressive.

## Lab 7 — Build a playable instrument

Pick one sustained source. Build it into a playable instrument:
- **With Sampler:** at least 3 key zones (so nothing stretches more than ~an octave), a looped sustain, a filter with an envelope, and one LFO routed somewhere musical. Map velocity to filter or volume.
- **Without Sampler:** do it in Simpler with one zone — tuned, looped, filter+envelope, and clip/automation movement to fake the modulation. Note the compromise in your log.
Play a 4-chord progression with it and bounce 4 bars. Save as `lab7_instrument.als`. This may become a melodic part in Project 2.

---

# Lecture 8 — Drums from Samples: Drum Racks, Layering & Groove

## 8.1 Two ways to get drums from samples

You've met one (slicing a break, Lecture 6). The other is **building a kit from individual one-shots** — a kick sample, a snare sample, hats — each on its own **Drum Rack** pad, programmed from scratch. Most modern sample-based drums combine both: a chopped break for *feel* and character, plus layered one-shots for *punch* and consistency. Today: build a kit and make it *groove.*

## 8.2 The Drum Rack, properly

A **Drum Rack** is a 16-pad (4×4, scrollable to 128) container where each pad holds its own instrument + effects chain. Build a kit:

1. Drag one-shots onto pads (kick on C1 by convention, snare on D1, hats above). Each pad wraps the sample in Simpler (One-Shot mode).
2. **Tune and trim each hit.** A kick tuned to your track's key sits better; trimming silence tightens timing.
3. **Per-pad processing.** Because each pad is its own chain, you can put a transient shaper on the snare, a saturator on the kick, a filter on the hats — independently. This is the Drum Rack's superpower.
4. **Choke groups** — assign open and closed hats to the same choke group so a closed hat cuts off the open one, like a real hi-hat. Essential realism.

## 8.3 Layering: where punch comes from

A single kick sample rarely has everything. **Layering** stacks samples to build a composite hit:

- **Kick:** a "sub" layer (low-end weight) + a "click/beater" layer (attack/definition that cuts through on small speakers). Two okay kicks → one great kick.
- **Snare:** a "body" layer (the tone) + a "crack/noise" layer (the snap) + optional reverb tail layer.
- **The rule:** each layer owns a *frequency range.* High-pass the click layer, low-pass the sub layer, so they don't fight (Lecture 13's EQ-carving, previewed). Check the layered hit in **mono** — if it vanishes, your layers are out of phase; nudge one a hair.

> **Move now:** Put two kick samples on one pad (drag the second *onto* the pad's chain, or use a layered pad). High-pass one to keep only its click, low-pass the other to keep only its thump. Play them together — fuller than either alone. That's layering.

## 8.4 Groove: the difference between a loop and a *pocket*

Perfectly quantized drums sound mechanical. Real grooves *breathe.* Three tools:

- **Swing/Groove Pool.** Live's **Groove Pool** applies timing/velocity templates (e.g., MPC swing) to your MIDI — pulling off-beats slightly late gives the "swing" that makes hip-hop and house feel human. Drag a groove onto a clip, dial the **Amount.**
- **Velocity.** Vary hit strength — ghost notes (quiet snares between the backbeats), accented downbeats. Flat velocity = lifeless; humanized velocity = alive.
- **Micro-timing.** Nudge individual hits off the grid by a few ticks. A snare *barely* late drags the beat (laid-back); barely early pushes it (urgent). This is *feel,* and it's where taste (D8) lives.

The goal isn't "correct" — it's **in the pocket.** A pocket is a groove that makes you nod before you think.

## Listening & section questions

1. Why does a Drum Rack (one chain per pad) beat a single sliced Simpler for *drum* work specifically? Name two things it lets you do.
2. You layer two kicks and the combined hit sounds *weaker* than one alone. What's the likely cause, and what are two fixes?
3. What does the Groove Pool / swing actually *do* to your MIDI timing, and why does pulling off-beats slightly late make a beat feel more human?

## Lab 8 — Build a kit, find the pocket

1. **Build a Drum Rack kit** from one-shots: kick, snare, closed + open hats (choke group), one perc. Tune and trim each; layer the kick (sub + click) and the snare (body + crack).
2. **Program a groove** — a 2-bar pattern with varied velocity and ghost notes. Apply a swing groove and tune the amount by ear until it *nods.*
3. **Combine with Lecture 6** — layer your built kit under (or over) a chopped break for character + punch.
Bounce 4 bars. Save as `lab8_drums.als`. These drums go straight into Project 2.

---

# Lecture 9 — Pitch, Time & Texture

## 9.1 Time and pitch are clay too

Warping (Lecture 2) got samples *onto* the grid. Now we use time and pitch *creatively* — the deep magic that turns a recording into a texture, a pad, a new instrument. Three big techniques: **creative warping**, **resampling**, and **granular**.

## 9.2 Warp modes as sound design

The warp mode isn't just "which is most accurate" — each *fails* in a characterful way you can exploit:

| Mode | Made for | Creative use / artifact |
|---|---|---|
| **Beats** | drums, rhythmic loops | preserves transients; push the segment/grid settings for glitchy stutters |
| **Tones** | monophonic pitched (vocal, bass, lead) | clean pitch-shifts; smears on polyphonic material in an interesting way |
| **Texture** | pads, ambient, noise | grain-based; the **Grain Size** and **Flux** controls are a *sound design tool* — turn ambience into shifting clouds |
| **Re-Pitch** | "tape" behavior | links pitch to speed — slow it down and it drops in pitch (the classic vinyl/turntable sound). Use for lo-fi, vaporwave, "screwed" effects |
| **Complex / Complex Pro** | full mixes, complex material | highest quality for whole songs; extreme stretches produce a gorgeous smeared "ambient wash" (Pro adds Formants control) |

> **The lesson from Week 1, returning:** the *artifact is the instrument.* Stretching a vocal 8× in Complex Pro doesn't "ruin" it — it turns it into a pad no synth could make. Re-Pitching a drum loop down doesn't "slow it down" — it gives you that fat, dark, half-speed character. Choose modes for their *flavor,* not just their fidelity.

## 9.3 Extreme time-stretch: making pads from anything

The single most magical sampling move:
1. Take any short sound with harmonic content — a chord, a vocal note, even a snare.
2. Load it as a clip, warp **on**, mode **Complex Pro** (or **Texture**).
3. **Stretch it enormously** — set the clip to play over 4, 8, 16 bars (lower the Seg. BPM dramatically, or loop a tiny region over a long span).
4. The transients dissolve; what's left is pure *texture* — an evolving pad with the harmonic color of the source but none of its rhythm.

This is how producers conjure lush, unique pads and drones from a half-second of audio. A whole genre (ambient, "blade-runner" pads) lives here.

## 9.4 Resampling: the technique that unlocks everything

**Resampling** = recording Live's *own output* back into a new audio clip, so a processed/played result becomes a *new sample* you can chop, warp, and process again. It is the most important workflow concept in the back half of this course.

Why it matters:
- **Commit and chop.** Played a great phrase on your sampled instrument? Resample it to audio, then *chop that* (you can't slice a MIDI performance, but you can slice its bounce).
- **Stack processing.** Build a wild effects chain (Lecture 11), resample the result, and now that complex sound is one clean sample with zero CPU cost — and you can process it *again* on top.
- **The texture pipeline.** Stretch a sound into a pad → resample → chop the pad → re-pitch the chops. Each pass moves further from the source.

**How (Live):** Set a track's input to **Resampling**, arm it, and record into a clip while your source plays — or just bounce a clip/selection to audio (**Freeze** then **Flatten** is the quick route for a whole track; **right-click → Bounce** for a clip). Drag the new clip into your sample folder and it's source material like any other.

## 9.5 Granular thinking

**Granular synthesis** chops a sample into tiny "grains" (milliseconds) and replays them — letting you freeze a moment, stretch infinitely, or scatter a sound into a cloud. Live's **Texture** warp mode is granular under the hood; Suite's **Granulator III** (a Max device) is a dedicated granular instrument. The mindset: *a sample is not a fixed timeline — it's a field of sound you can scan through at any speed, including stopped.* Freezing on one grain of a vocal gives an infinite, evolving drone from a single instant.

## Listening & section questions

1. You want a drum loop to sound *slowed down like a tape machine* (pitch drops with speed), not time-stretched. Which warp mode, and why does it sound different from Complex Pro at the same tempo?
2. Explain resampling to someone who's never heard the term, and give one concrete problem it solves that you *cannot* solve any other way.
3. Take a 1-second vocal "ah." Describe, step by step, how you'd turn it into a 16-bar evolving pad — naming the warp mode and whether you'd resample.

## Lab 9 — One sound, five textures

Pick **one** short source (≤2 seconds). Using only warping, pitch, resampling, and effects, derive **five distinct textures** from it:
1. A clean playable instrument (Classic/Sampler).
2. A "tape" re-pitched version (Re-Pitch mode).
3. An extreme-stretch pad (Complex Pro / Texture).
4. A chopped rhythmic version (slice the bounce).
5. A "mangled" version of your choice (resample a heavy effect chain).
Bounce each. Save as `lab9_textures.als` with a one-line note per texture on what you did. This proves D3 at Proficient.

---

# Lecture 10 — Synthesis + Project Day

## 10.1 What you can now do

You can **construct** sample-based material end to end:
- **Chop** (L6) — re-sequence breaks and melodies; re-pitch fragments into new music.
- **Instruments** (L7) — multisample and modulate a sample into something playable and expressive.
- **Drums** (L8) — build and layer a kit, and program a groove with a real pocket.
- **Time/texture** (L9) — warp creatively, stretch into pads, and **resample** to keep transforming.

The throughline is **resampling as a loop:** make something → commit it to audio → transform that → repeat. Every rich sample-based track is layers of this.

## 10.2 Today

1. **Quiz 2** (`week2/quiz.md`) — closed-Live, self-grade.
2. **Finish Project 2 — The Beat** (`week2/project.md`) — your first full beat, due tonight.
3. **Rubric checkpoint** — evidence for **D3–D5** (target: Proficient), D6 (Competent). Point at `lab6/7/8/9.als`.

## 10.3 Looking ahead

Week 3 is **production and polish:** sound design with effect racks, arranging your beat into a *song,* mixing it so it translates, and finishing/clearing it for "release." Tonight, make sure your Project-2 beat is saved cleanly with tracks named and parts on separate tracks — you'll arrange and mix *this exact set* next week, so a tidy session now saves you hours. Skim the Lecture 12 ⭐ (arrangement) so the leap from loop to song feels less mysterious.
