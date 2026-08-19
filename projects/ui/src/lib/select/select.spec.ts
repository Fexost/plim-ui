import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Select } from './select';

@Component({
	template: `<select plimSelect><option>Item 1</option></select>`,
	imports: [Select],
})
class SelectHost {}

@Component({
	template: `<select plimSelect invalid><option>Item 1</option></select>`,
	imports: [Select],
})
class InvalidSelectHost {}

describe('Select', () => {
	let fixture: ComponentFixture<SelectHost>;
	let select: HTMLSelectElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SelectHost] }).compileComponents();
		fixture = TestBed.createComponent(SelectHost);
		fixture.detectChanges();
		select = fixture.nativeElement.querySelector('select');
	});

	it('should create', () => {
		expect(select).toBeTruthy();
	});

	it('should apply plim-select class', () => {
		expect(select.classList.contains('plim-select')).toBe(true);
	});

	it('should preserve option elements and selected value', () => {
		expect(select.options.length).toBe(1);
		expect(select.options[0].text).toBe('Item 1');
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidSelectHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidSelect = invalidFixture.nativeElement.querySelector('select');
		expect(invalidSelect.classList.contains('plim-select--invalid')).toBe(true);
		expect(invalidSelect.getAttribute('aria-invalid')).toBe('true');
	});
});
