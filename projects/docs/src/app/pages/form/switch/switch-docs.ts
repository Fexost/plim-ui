import { Component } from '@angular/core';
import { Switch, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SWITCH_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-switch-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Switch, Table],
	templateUrl: './switch-docs.html',
	styleUrl: './switch-docs.scss',
})
export class SwitchDocs {
	protected readonly tokens = SWITCH_DOCS_TOKENS;
}
