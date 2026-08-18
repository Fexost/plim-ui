import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DOCS_NAV } from '../../docs-nav.config';

@Component({
	selector: 'app-docs-nav',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './docs-nav.html',
})
export class DocsNav {
	protected readonly sections = DOCS_NAV;
}
