# Design decisions

Evidence of intent for plim-ui. This is not an activity log. Plim Design remains the authority; an entry here cannot waive an accessibility requirement.

The format follows [Plim Design decision records](https://github.com/Fexost/plim-design/blob/v1.0.0/skills/decision-records.md).

### 2026-09-24 · Decision · Plim Design is the design authority

- **Decided by:** Maintainer, in the alignment task for Plim Design v1.0.0
- **What:** Design reasoning for this repository comes from [Plim Design](https://github.com/Fexost/plim-design) v1.0.0 and its skills. `AGENTS.md` holds Angular and packaging conventions. `DESIGN-AGENTS.md` explains how those decisions are implemented here. Neither file is a competing philosophy.
- **Why:** plim-ui implements Plim Design. It does not define it.
- **Status:** Active
- **Notes:** Install skills with `npx skills add Fexost/plim-design`. The `evals/` tree in plim-design tests the skills. It is not design guidance.

### 2026-09-24 · Foundation · Default theme is the library's identity

- **Decided by:** Proposed by agent from the existing token system, consistent with the maintainer's instruction to keep a coherent identity. Awaiting confirmation if a different character is wanted.
- **What:** The shipped theme is dark-first, cool neutral, violet accent, modest radius (4–10px, full for pills and badges), flat surfaces with elevation reserved for overlays, Inter for UI text. Light theme is an override via `data-theme="light"`. Products re-theme semantic roles. This look is not a requirement for other Plim interfaces.
- **Why:** The values were already a consistent system across components. Plim Design has no visual signature to impose, and the alignment task said to keep identity that is intentional and coherent.
- **Status:** Provisional
- **Notes:** Do not restyle the library toward a generic "modern" theme, and do not treat this theme as the Plim look.

### 2026-09-24 · Convention · Variant and token roles

- **Decided by:** Proposed by agent from the public API and token names. Awaiting confirmation.
- **What:** Button `variant` ranks importance (`primary`, `secondary`, `text`), not decoration. Badge and snackbar variants name status. `--plim-color-primary` is the action fill; `--plim-color-primary-text` is that accent as lettering. `--plim-color-border-strong` identifies a control; `--plim-color-border` is a quiet separator. Status text on a tinted surface uses `--plim-color-*-surface-text`.
- **Why:** One violet cannot be both a fill that holds white text and body text on a dark surface. One grey cannot be both a hairline divider and the only edge of a field.
- **Status:** Provisional
- **Notes:** Documented in `DESIGN-AGENTS.md` and the tokens guide.

### 2026-09-24 · Decision · Docs site is a specimen folio, not a second design system

- **Decided by:** Maintainer, by asking for a documentation identity distinct from the component library
- **What:** The docs opening is a title page: a violet rule, a large headline, and live plim-ui controls in a ruled frame. Navigation onward is a numbered index, not a grid of cards. The wordmark's "ui" uses `--plim-color-primary-text`. Component reference pages keep the existing catalog layout.
- **Why:** In the first seconds a visitor should see that this is Plim Design implemented in Angular, that the controls on the page are real, and where to go next. A fake browser chrome and one-sentence cards were claiming units and layers the page did not have.
- **Status:** Active
- **Notes:** Folio type, the rule, and the index are documentation composition. They are not plim-ui component defaults. Do not push this treatment into the library. The headline leads with plim-ui; see the information-architecture entry.

### 2026-09-24 · Decision · Docs information architecture

- **Decided by:** Maintainer, by asking for a content pass that keeps the folio and separates the two projects
- **What:** The site documents plim-ui. Sidebar order is Get started, Design, Foundations, then component categories. Design is one orientation page that links to the Plim Design repository, philosophy, manifesto, and skills. Component pages stay component pages. Accessibility stays with the library foundations and points at Design for the reasoning.
- **Why:** Developers should reach Angular APIs without reading philosophy, and should be able to find the philosophy without searching component pages. Copying the philosophy into this repo would create a second source of truth.
- **Status:** Active
- **Notes:** Canonical philosophy and skills remain in Fexost/plim-design. Do not expand the Design page into a restatement.
