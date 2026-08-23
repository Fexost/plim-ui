import { Component, input } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsComponentToken } from '../../docs-component-tokens.config';

@Component({
	selector: 'app-docs-token-table',
	imports: [Table],
	templateUrl: './docs-token-table.html',
})
export class DocsTokenTable {
	public readonly tokens = input.required<DocsComponentToken[]>();
}
