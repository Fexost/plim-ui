import { Component, input } from '@angular/core';

export type SeparatorOrientation = 'horizontal' | 'vertical';

@Component({
	selector: 'plim-separator',
	host: {
		class: 'plim-separator',
		'[class.plim-separator--horizontal]': 'orientation() === "horizontal"',
		'[class.plim-separator--vertical]': 'orientation() === "vertical"',
	},
	templateUrl: './separator.html',
	styleUrl: './separator.scss',
})
export class Separator {
	public readonly orientation = input<SeparatorOrientation>('horizontal');
}
