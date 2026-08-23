import { booleanAttribute, Component, input, output } from '@angular/core';

@Component({
	selector: 'plim-chat-prompt',
	host: {
		class: 'plim-chat-prompt',
	},
	templateUrl: './chat-prompt.html',
	styleUrl: './chat-prompt.scss',
})
export class ChatPrompt {
	public readonly disabled = input(false, { transform: booleanAttribute });
	public readonly selected = output<void>();

	protected onSelect(): void {
		if (this.disabled()) {
			return;
		}

		this.selected.emit();
	}
}
