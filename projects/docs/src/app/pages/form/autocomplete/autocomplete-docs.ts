import { Component } from '@angular/core';
import { Autocomplete, Option, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { AUTOCOMPLETE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-autocomplete-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Autocomplete, Option, Table],
	templateUrl: './autocomplete-docs.html',
})
export class AutocompleteDocs {
	protected readonly tokens = AUTOCOMPLETE_DOCS_TOKENS;
}
