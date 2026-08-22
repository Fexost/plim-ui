import { Component } from '@angular/core';
import { ProgressBar } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { PROGRESS_BAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-progress-bar-docs',
	imports: [DocsComponentLayout, DocsTokenTable, ProgressBar],
	templateUrl: './progress-bar-docs.html',
	styleUrl: './progress-bar-docs.scss',
})
export class ProgressBarDocs {
	protected readonly tokens = PROGRESS_BAR_DOCS_TOKENS;
}
