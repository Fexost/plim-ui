import { Component } from '@angular/core';
import { Table, Toolbar } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TOOLBAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-toolbar-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Toolbar, Table],
	templateUrl: './toolbar-docs.html',
})
export class ToolbarDocs {
	protected readonly tokens = TOOLBAR_DOCS_TOKENS;
}
