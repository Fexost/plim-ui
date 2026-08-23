import { Component } from '@angular/core';
import { Separator, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SEPARATOR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-separator-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Separator, Table],
	templateUrl: './separator-docs.html',
	styleUrl: './separator-docs.scss',
})
export class SeparatorDocs {
	protected readonly tokens = SEPARATOR_DOCS_TOKENS;
}
