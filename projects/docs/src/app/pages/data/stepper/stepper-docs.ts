import { Component } from '@angular/core';
import { Step, Stepper } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';
import { DocsTokenTable } from '../../../components/docs-token-table/docs-token-table';
import { STEPPER_DOCS_TOKENS } from '../../../docs-component-tokens.config';

@Component({
	selector: 'app-stepper-docs',
	imports: [DocsComponentLayout, DocsTokenTable, Stepper, Step],
	templateUrl: './stepper-docs.html',
	styleUrl: './stepper-docs.scss',
})
export class StepperDocs {
	protected readonly tokens = STEPPER_DOCS_TOKENS;
}
