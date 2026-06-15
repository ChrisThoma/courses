# Week 1 Lectures — Foundations: The Sample & the Instrument

> **Work at the computer.** Open Ableton Live and *do every move as you read it.* These lectures are a studio session in text, not a manual to skim. Companion videos/reading for each lecture are in `../RESOURCES.md` — the ⭐ items are worth watching the same day.

---

# Lecture 1 — What Is Sampling? Culture, Craft, and the Law

## 1.1 The premise

A **sample** is a piece of recorded audio used as raw material for new music. That's the whole definition, and its breadth is the point. A sample can be:

- a four-bar drum break from a 1970s funk record (the foundation of hip-hop and jungle),
- a single chord stab from a soul ballad (pitched and chopped into a new progression),
- one note of a piano (stretched across a keyboard to *become* the piano),
- a one-shot kick drum (the literal atom of electronic music),
- a vinyl crackle, a vocal ad-lib, a cash register, your own voice, rain on a window.

Sampling is **composing with recordings instead of with performances.** The instrument is the *editor*: the DAW. You are not playing notes in real time; you are sculpting captured sound into musical shape. This reframing is the entire mindset of the course: stop hearing a sound as "a finished thing someone else made" and start hearing it as *clay.*

## 1.2 A very short history (so the techniques make sense)

The tools shaped the aesthetics. Worth knowing:

- **Musique concrète (1940s–50s):** Pierre Schaeffer splices magnetic tape of train sounds and bells into composition. The founding idea — *recorded sound is musical material* — predates pop by decades.
- **The breakbeat (1970s):** DJ Kool Herc loops the drum break of a funk record on two turntables so dancers can ride the rhythm. The **break** — the section where the band drops out and the drummer plays alone — becomes the most valuable real estate in recorded music.
- **The sampler as instrument (1980s):** Hardware samplers (Fairlight, E-mu SP-1200, Akai MPC) let producers *capture* and *replay* audio at pitch. The SP-1200's short sampling time and gritty 12-bit converters didn't limit hip-hop — they *defined its sound.* Constraints make aesthetics.
- **The DAW era (2000s–now):** Software collapses the studio into a laptop. Ableton Live (first released 2001) is built around loops, warping, and real-time manipulation — it is, more than any other DAW, a *sampling* instrument. Whole genres (lo-fi, future bass, drill, hyperpop) are unthinkable without it.

The lesson threaded through that history: **every era's signature sound came from the limits of its sampler.** The 12-bit crunch, the 4-second memory cap, the timestretch artifact. You will spend Week 3 *adding* such "limits" back on purpose.

## 1.3 The two halves of the craft

Sampling work splits cleanly:

1. **Source** — *what* you sample. This is taste (D8) and listening (D2). The best chop in the world can't save a boring source; a great source is half the track. We spend today and Lecture 4 here.
2. **Transformation** — *what you do to it.* Chopping (D4), tuning and time (D3), turning it into an instrument (D5), processing (D6), and arranging it into a song (D7). This is the rest of the course.

Beginners obsess over transformation ("how do I make it sound cool"). Working producers obsess over source ("is there music in this at all") and over *finishing.* Internalize the order: **source → transform → finish.**

## 1.4 The law, honestly, in one page

You must understand this before you release anything. (Lecture 14 goes deeper; here's the version everything else rests on.)

A commercial recording carries **two** copyrights:
- the **composition** (the song — notes, melody, lyrics), and
- the **master recording** (that specific recorded performance).

Sampling a record uses *both.* Using either without permission is infringement **regardless of how short the sample is or how much you transformed it.** There is no legal "you can use 7 seconds" rule; that's a myth. Courts in major jurisdictions have held that even a fraction of a second, if recognizable as taken, can infringe (the *Bridgeport* line of cases in the US is the famous, if contested, example). "I changed the pitch and chopped it" is not a defense; "transformative use" / fair use is a narrow, fact-specific, expensive-to-litigate doctrine you should not rely on as a plan.

What this means in practice (none of which stops you from learning):

| If you want to… | Do this |
|---|---|
| **Learn / practice** | Sample anything. Keep it on your hard drive. This course's labs are practice. |
| **Release using someone's record** | **Clear it** — license the master (from the label) and the composition (from the publisher). Real, common, often expensive. |
| **Release freely, no lawyers** | Sample **royalty-free / Creative Commons** material, official **sample packs**, or **public-domain** recordings. |
| **Release with total safety and your own voice** | **Sample yourself** — record your own sources. The most underrated technique in the course; it's free, infinite, and 100% yours. |

We'll use found material to *learn* the techniques (that's legal as practice), and you'll be steered toward clearable or original sources for anything you intend to share. Learn freely; release deliberately.

