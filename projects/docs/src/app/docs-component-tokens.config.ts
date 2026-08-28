export interface DocsComponentToken {
	token: string;
	usage: string;
}

export const BUTTON_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-button-height', usage: 'Minimum control height' },
	{ token: '--plim-color-primary', usage: 'Filled (primary) background' },
	{ token: '--plim-color-primary-hover', usage: 'Primary hover background' },
	{ token: '--plim-color-on-primary', usage: 'Text on primary background' },
	{ token: '--plim-color-primary-surface', usage: 'Text variant hover background' },
	{ token: '--plim-color-border-strong', usage: 'Outlined (secondary) border' },
	{ token: '--plim-color-surface-raised', usage: 'Secondary hover background' },
	{ token: '--plim-radius-md', usage: 'Corner radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const BUTTON_TOGGLE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-button-height', usage: 'Toggle control height' },
	{ token: '--plim-color-border', usage: 'Group outline' },
	{ token: '--plim-color-surface', usage: 'Group background' },
	{ token: '--plim-color-primary-surface', usage: 'Selected toggle background' },
	{ token: '--plim-color-primary-surface-border', usage: 'Selected toggle outline' },
	{ token: '--plim-color-primary', usage: 'Selected toggle text' },
	{ token: '--plim-radius-full', usage: 'Pill-shaped group and toggles' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const BADGE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-1', usage: 'Vertical padding' },
	{ token: '--plim-space-2', usage: 'Horizontal padding' },
	{ token: '--plim-font-size-xs', usage: 'Label size' },
	{ token: '--plim-radius-full', usage: 'Pill shape' },
	{ token: '--plim-color-surface-raised', usage: 'Default variant background' },
	{ token: '--plim-color-primary-surface*', usage: 'Primary variant tint' },
	{ token: '--plim-color-success-surface*', usage: 'Success variant tint' },
	{ token: '--plim-color-warning-surface*', usage: 'Warning variant tint' },
	{ token: '--plim-color-danger-surface*', usage: 'Danger variant tint' },
];

export const CARD_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'Card surface background' },
	{ token: '--plim-color-border', usage: 'Card outline' },
	{ token: '--plim-radius-lg', usage: 'Corner radius' },
	{ token: '--plim-space-3', usage: 'Header/body spacing gap' },
	{ token: '--plim-space-5', usage: 'Internal padding' },
];

export const SEPARATOR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-border', usage: 'Divider line colour' },
	{ token: '--plim-space-*', usage: 'Layout spacing around the separator' },
];

export const AVATAR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-radius-full', usage: 'Circular shape' },
	{ token: '--plim-color-surface-raised', usage: 'Fallback surface' },
	{ token: '--plim-color-text-muted', usage: 'Initials text colour' },
	{ token: '--plim-font-size-sm', usage: 'Initials font size' },
];

export const SPINNER_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-primary', usage: 'Spinner stroke colour' },
	{ token: '--plim-duration-spin', usage: 'Rotation animation duration' },
	{ token: '--plim-radius-full', usage: 'Circular indicator' },
];

export const PROGRESS_BAR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-progress-bar-height', usage: 'Track height' },
	{ token: '--plim-color-primary', usage: 'Fill colour' },
	{ token: '--plim-color-border', usage: 'Track background' },
	{ token: '--plim-radius-full', usage: 'Rounded track and fill' },
	{ token: '--plim-duration-spin', usage: 'Indeterminate animation duration' },
];

