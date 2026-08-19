import { Component } from '@angular/core';
import { Header } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-header-docs',
	imports: [DocsComponentLayout, Header],
	templateUrl: './header-docs.html',
	styleUrl: './header-docs.scss',
})
export class HeaderDocs {}
