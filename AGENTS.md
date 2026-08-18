# Important

This document contains the project's architectural context, design philosophy,
historical decisions, and intended direction.

The actual repository is the source of truth for the current implementation.
If this document conflicts with the code, inspect the code and update this
document rather than blindly following outdated information.

Do not make broad architectural changes without first explaining why they
are necessary.

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
* Angular CDK 21
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

---

# 4. Workspace Structure

The library currently follows the Angular library structure:

```text
projects/
  ui/
    src/
      lib/
        button/
        header/
        sidebar/
      styles/
        _tokens.scss
        _theme.scss
        styles.scss
      public-api.ts
  docs/
    src/
      app/
        pages/
          overview/
          installation/
          accessibility/
          components/
        services/
          theme.service.ts
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
* Icon sizing
* Additional component dimension tokens as components are added

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

# 9. Current Header Component

The first significant component being developed is a reusable header/navigation component.

The desired API is intentionally composable.

Example usage:

```html
<plim-header sticky>
  <div plimHeaderStart>
    <strong>plim-ui</strong>
  </div>

  <div plimHeaderCenter>
    <p>Docs</p>
  </div>

  <div plimHeaderEnd>
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
  </div>
</plim-header>
```

The component provides three content slots:

```text
plimHeaderStart
plimHeaderCenter
plimHeaderEnd
```

This allows users of the component to control the content without the header becoming tightly coupled to a particular navigation structure.

The header layout uses three grid columns:

```css
grid-template-columns: 1fr auto 1fr;
```

This allows the centre content to remain visually centred while start/end content occupy the available space.

---

# 10. Header Structure

The current internal structure is:

```html
<header class="header">
  <div class="header-start">
    <ng-content select="[plimHeaderStart]" />
  </div>

  <div class="header-center">
    <ng-content select="[plimHeaderCenter]" />
  </div>

  <div class="header-end">
    <ng-content select="[plimHeaderEnd]" />
  </div>
</header>
```

The header itself uses:

```css
.header {
  box-sizing: border-box;

  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  width: 100%;
  min-height: var(--plim-header-height);
  padding: 0 var(--plim-space-6);

  background: var(--plim-color-surface);
  border-bottom: 1px solid var(--plim-color-border);

  color: var(--plim-color-text);
}
```

The individual content areas are flex containers:

```css
.header-start {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 0;
}

.header-center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
}

