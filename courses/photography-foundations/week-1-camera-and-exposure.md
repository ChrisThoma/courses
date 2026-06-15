# Week 1 — The Camera & Exposure

> **This week in one line:** a photograph is a measured amount of light, recorded. Three controls decide how much light reaches the sensor and what it looks like: aperture, shutter speed, and ISO. Once you understand how they trade against each other, you stop leaving the camera on Auto and hoping. The rest of photography is light and seeing. This week is the machine.

Throughout this course, green boxes like the one below map a concept to the **Fujifilm X100VI**. If you shoot a different camera, skip them — the concept is identical, only the dials differ.

> 🟩 **X100VI:** Unlike most cameras, the X100VI puts the three exposure controls on dedicated physical dials: a **shutter-speed dial** on top, an **aperture ring** around the lens, and an **ISO dial** nested under the shutter dial (lift and turn). Each dial has an **A** position. Which dials are on A is what selects your "mode"; there's no PASM mode dial. We'll return to this on Day 5.

---

# Day 1 — How a Camera Sees

### Objectives
- Understand the chain that turns light into a digital image.
- Know what the sensor, lens, aperture, and shutter each physically do.
- Lock in the idea that everything this week builds on: **correct exposure = the right total amount of light.**

### Lecture

**A camera is a light-tight box with a hole, a timer, and a recorder.** That's pretty much the whole machine:

1. **Light** bounces off your subject and travels toward the camera.
2. The **lens** gathers that light and bends it to form a sharp image on the sensor.
3. The **aperture** (a hole inside the lens that can change size) controls *how much* light passes through at once.
4. The **shutter** opens for a set time and controls *how long* light is allowed to hit the sensor.
5. The **sensor** is a grid of millions of light-sensitive sites (photosites/pixels) that count the photons that land on them. **ISO** sets how strongly that count is amplified.
6. The camera's processor turns those counts into a picture (a JPEG, or a RAW file of the raw counts; more in Week 3).

**Exposure** is the technical word for *how much total light* the sensor collected. Too much → a **blown-out**, too-bright image (highlights "clipped" to pure white, gone forever). Too little → a **muddy**, too-dark image (shadows "crushed" to black, noisy when you lift them). Correct exposure is the Goldilocks middle, and which middle you want is itself partly a creative choice.

**The key insight:** three controls all change the brightness of the image, but each one *also* changes something else:

| Control | Changes brightness by… | …but also controls |
|---|---|---|
| **Aperture** (f-number) | how big the hole is | **depth of field** (how much is in focus) |
| **Shutter speed** | how long the hole is open | **motion** (frozen vs. blurred) |
| **ISO** | how much the signal is amplified | **noise** (grain in the shadows) |

This is what keeps photography from being a simple "make it brighter" dial. Every exposure is a negotiation among three side effects. We take them one at a time (Days 2–4), then put the negotiation together (Days 4–5).

**Sensor size matters, but less than the internet says.** Bigger sensors gather more light and blur backgrounds more easily for a given framing, but a smaller sensor in good hands beats a big one in bad hands every time. Know your sensor's size as context, not as an excuse.

> 🟩 **X100VI:** Your sensor is **APS-C** (about 23.5 × 15.6 mm), 40 megapixels, behind a **fixed 23mm f/2 lens**. "Fixed" means it doesn't zoom and doesn't come off. That constraint is deliberate: it makes you move your feet and learn to *see*. A 23mm lens on APS-C frames like a **35mm lens** does on full-frame: the classic, slightly-wide "normal" view. We'll lean into the limitation all course, and by the end you'll be glad of it.

### Look — study these
- Find any well-exposed photo and any obviously over- and under-exposed photo (your own camera roll has all three). Look at the brightest and darkest areas. In the blown-out one, notice there's *no detail* in the bright parts, just white. That's clipping, and it's the one exposure error you can't fix later.

### Shoot — today's assignment
1. **(10 min)** Put your camera in full **Auto** for the last time this course. Take 10 photos of anything. Notice you made *no decisions*. This is your baseline.
2. **(15 min)** Find the three exposure controls on your camera and learn how to change each one. Don't worry about values yet — just locate the aperture control, the shutter-speed control, and the ISO control, and watch the on-screen numbers change as you move each.
3. **(10 min)** Deliberately make one photo too bright and one too dark by changing only the brightness. Look at where detail disappears.

