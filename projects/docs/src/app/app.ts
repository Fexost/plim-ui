import { isPlatformBrowser } from '@angular/common';
import {
	afterNextRender,
	Component,
	computed,
	DestroyRef,
	inject,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { Badge, Button, Card, Header, Sidebar } from 'plim-ui';

import { DocsNav } from './components/docs-nav/docs-nav';
import { DOCS_HOME } from './docs-nav.config';
import { ThemeService } from './services/theme.service';

const MOBILE_NAV_QUERY = '(max-width: 960px)';

@Component({
	selector: 'app-root',
	imports: [RouterOutlet, RouterLink, Badge, Button, Card, Header, Sidebar, DocsNav],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	private readonly destroyRef = inject(DestroyRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly router = inject(Router);

	protected readonly theme = inject(ThemeService);
	protected readonly DOCS_HOME = DOCS_HOME;

	protected readonly isMobile = signal(false);
	protected readonly navOpen = signal(true);

	protected readonly sidebarMode = computed(() => (this.isMobile() ? 'overlay' : 'push'));

	constructor() {
		this.router.events
			.pipe(
				filter((event) => event instanceof NavigationEnd),
				takeUntilDestroyed(this.destroyRef),
			)
			.subscribe(() => {
				if (this.isMobile()) {
					this.navOpen.set(false);
				}
			});

		afterNextRender(() => {
			if (!isPlatformBrowser(this.platformId)) {
				return;
			}

			const mediaQuery = window.matchMedia(MOBILE_NAV_QUERY);
			const syncViewport = (): void => {
				const mobile = mediaQuery.matches;
				this.isMobile.set(mobile);
				this.navOpen.set(!mobile);
			};

			syncViewport();
			mediaQuery.addEventListener('change', syncViewport);
			this.destroyRef.onDestroy(() => mediaQuery.removeEventListener('change', syncViewport));
		});
	}

	protected toggleNav(): void {
		this.navOpen.update((open) => !open);
	}

	protected closeNav(): void {
		this.navOpen.set(false);
	}
}
