import { Directive, model } from '@angular/core';

export type SortDirection = 'asc' | 'desc' | '';

@Directive({
	selector: '[plimSort]',
	host: {
		class: 'plim-sort',
	},
})
export class Sort {
	public readonly active = model('');
	public readonly direction = model<SortDirection>('');

	public sort(columnId: string): void {
		if (this.active() !== columnId) {
			this.active.set(columnId);
			this.direction.set('asc');
			return;
		}

		switch (this.direction()) {
			case 'asc':
				this.direction.set('desc');
				break;
			case 'desc':
				this.active.set('');
				this.direction.set('');
				break;
			default:
				this.direction.set('asc');
				break;
		}
	}
}
