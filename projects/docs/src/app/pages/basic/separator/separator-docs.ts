import { Component } from '@angular/core';
import { Separator } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-separator-docs',
	imports: [DocsComponentLayout, Separator],
	templateUrl: './separator-docs.html',
	styleUrl: './separator-docs.scss',
})
export class SeparatorDocs {}
