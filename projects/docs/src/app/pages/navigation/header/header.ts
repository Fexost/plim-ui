import { Component } from '@angular/core';
import { Header as PlimHeader } from 'plim-ui';

import { DocsComponentLayout } from '../../../components/docs-component-layout/docs-component-layout';

@Component({
	selector: 'app-header',
	imports: [DocsComponentLayout, PlimHeader],
	templateUrl: './header.html',
	styleUrl: './header.scss',
})
export class Header {}