.header-end {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  min-width: 0;
}
```

---

# 11. Important Sticky Header Finding

The header initially attempted to implement sticky behaviour by putting:

```css
.header--sticky {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

on the internal `<header>` element.

Angular was correctly applying the class:

```html
<header class="header header--sticky">
```

but the header did not remain sticky during page scrolling.

The page itself was tested with:

```html
<main>
  <router-outlet />
  <div style="height: 3000px"></div>
</main>
```

so there was definitely enough content to scroll.

The global stylesheet was also tested with:

```css
html,
body {
  margin: 0;
  padding: 0;
  overflow: visible;
}
```

and the stylesheet contained no other relevant scrolling rules.

The important discovery was that moving the sticky positioning to the Angular component host fixed the problem.

Therefore the preferred implementation is for the **`<plim-header>`** host itself to become sticky, rather than making its internal `<header>` sticky.

Conceptually:

```html
<plim-header class="header--sticky">
  <header class="header">
    ...
  </header>
</plim-header>
```

rather than:

```html
<plim-header>
  <header class="header header--sticky">
    ...
  </header>
</plim-header>
```

This means the sticky behaviour belongs to the component as a whole.

---

# 12. Recommended Header Sticky Implementation

The host currently has:

```css
:host {
  display: block;
  width: 100%;
}
```

The sticky state should therefore be implemented on the host:

```css
:host(.header--sticky) {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

The internal `.header` should not itself need `position: sticky`.

The public API should remain:

```html
<plim-header sticky>
```

The component should translate the `sticky` input into the host class.

If using classic Angular inputs:

```ts
@Input() sticky = false;
```

with an appropriate host binding.

If using modern Angular signal inputs:

```ts
sticky = input(false);
```

the implementation should use the signal correctly.

The important architectural principle is:

> `sticky` is a behaviour of the `plim-header` component, so the host element should own the sticky positioning.

---

# 13. Current Header Host

The base host styling should remain:

```css
:host {
  display: block;
  width: 100%;
}
```

and the sticky state:

```css
:host(.header--sticky) {
  position: sticky;
  top: 0;
  z-index: 100;
}
```

This implementation has been manually tested and confirmed to make the header stick while scrolling.

---

# 14. Current Button Component

The `Button` component styles native `<button>` elements via the `plimButton` attribute.
It follows the same file and host-binding pattern as `Header`.

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

* `variant` — `'primary' | 'secondary'` (default: `'primary'`)
* `disabled` — boolean (default: `false`); binds to the native `disabled` attribute

Styles live in `projects/ui/src/lib/button/button.scss` and are applied to the host via encapsulation.
Host classes use `@HostBinding`, matching the header pattern.

Always use `<button type="button" plimButton>` for actions. Pair with `routerLink` when
navigation is triggered from a button.

---

# 15. Current Sidebar Component

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

# 16. Style Packaging

Global library styles are built with ng-packagr and copied to `dist/plim-ui/styles/` via
`projects/ui/ng-package.json` assets configuration.

Consumers should import:

```scss
@use 'plim-ui/styles/styles';
```

after building the library (`npm run build`).

Component-specific styles that must apply globally (such as design tokens) belong in
`projects/ui/src/styles/`. Component and directive styles belong next to their source files.

---

# 17. Documentation Application

The documentation application is important because the library is intended to demonstrate component quality.

Current docs structure:

* Sticky `plim-header` with brand, search placeholder, theme toggle, and GitHub link
* Left sidebar via `plim-sidebar` with nav grouped by category (`docs-nav.config.ts`):
  * **Get started** — Overview, Installation
  * **Foundations** — Tokens, Theme, Typography, Accessibility, Icons (+ Accessibility utilities planned)
  * **Basic** — Button (+ Badge, Card, Separator, Avatar, Spinner planned)
  * **Form** — Input, Textarea, Select, Checkbox, Radio, Switch, Form field (planned)
  * **Navigation** — Header, Sidebar (+ Tabs, Breadcrumb, Pagination planned)
  * **Feedback** — Alert, Toast, Dialog, Tooltip, Popover (planned)
  * **Data** — Table, List, Accordion, Tree (planned)
* Shared layouts: `DocsGuideLayout` (get started + foundations), `DocsComponentLayout` (component reference pages)
* Routed pages under `/overview`, `/installation`, `/foundations/*`, and `/components/*`
* Theme toggle via `ThemeService`

The docs should eventually also provide:

* Component previews for all public components
* Usage examples and API tables for each component
* Accessibility notes per component
* Design/token reference pages
* Interactive controls where useful
* Search (`⌘ K` placeholder exists but is not yet functional)

The documentation should feel similar to a modern component-library documentation site rather than a generic Angular starter page.

The docs styling uses SCSS in the docs app for layout and page structure. Reusable component styling remains in the library.

---

# 18. Development Principles

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

# 19. Current State

At this point:

* Angular workspace is configured with `ui` (library) and `docs` (application) projects.
* Angular CDK is installed but not yet used by any component.
* ESLint/angular-eslint is configured and linting successfully.
* The library is built with ng-packagr; global styles are copied to `dist/plim-ui/styles/`.
* The `ui` project uses the `plim` schematic prefix and ESLint selector rules.
* Design tokens exist for colours, typography, spacing, radius, shadows, focus, motion, and header height.
* Light/dark themes are defined via CSS variables; docs app toggles theme via `ThemeService`.
* `plim-header` exists with start, centre, and end content projection and a `sticky` input.
* Sticky behaviour is applied to the Angular host element (`:host(.header--sticky)`).
* `Button` component exists (`plimButton` on `<button>`) with `primary` and `secondary` variants.
* `plim-sidebar` exists with nav/footer slots and an `open` input.
* Docs sidebar navigation is grouped by component category in `docs-nav.config.ts`; unimplemented entries render as coming-soon labels.
* `DocsGuideLayout` covers get-started and foundations pages; `DocsComponentLayout` covers component reference pages.
* Docs app uses `plim-sidebar`, `plim-header`, and `plimButton` on native `<button>` elements.
* `npm start` runs `ng build --project ui && ng serve --project docs`.

---

# 20. Direction Going Forward

The library should now be developed systematically rather than creating isolated components without a shared design system.

Before adding many components, establish the foundations:

1. ~~Finalise design tokens.~~ (initial scale in place; expand as needed)
2. ~~Establish typography.~~ (initial scale in place)
3. ~~Establish spacing scale.~~ (in place)
4. ~~Establish radius scale.~~ (in place)
5. ~~Establish elevation/shadow tokens.~~ (initial tokens in place)
6. ~~Establish focus-ring behaviour.~~ (initial tokens in place)
7. ~~Establish light/dark theme architecture.~~ (in place via CSS variables + docs toggle)
8. Establish common component conventions (header and button patterns established; sidebar next).
9. Establish accessibility conventions.
10. Establish documentation conventions.

Then components can be built consistently on top of those foundations.

Immediate component priorities:

1. ~~Button and sidebar docs pages~~
2. ~~Header docs page~~
3. Form primitives — Input and Select first, then Checkbox, Radio, Switch, and Form field
4. Foundation reference pages (Tokens, Theme, Typography)

Potential component progression:

```text
Foundations
├── Tokens
├── Theme
├── Typography
├── Icons
└── Accessibility utilities

Basic
├── Button
├── Badge
├── Card
├── Separator
├── Avatar
└── Spinner

Form
├── Input
├── Textarea
├── Select
├── Checkbox
├── Radio
├── Switch
└── Form field

Navigation
├── Header
├── Tabs
├── Breadcrumb
├── Pagination
└── Sidebar

Feedback
├── Alert
├── Toast
├── Dialog
├── Tooltip
└── Popover

Data
├── Table
├── List
├── Accordion
└── Tree
```

This ordering is not mandatory, but the general principle is to establish reusable primitives before building more complicated components.

---

# 21. How Cursor Should Work on This Project

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

# 22. Overall Goal

The finished project should feel like a component library that could realistically be published and used, while simultaneously demonstrating the engineering and design decisions behind it.

The portfolio should ultimately be able to consume `plim-ui` as its own component library rather than having the portfolio contain a collection of one-off components.

The standard to aim for is:

**small API + composable components + strong accessibility + coherent design system + polished documentation + modern Angular architecture.**