### Self-check
1. What are the three controls that determine exposure?
2. What does the aperture physically do, besides change brightness?
3. What does "clipping the highlights" mean, and why is it unrecoverable?
4. Name the side effect tied to each of the three controls.

---

# Day 2 — Aperture & Depth of Field

### Objectives
- Read and set f-numbers, and understand why the scale is "backwards."
- Predict depth of field from aperture.
- Make the background-blur decision on purpose.

### Lecture

**Aperture is the size of the hole inside the lens**, written as an **f-number** (or "f-stop"): f/2, f/2.8, f/4, f/5.6, f/8, f/11, f/16…

**The scale feels backwards: a *smaller* f-number is a *bigger* hole** (more light), and a *bigger* f-number is a *smaller* hole (less light). That's because the f-number is a ratio (focal length ÷ hole diameter), so it behaves like a fraction: f/2 is a bigger opening than f/16 the same way 1/2 is bigger than 1/16.

**Full stops.** The standard f-number sequence is spaced so each step halves or doubles the light:

```
f/1.4   f/2   f/2.8   f/4   f/5.6   f/8   f/11   f/16   f/22
 more light  ←——————————————————————————————→  less light
```

Each move to the right ("stopping down") = **half** the light, i.e. **one stop** less. Each move left ("opening up") = double the light, one stop more. **"A stop"** is the universal unit of light in photography (a doubling or halving), and it applies to all three controls. Memorize the sequence; you'll use it constantly. (The odd numbers come from multiplying by √2 ≈ 1.4 each step.)

**The side effect, depth of field (DoF):** the range of distance, front to back, that appears acceptably sharp.

- **Wide aperture (low f-number, e.g. f/2):** *shallow* DoF. A thin slice in focus, background melting into blur ("bokeh"). Great for isolating a subject: portraits, details.
- **Narrow aperture (high f-number, e.g. f/11):** *deep* DoF. Near and far both sharp. Great for landscapes, group shots, anything you want crisp throughout.

**Three things control DoF**, not just aperture:
1. **Aperture:** wider = shallower.
2. **Focus distance:** the closer you focus, the shallower the DoF. (This is why macro shots have paper-thin focus.)
3. **Focal length / magnification:** longer lenses *appear* to give shallower DoF for the same framing.

**The lens-sharpness footnote:** lenses are usually softest wide open (f/2) and at their tiny apertures (f/16, where *diffraction* softens everything). Most lenses are sharpest around **f/5.6–f/8**, the "sweet spot." Use it when you want maximum detail and don't need a specific DoF.

> 🟩 **X100VI:** Aperture lives on the **ring around the lens**, marked f/2 to f/16 (plus **A**). The X100VI opens to **f/2**, lovely for shallow-DoF portraits and low light, though at f/2 and very close focus it goes slightly soft and focus gets critical; stop to **f/4** if you want subject isolation *and* crispness. For street scenes where you want everything sharp, **f/8** is the classic choice. The lens also has a built-in **4-stop ND filter** (toggle in the menu / Fn) for using f/2 in bright sun, which we'll come back to on Day 3.

### Look
- Find a portrait with a creamy blurred background and a landscape that's sharp front-to-back. The first was shot near f/1.4–f/2.8; the second near f/8–f/16. Train your eye to *guess the aperture* from any photo's background.

### Shoot
1. **(20 min) The aperture ladder.** Put the camera in **Aperture-priority** (the mode where you pick aperture and the camera handles shutter — see Day 5). Pick a subject ~2 m away with a background well behind it. Shoot the *same frame* at f/2 (or your widest), f/4, f/5.6, f/8, f/16. Keep everything else identical.
2. **(15 min)** Review the ladder side by side. Watch the background sharpen as the f-number climbs. If one thing sticks from this week, make it this.
3. ★ **(10 min)** Find the closest-focusing distance of your lens and shoot a small object at f/2. Notice how absurdly thin the focus is — that's focus distance shrinking DoF.

### Daily drill (start today)
**Stop counting, 3 min:** name the next/previous full f-stop from a random start ("one stop down from f/4?" → f/5.6). Speed goal: instant.

