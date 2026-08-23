import { Component, signal } from '@angular/core';
import { Button, Dialog, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { DIALOG_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-dialog-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Button, Dialog, Table],
	templateUrl: './dialog-docs.html',
})
export class DialogDocs {
	protected readonly tokens = DIALOG_DOCS_TOKENS;
	protected readonly open = signal(false);
}
