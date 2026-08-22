import { Component } from '@angular/core';
import { Spinner } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SPINNER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-spinner-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Spinner],
	templateUrl: './spinner-docs.html',
})
export class SpinnerDocs {
	protected readonly tokens = SPINNER_DOCS_TOKENS;
}
