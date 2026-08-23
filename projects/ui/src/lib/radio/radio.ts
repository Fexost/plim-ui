import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'input[type=radio][plimRadio]',
	templateUrl: './radio.html',
	styleUrl: './radio.scss',
	host: {
		class: 'plim-radio',
		'[class.plim-radio--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Radio {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
