import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timepicker } from './timepicker';

@Component({
	template: `<plim-timepicker placeholder="Select time" />`,
	imports: [Timepicker],
})
class TimepickerHost {}

describe('Timepicker', () => {
	let fixture: ComponentFixture<TimepickerHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [TimepickerHost] }).compileComponents();
		fixture = TestBed.createComponent(TimepickerHost);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-timepicker')).toBeTruthy();
	});

	it('should open the time panel', () => {
		const toggle = fixture.nativeElement.querySelector(
			'.plim-timepicker__toggle',
		) as HTMLButtonElement;
		toggle.click();
		fixture.detectChanges();

		expect(toggle.getAttribute('aria-expanded')).toBe('true');
		expect(document.getElementById(toggle.getAttribute('aria-controls')!)).toBeTruthy();
	});

	it('should select a time from the panel', () => {
		const toggle = fixture.nativeElement.querySelector(
			'.plim-timepicker__toggle',
		) as HTMLButtonElement;
		toggle.click();
		fixture.detectChanges();

		const hourButton = document.querySelector(
			'.plim-timepicker__column:first-child .plim-timepicker__option',
		) as HTMLButtonElement;
		hourButton.click();
		fixture.detectChanges();

		const minuteButton = document.querySelectorAll(
			'.plim-timepicker__column:last-child .plim-timepicker__option',
		)[1] as HTMLButtonElement;
		minuteButton.click();
		fixture.detectChanges();

		const input = fixture.nativeElement.querySelector(
			'.plim-timepicker__input',
		) as HTMLInputElement;
		expect(input.value).toBe('00:01');
	});

	it('should keep typed minutes that are not on the picker step', () => {
		const input = fixture.nativeElement.querySelector(
			'.plim-timepicker__input',
		) as HTMLInputElement;
		input.value = '1422';
		input.dispatchEvent(new Event('input'));
		input.dispatchEvent(new Event('blur'));
		fixture.detectChanges();

		expect(input.value).toBe('14:22');
	});

	it('should format typed input as HH:MM', () => {
		const input = fixture.nativeElement.querySelector(
			'.plim-timepicker__input',
		) as HTMLInputElement;
		input.value = '1430';
		input.dispatchEvent(new Event('input'));
		fixture.detectChanges();

		expect(input.value).toBe('14:30');
	});
});
