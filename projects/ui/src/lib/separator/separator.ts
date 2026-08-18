import { Component, input } from '@angular/core';

export type SeparatorOrientation = 'horizontal' | 'vertical';

@Component({
	selector: 'plim-separator',
	templateUrl: './separator.html',
	styleUrl: './separator.scss',
	host: {
		'[class.separator--horizontal]': 'orientation() === "horizontal"',
		'[class.separator--vertical]': 'orientation() === "vertical"',
	},
})
export class Separator {
	public readonly orientation = input<SeparatorOrientation>('horizontal');
}
