# plim-ui

An open-source, accessibility-first Angular component library with composable primitives, design tokens, and light/dark theme support.

Install `plim-ui` in any Angular 21+ app, import standalone components, and include the global styles to get tokens and theming out of the box.

[![npm version](https://img.shields.io/npm/v/plim-ui)](https://www.npmjs.com/package/plim-ui)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

## Install

```bash
npm install plim-ui
```

Requires Angular 21+ (`@angular/common` and `@angular/core` as peer dependencies).

## Usage

Import components where you need them:

```typescript
import { Header, Button, Sidebar } from 'plim-ui';
```

Include global styles and design tokens once in your application styles:

```scss
@use 'plim-ui/styles/styles';
```

Toggle light mode by setting `data-theme="light"` on the document root.

## Components

| Component | Selector | Description |
| --- | --- | --- |
| Header | `<plim-header>` | Composable top bar with start, centre, and end slots; optional `sticky` |
| Button | `button[plimButton]` | Styled native button with `primary` and `secondary` variants |
| Sidebar | `<plim-sidebar>` | Navigation panel with nav and footer slots; `push` or `overlay` mode |

Naming follows two patterns:

- **Element components** — `plim-*` prefix (e.g. `<plim-header>`)
- **Attribute directives / slot markers** — `plim` + camelCase (e.g. `plimHeaderStart`, `plimButton`)

Browse the [documentation site](https://github.com/Fexost/plim-ui) for usage examples, accessibility notes, and API reference.

## Theming

Design tokens use the `--plim-*` CSS variable namespace. Dark theme is the default (`:root`); light theme overrides apply when `data-theme="light"` is set on the document root.

## Contributing

Contributions are welcome. To work on the library locally:

```bash
git clone https://github.com/Fexost/plim-ui.git
cd plim-ui
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) to browse the docs site.

| Command | Description |
| --- | --- |
| `npm start` | Build the library, then serve the docs app |
| `npm run build` | Build the library to `dist/plim-ui` |
| `npm run watch` | Rebuild the library on file changes |
| `npm test` | Run unit tests (Vitest) |
| `npm run lint` | Lint the workspace |

To publish a release, build the library and publish from `dist/plim-ui`:

```bash
npm run build
cd dist/plim-ui
npm publish
```

Architecture, conventions, and development guidelines are documented in [AGENTS.md](./AGENTS.md).

## License

[MIT](./LICENSE) © Contributors
