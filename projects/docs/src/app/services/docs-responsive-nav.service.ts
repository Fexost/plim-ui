import { isPlatformBrowser } from '@angular/common';
import {
	afterNextRender,
	computed,
	DestroyRef,
	inject,
	Injectable,
	PLATFORM_ID,
	signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

const MOBILE_NAV_QUERY = '(max-width: 960px)';

@Injectable({ providedIn: 'root' })
export class DocsResponsiveNavService {
	private readonly destroyRef = inject(DestroyRef);
	private readonly platformId = inject(PLATFORM_ID);
	private readonly router = inject(Router);

	public readonly isMobile = signal(false);
	public readonly navOpen = signal(true);

	public readonly sidebarMode = computed(() => (this.isMobile() ? 'overlay' : 'push'));

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

	public toggleNav(): void {
		this.navOpen.update((open) => !open);
	}

	public closeNav(): void {
		this.navOpen.set(false);
	}
}
