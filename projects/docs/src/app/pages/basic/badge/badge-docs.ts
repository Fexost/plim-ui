import { Component } from '@angular/core';
import { Badge } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-badge-docs',
	imports: [DocsComponentLayout, Badge],
	templateUrl: './badge-docs.html',
})
export class BadgeDocs {}
