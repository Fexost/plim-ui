import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=time][plimTimepicker]',
	template: '',
	styleUrl: './timepicker.scss',
	host: {
		class: 'plim-timepicker',
		'[class.plim-timepicker--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Timepicker {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
