import { Component } from '@angular/core';
import { Radio } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-radio-docs',
	imports: [DocsComponentLayout, Radio],
	templateUrl: './radio-docs.html',
})
export class RadioDocs {}
