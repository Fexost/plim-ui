import { Component } from '@angular/core';
import { Slider } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SLIDER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-slider-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Slider],
	templateUrl: './slider-docs.html',
})
export class SliderDocs {
	protected readonly tokens = SLIDER_DOCS_TOKENS;
}
