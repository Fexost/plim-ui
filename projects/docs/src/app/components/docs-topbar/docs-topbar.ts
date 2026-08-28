import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button, Header } from 'plim-ui';

import { DOCS_EXTERNAL_LINKS, DOCS_HOME } from '../../docs-nav.config';
import { DocsCommandPaletteService } from '../../services/docs-command-palette.service';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-docs-topbar',
	imports: [RouterLink, NgTemplateOutlet, Button, Header],
	templateUrl: './docs-topbar.html',
	styleUrl: './docs-topbar.scss',
})
export class DocsTopbar {
	protected readonly theme = inject(ThemeService);
	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly commandPalette = inject(DocsCommandPaletteService);
	protected readonly DOCS_HOME = DOCS_HOME;
	protected readonly externalLinks = DOCS_EXTERNAL_LINKS;

	protected openExternal(url: string): void {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
}
