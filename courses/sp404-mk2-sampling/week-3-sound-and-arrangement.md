# Week 3: Sound, Arrangement & The Track

> **The thesis of this week:** a grooving eight-bar loop is not a song. A track has a *sound* (effects and a sonic identity), it has *parts* beyond drums and a sample (bass, melody, texture), it has *structure* (an intro, a build, a hook, a change), and it has a *mix* (every element audible and balanced so it sounds good on any speaker). This week you take the beatmaking you learned in Week 2 and finish it into music. The danger this week is the opposite of last week's: not "I cannot make anything" but "I keep starting and never finishing." The whole week is aimed at one outcome, a track you complete and would play for a friend. Finishing is a skill, and it is the one this week teaches.

Keep saving and backing up. This is the week your projects start to be worth real time, so protect them.

---

# Day 15: Effects 1, the Bus and the SP Sound

### Objectives
- Understand the effects bus and how effects are applied without changing the sample.
- Use the SP's signature effects (Vinyl Sim, Cassette, filters).
- Route pads to an effects bus.

### Listen (3 min)
Listen to a lo-fi beat and a clean, modern pop beat back to back. The lo-fi one has *hiss, warmth, rolled-off highs, a little wobble*; the pop one is crisp and bright. That difference is mostly **effects**, the same drums and samples can be either. Today you start shaping the sound, not just the notes.

### Lecture

On the SP-404 MK2, effects live on an **effects bus** ([Field Guide §3](FIELD-GUIDE.md)). A pad's sample plays, gets routed to a bus, and the bus's effect processes it **in real time without altering the stored sample**. Turn the effect off and the original is untouched. This is freeing: you can drench a loop in an effect, audition it, change your mind, all non-destructively, and only make it permanent when you **resample** the effected output (Day 13). The MK2 has a deep effects engine that has grown with firmware updates; you do not need all of it, you need a handful you know cold.

**The signature SP effects**, the ones that define the lineage's sound:

- **Vinyl Sim (vinyl simulator):** the legendary lo-fi effect from the SP-303. It adds vinyl crackle and noise and rolls off the highs and lows, instantly giving anything that warm, old-record, "found on dusty wax" character. This one effect is most of the classic SP sound.
- **Cassette Sim:** tape character, hiss, wow and flutter (slight pitch wobble), and saturation. Like Vinyl Sim but with a tape flavor: warm, slightly unstable, nostalgic.
- **Filters (low-pass and high-pass):** a **low-pass filter** removes highs (darker, muffled, underwater, great for an intro before the beat "opens up"); a **high-pass filter** removes lows (thinner, distant, useful to clear room for a bass or to make a part sound far away). Filters are the most-used effect in all of electronic music; learn them first.
- **Resonator, isolator, and the rest:** the MK2 has many more, but Vinyl Sim, Cassette, and the filters will carry you a long way. Explore the others once these are reflex.

**Bus routing.** You assign which pads go through which effect bus ([Field Guide §4](FIELD-GUIDE.md)). This means you can put your sample loop through Vinyl Sim while your drums stay clean, or run everything through one filter to open and close the whole beat at once. The mental model: **a bus is an effect that some or all of your pads pass through on the way to the output.**

> **Taste over quantity.** The beginner mistake with effects is using all of them at once until the beat is mud. Pros use few effects, deliberately. One filter sweep, one tasteful Vinyl Sim, can do more than ten effects fighting each other. Add one effect, ask "does this make it better," and if not, take it off.

### Do
1. **(10 min) Vinyl Sim a loop.** Route your main sample loop through Vinyl Sim. Hear it transform from clean to warm and worn. Adjust the amount to taste. This is the SP sound in one move.
2. **(12 min) Filter sweep.** Put a low-pass filter on your whole beat and sweep it: closed (dark, muffled) opening up to fully open (bright). This is how intros build into a beat. Try a high-pass to make a part sound thin and distant.
3. **(8 min) Selective routing.** Effect only one element (say, drench just the sample in Vinyl Sim) while the drums stay clean and punchy. Hear how that separation makes the beat sit better.

