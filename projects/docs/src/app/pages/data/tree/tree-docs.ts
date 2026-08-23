import { Component } from '@angular/core';
import { Tree, TreeNode } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { TREE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-tree-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Tree, TreeNode],
	templateUrl: './tree-docs.html',
	styleUrl: './tree-docs.scss',
})
export class TreeDocs {
	protected readonly tokens = TREE_DOCS_TOKENS;
}
