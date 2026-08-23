import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DocsSearchService } from '../../services/docs-search.service';

@Component({
	selector: 'app-docs-nav',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './docs-nav.html',
	styleUrl: './docs-nav.scss',
})
export class DocsNav {
	protected readonly search = inject(DocsSearchService);
	protected readonly sections = this.search.filteredNav;
}
