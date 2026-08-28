import { Component, signal } from '@angular/core';
import { Button, List, ListDensity, ListItem, Skeleton, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { LIST_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-list-docs',
	imports: [
		DocsA11yCallout,
		DocsComponentLayout,
		DocsTokenTable,
		Button,
		List,
		ListItem,
		Skeleton,
		Table,
	],
	templateUrl: './list-docs.html',
	styleUrl: './list-docs.scss',
})
export class ListDocs {
	protected readonly tokens = LIST_DOCS_TOKENS;
	protected readonly density = signal<ListDensity>('comfortable');
	protected readonly loading = signal(false);
	protected readonly empty = signal(false);

	protected toggleDensity(): void {
		this.density.update((value) => (value === 'comfortable' ? 'compact' : 'comfortable'));
	}

	protected showLoading(): void {
		this.empty.set(false);
		this.loading.set(true);
	}

	protected showEmpty(): void {
		this.loading.set(false);
		this.empty.set(true);
	}

	protected showItems(): void {
		this.loading.set(false);
		this.empty.set(false);
	}
}
