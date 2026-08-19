import { Component } from '@angular/core';
import { FormField, Input } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-form-field-docs',
	imports: [DocsComponentLayout, FormField, Input],
	templateUrl: './form-field-docs.html',
})
export class FormFieldDocs {}
