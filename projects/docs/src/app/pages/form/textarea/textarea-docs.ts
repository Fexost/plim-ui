import { Component } from '@angular/core';
import { Table, Textarea } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TEXTAREA_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-textarea-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Textarea, Table],
	templateUrl: './textarea-docs.html',
})
export class TextareaDocs {
	protected readonly tokens = TEXTAREA_DOCS_TOKENS;
}
