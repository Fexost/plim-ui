import { Component } from '@angular/core';
import { ExpansionPanel, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { EXPANSION_PANEL_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-expansion-panel-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, ExpansionPanel, Table],
	templateUrl: './expansion-panel-docs.html',
	styleUrl: './expansion-panel-docs.scss',
})
export class ExpansionPanelDocs {
	protected readonly tokens = EXPANSION_PANEL_DOCS_TOKENS;
}
