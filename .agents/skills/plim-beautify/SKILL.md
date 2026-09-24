---
name: plim-beautify
description: >-
  Improve the visual quality of an existing interface with Plim Design while
  preserving its stack, design system, and identity. Use for requests like
  "make it beautiful", "make it premium", "make it modern", "polish this",
  "clean this up", or "make it look professional". Diagnoses before decorating.
license: MIT
---

# Plim Beautify

**Beautification is not decoration.** Beauty is an outcome of coherent, purposeful, carefully crafted decisions (§3 of [`philosophy.md`](../../philosophy/philosophy.md)). This skill improves an interface by fixing what prevents it from being clear, coherent, appropriate, or satisfying, and only then refining its surface. The result may be quieter or more expressive than before; the direction comes from the diagnosis, not from a house style.

Builds on [`plim-design`](../plim-design/SKILL.md) (load it first). Uses [`plim-review`](../plim-review/SKILL.md) for the audit, [`plim-accessibility`](../plim-accessibility/SKILL.md) and [`plim-responsive`](../plim-responsive/SKILL.md) for their steps.

## When to use

- The user wants an existing interface to look or feel better.
- Not for critique only (use `plim-review`) and not for greenfield design (use `plim-design`).

## First, interpret the request

Aesthetic words are not specifications. Before acting, work out what the person actually wants.

| Request | May mean | Does not automatically mean |
| --- | --- | --- |
| **Beautiful** | Clearer hierarchy, better proportion and rhythm, coherence, refined typography, finished states, character that fits the product | Gradients, glass, shadows, big type, animation |
| **Premium** | Precision, considered hierarchy, coherence, confident typography, careful spacing and proportion, consistent material relationships, high interaction quality, complete states, responsiveness, accessibility, craft | Dark mode, gold, gradients, glass, huge typography, rounded cards, heavy shadows, animation, stripping content |
| **Modern** | Easier to use, more responsive, clearer IA, better accessibility, contemporary interaction patterns, better mobile behaviour, a more cohesive visual language | Whatever is currently fashionable |
| **Clean** | Less competition for attention, clearer grouping, fewer redundant elements | Removing necessary information, capability, or character |
| **Pop / stand out** | A clearer focal point, a confident primary action, more character | More colour everywhere |

Plim's definitions (§21) apply: premium means considered, coherent, precise, trustworthy, polished, appropriate. Modern means responding appropriately to contemporary users, technologies, and expectations. Expressive means communicating identity, emotion, or emphasis in a way that reinforces purpose.

Then:

- Gather evidence: brand assets, existing tokens and system documentation, audience, product category, what the user complained about.
- If the interpretation would change the outcome substantially (for example, "premium" for a luxury brand vs a B2B tool), ask one focused question.
- Otherwise, state your interpretation in one sentence and proceed.
- If the request is already a decision rather than an adjective ("redesign this in our new brand", "use a bold gradient hero"), follow "Human judgment" in `plim-design`: raise real risks once, then execute the direction well.

## Diagnose

The order matters (§20). Do not polish a broken hierarchy. Do not animate a confusing interaction. Do not introduce a new colour system when the problem is information architecture. Do not replace components when composition would solve the problem.

1. **Understand.** Product, users, primary task, brand, and the existing system inventory (see `plim-design`, "Preserve before replacing"), including the product's decision record if it has one. Note which patterns are documented system conventions and which are ad-hoc, and which directions a human has already decided.
2. **Audit.** Run the `plim-review` lenses. Classify findings by severity and intent. Record what works and must be preserved. This is the diagnosis; everything after it treats a specific finding.

## Decide the outcome

After the audit, choose one outcome and state it, with the reason, before changing anything. The outcomes and when each is appropriate are defined in `plim-design`, "Outcomes". This skill adds what follows each:

