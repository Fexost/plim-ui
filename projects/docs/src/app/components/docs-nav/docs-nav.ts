import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Button } from 'plim-ui';

import { DOCS_EXTERNAL_LINKS, DOCS_NAV } from '../../docs-nav.config';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';
import { openExternal } from '../../utils/open-external';

@Component({
	selector: 'app-docs-nav',
	imports: [RouterLink, RouterLinkActive, Button],
	templateUrl: './docs-nav.html',
	styleUrl: './docs-nav.scss',
})
export class DocsNav {
	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly sections = DOCS_NAV;
	protected readonly externalLinks = DOCS_EXTERNAL_LINKS;
	protected openExternal = openExternal;

	private readonly expandedSections = signal<Record<string, boolean>>(
		Object.fromEntries(DOCS_NAV.map((section) => [section.label, true])),
	);

	protected isSectionExpanded(sectionLabel: string): boolean {
		return this.expandedSections()[sectionLabel] ?? true;
	}

	protected toggleSection(sectionLabel: string): void {
		this.expandedSections.update((state) => ({
			...state,
			[sectionLabel]: !(state[sectionLabel] ?? true),
		}));
	}
}
