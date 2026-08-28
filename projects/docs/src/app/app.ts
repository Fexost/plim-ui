import { Component } from '@angular/core';

import { DocsCommandPalette } from './components/docs-command-palette/docs-command-palette';
import { DocsShell } from './components/docs-shell/docs-shell';
import { DocsTopbar } from './components/docs-topbar/docs-topbar';

@Component({
	selector: 'app-root',
	imports: [DocsTopbar, DocsShell, DocsCommandPalette],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {}
