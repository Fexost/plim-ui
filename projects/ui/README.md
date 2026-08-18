# plim-ui

Open-source Angular component library for building accessible, composable UI with a shared design token system.

**Documentation:** [fexost.github.io/plim-ui](https://fexost.github.io/plim-ui/)

## Install

```bash
npm install plim-ui
```

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

### Basic

#### Badge

Inline label for status, categories, or metadata.

```html
<plim-badge>Default</plim-badge>
<plim-badge variant="primary">Primary</plim-badge>
<plim-badge variant="success">Success</plim-badge>
```

| Input | Type | Default |
| --- | --- | --- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |

#### Button

Styles native `<button>` elements via the `plimButton` attribute.

```html
<button type="button" plimButton>Save</button>
<button type="button" plimButton variant="secondary">Cancel</button>
<button type="button" plimButton disabled>Publish</button>
```

| Input | Type | Default |
| --- | --- | --- |
| `variant` | `'primary' \| 'secondary'` | `'primary'` |
| `disabled` | `boolean` | `false` |

Pair with `routerLink` when navigation is triggered from a button.

#### Card

Elevated surface with optional header and footer slots.

```html
<plim-card>
  <div plimCardHeader>Account</div>
  <p>Body content</p>
  <div plimCardFooter>
    <button type="button" plimButton>Save</button>
  </div>
</plim-card>
```

Content slots: `plimCardHeader`, default body, `plimCardFooter`.

#### Separator

Visual divider between stacked or inline content.

```html
<plim-separator />
<plim-separator orientation="vertical" />
```

| Input | Type | Default |
| --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` |

#### Avatar

User or entity image with initials fallback.

```html
<plim-avatar size="md" src="/avatar.jpg" alt="Steven">ST</plim-avatar>
<plim-avatar size="sm">ST</plim-avatar>
```

| Input | Type | Default |
| --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `src` | `string` | — |
| `alt` | `string` | `''` |

Project initials as content when `src` is omitted.

#### Spinner

Loading indicator with accessible status semantics.

```html
<plim-spinner size="md" aria-label="Loading" />
```

| Input | Type | Default |
| --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` |
| `aria-label` | `string` | `'Loading'` |

### Navigation

#### Header

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

Sticky positioning is applied to the component host, not the internal landmark.

#### Sidebar

Navigation panel with nav and footer slots.

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
import {
  Avatar,
  Badge,
  Button,
  Card,
  Header,
  Separator,
  Sidebar,
  Spinner,
} from 'plim-ui';
```

## Design tokens

Tokens cover colour, typography, spacing, radius, shadows, focus rings, motion, and component dimensions under the `--plim-*` namespace. See the [tokens reference](https://fexost.github.io/plim-ui/foundations/tokens) for the full list.

## Links

- [Repository](https://github.com/Fexost/plim-ui)
- [Documentation](https://fexost.github.io/plim-ui/)
- [npm](https://www.npmjs.com/package/plim-ui)

## License

MIT
