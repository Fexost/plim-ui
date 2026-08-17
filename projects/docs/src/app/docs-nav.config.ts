export const DOCS_HOME = 'overview';

export const DOCS_PATHS = {
	installation: 'installation',
	accessibility: 'accessibility',
	button: 'components/button',
	header: 'components/header',
	sidebar: 'components/sidebar',
} as const;

export const DOCS_NAV = [
	{
		label: 'Get started',
		items: [
			{ path: DOCS_HOME, label: 'Overview' },
			{ path: DOCS_PATHS.installation, label: 'Installation' },
			{ path: DOCS_PATHS.accessibility, label: 'Accessibility' },
		],
	},
	{
		label: 'Components',
		items: [
			{ path: DOCS_PATHS.button, label: 'Button' },
			{ path: DOCS_PATHS.header, label: 'Header' },
			{ path: DOCS_PATHS.sidebar, label: 'Sidebar' },
		],
	},
];
