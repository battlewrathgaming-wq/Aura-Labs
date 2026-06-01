# Portable Presentation Starter

Status: Lab-local static reference

## Purpose

This starter is a small, framework-neutral reference for one Aura Lab presentation output:

```txt
neutral display example input -> Instrument Readout Panel -> Readout Detail reveal
```

It exists to prove the accepted presentation grammar outside the current Lab renderer. It can be opened as plain HTML and does not require Electron, preload, IPC, React, the Lab service registry, fixture selector controls, Pane Board, Wayfinder, or SmokeFlash.

## Scope

Included:

- one Instrument Readout Panel rendered from neutral display example data
- multiple display example states, with one selected panel shown at a time
- basis, readout age/freshness, availability, coverage, gaps, warnings, and detail rows
- source-owned placeholder qualification through `sourceOwned`
- one `Readout Detail` reveal
- narrow-friendly layout and long-token wrapping
- CSS custom properties for replaceable presentation tokens

Excluded:

- React scaffold
- current renderer export or seeding
- target-project adapters
- bridge or runtime contracts
- source-project internal mappings
- SmokeFlash split execution
- Pane Board, Wayfinder, Electron, preload, IPC, and Lab service registry usage

## Example Input Boundary

`examples/static/example-readouts.json` is display example input only. It is not a bridge contract, runtime contract, target payload requirement, target enum set, or source-project state model.

The fields `state`, `availability`, `NO DATA`, and `UNAVAILABLE` are used here as Lab display example fields and labels. They are not target-project states or shared source enums.

Source-owned placeholder terms such as `blocked`, `no-scan`, and `degraded` appear only as qualified examples. The `sourceOwned` block names the owner/layer context so the panel can display the term without making Lab the owner of its meaning.

## Safety Floor

This starter is display-only and is not a trust boundary.

Incoming display fields should be treated as untrusted display input. The static reference renders text as text and does not require privileged runtime access, preload, IPC, filesystem, clipboard, screenshot, live provider, or network dependency.

Adopting the Lab head does not adopt Lab sample data, example meanings, state enums, roadmap, tooling, or future upgrade path.

## Sense Cautions Preserved

This starter keeps the HS162 cautions visible:

- Lab readout shape remains an example, not a Sense bridge or runtime contract.
- `state` remains a display example field, not a target bridge enum.
- `availability` remains display copy and reasoning, not source state.
- `NO DATA` and `UNAVAILABLE` remain Lab display example labels, not Sense states.
- Lab `NO DATA` must not be mapped over Sense `blocked`, `no observation`, or `unavailable`.
- Sense-owned placeholders such as `blocked`, `no-scan`, and `degraded` must remain source-owned and qualified.

## Inspect

Open:

```txt
portable-presentation-starter/examples/static/index.html
```

The selector page is Lab demo scaffolding for reviewing multiple display example states. The travelling head is the Instrument Readout Panel surface, CSS/JS text-rendering pattern, example-data boundary, README safety language, and replaceable styling tokens. Target projects own local adapter mapping, source meaning, product copy, and adoption timing.

For a no-selector inspection shape, open:

```txt
portable-presentation-starter/examples/static/inspect-head.html
```

The pages load the JSON example data when the browser allows local file fetches. JavaScript also includes fallback example data so plain file opening still renders in browsers that block `file://` JSON reads.

## Source References

- `workspace/display-outputs/instrument-readout-panel.md`
- `workspace/display-materials/long-text-detail-block.md`
- `workspace/display-materials/availability-reason-treatment.md`
- `docs/adr/0001-smokeflash-split-timing.md`
- `docs/adr/0002-target-owned-presentation-adapters.md`
