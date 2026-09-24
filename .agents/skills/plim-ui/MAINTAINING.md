# Maintaining the plim-ui integration

A lightweight process for keeping [`reference.md`](reference.md) true as plim-ui evolves.

## What changes, and how often

| File | Contains | Changes when |
| --- | --- | --- |
| [`SKILL.md`](SKILL.md) | Stable plim-ui-specific guidance: when to use plim-ui, precedence, how Plim concepts map onto the library, the build ladder. General reasoning for shared systems lives in [`systems.md`](../plim-design/systems.md) | plim-ui's architecture changes (for example, it stops styling native elements), or the philosophy changes |
| [`reference.md`](reference.md) | Version-specific facts: setup, components, inputs, tokens, known divergences | Every plim-ui release that changes components, inputs, tokens, or design guidance |

The direction of authority is one way: the philosophy informs plim-ui. Never change the philosophy or the skills to match an implementation detail. If plim-ui work exposes a real gap in the philosophy, raise it as a question for the philosophy.

## When to review

- A new plim-ui version is published to npm.
- Significant design or API work lands on `main`, and it's being used before a release.
- An agent or person finds that the reference doesn't match the installed version.
- A divergence listed in `reference.md` is reconciled in plim-ui.

## Steps

1. **Pick the target:** the npm version and the commit it corresponds to.
2. **Diff the sources** since the commit recorded in `reference.md`, from a clone of plim-ui:

   ```bash
   git diff <recorded-commit>..<target> -- projects/ui/src/public-api.ts projects/ui/src/styles/_tokens.scss AGENTS.md DESIGN-AGENTS.md
   ```

   Also skim the npm README and changelog, if any, for input changes. `DESIGN-AGENTS.md` is diffed only to keep the divergence log current; it is not a design source.
3. **Update `reference.md`:** add, change, or remove facts; mark anything seen only on `main` as **(main)**; remove **(main)** from facts now in a release.
4. **Update known divergences:** close entries that plim-ui has reconciled, and add new ones.
5. **Re-read `SKILL.md`** and confirm its mapping is still true at the concept level.
6. **Update the "Verified against" table:** version, commit, sources, date.
7. **Add a `CHANGELOG.md` entry:** `plim-ui reference verified against plim-ui@x.y.z (commit)`.

## Review checklist

- Every component, input, and token named exists in the stated version, or is marked **(main)**.
- Nothing inferred is presented as fact; gaps (such as undocumented error display) are stated as gaps.
- No plim-ui specifics have leaked into the framework-agnostic skills.
- The philosophy and plim-ui's `DESIGN-AGENTS.md` were not edited as part of the update, unless that was explicitly requested.

## When an agent finds drift during work

Trust the installed code over the reference, tell the user what differs, and offer to update `reference.md` using these steps. Don't silently patch the reference mid-task.
