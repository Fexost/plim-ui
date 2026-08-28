import { booleanAttribute, Component, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary' | 'text';

@Component({
	selector: 'button[plimButton]',
	templateUrl: './button.html',
	styleUrl: './button.scss',
	host: {
		class: 'plim-button',
		'[class.plim-button--primary]': 'variant() === "primary"',
		'[class.plim-button--secondary]': 'variant() === "secondary"',
		'[class.plim-button--text]': 'variant() === "text"',
		'[class.plim-button--loading]': 'loading()',
		'[attr.aria-busy]': 'loading() ? true : null',
		'[disabled]': 'disabled() || loading()',
	},
})
export class Button {
	public readonly variant = input<ButtonVariant>('primary');
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly loading = input(false, { transform: booleanAttribute });
}
