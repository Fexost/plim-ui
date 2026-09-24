---
name: plim-accessibility
description: >-
  Inclusive design reasoning with Plim Design: how accessibility shapes
  hierarchy, colour, typography, focus, interaction, states, and layout. Use
  when designing or improving accessibility, auditing semantics, keyboard,
  focus, contrast, forms, dynamic content, motion, zoom, or touch targets, or
  when a visual choice conflicts with accessibility.
license: MIT
---

# Plim Accessibility

Accessibility belongs inside design, not after it (§8.10, §22 of [`philosophy.md`](../../philosophy/philosophy.md)). WCAG's four principles (perceivable, operable, understandable, robust) are the technical baseline. Plim asks a broader question:

> **Can people with different abilities, contexts, and ways of interacting comfortably understand and use this?**

The workflow is `understand → design inclusively → build → verify`, not `design → build → audit`. Builds on [`plim-design`](../plim-design/SKILL.md). Framework-neutral: use whatever the stack provides for semantics and focus management.

## When to use

- Designing any interface (as a lens throughout, not a final step).
- Improving or auditing accessibility of an existing interface.
- Invoked by `plim-beautify` (step 11) and `plim-review` (Accessibility lens).
- Whenever an aesthetic choice and an accessibility need appear to conflict.

## How accessibility shapes design decisions

Most accessibility is decided at design time, by choices that also affect everyone:

- **Hierarchy and structure.** A clear visual hierarchy should have a matching document structure: one page heading, headings in order, landmarks for main regions. Visual size and heading level are separate decisions; choose the level for structure and style it for the visual hierarchy.
- **Colour.** Contrast is a hierarchy tool with a floor. Secondary text can be quieter, but not below readable contrast (WCAG AA: 4.5:1 for normal text, 3:1 for large text and for meaningful non-text elements like input borders, focus indicators, and icons). Status needs a second channel: text, icon, or shape, never colour alone.
- **Typography.** Text must survive user scaling and zoom without clipping or overlap. Fixed-height containers around text, truncation of essential content, and tiny type are design decisions that exclude.
- **Focus.** The focus indicator is part of the visual language, not a browser artefact to suppress. Design it to fit the system, with enough contrast against every surface it appears on.
- **Targets and density.** Dense layouts are allowed, but interactive targets need enough size or spacing to hit reliably (WCAG 2.2 AA sets a 24×24 CSS px minimum or equivalent spacing; 44×44 is a comfortable touch size). Density is not an excuse for tiny controls.
- **Motion.** Motion that explains change is useful; motion that loops, parallaxes, or flashes can harm. Honour reduced-motion preferences by removing non-essential motion and softening essential transitions.
- **Language and errors.** Plain labels, specific error messages that say how to fix the problem, and instructions that don't rely on shape, position, or colour alone ("click the green button").
- **Semantics.** Something that looks like a button should be a button. Semantic honesty (§8.11) applies to the accessibility tree as much as to the pixels.

## Guidance by topic

### Semantics, names, and structure

- Prefer native elements (`button`, `a`, `input`, `select`, `table`, `dialog`, headings, lists, landmarks). They bring keyboard behaviour and roles for free.
- Use ARIA only when native semantics cannot express the pattern, and then follow the established pattern completely. Incorrect ARIA is worse than none.
- Every interactive element needs an accessible name that matches its visible label where one exists. Icon-only controls need a name.
- Links navigate; buttons act. Don't swap them for styling reasons.

### Keyboard and focus

- Every action reachable by pointer must be reachable by keyboard, in a logical order that follows the visual reading order.
- Composite widgets (menus, tabs, listboxes, grids) use arrow keys within and Tab between, per their established patterns.
- Manage focus on context changes: move focus into an opened dialog and return it on close; move focus sensibly after deleting an item or changing route; never leave focus on a removed element.
- Provide a way to skip repeated navigation on content-heavy pages.
- Focus must always be visible, including on custom components and in every theme.

### Forms, validation, and recovery

- Visible labels, not placeholder-only labels. Group related fields with a legend.
- Mark required fields in text or a symbol with explanation, not colour alone.
- Validate at a humane moment (on submit or on blur, not on every keystroke for most fields). Associate each error with its field, describe how to fix it, and, on submit, move focus to or summarise the errors.
- Preserve entered data on error. Offer undo or confirmation for destructive actions.

