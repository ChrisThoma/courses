# Week 3 — Craft & Workflow

> **The thesis of this week:** the photograph isn't finished when the shutter clicks. The RAW file is a *negative* — a faithful but flat record of the light — and the edit is where you *develop* it into the image you saw. This week you build a repeatable digital-darkroom workflow, learn the conventions of the major genres so you can choose your lane, and start the lifelong project of developing a point of view. By Friday you'll have a finished portfolio.

> **Shoot RAW from today on.** Weeks 1–2 may have been JPEG so you could focus on the camera. From Day 15, switch to RAW (or RAW+JPEG) so the editing lessons have real data to work with.

---

# Day 15 — RAW vs. JPEG, Files & the Digital Negative

### Objectives
- Understand the real difference between RAW and JPEG and when to use each.
- Set up a sane file-management and backup habit.
- Adopt a culling workflow that keeps the keepers and the lessons.

### Lecture

**JPEG** is a *finished, processed* photo: the camera applies white balance, contrast, color, sharpening, and noise reduction, then **throws away most of the data** to make a small, ready-to-share file (8 bits per channel, ~16.7M colors, lossy compression). Looks great instantly; little room to change later.

**RAW** is the *unprocessed sensor data* — every value the sensor recorded (12–14 bits, thousands of brightness levels per channel), with nothing baked in. It's bigger, looks flat/dull straight out of camera, and **must be developed** in software. In return you get enormous editing latitude:

| | JPEG | RAW |
|---|---|---|
| Data depth | 8-bit (256 levels) | 12–14-bit (4,096–16,384 levels) |
| White balance | **baked in** | **fully changeable, free** |
| Recover blown highlights / dark shadows | very little | **often 1–3 stops** |
| File size | small | large (~2–5×) |
| Ready to share? | yes | no — must export |
| Best for | speed, volume, when you nailed it in-camera | quality, control, tricky light, learning |

**The mental model: RAW is a negative, JPEG is a print.** A negative holds all the information and can be printed many ways; a print is one interpretation, fixed. Serious work shoots RAW because the latitude to fix WB, recover highlights, and push shadows is exactly what saves real photos. **RAW + JPEG** gives you a shareable file now *and* the negative for later — the recommended default while learning.

**The exposure habit RAW rewards:** protect your highlights (don't clip — they're gone even in RAW), and feel free to keep shadows a touch dark in-camera; you can lift them later. The histogram (Day 5) is how you watch the highlight edge.

**File management — the boring skill that saves you.** A workflow you'll actually keep:
1. **Import** to one organized location: folders by date or shoot (`2026/2026-06-14_street/`).
2. **Back up immediately** — the 3-2-1 rule: **3** copies, on **2** kinds of media, **1** off-site (a cloud sync counts). A photo exists only if it exists twice. Cards fail; drives die.
3. **Cull** (next paragraph), then keep originals untouched.
4. **Catalog** with a tool (Lightroom, Capture One, darktable, Apple Photos) so you can *find* images by date, rating, keyword.

**Culling — keep the right things.** After a shoot, review and **rate**:
- Reject (delete) only the technical failures: blinks, total misfocus, accidental shots.
- **Keep your instructive failures** during this course — the "almost" shots teach more than the keepers.
- Flag/star the genuine keepers (aim ruthless: 5–10% is normal). Edit only those.
- Don't edit while culling; separate the *choosing* from the *developing*.

> 🟩 **X100VI:** Set **Image Quality → RAW+JPEG (Fine)** (IQ menu). You get a Fujifilm film-sim JPEG to enjoy/share and a `.RAF` RAW to develop. Files are large (40MP) — use a fast, large card and back up often. **Adobe Lightroom/Camera Raw, Capture One, and the free RawTherapee/darktable all read `.RAF`**, and Lightroom/C1 even offer **Fujifilm film-simulation profiles** so you can start your RAW edit from "Classic Chrome" or "Acros" and go from there. Fuji's own **X RAW Studio** develops RAFs on a computer using the camera's processor — a neat, free option.

### Look
- Take one RAW (or RAW+JPEG) frame of a high-contrast scene (bright window, dark room). In an editor, pull the highlights down and the shadows up on the RAW and watch detail reappear that the JPEG simply doesn't contain. That recovered detail *is* the reason to shoot RAW.

