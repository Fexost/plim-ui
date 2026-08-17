import { booleanAttribute, Component, HostBinding, input } from '@angular/core';

export type ButtonVariant = 'primary' | 'secondary';

@Component({
	selector: 'button[plimButton]',
	templateUrl: './button.html',
	styleUrl: './button.scss',
})
export class Button {
	public readonly variant = input<ButtonVariant>('primary');
	public readonly disabled = input(false, { transform: booleanAttribute });

	@HostBinding('class.plim-button')
	protected readonly hasBaseClass = true;

	@HostBinding('class.plim-button--primary')
	protected get isPrimary(): boolean {
		return this.variant() === 'primary';
	}

	@HostBinding('class.plim-button--secondary')
	protected get isSecondary(): boolean {
		return this.variant() === 'secondary';
	}

	@HostBinding('disabled')
	protected get isDisabled(): boolean {
		return this.disabled();
	}
}
