import { Component } from '@angular/core';
import { Input, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { INPUT_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-input-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Input, Table],
	templateUrl: './input-docs.html',
})
export class InputDocs {
	protected readonly tokens = INPUT_DOCS_TOKENS;
}