export const INPUT_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-input-height', usage: 'Control height' },
	{ token: '--plim-input-padding-x', usage: 'Horizontal padding' },
	{ token: '--plim-input-font-size', usage: 'Input text size' },
	{ token: '--plim-color-field-background', usage: 'Field background' },
	{ token: '--plim-color-field-border', usage: 'Default border' },
	{ token: '--plim-color-field-border-focus', usage: 'Focus border' },
	{ token: '--plim-color-field-border-invalid', usage: 'Invalid border' },
	{ token: '--plim-color-placeholder', usage: 'Placeholder text' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const TEXTAREA_DOCS_TOKENS: DocsComponentToken[] = [
	...INPUT_DOCS_TOKENS,
	{ token: '--plim-textarea-min-height', usage: 'Default minimum height' },
];

export const SELECT_DOCS_TOKENS: DocsComponentToken[] = [
	...INPUT_DOCS_TOKENS,
	{ token: '--plim-select-panel-max-height', usage: 'Dropdown panel max height' },
	{ token: '--plim-color-select-option-highlight', usage: 'Active option background' },
	{ token: '--plim-color-select-option-active', usage: 'Active selected option background' },
	{ token: '--plim-color-select-option-selected', usage: 'Selected option text' },
	{ token: '--plim-shadow-md', usage: 'Dropdown panel elevation' },
];

export const CHECKBOX_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-checkbox-size', usage: 'Control dimensions' },
	{ token: '--plim-color-primary', usage: 'Checked fill' },
	{ token: '--plim-color-field-border-invalid', usage: 'Invalid outline' },
	{ token: '--plim-radius-sm', usage: 'Corner radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const RADIO_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-radio-size', usage: 'Control dimensions' },
	{ token: '--plim-color-primary', usage: 'Selected indicator' },
	{ token: '--plim-color-field-border-invalid', usage: 'Invalid outline' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const SWITCH_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-switch-width', usage: 'Track width' },
	{ token: '--plim-switch-height', usage: 'Track height' },
	{ token: '--plim-color-primary', usage: 'On-state track' },
	{ token: '--plim-color-field-border-invalid', usage: 'Invalid outline' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const SLIDER_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-slider-thumb-size', usage: 'Minimum control height' },
	{ token: '--plim-color-primary', usage: 'Track fill and thumb accent' },
	{ token: '--plim-color-danger', usage: 'Invalid accent colour' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const DATEPICKER_DOCS_TOKENS: DocsComponentToken[] = [
	...INPUT_DOCS_TOKENS,
	{ token: '--plim-color-surface-raised', usage: 'Calendar panel background' },
	{ token: '--plim-shadow-md', usage: 'Calendar panel elevation' },
	{ token: '--plim-color-primary', usage: 'Selected day highlight' },
];

export const TIMEPICKER_DOCS_TOKENS: DocsComponentToken[] = [
	...INPUT_DOCS_TOKENS,
	{ token: '--plim-color-surface-raised', usage: 'Time panel background' },
	{ token: '--plim-shadow-md', usage: 'Time panel elevation' },
	{ token: '--plim-color-primary', usage: 'Selected hour/minute highlight' },
];

export const AUTOCOMPLETE_DOCS_TOKENS: DocsComponentToken[] = [...SELECT_DOCS_TOKENS];

export const FORM_FIELD_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-form-field-gap', usage: 'Gap between label, control, and hint' },
	{ token: '--plim-color-text', usage: 'Label text' },
	{ token: '--plim-color-text-muted', usage: 'Hint text' },
	{ token: '--plim-color-danger', usage: 'Error message text' },
];

export const HEADER_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-header-height', usage: 'Bar minimum height' },
	{ token: '--plim-color-surface', usage: 'Bar background' },
	{ token: '--plim-color-border', usage: 'Bottom divider' },
	{ token: '--plim-space-6', usage: 'Horizontal padding' },
];

export const SIDEBAR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-sidebar-width', usage: 'Panel width' },
	{ token: '--plim-header-height', usage: 'Top offset when fixed' },
	{ token: '--plim-color-background', usage: 'Panel background' },
	{ token: '--plim-color-border', usage: 'Right divider (push mode)' },
	{ token: '--plim-shadow-lg', usage: 'Overlay mode elevation' },
];

export const CHIPS_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-1', usage: 'Chip gap and removable padding' },
	{ token: '--plim-space-2', usage: 'Chip-set wrap gap' },
	{ token: '--plim-space-3', usage: 'Chip horizontal padding' },
	{ token: '--plim-radius-full', usage: 'Pill shape' },
	{ token: '--plim-color-surface-raised', usage: 'Chip background' },
	{ token: '--plim-color-border', usage: 'Chip outline' },
	{ token: '--plim-focus-ring-*', usage: 'Dismiss control focus outline' },
];

export const EXPANSION_PANEL_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'Panel background' },
	{ token: '--plim-color-border', usage: 'Panel outline' },
	{ token: '--plim-radius-md', usage: 'Corner radius' },
	{ token: '--plim-space-4', usage: 'Header vertical padding' },
	{ token: '--plim-space-5', usage: 'Header and body horizontal padding' },
	{ token: '--plim-focus-ring-*', usage: 'Header focus outline' },
];

export const GRID_LIST_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-4', usage: 'Grid gap and tile padding' },
	{ token: '--plim-color-surface-raised', usage: 'Tile background' },
	{ token: '--plim-color-border', usage: 'Tile outline' },
	{ token: '--plim-radius-md', usage: 'Tile corner radius' },
];

