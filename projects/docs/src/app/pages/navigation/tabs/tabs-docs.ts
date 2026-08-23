import { Component, signal } from '@angular/core';
import { Tab, TabGroup, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TABS_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-tabs-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Tab, TabGroup, Table],
	templateUrl: './tabs-docs.html',
})
export class TabsDocs {
	protected readonly selectedIndex = signal(0);
	protected readonly tokens = TABS_DOCS_TOKENS;
}
