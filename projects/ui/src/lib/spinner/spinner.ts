import { Component, input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
	selector: 'plim-spinner',
	host: {
		class: 'plim-spinner',
		role: 'status',
		'[class.plim-spinner--sm]': 'size() === "sm"',
		'[class.plim-spinner--md]': 'size() === "md"',
		'[class.plim-spinner--lg]': 'size() === "lg"',
		'[attr.aria-label]': 'ariaLabel()',
	},
	templateUrl: './spinner.html',
	styleUrl: './spinner.scss',
})
export class Spinner {
	public readonly size = input<SpinnerSize>('md');
	public readonly ariaLabel = input('Loading', { alias: 'aria-label' });
}
