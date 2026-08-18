import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Separator } from 'plim-ui';

import { DocsHighlightCodeDirective } from '../../directives/docs-code-highlight';

@Component({
	selector: 'app-docs-component-layout',
	hostDirectives: [DocsHighlightCodeDirective],
	imports: [RouterLink, Separator],
	templateUrl: './docs-component-layout.html',
})
export class DocsComponentLayout {
	public readonly category = input.required<string>();
	public readonly title = input.required<string>();

	protected readonly jumpSections = [
		{ id: 'preview', label: 'Preview' },
		{ id: 'accessibility', label: 'Accessibility' },
		{ id: 'api', label: 'API reference' },
	];
}
