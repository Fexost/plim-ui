import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { DOCS_NAV } from '../../docs-nav.config';
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

	private readonly expandedSections = signal<Record<string, boolean>>(
		Object.fromEntries(DOCS_NAV.map((section) => [section.label, true])),
	);

	protected readonly forceExpanded = computed(() => this.search.hasQuery());

	protected isSectionExpanded(sectionLabel: string): boolean {
		if (this.forceExpanded()) {
			return true;
		}

		return this.expandedSections()[sectionLabel] ?? true;
	}

	protected toggleSection(sectionLabel: string): void {
		if (this.forceExpanded()) {
			return;
		}

		this.expandedSections.update((state) => ({
			...state,
			[sectionLabel]: !(state[sectionLabel] ?? true),
		}));
	}
}
