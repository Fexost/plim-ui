import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch } from './switch';

@Component({
	template: `<input type="checkbox" plimSwitch />`,
	imports: [Switch],
})
class SwitchHost {}

@Component({
	template: `<input type="checkbox" plimSwitch checked />`,
	imports: [Switch],
})
class CheckedSwitchHost {}

@Component({
	template: `<input type="checkbox" plimSwitch invalid />`,
	imports: [Switch],
})
class InvalidSwitchHost {}

@Component({
	template: `<input type="checkbox" plimSwitch disabled />`,
	imports: [Switch],
})
class DisabledSwitchHost {}

describe('Switch', () => {
	let fixture: ComponentFixture<SwitchHost>;
	let switchInput: HTMLInputElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SwitchHost] }).compileComponents();
		fixture = TestBed.createComponent(SwitchHost);
		fixture.detectChanges();
		switchInput = fixture.nativeElement.querySelector('input')!;
	});

	it('should create', () => {
		expect(switchInput).toBeTruthy();
	});

	it('should apply plim-switch class and switch role', () => {
		expect(switchInput.classList.contains('plim-switch')).toBe(true);
		expect(switchInput.getAttribute('role')).toBe('switch');
	});

	it('should sync aria-checked with the native checked state', async () => {
		expect(switchInput.getAttribute('aria-checked')).toBe('false');

		const checkedFixture = TestBed.createComponent(CheckedSwitchHost);
		checkedFixture.detectChanges();
		await checkedFixture.whenStable();

		const checkedInput = checkedFixture.nativeElement.querySelector('input')!;
		expect(checkedInput.getAttribute('aria-checked')).toBe('true');
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidSwitchHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidInput = invalidFixture.nativeElement.querySelector('input')!;
		expect(invalidInput.classList.contains('plim-switch--invalid')).toBe(true);
		expect(invalidInput.getAttribute('aria-invalid')).toBe('true');
	});

	it('should disable the native switch', () => {
		const disabledFixture = TestBed.createComponent(DisabledSwitchHost);
		disabledFixture.detectChanges();
		const disabledInput = disabledFixture.nativeElement.querySelector('input')!;
		expect(disabledInput.disabled).toBe(true);
	});
});
