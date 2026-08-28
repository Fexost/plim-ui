import { searchDocs } from './docs-search.service';

describe('searchDocs', () => {
	it('returns all pages when query is empty', () => {
		expect(searchDocs('').length).toBeGreaterThan(10);
	});

	it('trims whitespace before matching', () => {
		const trimmed = searchDocs(' button ');
		const direct = searchDocs('button');

		expect(trimmed).toEqual(direct);
	});

	it('filters by label', () => {
		const results = searchDocs('tooltip');

		expect(results.some((result) => result.label === 'Tooltip')).toBe(true);
	});

	it('matches keyword aliases', () => {
		const results = searchDocs('divider');

		expect(results.some((result) => result.label === 'Divider')).toBe(true);
	});

	it('returns empty results for unknown queries', () => {
		expect(searchDocs('zzzz-not-found')).toEqual([]);
	});
});
