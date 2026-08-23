import { Component } from '@angular/core';
import { Button, Menu, MenuItem, MenuTrigger, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { MENU_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-menu-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Button, Menu, MenuItem, MenuTrigger, Table],
	templateUrl: './menu-docs.html',
})
export class MenuDocs {
	protected readonly tokens = MENU_DOCS_TOKENS;
}
