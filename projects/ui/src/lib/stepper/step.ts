import { booleanAttribute, Component, forwardRef, inject, input } from '@angular/core';

import { Stepper } from './stepper';

@Component({
	selector: 'plim-step',
	host: {
		class: 'plim-step',
		'[hidden]': '!selected()',
	},
	templateUrl: './step.html',
	styleUrl: './step.scss',
})
export class Step {
	public readonly label = input.required<string>();
	public readonly optional = input(false, { transform: booleanAttribute });

	private readonly stepper = inject(forwardRef(() => Stepper));

	protected selected(): boolean {
		return this.stepper.steps().indexOf(this) === this.stepper.selectedIndex();
	}
}
