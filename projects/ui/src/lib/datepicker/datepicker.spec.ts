import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker } from './datepicker';

@Component({
	template: `<input type="date" plimDatepicker />`,
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

	it('should apply plim-datepicker class', () => {
		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-datepicker')).toBe(true);
	});
});
