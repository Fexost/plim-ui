import { Component, signal } from '@angular/core';
import { Button, Sidebar, SidebarMode } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SIDEBAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-sidebar-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Sidebar, Button],
	templateUrl: './sidebar-docs.html',
	styleUrl: './sidebar-docs.scss',
})
export class SidebarDocs {
	protected readonly tokens = SIDEBAR_DOCS_TOKENS;
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
