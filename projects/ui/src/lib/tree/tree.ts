import { Component } from '@angular/core';

@Component({
	selector: 'plim-tree',
	host: {
		class: 'plim-tree',
		role: 'tree',
	},
	templateUrl: './tree.html',
	styleUrl: './tree.scss',
})
export class Tree {}
