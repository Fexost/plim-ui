import { Component, signal } from '@angular/core';
import { PageEvent, Paginator, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { PAGINATOR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-paginator-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Paginator, Table],
	templateUrl: './paginator-docs.html',
})
export class PaginatorDocs {
	protected readonly length = 100;
	protected readonly nativePageIndex = signal(0);
	protected readonly nativePageSize = signal(10);
	protected readonly plimPageIndex = signal(0);
	protected readonly plimPageSize = signal(10);
	protected readonly tokens = PAGINATOR_DOCS_TOKENS;

	protected onNativePage(event: PageEvent): void {
		this.nativePageIndex.set(event.pageIndex);
		this.nativePageSize.set(event.pageSize);
	}

	protected onPlimPage(event: PageEvent): void {
		this.plimPageIndex.set(event.pageIndex);
		this.plimPageSize.set(event.pageSize);
	}
}