### Self-check
1. Which lets in more light, f/2 or f/11?
2. What is "a stop"?
3. Name the three things that control depth of field.
4. You want a blurry background for a portrait — open up or stop down?
5. Where is a typical lens sharpest?

---

# Day 3 — Shutter Speed & Motion

### Objectives
- Read and set shutter speeds, and count them in stops.
- Use the hand-hold rule to avoid camera shake.
- Freeze or blur motion deliberately.

### Lecture

**Shutter speed is how long the sensor is exposed to light**, measured in seconds — almost always a fraction: 1/1000, 1/500, 1/250, 1/125, 1/60, 1/30, 1/15… down to whole seconds and longer.

**The full-stop sequence again halves/doubles the light** (and the time):

```
1/1000  1/500  1/250  1/125  1/60  1/30  1/15  1/8  1/4  1/2  1"  2"
 less light, freezes motion ←——————→ more light, blurs motion
```

Each step to the right doubles the open time = one stop *more* light. Notice the numbers roughly double; the camera rounds (1/60 → 1/125, not 1/120). On screen, fractions are often shown as just the denominator (`250` means 1/250); whole seconds get a quote mark (`2"` = 2 seconds).

**The side effect, motion:**
- **Fast shutter (e.g. 1/1000):** *freezes* motion. Sports, kids, splashing water as frozen droplets.
- **Slow shutter (e.g. 1/15 or slower):** *blurs* motion. Silky waterfalls, light trails, a sense of speed.

**Two kinds of blur, don't confuse them:**
1. **Subject motion blur:** the *subject* moved during the exposure. Sometimes you want this (creative), sometimes not (a blurry kid).
2. **Camera shake:** *you* moved (handheld). Almost never wanted; it softens the *whole* frame.

**The hand-hold rule** (how slow you can go handheld without shake): shutter speed should be at least **1 / (equivalent focal length)**. With a 35mm-equivalent lens, that's about **1/30 s** minimum, and faster if you've had coffee. Image stabilization buys you several extra stops, but a moving *subject* doesn't care about it (IS only fixes *your* shake), so freeze subjects with speed, not IS.

**Rules of thumb for freezing subjects:**
| Subject | Minimum shutter to freeze |
|---|---|
| Still person, posed | 1/125 |
| Walking person | 1/250 |
| Kids, pets, running | 1/500 |
| Sports, birds in flight | 1/1000–1/2000 |

**Long exposure** (slow shutter, seconds long) requires a **tripod** (handholding is hopeless) and often a **neutral density (ND) filter** to cut light so the long exposure doesn't blow out the frame in daylight.

> 🟩 **X100VI:** The top **shutter-speed dial** runs in full stops (1/4000 down to 1s, plus **T** for fine/long control via the command dial, **B** for bulb, and **A**). For in-between speeds (e.g. 1/160), set the nearest dial value then fine-tune with the front command dial. The X100VI's leaf shutter is whisper-quiet and syncs flash at any speed. It has **in-body stabilization (~6 stops)**, so you can handhold surprisingly slow, but remember IS won't freeze a moving subject. The built-in **4-stop ND filter** is your tool for daytime slow-shutter (silky water at noon) and for shooting f/2 in bright sun.

### Look
- Find a sports photo (frozen) and a silky-waterfall photo (blurred). The first is ~1/1000+; the second is ~1/2 s or longer on a tripod. Find a "sense of motion" panning shot — sharp subject, streaked background — and note it took a *moderately slow* speed (~1/30) plus moving the camera with the subject.

### Shoot
1. **(20 min) Freeze vs. flow.** Find moving water (a tap, a fountain) or a moving person. In **Shutter-priority**, shoot it at 1/1000 (frozen) and at 1/15 or slower (blurred — brace the camera on something solid). Compare.
2. **(15 min) Find your shake limit.** Handhold a static subject and shoot at 1/125, 1/60, 1/30, 1/15, 1/8. Zoom in on each in playback and find the slowest speed that's still sharp. That's your personal handheld limit. Memorize it.
3. ★ **(15 min) Panning.** Set ~1/30, track a passing cyclist/car/runner, moving the camera smoothly *with* them as you fire. Goal: sharp subject, streaked background. Expect a low hit rate — that's normal.

