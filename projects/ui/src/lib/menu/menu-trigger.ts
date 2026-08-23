import { Directive, ElementRef, inject, input } from '@angular/core';

import { Menu } from './menu';

@Directive({
	selector: '[plimMenuTrigger]',
	host: {
		'(click)': 'onClick()',
		'(keydown.escape)': 'onEscape($event)',
		'[attr.aria-haspopup]': '"menu"',
		'[attr.aria-expanded]': 'expanded()',
		'[attr.aria-controls]': 'controlsId()',
	},
})
export class MenuTrigger {
	public readonly menu = input.required<Menu>({ alias: 'plimMenuTrigger' });

	private readonly elementRef = inject(ElementRef<HTMLElement>);

	protected onClick(): void {
		this.menu().toggle(this.elementRef);
	}

	protected onEscape(event: Event): void {
		if (!this.menu().isOpen()) {
			return;
		}

		event.preventDefault();
		this.menu().close();
	}

	protected expanded(): boolean {
		return this.menu().isOpen();
	}

	protected controlsId(): string | null {
		return this.menu().isOpen() ? this.menu().panelId : null;
	}
}
