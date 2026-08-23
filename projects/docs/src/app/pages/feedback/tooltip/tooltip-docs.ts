import { Component } from '@angular/core';
import { Button, Tooltip } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TOOLTIP_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-tooltip-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Button, Tooltip],
	templateUrl: './tooltip-docs.html',
	styleUrl: './tooltip-docs.scss',
})
export class TooltipDocs {
	protected readonly tokens = TOOLTIP_DOCS_TOKENS;
}