### Shoot
1. **(15 min)** Switch to RAW+JPEG. Shoot a deliberately high-contrast scene (interior with a bright window). You'll recover it on Day 16.
2. **(20 min)** Shoot ~40 frames of a single subject/scene (a corner of a room, a person, a street). This is your raw material for the week's editing lessons — variety helps.
3. **(15 min) Set up your system:** create a dated folder, import today's shoot, confirm a second copy exists (backup drive or cloud). Do a first cull: reject the failures, star 3–5 keepers.

### Daily drill (start today)
**Cull-rate, 2 min:** open a past shoot and force yourself to pick the single best frame and say *why* in one sentence. Decisiveness is a skill.

### Self-check
1. What does the camera do to make a JPEG that a RAW skips?
2. Name two things RAW lets you change/recover that JPEG largely doesn't.
3. What is the 3-2-1 backup rule?
4. During this course, which "bad" frames should you *keep*, and why?
5. Why separate culling from editing?

---

# Day 16 — Editing Workflow I: Tone

### Objectives
- Adopt a fixed, repeatable editing order.
- Master the tonal controls: exposure, contrast, highlights/shadows/whites/blacks, the tone curve.
- Edit to intent without overcooking.

### Lecture

A repeatable **edit order** keeps you from flailing. Use this every time:

> **1. Crop/straighten → 2. White balance → 3. Tone (today) → 4. Color (Day 17) → 5. Local adjustments (Day 17) → 6. Detail: sharpen/noise → 7. Export.**

