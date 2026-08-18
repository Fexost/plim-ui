import { Component, input } from '@angular/core';

export type AvatarSize = 'sm' | 'md' | 'lg';

@Component({
	selector: 'plim-avatar',
	templateUrl: './avatar.html',
	styleUrl: './avatar.scss',
	host: {
		'[class.avatar--sm]': 'size() === "sm"',
		'[class.avatar--md]': 'size() === "md"',
		'[class.avatar--lg]': 'size() === "lg"',
	},
})
export class Avatar {
	public readonly size = input<AvatarSize>('md');
	public readonly src = input<string>();
	public readonly alt = input('');
}
