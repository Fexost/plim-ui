import { Component } from '@angular/core';

@Component({
	selector: 'table[plimTable]',
	host: {
		class: 'plim-table',
	},
	templateUrl: './table.html',
	styleUrl: './table.scss',
})
export class Table {}
