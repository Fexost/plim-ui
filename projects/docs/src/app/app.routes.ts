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
	{
		path: DOCS_PATHS.accessibility,
		loadComponent: () => import('./pages/accessibility/accessibility').then((m) => m.Accessibility),
	},
	{
		path: DOCS_PATHS.button,
		loadComponent: () => import('./pages/components/button/button-docs').then((m) => m.ButtonDocs),
	},
	{
		path: DOCS_PATHS.header,
		loadComponent: () => import('./pages/components/header/header-docs').then((m) => m.HeaderDocs),
	},
	{
		path: DOCS_PATHS.sidebar,
		loadComponent: () => import('./pages/components/sidebar/sidebar-docs').then((m) => m.SidebarDocs),
	},
	{ path: '**', redirectTo: DOCS_HOME },
];
