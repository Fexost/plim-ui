import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { effect, inject, Injectable, PLATFORM_ID, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'plim-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
	private readonly document = inject(DOCUMENT);
	private readonly platformId = inject(PLATFORM_ID);

	public readonly theme = signal<Theme>(this.readStoredTheme());

	constructor() {
		effect(() => {
			this.applyTheme(this.theme());
		});
	}

	public toggle(): void {
		this.theme.update((current) => (current === 'dark' ? 'light' : 'dark'));
	}

	private applyTheme(theme: Theme): void {
		if (!isPlatformBrowser(this.platformId)) {
			return;
		}

		const root = this.document.documentElement;

		if (theme === 'light') {
			root.setAttribute('data-theme', 'light');
		} else {
			root.removeAttribute('data-theme');
		}

		localStorage.setItem(STORAGE_KEY, theme);
	}

	private readStoredTheme(): Theme {
		if (!isPlatformBrowser(this.platformId)) {
			return 'dark';
		}

		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored === 'light' || stored === 'dark') {
			return stored;
		}

		return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
	}
}
