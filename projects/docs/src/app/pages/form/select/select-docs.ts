import { Component } from '@angular/core';
import { NativeSelect, Select, SelectOption } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SELECT_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-select-docs',
	imports: [DocsComponentLayout, DocsTokenTable, NativeSelect, Select, SelectOption],
	templateUrl: './select-docs.html',
	styleUrl: './select-docs.scss',
})
export class SelectDocs {
	protected readonly tokens = SELECT_DOCS_TOKENS;
}
