import { Component } from '@angular/core';
import { Button, Menu, MenuItem, MenuTrigger } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { MENU_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-menu-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Button, Menu, MenuItem, MenuTrigger],
	templateUrl: './menu-docs.html',
})
export class MenuDocs {
	protected readonly tokens = MENU_DOCS_TOKENS;
}
