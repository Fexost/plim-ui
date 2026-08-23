import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-typography-docs',
	imports: [DocsGuideLayout, Table],
	templateUrl: './typography-docs.html',
	styleUrl: './typography-docs.scss',
})
export class TypographyDocs {}
