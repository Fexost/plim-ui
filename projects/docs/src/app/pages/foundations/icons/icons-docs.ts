import { Component } from '@angular/core';
import { Badge } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-icons-docs',
	imports: [Badge, DocsGuideLayout],
	templateUrl: './icons-docs.html',
	styleUrl: './icons-docs.scss',
})
export class IconsDocs {}
