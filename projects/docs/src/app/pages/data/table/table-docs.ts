import { Component, signal } from '@angular/core';
import { Button, Skeleton, Spinner, Table, TableDensity } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TABLE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-table-docs',
	imports: [
		DocsA11yCallout,
		DocsComponentLayout,
		DocsTokenTable,
		Button,
		Skeleton,
		Spinner,
		Table,
	],
	templateUrl: './table-docs.html',
	styleUrl: './table-docs.scss',
})
export class TableDocs {
	protected readonly tokens = TABLE_DOCS_TOKENS;
	protected readonly density = signal<TableDensity>('comfortable');
	protected readonly loading = signal(false);

	protected toggleDensity(): void {
		this.density.update((value) => (value === 'comfortable' ? 'compact' : 'comfortable'));
	}

	protected toggleLoading(): void {
		this.loading.update((value) => !value);
	}
}
