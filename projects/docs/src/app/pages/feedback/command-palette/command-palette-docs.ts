import { Component, computed, signal } from '@angular/core';
import { Button, CommandPalette, CommandPaletteItem, Table } from 'plim-ui';

import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { COMMAND_PALETTE_DOCS_TOKENS } from '../../../docs-component-tokens.config';
import { getModifierKeyLabel } from '../../../utils/platform-shortcut';

const DEMO_ITEMS: CommandPaletteItem[] = [
	{ id: 'overview', label: 'Overview', description: 'Get started' },
	{ id: 'tokens', label: 'Tokens', description: 'Foundations' },
	{ id: 'button', label: 'Button', description: 'Basic' },
	{ id: 'dialog', label: 'Dialog', description: 'Feedback' },
	{ id: 'table', label: 'Table', description: 'Data' },
];

@Component({
	selector: 'app-command-palette-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Button, CommandPalette, Table],
	templateUrl: './command-palette-docs.html',
})
export class CommandPaletteDocs {
	protected readonly tokens = COMMAND_PALETTE_DOCS_TOKENS;
	protected readonly modifierKeyLabel = getModifierKeyLabel();
	protected readonly open = signal(false);
	protected readonly query = signal('');

	protected readonly items = computed(() => {
		const normalizedQuery = this.query().trim().toLowerCase();

		if (!normalizedQuery) {
			return DEMO_ITEMS;
		}

		return DEMO_ITEMS.filter((item) => {
			const haystack = [item.label, item.description ?? '', item.id].join(' ').toLowerCase();

			return haystack.includes(normalizedQuery);
		});
	});

	protected onSelected(_item: CommandPaletteItem): void {
		this.onClosed();
	}

	protected onClosed(): void {
		this.open.set(false);
		this.query.set('');
	}
}