### Daily drill
**Two-control stops, 3 min:** alternate f-stops and shutter stops ("one stop faster than 1/125?" → 1/250). Add: "If I open one stop, how do I keep exposure the same with shutter?" → make shutter one stop faster.

### Self-check
1. Does 1/1000 let in more or less light than 1/60? By how many stops?
2. Difference between subject motion blur and camera shake?
3. The hand-hold rule for a 35mm-equivalent lens?
4. What shutter speed roughly freezes a walking person?
5. What two pieces of gear does a daytime long exposure usually require?

---

# Day 4 — ISO, Noise, and the Triangle Assembled

### Objectives
- Understand what ISO does and its cost.
- Assemble aperture + shutter + ISO into the exposure triangle.
- Make a reciprocal exposure change (trade one control for another) without changing brightness.

### Lecture

**ISO is how much the camera amplifies the signal from the sensor.** Low ISO (100, 200) = little amplification, cleanest image. High ISO (3200, 6400, 12800) = lots of amplification, used to brighten shots in dark conditions.

**The side effect, noise:** amplification also amplifies the random "static" in the signal, showing up as grain and color speckle, worst in the shadows. So the rule is: **use the lowest ISO that lets you get the shutter speed and aperture you need.** ISO is the control you raise *last*, only when aperture and shutter can't gather enough light on their own.

**ISO also counts in stops** — each doubling is one stop more light: 100 → 200 → 400 → 800 → 1600 → 3200…

**Noise is not the disaster beginners fear.** A sharp, well-composed photo at ISO 6400 beats a clean, blurry one at ISO 200 every time. Modern sensors are excellent; a slightly noisy keeper is a keeper. *Underexposing* and brightening later makes noise *worse* than just using a higher ISO in the first place, so expose correctly at the higher ISO.

**The Exposure Triangle.** Put the three together and you get the picture every beginner photographer eventually meets:

```
              APERTURE
            (f-number)
           depth of field
               /\
              /  \
             /    \
            /      \
   SHUTTER --------- ISO
   (time)          (gain)
   motion           noise
```

All three change brightness. Together they must add up to the *one* correct exposure for your scene. The art is choosing *which* control to spend where, based on what each scene needs:

> **First ask: what does this photo need?** Shallow background? → set aperture first. Frozen action? → set shutter first. Then fill in the others to reach correct exposure, raising ISO only as a last resort.

**Reciprocity — the core skill.** Because each stop is a doubling/halving, you can *trade* light between controls and keep the same total exposure. If a scene is correctly exposed at **f/8, 1/250, ISO 200**, then all of these are *identically bright*:

| f-stop | shutter | ISO | What you traded |
|---|---|---|---|
| f/8 | 1/250 | 200 | (baseline) |
| f/4 | 1/1000 | 200 | opened 2 stops, sped up 2 stops → shallower DoF, same brightness |
| f/8 | 1/60 | 50* | slower shutter, lower ISO → more motion blur risk, cleaner |
| f/11 | 1/250 | 400 | stopped down 1, raised ISO 1 → deeper DoF, slightly noisier |

*\*ISO 50 is a "pull"/extended setting on many cameras (base ISO is usually 100–200), so it may not be available on yours — the math is the point.*

This is the move you make all day: *"I want a blurrier background, so I open up two stops, then speed up the shutter two stops to compensate."* One stop given on one control has to be taken back on another.

> 🟩 **X100VI:** ISO is on the **dial nested under the shutter dial** (lift the outer ring and rotate), or you can assign ISO to the front command dial in the menu. Many X100VI shooters prefer the command-dial method, or just **Auto-ISO**. Set up **Auto-ISO** (menu → ISO → choose a max ISO like 6400 and a minimum shutter speed like 1/125): now you set aperture and shutter creatively and the camera floats ISO to expose correctly without ever dropping below your shake/motion limit. For street and travel it's about the best "set and forget" config there is.

### Look
- Find one of your own dim-light photos. Check its ISO (in the photo info). Zoom into the shadows and look for grain — that's noise. Then look at the *whole* photo from arm's length: probably looks fine. Noise matters less at viewing distance than it does at 100% zoom.

