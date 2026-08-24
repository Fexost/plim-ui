import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StickyNote } from './sticky-note';

describe('StickyNote', () => {
	let fixture: ComponentFixture<StickyNote>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [StickyNote] }).compileComponents();
		fixture = TestBed.createComponent(StickyNote);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.nativeElement.classList.contains('plim-sticky-note')).toBe(true);
	});
});
