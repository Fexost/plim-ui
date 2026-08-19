import { Component } from '@angular/core';
import { Checkbox } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-checkbox-docs',
	imports: [DocsComponentLayout, Checkbox],
	templateUrl: './checkbox-docs.html',
})
export class CheckboxDocs {}
