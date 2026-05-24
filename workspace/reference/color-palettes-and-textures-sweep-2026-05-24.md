# Color Palettes And Texture Sweep

Status: Reference only
Date: 2026-05-24
Scope: Palette families, semantic colors, surface textures, and visual mood for Aura Lab presentation faces

## Purpose

Explore expansive color and texture directions for Aura Lab presentation modules.

This note is inspiration only. It does not create Dev work, define accepted design tokens, select a final palette, or establish target-project product direction.

## High-Level Direction

Aura Lab should not have one sci-fi palette.

It should have a small set of palette families that can be tested against the same presentation modules:

- cold glass
- graphite instrument
- amber cockpit
- green phosphor
- oxidized industrial
- muted military/surplus
- warning ceramic
- deep space holo
- paper terminal / low-fi
- emergency fallback

The shared rule:

```txt
Color and texture must explain readout hierarchy, state, freshness, basis, and attention.
```

The failure mode:

```txt
Everything glows, everything is cyan, everything is a card, and nothing is easier to read.
```

## Sources Reviewed

### Dark UI Palette Guidance

Sources:

- https://devpalettes.com/dark-color-palettes/
- https://colorarchive.org/guides/game-ui-color-palette/

Useful Takeaway:

- Deep dark grays are better base surfaces than pure black.
- Game/HUD colors need stronger contrast because users read under pressure and in imperfect conditions.
- Saturated accents work best when surrounded by restrained neutrals.

Portable Ideas:

- dark base surfaces with clear elevation steps
- accent colors reserved for state and interaction
- higher contrast for critical game-like readouts

Do Not Copy:

- generic SaaS dark palette
- one-note blue/purple dashboard look

### Sci-Fi Palette References

Sources:

- https://www.color-hex.com/color-palette/1015935
- https://www.backgroundremover.com/color-palettes/sci-fi
- https://colorswall.com/palette/572019
- https://designmd.app/en/library/holographic-data-viz

Useful Takeaway:

- Sci-fi palettes frequently lean on cyan, blue, magenta, orange, steel, and near-black.
- These are useful as accent families, but dangerous if the whole UI collapses into one neon temperature.

Portable Ideas:

- cyan as active/current
- amber/orange as aged/warning
- steel/gray as neutral structure
- magenta/purple only as rare anomaly/special state

Do Not Copy:

- exact franchise-inspired palettes
- cyan-on-blue-on-blue dominance
- magenta as default sci-fi decoration

### Retro Terminal / Phosphor References

Sources:

- https://retrocomputing.stackexchange.com/questions/12835/exactly-what-color-was-the-text-on-monochrome-terminals-with-green-on-black-and/12881
- https://www.reddit.com/r/vintagecomputing/comments/1qvkz05/vt320_sidebyside_green_or_amber/

Useful Takeaway:

- Amber and green phosphor palettes can feel immediate, legible, and low-fi, but need restraint.
- Retro terminal color varies by display, brightness, age, and reproduction.

Portable Ideas:

- amber readout mode
- green low-power/system mode
- phosphor ghosting as very subtle texture only
- terminal palette as diagnostics mode, not whole product default

Do Not Copy:

- full hacker-green UI
- fake CRT distortion over body text
- screen burn-in unless deliberately cosmetic and extremely faint

### Texture / Noise / Glass References

Sources:

- https://www.stylosheet.com/frosted-noise-background/
- https://rottenwifi.com/noise-generator/
- https://www.uwarp.design/nnnoise
- https://css.glass/
- https://csstools.io/glassmorphism
- https://www.pacgie.com/glassmorphism
- https://www.ui-layouts.com/components/noise

Useful Takeaway:

- Subtle grain/noise is one of the best ways to make dark UI surfaces feel tactile without adding visual clutter.
- Glass works when tint, blur, border, shadow, and background are tuned together.
- Texture should be low opacity and should never reduce text contrast.

Portable Ideas:

- subtle noise overlay at very low opacity
- frosted detail panels
- translucent overlays with dark tint
- generated SVG/CSS noise instead of heavy image assets

