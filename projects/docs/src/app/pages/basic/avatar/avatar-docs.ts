import { Component } from '@angular/core';
import { Avatar, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { AVATAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-avatar-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Avatar, Table],
	templateUrl: './avatar-docs.html',
})
export class AvatarDocs {
	protected readonly tokens = AVATAR_DOCS_TOKENS;
}
