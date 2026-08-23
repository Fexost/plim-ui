import { Component } from '@angular/core';
import { Button, Table, Tooltip } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TOOLTIP_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-tooltip-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Button, Tooltip, Table],
	templateUrl: './tooltip-docs.html',
	styleUrl: './tooltip-docs.scss',
})
export class TooltipDocs {
	protected readonly tokens = TOOLTIP_DOCS_TOKENS;
}