| Outcome | Steps that follow |
| --- | --- |
| **No change** | None. Report (see "Output") |
| **Polish only** | Polish, verify accessibility, review |
| **Targeted improvement** | Only the steps those findings need |
| **Structural intervention** | Steps 3 to 13 within that scope |
| **Redesign** | Propose first; once agreed, steps 3 to 13 |
| **Execute a human direction** | Steps 3 to 13, applied to how the direction is realised, not whether |

Rules for the gate:

- **Stopping is legitimate at any outcome.** A smaller outcome is not a lesser result.
- **Every later intervention traces to a finding or to explicit human direction.** If you notice something new while working, add it as a classified finding before acting on it. Nothing gets changed because it was nearby.
- **Critical findings and accessibility requirement failures override the outcome,** as defined in `plim-design`, "Outcomes". If the visual work needs no change but either exists, the outcome is at least a targeted improvement for that finding.
- **Redesign is never agent-initiated by default.** If you believe it is justified, say what the current design prevents and recommend it; don't start it.

## Improve, within the chosen scope

3. **Identify intent.** For this screen: what must the person understand or do? What must they notice, and in what order: one thing first, or several things in parallel? What changes that when the state changes? What should they feel about the product?
4. **Establish hierarchy.** Align the attention hierarchy with importance. When too much competes, quiet the competitors: demote secondary actions, mute metadata, remove redundant emphasis. When the important thing or the product's character is under-expressed, strengthen it. Diagnose the cause (typography, spacing, grouping, contrast, layout, density, state, or IA) and change the smallest effective part.
5. **Improve composition.** Grouping, alignment, reading order, section structure, whitespace, density. Space within groups should be smaller than space between groups. Containers should wrap real units.
6. **Refine foundations.** Typography, colour, spacing, shape, borders, elevation, icons, using the existing system's scales. Add or adjust tokens only when the system lacks a needed relationship.
7. **Refine components.** Use the right component and variant for each job. Prefer an existing variant over a new one, and composition over a custom component.
8. **Improve states.** Apply the state model in `plim-design`: the states this interface meets, their likely combinations, and the transitions between them. A beautiful default state with a raw error state is not beautiful.
9. **Improve responsiveness.** Adapt the composition across contexts (`plim-responsive`).
10. **Add meaningful motion.** Where motion explains change (what changed, where something came from or went, what needs attention, §8.14) or carries the product's character at a meaningful moment. Respect reduced-motion preferences. No motion is also a fine result.
11. **Verify accessibility.** Contrast, focus visibility, keyboard path, semantics, non-colour status, target sizes, zoom (`plim-accessibility`). Re-check after every visual change; beautification commonly breaks contrast and focus.
12. **Polish.** Alignment, optical balance, consistent spacing between equivalent things, typographic details (line length, numerals, truncation), transitions, edge cases.
13. **Review.** Did this improve the experience, or only make it look different? Compare against the audit findings.

## Choosing the intervention

Prefer the earliest rung that solves the problem:

1. Content and copy: clearer labels, removing redundant text, reordering information (see [`language.md`](../plim-design/language.md)).
2. Hierarchy with existing tokens: weight, colour role, size, position.
3. Composition: grouping, spacing, alignment, containment.
4. A different existing component or variant.
5. Adjusting token values within the existing system.
6. Adding a token or component that follows the existing system's conventions.
7. Replacing part of the system, only when justified and ideally agreed with the user.

Each rung is more expensive, less reversible, and more likely to damage identity than the one before.

Judge **blast radius** separately from the rung. Blast radius is how much of the product a change touches, and it does not follow the size of the diff. Changing one token value is a one-line edit that may restyle every screen, theme, and consumer of a shared system; recomposing one panel is a large edit that affects one place. For a wide blast radius:

- say what it affects before making it
- check representative consumers, all themes or modes, and the states that use it
- prefer a scoped change (a component token, a variant) when only one place needs it
- treat a change to a shared system as a system-level decision for a human

## Clichés: ask what they communicate

Generic AI aesthetics share one root cause: **a visual signal of quality is substituted for a design decision.** Rounded cards, gradients, and big numbers resemble polished products, so they get applied without asking what they communicate. None are forbidden (§16), and none has a single correct replacement. For each, ask:

