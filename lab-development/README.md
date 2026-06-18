# Lab Development Shelves

Status: development routing shelf
Date: 2026-06-18

## Purpose

This folder holds reusable Lab subjects while they are being shaped, proven, and prepared for possible promotion into `lab-products/`.

Some subjects may remain Lab-internal tooling. Pane Board is the current example: it is useful because it helps the Human and agents make spatial intent visible, but it is not a shippable product by default.

It is a workbench, not a shippable product shelf.

Use this folder to keep subject-specific development material from accumulating in `workspace/`.

## Shelf Pattern

Each subject should use this shape:

```txt
lab-development/<subject>/
  README.md
  product-mirror/
  development-materials/
    development-record.md
    history/
```

`product-mirror/` is the current candidate product shape when the subject is a product candidate. For Lab-internal tooling, it is only a neutral possible externalization area unless explicitly opened.

`development-materials/` holds proof, assurance, filing notes, audit summaries, trial outcomes, and future-version shaping.

`history/` holds older development records only when they explain meaningful change, risk, regression, or promotion decisions.

## Current Subjects

- `trace-impression/`
- `presentation-glass/`
- `pane-board/`

## Filing Rule

Do not move HS, audit, specialist, or Dev handoff files here just because they exist.

Move or summarize them only when:

- the subject is accepted as the strongest home
- the artifact is no longer active workspace work
- the artifact explains product shape, boundary, proof, risk, or promotion readiness
- a short index or development record will preserve why it matters

Prefer summary records over dumping every historical file.

## Promotion Rule

Nothing in `lab-development/` is a shipped Lab product.

Promotion to future `lab-products/<subject>/` requires explicit Overseer/Human review and a clean product mirror with development material removed.
