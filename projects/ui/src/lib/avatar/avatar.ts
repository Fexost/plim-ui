import { Component, input } from '@angular/core';

export type AvatarSize = 'sm' | 'md' | 'lg';

@Component({
	selector: 'plim-avatar',
	host: {
		class: 'plim-avatar',
		'[class.plim-avatar--sm]': 'size() === "sm"',
		'[class.plim-avatar--md]': 'size() === "md"',
		'[class.plim-avatar--lg]': 'size() === "lg"',
	},
	templateUrl: './avatar.html',
	styleUrl: './avatar.scss',
})
export class Avatar {
	public readonly size = input<AvatarSize>('md');
	public readonly src = input<string>();
	public readonly alt = input('');
}
