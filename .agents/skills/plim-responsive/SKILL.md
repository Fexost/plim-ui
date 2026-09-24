---
name: plim-responsive
description: >-
  Responsive design as contextual adaptation with Plim Design. Use when adapting
  layouts, navigation, tables, forms, dialogs, sidebars, toolbars, typography,
  or density across viewport widths, input methods, zoom, and content length,
  or when reviewing how an interface behaves on small, intermediate, or large
  screens.
license: MIT
---

# Plim Responsive

> **Responsive design changes the composition when the context changes.** It does not merely reduce dimensions.

Adaptability (§8.9 of [`philosophy.md`](../../philosophy/philosophy.md)) means the interface stays appropriate as viewport, device, input, content, language, accessibility settings, expertise, and task complexity change. Breakpoints are a tool, not the goal. Builds on [`plim-design`](../plim-design/SKILL.md); framework-neutral.

## When to use

- Designing layouts that must work across contexts.
- Fixing layouts that break, cram, or hide capability at some sizes.
- Invoked by `plim-beautify` (step 9) and `plim-review` (Responsiveness lens).

## Context is more than width

| Dimension | Why it changes the design |
| --- | --- |
| Available width and height | How much can be shown side by side; what must stack or collapse |
| Container size | Components placed in narrow panels need to adapt regardless of viewport |
| Input method | Touch has no hover and needs larger targets; keyboard needs visible, reachable controls; fine pointers allow denser controls |
| Zoom and text size | A zoomed desktop behaves like a narrow screen; text grows independently of layout |
| Content length and language | Translations expand; user content varies; labels wrap |
| Orientation | Landscape phones have very little height |
| Expertise and frequency | Daily expert users on large screens may need more density, not less |

## Reasoning procedure

1. **Decide what must survive everywhere.** The primary task, the information needed to do it, and the actions that complete it. These are never hidden behind extra steps on smaller screens without good reason.
2. **Decide what may adapt.** Secondary information, supporting panels, and less frequent actions can reorder, collapse, move, or be progressively disclosed.
3. **Find where the composition breaks.** Resize continuously and watch for the points where content stops working: lines too long, labels colliding, columns unreadable. Put breakpoints there. Don't pick them from a list of devices.
4. **Choose an adaptation per region**, not one global rule (see strategies below).
5. **Check continuity.** The user's mental model should survive the change (§8.14): the same things keep the same names, order, and relative priority, and state (selection, scroll position, form input) is preserved across a resize or rotation.
6. **Check states at each context.** Apply the state model in [`plim-design`](../plim-design/SKILL.md) at each context. Empty, loading, error, long content, and dialogs at narrow widths are where responsive designs usually fail, and a layout change is itself a transition that should preserve state.

## Adaptation strategies

| Strategy | Use when | Watch out for |
| --- | --- | --- |
| **Reflow** (columns stack) | Content is sequential and order is obvious | Stacked order must match priority, not source order by accident |
| **Reprioritise** (change order or emphasis) | Priority differs by context, for example a primary action moves within reach | Don't reorder so much that users lose their place between devices |
| **Progressive disclosure** (collapse, expand, "more") | Secondary content or advanced options | Never hide the primary task's essentials; disclosure controls need clear labels |
| **Relocate** (sidebar becomes drawer, toolbar actions move to an overflow menu) | Persistent chrome would crowd content | Keep the most used actions visible; overflow menus hide discoverability |
| **Transform** (a component changes form) | The same data needs a different presentation, such as a table becoming a list of rows with key fields | Transforming loses capabilities like comparison and sorting; keep them available |
| **Resize** (scale type, spacing, or media) | Proportions, not structure, are the issue | Resizing alone is shrinking; it is rarely sufficient |

## Surfaces

- **Navigation.** Choose by the number of destinations and how often people switch. A few primary destinations can stay visible; many can move to a drawer or menu. Don't hide everything behind a single menu when two or three destinations would fit. Keep the current location visible.
- **Tables.** Start from the task. If users compare across rows, preserve the table: prioritise columns, keep the identifying column pinned, allow horizontal scrolling of the remainder with a visible cue, and offer column choice. If users mostly look up single records, a list of rows with the key fields and a detail view may serve better. Don't automatically convert tables to cards: cards destroy scanning and comparison.
- **Forms.** Single column on narrow screens; related short fields can share a row on wider ones. Keep labels visible. Use the right input types so touch keyboards match. Keep the submit action reachable, and don't stretch inputs across wide screens; field width should hint at expected length.
- **Dialogs.** On narrow screens a dialog may become full-screen or a bottom sheet. Keep the title, the close control, and the primary action visible without scrolling past long content. Very long dialogs may indicate the content should be a page.
- **Sidebars and panels.** Docked beside content on wide screens, overlaying or collapsing on narrow ones. Decide whether closing the panel preserves its state.
- **Toolbars.** Keep the most frequent actions visible; move the rest to an overflow menu in a stable order. Icon-only compaction needs accessible names and, ideally, tooltips.
- **Typography.** Adjust sizes by role and context rather than scaling everything proportionally. Keep body line length readable (roughly 45 to 75 characters) on wide screens instead of stretching text across the viewport.
- **Density.** Touch contexts need larger targets and spacing; pointer contexts used by experts can be denser. Density can differ by input as well as by width.

## Large, small, and in between

- **Large displays:** use the space for supporting content, side-by-side detail, or more data for expert tasks, not for stretching content to fill the width. Constrain reading widths for prose. Generous empty space is legitimate when it is the product's character; space on its own is not what makes something luxurious.
- **Small displays:** focus on the primary task; move chrome out of the way; keep actions within reach; mind landscape height.
- **Intermediate widths** (tablets, split screens, zoomed desktops, narrow windows) are the most neglected. Test them explicitly; this is where two-column layouts crush and navigation patterns collide.

## Interaction changes with input

- Hover is unavailable on touch. Anything revealed on hover must also be available by tap and keyboard focus.
- Touch needs adequately sized and spaced targets; see [`plim-accessibility`](../plim-accessibility/SKILL.md).
- Keyboard users on any size need a visible, logical path; relocated content (drawers, overflow menus) must remain reachable and manage focus.
- Gestures need visible alternatives.

## Responsive accessibility

Zoom and text scaling turn wide screens into narrow ones. Content should reflow at 320 CSS px width without two-dimensional scrolling, except for content that is inherently two-dimensional, such as data tables. Don't lock orientation. Responsive and accessible behaviour should be designed together.

## Failure modes

- Shrinking everything instead of recomposing.
- Hiding capability on small screens that users genuinely need there.
- Putting all navigation behind one menu by reflex.
- Converting every table into cards.
- Breakpoints chosen by device names rather than by where content breaks.
- Testing only one phone width and one desktop width.
- Stretching content across wide screens.
- Hover-only affordances.
- Losing state or position when the layout changes.

## Completion criteria

- The primary task works at every tested context without extra hurdles.
- Each region has a deliberate adaptation, and priority is preserved when stacking.
- Narrow, intermediate, and wide widths, zoom, and touch and keyboard input have been considered.
- States (empty, loading, error, long content, dialogs) hold up at narrow widths.
- The user's mental model and state survive layout changes.