1. **What is this pattern communicating here?** Every treatment makes a claim: this is a unit, this is above that, this matters, this is ours.
2. **Is that communication appropriate** for this content, task, and product?
3. **Is this a legitimate use?** The table lists common ones; the product's system and brand may define others.
4. **If the meaning isn't there, what else could achieve what was intended?** There are usually several options. Choose from the product's own vocabulary.

**The table targets ad-hoc additions, not system conventions.** If a pattern is a documented convention of the product's design system (Material elevation, shadcn cards, Bootstrap components, a Tailwind scale, a brand's signature shape or gradient), it is part of the product's vocabulary. Judge whether it is used as the system intends here, not whether it resembles a row below. See `plim-design`, "A documented system is the product's vocabulary".

This table is the working summary. To recognise a pattern with confidence, explain it, or avoid overcorrecting, see [`anti-patterns/`](../../anti-patterns/README.md).

| Pattern | What it claims | Legitimate when | Other ways to achieve the intent |
| --- | --- | --- | --- |
| Card soup | Each card is an independent unit | The items are real units that people compare, open, select, or move, or the system composes with cards | Spacing, headings, dividers, or surface change for related content; cards kept for the real units |
| Excessive containers | Each box is a boundary of meaning | Each level of nesting is a real level of structure | Alignment, spacing, headings, or one container at the level that matters |
| Excessive rounded corners | A shape language: softness, friendliness, which things belong together | The brand or system uses rounding deliberately and radius varies by role | Radius that varies by role or size; the system's radius roles |
| Excessive pills | The pill marks a role (tag, filter, status, action) | The system assigns the pill a role and applies it consistently | Roles distinguished by shape, weight, or colour role, so actions and labels aren't confused |
| Excessive shadows | Elevation: layering, separation, emphasis, or tactility | The system's elevation language defines what a shadow means and it is applied by that definition | Tonal surfaces, borders, spacing, or fewer elevation levels, whichever the system uses |
| Excessive gradients | Emphasis, energy, light, or brand | The gradient is part of the brand, marks a meaningful area, or carries the product's character, with text contrast verified | Solid colour roles, imagery, typography, or one deliberate gradient where it carries meaning |
| Excessive glassmorphism | Layering while keeping context visible | Seeing what's behind matters (overlays on maps or media), or it's a platform or system convention, with contrast verified on the worst background | Tinted or opaque surfaces, scrims, or a controlled backdrop |
| Accent colour overload | "This matters" or "this is ours" | Colour is a deliberate part of the character, with distinct roles that still separate action, status, and decoration | A role for each colour; the strongest signal kept for what needs it now; brand colour in places that don't compete with action and status |
| Giant headings | Importance, voice, drama | The heading really is the most important thing (editorial, marketing, single-purpose pages) or large type is the brand's voice | Size by role; voice through typeface, weight, or rhythm where scale would mislead |
| Oversized type as the only hierarchy | Size equals importance | Scale is one tool among several | Weight, colour role, spacing, position, and grouping together with size |
| Arbitrary blobs and background shapes | Mood, energy, brand | They belong to the brand's visual language or frame content, without reducing legibility | Brand imagery with a subject, a colour field, typography, or nothing |
| Decorative icons everywhere | Recognition, category, scannability | Icons are distinct and learned, aid scanning, or are part of the product's illustrative voice | Icons where they aid recognition; text alone where the label is clear; one consistent set |
| Unnecessary badges | "Needs attention" or "new" | The count or status needs attention now | Inline text, a status column, a summary, or one aggregated indicator |
| Excessive borders | Structure and edges | Structure needs edges: tables, inputs, dense data, or a system that separates with lines | Spacing, surface change, or fewer and lighter rules |
| Dashboard syndrome | "Here is an overview" | The task is monitoring or overview | Start from the task: a list, table, form, document, or focused view may serve it better |
| Meaningless animation | "Something changed" | Motion explains a change or gives feedback | Instant change, a state indicator, or motion tied to the actual change |
| Decorative motion | Liveliness, character, delight | Motion is part of the brand's character, sits where it doesn't compete with tasks, is brief or user-triggered, and stops under reduced motion | Motion at meaningful moments (arrival, success, transition); static alternatives under reduced motion |
| Random asymmetry | Direction, tension, editorial voice | It leads the eye in a deliberate reading order or expresses an editorial character | Asymmetry with a reading purpose, or alignment |
| Arbitrary whitespace | Grouping and pace | Space follows a rhythm: tighter within groups than between them | The system's spacing scale applied by relationship |
| Replacing useful density with empty space | Calm, "premium" | The task is infrequent or calm is the intent, and nothing needed is pushed out of reach | Keep the density the task needs; improve it with alignment, rhythm, and type |
| Under-expression: muted, generic, interchangeable | Neutrality, safety, "clean" | The product's purpose calls for quiet: focus tools, dense expert tools, a brand that is calm by intent | The brand's colour, type, imagery, shape, or motion at the moments that carry identity; stronger hierarchy where the important thing doesn't register |
| Visual noise | Many things claim attention at once | Rarely intentional; even a busy, expressive style has an order of attention | A deliberate order of attention, whether one focal point or several ranked ones: quiet some signals, strengthen the ones that matter now |
| "Premium" styling without improved hierarchy | "Expensive" | Luxury expression suits the brand and sits on sound hierarchy | Fix hierarchy and craft first; then decide what expression the brand needs |
| "Modern" styling without improved usability | "Current" | A visual update serves a real goal (a brand refresh, a platform convention) alongside the usability fixes | Solve the usability issue; update the look within the system if there is a reason to |

