import { Component } from '@angular/core';
import { Badge } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BADGE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-badge-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Badge],
	templateUrl: './badge-docs.html',
})
export class BadgeDocs {
	protected readonly tokens = BADGE_DOCS_TOKENS;
}
