# Aura Lab

Aura Lab is a light Aura workspace for shaping an HTML presentation layer for Aura project data.

It starts from the Aura Core scaffold and keeps the useful local app rigging:

- workspace-first agent coordination
- pure core modules with fixture-first verification
- service command registry
- task runner with progress, warnings, cancellation, and lock classes
- message taxonomy for consistent diagnostics
- HTTP client wrapper with timeout, cancellation, retry, injected fetch, and request logging hooks
- minimal Electron shell for local app projects

The project should stay light. Product direction, milestone work, and implementation runways move through `workspace/current.md`.

The first product concern is presenting Aura project data through a bridge-aware UI. That includes useful states for real data, empty data, loading, stale bridge data, bridge failure, partial certainty, and trust language.

## Verification

```powershell
npm run verify:all
```

## App Shell

```powershell
npm start
```