## Listening & section questions (write your answers)

1. Pick a track you love that you *know* uses a sample (or use the lab below to find one). What did the producer take, and what did they *add*? Try to separate "source" from "transformation."
2. The SP-1200's limitations *defined* a sound. Name one limitation of a tool you use (phone speaker, cheap headphones, Live Intro) and describe how it might become an aesthetic rather than a problem.
3. In your own words, why is "I only used one second" not a legal defense? What *are* your four real options for releasing sample-based music?

## Lab 1 — Build your library, train your ear

1. **Gather sources.** Make a folder `samples/` with ~20 sounds: a few full songs you own, some one-shots, and **at least one drum break.** (Legal sources for breaks and packs are in `RESOURCES.md` — start there.) In Live, drag this folder into **Places** in the browser so it's one click away all course long.
2. **ID five flips.** Use WhoSampled.com (linked in resources) to look up five famous sampled tracks. For each, listen to the *original* then the *flip* back to back. Write one sentence on what changed: pitch? chopped order? a loop vs. a chop? filtered? It's the best ear-training exercise in Week 1.
3. **One honest source.** Record one 10-second sample of your own — hum a melody, tap a table, record the room. Put it in `samples/`. You'll use it later, and it's yours forever.

---

# Lecture 2 — How Ableton Live Thinks: The Two Views, the Browser, and Warping

## 2.1 Why Live is the sampling DAW

Every DAW can play audio. Live's difference is that it treats **every audio clip as elastic**: automatically analyzed and stretchable to any tempo without changing pitch (and vice versa). This feature is called **warping**, and it is the reason Live became the producer's sampler. In most DAWs, audio is a fixed lump you fight with; in Live, audio bends to the grid by default. Understanding warping (Lecture 2–3, and 9) *is* understanding Live.

## 2.2 The two views — and why there are two

Press **Tab** to flip between them. This trips up every beginner, so get it cold:

- **Session View** (a grid of clip "slots," columns = tracks, rows = **scenes**): a non-linear **sketchpad** for *looping and improvising.* You trigger clips live, try combinations, build the *parts* of a track. Nothing here has a fixed place in time. This is where sampling **ideas** are born.
- **Arrangement View** (a left-to-right timeline): the linear **song.** Time flows left to right; this is where parts become a *structure* with a beginning, middle, and end. This is where tracks get **finished** (Week 3).

The professional workflow, which this course follows: **sketch in Session, commit to Arrangement.** You'll live in Session for Weeks 1–2 and move to Arrangement in Week 3. You can record a Session performance straight into Arrangement (the round-record button); bridging the two is a Week-3 skill.

> **Move now:** Drag any audio file from the browser onto an empty Session slot. It becomes a **clip.** Click the slot's triangle to play it; click the square (or the track's Stop) to stop. Press Tab — see the same track in Arrangement. Tab back.

## 2.3 The browser is your instrument rack

The left-hand **browser** is where everything lives: your samples (Places), Live's instruments and effects (Sounds, Drums, Instruments, Audio Effects), and **Samples/Clips** you've made. Two habits to build today:

