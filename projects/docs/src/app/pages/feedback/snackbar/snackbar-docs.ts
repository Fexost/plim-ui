import { Component, signal } from '@angular/core';
import { Button, Snackbar, SnackbarVariant } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SNACKBAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-snackbar-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Button, Snackbar],
	templateUrl: './snackbar-docs.html',
	styleUrl: './snackbar-docs.scss',
})
export class SnackbarDocs {
	protected readonly tokens = SNACKBAR_DOCS_TOKENS;
	protected readonly open = signal(false);
	protected readonly variant = signal<SnackbarVariant>('default');

	protected show(nextVariant: SnackbarVariant): void {
		this.variant.set(nextVariant);
		this.open.set(true);
	}
}
