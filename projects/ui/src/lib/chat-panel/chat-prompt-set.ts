import { Component, input } from '@angular/core';

@Component({
	selector: 'plim-chat-prompt-set',
	host: {
		class: 'plim-chat-prompt-set',
		role: 'group',
		'[attr.aria-label]': 'ariaLabel() ?? null',
	},
	templateUrl: './chat-prompt-set.html',
	styleUrl: './chat-prompt-set.scss',
})
export class ChatPromptSet {
	public readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
}
