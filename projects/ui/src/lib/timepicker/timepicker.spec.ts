import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Timepicker } from './timepicker';

@Component({
	template: `<input type="time" plimTimepicker />`,
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

	it('should apply plim-timepicker class', () => {
		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-timepicker')).toBe(true);
	});
});
