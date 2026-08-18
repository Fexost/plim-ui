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
} as const;

export interface DocsNavItem {
	label: string;
	path?: string;
}

export interface DocsNavSection {
	label: string;
	items: DocsNavItem[];
}

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
			{ path: DOCS_PATHS.icons, label: 'Icons' },
		],
	},
	{
		label: 'Basic',
		items: [
			{ path: DOCS_PATHS.button, label: 'Button' },
			{ path: DOCS_PATHS.badge, label: 'Badge' },
			{ path: DOCS_PATHS.card, label: 'Card' },
			{ path: DOCS_PATHS.separator, label: 'Separator' },
			{ path: DOCS_PATHS.avatar, label: 'Avatar' },
			{ path: DOCS_PATHS.spinner, label: 'Spinner' },
		],
	},
	{
		label: 'Form',
		items: [
			{ label: 'Input' },
			{ label: 'Textarea' },
			{ label: 'Select' },
			{ label: 'Checkbox' },
			{ label: 'Radio' },
			{ label: 'Switch' },
			{ label: 'Form field' },
		],
	},
	{
		label: 'Navigation',
		items: [
			{ path: DOCS_PATHS.header, label: 'Header' },
			{ label: 'Tabs' },
			{ label: 'Breadcrumb' },
			{ label: 'Pagination' },
			{ path: DOCS_PATHS.sidebar, label: 'Sidebar' },
		],
	},
	{
		label: 'Feedback',
		items: [
			{ label: 'Alert' },
			{ label: 'Toast' },
			{ label: 'Dialog' },
			{ label: 'Tooltip' },
			{ label: 'Popover' },
		],
	},
	{
		label: 'Data',
		items: [
			{ label: 'Table' },
			{ label: 'List' },
			{ label: 'Accordion' },
			{ label: 'Tree' },
		],
	},
];
