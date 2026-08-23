import { Component } from '@angular/core';
import { GridList, GridTile, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { GRID_LIST_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-grid-list-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, GridList, GridTile, Table],
	templateUrl: './grid-list-docs.html',
	styleUrl: './grid-list-docs.scss',
})
export class GridListDocs {
	protected readonly tokens = GRID_LIST_DOCS_TOKENS;
}
