import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Badge, Button, Header, Separator, Sidebar } from 'plim-ui';

import { DocsNav } from './components/docs-nav/docs-nav';
import { DocsSearch } from './components/docs-search/docs-search';
import { DOCS_HOME } from './docs-nav.config';
import { DocsResponsiveNavService } from './services/docs-responsive-nav.service';
import { ThemeService } from './services/theme.service';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, RouterLink, Badge, Button, Header, Separator, Sidebar, DocsNav, DocsSearch],
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
