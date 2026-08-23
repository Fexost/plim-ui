import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-list-item',
	host: {
		class: 'plim-list-item',
		role: 'listitem',
		'[class.plim-list-item--disabled]': 'disabled()',
		'[attr.aria-disabled]': 'disabled() ? true : null',
	},
	templateUrl: './list-item.html',
	styleUrl: './list-item.scss',
})
export class ListItem {
	public readonly disabled = input(false, { transform: booleanAttribute });
}
