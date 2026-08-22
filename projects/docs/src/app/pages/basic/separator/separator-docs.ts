import { Component } from '@angular/core';
import { Separator } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SEPARATOR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-separator-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Separator],
	templateUrl: './separator-docs.html',
	styleUrl: './separator-docs.scss',
})
export class SeparatorDocs {
	protected readonly tokens = SEPARATOR_DOCS_TOKENS;
}
