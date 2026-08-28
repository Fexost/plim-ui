import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { CommandPalette, CommandPaletteItem } from 'plim-ui';

import { DocsCommandPaletteService } from '../../services/docs-command-palette.service';
import { searchDocs } from '../../services/docs-search.service';

@Component({
	selector: 'app-docs-command-palette',
	imports: [CommandPalette],
	template: `
		<plim-command-palette
			[open]="palette.open()"
			[items]="items()"
			[query]="query()"
			placeholder="Search pages…"
			ariaLabel="Search documentation"
			emptyMessage="No pages match your search."
			(queryChange)="query.set($event)"
			(selected)="onSelected($event)"
			(closed)="onClosed()"
		/>
	`,
})
export class DocsCommandPalette {
	private readonly router = inject(Router);
	protected readonly palette = inject(DocsCommandPaletteService);
	protected readonly query = signal('');

	protected readonly items = computed<CommandPaletteItem[]>(() =>
		searchDocs(this.query()).map((result) => ({
			id: result.path,
			label: result.label,
			description: result.sectionLabel,
		})),
	);

	protected onSelected(item: CommandPaletteItem): void {
		void this.router.navigateByUrl('/' + item.id).then(() => this.onClosed());
	}

	protected onClosed(): void {
		this.query.set('');
		this.palette.close();
	}
}
