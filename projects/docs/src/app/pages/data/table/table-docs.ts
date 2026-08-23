import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TABLE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-table-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Table],
	templateUrl: './table-docs.html',
	styleUrl: './table-docs.scss',
})
export class TableDocs {
	protected readonly tokens = TABLE_DOCS_TOKENS;
}
