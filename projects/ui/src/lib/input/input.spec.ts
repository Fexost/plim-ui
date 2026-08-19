import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Input } from './input';

@Component({
	template: `<input plimInput placeholder="Enter text" />`,
	imports: [Input],
})
class InputHost {}

@Component({
	template: `<input plimInput invalid />`,
	imports: [Input],
})
class InvalidInputHost {}

@Component({
	template: `<input plimInput disabled />`,
	imports: [Input],
})
class DisabledInputHost {}

describe('Input', () => {
	let fixture: ComponentFixture<InputHost>;
	let input: HTMLInputElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [InputHost] }).compileComponents();
		fixture = TestBed.createComponent(InputHost);
		fixture.detectChanges();
		input = fixture.nativeElement.querySelector('input')!;
	});

	it('should create', () => {
		expect(input).toBeTruthy();
	});

	it('should apply plim-input class', () => {
		expect(input.classList.contains('plim-input')).toBe(true);
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidInputHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidInput = invalidFixture.nativeElement.querySelector('input')!;
		expect(invalidInput.classList.contains('plim-input--invalid')).toBe(true);
		expect(invalidInput.getAttribute('aria-invalid')).toBe('true');
	});

	it('should disable the native input', () => {
		const disabledFixture = TestBed.createComponent(DisabledInputHost);
		disabledFixture.detectChanges();
		const disabledInput = disabledFixture.nativeElement.querySelector('input')!;
		expect(disabledInput.disabled).toBe(true);
	});
});
