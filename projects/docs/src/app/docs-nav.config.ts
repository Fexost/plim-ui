export const DOCS_HOME = 'overview';

export const DOCS_PATHS = {
	installation: 'installation',
	tokens: 'foundations/tokens',
	theme: 'foundations/theme',
	typography: 'foundations/typography',
	accessibility: 'foundations/accessibility',
	icons: 'foundations/icons',
	button: 'basic/button',
	badge: 'basic/badge',
	card: 'basic/card',
	separator: 'basic/separator',
	avatar: 'basic/avatar',
	spinner: 'basic/spinner',
	header: 'navigation/header',
	sidebar: 'navigation/sidebar',
	input: 'form/input',
	textarea: 'form/textarea',
	select: 'form/select',
	checkbox: 'form/checkbox',
	radio: 'form/radio',
	switch: 'form/switch',
	formField: 'form/form-field',
} as const;

export interface DocsNavItem {
	label: string;
	path?: string;
}

export interface DocsNavSection {
	label: string;
	items: DocsNavItem[];
}

/** Sidebar nav. Items without `path` render as coming-soon labels. */
export const DOCS_NAV: DocsNavSection[] = [
	{
		label: 'Get started',
		items: [
			{ path: DOCS_HOME, label: 'Overview' },
			{ path: DOCS_PATHS.installation, label: 'Installation' },
		],
	},
	{
		label: 'Foundations',
		items: [
			{ path: DOCS_PATHS.tokens, label: 'Tokens' },
			{ path: DOCS_PATHS.theme, label: 'Theme' },
			{ path: DOCS_PATHS.typography, label: 'Typography' },
			{ path: DOCS_PATHS.accessibility, label: 'Accessibility' },
			{ path: DOCS_PATHS.icons, label: 'Icon' },
		],
	},
	{
		label: 'Basic',
		items: [
			{ path: DOCS_PATHS.avatar, label: 'Avatar' },
			{ path: DOCS_PATHS.badge, label: 'Badge' },
			{ path: DOCS_PATHS.button, label: 'Button' },
			{ label: 'Button toggle' },
			{ path: DOCS_PATHS.card, label: 'Card' },
			{ label: 'Progress bar' },
			{ path: DOCS_PATHS.spinner, label: 'Progress spinner' },
			{ path: DOCS_PATHS.separator, label: 'Divider' },
		],
	},
	{
		label: 'Form',
		items: [
			{ label: 'Autocomplete' },
			{ path: DOCS_PATHS.checkbox, label: 'Checkbox' },
			{ label: 'Datepicker' },
			{ path: DOCS_PATHS.formField, label: 'Form field' },
			{ path: DOCS_PATHS.input, label: 'Input' },
			{ path: DOCS_PATHS.radio, label: 'Radio button' },
			{ path: DOCS_PATHS.select, label: 'Select' },
			{ label: 'Slider' },
			{ path: DOCS_PATHS.switch, label: 'Slide toggle' },
			{ path: DOCS_PATHS.textarea, label: 'Textarea' },
			{ label: 'Timepicker' },
		],
	},
	{
		label: 'Navigation',
		items: [
			{ path: DOCS_PATHS.header, label: 'Header' },
			{ label: 'Menu' },
			{ label: 'Paginator' },
			{ path: DOCS_PATHS.sidebar, label: 'Sidenav' },
			{ label: 'Tabs' },
			{ label: 'Toolbar' },
		],
	},
	{
		label: 'Feedback',
		items: [
			{ label: 'Bottom sheet' },
			{ label: 'Dialog' },
			{ label: 'Snackbar' },
			{ label: 'Tooltip' },
		],
	},
	{
		label: 'Data',
		items: [
			{ label: 'Chips' },
			{ label: 'Expansion panel' },
			{ label: 'Grid list' },
			{ label: 'List' },
			{ label: 'Sort header' },
			{ label: 'Stepper' },
			{ label: 'Table' },
			{ label: 'Tree' },
		],
	},
];

/** Full component inventory (Material-aligned names). Used for roadmap docs. */
export const COMPONENT_INVENTORY = [
	{ name: 'Autocomplete', category: 'Form', status: 'planned' },
	{ name: 'Badge', category: 'Basic', status: 'implemented', docsPath: DOCS_PATHS.badge },
	{ name: 'Bottom sheet', category: 'Feedback', status: 'planned' },
	{ name: 'Button', category: 'Basic', status: 'implemented', docsPath: DOCS_PATHS.button },
	{ name: 'Button toggle', category: 'Basic', status: 'planned' },
	{ name: 'Card', category: 'Basic', status: 'implemented', docsPath: DOCS_PATHS.card },
	{ name: 'Checkbox', category: 'Form', status: 'implemented', docsPath: DOCS_PATHS.checkbox },
	{ name: 'Chips', category: 'Data', status: 'planned' },
	{ name: 'Datepicker', category: 'Form', status: 'planned' },
	{ name: 'Dialog', category: 'Feedback', status: 'planned' },
	{
		name: 'Divider',
		category: 'Basic',
		status: 'implemented',
		plimName: 'Separator',
		docsPath: DOCS_PATHS.separator,
	},
	{ name: 'Expansion panel', category: 'Data', status: 'planned' },
	{
		name: 'Form field',
		category: 'Form',
		status: 'implemented',
		docsPath: DOCS_PATHS.formField,
	},
	{ name: 'Grid list', category: 'Data', status: 'planned' },
	{
		name: 'Icon',
		category: 'Foundations',
		status: 'partial',
		plimName: 'Icons guide',
		docsPath: DOCS_PATHS.icons,
	},
	{ name: 'Input', category: 'Form', status: 'implemented', docsPath: DOCS_PATHS.input },
	{ name: 'List', category: 'Data', status: 'planned' },
	{ name: 'Menu', category: 'Navigation', status: 'planned' },
	{ name: 'Paginator', category: 'Navigation', status: 'planned' },
	{ name: 'Progress bar', category: 'Basic', status: 'planned' },
	{
		name: 'Progress spinner',
		category: 'Basic',
		status: 'implemented',
		plimName: 'Spinner',
		docsPath: DOCS_PATHS.spinner,
	},
	{
		name: 'Radio button',
		category: 'Form',
		status: 'implemented',
		plimName: 'Radio',
		docsPath: DOCS_PATHS.radio,
	},
	{ name: 'Select', category: 'Form', status: 'implemented', docsPath: DOCS_PATHS.select },
	{
		name: 'Sidenav',
		category: 'Navigation',
		status: 'implemented',
		plimName: 'Sidebar',
		docsPath: DOCS_PATHS.sidebar,
	},
	{
		name: 'Slide toggle',
		category: 'Form',
		status: 'implemented',
		plimName: 'Switch',
		docsPath: DOCS_PATHS.switch,
	},
	{ name: 'Slider', category: 'Form', status: 'planned' },
	{ name: 'Snackbar', category: 'Feedback', status: 'planned' },
	{ name: 'Sort header', category: 'Data', status: 'planned' },
	{ name: 'Stepper', category: 'Data', status: 'planned' },
	{ name: 'Table', category: 'Data', status: 'planned' },
	{ name: 'Tabs', category: 'Navigation', status: 'planned' },
	{ name: 'Timepicker', category: 'Form', status: 'planned' },
	{ name: 'Toolbar', category: 'Navigation', status: 'planned' },
	{ name: 'Tooltip', category: 'Feedback', status: 'planned' },
	{ name: 'Tree', category: 'Data', status: 'planned' },
] as const;