### Dynamic content and states

This applies the state model in [`plim-design`](../plim-design/SKILL.md) to how states and transitions are perceived and operated.

- Loading, success, and error changes that happen without a page load must be perceivable: announce important updates through a live region or by moving focus, in proportion to their importance. Don't announce everything.
- Loading states need a text alternative (for example, a busy state or a status message); skeletons alone are silent to screen readers.
- Disabled controls should be genuinely unavailable. Where the reason isn't obvious, explain it; consider leaving the control enabled and explaining on activation instead.

### Components that commonly go wrong

- **Dialogs:** labelled, focus moved in and contained, Escape closes where appropriate, focus restored on close, background inert.
- **Menus and popovers:** trigger exposes its expanded state; arrow-key navigation; Escape closes and returns focus.
- **Tables:** real table markup for tabular data, header cells with scope, a caption or label; sortable headers announce sort state. Don't use tables for layout, and don't fake tables with divs.
- **Tooltips:** supplementary only, reachable by keyboard focus, dismissible; never the only place essential information lives.

### Zoom, reflow, and responsive accessibility

- Content should reflow without two-dimensional scrolling at 320 CSS px width (equivalent to 400% zoom on a 1280px screen), except where two-dimensional layout is essential, such as data tables or maps.
- Zoomed desktop users experience your narrow layout. Responsive decisions are accessibility decisions; see [`plim-responsive`](../plim-responsive/SKILL.md).
- Don't lock orientation unless it is essential.

## Requirements, recommendations, and human judgment

> **Accessibility is a foundational constraint, not a preference. Human judgment operates within that constraint.**

People decide product intent, expression, brand direction, and interaction style (Law 8). Applicable accessibility requirements constrain **how** that intent is implemented, not **what** the intent may be. Almost every legitimate direction has an accessible form; the constraint usually changes a detail, not the direction.

The guidance in this skill mixes three kinds of statement. Classify before you insist on anything.

| Kind | What it is | Examples | Who decides |
| --- | --- | --- | --- |
| **Requirement** | A criterion that applies to this content at the product's conformance target: the target the product has stated (legal, contractual, or organisational), or WCAG 2.2 Level AA when none is stated | Text contrast 4.5:1 (3:1 for large text); 3:1 for meaningful non-text elements; visible keyboard focus; every action operable by keyboard; accessible names; status not by colour alone; a way to pause motion that runs longer than five seconds; reflow at 320 CSS px; 24×24 CSS px targets or equivalent spacing | Not negotiable by preference. Humans choose among the ways to meet it |
| **Above-floor improvement** | Makes the experience better beyond the requirement | AAA contrast; 44×44 touch targets; honouring reduced-motion preferences for non-essential motion; visible labels beside icons that already have accessible names; validation timing; enhanced focus appearance | Recommend it and explain the benefit. Apply by default where it doesn't conflict with a decision; a human may decline it |
| **Preference** | Taste presented as accessibility | "Grey text feels less readable to me" when it passes; "cards are more accessible than lists" | Don't raise it as accessibility |

A requirement failure is separate from its severity. However minor its consequence looks, it is addressed, recorded as open, or explicitly deferred by a human, and no outcome, including "no change" or "polish only", leaves it silently in place (see [`plim-design`](../plim-design/SKILL.md), "Outcomes").

Whether a requirement applies is a question of fact: is this text, is it interactive, is the motion essential, is the image decorative? A human can supply those facts, or tell you the product's conformance target. Choosing a visual direction never changes either one.

### When an explicit human direction conflicts with a requirement

If a human has clearly chosen a visual or interaction direction, and you know it cannot satisfy an applicable requirement as specified:

