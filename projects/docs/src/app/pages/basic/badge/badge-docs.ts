import { Component } from '@angular/core';
import { Badge, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BADGE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-badge-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Badge, Table],
	templateUrl: './badge-docs.html',
})
export class BadgeDocs {
	protected readonly tokens = BADGE_DOCS_TOKENS;
}
