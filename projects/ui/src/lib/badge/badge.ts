import { Component, input } from '@angular/core';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

@Component({
	selector: 'plim-badge',
	templateUrl: './badge.html',
	styleUrl: './badge.scss',
	host: {
		class: 'plim-badge',
		'[class.plim-badge--default]': 'variant() === "default"',
		'[class.plim-badge--primary]': 'variant() === "primary"',
		'[class.plim-badge--success]': 'variant() === "success"',
		'[class.plim-badge--warning]': 'variant() === "warning"',
		'[class.plim-badge--danger]': 'variant() === "danger"',
	},
})
export class Badge {
	public readonly variant = input<BadgeVariant>('default');
}
