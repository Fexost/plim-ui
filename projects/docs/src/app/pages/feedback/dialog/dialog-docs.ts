import { Component, signal } from '@angular/core';
import { Button, Dialog } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { DIALOG_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-dialog-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Button, Dialog],
	templateUrl: './dialog-docs.html',
	styleUrl: './dialog-docs.scss',
})
export class DialogDocs {
	protected readonly tokens = DIALOG_DOCS_TOKENS;
	protected readonly open = signal(false);
}
