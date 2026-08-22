import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker } from './datepicker';

@Component({
	template: `<plim-datepicker placeholder="Select date" />`,
	imports: [Datepicker],
})
class DatepickerHost {}

describe('Datepicker', () => {
	let fixture: ComponentFixture<DatepickerHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [DatepickerHost] }).compileComponents();
		fixture = TestBed.createComponent(DatepickerHost);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(fixture.nativeElement.querySelector('plim-datepicker')).toBeTruthy();
	});

	it('should open the calendar panel', () => {
		const trigger = fixture.nativeElement.querySelector(
			'.plim-datepicker__trigger',
		) as HTMLButtonElement;
		trigger.click();
		fixture.detectChanges();

		expect(trigger.getAttribute('aria-expanded')).toBe('true');
		expect(document.getElementById(trigger.getAttribute('aria-controls')!)).toBeTruthy();
	});

	it('should open the month view from the header label', () => {
		const trigger = fixture.nativeElement.querySelector(
			'.plim-datepicker__trigger',
		) as HTMLButtonElement;
		trigger.click();
		fixture.detectChanges();

		const label = document.querySelector('.plim-datepicker__label') as HTMLButtonElement;
		label.click();
		fixture.detectChanges();

		expect(document.querySelector('.plim-datepicker__grid--months')).toBeTruthy();
	});
});
