import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_PATHS } from '../../../docs-nav.config';

@Component({
	selector: 'app-theme-docs',
	imports: [DocsGuideLayout, RouterLink],
	templateUrl: './theme-docs.html',
})
export class ThemeDocs {
	protected readonly DOCS_PATHS = DOCS_PATHS;
	protected readonly toc = [
		{ id: 'default-dark', label: 'Default (dark)' },
		{ id: 'light-mode', label: 'Light mode' },
		{ id: 'toggle-runtime', label: 'Toggle at runtime' },
		{ id: 'color-scheme-hint', label: 'Color scheme hint' },
	];
}