### Daily drill
**One-effect-better, 3 min:** take any sound and improve it with exactly *one* effect, then stop. Training restraint now saves you from the muddy over-effected beats that mark a beginner.

### Self-check
1. What is the effects bus, and why is processing on it non-destructive?
2. What does Vinyl Sim do, and why is it central to the SP sound?
3. What is the difference between a low-pass and a high-pass filter, and a use for each?
4. What does it mean to route pads to a bus?
5. What is the most common beginner mistake with effects, and the cure?

---

# Day 16: Effects 2, Input FX, Time Effects, and the Looper

### Objectives
- Use input effects to shape a sound *while* sampling it.
- Use delay and reverb for space and depth.
- Use the DJFX looper as a performance and production tool.
- Understand sidechain pumping.

### Listen (3 min)
Listen to a beat and notice the **space**: some sounds feel close and dry, others feel far away with an echo or a wash around them. That depth is **delay and reverb**. Then notice any moment where the whole beat seems to "breathe" or pump in time with the kick. That is **sidechain**. Today you add space and movement.

### Lecture

**Input FX (effects while sampling).** You can run an effect on the sound *as it comes in*, so it gets baked into the sample at the moment of recording ([Field Guide §3](FIELD-GUIDE.md)). Sample a clean source through Vinyl Sim and the sample is *born* lo-fi; sample a voice through a filter and you capture exactly the tone you want. This commits the effect (like resampling does), so use it when you are sure, but it is a fast way to get character without an extra step.

**Delay and reverb (time and space):**

- **Delay** repeats the sound (echoes) at a set time, often synced to the tempo. A short delay thickens; a long, synced delay creates rhythmic echoes that fill space. A touch on a vocal chop or a snare adds depth and interest.
- **Reverb** simulates a room or space, adding a tail that makes a sound feel like it exists somewhere (a small room, a huge hall). A little reverb glues a beat together and adds depth; too much washes everything out and muddies the mix. Use it like seasoning.

**The DJFX Looper.** A performance effect that captures a slice of the playing audio and loops it, letting you stutter, repeat, and rhythmically chop the output live, a staple of SP live sets and a great way to create transitions, build-ups, and glitchy fills. You can resample its output to capture a happy accident as a new part.

**Sidechain (pumping).** Sidechain makes one sound duck in volume whenever another sound hits, classically the bass and music **duck every time the kick hits**, so the kick punches through and the whole track "pumps" rhythmically. The MK2 added sidechain in a firmware update. A subtle amount cleans up a muddy low end (the kick and bass stop fighting); an obvious amount is a deliberate rhythmic effect. Either way it adds movement and lets the kick breathe.

> **Space is depth, not loudness.** Beginners reach for volume to make something stand out; pros reach for *space*. Pulling a sound back with reverb and rolling off some highs can make a beat feel three-dimensional, where cranking everything just makes it loud and flat. Think near and far, not just loud and quiet.

### Do
1. **(10 min) Sample through an effect.** Record a new sample with an input effect on (Vinyl Sim or a filter) so it is captured with character. Compare it to the dry version.
2. **(12 min) Add space.** Put a tasteful delay on a vocal or melodic chop and a little reverb on the whole beat. Find the line where it adds depth and back off before it gets washy.
3. **(8 min) Looper play.** Run the DJFX looper over your beat and create a stutter or a build-up. If you catch something cool, resample it as a transition.

### Daily drill
**Near-and-far, 3 min:** take two copies of a sound and place one "close" (dry, bright) and one "far" (reverb, filtered, quieter). Hearing depth as a dimension you control is what makes beats sound produced.

### Self-check
1. What are input effects, and what is the trade-off of using them?
2. What is the difference between delay and reverb?
3. What does too much reverb do to a mix?
4. What does the DJFX looper let you do?
5. What does sidechain/pumping do, and why is it useful between kick and bass?

---

# Day 17: Bass & Melody

### Objectives
- Play a single sample chromatically across the pads to make melodies and bass.
- Build a simple bassline that fits the sample's key.
- Sample an instrument to play melodically.

### Listen (3 min)
Listen to a beat and pick out the **bassline**, the low melodic part under the drums and sample. Notice it is usually simple, a few notes, locking with the kick, defining the harmony. A good bassline is what makes a loop feel like a song. Today you add one.

