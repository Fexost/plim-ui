import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-tokens-docs',
	imports: [DocsGuideLayout, Table],
	templateUrl: './tokens-docs.html',
	styleUrl: './tokens-docs.scss',
})
export class TokensDocs {}