### Shoot
1. **(15 min) ISO ladder.** In a dim room, Manual mode, fix a usable aperture and shutter, and shoot the same frame at ISO 200, 800, 3200, 12800. Find where noise starts bothering *you*. That threshold is personal and worth knowing.
2. **(20 min) Reciprocity reps.** Get one correct exposure in Manual. Now make three *different* correct exposures of the same scene by trading stops (e.g., open 2 / faster 2; stop down 1 / ISO up 1). Verify all four look equally bright. This is the exercise that makes the triangle click.
3. **(10 min)** Set up Auto-ISO with a max and a minimum shutter speed. Shoot a few frames and watch the ISO float on its own.

### Daily drill
**Reciprocity sprint, 4 min:** Start from "f/8, 1/250, ISO 200." Draw a random change ("I open to f/4") and say the compensating move on another control. Then add a creative reason ("...because I want a blurry background").

### Self-check
1. What does raising ISO cost you?
2. What's the rule for choosing ISO?
3. You're at f/5.6, 1/250, ISO 400 and open one stop to f/4 — how do you keep brightness the same using shutter?
4. Which control do you set *first*, and how do you decide?
5. What does Auto-ISO with a minimum shutter speed buy you?

---

# Day 5 — Metering, the Histogram, and Exposure Compensation

### Objectives
- Understand how the camera meters light and where it gets fooled.
- Read a histogram to verify exposure objectively.
- Use exposure compensation and the four shooting modes.

### Lecture

**The light meter** measures the brightness of the scene and tells you (or the camera) what exposure produces a "correct" middle brightness. Its core assumption: **the average scene is middle gray** (about 18% reflectance). This assumption is what causes its famous failures:

