import { Component } from '@angular/core';
import { StickyNote, Table } from 'plim-ui';

import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { STICKY_NOTE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-sticky-note-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, StickyNote, Table],
	templateUrl: './sticky-note-docs.html',
	styleUrl: './sticky-note-docs.scss',
})
export class StickyNoteDocs {
	protected readonly tokens = STICKY_NOTE_DOCS_TOKENS;
}
