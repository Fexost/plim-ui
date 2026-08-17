import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { DOCS_HOME } from '../../docs-nav.config';

export interface DocsComponentSection {
	id: string;
	label: string;
}

@Component({
	selector: 'app-docs-component-layout',
	imports: [RouterLink],
	templateUrl: './docs-component-layout.html',
})
export class DocsComponentLayout {
	public readonly category = input.required<string>();
	public readonly title = input.required<string>();

	protected readonly home = DOCS_HOME;

	protected readonly sections: DocsComponentSection[] = [
		{ id: 'preview', label: 'Preview' },
		{ id: 'accessibility', label: 'Accessibility' },
		{ id: 'api', label: 'API reference' },
	];
}
