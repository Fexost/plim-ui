import { Component, input, output } from '@angular/core';

import { AutocompleteOptionView } from './autocomplete-utils';

@Component({
	selector: 'plim-autocomplete-panel',
	templateUrl: './autocomplete-panel.html',
	styleUrl: './autocomplete-panel.scss',
	host: {
		class: 'plim-autocomplete-panel',
	},
})
export class AutocompletePanel {
	public readonly panelId = input.required<string>();
	public readonly optionIdPrefix = input.required<string>();
	public readonly options = input<AutocompleteOptionView[]>([]);
	public readonly activeIndex = input(0);
	public readonly selectedValue = input<string | null>(null);
	public readonly ariaLabel = input<string | undefined>(undefined);
	public readonly ariaLabelledBy = input<string | undefined>(undefined);

	public readonly optionSelected = output<string>();
	public readonly optionActive = output<number>();
	public readonly panelMouseDown = output<void>();

	protected optionId(index: number): string {
		return `${this.optionIdPrefix()}-option-${index}`;
	}
}
