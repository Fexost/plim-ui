---
name: plim-design
description: >-
  Core Plim Design reasoning for any interface work in any framework or design
  system. Use when designing UI, deciding whether and how an interface should
  change, judging a design question, preserving an existing design system or
  brand, designing a shared design system or component library, or handling
  states and edge cases. Load before the other plim-* skills.
license: MIT
---

# Plim Design

This skill turns [`philosophy/philosophy.md`](../../philosophy/philosophy.md) into working judgment. The philosophy is canonical: if this skill and the philosophy disagree, follow the philosophy and fix the skill. Section references such as (§10) point into that file. When this skill is installed without the repository, the same file is at <https://github.com/Fexost/plim-design/blob/v1.0.0/philosophy/philosophy.md>.

The goal is not prettier output. The goal is better decisions: every significant visual or behavioural choice should have a reason you can state (§2).

## When to use

- Designing a new screen, flow, or component, or a new product with no established system (see "When there is no system to preserve").
- Deciding whether an existing interface should change at all, and if so, how much.
- Designing or changing a design system or component library that several products share (see [`systems.md`](systems.md)).
- Answering design questions ("should this be a modal?", "is this too dense?").
- As the foundation for the other skills:

| Skill | Adds |
| --- | --- |
| [`plim-review`](../plim-review/SKILL.md) | Diagnosis and critique without editing |
| [`plim-beautify`](../plim-beautify/SKILL.md) | Intentional visual improvement of existing UI |
| [`plim-accessibility`](../plim-accessibility/SKILL.md) | Inclusive design reasoning and verification |
| [`plim-responsive`](../plim-responsive/SKILL.md) | Adaptation across viewport, input, and content |
| [`plim-ui`](../plim-ui/SKILL.md) | Implementation with the Angular `plim-ui` library, only when it is in scope |

## The stance

The eight laws (§7) translate into behaviour:

1. **Intent before appearance.** Start from "what should this help someone understand or do?", not "how can this look better?"
2. **Meaning before decoration.** Every visual treatment should communicate something: hierarchy, grouping, state, affordance, status, or identity.
3. **Clarity before complexity.** People should be able to tell where they are, what matters, what they can do, what is happening, and how to recover. Clarity is not minimalism. Words are part of it: labels, messages, and voice are design material (see [`language.md`](language.md)).
4. **Coherence without uniformity.** Similar things feel related; different things are distinguishable. Consistency lives in relationships, not identical values.
5. **Respect the person.** Protect agency, attention, time, privacy, accessibility, dignity, and trust. No manipulation, no unexplained automation.
6. **Design for reality.** The interface is not the screenshot. Real data, devices, input, latency, errors, and accessibility settings are the product.
7. **Improve before replacing.** Understand what exists and why before changing it. Never redesign to demonstrate change.
8. **Human judgment remains central.** You analyse, propose, and implement. People decide purpose, brand, audience, strategy, emotional character, and important trade-offs. When they have decided, execute their direction well (see "Human judgment").

## The decision model

Thirteen stages (§19). They describe the reasoning a good decision contains, not a form to fill in. Scale the depth to the task: renaming a label may pass through three stages in a sentence; a new checkout flow deserves all of them.

| Stage | The question | When it deserves real time |
| --- | --- | --- |
| Understand | What is the product, who uses it, what are they doing? What has already been decided? | Always, briefly, including the product's decision record if it has one. Deeply when the product is unfamiliar. |
| Identify intent | What should this experience help the person understand or do? | Always. If you cannot answer, stop and ask. |
| Establish priority | What matters most, what is secondary, what can be quiet? | Any change that affects layout or emphasis. |
| Understand context | Device, input, expertise, frequency, brand, existing system, constraints? | Whenever the answer would change the solution. |
| Preserve useful conventions | What should stay familiar? | Existing products, common patterns (forms, navigation, tables). |
| Identify the tension | Which goals compete here? | Whenever two reasonable designers would disagree. |
| Choose the simplest effective solution | What is the smallest change that solves the real problem? | Always. This is where most over-design is prevented. |
| Establish the system | Does this decision fit the surrounding patterns and tokens? | Anything reusable or repeated. |
| Design the states | Which states will this meet, how do they combine, and how does it move between them? | Anything with data, input, or consequences. |
| Verify inclusion | Is it perceivable, operable, understandable, robust? | Always. Depth via [`plim-accessibility`](../plim-accessibility/SKILL.md). |
| Test the edges | What happens when reality stops matching the ideal example? | Anything showing real or user-generated content. |
| Polish | Are avoidable rough edges resolved? | Only after structure is right. |
| Review | Did this improve the experience, or only make it look different? | Always, honestly. |

## Preserve before replacing

For an existing product, inventory the system before proposing anything (§14, §18). Look for:

