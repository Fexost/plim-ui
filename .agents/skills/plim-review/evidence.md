# Working with partial evidence

Part of [`plim-review`](SKILL.md). Plim asks for evidence: of purpose, of intent, of identity, of consequence. Real work often comes with little of it: a repository, perhaps a screenshot, and a one-line request. This file covers how to reason honestly with what you have.

## What counts, strongest first

1. Explicit statements from the people who decide, and the product's decision record ([`decision-records.md`](../plim-design/decision-records.md))
2. The product's documented design system
3. Brand assets and guidelines
4. Research, analytics, support data, and test results
5. Consistency you can observe in the code or the interface
6. Your own inference

When sources conflict, the higher one usually wins; say which you relied on. Never promote an inference into a fact, and never present what users "probably" think as research.

## When evidence is thin

- **State the assumptions you are reviewing against** (procedure step 1 in `SKILL.md`), and name what would change your conclusion.
- **Observable consequences still stand.** A contrast failure, a missing focus indicator, a keyboard trap, clipped text, or a control that looks disabled but isn't needs no research. Findings like these keep their severity.
- **Intent is Unknown** unless you can see a purpose being served. Don't guess "intentional" to be polite, or "accidental" to justify a change.
- **An identity gap without evidence is a question, not a finding.** If there is no brand guidance, stated intent, or user feedback, ask whether the plainness, or the loudness, is chosen. Don't file it as Important.
- **Ask when the answer would change the recommendation;** otherwise proceed, and flag the assumption.
- **Don't invent evidence:** no assumed personas, imagined research, or made-up analytics.

## Reviewing from code alone

- **Hierarchy.** Read what the styles emphasise: sizes, weights, colour roles, order in the markup, and how many elements share the strongest treatment. Say that the hierarchy is inferred, not seen.
- **Convention or ad hoc.** Look at frequency and token use. A value applied the same way across many components, through a token, is probably a convention; a raw value that appears once is probably ad hoc. A pattern that is consistent but undocumented is a provisional convention. Treat it as vocabulary, and if its status matters to a decision, record it as a provisional Convention entry.
- **States.** Look for the states the code actually handles (loading, empty, error, disabled, permission branches) and the ones it doesn't. A missing branch is a finding about states or edges, with intent Unknown.
- **Accessibility.** Semantics, names, focus styles, and ARIA can be read from code, and contrast from token values. Say what needs a rendered page or assistive technology to confirm.
- **Report what you couldn't assess.**

## Scoping a large product

- Start where leverage and risk are highest: shared tokens and components, then the most-used and highest-consequence flows.
- Sample representative screens for each pattern rather than every screen, and say which.
- State coverage: what you reviewed, what you didn't, and how far the findings are likely to generalise.

## Who decides

- For each recommendation, identify who owns the decision: the requester, a design-system team, a brand owner, a safety or legal reviewer. The requester is not always the owner.
- When the owner isn't the requester, say so, and route the recommendation to them (see [case 17](../../examples/case-studies/17-genuine-no-change.md)).
- When stakeholders disagree, surface the disagreement and the trade-off. Don't choose between them. Record only what is actually decided.
