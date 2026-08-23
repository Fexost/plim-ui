import { booleanAttribute, Component, input, signal } from '@angular/core';

@Component({
	selector: 'plim-tab',
	templateUrl: './tab.html',
	styleUrl: './tab.scss',
	host: {
		class: 'plim-tab',
		role: 'tabpanel',
		'[id]': 'panelId',
		'[hidden]': '!isSelected()',
		'[attr.aria-labelledby]': 'tabId',
	},
})
export class Tab {
	private static nextId = 0;

	private readonly uid = Tab.nextId++;
	public readonly tabId = `plim-tab-${this.uid}`;
	public readonly panelId = `plim-tab-panel-${this.uid}`;

	public readonly label = input.required<string>();
	public readonly disabled = input(false, { transform: booleanAttribute });

	private readonly selectedState = signal(false);

	public setSelected(selected: boolean): void {
		this.selectedState.set(selected);
	}

	protected isSelected(): boolean {
		return this.selectedState();
	}
}
