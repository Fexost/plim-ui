import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
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
export class DocsShell implements AfterViewInit, OnDestroy {
	private readonly router = inject(Router);
	private readonly mainRef = inject(ElementRef<HTMLElement>);
	private navigationSubscription?: Subscription;

	protected readonly nav = inject(DocsResponsiveNavService);
	protected readonly externalLinks = DOCS_EXTERNAL_LINKS;

	public ngAfterViewInit(): void {
		this.navigationSubscription = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => this.focusMainHeading());
	}

	public ngOnDestroy(): void {
		this.navigationSubscription?.unsubscribe();
	}

	protected openExternal(url: string): void {
		window.open(url, '_blank', 'noopener,noreferrer');
	}

	private focusMainHeading(): void {
		const main = this.mainRef.nativeElement.querySelector('#main-content');

		if (!(main instanceof HTMLElement)) {
			return;
		}

		const heading = main.querySelector('h1');

		if (heading instanceof HTMLElement) {
			if (!heading.hasAttribute('tabindex')) {
				heading.setAttribute('tabindex', '-1');
			}

			heading.focus({ preventScroll: true });
		}
	}
}
