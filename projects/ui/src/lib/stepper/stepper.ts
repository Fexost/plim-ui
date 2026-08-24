import { Component, contentChildren, input, model } from '@angular/core';

import { Step } from './step';

export type StepperOrientation = 'horizontal' | 'vertical';

@Component({
	selector: 'plim-stepper',
	host: {
		class: 'plim-stepper',
		'[class.plim-stepper--vertical]': 'orientation() === "vertical"',
	},
	templateUrl: './stepper.html',
	styleUrl: './stepper.scss',
})
export class Stepper {
	public readonly orientation = input<StepperOrientation>('horizontal');
	public readonly selectedIndex = model(0);
	public readonly steps = contentChildren(Step);

	public next(): void {
		const last = Math.max(this.steps().length - 1, 0);
		this.selectedIndex.update((index) => Math.min(index + 1, last));
	}

	public back(): void {
		this.selectedIndex.update((index) => Math.max(index - 1, 0));
	}

	protected atStart(): boolean {
		return this.selectedIndex() <= 0;
	}

	protected atEnd(): boolean {
		return this.selectedIndex() >= Math.max(this.steps().length - 1, 0);
	}
}
