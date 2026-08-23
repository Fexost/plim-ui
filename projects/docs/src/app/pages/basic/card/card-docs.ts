import { Component } from '@angular/core';
import { Button, Card, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { CARD_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-card-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Card, Button, Table],
	templateUrl: './card-docs.html',
	styleUrl: './card-docs.scss',
})
export class CardDocs {
	protected readonly tokens = CARD_DOCS_TOKENS;
}
