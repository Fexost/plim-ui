# plim-ui

Angular component library for building accessible, composable UI with a shared design token system.

## Install

This package is developed inside the `plim-ui` monorepo. Build it locally before importing:

```bash
# from the workspace root
npm run build
```

Output is written to `dist/plim-ui`. Configure your app to resolve `plim-ui` to that path (the workspace uses a TypeScript path alias during development).

Peer dependencies:

- `@angular/common` ^21.2.0
- `@angular/core` ^21.2.0

## Styles

Import global tokens and theme variables once in your application styles:

```scss
@use 'plim-ui/styles/styles';
```

Toggle light mode by setting `data-theme="light"` on the document root.

## Components

All components are standalone and tree-shakeable.

### Header

Composable top bar with three content projection slots.

```html
<plim-header sticky>
  <div plimHeaderStart><strong>My app</strong></div>
  <div plimHeaderCenter>Navigation</div>
  <div plimHeaderEnd>
    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</plim-header>
```

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `sticky` | `boolean` | `false` | Keeps the header visible while scrolling |

### Button

Styles native `<button>` elements via the `plimButton` attribute.

```html
<button type="button" plimButton>Save</button>
<button type="button" plimButton variant="secondary">Cancel</button>
<button type="button" plimButton disabled>Publish</button>
```

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style |
| `disabled` | `boolean` | `false` | Binds to the native `disabled` attribute |

Pair with `routerLink` when navigation is triggered from a button.

### Sidebar

Fixed navigation panel with nav and footer slots.

```html
<plim-sidebar open mode="push" aria-label="Main navigation">
  <nav plimSidebarNav>...</nav>
  <div plimSidebarFooter>...</div>
</plim-sidebar>
```

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `open` | `boolean` | `true` | Shows or hides the sidebar |
| `mode` | `'push' \| 'overlay'` | `'push'` | Push offsets content; overlay floats above it |
| `fixed` | `boolean` | `true` | Fixes to the viewport; set `false` for contained demos |
| `aria-label` | `string` | — | Accessible name for the aside landmark |

In `push` mode, offset main content with `margin-left: var(--plim-sidebar-width)`.

## Public API

```typescript
import { Header, Button, Sidebar } from 'plim-ui';
```

See `src/public-api.ts` for the full export surface.

## Development

Generate a new library component from the workspace root:

```bash
ng generate component my-component --project=ui
```

Build:

```bash
ng build ui
```

Run tests:

```bash
ng test ui
```

Component selectors must use the `plim` prefix (elements) or `plimCamelCase` (attributes), enforced by ESLint in `projects/ui/eslint.config.js`.

## Design tokens

Tokens live in `src/styles/_tokens.scss` and `src/styles/_theme.scss`. Prefer `--plim-*` variables over hard-coded values when extending or consuming the library.
