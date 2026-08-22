import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeSelect } from './native-select';

@Component({
	template: `<select plimSelect><option value="1">One</option></select>`,
	imports: [NativeSelect],
})
class NativeSelectHost {}

@Component({
	template: `<select plimSelect invalid><option value="1">One</option></select>`,
	imports: [NativeSelect],
})
class InvalidNativeSelectHost {}

@Component({
	template: `<select plimSelect required>
		<option value="" disabled selected>Choose an option</option>
		<option value="1">One</option>
	</select>`,
	imports: [NativeSelect],
})
class PlaceholderNativeSelectHost {}

describe('NativeSelect', () => {
	let fixture: ComponentFixture<NativeSelectHost>;
	let select: HTMLSelectElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [NativeSelectHost] }).compileComponents();
		fixture = TestBed.createComponent(NativeSelectHost);
		fixture.detectChanges();
		select = fixture.nativeElement.querySelector('select')!;
	});

	it('should create', () => {
		expect(select).toBeTruthy();
	});

	it('should preserve native option children', () => {
		expect(select.options.length).toBe(1);
		expect(select.options[0].text).toBe('One');
	});

	it('should apply invalid styling and aria-invalid', () => {
		const invalidFixture = TestBed.createComponent(InvalidNativeSelectHost);
		invalidFixture.detectChanges();
		const invalidSelect = invalidFixture.nativeElement.querySelector('select')!;
		expect(invalidSelect.classList.contains('plim-native-select--invalid')).toBe(true);
		expect(invalidSelect.getAttribute('aria-invalid')).toBe('true');
	});

	it('should show placeholder option text when selected', () => {
		const placeholderFixture = TestBed.createComponent(PlaceholderNativeSelectHost);
		placeholderFixture.detectChanges();
		const placeholderSelect = placeholderFixture.nativeElement.querySelector('select')!;
		expect(placeholderSelect.value).toBe('');
		expect(placeholderSelect.options[0].text).toBe('Choose an option');
		expect(placeholderSelect.options[0].hidden).toBe(false);
	});
});
