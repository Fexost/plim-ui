import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Badge, Separator, Sidebar } from 'plim-ui';

import { DocsNav } from '../docs-nav/docs-nav';
import { DocsSearch } from '../docs-search/docs-search';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';

@Component({
	selector: 'app-docs-shell',
	imports: [RouterOutlet, Badge, Separator, Sidebar, DocsNav, DocsSearch],
	templateUrl: './docs-shell.html',
	styleUrl: './docs-shell.scss',
})
export class DocsShell {
	protected readonly nav = inject(DocsResponsiveNavService);
}
