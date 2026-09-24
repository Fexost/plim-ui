import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Badge, Card, Separator } from 'plim-ui';

import { DocsGuideLayout } from '../../../components/docs-guide-layout/docs-guide-layout';
import { DOCS_PATHS } from '../../../docs-nav.config';

@Component({
	selector: 'app-accessibility-docs',
	imports: [Badge, Card, DocsGuideLayout, RouterLink, Separator],
	templateUrl: './accessibility-docs.html',
	styleUrl: './accessibility-docs.scss',
})
export class AccessibilityDocs {
	protected readonly DOCS_PATHS = DOCS_PATHS;
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