### Lecture

So far your melody has come from chopping a sample. Today you *play* pitched notes, which opens up bass and original melody. The key idea: **one sample, pitched across the pads, becomes a playable instrument.** Take a single note (a bass note, a single piano key, one sung "ah"), copy it across a row of pads, and tune each pad to a different pitch. Now the pads are a little keyboard and you can play a melody or bassline. The SP also has a **chromatic/keyboard mode** that lays a sample out across the pads in even musical steps automatically, so you can play it like a piano; use it to find notes fast.

**Building a bassline by ear** (no theory required, same instinct as Day 5):

1. Get your sample loop playing, the one that sets the key.
2. Pick a low note sample and pitch it until it **locks** with the loop (sounds right, not sour). That is your "home" bass note.
3. Lay a few more pitches near it across pads. Play along with the loop and keep the notes that sound good, drop the ones that clash.
4. Make a simple rhythm with those notes that locks with your kick. Simple and locked beats busy and clever. Two or three notes is plenty.

**Sampling an instrument.** If you play any instrument even a little, or have access to one, sampling a few of its notes gives you a personal, clean (and releasable) melodic source. Record one note, spread it across the pads chromatically, and you have a playable instrument that is entirely yours. The same works for any pitched sound you can record: a synth, a music box, your own hum.

> **Less is more in the low end.** Basslines and the low frequencies are where beginners overcrowd a mix. One clean bass note locking with the kick does more than a busy bass run fighting the sample. When in doubt, play fewer notes and let them land.

### Do
1. **(12 min) Make a keyboard.** Take a single melodic note (bass or instrument) and spread it across the pads by pitch, or use chromatic mode. Play up and down and get used to where the pitches sit.
2. **(12 min) Build a bassline.** With your main loop playing, find the home bass note by ear, add a couple more, and make a simple two-or-three-note bassline that locks with your kick. Resample it to a pad when you like it.
3. **(6 min) Try an original melody.** Over your beat, pick out a tiny melodic line on your pitched pads. Keep it simple. Even four notes can be a hook.

### Daily drill
**Find-the-home-note, 3 min:** with any loop playing, find the bass note that locks with it by ear, as fast as you can. This is the same lock-it-in ear from Week 1, and it is the foundation of all your harmony.

### Self-check
1. How do you turn one sample into a playable melodic instrument on the pads?
2. What does chromatic/keyboard mode do for you?
3. Describe, in steps, how to build a bassline by ear.
4. Why is sampling your own instrument a good source for music you might release?
5. What is the common beginner mistake in the low end, and the fix?

---

# Day 18: Arrangement

### Objectives
- Chain patterns into a longer structure.
- Understand basic song structure (intro, main, variation, break).
- Build and release energy with arrangement, not just new sounds.

### Listen (3 min)
Listen to a full beat or song from start to finish and map it: it probably starts sparse (just the sample, or just drums), brings in the full beat, drops elements out for a break, brings them back. That *shape over time* is arrangement, and it is what makes a track go somewhere instead of looping forever. Today you give your beat a shape.

### Lecture

A looping eight bars is a beat; a **track** has an arrangement, a planned sequence of sections that takes the listener on a short journey. The tool is **pattern chaining**: you make several patterns (Day 11) that are variations of each other and play them in a sequence to build a song ([Field Guide §4](FIELD-GUIDE.md)).

**The building blocks of a simple arrangement:**

- **Intro:** start sparse to draw the listener in. Just the sample (maybe filtered dark), or just drums, or a vocal alone. Hold something back so you have somewhere to go.
- **Main section (the "drop" or the groove):** the full beat, everything in, the part the whole track is about.
- **Variation:** a version of the main with something changed (a different drum fill, an added melody, the bass dropped out for two bars) so it does not get boring on repeat.
- **Break:** pull elements out for a few bars (drop the drums, leave the sample; or drop everything but the drums) to create contrast and tension, then bring them back for a lift. Contrast is what makes the return feel powerful.

