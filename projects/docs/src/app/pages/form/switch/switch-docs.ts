import { Component } from '@angular/core';
import { Switch } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SWITCH_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-switch-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Switch],
	templateUrl: './switch-docs.html',
	styleUrl: './switch-docs.scss',
})
export class SwitchDocs {
	protected readonly tokens = SWITCH_DOCS_TOKENS;
}
