import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Badge, Button, Card, Header, Sidebar } from 'plim-ui';

import { DocsNav } from './components/docs-nav/docs-nav';
import { DOCS_HOME } from './docs-nav.config';
import { DocsResponsiveNavService } from './services/docs-responsive-nav.service';
import { ThemeService } from './services/theme.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, RouterLink, Badge, Button, Card, Header, Sidebar, DocsNav],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	protected readonly theme = inject(ThemeService);
	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly DOCS_HOME = DOCS_HOME;

	protected openExternal(url: string): void {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
}
