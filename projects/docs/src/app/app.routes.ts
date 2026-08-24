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
		loadComponent: () =>
			import('./pages/installation/installation').then((m) => m.Installation),
	},
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
		path: DOCS_PATHS.menu,
		loadComponent: () => import('./pages/navigation/menu/menu-docs').then((m) => m.MenuDocs),
	},
	{
		path: DOCS_PATHS.paginator,
		loadComponent: () =>
			import('./pages/navigation/paginator/paginator-docs').then((m) => m.PaginatorDocs),
	},
	{
		path: DOCS_PATHS.tabs,
		loadComponent: () => import('./pages/navigation/tabs/tabs-docs').then((m) => m.TabsDocs),
	},
	{
		path: DOCS_PATHS.toolbar,
		loadComponent: () =>
			import('./pages/navigation/toolbar/toolbar-docs').then((m) => m.ToolbarDocs),
	},
	{
		path: DOCS_PATHS.bottomSheet,
		loadComponent: () =>
			import('./pages/feedback/bottom-sheet/bottom-sheet-docs').then((m) => m.BottomSheetDocs),
	},
	{
		path: DOCS_PATHS.dialog,
		loadComponent: () =>
			import('./pages/feedback/dialog/dialog-docs').then((m) => m.DialogDocs),
	},
	{
		path: DOCS_PATHS.snackbar,
		loadComponent: () =>
			import('./pages/feedback/snackbar/snackbar-docs').then((m) => m.SnackbarDocs),
	},
	{
		path: DOCS_PATHS.tooltip,
		loadComponent: () =>
			import('./pages/feedback/tooltip/tooltip-docs').then((m) => m.TooltipDocs),
	},
	{
		path: DOCS_PATHS.chips,
		loadComponent: () => import('./pages/data/chips/chips-docs').then((m) => m.ChipsDocs),
	},
	{
		path: DOCS_PATHS.expansionPanel,
		loadComponent: () =>
			import('./pages/data/expansion-panel/expansion-panel-docs').then(
				(m) => m.ExpansionPanelDocs,
			),
	},
	{
		path: DOCS_PATHS.gridList,
		loadComponent: () =>
			import('./pages/data/grid-list/grid-list-docs').then((m) => m.GridListDocs),
	},
	{
		path: DOCS_PATHS.list,
		loadComponent: () => import('./pages/data/list/list-docs').then((m) => m.ListDocs),
	},
	{
		path: DOCS_PATHS.sortHeader,
		loadComponent: () =>
			import('./pages/data/sort-header/sort-header-docs').then((m) => m.SortHeaderDocs),
	},
	{
		path: DOCS_PATHS.stepper,
		loadComponent: () =>
			import('./pages/data/stepper/stepper-docs').then((m) => m.StepperDocs),
	},
	{
		path: DOCS_PATHS.table,
		loadComponent: () => import('./pages/data/table/table-docs').then((m) => m.TableDocs),
	},
	{
		path: DOCS_PATHS.tree,
		loadComponent: () => import('./pages/data/tree/tree-docs').then((m) => m.TreeDocs),
	},
	{
		path: DOCS_PATHS.autocomplete,
		loadComponent: () =>
			import('./pages/form/autocomplete/autocomplete-docs').then((m) => m.AutocompleteDocs),
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
		path: DOCS_PATHS.slider,
		loadComponent: () => import('./pages/form/slider/slider-docs').then((m) => m.SliderDocs),
	},
	{
		path: DOCS_PATHS.datepicker,
		loadComponent: () =>
			import('./pages/form/datepicker/datepicker-docs').then((m) => m.DatepickerDocs),
	},
	{
		path: DOCS_PATHS.timepicker,
		loadComponent: () =>
			import('./pages/form/timepicker/timepicker-docs').then((m) => m.TimepickerDocs),
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
	{
		path: DOCS_PATHS.chatPanel,
		loadComponent: () =>
			import('./pages/advanced/chat-panel/chat-panel-docs').then((m) => m.ChatPanelDocs),
	},
	{
		path: DOCS_PATHS.stickyNote,
		loadComponent: () =>
			import('./pages/data/sticky-note/sticky-note-docs').then((m) => m.StickyNoteDocs),
	},
	{
		path: DOCS_PATHS.timeline,
		loadComponent: () => import('./pages/data/timeline/timeline-docs').then((m) => m.TimelineDocs),
	},
	{ path: '**', redirectTo: DOCS_HOME },
];
