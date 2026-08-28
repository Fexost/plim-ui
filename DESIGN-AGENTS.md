# Design Principles for Agents

This document captures actionable UI design guidance distilled from
*Refactoring UI* (Adam Wathan & Steve Schoger). Use it when designing or
reviewing plim-ui components, docs pages, and tokens.

The main [`AGENTS.md`](./AGENTS.md) covers architecture and implementation.
This file covers **visual design decisions**.

If guidance here conflicts with accessibility requirements (WCAG, ARIA,
keyboard support), **accessibility wins**.

---

## How to use this document

1. Prefer design tokens (`--plim-*`) over hard-coded values.
2. Favour hierarchy, spacing, and contrast before adding decoration.
3. Keep APIs composable — visual polish should not require markup hacks.
4. When in doubt, remove noise rather than add ornament.

---

## 1. Starting from scratch

### Start with a feature, not a layout

Design a real piece of functionality first (for example a search form), not the
app shell (nav, sidebar, page grid). Shell decisions are easier once you know
what the feature needs.

### Detail comes later

Early on, ignore typeface minutiae, shadows, and icon polish. Work in
grayscale first so **spacing, contrast, and size** establish hierarchy before
colour is introduced.

### Don't design too much up front

Work in short cycles: design a simple version → build it → iterate on real
behaviour and edge cases. Design the **smallest useful version** first.

### Be a pessimist about scope

Do not imply functionality you are not ready to build. Ship the simple version;
add "nice-to-have" visuals later.

### Choose a personality

Every interface has a tone (professional, playful, minimal, etc.). In plim-ui
that personality comes from:

- **Typography** — neutral sans for UI; avoid decorative faces for controls.
- **Colour** — primary accent, neutral surfaces, semantic accents.
- **Border radius** — sharper vs. rounder shapes change feel significantly.
- **Depth** — flat vs. elevated; shadows vs. borders vs. surface shifts.

Document personality choices in tokens, not one-off component styles.

### Limit your choices

Decision fatigue slows design and creates inconsistency. Define scales up front
(spacing, type, colour, radius, shadow) and **pick from the scale** instead of
nudging arbitrary pixel values.

---

## 2. Hierarchy is everything

Visual hierarchy — how important elements appear relative to one another — is
often more important than superficial styling.

### Not all elements are equal

When everything competes for attention, the UI feels noisy. Deliberately
**de-emphasize** secondary and tertiary content so primary content stands out.

### Size isn't everything

Avoid using font size alone for hierarchy. Combine:

- **Font weight** (400–500 body, 600–700 emphasis)
- **Colour** (primary text, muted secondary, subtle tertiary)
- **Size** (use sparingly for headlines)

Practical defaults for UI copy:

| Role | Treatment |
| --- | --- |
| Primary | Dark text, normal or medium weight |
| Secondary | Muted colour (`--plim-color-text-muted`) |
| Tertiary | Subtle colour (`--plim-color-text-subtle`) |

Avoid font weights below 400 for small UI text.

### Don't use grey text on coloured backgrounds

Light grey works on white because contrast is reduced. On coloured surfaces,
hand-pick a **tinted** secondary colour (same hue, adjusted saturation/lightness)
instead of `opacity` on white — washed-out text looks disabled.

### Emphasize by de-emphasizing

If the primary element won't stand out, soften competing elements (inactive nav
items, sidebars, metadata) rather than over-styling the hero.

### Labels are a last resort

Prefer self-explanatory values (`12 left in stock` vs `In stock: 12`). When
labels are needed, treat them as **supporting** content: smaller, lower
contrast, lighter weight. Emphasize the data.

### Separate visual hierarchy from document hierarchy

Semantic heading levels (`h1`–`h6`) do not have to look large. Style for visual
hierarchy; pick HTML elements for accessibility semantics independently.

### Balance weight and contrast

Heavy elements (bold text, solid icons) feel emphasized. Compensate with **lower
contrast** on icons and secondary controls. Thin borders with soft colours may
need **heavier stroke weight** to remain visible without harsh dark lines.

### Semantics are secondary for actions

Action hierarchy matters more than verb semantics alone:

| Level | Treatment |
| --- | --- |
| Primary | Solid, high-contrast (e.g. primary button) |
| Secondary | Outline or lower-contrast fill |
| Tertiary | Link-like, unobtrusive |

Destructive actions are not automatically primary — use strong destructive
styling only when destruction is the main action (e.g. confirm step).

---

## 3. Layout and spacing

### Start with too much white space

Add generous space first, then remove until it feels right — not the reverse.
Cramped UIs rarely look intentional.

Dense layouts are valid (dashboards), but make density a **deliberate** choice.

### Establish a spacing and sizing system

