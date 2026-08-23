import { Component, signal } from '@angular/core';
import { Tab, TabGroup } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TABS_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-tabs-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Tab, TabGroup],
	templateUrl: './tabs-docs.html',
})
export class TabsDocs {
	protected readonly selectedIndex = signal(0);
	protected readonly tokens = TABS_DOCS_TOKENS;
}
