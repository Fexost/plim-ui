import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-tokens-docs',
	imports: [DocsGuideLayout, Table],
	templateUrl: './tokens-docs.html',
	styleUrl: './tokens-docs.scss',
})
export class TokensDocs {
	protected readonly toc = [
		{ id: 'token-layers', label: 'Token layers' },
		{ id: 'colours', label: 'Colours' },
		{ id: 'theme-preview', label: 'Theme preview' },
		{ id: 'spacing', label: 'Spacing' },
		{ id: 'radius-shadow-motion', label: 'Radius, shadow, and motion' },
	];
}
