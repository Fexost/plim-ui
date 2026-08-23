import { Component, computed, input, model, output } from '@angular/core';

import { Button } from '../button/button';
import { Input } from '../input/input';

let nextComposerId = 0;

@Component({
	selector: 'plim-chat-composer',
	imports: [Button, Input],
	host: {
		class: 'plim-chat-composer',
	},
	templateUrl: './chat-composer.html',
	styleUrl: './chat-composer.scss',
})
export class ChatComposer {
	protected readonly inputId = `plim-chat-composer-${nextComposerId++}`;

	public readonly label = input('Your question');
	public readonly placeholder = input('');
	public readonly sendLabel = input('Send');
	public readonly value = model('');

	public readonly submitted = output<string>();

	protected readonly canSend = computed(() => this.value().trim().length > 0);

	protected onInput(event: Event): void {
		const target = event.target as HTMLInputElement;
		this.value.set(target.value);
	}

	protected onKeydown(event: KeyboardEvent): void {
		if (event.key !== 'Enter') {
			return;
		}

		event.preventDefault();
		this.submit();
	}

	protected submit(): void {
		const text = this.value().trim();
		if (!text) {
			return;
		}

		this.submitted.emit(text);
		this.value.set('');
	}
}
