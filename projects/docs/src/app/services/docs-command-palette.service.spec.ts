import { TestBed } from '@angular/core/testing';

import { DocsCommandPaletteService } from './docs-command-palette.service';

describe('DocsCommandPaletteService', () => {
	let service: DocsCommandPaletteService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DocsCommandPaletteService);
		service.close();
	});

	it('starts closed', () => {
		expect(service.open()).toBe(false);
	});

	it('toggles open state', () => {
		service.toggle();
		expect(service.open()).toBe(true);

		service.toggle();
		expect(service.open()).toBe(false);
	});

	it('closes from open state', () => {
		service.toggle();
		service.close();
		expect(service.open()).toBe(false);
	});
});
