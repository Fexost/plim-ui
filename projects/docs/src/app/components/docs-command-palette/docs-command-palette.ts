import {
	Component,
	computed,
	effect,
	ElementRef,
	inject,
	viewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Input } from 'plim-ui';

import { DocsCommandPaletteService } from '../../services/docs-command-palette.service';
import { DocsSearchResult, searchDocs } from '../../services/docs-search.service';

@Component({
	selector: 'app-docs-command-palette',
	imports: [Input],
	templateUrl: './docs-command-palette.html',
	styleUrl: './docs-command-palette.scss',
})
export class DocsCommandPalette {
	private readonly router = inject(Router);
	protected readonly palette = inject(DocsCommandPaletteService);
	private readonly inputRef = viewChild<ElementRef<HTMLInputElement>>('paletteInput');

	protected activeIndex = 0;

	protected readonly results = computed(() => searchDocs(this.palette.query()));

	constructor() {
		effect(() => {
			if (!this.palette.open()) {
				return;
			}

			queueMicrotask(() => this.inputRef()?.nativeElement.focus());
		});
	}

	protected onInput(event: Event): void {
		this.palette.query.set((event.target as HTMLInputElement).value);
		this.activeIndex = 0;
	}

	protected onBackdropClick(): void {
		this.palette.close();
	}

	protected onKeydown(event: KeyboardEvent): void {
		const results = this.results();

		if (event.key === 'Escape') {
			event.preventDefault();
			this.palette.close();
			return;
		}

		if (event.key === 'ArrowDown') {
			if (results.length === 0) {
				return;
			}

			event.preventDefault();
			this.activeIndex = (this.activeIndex + 1) % results.length;
			return;
		}

		if (event.key === 'ArrowUp') {
			if (results.length === 0) {
				return;
			}

			event.preventDefault();
			this.activeIndex = this.activeIndex <= 0 ? results.length - 1 : this.activeIndex - 1;
			return;
		}

		if (event.key === 'Enter') {
			const result = results[this.activeIndex];

			if (result) {
				event.preventDefault();
				this.navigateToResult(result);
			}
		}
	}

	protected isResultActive(index: number): boolean {
		return this.activeIndex === index;
	}

	protected navigateToResult(result: DocsSearchResult): void {
		void this.router.navigateByUrl('/' + result.path).then(() => this.palette.close());
	}

	protected get isOpen(): boolean {
		return this.palette.open();
	}
}
