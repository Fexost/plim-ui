import { Component } from '@angular/core';
import { FormField, Input, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { FORM_FIELD_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-form-field-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, FormField, Input, Table],
	templateUrl: './form-field-docs.html',
})
export class FormFieldDocs {
	protected readonly tokens = FORM_FIELD_DOCS_TOKENS;
}
