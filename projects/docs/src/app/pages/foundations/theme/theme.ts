import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_PATHS } from '../../../docs-nav.config';

@Component({
	selector: 'app-theme',
	imports: [DocsGuideLayout, RouterLink],
	templateUrl: './theme.html',
})
export class Theme {
	protected readonly DOCS_PATHS = DOCS_PATHS;
}
