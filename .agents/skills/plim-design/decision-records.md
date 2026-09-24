# Decision records

Part of [`plim-design`](SKILL.md). Plim depends on two distinctions that an agent can't see in the code alone: whether a human has **decided** something or it is still open, and whether a pattern is a **system convention** or an ad-hoc addition. A decision record keeps those distinctions, and the unresolved consequential issues, alive across sessions and agents, so that a later session doesn't re-open, dilute, or "fix" what a person settled (Law 8, §18).

A decision record is not an activity log. Most work produces no entry.

## Where it lives

- If the product already keeps design decisions somewhere (architecture decision records, a design-system site, a design document), use that. Don't create a second location.
- Otherwise use one `DESIGN-DECISIONS.md` at the product's root, or at the root of the package it concerns in a monorepo.
- Creating the file is a change to someone's repository. Say that you are creating it and why. If the human prefers not to keep one, put the entries in your report instead.

## Reading it

Look for the record at "Understand", before you judge anything, and treat its entries as evidence of intent:

- A **Decision** entry counts as an explicit human decision (see "Human judgment" in `SKILL.md`). Don't re-argue it.
- A **Convention** entry marks a pattern as the product's vocabulary, not a candidate anti-pattern.
- A **Foundation** entry is what later greenfield decisions are tested against.
- An **Open** entry is an unresolved consequential issue. Report it again when your work touches it.
- A **Declined** entry is a recommendation a human has already heard and declined. Don't raise it again unless something has changed.

Entries can go stale. If the product visibly no longer matches an entry, or the entry's reason no longer holds, raise the mismatch with the human. Don't silently follow either the entry or the code.

## When to write

Write an entry only when a decision-worthy event occurs:

- **A human makes or confirms a decision** about purpose, audience, brand, emotional character, a visual or interaction direction, an important trade-off, or a system-level change.
- **A pattern's status is established.** You identify an undocumented pattern as a system convention (record it as provisional), or a human confirms or rejects that status.
- **Greenfield foundations are established or revised**, as the short rationale described in "When there is no system to preserve".
- **A consequential issue is left unresolved:** an accessibility requirement recorded as open, or a Critical finding a human explicitly defers.
- **A human declines a recommendation** you raised as a real risk, so it isn't raised again in every session. Don't record a recommendation that hasn't been answered yet; it lives in your report until a human decides.
- **An earlier entry is superseded or revoked.**

Don't write an entry for:

- routine changes, polish, or the steps you took
- findings that were addressed
- preferences, yours or anyone's, that nobody decided on
- adjectives such as "make it premium", which are requests to interpret, not decisions
- anything the product's design-system documentation already states (link to it instead)

The test: **without this entry, would a later agent or teammate be likely to re-open, contradict, or undo something a human settled, or miss an unresolved consequential issue?** If not, don't write it.

## Entry format

Keep entries short. One entry per decision:

```markdown
### 2026-09-24 · Decision · Exhibition microsite visual direction
- **Decided by:** Design lead (A. Rivera)
- **What:** Oversized condensed type, black and acid green, 3px rules, zero radius, off-grid collage, cursor image trail. Applies to the ticket flow except the third-party payment embed.
- **Why:** The exhibition's subject; "a wall of flyposting, not a museum website".
- **Status:** Active
- **Notes:** Cursor trail disabled under reduced motion and for coarse pointers (requirement points resolved within the direction).
```

Fields:

- **Heading:** date, type (Decision, Convention, Foundation, Open, Declined), short title
- **Decided by:** the person or role who decided. For a provisional Convention or a proposed Foundation, say "proposed by agent, awaiting confirmation"
- **What:** the decision, convention, or issue, specific enough to recognise in the product
- **Why:** the reason or evidence
- **Status:** Active, Provisional, Superseded by (entry), or Revoked
- **Notes:** only what a later session needs: scope limits, alternatives offered (for Open entries), where a convention is documented

## Who writes what

- Record a human decision only when it is explicit or confirmed: an instruction, a chosen direction, or a choice made between options you offered. Name who made it. Context given in answer to your question (a description of the audience, or "the brand is friendly but serious") is evidence you use in the work; it becomes a Decision entry only if the person confirms it as a decision. A Foundation entry can cite that context in its "why" without promoting it to a Decision.
- You may record a Foundation rationale or a provisional Convention you propose, marked as proposed until a human confirms it. Record one only when its absence would let a later session contradict or undo it: the foundations of a new product or campaign, or a convention whose status was genuinely in doubt and that you established. Don't record conventions that are already obvious from the product's documentation or from the code, or conventions that merely restate what you chose not to change.
- Never record your own preferences as decisions.
- In a review-only task (`plim-review`), propose entries in the report and write them only if the human asks.

## Lifecycle

- Add entries; don't rewrite history. When a decision changes, add a new entry and mark the old one "Superseded by".
- A human can revoke any entry.
- Remove nothing silently. If an entry seems wrong, raise it.

## Precedence

- A record is evidence of intent. It is not authority over the philosophy or the skills.
- It cannot waive an accessibility requirement. A Decision whose direction fails a requirement is recorded together with an Open entry for the failing part (see [`plim-accessibility`](../plim-accessibility/SKILL.md)).
- If an entry conflicts with the product's own design-system documentation, raise the conflict with the human rather than choosing a side.
