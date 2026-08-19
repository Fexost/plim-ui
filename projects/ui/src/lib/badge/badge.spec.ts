import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Badge } from './badge';

describe('Badge', () => {
	let fixture: ComponentFixture<Badge>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [Badge] }).compileComponents();
		fixture = TestBed.createComponent(Badge);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply plim-badge class and default variant modifier', () => {
		expect(host.classList.contains('plim-badge')).toBe(true);
		expect(host.classList.contains('plim-badge--default')).toBe(true);
	});

	it('should apply variant modifier classes', () => {
		const variants = ['primary', 'success', 'warning', 'danger'] as const;

		for (const variant of variants) {
			fixture.componentRef.setInput('variant', variant);
			fixture.detectChanges();
			expect(host.classList.contains(`plim-badge--${variant}`)).toBe(true);
		}
	});
});