Today is **tone** — the brightness and contrast structure of the image, the foundation everything else sits on. The global tone sliders (names vary slightly by app; these are Lightroom/Camera Raw's, and Capture One/darktable have equivalents):

- **Exposure:** overall brightness. Set this *first* in tone — get the image to the right general lightness.
- **Contrast:** the spread between darks and lights. More = punchier; less = flatter/softer.
- **Highlights:** the bright areas (not the brightest). Pull **down** to recover detail in skies, windows, bright skin. The single most useful slider for "rescuing" a too-bright sky.
- **Shadows:** the dark areas (not the darkest). Push **up** to open up detail in shadows. (Don't overdo — fully lifted shadows look flat and get noisy.)
- **Whites:** the *brightest* point. Set where pure white begins.
- **Blacks:** the *darkest* point. Set where true black begins.

**The classic tonal move:** drop Highlights, lift Shadows → recovers a high-contrast scene into a balanced one. Then set Whites and Blacks to re-establish a full tonal range (a touch of true black and true white gives an image "snap"). Watch the **histogram** as you go (Day 5): you usually want data spanning most of the width without clipping piles at either edge — *unless* you're going for a deliberately dark (low-key) or bright (high-key) look.

**The tone curve** — the most powerful tonal tool once you're comfortable. It's a graph mapping input brightness (x) to output brightness (y); drag points to remap tones:
- An **S-curve** (lift the upper part, dip the lower) adds contrast with control — the bread-and-butter edit.
- Lifting the bottom-left corner creates a **"faded/matte" film look** (blacks become dark gray).
- It gives you region-by-region control the sliders can't.

**The cardinal rule of editing: restraint.** The mark of a beginner is the *overcooked* photo — slammed contrast, crushed blacks, HDR halos, neon saturation. Edit to *enhance what's there and serve your intent*, then **stop**. A good test: edit, walk away, come back later — you'll almost always pull it back. **Less is more**, again.

**Non-destructive editing:** RAW editors don't change your file; they store a list of instructions. You can always reset to the original, make virtual copies for variations, and re-edit forever. Edit fearlessly — nothing is permanent until export.

> 🟩 **X100VI:** Starting a RAF edit from a **Fujifilm film-simulation profile** (set the "Profile" in Lightroom's Basic panel to e.g. *Provia/Standard*, *Classic Chrome*, or *Acros*) gives you Fuji's renowned tone/color as a *starting point*, then you apply today's tonal moves on top. Because the X100VI's 14-bit RAF holds deep shadow/highlight data, the drop-highlights/lift-shadows recovery is very forgiving — that bright-window interior from Day 15 will come back beautifully.

### Look
- Take your high-contrast Day-15 frame. Note the blown window and dark room. You're about to fix it.

### Shoot / Edit (today is mostly editing)
1. **(10 min)** Shoot 5 new frames with a clear tonal challenge (very bright sky, deep shadow, or low-key mood) to edit.
2. **(30 min) Tone recovery.** Edit the high-contrast frame in order: crop/straighten, set WB, then tone — Exposure, drop Highlights, lift Shadows, set Whites and Blacks to taste, watching the histogram. Bring the window *and* the room into a balanced image.
3. **(15 min) Tone curve.** On a second image, apply a gentle S-curve for contrast. Then try a faded-matte look by lifting the black point. Feel what the curve does that the sliders don't.
4. ★ **(10 min)** Make a deliberately **low-key** (dark, moody) and a **high-key** (bright, airy) edit of the *same* frame — proving tone is interpretation, not just "correct vs. wrong."

### Daily drill
**Slider-naming, 2 min:** for a flashed problem, name the *first* slider you'd reach for ("blown sky?" → Highlights down; "muddy flat image, no punch?" → Contrast/Blacks or an S-curve; "too dark overall?" → Exposure).

### Self-check
1. State the 7-step edit order.
2. Which slider rescues a too-bright sky?
3. What does an S-curve on the tone curve do?
4. What's the single most common beginner editing mistake?
5. Why can you edit a RAW "fearlessly"?

---

# Day 17 — Editing Workflow II: Color, Local Adjustments & Detail

### Objectives
- Refine white balance and color precisely.
- Use local (masked) adjustments to direct the eye.
- Apply sharpening and noise reduction correctly, and export properly.

### Lecture

Tone is set (Day 16). Now **color, local work, and detail** — steps 2/4/5/6 of the workflow.

**White balance, precisely.** You met WB in Day 9; in the editor it's two sliders:
- **Temperature** (blue ↔ yellow) and **Tint** (green ↔ magenta).
- Fastest method: the **white-balance eyedropper** — click something that should be neutral gray/white, and the editor neutralizes the cast. Then nudge to taste (a hair warm usually flatters people). On RAW this is free and lossless.

**Color adjustments:**
- **Vibrance vs. Saturation:** Saturation boosts *all* colors equally (easy to overdo, wrecks skin). **Vibrance** boosts the *less-saturated* colors more and protects skin tones — prefer Vibrance for a natural lift.
- **HSL** (Hue/Saturation/Luminance per color): the precision tool. Make skies deeper blue (drop blue luminance), tame an over-orange skin tone, mute a distracting color. Per-color control is how pros fine-tune.
- **Color grading** (tinting shadows/highlights different hues, e.g. warm highlights + cool shadows) sets mood — a teal-shadow/orange-highlight split is the modern "cinematic" look. Subtle is better.

**Local (masked) adjustments — directing the eye.** Global sliders affect everything; **local** adjustments affect only a selected area:
- **Radial / brush masks:** brighten a face, darken a corner, add clarity to eyes.
- **Linear gradient:** darken a bright sky from the top (digital grad-ND).
- **AI subject/sky masks** (modern editors): select the sky or subject automatically, then adjust just that.
- **The classic moves:** subtly **brighten the subject** and **darken/desaturate the background and edges** (a gentle **vignette**) to pull the eye exactly where you want. This — guiding attention — is what local edits are *for*.

**Detail — sharpening & noise (do last, at 100% view):**
- **Sharpening** enhances edge contrast for crispness. Apply *modestly* — over-sharpening creates ugly halos and crunch. Use **masking** so you sharpen edges, not smooth skin/sky.
- **Noise reduction** smooths the grain from high ISO (Day 4). There's a trade-off: too much NR turns detail to plastic mush. Balance against sharpening. Modern **AI denoise** is remarkably good for high-ISO RAW files.

**Export.** Match the file to its destination:
- **Web/screen/social:** JPEG, sRGB color space, long edge ~2048px, quality ~80%. (sRGB matters — wrong color space makes web colors look dull/wrong.)
- **Print:** higher resolution, often Adobe RGB/ProPhoto, minimal compression.
- Keep your master (the RAW + edit instructions); export *copies* for sharing. Never overwrite the negative.

**Black & white** deserves a mention: convert in the editor (not by desaturating — use a B&W mix so you can control how each *color* maps to a gray tone, e.g. darken a blue sky for drama). B&W lives or dies on **tone and contrast**, so it leans hard on Day 16 skills.

> 🟩 **X100VI:** If you shot RAW+JPEG, you can audition Fuji's looks instantly — but for full control, edit the RAF: use the WB eyedropper on a neutral, lift with Vibrance not Saturation, mask the subject to brighten +/- the background, then a touch of sharpening with masking. For B&W, start from the **Acros** profile (its tonality is gorgeous) and refine with the B&W mix. Export sRGB JPEGs at ~2048px for sharing.

### Look
- Take a finished-looking photo and identify *where your eye goes first*. Usually it's the brightest, sharpest, most saturated spot. That's what local adjustments control — verify on a pro image that the subject is subtly brighter/sharper than its surroundings.

### Edit
1. **(20 min) Color.** On a portrait or colorful scene: set WB with the eyedropper + taste, lift with Vibrance, then use HSL to deepen one color (e.g., sky) and tame another (e.g., over-orange skin).
2. **(20 min) Local work.** On one image: brush to brighten the subject, add a gentle vignette / darken the edges, and use a gradient to tame a bright sky. Make the eye go where *you* want.
3. **(10 min) Detail + export.** Sharpen modestly with masking at 100%, apply noise reduction if it's a high-ISO frame, then **export** a web JPEG (sRGB, ~2048px). 
4. ★ **(10 min)** Make a strong **black & white** conversion using the B&W color mix; push contrast for drama.

### Daily drill
**Where's-the-eye, 2 min:** on any edited photo, name the brightest/sharpest point and whether it's the intended subject. If not, name the local fix.

### Self-check
1. Vibrance vs. Saturation — which protects skin tones, and how?
2. What does the WB eyedropper do?
3. Name two classic local adjustments that direct the viewer's eye.
4. Why apply sharpening at 100% view and with masking?
5. What color space and rough size for a web export?

---

# Day 18 — Genres & Approaches

### Objectives
- Know the conventions, settings, and mindset of the major genres.
- Pick approaches that suit you and the X100VI.
- Apply genre-appropriate technique deliberately.

### Lecture

The fundamentals are universal, but each **genre** has its own conventions, typical settings, and way of seeing. Knowing them lets you switch deliberately — and find your lane.

**Portraiture** — people, on purpose.
- *Light:* soft and directional (window, open shade, golden hour); side/short light flatters.
- *Settings:* wide-ish aperture (f/1.4–f/4) for subject separation; **focus on the near eye**; flattering focal length (50–135mm equiv. — at 35mm, mind your distance to avoid nose distortion; shoot environmental portraits rather than tight headshots).
- *Mindset:* connection. Direct the subject, make them comfortable, watch the hands and expression. The eyes carry the photo.

**Street / documentary** — life as it happens.
- *Light:* whatever's there; hard light and shadow are friends here.
- *Settings:* **A or Auto-ISO**, f/5.6–f/8 for depth, fast-enough shutter (1/250+), often **zone focus** for instant capture. Anticipate the moment ("the decisive moment").
- *Mindset:* be unobtrusive, patient, observant. 35mm equiv. is *the* street focal length — close enough to be present, wide enough for context. **The X100VI is a legendary street camera** for exactly this: small, quiet, quick.

**Landscape / cityscape** — place and scale.
- *Light:* golden/blue hour; dramatic weather.
- *Settings:* small aperture (f/8–f/11) for front-to-back sharpness; low ISO; **tripod** for slow shutters; focus ~1/3 in (hyperfocal). Strong foreground for depth (Day 11).
- *Mindset:* patience and planning — scout, return for the right light. Composition and layers are everything.

**Still life / product / food** — total control.
- *Light:* one soft source (a window!) + a reflector teaches you light better than anything; control every element.
- *Settings:* moderate-to-small aperture for adequate DoF on a 3D object; tripod; deliberate composition.
- *Mindset:* arrange, refine, perfect. The slow, controlled genre — superb for *practicing* light and composition at your own pace.

**Macro, wildlife, sports, architecture, events** each have their own specialist gear and techniques (long lenses, fast AF tracking, tilt-shift, etc.) — beyond a fixed-lens beginner kit, but the same fundamentals underlie them.

**The point:** you don't have to do all of these. Sample them this week, notice which ones *pull* you, and lean in. A photographer with a clear lane beats a jack-of-all-trades.

> 🟩 **X100VI:** It's a *near-perfect* camera for **street, documentary, travel, environmental portraits, and everyday/family** photography — small, discreet, fast, beautiful files. It's *less* ideal for wildlife/sports (no long reach, fixed lens) and tight studio headshots (35mm equiv. means stepping back). Play to its strengths: it rewards the photographer who *walks among* their subjects. Use **zone focus + Auto-ISO + Classic Chrome** as a street default and you'll be ready for any moment on the sidewalk.

### Look
- For each genre above, find two strong examples and note the light, aperture, and focal length used (often in the photo info or the photographer's notes). Build a mental template for each genre.

### Shoot
1. **(45 min) Genre sampler.** Shoot at least **three** genres today: an environmental portrait, a street/documentary set, and either a landscape or a controlled still life. Apply the genre's settings and mindset deliberately, not by habit.
2. **(15 min)** Review: which genre felt most natural and exciting to *you*? That's a clue to your lane and to the final-portfolio theme.

### Daily drill
**Genre-settings, 2 min:** name aperture + focus approach + focal length for a flashed genre ("street?" → f/8, zone focus, 35mm; "headshot?" → f/2–f/4, eye AF, 85mm-equiv.).

### Self-check
1. Where do you focus for a portrait, and what aperture range isolates the subject?
2. What focus technique enables instant street capture?
3. What aperture and support do landscapes typically want, and why?
4. Why is still life a great genre for *practicing* fundamentals?
5. Which genres best suit the X100VI, and which don't?

---

# Day 19 — Developing a Personal Style & Reading Photographs

### Objectives
- Understand what "style" actually is and how it forms.
- Critique any photograph in the craft's vocabulary.
- Apply that critical eye to your own work.

### Lecture

**Style is not a preset.** It's the *consistent set of choices* a photographer makes across many photos — and it emerges from doing the work, not from copying a look. Its ingredients:

- **Subject matter:** what you're drawn to shoot (people? quiet corners? geometry? light itself?).
- **Light:** do you gravitate to soft and warm, or hard and graphic, or moody and dark?
- **Composition:** minimal and negative-space-heavy, or layered and busy? Centered or dynamic?
- **Color vs. B&W; palette:** muted and filmic, or saturated and bold? A signature color treatment?
- **Tone/mood:** bright and airy (high-key), or dark and dramatic (low-key)?
- **Distance/perspective:** intimate and close, or detached and wide?

**How style actually develops** (the honest version):
1. **Imitate deliberately.** Find photographers you love, study *exactly* what they do (light, framing, color), and try to reproduce it. This isn't cheating — it's how everyone learns. You'll fail to copy them perfectly, and the *gap* is the seed of your own voice.
2. **Shoot a lot, then look for patterns.** Lay out your best 50 photos. What recurs? Those recurring choices *are* your emerging style. Lean into them.
3. **Edit consistently.** A consistent editing/color treatment across a body of work is a huge part of perceived style. Develop a default look and refine it.
4. **Make projects, not just photos.** A *series* on one subject/idea forces and reveals a point of view far faster than scattered one-offs.

**Reading a photograph critically** — the skill that improves your own work fastest. A repeatable framework, ask in order:
1. **What is it of?** (Subject — is it clear?)
2. **What's it *about*?** (Idea/feeling — beyond the literal subject.)
3. **How does the light work?** (Direction, quality, color — Week 2.)
4. **How does the composition work?** (Subject placement, balance, lines, depth, what's excluded — Week 2.)
5. **How do the technical choices serve it?** (Aperture/DoF, shutter/motion, focus, exposure, color/tone — Weeks 1 & 3.)
6. **Does it succeed? Why or why not?** (Does form serve content? What would you change?)

Apply this to **great photos** (to learn what works) and to **your own** (to learn what to fix). The ability to articulate *why* a photo does or doesn't work is what turns random improvement into deliberate improvement — it's Domain 9 of the rubric and the real graduation requirement.

**Critique etiquette (even self-critique):** be specific ("the bright doorway in the top-left pulls my eye off the subject"), tie observations to choices ("a smaller aperture would've kept the background readable as context"), and separate *taste* from *craft* (a photo can be technically flawless and not to your taste, or rough and deeply moving).

### Look
- Run the **6-question critical reading** on three photographs you consider great. Write a sentence per question. Then run it on three of *your own* recent frames — honestly. The contrast is your syllabus for what to practice next.

### Shoot / Study
1. **(20 min) Imitation study.** Pick one photographer whose work you love. Identify their three signature choices (e.g., "soft window light, centered subject, muted desaturated color"). Go make 5 frames deliberately in their style.
2. **(20 min) Find your patterns.** Gather your best ~30 frames from the course so far. List what recurs — subjects, light, composition, mood. Write one sentence: *"My emerging style is ___."* (It's okay if it's tentative.)
3. **(15 min) Self-critique.** Run the 6-question framework on your two best and two weakest frames. For the weak ones, name the single change that would most improve each.

### Daily drill
**Two-line critique, 3 min:** on any photo, write one line on what works and one on what you'd change — in craft vocabulary, not "nice" or "meh."

### Self-check
1. What *is* style, in one sentence?
2. Why is deliberate imitation a legitimate way to develop style?
3. How do you find your emerging style in your existing photos?
4. List the 6 critical-reading questions in order.
5. What's the difference between a *taste* judgment and a *craft* judgment?

---

# Day 20 — Final Portfolio Workshop + Project 3

A working studio day to build toward your final portfolio. Three things:

### 1. Project 3 — Edit From the Negative
Do **Project 3** (`PROJECTS.md`): take one RAW frame through the *complete* 7-step workflow and document your recipe. This certifies Domain 8 (editing). Do it today.

### 2. Plan the Final Portfolio — "Ten Frames"
Your final deliverable (`PROJECTS.md`, due Day 21) is a coherent set of **ten edited photographs** with a point of view. Today:
- **Choose a theme or thread** (a subject, a place, a mood, a genre from Day 18 — whatever pulls you from Day 19's self-study).
- **Audit what you have.** Which existing course frames fit? What gaps must you shoot?
- **Shoot to fill the gaps** today and tomorrow — deliberately, applying everything: intentional exposure, good light, strong composition, genre-appropriate technique.
- **Aim for coherence:** ten frames that feel like they belong together (consistent editing, a through-line) beat ten unrelated "greatest hits."

### 3. Shoot (60+ min)
Go make the portfolio frames you're missing. Treat every frame as graded: decide settings on purpose, find good light, compose deliberately, focus precisely.

### Self-check
- Can you state your portfolio's theme in one sentence?
- Do your ten candidates share a recognizable look/idea?
- Is each frame technically clean (exposure, focus, sharpness) *and* well-seen (light, composition)?

---

# Day 21 — Final Exam + Final Portfolio Due

The last day. Three things, in order:

### 1. Finish & edit the Final Portfolio
Cull to your strongest **ten frames**, edit them with a **consistent treatment** (Days 16–17), and export them properly (sRGB JPEGs for sharing). Write the short artist's statement the project requires (theme + what you were going for + how the choices serve it). Grade it against the Final Portfolio rubric in `PROJECTS.md`.

### 2. Take the Final Exam
Take the **Final Exam** (`QUIZZES.md`), closed-book, then grade against `ANSWER-KEYS.md`. It's cumulative — exposure, light, composition, color, focus, workflow, and critique. **Pass = 90%.**

### 3. Final self-assessment & what's next
- Fill in the **Week 3 (final) column** of the `RUBRIC.md` score sheet across all nine domains. Be honest. Note which domains hit Level 4 and which need ongoing reps (Domains 5, 6, and 9 — light, composition, seeing — are *expected* to keep maturing for months; that's the lifelong part).
- **Keep the practice alive.** The single habit that compounds: keep shooting deliberately and reviewing critically. Pick one ongoing personal **project** (a series with a theme). Re-edit old RAW files as your skills grow — your negatives keep giving. Keep the daily light-spotting and composition drills going; they never stop paying off.

### Closing thought
You started three weeks ago leaving the camera on Auto. Now you can walk into any light, choose every setting on purpose, see and shape the light, compose with intent, develop the negative, and explain every decision. That's not a beginner anymore — that's a photographer. The technique is yours for good. The eye is now a habit you'll spend years deepening. Go make pictures.
