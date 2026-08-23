import { Component, signal } from '@angular/core';
import { Button, Sidebar, SidebarMode, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SIDEBAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-sidebar-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Sidebar, Button, Table],
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
