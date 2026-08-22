import { Component } from '@angular/core';
import { Datepicker } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { DATEPICKER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-datepicker-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Datepicker],
	templateUrl: './datepicker-docs.html',
})
export class DatepickerDocs {
	protected readonly tokens = DATEPICKER_DOCS_TOKENS;
}
