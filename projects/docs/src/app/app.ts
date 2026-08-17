import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Button, Header, Sidebar } from 'plim-ui';

import { DocsNav } from './components/docs-nav/docs-nav';
import { DOCS_HOME } from './docs-nav.config';
import { ThemeService } from './services/theme.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, RouterLink, Header, Sidebar, Button, DocsNav],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly theme = inject(ThemeService);
	protected readonly homePath = DOCS_HOME;
}
