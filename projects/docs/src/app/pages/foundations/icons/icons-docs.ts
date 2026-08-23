import { Component } from '@angular/core';
import { Table } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-icons-docs',
	imports: [DocsGuideLayout, Table],
	templateUrl: './icons-docs.html',
	styleUrl: './icons-docs.scss',
})
export class IconsDocs {}
