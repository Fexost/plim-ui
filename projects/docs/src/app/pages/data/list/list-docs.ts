import { Component } from '@angular/core';
import { List, ListItem } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { LIST_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-list-docs',
	imports: [DocsComponentLayout, DocsTokenTable, List, ListItem],
	templateUrl: './list-docs.html',
	styleUrl: './list-docs.scss',
})
export class ListDocs {
	protected readonly tokens = LIST_DOCS_TOKENS;
}
