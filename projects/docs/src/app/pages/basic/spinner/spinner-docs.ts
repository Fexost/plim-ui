import { Component } from '@angular/core';
import { Spinner, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SPINNER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-spinner-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Spinner, Table],
	templateUrl: './spinner-docs.html',
})
export class SpinnerDocs {
	protected readonly tokens = SPINNER_DOCS_TOKENS;
}
