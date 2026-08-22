import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button, Separator } from 'plim-ui';

import { DocsHighlightCodeDirective } from '../../directives/docs-code-highlight';

@Component({
	selector: 'app-docs-component-layout',
	hostDirectives: [DocsHighlightCodeDirective],
	imports: [RouterLink, Button, Separator],
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
