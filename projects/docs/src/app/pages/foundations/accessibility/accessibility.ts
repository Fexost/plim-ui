import { Component } from '@angular/core';

import { Badge, Card, Separator } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-accessibility',
	imports: [Badge, Card, DocsGuideLayout, Separator],
	templateUrl: './accessibility.html',
	styleUrl: './accessibility.scss',
})
export class Accessibility {}
