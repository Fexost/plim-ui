import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-header',
	host: {
		class: 'plim-header',
		'[class.plim-header--sticky]': 'sticky()',
	},
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {
	public readonly sticky = input(false, {
		transform: booleanAttribute,
	});
}
