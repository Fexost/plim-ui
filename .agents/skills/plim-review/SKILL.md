---
name: plim-review
description: >-
  Critique an interface with Plim Design without modifying it. Use for design
  reviews, UI audits, "what's wrong with this?", "should this change?", checking
  hierarchy, semantic honesty, states, accessibility, responsiveness, identity,
  or generic AI-generated patterns. Also provides the audit step for plim-beautify.
license: MIT
---

# Plim Review

Diagnose before prescribing. This skill produces findings, not edits. It builds on [`plim-design`](../plim-design/SKILL.md); load that first for the underlying concepts (attention, semantic honesty, distinctions, the state model, edges).

The most important output of a review is often not the list of problems. It is the separation of **real problems** from **preferences**, and a clear statement of **what already works and must be preserved**.

## When to use

- The user asks for a review, audit, critique, or "what's wrong with this".
- Before a beautify or redesign, to decide whether and what to change.
- To answer "should this be changed?" A review may conclude that it should not.

Do not edit code in this skill. If the user then wants changes, hand off to [`plim-beautify`](../plim-beautify/SKILL.md) or implement with [`plim-design`](../plim-design/SKILL.md).

## Procedure

1. **Establish context.** What is the product, who uses it, and what is the primary task on this screen? If you cannot tell, state the assumption you are reviewing against. A review against the wrong purpose is worthless. When evidence is thin (code only, no brand guidance, no research), or the product is too large to review whole, see [`evidence.md`](evidence.md).
2. **Read the attention hierarchy first.** Before any detail, note what gets attention and in what order, whether it goes to one focal point or is distributed. Compare that with what the task needs now. Where priority changes with state (an error, an alert, an empty result), read those states too. This observation explains most layout problems.
3. **Inventory the system.** Identify the tokens, components, and conventions in use, so findings are judged against the product's own language rather than your defaults. Read the product's decision record if it has one: decided directions aren't findings, recorded conventions are vocabulary, and open entries are reported again ([`decision-records.md`](../plim-design/decision-records.md)).
4. **Walk the lenses** below. Not every lens applies to every screen; skip those that don't and say so if it matters.
5. **Classify every finding** by severity and intent.
6. **Record what works.** Name the strengths that any change must preserve.

## Lenses

| Lens | Core question | What counts as evidence |
| --- | --- | --- |
| **Purpose** | Is the purpose of the page clear, and does the design serve it? | Can you state the page's job from the screen alone? |
| **Hierarchy** | What gets attention, in what order? Is that appropriate to the task now? | The loudest elements vs the most important ones; prominence that doesn't match importance. |
| **Information architecture** | Is information grouped and ordered meaningfully, and named clearly? | Related things near each other, unrelated things separated; labels in the users' and domain's words; one name per concept; actions and messages that say what happens and what to do. See [`language.md`](../plim-design/language.md). |
| **Interaction** | Are affordances clear? Is system status visible? Can people recover from mistakes? Does automation match consequence and reversibility? | Clickable things look clickable and vice versa; feedback after actions; undo, cancel, confirmation in proportion to consequence; what the system does on its own and whether people can see and change it. Judged with "Automation and agency" in `plim-design`. |
| **Visual system** | Do typography, spacing, colour, shape, borders, and elevation cohere? | Values drawn from a system vs one-offs; the same meaning expressed the same way. |
| **Semantic honesty** | Do visual distinctions communicate real distinctions? | Differently styled things that are functionally identical; emphasis without importance; containers without units. |
| **Attention** | Is emphasis allocated to what matters now? | Count accent colour uses, badges, alerts, shadows, animated elements. Where attention is distributed, check it is ordered rather than equally loud; where several urgent states can coexist, check the serious one stays findable. |
| **States** | Are the states this design meets handled, including likely combinations and transitions? | Judged against the state model in `plim-design`. Inspect code if screens are unavailable. |
| **Accessibility** | Can it be perceived, operated, understood, and used with assistive technology? | Semantics, names, focus, keyboard path, contrast, non-colour status. Depth via [`plim-accessibility`](../plim-accessibility/SKILL.md). |
| **Responsiveness** | Does it adapt rather than merely shrink? | What happens at narrow, intermediate, and wide widths, and with zoom. Depth via [`plim-responsive`](../plim-responsive/SKILL.md). |
| **Identity** | Does it feel like this product rather than a generic template? Is its expression at the level the product calls for? Does any unconventional behaviour earn its learning cost? | Brand character present and coherent, in words as well as visuals (voice, and tone by state); ad-hoc stock patterns (card soup, gradient hero, uniform pills) that aren't part of the product's system; or the opposite, a muted, interchangeable interface where the brand or purpose calls for character. See [`anti-patterns/`](../../anti-patterns/README.md) for how to tell a pattern from a legitimate choice. |
| **Edges** | What happens outside the happy path? | Long labels, empty and huge datasets, slow or failed requests, missing images, localisation. |

When hierarchy is weak, go one level deeper and identify the cause: typography, spacing, grouping, contrast, layout, density, interaction state, or information architecture. "The hierarchy is weak" is an observation; "the section headings and the metadata share the same weight and colour, so sections don't separate" is a finding.

## Classify findings

Not every imperfection is a defect. Classify each observation on two separate axes: **how much it matters** (severity) and **whether it was meant** (intent). They are independent. A choice can be deliberate and still cause a Critical problem: a brand's pale-grey body text is intentional and fails contrast.

### Severity

