# Trace Impression Warm Start Seeds

Status: parked warm-start notes
Updated: 2026-06-16

These notes preserve useful follow-on candidates from the first Trace Impression pilot without opening a runway.

They are not active work, Dev authorization, target-project direction, or a task queue. Reopen only through `workspace/current.md` or explicit Human / Overseer direction.

## Accepted Fitness Read

Trace Impression has shown two useful behaviors:

- It reduced source-retrace burden for the Lab presentation head bridge/import boundary.
- It helped a fresh agent shape a bounded implementation lane without widening into target adapters, runtime security, visual review, or package/export work.

Fitness judgment:

```txt
Useful with proven bounded-task shaping value.
```

## Captured Implementation-Shaping Input

The tested next-step response proposed:

```txt
Add a small "presentation head import boundary" verification check to the existing static starter verifier.
```

The response correctly inferred that the useful implementation seam is Lab-local:

- `scripts/verify-static-starter.js`
- `portable-presentation-starter/README.md`
- `portable-presentation-starter/examples/static/index.html`
- `portable-presentation-starter/examples/static/inspect-head.html`
- `portable-presentation-starter/examples/static/instrument-readout-panel.js`
- `portable-presentation-starter/examples/static/example-readouts.json`
- `portable-presentation-starter/packages/sense-trial-glass/MANIFEST.md`
- possibly `portable-presentation-starter/packages/sense-trial-glass/README.md`

It also correctly avoided:

- target projects
- target adapters or mappers
- bridge/runtime payload transforms
- Electron, preload, IPC, runtime security
- visual/browser/screenshot review
- package manager export or publishing
- React wrappers
- source-project meaning or terminology authority changes

## Parked Candidate

Candidate:

```txt
M58 / Static Starter Import Boundary Verifier
```

Purpose:

```txt
Harden the Lab-side static head/import boundary after Trace Impression exposed it as a useful narrow confidence gain.
```

Possible scope:

- Add a named verifier check for the Lab presentation head bridge/import boundary.
- Fail if static starter HTML imports unexpected non-local scripts/styles or runtime/tooling surfaces.
- Fail if the JS fetch surface widens beyond the documented local `example-readouts.json` allowance.
- Fail if starter/package docs lose target-owned adapter/meaning/runtime/adoption boundary language.
- Preserve the distinction between Lab display example labels and target/source project states.

Acceptance shape if reopened:

- `npm.cmd run verify:static-starter` passes.
- `npm.cmd run verify:all` passes.
- Dev handoff states the confidence ceiling clearly: Lab-side static boundary assurance only.
- No product behavior, visual design, target adapter logic, runtime integration, package/export mechanics, or target meaning is introduced.

Main risk:

```txt
Over-tightening the verifier into a hidden contract.
```

Guardrail:

```txt
The check should guard Lab's local static boundary language and import shape, not define a durable bridge schema.
```

## Reopen Conditions

Reopen this seed only if:

- presentation-head Dev work is about to modify the static starter boundary;
- a target trial exposes confusion about what Lab glass does or does not provide;
- the Lab-side static starter package becomes a repeated handoff surface;
- Human / Overseer explicitly wants to harden the static import boundary.

Otherwise, keep this parked and let presentation-head work proceed.
