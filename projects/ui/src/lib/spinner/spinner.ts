import { Component, input } from '@angular/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
	selector: 'plim-spinner',
	templateUrl: './spinner.html',
	styleUrl: './spinner.scss',
	host: {
		role: 'status',
		'[class.spinner--sm]': 'size() === "sm"',
		'[class.spinner--md]': 'size() === "md"',
		'[class.spinner--lg]': 'size() === "lg"',
		'[attr.aria-label]': 'ariaLabel()',
	},
})
export class Spinner {
	public readonly size = input<SpinnerSize>('md');
	public readonly ariaLabel = input('Loading', { alias: 'aria-label' });
}
