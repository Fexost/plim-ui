import { Component, input } from '@angular/core';

export type ProgressBarMode = 'determinate' | 'indeterminate';

@Component({
	selector: 'plim-progress-bar',
	host: {
		class: 'plim-progress-bar',
		role: 'progressbar',
		'[attr.aria-valuemin]': '0',
		'[attr.aria-valuemax]': '100',
		'[attr.aria-valuenow]': 'mode() === "determinate" ? clampedValue() : null',
		'[attr.aria-label]': 'ariaLabel()',
		'[class.plim-progress-bar--indeterminate]': 'mode() === "indeterminate"',
	},
	templateUrl: './progress-bar.html',
	styleUrl: './progress-bar.scss',
})
export class ProgressBar {
	public readonly value = input(0);
	public readonly mode = input<ProgressBarMode>('determinate');
	public readonly ariaLabel = input('Progress', { alias: 'aria-label' });

	protected clampedValue(): number {
		return Math.min(100, Math.max(0, this.value()));
	}
}
