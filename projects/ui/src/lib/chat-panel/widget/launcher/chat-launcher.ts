import { booleanAttribute, Component, input, output } from '@angular/core';

@Component({
	selector: 'plim-chat-launcher',
	host: {
		class: 'plim-chat-launcher',
	},
	templateUrl: './chat-launcher.html',
	styleUrl: './chat-launcher.scss',
})
export class ChatLauncher {
	public readonly label = input('Chat');
	public readonly ariaLabel = input<string | undefined>(undefined, { alias: 'aria-label' });
	public readonly expanded = input(false, { transform: booleanAttribute });
	public readonly disabled = input(false, { transform: booleanAttribute });

	public readonly activated = output<void>();

	protected onActivate(): void {
		if (this.disabled()) {
			return;
		}

		this.activated.emit();
	}
}
