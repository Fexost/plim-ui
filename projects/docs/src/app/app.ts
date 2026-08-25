import { Component } from '@angular/core';

import { DocsShell } from './components/docs-shell/docs-shell';
import { DocsTopbar } from './components/docs-topbar/docs-topbar';

@Component({
	selector: 'app-root',
	imports: [DocsTopbar, DocsShell],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {}
