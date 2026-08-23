import { Component } from '@angular/core';
import { Header, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { HEADER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-header-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Header, Table],
	templateUrl: './header-docs.html',
	styleUrl: './header-docs.scss',
})
export class HeaderDocs {
	protected readonly tokens = HEADER_DOCS_TOKENS;
}
