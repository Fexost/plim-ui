import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Badge, Button, Card, Separator } from 'plim-ui';

import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';

@Component({
	selector: 'app-docs-component-layout',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Badge, Button, Card, Separator],
	templateUrl: './docs-component-layout.html',
	styleUrl: './docs-component-layout.scss',
})
export class DocsComponentLayout {
	public readonly category = input.required<string>();
	public readonly title = input.required<string>();
	/** When set, shows that the component builds on a native HTML element. */
	public readonly nativeElement = input<string>();

	protected readonly jumpSections = [
		{ id: 'preview', label: 'Preview' },
		{ id: 'accessibility', label: 'Accessibility' },
		{ id: 'tokens', label: 'Design tokens' },
		{ id: 'api', label: 'API reference' },
	];
}
