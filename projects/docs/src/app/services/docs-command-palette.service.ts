import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DocsCommandPaletteService {
	public readonly open = signal(false);
	public readonly query = signal('');

	public toggle(): void {
		if (this.open()) {
			this.close();
			return;
		}

		this.open.set(true);
	}

	public close(): void {
		this.open.set(false);
		this.query.set('');
	}
}
