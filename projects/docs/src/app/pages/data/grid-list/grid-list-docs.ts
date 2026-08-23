import { Component } from '@angular/core';
import { GridList, GridTile } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { GRID_LIST_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-grid-list-docs',
	imports: [DocsComponentLayout, DocsTokenTable, GridList, GridTile],
	templateUrl: './grid-list-docs.html',
	styleUrl: './grid-list-docs.scss',
})
export class GridListDocs {
	protected readonly tokens = GRID_LIST_DOCS_TOKENS;
}
