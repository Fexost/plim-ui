import { Component } from '@angular/core';
import { Slider, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { SLIDER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-slider-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Slider, Table],
	templateUrl: './slider-docs.html',
})
export class SliderDocs {
	protected readonly tokens = SLIDER_DOCS_TOKENS;
}
