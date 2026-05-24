# UIUXHS16: Open Source Presentation Models Intake

Date: 2026-05-24
Role: UI/UX
Project: Aura Lab
Status: Advisory intake, not an active Dev packet

## Scope

This note starts an open-source model intake for Aura Lab presentation direction.

The goal is to learn what can be built around Electron/Web UI while moving Aura projects away from cramped utility panels and toward a more beautiful, space-game-appropriate presentation system.

This does not implement code, create a Dev runway, or select a final design system.

## Intent

Aura Lab should become a place to explore a reusable Aura presentation kit:

- beautiful enough to feel at home in a space game
- disciplined enough for evidence, telemetry, and project-state trust
- portable enough to adapt into Atlas, Sense, and future Aura apps
- honest enough to preserve source, freshness, certainty, partial, stale, and failed states

The desired direction is not generic admin dashboard and not pure decorative sci-fi HUD. It should feel like a capable ship instrument panel: spatial, calm, luminous, readable, and operational.

## Source Links Sampled

- [Electron official examples](https://www.electronjs.org/docs/latest/tutorial/examples)
- [Electron apps collection](https://github.com/electron/apps)
- [Electron React App starter](https://github.com/guasam/electron-react-app)
- [Cosmic UI sci-fi component library](https://next.jqueryscript.net/tailwind-css/sci-fi-ui-components-cosmic/)
- [Endless Sky](https://endless-sky.github.io/index.html)
- [I, Voyager](https://www.ivoyager.dev/)
- [Beekeeper Studio](https://github.com/beekeeper-studio/beekeeper-studio)
- [Insomnia](https://github.com/Kong/insomnia)
- [Netron](https://github.com/lutzroeder/netron)
- [Signal Desktop](https://github.com/signalapp/Signal-Desktop)

## Model Categories

### 1. Electron Capability Models

Use for:

- custom windows and frame controls
- preload/bridge discipline
- native dialogs and file access
- tray/menu/window patterns
- drag/drop, notifications, deep links, and desktop integration

Reference:

- Electron official examples are practical, minimal, and Fiddle-ready. They are useful for proving what the shell can do before building a polished Aura component.

Aura implication:

- Aura Lab can keep Electron logic narrow and turn each native capability into a tested presentation affordance rather than a one-off app hack.

### 2. Modern Desktop App Models

Use for:

- workbench density
- split-pane navigation
- native-feeling app structure
- data-heavy readability
- keyboard-friendly desktop ergonomics

References:

- Beekeeper Studio for calmer data-tool layout and avoiding kitchen-sink clutter.
- Insomnia for a polished workbench with request/detail panes and clear local/cloud/storage concepts.
- Signal Desktop for clean native-feeling shell restraint.
- Netron for visual inspection of complex model graphs without making every detail equal weight.

Aura implication:

- Atlas can borrow workbench hierarchy.
- Sense should borrow only the clarity and restraint, not dense persistence.
- Aura Lab can prototype a shared shell plus presentation grammar.

### 3. Space / Game Presentation Models

Use for:

- orbital/spatial visual motifs
- map-like navigation
- ship/instrument panel mood
- visual hierarchy with a sense of place
- beauty that still supports operational scanning

References:

- Endless Sky: open-source 2D space game, useful for map/trade/ship framing and space-world tone.
- I, Voyager: open-source planetarium/game-development platform, useful for orbital paths, object panels, and spatial navigation UI.

Aura implication:

- Aura apps can feel like ship systems, not spreadsheets in a dark theme.
- The design language should use depth, glow, motion, and spatial grouping carefully, while keeping labels and uncertainty readable.

### 4. Sci-Fi Component Models

Use for:

- angular frames
- SVG masks
- luminous separators
- sci-fi buttons and HUD panels
- theme experiments

Reference:

- Cosmic UI is a Tailwind/SVG sci-fi component library for modern web apps and games.

Aura implication:

- This is good inspiration for shape language, but Aura should not simply paste ornamental sci-fi frames everywhere.
- Use sci-fi components for emphasis and identity, not for every cell in a dense data grid.

### 5. Starter / Stack Models

Use for:

- future packaging experiments
- React/TypeScript/Tailwind/Shadcn exploration
- type-safe IPC ideas
- custom titlebar and theme infrastructure

Reference:

- Electron React App starter combines Electron, React, Vite, TypeScript, TailwindCSS, Shadcn UI, custom titlebar, theme switching, and type-safe IPC.

Aura implication:

- Useful as a model for what a future Aura presentation-kit stack could look like.
- Not a reason to migrate Aura Lab immediately.

## Beauty Direction For Aura

Recommended aesthetic target:

- "ship systems briefing" rather than "admin dashboard"
- deep dark base, but not flat black
- subtle luminous color, not full neon overload
- panel depth and spatial layers
- crisp typography with calmer hierarchy
- radar/map/orbit motifs where they explain structure
- motion only when it communicates freshness, acquisition, alert, or transition
- clear trust language even inside beautiful UI

Avoid:

- one-note cyan-on-black everywhere
- tiny unreadable labels
- over-framed boxes around every field
- decorative glow that weakens contrast
- dashboard card soup
- hero-page marketing layout
- treating sci-fi style as a substitute for information design

## Presentation Kit Candidates

1. Aura Shell

- frameless window
- stable drag region
- quiet window controls
- app identity and mode/status area
- debug/development affordances kept secondary

2. Aura Briefing

- project/app identity
- action posture
- trust band
- source/freshness/certainty
- needs-attention row
- compact fact groups

3. Aura Instrument Panel

- data cards for tactical/evidence/project facts
- long-text resilience
- empty/unavailable/missing states
- source labels and freshness marks

4. Aura State Grammar

- loading
- empty
- populated
- stale
- failed
- partial
- blocked
- gated
- advisory/pending acceptance

5. Aura Sci-Fi Surface

- optional angular frames
- fine separators
- controlled glow tokens
- scanner/radar accent states
- space-map background or ambient scene only when it supports the task

6. Aura Visual Smoke Modes

- normal
- empty
- stale
- failed
- partial
- narrow viewport
- long text / overflow
- no data / missing source

## Recommended Next Design Experiment

For the next Aura Lab design pass, build a static visual concept before deep implementation:

- One beautiful project-state briefing screen.
- One tactical compact HUD variant inspired by Sense.
- One operator investigation/workbench variant inspired by Atlas.
- One neutral Core seed variant.

Each should use the same presentation kit vocabulary but different information hierarchy.

Success looks like:

- clearly more beautiful than the current Atlas/Sense screenshots
- still readable in compact desktop windows
- source/freshness/certainty remain visible
- no text wrapping disasters
- diagnostic details are available but not visually dominant

## Questions For Human / Overseer

- Should Aura Lab M02 be a visual concept milestone before packaging?
- Do you want the first design experiment to lean more "ship cockpit", "strategic command table", or "clean sci-fi desktop tool"?
- Should Aura Lab try React/Tailwind as a presentation-kit experiment, or keep the current plain HTML/CSS while finding the visual language?
- Is beauty allowed to include ambient animation and background scenes, or should motion stay strictly functional?
- Which app should be the first adapter target: Sense, Atlas, or Core?

## Risks

- Too much sci-fi ornament can make trust and source state harder to read.
- A presentation kit can become too generic if it ignores product-specific posture.
- Moving to a richer stack too early could slow learning.
- Copying open-source visual patterns directly may create licensing or identity issues; use them as references unless license review approves reuse.
