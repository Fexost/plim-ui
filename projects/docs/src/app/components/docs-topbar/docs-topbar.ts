import { NgTemplateOutlet } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button, Header, Menu, MenuItem, MenuTrigger } from 'plim-ui';

import { DOCS_EXTERNAL_LINKS, DOCS_HOME, DOCS_SITES } from '../../docs-nav.config';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';
import { ThemeService } from '../../services/theme.service';

@Component({
	selector: 'app-docs-topbar',
	imports: [RouterLink, NgTemplateOutlet, Button, Header, Menu, MenuItem, MenuTrigger],
	templateUrl: './docs-topbar.html',
	styleUrl: './docs-topbar.scss',
})
export class DocsTopbar {
	protected readonly theme = inject(ThemeService);
	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly DOCS_HOME = DOCS_HOME;
	protected readonly DOCS_SITES = DOCS_SITES;
	protected readonly externalLinks = DOCS_EXTERNAL_LINKS;
	protected readonly currentSiteLabel =
		DOCS_SITES.find((site) => site.current)?.label ?? DOCS_SITES[0].label;

	protected navigateToSite(url: string): void {
		window.location.assign(url);
	}

	protected openExternal(url: string): void {
		window.open(url, '_blank', 'noopener,noreferrer');
	}
}
