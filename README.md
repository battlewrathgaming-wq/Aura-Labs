# Aura Lab

Aura Lab is a light Aura workspace for shaping portable post-bridge display mapping and presentation tooling.

The project does not primarily decide what Aura products should present. It proves whether bridge-shaped data can be reliably rendered into the desired desktop style across content pressure, bridge states, trust/freshness language, and visual smoke verification.

It starts from the Aura Core scaffold and keeps the useful local app rigging:

- workspace-first agent coordination
- pure core modules with fixture-first verification
- service command registry
- task runner with progress, warnings, cancellation, and lock classes
- message taxonomy for consistent diagnostics
- HTTP client wrapper with timeout, cancellation, retry, injected fetch, and request logging hooks
- minimal Electron shell for local app projects

The project should stay light. Product direction, milestone work, and implementation runways move through `workspace/current.md`.

The current product focus is a display-elements workshop: small portable HTML/CSS/JS ways to show bridge-fed information clearly. Lab should answer, "you can now display information like this," while target projects keep ownership of their own meaning.

Start agents at `AGENTS.md`, then `workspace/README.md`. Workshop/skunkworks guidance lives at `workspace/workshop/README.md`.

The core product concern is the post-bridge presenter rig: display mapping, typography, containment, shell verification, and state handling after data has crossed a bridge. Lab fixtures such as `aura.projectBriefing` and Needs Attention are test material, not the product boundary.

Durable project documentation starts at `docs/index.md`.

## Verification

```powershell
npm run verify:all
```

## App Shell

```powershell
npm start
```