1. **Confirm it is a requirement,** not an above-floor improvement or a preference. If it isn't, the human's direction stands: note the trade-off once and implement it.
2. **Explain the conflict specifically:** which requirement, which part of the direction fails it, and who is excluded and how.
3. **Propose accessible alternatives** that keep as much of the direction as possible. Offer more than one when you can; they are the human's to choose between.
4. **Implement the chosen accessible alternative,** together with the rest of the direction unchanged. Only the failing detail is constrained.
5. **If the human rejects every accessible alternative,** do not implement the failing part as specified. Say plainly that you can't deliver that part in a form that excludes people, implement everything else, and record the unresolved part as an Open entry in the product's decision record ([`decision-records.md`](../plim-design/decision-records.md)): what it is, which requirement it fails, and the alternatives offered. The human keeps authority over their product; you don't author the exclusion or present it as acceptable.

Never resolve the conflict silently in either direction. Don't quietly weaken the requirement to match the design, and don't quietly swap in your accessible alternative in place of what the human asked for.

This constraint is not a veto over design choices. Don't reject a direction because it is unusual, sparse, dense, expressive, or unlike your defaults. Don't turn a requirement into a prescription for one look: contrast can be met in a pale palette, visible focus in any visual language, target size in a dense layout.

## Resolving conflicts between aesthetics and accessibility

When a visually attractive choice fails a requirement, the requirement holds and the goal is to keep as much of the visual intent as possible. When it only misses an above-floor improvement, recommend the improvement and let the human decide.

1. **Name the aesthetic intent.** What is the treatment trying to achieve: calm, lightness, focus, brand expression?
2. **Name the access need.** Who is excluded, and how? Is it a requirement or an improvement?
3. **Find a treatment that serves both.** Usually one exists.

| Attractive but exclusionary | Keep the intent with |
| --- | --- |
| Pale grey text for a calm feel | Hierarchy through size, weight, and spacing, with text at readable contrast |
| Removing focus rings for cleanliness | A focus indicator designed in the system's language, shown for keyboard focus |
| Icon-only toolbar for minimalism | Accessible names (required); tooltips or visible labels where discoverability matters (recommended) |
| Placeholder as label for compactness | A persistent visible label, styled in the system's language |
| Status shown by coloured dot only | Dot plus text label, or distinct icon shapes |
| Text over a busy photograph | A scrim, a solid panel, or repositioned text |
| Hover-revealed actions for tidiness | Actions visible on focus and always available on touch, or a visible overflow menu |
| Constant ambient animation for liveliness | A way to pause or stop it (required); reduced under reduced-motion preferences (recommended) |

Explain the resolution to the user: what you changed, why, whether it met a requirement or an improvement, and what visual quality you preserved.

## Verification

Do not claim compliance you have not tested. State what you verified and what you inferred.

- **Keyboard walk:** Tab through the whole flow; every action reachable, order logical, focus always visible, no traps.
- **Screen reader smoke test** where possible: headings, landmarks, names, state changes announced.
- **Zoom and text scaling:** 200% text size and 400% zoom; no clipped or overlapping content, no lost functionality.
- **Contrast:** check text and meaningful non-text elements in every theme and state (hover, disabled, error).
- **Reduced motion:** non-essential motion stops.
- **Forced colours or high-contrast mode**, where the platform supports it: boundaries and focus still visible.
- **Automated checkers** catch a fraction of issues. Use them, but never treat a clean automated report as proof of accessibility.

## Failure modes

- Treating accessibility as a final audit or a compliance checkbox.
- Adding ARIA to fix what a native element would have solved.
- Suppressing focus styles, or making them invisible on some surfaces.
- Beautifying contrast away.
- Announcing every change, or none.
- Building accessible defaults and inaccessible error, loading, and empty states.
- Claiming "WCAG compliant" without testing.
- Weakening or reinterpreting a requirement because a human prefers the result, or doing so silently.
- Presenting an above-floor improvement or a preference as a requirement.
- Using accessibility to reject a legitimate direction instead of finding its accessible form.

## Completion criteria

- Structure, names, and semantics match the visual design.
- Every action works by keyboard with visible focus and managed focus on context changes.
- Contrast and non-colour status hold in all themes and states.
- Forms explain errors and preserve input.
- Dynamic changes are perceivable in proportion to their importance.
- Zoom, text scaling, and reduced motion have been checked, and the checks are reported honestly.
- Any conflict between a human direction and a requirement was explained, and resolved with an accessible alternative or recorded as open.
