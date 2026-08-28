import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-list-item',
	host: {
		class: 'plim-list-item',
		role: 'listitem',
		'[class.plim-list-item--disabled]': 'disabled()',
		'[class.plim-list-item--interactive]': 'interactive()',
		'[class.plim-list-item--selected]': 'selected()',
		'[attr.aria-disabled]': 'disabled() ? true : null',
		'[attr.aria-selected]': 'selected() ? true : null',
	},
	templateUrl: './list-item.html',
	styleUrl: './list-item.scss',
})
export class ListItem {
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly interactive = input(false, { transform: booleanAttribute });
	public readonly selected = input(false, { transform: booleanAttribute });
}
