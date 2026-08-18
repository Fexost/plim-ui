import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Separator } from 'plim-ui';

import { DocsHighlightCodeDirective } from '../../directives/docs-code-highlight';

@Component({
	selector: 'app-docs-guide-layout',
	hostDirectives: [DocsHighlightCodeDirective],
	imports: [RouterLink, Separator],
	templateUrl: './docs-guide-layout.html',
})
export class DocsGuideLayout {
	public readonly section = input.required<string>();
	public readonly title = input.required<string>();
	public readonly parentPath = input<string>();
}
