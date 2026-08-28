import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_HOME, DOCS_PATHS } from '../../../docs-nav.config';

@Component({
	selector: 'app-app-shell-docs',
	imports: [DocsGuideLayout, RouterLink],
	templateUrl: './app-shell.html',
})
export class AppShellDocs {
	protected readonly DOCS_HOME = DOCS_HOME;
	protected readonly DOCS_PATHS = DOCS_PATHS;

	protected readonly toc = [
		{ id: 'layout', label: 'Layout' },
		{ id: 'header', label: 'Header' },
		{ id: 'sidebar', label: 'Sidebar' },
		{ id: 'search', label: 'Search' },
		{ id: 'reference', label: 'Reference app' },
	];
}
