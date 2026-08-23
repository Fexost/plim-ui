import { computed, Injectable, signal } from '@angular/core';

import { DOCS_NAV, DocsNavItem, DocsNavSection } from '../docs-nav.config';

function matchesItem(item: DocsNavItem, query: string, sectionLabel: string): boolean {
	if (!item.path) {
		return false;
	}

	const haystack = [item.label, item.path, sectionLabel, ...(item.keywords ?? [])]
		.join(' ')
		.toLowerCase();

	return haystack.includes(query);
}

function filterNavSections(sections: DocsNavSection[], query: string): DocsNavSection[] {
	return sections
		.map((section) => ({
			...section,
			items: section.items.filter((item) => matchesItem(item, query, section.label)),
		}))
		.filter((section) => section.items.length > 0);
}

@Injectable({ providedIn: 'root' })
export class DocsSearchService {
	public readonly query = signal('');

	public readonly filteredNav = computed(() => {
		const normalizedQuery = this.query().trim().toLowerCase();

		if (!normalizedQuery) {
			return DOCS_NAV;
		}

		return filterNavSections(DOCS_NAV, normalizedQuery);
	});

	public readonly hasQuery = computed(() => this.query().trim().length > 0);

	public readonly hasResults = computed(() => this.filteredNav().length > 0);

	public clear(): void {
		this.query.set('');
	}
}
