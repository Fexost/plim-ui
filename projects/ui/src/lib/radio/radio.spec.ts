import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Radio } from './radio';

@Component({
	template: `<input type="radio" plimRadio name="group" />`,
	imports: [Radio],
})
class RadioHost {}

@Component({
	template: `<input type="radio" plimRadio invalid name="group" />`,
	imports: [Radio],
})
class InvalidRadioHost {}

describe('Radio', () => {
	let fixture: ComponentFixture<RadioHost>;
	let radio: HTMLInputElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [RadioHost] }).compileComponents();
		fixture = TestBed.createComponent(RadioHost);
		fixture.detectChanges();
		radio = fixture.nativeElement.querySelector('input');
	});

	it('should create', () => {
		expect(radio).toBeTruthy();
	});

	it('should apply plim-radio class', () => {
		expect(radio.classList.contains('plim-radio')).toBe(true);
	});

	it('should apply invalid styling and aria-invalid', async () => {
		const invalidFixture = TestBed.createComponent(InvalidRadioHost);
		invalidFixture.detectChanges();
		await invalidFixture.whenStable();
		const invalidRadio = invalidFixture.nativeElement.querySelector('input');
		expect(invalidRadio.classList.contains('plim-radio--invalid')).toBe(true);
		expect(invalidRadio.getAttribute('aria-invalid')).toBe('true');
	});
});