Do Not Copy:

- heavy blur panels everywhere
- noisy backgrounds under small text
- high-radius glossy cards
- texture as a substitute for hierarchy

### Brushed / Industrial Material References

Sources:

- https://www.poliigon.com/texture/brushed-matte-metal-texture/3141
- https://colorlabs.net/colors/industrial-black
- https://www.schemecolor.com/industrial-use.php

Useful Takeaway:

- Brushed metal, industrial black, slate, steel, red, orange, and blue can give an equipment-panel feeling.
- The grain should suggest physical material without becoming wallpaper.

Portable Ideas:

- brushed edge/frame treatment
- matte composite panels
- worn/scuffed highlight on structural surfaces only
- industrial red/orange reserved for faults/warnings

Do Not Copy:

- literal photo texture inside readout areas
- carbon-fiber gamer styling
- heavy brushed texture behind text

## Palette System Principles

### 1. Separate Surface Color From State Color

Surface color should establish mood and hierarchy.

State color should communicate meaning.

Do not let the base palette steal the colors needed for state.

### 2. Use Neutrals For Most Of The Screen

Most of the screen should be:

- charcoal
- slate
- graphite
- smoked blue-black
- green-black
- brown-black
- warm black
- muted steel

Accents should be rare enough to matter.

### 3. Avoid Pure Black As The Default

Pure black can be useful for deep voids, OLED moments, or screen gutters, but it makes elevation harder and can cause harsh contrast.

Prefer:

- `#080B0F`
- `#0B1014`
- `#0D1117`
- `#101418`
- `#121212`
- `#14191D`

### 4. Keep Warning Colors Special

Amber and red should not be general decoration.

Use them for:

- aged
- partial
- fallback
- unavailable
- warnings
- faults
- failed source

If amber is used as a whole palette theme, use a separate warning accent such as deeper orange/red or patterned edge treatment.

### 5. Do Not Depend On Color Alone

Pair color with:

- icon
- pip shape
- text label
- edge pattern
- segmented rail
- motion on change
- detail explanation

## Proposed Palette Families

These are reference palettes, not accepted tokens.

### 1. Graphite Instrument

Mood:

- serious, physical, neutral, expandable

Use For:

- default Lab presentation modules
- Instrument Status Band
- Bridge State Readout
- compact diagnostics

Suggested Colors:

- Base: `#0B0E11`
- Panel: `#12171C`
- Inset: `#080B0F`
- Raised: `#1A2228`
- Border: `#2B3942`
- Text: `#E5EEF2`
- Muted Text: `#8796A0`
- Current Accent: `#42D9C8`
- Aged Accent: `#D8A541`
- Warning/Fault: `#E05E4F`
- Detail Accent: `#7EA7FF`

Texture:

- matte composite
- very subtle monochrome grain
- faint inset shadow

Do Not:

- let it become plain enterprise dark mode

### 2. Cold Glass / Holo

Mood:

- glassy, precise, advanced, clean

Use For:

- detail overlays
- sensor-like modules
- selected readout
- modal inspection surfaces

Suggested Colors:

- Base: `#020712`
- Panel Glass: `rgba(12, 28, 38, 0.72)`
- Inset: `#06131B`
- Border: `rgba(126, 231, 255, 0.28)`
- Text: `#EAFBFF`
- Muted Text: `#87AAB7`
- Current Accent: `#00E5FF`
- Secondary Accent: `#40C4FF`
- Aged Accent: `#FFC857`
- Fault: `#FF5C7A`
- Rare Anomaly: `#C084FC`

Texture:

- frosted glass
- subtle noise
- tiny edge highlight
- no heavy background blur behind text

Do Not:

- make every panel transparent
- use cyan glow on all borders

### 3. Amber Cockpit

Mood:

- warm instrument, aviation, night cockpit, focused

Use For:

- aged/fallback-first modules
- low-light operator mode
- timeline/history-like readouts that are not Atlas evidence

Suggested Colors:

