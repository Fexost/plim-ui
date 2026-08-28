import { Component } from '@angular/core';
import { Badge, Card, Separator } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';

@Component({
	selector: 'app-accessibility-docs',
	imports: [Badge, Card, DocsGuideLayout, Separator],
	templateUrl: './accessibility-docs.html',
	styleUrl: './accessibility-docs.scss',
})
export class AccessibilityDocs {
	protected readonly toc = [
		{ id: 'principles', label: 'Principles' },
		{ id: 'keyboard', label: 'Keyboard' },
		{ id: 'forms', label: 'Forms' },
		{ id: 'overlays', label: 'Overlays' },
		{ id: 'data', label: 'Data display' },
		{ id: 'motion', label: 'Motion' },
		{ id: 'contrast', label: 'High contrast' },
	];
}
