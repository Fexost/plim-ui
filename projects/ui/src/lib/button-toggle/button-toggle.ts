import { booleanAttribute, Component, inject, input } from '@angular/core';

import { ButtonToggleGroup } from './button-toggle-group';

@Component({
	selector: 'button[plimButtonToggle]',
	host: {
		class: 'plim-button-toggle',
		type: 'button',
		'[class.plim-button-toggle--selected]': 'selected()',
		'[attr.aria-pressed]': 'selected()',
		'[disabled]': 'disabled()',
		'(click)': 'select()',
	},
	templateUrl: './button-toggle.html',
	styleUrl: './button-toggle.scss',
})
export class ButtonToggle {
	public readonly value = input.required<string>({ alias: 'plimButtonToggle' });
	public readonly disabled = input(false, { transform: booleanAttribute });

	private readonly group = inject(ButtonToggleGroup, { optional: true });

	protected selected(): boolean {
		return this.group?.isSelected(this.value()) ?? false;
	}

	protected select(): void {
		if (this.disabled()) {
			return;
		}

		this.group?.selectToggle(this.value());
	}
}
