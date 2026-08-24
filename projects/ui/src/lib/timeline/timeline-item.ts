import { Component } from '@angular/core';

@Component({
	selector: 'plim-timeline-item',
	host: {
		class: 'plim-timeline-item',
		role: 'listitem',
	},
	templateUrl: './timeline-item.html',
	styleUrl: './timeline-item.scss',
})
export class TimelineItem {}
