import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=checkbox][plimCheckbox]',
	template: '',
	styleUrl: './checkbox.scss',
	host: {
		class: 'plim-checkbox',
		'[class.plim-checkbox--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Checkbox {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
