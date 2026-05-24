# Critical Assets

Purpose: list Lab assets that should be preserved, reviewed carefully, or treated as important presentation-module material.

Expanded asset list:
`F:\Projects\Docs\Aura-Project-Orchestration\critical\AURA-Lab\critical-assets.md`

Status:
Initial local index populated from the expanded coordination list. Treat this as project-local reference material for agents; promotion into durable project truth still requires Lab Overseer/Human acceptance.

## Critical Assets

| Asset | Type | Why It Matters | Handling Note |
| --- | --- | --- | --- |
| `workspace/current.md` | Current packet | Defines active milestone/executor and whether Dev work is allowed. | Do not infer implementation permission unless this file says so. |
| `workspace/overview.md` | Project overview | Defines Lab as post-bridge display mapping and presentation tooling. | Primary local orientation for Lab boundary. |
| `workspace/critical/critical-terms.md` | Critical terms | Holds local Lab vocabulary rules and cross-project cautions. | Read before copy, labels, bridge-fed presentation, or source terminology work. |
| `workspace/critical/lab-vocabulary-instruction-packets.md` | Candidate packets | Stages M13a/M13b/M13c vocabulary inventory, replacement, and guardrail work. | Candidate only until adopted into `workspace/current.md`. |
| `docs/statements/post-bridge-presentation-boundary.md` | Durable boundary statement | Defines Lab's post-bridge presentation authority and non-ownership of source projects. | Strongest durable Lab boundary. |
| `docs/current-state/m11-presentation-state-readout-current-state.md` | Accepted current state | Records Bridge State Readout, neutral labels, Source Detail, and secondary diagnostics. | Current implementation truth for readout terminology. |
| `workspace/complete/milestone-M12/` | Milestone closure | Records accepted Bridge State Readout naming alignment. | Use as trace for current name and no behavior/doctrine change. |
| `src/renderer/index.html` | Renderer shell | Contains primary visible labels and presentation surfaces. | Main copy inventory source. |
| `src/renderer/app.js` | Renderer presenter | Maps bridge/readout state into visible labels and detail surfaces. | Critical Bridge -> Interface translation source. |
| `src/services/serviceRegistry.js` | Service registry and fixtures | Defines Lab fixture families, states, source/basis labels, and presentation payloads. | Main source of Lab-owned fixture and bridge-shaped terms. |
| `scripts/verify-services.js` | Verification script | Asserts fixture/state grammar and copy safety expectations. | Update carefully if vocabulary changes. |
| `scripts/verify-renderer-shell.js` | Verification script | Asserts visible labels and renderer boundary expectations. | Critical presentation vocabulary guardrail. |
| `scripts/electron-visual-smoke.ps1` and `src/main/main.js` | Smoke runner | Produces visual review evidence and smoke result language. | Support tooling only; must not become product direction. |
| `package.json` | Verification manifest | Lists active verify/smoke commands. | Use for current verification entry points. |

## Do Not Casually Change

| Asset | Reason | Required Review |
| --- | --- | --- |
| `workspace/current.md` | Active project authority and executor state. | Lab Overseer / Human |
| `docs/statements/post-bridge-presentation-boundary.md` | Defines Lab authority and what Lab does not own. | Lab Overseer / Human |
| `Bridge State Readout` and neutral state labels | Accepted Lab presentation vocabulary. | Lab Overseer / Human |
| Renderer state mapping in `src/renderer/app.js` | Active Bridge -> Interface translation logic. | Lab Overseer / Human |
| `Source Detail`, readout basis/age/source coverage surfaces | Meaning-sensitive source/freshness/basis presentation. | Lab Overseer / Human |
| `family` and `state` axes in `src/services/serviceRegistry.js` | Accepted fixture/presentation separation. | Lab Overseer / Human |
| Vocabulary and renderer verification scripts | Guard against drift in visible labels and source ownership. | Lab Overseer / Human |
| Preload/service/window bridge names | Used by renderer and tests. | Lab Overseer / Human |

## Open Questions

- Which additional expanded Lab assets should be promoted here after M13a?
- Should `Source Detail` remain accepted, or should a future UI/UX review consider `Readout Detail`?
- Should `Registered Services` remain visible as-is, or become a softer secondary label such as `Service Diagnostics`?
