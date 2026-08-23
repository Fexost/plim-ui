import { Component, inject } from '@angular/core';
import { Input } from 'plim-ui';

import { DocsSearchService } from '../../services/docs-search.service';

@Component({
	selector: 'app-docs-search',
	imports: [Input],
	templateUrl: './docs-search.html',
	styleUrl: './docs-search.scss',
})
export class DocsSearch {
	protected readonly search = inject(DocsSearchService);

	protected onInput(event: Event): void {
		this.search.query.set((event.target as HTMLInputElement).value);
	}

	protected clear(): void {
		this.search.clear();
	}
}
