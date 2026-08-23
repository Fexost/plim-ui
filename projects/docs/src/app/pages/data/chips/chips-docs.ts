import { Component, signal } from '@angular/core';
import { Chip, ChipSet, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { CHIPS_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-chips-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Chip, ChipSet, Table],
	templateUrl: './chips-docs.html',
})
export class ChipsDocs {
	protected readonly tokens = CHIPS_DOCS_TOKENS;
	protected readonly chips = signal(['Angular', 'Signals', 'CDK']);

	protected removeChip(chip: string): void {
		this.chips.update((items) => items.filter((item) => item !== chip));
	}
}
