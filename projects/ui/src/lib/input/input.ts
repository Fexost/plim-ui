import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[plimInput]',
	template: '',
	styleUrl: './input.scss',
	host: {
		class: 'plim-input',
		'[class.plim-input--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Input {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
