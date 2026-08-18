import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Badge } from 'plim-ui';

import { DocsGuideLayout } from '../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_HOME, DOCS_PATHS } from '../../docs-nav.config';

@Component({
	selector: 'app-installation',
	imports: [Badge, DocsGuideLayout, RouterLink],
	templateUrl: './installation.html',
})
export class Installation {
	protected readonly DOCS_HOME = DOCS_HOME;
	protected readonly DOCS_PATHS = DOCS_PATHS;
}
