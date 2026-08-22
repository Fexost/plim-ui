import { Component } from '@angular/core';
import { Avatar } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { AVATAR_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-avatar-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Avatar],
	templateUrl: './avatar-docs.html',
})
export class AvatarDocs {
	protected readonly tokens = AVATAR_DOCS_TOKENS;
}
