import { booleanAttribute, Component, input } from '@angular/core';

@Component({
	selector: 'plim-card',
	host: {
		class: 'plim-card',
		'[class.plim-card--fill]': 'fill()',
		'[class.plim-card--elevated]': 'elevated()',
	},
	templateUrl: './card.html',
	styleUrl: './card.scss',
})
export class Card {
	public readonly fill = input(false, { transform: booleanAttribute });
	public readonly elevated = input(false, { transform: booleanAttribute });
}