export const LIST_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'List background' },
	{ token: '--plim-color-border', usage: 'List outline and row dividers' },
	{ token: '--plim-radius-md', usage: 'List corner radius' },
	{ token: '--plim-space-3', usage: 'Item vertical padding' },
	{ token: '--plim-space-4', usage: 'Item horizontal padding' },
];

export const SORT_HEADER_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-2', usage: 'Label and indicator gap' },
	{ token: '--plim-color-text-subtle', usage: 'Inactive sort indicator' },
	{ token: '--plim-color-primary', usage: 'Active sort indicator' },
	{ token: '--plim-focus-ring-*', usage: 'Header button focus outline' },
];

export const STEPPER_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-6', usage: 'Section spacing and horizontal connector inset' },
	{ token: '--plim-space-8', usage: 'Step index size and vertical step gap' },
	{ token: '--plim-color-primary', usage: 'Active step accent' },
	{ token: '--plim-color-primary-strong', usage: 'Active step index fill and Next button' },
	{ token: '--plim-color-on-primary', usage: 'Active step index text' },
	{ token: '--plim-color-border', usage: 'Step index outline and connector lines' },
	{ token: '--plim-button-height', usage: 'Back and Next height' },
	{ token: '--plim-focus-ring-*', usage: 'Step and footer focus outline' },
];

export const TABLE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-3', usage: 'Cell vertical padding' },
	{ token: '--plim-space-4', usage: 'Cell horizontal padding' },
	{ token: '--plim-color-border', usage: 'Row dividers' },
	{ token: '--plim-color-text-muted', usage: 'Header text' },
	{ token: '--plim-color-surface', usage: 'Row hover background' },
];

export const TREE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-space-2', usage: 'Toggle padding and label gap' },
	{ token: '--plim-space-6', usage: 'Nested child indent' },
	{ token: '--plim-color-text', usage: 'Node label' },
	{ token: '--plim-color-surface-raised', usage: 'Toggle hover background' },
	{ token: '--plim-focus-ring-*', usage: 'Expand toggle focus outline' },
];

export const MENU_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'Panel background' },
	{ token: '--plim-color-border', usage: 'Panel outline' },
	{ token: '--plim-shadow-md', usage: 'Panel elevation' },
	{ token: '--plim-radius-md', usage: 'Panel corner radius' },
	{ token: '--plim-select-panel-max-height', usage: 'Panel max height' },
	{ token: '--plim-color-select-option-highlight', usage: 'Active item background' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const PAGINATOR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-button-height', usage: 'Previous/next and page-size height' },
	{ token: '--plim-font-size-sm', usage: 'Range and control text' },
	{ token: '--plim-color-text', usage: 'Button label colour' },
	{ token: '--plim-color-text-muted', usage: 'Range and page-size label' },
	{ token: '--plim-color-border-strong', usage: 'Button outline' },
	{ token: '--plim-radius-md', usage: 'Button and select radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const TABS_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-button-height', usage: 'Tab button height' },
	{ token: '--plim-color-border', usage: 'Tab list divider' },
	{ token: '--plim-color-primary', usage: 'Selected tab indicator' },
	{ token: '--plim-color-text', usage: 'Selected tab label' },
	{ token: '--plim-color-text-muted', usage: 'Idle tab label' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const TOOLBAR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-header-height', usage: 'Bar minimum height' },
	{ token: '--plim-button-height', usage: 'Fits actions with vertical padding' },
	{ token: '--plim-color-surface', usage: 'Bar background' },
	{ token: '--plim-color-border', usage: 'Bottom divider' },
	{ token: '--plim-space-6', usage: 'Horizontal padding' },
];

export const COMMAND_PALETTE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-backdrop', usage: 'Dimmed overlay behind the palette' },
	{ token: '--plim-color-surface-raised', usage: 'Palette surface background' },
	{ token: '--plim-color-border', usage: 'Palette outline and result borders' },
	{ token: '--plim-elevation-modal', usage: 'Palette elevation' },
	{ token: '--plim-radius-lg', usage: 'Palette corner radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
	{ token: '--plim-command-palette-offset', usage: 'Vertical offset from the viewport top' },
];

export const DIALOG_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-backdrop', usage: 'Dimmed overlay behind the dialog' },
	{ token: '--plim-color-surface-raised', usage: 'Dialog surface background' },
	{ token: '--plim-color-border', usage: 'Dialog outline' },
	{ token: '--plim-shadow-lg', usage: 'Dialog elevation' },
	{ token: '--plim-radius-lg', usage: 'Dialog corner radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const BOTTOM_SHEET_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-backdrop', usage: 'Dimmed overlay behind the sheet' },
	{ token: '--plim-color-surface-raised', usage: 'Sheet surface background' },
	{ token: '--plim-color-border', usage: 'Sheet outline' },
	{ token: '--plim-shadow-lg', usage: 'Sheet elevation' },
	{ token: '--plim-radius-lg', usage: 'Top corner radius' },
	{ token: '--plim-focus-ring-*', usage: 'Keyboard focus outline' },
];

