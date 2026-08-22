import { Component } from '@angular/core';
import { Textarea } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TEXTAREA_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-textarea-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Textarea],
	templateUrl: './textarea-docs.html',
})
export class TextareaDocs {
	protected readonly tokens = TEXTAREA_DOCS_TOKENS;
}
