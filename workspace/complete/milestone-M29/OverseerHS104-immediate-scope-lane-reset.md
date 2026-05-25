# Overseer HS104 - Immediate Scope Lane Reset

Status: Accepted direction
Date: 2026-05-25
Role: Overseer

## Files Reviewed

- `AGENTS.md`
- `workspace/current.md`
- `workspace/overview.md`
- `workspace/critical/README.md`
- `workspace/critical/critical-terms.md`
- `workspace/display-materials/README.md`
- `docs/roadmap/m29-presentation-head-improvement-rail.md`
- `docs/roadmap/future-candidate-bank.md`
- `package.json`

## Human Steering

Human deferred the renderer security review until closer to split/readiness work and introduced immediate scope for Aura Lab:

- presentation slot registry
- lazy-loaded visual slot
- virtualized list helper
- Lab-only draggable layout board
- screenshot comparison index

## Overseer Disposition

The security review is deferred, not rejected. It remains appropriate before split/export/readiness review, but it is too early while the presentation head is still growing through bounded visible capability slices.

The immediate scope splits into two lanes:

| Lane | Items | Disposition |
| --- | --- | --- |
| Feature enrichment | presentation slot registry, lazy-loaded visual slot, virtualized list helper | Accept as next product-facing sequence, starting with the slot registry. |
| Production pipeline | Lab-only draggable layout board, screenshot comparison index | Park as support tooling candidates until feature work exposes enough review friction. |

## Rationale

The feature enrichment lane directly improves the presentation head and supports future reusable display modules. The production pipeline lane can help Human/agent communication, but it must remain Lab-only support tooling and must not become the product direction.

The smallest safe next step is the presentation slot registry because it gives later work a stable local place to describe and render slots before adding lazy loading or virtualization.

## Accepted Sequence

1. Open a bounded Dev runway for a presentation slot registry scaffold.
2. Leave lazy-loaded visual slot as the likely next feature only after the registry shape is proven.
3. Leave virtualized list helper after the registry and lazy slot, because it should serve real presentation pressure rather than abstract infrastructure.
4. Keep draggable layout board and screenshot comparison index parked in the T-lane until the product-facing work needs them.
5. Return to renderer security review closer to split/export readiness.

## Guardrails

- Do not create target-project adapters.
- Do not introduce a durable bridge/runtime contract.
- Do not add source-project terms as Lab defaults.
- Do not add SmokeFlash/workshop state to normal launch or the slim presentation path.
- Do not make production tooling visible product direction.
- Do not broaden visual-smoke matrices unless a visible change needs proof.

## Next Packet

Open `workspace/current.md` for Dev:

- Active focus: presentation slot registry scaffold.
- Expected handoff: `workspace/DevHS105-presentation-slot-registry.md`.
