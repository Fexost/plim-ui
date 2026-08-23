import { booleanAttribute, Component, input } from '@angular/core';

export type SidebarMode = 'push' | 'overlay';

@Component({
	selector: 'plim-sidebar',
	host: {
		class: 'plim-sidebar',
		role: 'complementary',
		'[class.plim-sidebar--open]': 'open()',
		'[class.plim-sidebar--overlay]': 'open() && mode() === "overlay"',
		'[class.plim-sidebar--contained]': '!fixed()',
		'[attr.aria-label]': 'ariaLabel() ?? null',
		'[attr.inert]': 'open() ? null : ""',
	},
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
}
