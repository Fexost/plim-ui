import { Component } from '@angular/core';
import { Input } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-input-docs',
	imports: [DocsComponentLayout, Input],
	templateUrl: './input-docs.html',
})
export class InputDocs {}
