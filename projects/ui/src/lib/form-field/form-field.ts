import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-form-field',
	templateUrl: './form-field.html',
	styleUrl: './form-field.scss',
	host: {
		class: 'plim-form-field',
		'[class.plim-form-field--invalid]': 'invalid()',
	},
})
export class FormField {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
