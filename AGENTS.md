# Important

This document contains the project's architectural context, design philosophy,
historical decisions, and intended direction.

The actual repository is the source of truth for the current implementation.
If this document conflicts with the code, inspect the code and update this
document rather than blindly following outdated information.

Do not make broad architectural changes without first explaining why they
are necessary.

For visual design decisions (hierarchy, spacing, colour, depth, typography),
see [`DESIGN-AGENTS.md`](./DESIGN-AGENTS.md).

# Plim UI — Project Context & Development Guidelines

## 1. Project Overview

`plim-ui` is a custom Angular component library being built as both a reusable UI library and a demonstration of frontend engineering ability.

The main goal is to create something similar in spirit to libraries such as shadcn/ui, but designed specifically for Angular. The library should provide polished, accessible, composable components that can be reused across projects.

The project is also intended to demonstrate:

* Strong Angular knowledge
* Modern Angular patterns
* Component architecture
* Accessibility awareness
* Responsive design
* Design-system thinking
* Reusable APIs
* SCSS/CSS expertise
* Clean TypeScript
* Good developer experience
* Attention to visual detail

The component library will ultimately be used by the user's personal portfolio website, so it should be practical rather than being purely a demonstration project.

---

# 2. Design Philosophy

The library should feel like a modern, professional developer-facing component library.

The visual direction should take inspiration from:

* Modern Angular Material documentation
* shadcn/ui
* Modern documentation websites
* Clean developer tooling interfaces
* The supplied design reference/screenshot discussed previously

The goal is **not** to copy any existing library.

Instead, the design should combine:

* Minimal visual noise
* Strong typography
* Good spacing
* Clear hierarchy
* Subtle borders
* Neutral surfaces
* Consistent design tokens
* Good dark/light theme support
* Accessible interaction states
* High-quality documentation

Components should generally favour composability rather than providing extremely opinionated markup.

---

# 3. Technology

Current stack:

* Angular 21
* TypeScript
* Angular CDK 21 (workspace dependency; overlay components listed below; peer dependency of published package)
* SCSS for the component library
* npm
* Angular CLI
* ng-packagr for building the library
* ESLint / angular-eslint

Environment previously used:

* Node.js 22
* npm 10
* Angular CLI 21
* Angular CDK 21

The project is an Angular workspace containing a library project called `ui`.

### Angular CDK