| Severity | Meaning | Test |
| --- | --- | --- |
| **Critical** | Blocks the task, excludes people, misleads, or risks harm or data loss. | Someone fails, is excluded, or is deceived. Examples: no keyboard access to a primary action; a destructive action with no confirmation or undo; status conveyed by colour alone on a critical alert. |
| **Important** | Causes real friction, misreading, or inefficiency, or a demonstrable gap against the product's evidenced identity or emotional intent, but the task is still possible. | An observable consequence you can describe: users likely miss the primary action; a table is slow to scan; a brand that its guidelines describe as warm reads as clinical. |
| **Polish** | A rough edge that lowers quality without harming use. | It must be one of two things: **inconsistent with the product's own system** (equivalent groups spaced differently, a hover state that doesn't match its siblings, a value off the scale), or an **objective craft defect** (misalignment, clipped or overflowing text, a broken optical balance you can point to, an unhandled state). |
| **None** | Nothing needs to change. | Strengths, intentional choices that work, and preferences. |

Taste alone is never Polish. "This would look better with more space" is a preference unless you can point to the system it departs from or the defect it causes. If you cannot describe a consequence, the finding is not Critical or Important.

### Intent

| Intent | Meaning | Evidence required |
| --- | --- | --- |
| **Intentional** | A deliberate choice whose purpose is served. Record it so nobody "fixes" it. | You can name the purpose *and* see that it is achieved: dense layout that expert monitoring needs and that remains scannable; a brand typeface that reads well at the sizes used; asymmetry that actually leads the eye in the intended order. A plausible reason that the design doesn't deliver is not enough. |
| **Accidental** | Ad-hoc or unconsidered. | It departs from the product's system, appears once, or has no discernible purpose. |
| **Unknown** | You can't tell. | Say so, and ask when it matters to the recommendation. |

Accessibility requirements are a third, separate label, not a severity: a finding can be "Important, accidental; requirement". Severity says how much it matters; the requirement label says it must be addressed, recorded as open, or deferred by a human whatever the overall recommendation (see `plim-design`, "Outcomes", and [`plim-accessibility`](../plim-accessibility/SKILL.md)).

Combine them in the report: "Critical, intentional" means the purpose is real and the execution must change while keeping as much of that purpose as possible. "None, intentional" means leave it alone. A **personal preference** is an observation with severity None and no evidence either way; label it as preference or leave it out.

Judge system conventions as the system's vocabulary, not as anti-patterns by resemblance (see `plim-design`, "A documented system is the product's vocabulary"). A convention used as the system intends is at most a question about the system, not a defect on this screen.

## Evidence discipline

Every Critical or Important finding should state:

- **Observation:** what exactly you see, specific enough to locate
- **Consequence:** what it causes for the person
- **Principle:** which Plim law or principle it relates to
- **Direction:** the smallest change that would address it, stated as a direction, not a finished design

Say what the evidence is and how strong: a stated decision, the documented system, research, observable consistency, or your inference ([`evidence.md`](evidence.md), "What counts"). An identity finding without evidence of the intended identity is a question to ask, not an Important finding.

Avoid unanchored adjectives ("cluttered", "dated", "busy"). Translate them: "cluttered" becomes "eleven elements compete at the same visual weight in the header, so the page title doesn't read first."

## Report shape

```markdown
## Context
Purpose and primary task (stated or assumed), users, constraints.

## Attention hierarchy
What reads first, second, third, or how attention is distributed, and
whether that matches the task, including in states that shift priority.

## What works (preserve)
Strengths any change must keep.

## Findings
### Critical
### Important
### Polish
Each: observation, consequence, principle, direction, intent
(intentional / accidental / unknown), and "requirement" where one applies.

## Intentional choices that work
Unusual decisions that should stay, the purpose each serves, and the
evidence that it is served.

## Preferences (optional)
Clearly labelled as taste.

## Recommendation
One outcome from the scale in plim-design ("Outcomes"). Critical
findings and accessibility requirement failures are listed here
whatever the overall recommendation. Plus open questions that need
human judgment.

## Proposed record entries (only if any)
Decision-worthy events for the product's decision record: a convention
whose status you established, an open requirement, a deferred Critical
finding. Written only if the human asks.
```

Scale the report to the interface. A small component deserves a few lines, not every heading.

## "No significant issues" is a valid review

If the interface serves its purpose, its hierarchy matches its task, states are handled, and it is accessible, say so. List any genuine polish opportunities, and advise against change for its own sake. A review that manufactures problems to look thorough is itself a failure.

## Failure modes

- Reviewing against your own taste or current trends instead of the product's purpose and system.
- Listing symptoms without causes.
- Treating density, plainness, expression, or convention as defects without evidence.
- Reporting a design-system convention as an anti-pattern because it resembles one.
- Excusing a Critical problem because it was intentional, or calling something intentional without checking that its purpose is served.
- Filing taste as Polish.
- Skipping states and edges because only a screenshot was provided. Say what you could not assess.
- Missing accessibility because the visuals looked polished.
- Recommending replacement of a design system when extension would do.
- Presenting assumptions about users or brand as facts, or inventing evidence to support a finding.
- Recommending to the requester what only someone else can decide, without saying who.

## Completion criteria

- Context and the primary task are stated or explicitly assumed.
- The attention hierarchy has been described.
- Findings are classified by severity and intent, evidenced, and tied to principles.
- Strengths to preserve are named.
- Anything you could not assess (states you couldn't see, assistive-technology behaviour you couldn't test) is listed.
- The recommendation includes "change nothing" when that is the honest answer.
