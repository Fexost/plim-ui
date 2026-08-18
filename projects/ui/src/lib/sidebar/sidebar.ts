import { booleanAttribute, Component, input } from '@angular/core';

export type SidebarMode = 'push' | 'overlay';

@Component({
	selector: 'plim-sidebar',
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
	host: {
		'[class.sidebar--open]': 'open()',
		'[class.sidebar--overlay]': 'open() && mode() === "overlay"',
		'[class.sidebar--contained]': '!fixed()',
	},
})
export class Sidebar {
	public readonly open = input(true, { transform: booleanAttribute });
	public readonly mode = input<SidebarMode>('push');
	public readonly fixed = input(true, { transform: booleanAttribute });

	public readonly ariaLabel = input<string | undefined>(undefined, {
		alias: 'aria-label',
	});
}
