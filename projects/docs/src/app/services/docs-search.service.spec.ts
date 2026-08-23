import { TestBed } from '@angular/core/testing';

import { DocsSearchService } from './docs-search.service';

describe('DocsSearchService', () => {
	let service: DocsSearchService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DocsSearchService);
		service.clear();
	});

	it('returns full nav when query is empty', () => {
		expect(service.filteredNav().length).toBeGreaterThan(0);
	});

	it('filters nav items by label', () => {
		service.query.set('tooltip');
		const labels = service
			.filteredNav()
			.flatMap((section) => section.items.map((item) => item.label));

		expect(labels).toContain('Tooltip');
	});

	it('matches keywords and aliases', () => {
		service.query.set('divider');
		const labels = service
			.filteredNav()
			.flatMap((section) => section.items.map((item) => item.label));

		expect(labels).toContain('Divider');
	});

	it('reports empty results', () => {
		service.query.set('zzzz-not-found');
		expect(service.hasResults()).toBe(false);
	});
});
