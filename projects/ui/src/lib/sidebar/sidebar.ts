import { booleanAttribute, Component, HostBinding, input } from '@angular/core';

export type SidebarMode = 'push' | 'overlay';

@Component({
	selector: 'plim-sidebar',
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar {
	public readonly open = input(true, { transform: booleanAttribute });
	public readonly mode = input<SidebarMode>('push');
	public readonly fixed = input(true, { transform: booleanAttribute });

	public readonly ariaLabel = input<string | undefined>(undefined, {
		alias: 'aria-label',
	});

	@HostBinding('class.sidebar--open')
	protected get isOpen(): boolean {
		return this.open();
	}

	@HostBinding('class.sidebar--overlay')
	protected get isOverlay(): boolean {
		return this.open() && this.mode() === 'overlay';
	}

	@HostBinding('class.sidebar--contained')
	protected get isContained(): boolean {
		return !this.fixed();
	}
}