**Energy comes from arrangement, not just new sounds.** The most powerful moves are often *subtraction*: dropping the drums out makes their return hit hard; filtering everything down then opening it up creates a build with no new parts at all. Beginners try to create excitement by piling on more; pros create it by taking away and bringing back. **Tension and release** is the whole game: take something away (tension), give it back (release).

**Keep it short.** A first track does not need to be three minutes. **One to one and a half minutes** with a clear intro, a main section, a variation, and a break is a complete, satisfying piece, and finishing it teaches you more than a sprawling unfinished epic. Length is not quality.

### Do
1. **(10 min) Make variations.** From your main pattern, make two or three variation patterns: one stripped down (for an intro or break), one with an extra element, one with a fill. Patterns are cheap; make them freely.
2. **(15 min) Chain a structure.** Arrange your patterns into a sequence: intro (sparse) into main into variation into break into main. Play it through start to finish. Does it go somewhere?
3. **(5 min) Add a transition.** Use a filter sweep, a looper stutter, or a drop to smooth one section into the next. Small transitions make an arrangement feel intentional.

### Daily drill
**Subtract-for-impact, 4 min:** take any looping section and create one moment of impact using only subtraction and return (drop the drums, then slam them back). Learning that *taking away* creates energy is the arrangement insight that separates tracks from loops.

### Self-check
1. What is arrangement, and what tool do you use to build it on the SP?
2. Name the building blocks of a simple arrangement and what each does.
3. Why is subtraction (dropping elements out) such a powerful tool?
4. What is "tension and release"?
5. Why is a short, finished track better for learning than a long unfinished one?

---

# Day 19: Mixing

### Objectives
- Balance the levels of your elements so each is audible.
- Use pad gain and bus levels to control the mix.
- Check your mix in mono and on different speakers.
- Decide how lo-fi vs clean you want it.

### Listen (3 min)
Listen to your favorite beat on your phone speaker, then on headphones, then in a car if you can. Notice it sounds *good everywhere*: the kick is present, the vocal is clear, nothing disappears or overwhelms. That translation is **mixing**, and it is the difference between a beat that sounds good only on your setup and one that sounds good everywhere. Today you make yours translate.

### Lecture

**Mixing is balancing your elements so every one is audible and the whole thing sounds good on any system.** It is not magic and it is not (at this level) about expensive plugins. It is mostly **levels**: how loud each pad and each element is relative to the others.

**The core moves on the SP:**

- **Set levels with pad volume and bus levels** ([Field Guide §4](FIELD-GUIDE.md)). Start with the drums (the kick and snare are usually the loudest, most present elements), then bring the sample in so it supports rather than buries them, then the bass locked with the kick, then everything else underneath. The vocal or lead, if you have one, sits on top.
- **Carve with filters.** If two elements are fighting (the bass and the sample both crowding the low-mids, say), roll some lows off the less important one with a high-pass filter so they stop competing. Making room is more effective than turning things up.
- **Leave headroom.** Do not push the master so hard that it clips. A clean mix with room at the top sounds better and louder (later) than a squashed, distorted one. Watch the output meter; keep it out of the red.

**Check in mono.** Many speakers (phones, club PAs, Bluetooth boxes) sum to mono. A mix that sounds wide and great in stereo can collapse and lose elements in mono. Flip your monitoring to mono periodically and make sure nothing disappears; if it does, you have a phase or width problem to fix.

**Check on multiple speakers.** Bounce your track and play it on your phone, your headphones, a friend's speaker. Each reveals different problems (the phone shows you if the mix relies too much on bass you cannot hear there; headphones show detail and harshness). Fix what does not translate.

**The lo-fi question.** Part of the SP aesthetic is *intentional* imperfection, hiss, narrow frequency range, grit. That is a valid artistic choice, not a mixing failure, but it is a *choice*. Decide how clean or how dirty you want this track and commit to it. "Lo-fi" should be a decision you made, not an accident you could not fix. A deliberately warm, narrow, crunchy mix is great; an accidentally muddy one is not.

> **The first rule of mixing: can you hear everything?** Before anything fancy, play your track and ask of each element, "can I clearly hear this, and is anything covering it?" Fix audibility first with simple level changes. Most beginner mixes are fixed by that question alone.