- the product's decision record, if it keeps one: what it marks as decided, conventional, or still open (see [`decision-records.md`](decision-records.md))
- tokens (CSS custom properties, Sass variables, theme files, utility-framework configuration)
- typography, colour, spacing, shape, border, and elevation conventions
- components and their variants, and which variant is used for what
- interaction patterns (how dialogs, menus, validation, and feedback already work)
- responsive behaviour and breakpoints
- accessibility conventions (focus styles, labelling, skip links, live regions)
- brand identity and product personality
- established UX conventions and framework conventions

Then follow **understand → preserve → improve → extend → replace only when justified**. Replacement is justified only when you can name what the existing piece prevents: a task users cannot complete, a state it cannot express, an accessibility need it cannot meet, or an incoherence that extension cannot fix. "It looks dated" or "I would build it differently" is not a justification.

Work inside the system's own vocabulary. In a Tailwind project, use its configured scale; in a Material or Bootstrap project, use its theming layer and variants; in a proprietary system, use its tokens and components. Never introduce Plim UI or a Plim look; Plim has no visual signature to impose (§15).

### A documented system is the product's vocabulary

An existing design system is not a set of suggestions to be measured against Plim's anti-patterns. It is the product's established language, and it already encodes decisions about components, accessibility, interaction, and brand (§14). Your job is to reason about whether that vocabulary is **serving the product**, not to replace it with a different one.

Separate two things that can look alike:

| | Intentional system-level convention | Accidental ad-hoc addition |
| --- | --- | --- |
| What it is | A pattern the system defines and applies consistently: Material's elevation and tonal surfaces, shadcn's card-based composition, Bootstrap's components, a Tailwind project's configured scale, a brand's signature gradient or rounded shape language | A one-off treatment with no system behind it: a shadow on one card, a gradient on one hero, a radius that matches nothing else, an accent used because it was available |
| How you know | It is documented, tokenised, or used the same way across the product | It appears once or inconsistently; it has no token or matches no documented role |
| What to judge | Whether it is **used as the system intends** here, and whether the system serves this product's purpose and users | Whether it communicates anything at all |

The anti-pattern guidance ([`anti-patterns/`](../../anti-patterns/README.md) and the cliché table in [`plim-beautify`](../plim-beautify/SKILL.md)) is mostly useful for the second column. A system convention that resembles a listed pattern is not a finding by resemblance alone. Misuse of a convention is a finding: using the system's entity card to wrap a single field, or its highest elevation for inline content. A convention that genuinely harms the product (fails contrast, cannot express a needed state) is a finding about the system, and changing it is a system-level decision for a human (see "Human judgment"). For work on the shared system itself, see [`systems.md`](systems.md).

## When there is no system to preserve