Use a constrained scale with **~25%+ jumps** between steps. Linear scales
(4px, 8px, 12px…) make adjacent values too similar at large sizes and too
coarse at small sizes.

plim-ui uses `--plim-space-*` tokens — always prefer them over raw pixels.

### You don't have to fill the whole screen

Use only the width a component needs. Narrow forms can stay narrow; split into
columns for supporting content instead of stretching inputs.

Design mobile-first (~400px) when responsiveness is unclear.

### Grids are overrated

Grids help, but not every element should be fluid percentage width. Sidebars,
avatars, and controls often need **fixed** widths; let main content flex.

Use `max-width` and shrink only when necessary — don't size to grid columns
when a fixed optimal width exists.

### Relative sizing doesn't scale

Relationships like `2.5em` headlines relative to body copy break across
breakpoints. Tune headline, body, and padding **independently** per context.

### Avoid ambiguous spacing

Space **within** a group must be smaller than space **between** groups. Applies
to form fields, section headings, bullet lists, and horizontal clusters.

---

## 4. Designing text

### Establish a type scale

Avoid ad-hoc font sizes (10, 11, 13, 15…). Define a hand-crafted scale and
stick to it. plim-ui uses `--plim-font-size-*`.

Use `px` or `rem` for scale values — avoid `em` nesting that produces off-scale
computed sizes.

### Use good fonts

For UI, neutral sans-serifs are safest. Prefer families with multiple weights
(5+). Optimize for legibility at small sizes (avoid ultra-condensed UI faces).

plim-ui default: `--plim-font-family` (Inter stack).

### Keep line length in check

Body copy: **45–75 characters** per line (~20–35em width). Wider content areas
can still constrain paragraph width.

### Baseline, not center

When mixing font sizes on one line, align by **baseline**, not vertical center.

### Line-height is proportional

- Long/wide lines → taller line-height (~1.5–2)
- Short/narrow lines → shorter line-height
- Large headlines → line-height can approach 1

plim-ui: `--plim-line-height-tight`, `--plim-line-height-normal`.

### Not every link needs a colour

In link-heavy interfaces, default links can use weight or darker text; reserve
accent colour for primary actions. Underline or colour on hover for tertiary
links.

### Align with readability in mind

Default to **left-align** body text. Center short headlines only. Right-align
numbers in tables for comparison.

### Letter-spacing

Trust the typeface by default. Tighten letter-spacing for large headlines;
**increase** letter-spacing for all-caps labels.

---

## 5. Working with colour

### Prefer HSL thinking

HSL (hue, saturation, lightness) matches how we adjust colours. When defining
tokens, think in terms of hue families and lightness steps — not one-off hex
tweaks.

### You need more colours than you think

A usable palette includes:

1. **Neutrals** — 8–10 grey/surface steps for text, borders, backgrounds
2. **Primary** — 5–10 steps for actions and brand accent
3. **Semantic accents** — success, warning, danger (+ optional category colours)

### Define shades up front

Pick base, darkest, and lightest; fill intermediate steps (e.g. 100–900).
Avoid runtime `lighten()`/`darken()` that spawn near-duplicate shades.

Do not rely purely on math — trust your eyes for final tweaks.

### Don't let lightness kill saturation

Lighter/darker variants often need **more saturation** to avoid washed-out
tints. Rotate hue slightly (≤20–30°) to brighten/darken without losing
intensity.

### Greys don't have to be grey

Neutral greys can carry a subtle warm or cool hue for personality. Increase
saturation at extremes of the grey scale.

### Accessible doesn't have to mean ugly

WCAG contrast targets: **4.5:1** normal text, **3:1** large text.

Techniques:

- Flip contrast — dark text on light tinted background vs white on dark fill
- Rotate hue toward brighter hues for secondary text on coloured panels
- Never rely on colour alone — add icons, labels, patterns

### Don't rely on colour alone

Support colour with shape, text, icons, or position (especially success/error
states and charts).

---

## 6. Creating depth

### Emulate a light source

Light comes from above. Raised elements: lighter top edge, shadow below.
Inset elements (inputs, wells): darker top inner shadow, lighter bottom inner
edge.

Use hand-picked border/shadow colours — semi-transparent white overlays can
desaturate underlying fills.

### Use shadows to convey elevation

Shadow size/blur communicates z-axis:

| Elevation | Use |
| --- | --- |
| Small | Buttons, subtle lift |
| Medium | Dropdowns, popovers |
| Large | Modals, dialogs |

Define a fixed shadow scale (`--plim-shadow-sm/md/lg`). Match shadow to intended
z-index, not decoration.

### Shadows can have two parts

Combine a soft large shadow (direct light) with a tight darker shadow (ambient
occlusion). Reduce the tight shadow at higher elevations.

