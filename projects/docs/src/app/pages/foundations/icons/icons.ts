import { Component } from '@angular/core';

import { Badge } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-icons',
	imports: [Badge, DocsGuideLayout],
	templateUrl: './icons.html',
	styleUrl: './icons.scss',
})
export class Icons {}
