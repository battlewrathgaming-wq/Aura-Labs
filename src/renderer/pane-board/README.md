# Pane Board Renderer

Status: Lab-only tool renderer

This renderer is not the portable presentation offer.

Pane Board is a near-time shared spatial communication tool for Human-agent layout discussion. It lets the Human sketch rough zones, keep a current board at rest, grab snapshots, and let agents propose alternate arrangements.

## What This Renderer Is

- Lab-only tooling UI
- layout conversation surface
- visual relationship sketchbench
- coordinate-guide producer
- screenshot/reference producer

## What This Renderer Is Not

- product renderer
- Atlas/Sense/Core UI
- bridge/runtime contract
- component library
- code generator
- draggable production dashboard
- portable presentation head

## Portable Output

The useful product-facing result is not this renderer. The useful result is the interpretation of a board:

- rough zones
- relative placement
- grouping
- prominence
- density pressure
- shape/form intent
- screenshots
- coordinate guides
- qualitative Human affirmation

Exact coordinates, board event history, Pane Board state names, smoke artifacts, and local sketches do not travel as product authority.

## Direction

For product-facing presentation code, go back to:

```txt
src/renderer/index.html
src/renderer/app.js
src/renderer/styles.css
```

For main-process Pane Board tooling code, see:

```txt
src/main/labTooling/paneBoard/paneBoard.js
src/main/labTooling/README.md
```

For saved board state and collaboration records, see:

```txt
workspace/pane-board/
```
