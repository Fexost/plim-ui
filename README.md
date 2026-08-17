# plim-ui

An accessibility-first Angular component library with composable primitives, design tokens, and light/dark theme support. Built as a reusable package (`plim-ui`) alongside a documentation app that showcases each component.

## Workspace

| Project | Path | Description |
| --- | --- | --- |
| **ui** | `projects/ui` | Publishable Angular library (`plim-ui`) |
| **docs** | `projects/docs` | Documentation site and live component previews |

## Requirements

- Node.js 22+
- npm 10+
- Angular CLI 21

## Quick start

Install dependencies, build the library, and run the docs app:

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200). The docs app includes overview, installation, accessibility, and component reference pages.

## Scripts

| Command | Description |
| --- | --- |
| `npm start` | Build the library, then serve the docs app |
| `npm run build` | Build the library to `dist/plim-ui` |
| `npm run watch` | Rebuild the library on file changes |
| `npm test` | Run unit tests (Vitest) |
| `npm run lint` | Lint the workspace |

## Using the library

Build the library first:

```bash
npm run build
```

Import standalone components in your Angular app:

```typescript
import { Header, Button, Sidebar } from 'plim-ui';
```

Include global styles and design tokens:

```scss
@use 'plim-ui/styles/styles';
```

After building, styles are available at `dist/plim-ui/styles/styles.scss`.

## Components

| Component | Selector | Description |
| --- | --- | --- |
| Header | `<plim-header>` | Composable top bar with start, centre, and end slots; optional `sticky` |
| Button | `button[plimButton]` | Styled native button with `primary` and `secondary` variants |
| Sidebar | `<plim-sidebar>` | Navigation panel with nav and footer slots; `push` or `overlay` mode |

Naming follows two patterns:

- **Element components** — `plim-*` prefix (e.g. `<plim-header>`)
- **Attribute directives / slot markers** — `plim` + camelCase (e.g. `plimHeaderStart`, `plimButton`)

## Theming

Design tokens use the `--plim-*` CSS variable namespace. Dark theme is the default (`:root`); light theme applies when `data-theme="light"` is set on the document root.

## Project context

Architecture, conventions, and development guidelines are documented in [AGENTS.md](./AGENTS.md).

## License

Private — not published to npm.
