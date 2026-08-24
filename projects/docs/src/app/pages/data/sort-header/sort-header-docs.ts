import { Component } from '@angular/core';
import { Sort, SortDirection, SortHeader, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SORT_HEADER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

interface DemoRow {
	label: string;
	description: string;
}

@Component({
	selector: 'app-sort-header-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Table, Sort, SortHeader],
	templateUrl: './sort-header-docs.html',
	styleUrl: './sort-header-docs.scss',
})
export class SortHeaderDocs {
	protected readonly tokens = SORT_HEADER_DOCS_TOKENS;
	protected active = '';
	protected direction: SortDirection = '';

	private readonly rows: DemoRow[] = [
		{ label: 'Lorem ipsum', description: 'Dolor sit amet' },
		{ label: 'Consectetur', description: 'Adipiscing elit' },
		{ label: 'Sed eiusmod', description: 'Tempor incididunt' },
	];

	protected sortedRows(): DemoRow[] {
		const key = this.active as keyof DemoRow | '';
		const direction = this.direction;
		const rows = [...this.rows];

		if (!key || !direction) {
			return rows;
		}

		rows.sort((left, right) => {
			const comparison = left[key].localeCompare(right[key]);
			return direction === 'asc' ? comparison : -comparison;
		});

		return rows;
	}
}
