# Lab Tooling Boundary

Status: Lab-only tooling boundary

This folder is the firewall between Aura Lab's portable presentation offer and Lab-only tools.

Code in this folder may support workshop, review, layout, screenshot, or coordination tools. It is not part of the portable presentation head unless `workspace/current.md` explicitly opens a migration or export packet.

## Direction

If you are looking for product-facing presentation code, go back to:

```txt
src/main/main.js
src/renderer/index.html
src/renderer/app.js
src/renderer/styles.css
```

If you are working on Lab-only tooling, stay in this boundary and read the specific tool file or README before editing.

## Allowed Here

- Lab-only Electron sidecar launch helpers
- Lab-only IPC handlers
- layout conversation tooling
- screenshot/reference tooling
- smoke paths for Lab-only tools
- local workspace persistence for tooling state
- boundary verification for tooling separation

## Not Allowed Here

- target-project adapters
- Atlas, Sense, or Core semantics
- bridge/runtime contract changes
- product renderer dependencies
- code generation for product UI
- export/seeding decisions
- shared Aura doctrine

## Pane Board

Current Pane Board main-process tooling lives in:

```txt
src/main/labTooling/paneBoard/paneBoard.js
```

Pane Board is a near-time shared spatial communication tool. It helps the Human and agents discuss rough layout zones, relationships, density pressure, and shape/form intent. Its outputs are layout references, screenshots, coordinate guides, and qualitative Human affirmation.

Pane Board does not define final UI, product components, bridge contracts, or target-project adoption.

## Rule Of Thumb

If a future agent is unsure whether code belongs here, ask:

```txt
Does this help Lab discuss or inspect presentation work, or does it become part of the portable presentation offer?
```

If it becomes part of the presentation offer, it probably does not belong in this folder.
