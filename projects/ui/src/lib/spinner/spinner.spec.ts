import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Spinner } from './spinner';

@Component({
	template: `<plim-spinner aria-label="Saving" />`,
	imports: [Spinner],
})
class CustomLabelSpinnerHost {}

describe('Spinner', () => {
	let fixture: ComponentFixture<Spinner>;
	let host: HTMLElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [Spinner] }).compileComponents();
		fixture = TestBed.createComponent(Spinner);
		fixture.detectChanges();
		host = fixture.nativeElement;
	});

	it('should create', () => {
		expect(host).toBeTruthy();
	});

	it('should apply plim-spinner class and default size modifier', () => {
		expect(host.classList.contains('plim-spinner')).toBe(true);
		expect(host.classList.contains('plim-spinner--md')).toBe(true);
	});

	it('should expose status semantics with a default label', () => {
		expect(host.getAttribute('role')).toBe('status');
		expect(host.getAttribute('aria-label')).toBe('Loading');
	});

	it('should apply size modifier classes', () => {
		fixture.componentRef.setInput('size', 'sm');
		fixture.detectChanges();
		expect(host.classList.contains('plim-spinner--sm')).toBe(true);

		fixture.componentRef.setInput('size', 'lg');
		fixture.detectChanges();
		expect(host.classList.contains('plim-spinner--lg')).toBe(true);
	});

	it('should accept a custom aria-label', () => {
		const customFixture = TestBed.createComponent(CustomLabelSpinnerHost);
		customFixture.detectChanges();
		const customHost = customFixture.nativeElement.querySelector('plim-spinner')!;
		expect(customHost.getAttribute('aria-label')).toBe('Saving');
	});

	it('should render the visual indicator', () => {
		expect(host.querySelector('.plim-spinner__indicator')).toBeTruthy();
	});
});
