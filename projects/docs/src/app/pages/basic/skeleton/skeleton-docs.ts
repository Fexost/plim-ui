import { Component } from '@angular/core';
import { Skeleton, Table } from 'plim-ui';

import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SKELETON_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-skeleton-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Skeleton, Table],
	templateUrl: './skeleton-docs.html',
})
export class SkeletonDocs {
	protected readonly tokens = SKELETON_DOCS_TOKENS;
}
