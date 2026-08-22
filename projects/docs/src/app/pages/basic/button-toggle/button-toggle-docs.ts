import { Component, signal } from '@angular/core';
import { ButtonToggle, ButtonToggleGroup } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { BUTTON_TOGGLE_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-button-toggle-docs',
	imports: [DocsComponentLayout, DocsTokenTable, ButtonToggle, ButtonToggleGroup],
	templateUrl: './button-toggle-docs.html',
})
export class ButtonToggleDocs {
	protected readonly view = signal('list');
	protected readonly ingredients = signal<string[]>(['eggs']);
	protected readonly tokens = BUTTON_TOGGLE_DOCS_TOKENS;
}
