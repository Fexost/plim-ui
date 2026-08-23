import { Component } from '@angular/core';

@Component({
	selector: 'plim-list',
	host: {
		class: 'plim-list',
		role: 'list',
	},
	templateUrl: './list.html',
	styleUrl: './list.scss',
})
export class List {}
