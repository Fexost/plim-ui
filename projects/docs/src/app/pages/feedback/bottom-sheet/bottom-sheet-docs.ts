import { Component, signal } from '@angular/core';
import { BottomSheet, Button, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BOTTOM_SHEET_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-bottom-sheet-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, BottomSheet, Button, Table],
	templateUrl: './bottom-sheet-docs.html',
	styleUrl: './bottom-sheet-docs.scss',
})
export class BottomSheetDocs {
	protected readonly tokens = BOTTOM_SHEET_DOCS_TOKENS;
	protected readonly open = signal(false);
}
