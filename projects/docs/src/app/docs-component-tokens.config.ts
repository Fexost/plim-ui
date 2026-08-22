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
	{ token: '--plim-color-primary', usage: 'Primary variant accent' },
	{ token: '--plim-color-success', usage: 'Success variant accent' },
	{ token: '--plim-color-warning', usage: 'Warning variant accent' },
	{ token: '--plim-color-danger', usage: 'Danger variant accent' },
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