- **A scene full of white** (snow, a white wall, a bride's dress): the meter tries to make it *gray*, so it **underexposes** — your snow comes out dingy gray. Fix: add **+1 to +2 stops** of exposure.
- **A scene full of dark** (a black cat, a night street): the meter tries to make it gray, so it **overexposes** — fix: **−1 to −2 stops**.
- **Backlight** (subject against a bright window/sky): meter sees the bright background, darkens everything, and your subject becomes a silhouette. Fix: **+1 to +2 stops**, or meter off the subject.

**Metering modes** (how much of the frame the meter looks at):
- **Evaluative / Matrix / Multi:** reads the whole scene, smart, the default. Good 90% of the time.
- **Center-weighted:** favors the middle.
- **Spot:** reads a tiny area only — powerful when you know exactly what should be middle-toned (e.g., meter off a face).

**The histogram — your objective truth.** The meter is an opinion; the histogram is a fact. It's a graph of how many pixels are at each brightness, **dark on the left → bright on the right**:

```
 count
   |        ▁▃▅█▅▃▁
   |     ▁▃█████████▃▁
   |  ▁▃███████████████▃▁
   +--------------------------- brightness
   black                    white
   (shadows)   (midtones)   (highlights)
```

- A spike **jammed against the right edge** = blown highlights (clipped to white, gone). Usually bad.
- A spike **jammed against the left edge** = crushed shadows (clipped to black).
- There is **no single "correct" histogram shape** — a snow scene piles up on the right, a night scene on the left, and both are correct. What you're checking for is *unwanted clipping* at either edge.

**Expose To The Right (ETTR):** because shadows hold the most noise, pushing the exposure as bright as possible *without clipping highlights* captures the cleanest data (you darken it later in editing). Use the histogram to push right until the highlights *almost* touch the edge. This is an advanced habit; start by just avoiding clipping.

**Exposure compensation** is how you override the meter in the semi-auto modes: a **+/− dial** that says "meter, you're wrong, make it brighter (+) or darker (−)." This is your everyday tool for snow, backlight, and mood.

**The four modes** (how much you hand to the camera):
| Mode | You set | Camera sets | Use when |
|---|---|---|---|
| **P** (Program) | nothing (but can shift) | aperture + shutter | grab shots, you only care about getting *a* shot |
| **A / Av** (Aperture-priority) | aperture (+ ISO) | shutter | **the workhorse** — you care about DoF (most of the time) |
| **S / Tv** (Shutter-priority) | shutter (+ ISO) | aperture | you care about motion (sports, blur) |
| **M** (Manual) | everything | nothing | tricky/constant light, full control, learning |

Most working photographers live in **A** (or M with Auto-ISO). You should be fluent in all four, but A is home base.

> 🟩 **X100VI:** There's no mode dial — **the dials' A positions choose the mode**:
> - Aperture ring on **A**, shutter dial on a number → **Shutter-priority (S)**
> - Shutter dial on **A**, aperture ring on a number → **Aperture-priority (A)** ← your home base
> - **Both on a number** → **Manual (M)**
> - **Both on A** → **Program (P)**
>
> The **exposure-compensation dial** (top right) gives ±3 stops directly (more via a C setting + command dial). The X100VI's **electronic viewfinder shows a live histogram and a true preview of your exposure** (set "Preview Exp./WB in Manual" ON), so you literally see the photo's brightness before you press the shutter. That makes learning Manual far faster than on a DSLR. Use it.

### Look
- Pull up any snow or beach photo and any night photo. Look at the histograms (most cameras and editors show them). See how different — and how both are "correct." Find a backlit silhouette and understand it as a metering decision (the camera, or photographer, exposed for the bright background).

### Shoot
1. **(15 min) Fool the meter.** Photograph a white wall (or paper) filling the frame in Auto/P. It'll come out gray. Now add +1.5 stops exposure compensation and reshoot. Repeat with a black/dark surface and −1.5. Prove to yourself the meter is gullible.
2. **(15 min) Histogram reading.** Turn on the histogram display. Shoot a bright scene, a dark scene, and a normal scene, and *predict* the histogram shape before you look. Deliberately blow the highlights on one and watch the right-edge spike.
3. **(15 min) Mode tour.** Shoot the same subject in P, A, S, and M. In A, change aperture and watch the camera change shutter. In S, change shutter and watch aperture move. Feel how each mode hands you one creative lever.

### Daily drill
**Meter-fooling, 3 min:** name the exposure-compensation direction and rough amount for a flashed scene type ("snowy field?" → +1.5 to +2; "black dog on dark couch?" → −1.5).

### Self-check
1. What brightness does the meter assume the average scene is?
2. Which way do you compensate for a snowy scene, and why?
3. What does a spike against the right edge of the histogram mean?
4. In Aperture-priority, what does the camera control?
5. What does exposure compensation actually do?

---

# Day 6 — Focus & Sharpness, then Quiz 1

### Objectives
- Choose the right autofocus mode and area for the situation.
- Reliably get the *intended* point sharp — especially eyes.
- Know the techniques for when autofocus fails.
- Take Quiz 1.

### Lecture

A perfectly exposed, beautifully composed photo that's *out of focus* is trash. Focus is non-negotiable.

**Two autofocus (AF) modes** — match the mode to whether the subject moves:
- **Single AF (AF-S / One-Shot):** focuses once when you half-press, then locks. For **static** subjects: portraits, landscapes, still life. The default.
- **Continuous AF (AF-C / AI-Servo):** keeps refocusing as the subject moves while you hold the half-press. For **moving** subjects: kids, sports, wildlife.

**AF area** (where in the frame the camera focuses):
- **Single point:** *you* pick one small point; maximal control and precision. Best for deliberate work — put the point on the eye.
- **Zone / group:** a cluster of points; good for erratic motion.
- **Wide / auto / tracking:** the camera decides; convenient but it loves to focus on the nearest thing (often the wrong thing).

**Subject-detection AF** (eyes, faces, animals, vehicles) is now genuinely excellent and worth enabling for people and pets — let the camera find and hold the eye.

**Where to focus:**
- **Portraits:** the **near eye**, always. With shallow DoF, a focus on the nose or ear ruins the shot. Use eye-detect or a single point on the eye.
- **Landscapes:** roughly **one-third into the scene** (hyperfocal thinking) at a deep aperture (f/8–f/11) gets near-to-far sharp.
- **Macro/close-up:** DoF is razor-thin; focus precisely and consider stopping down.

**Two pro techniques:**
1. **Focus-and-recompose:** put the center point on your subject, half-press to lock focus (AF-S), then recompose and shoot. Fast, but inaccurate at very shallow DoF (recomposing shifts the focal plane).
2. **Back-button focus (BBF):** move focus off the shutter button onto a rear button (often AF-ON). Now the shutter *only* takes the picture; you focus with your thumb. Separating focusing from shooting takes a little getting used to, but once it clicks you can focus once and then recompose and shoot a dozen frames without refocusing.

**When AF fails** (low light, low contrast, glass, bars, busy scenes): switch to **manual focus**. Use **focus peaking** (colored highlights on in-focus edges) and **magnified view** to nail it. Manual focus is also the reliable choice for pre-focusing on a spot where action will happen (zone focusing in street photography).

**Sharpness is not only focus.** A sharp photo needs: correct focus **+** a fast-enough shutter (no shake/motion, Day 3) **+** a decent aperture (not diffraction-soft at f/22) **+** a clean lens. If your shots are soft, diagnose *which* of these failed before blaming the lens.

> 🟩 **X100VI:** Set AF mode with the side **focus-mode switch** (S / C / M). The AF point is moved with the **focus stick (joystick)**; learn to nudge it to the eye without taking the camera from your face. Enable **Face/Eye Detection** (AF/MF menu) for people. For street, many X100VI shooters use **zone focusing**: switch to **M**, set f/8, set focus distance to ~2–3 m using the **distance/DoF scale** in the EVF, and everything in that zone is sharp with zero focus lag, about as fast as shooting gets. **Focus peaking** (set color/intensity in the menu) makes manual focus easy; the focus ring is by-wire and smooth.

### Look
- Open your best portrait. Zoom to 100% on the eye. Is it *critically* sharp, or just close? Train yourself to check the eye every time. Then check a soft shot and diagnose: was it focus (eye not sharp but something else is), shake (whole frame evenly soft), or motion (subject streaked, background sharp)?

### Shoot
1. **(15 min) Eye focus.** With a willing person (or a detailed object at eye height), shoot at your widest aperture and put focus precisely on the near eye, 10 frames. Check each at 100%. Note your hit rate.
2. **(15 min) AF-S vs AF-C.** Have someone walk slowly toward you. Shoot a burst in AF-S (focus locks once → they go soft as they approach) and in AF-C (tracks them). See the difference clearly.
3. **(10 min) Manual focus + peaking.** Switch to MF, use peaking/magnify, and nail focus on a static subject by hand.
4. ★ **(10 min) Zone focus.** Pre-focus at ~2.5 m, f/8, and shoot street-style without refocusing. Check how much falls in the sharp zone.

### Daily drill
**Mode-picking, 3 min:** name the AF mode + area for a flashed scenario ("toddler running" → AF-C + zone/tracking; "posed portrait, f/2" → AF-S + single point on eye; "landscape" → AF-S + single point, focus 1/3 in).

### 📝 Quiz 1
Take **Quiz 1** now (see `QUIZZES.md`), closed-book. Grade against `ANSWER-KEYS.md`. If you score below 90%, plan to re-study the weak area tomorrow.

### Self-check
1. AF-S or AF-C for a running dog?
2. Where do you focus for a shallow-DoF portrait?
3. What does back-button focus separate?
4. Your handheld shots are all evenly soft across the whole frame — focus error or shake?
5. What two tools help you nail manual focus?

---

# Day 7 — Shoot / Review Day + Project 1

Today is consolidation, not new material. Three things:

### 1. Review the week
Reread the self-checks for Days 1–6 and answer every one from memory. Anything you fumble, reread that lecture's relevant paragraph. Pay special attention to **reciprocity** (Day 4) and **reading the histogram** (Day 5); the rest of the course leans on both.

### 2. The "settings reflex" drill (15 min)
Walk to five different lighting situations (bright outdoors, shade, indoors by a window, a dim room, backlight). At each, *before* looking at the meter, say out loud the exposure you'd start with in Manual (f-stop, shutter, ISO). Then check against the meter/histogram. The goal of this whole week is for that guess to get close. It will, with reps.

### 3. Project 1 — Exposure Triangle Study
Begin **Project 1** (see `PROJECTS.md`). It asks you to demonstrate, with your own photographs, that you control each leg of the triangle and can trade them reciprocally. It's due end of Day 7 (or carry into the week-2 review day if needed — but don't fall behind).

### Looking ahead
Week 1 was the machine: how to get a correct, intentional, sharp exposure. **Week 2 is the eye:** light and composition, the decisions that turn a technically correct frame into a photograph worth looking at. From here on, exposure should fade into reflex so your attention is free for *seeing*.
