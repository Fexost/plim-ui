import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeTimepicker } from './native-timepicker';

@Component({
	template: `<input type="time" plimTimepicker />`,
	imports: [NativeTimepicker],
})
class NativeTimepickerHost {}

describe('NativeTimepicker', () => {
	let fixture: ComponentFixture<NativeTimepickerHost>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({ imports: [NativeTimepickerHost] }).compileComponents();
		fixture = TestBed.createComponent(NativeTimepickerHost);
		fixture.detectChanges();
	});

	it('should apply plim-native-timepicker class', () => {
		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-native-timepicker')).toBe(true);
	});
});
