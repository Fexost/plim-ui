import { Component } from '@angular/core';
import { List, ListItem, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { LIST_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-list-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, List, ListItem, Table],
	templateUrl: './list-docs.html',
	styleUrl: './list-docs.scss',
})
export class ListDocs {
	protected readonly tokens = LIST_DOCS_TOKENS;
}
