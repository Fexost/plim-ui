import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { Slider } from './slider';

@Component({
	template: `<input type="range" plimSlider min="0" max="100" value="40" />`,
	imports: [Slider],
})
class SliderHost {}

@Component({
	template: `<input type="range" plimSlider invalid min="0" max="100" />`,
	imports: [Slider],
})
class InvalidSliderHost {}

describe('Slider', () => {
	it('should apply plim-slider class', () => {
		TestBed.configureTestingModule({ imports: [SliderHost] });
		const fixture = TestBed.createComponent(SliderHost);
		fixture.detectChanges();

		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-slider')).toBe(true);
	});

	it('should expose invalid state', () => {
		TestBed.configureTestingModule({ imports: [InvalidSliderHost] });
		const fixture = TestBed.createComponent(InvalidSliderHost);
		fixture.detectChanges();

		const input = fixture.nativeElement.querySelector('input');
		expect(input.classList.contains('plim-slider--invalid')).toBe(true);
		expect(input.getAttribute('aria-invalid')).toBe('true');
	});
});
