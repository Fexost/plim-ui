import { Component } from '@angular/core';
import { Spinner } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-spinner-docs',
	imports: [DocsComponentLayout, Spinner],
	templateUrl: './spinner-docs.html',
})
export class SpinnerDocs {}
