import { Component } from '@angular/core';
import { Select } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-select-docs',
	imports: [DocsComponentLayout, Select],
	templateUrl: './select-docs.html',
	styleUrl: './select-docs.scss',
})
export class SelectDocs {}