- **Hot-swap by ear.** Select a Simpler/sampler device, click the hot-swap (◧) button, and arrow-key through samples in the browser to audition them *in context, playing.* You choose sources by ear, not by filename.
- **Preview before you commit.** Click any sample in the browser and Live previews it (toggle the headphone/preview switch at the browser's bottom). Preview at the **set's tempo** with the "Raw/warped preview" toggle so you hear it as it'll sit.

## 2.4 Warping: getting a sample in sync

Here is the mechanism, because everything in Week 1 depends on it.

When you drop audio into Live, it **guesses** the tempo and lays down **Warp Markers**: anchors tying points in the *audio* to points on the *grid.* If the guess is right, the clip plays in sync at any project tempo. If it's wrong, the clip drifts, and you fix it.

Open a clip's **Clip View** (double-click the clip) and find the **Warp** controls:

- **Warp on/off.** Off = the audio plays at its native speed, ignoring the grid (right for one-shots and SFX). On = elastic, locked to tempo (right for loops and anything rhythmic).
- **Seg. BPM** — Live's guess at the clip's tempo. If a loop drifts, this is usually wrong by a factor of 2 (½× or 2×). The **:2** and **\*2** buttons halve/double it — your first fix.
- **Warp Markers** — double-click the waveform's top to drop one; drag it to align a beat to a grid line. **Right-click → "Warp from here (straight)"** to re-grid the whole loop from a marker.
- **Warp Mode** (Beats/Tones/Texture/Re-Pitch/Complex/Complex Pro) — *how* the stretch is computed. This deserves its own treatment (Lecture 3.4 and Lecture 9); for now: **Beats** for drums/loops, **Complex Pro** for melodic/full-mix material.

The most useful warping skill is also the fastest: **set the loop's downbeat.** Most clips just need their first transient dragged onto beat 1 and the right Seg. BPM. Master that and 80% of loops snap into place.

## 2.5 Tempo and key: the two numbers that rule your set

- **Tempo (BPM)** lives top-left. Sample-based genres cluster: lo-fi/hip-hop ~70–95, house ~120–126, jungle/DnB ~160–175, drill ~140 (often felt half-time). Pick a tempo *before* you start so everything warps to a common grid.
- **Key** matters the moment you stack two pitched samples. Two loops in different keys clash. You can move a sample's key by pitching it (Lecture 3). Live 12 can *detect* a clip's key and shows it; you can also just trust your ears. For now: keep pitched samples in one key by transposing the outliers.

## Listening & section questions

1. You drop an 8-bar loop in and it plays slightly slow and drifts out of sync by the end. List two things you'd check first, in order.
2. Why does Live have *two* views instead of one timeline like older DAWs? Describe a task that's natural in Session and miserable in Arrangement, and vice versa.
3. When should Warp be **off**? Give two kinds of audio where warping it on would be a mistake.

## Lab 2 — Warp a loop four ways

Take one melodic loop (4–8 bars). In four duplicate clips:
1. **Auto:** drop it in, let Live guess, fix only the Seg. BPM (try :2 / \*2 until it locks). Loop it for 8 bars — does it stay in time?
2. **Hand-gridded:** delete the warp markers, set one on the downbeat, "Warp from here (straight)." Compare to auto.
3. **Wrong tempo on purpose:** set the project tempo 20 BPM faster. Listen to the warp artifacts in Beats mode vs. Complex Pro mode — note the difference in writing.
4. **Warp off:** turn warp off and loop it. Hear how it ignores your tempo. Write one sentence on when that's what you'd want.

Save this as `lab2_warp.als`.

---

# Lecture 3 — Simpler: The Core Sampling Instrument

## 3.1 Why Simpler does almost everything

**Simpler** ships in *every* edition of Live, and it does the overwhelming majority of real sampling work. Learn Simpler deeply and you can flip, chop, tune, and play any sample. (Its big sibling **Sampler**, covered in Lecture 7, adds multisampling and deeper modulation, but it's a refinement, not a different concept.) Today is the most important hands-on lecture in Week 1. Do every move.

**Get a sample into Simpler:** drag any audio from the browser onto an empty MIDI track (Live wraps it in Simpler automatically), or drag it onto an existing Simpler. The waveform appears in the device.

## 3.2 The three playback modes (this is the core concept)

At the top-left of Simpler's display are three modes. *Choosing the mode is choosing what kind of instrument this sample becomes.*

- **Classic** — the "melodic instrument" mode. The whole sample (or a looped portion) plays, pitched by the keyboard, with a full **amp envelope** (ADSR) and a built-in filter. Use this to turn a sustained sound — a chord, a pad, a single piano note — into a **playable instrument.** Supports looping a sustain portion so held notes ring forever.
- **One-Shot** — the "drum/percussion" mode. The whole sample fires from the start on any note, ignores note-off (plays to its end or a set length), no per-note pitch tracking by default. Use this for **kicks, snares, stabs, vocal chops, SFX** — anything you trigger as a single hit.
- **Slice** — the "chop" mode. Live cuts the sample into **slices** (at transients, at beat divisions, or manually) and maps **one slice per key.** Hit different keys to trigger different chunks. This is how you **chop a drum break or a melodic phrase** and re-sequence it. We'll live here in Lecture 6.

> **Move now:** Load a single sustained sound (a held chord or string note) in **Classic**, and play your computer keyboard (press **M** to enable it, the A–L row is a keyboard). Hear it pitch up and down. Now switch the *same* sample to **One-Shot** and play — every key fires the whole sample from the top. Now switch to **Slice** and watch it cut into pieces, one per key. One sample, three completely different instruments. *That's the lesson.*

## 3.3 Making a clean playable instrument (Classic mode)

To turn a sample into an instrument you'd actually play:

1. **Set the root.** Simpler assumes the sample's pitch corresponds to C3 by default. If your sample is actually an F, it'll play a tritone off. Use the **Transpose** knob (semitones) and **Detune** (cents) to tune it so it lands in key — or trust your ear against a reference note.
2. **Trim the sample.** Drag the start/end markers to the musical part; cut silence and pre-roll. A tight start = a tight instrument.
3. **Shape the amp envelope (ADSR).** Attack (how fast it speaks), Decay/Sustain (the body), Release (the tail after you let go). A plucky sound = fast attack, short release. A pad = slow attack, long release. This is where a static sample becomes *expressive.*
4. **Loop the sustain (for held notes).** Turn on **Loop** and set the loop brace inside the sustained part so a held key rings indefinitely without the sample running out. Crossfade the loop to hide the seam.
5. **Filter it.** Simpler's filter (low-pass etc.) tames brightness or, modulated, adds movement.

> **Move now:** Take *one note* of a piano or synth sample. Tune it to C, trim it, give it a gentle attack and a 400 ms release, loop the sustain. Play a chord on the keyboard. You just built a playable instrument from a single recorded note — the heart of Lecture 7's multisampling, in miniature.

## 3.4 Warp mode matters inside Simpler too

Simpler has its own **Warp** toggle and mode (same family as the clip warp from Lecture 2). With Warp **on**, Simpler keeps the sample in sync with the set tempo as you play it — essential when you're triggering a *loop* as a one-shot and want it to stay in time. With it **off**, pitch and speed are linked (play higher = faster, like a tape machine — the classic "chipmunk" sample sound, which is sometimes *exactly* what you want). Knowing which you want is a real artistic choice (Lecture 9).

## Listening & section questions

1. You have a 2-bar vocal phrase. Describe how it would behave loaded in Classic vs. One-Shot vs. Slice. Which mode for "I want to trigger the whole phrase on one pad"? Which for "I want to rearrange the words"?
2. Why does setting the **root/transpose** correctly matter before you play a sample melodically? What goes wrong if you skip it?
3. What does **looping the sustain** in Classic mode buy you, and what artifact does the **crossfade** control fix?

## Lab 3 — Three instruments from one sample, then a chop

1. **One sample, three modes.** Load a sustained sample. Make it work as a playable instrument in **Classic** (tuned, enveloped, looped). Reload it as **One-Shot** and trigger it rhythmically. Reload as **Slice** and play the pieces. Save all three on separate tracks in `lab3.als`.
2. **First chop.** Load a 4-bar melodic loop in **Slice** mode (slice "by beat → 1/8"). Record a short MIDI clip that triggers the slices *out of order* to make a new 1-bar phrase. Don't aim for good — aim for *different.* Bounce it. This is the seed of Project 1.

---

# Lecture 4 — Audio Fundamentals for Samplers

## 4.1 You can't fix what you can't hear or measure

Sampling means inheriting whatever was in the source recording, good and bad. To work with found audio you need a working model of what audio *is* and where it goes wrong. This is the least glamorous lecture and the one that most separates clean-sounding producers from muddy ones.

## 4.2 Sample rate and bit depth (what "digital audio" is)

Digital audio is sound measured as numbers, many times a second:

- **Sample rate** — how many measurements per second (44.1 kHz = 44,100; 48 kHz is common too). It sets the highest frequency you can represent (half the rate — the Nyquist limit). For this course: **work at 44.1 or 48 kHz and keep your set's rate consistent with your sources.** Mismatched rates are a common "why does my sample play at the wrong speed/pitch" bug — check **Preferences → Audio** if a sample sounds off-pitch the moment it loads with warp off.
- **Bit depth** — the resolution of each measurement (16-bit = CD; 24-bit = production standard; the legendary samplers were **12-bit**, which is *lower* resolution and audibly grittier). Higher = cleaner and more dynamic range. **Record/produce in 24-bit; export to 16-bit for distribution** (Lecture 14). And remember: *low* bit depth is a creative effect you can add back (Lecture 11).

You don't need the math. You need: keep rates consistent, work at 24-bit, and know that "lo-fi" is often literally *low* bit depth and sample rate, on purpose.

## 4.3 Gain staging: the discipline that prevents 90% of mix problems

**Gain** is just level: how loud a signal is at each point in the chain. **Gain staging** is keeping levels sane from input to output so nothing distorts unintentionally and you have headroom to work.

The rules that matter for sampling:

- **Samples arrive at wildly different volumes.** A loud mastered record and a quiet field recording are 20+ dB apart. Level them as you load them (Simpler's **Volume**, a Utility gain, or clip Gain) so you're comparing *music,* not *loudness.* Louder always sounds "better" for the first 3 seconds — don't be fooled.
- **Leave headroom.** Aim for your master to peak around **−6 dB**, not slamming 0. Digital clipping (going over 0 dBFS) is harsh and usually a mistake. You want room to add elements and process without redlining.
- **Watch for inherited clipping.** A sample ripped loud may already be clipped or brick-walled. EQ and saturation can't un-clip it; pick cleaner sources or embrace the grit deliberately.

> **Move now:** Drop a loud commercial loop and a quiet sample on two tracks. Watch the meters — see the gap. Add a **Utility** to each and match their perceived loudness by ear (turn the loud one *down*). Now you can judge them as music.

## 4.4 Transients: the most important word in chopping

A **transient** is the sharp onset of a sound — the *attack* spike (a drum hit, a pluck, a consonant). Transients are how Live's slicing finds chop points (Lecture 6), and how your ear locates the "beat." Two practical consequences:

- **Preserve transients when warping drums** (Beats mode is built to; Complex modes can smear them — Lecture 9). Smeared transients = mushy, lifeless drums.
- **Chop *on* the transient, not before or after.** A slice that starts a hair late "swallows" the attack and sounds weak; one that starts early adds a gap. Lecture 6 makes this muscle memory.

## 4.5 Mono, stereo, and phase (briefly, but you'll thank me)

- Many great samples are **mono** (old records, single-mic recordings). That's fine — mono sits solidly in the center. You can *widen* later with effects, but a punchy mono kick beats a vague stereo one.
- **Stereo** samples carry width but can have **phase** issues (the two channels partially canceling), which makes them vanish when summed to mono (a real concern for club/phone playback). If a stereo sample sounds thin or "hollow," try Utility → mono and compare.
- **Bass should be mono.** Sub frequencies in stereo cause phase problems and waste headroom. A Utility set to mono-below-120-Hz on bass elements is standard practice (Lecture 13).

## Listening & section questions

1. Two samples sound like they're "fighting" and one seems way better — then you turn it down 6 dB and suddenly they're equals. What just happened, and what's the lesson for trusting your ears?
2. What is a transient, and why does *where* you place a slice relative to it determine whether a chopped drum hits hard or sounds weak?
3. A stereo sample sounds full on your headphones but disappears when a friend plays it on a mono Bluetooth speaker. Name the likely cause and one fix.

## Lab 4 — Fix three ugly samples

Find or create three "problem" samples: one **too quiet**, one **clipped/harsh/too loud**, one **stereo-but-thin** (or a drum loop with **smeared transients** after warping). For each:
1. Diagnose the problem in one sentence (level? clipping? phase? transients?).
2. Apply the minimum fix: Utility gain / mono-ing, a different warp mode, or choosing a better source.
3. A/B before and after and write down what changed.
Save as `lab4_repair.als`. The goal isn't perfection; it's *naming* what's wrong, which you can't fix until you can hear.

---

# Lecture 5 — Synthesis + Project Day

## 5.1 What you now own

Four foundations, and every later technique is one of them, elaborated:

1. **The sample as material** (L1) — source is half the track; hear clay, not finished music; release deliberately.
2. **Live's model** (L2) — two views (sketch in Session, commit in Arrangement), the browser as auditioning tool, and warping as the elastic-audio engine that makes Live a sampler.
3. **Simpler's three modes** (L3) — Classic (instrument), One-Shot (hit), Slice (chop). Choosing the mode is choosing the instrument.
4. **Audio reality** (L4) — gain staging, transients, sample rate/bit depth, mono/stereo. The unglamorous layer that decides whether your stuff sounds clean.

When you meet a new technique in Week 2 or 3, locate it on this map: *is this about source, time/warp, the instrument, or the signal?*

## 5.2 Today

1. **Quiz 1** (`week1/quiz.md`) — closed-Live, then self-grade.
2. **Finish Project 1 — The Flip** (`week1/project.md`) — your first finished musical loop, due tonight.
3. **Rubric checkpoint** — write evidence paragraphs for **D1–D3** (target: Competent). Point at your `lab*.als` files.

## 5.3 Looking ahead

Week 2 is **construction:** chopping in depth (re-sequencing the Amen break), the full Sampler and multisampling, building drum kits and grooves, and the deep magic of pitch/time/texture (resampling and granular). Tonight, make sure you have **at least one clean drum break** in your library — we take it apart on Day 6. Skim the Lecture 6 ⭐ resource so the chop workflow is familiar before you do it.
