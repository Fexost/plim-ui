import { Component, inject, input } from '@angular/core';

import { Sort } from './sort';

@Component({
	selector: 'th[plimSortHeader]',
	host: {
		class: 'plim-sort-header',
		'[attr.aria-sort]': 'ariaSort()',
	},
	templateUrl: './sort-header.html',
	styleUrl: './sort-header.scss',
})
export class SortHeader {
	public readonly columnId = input.required<string>({ alias: 'plimSortHeader' });

	private readonly sort = inject(Sort);

	protected isActive(): boolean {
		return this.sort.active() === this.columnId();
	}

	protected direction(): string {
		return this.isActive() ? this.sort.direction() : '';
	}

	protected ariaSort(): 'ascending' | 'descending' | 'none' {
		if (!this.isActive()) {
			return 'none';
		}

		if (this.sort.direction() === 'asc') {
			return 'ascending';
		}

		if (this.sort.direction() === 'desc') {
			return 'descending';
		}

		return 'none';
	}

	protected toggle(): void {
		this.sort.sort(this.columnId());
	}
}
