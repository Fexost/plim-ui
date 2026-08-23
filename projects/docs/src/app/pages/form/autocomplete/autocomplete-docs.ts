import { Component } from '@angular/core';
import { Autocomplete, Option } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { AUTOCOMPLETE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-autocomplete-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Autocomplete, Option],
	templateUrl: './autocomplete-docs.html',
})
export class AutocompleteDocs {
	protected readonly tokens = AUTOCOMPLETE_DOCS_TOKENS;
}
