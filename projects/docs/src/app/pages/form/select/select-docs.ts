import { Component } from '@angular/core';
import { Select, SelectOption } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-select-docs',
	imports: [DocsComponentLayout, Select, SelectOption],
	templateUrl: './select-docs.html',
	styleUrl: './select-docs.scss',
})
export class SelectDocs {}
