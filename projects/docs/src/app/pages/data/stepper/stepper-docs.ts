import { Component } from '@angular/core';
import { Step, Stepper, Table } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsA11yCallout } from '../../../components/docs-a11y-callout/docs-a11y-callout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { STEPPER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-stepper-docs',
	imports: [DocsA11yCallout, DocsComponentLayout, DocsTokenTable, Stepper, Step, Table],
	templateUrl: './stepper-docs.html',
	styleUrl: './stepper-docs.scss',
})
export class StepperDocs {
	protected readonly tokens = STEPPER_DOCS_TOKENS;
}
