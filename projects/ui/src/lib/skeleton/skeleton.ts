import { Component, input } from '@angular/core';

export type SkeletonVariant = 'rect' | 'text' | 'circle';

@Component({
	selector: 'plim-skeleton',
	host: {
		class: 'plim-skeleton',
		role: 'presentation',
		'aria-hidden': 'true',
		'[class.plim-skeleton--text]': 'variant() === "text"',
		'[class.plim-skeleton--circle]': 'variant() === "circle"',
		'[style.width]': 'width()',
		'[style.height]': 'height()',
	},
	template: '',
	styleUrl: './skeleton.scss',
})
export class Skeleton {
	public readonly variant = input<SkeletonVariant>('rect');
	public readonly width = input<string | null>(null);
	public readonly height = input<string | null>(null);
}
