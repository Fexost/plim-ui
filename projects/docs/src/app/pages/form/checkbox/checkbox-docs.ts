import { Component } from '@angular/core';
import { Checkbox, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { CHECKBOX_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-checkbox-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Checkbox, Table],
	templateUrl: './checkbox-docs.html',
	styleUrl: './checkbox-docs.scss',
})
export class CheckboxDocs {
	protected readonly tokens = CHECKBOX_DOCS_TOKENS;
}
