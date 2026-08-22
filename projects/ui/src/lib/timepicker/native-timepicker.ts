import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=time][plimTimepicker]',
	templateUrl: './native-timepicker.html',
	styleUrl: './native-timepicker.scss',
	host: {
		class: 'plim-native-timepicker',
		'[class.plim-native-timepicker--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class NativeTimepicker {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
