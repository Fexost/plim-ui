import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'textarea[plimTextarea]',
	templateUrl: './textarea.html',
	styleUrl: './textarea.scss',
	host: {
		class: 'plim-textarea',
		'[class.plim-textarea--invalid]': 'invalid()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Textarea {
	public readonly invalid = input(false, { transform: booleanAttribute });
}
