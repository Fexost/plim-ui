import { Routes } from '@angular/router';

import { DOCS_HOME, DOCS_PATHS } from './docs-nav.config';

const LEGACY_COMPONENT_REDIRECTS: Routes = [
	{ path: 'components/button', redirectTo: DOCS_PATHS.button, pathMatch: 'full' },
	{ path: 'components/button-toggle', redirectTo: DOCS_PATHS.buttonToggle, pathMatch: 'full' },
	{ path: 'components/badge', redirectTo: DOCS_PATHS.badge, pathMatch: 'full' },
	{ path: 'components/card', redirectTo: DOCS_PATHS.card, pathMatch: 'full' },
	{ path: 'components/separator', redirectTo: DOCS_PATHS.separator, pathMatch: 'full' },
	{ path: 'components/avatar', redirectTo: DOCS_PATHS.avatar, pathMatch: 'full' },
	{ path: 'components/spinner', redirectTo: DOCS_PATHS.spinner, pathMatch: 'full' },
	{ path: 'components/progress-bar', redirectTo: DOCS_PATHS.progressBar, pathMatch: 'full' },
	{ path: 'components/header', redirectTo: DOCS_PATHS.header, pathMatch: 'full' },
	{ path: 'components/sidebar', redirectTo: DOCS_PATHS.sidebar, pathMatch: 'full' },
	{ path: 'components/input', redirectTo: DOCS_PATHS.input, pathMatch: 'full' },
	{ path: 'components/textarea', redirectTo: DOCS_PATHS.textarea, pathMatch: 'full' },
	{ path: 'components/select', redirectTo: DOCS_PATHS.select, pathMatch: 'full' },
	{ path: 'components/checkbox', redirectTo: DOCS_PATHS.checkbox, pathMatch: 'full' },
	{ path: 'components/radio', redirectTo: DOCS_PATHS.radio, pathMatch: 'full' },
	{ path: 'components/switch', redirectTo: DOCS_PATHS.switch, pathMatch: 'full' },
	{ path: 'components/form-field', redirectTo: DOCS_PATHS.formField, pathMatch: 'full' },
];

export const routes: Routes = [
	{ path: '', redirectTo: DOCS_HOME, pathMatch: 'full' },
	{
		path: DOCS_HOME,
		loadComponent: () => import('./pages/overview/overview').then((m) => m.Overview),
	},
	{
		path: DOCS_PATHS.installation,
		loadComponent: () =>
			import('./pages/installation/installation').then((m) => m.Installation),
	},
	{ path: 'accessibility', redirectTo: DOCS_PATHS.accessibility, pathMatch: 'full' },
	...LEGACY_COMPONENT_REDIRECTS,
	{
		path: DOCS_PATHS.tokens,
		loadComponent: () =>
			import('./pages/foundations/tokens/tokens-docs').then((m) => m.TokensDocs),
	},
	{
		path: DOCS_PATHS.theme,
		loadComponent: () =>
			import('./pages/foundations/theme/theme-docs').then((m) => m.ThemeDocs),
	},
	{
		path: DOCS_PATHS.typography,
		loadComponent: () =>
			import('./pages/foundations/typography/typography-docs').then((m) => m.TypographyDocs),
	},
	{
		path: DOCS_PATHS.accessibility,
		loadComponent: () =>
			import('./pages/foundations/accessibility/accessibility-docs').then(
				(m) => m.AccessibilityDocs,
			),
	},
	{
		path: DOCS_PATHS.icons,
		loadComponent: () =>
			import('./pages/foundations/icons/icons-docs').then((m) => m.IconsDocs),
	},
	{
		path: DOCS_PATHS.button,
		loadComponent: () => import('./pages/basic/button/button-docs').then((m) => m.ButtonDocs),
	},
	{
		path: DOCS_PATHS.buttonToggle,
		loadComponent: () =>
			import('./pages/basic/button-toggle/button-toggle-docs').then((m) => m.ButtonToggleDocs),
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
		loadComponent: () =>
			import('./pages/basic/separator/separator-docs').then((m) => m.SeparatorDocs),
	},
	{
		path: DOCS_PATHS.avatar,
		loadComponent: () => import('./pages/basic/avatar/avatar-docs').then((m) => m.AvatarDocs),
	},
	{
		path: DOCS_PATHS.spinner,
		loadComponent: () =>
			import('./pages/basic/spinner/spinner-docs').then((m) => m.SpinnerDocs),
	},
	{
		path: DOCS_PATHS.progressBar,
		loadComponent: () =>
			import('./pages/basic/progress-bar/progress-bar-docs').then((m) => m.ProgressBarDocs),
	},
	{
		path: DOCS_PATHS.header,
		loadComponent: () =>
			import('./pages/navigation/header/header-docs').then((m) => m.HeaderDocs),
	},
	{
		path: DOCS_PATHS.sidebar,
		loadComponent: () =>
			import('./pages/navigation/sidebar/sidebar-docs').then((m) => m.SidebarDocs),
	},
	{
		path: DOCS_PATHS.input,
		loadComponent: () => import('./pages/form/input/input-docs').then((m) => m.InputDocs),
	},
	{
		path: DOCS_PATHS.textarea,
		loadComponent: () =>
			import('./pages/form/textarea/textarea-docs').then((m) => m.TextareaDocs),
	},
	{
		path: DOCS_PATHS.select,
		loadComponent: () => import('./pages/form/select/select-docs').then((m) => m.SelectDocs),
	},
	{
		path: DOCS_PATHS.checkbox,
		loadComponent: () =>
			import('./pages/form/checkbox/checkbox-docs').then((m) => m.CheckboxDocs),
	},
	{
		path: DOCS_PATHS.radio,
		loadComponent: () => import('./pages/form/radio/radio-docs').then((m) => m.RadioDocs),
	},
	{
		path: DOCS_PATHS.switch,
		loadComponent: () => import('./pages/form/switch/switch-docs').then((m) => m.SwitchDocs),
	},
	{
		path: DOCS_PATHS.formField,
		loadComponent: () =>
			import('./pages/form/form-field/form-field-docs').then((m) => m.FormFieldDocs),
	},
	{ path: '**', redirectTo: DOCS_HOME },
];
