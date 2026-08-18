import { Routes } from '@angular/router';

import { DOCS_HOME, DOCS_PATHS } from './docs-nav.config';

export const routes: Routes = [
	{ path: '', redirectTo: DOCS_HOME, pathMatch: 'full' },
	{
		path: DOCS_HOME,
		loadComponent: () => import('./pages/overview/overview').then((m) => m.Overview),
	},
	{
		path: DOCS_PATHS.installation,
		loadComponent: () => import('./pages/installation/installation').then((m) => m.Installation),
	},
	{ path: 'accessibility', redirectTo: DOCS_PATHS.accessibility, pathMatch: 'full' },
	{ path: 'components/button', redirectTo: DOCS_PATHS.button, pathMatch: 'full' },
	{ path: 'components/header', redirectTo: DOCS_PATHS.header, pathMatch: 'full' },
	{ path: 'components/sidebar', redirectTo: DOCS_PATHS.sidebar, pathMatch: 'full' },
	{
		path: DOCS_PATHS.tokens,
		loadComponent: () => import('./pages/foundations/tokens/tokens').then((m) => m.Tokens),
	},
	{
		path: DOCS_PATHS.theme,
		loadComponent: () => import('./pages/foundations/theme/theme').then((m) => m.Theme),
	},
	{
		path: DOCS_PATHS.typography,
		loadComponent: () =>
			import('./pages/foundations/typography/typography').then((m) => m.Typography),
	},
	{
		path: DOCS_PATHS.accessibility,
		loadComponent: () =>
			import('./pages/foundations/accessibility/accessibility').then((m) => m.Accessibility),
	},
	{
		path: DOCS_PATHS.icons,
		loadComponent: () => import('./pages/foundations/icons/icons').then((m) => m.Icons),
	},
	{
		path: DOCS_PATHS.button,
		loadComponent: () => import('./pages/basic/button/button-docs').then((m) => m.ButtonDocs),
	},
	{
		path: DOCS_PATHS.badge,
		loadComponent: () => import('./pages/basic/badge/badge-docs').then((m) => m.BadgeDocs),
	},
	{
		path: DOCS_PATHS.card,
		loadComponent: () => import('./pages/basic/card/card-docs').then((m) => m.CardDocs),
	},
	{
		path: DOCS_PATHS.separator,
		loadComponent: () => import('./pages/basic/separator/separator-docs').then((m) => m.SeparatorDocs),
	},
	{
		path: DOCS_PATHS.avatar,
		loadComponent: () => import('./pages/basic/avatar/avatar-docs').then((m) => m.AvatarDocs),
	},
	{
		path: DOCS_PATHS.spinner,
		loadComponent: () => import('./pages/basic/spinner/spinner-docs').then((m) => m.SpinnerDocs),
	},
	{
		path: DOCS_PATHS.header,
		loadComponent: () => import('./pages/navigation/header/header-docs').then((m) => m.HeaderDocs),
	},
	{
		path: DOCS_PATHS.sidebar,
		loadComponent: () => import('./pages/navigation/sidebar/sidebar-docs').then((m) => m.SidebarDocs),
	},
	{ path: '**', redirectTo: DOCS_HOME },
];