- Base: `#100C07`
- Panel: `#17110A`
- Inset: `#0A0704`
- Border: `#3A2A14`
- Text: `#F7E8C6`
- Muted Text: `#9C8053`
- Current Accent: `#FFB84D`
- Soft Amber: `#D99835`
- Caution: `#FF8A2A`
- Fault: `#E84C3D`
- Cool Counterpoint: `#69D2E7`

Texture:

- warm matte
- phosphor-like value glow
- faint dust/noise

Do Not:

- use amber for warnings if amber is also normal/current
- overdo retro cockpit nostalgia

### 4. Green Phosphor / Low-Power

Mood:

- terminal, low-power, diagnostic, quiet machine

Use For:

- compact diagnostics
- low-fi readout mode
- fallback/maintenance view

Suggested Colors:

- Base: `#07100B`
- Panel: `#0C1710`
- Inset: `#030704`
- Border: `#163522`
- Text: `#C7FFD6`
- Muted Text: `#6B9B78`
- Current Accent: `#66FF99`
- Dim Accent: `#2AD36F`
- Aged Accent: `#B7C96A`
- Fault: `#FF665A`
- Detail Accent: `#8FE7FF`

Texture:

- scanline only outside body text
- faint phosphor glow on values
- tiny persistence/ghosting only for decorative backing

Do Not:

- turn the whole UI into hacker green
- reduce legibility through CRT effects

### 5. Oxidized Industrial

Mood:

- worn hardware, field equipment, grounded sci-fi

Use For:

- ship/system surface
- rugged readout module
- status light grammar

Suggested Colors:

- Base: `#0E1110`
- Panel: `#171C1A`
- Inset: `#0A0D0C`
- Border: `#34413D`
- Text: `#E1E8DF`
- Muted Text: `#87958D`
- Current Accent: `#4FD1A5`
- Copper Accent: `#C47A3B`
- Aged Accent: `#D6A94A`
- Fault: `#C94F45`
- Cool Source Accent: `#5BB7D4`

Texture:

- matte composite
- faint brushed edge
- speckled oxide grain

Do Not:

- use rust/grunge heavily
- make it brown/orange dominant

### 6. White Phosphor / Lab Instrument

Mood:

- precise, clean, scientific, instrument screen

Use For:

- source/basis detail
- comparison/readout modules
- proof-of-presentation screenshots

Suggested Colors:

- Base: `#0B0D10`
- Panel: `#151A1F`
- Inset: `#090B0E`
- Border: `#2E3740`
- Text: `#F0F4F8`
- Muted Text: `#98A3AD`
- Current Accent: `#B7F7FF`
- Aged Accent: `#E3C56A`
- Fault: `#FF6B5E`
- Detail Accent: `#A7C7FF`
- Good/Available: `#9BE28F`

Texture:

- LCD/VFD slight bloom on numerals
- clean matte panels
- minimal grain

Do Not:

- make it sterile enterprise UI

### 7. Emergency Fallback

Mood:

- degraded but calm
- last-known / fallback / unavailable state

Use For:

- failed bridge states
- fallback readouts
- partial source modes

Suggested Colors:

- Base: `#120B0B`
- Panel: `#1A1111`
- Inset: `#080505`
- Border: `#4A2A25`
- Text: `#F3D7D0`
- Muted Text: `#A57A72`
- Fallback Accent: `#FF9F43`
- Fault: `#FF5A4F`
- Last-Known Accent: `#D8A541`
- Cool Relief: `#72D6D6`

Texture:

- reduced saturation
- one fault edge
- no red flood
- striped or segmented edge pattern for unavailable/partial

Do Not:

- make every failure look like catastrophe

### 8. Deep Space Violet

Mood:

- strange, advanced, anomaly, outer-space

Use For:

- experimental modules
- non-critical ambient surface
- rare special state

Suggested Colors:

