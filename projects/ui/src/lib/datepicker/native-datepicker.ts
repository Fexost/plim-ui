import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=date][plimDatepicker]',
	templateUrl: './native-datepicker.html',
	styleUrl: './native-datepicker.scss',
	host: {
		class: 'plim-native-datepicker',
		'[class.plim-native-datepicker--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class NativeDatepicker {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
