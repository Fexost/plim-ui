import { Component } from '@angular/core';
import { FormField, Input } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { FORM_FIELD_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-form-field-docs',
	imports: [DocsComponentLayout, DocsTokenTable, FormField, Input],
	templateUrl: './form-field-docs.html',
})
export class FormFieldDocs {
	protected readonly tokens = FORM_FIELD_DOCS_TOKENS;
}
