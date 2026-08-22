import { Component } from '@angular/core';
import { Datepicker, NativeDatepicker } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { DATEPICKER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-datepicker-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Datepicker, NativeDatepicker],
	templateUrl: './datepicker-docs.html',
})
export class DatepickerDocs {
	protected readonly tokens = DATEPICKER_DOCS_TOKENS;
}