- Base: `#080711`
- Panel: `#121020`
- Inset: `#06050C`
- Border: `#302B4A`
- Text: `#EEEAFB`
- Muted Text: `#9D93BD`
- Current Accent: `#7EE7FF`
- Violet Accent: `#A78BFA`
- Magenta Accent: `#F472B6`
- Aged Accent: `#F6C177`
- Fault: `#FF5D73`

Texture:

- very subtle star/noise grain
- no bokeh blobs
- deep matte, not fantasy glow

Do Not:

- make purple the dominant Lab default
- use as status-critical palette without strong contrast checks

## Semantic Accent Model

Suggested semantic color roles:

- Current / available: cyan, teal, or pale green
- Updating: cyan/blue with motion, not brighter color alone
- Aged: amber/gold
- Partial: amber plus segmented/broken shape
- Fallback: warm amber/orange with inset basis treatment
- Unavailable: muted red or red-orange
- No data: neutral gray/blue-gray
- Detail/source: soft blue or pale cyan
- Gaps: amber/neutral hybrid
- Warning: amber/orange
- Fault: red/red-orange
- Unknown/anomaly: violet only if needed

Important:

- The same accent should not mean different things inside one module.
- If a palette uses amber as its normal accent, warning needs a different cue.
- If a palette uses green as normal, success/current may need shape/text to avoid ambiguity.

## Texture Families

### 1. Matte Composite

Use:

- default panels
- instrument plates
- compact bands

Feel:

- serious, calm, equipment-like

CSS Approach:

- dark solid fill
- tiny linear gradient
- subtle noise overlay
- low-contrast border

Risk:

- can become flat if no inset/highlight exists

### 2. Smoked Glass

Use:

- detail overlays
- selected panels
- readout drawer

Feel:

- advanced, layered, inspectable

CSS Approach:

- dark translucent tint
- subtle backdrop blur
- 1px light border
- inner highlight
- low opacity noise

Risk:

- poor contrast if background is busy

### 3. Frosted Noise

Use:

- glass overlays
- background plates
- large empty surfaces

Feel:

- tactile, expensive, not too clean

CSS Approach:

- SVG noise or data URI noise
- opacity around 2% to 6% for content surfaces
- higher only on non-text backgrounds

Risk:

- makes small type fuzzier if overused

### 4. Brushed Edge Metal

Use:

- outer frame
- selected drawer edge
- non-text structural rim

Feel:

- physical hardware

CSS Approach:

- directional linear gradient
- thin highlight/dark line
- no photo texture behind text

Risk:

- old skeuomorphic appliance look if too literal

### 5. LCD / VFD Numeral Bloom

Use:

- numeric values
- telemetry counters
- small readout windows

Feel:

- instrument display

CSS Approach:

- crisp text
- subtle text-shadow only on values
- optional segmented font later if tested

Risk:

- novelty font can hurt readability

### 6. Scanline / Phosphor

Use:

- diagnostics mode
- low-power mode
- decorative backing behind large values

Feel:

- retro machine

CSS Approach:

- repeating-linear-gradient outside text areas
- opacity below annoyance threshold
- no animation by default

Risk:

- eye strain
- fake terminal cliche

### 7. Fine Grid / Sensor Mesh

Use:

- sensor surfaces
- empty spatial displays
- alignment background

Feel:

- coordinate surface

CSS Approach:

- two layered linear gradients
- very low opacity
- fade under panels

Risk:

- competes with text and borders

### 8. Warning Stripe / Broken Rail

Use:

- partial/unavailable/fallback edge treatment

Feel:

- degraded instrument state

CSS Approach:

- small segmented edge
- diagonal stripe only on a thin rail
- combine with label

Risk:

- construction hazard aesthetic if overused

### 9. Ceramic / Enamel Indicator

Use:

- status pips
- small physical lights
- toggles

Feel:

- tactile, cockpit, instrument panel

CSS Approach:

- radial gradient in tiny pip
- inset shadow
- no large glossy button

Risk:

- skeuomorphic toy if too shiny

### 10. Paper Terminal / Thermal Print

Use:

- activity timeline variant
- low-fi logs
- quiet archival-looking display without Atlas meaning

