import { Component, signal } from '@angular/core';
import { Chip, ChipSet } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { CHIPS_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-chips-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Chip, ChipSet],
	templateUrl: './chips-docs.html',
})
export class ChipsDocs {
	protected readonly tokens = CHIPS_DOCS_TOKENS;
	protected readonly chips = signal(['Angular', 'Signals', 'CDK']);

	protected removeChip(chip: string): void {
		this.chips.update((items) => items.filter((item) => item !== chip));
	}
}
