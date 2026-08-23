import { Component } from '@angular/core';
import { Toolbar } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TOOLBAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-toolbar-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Toolbar],
	templateUrl: './toolbar-docs.html',
	styleUrl: './toolbar-docs.scss',
})
export class ToolbarDocs {
	protected readonly tokens = TOOLBAR_DOCS_TOKENS;
}