## Output

State the outcome you chose and why.

If the outcome is **no change**, say so plainly and include:

- the main strengths that make the current design work
- any findings you set aside as preference, briefly
- any Critical finding or accessibility requirement failure and its status (addressed, recorded as open, or deferred by whom)
- anything small still worth doing, if the user wants it

Otherwise, report as decision records (see `plim-design`, "Explain significant decisions"), grouped by the finding or human direction each change addresses. Trivial changes (a typo, one misaligned element) need a line, not a record. Also state:

- what was deliberately preserved and why
- what you chose not to change, and why
- the blast radius of any token or shared-component change
- open questions for the user (brand direction, audience, trade-offs you resolved provisionally)
- what you verified (contrast, keyboard, widths, states) and what you could not

If the work produced a decision-worthy event (a human decision, a convention's status, an open requirement, a deferred Critical finding, a declined recommendation), add it to the product's decision record; routine changes don't belong there ([`decision-records.md`](../plim-design/decision-records.md)).

## Failure modes

- Starting at step 6 or 12: restyling before diagnosing.
- Skipping the outcome decision, so the scope grows to whatever you noticed.
- Treating the request adjective as a visual preset.
- Replacing the product's colours, fonts, or components with your defaults.
- Flattening a documented system convention because it resembles a cliché.
- Muting an interface whose identity calls for expression and calling it "clean".
- Increasing whitespace, rounding, or contrast globally instead of fixing a specific relationship.
- Changing a token without checking what else it restyles.
- Making the default state beautiful and leaving loading, empty, and error raw.
- Breaking contrast or focus visibility in pursuit of a softer look.
- Producing large diffs where a small change would have solved the problem.
- Diluting a direction the human explicitly chose.

## Completion criteria

- An outcome was chosen after the audit and stated with its reason.
- Every change traces to a finding or explicit human direction.
- Critical findings and accessibility requirement failures are resolved, recorded as open, or explicitly deferred by a human.
- The attention hierarchy matches the task, and the product's character comes through where it should.
- Changes use the existing system's vocabulary; new tokens or components are justified, and wide-blast-radius changes were checked.
- Relevant states and edges are handled at the same quality as the default state.
- Accessibility is verified after the visual changes, not only before.
- The product still looks like itself, only more intentional, unless a human chose a new direction.
