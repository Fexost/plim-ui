import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-header',
	templateUrl: './header.html',
	styleUrl: './header.scss',
	host: {
		'[class.header--sticky]': 'sticky()',
	},
})
export class Header {
	public readonly sticky = input(false, {
		transform: booleanAttribute,
	});
}
