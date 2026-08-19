import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'select[plimSelect]',
	template: '',
	styleUrl: './select.scss',
	host: {
		class: 'plim-select',
		'[class.plim-select--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Select {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
