import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TABLE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-table-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Table],
	templateUrl: './table-docs.html',
	styleUrl: './table-docs.scss',
})
export class TableDocs {
	protected readonly tokens = TABLE_DOCS_TOKENS;
}
