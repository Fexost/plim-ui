import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-toolbar',
	host: {
		class: 'plim-toolbar',
		'[class.plim-toolbar--sticky]': 'sticky()',
	},
	templateUrl: './toolbar.html',
	styleUrl: './toolbar.scss',
})
export class Toolbar {
	public readonly sticky = input(false, {
		transform: booleanAttribute,
	});
}
