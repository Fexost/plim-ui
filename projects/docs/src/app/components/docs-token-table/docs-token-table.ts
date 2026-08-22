import { Component, input } from '@angular/core';

import { DocsComponentToken } from '../../docs-component-tokens.config';

@Component({
	selector: 'app-docs-token-table',
	templateUrl: './docs-token-table.html',
})
export class DocsTokenTable {
	public readonly tokens = input.required<DocsComponentToken[]>();
}
