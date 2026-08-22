import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=date][plimDatepicker]',
	template: '',
	styleUrl: './datepicker.scss',
	host: {
		class: 'plim-datepicker',
		'[class.plim-datepicker--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Datepicker {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
