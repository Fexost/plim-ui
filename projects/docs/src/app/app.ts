import { Component, HostListener, inject } from '@angular/core';

import { DocsCommandPalette } from './components/docs-command-palette/docs-command-palette';
import { DocsShell } from './components/docs-shell/docs-shell';
import { DocsTopbar } from './components/docs-topbar/docs-topbar';
import { DocsCommandPaletteService } from './services/docs-command-palette.service';

@Component({
	selector: 'app-root',
	imports: [DocsTopbar, DocsShell, DocsCommandPalette],
	templateUrl: './app.html',
	styleUrl: './app.scss',
})
export class App {
	private readonly commandPalette = inject(DocsCommandPaletteService);

	@HostListener('document:keydown', ['$event'])
	protected onDocumentKeydown(event: KeyboardEvent): void {
		if (!(event.ctrlKey || event.metaKey) || event.key.toLowerCase() !== 'k') {
			return;
		}

		const target = event.target;

		if (
			target instanceof HTMLElement &&
			(target.isContentEditable || target.closest('input, textarea, select'))
		) {
			return;
		}

		event.preventDefault();
		this.commandPalette.toggle();
	}
}
