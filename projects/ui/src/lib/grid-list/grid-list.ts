import { Component, input } from '@angular/core';

@Component({
	selector: 'plim-grid-list',
	host: {
		class: 'plim-grid-list',
		'[style.grid-template-columns]': 'columnTemplate()',
	},
	templateUrl: './grid-list.html',
	styleUrl: './grid-list.scss',
})
export class GridList {
	public readonly cols = input(2);

	protected columnTemplate(): string {
		return `repeat(${this.cols()}, minmax(0, 1fr))`;
	}
}
