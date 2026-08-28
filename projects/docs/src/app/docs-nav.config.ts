export const DOCS_HOME = 'overview';

export interface DocsSiteLink {
	label: string;
	href?: string;
	current?: boolean;
}

/** Cross-site switcher shown in the docs header. */
export const DOCS_SITES: DocsSiteLink[] = [
	{ label: 'plim-ui', current: true },
	{ label: 'Portfolio', href: 'https://fexost.dev' },
];

export interface DocsExternalLink {
	label: string;
	href: string;
}

export const DOCS_EXTERNAL_LINKS: DocsExternalLink[] = [
	{ label: 'Npm', href: 'https://www.npmjs.com/package/plim-ui' },
	{ label: 'GitHub', href: 'https://github.com/Fexost/plim-ui' },
];

export const DOCS_PATHS = {
	installation: 'installation',
	tokens: 'foundations/tokens',
	theme: 'foundations/theme',
	typography: 'foundations/typography',
	accessibility: 'foundations/accessibility',
	icons: 'foundations/icons',
	button: 'basic/button',
	buttonToggle: 'basic/button-toggle',
	badge: 'basic/badge',
	card: 'basic/card',
	separator: 'basic/separator',
	autocomplete: 'form/autocomplete',
	avatar: 'basic/avatar',
	spinner: 'basic/spinner',
	progressBar: 'basic/progress-bar',
	header: 'navigation/header',
	menu: 'navigation/menu',
	paginator: 'navigation/paginator',
	sidebar: 'navigation/sidebar',
	tabs: 'navigation/tabs',
	toolbar: 'navigation/toolbar',
	bottomSheet: 'feedback/bottom-sheet',
	dialog: 'feedback/dialog',
	snackbar: 'feedback/snackbar',
	tooltip: 'feedback/tooltip',
	chips: 'data/chips',
	expansionPanel: 'data/expansion-panel',
	gridList: 'data/grid-list',
	list: 'data/list',
	sortHeader: 'data/sort-header',
	stepper: 'data/stepper',
	stickyNote: 'data/sticky-note',
	table: 'data/table',
	timeline: 'data/timeline',
	tree: 'data/tree',
	input: 'form/input',
	textarea: 'form/textarea',
	select: 'form/select',
	checkbox: 'form/checkbox',
	radio: 'form/radio',
	slider: 'form/slider',
	datepicker: 'form/datepicker',
	timepicker: 'form/timepicker',
	switch: 'form/switch',
	formField: 'form/form-field',
	chatPanel: 'advanced/chat-panel',
} as const;

export interface DocsNavItem {
	label: string;
	path?: string;
	keywords?: string[];
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
			{ path: DOCS_PATHS.accessibility, label: 'Accessibility', keywords: ['a11y', 'wcag'] },
			{ path: DOCS_PATHS.icons, label: 'Icon', keywords: ['icons', 'material symbols'] },
		],
	},
	{
		label: 'Basic',
		items: [
			{ path: DOCS_PATHS.avatar, label: 'Avatar' },
			{ path: DOCS_PATHS.badge, label: 'Badge' },
			{ path: DOCS_PATHS.button, label: 'Button' },
			{ path: DOCS_PATHS.buttonToggle, label: 'Button toggle' },
			{ path: DOCS_PATHS.card, label: 'Card' },
			{ path: DOCS_PATHS.progressBar, label: 'Progress bar' },
			{ path: DOCS_PATHS.spinner, label: 'Progress spinner', keywords: ['spinner', 'loading'] },
			{ path: DOCS_PATHS.separator, label: 'Divider', keywords: ['separator'] },
		],
	},
	{
		label: 'Form',
		items: [
			{ path: DOCS_PATHS.autocomplete, label: 'Autocomplete' },
			{ path: DOCS_PATHS.checkbox, label: 'Checkbox' },
			{ path: DOCS_PATHS.datepicker, label: 'Datepicker' },
			{ path: DOCS_PATHS.formField, label: 'Form field' },
			{ path: DOCS_PATHS.input, label: 'Input' },
			{ path: DOCS_PATHS.radio, label: 'Radio button' },
			{ path: DOCS_PATHS.select, label: 'Select' },
			{ path: DOCS_PATHS.slider, label: 'Slider' },
			{ path: DOCS_PATHS.switch, label: 'Slide toggle', keywords: ['switch', 'toggle'] },
			{ path: DOCS_PATHS.textarea, label: 'Textarea' },
			{ path: DOCS_PATHS.timepicker, label: 'Timepicker' },
		],
	},
	{
		label: 'Navigation',
		items: [
			{ path: DOCS_PATHS.header, label: 'Header' },
			{ path: DOCS_PATHS.menu, label: 'Menu' },
			{ path: DOCS_PATHS.paginator, label: 'Paginator' },
			{ path: DOCS_PATHS.sidebar, label: 'Sidenav', keywords: ['sidebar', 'navigation'] },
			{ path: DOCS_PATHS.tabs, label: 'Tabs' },
			{ path: DOCS_PATHS.toolbar, label: 'Toolbar' },
		],
	},
	{
		label: 'Feedback',
		items: [
			{ path: DOCS_PATHS.bottomSheet, label: 'Bottom sheet' },
			{ path: DOCS_PATHS.dialog, label: 'Dialog' },
			{ path: DOCS_PATHS.snackbar, label: 'Snackbar' },
			{ path: DOCS_PATHS.tooltip, label: 'Tooltip' },
		],
	},
	{
		label: 'Data',
		items: [
			{ path: DOCS_PATHS.chips, label: 'Chips' },
			{ path: DOCS_PATHS.expansionPanel, label: 'Expansion panel' },
			{ path: DOCS_PATHS.gridList, label: 'Grid list' },
			{ path: DOCS_PATHS.list, label: 'List' },
			{ path: DOCS_PATHS.sortHeader, label: 'Sort header' },
			{ path: DOCS_PATHS.stepper, label: 'Stepper' },
			{ path: DOCS_PATHS.stickyNote, label: 'Sticky note' },
			{ path: DOCS_PATHS.table, label: 'Table' },
			{ path: DOCS_PATHS.timeline, label: 'Timeline' },
			{ path: DOCS_PATHS.tree, label: 'Tree' },
		],
	},
	{
		label: 'Advanced',
		items: [
			{
				path: DOCS_PATHS.chatPanel,
				label: 'Chat',
				keywords: ['assistant', 'chat', 'launcher', 'messages', 'overlay', 'widget'],
			},
		],
	},
];

export function getDocsCategoryPath(category: string): string | undefined {
	return DOCS_NAV.find((section) => section.label === category)?.items.find((item) => item.path)
		?.path;
}
