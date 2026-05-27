# UIUXHS154 PNG-Backed Surface Materials Advisory

Status: Advisory
Role: Aura Lab UI/UX / presentation scout
Date: 2026-05-27

## Advisory Boundary

This advisory explores PNG-backed visual materials for Lab presentation surfaces only.

It does not authorize implementation, target-project styling, export, seeding, bridge or adapter work, live data, runtime dependency on external images, or product contract changes.

PNG-backed materials should be treated as optional local surface ingredients that help Lab test whether bitmap texture, plates, and image-backed references improve calm readable display.

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/critical/critical-assets.md`
- `workspace/display-materials/README.md`

## Current-State Understanding

Lab has accepted reusable display materials and a composed Instrument Readout Panel output, while Pane Board now supports Human/agent spatial conversation as Lab-only tooling.

The next useful visual-material question is not "which theme should Lab adopt?" It is smaller:

Can local PNG materials improve surface depth, legibility, and spatial intent while staying optional, documented, readable, and portable?

The answer is likely yes if PNGs are used as low-authority presentation backing: plates, tiles, faint texture, edge accents, and Pane Board reference surfaces. They should not carry source-project identity, target-project doctrine, or required runtime meaning.

## PNG Material Use Cases

| Use case | Purpose | Good fit | Avoid |
| --- | --- | --- | --- |
| Background plate | Give a composed output a calm physical base. | Instrument Readout Panel, scanner/readout console concept, Pane Board visual reference. | Busy art that competes with labels or implies a target project skin. |
| Panel plate | Separate a readout surface from its shell without heavy borders. | Expandable status card, long text detail block, availability reason treatment. | Plate imagery that makes the card look interactive when it is static. |
| Tile surface | Repeatable subtle texture for dense groups. | Compact value stack, table row detail drawer, readout grid. | High-contrast tiling, visible seams, large file repeats. |
| Edge accent | Add a restrained visual lane for state, gaps, or warnings. | Warning / Gap Edge, availability reason treatment. | Color-only state, alarm-heavy red surfaces, thick decorative frames. |
| Glow or scanline layer | Add low-intensity display atmosphere. | Powered-down console, updating state, focus area. | Constant motion, strong scanlines over text, live-surveillance implication. |
| Pane Board board texture | Help Human and agents discuss spatial intent on a less sterile board. | Lab-only sketch/reference board. | Product UI styling, generated UI implication, exported CSS doctrine. |
| Image-backed pane reference | Let a pane carry a visual reference for "this zone should feel like a panel/rail/map/readout." | Pane Board proposals and Human sketches. | Treating the image as a final UI asset or accepted product design. |

## Surfaces That Can Accept Image Backing

| Surface | Suggested image role | Constraints |
| --- | --- | --- |
| Full background | Ambient shell behind all content. | Must remain optional; keep content on solid or semi-solid surfaces above it. |
| Band | Thin backing texture or edge fade. | Do not reduce state/readout contrast; no image-only state. |
| Inset panel | Plate fill or subtle noise. | Text must sit on predictable contrast layer, not directly over variable image detail. |
| Tile | Repeatable surface fill. | Must be seam-safe at 8px/16px/32px rhythms and avoid visual buzzing. |
| Edge accent | Muted PNG edge or warning/gap texture. | Pair with text/icon/state label; color cannot be the only carrier. |
| Glow layer | Static or near-static highlight behind active region. | No continuous expensive motion in V1; no implication of live activity when state is offline/disarmed. |
| Scanline layer | Very faint overlay for display feel. | Keep opacity low and never pass over small text at high contrast. |
| Pane Board board texture | Optional sketchboard ground. | Lab-only tooling; not part of clean presentation head or product renderer. |

## Asset Rules

### Size

- Prefer small local PNGs with stable dimensions.
- Suggested starting sizes:
  - full background plate: `1440x960` or smaller
  - panel plate: `640x360`
  - tile: `128x128`, `256x256`, or `512x512`
  - edge accent: `16x256`, `24x256`, or `32x256`
  - glow layer: `512x512` with transparency
  - Pane Board texture: `960x640` and `720x640` variants only if viewport-specific texture is needed
- Avoid large image sets in the first slice.

### Opacity And Contrast

- PNG material should usually sit below `20%` visible strength once rendered.
- Text-bearing surfaces need a solid or semi-solid contrast layer above the image.
- Small labels, readout basis, readout age, gaps, warnings, and availability language must remain readable without relying on image detail.
- State must remain legible in grayscale or with image disabled.

### Compression And Format

- Use PNG when alpha, crisp plate edges, or repeatable texture matter.
- Keep individual V1 assets small enough that they can be reviewed casually in repo.
- If a future material needs large photographic backing, park it until Lab accepts a separate asset-size rule.

### Naming

Use local, descriptive, product-agnostic names:

- `plate-readout-muted-grid.png`
- `tile-panel-fine-noise.png`
- `edge-warning-muted-amber.png`
- `glow-readout-soft-cyan.png`
- `board-texture-neutral-grid-960x640.png`

Avoid names that imply Atlas, Sense, Core, source-project doctrine, final theme ownership, or target-project adoption.

### Local Path

If accepted later, place prototype assets under a Lab-local visual-material folder, for example:

- `workspace/visual-materials/png/`

Do not place PNG materials inside target-project folders. Do not load external image URLs at runtime unless a later packet explicitly accepts that dependency.

### Attribution And Provenance

Each non-generated or externally derived asset needs a short note beside it:

- origin
- license or usage permission
- modification notes
- whether it is local-only inspiration or accepted Lab material

Generated assets should still record prompt/source context at a high level, without making the prompt the product artifact.

## Readability Rules

- Text containment wins over texture.
- Basis, freshness, availability, gaps, and warnings must stay visible when images are disabled.
- PNG material must not make `updating`, `aged`, `partial`, `unavailable`, `fallback`, or `no data` depend on color or atmosphere alone.
- High-frequency noise, bright star fields, strong bevels, and dense scanlines should be avoided for text-bearing surfaces.
- Use images to support hierarchy and surface depth, not to explain data.

## Small Motion Position

PNG-backed materials can support motion only as a later enhancement.

Cheap acceptable motion candidates:

- opacity fade when a detail drawer opens
- brief glow settle when a readout updates
- static scanline layer that changes opacity by state

Parked motion:

- animated radar sweeps
- drifting background textures
- continuous pulsing
- particle layers
- canvas/image compositing for V1

## Smallest Prototype Recommendation

Prototype one local PNG-backed `Panel Plate` material path behind Lab-only fixture data.

Candidate:

`png-panel-plate-readout-muted`

Purpose:

Test whether a subtle local PNG plate improves the feel of a readout surface without reducing text clarity or becoming required presentation doctrine.

Suggested slice:

- one `640x360` PNG panel plate
- one CSS-backed fallback with no image
- applied only to a fixture/workshop readout surface
- visible comparison: image on / image off
- states checked: current, updating, aged, partial, unavailable, fallback, no data
- no external image URL
- no target-project branding
- no runtime contract changes

Why this first:

Panel plates have the best balance of usefulness and containment. They can improve surface feel without taking over the whole shell, and they are easy to disable when readability suffers.

## What Could Be Prototyped Cheaply

- A single PNG panel plate behind the Instrument Readout Panel fixture.
- A muted warning/gap edge PNG paired with existing text/status treatment.
- A Pane Board board texture toggle for Human sketching.
- A side-by-side fixture showing image-backed vs plain surface.
- A simple asset note page with file size, dimensions, intended surface, and readability notes.

## What Should Stay Parked

- Full visual theme packs.
- Target-project skins.
- External image services or remote asset loading.
- Export/seeding assumptions.
- Asset generation pipelines.
- Product UI background art.
- Animated bitmap layers.
- Large photographic backgrounds.
- Runtime image selection from bridge-fed data.
- Treating Pane Board image references as product UI.
- Using PNGs to carry state without text/icon/shape support.

## Risks And Mitigations

| Risk | Why it matters | Mitigation |
| --- | --- | --- |
| Readability loss | Texture can compete with compact readouts and detail rows. | Require image-off parity and contrast check before acceptance. |
| File size creep | Large PNGs can quietly make a light surface heavy. | Start with one or two small local assets and document dimensions/filesize. |
| Copyright or attribution ambiguity | Visual assets can carry reuse limits. | Require origin/license notes for every non-original asset. |
| Theme drift | A strong texture can imply target-project styling. | Use product-agnostic names and keep assets Lab-local. |
| Motion/noise | Animated or noisy images can make calm display feel busy. | Keep V1 static; park motion beyond simple opacity transitions. |
| Export portability | Target projects may not want Lab assets. | Keep PNGs optional and disable-safe; no target adoption claim. |
| State ambiguity | Glow/edge color can be mistaken for data meaning. | Pair visual material with readable labels, status pips, and warning/gap text. |
| Pane Board authority drift | Image-backed panes can look like final UI. | Mark as reference material only and keep board state separate from product output. |

## Acceptance Criteria

This advisory is acceptable if it gives Lab:

- a safe vocabulary for PNG-backed visual materials
- clear surfaces where image backing may be tested
- asset rules for size, opacity, contrast, compression, naming, local paths, and attribution
- explicit readability and non-color-only constraints
- one smallest prototype candidate
- clear parked items and risks

It is not acceptable if it becomes a pile of images, a target-project style guide, a bridge contract, or a Dev runway.

## Later Dev Prototype Acceptance Shape

If Human / Overseer later opens a Dev packet, the smallest bounded acceptance could be:

- one local PNG asset added under an accepted Lab-local asset path
- one fixture-only surface can render with image-backed plate enabled
- the same surface can render with image disabled
- no external image dependency
- no target-project naming or styling claim
- no bridge/runtime/adapter changes
- readable basis, freshness, state, gaps, warnings, and availability in all fixture states
- screenshot evidence for image on/off and one narrow layout

## Final Recommendation

Start with a single PNG-backed panel plate as a Lab-only fixture material.

Keep the first question simple: does a subtle bitmap plate make the readout feel cooler and more tactile while preserving calm readability?

If yes, Lab can later add a tiny local visual-material vocabulary: panel plate, edge accent, tile, glow layer, and Pane Board texture. If no, the fallback is clean CSS surfaces with no loss of display function.
