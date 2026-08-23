import { Component } from '@angular/core';
import { Datepicker, NativeDatepicker, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { DATEPICKER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-datepicker-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Datepicker, NativeDatepicker, Table],
	templateUrl: './datepicker-docs.html',
})
export class DatepickerDocs {
	protected readonly tokens = DATEPICKER_DOCS_TOKENS;
}
