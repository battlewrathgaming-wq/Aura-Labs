# Aura Lab Project Notes

Guide: This file records the local boot posture for Aura Lab.

This project already starts from the Aura Core scaffold. It is not expected to initialize git for now.

## Current Posture

- Work coordination lives in `workspace/current.md`.
- Durable project truth belongs in `docs/` only after it is earned.
- Do not use `docs/gap/to-do` or `docs/gap/complete` as an active work process.
- Do not initialize git unless the human explicitly asks.
- Keep the project light and bridge-aware.

## Useful Scaffold

Keep reusable module names such as `Frame`, `TaskRunner`, and `ServiceRegistry` unchanged unless product work earns a change.

## Verify

```powershell
npm run verify:all
```

## Optional App Smoke

Only after verification passes:

```powershell
npm start
```

Use this to visually confirm the Electron shell opens, the Frame controls render, and the Pin/Minimize/Close buttons are visible.

## First Product Direction

Aura Lab's first product direction is a bridge-aware HTML presentation layer for Aura project data. Initial design and implementation should account for real data, empty states, loading states, stale or failed bridge states, and clear trust/certainty language.
