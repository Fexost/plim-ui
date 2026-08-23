import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Separator } from 'plim-ui';

import { DOCS_PAGE_HOST_DIRECTIVES } from '../../directives/docs-page-host-directives';

@Component({
	selector: 'app-docs-guide-layout',
	hostDirectives: DOCS_PAGE_HOST_DIRECTIVES,
	imports: [RouterLink, Separator],
	templateUrl: './docs-guide-layout.html',
})
export class DocsGuideLayout {
	public readonly section = input.required<string>();
	public readonly title = input.required<string>();
	public readonly parentPath = input<string>();
}
