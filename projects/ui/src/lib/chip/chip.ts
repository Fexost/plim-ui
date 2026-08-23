import { booleanAttribute, Component, input, output } from '@angular/core';

@Component({
	selector: 'plim-chip',
	host: {
		class: 'plim-chip',
		'[class.plim-chip--disabled]': 'disabled()',
		'[class.plim-chip--removable]': 'removable()',
		'[attr.aria-disabled]': 'disabled() ? true : null',
	},
	templateUrl: './chip.html',
	styleUrl: './chip.scss',
})
export class Chip {
	public readonly removable = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly removed = output<void>();

	protected remove(event: Event): void {
		event.stopPropagation();

		if (this.disabled()) {
			return;
		}

		this.removed.emit();
	}
}
