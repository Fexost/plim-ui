import {
	AfterContentInit,
	Component,
	ElementRef,
	booleanAttribute,
	inject,
	input,
	signal,
} from '@angular/core';

@Component({
	selector: 'plim-option',
	templateUrl: './option.html',
	host: {
		class: 'plim-option',
		hidden: '',
	},
})
export class Option implements AfterContentInit {
	private readonly elementRef = inject(ElementRef<HTMLElement>);

	public readonly value = input<string>('');
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly selected = input(false, { transform: booleanAttribute });

	public readonly label = signal('');

	public ngAfterContentInit(): void {
		this.label.set(this.elementRef.nativeElement.textContent?.trim() ?? '');
	}
}
