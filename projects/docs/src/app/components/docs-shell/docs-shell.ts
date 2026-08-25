import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Badge, Button, Separator, Sidebar } from 'plim-ui';

import { DocsNav } from '../docs-nav/docs-nav';
import { DocsSearch } from '../docs-search/docs-search';
import { DOCS_EXTERNAL_LINKS } from '../../docs-nav.config';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';

@Component({
	selector: 'app-docs-shell',
	imports: [RouterOutlet, Badge, Button, Separator, Sidebar, DocsNav, DocsSearch],
	templateUrl: './docs-shell.html',
	styleUrl: './docs-shell.scss',
})
export class DocsShell {
	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly externalLinks = DOCS_EXTERNAL_LINKS;

	protected openExternal(url: string): void {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
}
