import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-card',
	host: {
		class: 'plim-card',
		'[class.plim-card--fill]': 'fill()',
	},
	templateUrl: './card.html',
	styleUrl: './card.scss',
})
export class Card {
	readonly fill = input(false, { transform: booleanAttribute });
}