export const SNACKBAR_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'Snackbar surface background' },
	{ token: '--plim-color-border', usage: 'Snackbar outline' },
	{ token: '--plim-shadow-md', usage: 'Snackbar elevation' },
	{ token: '--plim-radius-md', usage: 'Snackbar corner radius' },
	{ token: '--plim-color-primary', usage: 'Dismiss action colour' },
	{ token: '--plim-space-6', usage: 'Offset from the viewport bottom' },
];

export const TOOLTIP_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-color-surface-raised', usage: 'Tooltip surface background' },
	{ token: '--plim-color-border', usage: 'Tooltip outline' },
	{ token: '--plim-shadow-md', usage: 'Tooltip elevation' },
	{ token: '--plim-radius-md', usage: 'Tooltip corner radius' },
	{ token: '--plim-font-size-xs', usage: 'Tooltip text size' },
];

export const CHAT_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-chat-panel-max-width', usage: 'Maximum panel width' },
	{ token: '--plim-chat-panel-min-height', usage: 'Minimum panel height' },
	{ token: '--plim-chat-panel-max-height', usage: 'Widget panel viewport height cap' },
	{ token: '--plim-chat-panel-messages-min-height', usage: 'Minimum scrollable messages region height (inline panel)' },
	{ token: '--plim-chat-panel-messages-max-height', usage: 'Scrollable messages region height cap (inline panel)' },
	{ token: '--plim-chat-launcher-size', usage: 'Built-in launcher button size' },
	{ token: '--plim-chat-widget-offset-bottom', usage: 'Panel offset above the launcher' },
	{ token: '--plim-z-chat-launcher', usage: 'Launcher and overlay stacking order' },
	{ token: '--plim-color-surface-raised', usage: 'Panel surface background' },
	{ token: '--plim-color-surface', usage: 'User message bubble background' },
	{ token: '--plim-color-border', usage: 'Panel outline and user message border' },
	{ token: '--plim-color-primary', usage: 'Launcher background' },
	{ token: '--plim-color-on-primary', usage: 'Launcher text' },
	{ token: '--plim-color-primary-surface', usage: 'Suggested prompt pill background' },
	{ token: '--plim-color-primary-surface-border', usage: 'Suggested prompt pill border' },
	{ token: '--plim-color-primary-surface-text', usage: 'Suggested prompt text' },
	{ token: '--plim-radius-lg', usage: 'Panel and user bubble corner radius' },
	{ token: '--plim-radius-full', usage: 'Suggested prompt pill and launcher shape' },
	{ token: '--plim-shadow-md', usage: 'Launcher elevation' },
	{ token: '--plim-shadow-lg', usage: 'Widget panel elevation' },
	{ token: '--plim-color-text-subtle', usage: 'Composer placeholder colour' },
];

export const TIMELINE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-timeline-marker-size', usage: 'Marker dot size' },
	{ token: '--plim-color-primary', usage: 'Marker border colour' },
	{ token: '--plim-color-border', usage: 'Dashed connector line colour' },
	{ token: '--plim-space-4', usage: 'Timeline padding and item spacing' },
	{ token: '--plim-space-5', usage: 'Vertical item padding' },
];

export const STICKY_NOTE_DOCS_TOKENS: DocsComponentToken[] = [
	{ token: '--plim-sticky-note-rotation', usage: 'Default note tilt' },
	{ token: '--plim-color-surface-raised', usage: 'Default note background' },
	{ token: '--plim-color-primary-surface*', usage: 'Primary variant tint' },
	{ token: '--plim-color-warning-surface*', usage: 'Warning variant tint' },
	{ token: '--plim-color-success-surface*', usage: 'Success variant tint' },
	{ token: '--plim-space-5', usage: 'Internal padding' },
	{ token: '--plim-shadow-md', usage: 'Note elevation' },
	{ token: '--plim-radius-sm', usage: 'Note corner radius' },
];

