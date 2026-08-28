import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Skeleton } from './skeleton';

describe('Skeleton', () => {
	let fixture: ComponentFixture<Skeleton>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [Skeleton] }).compileComponents();
		fixture = TestBed.createComponent(Skeleton);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host.classList.contains('plim-skeleton')).toBe(true);
		expect(host.getAttribute('aria-hidden')).toBe('true');
	});

	it('should apply circle variant', () => {
		fixture.componentRef.setInput('variant', 'circle');
		fixture.detectChanges();
		expect(host.classList.contains('plim-skeleton--circle')).toBe(true);
	});
});
