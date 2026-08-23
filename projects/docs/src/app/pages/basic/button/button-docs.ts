import { Component } from '@angular/core';
import { Button, Card, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BUTTON_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-button-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Button, Card, Table],
	templateUrl: './button-docs.html',
	styleUrl: './button-docs.scss',
})
export class ButtonDocs {
	protected readonly tokens = BUTTON_DOCS_TOKENS;
}
