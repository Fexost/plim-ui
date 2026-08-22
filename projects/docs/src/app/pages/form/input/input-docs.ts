import { Component } from '@angular/core';
import { Input } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { INPUT_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-input-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Input],
	templateUrl: './input-docs.html',
})
export class InputDocs {
	protected readonly tokens = INPUT_DOCS_TOKENS;
}
