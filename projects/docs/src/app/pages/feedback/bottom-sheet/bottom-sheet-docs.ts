import { Component, signal } from '@angular/core';
import { BottomSheet, Button } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BOTTOM_SHEET_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-bottom-sheet-docs',
	imports: [DocsComponentLayout, DocsTokenTable, BottomSheet, Button],
	templateUrl: './bottom-sheet-docs.html',
	styleUrl: './bottom-sheet-docs.scss',
})
export class BottomSheetDocs {
	protected readonly tokens = BOTTOM_SHEET_DOCS_TOKENS;
	protected readonly open = signal(false);
}
