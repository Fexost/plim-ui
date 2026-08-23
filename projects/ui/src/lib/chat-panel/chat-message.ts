import { Component, input } from '@angular/core';

export type ChatMessageRole = 'user' | 'assistant';

@Component({
	selector: 'plim-chat-message',
	host: {
		class: 'plim-chat-message',
		'[class.plim-chat-message--user]': 'role() === "user"',
		'[class.plim-chat-message--assistant]': 'role() === "assistant"',
	},
	templateUrl: './chat-message.html',
	styleUrl: './chat-message.scss',
})
export class ChatMessage {
	public readonly role = input<ChatMessageRole>('assistant');
}
