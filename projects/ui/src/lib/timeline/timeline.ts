import { Component, input } from '@angular/core';

export type TimelineOrientation = 'vertical' | 'horizontal';

@Component({
	selector: 'plim-timeline',
	host: {
		class: 'plim-timeline',
		'[class.plim-timeline--horizontal]': 'orientation() === "horizontal"',
	},
	templateUrl: './timeline.html',
	styleUrl: './timeline.scss',
})
export class Timeline {
	public readonly orientation = input<TimelineOrientation>('vertical');
}
