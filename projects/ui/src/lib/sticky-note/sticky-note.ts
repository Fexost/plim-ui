import { booleanAttribute, Component, input, output } from '@angular/core';

export type StickyNoteVariant = 'default' | 'primary' | 'warning' | 'success';

@Component({
	selector: 'plim-sticky-note',
	host: {
		class: 'plim-sticky-note',
		'[class.plim-sticky-note--primary]': 'variant() === "primary"',
		'[class.plim-sticky-note--warning]': 'variant() === "warning"',
		'[class.plim-sticky-note--success]': 'variant() === "success"',
	},
	templateUrl: './sticky-note.html',
	styleUrl: './sticky-note.scss',
})
export class StickyNote {
	public readonly variant = input<StickyNoteVariant>('default');
	public readonly removable = input(false, { transform: booleanAttribute });
	public readonly removeLabel = input('Remove note');

	public readonly removed = output<void>();

	protected remove(event: Event): void {
		event.stopPropagation();
		this.removed.emit();
	}
}
