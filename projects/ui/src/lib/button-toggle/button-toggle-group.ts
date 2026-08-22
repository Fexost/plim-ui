import { booleanAttribute, Component, input, model } from '@angular/core';

@Component({
	selector: 'plim-button-toggle-group',
	host: {
		class: 'plim-button-toggle-group',
		role: 'group',
		'[class.plim-button-toggle-group--multiple]': 'multiple()',
	},
	templateUrl: './button-toggle-group.html',
	styleUrl: './button-toggle-group.scss',
})
export class ButtonToggleGroup {
	public readonly multiple = input(false, { transform: booleanAttribute });
	public readonly value = model<string>('');
	public readonly values = model<string[]>([]);

	public isSelected(toggleValue: string): boolean {
		if (this.multiple()) {
			return this.values().includes(toggleValue);
		}

		return this.value() === toggleValue;
	}

	public selectToggle(toggleValue: string): void {
		if (this.multiple()) {
			const current = this.values();

			if (current.includes(toggleValue)) {
				this.values.set(current.filter((item) => item !== toggleValue));
				return;
			}

			this.values.set([...current, toggleValue]);
			return;
		}

		this.value.set(toggleValue);
	}
}
