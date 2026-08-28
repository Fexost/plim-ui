import { Component, input } from '@angular/core';

export type TableDensity = 'comfortable' | 'compact';

@Component({
	selector: 'table[plimTable]',
	host: {
		class: 'plim-table',
		'[class.plim-table--compact]': 'density() === "compact"',
	},
	templateUrl: './table.html',
	styleUrl: './table.scss',
})
export class Table {
	public readonly density = input<TableDensity>('comfortable');
}
