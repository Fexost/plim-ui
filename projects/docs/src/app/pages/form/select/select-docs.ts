import { Component } from '@angular/core';
import { NativeSelect, Option, Select, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SELECT_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-select-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, NativeSelect, Option, Select, Table],
	templateUrl: './select-docs.html',
})
export class SelectDocs {
	protected readonly tokens = SELECT_DOCS_TOKENS;
}
