import { booleanAttribute, Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
	selector: 'button[plimButton]',
	templateUrl: './button.html',
	styleUrl: './button.scss',
	host: {
		class: 'plim-button',
		'[class.plim-button--primary]': 'variant() === "primary"',
		'[class.plim-button--secondary]': 'variant() === "secondary"',
		'[disabled]': 'disabled()',
	},
})
export class Button {
	public readonly variant = input<ButtonVariant>('primary');
	public readonly disabled = input(false, { transform: booleanAttribute });
}