Feel:

- readable, rough, procedural

CSS Approach:

- dark sepia or gray paper tint
- monospace rows
- faint horizontal texture

Risk:

- can imply records/history if used carelessly

## Wild But Useful Combinations

### Black Glass + Amber Fault Edge

Use for:

- fallback readout
- aged source detail

Why:

- dark glass keeps information calm; amber edge tells the user to inspect age/basis.

### Graphite Plate + Ceramic Pips

Use for:

- status light grammar
- Instrument Status Band

Why:

- pips feel physical and readable; graphite keeps the base quiet.

### Frosted Drawer + Matte Parent Surface

Use for:

- Readout Detail

Why:

- detail feels layered without turning every module into a glass card.

### Green Phosphor Diagnostics Inside Graphite Shell

Use for:

- compact diagnostics

Why:

- diagnostics become visually distinct but still contained.

### Oxidized Industrial + Cool Source Accent

Use for:

- source/freshness strips

Why:

- rugged base plus cool detail color separates basis from warning.

### White Phosphor Values + Amber State Rail

Use for:

- numeric readouts
- rolling counter

Why:

- values stay crisp while state is handled by the rail.

### Deep Space Violet Only For Ambient Context

Use for:

- experimental sensor backgrounds

Why:

- gives wonder without turning status language into purple noise.

## Palette Testing Notes

Every palette should be checked against:

- normal populated state
- updating/loading
- aged
- partial
- fallback
- unavailable
- no data
- long source/basis text
- narrow shell
- diagnostics open
- reduced-motion mode if animation exists

Questions:

- Does warning still stand out?
- Is current readable without glowing everything?
- Does the base surface show hierarchy?
- Can text survive compression?
- Are state colors distinct for color-blind users when paired with shapes?
- Does the palette still work in grayscale?

## Texture Testing Notes

Every texture should be checked against:

- body text readability
- small numeric values
- thin borders
- low-DPI screenshots
- compressed screenshots
- narrow panels
- disabled/reduced states

Rules:

- no texture under small text unless extremely faint
- no animated texture by default
- no raster dependency unless justified
- no texture that becomes muddy in screenshots
- no texture that hides focus outlines

## Suggested Future Token Families

If Lab later turns this into implementation direction, useful token groups:

```txt
--surface-base
--surface-panel
--surface-inset
--surface-raised
--surface-glass
--surface-warning

--text-primary
--text-secondary
--text-muted
--text-inverse

--accent-current
--accent-updating
--accent-aged
--accent-partial
--accent-fallback
--accent-unavailable
--accent-detail
--accent-warning
--accent-fault

--border-quiet
--border-active
--border-state
--border-focus

--texture-noise-opacity
--texture-grid-opacity
--texture-scanline-opacity
--glow-current
--glow-warning
--shadow-inset
--shadow-overlay
```

This should not become a design-system milestone until a visible prototype needs it.

## Strong Recommendations

- Start with Graphite Instrument as the safest default test palette.
- Add Amber Cockpit and Cold Glass as alternate visual skins for the same module.
- Use Green Phosphor for diagnostics or a low-power variant, not the entire default product.
- Use texture mostly on surfaces, not text areas.
- Keep red rare.
- Keep cyan rare enough to still mean something.
- Prefer texture + edge + typography over more cards.
- Use color, shape, and placement together for state.

## Parked Ideas

Park:

- dynamic theme picker
- user-custom color editor
- full material token system
- animated CRT shader
- heavy glassmorphism shell
- carbon fiber aesthetic
- broad palette screenshot matrix
- exact adoption of external palette names
- target-specific palette claims

## Summary

Go wild in exploration, but keep the module disciplined:

- graphite for trustable structure
- glass for layered inspection
- amber for age/fallback/warning
- cyan/teal for current/source activity
- green for diagnostic/low-power flavor
- red for true fault
- violet for rare anomaly, not default UI
- texture for tactility, not noise

The face should feel like a physical instrument from a space-game world, but the information should read faster than the styling.

