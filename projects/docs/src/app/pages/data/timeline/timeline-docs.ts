import { Component } from '@angular/core';
import { Badge, Table, Timeline, TimelineItem } from 'plim-ui';

import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TIMELINE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-timeline-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Badge, Table, Timeline, TimelineItem],
	templateUrl: './timeline-docs.html',
	styleUrl: './timeline-docs.scss',
})
export class TimelineDocs {
	protected readonly tokens = TIMELINE_DOCS_TOKENS;
}
