import { Component } from '@angular/core';
import { Radio, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { RADIO_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-radio-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Radio, Table],
	templateUrl: './radio-docs.html',
	styleUrl: './radio-docs.scss',
})
export class RadioDocs {
	protected readonly tokens = RADIO_DOCS_TOKENS;
}
