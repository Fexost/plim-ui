import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=range][plimSlider]',
	templateUrl: './slider.html',
	styleUrl: './slider.scss',
	host: {
		class: 'plim-slider',
		'[class.plim-slider--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Slider {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
