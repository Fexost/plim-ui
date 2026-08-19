import { Component, signal } from '@angular/core';
import { Button, Sidebar as PlimSidebar, SidebarMode } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-sidebar',
	imports: [DocsComponentLayout, PlimSidebar, Button],
	templateUrl: './sidebar.html',
	styleUrl: './sidebar.scss',
})
export class Sidebar {
	protected readonly open = signal(true);
	protected readonly mode = signal<SidebarMode>('push');

	protected toggleOpen(): void {
		if (this.open()) {
			this.open.set(false);
			return;
		}

		this.open.set(true);
		this.mode.set('overlay');
	}

	protected setMode(mode: SidebarMode): void {
		this.mode.set(mode);
		this.open.set(true);
	}
}
