import { DOCUMENT } from '@angular/common';
import { DestroyRef, inject, Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocsCommandPaletteService {
	private readonly destroyRef = inject(DestroyRef);
	private readonly document = inject(DOCUMENT);

	public readonly open = signal(false);

	constructor() {
		const handler = (event: KeyboardEvent): void => this.onDocumentKeydown(event);
		this.document.addEventListener('keydown', handler);
		this.destroyRef.onDestroy(() => this.document.removeEventListener('keydown', handler));
	}

	public toggle(): void {
		this.open.update((isOpen) => !isOpen);
	}

	public close(): void {
		this.open.set(false);
	}

	private onDocumentKeydown(event: KeyboardEvent): void {
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
		this.toggle();
	}
}