Greenfield work (a new product, or one whose only "system" is a framework's default theme) still starts from reasoning, not from a look. Plim has no visual defaults to reach for (§15). The foundations come from the product, and the result can legitimately be restrained or expressive, dense or spacious, conventional or unusual, quietly branded or highly branded.

### Start from evidence

Gather, or ask for, what the foundations will be derived from:

- **Purpose:** what the product is for and what a good outcome looks like (§8.1).
- **Audience:** expertise, frequency of use, environment (devices, interruptions, distance from the screen), and accessibility needs.
- **Content:** what kind (figures, prose, media, forms, conversation), how much, and how variable.
- **Task demands:** scanning, comparing, reading, entering, monitoring, creating, deciding.
- **Brand:** existing assets (logo, colours, typefaces, voice), or the emotional character the product should have if there are none.
- **Platform and constraints:** target platforms and their conventions, the implementation framework, the accessibility conformance target.

Brand and emotional character are human decisions (Law 8). If they are unknown, ask, or propose two or three directions with reasons. Don't fill the gap with a neutral default and call it a decision: neutral is a character too.

Partial vocabularies still count. A framework's components carry behaviour and accessibility worth keeping, but their default theme is an implementation starting point, not the product's identity; whether to keep that look is a decision about identity. Brand guidelines without UI guidance are preserved and translated into the interface.

### Derive each foundation from its job

| Foundation | The question it answers | Driven by |
| --- | --- | --- |
| Typography | What voice, and what kind of reading? | Content type and length, reading versus scanning, brand voice, languages and scripts, figures |
| Spacing and rhythm | How closely are things related, and what is the pace? | The density decision, grouping, input method |
| Colour | Which roles must colour play: brand, action, status, surface, data? | Brand, how many status levels exist, data visualisation, themes, contrast requirements |
| Shape | What distinguishes kinds of things, and what character does form carry? | Brand character, the kinds of components, platform conventions |
| Elevation and surfaces | What layering does the product actually have? | Overlays, panels, independent units, and how the product chooses to express separation |
| Motion | Which changes need explaining, and what character should movement have? | State transitions, brand character, reduced-motion needs |
| Icons, imagery, illustration | What needs recognising, and what voice does imagery carry? | Content, audience, brand |

Each foundation can land anywhere in its range: one typeface or several, two colours or many roles, sharp or soft shapes, no elevation or several layers, still or lively motion. The evidence decides.

Record the result as a short rationale: for each foundation, the choice and the reason. It is what later decisions are tested against, and it replaces "that's how it looked" as the justification. Keep it in the product's decision record as a Foundation entry ([`decision-records.md`](decision-records.md)).

### Choosing density

Density is decided per context within the product, not set once for the product, and Plim has no preferred density. Weigh:

- **Frequency and expertise.** Daily experts often gain from seeing more at once; occasional users often gain from more guidance and space.
- **Task.** Comparing and monitoring favour seeing more together; reading, deciding, and high-stakes single actions may favour focus.
- **Content.** Tables, prose, media, and forms each have their own natural densities.
- **Input and environment.** Touch, gloves, movement, and viewing distance affect target size and spacing. The target-size requirement holds at any density ([`plim-accessibility`](../plim-accessibility/SKILL.md)).
- **Character.** Density contributes to how a product feels: calm, urgent, generous, efficient.
- **Cost.** For this task, is scrolling or crowding the more expensive failure?

One product can combine densities, such as a dense operations table and a spacious onboarding. Where users genuinely differ, a density setting can serve both, though it is a cost to build and maintain, not a free answer.

Check the choice against evidence once real content and use exist. Too sparse shows up as people scrolling or paging to compare things they need together; too dense shows up as missed items and misread rows.

### How much structure

Match the amount of system to what the product needs now and can reasonably foresee.

- **More structure** when there are many screens, teams, or contributors (including AI agents), repeated patterns, several platforms or themes, or a long expected life. Without structure, consistency drifts.
- **Less structure** when the product is single-purpose, short-lived (a campaign, an exhibition), still finding its shape, or editorial, with each page composed individually.

Structure also shows. A highly systematic product and a composed, editorial one look different, and either can be right.

For a design system or component library that several products or teams share, see [`systems.md`](systems.md).

### Convention or context

Make a decision a reusable convention (a token, component, variant, or pattern) when:

- it has recurred, or clearly will, with the same meaning
- it expresses something that should read the same across the product, such as action hierarchy, status, or the spacing between related items
- inconsistency would mislead people or let the product drift

Keep it contextual when:

- it belongs to one moment: a launch page, a celebration, a one-off visualisation
- its meaning isn't settled yet
- generalising it would force unrelated things to look alike (Law 4)

### Avoid premature proliferation

- Build the scales and roles that the current decisions need, not a complete library in advance. Unused tokens and variants still have to be maintained and understood.
- Prefer names that say what a token means over what its value is, so it can change without being renamed.
- Add a variant only for a distinct meaning; a variant that differs only in taste is noise.
- Create a component when a composition recurs with the same behaviour and states, not for every fragment of a screen.
- Treat early foundations as hypotheses and revise them when real content arrives (Law 6).
- Too little structure is also a failure: without shared values, one-offs accumulate (see [case 04](../../examples/case-studies/04-tailwind-application.md)).

### Resolve the tensions explicitly

With no existing vocabulary to lean on, every tension in "Resolve tensions, don't maximise principles" below has to be resolved on purpose. Decide where familiarity should dominate (often forms, navigation, and platform patterns, where learned expectations are strongest; §8.4) and where identity should emerge (see "Familiarity and identity"), and write down which side leads for each tension and why. A dense, conventional trading terminal; a spacious, expressive meditation app; an unusual, highly branded exhibition site; a restrained internal admin tool: each is a legitimate result of this reasoning.

### Greenfield failure modes

- Starting from the neutral, rounded, spacious, card-based layout that feels familiar to you. That is a look, not a decision.
- Adopting a framework's default theme as the product's identity without asking.
- Producing foundations that would look the same for a bank, a festival, and a hospital. If the evidence differs and the result doesn't, the result came from habit.
- Building a full token and component library before the first real screens exist.

## Design intelligence: eight distinctions

These distinctions prevent most bad AI design decisions. Each has a trap and a test.

| Distinction | Trap | Test |
| --- | --- | --- |
| **Change vs improvement** | Treating a visible difference as progress. | Name what got better for the person or the product. Functional gains count: comprehension, speed, confidence, access, recovery. So do experiential ones: trust, brand fit, character, delight, appropriate expression, when there is evidence the product needs them (brand guidelines, audience, product purpose, stated intent). If you can only name "looks fresher", it is change. |
| **Novelty vs value** | Choosing an unusual pattern because it is interesting, or a familiar one because it is standard. | Name what the new pattern does better, for the task or for an identity the product needs, and what it costs people to learn. If you can only name "more interesting", it is novelty. If the familiar pattern doesn't fit the task, "it's standard" is not a reason either (§8.4). See "Familiarity and identity". |
| **Visual preference vs design problem** | Reporting taste as a defect, or dismissing a real identity gap as taste. | A problem has an observable consequence: someone misreads, misses, cannot act, errs, cannot recover, or is excluded. A gap between the interface and its evidenced identity or emotional intent is also a problem: the brand is warm and the product reads clinical; a payment flow feels provisional to people who need to trust it; a celebratory moment passes without character. A preference is "I would do it differently" with neither kind of evidence. |
| **Decoration vs communication** | Adding treatments because they look nicer. | Ask what distinction it communicates (§11). If nothing, it is decoration: question it. Decoration is not forbidden, but it must not masquerade as information. |
| **Consistency vs uniformity** | Making everything identical. | Consistent means similar things behave and communicate similarly. If two different things now look the same, you have created uniformity and lost information. |
| **Minimalism vs simplicity** | Removing things to look clean. | Simple means easy to understand and accomplish (§21). If removal hid needed capability or context, it made the product harder, not simpler. |
| **Modernity vs trendiness** | Applying the current visual fashion. | Modern means responding well to contemporary users, devices, and expectations. Ask what problem the trend solves here (§16). |
| **Polish vs decoration** | Adding effects and calling it finish. | Polish removes rough edges across visuals, behaviour, states, accessibility, and edge cases (§21). Decoration adds surface without meaning. Polish has no default direction: finishing can make an interface quieter or more expressive, depending on what the findings call for. |

## Attention is a resource

Every interface has a finite amount of attention to spend (§10). Colour, contrast, size, position, whitespace, motion, elevation, imagery, typography, density, borders, alerts, and badges all spend it. The questions are **what deserves attention right now?** and **what can afford to be quiet?**

"Right now" matters in two ways.

**It depends on the task.** Some screens have one thing the person must find first: the pay action in a checkout, the answer in a search result. Others need attention distributed across several things:

- a monitoring view, where any of several signals may need action
- a dense table, scanned row by row and column by column
- a settings page, read section by section
- an editor, where the content leads and the tools stay at hand
- a multi-step flow, where the current step leads and progress stays visible

Distributed attention is still allocated. It has levels and an order of scanning, even when several things share the top level. It is not the same as everything being equally loud, which is the absence of a decision.

**It changes with state.** An error, a failed sync, a new message, or a completed task changes what matters. A screen doesn't have one hierarchy; it has a hierarchy for each state that shifts priority. When several urgent things are true at once, rank them by consequence and time-sensitivity, and keep each one findable. The newest or loudest signal shouldn't bury an older, more serious one.

To read and set attention:

1. For this screen in its current state, decide what matters now: one thing, or a small set of similar importance, and in what order they should be found.
2. Decide what comes next, and what can be quiet until needed.
3. Look at where emphasis actually goes. List the loudest elements.
4. Where the two disagree, there is a hierarchy problem.
5. Repeat for the states that change priority, such as error, alert, empty, and success.

**Prominence is not importance.** Prominence is what draws the eye; importance is what matters to the task. They should correspond (§8.6, and "Semantic honesty" below), but importance can be served by means other than loudness:

- a frequent, important action may be better served by a predictable position than by strong emphasis
- a destructive action can be important and deliberately less prominent than the safe path
- a status indicator may matter only when it is abnormal, and can stay quiet until then

Match prominence to importance in the current state. Use position, grouping, consistency, and predictability to make important things findable without making everything loud.

When too many things compete, the fix is often to **quiet the competitors** rather than amplify the target: before adding weight to the primary action, remove weight from the six things fighting it. If everything is emphasised, nothing is. The opposite problem is also real: when nothing competes but the important thing still doesn't register, or the product's character never comes through, the target is under-expressed and needs more weight, colour, scale, or motion, not less.

## Semantic honesty

Visual language should truthfully describe functional relationships (§8.11). For every distinction you add or keep, ask: **what does this visual distinction mean?**

| Visual claim | Must be true |
| --- | --- |
| Two buttons look different | They differ in importance, consequence, or kind |
| One item is more emphasised | It is more important to the current task |
| It looks interactive | It responds to input, including keyboard |
| It looks disabled | It is actually unavailable, ideally with a reason |
| Colour signals status | Status is also conveyed by text, icon, or shape |
| Items share a container or card | They form a meaningful unit or independent entity |
| A surface is elevated | It differs from its surroundings in the way the product's elevation language defines: above or over them, apart from them, or of different importance |
| Items are aligned and spaced as a group | They are related |
| A treatment carries brand character (a signature colour, typeface, shape, illustration, or motion) | It expresses the product's actual identity, consistently, and does not also make a claim it doesn't mean (a brand colour that reads as "danger", a signature shape that reads as "clickable") |

If the meaning is unclear, either make it true or remove the distinction. Dishonest visuals build a wrong mental model, and that costs more than plainness.

## Resolve tensions, don't maximise principles

Principles are forces to balance (§4, §9). More whitespace, consistency, expression, minimalism, or information is not automatically better.

| Tension | Too far one way | Too far the other | Resolving question |
| --- | --- | --- | --- |
| Simplicity ↔ Capability | Clean but cannot support real work | Everything exposed at once | What complexity does this user and task need? |
| Familiarity ↔ Identity | Generic | Hard to understand | Where should convention dominate, and where should identity emerge? See "Familiarity and identity". |
| Consistency ↔ Context | Same treatment where it shouldn't be | Nothing predictable | Which relationships stay stable, and which adapt? |
| Restraint ↔ Expression | No character | Competes with its purpose | What level of expression serves this product and its users? |
| Density ↔ Breathing room | Inefficient, scrolling everywhere | Overwhelming | What density fits the task, expertise, and frequency of use? |
| Automation ↔ Agency | Unnecessary work | User loses understanding or control | What should the system do, and where should the person decide? See "Automation and agency". |
| Innovation ↔ Familiarity | Nothing distinctive | Novelty without value | Does the novelty create meaningful value? |

When you resolve a tension, say which side dominates here, why, and what you gave up. A trading terminal and a meditation app should resolve Density ↔ Breathing room in opposite directions, and both can be right.

## Design is a system of states

A design is not complete when the screenshot looks good. It is complete when the interface behaves coherently across meaningful states and the transitions between them (§12). This section is the state model for all the Plim skills; the specialist skills apply it to their concern rather than defining their own.

### Kinds of state

- **Interaction:** default, hover, focus, active, selected, disabled
- **Data:** loading, empty, partial, stale, success, error, warning
- **Constraint:** validation, permission restriction, offline or degraded
- **Content:** long, short, missing
- **Consequence:** destructive confirmation, undo, recovery

These are categories for finding the states a design will meet, not a checklist. Not every component needs every state; every meaningful state should be intentional. For each state that applies, decide what the person sees, what they can do, and how they get back to a working state.

### States combine

Real interfaces are in several states at once: a selected row that is also refreshing; a form with one field in error while it saves the others; offline with unsynced changes and a partial list; an unavailable action inside a failed section; two alerts of different severity.

For the combinations this design is likely to meet:

- decide which state leads the treatment, and which must stay perceivable alongside it
- check that the treatments don't collide, for example selection and error both relying on the same colour or the same border
- check that one state doesn't hide another the person needs, such as a loading overlay that hides the error it replaces

Design the likely combinations, not every permutation.

### Transitions are part of the design

For each meaningful change between states, decide:

- **What triggers it:** the person, the system, or time, and whether the person expects it.
- **How it's communicated:** in place, through feedback near where the person is looking, by moving focus, by announcement, or by motion, and in words whose tone fits the state (see [`language.md`](language.md), "Tone follows state and consequence"). Use whatever fits the product and the consequence (§8.14).
- **What survives it:** input, scroll position, selection, and focus.

Common failures: layout that jumps as content arrives; focus lost when an element disappears; a confirmation that vanishes before it can be read; an error that replaces the content the person needs to fix it.

### State, attention, feedback, and agency

- **Attention.** A state change can change what matters now (see "Attention is a resource"). Emphasis should follow in proportion to consequence and urgency. Routine changes stay quiet, consequential ones claim attention, and the claim ends when the state is resolved.
- **Feedback.** Every action the person takes has a perceivable result, in proportion to its importance, so they know whether it worked (§8.13).
- **Agency.** In each state, what can the person still do? Can they cancel a long operation, retry a failure, undo, or keep working elsewhere while something loads? A state that removes options needs a reason (§8.3).

The specialist skills apply this model: [`plim-accessibility`](../plim-accessibility/SKILL.md) covers how states and transitions are perceived and operated, [`plim-responsive`](../plim-responsive/SKILL.md) how they hold up across contexts, [`plim-review`](../plim-review/SKILL.md) how to assess them, and [`plim-beautify`](../plim-beautify/SKILL.md) how to improve them.

## Automation and agency

What should the system do on the person's behalf, and where should the person decide (§9)? Neither answer is safe by default. Too little automation creates unnecessary work and interruptions; too much leaves people not understanding what happened or unable to change it (§8.3, Law 5).

### What decides it

For each thing the system could do for the person, weigh:

- **Consequence.** What is affected if it's wrong (data, money, time, other people, safety), and who bears the cost.
- **Reversibility.** Can it be fully undone, partly undone, or not at all? For how long? Does it reach outside the product: a sent message, a payment, a synced deletion?
- **Confidence.** How likely the system is to do what the person actually wants. Confidence runs from a rule the person set themselves, through a prediction, to an AI inference. Consider also whether the person can tell in advance what will happen.
- **Expressed intent.** Has the person already asked for this, set it up, or is it the point of the task? Or would the system be acting on a guess?
- **Frequency.** How often does it happen? Frequent small decisions are where automation saves the most work, and where interruptions cost the most.

### The range of responses

From most system initiative to least:

| Response | Fits when |
| --- | --- |
| **Act** | Low consequence, easily reversed, high confidence, or intent already expressed. Stay silent only if the person has no reason to know. |
| **Act and inform** | The action is reversible, but the person should know it happened. Show what changed and offer undo in place. |
| **Suggest** | The system has a useful idea but the choice is the person's: a pre-filled value they can see and change, a draft to accept or edit. |
| **Preview** | The outcome is hard to predict, as with batch changes, generated content, or publishing. Show what will happen before it does. |
| **Ask** | Only the person has the information, or the choice is theirs by nature: recipients, tone, priority. |
| **Confirm** | The person initiated something consequential that can't be undone. Name the specific consequence; generic "Are you sure?" dialogs teach people to click through. |

Consequence and reversibility do most of the work. When an action can be made reversible (a trash, a grace period, a scheduled send), undo usually serves people better than a confirmation, and it keeps confirmations meaningful for what truly can't be undone. When confidence is low and consequence high, don't automate; help the person decide.

**Interruption** is justified when the cost of the person not knowing now is higher than the cost of breaking their work: an imminent consequence, something time-sensitive, or a decision needed before anything can continue. Otherwise, inform in place and let them attend when ready (see "Attention is a resource").

### Situations where this matters most

- **Destructive actions.** Match protection to reversibility and reach. Deletion with undo needs little ceremony; permanent loss of shared data needs deliberate confirmation that says what, and whose, will be lost.
- **Background automation.** People should be able to find what ran, what it changed, and how to pause or stop it. Silent failures matter more than silent successes, so surface them.
- **Smart defaults.** A default is a decision made on the person's behalf. It should be what they would most likely choose, and safe to accept without examination, especially for privacy, sharing, and billing. A default that serves the business at the person's expense is manipulation (Law 5).
- **AI-generated actions.** Confidence is lower, and it's harder for the person to judge, because generated output can look authoritative. Make clear what was generated, and let the person edit, accept, or reject it. Keep consequential or irreversible effects behind their explicit go-ahead. The more autonomously it acts, the more it needs a visible record and undo.
- **Batch operations.** Consequence multiplies with scope. State the scope in concrete terms ("Delete 248 files"), let people see what's included, make the whole batch undoable where possible, and report partial failures item by item.
- **Irreversible actions.** Say so before, not after, and make the consequence concrete. Making the action reversible is often better than a stronger warning.
- **Recurring actions.** Intent was expressed once, so show what is scheduled, what ran, and what's next, and how to change, pause, or stop it. Give notice before runs with real consequence, such as a charge.
- **Long-running operations.** Show progress, allow cancellation (and say what cancelling leaves behind), let people keep working, keep partial results when something is interrupted, and report completion where they will see it.

### Reduced work or removed control?

After the automation acts, does the person understand what happened, and could they have changed it if they wanted to? If yes, it reduced their work. If they are surprised, can't find what changed, or can't opt out, it removed control. Automation also removes control when it takes over a judgement that belongs to the person, such as what to say, whom to include, or what to spend.

The same reasoning governs your own conduct as an agent: see "Human judgment".

## Familiarity and identity

Familiar patterns save people learning. Distinctive ones carry identity, and sometimes serve the task better. Neither wins by default (§8.4, §8.15, and in §9 both Familiarity ↔ Identity and Innovation ↔ Familiarity). The question is what each costs and gains here.

### Recognisable behaviour, distinctive character

People depend most on behaviour and structure: what is interactive, where navigation lives, how a form submits, what a link does compared with a button, how selection, scrolling, and dismissal work. Visual and verbal character (colour, typography, shape, imagery, motion, composition, voice) can vary widely while those stay recognisable. A control can look nothing like a platform default and still read and behave as the control it is (semantic honesty). So most brand expression doesn't need to break convention.

Deviating in behaviour usually costs more than deviating in appearance. Appearance breaks recognition too, when the cue people rely on is visual: a link that no longer looks followable, or a control with no sign that it is interactive.

### What decides it

- **Task and consequence.** Where mistakes are costly or time is short (payments, clinical work, destructive actions, long forms), learning costs and errors weigh more, and unfamiliar behaviour needs a stronger reason. Where exploration is the point (an exhibition, a game, a creative canvas, a brand moment), unfamiliarity can be part of the value.
- **Audience and frequency.** Occasional and broad audiences rely on what they already know. Daily experts can learn a better pattern once and gain from it every day.
- **Existing expectations.** Platform conventions, domain conventions (spreadsheets, code editors, trading tools), and the product's own established patterns all set expectations. Changing the product's own patterns costs its existing users (Law 7).
- **Product identity.** How central distinctiveness is to the product's value: essential for a festival app or an editorial brand, secondary for a utility people want to finish with.
- **Evidence.** Testing, analytics, support requests, research. An untested deviation is a hypothesis, and so is an untested assumption that the convention works.

### Four situations

- **Keep the convention** when it fits the task and people depend on it. Express identity through appearance, voice, and composition instead.
- **Deviate for identity** when distinctiveness is part of the product's value and the deviation is learnable. It should be obvious on first use, consistent everywhere it appears, and low in consequence if misunderstood. Pay the learning cost deliberately: teach it where it first appears, and keep critical paths recognisable where a misunderstanding would be costly. Accessibility requirements hold either way.
- **Remove unnecessary learning cost** when a deviation serves neither the task nor an identity the product needs: a reinvented scrollbar or date picker, a gesture nobody would guess, a standard action renamed. Signals include hesitation, mis-taps, support questions, and instructions for things people already know how to do elsewhere.
- **Replace a familiar pattern that doesn't fit.** A convention is valuable only where it reduces effort (§8.4). Pagination for a task that needs continuous comparison, a step-by-step wizard for experts who need everything at once, or a form for what is really a conversation each has its own cost. "It's standard" doesn't justify it.

### Innovation or novelty

Innovation does something better: faster, fewer errors, a capability the familiar pattern can't offer, or a signature interaction that carries the product's identity when its purpose calls for one. Novelty is different without doing anything better.

To tell them apart, name what the new pattern does better, for whom, and what it costs them to learn. Then check that claim against evidence once it exists. If a human has explicitly chosen a distinctive direction, raise its learning cost once and execute it well (see "Human judgment").

## Design the edges

Ask: **what happens when reality stops matching the ideal example?** (§13)

- **Content:** very long or very short labels, localisation and text expansion, user-generated content, unusual input, missing images and avatars
- **Volume:** empty datasets, one item, thousands of rows
- **Environment:** narrow and wide screens, zoom, large text, slow networks, failed requests
- **Access:** keyboard only, screen readers, reduced motion, partial permissions
- **Consequence:** errors, interrupted workflows, destructive actions

Edges are where many states come from: an empty dataset becomes the empty state, a failed request the error state, a long label a content state. Use these categories to find the states and combinations this design will actually meet, then design those with the state model above.

You do not need to test every edge on every change. Identify the edges that could invalidate this particular design, and check those.

## Preserve identity

Plim improves the quality of decisions, not the product's appearance (§15). Preserve brand character, product personality, domain conventions, user expectations, and the existing visual language. A playful product stays playful; a dense technical tool stays dense. If your change would make the product look more like a generic template, or more like your defaults, reconsider it.

Muting is not a safe default. **Under-expression is a design problem** when the product's purpose, audience, or brand calls for stronger character and the interface is generic, muted, or interchangeable: a consumer brand that could be anyone's, an editorial product without a voice, a moment of achievement that looks like a settings page (§8.15, Restraint ↔ Expression in §9). Treat it as a finding with the same evidence standard as any other.

## Outcomes

After diagnosing an existing interface, choose one outcome and state it, with the reason, before changing anything. This is the scale every skill uses; [`plim-beautify`](../plim-beautify/SKILL.md) defines the steps that follow each one, and [`plim-review`](../plim-review/SKILL.md) recommends one.

| Outcome | Appropriate when |
| --- | --- |
| **No change** | Structure, hierarchy, states, and identity serve the product; remaining findings are preferences |
| **Polish only** | The design is sound; there are rough edges against its own system, or objective craft defects |
| **Targeted improvement** | Specific findings in specific places |
| **Structural intervention** | Hierarchy, composition, or information-architecture problems across a screen or flow |
| **Redesign** | You can name what the existing design prevents that improvement cannot fix. Propose it; don't start it unasked |
| **Execute a human direction** | A human has explicitly decided the direction (a redesign, a brand treatment, a bold look). Diagnosis now governs how it is executed, not whether (see "Human judgment") |

Severity (Critical, Important, Polish, None) is defined in [`plim-review`](../plim-review/SKILL.md), "Classify findings". Two kinds of finding override the outcome:

- **Critical findings.** Always reported, then addressed or explicitly deferred by a human.
- **Accessibility requirement failures, at any severity.** Addressed, recorded as open, or explicitly deferred by a human (see [`plim-accessibility`](../plim-accessibility/SKILL.md), "Requirements, recommendations, and human judgment"). An Important requirement failure is not optional because it isn't Critical.

"No change" or "polish only" cannot leave either kind silently in place; when one exists, the outcome is at least a targeted improvement for that finding.

## Doing nothing is a valid outcome

You are not obliged to produce a visible change (§18). Recommend little or no change when:

- the interface is intentionally minimal and additions would reduce clarity
- existing conventions are appropriate for the domain
- the proposed change is mostly stylistic
- a redesign would damage familiarity for existing users
- the requested visual change would reduce accessibility
- the real problem is content, copy, or information architecture, not visuals
- the current component is already the right one
- the perceived problem is preference rather than a design issue

Say so plainly, explain why, and name anything small that is still worth doing.

Two limits:

- **Doing nothing never hides a Critical problem or a requirement failure.** If you find something that blocks a task, excludes people, misleads, or risks harm, or that fails an accessibility requirement, report it, whatever else you recommend (see "Outcomes" above).
- **Doing nothing is your recommendation, not a veto.** When a human has explicitly decided on a change, see "Human judgment" below.

## Surface uncertainty

Good design intelligence knows when it does not know enough (§18). When product intent, audience, brand direction, or user needs are unclear:

- if the answer would change the solution substantially, ask
- otherwise, state your assumption, choose the option that is easiest to reverse, and flag it
- ask the person who owns the decision, which is not always the person asking. When stakeholders disagree, surface the disagreement rather than choosing between them (see [`plim-review`](../plim-review/SKILL.md), [`evidence.md`](../plim-review/evidence.md), "Who decides")

The more consequential the change (brand, navigation, flows other teams depend on), the more human review it needs. Keep changes understandable, reviewable, incremental, and reversible.

## Human judgment

People decide product purpose, brand identity, audience, strategy, emotional character, and important trade-offs (Law 8). How you act depends on whether a decision has been made. In both cases, human judgment operates within applicable accessibility requirements, which are a constraint, not a preference (see "Not blind obedience").

### Agent-initiated recommendation

When the direction is yours to propose (no human has decided):

- surface what you don't know, as above
- explain the trade-offs between the reasonable options
- recommend one direction and say why
- hold your own proposals to Law 7: a change you initiate needs a named improvement

### Explicit human decision

When a human has clearly chosen an aesthetic direction, a redesign, a brand treatment, a level of expression, or a pattern you would not have chosen:

- **Respect it.** The decision is the justification. Law 7 and the anti-pattern guidance govern what you initiate, not what a person has decided about their own product.
- **Raise meaningful risks once.** Be specific: what could go wrong, for whom, and how it could be mitigated. Then proceed.
- **Don't resist.** Don't re-argue the decision, water it down, or silently substitute your preference (for example, implementing a muted version of a bold direction, or a "safer" palette than the one asked for).
- **Execute with care.** Your Plim reasoning now applies to *how*: coherence, hierarchy within the chosen direction, states, edges, responsiveness, accessibility, and technical quality.

A decision is an explicit instruction or a confirmed choice, including one recorded in the product's decision record by an earlier session (see [`decision-records.md`](decision-records.md)). An aesthetic adjective ("make it premium") is a request to interpret, not a decision; interpret it as in [`plim-beautify`](../plim-beautify/SKILL.md).

### Not blind obedience

Respecting a decision does not mean hiding its consequences. Always surface, when they apply:

- **Accessibility.** Applicable accessibility requirements constrain how a direction is implemented; they are not weakened because a human prefers the result. Above-floor improvements are recommendations the human may decline. When a chosen direction can't meet a requirement as specified, explain the conflict, offer accessible alternatives that keep as much of the direction as possible, and implement the one the human chooses. If they reject every alternative, don't implement the failing part; implement the rest and record that part as an Open entry in the decision record. The full policy is in [`plim-accessibility`](../plim-accessibility/SKILL.md), "Requirements, recommendations, and human judgment".
- **Safety and trust.** Deceptive or manipulative patterns, data loss, privacy exposure (Law 5).
- **Technical constraints.** Breaking changes, performance costs, effects on other teams or consumers of a shared system.

## Explain significant decisions

For each meaningful change, be able to state:

- **What changed**
- **Why:** the observed problem and its consequence
- **Principle:** which law or principle motivated it
- **Trade-off:** what tension you resolved and what you gave up
- **Preserved:** what you deliberately kept

Trivial changes need no record. If you cannot fill in "why", reconsider the change.

These explanations belong in your report. Write to the product's decision record only when a decision-worthy event occurs: a human decision, a convention's status, greenfield foundations, an unresolved consequential issue, or a declined recommendation. The record is not an activity log; see [`decision-records.md`](decision-records.md) for when to write and when not to.

## Failure modes

- Starting with styling before understanding purpose and priority.
- Designing only the happy-path screenshot.
- Replacing a working component, token set, or pattern because you prefer another.
- Adding emphasis until nothing stands out.
- Forcing a single focal point onto a task that needs distributed attention, or mistaking equal loudness for distributed attention.
- Designing states one at a time: each fine alone, broken in combination or in transition.
- Defending a convention because it's standard when it doesn't fit the task, or breaking one for character when appearance alone could have carried it.
- Automating because it's possible, or asking because it feels safe: confirming everything until confirmations mean nothing, or acting silently on guesses the person discovers later.
- Treating minimalism, whitespace, or consistency as goals in themselves.
- Inventing certainty about brand, audience, or strategy.
- Producing change to show effort when the right answer was restraint.
- Importing a generic "AI look" (card grids, gradients, uniform rounding) into a product that has its own identity.
- The opposite: muting or flattening a product whose identity calls for expression, and calling it restraint.
- Treating a documented design-system convention as a defect because it resembles an anti-pattern.
- Resisting, diluting, or quietly overriding a direction a human has explicitly chosen.

## Completion criteria

The work is done when you can answer yes, with reasons, to the Plim Standard (§24) at the depth the task warrants. In particular:

- The purpose is clear and the design serves it.
- Emphasis is spent deliberately; attention follows what matters in each state that shifts priority.
- Visual distinctions mean something true.
- Meaningful states, their likely combinations and transitions, and the relevant edges are handled.
- It remains perceivable, operable, and understandable.
- The existing system and identity were preserved where they work.
- Any explicit human direction was carried out faithfully, with its risks stated once.
- Every significant change improved something that matters, and you can explain it.

Final question: **do the important decisions feel intentional?**

Worked reasoning examples: [`examples/case-studies/`](../../examples/case-studies/).
