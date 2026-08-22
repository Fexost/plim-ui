import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeDatepicker } from './native-datepicker';

@Component({
	template: `<input type="date" plimDatepicker />`,
	imports: [NativeDatepicker],
})
class NativeDatepickerHost {}

describe('NativeDatepicker', () => {
	let fixture: ComponentFixture<NativeDatepickerHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [NativeDatepickerHost] }).compileComponents();
		fixture = TestBed.createComponent(NativeDatepickerHost);
		fixture.detectChanges();
	});

	it('should apply plim-native-datepicker class', () => {
		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-native-datepicker')).toBe(true);
	});
});
