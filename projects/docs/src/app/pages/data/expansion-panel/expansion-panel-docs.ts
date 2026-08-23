import { Component } from '@angular/core';
import { ExpansionPanel } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { EXPANSION_PANEL_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-expansion-panel-docs',
	imports: [DocsComponentLayout, DocsTokenTable, ExpansionPanel],
	templateUrl: './expansion-panel-docs.html',
	styleUrl: './expansion-panel-docs.scss',
})
export class ExpansionPanelDocs {
	protected readonly tokens = EXPANSION_PANEL_DOCS_TOKENS;
}
