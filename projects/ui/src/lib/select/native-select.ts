import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'select[plimSelect]',
	templateUrl: './native-select.html',
	styleUrl: './native-select.scss',
	host: {
		class: 'plim-native-select',
		'[class.plim-native-select--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class NativeSelect {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
