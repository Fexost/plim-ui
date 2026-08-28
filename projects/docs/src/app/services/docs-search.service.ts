import { DOCS_NAV, DocsNavItem, DocsNavSection } from '../docs-nav.config';

export interface DocsSearchResult {
	label: string;
	path: string;
	sectionLabel: string;
}

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

function collectResults(sections: DocsNavSection[]): DocsSearchResult[] {
	return sections.flatMap((section) =>
		section.items
			.filter((item): item is DocsNavItem & { path: string } => Boolean(item.path))
			.map((item) => ({
				label: item.label,
				path: item.path,
				sectionLabel: section.label,
			})),
	);
}

export function searchDocs(query: string): DocsSearchResult[] {
	const normalizedQuery = query.trim().toLowerCase();

	if (!normalizedQuery) {
		return collectResults(DOCS_NAV);
	}

	return collectResults(filterNavSections(DOCS_NAV, normalizedQuery));
}
