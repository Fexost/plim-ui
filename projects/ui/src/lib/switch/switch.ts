import {
	afterNextRender,
	booleanAttribute,
	Component,
	ElementRef,
	inject,
	input,
	signal,
} from '@angular/core';

@Component({
	selector: 'input[type=checkbox][plimSwitch]',
	template: '',
	styleUrl: './switch.scss',
	host: {
		class: 'plim-switch',
		role: 'switch',
		'(change)': 'syncChecked()',
		'[class.plim-switch--invalid]': 'invalid()',
		'[attr.aria-checked]': 'checked()',
		'[attr.aria-invalid]': 'invalid() ? true : null',
	},
})
export class Switch {
	private readonly element = inject<ElementRef<HTMLInputElement>>(ElementRef);

	protected readonly checked = signal(false);

	public readonly invalid = input(false, { transform: booleanAttribute });

	constructor() {
		afterNextRender(() => this.syncChecked());
	}

	protected syncChecked(): void {
		this.checked.set(this.element.nativeElement.checked);
	}
}
