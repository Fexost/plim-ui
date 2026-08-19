import { Component } from '@angular/core';
import { Switch } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-switch-docs',
	imports: [DocsComponentLayout, Switch],
	templateUrl: './switch-docs.html',
})
export class SwitchDocs {}
