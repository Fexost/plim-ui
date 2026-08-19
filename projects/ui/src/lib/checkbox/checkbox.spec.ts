import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Checkbox } from './checkbox';

@Component({
	template: `<input type="checkbox" plimCheckbox />`,
	imports: [Checkbox],
})
class CheckboxHost {}

@Component({
	template: `<input type="checkbox" plimCheckbox invalid />`,
	imports: [Checkbox],
})
class InvalidCheckboxHost {}

@Component({
	template: `<input type="checkbox" plimCheckbox disabled />`,
	imports: [Checkbox],
})
class DisabledCheckboxHost {}

describe('Checkbox', () => {
	let fixture: ComponentFixture<CheckboxHost>;
	let checkbox: HTMLInputElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [CheckboxHost] }).compileComponents();
		fixture = TestBed.createComponent(CheckboxHost);
		fixture.detectChanges();
		checkbox = fixture.nativeElement.querySelector('input')!;
	});

	it('should create', () => {
		expect(checkbox).toBeTruthy();
	});

	it('should apply plim-checkbox class', () => {
		expect(checkbox.classList.contains('plim-checkbox')).toBe(true);
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidCheckboxHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidCheckbox = invalidFixture.nativeElement.querySelector('input')!;
		expect(invalidCheckbox.classList.contains('plim-checkbox--invalid')).toBe(true);
		expect(invalidCheckbox.getAttribute('aria-invalid')).toBe('true');
	});

	it('should disable the native checkbox', () => {
		const disabledFixture = TestBed.createComponent(DisabledCheckboxHost);
		disabledFixture.detectChanges();
		const disabledCheckbox = disabledFixture.nativeElement.querySelector('input')!;
		expect(disabledCheckbox.disabled).toBe(true);
	});
});