### Do
1. **(12 min) Balance the levels.** Set your drums first, then fit every other element around them by ear. Play it and confirm you can clearly hear each part. Turn down before you turn up.
2. **(8 min) Carve a clash.** Find two elements fighting for the same space and high-pass the less important one to make room. Hear the mix open up.
3. **(10 min) Mono and multi-speaker check.** Listen in mono and confirm nothing vanishes. Bounce the track and play it on your phone and headphones. Note what does not translate and fix it. Decide and commit to your lo-fi-vs-clean choice.

### Daily drill
**Can-I-hear-it, 3 min:** play any beat and name every element and whether it is clearly audible. Training this question is 80% of mixing and costs you nothing.

### Self-check
1. In one sentence, what is mixing, and what is it mostly about at this level?
2. In what order do you usually set up a mix (which element first)?
3. Why high-pass an element instead of just turning the other one up?
4. Why check your mix in mono and on multiple speakers?
5. What is the difference between deliberately lo-fi and accidentally muddy?

---

# Day 20: Final Workshop + Project 3

Today is consolidation and polish, not new material. Two things:

### 1. Project 3: A Polished Beat
Do **Project 3** (see `PROJECTS.md`). It asks you to take one beat from "it works" to "it sounds good," applying everything from Week 3: a deliberate sound (effects), a bassline or melodic element, a touch of arrangement, and a balanced mix. This is the dress rehearsal for the final track.

### 2. The polish pass (the producer's checklist)
Run any beat through this checklist and fix what fails. This is the routine that turns a sketch into a finished piece, and you will use it on every track for the rest of your life:

- **Drums:** do they groove and hit hard? Velocity varied? Swing right? Kick and snare clear?
- **Sample:** clean, in tune, trimmed, sitting at the right level under the drums?
- **Low end:** bass and kick locked, not fighting, not muddy?
- **Sound:** is there a deliberate sonic identity (the effects you chose), not a pile of accidents?
- **Space:** is there depth (near and far), or is everything flat and equally loud?
- **Arrangement:** does it go somewhere (intro, main, variation, break), or just loop?
- **Mix:** can you hear every element, in mono and on your phone? Headroom at the top?
- **Finish:** could you play this for a friend right now without apologizing for it?

### Looking ahead
You have now done every part of making a track: sample, chop, drum, sequence, resample, effect, arrange, mix. Tomorrow you put it all together into one finished piece, the proof that you ended this course an actual beatmaker. The skills will keep deepening for years (live performance, deeper sound design, your own recognizable sound), but the complete loop, from a sound in the world to a finished track, is yours now.

---

# Day 21: Final Exam + Final Track

The last day. Two deliverables, and then you are a beatmaker.

### 1. Final Exam
Take the **Final Exam** (see `QUIZZES.md`), closed-book, and grade against `ANSWER-KEYS.md`. It covers the whole course: the machine, sampling, chopping, drums, the sequencer, resampling, effects, arrangement, and mixing. The applied questions are graded by honest self-assessment against the stated standard.

### 2. The Final Track
Complete and turn in your **Final Track** (see `PROJECTS.md`): a finished piece of music, roughly one to one and a half minutes, made entirely on the SP-404 MK2, that uses sampling, chopping, your own drums, the sequencer, resampling, effects, and a basic arrangement and mix. Bounce it to a file, listen on a different speaker, and make sure it is something you would actually play for someone.

### A final word
Three weeks ago this was a box of mysterious buttons. Now you can hear a sound in the world, capture it cleanly, chop it into something new, build drums and a groove and a bassline under it, shape its sound, arrange it into a track, mix it so it translates, and finish it. That full loop, from ear to finished music, is the whole craft, and you own it.

The depth from here is endless and it is the fun part: performing live with the sequencer and the looper, building a personal sound from the effects and resampling, digging for samples nobody else has, getting fast enough that the machine disappears and only the music is left. Go listen to the people who defined this instrument (Madlib, Flying Lotus, Knxwledge, Kaytranada) with your new ears, steal their ideas, and make a hundred more beats. Save the final track. It is your "before."

Now make the next one.
