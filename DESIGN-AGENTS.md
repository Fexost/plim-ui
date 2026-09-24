# Implementing Plim Design in plim-ui

Plim Design is the design source of truth. This file is not a second philosophy.

Before design work, install and use the Plim Design skills:

```bash
npx skills add Fexost/plim-design
```

Load `plim-design` first, then the specialist skill that matches the task (`plim-review`, `plim-beautify`, `plim-accessibility`, `plim-responsive`, `plim-ui`). The philosophy is [philosophy.md](https://github.com/Fexost/plim-design/blob/v1.0.0/philosophy/philosophy.md) at v1.0.0. The `evals/` directory in that repository tests the skills. It does not define the philosophy.

[`AGENTS.md`](./AGENTS.md) covers Angular architecture and library conventions. Those conventions are evidence. Where they conflict with Plim Design, Plim Design wins, and this file or `AGENTS.md` should be updated.

plim-ui is the Angular implementation. Its default theme is this library's identity, recorded in [`DESIGN-DECISIONS.md`](./DESIGN-DECISIONS.md). It is not a universal Plim look. Products theme semantic roles to carry their own character.

## How to decide

Start from what the interface should help someone understand or do. Then ask whether the current implementation already does that.

A visible difference is not an improvement. Name what got better: comprehension, access, recovery, hierarchy, or a character the product's evidence calls for. If the answer is only "looks fresher", do not change it.

Prefer the smallest change that solves the real problem:

1. Clearer words.
2. Hierarchy with existing roles (weight, colour role, size, position).
3. Composition (grouping, spacing, alignment).
4. An existing component or variant used for its meaning.
5. A token value, when the role is right and the value fails its job.
6. A new token or component, only when the same meaning recurs.
7. Replacing part of the system, only when you can name what improvement cannot fix.

Do not start a redesign unless a person has explicitly asked for one. Raise a real risk once, then execute their direction. Accessibility requirements constrain how that direction is built. They do not choose the look.

## What this library's tokens mean

Use semantic and component tokens in components. Primitives (`--plim-primitive-*`) are the raw palette.

| Role | Job |
| --- | --- |
| `--plim-color-text`, `-muted`, `-subtle` | Reading hierarchy. Each step must stay quieter than the one above it and still meet WCAG 2.2 AA for the text it carries. |
| `--plim-color-primary` | Action and focus fill. White text on the primary button uses `--plim-color-primary-strong` and `--plim-color-on-primary`. |
| `--plim-color-primary-text` | The same accent when it is lettering on a neutral surface. In dark theme this is lighter than the fill, because one value cannot be both. |
| `--plim-color-link` | Navigation, not a second word for primary. |
| `--plim-color-success`, `-warning`, `-danger` | Status hue for icons, borders, and text that meets contrast on the surface it sits on. |
| `--plim-color-*-surface` and `-surface-text` | Text and ground for a status callout. Text on those surfaces uses `-surface-text`, not the raw hue. |
| `--plim-color-border` | A quiet separator. Spacing or surface may already be doing the work. |
| `--plim-color-border-strong` | A boundary that identifies a control (fields, secondary buttons). It is held to 3:1 against adjacent surfaces. |
| `--plim-elevation-*` | Layering: raised, overlay, modal. A shadow means the surface is in a different layer, not that it is important. |
| `--plim-radius-*` | Shape by role. Radius is part of this library's character. Do not round everything, and do not flatten it, without a reason. |
| `--plim-space-*` | Relationship. Space inside a group is smaller than space between groups. Density follows the task. |
| `--plim-focus-ring-*` | Keyboard focus. Do not remove it to look cleaner. |
| `--plim-opacity-disabled` | Unavailable controls. Disabled text is exempt from the text-contrast floor; do not use this opacity to quiet content that is still available. |

Button variants mean importance or kind: `primary`, `secondary`, `text`. A destructive action is not automatically primary. There is no rule that every screen has one primary action. Distributed attention is legitimate for tables, settings, and tools. Prominence should still match what matters in that state.

Cards wrap a real unit. Sections of one page can be headings, spacing, and separators.

## Density, shape, and colour are not laws

Plim Design has no preferred density, radius, or neutrality. This library's default is a dark, cool, modestly rounded UI because that is its identity, not because those qualities are more correct.

Do not "improve" a screen by adding space, rounding, cards, or accent bars. Do not strip character for the same reason. Ask what the treatment communicates. If it communicates a true distinction, keep it. If it does not, question it.

## Accessibility

The working target is WCAG 2.2 Level AA unless a product states another target.

Requirements include text contrast (4.5:1, 3:1 for large text), 3:1 for meaningful non-text (identifying borders, focus, icons), a visible keyboard focus, keyboard access to every action, accessible names, and status that is not colour alone.

Above-floor improvements (for example 44px targets, or reduced motion for non-essential animation) are applied here where they do not fight a decided identity. Preferences are not requirements. "Grey feels hard to read" is not a finding when the contrast holds.

Native elements first. ARIA only when native semantics cannot express the pattern.

## States

Design the states people meet, not a screenshot of the default. For a control that applies: hover, focus-visible, pressed, selected, disabled, loading, invalid, empty, and the combinations that actually occur. Say what survives a transition: input, focus, selection, scroll.

Validation copy says what happened and what to do. Link the message to the control with `aria-describedby`. `plim-form-field` exposes the error as an alert only while `invalid` is set.

## Responsiveness

Adapt the composition when the context changes. The docs shell already does this: docked navigation on wide screens, an overlay drawer below 960px. Do not hide the task's essential action on small screens. Do not turn tables into cards by default. Check a narrow width, a wide width, and something in between.

## Style file ownership

- One SCSS file next to the component, directive, or page (`styleUrl`).
- Shared tokens, theme, and mixins stay in `projects/ui/src/styles/`.
- Shared docs primitives stay in `projects/docs/src/app/styles/`.
- App shell chrome stays in `app.scss`.

Do not add a token for a one-off value. Do not hard-code a colour, space, or radius when a token already means that thing.

## Before shipping a design change

- What should this help someone do, and did the change help?
- Do visual differences match real differences?
- Do text and identifying boundaries meet the contrast floor in both themes?
- Is keyboard focus visible, and does focus return when an overlay closes?
- Does status survive without colour alone?
- Does `prefers-reduced-motion` remove non-essential motion?
- What did you deliberately leave alone, and why?
