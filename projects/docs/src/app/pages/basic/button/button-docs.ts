import { Component } from '@angular/core';
import { Button } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BUTTON_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-button-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Button],
	templateUrl: './button-docs.html',
	styleUrl: './button-docs.scss',
})
export class ButtonDocs {
	protected readonly tokens = BUTTON_DOCS_TOKENS;
}
