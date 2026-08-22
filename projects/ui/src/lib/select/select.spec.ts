import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Option } from '../option/option';
import { Select } from './select';

@Component({
	template: `
		<plim-select ariaLabel="Choose an item">
			<plim-option value="1">Item 1</plim-option>
			<plim-option value="2" selected>Item 2</plim-option>
			<plim-option value="3">Item 3</plim-option>
		</plim-select>
	`,
	imports: [Select, Option],
})
class SelectHost {}

@Component({
	template: `
		<plim-select invalid>
			<plim-option value="1">Item 1</plim-option>
		</plim-select>
	`,
	imports: [Select, Option],
})
class InvalidSelectHost {}

@Component({
	template: `
		<plim-select disabled>
			<plim-option value="1">Item 1</plim-option>
		</plim-select>
	`,
	imports: [Select, Option],
})
class DisabledSelectHost {}

describe('Select', () => {
	let fixture: ComponentFixture<SelectHost>;
	let trigger: HTMLButtonElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [SelectHost] }).compileComponents();
		fixture = TestBed.createComponent(SelectHost);
		fixture.detectChanges();
		trigger = fixture.nativeElement.querySelector('.plim-select__trigger')!;
	});

	it('should create', () => {
		expect(trigger).toBeTruthy();
	});

	it('should show the initially selected option label', () => {
		expect(trigger.textContent?.trim()).toBe('Item 2');
	});

	it('should expose combobox semantics on the trigger', () => {
		expect(trigger.getAttribute('role')).toBe('combobox');
		expect(trigger.getAttribute('aria-haspopup')).toBe('listbox');
		expect(trigger.getAttribute('aria-autocomplete')).toBe('list');
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(trigger.getAttribute('aria-label')).toBe('Choose an item');
		expect(trigger.getAttribute('aria-controls')).toBeNull();
	});

	it('should open the listbox panel on trigger click', () => {
		trigger.click();
		fixture.detectChanges();

		const panel = document.querySelector('.plim-select__panel');
		expect(panel).toBeTruthy();
		expect(trigger.getAttribute('aria-expanded')).toBe('true');
		expect(trigger.getAttribute('aria-controls')).toBeTruthy();
	});

	it('should select an option from the panel', () => {
		trigger.click();
		fixture.detectChanges();

		const options = document.querySelectorAll('.plim-select__option');
		(options[2] as HTMLElement).click();
		fixture.detectChanges();

		expect(trigger.textContent?.trim()).toBe('Item 3');
		expect(trigger.getAttribute('aria-expanded')).toBe('false');
	});

	it('should navigate options with arrow keys while open', () => {
		trigger.focus();
		trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
		fixture.detectChanges();

		trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
		fixture.detectChanges();

		expect(trigger.getAttribute('aria-activedescendant')).toMatch(/-option-2$/);
	});

	it('should close on Escape and keep focus on the trigger', () => {
		trigger.focus();
		trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
		fixture.detectChanges();

		trigger.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));
		fixture.detectChanges();

		expect(trigger.getAttribute('aria-expanded')).toBe('false');
		expect(document.activeElement).toBe(trigger);
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidSelectHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidTrigger = invalidFixture.nativeElement.querySelector('.plim-select__trigger')!;
		expect(invalidTrigger.classList.contains('plim-select--invalid')).toBe(false);
		expect(invalidFixture.nativeElement.querySelector('.plim-select--invalid')).toBeTruthy();
		expect(invalidTrigger.getAttribute('aria-invalid')).toBe('true');
	});

	it('should not open when disabled', () => {
		const disabledFixture = TestBed.createComponent(DisabledSelectHost);
		disabledFixture.detectChanges();
		const disabledTrigger = disabledFixture.nativeElement.querySelector(
			'.plim-select__trigger',
		)! as HTMLButtonElement;

		disabledTrigger.click();
		disabledFixture.detectChanges();

		expect(document.querySelector('.plim-select__panel')).toBeNull();
		expect(disabledTrigger.disabled).toBe(true);
	});
});