The [Angular Component Dev Kit](https://material.angular.dev/cdk/overview) (CDK) is a library of
behaviour-focused, largely unstyled primitives — overlays, focus management, accessibility
utilities, scrolling, drag-and-drop, and more. Angular Material builds on top of it; plim-ui can
use the same primitives without adopting Material’s visual design.

**Current status:** `@angular/cdk` Overlay is used by **`plim-select`**, **`plim-autocomplete`**,
**`plim-datepicker`**, **`plim-timepicker`**, **`plim-menu`**, **`plim-dialog`**,
**`plim-bottom-sheet`**, **`plim-snackbar`**, and **`[plimTooltip]`**. Other published components
remain native HTML, SCSS, and Angular APIs. CDK is a **peer dependency** of the published
`plim-ui` package alongside `@angular/forms`.

**When to reach for CDK:** prefer it when a component needs non-trivial interaction behaviour
that is easy to get wrong by hand — for example Dialog (focus trap, restore focus, escape to
close), Overlay / Portal (Tooltip, Popover, Select panel), Listbox / Combobox patterns (Select,
Autocomplete), Tabs keyboard roving, or DragDrop. Do not add CDK to simple presentational
components where native semantics suffice.

---

# 4. Workspace Structure

The library currently follows the Angular library structure:

```text
projects/
  ui/
    src/
      lib/
        avatar/
        badge/
        button/
        button-toggle/
        card/
        header/
        separator/
        sidebar/
        spinner/
        progress-bar/
        option/
        input/
        textarea/
        select/
        autocomplete/
        checkbox/
        radio/
        switch/
        slider/
        datepicker/
        timepicker/
        chip/
        dialog/
        bottom-sheet/
        snackbar/
        tooltip/
        expansion-panel/
        grid-list/
        list/
        menu/
        paginator/
        sort/
        stepper/
        table/
        tabs/
        toolbar/
        tree/
        form-field/
      styles/
        _tokens.scss
        _theme.scss
        _field-control.scss
        _field-icons.scss
        _toggle-control.scss
        _option-list.scss
        _table.scss
        styles.scss
      public-api.ts
  docs/
    public/
      brand/          # SVG logo assets (mark, favicon, app-icon)
    src/
      app/
        app.ts / app.html / app.scss   # shell chrome (header + layout)
        components/
          docs-component-layout/
          docs-guide-layout/
          docs-nav/       # nav styles live here; sidebar demo @uses them
          docs-token-table/
        directives/
          docs-code-highlight.ts
          docs-highlight-languages.ts
        pages/
          overview/
          installation/
          foundations/    # *-docs pages: tokens, theme, typography, accessibility, icons
          basic/          # button, button-toggle, badge, card, separator, avatar, spinner, progress-bar
          form/           # input, textarea, select, autocomplete, checkbox, radio, switch, slider, datepicker, timepicker, form-field
          navigation/     # header, menu, paginator, sidebar, tabs, toolbar
          feedback/       # bottom-sheet, dialog, snackbar, tooltip
          data/           # chips, expansion-panel, grid-list, list, sort-header, stepper, table, tree
        services/
          theme.service.ts
          docs-responsive-nav.service.ts
        styles/
          _docs-page.scss        # shared preview/split/code/table/a11y primitives
          _docs-code-theme.scss  # highlight.js colours
        docs-nav.config.ts
        app.routes.ts
```

The `ui` project is configured as an Angular library and uses:

```text
@angular/build:ng-packagr
```

The documentation application exists alongside the library and is used to demonstrate and develop the components.

---

# 5. Styling / Design Tokens

The library should use design tokens rather than hard-coded values wherever practical.

The project already uses custom CSS variables along the lines of:

```css
--plim-space-6
--plim-color-surface
--plim-color-border
--plim-color-text
```

The token system covers colours, surfaces, borders, text, spacing, typography, radius,
shadows, focus rings, motion, and component dimensions (for example `--plim-header-height`).

Tokens still to expand or formalise further:

* Elevation scale beyond basic shadow tokens
* Icon sizing (`--plim-icon-size-*` planned; see Icons docs page)
* Additional component dimension tokens as components are added

Motion tokens include `--plim-duration-spin` (1s) for loading indicators.

The exact token naming convention should remain consistent with the existing `plim-*` namespace.

Theme switching uses CSS variable overrides. The default theme is dark (`:root`). Light theme
overrides are applied when `data-theme="light"` is set on the document root.

The docs application toggles theme via `ThemeService` (`projects/docs/src/app/services/theme.service.ts`),
which persists the choice to `localStorage` and respects `prefers-color-scheme` on first visit.

Avoid introducing arbitrary colours or spacing values when an appropriate design token exists.

---

# 6. Tailwind Decision

Tailwind was considered for the project, particularly for the documentation application.

However, the component library itself should remain based around SCSS/CSS and its own design tokens.

The portfolio and component library should not become dependent on Tailwind purely for styling the reusable components.

If Tailwind is used, it should primarily be considered for the documentation/application layer rather than replacing the library's SCSS architecture.

---

# 7. Component Prefix and Naming

Public library APIs use two naming patterns:

**Element components** use the `plim-` prefix:

```html
<plim-header>
```

**Attribute directives and slot markers** use `plim` + camelCase:

```html
<button plimButton>Save</button>
<div plimHeaderStart>...</div>
```

Examples of future element components:

```html
<plim-dialog>
<plim-card>
```

This is intentional because the library is called `plim-ui`.

The `ui` project uses the `plim` schematic prefix in `angular.json`. ESLint enforces `plim`
for library component and directive selectors in `projects/ui/eslint.config.js`.

Do not change library selectors back to `app-*` or `lib-*` merely to satisfy application lint defaults.

---

# 8. Accessibility

Accessibility is a major reason for building this library.

Components should be designed with:

* Semantic HTML
* Keyboard navigation
* Visible focus states
* Appropriate ARIA only where required
* Correct ARIA relationships
* Screen-reader compatibility
* Logical tab order
* Sufficient contrast
* Reduced-motion considerations
* Proper disabled/loading states
* Correct interactive element semantics

Do not add ARIA attributes unnecessarily when native HTML semantics already provide the required behaviour.

---

# 9. Component Host Conventions

Library components use signal `input()` for public APIs. Host state (CSS classes, ARIA, native
attributes) is declared in the component `host` metadata rather than `@HostBinding` getters:

```typescript
@Component({
  selector: 'plim-badge',
  host: {
    class: 'plim-badge',
    '[class.plim-badge--primary]': 'variant() === "primary"',
  },
})
```

`button[plimButton]` is an exception: ESLint allows an attribute selector override in
`projects/ui/eslint.config.js` because the component styles native buttons. The same override
list covers other attribute-hosted controls (`input[plimInput]`, `table[plimTable]`,
`button[plimMenuItem]`, and similar).

**Templates:** production components use `templateUrl` (and `styleUrl`) with sibling HTML/SCSS
files — not inline `template` strings. Unit-test host components may use inline templates.

**Tooltip:** `[plimTooltip]` is a **directive** (not an element component) so it can share a host
with `button[plimButton]`. The overlay panel is a private `TooltipPanel` component attached via
CDK `ComponentPortal`; panel styles live in `tooltip-panel.scss`.

---

# 10. Header Component

Composable top bar with three projection slots: `plimHeaderStart`, `plimHeaderCenter`,
`plimHeaderEnd`. Grid layout: `grid-template-columns: 1fr auto 1fr`.

**Sticky behaviour belongs on the component host**, not the internal `<header>`:

```css
:host(.plim-header--sticky) {
	position: sticky;
	top: 0;
	z-index: 100;
}
```

Public API: `<plim-header sticky>`. Verified in browser — internal `.header` must not be sticky.

Example:

```html
<plim-header sticky>
  <div plimHeaderStart><strong>plim-ui</strong></div>
  <div plimHeaderCenter>Docs</div>
  <div plimHeaderEnd><a href="…">GitHub</a></div>
</plim-header>
```

---

# 11. Button Component

The `Button` component styles native `<button>` elements via the `plimButton` attribute.
It follows the same file and `host` metadata pattern as `Header`.

Example usage:

```html
<button type="button" plimButton>Save</button>
<button type="button" plimButton variant="secondary">Cancel</button>
<button type="button" plimButton routerLink="/docs">Get started</button>
```

The component selector is:

```text
button[plimButton]
```

File structure:

```text
button/
  button.ts
  button.html
  button.scss
  button.spec.ts
```

Inputs:

* `variant` — `'primary' | 'secondary' | 'text'` (default: `'primary'`)
* `disabled` — boolean (default: `false`); binds to the native `disabled` attribute

Styles live in `projects/ui/src/lib/button/button.scss`. Host classes are set via `host` metadata.

Always use `<button type="button" plimButton>` for actions. Pair with `routerLink` when
navigation is triggered from a button. Use `variant="text"` for link-like actions.

---

# 12. Sidebar Component

The `plim-sidebar` component follows the same composable slot pattern as the header.

Example usage:

```html
<plim-sidebar open aria-label="Documentation navigation">
  <nav plimSidebarNav>
    ...
  </nav>

  <div plimSidebarFooter>
    ...
  </div>
</plim-sidebar>
```

Content slots:

```text
plimSidebarNav
plimSidebarFooter
```

Inputs:

* `open` — boolean (default: `true`). When `false`, the sidebar is hidden off-screen.
* `mode` — `'push' | 'overlay'` (default: `'push'`).
  * `push`: docked beside content; the parent should offset main content (for example with `margin-left: var(--plim-sidebar-width)`).
  * `overlay`: floats above content with elevation; main content keeps full width.
* `aria-label` — forwarded to the internal `<aside>` landmark.
* `fixed` — boolean (default: `true`). When `false`, positions relative to a containing element (for demos).

See the sidebar component docs page for an interactive push/overlay demo.

Toggle behaviour is controlled by the parent. A typical pattern:

* Start with `open` and push mode so content sits beside the sidebar.
* On close, set `open` to `false` so content expands to full width.
* On reopen, set `open` to `true` and `mode="overlay"` so the sidebar hovers over content.

---

# 13. Basic Components

All live under `projects/ui/src/lib/` and are exported from `public-api.ts`.

| Component | Selector | Notes |
| --- | --- | --- |
| Badge | `<plim-badge>` | `variant`: default, primary, success, warning, danger |
| Button toggle | `<plim-button-toggle-group>` / `<plim-button-toggle>` | Single or multiple selection |
| Card | `<plim-card>` | `fill`; slots: `plimCardHeader`, default body, `plimCardFooter` |
| Separator | `<plim-separator>` | `orientation`: horizontal \| vertical; `role="separator"` |
| Avatar | `<plim-avatar>` | `size`, optional `src`/`alt`; projects initials as fallback |
| Spinner | `<plim-spinner>` | `size`, `aria-label`; respects `prefers-reduced-motion` |
| Progress bar | `<plim-progress-bar>` | `mode`: determinate \| indeterminate |

Docs pages for each live under `projects/docs/src/app/pages/basic/`.

Form controls live under `projects/ui/src/lib/` and are exported from `public-api.ts`.
Custom overlays use CDK; native pairs style the matching HTML element.

| Component | Selector | Notes |
| --- | --- | --- |
| Input | `input[plimInput]` | Field-control styles on a native text input |
| Textarea | `textarea[plimTextarea]` | Field-control styles on a native textarea |
| Select | `<plim-select>` / `select[plimSelect]` | CDK panel and `<plim-option>`; native `<select>` pair |
| Autocomplete | `<plim-autocomplete>` | CDK panel; options via `<plim-option>` |
| Checkbox | `input[plimCheckbox]` | Native checkbox |
| Radio | `input[plimRadio]` | Native radio |
| Switch | `input[plimSwitch]` | Native checkbox with switch styling |
| Slider | `input[type=range][plimSlider]` | Native range input |
| Datepicker | `<plim-datepicker>` / `input[type=date][plimDatepicker]` | CDK calendar; native date input |
| Timepicker | `<plim-timepicker>` / `input[type=time][plimTimepicker]` | CDK panel; native time input |
| Form field | `<plim-form-field>` | Label, control, and hint layout |
| Option | `<plim-option>` | Shared by select and autocomplete |

---

# 14. Style Packaging

Global library styles are built with ng-packagr and copied to `dist/plim-ui/styles/` via
`projects/ui/ng-package.json` assets configuration.

Consumers should import:

```scss
@use 'plim-ui/styles/styles';
```

after building the library (`npm run build:ui`).

Component-specific styles that must apply globally (design tokens, projected table rows) belong
in `projects/ui/src/styles/` (`_table.scss` and shared mixins). Component and directive styles
belong next to their source files — one `styleUrl` SCSS file per component. Shared mixins
(`_field-control.scss`, `_field-icons.scss`, `_toggle-control.scss`, `_option-list.scss`) stay in
`projects/ui/src/styles/` and are `@use`d by those component files.

**Table:** `table[plimTable]` styles projected `thead`/`tbody` content via global `.plim-table`
rules because emulated encapsulation does not reach projected row markup.

---

# 15. Documentation Application

Live site: [fexost.github.io/plim-ui](https://fexost.github.io/plim-ui/) (GitHub Pages, base href `/plim-ui/`).

**Shell:** sticky `plim-header` (brand mark + wordmark, theme toggle, GitHub), `plim-sidebar` nav,
responsive overlay menu below 960px (`DocsResponsiveNavService`).

**Nav config:** `docs-nav.config.ts` — categories: Get started, Foundations, Basic, Form,
Navigation, Feedback, Data. All inventory entries currently have docs routes. Roadmap status
is maintained in this document (see Component inventory below), not in code.

**Page routes:**

```text
overview, installation
foundations/tokens, theme, typography, accessibility, icons
basic/button, button-toggle, badge, card, separator, avatar, spinner, progress-bar
form/input, textarea, select, autocomplete, checkbox, radio, switch, slider,
     datepicker, timepicker, form-field
navigation/header, menu, paginator, sidebar, tabs, toolbar
feedback/bottom-sheet, dialog, snackbar, tooltip
data/chips, expansion-panel, grid-list, list, sort-header, stepper, table, tree
```

**Layouts:**

* `DocsGuideLayout` — get started + foundations (intro, separator, sections)
* `DocsComponentLayout` — component reference (breadcrumbs, jump nav, preview / a11y / API sections)

Both layouts use `hostDirectives: [DocsHighlightCodeDirective]` (`selector: [appHighlightCode]`) for syntax highlighting. Standalone pages such as Overview attach the same directive on the page component.

**Native HTML in docs:** Set `nativeElement` on `DocsComponentLayout` when a component is an
attribute directive on a native element (shows the intro badge). Add a **Native HTML** preview
section only when a native alternative can carry the same content — for example
<code>&lt;plim-select&gt;</code> options mapped to a native <code>&lt;select&gt;</code>. Do not
add native preview sections to directive-only controls such as <code>plimInput</code> or
<code>plimButton</code>, or to components with no useful native counterpart such as
<code>plim-autocomplete</code>. When both plim and native previews exist, show the plim
component first (for example paginator with `pageSizeControl="plim"` before native).

**Docs-only dependencies:** `highlight.js` (not part of the published library). Theme colours
for code blocks in `_docs-code-theme.scss` (Cursor / VS Code–style light and dark).

**Docs consume library components** wherever practical (cards, badges, buttons, separators on
overview and guide pages).

**Brand assets:** `projects/docs/public/brand/` — `mark.svg`, `logo-dark.svg`, `logo-light.svg`,
`favicon.svg`, `app-icon.svg`.

**Not yet implemented:** site search.

**Docs SCSS:**

* Shared primitives stay in `projects/docs/src/app/styles/` (`_docs-page.scss`,
  `_docs-code-theme.scss`) and are imported from `projects/docs/src/styles.scss`.
* Form preview helpers stay in `pages/form/_form-docs-preview.scss` and are `@use`d by form pages.
* App shell chrome lives in `app.scss` next to the app component.
* Nav link styles live in `components/docs-nav/docs-nav.scss`; the sidebar demo `@use`s that file.
* Page-specific styles live next to the page (`overview.scss`, `card-docs.scss`).
* Component and guide reference pages use a `*-docs.ts` filename (`button-docs.ts`,
  `tokens-docs.ts`, `header-docs.ts`).

The docs styling uses SCSS in the docs app for layout and page structure. Reusable component
styling remains in the library.

---

# 16. CI, Deployment, and GitHub Actions

**npm scripts** (root `package.json`):

| Script | Purpose |
| --- | --- |
| `start` | `build:ui` then `ng serve docs` |
| `build:ui` | Production library build → `dist/plim-ui` |
| `build:docs` | Production docs build (`--base-href /plim-ui/`) |
| `build:production` | Both builds |
| `test` / `test:ui` / `test:docs` | Vitest (docs tests require a prior `build:ui`) |
| `lint` | ESLint for `ui` and `docs` |

All workflows use **Node.js 22**, `npm ci`, and npm cache via `actions/setup-node@v4`.

### `ci.yml` — CI

| | |
| --- | --- |
| **Triggers** | Pull requests; pushes to `main` |
| **Concurrency** | One run per ref; newer runs cancel in-progress |

Four parallel jobs:

| Job | Command | Notes |
| --- | --- | --- |
| `lint-ui` | `npx ng lint ui` | ESLint for the library |
| `lint-docs` | `npx ng lint docs` | ESLint for the docs app |
| `test-ui` | `npm run test:ui` | Vitest, library unit tests |
| `test-docs` | `npm run build:ui` then `npm run test:docs` | Docs imports `dist/plim-ui` via tsconfig path |

### `deploy-docs.yml` — Deploy docs to GitHub Pages

| | |
| --- | --- |
| **Triggers** | Push to `main`; manual `workflow_dispatch` |
| **Concurrency** | `group: pages` — cancel in-progress deploys |
| **Permissions** | `contents: read`, `pages: write`, `id-token: write` |
| **Live URL** | https://fexost.github.io/plim-ui/ |

Two sequential jobs:

1. **`build`** — `npm run build:production`; copies `index.html` → `404.html` for SPA routing; uploads `dist/docs/browser` as a Pages artifact.
2. **`deploy`** — deploys the artifact via `actions/deploy-pages@v4` to the `github-pages` environment.

### `publish-npm.yml` — Publish library to npm

| | |
| --- | --- |
| **Triggers** | Manual `workflow_dispatch` only (requires semver `version` input) |
| **Concurrency** | `group: publish-npm` — do not cancel in-progress publishes |
| **Environment** | `npm-publish` (trusted publishing / OIDC) |
| **Permissions** | `contents: write`, `id-token: write` |

Steps: validate semver → checkout (full history) → set version in `projects/ui/package.json` →
`npm run build:ui` → `npm publish --provenance --access public` from `dist/plim-ui` → create and
push git tag `v{version}`.

### `security.yml` — Security audits

| | |
| --- | --- |
| **Triggers** | Pull requests; pushes to `main`; weekly cron (Mon 06:00 UTC); manual `workflow_dispatch` |
| **Concurrency** | One run per ref; cancel in-progress |

Three jobs:

| Job | Purpose |
| --- | --- |
| `audit-workspace` | `npm audit --omit=dev --audit-level=high` on root lockfile |
| `audit-ui` | Build library, generate lockfile in `dist/plim-ui`, audit the **published** package (`--omit=peer`) |
| `dependency-review` | PRs only — `dependency-review-action` fails on high-severity dependency changes |

---

# 17. Development Principles

When implementing new components:

1. Prefer modern Angular APIs where they improve clarity.
2. Keep components standalone and reusable.
3. Avoid unnecessary dependencies.
4. Keep public APIs small and predictable.
5. Prefer composition and content projection where appropriate.
6. Use semantic HTML.
7. Design accessibility into components from the beginning.
8. Use `plim-*` for elements and `plimCamelCase` for attributes/directives consistently.
9. Use design tokens instead of scattered hard-coded design values.
10. Avoid overengineering.
11. Ensure components work in both light and dark themes.
12. Consider keyboard and screen-reader behaviour.
13. Test real browser behaviour rather than assuming CSS behaviour.
14. Keep the library suitable for use outside the documentation app.
15. Don't introduce application-specific assumptions into reusable components.

---

# 18. Current State

* Angular 21 workspace: `ui` (library) + `docs` (application).
* Angular CDK installed; overlay components (**select, autocomplete, datepicker, timepicker,
  menu, dialog, bottom sheet, snackbar, tooltip**) use CDK Overlay (peer dependency).
* ESLint / angular-eslint; Vitest for unit tests (134+ library tests).
* Library built with ng-packagr → `dist/plim-ui`; styles at `dist/plim-ui/styles/`.
* Design tokens: colour, typography, spacing, radius, shadow, focus, motion (`--plim-duration-spin`), component dimensions, semantic tinted surfaces (`--plim-color-*-surface*`).
* Light/dark themes via CSS variables; docs `ThemeService` persists choice.
* **Published components:** Basic, Form, Navigation (Header, Menu, Paginator, Sidebar, Tabs,
  Toolbar), Feedback (Bottom sheet, Dialog, Snackbar, Tooltip), Data (Chips, Expansion panel,
  Grid list, List, Sort, Table, Stepper, Tree); shared `plim-option`.
* Docs: all component categories documented; Foundations guides; overview, installation.
* Docs: syntax-highlighted code blocks, equal-height preview/code splits, mobile nav overlay.
* GitHub Actions: CI (`ci.yml`), docs deploy (`deploy-docs.yml`), npm publish (`publish-npm.yml`), security audits (`security.yml`).
* `npm start` → `build:ui` + `ng serve docs`.

---

# 19. Direction Going Forward

The library should now be developed systematically rather than creating isolated components without a shared design system.

Before adding many components, establish the foundations:

1. ~~Finalise design tokens.~~ (initial scale in place; expand as needed)
2. ~~Establish typography.~~
3. ~~Establish spacing scale.~~
4. ~~Establish radius scale.~~
5. ~~Establish elevation/shadow tokens.~~
6. ~~Establish focus-ring behaviour.~~
7. ~~Establish light/dark theme architecture.~~
8. ~~Establish common component conventions.~~ (host metadata, composable slots, docs layouts)
9. ~~Establish documentation conventions.~~ (component page template, highlight.js, mobile shell)
10. Expand accessibility conventions and icon sizing tokens.

Immediate priorities:

1. ~~Basic primitives~~ (Button, Badge, Card, Separator, Avatar, Spinner)
2. ~~Foundation reference pages~~ (Tokens, Theme, Typography, Accessibility)
3. ~~Navigation components and docs~~ — Header, Menu, Paginator, Sidebar, Tabs, Toolbar
4. ~~Form primitives~~ — Input, Textarea, Select, Autocomplete, Checkbox, Radio, Switch,
   Slider, Datepicker, Timepicker, Form field (overlay panels use CDK; native pairs style
   the matching HTML element)
5. ~~Feedback components and docs~~ — Bottom sheet, Dialog, Snackbar, Tooltip
6. ~~Data components and docs~~ — Chips, Expansion panel, Grid list, List, Sort header,
   Stepper, Table, Tree
7. Site search; polish and expand accessibility/icon token guidance

### Component inventory

The docs sidebar is driven by `DOCS_NAV` in `docs-nav.config.ts`. This table tracks
Material-aligned roadmap status and is maintained here — not duplicated in application code.
Names below use familiar Material labels; **plim name** is shown where the library uses a
different public API.

| Component | Category | Status | plim name / docs |
| --- | --- | --- | --- |
| Autocomplete | Form | **implemented** | `<plim-autocomplete>` |
| Badge | Basic | **implemented** | `<plim-badge>` |
| Bottom sheet | Feedback | **implemented** | `<plim-bottom-sheet>` |
| Button | Basic | **implemented** | `button[plimButton]` |
| Button toggle | Basic | **implemented** | `<plim-button-toggle-group>` |
| Card | Basic | **implemented** | `<plim-card>` |
| Checkbox | Form | **implemented** | `input[plimCheckbox]` |
| Chips | Data | **implemented** | `<plim-chip-set>` / `<plim-chip>` |
| Datepicker | Form | **implemented** | `<plim-datepicker>` / `input[type=date][plimDatepicker]` |
| Dialog | Feedback | **implemented** | `<plim-dialog>` |
| Divider | Basic | **implemented** | `<plim-separator>` |
| Expansion panel | Data | **implemented** | `<plim-expansion-panel>` |
| Form field | Form | **implemented** | `<plim-form-field>` |
| Grid list | Data | **implemented** | `<plim-grid-list>` / `<plim-grid-tile>` |
| Icon | Foundations | partial | Icons guide (`foundations/icons`) |
| Input | Form | **implemented** | `input[plimInput]` |
| List | Data | **implemented** | `<plim-list>` / `<plim-list-item>` |
| Menu | Navigation | **implemented** | `<plim-menu>` / `[plimMenuTrigger]` |
| Paginator | Navigation | **implemented** | `<plim-paginator>` |
| Progress bar | Basic | **implemented** | `<plim-progress-bar>` |
| Progress spinner | Basic | **implemented** | `<plim-spinner>` |
| Radio button | Form | **implemented** | `input[plimRadio]` |
| Select | Form | **implemented** | `<plim-select>` (CDK overlay); native `select[plimSelect]` |
| Sidenav | Navigation | **implemented** | `<plim-sidebar>` |
| Slide toggle | Form | **implemented** | `input[plimSwitch]` |
| Slider | Form | **implemented** | `input[type=range][plimSlider]` |
| Snackbar | Feedback | **implemented** | `<plim-snackbar>` |
| Sort header | Data | **implemented** | `[plimSort]` / `th[plimSortHeader]` |
| Stepper | Data | **implemented** | `<plim-stepper>` / `<plim-step>` |
| Table | Data | **implemented** | `table[plimTable]` |
| Tabs | Navigation | **implemented** | `<plim-tab-group>` / `<plim-tab>` |
| Timepicker | Form | **implemented** | `<plim-timepicker>` / `input[type=time][plimTimepicker]` |
| Toolbar | Navigation | **implemented** | `<plim-toolbar>` |
| Tooltip | Feedback | **implemented** | `[plimTooltip]` |
| Tree | Data | **implemented** | `<plim-tree>` / `<plim-tree-node>` |

**Also shipped (not in Material list):** Avatar (`<plim-avatar>`), Textarea
(`textarea[plimTextarea]`), Header (`<plim-header>`).

Inventory ordering in the sidebar is alphabetical within each category. This
ordering is not mandatory for implementation priority — establish reusable
primitives before building more complicated components.

---

# 20. How Cursor Should Work on This Project

When making changes, Cursor should preserve the existing architectural direction rather than treating this as a generic Angular application.

Before implementing a feature:

* Inspect the existing component architecture.
* Reuse existing tokens.
* Reuse existing patterns.
* Avoid duplicating styles.
* Check accessibility implications.
* Check how the component will be consumed from another Angular application.
* Consider the generated library package, not just the documentation app.
* Keep public APIs intentionally small.

When fixing bugs, first identify whether the issue is caused by:

* Angular component structure
* Host element behaviour
* CSS/layout
* Scrolling context
* Content projection
* Angular inputs/signals
* Encapsulation
* Documentation-app-specific styling

Do not immediately work around a problem in the documentation application if the reusable component itself is the correct place to solve it.

---

# 21. Overall Goal

The finished project should feel like a component library that could realistically be published and used, while simultaneously demonstrating the engineering and design decisions behind it.

The portfolio should ultimately be able to consume `plim-ui` as its own component library rather than having the portfolio contain a collection of one-off components.

The standard to aim for is:

**small API + composable components + strong accessibility + coherent design system + polished documentation + modern Angular architecture.**
