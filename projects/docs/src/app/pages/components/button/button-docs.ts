import { Component } from '@angular/core';
import { Button } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-button-docs',
	imports: [DocsComponentLayout, Button],
	templateUrl: './button-docs.html',
})
export class ButtonDocs {}
