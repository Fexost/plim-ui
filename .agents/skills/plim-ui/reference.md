# plim-ui reference (versioned)

Version-specific facts about plim-ui, for use with [`SKILL.md`](SKILL.md). The reasoning lives in the skill; this file records what the library provides at a known version. Update it using [`MAINTAINING.md`](MAINTAINING.md).

## Verified against

| | |
| --- | --- |
| **Published package** | `plim-ui@0.2.0` (npm, published 2026-08-28) |
| **Repository** | [`Fexost/plim-ui`](https://github.com/Fexost/plim-ui) `main` at [`3ca689f`](https://github.com/Fexost/plim-ui/commit/3ca689f6bd0b5779209b3cc99d262649ef449a38) (2026-08-31) |
| **Sources checked** | npm package README; repository `README.md`, `AGENTS.md`, `DESIGN-AGENTS.md`; [tokens page](https://plim-ui.fexost.dev/foundations/tokens) of the docs site (deployed from `main`) |
| **Verified on** | 2026-09-24 |

Facts marked **(main)** were seen on `main` or the docs site but are not confirmed in the 0.2.0 package. If the installed version differs from the one above, check its public API and styles before relying on anything here, and tell the user about any mismatch.

## Setup

- Angular 21+. Peer dependencies: `@angular/cdk`, `@angular/common`, `@angular/core`, `@angular/forms`, `@angular/platform-browser` (all `^21.2.0`).
- Standalone, tree-shakeable components imported from `plim-ui`.
- Global styles and tokens once: `@use 'plim-ui/styles/styles';`. This also adds a thin page scrollbar and the `.plim-kbd` utility.
- Dark theme is the default (`:root`); light theme applies with `data-theme="light"` on the document root.
- Naming: element components `plim-*`; directives and slot markers `plim` + camelCase.

## Components by Plim concern

Only inputs confirmed in the sources are listed. Anything not listed should be checked in the installed version.

### Actions and hierarchy

- **Button** `button[plimButton]` (native `<button>` only). `variant`: `primary` (default), `secondary`, `text`. `disabled` binds native `disabled`. `loading` shows a spinner and sets `aria-busy`. Pair with `routerLink` for navigation from a button.
- **Button toggle** `plim-button-toggle-group` with `plim-button-toggle` (`value`): single or multiple selection.
- **Menu** `[plimMenuTrigger]`, `plim-menu`, `button[plimMenuItem]` (supports `disabled`). CDK overlay.
- **Toolbar** `plim-toolbar` (`sticky`), slots `plimToolbarStart`, `plimToolbarEnd`. For in-page actions, not app chrome.

### Status and emphasis

- **Badge** `plim-badge`, `variant`: `default`, `primary`, `success`, `warning`, `danger`.
- **Snackbar** `plim-snackbar`: `open`, `variant` (same set as badge), `duration` in ms (default 4000; `0` stays open), output `closed`.
- **Sticky note** `plim-sticky-note` with `variant`.

### Containment and structure

- **Card** `plim-card`: described as an elevated surface; slots `plimCardHeader`, default body, `plimCardFooter`. A `fill` input is documented in `AGENTS.md` **(main)**.
- **Separator** `plim-separator`, `orientation`: `horizontal`, `vertical`.
- **Expansion panel** `plim-expansion-panel` with `plimExpansionHeader`.
- **List** `plim-list`, `plim-list-item`. **Grid list** `plim-grid-list` (`cols`), `plim-grid-tile`.

### Forms

- **Form field** `plim-form-field`: lays out label, control, and hint. How validation errors are displayed is not documented in the sources checked; verify before designing error states around it.
- **Input** `input[plimInput]`; **Textarea** `textarea[plimTextarea]`.
- **Checkbox** `input[plimCheckbox]`; **Radio** `input[plimRadio]`; **Switch** `input[plimSwitch]` (a native checkbox); **Slider** `input[type=range][plimSlider]`.
- **Select** `plim-select` with `plim-option` (CDK overlay), or native `select[plimSelect]`.
- **Autocomplete** `plim-autocomplete` with `plim-option` (CDK overlay).
- **Datepicker** `plim-datepicker` or native `input[type=date][plimDatepicker]`; **Timepicker** `plim-timepicker` or native `input[type=time][plimTimepicker]`.

### Overlays and feedback

- **Dialog** `plim-dialog`: `open`, `ariaLabel`, output `closed`; slots `plimDialogTitle`, `plimDialogActions`.
- **Bottom sheet** `plim-bottom-sheet`: `open`, `ariaLabel`, output `closed`.
- **Tooltip** `[plimTooltip]` directive (can share a host with `plimButton`); `plimTooltipPosition`: `above`, `below` (default).
- **Command palette** `plim-command-palette`: `open`, `items`, `query`, `placeholder`, `ariaLabel`, `emptyMessage`; outputs `queryChange`, `selected`, `closed`.
- CDK Overlay is used by select, autocomplete, datepicker, timepicker, menu, dialog, bottom sheet, snackbar, command palette, and tooltip, providing focus trapping, focus restoration, and keyboard behaviour.

### Loading

- **Spinner** `plim-spinner`: `size` (`sm`, `md`, `lg`), `aria-label` (default `'Loading'`); respects `prefers-reduced-motion`.
- **Progress bar** `plim-progress-bar`: `value`, `mode="indeterminate"`.
- **Skeleton** **(main)**: listed in the docs routes; not in the 0.2.0 public API export list.

### Navigation and layout

- **Header** `plim-header` (`sticky`), slots `plimHeaderStart`, `plimHeaderCenter`, `plimHeaderEnd`.
- **Sidebar** `plim-sidebar`: `open` (default `true`), `mode` `push` (default) or `overlay`, `fixed` (default `true`), `aria-label`; slots `plimSidebarHeader`, `plimSidebarNav`, `plimSidebarFooter` (empty header and footer slots aren't rendered). In `push` mode, offset main content with `margin-left: var(--plim-sidebar-width)`.
- **Tabs** `plim-tab-group` (`[(selectedIndex)]`), `plim-tab` (`label`); keyboard navigation included.
- **Paginator** `plim-paginator`: `length`, `pageIndex`, `pageSize`, `pageSizeOptions`, `pageSizeControl` (`plim` or `native`), output `page`.
- **Stepper** `plim-stepper` (`orientation`), `plim-step` (`label`). **Timeline** `plim-timeline`, `plim-timeline-item`. **Tree** `plim-tree`, `plim-tree-node`.

### Data

- **Table** `table[plimTable]` on native table markup; global styles are required for projected rows.
- **Sort** `[plimSort]` on the table with `[(active)]` and `[(direction)]`; `th[plimSortHeader]` per sortable column.
- **Chips** `plim-chip-set`, `plim-chip` (`removable`, output `removed`).

### Advanced

- **Chat** `plim-chat-panel` (slots `plimChatPanelHeader`, `plimChatPanelMessages`, `plimChatPanelComposer`), `plim-chat-composer`, `plim-chat-widget`, and conversation primitives.

## Tokens (main)

Observed on the docs site tokens page. Names are listed by role; confirm them in the installed styles.

| Role | Tokens |
| --- | --- |
| Layers | `--plim-primitive-*` feed semantic tokens, which feed component tokens |
| Surfaces | `--plim-color-background`, `--plim-color-surface`, `--plim-color-surface-raised` |
| Text hierarchy | `--plim-color-text`, `--plim-color-text-muted`, `--plim-color-text-subtle` |
| Borders | `--plim-color-border`, `--plim-color-border-strong` |
| Action and links | `--plim-color-primary`, `-hover`, `-strong`, `--plim-color-on-primary`, `--plim-color-link` |
| Status | `--plim-color-success`, `-warning`, `-danger`, and tinted `--plim-color-{primary,success,warning,danger}-surface`, `-surface-border`, `-surface-text` |
| Elevation | `--plim-elevation-none`, `-raised`, `-overlay`, `-modal` (backed by `--plim-shadow-sm/md/lg`) |
| Focus | `--plim-focus-ring-color`, `-width`, `-offset` |
| Spacing | `--plim-space-1` to `--plim-space-12` |
| Typography | `--plim-font-family`, `-mono`; `--plim-font-size-xs` to `-2xl`; `--plim-font-weight-*`; `--plim-line-height-tight`, `-normal`; `--plim-font-variant-numeric-tabular` |
| Shape | `--plim-radius-sm`, `-md`, `-lg`, `-full` |
| Motion | `--plim-duration-fast`, `-normal`, `-slow`, `-enter`, `-exit`, `-spin`; `--plim-ease-default`, `-enter`, `-exit` |
| Density | `--plim-density-table-cell-padding-{y,x}` and `-compact` variants; `--plim-density-list-item-padding-y` and `-compact` |
| State | `--plim-opacity-disabled`, `--plim-opacity-muted` |
| Icons | `--plim-icon-size-sm` to `-xl` |
| Components | Dimension tokens such as `--plim-button-height`, `--plim-input-height`, `--plim-header-height`, `--plim-sidebar-width`, `--plim-dialog-max-width` |

## Known divergences between plim-ui guidance and Plim Design

Where plim-ui's `DESIGN-AGENTS.md` and Plim Design pull in different directions. `DESIGN-AGENTS.md` is not a design source; Plim Design decides. These entries exist so an agent working in the plim-ui repository recognises the divergence, until plim-ui replaces that file. Neither document is edited from here.

| Topic | plim-ui guidance | Plim Design | Status |
| --- | --- | --- | --- |
| Whitespace | `DESIGN-AGENTS.md` §3: "Start with too much white space", adding generous space and removing it until it feels right (it also allows deliberately dense layouts) | §9 Density ↔ Breathing room: density should match task, expertise, and frequency of use; more whitespace is not automatically better | **Open.** Reconciliation owned by the plim-ui maintainer |
| Accent borders | `DESIGN-AGENTS.md` §8: accent colour bars on cards, nav, and alerts as a finishing touch | Law 2 and §11: a visual treatment should communicate a distinction | **Candidate.** Commit `3ca689f` removed accent borders from the docs nav and accessibility callout, which suggests alignment is under way. Confirm with the maintainer |

Apply the Plim Design reasoning, mention the divergence when it affects a decision, and leave both documents unchanged unless the user asks. When plim-ui replaces or retires `DESIGN-AGENTS.md`, close the entries.
