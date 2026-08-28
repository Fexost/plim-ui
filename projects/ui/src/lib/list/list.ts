import { Component, input } from '@angular/core';

export type ListDensity = 'comfortable' | 'compact';

@Component({
	selector: 'plim-list',
	host: {
		class: 'plim-list',
		role: 'list',
		'[class.plim-list--compact]': 'density() === "compact"',
	},
	templateUrl: './list.html',
	styleUrl: './list.scss',
})
export class List {
	public readonly density = input<ListDensity>('comfortable');
}
