import { Component, computed, input, numberAttribute, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Option } from '../option/option';
import { Select } from '../select/select';

export interface PageEvent {
	pageIndex: number;
	pageSize: number;
	length: number;
}

export type PaginatorPageSizeControl = 'native' | 'plim';

const DEFAULT_PAGE_SIZE_OPTIONS = [5, 10, 25];

@Component({
	selector: 'plim-paginator',
	imports: [FormsModule, Option, Select],
	templateUrl: './paginator.html',
	styleUrl: './paginator.scss',
	host: {
		class: 'plim-paginator',
		role: 'navigation',
		'[attr.aria-label]': 'ariaLabel()',
	},
})
export class Paginator {
	public readonly length = input(0, { transform: numberAttribute });
	public readonly pageSize = input(10, { transform: numberAttribute });
	public readonly pageIndex = input(0, { transform: numberAttribute });
	public readonly pageSizeOptions = input<number[]>(DEFAULT_PAGE_SIZE_OPTIONS);
	public readonly pageSizeControl = input<PaginatorPageSizeControl>('native');
	public readonly ariaLabel = input('Pagination');
	public readonly page = output<PageEvent>();

	protected readonly pageSizeModel = computed(() => this.pageSize().toString());

	protected readonly rangeLabel = computed(() => {
		const length = this.length();
		const size = this.pageSize();
		const index = this.pageIndex();

		if (length === 0 || size <= 0) {
			return `0–0 of ${length}`;
		}

		const start = index * size + 1;
		const end = Math.min((index + 1) * size, length);
		return `${start}–${end} of ${length}`;
	});

	protected readonly hasPrevious = computed(() => this.pageIndex() > 0);

	protected readonly hasNext = computed(() => this.pageIndex() < this.lastPageIndex());

	protected previous(): void {
		if (!this.hasPrevious()) {
			return;
		}

		this.emitPage(this.pageIndex() - 1, this.pageSize());
	}

	protected next(): void {
		if (!this.hasNext()) {
			return;
		}

		this.emitPage(this.pageIndex() + 1, this.pageSize());
	}

	protected onPageSizeChange(event: Event): void {
		const nextSize = Number((event.target as HTMLSelectElement).value);
		this.applyPageSize(nextSize);
	}

	protected onPlimPageSizeChange(value: string | null): void {
		this.applyPageSize(Number(value));
	}

	private applyPageSize(nextSize: number): void {
		if (!Number.isFinite(nextSize) || nextSize <= 0) {
			return;
		}

		const start = this.pageIndex() * this.pageSize();
		this.emitPage(Math.floor(start / nextSize), nextSize);
	}

	private lastPageIndex(): number {
		const size = this.pageSize();
		if (size <= 0) {
			return 0;
		}

		return Math.max(0, Math.ceil(this.length() / size) - 1);
	}

	private emitPage(pageIndex: number, pageSize: number): void {
		this.page.emit({
			pageIndex,
			pageSize,
			length: this.length(),
		});
	}
}
