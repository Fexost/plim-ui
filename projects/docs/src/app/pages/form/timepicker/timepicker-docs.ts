import { Component } from '@angular/core';
import { NativeTimepicker, Timepicker } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TIMEPICKER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-timepicker-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Timepicker, NativeTimepicker],
	templateUrl: './timepicker-docs.html',
})
export class TimepickerDocs {
	protected readonly tokens = TIMEPICKER_DOCS_TOKENS;
}
