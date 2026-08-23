import { Component, model } from '@angular/core';

@Component({
	selector: 'plim-expansion-panel',
	host: {
		class: 'plim-expansion-panel',
		'[class.plim-expansion-panel--open]': 'open()',
	},
	templateUrl: './expansion-panel.html',
	styleUrl: './expansion-panel.scss',
})
export class ExpansionPanel {
	public readonly open = model(false);

	protected toggle(): void {
		this.open.update((isOpen) => !isOpen);
	}
}
