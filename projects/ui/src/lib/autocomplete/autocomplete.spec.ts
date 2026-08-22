import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Autocomplete } from './autocomplete';
import { Option } from '../option/option';

@Component({
	template: `
		<plim-autocomplete placeholder="Search fruit" [maxSuggestions]="8">
			<plim-option value="apple">Apple</plim-option>
			<plim-option value="banana">Banana</plim-option>
			<plim-option value="cherry">Cherry</plim-option>
			<plim-option value="grape">Grape</plim-option>
			<plim-option value="kiwi">Kiwi</plim-option>
			<plim-option value="mango">Mango</plim-option>
			<plim-option value="orange">Orange</plim-option>
			<plim-option value="pear">Pear</plim-option>
			<plim-option value="plum">Plum</plim-option>
		</plim-autocomplete>
	`,
	imports: [Autocomplete, Option],
})
class AutocompleteHost {}

function getInput(fixture: ComponentFixture<AutocompleteHost>): HTMLInputElement {
	return fixture.nativeElement.querySelector('.plim-autocomplete__input') as HTMLInputElement;
}

function optionLabels(): string[] {
	return [...document.querySelectorAll('.plim-select__option')].map(
		(option) => option.textContent?.trim() ?? '',
	);
}

async function openPanel(fixture: ComponentFixture<AutocompleteHost>): Promise<HTMLInputElement> {
	const input = getInput(fixture);
	input.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true }));
	input.focus();
	fixture.detectChanges();
	await fixture.whenStable();
	return input;
}

describe('Autocomplete', () => {
	let fixture: ComponentFixture<AutocompleteHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [AutocompleteHost] }).compileComponents();
		fixture = TestBed.createComponent(AutocompleteHost);
		fixture.detectChanges();
	});

	afterEach(() => {
		document.querySelectorAll('.plim-select__panel').forEach((panel) => panel.remove());
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-autocomplete')).toBeTruthy();
	});

	it('should show the top suggestions on focus without typing', async () => {
		const input = await openPanel(fixture);

		expect(input.getAttribute('aria-expanded')).toBe('true');
		expect(optionLabels()).toEqual([
			'Apple',
			'Banana',
			'Cherry',
			'Grape',
			'Kiwi',
			'Mango',
			'Orange',
			'Pear',
		]);
	});

	it('should still show the top suggestions when a value is already selected', async () => {
		const autocomplete = fixture.debugElement.query(By.directive(Autocomplete)).componentInstance;
		autocomplete.writeValue('banana');
		fixture.detectChanges();

		await openPanel(fixture);

		expect(optionLabels().length).toBe(8);
		expect(optionLabels()).toContain('Apple');
		expect(optionLabels()).toContain('Banana');
	});

	it('should filter after the user types', async () => {
		const input = await openPanel(fixture);
		input.value = 'ba';
		input.dispatchEvent(new Event('input', { bubbles: true }));
		fixture.detectChanges();

		expect(optionLabels()).toEqual(['Banana']);
	});
});
