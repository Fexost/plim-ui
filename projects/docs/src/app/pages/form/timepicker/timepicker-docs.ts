import { Component } from '@angular/core';
import { NativeTimepicker, Table, Timepicker } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TIMEPICKER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-timepicker-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Timepicker, NativeTimepicker, Table],
	templateUrl: './timepicker-docs.html',
})
export class TimepickerDocs {
	protected readonly tokens = TIMEPICKER_DOCS_TOKENS;
}
