import { booleanAttribute, Component, inject, input } from '@angular/core';

import { Menu } from './menu';

@Component({
	selector: 'button[plimMenuItem]',
	templateUrl: './menu-item.html',
	styleUrl: './menu-item.scss',
	host: {
		class: 'plim-menu-item',
		type: 'button',
		role: 'menuitem',
		'[disabled]': 'disabled()',
		'(click)': 'onClick()',
	},
})
export class MenuItem {
	public readonly disabled = input(false, { transform: booleanAttribute });

	private readonly menu = inject(Menu, { optional: true });

	protected onClick(): void {
		if (this.disabled()) {
			return;
		}

		this.menu?.close();
	}
}