### Even flat designs can have depth

Use **surface lightness** (lighter = raised, darker = inset) and short solid
offsets without blur. plim-ui is predominantly flat-token-driven — prefer
surface/border shifts before heavy shadows.

### Overlap elements to create layers

Offset cards across background transitions or parent edges to suggest layers.
Use background-coloured gaps between overlapping images to avoid visual clash.

---

## 7. Working with images

- Use professional or high-quality stock photography — placeholders rarely survive swap-in.
- Ensure text-on-image contrast via overlay, lowered image contrast, colour wash, or subtle text glow.
- Respect intended asset sizes — don't scale icons or screenshots beyond readable bounds.
- User-uploaded content: fixed aspect containers, `object-fit: cover`, subtle inner shadow to preserve shape on similar backgrounds.

---

## 8. Finishing touches

- **Supercharge defaults** — purposeful icons, styled quotes, custom checkboxes (plim-ui form controls).
- **Accent borders** — small colour bars on cards, nav, alerts (use `--plim-color-primary` or semantic tokens).
- **Decorate backgrounds sparingly** — alternate surface tokens, subtle patterns; keep contrast low.
- **Empty states matter** — first-run screens deserve hierarchy, illustration, and clear CTA; hide inapplicable chrome.
- **Use fewer borders** — prefer spacing, surface colour, or shadow to separate groups.
- **Think outside the box** — break grids when it improves clarity; don't force full-width layouts.

---

## 9. Mapping to plim-ui

When implementing or reviewing plim-ui:

| Refactoring UI concept | plim-ui token / pattern |
| --- | --- |
| Spacing scale | `--plim-space-*` |
| Type scale | `--plim-font-size-*`, `--plim-font-weight-*`, `--plim-line-height-*` |
| Neutral surfaces | `--plim-color-background`, `--plim-color-surface`, `--plim-color-surface-raised` |
| Text hierarchy | `--plim-color-text`, `--plim-color-text-muted`, `--plim-color-text-subtle` |
| Primary actions | `plimButton` primary variant |
| Secondary actions | `plimButton` secondary variant |
| Form fields | `--plim-color-field-*`, `--plim-input-height` |
| Focus | `--plim-focus-ring-*` |
| Elevation | `--plim-shadow-sm/md/lg`, `--plim-elevation-modal` |
| Scrollbars | `_scrollbar.scss` thin mixin on `html` and scrollable panels |
| Keyboard hints | `.plim-kbd` (global utility in `styles.scss`) |
| Select option states | `--plim-color-select-option-*` |
| Semantic callout surfaces | `--plim-color-primary-surface*`, `--plim-color-success-surface*` |
| Radius | `--plim-radius-*` |
| Motion | `--plim-duration-*`, `--plim-ease-default`; respect `prefers-reduced-motion` |

**Do not** introduce arbitrary hex/rgb values in components when a token exists
or a new token should be added to `_tokens.scss`.

### Style file ownership

- One SCSS file next to the component, directive, or page that uses it (`styleUrl`).
- Shared tokens, theme, and mixins stay in `projects/ui/src/styles/` (`_field-control.scss`,
  `_field-icons.scss`, `_toggle-control.scss`, `_option-list.scss`, `_scrollbar.scss`, `_table.scss`).
- Shared docs primitives stay in `projects/docs/src/app/styles/` (`_docs-page.scss`,
  `_docs-code-theme.scss`). Form preview helpers stay in `pages/form/_form-docs-preview.scss`.
- App shell chrome belongs in `app.scss`. Do not split one-owner styles into extra shared
  partials.
- Docs page preview wrappers use `{page}-docs-preview` (static demos) or `{page}-docs-demo`
  (interactive demos such as the sidebar push/overlay example).

---

## 10. Agent checklist (before shipping UI)

- [ ] Hierarchy clear without relying on size alone?
- [ ] Spacing from `--plim-space-*` scale; groups visually unambiguous?
- [ ] Colours from tokens; semantic states not colour-only?
- [ ] Contrast meets WCAG for text and interactive states?
- [ ] Keyboard focus visible; ARIA relationships correct?
- [ ] Works in light and dark theme (`data-theme`)?
- [ ] `prefers-reduced-motion` and `forced-colors` considered where motion/colour carry meaning?
- [ ] Scrollable regions use the thin scrollbar mixin where custom scrollbars are needed?
- [ ] No unnecessary borders; surfaces/spacing do separation work?
- [ ] Empty layout slots (sidebar header/footer) do not leave phantom dividers?
- [ ] Component API small and composable (SOLID — single responsibility per component)?

---

## Source

Principles adapted from *Refactoring UI* by Adam Wathan and Steve Schoger.
This document is an internal agent reference for the plim-ui project, not a
substitute for the original book.
