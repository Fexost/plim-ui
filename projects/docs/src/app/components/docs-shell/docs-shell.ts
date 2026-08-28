import { AfterViewInit, Component, ElementRef, inject, OnDestroy } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import { Sidebar } from 'plim-ui';

import { DocsNav } from '../docs-nav/docs-nav';
import { DocsResponsiveNavService } from '../../services/docs-responsive-nav.service';
@Component({
	selector: 'app-docs-shell',
	imports: [RouterOutlet, Sidebar, DocsNav],
	templateUrl: './docs-shell.html',
	styleUrl: './docs-shell.scss',
})
export class DocsShell implements AfterViewInit, OnDestroy {
	private readonly router = inject(Router);
	private readonly mainRef = inject(ElementRef<HTMLElement>);
	private navigationSubscription?: Subscription;

	protected readonly nav = inject(DocsResponsiveNavService);

	public ngAfterViewInit(): void {
		this.navigationSubscription = this.router.events
			.pipe(filter((event) => event instanceof NavigationEnd))
			.subscribe(() => this.focusMainHeading());
	}

	public ngOnDestroy(): void {
		this.navigationSubscription?.unsubscribe();
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
