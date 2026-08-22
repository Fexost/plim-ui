# plim-ui

An open-source, accessibility-first Angular component library with composable primitives, design tokens, and light/dark theme support.

Install `plim-ui` in any Angular 21+ app, import standalone components, and include the global stylesheet to get tokens and theming out of the box.

### Package

[![npm version](https://img.shields.io/npm/v/plim-ui)](https://www.npmjs.com/package/plim-ui)
[![license: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

**Documentation:** [fexost.github.io/plim-ui](https://fexost.github.io/plim-ui/)

### CI — Lint

[![CI Lint | ui](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml/badge.svg?job=lint-ui&label=CI%20Lint%20%7C%20ui)](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml)
[![CI Lint | docs](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml/badge.svg?job=lint-docs&label=CI%20Lint%20%7C%20docs)](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml)

### CI — Test

[![CI Test | ui](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml/badge.svg?job=test-ui&label=CI%20Test%20%7C%20ui)](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml)
[![CI Test | docs](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml/badge.svg?job=test-docs&label=CI%20Test%20%7C%20docs)](https://github.com/Fexost/plim-ui/actions/workflows/ci.yml)

### Security — Audit

[![Security Audit | workspace](https://github.com/Fexost/plim-ui/actions/workflows/security.yml/badge.svg?job=audit-workspace&label=Security%20Audit%20%7C%20workspace)](https://github.com/Fexost/plim-ui/actions/workflows/security.yml)
[![Security Audit | ui](https://github.com/Fexost/plim-ui/actions/workflows/security.yml/badge.svg?job=audit-ui&label=Security%20Audit%20%7C%20ui)](https://github.com/Fexost/plim-ui/actions/workflows/security.yml)

### Security — Dependency review

[![Security Dependency review](https://github.com/Fexost/plim-ui/actions/workflows/security.yml/badge.svg?job=dependency-review&label=Security%20Dependency%20review)](https://github.com/Fexost/plim-ui/actions/workflows/security.yml)

## Install

```bash
npm install plim-ui
```

Requires Angular 21+ (`@angular/common`, `@angular/core`, `@angular/forms`, `@angular/cdk`,
and `@angular/platform-browser` as peer dependencies).

## Usage

Import components where you need them:

```typescript
import {
  Autocomplete,
  Button,
  Datepicker,
  Option,
  Select,
} from 'plim-ui';
```

Include global styles and design tokens once in your application styles:

```scss
@use 'plim-ui/styles/styles';
```

Toggle light mode by setting `data-theme="light"` on the document root.

## Components

| Category | Component | Selector |
| --- | --- | --- |
| **Basic** | Avatar | `<plim-avatar>` |
| | Badge | `<plim-badge>` |
| | Button | `button[plimButton]` |
| | Button toggle | `<plim-button-toggle-group>` |
| | Card | `<plim-card>` |
| | Progress bar | `<plim-progress-bar>` |
| | Separator | `<plim-separator>` |
| | Spinner | `<plim-spinner>` |
| **Form** | Autocomplete | `<plim-autocomplete>` |
| | Checkbox | `input[plimCheckbox]` |
| | Datepicker | `<plim-datepicker>` / `input[type=date][plimDatepicker]` |
| | Form field | `<plim-form-field>` |
| | Input | `input[plimInput]` |
| | Radio | `input[plimRadio]` |
| | Select | `<plim-select>` / `select[plimSelect]` |
| | Slider | `input[type=range][plimSlider]` |
| | Switch | `input[plimSwitch]` |
| | Textarea | `textarea[plimTextarea]` |
| | Timepicker | `<plim-timepicker>` / `input[type=time][plimTimepicker]` |
| **Navigation** | Header | `<plim-header>` |
| | Sidebar | `<plim-sidebar>` |

Naming follows two patterns:

- **Element components** — `plim-*` prefix (e.g. `<plim-card>`)
- **Attribute directives / slot markers** — `plim` + camelCase (e.g. `plimButton`, `plimHeaderStart`)

Each component has a docs page with previews, accessibility notes, and API reference on the [documentation site](https://fexost.github.io/plim-ui/).

## Theming

Design tokens use the `--plim-*` CSS variable namespace. Dark theme is the default (`:root`); light theme overrides apply when `data-theme="light"` is set on the document root.

See the [Tokens](https://fexost.github.io/plim-ui/foundations/tokens) and [Theme](https://fexost.github.io/plim-ui/foundations/theme) guides for details.

## Workspace

This repository is an Angular monorepo:

| Project | Path | Description |
| --- | --- | --- |
| `ui` | `projects/ui` | Publishable component library (`dist/plim-ui`) |
| `docs` | `projects/docs` | Documentation application |

Brand assets live in `projects/docs/public/brand/`.

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
| `npm run build:ui` | Build the library to `dist/plim-ui` |
| `npm run build:docs` | Production docs build (GitHub Pages base href) |
| `npm run build:production` | Build library and docs |
| `npm run test:ui` | Run library unit tests |
| `npm run test:docs` | Run docs unit tests |
| `npm test` | Run all unit tests |
| `npm run lint` | Lint the workspace |

### Continuous integration

Pull requests and pushes to `main` run automated checks per project:

| Workflow | Job | Description |
| --- | --- | --- |
| [CI](.github/workflows/ci.yml) | **Lint (ui)** | ESLint for `projects/ui` |
| | **Lint (docs)** | ESLint for `projects/docs` |
| | **Test (ui)** | Unit tests for the library |
| | **Test (docs)** | Unit tests for the docs app (after building the library) |
| [Security](.github/workflows/security.yml) | **Audit (workspace)** | High-severity scan of root production dependencies (Angular, build tooling, shared runtime deps) |
| | **Audit (ui)** | High-severity scan of the built `dist/plim-ui` package — what ships to npm |
| | **Dependency review** | PR-only review of dependency diffs at high severity or above |
| [Deploy](.github/workflows/deploy-docs.yml) | **Deploy (docs)** | Deploys the Docs project to Github Pages |

**Why audit both workspace and ui?** The monorepo root owns most dependencies (including dev tooling used in CI), while the published library package is a separate manifest with only its runtime deps (`tslib` today). Scanning both catches vulnerabilities in contributor tooling and in what consumers install.

Status badges above reflect the latest results on `main`, grouped by check type.

Architecture, conventions, and development guidelines are documented in [AGENTS.md](./AGENTS.md).

## License

[MIT](./LICENSE) © Contributors
