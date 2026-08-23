# plim-ui

Open-source Angular component library for building accessible, composable UI with a shared design token system.

**Documentation:** [plim-ui.fexost.dev](https://plim-ui.fexost.dev/)

## Install

```bash
npm install plim-ui
```

Peer dependencies:

- `@angular/cdk` ^21.2.0
- `@angular/common` ^21.2.0
- `@angular/core` ^21.2.0
- `@angular/forms` ^21.2.0
- `@angular/platform-browser` ^21.2.0

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
| `variant` | `'primary' \| 'secondary' \| 'text'` | `'primary'` |
| `disabled` | `boolean` | `false` |

Pair with `routerLink` when navigation is triggered from a button. Use `variant="text"` for
link-like actions. The selector is `button[plimButton]` only.

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

#### Button toggle

Grouped toggles for exclusive or multiple selection.

```html
<plim-button-toggle-group>
  <plim-button-toggle value="day">Day</plim-button-toggle>
  <plim-button-toggle value="week">Week</plim-button-toggle>
</plim-button-toggle-group>
```

#### Progress bar

Determinate or indeterminate progress.

```html
<plim-progress-bar [value]="40" />
<plim-progress-bar mode="indeterminate" />
```

### Form

#### Input, textarea, and form field

```html
<plim-form-field>
  <label for="name">Name</label>
  <input id="name" type="text" plimInput />
</plim-form-field>

<textarea plimTextarea rows="4"></textarea>
```

#### Select and autocomplete

```html
<plim-select placeholder="Choose fruit">
  <plim-option value="apple">Apple</plim-option>
  <plim-option value="banana">Banana</plim-option>
</plim-select>

<plim-autocomplete placeholder="Search fruit">
  <plim-option value="apple">Apple</plim-option>
  <plim-option value="banana">Banana</plim-option>
</plim-autocomplete>
```

Both project options with `<plim-option>`.

#### Datepicker and timepicker

```html
<plim-datepicker />
<input type="date" plimDatepicker />

<plim-timepicker />
<input type="time" plimTimepicker />
```

#### Checkbox, radio, switch, and slider

```html
<input type="checkbox" plimCheckbox />
<input type="radio" name="plan" plimRadio value="pro" />
<input type="checkbox" plimSwitch />
<input type="range" plimSlider />
```

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

Navigation panel with header, nav, and footer slots.

```html
<plim-sidebar open mode="push" aria-label="Main navigation">
  <div plimSidebarHeader>Search or branding</div>
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

#### Menu

Dropdown menu with CDK overlay. Pair a trigger with menu items.

```html
<button type="button" [plimMenuTrigger]="menu">Actions</button>
<plim-menu #menu>
  <button type="button" plimMenuItem>Edit</button>
  <button type="button" plimMenuItem disabled>Archive</button>
</plim-menu>
```

#### Paginator

Page controls for long lists. Supports native or plim page-size selects.

```html
<plim-paginator
  [length]="100"
  [pageIndex]="pageIndex"
  [pageSize]="pageSize"
  pageSizeControl="plim"
  (page)="onPage($event)"
/>
```

| Input | Type | Default | Description |
| --- | --- | --- | --- |
| `length` | `number` | `0` | Total item count |
| `pageIndex` | `number` | `0` | Zero-based page index |
| `pageSize` | `number` | `10` | Items per page |
| `pageSizeOptions` | `number[]` | `[5, 10, 25]` | Page-size choices |
| `pageSizeControl` | `'plim' \| 'native'` | `'plim'` | Plim select or native `<select>` |

#### Tabs

Tabbed panels with keyboard navigation.

```html
<plim-tab-group [(selectedIndex)]="selectedIndex">
  <plim-tab label="One">First panel</plim-tab>
  <plim-tab label="Two">Second panel</plim-tab>
</plim-tab-group>
```

#### Toolbar

In-page action bar (not app chrome). Use `<plim-header>` for global navigation.

```html
<plim-toolbar sticky>
  <div plimToolbarStart><strong>Inbox</strong></div>
  <div plimToolbarEnd>
    <button type="button" plimButton variant="secondary">Filter</button>
  </div>
</plim-toolbar>
```

Content slots: `plimToolbarStart`, `plimToolbarEnd`.

### Feedback

#### Dialog

Modal overlay with title and actions slots.

```html
<plim-dialog [open]="open()" ariaLabel="Confirm delete" (closed)="onClosed()">
  <h2 plimDialogTitle>Delete item</h2>
  <p>This cannot be undone.</p>
  <div plimDialogActions>
    <button type="button" plimButton variant="secondary">Cancel</button>
    <button type="button" plimButton>Delete</button>
  </div>
</plim-dialog>
```

#### Bottom sheet

Panel anchored to the bottom of the viewport.

```html
<plim-bottom-sheet [open]="open()" ariaLabel="Share options" (closed)="onClosed()">
  <p>Share this page</p>
</plim-bottom-sheet>
```

#### Snackbar

Non-blocking message with badge-aligned variants.

```html
<plim-snackbar [open]="open()" variant="success" (closed)="open.set(false)">
  Changes saved
</plim-snackbar>
```

| Input | Type | Default |
| --- | --- | --- |
| `variant` | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` |
| `duration` | `number` | `4000` (milliseconds; `0` stays open) |

#### Tooltip

Directive on the trigger element. Works alongside `plimButton` on the same host.

```html
<button type="button" plimButton plimTooltip="Copied to clipboard">Copy</button>
<button type="button" plimButton plimTooltip="Save changes" plimTooltipPosition="above">
  Save
</button>
```

| Input | Type | Default |
| --- | --- | --- |
| `plimTooltip` | `string` | `''` |
| `plimTooltipPosition` | `'above' \| 'below'` | `'below'` |

### Data

#### Table and sort header

Styles a native table; sort state lives on a parent `[plimSort]` directive.

```html
<table plimTable plimSort [(active)]="active" [(direction)]="direction">
  <thead>
    <tr>
      <th plimSortHeader="name">Name</th>
      <th plimSortHeader="role">Role</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>Ada</td><td>Engineer</td></tr>
  </tbody>
</table>
```

Import global styles so projected row markup receives `.plim-table` rules.

#### Chips, list, grid list, expansion panel, stepper, tree

```html
<plim-chip-set>
  <plim-chip removable (removed)="onRemoved()">Angular</plim-chip>
</plim-chip-set>

<plim-list>
  <plim-list-item>Ada</plim-list-item>
</plim-list>

<plim-grid-list [cols]="3">
  <plim-grid-tile>One</plim-grid-tile>
</plim-grid-list>

<plim-expansion-panel>
  <span plimExpansionHeader>Details</span>
  Body copy
</plim-expansion-panel>

<plim-stepper>
  <plim-step label="Account">Account form</plim-step>
  <plim-step label="Review">Review copy</plim-step>
</plim-stepper>

<plim-tree>
  <plim-tree-node label="Parent">
    <plim-tree-node label="Child" />
  </plim-tree-node>
</plim-tree>
```

## Public API

```typescript
import {
  Autocomplete,
  Avatar,
  Badge,
  BottomSheet,
  Button,
  ButtonToggle,
  ButtonToggleGroup,
  Card,
  Checkbox,
  Chip,
  ChipSet,
  Datepicker,
  Dialog,
  ExpansionPanel,
  FormField,
  GridList,
  GridTile,
  Header,
  Input,
  List,
  ListItem,
  Menu,
  MenuItem,
  MenuTrigger,
  NativeDatepicker,
  NativeSelect,
  NativeTimepicker,
  Option,
  Paginator,
  ProgressBar,
  Radio,
  Select,
  Separator,
  Sidebar,
  Slider,
  Snackbar,
  Sort,
  SortHeader,
  Spinner,
  Step,
  Stepper,
  Switch,
  Tab,
  TabGroup,
  Table,
  Textarea,
  Timepicker,
  Toolbar,
  Tooltip,
  Tree,
  TreeNode,
} from 'plim-ui';
```

## Design tokens

Tokens cover colour, typography, spacing, radius, shadows, focus rings, motion, and component dimensions under the `--plim-*` namespace. See the [tokens reference](https://plim-ui.fexost.dev/foundations/tokens) for the full list.

## Links

- [Repository](https://github.com/Fexost/plim-ui)
- [Documentation](https://plim-ui.fexost.dev/)
- [npm](https://www.npmjs.com/package/plim-ui)

## License

MIT
